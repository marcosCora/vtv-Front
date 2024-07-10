import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InspectorService } from 'src/app/services/inspector.service';

@Component({
  selector: 'app-add-inspectors',
  templateUrl: './add-inspectors.component.html',
  styleUrls: ['./add-inspectors.component.css']
})
export class AddInspectorsComponent implements OnInit {

  formInspector !: FormGroup;

  constructor(private service: InspectorService) { }

  ngOnInit(): void {
    this.formInspector = new FormGroup({
      'name': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'dni': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'specialty': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required)
    })
  }

  addInspector() {
    if (!this.formInspector.invalid) {
      let inspector = {
        idInspector: 0,
        name: '',
        lastName: '',
        dni: '',
        address: '',
        phone: '',
        specialty: ''
      }
    inspector.name = this.formInspector.controls['name'].value;
    inspector.lastName = this.formInspector.controls['lastName'].value;
    inspector.dni = this.formInspector.controls['dni'].value;
    inspector.address = this.formInspector.controls['address'].value;
    inspector.specialty = this.formInspector.controls['specialty'].value;
    inspector.phone = this.formInspector.controls['phone'].value;
    
    this.service.postInspector(inspector).subscribe((response)=>{
      console.log(response);
    },
    (error)=>{
      console.log(error);
    })
    
    }


  }


}
