import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneoComponent } from './torneo/torneo.component';
import { ChatComponent } from './torneo/chat/chat.component';
import { PartidosListaComponent } from './torneo/partidos-lista/partidos-lista.component';
import { BracketComponent } from './torneo/bracket/bracket.component';
import { PartidoLiveComponent } from './torneo/partido-live/partido-live.component';

@NgModule({
  declarations: [
    AppComponent,
    TorneoComponent,
    ChatComponent,
    PartidosListaComponent,
    BracketComponent,
    PartidoLiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
