import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-calculadora',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule
    ],
    templateUrl: './calculadora.component.html',
    styleUrl: './calculadora.component.css'
})

export class CalculadoraComponent {
    displayValue: string = '';

    addToDisplay(value: string) {
        this.displayValue += value;
    }

    clear() {
        this.displayValue = '';
    }

    backspace() {
        this.displayValue = this.displayValue.slice(0, -1); // Elimino el ultimo carácter de la cadena 
    }

    calcular() {
        this.displayValue = eval(this.displayValue); // Evalua la expresion de la cadena y devuelve su valor
    }

    toggleTheme() {
        const calculadora = document.querySelector('.calculadora');
        const themeToggleBtn = document.querySelector('.theme-toggler');

        if (calculadora && themeToggleBtn) {
            calculadora.classList.toggle('dark');
            themeToggleBtn.classList.toggle('active');
        }
    }
}