import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

//esto indica a angular que se debe tener en cuenta este componente en concreto:
bootstrapApplication(AppComponent).catch((err) => console.error(err));

//no se hacen varios bootstraps, uno para comp. se usa UNO solo y todo va a ahi en forma de "arbol".
//bootstrapApplication(HeaderComponent);