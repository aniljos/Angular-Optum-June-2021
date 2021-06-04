import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { filter, map, debounceTime, take, tap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFormGroup: FormGroup;
  results: Array<string>;
  constructor(private http: HttpClient) {

    // generates a stream of numbers 0,1,2,3..... (interval of 1 sec)
    // var observable = interval(1000);

    // var obs1 = observable.pipe(
    //   map(n => n * n)
    // );

    // obs1.subscribe((result) => {
    //   console.log("subscriber: ", result);
    // })


    // observable are lazy ==> executed only if subscriber
    // interval(1000)
    //   .pipe(
    //     take(10),
    //     tap(n => console.log("tap", n)),
    //     filter(n => n % 2 == 0),
    //     map(n => n * n)
    //   )
    //   .subscribe((result) =>{
    //     console.log("subscriber: ", result);
    //   });

  }

  ngOnInit(): void {

    this.searchFormGroup = new FormGroup({
      search: new FormControl("")
    });

    this
      .searchFormGroup
      .get("search")
      .valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(input => {
        console.log(input);
        const url = "https://en.wikipedia.org/w/api.php";
        const params
          = new HttpParams()
            .set("action", "opensearch")
            .set("format", "json")
            .set("limit", "20")
            .set("origin", "*")
            .set("search", input)

        this.http
              .get(url, {params: params})
              .pipe(
                map(data => data[1])
              )
              .subscribe((data) => {
                console.log(data);
                this.results = data;
              });

        // this.http
        //   .get(url, { params: params, observe: 'response' })
        //   .subscribe((resp) => {
        //     console.log(resp);
        //   });


      })


  }

}
