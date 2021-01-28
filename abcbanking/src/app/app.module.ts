import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './services/user-service.service';
import { ShowUserComponent } from './show-user/show-user.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ShowUserComponent,
    ShowTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [SignupComponent]
})
export class AppModule { }
