import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { RequestService } from '../servicios/request.service';

/**
 * The access to accounts endpoint
 * @class
 */
@Injectable()
export class LoginStore {
    private path: string;

    constructor (private _requestService: RequestService) {
    	this.path = 'login';
    }

    login(user: any) {
    	let subject: Subject<any> = new Subject();
    	
    	this._requestService.post(this.path, user, [], null).subscribe(
    	    (data) => {
    	        subject.next(data);
    	    }, (error) => {
    	        subject.error(error);
    	    }
    	);

    	return subject.asObservable();
    }
}