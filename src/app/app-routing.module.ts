import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { LoginComponent } from './login/login.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  { path: 'home', component: TopheadingComponent }, //home
  { path: 'tech', component: TechnewsComponent }, //tech news
  { path: 'business', component: BusinessnewsComponent }, //business
  { path: 'entertainment', component: EntertainmentnewsComponent }, //entertainment
  { path: 'health', component: HealthnewsComponent }, //health
  { path: 'science', component: SciencenewsComponent }, //science
  { path: 'sports', component: SportsnewsComponent }, //sports
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, //login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
