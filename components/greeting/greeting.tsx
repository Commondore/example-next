interface GreetingProps {
	pageName: string;
	value: "Салам" | "Привет" | "Buenos Dias" | "Hello" | string;
}

export const Greeting = ({pageName, value = "Привет"}: GreetingProps) => {
	return (
		<p>{value} тебе на странице: {pageName}</p>
	)
}
