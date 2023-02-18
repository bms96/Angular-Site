import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos: any = [{"id":"1","name":"Pete", "age":"32"}, {"id":"2","name":"ManBearPig", "age":"??"}, {"id":"3","name":"Bryan", "age":"26"}];

}
