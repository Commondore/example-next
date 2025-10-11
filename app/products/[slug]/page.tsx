import { mockProducts } from "@/app/products/mockData";

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function ProductItemPage({ params }: Params) {
  const slug = (await params).slug;

  // Find product by slug
  const product = mockProducts.find((p) => p.slug === slug);

  return (
    <div className="container">
      <h1>Название продукта: {product?.title}</h1>
    </div>
  );
}
