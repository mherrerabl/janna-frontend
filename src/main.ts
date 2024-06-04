/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { register as registerSwiperElement } from 'swiper/element/bundle';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.development';

registerSwiperElement();

if (environment.production) {
  enableProdMode();
}

provideHttpClient(withFetch());
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if ('serviceWorker' in navigator && environment.production) {
      navigator.serviceWorker.register(
        '../dist/frontend/browser/ngsw-worker.js'
      );
    }
  })
  .catch((err) => console.error(err));
