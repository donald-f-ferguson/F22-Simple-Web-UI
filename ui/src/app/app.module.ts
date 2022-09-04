import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ImdbartistComponent } from './imdbartist/imdbartist.component';

import { ReactiveFormsModule } from '@angular/forms';
import {PlayerComponent} from './player/player.component';
import { SnuffleComponent } from './snuffle/snuffle.component';
import { ConnieComponent } from './connie/connie.component';
import { NavtestComponent } from './navtest/navtest.component';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { ImdbAllComponent } from './imdb-all/imdb-all.component';
import { ImdbTitleComponent } from './imdb-title/imdb-title.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImdbartistComponent,
    PlayerComponent,
    SnuffleComponent,
    ConnieComponent,
    NavtestComponent,
    ImdbAllComponent,
    ImdbTitleComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbNavModule
    ],
  providers: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


