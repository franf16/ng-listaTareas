import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Tarea from '../tarea.model';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  @Input() tareas: Tarea[] = [];
  @Output() tareasChange = new EventEmitter<Tarea[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public borrarTarea(i: number) {
    this.tareas.splice(i, 1);
  }
}
