import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<{ id: number; title: string; completed: boolean }>(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
  }
}
