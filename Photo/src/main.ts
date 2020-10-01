import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {NgxTypedJsModule} from 'ngx-typed-js';

if (environment.production) {
  enableProdMode();
}
// loading element container to transition
const loadingElement = document.querySelector(".app-loading");
const rootElement = document.querySelector(".root");
const cameraElement = document.querySelector(".camera-svg");


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // trigger the transition
  .then(() => {
    // animate__delay-1s
    rootElement.classList.add("scroll");
    cameraElement.classList.add("animate__animated");
    cameraElement.classList.add("animate__flash");
    cameraElement.classList.add("animate__delay-1s");
  })
  .then(() => setTimeout(() => {

    loadingElement.classList.add("loaded");
  }, 2000))
  // remove the loading element after the transition is complete to prevent swallowed clicks
  .then(() => setTimeout(() => loadingElement.remove(), 4000))
  .then(() => setTimeout(() => rootElement.classList.remove("scroll"), 3500))
  .catch(err => console.error(err));
