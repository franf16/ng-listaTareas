import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Tarea from '../../tarea.model';
import { TareaService } from '../../tarea.service';

@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.scss']
})
export class ItemTareaComponent implements OnInit {

  @Input() tarea: Tarea = new Tarea();
  @Input() indice: number = -1;

  constructor(
    private tareaService: TareaService
  ) {}

  ngOnInit(): void {
  }

  compartirTarea(t: Tarea) {
    console.log('compartida')
  }

  copiarTituloTarea(titulo: String) {
    console.log('copiado')
  }

  borrarTarea() {
    this.tareaService.borrarTarea(this.indice);
  }
}
