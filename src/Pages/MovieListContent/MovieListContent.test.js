import { render, fireEvent } from "@testing-library/react";
import MovieListContent from "./MovieListContent";

test("should render correctly", () => {
	const { getByTestId, getByText, container } = render(<MovieListContent />);

	const isWinnerCheckbox = getByTestId("checkbox");
	const tableMovies = container.getElementsByClassName("table")[0];
	const filterButton = getByText("Filter!");

	expect(isWinnerCheckbox).toBeInTheDocument();
	expect(tableMovies).toBeInTheDocument();
	expect(filterButton).toBeInTheDocument();
});

describe("testing MovieListContent funcionalities", () => {
	it("testing fill filters", () => {
		const { container, getByTestId } = render(<MovieListContent />);

		const yearFilterInput = container.getElementsByClassName("input")[0];

		fireEvent.change(yearFilterInput, { target: { value: "2002" } });

		expect(yearFilterInput).toHaveValue(2002);
	});
});
