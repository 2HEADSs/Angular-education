import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective {

  constructor(
    private elementRef: ElementRef
  ) { 
    console.log(elementRef);
    
  }

}
