import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import {RouterTestingModule} from '@angular/router/testing';
import { ProdFilterPipe } from '../prod-filter.pipe';
import { environment } from 'src/environments/environment';
import { Product } from '../model/Product';

fdescribe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsComponent, ProdFilterPipe ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {

    const httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;

    httpMock.expectOne(environment.productsURL)
            .flush([new Product(1, "", 3000, ""), new Product(2, "", 3000, "")])

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
