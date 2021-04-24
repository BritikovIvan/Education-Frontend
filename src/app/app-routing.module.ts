import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisciplineDetailComponent } from './discipline-detail/discipline-detail.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';

const routes: Routes = [
  { path: '', redirectTo: '/disciplines', pathMatch: 'full' },
  { path: 'disciplines/:id', component: DisciplineDetailComponent},
  { path: 'disciplines', component: DisciplinesComponent}
  // { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
