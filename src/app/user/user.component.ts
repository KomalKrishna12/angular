import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // disp:string="";
  count:number = 0;

  // fun1(name:string, num:number, dnum:number){
  //   alert("calling fun1 " + name + " " + num + " " + dnum);
  // }

  // getData(val:string){
  //   console.warn(val);
  // }

  // displayVal(val:string){
  //   console.log(val);
  //   this.disp = val;
  // }

  counter(op:string){
    op == 'add' ? this.count++ : this.count--;
  }

}
