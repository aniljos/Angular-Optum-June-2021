import { Component, OnInit } from '@angular/core';
import {Observable, interval} from 'rxjs';
import {filter, map, debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {

      // generates a stream of numbers 0,1,2,3..... (interval of 1 sec)
      var observable = interval(1000);
      

      observable.subscribe((result) => {
        console.log("subscriber: ", result);
      })

   }

  ngOnInit(): void {
  }

}
