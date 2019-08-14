import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class UserService {
  users: User[] = [];
private APIURL = 'http://localhost:8000/users';
  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.APIURL).subscribe(
      data => console.log(data),
      error => alert(error.message)
    );
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }


  createUser(user: UserInterface) {
    user.id = this.users.length + 1;
    this.users.splice(0, 0, user);

  }
}

