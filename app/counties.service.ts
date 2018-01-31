import { Injectable } from '@angular/core';

import { Counties } from './counties';
import { COUNTIES } from './mock-counties';


@Injectable()
export class CountiesService {
  getCounties(): Promise<Counties[]>{
	  return Promise.resolve(COUNTIES)
  }
  
  getCountiesSlowly(): Promise<Counties[]> {
    return new Promise<Counties[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getCounties());
  }
  
  getCounty(id: number): Promise<Counties> {
    return this.getCounties ()
               .then(counties  => counties.find(counties => counties.id === id));
  }
  
}