import { Component, EventEmitter, Output } from '@angular/core';
import { DecoratorService } from '../decorator.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  outputData: any;
  constructor(private servie: DecoratorService) {}

  @Output() dataEvent: EventEmitter<any> = new EventEmitter<any>();

  getOutputData(): void {
    this.servie.outputApi().subscribe((res:any)=>{
      this.dataEvent.emit(res);
      console.log(res);
    })
  }
}
