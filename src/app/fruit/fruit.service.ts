import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruit, CreateFruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private apiUrl = 'http://localhost:3000/fruits';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Fruit[]>(this.apiUrl);
  }

  create(data: CreateFruit) {
    return this.httpClient.post<Fruit>(this.apiUrl, data);
  }

  edit(id: string) {
    return this.httpClient.get<Fruit>(`${this.apiUrl}/${id}`);
  }

  update(data: Fruit) {
    return this.httpClient.put<Fruit>(`${this.apiUrl}/${data.id}`, data);
  }

  delete(id: string) {
    return this.httpClient.delete<Fruit>(`${this.apiUrl}/${id}`);
  }
}
