import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get("http://localhost:3000/books")
  }
  newBooks(nbook: any) {
    return this.http.post("http://localhost:3000/books/add", { "product": nbook })
      .subscribe(data => { console.log(data) })
  }
}