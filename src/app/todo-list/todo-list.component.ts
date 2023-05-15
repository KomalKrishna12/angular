import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title: string = "To do list program";

  list: any[] = [];

  @Input() item = "";
  @Input() item2 = "";

  addTask(data: string) {
    this.list.push({ id: this.list.length, task: data });
    console.log(this.list);
  }

  remove(id:number){
    this.list = this.list.filter(item=>item.id !== id);
  }
}
