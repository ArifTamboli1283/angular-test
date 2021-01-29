import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-landing',
  templateUrl: './movie-landing.component.html',
  styleUrls: ['./movie-landing.component.scss']
})
export class MovieLandingComponent implements OnInit {
  generesList: any[] = [];
  movieList: any[] = [];
  genSelected: boolean;
  constructor(private  readonly movieServ: MovieServiceService) { }

  ngOnInit() {
    this.getGeneres();
  }

  getGeneres()  {
    this.movieServ.getList().subscribe( resp => {
      this.generesList = resp.genres;
    });
  }

}
