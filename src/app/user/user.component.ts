import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //inputs: ['user:user-data']
})
export class UserComponent implements OnInit {
  @Input('user-data') user;
  constructor() { }

  ngOnInit() {
  }

}
