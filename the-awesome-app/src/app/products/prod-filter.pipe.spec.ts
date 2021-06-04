import { Product } from './model/Product';
import { ProdFilterPipe } from './prod-filter.pipe';

fdescribe('ProdFilterPipe', () => {

  it('create an instance', () => {

    const pipe = new ProdFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it("should return the input as output for no searchkey", () => {

    const input = new Array<Product>();
    input.push(new Product(1, "abc", 5000, "c1"));
    input.push(new Product(2, "xyz", 15000, "c12"));

    const pipe = new ProdFilterPipe();
    const output = pipe.transform(input, "");

    expect(output).toBe(input);


  })

  it("should return the filtered output for searchkey", () => {

    const input = new Array<Product>();
    input.push(new Product(1, "abc", 5000, "c1"));
    input.push(new Product(2, "xyz", 15000, "c12"));

    const pipe = new ProdFilterPipe();
    const output = pipe.transform(input, "abc");

    expect(output[0]).toBe(input[0]);
    expect(output.length).toBe(1);


  })

});
