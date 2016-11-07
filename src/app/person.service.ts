import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
    constructor() { }

    /** 目前登入者的 ldap 帳號 */
    account: string;

}
