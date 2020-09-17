import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { GitSearchService } from './git-search.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home/home.component';
import { RepoComponent } from '../app/repo/repo/repo.component'
//import { NgProgressModule } from 'ngx-progressbar/core';
//import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    RepoComponent,
    DateCountPipe,
    HighlightDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    //NgProgressModule.forRoot(),
    //NgProgressHttpModule,

  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
