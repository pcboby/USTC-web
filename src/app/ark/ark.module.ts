import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArkMapComponent } from './components';
import { ArkMapService } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ArkControlAlphaComponent, ArkControlCoordinateComponent } from './controls';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  NgZorroAntdModule,
];
const interceptors = [];
const components = [
  ArkMapComponent
];
const controls = [
  ArkControlAlphaComponent,
  ArkControlCoordinateComponent
];
const directives = [];
const pipes = [];
const services = [
  ArkMapService
];
const apis = [];

@NgModule({
  imports: [...modules],
  declarations: [...directives, ...components, ...controls, ...pipes],
  exports: [...directives, ...components, ...controls, ...pipes],
  providers: [...interceptors, ...services, ...apis, ...pipes],
  entryComponents: [...components, ...controls]
})
export class ArkModule { }
