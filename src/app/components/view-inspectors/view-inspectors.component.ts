import { Component, OnInit } from '@angular/core';
import { Inspector } from 'src/app/interfaces/inspector';
import { InspectorService } from 'src/app/services/inspector.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-view-inspectors',
  templateUrl: './view-inspectors.component.html',
  styleUrls: ['./view-inspectors.component.css']
})
export class ViewInspectorsComponent implements OnInit{
  
  inspectors : Inspector[] = [];

  constructor(private serviceInspector : InspectorService){}


  ngOnInit(): void {
    this.serviceInspector.getInspectors().subscribe((response) =>{
      this.inspectors= response;    
    })

  }

}
