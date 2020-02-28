import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './Book.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  filteredBooks: Book[] = [];


  transform(value: Book[], searchTerm: string): Book[] {
    this.filteredBooks = [];

    if(!value) {
      return [];
    }

    if(!searchTerm) {
      return value;
    }

    value.forEach(b => {
      if(b.originalTitle.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      {
        this.filteredBooks.push(b);
      }
    })

    return this.filteredBooks;
  }

}
