import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective implements OnDestroy {

  unsub: (() => void) | undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.unsub = this.renderer.listen(this.elementRef.nativeElement, 'mouseover', this.mouseoverHandler)
    this.unsub = this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', this.mouseLeaveHandler)
    // this.renderer.setAttribute(this.elementRef.nativeElement, 'data-test', '123')

  }

  mouseoverHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red')
  }
  mouseLeaveHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'initial')
  }

  ngOnDestroy(): void {
    this.unsub?.call(undefined)
  }

}
