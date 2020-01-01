import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Searchapi} from '../services/searchapi';
import {Movie} from '../models/movie';
import {MovieDetail} from '../models/MovieDetail';

@Component({
  selector: 'app-detail-panel',
  template: `
    <div class="row w-100" *ngIf="movie">
      <div class="col-6">
        <img [src]="movie.Poster" class="align-self-end">
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 my-1">
            <div class="row">
              <div class="col-12">
                <p class="font-weight-bold h1">{{movie.Title}}</p>
              </div>
            </div>
          </div>
          <div class="col-12 my-1">
            <div class="row">
              <div class="col-3">
                <p class="font-weight-bold">Plot:</p>
              </div>
              <div class="col-9">
                {{movie.Plot}}
              </div>
            </div>
          </div>
          <div class="col-12 my-1">
            <div class="row">
              <div class="col-3">
                <p class="font-weight-bold">Actors:</p>
              </div>
              <div class="col-9">
                {{movie.Actors}}
              </div>
            </div>
          </div>
          <div class="col-12 my-1">
            <div class="row">
              <div class="col-3">
                <p class="font-weight-bold">Awards</p>
              </div>
              <div class="col-9">
                {{movie.Awards}}
              </div>
            </div>
          </div>
          <div class="col-12 my-1">
            <div class="row">
              <div class="col-3">
                <p class="font-weight-bold">Directed by:</p>
              </div>
              <div class="col-9">
                {{movie.Director}}
              </div>
            </div>
          </div>
          <div class="col-12 my-1">
            <div class="row">
              <div class="col-3">
                <p class="font-weight-bold">Produced by:</p>
              </div>
              <div class="col-9">
                {{movie.Production}}
              </div>
            </div>
          </div>
          <div class="col-12 my-1">
            <div class="row">
              <div class="col-3">
                <p class="font-weight-bold">Box Office:</p>
              </div>
              <div class="col-9">
                {{movie.BoxOffice}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class DetailpanelComponent {

  @Input() movie: MovieDetail;


  constructor() {
  }
}
