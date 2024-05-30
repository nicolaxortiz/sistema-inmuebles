import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Property } from '../../service/property';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../../service/property.service';

@Component({
  selector: 'app-createproperty',
  templateUrl: './createproperty.component.html',
  styleUrls: ['./createproperty.component.css']
})
export class CreatepropertyComponent {

  property = {
    reference: null,
    type: '',
    area: null,
    address: '',
    zone: '',
    offerMode: 'Venta',
    sellingPrice: null,
    rentalPrice: null,
    owner: {
      name: '',
      cellphone: null
    },
    office: '',
    stays: {
      bedrooms: null,
      bathrooms: null,
      toiletrooms: null,
      kitchens: null,
      balcony: false
    },
    features: {
      gas: false,
      armoredDoor: false,
      parquet: false
    },
    visits: [
      {
        date: '',
        hour: '',
        comment: '',
        costumerId: ''
      }
    ]
  };
  complement: string = ""
  errores: string[]=[]

  constructor(private propertyService: PropertyService, private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  createProperty() {
    this.propertyService.createProperty(this.property, this.complement).subscribe({
      next: (property: Property) => {
        this.router.navigate(['/property']);
      },
      error: (err) => {
        this.errores = err.error.errors as string[];
        console.log("Codigo del error: " + err.status);
        console.log(err.error.errors);
        
      }
    })
  }
}
