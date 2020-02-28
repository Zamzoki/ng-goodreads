import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { SearchBoxComponent } from './search-box/search-box.component';
import { BookTableComponent } from './book-table/book-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    SearchBoxComponent,
    BookTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
