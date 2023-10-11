import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit {
  todos: any = [];
  error: string = '';
  constructor(private http: HttpClient, public todoService: TodoService) {

  }

  async ngOnInit() {
    try {
      this.todos = await this.todoService.loadTodos();
      console.log(this.todos);
    } catch (e) {
      this.error = ' Fehler beim Laden';
    }


    this.todoService.todos$.subscribe(todos => {
      this.todos = todos;
    });
  }

  onTodoClick(todo: any) {
    this.todoService.loadTodo(todo).then(data => {
      this.todoService.setSelectedTodo(data);
    });
  }

  deleteItem(todo: any) {
    console.log(todo);
    this.todoService.deleteTodo(todo);
  }
}
