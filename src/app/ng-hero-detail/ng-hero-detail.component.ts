import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../ng-hero/ng-hero.model';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { NgHeroService } from '../ng-hero/ng-hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-ng-hero-detail',
  templateUrl: './ng-hero-detail.component.html',
  styleUrls: ['./ng-hero-detail.component.css']
})
export class NgHeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  // hero: Hero;
  
  constructor(private heroService: NgHeroService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
