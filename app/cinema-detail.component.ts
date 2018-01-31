import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Cinema }         from './cinema';
import { CinemaService }  from './cinema.service';


@Component({
  moduleId: module.id,
  selector: 'my-cinema-detail',
  templateUrl: 'cinema-detail.component.html',
  styleUrls: [ 'cinema-detail.component.css' ]
})

export class CinemaDetailComponent implements OnInit {
  cinema: Cinema;
  
  constructor(
    private cinemaService: CinemaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.cinemaService.getCinema(id)
        .then(cinema => this.cinema = cinema);
    });
	
  }

  goBack(): void {
    this.location.back();
  }
}