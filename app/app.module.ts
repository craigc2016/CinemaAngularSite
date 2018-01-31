import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MoviesComponent } from './movies.component';
import { MovieService } from './movie.service';
import { AppRoutingModule }     from './app-routing.module';
import { CinemaDetailComponent } from './cinema-detail.component';
import { CinemasComponent } from './cinema.component';
import { CinemaService } from './cinema.service';
import { CountiesComponent } from './counties.component';
import { CountiesService } from './counties.service';
import { ReviewsComponent } from './review.component';
import { ReviewService } from './review.service';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
		AppRoutingModule
  ],
	
    declarations: [
        AppComponent,
		DashboardComponent,
		MovieDetailComponent,
		MoviesComponent,
		CinemaDetailComponent,
		CinemasComponent,
		CountiesComponent,
		ReviewsComponent
    ],
	providers: [
		MovieService,
		CinemaService,
		CountiesService,
		ReviewService,
	],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

