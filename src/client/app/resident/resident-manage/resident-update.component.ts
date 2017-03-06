import { CoreHelperService } from '../../core/services/core-helper.services';
import { ToasterService } from '../../core/services/toaster.service';
import { ResidentService } from '../resident.service';
import { ResidentModel } from '../resident.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'resident-update-component',
    templateUrl: 'resident-manage.component.html'
})
export class ResidentUpdateComponent implements OnInit, OnDestroy {
    residentManageForm: FormGroup;
    isNewResident: boolean;
    private _resident: ResidentModel;
    private _updateSubscription: Subscription;
    constructor(private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private residentService: ResidentService,
        private toastr: ToasterService,
        private helper: CoreHelperService) { }

    ngOnInit() {
        this.isNewResident = false;
        this.residentManageForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            middleName: [],
            lastName: ['', Validators.required],
            contactNumber1: [],
            contactNumber2: [],
            contactNumber3: [],
            membersLiving: ['', Validators.required],
            livingStart: ['', Validators.required],
            livingEnd: [],
            onRent: []
        });
        this._resident = this.route.snapshot.data['residentData'];
        this.residentManageForm.patchValue(this._resident);
    }
    ngOnDestroy(): void {
        this._updateSubscription.unsubscribe();
    }
}
