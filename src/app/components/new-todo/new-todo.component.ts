import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {


  // createTodo(title:string){
  //   const url = environment.baseUrl + '/todo/';
  //   const body = {
  //     "title": title
      
  //   }
    
  //   return lastValueFrom(this.http.post(url,body));
  // }
}
