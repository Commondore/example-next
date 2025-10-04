import {Header} from "@/components/header/header";
import {Greeting} from "@/components/greeting/greeting";

export default function HomePage() {
	return (
		<>
			<Header />
			<Greeting pageName="Главная" value="Салам"  />
			<div>
				<h1>Home page</h1>
				<p>Описание</p>
			</div>
			<h3>Sub title</h3>
		</>
	)
}
