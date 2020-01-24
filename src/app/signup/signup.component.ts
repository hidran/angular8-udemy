import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
   /* this.auth.usersignedup.subscribe( () => {
      this.router.navigate(['/']);
    });

    */
  }
  signUp(form: NgForm) {
    this.auth.signUp(form.value.name, form.value.email, form.value.password)
      .subscribe(resp =>{
          alert(resp.user_name + ' registered correctly');
          this.router.navigate(['/']);
      },
        ({error}) =>{
           alert(error.error)
        }
      )
  }
}
