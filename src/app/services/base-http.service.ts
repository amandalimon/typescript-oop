import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<TypeClass>{
  data: TypeClass[] = [];

  constructor(
    protected url: string
  ) { };

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<TypeM>(id: TypeM, changes: unknown) { // tipado de método
    const array: TypeClass[] = []; // tipado de clase
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

  async update2<ID, DTO>(id: ID, changes: DTO) {
    const array: TypeClass[] = [];
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<Category>();
// service1.getAll();

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta = await productService.getAll(); // productService: BaseHttpService<Product>
  console.log('products', rta.length);

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const rta1 = await categoryService.getAll();  // categoryService: BaseHttpService<Category>
  console.log('categories', rta1.length);

  productService.update<Product['id']>(1, {});

  productService.update2<Product['id'], UpdateProductDto>(1, {
    title: 'asdsad',
    // name: ?? Object literal may only specify known properties, and 'name' does not exist in type 'Partial<CreateProductDto>'
  });
})();
