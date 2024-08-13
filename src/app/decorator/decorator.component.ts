import { Component, OnInit } from '@angular/core';
import { DecoratorService } from './decorator.service';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit{
  apiData:any;
  outputData:any;
  isInputComponent: boolean = false;
  isOututComponent: boolean = false;

  constructor(private service: DecoratorService) {}

  ngOnInit(): void {
    this.getInpData();
  }

  isInput():void {
    this.isInputComponent = !this.isInputComponent;
    this.isOututComponent = false;
  }

  isOutput():void {
    this.isOututComponent = !this.isOututComponent;
    this.isInputComponent = false;
  }

  getInpData(): void {
    this.service.inputApi().subscribe((res:any)=>{
      this.apiData = res;
      console.log(res);
    })
  }

  receiveOutputData(data:any): void {
    this.outputData = data;
    console.log('output form decorator component', this.outputData);
    
  }


}
