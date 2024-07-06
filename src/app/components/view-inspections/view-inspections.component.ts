import { Component, OnInit } from '@angular/core';
import { Inspection } from 'src/app/interfaces/inspection';
import { InspectionService } from 'src/app/services/inspection.service';

@Component({
  selector: 'app-view-inspections',
  templateUrl: './view-inspections.component.html',
  styleUrls: ['./view-inspections.component.css']
})
export class ViewInspectionsComponent implements OnInit{

  inspections : Inspection[] = [];

  constructor(private service : InspectionService){}

  ngOnInit(): void {
    this.service.getInspection().subscribe((response) =>{
      this.inspections = response;
    })
  }

}