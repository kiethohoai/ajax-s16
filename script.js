// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// import * as allShop from './shoppingCart.js';
// import addToCart from './shoppingCart.js';
// import { totalPrice, totalQuantity } from './shoppingCart.js';

// allShop.addToCart('Computer', 1000);
// console.log(`🚀  totalPrice =>`, allShop.totalPrice);
// console.log(`🚀  totalQuantity =>`, allShop.totalQuantity);

// addToCart('PC', 1000);
// console.log(`🚀  totalPrice, totalQuantity =>`, totalPrice, totalQuantity);

/* const getLastPost = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    title: data.at(-1).title,
    body: data.at(-1).body,
  };
};

const lastPost = getLastPost();
const lastPost2 = await getLastPost();
console.log(`🚀  lastPost =>`, lastPost);
console.log(`🚀  lastPost2 =>`, lastPost2); */

/* const ShoppingCart = (() => {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`Product: ${product}, quantity: ${quantity} added to cart`);
  };

  const orderStock = (product, quantity) => {
    console.log(`Product: ${product}, quantity: ${quantity} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart.addToCart('Apple', 4);
ShoppingCart.addToCart('Pizza', 2);
console.log(`🚀  ShoppingCart =>`, ShoppingCart) */

//todo 008 CommonJS Modules
