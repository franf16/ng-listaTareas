import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrashIconComponent } from './icons/trash-icon/trash-icon.component';
import { AgregarTareaComponent } from './tarea/agregar-tarea/agregar-tarea.component';
import { ListaTareasComponent } from './tarea/lista-tareas/lista-tareas.component';
import { ItemTareaComponent } from './tarea/lista-tareas/item-tarea/item-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TrashIconComponent,
    AgregarTareaComponent,
    ListaTareasComponent,
    ItemTareaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
