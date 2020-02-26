import { MapRoutes } from './map.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CoreModule,
    CommonModule,
    MapRoutes
  ],
  declarations: [MapComponent]
})
export class MapModule { }
