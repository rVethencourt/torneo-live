import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { RequestService } from '../servicios/request.service';

/**
 * The access to accounts endpoint
 * @class
 */
@Injectable()
export class GamesStore {
    private path: string;

    constructor (private _requestService: RequestService) {
    	this.path = 'tournament-games/';
    }

    show(gameId: number) {
    	let subject: Subject<any> = new Subject();
    	
    	this._requestService.get(this.path, [], null).subscribe(
    	    (data) => {
    	        subject.next(data);
    	    },
            (error) => {
    	        subject.error(error);
    	    }
    	);

    	return subject.asObservable();
    }
}