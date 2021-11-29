import { UserService } from './../../services/user.service';
import { TODOS , defaultTodos } from './../../interfaces/todos.interface';
import { TodosService } from './../../services/todos.service';
import { Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  constructor(
    private todoservice :TodosService
  ) { }
  
  
  @Input() todoItem: TODOS = defaultTodos
  
  ngOnInit(): void {

  }

  get isComplete()  {
    return  this.todoItem.completed
  }
  


  complete(){
    this.todoItem.completed = !this.isComplete;
    this.todoservice.completeTodos(this.todoItem._id, this.isComplete)
  }

  delete(){
    this.todoservice.deleteTodos(this.todoItem._id)
  }


}
