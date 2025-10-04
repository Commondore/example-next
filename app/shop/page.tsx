"use client";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  count: number;
}

const PRODUCTS = [
  // Типа данны с бэка
  { id: 1, title: "Капучино", price: 180, count: 0 },
  { id: 2, title: "Латте", price: 150, count: 0 },
  { id: 3, title: "Американо", price: 110, count: 0 },
  { id: 4, title: "Мокко", price: 130, count: 0 },
];

export default function ShopPage() {
  const [cart, setCart] = useState<Product[]>([]);

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
    <div>
      <h1>Каталог</h1>

      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <span>{product.title}</span>
              <span>{product.price}сом</span>
              <button onClick={() => addToCart(product)}>Добавить в корзину</button>
            </li>
          );
        })}
      </ul>
      <hr />

      <div>
        <h2>Корзина: {totalCount}</h2>

        <ol>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <span>
                  {product.title} x{product.count}
                </span>
              </li>
            );
          })}
        </ol>

        <p>Общая стоимость товара: {totalPrice}</p>
      </div>
    </div>
  );
}
