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
var cinema_service_1 = require('./cinema.service');
var CinemasComponent = (function () {
    function CinemasComponent(router, cinemaService) {
        this.router = router;
        this.cinemaService = cinemaService;
    }
    CinemasComponent.prototype.getCinema = function () {
        var _this = this;
        this.cinemaService.getCinemas().then(function (cinemas) { return _this.cinemas = cinemas; });
    };
    CinemasComponent.prototype.ngOnInit = function () {
        this.getCinema();
    };
    CinemasComponent.prototype.onSelect = function (cinema) {
        this.selectedCinema = cinema;
    };
    CinemasComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detailCinemas', this.selectedCinema.id]);
    };
    CinemasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-cinemas',
            templateUrl: 'cinema.component.html',
            styleUrls: ['cinema.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, cinema_service_1.CinemaService])
    ], CinemasComponent);
    return CinemasComponent;
}());
exports.CinemasComponent = CinemasComponent;
//# sourceMappingURL=cinema.component.js.map