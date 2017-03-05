import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'resident-update-component',
    templateUrl: 'resident-manage.component.html'
})
export class ResidentUpdateComponent implements OnInit, OnDestroy {
    routeSubscription: Subscription;
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.routeSubscription = this.route
            .params
            .subscribe(params => {
                console.log(params['residentId']);
            });
    }
    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
    }
}
