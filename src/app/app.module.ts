import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { InputComponent } from './decorator/input/input.component';
import { OutputComponent } from './decorator/output/output.component';
import { DataInterceptor } from './data.interceptor';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { AttributeDirective } from './custom-directives/attribute.directive';
import { StructuralDirective } from './custom-directives/structural.directive';
import { HostlistenerDirective } from './custom-directives/hostlistener.directive';
import { HostbindingDirective } from './custom-directives/hostbinding.directive';

@NgModule({
  declarations: [
    AppComponent,
    DecoratorComponent,
    InputComponent,
    OutputComponent,
    CustomDirectivesComponent,
    AttributeDirective,
    StructuralDirective,
    HostlistenerDirective,
    HostbindingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
