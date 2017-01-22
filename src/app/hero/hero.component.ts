import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  moduleId: module.id, // loading module from the relative path
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  powers = [
    'Angular1',
    'Angular2',
    'Angular3',
    'Angular4'
  ];
  
  model = new Hero(18, 'Laravel-Angular', this.powers[0], 'Backend');
  
  submitted = false;
  
  onSubmit() {
    this.submitted = true;
  }
  
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  
  newHero() {
    this.model = new Hero(42, '', '');
  }

  constructor() { }

  ngOnInit() {
  }

}
