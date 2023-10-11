import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public showEditContainer = false;
  
public todo: any;
  constructor(private http: HttpClient,  private todoService: TodoService ){}

  ngOnInit() {
    this.todoService.selectedTodo$.subscribe(todo => {
      this.todo = todo;
    });
  }

  updateItem(todo:any){}

 }
