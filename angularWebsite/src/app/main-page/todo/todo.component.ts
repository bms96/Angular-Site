import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos: any = [{"id":"1","name":"Pete", "age":"32"}, {"id":"2","name":"ManBearPig", "age":"??"}, {"id":"3","name":"Bryan", "age":"26"}];
  nextId: number = this.todos.length + 1;

  createTodo() {
    this.todos.push({"id": this.nextId, "name":"testname", "age":"20"})
    this.nextId +=1;
  }

  deleteTodo(id: number) {
    for (let todo of this.todos) {
      console.log(todo.name);
    }
  }
}
