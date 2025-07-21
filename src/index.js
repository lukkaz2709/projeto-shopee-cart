import * as cartService from "./services/cart.js";
import createItem from "./services/item.js"

const myCart = [];
const myWishilist = [];

console.log("Welcome to the shopee cart!");

// Example items
const item1 = await createItem("camiseta compressão", 129.99, 3);
const item2 = await createItem("camiseta canelada", 49.99, 2);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);


await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);

await cartService.displayCart(myCart);

//await cartService.deleteItem(myCart, "camiseta canelada");
//await cartService.removeItem(myCart, "camiseta compressão");


await cartService.calculateItem(myCart);