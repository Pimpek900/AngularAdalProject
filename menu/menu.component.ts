import { Component, OnInit, Input, Output } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'App';


  newadalsvc: MsAdalAngular6Service;

  constructor(private adalSvc: MsAdalAngular6Service) {
  }

  ngOnInit() {
  }

  UserInfo(){
    console.log(this.adalSvc.LoggedInUserName)
  }

  onClickMe() {
    this.adalSvc.logout()
    console.log("logout()")
  }
}
