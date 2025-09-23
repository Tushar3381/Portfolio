// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule), // provides HttpClient for standalone apps
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
