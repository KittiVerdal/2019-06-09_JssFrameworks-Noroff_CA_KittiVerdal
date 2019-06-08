import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {
  title : String = 'Please log in to play the game';
  isUsername: Boolean = false;
  isPassword: Boolean = false;
  userObj;

  constructor(protected loginService: LoginService){}

  ngOnInit(){
    localStorage.setItem('Username', 'Admin');
    localStorage.setItem('Password', '@Admin123');
    this.userObj = this.loginService.getLoginDetails();
  }
  testUserDetails(userdetails){
    if (userdetails.username !== this.userObj.username || userdetails.password !== this.userObj.password) {
      this.title = 'Please login to continue to the game';
    }
    if (userdetails.password !== this.userObj.password){
      this.isPassword = true;
    }
   else {
    this.title = 'Welcome back' + userdetails.username;
    this.isPassword = false;
    this.isUsername = false;
  }
  }
}