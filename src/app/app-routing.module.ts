import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewInspectionsComponent } from './components/view-inspections/view-inspections.component';
import { ViewInspectorsComponent } from './components/view-inspectors/view-inspectors.component';
import { ViewVehiclesComponent } from './components/view-vehicles/view-vehicles.component';
import { ViewOwnersComponent } from './components/view-owners/view-owners.component';
import { AddInspectionsComponent } from './components/add-inspections/add-inspections.component';
import { AddInspectorsComponent } from './components/add-inspectors/add-inspectors.component';
import { AddVehiclesComponent } from './components/add-vehicles/add-vehicles.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';

const routes : Routes = [
  {path: ' ', redirectTo: 'inspections', pathMatch: 'full'},
  {path: 'inspections', component: ViewInspectionsComponent},
  {path: 'inspectors', component: ViewInspectorsComponent},
  {path: 'vehicles', component: ViewVehiclesComponent},
  {path: 'owners', component: ViewOwnersComponent},
  {path: 'add-inspection', component: AddInspectionsComponent},
  {path: 'add-inspector', component: AddInspectorsComponent},
  {path: 'add-vehicle', component: AddVehiclesComponent},
  {path: 'add-owner', component: AddOwnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
