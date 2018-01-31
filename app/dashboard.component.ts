import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from './movie';
import { MovieService } from './movie.service';
import { Review } from './review';
import { ReviewService } from './review.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	movies: Movie[];
	reviews: Review[];
	
  constructor(
    private router: Router,
    private movieService: MovieService,
	private reviewService: ReviewService) {
		
	}
	getReview(): void {
		this.reviewService.getReviews().then(reviews => this.reviews = reviews.slice(0,3));
	}
	
   getMovie(): void {
		this.movieService.getMovies().then(movies => this.movies = movies);
	}
  
   ngOnInit(): void {
	    this.getMovie();
		this.getReview();
	}
	
  gotoReview(): void {
		this.router.navigate(['/review']);
	}
}