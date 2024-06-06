import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Office, Property } from '../../service/property';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../../service/property.service';
import { OfficeService } from 'src/service/office.service';

@Component({
  selector: 'app-createproperty',
  templateUrl: './createproperty.component.html',
  styleUrls: ['./createproperty.component.css']
})
export class CreatepropertyComponent implements OnInit {

  property = {
    reference: null,
    type: '',
    area: null,
    address: '',
    zone: '',
    offerMode: '',
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
      parquet: false,
      frontDoors: false,
      diaphone: false,
      air: false,
    },
    parcelSize: null,
    urbanization: null
  };
  complement: string = ""
  offices: Office[]=[]
  errores: string[]=[]

  constructor(private propertyService: PropertyService, private officeService: OfficeService, private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.officeService.getAll().subscribe(response => {
      this.offices = response
    })
    console.log(this.offices);
    
  }

  createProperty() {
    if(this.property.type==="Villa"){
      this.complement = "createVilla"
    } 

    if(this.property.type==="Piso nuevo"){
      this.complement = "createApartment"
    } 

    if(this.property.type==="Local"){
      this.complement = "createPremises"
    } 

    if(this.property.type==="Casa"){
      this.complement = "createHouse"
    } 

    this.propertyService.createProperty(this.property, this.complement).subscribe({
      next: (property: Property) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errores = err.error.errors as string[];
        console.log("Codigo del error: " + err.status);
        console.log(err.error.errors);
        
      }
    })
  }
}
