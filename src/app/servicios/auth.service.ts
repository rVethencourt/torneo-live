import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

	private _token: string;
	changed = new Subject<string>();

	constructor() {
	}

	getToken() {
		return this._token;
	}

	setToken(value: string) {
		this._token = value;
		this.changed.next(this._token.slice());	
	}

}