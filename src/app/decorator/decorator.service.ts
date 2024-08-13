import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecoratorService {

  constructor(private http: HttpClient) { }

  inputApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  outputApi() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
