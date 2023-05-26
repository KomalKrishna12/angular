import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import { userDataTypes } from './userDataTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;
  title = 'routing-demo';

  demouser: userDataTypes = {
    id: 10,
    name: "Komal",
    age: 22
  }
  constructor(private userData: UsersDataService) {
    userData.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

  createuser(data: any) {
    this.userData.createUser(data).subscribe((data) => {
      console.log(data + " added...");
    })
  }
}
