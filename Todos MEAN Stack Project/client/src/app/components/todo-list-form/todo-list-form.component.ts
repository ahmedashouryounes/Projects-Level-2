import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css']
})
export class TodoListFormComponent implements OnInit {

  constructor(
    private todoservice:TodosService,
    private curentRoute : ActivatedRoute
  ) { }


  editMode: boolean = false
  id:string = ''

  title : string = ''
  details : string = ''

  ngOnInit(): void {
    const idParam = this.curentRoute.snapshot.params.id
    if(idParam != 'new'){
      this.editMode = true
      this.id = idParam
      const todos = this.todoservice.getTodosById(this.id)

      if(!todos) return
      this.title = todos.title
      this.details = todos.details
    }
  }


  add(){
    const data = {
      title:this.title,
      details : this.details
    }
    if(!this.editMode){
      this.todoservice.createTodos(data)
    }else{
      this.todoservice.updateTodos(this.id, data)
    }
  }
}
