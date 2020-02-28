import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Book } from '../shared/Book.model';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient ) { }

  fetchBooks() {
    return this.httpClient.get<Book[]>('/books', httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  deleteBook(bookId) {
    return this.httpClient.delete<Book>(`/books/${bookId}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occured: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body is: ${error.error}`);
    }

    return throwError('Something went wrong');
  }

}
