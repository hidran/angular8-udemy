import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserService} from './services/user.service';
import {UserComponent} from './user/user.component';
import {FormsModule} from '@angular/forms';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NavComponent} from './nav/nav.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModealBasicComponent} from './modeal-basic/modeal-basic.component';
import {RouterModule, Routes} from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id',
    component: UserDataComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavComponent,
    ModealBasicComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
