import { Component } from '@angular/core';

@Component({
  selector: 'app-user4',
  template: `
    <p>
      user4 works!
    </p>

    <h1 class="custom">Inline style and template</h1>
  `,
  styles: [
    `.custom{
      color:pink;
    }`
  ]
})
export class User4Component {

}
