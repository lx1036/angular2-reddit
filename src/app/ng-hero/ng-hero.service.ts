
import { Injectable } from '@angular/core';
import { Hero } from './ng-hero.model';
import { HEROES } from './mock-heroes';
import { Headers, Http } from '@angular/http';
// import resolve = Q.resolve;

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NgHeroService {
  private heroesUrl = 'app/heroes';
  
  constructor(private http: Http) {
    
  }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
    // return Promise.resolve(HEROES);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    
    return Promise.reject(error.message || error);
  }
  
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(
      resolve => setTimeout(resolve, 2000)
    ).then(() => this.getHeroes());
  }
  
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(
        heroes => heroes.find(hero => hero.id === id)
      );
  }
}
