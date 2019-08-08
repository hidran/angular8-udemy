import { Injectable } from '@angular/core';

@Injectable()

  export class UserService {
    constructor() {
    }
   getUsers() {
       return [
           {
               name: 'Hidran1',
               lastname: 'Arias',
               email: 'hidran@gmail.com',
               fiscalcode: 'RSAHRN72M22Z444S',
               province: 'Torino',
               phone: '454545455',
               age: 43
           } ,
           {
               name: 'Hidran2',
               lastname: 'Arias',
               email: 'hidran@gmail.com',
               fiscalcode: 'RSAHRN72M22Z444S',
               province: 'Torino',
               phone: '454545455',
               age: 43
           },
           {
               name: 'Hidran3',
               lastname: 'Arias',
               email: 'hidran@gmail.com',
               fiscalcode: 'RSAHRN72M22Z444S',
               province: 'Torino',
               phone: '454545455',
               age: 43
           },
           {
               name: 'Hidran4',
               lastname: 'Arias',
               email: 'hidran@gmail.com',
               fiscalcode: 'RSAHRN72M22Z444S',
               province: 'Torino',
               phone: '454545455',
               age: 43
           }
       ];
   }
}

