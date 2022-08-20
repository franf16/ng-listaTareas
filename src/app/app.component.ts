import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Tarea from './tarea/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '01-lista_tareas';
  tareas: Tarea[] = [
    {
      titulo: "Tarea N",
      completada: false
    },
    {
      titulo: "Tarea N - 1",
      completada: true
    }
  ];

  public borrarTarea(i: number) {
    this.tareas.splice(i, 1);
  }

  public toggleCompletada(i: number) {
    this.tareas[i].completada = !this.tareas[i].completada
  }

  public indiceInverso(i: number) {
    return this.tareas.length - 1 - i;
  }
}
