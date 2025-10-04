import {Header} from "@/components/header/header";
import {Greeting} from "@/components/greeting/greeting";

export default function ContactPage() {
	return (
		<>
			<Header />
			<Greeting pageName="Контакты" />
			<h1>Contact page</h1>
		</>
	)
}
