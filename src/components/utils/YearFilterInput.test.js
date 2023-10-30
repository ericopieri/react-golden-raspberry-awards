import YearFilterInput from "./YearFilterInput";
import { render } from "@testing-library/react";

test("should render correctly", () => {
	const handlePressEnter = jest.fn();
	const setYearFilter = jest.fn();

	const { container } = render(
		<YearFilterInput
			value="Value mock!"
			handlePressEnter={handlePressEnter}
			setYearFilter={setYearFilter}
		/>
	);

	const yearFilterInput = container.getElementsByClassName("input")[0];

	expect(yearFilterInput).toBeInTheDocument();
});
