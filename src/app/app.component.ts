import {
  Component, OnInit
} from '@angular/core';
import {
  Book
} from './shared/Book.model';
import {
  BookService
} from './services/book.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  gplOnFire = false;
  books: Book[] = [];
  // tslint:disable-next-line:ban-types
  searchTitle = '';
  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.bookService.fetchBooks().subscribe((books) => {
      this.books = books;
    });
  }

  doSearch(event): void {
    this.searchTitle = event.searchTerm;
  }

  deleteBook(bookId) {
    console.log(bookId);
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.bookService.fetchBooks().subscribe((books) => {
        console.log(books);
        this.books = books;
      });
    });

  }
}
