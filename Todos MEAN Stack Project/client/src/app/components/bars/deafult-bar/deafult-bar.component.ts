import { AuthService } from './../../../services/auth.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deafult-bar',
  templateUrl: './deafult-bar.component.html',
  styleUrls: ['./deafult-bar.component.css']
})
export class DeafultBarComponent implements OnInit {

  constructor(
    private userService : UserService,
    private authService : AuthService
  ) { }

  ngOnInit(): void {

  }
  get profileName():string{
    return this.userService.getUser().name
  }
  
  get userLoggedIn():boolean{
    return this.userService.isLoggedIn()
  }

   
  signout(){ 
    this.authService.signout()
  }
}
