import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective {

  constructor(private ele:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.ele.nativeElement,'changeButton')
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.removeClass(this.ele.nativeElement, 'changeButton')
  }

}
