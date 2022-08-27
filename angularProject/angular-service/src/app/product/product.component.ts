import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Array<Product>=[];
  storeMsg:string = "";
  constructor(public ps:ProductService) { }
  buttonName:string = "Add Product";

  productRef = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    url: new FormControl,
  });

  ngOnInit(): void {
    this.loadAllProduct();
  }

  loadAllProduct() {
    this.ps.loadProductData().subscribe(data=>this.products=data,error=>console.log(error),()=>console.log("completed"));
  }

  addProduct() {
    let product:Product = this.productRef.value as Product;
    if(this.buttonName === "Add Product"){
      this.ps.storeProduct(product).subscribe(data=>this.storeMsg=data, error=>this.storeMsg= "Something went wrong", ()=>this.loadAllProduct());
      this.productRef.reset();
    } else {
      this.ps.updateProduct(product).subscribe(data=>this.storeMsg=data,error=>this.storeMsg= "Something went wrong",()=>this.loadAllProduct() );
      this.buttonName = "Add Product";
    }
  }

  deleteProduct(id:number) {
    this.ps.deleteProduct(id).subscribe(data=>this.storeMsg=data, error=>this.storeMsg="Something went wrong", ()=>this.loadAllProduct());
  }

  updateProduct(product:Product) {
    this.productRef.get("id")?.setValue(product.id);
    this.productRef.get("name")?.setValue(product.name);
    this.productRef.get("price")?.setValue(product.price);
    this.productRef.get("url")?.setValue(product.url);
    this.buttonName = "Update Product";
  }
}
