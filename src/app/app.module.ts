import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrashIconComponent } from './icons/trash-icon/trash-icon.component';
import { AgregarTareaComponent } from './tarea/agregar-tarea/agregar-tarea.component';
import { ListaTareasComponent } from './tarea/lista-tareas/lista-tareas.component';
import { ItemTareaComponent } from './tarea/lista-tareas/item-tarea/item-tarea.component';
import { ShareIconComponent } from './icons/share-icon/share-icon.component';
import { ClipboardIconComponent } from './icons/clipboard-icon/clipboard-icon.component';
import { CheckIconComponent } from './icons/check-icon/check-icon.component';
import { FullscreenIconComponent } from './icons/fullscreen-icon/fullscreen-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TrashIconComponent,
    AgregarTareaComponent,
    ListaTareasComponent,
    ItemTareaComponent,
    ShareIconComponent,
    ClipboardIconComponent,
    CheckIconComponent,
    FullscreenIconComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
