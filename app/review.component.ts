import { Component, OnInit } from '@angular/core';



import { Review } from './review';
import { ReviewService } from './review.service';


@Component({
  moduleId: module.id,
  selector: 'my-reviews',
  templateUrl: 'review.component.html',
  styleUrls: [ 'review.component.css']

})
export class ReviewsComponent implements OnInit {
	reviews: Review[];
	
	constructor(private reviewService: ReviewService) { }
	
	getReview(): void {
		this.reviewService.getReviews().then(reviews => this.reviews = reviews);
	}
	
	ngOnInit(): void {
	    this.getReview();
   }
}