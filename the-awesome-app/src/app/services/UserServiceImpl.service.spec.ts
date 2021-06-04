import { TestBed } from '@angular/core/testing';
import {UserServiceImpl} from './UserServiceImpl';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

fdescribe("UserServiceImpl", () => {

    beforeEach(()=> {
        TestBed.configureTestingModule({

            providers:[UserServiceImpl],
            imports: [HttpClientTestingModule]
        }).compileComponents()
    })

    it("create instance", () => {

        const service= TestBed.inject(UserServiceImpl);
        expect(service).toBeTruthy();
    })

    it("ValidateUser", () => {

        const httpMock = TestBed.inject(HttpTestingController);
        const service= TestBed.inject(UserServiceImpl);
        service
                .ValidateUser("abc", "abc")
                .then(() => {
                    expect(service.IsAuthenticated()).toBeTruthy()
                });

        const url = environment.loginURL; 
        httpMock.expectOne(url)
                        .flush({accessKey: ""}); 
        
    });

})