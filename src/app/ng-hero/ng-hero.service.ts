
import { Injectable } from '@angular/core';
import { Hero } from './ng-hero.model';
import { HEROES } from './mock-heroes';
// import resolve = Q.resolve;

@Injectable()
export class NgHeroService {
  
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
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
