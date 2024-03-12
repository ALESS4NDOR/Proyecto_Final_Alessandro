import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PokeApiService {
    private baseUrl = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) { }

    getPokemon(numero: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/pokemon/${numero}`);
    }
}
