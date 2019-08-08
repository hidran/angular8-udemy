import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector : 'app-users',
  templateUrl: './users.component.html',
  styleUrls : ['./users.component.css']
})

export  class UsersComponent {
  title = 'Users';
  users = [];
  constructor(userService: UserService) {

    this.users = userService.getUsers();
  }
}
