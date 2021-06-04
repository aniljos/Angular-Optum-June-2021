import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: number;
  constructor(private activatedRoute: ActivatedRoute, private location: Location) { 

    activatedRoute.params.subscribe((data) => {
        this.productId = data["id"];
    });
  }

  back(){
      this.location.back();
  }

  ngOnInit(): void {
  }

}
