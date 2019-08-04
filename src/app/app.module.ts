import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {StorageServiceModule} from 'angular-webstorage-service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
import { ReverseStringComponent } from './components/reverse-string/reverse-string.component';
import { ArraySortComponent } from './components/array-sort/array-sort.component';
import { TwoNumberSumComponent } from './components/two-number-sum/two-number-sum.component';
import { EmptyAnArrayComponent } from './components/empty-an-array/empty-an-array.component';
import { ArrayLargestSumComponent } from './components/array-largest-sum/array-largest-sum.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    AdminComponent,
    RegisterComponent,
    ReverseStringComponent,
    ArraySortComponent,
    TwoNumberSumComponent,
    EmptyAnArrayComponent,
    ArrayLargestSumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
