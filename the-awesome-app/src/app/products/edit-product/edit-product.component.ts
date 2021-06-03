import { Component, Input, OnInit, 
      OnChanges, SimpleChanges, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnChanges, OnDestroy {


  @Input()
  public data: Product;

  @Output()
  public saved: EventEmitter<Product>= new EventEmitter<Product>();

  @Output()
  public cancelled: EventEmitter<string>= new EventEmitter<string>();

  public product: Product;

  constructor() {

    console.log("EditProductComponent constructor");
  }


  ngOnInit(): void {

    console.log("EditProductComponent ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("EditProductComponent ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("EditProductComponent ngOnChanges", changes);
    this.product = new Product();
    Object.assign(this.product, this.data);
  }

  save(){
      this.saved.emit(this.product);
  }

  cancel(){
      this.cancelled.emit("Update was cancelled");
  }

}
