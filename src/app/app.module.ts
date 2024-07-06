import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewInspectionsComponent } from './components/view-inspections/view-inspections.component';
import { AddInspectionsComponent } from './components/add-inspections/add-inspections.component';
import { ViewVehiclesComponent } from './components/view-vehicles/view-vehicles.component';
import { AddVehiclesComponent } from './components/add-vehicles/add-vehicles.component';
import { ViewOwnersComponent } from './components/view-owners/view-owners.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { ViewInspectorsComponent } from './components/view-inspectors/view-inspectors.component';
import { AddInspectorsComponent } from './components/add-inspectors/add-inspectors.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ViewInspectionsComponent,
    AddInspectionsComponent,
    ViewVehiclesComponent,
    AddVehiclesComponent,
    ViewOwnersComponent,
    AddOwnerComponent,
    ViewInspectorsComponent,
    AddInspectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
