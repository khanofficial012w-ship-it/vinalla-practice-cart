import "./style.css";
import { cartItem } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
 <h2>Shopping Cart</h2>

<ul id="cart-list"></ul>

<p>Subtotal: <span id="subtotal">0</span></p>
<p>Tax (10%): <span id="tax">0</span></p>
<p>Shipping: <span id="shipping">0</span></p>
<h3>Total: <span id="total">0</span></h3>
`;

const list = document.querySelector("#cart-list") as HTMLUListElement;
const subtotal = document.querySelector("#subtotal") as HTMLParagraphElement;
const tax = document.querySelector("#tax") as HTMLParagraphElement;
const shipping = document.querySelector("#shipping") as HTMLParagraphElement;
const total = document.querySelector("#total") as HTMLParagraphElement;
cartItem(list, subtotal, tax, shipping, total);
