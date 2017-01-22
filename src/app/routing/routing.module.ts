import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgHeroComponent } from '../ng-hero/ng-hero.component';
import { NgHeroDetailComponent } from '../ng-hero-detail/ng-hero-detail.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: NgHeroComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: NgHeroDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
