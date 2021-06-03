import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  // private http: HttpClient;

  private url: string;
  public data: Array<Product> = new Array<Product>();
  public selectedProduct:Product;
  public searchKey: string;

  constructor(private http: HttpClient) {
    // this.http = http;
    this.url = "http://localhost:9000/products";

    this.fetchProducts();

  }

  fetchProducts(){
    this.http.get<Array<Product>>(this.url)
      .subscribe((data) => {
        console.log("data", data);
        this.data = data;
        
      }, (err) => {
        console.log("err", err);
      });
  }

  deleteProduct(item: Product, index: number){

      const url = this.url + "/" + item.id;
      this.http.delete(url)
                  .subscribe(() => {
                      alert("deleted");
                      this.fetchProducts();
                  }, () => {
                      alert("failed to delete");

                  })
  }

  editProduct(item : Product){
    this.selectedProduct = item;
  }

  editUpdate(updatedProduct: Product){
    //alert("Product updated");

    const url = this.url + "/" + updatedProduct.id;
    this.http.put(url, updatedProduct)
                .subscribe(() => {

                  alert("Product updated");
                  this.fetchProducts();

                }, () => {
                  alert("Failed to update");
                });

  }

  editCancel(message: string){
    alert(message);
    this.selectedProduct = null;
  }

  ngOnInit(): void {
  }

}
