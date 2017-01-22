import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
// import { SignupFormComponent } from './signup-form/signup-form.component';
// import { HeroComponent } from './hero/hero.component';
import { NgHeroComponent } from './ng-hero/ng-hero.component';
import { NgHeroDetailComponent } from './ng-hero-detail/ng-hero-detail.component';
// import { ArticleComponent } from './article/article.component';
// import { ContactComponent } from './contact/contact.component';
// import { AwesomePipe } from './contact/awesome.pipe';
// import { HighlightDirective } from './contact/highlight.directive';
// import {ContactService} from "./contact/contact.service";
// import {UserService} from "./user.service";
import { NgHeroService } from './ng-hero/ng-hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    // SignupFormComponent,
    // HeroComponent,
    NgHeroComponent,
    NgHeroDetailComponent,
    DashboardComponent,
    // ArticleComponent,
    // ContactComponent,
    // AwesomePipe,
    // HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    // ContactService,
    // UserService
    NgHeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
