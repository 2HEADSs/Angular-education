import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'data-test', '123')

  }

}
