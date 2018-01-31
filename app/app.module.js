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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard.component');
var movie_detail_component_1 = require('./movie-detail.component');
var movies_component_1 = require('./movies.component');
var movie_service_1 = require('./movie.service');
var app_routing_module_1 = require('./app-routing.module');
var cinema_detail_component_1 = require('./cinema-detail.component');
var cinema_component_1 = require('./cinema.component');
var cinema_service_1 = require('./cinema.service');
var counties_component_1 = require('./counties.component');
var counties_service_1 = require('./counties.service');
var review_component_1 = require('./review.component');
var review_service_1 = require('./review.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                movie_detail_component_1.MovieDetailComponent,
                movies_component_1.MoviesComponent,
                cinema_detail_component_1.CinemaDetailComponent,
                cinema_component_1.CinemasComponent,
                counties_component_1.CountiesComponent,
                review_component_1.ReviewsComponent
            ],
            providers: [
                movie_service_1.MovieService,
                cinema_service_1.CinemaService,
                counties_service_1.CountiesService,
                review_service_1.ReviewService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map