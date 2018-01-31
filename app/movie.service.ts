import { Injectable } from '@angular/core';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
  getMovies(): Promise<Movie[]>{
	  return Promise.resolve(MOVIES)
  }
  
   getMoviesSlowly(): Promise<Movie[]> {
    return new Promise<Movie[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getMovies());
  }
  
  getMovie(id: number): Promise<Movie> {
    return this.getMovies ()
               .then(movies  => movies.find(movie => movie.id === id));
  }
}


