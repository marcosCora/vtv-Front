import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewInspectionsComponent } from './components/view-inspections/view-inspections.component';
import { ViewInspectorsComponent } from './components/view-inspectors/view-inspectors.component';
import { ViewVehiclesComponent } from './components/view-vehicles/view-vehicles.component';
import { ViewOwnersComponent } from './components/view-owners/view-owners.component';

const routes : Routes = [
  {path: ' ', redirectTo: 'inspections', pathMatch: 'full'},
  {path: 'inspections', component: ViewInspectionsComponent},
  {path: 'inspectors', component: ViewInspectorsComponent},
  {path: 'vehicles', component: ViewVehiclesComponent},
  {path: 'owners', component: ViewOwnersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
