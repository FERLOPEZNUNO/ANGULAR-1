import { Component, EventEmitter, input, Input, Output} from '@angular/core';

//VER NOTAS2 PARA VERSIONES ANTIGUAS CON SIGNAL & RANDOM MATH. AHI ESTAN COMMENTS EXPLICANDO TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css' 
})

export class UserComponent {

  //añadimos una property que sera setteable desde fuera y le añadimos 1 Input decorator. esto permitira settearlo desde fuera, concretamente desde el html.
  //para ello, habremos de importar "Input" arriba en imports para poder usarlo.

  //en typescript podemos asignar un tipo de variable a una variable poniendo : detrás del nombre de ésta y luego el tipo.
  //ponemos ! despues del nombre para que no de error diciendonos que la variable no esta inicializada:
  @Input({required:true}) id!: string;
  @Input({required: true}) havattar!:string;
  @Input({required:true}) name!:string; 

  //para hacer esto mismo con signals, habría que importar en 1er lugar "input" (con i minus), que es una funcion especial, además de Input (el decorator),
  // y quedaría algo como lo de abajo. lo que se pone entre <> es lo que se espera recibir (un string, la ruta de la foto).
  //havattar = input.required<string>();
  //name = input.required<string>();
  //OJO: a diferencia de en los otros casos (ver NOTAS2), usando signals aqui no cambia como se llaman desde fuera (el html de app.comp... en este caso),
  //PERO sí que hay que añadir () detrás de name, por ej, en el user.component.html, ya que se llama a la función "name()".

  //outputs: para que ocurra X cuando clicamos en un botón. Hay que importar "output" y "EventEmitter" (ver arriba de todo); entre <>, el tipo de lo q se emite:
  @Output() seleccionar = new EventEmitter<string>();

  //hay otra forma de hacer los outputs, aun poco extendida segun el tuto. hay que importar output (o minus) y hacerlo así:
  //seleccionar = output<string>();   <--- no hace falta tocar lo de abajo del onSelectUser(), ya que también estas usando un EventEmitter,
  //solo que con output (o minus) te lo crea angular automaticamente. el html se deja EXACTAMENTE IGUAL!!
  //la razón de usar esto en lugar de lo otro es que esto es literalmente 5 o 6 caracteres mas corto que lo otro... 

  get imagePath(){  
    return 'assets/users/' + this.havattar
  }

  onSelectUser (){

    //establecemos que el "seleccionar" emita un nuevo valor, que será el id (este método se llama desde el html de user).
    this.seleccionar.emit(this.id);

  }
}
