import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo.class';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _selectedTodo = new BehaviorSubject<any>(null);
  selectedTodo$ = this._selectedTodo.asObservable();

  private _todos = new BehaviorSubject<any[]>([]);
  todos$ = this._todos.asObservable();
  // selectedTodo: any = null;

  constructor(private http: HttpClient) { }

  setSelectedTodo(todo: any) {
    this._selectedTodo.next(todo);
  }

  loadTodos() {
    const url = environment.baseUrl + '/todos/';
    return lastValueFrom(this.http.get(url)).then((response): any => {
      console.log('todos:', response);
      this._todos.next(response as Todo[]);
      return this._todos;
    });
  }

  loadTodo(todo: any) {
    console.log(todo.id);
    let todoId = todo.id;
    const url = environment.baseUrl + `/todo/${todoId}/`;
    return lastValueFrom(this.http.get(url));
  }

  createTodo(title: string) {
    const url = environment.baseUrl + '/todo/addTodo/';
    const body = {
      "title": title
    }

    return lastValueFrom(this.http.post(url, body)).then(newTodo => {
      const currentTodos = this._todos.value;
      this._todos.next([...currentTodos, newTodo]);
    });
  }

  deleteTodo(todo:any) {
    let todoId = todo.id;
    console.log('löschen ID:', todo.id)
    const url = environment.baseUrl + `/todo/delete/${todoId}/`;

    return lastValueFrom(this.http.delete(url)).then(() => {
      // Hier aktualisieren Sie Ihren lokalen Zustand nach dem Löschen
      const currentTodos = this._todos.value;
      const updatedTodos = currentTodos.filter(t => t.id !== todoId);
      this._todos.next(updatedTodos);
  });
  
  }

  updateTodo(todo:Todo){
    let todoId = todo.id;
    console.log('uodate ID:', todo.id)
    const url = environment.baseUrl + `/todo/update/${todoId}/`;
    const body = {
      "title": todo.title,
      "checked": todo.checked
    }

   console.log(todo.title ,todo.checked);
    return lastValueFrom(this.http.patch(url, body)).then( (updatedTodo: any) => {
        const currentTodos = this._todos.value;
        const index = currentTodos.findIndex(t => t.id === updatedTodo.id);
        if (index !== -1) {
            currentTodos[index] = updatedTodo;
            this._todos.next([...currentTodos]);
        }

  });
  }

}
