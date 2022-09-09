import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Tarea from '../tarea.model';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  tareas: Tarea[] = [];

  constructor(
    private tareaService: TareaService
  ) {
    this.tareas = this.tareaService.getTareas();
  }

  ngOnInit(): void {
  }
}
