import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
   showmenu = false;
   isCollapsed = false;
  constructor() {
  }

  ngOnInit() {
  }

  newUser() {
    this.onNewUser.emit();
  }
  toggleaMenu(){
    this.showmenu = !this.showmenu;
  }
}
