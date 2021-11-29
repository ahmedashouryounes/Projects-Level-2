import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private todosService : TodosService
  ) { }

  ngOnInit(): void {
    
  }


  get errors() {
    return this.todosService.errors
  }

}
