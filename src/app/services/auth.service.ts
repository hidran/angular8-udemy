import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = true;

  constructor() {
  }

  isUserLoggedIn() {
    return this.isUserLogged;
  }
  signin(email: string, password:string){

  }
  signup(username:string, email: string, password:string){

  }
  logout() {
    this.isUserLogged = false;
  }
}
