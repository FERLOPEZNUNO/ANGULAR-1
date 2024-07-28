import { Component } from '@angular/core';

//para usar otros comps dentro de este, hay que importarlos:
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component"; 

//importamos el dummy users:
import { DUMMY_USERS } from './dummy-users';

//esto se llama "decorator"
@Component({ 
  selector: 'app-root', //<-- nombre del componente, se usara para invocarlo así: <app-root> </app-root>
  standalone: true,    //<--- en versiones antiguas de A habia otros tipos, ahora se puede usar solo standalone components.
  imports: [HeaderComponent, UserComponent, TaskComponent],  //<--- aqui se importan los otros componentes que vayan anidados en éste
  templateUrl: './app.component.html',    //<--- html & css asociados al como, su contenido es el que saldra dentro de las etiketas.
  styleUrl: './app.component.css',
})
export class AppComponent {

  //añadimos 1 propiedad que nos permita tener acceso a los DUMMY USERS desde dentro del html
  users= DUMMY_USERS;
 
  //creamos 1 variable para almacenar qué dog es seleccionado:
  selectedDogId= 'u1'; 

  //getter para devolver el dog seleccionado. se pone el ! al final porques i no dara error en el app...ts, ya que es posible que lo de abajo 
  //devuelva 'undefined'. con el ! le digo a typescript que eso NO va a ocurrir, que SIEMPRE voy a encontrar 1 user para el selectedDogId.
  get selectedDog(){
    return this.users.find((dog)=>dog.id === this.selectedDogId)!;
  }

  onSelectUserApp(id:string){
    this.selectedDogId = id;
  }

}
