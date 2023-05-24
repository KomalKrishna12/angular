import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  users = [
    {name:'Komal', age:'24'},
    {name:'Golu', age:'23'},
  ];
  constructor() { }
}
