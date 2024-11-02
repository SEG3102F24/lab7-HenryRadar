import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from 'src/app/books/model/book';

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(Url + 'authors/' + id);
  }
}
