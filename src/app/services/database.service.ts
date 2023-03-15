import { Injectable } from "@angular/core";
import { Product } from "../products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  //URL para consumir los productos
  baseUrl = "http://localhost:3000/products";
  items: Product[] = []; //Productos vacíos iniciando

  constructor(private http: HttpClient) {}

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}