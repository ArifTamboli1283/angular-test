import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movieList', pathMatch: 'full' },
  // { path: 'employees', loadChildren: './employees/employees.module#EmployeeModule'}
  { path: 'movieList', loadChildren: './movie-module/movie-module.module#MovieModuleModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
