import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './shaered/components/products/products.component';
import { SingleproductComponent } from './shaered/components/singleproduct/singleproduct.component';
import { NavbarComponent } from './shaered/components/navbar/navbar.component';
import { CreateproductComponent } from './shaered/components/createproduct/createproduct.component';
import { DashboardComponent } from './shaered/components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SingleproductComponent,
    NavbarComponent,
    CreateproductComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
