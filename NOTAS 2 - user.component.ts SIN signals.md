user.component.ts SIN signals y USANDO COSAS RANDOM. VERSION ANTIGUA.


Lo que hay en el file user.component.ts de arriba es la forma actual de hacerlo desde angular 16. lo de abajo es como se hacía antes 
y se sigue haciendo en proyectos antiguos, sin signals:

import { Component } from '@angular/core';
//importamos el dummy users array para poder hacer lo de abajo 
import { DUMMY_USERS } from '../dummy-users';

//creamos 1 constante para generar un num rand dentro del rango del array dummy_users:
//math randon: genera 1 numero decimal rand entre 0 y 1
// *dummy_users.lenght: lo multiplica por la longitud del array. ahora tenemos 1 numero decimal entre 0 y dummy_users.lenght
//math.floor: redondea el num decimal hacia abajo al num int mas cercano
const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


//body de la clase. aqui abajo se puede poner codigo. lo 1º, or ej, esto es para sacar usuarios random y poner su foto y nombre
//se hace añadiendo "properties", por ej, el SelectedUser. es una variable, pero no hace falta poner el tipo delante (let o const o var, etc)
export class UserComponent {

  //se puede acceder a selectedUser desde el template html de este componente.
  selectedUser=DUMMY_USERS[randomIndex];

  //hacemos un getter para el path de la img:
  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  //metodo que se llamara desde el html cuando se haga click en el button. en angular, por convencion, se pone "on" 
  //cuando el metodo se ejecuta ante X evento:
  onSelectUser (){
    //esto de abajo haria que, cada vez que clicas, en la consola f12 del navegador salga el texto.
    //console.log('clicked!');
      
    //esto hace que se genere un nuevo randomIndex:
    const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length);

    //esto hace que cada vez que clicas el usuario cambie - a esto se le llama CAMBIAR EL "STATE":
    this.selectedUser=DUMMY_USERS[randomIndex];

  }
}

.
.
.
.

user component.ts CON signals y usando COSA RANDOM:

//importamos, ademas de "component" este, SIGNAL. signal nos permitirá crear signal values; y computed, que es algo extra de los signals.
import { Component, signal, computed } from '@angular/core';
//importamos el dummy users array para poder hacer lo de abajo 
import { DUMMY_USERS } from '../dummy-users';

//creamos 1 constante para generar un num rand dentro del rango del array dummy_users:
//math randon: genera 1 numero decimal rand entre 0 y 1
// *dummy_users.lenght: lo multiplica por la longitud del array. ahora tenemos 1 numero decimal entre 0 y dummy_users.lenght
//math.floor: redondea el num decimal hacia abajo al num int mas cercano
const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


//body de la clase. aqui abajo se puede poner codigo. lo 1º, or ej, es para sacar usuarios random y poner su foto y nombre
//se hace añadiendo "properties", por ej, el SelectedUser. es una variable, pero no hace falta poner el tipo delante (let o const o var, etc)
export class UserComponent {

  //se puede acceder a selectedUser desde el template html de este componente.
  //lo de abajo esta hecho con signals. se pone el signal y entre paréntesis el valor inicial. 
  //los signals son containers que, cuando el valor de dentro cambia, notifican a angular para que updatee la UI de forma acorde:
  selectedUser= signal( DUMMY_USERS[randomIndex]);

  //hacemos un getter para el path de la img (sin SIGNALS):
  //get imagePath(){
  //    return 'assets/users/' + this.selectedUser.avatar;
  //}

  //CON SIGNALS y COMPUTED. le pasas un metodo al computed :
  imagePath=computed(()=> 'assets/users/'+this.selectedUser().avatar)

  //metodo que se llamara desde el html cuando se haga click en el button. en angular, por convencion, se pone "on" 
  //cuando el metodo se ejecuta ante X evento:
  onSelectUser (){
    //esto de abajo haria que, cada vez que clicas, en la consola f12 del navegador salga el texto.
    //console.log('clicked!');
      
    //esto hace que se genere un nuevo randomIndex:
    const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length);

    this.selectedUser.set(DUMMY_USERS[randomIndex]);

    //esto hace que cada vez que clicas el usuario cambie - a esto se le llama CAMBIAR EL "STATE". SIN SIGNAL.
    //this.selectedUser=DUMMY_USERS[randomIndex];

  }
}