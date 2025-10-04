import {Header} from "@/components/header/header";
import {Greeting} from "@/components/greeting/greeting";

export default function AboutPage() {
	return (
		<>
			<Header />
			<Greeting pageName="О нас" />
			<h1>About page</h1>
		</>
	)
}
