import { Component, OnInit } from '@angular/core';
import { PokemonInfo } from '../shared/models/pokemoninfo';
import { Pokemon } from '../shared/models/pokemon';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  public pokemonsSave: Pokemon[] = [];
  public infoPokemon?: PokemonInfo = undefined;

  constructor() {}

  ngOnInit(): void {
    this.read();
  }

  async showInformation(id: number)
  {
    this.infoPokemon = JSON.parse(localStorage.getItem('pokemoninfo' + String(id))!);
  }

  read()
  {
    this.pokemonsSave = JSON.parse(localStorage.getItem('pokemon')!);
  }
}
