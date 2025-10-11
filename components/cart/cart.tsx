import { Product } from "@/types/product";

interface CartProps {
  count: number;
  list: Product[];
  price: number;
}

export const Cart = ({ list, count, price }: CartProps) => {
  return (
    <div>
      <h2 className="title">Корзина: {count}</h2>

      <ol>
        {list.map((product) => {
          return (
            <li key={product.id}>
              <span>
                {product.title} x{product.count}
              </span>
            </li>
          );
        })}
      </ol>

      <p>Общая стоимость товара: {price}</p>
    </div>
  );
};
