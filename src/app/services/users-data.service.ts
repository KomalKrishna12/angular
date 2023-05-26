import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
url:any = "http://localhost:3000/users";
  constructor(private http : HttpClient) { 

  }
  getUsers(){
    return this.http.get(this.url);
  }

  createUser(data:any){
    return this.http.post(this.url, data);
  }
}
