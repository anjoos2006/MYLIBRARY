import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  // Get the list of books
  getBooks(){
    return this.http.get("http://localhost:3000/books")
  }
  // Add new books
  newBooks(nbook: any) {
    return this.http.post("http://localhost:3000/books/add", { "product": nbook })
      .subscribe(data => { console.log(data) })
  }
}
