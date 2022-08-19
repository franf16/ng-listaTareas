import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  public agregarTarea(tareaForm: NgForm) {
    // console.log(tareaForm)
    this.tareas.push({
      titulo: tareaForm.form.value.tituloTarea,
      completada: false
    });
    tareaForm.reset();
  }

  public borrarTarea(i: number) {
    this.tareas.splice(i, 1);
  }

  public toggleCompletada(i: number) {
    this.tareas[i].completada = !this.tareas[i].completada
  }
}
