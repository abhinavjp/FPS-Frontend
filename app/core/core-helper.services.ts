import { Injectable } from '@angular/core';

@Injectable()
export class CoreHelperService {
    constructor() { }

    isNullOrUndefined<T>(tObj: T) {
        return tObj === null || tObj === undefined;
    }

    isStringNullOrEmpty(text: string) {
        return this.isNullOrUndefined(text) || text === '';
    }

    isStringNullOrWhitespace(text: string) {
        return this.isStringNullOrEmpty(text) || text.trim() === '';
    }

    isArrayEmpty<T>(tArray: T[]) {
        return this.isNullOrUndefined(tArray) || tArray.length <= 0;
    }
}
