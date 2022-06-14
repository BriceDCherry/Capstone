import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapstoneComponent } from './capstone/capstone.component';
import { HouseComponent } from './house/house.component';
import { HouseQuizComponent } from './house-quiz/house-quiz.component';
import { CommunityComponent } from './community/community.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HouseListComponent } from './house-list/house-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CapstoneComponent,
    HouseComponent,
    HouseQuizComponent,
    CommunityComponent,
    PageNotFoundComponent,
    HouseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
