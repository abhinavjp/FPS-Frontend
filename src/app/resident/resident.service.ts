// Angular Imports
import { Injectable } from '@angular/core';
// User Imports
import { ResidentModel } from './resident.model';
import { CoreConfigService } from '../core/core-config.service';
import { CoreHttpService } from '../core/core-http.service';

@Injectable()
export class ResidentService {
    residentApiUrl: string;
    constructor(private coreConfigService: CoreConfigService, private coreHttpService: CoreHttpService) {
        this.residentApiUrl = this.coreConfigService.apiUrl + 'Resident/';
     }

     getResidentList(){
         let requestUrl = this.residentApiUrl + 'GetList';
         return this.coreHttpService.getRequest<ResidentModel[]>(requestUrl);
     }

     getResidentById(residentId: number) {
         let requestUrl = this.residentApiUrl + 'GetById';
         return this.coreHttpService.getRequestWithParameters<{id: number}, ResidentModel[]>(requestUrl, { id: residentId });
     }

     createResident(resident: ResidentModel) {
         let requestUrl = this.residentApiUrl + 'Create';
         return this.coreHttpService.postRequest(requestUrl, resident);
     }

     updateResident(resident: ResidentModel) {
         let requestUrl = this.residentApiUrl + 'Update';
         return this.coreHttpService.postRequest(requestUrl, resident);
     }

     deleteResident(residentId: number) {
         let requestUrl = this.residentApiUrl + 'Delete';
         return this.coreHttpService.postRequest(requestUrl, residentId);
     }
}
