import { Component, OnInit, animate } from '@angular/core';
import { Hero } from './ng-hero.model';
import { NgHeroService } from './ng-hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-hero',
  templateUrl: './ng-hero.component.html',
  styleUrls: ['./ng-hero.component.css'],
  // providers: [NgHeroService]
})
export class NgHeroComponent implements OnInit {
  // title = 'Tour of heroes';
  // hero = 'Windstorm';
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  
  selectedHero: Hero;
  
  heroes: Hero[];
  
  constructor(private heroService: NgHeroService, private router: Router) {
    
  }

  ngOnInit() {
    this.getHeroes();
    // this.heroes = this.heroService.getHeroes();
  }
  
  getHeroes() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
