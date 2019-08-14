import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';
import {Router} from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],

})
export class UserComponent implements OnInit {

  @Input('user-data') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();


  constructor(private userService: UserService, private route: Router) {
  }

  ngOnInit() {
  }

  deleteUser() {

    this.userDeleted.emit(this.user);


  }

  updateUser() {
    this.route.navigate(['users', this.user.id, 'edit']);
    this.onSelectUser.emit(this.user);

  }
  showUserDetail() {
    this.route.navigate(['users', this.user.id]);
    this.onSelectUser.emit(this.user);

  }
}
