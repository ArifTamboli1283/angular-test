import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  selectedMovie: any;
  movielist = 'https://api.themoviedb.org/3/genre/movie/list';
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41');
  }

  getListOfMovies(id): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/genre/' + id + '/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41');
  }

  getMovieDetails(id): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=68e82445c8842ba8616d0f6bf0e97a41');
  }
  set SelectedMovie(value) {
    this.selectedMovie = value;
  }
  get SelectedMovie(): any {
    return this.selectedMovie;
  }
}
