import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorneoComponent } from './torneo/torneo.component';

const routes: Routes = [
	{path: '', redirectTo: '/torneo', pathMatch: 'full'},
	{path: 'torneo', component: TorneoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
