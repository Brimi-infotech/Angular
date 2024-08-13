import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]',
})
export class StructuralDirective {
  constructor(
    private templet: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  @Input() set appStructural(condition: boolean) {
    if (condition) {
      this.view.createEmbeddedView(this.templet);
    } else {
      this.view.clear();
    }
  }
}
