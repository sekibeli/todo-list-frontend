import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor(private http: HttpClient){}


  loadTodo(){
    const url = environment.baseUrl + '/todo/';
    return lastValueFrom(this.http.get(url));
  }
}
