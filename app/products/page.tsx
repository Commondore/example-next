import ProductCard from "@/components/product-card/product-card";
import s from "./products.module.css";
import { mockProducts } from "@/app/products/mockData";

export default function ProductsPage() {
  return (
    <div className={s.products}>
      <h1>Страница с продуктами</h1>
      <div className={s.productsList}>
        {mockProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
