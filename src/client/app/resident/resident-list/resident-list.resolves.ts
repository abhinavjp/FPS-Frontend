import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ResidentModel } from '../resident.model';
import { ResidentService } from '../resident.service';

@Injectable()
export class ResidentListResolver implements Resolve<ResidentModel[]> {
    constructor(private residentService: ResidentService) { }

    resolve() {
       return this.residentService.getResidentList();
    }
}
