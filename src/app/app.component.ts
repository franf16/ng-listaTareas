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
    {
      titulo: "Tarea N",
      completada: false
    },
    {
      titulo: "Tarea N + 1",
      completada: true
    }
  ];
}
