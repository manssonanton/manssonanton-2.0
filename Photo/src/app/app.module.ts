// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//Packages
import { NgxMasonryModule } from 'ngx-masonry';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from '../app/Components/navbar/navbar.component';
import { PortfolioComponent } from '../app/Components/portfolio/portfolio.component';
import { HomeComponent } from '../app/Components/home/home.component';
import { AboutComponent } from '../app/Components/about/about.component';
import { FooterComponent } from '../app/Components/footer/footer.component';
import { KyotoComponent } from '../app/Components/kyoto/kyoto.component';
import { CarouselComponent } from '../app/Components/carousel/carousel.component';
import { OsakaComponent } from '../app/Components/osaka/osaka.component';
import { MalmoComponent } from '../app/Components/malmo/malmo.component';
import { FeaturesComponent } from '../app/Components/features/features.component';
import { PageNotFoundComponent } from '../app/Components/page-not-found/page-not-found.component';
import { ModalComponent } from '../app/Components/modal/modal.component';

// Services
import { ProcessHTTPMsgService } from './Services/process-httpmsg.service';
import { PhotoService } from '../app/Services/photo.service';
import { HttpReqInterceptor } from '../app/Services/http-req-interceptor';

//Routing
import { AppRoutingModule } from './app-routing.module';
import { HighlightDirective } from './directives/highlight.directive';
import { AppearDirective } from './directives/appear.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    KyotoComponent,
    CarouselComponent,
    OsakaComponent,
    MalmoComponent,
    FeaturesComponent,
    PageNotFoundComponent,
    ModalComponent,
    HighlightDirective,
    AppearDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpReqInterceptor,
      multi: true
    },
    PhotoService,
    ProcessHTTPMsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
