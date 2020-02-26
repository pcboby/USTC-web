import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { CoreModule } from 'src/app/core/core.module';
import { UiRoutes } from './ui.routing';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    UiRoutes
  ],
  declarations: [UiComponent]
})
export class UiModule { }
