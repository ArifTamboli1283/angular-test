import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieLandingComponent } from './movie-landing/movie-landing.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: MovieLandingComponent},
  { path: 'movie-details', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieModuleRoutingModule { }
