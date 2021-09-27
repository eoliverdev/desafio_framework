import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Album, Photo } from './albums.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  apiUrl = "https://jsonplaceholder.typicode.com/albums";

  constructor(
    private http: HttpClient
  ) { }

  read(): Observable<Album[]> { // Lista Albuns
    return this.http.get<Album[]>(this.apiUrl);
  }
  readPhotos(id: string): Observable<Photo[]> { // Seleciona Photos do Album
    const url = `${this.apiUrl}/${id}/photos`
    return this.http.get<Photo[]>(url);
  }
}
