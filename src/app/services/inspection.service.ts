import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inspection } from '../interfaces/inspection';


@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  apiUrl : string = 'http://localhost:8080/vtv/inspection';
  
  constructor(private http : HttpClient) { }

   getInspection() : Observable<Inspection[]>{ 
    return this.http.get<Inspection[]>(this.apiUrl);
  } 

  
}
