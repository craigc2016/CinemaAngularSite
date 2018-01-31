import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Counties }         from './counties';
import { CountiesService }  from './counties.service';
import { Cinema }         from './cinema';
import { CinemaService }  from './cinema.service';
@Component({
  moduleId: module.id,
  selector: 'my-counties-detail',
  templateUrl: 'counties-detail.component.html',
  styleUrls: [ 'counties-detail.component.css' ]
})

export class CountiesDetailComponent implements OnInit {
  cinemas: Cinema;
  
  constructor(
    private countiesService: CountiesService,
	private cinemaService: CinemaService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}
  
    ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      
    });
  }
}