import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnInit{

  constructor(private ele: ElementRef) { }

  ngOnInit(): void {
    this.ele.nativeElement.style.color = 'red';
    this.ele.nativeElement.style.backgroundColor = 'black'
  }



}
