import {Component} from '@angular/core';
import {User} from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UMS';
  showForm = false;
  userSelected = new User();

  updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }
  newUser() {
    this.userSelected = new User();
    this.showForm = true;

  }
}
