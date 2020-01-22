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
  signIn(email: string, password:string){

  }
  signUp(username:string, email: string, password:string){

  }
  logout() {
    this.isUserLogged = false;
  }
}
