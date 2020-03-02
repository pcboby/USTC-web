import { NgxEchartsModule } from 'ngx-echarts';
import { PanelBoxComponent } from './components/panel/panel-box.component';
import { GroupUserComponent } from './controls/group-user/group-user.component';
import { NavigationService } from './services/navigation.service';

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import {
  ErrorComponent,
  SpinnerComponent,
  HeaderComponent,
  HeaderMiniComponent,
  SilderComponent,
  WraperComponent,
  FooterComponent,
  FooterMiniComponent,
  LayoutComponent,
  LayoutMiniComponent,
  PanelComponent,
  PanelCardComponent,
  MenuComponent,
  MenuQuickComponent,
  MenuControlComponent,
  MenuSubComponent
} from './components';
import { SpinnerService } from './services';
import {
  TimingIntercepterService,
  BaseIntercepterService,
  LoaderIntercepterService
} from './interceptors';
import {
  GroupTextComponent,
  GroupChartPointComponent,
  GroupHelpComponent
} from './controls';
import { ArkModule } from '../ark/ark.module';

const modules = [
  ArkModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  CommonModule,
  HttpClientModule,
  NgZorroAntdModule,
  NgxEchartsModule
];
const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderIntercepterService,
    multi: true,
    deps: [SpinnerService]
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TimingIntercepterService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseIntercepterService,
    multi: true
  }
];
const components = [
  ErrorComponent,
  SpinnerComponent,
  HeaderComponent,
  HeaderMiniComponent,
  SilderComponent,
  WraperComponent,
  MenuComponent,
  MenuSubComponent,
  MenuQuickComponent,
  MenuControlComponent,
  FooterComponent,
  FooterMiniComponent,
  LayoutComponent,
  LayoutMiniComponent,
  PanelComponent,
  PanelCardComponent,
  PanelBoxComponent
];
const controls = [
  GroupHelpComponent,
  GroupUserComponent,
  GroupTextComponent,
  GroupChartPointComponent
];
const directives = [];
const pipes = [];
const services = [
  { provide: NZ_I18N, useValue: zh_CN },
  SpinnerService,
  NavigationService
];
const apis = [];

registerLocaleData(zh);

@NgModule({
  imports: [...modules],
  declarations: [...directives, ...components, ...controls, ...pipes],
  exports: [...directives, ...components, ...controls, ...pipes],
  providers: [...interceptors, ...services, ...apis, ...pipes],
  entryComponents: [...components, ...controls]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // if (parentModule) {
    //   throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    // }
  }
}
