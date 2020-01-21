import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class UserService {
  users: User[] = [];
private APIURL = 'http://localhost:8000/users';
  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.APIURL);
  }
  getUser(id: number) {
    return this.http.get(this.APIURL + '/' + id);
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: User) {
    return this.http.patch(this.APIURL + '/' + user.id,user);

  }


  createUser(user: User) {
    return this.http.post(this.APIURL , user);

  }
}

