import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ResidentModel } from '../resident.model';
import { ResidentService } from '../resident.service';

@Injectable()
export class ResidentUpdateResolver implements Resolve<ResidentModel> {
    constructor(private residentService: ResidentService) { }

    resolve(route: ActivatedRouteSnapshot) {
       return this.residentService.getResidentById(route.params["residentId"]);
    }
}
