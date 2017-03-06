import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CoreHttpService {

    constructor(private http: Http) { }

    getRequest<TResponse>(apiUrl: string): Observable<TResponse> {
        return this.http.get(apiUrl)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || 'Server Error'));
    }

    getRequestWithParameters<TParameterObject, TResponse>(apiUrl: string, parameterObject: TParameterObject): Observable<TResponse> {
        let requestParams = this.getParametersFromObject(parameterObject);
        let requestOptions = new RequestOptions({ search: requestParams });
        return this.http.get(apiUrl, requestOptions)
            .map((res: Response) => res.json())
            .catch(error => Observable.throw(error.json().error || 'Server Error'));
    }

    postRequest<TRequest, TResponse>(apiUrl: string, tRequest: TRequest): Observable<TResponse> {
        return this.http.post(apiUrl, tRequest)
            .map((res: Response) => res.json())
            .catch(error => Observable.throw(error.json().error || 'Server Error'));
    }

    private getParametersFromObject<TParameterObject>(parameterObject: TParameterObject): URLSearchParams {
        let requestParams = new URLSearchParams();
        let properties = Object.keys(parameterObject);

        for (let index in properties) {
            if (properties.hasOwnProperty(index)) {
                let key = properties[index];
                let value = parameterObject.hasOwnProperty(key) ? parameterObject[key] : null;
                if (value === null || value === undefined) {
                    continue;
                }
                requestParams.set(key, value);
            }
        }
        return requestParams;
    }
}
