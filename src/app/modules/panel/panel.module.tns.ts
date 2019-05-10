import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [LoginPageComponent, ResetPassComponent, ForgotPassComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PanelModule { }
