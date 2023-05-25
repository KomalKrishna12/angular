import { Component } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
users:any;
constructor(private user:UsersDataService){
  this.users = user.getUsers().subscribe((data)=>{
    console.log(data);
    this.users = data;
  })
}
}
