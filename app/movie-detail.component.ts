import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Movie }         from './movie';
import { MovieService }  from './movie.service';
@Component({
  moduleId: module.id,
  selector: 'my-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: [ 'movie-detail.component.css' ]
})

export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.movieService.getMovie(id)
        .then(movie => this.movie = movie);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
