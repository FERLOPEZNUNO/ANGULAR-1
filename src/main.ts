import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header.component';

//esto indica a angular que se debe tener en cuenta este componente en concreto:
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

//no se hacen varios bootstraps, uno para comp. se usa UNO solo y todo va a ahi en forma de "arbol".
//bootstrapApplication(HeaderComponent);

 