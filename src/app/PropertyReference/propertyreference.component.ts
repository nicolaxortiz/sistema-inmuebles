import { Component, OnInit } from '@angular/core';
import { Property, Visit } from '../../service/property';
import { PropertyService } from '../../service/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './propertyreference.component.html',
  styleUrls: ['./propertyreference.component.css']
})


export class PropertyReferenceComponent {
  reference!: number; // Inicialización en la declaración
  properties: Property | null = null;
  visits: Visit[]=[];
  

  constructor(private propertyService: PropertyService) {}

  handleSearch(): void {
    this.properties = null;
    this.getProperty();
  }

  getProperty(): void {
    this.propertyService.getProperty(this.reference).subscribe(response => {
      this.properties = response
      this.getVisits(this.properties._id);
    })
  }

  getVisits(id: string): void {
    this.propertyService.getVisits(id).subscribe(response => {
      this.visits = response

    })
  }

}
