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
var mock_movies_1 = require('./mock-movies');
var MovieService = (function () {
    function MovieService() {
    }
    MovieService.prototype.getMovies = function () {
        return Promise.resolve(mock_movies_1.MOVIES);
    };
    MovieService.prototype.getMoviesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getMovies(); });
    };
    MovieService.prototype.getMovie = function (id) {
        return this.getMovies()
            .then(function (movies) { return movies.find(function (movie) { return movie.id === id; }); });
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map