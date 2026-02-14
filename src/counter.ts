export function cartItem(cartList: HTMLUListElement) {
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

  const renderCart = () => {
    if (!cartList) return;
    cartList.innerHTML = "";
    cart.forEach((item) => {
      const li = document.createElement("li");

      li.innerHTML = `
      ${item.name} - ${item.price} x ${item.quantity}
      <button onclick="increase(${item.id})">+</button>
      <button onclick="decrease(${item.id})">-</button>
      <button onclick="removeItem(${item.id})">Remove</button>
    `;

      cartList.appendChild(li);
    });
  };
  renderCart();
}
