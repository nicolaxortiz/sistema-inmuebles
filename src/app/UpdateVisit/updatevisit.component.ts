import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/service/property.service';
import { CostumerService } from 'src/service/costumer.service';
import { Property, visitCreate } from 'src/service/property';
import { Customer } from 'src/service/property';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatevisit',
  templateUrl: './updatevisit.component.html',
  styleUrls: ['./updatevisit.component.css']
})
export class UpdatevisitComponent implements OnInit{

  costumers: Customer[]=[]
  properties: Property[]=[]
  propertyID!: string
  visit: visitCreate = {
    costumerId: '',
    propertyId: '',
    date: '',
    hour: '',
    comment: ''
  };
  errores: string[]=[]

  constructor( private propertyService: PropertyService, private costumerService: CostumerService, private router: Router, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.costumerService.getAll().subscribe(response => {
      this.costumers = response
    })

    this.propertyService.getAll().subscribe(response => {
      this.properties = response
    })
  }

  formatDate(date: string): string {
    const convertDate = new Date(date)
    if (convertDate) {
        const day = convertDate.getDate();
        const month = convertDate.getMonth() + 1; // Los meses comienzan desde 0, así que sumamos 1
        const year = convertDate.getFullYear();
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    }
    return ''; // Manejo para valores de fecha nulos
}

  createVisit(): void {
    this.visit.date=this.formatDate(this.visit.date)
    
    this.propertyService.createVisit(this.visit).subscribe({
      next: (visit: visitCreate) => {
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
