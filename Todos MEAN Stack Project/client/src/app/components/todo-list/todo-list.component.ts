import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(
    private todoservice:TodosService
  ) { }
 

  ngOnInit(): void {
    this.todoservice.getTodos()
  }

  get todos(){
    return this.todoservice.todos
  }
}

