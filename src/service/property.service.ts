import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Observable, catchError, map, throwError } from 'rxjs';
import { Property, Visit, visitCreate } from './property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private urlApi: string ="";

  constructor(private http: HttpClient) {
    this.urlApi = environment.apiUrl+'/api/v1';
   }

   getAll(): Observable<Property[]> {
    return this.http.get<Property[]>(this.urlApi + '/property/getAll')
   }

   getProperty(reference: number): Observable<Property> {
    return this.http.get<Property>(this.urlApi + '/property/getByReference/' + reference)
   }

   getProperties(filter: string): Observable<Property[]> {
    return this.http.get<Property[]>(this.urlApi + '/property/getByFilter/' + filter)
   }

   createProperty(property: object, compl: string): Observable<Property> {
    return this.http.post<Property>(this.urlApi + '/property/' + compl, property).pipe(
      map((response: any) => response.property as Property),
      catchError(e => {
        if(e.status==400){
          return throwError(() => e);
        }
        if(e.errors.mensaje){
          console.log(e.errors.mensaje);
        }
        return throwError(()=> e)
      })
    )
   }

   createVisit(visit: visitCreate): Observable<visitCreate> {
    return this.http.post<visitCreate>(this.urlApi + '/visits/create', visit).pipe(
      map((response: any) => response.visitCreate as visitCreate),
      catchError(e => {
        if(e.status==400){
          return throwError(() => e);
        }
        if(e.errors.mensaje){
          console.log(e.errors.mensaje);
        }
        return throwError(()=> e)
      })
    )
   }

   getVisits(id: string): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.urlApi + '/visits/' + id)
   }
}
