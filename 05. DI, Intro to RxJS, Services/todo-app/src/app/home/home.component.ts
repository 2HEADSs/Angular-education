import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-item/todo-item.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  todos: Todo[] = [
    {
      title: 'Todo 1', isCompleted: false
    },
    {
      title: 'Todo 2', isCompleted: true
    },
    {
      title: 'Todo 3', isCompleted: false
    },
    {
      title: 'Todo 4', isCompleted: true
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }



  markAllTodosAsCompleted(): void {
    this.todos = this.todos.map(t=>({title: t.title, isCompleted: true}))
  }

  handleStateChange(todo: Todo): void {

    const index = this.todos.indexOf(todo);
    this.todos[index] = {
      // ...todo,
      title: todo.title,
      isCompleted: !todo.isCompleted
    }
  }

}
