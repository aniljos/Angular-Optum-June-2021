import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserService } from "./UserService";

@Injectable()
export class UserServiceImpl extends UserService {

    private isValid: boolean;
    constructor(private http: HttpClient) {
        super();
    }


    ValidateUser(name: string, password: string) {

        const url = "http://localhost:9000/login";
        //Promise API/ Observable API

        return new Promise((resolve, reject) => {

            this.http
                .post(url, { name, password })
                .subscribe((data) => {
                    this.isValid = true;
                    resolve(data);

                }, (data) => {
                    this.isValid = false;
                    reject(data);
                });
        })



    }
    IsAuthenticated(): boolean {
        return this.isValid;
    }
}