import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _selectedTodo = new BehaviorSubject<any>(null);
  selectedTodo$ = this._selectedTodo.asObservable();
  selectedTodo: any = null;
  constructor(private http: HttpClient) { }

  setSelectedTodo(todo: any) {
    this._selectedTodo.next(todo);
  }

  getSelectedTodo() {
    return this.selectedTodo;
  }

  loadTodos() {
    const url = environment.baseUrl + '/todos/';
    return lastValueFrom(this.http.get(url));
  }

  loadTodo(todo: any) {
    console.log(todo.id);
    let todoId = todo.id;
    const url = environment.baseUrl + `/todo/${todoId}/`;
    return lastValueFrom(this.http.get(url));
  }

}
