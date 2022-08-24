import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Tarea from '../tarea.model';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})
export class AgregarTareaComponent implements OnInit {

  @Input() tareas: Tarea[] = [];
  @Output() tareasChange = new EventEmitter<Tarea[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public agregarTarea(tareaForm: NgForm) {
    // console.log(tareaForm)
    this.tareas.unshift(new Tarea(tareaForm.form.value.titulo));
    tareaForm.reset();
  }

  public formInvalido(tareaForm: NgForm) {
    return !tareaForm.form.valid;
  }
}
