import { Directive, Input } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appMaxCount]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: MaxCountDirective,
            multi: true
        }
    ]
})
export class MaxCountDirective implements Validator {

    @Input() appMaxCount: number | undefined;

    constructor() { }
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if(this.appMaxCount === undefined || control.value <=this.appMaxCount) { return null}
        return {
            appMaxCount: this.appMaxCount
        }
    }
    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error('Method not implemented.');
    // }

}
