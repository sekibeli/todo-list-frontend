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
  todos:any = [];
 error:string = '';
  constructor(private http: HttpClient, public todoService: TodoService ){
    
  }

  async ngOnInit() {
    try{
      this.todos = await this.todoService.loadTodos();
      console.log(this.todos);
    } catch (e){
      this.error = ' Fehler beim Laden';
    }
  }

  // loadTodos(){
  //   const url = environment.baseUrl + '/todos/';
  //   return lastValueFrom(this.http.get(url));
  // }

  // loadTodo(todo:any){
  //   let todoId = todo.id;
  //   const url = environment.baseUrl + '/todo/${todoId}/';
  //   return lastValueFrom(this.http.get(url));
  // }

  onTodoClick(todo: any) {
    this.todoService.loadTodo(todo).then(data => {
      this.todoService.setSelectedTodo(data);
      // Optional: Hier können Sie eine Navigation zu Ihrer todo.component ausführen, falls erforderlich.
    });
  }
}
