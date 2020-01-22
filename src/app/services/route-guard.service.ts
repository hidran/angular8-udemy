import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor( private router: Router, private auth: AuthService) {

  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
              ){
    if( this.auth.isUserLoggedIn()){
      return true;
    } else {
      this.router.navigate(['login']);

    }

  }
}
