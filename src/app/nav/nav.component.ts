import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../classes/User";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() onNewUser = new EventEmitter()
  private isUserLOggedIn = false;
  private username:string;
  constructor(private auth : AuthService, private router: Router) {
    auth.usersignedin.subscribe(
      (user: User) =>  {
        this.username = user.name;
        this.isUserLOggedIn = true;
      }
    );
    auth.userlogout.subscribe(
      () =>  {
        this.username = '';
        this.isUserLOggedIn = false;
      }
    )
    auth.usersignedup.subscribe(
      (user: User) =>  {
        this.username = user.name;
        this.isUserLOggedIn = true;
      }
    )
  }

  ngOnInit() {
    this.isUserLOggedIn =  this.auth.isUserLoggedIn();
    if (this.isUserLOggedIn) {
      const user = this.auth.getUser();
      this.username = user.name;
    }
  }
  newUser() {
    this.onNewUser.emit();
  }
  logout(e) {
    e.preventDefault();
    this.auth.logout();
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 300);

  }
  signIn(e) {

    e.preventDefault();
    this.router.navigate(['login']);
  }
  signUp(e) {
    e.preventDefault();
    this.router.navigate(['signup']);
  }
}
