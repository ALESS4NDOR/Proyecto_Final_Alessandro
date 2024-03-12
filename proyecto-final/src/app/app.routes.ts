import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { CalculadoraComponent  } from './pages/calculadora/calculadora.component';
import { AdivinaNumeroComponent } from  './pages/adivina-numero/adivina-numero.component';
import { PokeApiComponent } from './pages/poke-api/poke-api.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent, title: 'Home'},
    {path: 'clima', component:ClimaComponent, title: 'Clima'},
    {path: 'poke-api', component:PokeApiComponent, title: 'PokeAPI'},
    {path: 'lista-tareas', component:ListaTareasComponent, title: 'Lista Tareas'},
    {path: 'calculadora', component:CalculadoraComponent, title: 'Calculadora'},
    {path: 'adivina-numero', component:AdivinaNumeroComponent, title: 'Adivina el Número'},
    {path: '**', redirectTo: '', pathMatch:'full' },
];
