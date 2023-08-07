import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})

export class PokemonService
{
  baseUrl = environment.apiUrl;
  constructor()
  {
  }

  async getPokemons(totalRecords: number, offset: number)
  {
    return await fetch(`${this.baseUrl}pokemon?limit=${totalRecords}&offset=${offset}`, { method: 'GET' });
  }

  async getPokemon(id: number)
  {
    return await fetch(`${this.baseUrl}pokemon/${id}`, { method: 'GET' });
  }

}
