import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'error-dialog',
    templateUrl: 'error-dialog.component.html',
    styleUrls: ['error-dialog.component.css']
})
export class ErrorDialogComponent {
    private _message: string;
    @Input()
    set message(message: string) {
        this._message = message.indexOf('\n') < 0 ?
            message :
            '<ul><li>' + message.split('\n')
                .join('</li><li>') + '</li></ul>';
    }
    constructor() {

    }
}
