import { NavModel } from '../../core.models';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    nav:NavModel[] = [
        {
            link: '/resident/list',
            name: 'Resident',
            exact: false
        },{
            link: '/resident/list',
            name: 'Apartment',
            exact: false
        }
    ];
    constructor() { }

    ngOnInit() { }
}
