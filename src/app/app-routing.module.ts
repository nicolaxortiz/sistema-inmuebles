import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyReferenceComponent } from './PropertyReference/propertyreference.component';
import { PropertyfilterComponent } from './PropertyFilter/propertyfilter.component';
import { CreatepropertyComponent } from './CreateProperty/createproperty.component';

const routes: Routes = [
  {path: 'property', component: PropertyReferenceComponent},
  {path: 'properties', component: PropertyfilterComponent},
  {path: 'create', component: CreatepropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
