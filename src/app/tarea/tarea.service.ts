import { Injectable } from '@angular/core';
import Tarea from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareas: Tarea[] = [
    new Tarea('Tarea N'),
    new Tarea('Tarea N + 1', true)
  ]

  constructor() { }

  public getTareas() {
    return this.tareas;
  }

  public borrarTarea(i: number) {
    this.tareas.splice(i, 1);
  }

  public agregarTarea(tarea: Tarea) {
    this.tareas.unshift(tarea);
  }
}
