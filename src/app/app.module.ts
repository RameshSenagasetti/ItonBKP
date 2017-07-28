import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from './common/common.module';
import { TechnicalServicesModule } from './technicalservices/technicalservices.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ApphttpclientService } from './apphttpclient.service';

import { AppRouting } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting,
    CommonModule,
    TechnicalServicesModule
  ],
  providers: [ApphttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
