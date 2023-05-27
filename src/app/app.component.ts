import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import { userDataTypes } from './userDataTypes';
import { AboutComponent } from './components/about/about.component';

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
  constructor(private userData: UsersDataService, private viewContainer: ViewContainerRef, private cfr: ComponentFactoryResolver) {
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

  async loadAbout() {
    this.viewContainer.clear();
    const { AboutComponent } = await import('./components/about/about.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(AboutComponent));
  }

  async loadhome() {
    this.viewContainer.clear();
    const { HomeComponent } = await import("./components/home/home.component");
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(HomeComponent));
  }
}
