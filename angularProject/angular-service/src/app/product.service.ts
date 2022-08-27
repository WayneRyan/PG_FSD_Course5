import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { } // DI for HttpClient which helps to call rest api

  loadProductData():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8181/productDetails");
    // this.http.get("http://localhost:8181/productDetails").subscribe(
    //   data=>console.log(data),
    //   error=>console.log(error),
    //   ()=>console.log("completed ")
    // );
  }

  storeProduct(product:Product):Observable<string>{
    return this.http.post("http://localhost:8181/storeProduct",product,{responseType:'text'});
  }

  deleteProduct(id: number):Observable<string> {
    return this.http.delete("http://localhost:8181/deleteProduct/" + id,{responseType:'text'});
  }
  updateProduct(product:Product):Observable<string>{
    return this.http.put("http://localhost:8181/updateProduct",product,{responseType:'text'});
  }

}
