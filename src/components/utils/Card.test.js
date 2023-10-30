import Card from "./Card";
import { render, fireEvent } from "@testing-library/react";

test("should render correctly", () => {
	const { getByText } = render(
		<Card>
			<span>Children mock!</span>
		</Card>
	);

	const childrenMock = getByText("Children mock!");

	expect(childrenMock).toBeInTheDocument();
});
