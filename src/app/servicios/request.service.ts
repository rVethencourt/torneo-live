import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';

/**
 * A service to make http requests (GET, POST, PUT and DELETE) to the transactional server
 * @class
 */
@Injectable()
export class RequestService {

    _headers: HttpHeaders;
    private _baseUrl: string;

    constructor(private _http: HttpClient, private authService: AuthService) {
        this._headers = new HttpHeaders();
        this._headers = this._headers.set('Content-Type', 'application/json');
        this._headers = this._headers.set('Accept', 'application/json');
        this._baseUrl = 'https://padel-labx.herokuapp.com/api/';

        this.authService.changed.subscribe(
          (token: string) => {
              debugger
              this._headers = this._headers.set('Authorization', token);
          }
        );
    }

    get baseUrl() {
        return this._baseUrl;
    }

    /**
     * Function to make a GET request
     * 
     * @param {string} path Path of the get request in the transactional server
     * @param {Array< any >} keys The query strings in format { name: number|string, value: number|string }
     * @param {Headers} optionalHeaders The optional headers in the request
     */
    get(path: string, keys: Array<any>, optionalHeaders: HttpHeaders) : Observable< any > {
        let headers: HttpHeaders  = this._headers;
        let fullPath: string = `${this._baseUrl}${path}`;
        let keysString: string = this.buildQueryStrings( keys );
        fullPath += keysString;

        if ( optionalHeaders ) {
            headers.keys().forEach( function ( name ) {
                optionalHeaders = optionalHeaders.append( name, headers.get(name) );
            });
        }
        
        const selectedHeaders = ( optionalHeaders != null ) ? optionalHeaders : headers;
        return this._http.get( fullPath, { headers : selectedHeaders } ).pipe( map( res => { return JSON.parse(JSON.stringify(res)); } ) );
    }

    /**
     * Function to make a POST request
     * 
     * @param {string} path Path of the post request in the transactional server
     * @param {any} object Object to post 
     * @param {Array< any >} keys The query strings in format { name: number|string, value: number|string }
     */
    post( path: string, object: any, keys: Array< any >, optionalHeaders: HttpHeaders ): Observable< any > {
        let headers: HttpHeaders  = this._headers;
        let fullPath: string = `${this._baseUrl}${path}`;
        let keysString: string = this.buildQueryStrings( keys );
        fullPath += keysString;

        if ( optionalHeaders ) {
            headers.keys().forEach( function ( name ) {
                optionalHeaders = optionalHeaders.append( name, headers.get(name) );
            });
        }
        
        const selectedHeaders = ( optionalHeaders != null ) ? optionalHeaders : headers;
        return this._http.post( fullPath, object, { headers : selectedHeaders } ).pipe( map( res => { return JSON.parse(JSON.stringify(res)); } ) );
    }

    /**
     * Function to make a PUT request
     * 
     * @param {string} path Path of the put request in the transactional server
     * @param {any} object Object to put
     * @param {Array< any >} keys The query strings in format { name: number|string, value: number|string }
     */
    put( path: string, object: any, keys: Array< any >, optionalHeaders: HttpHeaders ): Observable< any > {
        let headers: HttpHeaders  = this._headers;
        let fullPath: string = `${this._baseUrl}${path}`;
        let keysString: string = this.buildQueryStrings( keys );
        fullPath += keysString;

        if ( optionalHeaders ) {
            headers.keys().forEach( function ( name ) {
                optionalHeaders = optionalHeaders.append( name, headers.get(name) );
            });
        }
        
        const selectedHeaders = ( optionalHeaders != null ) ? optionalHeaders : headers;
        return this._http.put( fullPath, object, { headers : selectedHeaders } ).pipe( map( res => { return JSON.parse(JSON.stringify(res)); } ) );
    }

    /**
     * Function to make a DELETE request
     * 
     * @param {string} path Path of the delete request in the transactional server
     * @param {Array< any >} keys The query strings in format { name: number|string, value: number|string }
     */
    delete( path: string, keys: Array< any >, optionalHeaders: HttpHeaders ): Observable< any > {
        let headers: HttpHeaders  = this._headers;
        let fullPath: string = `${this._baseUrl}${path}`;
        let keysString: string = this.buildQueryStrings( keys );
        fullPath += keysString;

        if ( optionalHeaders ) {
            headers.keys().forEach( function ( name ) {
                optionalHeaders = optionalHeaders.append( name, headers.get(name) );
            });
        }
        
        const selectedHeaders = ( optionalHeaders != null ) ? optionalHeaders : headers;
        return this._http.delete( fullPath, { headers : selectedHeaders } ).pipe( map( res => { return JSON.parse(JSON.stringify(res)); } ) );
    }

    /**
     * Function to construct the string of query strings for a request
     * 
     * @param {Array< any >} keys The query strings in format { name: number|string, value: number|string }
     */
    private buildQueryStrings ( keys: Array< any > ) {
        let keysString: string = '';

        for ( let index = 0; index < keys.length; index++ ) {
            const element = keys[ index ];
            let tempString = `${element.name}=${element.value}`;
            keysString = ( keysString === '' ) ? `?${tempString}` : `${keysString}&${tempString}`;
        }    
        return keysString;
    }
}