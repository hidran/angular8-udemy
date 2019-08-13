import { Injectable } from '@angular/core';
import {User} from '../classes/user';

@Injectable()

  export class UserService {
    users: User[] = [
      {
         id: 1,
          name: 'Hidran1',
          lastname: 'Arias',
          email: 'hidran@gmail.com',
          fiscalcode: 'RSAHRN72M22Z444S',
          province: 'Torino',
          phone: '454545455',
          age: 43

      } ,
      {
        id: 2,
          name: 'Hidran2',
          lastname: 'Arias',
          email: 'hidran@gmail.com',
          fiscalcode: 'RSAHRN72M22Z444S',
          province: 'Torino',
          phone: '454545455',
          age: 43
      },
      {
        id: 3,
          name: 'Hidran3',
          lastname: 'Arias',
          email: 'hidran@gmail.com',
          fiscalcode: 'RSAHRN72M22Z444S',
          province: 'Torino',
          phone: '454545455',
          age: 43
      },
      {
        id: 4,
          name: 'Hidran4',
          lastname: 'Arias',
          email: 'hidran@gmail.com',
          fiscalcode: 'RSAHRN72M22Z444S',
          province: 'Torino',
          phone: '454545455',
          age: 43
      }
  ];
    constructor() {
    }
   getUsers() {
       return  this.users;
   }
   deleteUser(user){
     let index = this.users.indexOf(user);
     if(index>=0){
      this.users.splice(index,1);
     }

   }
}

