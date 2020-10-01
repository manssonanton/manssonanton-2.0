import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/Components/home/home.component';
import { AboutComponent } from '../app/Components/about/about.component';
import { PortfolioComponent } from '../app/Components/portfolio/portfolio.component';
import { KyotoComponent } from '../app/Components/kyoto/kyoto.component';
import { PageNotFoundComponent } from '../app/Components/page-not-found/page-not-found.component';
import { OsakaComponent } from '../app/Components/osaka/osaka.component';
import { FeaturesComponent } from '../app/Components/features/features.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: {animation: 'Home'} },
  { path: 'about', component: AboutComponent, data: {animation: 'About'}} ,
   { path: 'portfolio', component: PortfolioComponent, data: {animation: 'Portfolio'}},
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
