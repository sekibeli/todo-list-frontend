import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {
title:string = '';


constructor(public todoService: TodoService){}
  async createTodo() {
    try {
      let resp: any = await this.todoService.createTodo(this.title)
      console.log(resp);
       } catch (e) {
   
      console.log('Feher:', e);
    }
  }


}
