import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AgregarTareaComponent } from './tarea/agregar-tarea/agregar-tarea.component';
import Tarea from './tarea/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = '01lista_tareas';
  tareas: Tarea[] = [
    new Tarea('Tarea N'),
    new Tarea('Tarea N + 1', true)
  ];

  @ViewChild('agregarTarea') elAgregarTarea!: AgregarTareaComponent;
  @ViewChild('divider') elDivider!: ElementRef<HTMLHRElement>;

  constructor() {}

  ngAfterViewInit() {
    const agregarTareaTituloInput = this.elAgregarTarea.el.nativeElement.querySelector('input[name="titulo"]');
    new IntersectionObserver( 
      ([ e ]) => {
        const c = e.intersectionRatio < 1;
        this.elAgregarTarea.el.nativeElement.classList.toggle("sticked", c);
        agregarTareaTituloInput.placeholder = c ? 'Escribe una tarea...' : '';
      }, 
      {
        rootMargin: '-45px',
        threshold: [ 1 ]
      }
    ).observe(this.elDivider.nativeElement);
  }
}
