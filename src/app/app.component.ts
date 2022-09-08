import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgregarTareaComponent } from './tarea/agregar-tarea/agregar-tarea.component';
import Tarea from './tarea/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = '01lista_tareas';
  tareas: Tarea[] = [
    new Tarea('Tarea N'),
    new Tarea('Tarea N + 1', true)
  ];

  @ViewChild('agregarTarea') elAgregarTarea!: AgregarTareaComponent;
  @ViewChild('divider') elDivider!: ElementRef<HTMLHRElement>;

  constructor() {
    this.cambiarTema(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTimeout(() => document.body.classList.add('tema-transicion'), 100);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const agregarTareaTituloInput = this.elAgregarTarea.el.nativeElement.querySelector('input[name="titulo"]');
    new IntersectionObserver( 
      ([ e ]) => {
        const c = e.intersectionRatio < 1;
        this.elAgregarTarea.el.nativeElement.classList.toggle("sticked", c);
        agregarTareaTituloInput.placeholder = c ? 'Escribe una tarea...' : '';
      }, {
        rootMargin: window.innerWidth > 500 ? '-55px' : '-0px', // en mobile queda fijado sin scroll
        threshold: [ 1 ]
      }
    ).observe(this.elDivider.nativeElement);
  }

  cambiarTema(tema: "dark" | "light" | "" = "") {
    if (tema === "") {
      tema = document.body.classList.contains('tema-light') ? 'dark' : 'light';
    }
    document.body.classList.remove(`tema-${tema === 'light' ? 'dark' : 'light'}`);
    document.body.classList.add(`tema-${tema}`);
  }
}
