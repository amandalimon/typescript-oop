import axios from "axios";
import { Product } from "./models/product.model";

(async () => {
  async function getProducts() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }
  const products = await getProducts();
  console.log(products.map(item => `${item.id}: ${item.title}`))
})();

// const getProducts = async (url: string): Promise<Product[]> => {
//   let data = await fetch(url);
//   let res: Promise<Product[]> = data.json();
//   console.log(res);
//   return res;
// };

// getProducts("https://api.escuelajs.co/api/v1/products");

// const getProducts2 = (): Promise<Product[]> => {
//   return fetch("https://api.escuelajs.co/api/v1/products")
//     .then((res) => res.json())
//     .then((json: Product[]) => {
//       console.log(json);
//       return json;
//     });
// };

// getProducts2()
