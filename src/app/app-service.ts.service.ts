import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceTsService {

  constructor(private http:HttpClient) { }

  getUsers() {
    let apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(apiUrl);
  }
  
}
