export interface PokemonInfo
{
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites : Sprites;
  species : Species;
  abilities : Abilities[];
  game_indices : GameIndex[];
}

export interface GameIndex
{
    game_index: number;
    version: Version;
}

export interface Version
  {
      name: string;
      url: string;
  }

export interface Sprites
{
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Species
{
    name: string;
    url: string;
}

export interface Abilities
{
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}

export interface Ability
{
    name: string;
    url: string;
}

