import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos: any = [{"name":"Pete", "age":"32"}, {"name":"ManBearPig", "age":"??"}, {"name":"Bryan", "age":"26"}];

}
