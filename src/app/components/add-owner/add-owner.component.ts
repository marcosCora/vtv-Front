import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Owner } from 'src/app/interfaces/owner';
import { Route, Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {

  formOwner !: FormGroup;

  constructor(private service: OwnerService) { }

  ngOnInit(): void {
    this.formOwner = new FormGroup({
      'name': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'dni': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'type': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
    })
  }

  addOwner() {
    if (!this.formOwner.invalid) {
      let owner: Owner = {
        idOwner: 0,
        name: '',
        lastName: '',
        dni: '',
        address: '',
        phone: '',
        type: ''
      };
      owner.name = this.formOwner.controls['name'].value;
      owner.lastName = this.formOwner.controls['lastName'].value;
      owner.dni = this.formOwner.controls['dni'].value;
      owner.address = this.formOwner.controls['address'].value;
      owner.type = this.formOwner.controls['type'].value;
      owner.phone = this.formOwner.controls['phone'].value;

      this.service.postNewOwner(owner).subscribe((response) => {
        console.log(response);
      },
        (error) => {
          console.log(error);
        });

    }


  }

}
