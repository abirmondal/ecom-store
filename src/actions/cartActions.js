export function addToCart(item) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export function removeFromCart(itemId) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingItem = cartItems.find((cartItem) => cartItem.id === itemId);
  if (existingItem) {
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      if (updatedCartItems.length === 0) {
        localStorage.removeItem("cartItems");
      }
      return;
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}

export function getCartItems() {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
}

export function getCartItemById(itemId) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  return cartItems.find((cartItem) => cartItem.id === itemId);
}

export function getCartItemsCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  return cartItems ? cartItems.length : 0;
}

export function getCartItemIDCount(itemId) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartItemForID = cartItems.find((cartItem) => cartItem.id === itemId);
  return cartItemForID ? cartItemForID.quantity : 0;
}

export function getCartItemsCountWithQuantity() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
}

export function getCartTotal() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
