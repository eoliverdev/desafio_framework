import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(
    private http: HttpClient
  ) { }

  read(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }
}
