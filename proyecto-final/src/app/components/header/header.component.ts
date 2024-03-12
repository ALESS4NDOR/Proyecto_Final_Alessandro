import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {
    constructor(public router: Router) {}

    buscar(termino: string) {
        switch (termino.toLowerCase()) {
            case 'calculadora':
                this.router.navigate(['/calculadora']);
                break;
            case 'lista tareas':
                this.router.navigate(['/lista-tareas']);
                break;
            case 'adivinar numero':
                this.router.navigate(['/adivina-numero']);
                break;
            default:
                alert('No se reconoce el término de búsqueda');
                break;
        }
    }
}