import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorComponent } from './decorator/decorator.component';
import { InputComponent } from './decorator/input/input.component';
import { OutputComponent } from './decorator/output/output.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { AttributeDirective } from './custom-directives/attribute.directive';
import { StructuralDirective } from './custom-directives/structural.directive';
import { HostlistenerDirective } from './custom-directives/hostlistener.directive';
import { HostbindingDirective } from './custom-directives/hostbinding.directive';

const routes: Routes = [
  {
    path: 'decorator',
    component: DecoratorComponent,
    children: [
      { path: 'input', component: InputComponent },
      { path: 'output', component: OutputComponent },
    ],
  },
  {
    path: 'custom-directive',
    component: CustomDirectivesComponent,
    children: [
      { path: 'attribute', component: AttributeDirective },
      { path: 'structural', component: StructuralDirective },
      { path: 'hostlistener', component: HostlistenerDirective },
      { path: 'hostbinding', component: HostbindingDirective },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
