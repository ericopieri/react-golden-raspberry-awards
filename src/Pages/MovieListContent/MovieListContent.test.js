import { render, fireEvent } from "@testing-library/react";
import MovieListContent from "./MovieListContent";

test("should render correctly", () => {
	const { getByTestId, getByText, container } = render(<MovieListContent />);

	const isWinnerRadiosContainer = container.getElementsByClassName(
		"iswinnerradiofilter"
	)[0];
	const tableMovies = container.getElementsByClassName("table")[0];
	const filterButton = getByText("Filter!");

	expect(isWinnerRadiosContainer).toBeInTheDocument();
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
