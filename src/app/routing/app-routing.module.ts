import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { CodeForcesComponent} from '../code-forces/code-forces.component';
import {DashboardComponent} from '../cs-dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'codeforces', component: CodeForcesComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
