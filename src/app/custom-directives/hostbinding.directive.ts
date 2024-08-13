import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostbinding]',
})
export class HostbindingDirective {
  constructor() {}

  // HostBinding

  // @HostBinding('class.coloredText') isBinding = false;
  // @Input() set appHostbinding(condition: boolean) {
  //   this.isBinding = condition;
  // }

  // Host binding with host listener
  @HostBinding('style.backgroundColor') backgroundColor: string = 'blue';
  @HostBinding('style.color') color: string = 'white';

  @HostListener('mouseenter') onMouse() {
    this.backgroundColor = 'transparent';
    this.color = 'red';
  }

  @HostListener('mouseout') mouseOut() {
    this.backgroundColor = 'blue';
    this.color = 'white';
  }
}
