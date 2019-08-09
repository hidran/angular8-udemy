import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector : 'app-users',
  templateUrl: './users.component.html',
  styleUrls : ['./users.component.css']
})

export  class UsersComponent implements OnInit{
  title = 'Users';
  users: User[] = [];
  constructor(private userService: UserService) {


  }
  ngOnInit(){
    this.users = this.userService.getUsers();
  }
  onDeleteUser(user: User){
    alert(user.name)
    this.userService.deleteUser(user);
  }
}
