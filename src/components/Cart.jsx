import React from "react";
import { useState, useEffect } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // загрузка корзины из локального хранилища
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // сохранение корзины в локальное хранилище
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (pet) => {
    const updatedCart = cartItems.filter((item) => item.id !== pet.id);
    setCartItems(updatedCart);
  };//удаление из корзины

  const clearCart = () => {
    setCartItems([]);
  };
//очищение корзины
  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.length === 0 && <p>Ваша корзина пуста.</p>}
      {cartItems.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <p>{pet.price} USD</p>
          <button onClick={() => removeFromCart(pet)}>Удалить</button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div>
          <button onClick={clearCart}>Очистить корзину</button>
        </div>
      )}
    </div>
  );//Корзина
}
