import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Tarea from '../tarea.model';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})
export class AgregarTareaComponent implements OnInit {

  constructor(
    readonly el: ElementRef,
    private tareaService: TareaService
  ) { }

  ngOnInit(): void {
  }

  public agregarTarea(tareaForm: NgForm) {
    this.tareaService.agregarTarea(new Tarea(tareaForm.form.value.titulo));
    tareaForm.reset();
  }

  public formInvalido(tareaForm: NgForm) {
    return !tareaForm.form.valid;
  }
}
