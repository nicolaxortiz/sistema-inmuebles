import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyReferenceComponent } from './PropertyReference/propertyreference.component';
import { PropertyfilterComponent } from './PropertyFilter/propertyfilter.component';
import { CreatepropertyComponent } from './CreateProperty/createproperty.component';
import { UpdatevisitComponent } from './UpdateVisit/updatevisit.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  {path: 'property', component: PropertyReferenceComponent},
  {path: 'properties', component: PropertyfilterComponent},
  {path: 'create', component: CreatepropertyComponent},
  {path: 'visit', component: UpdatevisitComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
