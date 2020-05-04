import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketioService } from './socketio.service';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceSetupResolverService implements Resolve<boolean>{

  constructor(private socket: SocketioService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params.playerId) {
      this.socket.joinAsPlayer(route.params.gameId, route.params.playerId)
    } else if (route.params.operatorHash){
      this.socket.joinAsOperator(route.params.gameId, route.params.operatorHash)
    } else {
      return false;
    }
    
    return true;
  }
}
