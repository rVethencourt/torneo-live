import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

	private _token: string;

	constructor() {
	}

	getToken() {
		return this._token;
	}

	setToken(value: string) {
		this.token = value;
	}

}