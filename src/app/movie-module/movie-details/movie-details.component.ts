import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
detailMovie: any;
  constructor(private readonly movieServ: MovieServiceService) { }
  ngOnInit() {
    this.detailMovie = this.movieServ.SelectedMovie;
  }

}
