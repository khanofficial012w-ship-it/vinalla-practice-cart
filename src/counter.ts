export function cartItem(
  cartList: HTMLUListElement,
  tax: HTMLParagraphElement,
  shipping: HTMLParagraphElement,
  subtotal: HTMLParagraphElement,
  total: HTMLParagraphElement,
) {
  type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  let cart: CartItem[] = [
    { id: 1, name: "Phone", price: 30000, quantity: 1 },
    { id: 2, name: "Headphones", price: 5000, quantity: 2 },
  ];

  const storedData = localStorage.getItem("cart");

  if (storedData) {
    cart = JSON.parse(storedData);
  }

  const saveToLocal = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  const renderCart = () => {
    cartList.innerHTML = "";

    cart.forEach((item) => {
      const li = document.createElement("li");
      const text = document.createElement("span");

      text.textContent = `
      ${item.name} - ${item.price} x ${item.quantity}
    `;

      const delBtn = document.createElement("button");
      delBtn.textContent = "Remove";
      delBtn.addEventListener("click", () => removeItem(item.id));
      const inc = document.createElement("button");
      inc.textContent = "+";
      inc.addEventListener("click", () => increase(item.id));
      const dec = document.createElement("button");
      dec.textContent = "-";
      dec.addEventListener("click", () => decrease(item.id));
      li.appendChild(text);
      li.appendChild(delBtn);
      li.appendChild(inc);
      li.appendChild(dec);
      cartList.appendChild(li);
    });
    calculateTotal();
  };
  const increase = (id: number): void => {
    const item = cart.find((c) => c.id === id);
    if (!item) return;
    item.quantity++;
    saveToLocal();
  };

  const decrease = (id: number): void => {
    const item = cart.find((c) => c.id === id);
    if (!item) return;
    if (item.quantity > 1) item.quantity--;

    saveToLocal();
  };

  const removeItem = (id: number): void => {
    cart = cart.filter((c) => c.id !== id);
    saveToLocal();
  };

  const calculateTotal = (): void => {
    const subt = cart.reduce((total, value): number => {
      return total + value.price * value.quantity;
    }, 0);

    const t = subt * 0.1;
    const ship = subt > 50000 || cart.length < 1 ? 0 : 1000;
    const totl = subt + t + ship;

    subtotal.textContent = String(subt);
    tax.textContent = String(t);
    shipping.textContent = String(ship);
    total.textContent = String(totl);
  };

  saveToLocal();
}
