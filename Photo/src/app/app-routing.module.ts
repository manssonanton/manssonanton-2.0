import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { KyotoComponent } from './kyoto/kyoto.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OsakaComponent } from './osaka/osaka.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: {animation: 'Home'} },
  { path: 'about', component: AboutComponent, data: {animation: 'About'}} ,
   { path: 'portfolio', component: PortfolioComponent, data: {animation: 'Contact'}},
   { path: 'features/kyoto', component: KyotoComponent },
   { path: 'features/osaka', component: OsakaComponent },
   { path: 'features', component: FeaturesComponent },
   { path: '**', component: PageNotFoundComponent },
   { path: 'home', redirectTo: '', pathMatch: 'full', data: {animation: 'Home'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
