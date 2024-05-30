import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { PropertyReferenceComponent } from './PropertyReference/propertyreference.component';
import { PropertyfilterComponent } from './PropertyFilter/propertyfilter.component';
import { CreatepropertyComponent } from './CreateProperty/createproperty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyReferenceComponent,
    PropertyfilterComponent,
    CreatepropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
