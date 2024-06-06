import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Observable, catchError, map, throwError } from 'rxjs';
import { Office } from './property';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private urlApi: string ="";

  constructor(private http: HttpClient) {
    this.urlApi = environment.apiUrl+'/api/v1';
   }

   getAll(): Observable<Office[]> {
    return this.http.get<Office[]>(this.urlApi + '/office/getAll')
   }
}
