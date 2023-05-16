import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  title: string = "Reactive Form Demo";

  loginForm = new FormGroup({
    user: new FormControl('default name'),
    password: new FormControl('default password')
  });

  loginFun(){
    console.log(this.loginForm.value);
    
  }
}
