import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // <--- nombre del componente. se usara para invocarlo. 
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',  // <---- html&css asociados al componente. su contenido es lo que saldrá dentro de las etiquetas <app-root...>
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'udemy';
}
