import { Component, OnInit } from '@angular/core';
import { DirectiveService } from './directive.service';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.scss'],
})
export class CustomDirectivesComponent implements OnInit{
  apiData: any;
  isShow: boolean = false;

  constructor(private service: DirectiveService) {};

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(): void {
    this.service.getData().subscribe((res: any) => {
      this.apiData = res;
      console.log(res);
    });
  }

  onClick() {
    this.isShow = !this.isShow;
  }
}
