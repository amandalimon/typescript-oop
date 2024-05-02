import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings.',
  categoryId: 7,
  images: []
});

const products = productService.getAll();

const productId = products[0].id;

productService.update(productId, {
  title: 'Pierced Owl Rose Gold Plated Stainless Steel Double'
});

const rta = productService.find(productId);
console.log(rta)
