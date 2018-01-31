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
var common_1 = require('@angular/common');
var cinema_service_1 = require('./cinema.service');
var CinemaDetailComponent = (function () {
    function CinemaDetailComponent(cinemaService, route, location) {
        this.cinemaService = cinemaService;
        this.route = route;
        this.location = location;
    }
    CinemaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.cinemaService.getCinema(id)
                .then(function (cinema) { return _this.cinema = cinema; });
        });
    };
    CinemaDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CinemaDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-cinema-detail',
            templateUrl: 'cinema-detail.component.html',
            styleUrls: ['cinema-detail.component.css']
        }), 
        __metadata('design:paramtypes', [cinema_service_1.CinemaService, router_1.ActivatedRoute, common_1.Location])
    ], CinemaDetailComponent);
    return CinemaDetailComponent;
}());
exports.CinemaDetailComponent = CinemaDetailComponent;
//# sourceMappingURL=cinema-detail.component.js.map