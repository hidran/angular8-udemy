import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
   showmenu = false;
   isCollapsed = false;
  private isUserLOggedIn = false
  constructor(private auth : AuthService,private router: Router) {
  }

  ngOnInit() {
    this.isUserLOggedIn =  this.auth.isUserLoggedIn();
  }

  newUser() {
    this.onNewUser.emit();
  }
  toggleaMenu(){
    this.showmenu = !this.showmenu;
  }
  logout(e) {
    e.preventDefault();
    this.auth.logout();


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
