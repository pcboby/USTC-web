import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CoreModule } from 'src/app/core/core.module';
import { LoginRoutes } from './login.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CoreModule,
    CommonModule,
    LoginRoutes
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
