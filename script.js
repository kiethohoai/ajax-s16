// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// import * as allShop from './shoppingCart.js';
// import addToCart from './shoppingCart.js';
// import { totalPrice, totalQuantity } from './shoppingCart.js';

// allShop.addToCart('Computer', 1000);
// console.log(`🚀  totalPrice =>`, allShop.totalPrice);
// console.log(`🚀  totalQuantity =>`, allShop.totalQuantity);

// addToCart('PC', 1000);
// console.log(`🚀  totalPrice, totalQuantity =>`, totalPrice, totalQuantity);

const getLastPost = async () => {
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
console.log(`🚀  lastPost2 =>`, lastPost2);
