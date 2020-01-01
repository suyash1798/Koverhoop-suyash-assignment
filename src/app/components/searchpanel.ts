import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Searchapi} from '../services/searchapi';
import {Movie} from '../models/movie';
import {MovieDetail} from '../models/MovieDetail';

@Component({
  selector: 'app-search-panel',
  template: `
    <form class="row p-2 mx-sm-auto" style="width: 100%" [formGroup]="search_form" (ngSubmit)="onSearch()">
      <div class="col-sm-6 col-md-3 my-2 mx-sm-auto">
        <input class="form-control w-100" formControlName="name" placeholder="Enter movies/series name">
      </div>
      <div class="col-sm-6 col-md-3 my-2 mx-sm-auto">
        <input type="number" class="form-control w-100" formControlName="year" placeholder="year">
      </div>
      <div class="col-sm-6 col-md-3 my-2 mx-sm-auto">
        <select class="form-control w-100" formControlName="type">
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="Episode">Episode</option>
        </select>
      </div>
      <div class="col-sm-6 col-md-3 my-2 mx-sm-auto">
        <button class="btn btn-success w-100" type="submit">Search</button>
      </div>
    </form>
    <div class="row" *ngIf="movies" style="width:99%;margin-left: 7px;height:218px;overflow-x: scroll;overflow-y: hidden;white-space: nowrap;flex-wrap: nowrap">
      <div class="p-1 movies-panel" *ngFor="let movie of movies" (click)="onSetMovie(movie)">
        <img [src]="movie.Poster" style="height: 100%">
      </div>
    </div>
    <app-detail-panel [movie]="this.movie"></app-detail-panel>
  `,
  styles: [`
    /*.movies-panel{*/
      /*!*max-width: 137px*!*/
    /*}*/

    /*@media only screen and (max-width: 1200px) {*/
      /*.movies-panel{*/
        /*max-width: 10.666667%*/
      /*}*/
    /*}*/
  `]
})
export class SearchpanelComponent {
  search_form: FormGroup;
  movie_search_name: FormControl;
  movie_search_year: FormControl;
  movie_search_type: FormControl;
  movies: Movie[] = [];
  movie: MovieDetail;


  constructor(private search_service: Searchapi) {
    this.movie_search_name = new FormControl(null);
    this.movie_search_year = new FormControl(null);
    this.movie_search_type = new FormControl(null);
    this.search_form = new FormGroup({
      'name': this.movie_search_name,
      'year': this.movie_search_year,
      'type': this.movie_search_type
    });
  }

  onSearch() {
    console.log(this.search_form.value);
    this.search_service.onSearch(this.search_form.value).toPromise().then((movies_data) => {
      this.movies = (movies_data as any).Search;
      console.log(movies_data, this.movies);
    });
  }

  onSetMovie(movie) {
    console.log(movie.imdbID)
    this.search_service.onDetailbyId(movie.imdbID).toPromise().then((movie_detail) => {
      this.movie = (movie_detail as any);
      console.log(this.movie)
    });
  }


}
