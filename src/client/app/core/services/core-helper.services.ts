import { ValidatorError } from '../core.models';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class CoreHelperService {
    constructor(private ngbModal: NgbModal) { }

    isNullOrUndefined<T>(tObj: T) {
        return tObj === null || tObj === undefined;
    }

    isStringNullOrEmpty(text: string) {
        return this.isNullOrUndefined(text) || text === '';
    }

    isStringNullOrWhitespace(text: string) {
        return this.isStringNullOrEmpty(text) || text.trim() === '';
    }

    isArrayEmpty<T>(tArray: T[]) {
        return this.isNullOrUndefined(tArray) || tArray.length <= 0;
    }

    openErrorDialog(errorMessage: string) {
        const modalRef = this.ngbModal.open(ErrorDialogComponent);
        modalRef.componentInstance.message = errorMessage;
    }

    validateForm(formGroup: FormGroup): boolean {
        if (this.isNullOrUndefined(formGroup) || formGroup.valid) {
            return true;
        }
        let formControls = formGroup.controls;
        let formControlNames = Object.keys(formControls);
        let errorMessagesForControl: string[] = [];
        for (let i = 0; i < formControlNames.length; i++) {
            let formControl = formControls[formControlNames[i]];
            if (formControl.invalid) {
                errorMessagesForControl.push(
                    ...this.getErrors(formControl.errors as ValidatorError,
                        formControlNames[i]));
            }
        }
        return false;
    }

    private getErrors(errors: ValidatorError, fieldName: string) {
        let errorMessagesForControl: string[] = [];
        if (!this.isNullOrUndefined(errors)) {
            if (!this.isNullOrUndefined(errors.required) && errors.required) {
                errorMessagesForControl.push(fieldName + ' is required');
            }
            if (!this.isNullOrUndefined(errors.maxlength) && (errors.maxlength.actualLength >= errors.maxlength.requiredLength)) {
                errorMessagesForControl.push(fieldName + ' exceeds max limit of ' + errors.maxlength.requiredLength + ' characters');
            }
            if (!this.isNullOrUndefined(errors.minlength) && (errors.minlength.actualLength <= errors.minlength.requiredLength)) {
                errorMessagesForControl.push(fieldName + ' doesn\'t meet min limit of ' + errors.minlength.requiredLength + ' characters');
            }
        }
        return errorMessagesForControl;
    }
}
