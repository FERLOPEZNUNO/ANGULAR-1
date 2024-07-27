//para convertir esto en 1 componente hemos de importar esto del core package de angular:
import { Component } from "@angular/core";

//creamos el decorator:
@Component({

    //definimos el selector, es decir, la etiqueta que le dirá a angular qué elementos en pantalla van a ser controlados por nuestro component:
    //la convencion es usar 2 palabras separadas por 1 dash:
    selector: 'app-header',
    //el standalone=true marca este componente como un Standalone Component. En el pasado había otro tipo de componentes, ahora casi
    //siempre se usan los standalone.
    standalone: true,
    //el template define el contenido que será mostrado x este componente (html externo). Se indica el path relativo desde este .ts:
    templateUrl: './header.component.html'
    
})


//exportamos la clase para que pueda ser usada en otros files. El nombre es lo que quieras,
//la convención es describir lo que la clase va a ser (un header) + el tipo (componente).
export class HeaderComponent {}