import { CoreHelperService } from '../../core/services/core-helper.services';
import { ToasterService } from '../../core/services/toaster.service';
import { ResidentService } from '../resident.service';
import { ResidentModel } from '../resident.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'resident-create-component',
    templateUrl: 'resident-manage.component.html'
})
export class ResidentCreateComponent implements OnInit {
    residentManageForm: FormGroup;
    isNewResident: boolean;
    private _resident: ResidentModel;
    private _createSubscription: Subscription;
    constructor(private router: Router,
        private formBuilder: FormBuilder,
        private residentService: ResidentService,
        private toastr: ToasterService,
        private helper: CoreHelperService) { }

    ngOnInit() {
        this.isNewResident = true;
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
    }

    saveResident() {
        if (!this.helper.validateForm(this.residentManageForm)) {
            let residentToSave = Object.assign({}, this._resident, this.residentManageForm.value);
            this._createSubscription = this.residentService.createResident(residentToSave).subscribe(response => {
                this.toastr.success('Resident Successfully Saved!');
                this.router.navigate(['resident/list']);
            });
        }
    }
}