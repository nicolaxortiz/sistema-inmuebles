import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Observable, catchError, map, throwError } from 'rxjs';
import { Customer } from './property';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  private urlApi: string ="";

  constructor(private http: HttpClient) {
    this.urlApi = environment.apiUrl+'/api/v1';
   }

   getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.urlApi + '/costumer/getAll')
   }
}
