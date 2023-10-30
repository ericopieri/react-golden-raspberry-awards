import DashboardCard from "./DashboardCard";
import { render } from "@testing-library/react";

test("test if DashboardCard component is rendered correctly", () => {
	const { getByText } = render(
		<DashboardCard title="Title mock!">
			<span>Children mock!</span>
		</DashboardCard>
	);

	const titleElement = getByText("Title mock!");
	const childrenElement = getByText("Children mock!");

	expect(titleElement).toBeInTheDocument();
	expect(childrenElement).toBeInTheDocument();

	expect(titleElement).toHaveAttribute("title", "Title mock!");
});
