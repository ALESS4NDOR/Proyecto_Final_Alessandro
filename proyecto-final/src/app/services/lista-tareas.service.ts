import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ListaTareasService {
    private localStorageKey = 'listaTareas';

    getTareas():string[] {
        // Devuelve la variable localStorageKey en formato JSON. Si no existe, devuelve un array vacío.
        return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
    }

    agregarTarea(tarea: string) {
        if (tarea.length === 0) {
          alert("Escribe algo perro");
        } else {
          const tareas = this.getTareas();
          tareas.push(tarea);
          // El setItem sirve para crear o modificar los datos le pasamos, como primer parámetro el localStorageKey (la clave)
          // y como segundo parámetro le pasamos la version string del JSON.
          localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
        }
    }

    eliminarTarea(index: number) {
        const tareas = this.getTareas();
        // Con splice() se elimina el elemento de la posición indicada y se devuelven los elementos que quedan después de él.
        tareas.splice(index, 1);
        localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
    }
}