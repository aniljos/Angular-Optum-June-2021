import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/Product';

@Pipe({
  name: 'prodFilter',
  //pure: false
})
export class ProdFilterPipe implements PipeTransform {

  transform(input: Array<Product>, searchKey: string): Array<Product> {

    console.log("pipe transform");
    if(!searchKey){
      
      return input;
    }
    else{

      return input.filter((item) => {

          return item.id.toString() == searchKey 
                  || item.name.toLowerCase().includes(searchKey.toLowerCase())
                  || item.price.toString() == searchKey
                  || item.catagory.toLowerCase().includes(searchKey.toLowerCase())

      });
    }
  }

}
