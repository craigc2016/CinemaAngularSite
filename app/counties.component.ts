import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Counties } from './counties';
import { CountiesService } from './counties.service';
import { Cinema } from './cinema';
import { CinemaService } from './cinema.service';

@Component({
  moduleId: module.id,
  selector: 'my-counties',
  templateUrl: 'counties.component.html',
  styleUrls: [ 'counties.component.css']

})
export class CountiesComponent implements OnInit {
   counties: Counties[];
   selectedCounties: Counties;
   cinemas: Cinema[];
   constructor(private router : Router ,
   private countiesService: CountiesService,private cinemaService: CinemaService) { }
   
   getCinemaDublin(): void {
		this.cinemaService.getCinemas().then(cinemas => this.cinemas = cinemas.slice(0,1));
	}
	
	getCounty(): void {
		this.countiesService.getCounties().then(counties => this.counties = counties);
	}
	
    ngOnInit(): void {
	    this.getCounty();
	}
	onSelect(counties: Counties): void {
		this.selectedCounties = counties;
		
	
	}
  
    gotoDetail(counties: Counties): void {
		//this.router.navigate(['/detailCounties', this.selectedCounties.id]);
		this.getCinemaDublin();
    }
  
   
}