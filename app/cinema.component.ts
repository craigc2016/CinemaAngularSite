import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Cinema } from './cinema';
import { CinemaService } from './cinema.service';


@Component({
  moduleId: module.id,
  selector: 'my-cinemas',
  templateUrl: 'cinema.component.html',
  styleUrls: [ 'cinema.component.css']

})
export class CinemasComponent implements OnInit {
   cinemas: Cinema[];
   selectedCinema: Cinema;
   
   constructor(private router: Router,private cinemaService: CinemaService) { }
   
   getCinema(): void {
    this.cinemaService.getCinemas().then(cinemas => this.cinemas = cinemas);
  }
  
   ngOnInit(): void {
	    this.getCinema();
   }
   
   onSelect(cinema: Cinema): void {
    this.selectedCinema = cinema;
  }
  
  gotoDetail(): void {
   this.router.navigate(['/detailCinemas', this.selectedCinema.id]);
  }
 
}