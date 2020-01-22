import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from "../classes/User";

@Injectable()
export class AuthService {
  private isUserLogged = false;
  @Output() usersignedin = new EventEmitter<User>()
  @Output() usersignedup = new EventEmitter<User>()
  @Output() userlogout = new EventEmitter()

  constructor() {
  }

  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem('token');
    return this.isUserLogged;
  }

  signIn(email: string, password: string) {

    localStorage.setItem('token', email);
    let user = new User();
    user.name = 'Test';
    user.email = email;
    this.usersignedin.emit(user);
    return true;

  }

  signUp(username: string, email: string, password: string) {

    localStorage.setItem('token', email);
    let user = new User();
    user.name = username;
    user.email = email;
    this.usersignedup.emit(user);
    return true;
  }

  logout() {
    localStorage.removeItem('token');
    this.userlogout.emit();
    this.isUserLogged = false;
  }
}
