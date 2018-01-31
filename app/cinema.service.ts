import { Injectable } from '@angular/core';

import { Cinema } from './cinema';
import { CINEMAS } from './mock-cinema';

@Injectable()
export class CinemaService {
  getCinemas(): Promise<Cinema[]>{
	  return Promise.resolve(CINEMAS)
  }
  
  getCinemasSlowly(): Promise<Cinema[]> {
    return new Promise<Cinema[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getCinemas());
  }
  
  getCinema(id: number): Promise<Cinema> {
    return this.getCinemas ()
               .then(cinemas  => cinemas.find(cinemas => cinemas.id === id));
  }
  
}