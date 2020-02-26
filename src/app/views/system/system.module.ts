import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { CoreModule } from 'src/app/core/core.module';
import { SystemRoutes } from './system.routing';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    SystemRoutes
  ],
  declarations: [SystemComponent]
})
export class SystemModule { }
