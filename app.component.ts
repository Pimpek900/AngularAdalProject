import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newadalsvc: MsAdalAngular6Service;

  constructor(private adalSvc: MsAdalAngular6Service, private httpService: HttpService) {

     if (!this.adalSvc.userInfo) {
       this.adalSvc.login();
     }
    }

    getPosts(){
      this.httpService.getPosts().subscribe(posts=>{
        console.log(posts);
      });
    }
    getPost(){
      this.httpService.getPost(0).subscribe(post=>{
        console.log(post);
      });
    }
    getPostByUser(){
      this.httpService.getPostByUser(1).subscribe(user=>{
        console.log(user);
      });
    }



}
export interface Post{
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}