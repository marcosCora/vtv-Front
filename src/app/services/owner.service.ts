import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../interfaces/owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  apiUrl : string = 'http://localhost:8080/vtv/owner';
  
  constructor(private http : HttpClient) { }

   getOwners() : Observable<Owner[]>{ 
    return this.http.get<Owner[]>(this.apiUrl);
  }
  
  postNewOwner(owner : Owner) : Observable<String>{
    return this.http.post<String>(`${this.apiUrl}/creat`, owner);
  }

}
