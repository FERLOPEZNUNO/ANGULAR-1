import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) dogName!:string; 
  @Output() seleccionarTask = new EventEmitter<string>();

  onSelectUserTask (){
    this.seleccionarTask.emit(this.dogName);
  }
}
 