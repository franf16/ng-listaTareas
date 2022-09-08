import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ItemTareaComponent } from './lista-tareas/item-tarea/item-tarea.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarTareaComponent,
    ListaTareasComponent,
    ItemTareaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    AgregarTareaComponent,
    ListaTareasComponent,
    ItemTareaComponent
  ]
})
export class TareaModule { }
