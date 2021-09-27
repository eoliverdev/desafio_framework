import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from './posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(
    private http: HttpClient
  ) { }

  read(): Observable<Post[]> { // Lista Posts
    return this.http.get<Post[]>(this.apiUrl);
  }
  readMessages(id: string): Observable<Post[]> { // Seleciona Comentarios dos Posts
    const url = `${this.apiUrl}/${id}/comments`
    return this.http.get<Post[]>(url);
  }
}
