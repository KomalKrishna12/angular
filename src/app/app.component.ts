import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  demo() {
    return "demo from function";
  }

  data: string = "Hello jiii";

  btnFun(str: string) {
    this.data = str;
  }

  show: string = 'yes';
  color: string = 'green';

  users = ["Komal", "Anurag", "Raj", "Ritu"];

  user_details = [
    {
      "name": "Komal",
      "age": "23"
    },
    {
      "name": "Anurag",
      "age": "22"
    },
    {
      "name": "Raj",
      "age": "22"
    }
  ];

  student = [
    {
      name: "Komal",
      age: "23",
      marks:['10','20','30']
    },
    {
      name: "Anurag",
      age: "22",
      marks:['10','20','30']
    },
    {
      name: "Raj",
      age: "22",
      marks:['10','20','30']
    }
  ];
}
