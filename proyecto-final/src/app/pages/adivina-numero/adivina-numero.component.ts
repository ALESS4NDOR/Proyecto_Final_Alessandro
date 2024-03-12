import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-adivina-numero',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule
    ],
    templateUrl: './adivina-numero.component.html',
    styleUrl: './adivina-numero.component.css'
})

export class AdivinaNumeroComponent implements OnInit{ // OnInit se ejecuta una vez que el componente se haya inicializado.
    numeroAleatorio: number = 0;
    numeroIngresado: number = 0;
    mensaje: string = '¡A jugar!';
    mensajeColor: string = 'black';
    inputDisabled: boolean = false;
    intentos: number = 0;

    ngOnInit() {
        this.numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    }

    resultado() {
        this.intentos++;

        if (isNaN(this.numeroIngresado) || this.numeroIngresado < 1 || this.numeroIngresado > 100) {
            this.mensaje = 'Por favor, introduce un número válido entre 1 y 100.';
            this.mensajeColor = 'black';
            return;
        }

        if (this.numeroIngresado === this.numeroAleatorio) {
            this.mensaje = '¡Felicidades! ¡Has adivinado el número!';
            this.mensajeColor = 'green';
            this.inputDisabled = true; // Deshabilitar el input
        } else if (this.numeroIngresado < this.numeroAleatorio) {
            this.mensaje = 'El número es mayor. Intenta de nuevo.';
            this.mensajeColor = 'red';
        } else {
            this.mensaje = 'El número es menor. Intenta de nuevo.';
            this.mensajeColor = 'red';
        }
    }
}