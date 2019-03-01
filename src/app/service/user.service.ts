import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users", { observe: 'response' });
  }
}
