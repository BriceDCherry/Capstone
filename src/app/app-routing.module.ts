import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { HouseQuizComponent } from './house-quiz/house-quiz.component';
import { HouseListComponent } from './house-list/house-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonComponent } from './person/person.component';


const routes: Routes = [{
  path: '',
  redirectTo: "/house",
  pathMatch: "full"
}, {
  path: "house",
  component: HouseListComponent
}, {
  path: "sort",
  component: HouseQuizComponent
}, {
  path: "community",
  component: CommunityComponent
}, {
  path: "community/:id",
  component: PersonComponent
}, {
  path: "**",
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
