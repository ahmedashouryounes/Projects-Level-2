import { DeafultBarComponent } from './../components/bars/deafult-bar/deafult-bar.component';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODOS } from './../interfaces/todos.interface'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http : HttpClient,
    private userService : UserService,
    private router :Router
  ) { }

    todos : TODOS [] = []

    errors: string[] = [];



    baseUrl = 'http://localhost:3000/todos'
    get defaultOptions (){
      return{
        headers:{
          authorization:this.userService.getToken()
        }
      }
    }

    getTodosById(id:string){
      return this.todos.find(tod => tod._id == id)
    }


    generateError(msg: string) {
      this.errors.push(msg);
  
      setTimeout(() => {
        const errIndex = this.errors.indexOf(msg);
        this.errors.splice(errIndex, 1);
      }, 1500);
    }


    getTodos(){
      this.http.get<{todos:TODOS []}>(this.baseUrl+'/getTodos',this.defaultOptions).subscribe(
        data => this.todos = data.todos,
        err  => this.generateError('Failed To Fetch Todos')
      )
    }



    createTodos(data: {title:string, details:string}){
      this.http.post(this.baseUrl+'/createTodos', data, this.defaultOptions).subscribe(
        data => this.router.navigateByUrl('/profile'),
        err => this.generateError('Failed To Create Todo')
      )
    }



    updateTodos(id:string , data:{title:string, details:string}){
      this.http.put(this.baseUrl + '/updateTodos/'+ id , data, this.defaultOptions).subscribe(
        data =>{
          this.router.navigateByUrl('/profile')
        },
        err =>this.generateError('Failed To Update Todo')
      )
    }





    deleteTodos(id:string){
      this.http.delete(this.baseUrl + '/deleteTodos/' + id, this.defaultOptions).subscribe(
        data => {
          this.getTodos()
        },
        err => this.generateError('Failed To Delete Todo')
      )

    }

    completeTodos(id:string , completed:boolean){
      this.http.put(this.baseUrl + '/completeTodos/'+ id , {completed}, this.defaultOptions).subscribe(
        data =>console.log(data),
        err =>this.generateError('Failed To Complete Todo')
      )
    }
}
