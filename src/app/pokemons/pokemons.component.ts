import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonInfo } from '../shared/models/pokemoninfo';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public infoPokemon?: PokemonInfo = undefined;
  public totalRecords : number = 1280;
  public offset : number = 0;
  public limit : number = 20;
  private idPokemon : number = 0;
  private indice : number = 0;
  private index: number = 0;
  private pokemonsSave: Pokemon[] = [];
  private pokemon?: Pokemon;
  private valueId : string | any;

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons();
    this.read();
  }

  async getAllPokemons()
  {
    const response = await this._pokemonService.getPokemons(this.limit,this.offset);

    response.json().then(resp => {
      this.pokemons = resp.results;
      this.pokemons.forEach((value) =>
      {
        const id = Number(value.url.split('/')[6]);
        value.id = id;
        value.index = this.indice;
        this.indice++;
      });
    }).catch(( error ) => console.log('Error al obtener los pokemons', error));
  }

  async showInformation(id: number, index: number)
  {
    this.idPokemon = id;
    this.index = index;

    const response = await this._pokemonService.getPokemon(this.idPokemon);

    response.json().then(resp => {
      this.infoPokemon = resp;
    }).catch(( error ) => console.log('Error al obtener la información del pokemon', error));
  }

  increment()
  {
    this.offset+=this.limit;
    this.getAllPokemons();
    this.infoPokemon = undefined;
  }

  decrement()
  {
    this.offset-=this.limit;
    this.getAllPokemons();
    this.infoPokemon = undefined;
  }

  save()
  {
    this.valueId = localStorage.getItem('pokemonid' + String(this.idPokemon));
    if(this.valueId == null)
    {

      this.pokemon = this.pokemons[this.index];

      if(this.pokemonsSave === null)
      {
        this.pokemonsSave = [];
      }
      this.pokemonsSave.push(this.pokemon);

      localStorage.setItem('pokemonid' + String(this.idPokemon), String(this.idPokemon));
      localStorage.setItem('pokemon',JSON.stringify(this.pokemonsSave));
      localStorage.setItem('pokemoninfo' + String(this.idPokemon),JSON.stringify(this.infoPokemon));
    }
  }

  read()
  {
    this.pokemonsSave = JSON.parse(localStorage.getItem('pokemon')!);
  }

}
