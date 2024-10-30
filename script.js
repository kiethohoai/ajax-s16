// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// import * as allShop from './shoppingCart.js';
import addToCart from './shoppingCart.js';
import { totalPrice, totalQuantity } from './shoppingCart.js';

// allShop.addToCart('Computer', 1000);
// console.log(`🚀  totalPrice =>`, allShop.totalPrice);
// console.log(`🚀  totalQuantity =>`, allShop.totalQuantity);

addToCart('PC', 1000);
console.log(`🚀  totalPrice, totalQuantity =>`, totalPrice, totalQuantity);
