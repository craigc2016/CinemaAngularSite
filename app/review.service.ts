import { Injectable } from '@angular/core';

import { Review } from './review';
import { REVIEWS } from './mock-reviews';

@Injectable()
export class ReviewService {
  getReviews(): Promise<Review[]>{
	  return Promise.resolve(REVIEWS)
  }
  
  
   getReviewsSlowly(): Promise<Review[]> {
    return new Promise<Review[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getReviews());
  }
}