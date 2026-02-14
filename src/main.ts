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
cartItem(list);
