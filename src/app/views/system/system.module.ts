import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { CoreModule } from 'src/app/core/core.module';
import { SystemRoutes } from './system.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SystemOrganComponent, SystemAuthorityComponent, SystemLogComponent } from './components';

const modules = [
  CoreModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
  SystemRoutes
];

const components = [
  SystemComponent,
  SystemOrganComponent,
  SystemAuthorityComponent,
  SystemLogComponent
];

const services = [];

@NgModule({
  imports: [
    ...modules
  ],
  providers: [
    ...services
  ],
  declarations: [
    ...components
  ],
  entryComponents: [
    ...components
  ]
})
export class SystemModule { }
