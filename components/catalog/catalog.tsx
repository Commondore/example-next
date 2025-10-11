import { Product } from "@/types/product";

interface CatalogProps {
  list: Product[];
  addItem: (item: Product) => void;
}

export function Catalog({ list, addItem }: CatalogProps) {
  return (
    <>
      <h1 className="title">Каталог</h1>

      <ul className="products">
        {list.map((product) => {
          return (
            <li key={product.id} className="product__item">
              <span>{product.title}</span>
              <span>{product.price}сом</span>
              <button className="button" onClick={() => addItem(product)}>
                Добавить в корзину
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
