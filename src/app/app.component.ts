import { Component } from '@angular/core';
import Tarea from './tarea/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '01lista_tareas';
  tareas: Tarea[] = [
    new Tarea('Tarea N'),
    new Tarea('Tarea N + 1', true)
  ];
}
