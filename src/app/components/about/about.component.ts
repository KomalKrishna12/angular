import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  routeEle: any;
  users: any;
  constructor(private route: ActivatedRoute, private userdata: UserdataService) {
    console.log(userdata.users);
    this.users = userdata.users;

  }

  ngOnInit(): void {
    console.warn(this.route.snapshot.paramMap.get('id'));
    this.routeEle = this.route.snapshot.paramMap.get('id');
  }
}
