import { Component, OnInit, inject } from '@angular/core';
import { ListaTareasService } from '../../services/lista-tareas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-lista-tareas',
    standalone: true, // Indica que el componente se comporta como un micromodulo
    imports: [
        FormsModule,
        CommonModule
    ],
    templateUrl: './lista-tareas.component.html',
    styleUrl: './lista-tareas.component.css'
})

// El OnInit sirve que para que cuando se ejecute el componente me traiga la lista de tareas
export class ListaTareasComponent implements OnInit{
    listaTareas:string[] = [];
    nuevaTarea:string = '';

    private _ListaTareasService = inject(ListaTareasService); // Inyección de dependencia, sirve para acceder a los metodos del servicio

    ngOnInit(): void {
        this.listaTareas = this._ListaTareasService.getTareas();
    }

    agregarTarea() {
        this._ListaTareasService.agregarTarea(this.nuevaTarea); // Agrego nueva tarea
        this.nuevaTarea = ''; // vacio el input
        this.listaTareas = this._ListaTareasService.getTareas(); // Recojo las tareas que habia y las tareas nuevas
    }

    eliminarTarea(index: number) {
      this._ListaTareasService.eliminarTarea(index);
      this.listaTareas = this._ListaTareasService.getTareas();
  }
}
