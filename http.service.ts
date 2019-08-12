import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>>{
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id:number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1' + id);
  }
  getPostByUser(UserId: number){
    const params = new HttpParams().set('userId', UserId + '');
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/users', {params: params});
  }
  
}
