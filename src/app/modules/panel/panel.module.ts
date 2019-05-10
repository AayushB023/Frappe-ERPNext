import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [LoginPageComponent, ResetPassComponent, ForgotPassComponent],
  imports: [
    CommonModule
  ]
})
export class PanelModule { }
