import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Measuring } from 'src/app/interfaces/measuring';
import { Observation } from 'src/app/interfaces/observation';

@Component({
  selector: 'app-add-inspections',
  templateUrl: './add-inspections.component.html',
  styleUrls: ['./add-inspections.component.css']
})
export class AddInspectionsComponent implements OnInit{

  formInspection !: FormGroup;
  formObservation !: FormGroup;
  forMeasuring !: FormGroup;
  observations : Observation[] = [];
  measurings : Measuring[] = [];

  constructor(){}

  ngOnInit(): void {
    this.formInspection = new FormGroup({
      'domainVehicle': new FormControl('', Validators.required),
      'dniInspector': new FormControl('', Validators.required),
    })

    this.formObservation = new FormGroup({
      'componentInspectedObservation': new FormControl('', Validators.required),
      'descriptionObservation': new FormControl('', Validators.required),
      'resultObservation': new FormControl('', Validators.required)
    })
    this.forMeasuring = new FormGroup({
      'componentInspectedMeasuring': new FormControl('', Validators.required),
      'descriptionMeasuring': new FormControl('', Validators.required),
      'resultMeasuring': new FormControl('', Validators.required)
    })
    
  }

  addInspection(){

  }

  addObservation(){



  }

  addMeasuring(){
    
  }

}
