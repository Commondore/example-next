"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Посетители на сайте: {count < 0 ? 0 : count}</h2>

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Сброс</button>
      </div>
    </div>
  );
};
