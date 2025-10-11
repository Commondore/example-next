import { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Капучино Тарантино",
    slug: "capuchino-tarantino",
    count: 20,
    price: 130,
    image: "/images/capuchino.jpg",
    description: "Вкусный кофе капучино",
  },
  {
    id: 2,
    title: "Латте",
    slug: "latte",
    count: 10,
    price: 150,
    image: "/images/latte.webp",
    description: "Вкусный кофе Латте",
  },
  {
    id: 3,
    title: "Мокко",
    slug: "mokko",
    count: 50,
    price: 150,
    image: "/images/mokko.jpg",
    description: "Вкусный кофе Мокко",
  },
];
