import { Component } from '@angular/core';
import { Property } from '../../service/property';
import { PropertyService } from '../../service/property.service';

@Component({
  selector: 'app-propertyfilter',
  templateUrl: './propertyfilter.component.html',
  styleUrls: ['./propertyfilter.component.css']
})
export class PropertyfilterComponent {
  filter!: string;
  properties: Property[]=[];

  constructor(private propertyService: PropertyService) {}

  handleSearch(): void {
    this.properties = [];
    this.getProperty(); 
  }

  getProperty(): void {
    this.propertyService.getProperties(this.filter).subscribe(response => {
      this.properties = response
    })
  }

}
