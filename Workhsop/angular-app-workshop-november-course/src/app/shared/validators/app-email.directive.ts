import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appAppEmail]'
})
export class AppEmailDirective implements OnChanges, Validator {

  @Input() appEmail: string[] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    changes[]
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return appEmailValidator(this.appEmail)
  }


}
