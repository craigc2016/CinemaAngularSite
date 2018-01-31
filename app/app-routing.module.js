"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var movies_component_1 = require('./movies.component');
var movie_detail_component_1 = require('./movie-detail.component');
var cinema_component_1 = require('./cinema.component');
var cinema_detail_component_1 = require('./cinema-detail.component');
var counties_component_1 = require('./counties.component');
var review_component_1 = require('./review.component');
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'detailMovies/:id', component: movie_detail_component_1.MovieDetailComponent },
    { path: 'movies', component: movies_component_1.MoviesComponent },
    { path: 'cinema', component: cinema_component_1.CinemasComponent },
    { path: 'detailCinemas/:id', component: cinema_detail_component_1.CinemaDetailComponent },
    { path: 'counties', component: counties_component_1.CountiesComponent },
    { path: 'review', component: review_component_1.ReviewsComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map