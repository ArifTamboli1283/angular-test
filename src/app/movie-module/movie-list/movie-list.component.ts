import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {
  @Input() movieId;
  movieListToShow: any [] = [];
  @Output() closeMovieList = new EventEmitter<boolean>();
  isMovieSelected: boolean;
  selectedMovieDetail: any;
  constructor(private readonly movieServ: MovieServiceService, private readonly router: Router) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.movieId) {
      this.getSelectedtypeMovieList(this.movieId);
    }
  }
  getSelectedtypeMovieList(id) {
    this.movieServ.getListOfMovies(id).subscribe( resp => {
      this.movieListToShow = resp.results;
    });
  }
  getSelectedtypeMovieDetails(id) {
    this.isMovieSelected = true;
    this.movieServ.getMovieDetails(id).subscribe(resp => {
      this.movieServ.SelectedMovie = resp;
      this.router.navigateByUrl('/movieList/movie-details');
    });
  }
}
