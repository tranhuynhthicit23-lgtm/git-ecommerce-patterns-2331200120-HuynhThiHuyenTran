// TODO: Implement the Singleton pattern.
// 1. Create a variable `instance` to hold the single instance of the class.
// 2. In the constructor, check if `instance` already exists.
// 3. If it exists, return `instance`.
// 4. If it does not exist, initialize the class properties (like `this.products`)
//    and assign the new instance to `instance`.
// 5. Export the class.

// class CartService {
//     constructor() {
//         // ... your implementation here ...
//         this.products = [];
//     }

//     addProduct(product) {
//         this.products.push(product);
//     }

//     removeProduct(productId) {
//         this.products = this.products.filter(p => p.id !== productId);
//     }

//     getProducts() {
//         return this.products;
//     }
// }

// export { CartService };
// patterns/creational/CartService.js

let instance = null;

class CartService {
  constructor() {
    if (instance) {
      return instance;
    }

    this.products = [];
    instance = this;
  }

  addProduct(product) {
    this.products.push(product);
  }

removeProduct(product) {
  const index = this.products.lastIndexOf(product);
  if (index !== -1) {
    this.products.splice(index, 1);
  }
}

  getProducts() {
    return this.products;
  }
}

export { CartService };
