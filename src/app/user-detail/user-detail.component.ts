import {Component, OnInit, Input} from '@angular/core';
import {User} from '../classes/User';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private usercopy;
  private __user;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.user = new User();
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')) {
        return;
      }
      this.userService.getUser(+params.get('id')).subscribe(response => this.user = response['data']);

    });
  }
backToUsers(){
    this.router.navigate(['users']);
}
  saveUser() {
    if (this.user.id > 0) {
      this.updateUser();
    } else {
      this.createUser();
    }

  }

  private updateUser() {
    this.userService.updateUser(this.user).subscribe(
      response => {

        if (response['success']) {
          alert('User ' + this.user.name + ' modificato corettamente');
          this.router.navigate(['users']);

        } else {
          alert(response['message']);
        }
      }
    );
  }

  private createUser() {
    this.userService.createUser(this.user).subscribe(
      response => {

        if (response['success']) {
          alert('User ' + this.user.name + ' creato corettamente');
          this.router.navigate(['users']);

        } else {
          alert(response['message']);
        }
      }
    );
  }

  resetForm(form) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }

  }
}
