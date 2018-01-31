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
var counties_service_1 = require('./counties.service');
var cinema_service_1 = require('./cinema.service');
var CountiesComponent = (function () {
    function CountiesComponent(router, countiesService, cinemaService) {
        this.router = router;
        this.countiesService = countiesService;
        this.cinemaService = cinemaService;
    }
    CountiesComponent.prototype.getCinemaDublin = function () {
        var _this = this;
        this.cinemaService.getCinemas().then(function (cinemas) { return _this.cinemas = cinemas.slice(0, 1); });
    };
    CountiesComponent.prototype.getCounty = function () {
        var _this = this;
        this.countiesService.getCounties().then(function (counties) { return _this.counties = counties; });
    };
    CountiesComponent.prototype.ngOnInit = function () {
        this.getCounty();
    };
    CountiesComponent.prototype.onSelect = function (counties) {
        this.selectedCounties = counties;
    };
    CountiesComponent.prototype.gotoDetail = function (counties) {
        //this.router.navigate(['/detailCounties', this.selectedCounties.id]);
        this.getCinemaDublin();
    };
    CountiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-counties',
            templateUrl: 'counties.component.html',
            styleUrls: ['counties.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, counties_service_1.CountiesService, cinema_service_1.CinemaService])
    ], CountiesComponent);
    return CountiesComponent;
}());
exports.CountiesComponent = CountiesComponent;
//# sourceMappingURL=counties.component.js.map