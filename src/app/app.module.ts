import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    NavBarComponent,
    HomeComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
