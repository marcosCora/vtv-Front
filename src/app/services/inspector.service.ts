import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { Inspector } from '../interfaces/inspector';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InspectorService {

  apiUrl : string = 'http://localhost:8080/vtv/inspector';
  
  constructor(private http : HttpClient) { }

   getInspectors() : Observable<Inspector[]>{ 
    return this.http.get<Inspector[]>(this.apiUrl);
  } 


  postInspector(inspector : Inspector) : Observable<string>{
    return this.http.post<string>(`${this.apiUrl}/creat`, inspector);
  }

}
