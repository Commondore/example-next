import { Header } from "@/components/header/header";
import { Greeting } from "@/components/greeting/greeting";
import { Counter } from "@/components/counter/counter";

export default function HomePage() {
  return (
    <>
      <Header />
      <Greeting pageName="Главная" value="Салам" />
      <Counter />
      <div>
        <h1>Home page</h1>
        <p>Описание</p>
      </div>
      <h3>Sub title</h3>
    </>
  );
}
