import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit{

  vehicles : Vehicle[] = [];

  constructor(private service : VehicleService){}

  ngOnInit(): void {
    this.service.getVehicles().subscribe((response) =>{
      this.vehicles = response;
    })
  }

}