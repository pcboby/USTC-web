import { MapRoutes } from './map.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AreasComponent, BuildingsComponent, SpacesComponent, PipelineComponent, PowerComponent } from './components';
import { NgxEchartsModule } from 'ngx-echarts';

const modules = [
  CoreModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
  NgxEchartsModule,
  MapRoutes
];

const components = [
  MapComponent,
  AreasComponent,
  BuildingsComponent,
  SpacesComponent,
  PipelineComponent,
  PowerComponent
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
export class MapModule { }
