import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ResidentModel } from '../resident.model';

@Component({
    moduleId: module.id,
    selector: 'resident-list',
    templateUrl: 'resident-list.component.html'
})
export class ResidentListComponent implements OnInit {
    residentList: ResidentModel[] = [];
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.residentList = <ResidentModel[]>this.route.snapshot.data['residentList'];
     }
}

