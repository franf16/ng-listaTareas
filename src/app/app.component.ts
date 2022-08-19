import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '01-lista_tareas';
  tareas = [
    {
      titulo: "Tarea N",
      completada: false
    },
    {
      titulo: "Tarea N - 1",
      completada: true
    }
  ];
  nuevaTarea = "";

  public agregarTarea() {
    this.tareas.push({
      titulo: this.nuevaTarea,
      completada: false
    });
    this.nuevaTarea = '';
  }

  public borrarTarea(i: number) {
    this.tareas.splice(i, 1);
  }

  public toggleCompletada(i: number) {
    this.tareas[i].completada = !this.tareas[i].completada
  }
}
