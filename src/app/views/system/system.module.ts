import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { CoreModule } from 'src/app/core/core.module';
import { SystemRoutes } from './system.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {
  SystemOrganComponent,
  SystemOrganDepartmentComponent,
  SystemOrganUserComponent,
  SystemAuthorityComponent,
  SystemLogComponent,
  SystemLogDataComponent,
  SystemLogMapComponent,
  SystemLogSysComponent,
  SystemLogMainComponent,
  SystemLogDataSearchComponent
} from './components';

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
  SystemOrganDepartmentComponent,
  SystemOrganUserComponent,
  SystemAuthorityComponent,
  SystemLogComponent,
  SystemLogDataComponent,
  SystemLogDataSearchComponent,
  SystemLogMapComponent,
  SystemLogSysComponent,
  SystemLogMainComponent
];

const services = [];

@NgModule({
  imports: [...modules],
  providers: [...services],
  declarations: [...components],
  entryComponents: [...components]
})
export class SystemModule {}
