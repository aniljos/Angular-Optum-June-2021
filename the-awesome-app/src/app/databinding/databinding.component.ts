import { Component } from "@angular/core";


@Component({
    selector: "databinding",
    templateUrl: './databinding.component.html'
})
export class DataBindingComponent{

    name: string;
    count: number;
    message: string;

    constructor(){
        this.name = "Anil Joseph";
        this.count = 18;
        this.message = "Welcome"
    }

    increment(evt:any){
        console.log(evt);
        this.count++
    }
}