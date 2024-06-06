import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { PropertyReferenceComponent } from './PropertyReference/propertyreference.component';
import { PropertyfilterComponent } from './PropertyFilter/propertyfilter.component';
import { CreatepropertyComponent } from './CreateProperty/createproperty.component';
import { UpdatevisitComponent } from './UpdateVisit/updatevisit.component';
import { FooterComponent } from './Footer/footer.component';
import { LoginComponent } from './Login/login.component';
import { AuthInterceptor } from './authInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyReferenceComponent,
    PropertyfilterComponent,
    CreatepropertyComponent,
    UpdatevisitComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
