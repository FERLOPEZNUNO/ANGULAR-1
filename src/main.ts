import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header.component';

//esto indica a angular que se debe tener en cuenta este componente en concreto:
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(HeaderComponent);

