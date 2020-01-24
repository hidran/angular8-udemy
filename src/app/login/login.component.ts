import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {User} from "../classes/User";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private  auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  async signIn(form: NgForm) {
    if(!form.valid){
      return false;
    }
 try {
   const resp = await this.auth.signIn(form.value.email, form.value.password)
     .toPromise();
   alert(resp.user_name + ' logged in successfully');
   this.router.navigate(['/']);
   ;
 } catch (e) {
      switch (e.status) {
        case 401:
            alert(e.error.error);
        case 404:
          alert(e.statusText)
          break;
        case 500:
          alert('error contacting server')
          break;
      }

 }
   /*this.auth.signIn(form.value.email, form.value.password)
     .subscribe(
       (payload: Jwt) => {
          alert('login successful');
         this.router.navigate(['/']);
       },
       ({error}) =>{
         alert(error.error);
         console.log(error)
       }

     )

    */

  }
}
