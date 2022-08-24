import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Tarea from '../../tarea.model';

@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.scss']
})
export class ItemTareaComponent implements OnInit {

  @Input() tarea: Tarea = new Tarea();
  @Output() tareaChange = new EventEmitter<Tarea>();

  @Input() indice: number = -1;

  @Output() borrarTarea = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
}
