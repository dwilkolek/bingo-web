import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OperatorComponent } from './operator/operator.component';
import { PlayerComponent } from './player/player.component';
import { PlayerCountComponent } from './components/player-count/player-count.component';
import { GameStatusComponent } from './components/game-status/game-status.component';
import { LastCalledComponent } from './components/last-called/last-called.component';
import { BingoCellComponent } from './components/bingo-cell/bingo-cell.component';
import { BingoCardComponent } from './components/bingo-card/bingo-card.component';
import { WinnerComponent } from './components/winner/winner.component';
import { SocketServiceSetupResolverService } from './socket-service-setup-resolver.service';
import { GameSidebarComponent } from './components/game-sidebar/game-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OperatorComponent,
    PlayerComponent,
    PlayerCountComponent,
    GameStatusComponent,
    LastCalledComponent,
    BingoCellComponent,
    BingoCardComponent,
    WinnerComponent,
    GameSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      {
        path: 'player/:gameId/:playerId', component: PlayerComponent, resolve: {
          setupService: SocketServiceSetupResolverService
        }
      },
      {
        path: 'operator/:gameId/:operatorHash', component: OperatorComponent, resolve: {
          setupService: SocketServiceSetupResolverService
        }
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
