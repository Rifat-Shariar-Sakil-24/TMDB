import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// hide console logs for production 
if (environment.production) {
  
  console.log = () => {};
  console.warn = () => {};
  console.info = () => {};
  console.debug = () => {};

  //console.error = () => {};
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
