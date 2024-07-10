import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Owner } from 'src/app/interfaces/owner';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-view-owners',
  templateUrl: './view-owners.component.html',
  styleUrls: ['./view-owners.component.css']
})
export class ViewOwnersComponent implements OnInit{

  owners : Owner[] = [];

  constructor(private service : OwnerService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.service.getOwners().subscribe((response) =>{
      this.owners = response;
    })
  }

}
