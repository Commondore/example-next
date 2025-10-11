import { Product } from "@/types/product";
import s from "./product-card.module.css";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={s.card}>
      {product.image && <img className={s.image} src={product.image} alt="" />}
      <h3>{product.title}</h3>
      <div>Кол-во: {product.count}</div>
      <div>Цена: {product.price}</div>
      {product.description && <div>Описание: {product.description}</div>}
      <div>
        <Link href={`/products/${product.slug}`}>Подробнее...</Link>
      </div>
    </div>
  );
}
