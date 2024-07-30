import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl : string = 'http://localhost:8080/vtv/vehicle';
  
  constructor(private http : HttpClient) { }

   getVehicles() : Observable<Vehicle[]>{ 
    return this.http.get<Vehicle[]>(this.apiUrl);
  } 

  postVehicle(vehicle : Vehicle) : Observable<Vehicle>{
    return this.http.post<Vehicle>(`${this.apiUrl}/creat`, vehicle);
  } 
}
