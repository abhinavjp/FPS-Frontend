import { Component, OnInit } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'resident-component',
    template: `<router-outlet></router-outlet>`
})
export class ResidentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}