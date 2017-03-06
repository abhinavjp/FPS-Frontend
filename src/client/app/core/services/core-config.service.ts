import { Injectable } from '@angular/core';

@Injectable()
export class CoreConfigService {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:5000/api/';
    }
}
