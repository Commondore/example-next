"use client";
import { Cart } from "@/components/cart/cart";
import { Catalog } from "@/components/catalog/catalog";
import { Product } from "@/types/product";
import { useState } from "react";

import s from "./shop.module.css";

const PRODUCTS = [
  // Типа данны с бэка
  { id: 1, title: "Капучино", price: 180, count: 0 },
  { id: 2, title: "Латте", price: 150, count: 0 },
  { id: 3, title: "Американо", price: 110, count: 0 },
  { id: 4, title: "Мокко", price: 130, count: 0 },
];

export default function ShopPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [message, setMessage] = useState("");

  const addToCart = (product: Product) => {
    const copyCart = [...cart];
    const index = copyCart.findIndex((p) => p.id === product.id);

    if (index === -1) {
      copyCart.push({ ...product, count: 1 });
    } else {
      copyCart[index].count++;
    }

    setCart(copyCart);
  };

  const totalCount = cart.reduce((acc, product) => {
    acc = acc + product.count;
    return acc;
  }, 0);

  const totalPrice = cart.reduce((acc, product) => {
    acc = acc + product.price * product.count;
    return acc;
  }, 0);

  return (
    <div className="container">
      <div className={s.shop}>
        <Catalog list={PRODUCTS} addItem={addToCart} />
        <hr />
        <Cart count={totalCount} list={cart} price={totalPrice} />

        {cart.length !== 0 && (
          <div className="message-wrap">
            <h3>Примечания</h3>
            <textarea
              className="message"
              placeholder="Примечение к заказу"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
