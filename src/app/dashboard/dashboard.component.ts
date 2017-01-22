import { Component, OnInit } from '@angular/core';
import { NgHeroService } from '../ng-hero/ng-hero.service';
import { Hero } from '../ng-hero/ng-hero.model';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  
  
  constructor(private heroService: NgHeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 3));
  }

}
