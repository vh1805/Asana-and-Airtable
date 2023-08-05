import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsanaComponent } from './asana/asana.component';
import { AirtableComponent } from './airtable/airtable.component';

const routes: Routes = [
  {
    path: 'asana',
    component: AsanaComponent,
    pathMatch: 'full'
  },
  {
    path:'airtable',
    component:AirtableComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
