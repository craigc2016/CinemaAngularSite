import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { MoviesComponent }      from './movies.component';
import { MovieDetailComponent }  from './movie-detail.component';
import { CinemasComponent }      from './cinema.component';
import { CinemaDetailComponent }  from './cinema-detail.component';
import { CountiesComponent }      from './counties.component';
import { ReviewsComponent }      from './review.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detailMovies/:id', component: MovieDetailComponent },
  { path: 'movies',      component:  MoviesComponent },
  { path: 'cinema', component: CinemasComponent },
  { path: 'detailCinemas/:id', component: CinemaDetailComponent },
  { path: 'counties', component: CountiesComponent },
  { path: 'review', component: ReviewsComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}