import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-poke-api',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule
    ],
    templateUrl: './poke-api.component.html',
    styleUrl: './poke-api.component.css'
})

export class PokeApiComponent implements OnInit {
    pokemons: any[] = [];

    constructor(private pokemonService: PokeApiService) { }

    ngOnInit(): void {
      this.getPokemons();
    }

    getPokemons(): void {
        for (let i = 1; i <= 150; i++) {
            this.pokemonService.getPokemon(i)
            .subscribe(pokemon => {
                this.pokemons.push(pokemon);
            });
        }
    }
}
