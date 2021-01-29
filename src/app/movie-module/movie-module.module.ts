import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieModuleRoutingModule } from './movie-module-routing.module';
import { MovieLandingComponent } from './movie-landing/movie-landing.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [MovieLandingComponent, MovieListComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    MovieModuleRoutingModule,
    HttpClientModule
  ],
  providers: []
})
export class MovieModuleModule { }
