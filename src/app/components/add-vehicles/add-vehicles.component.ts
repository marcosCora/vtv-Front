import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.css']
})
export class AddVehiclesComponent implements OnInit{

  formVehicle !: FormGroup;

  constructor(private service : VehicleService, private router : Router){}

  ngOnInit(): void {
    this.formVehicle = new FormGroup({
      'brand' : new FormControl('', Validators.required),
      'model' : new FormControl('', Validators.required),
      'domain' : new FormControl('', Validators.required),
      'ownerDni' : new FormControl('', Validators.required),
    })
  }

  addVehicle(){
    
    if(!this.formVehicle.invalid){
      let vehicle : Vehicle = {
        idVehicle: 0,
        brand: '',
        model: '',
        domain: '',
        expirationVtv: '',
        dniOwner: '' 
      }

      vehicle.brand = this.formVehicle.controls['brand'].value;
      vehicle.model = this.formVehicle.controls['model'].value;
      vehicle.domain = this.formVehicle.controls['domain'].value;
      vehicle.dniOwner = this.formVehicle.controls['ownerDni'].value;

      console.log(vehicle);
      

      this.service.postVehicle(vehicle).subscribe((response)=>{
        console.log(response);
        this.router.navigate(['/vehicles']);
      },
      (error)=>{
        console.log(error);
        window.Error;
      })

    }


    
  }



}
