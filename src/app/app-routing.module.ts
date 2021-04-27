import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisciplineDetailComponent } from './discipline-detail/discipline-detail.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { LoginComponent } from './login/login.component';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { MaterialsComponent } from './materials/materials.component';

const routes: Routes = [
  { path: '', redirectTo: '/disciplines', pathMatch: 'full' },
  { path: 'disciplines/:id', component: DisciplineDetailComponent},
  { path: 'disciplines', component: DisciplinesComponent},
  { path: 'materials', component: MaterialsComponent},
  { path: 'materials/:id', component: MaterialDetailComponent},
  { path: 'login', component: LoginComponent},
  // { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
