import MainContent from "./MainContent";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("test MainContent component renders correctly", () => {
	const mockSetSideMenuOpen = jest.fn();

	const { container } = render(
		<MemoryRouter>
			<MainContent
				isSideMenuOpen={true}
				setSideMenuOpen={mockSetSideMenuOpen}
			/>
		</MemoryRouter>
	);

	const mainContent = container.getElementsByClassName("main-content")[0];
	const sideMenu = container.getElementsByClassName("side-menu")[0];

	expect(mainContent).toBeInTheDocument();
	expect(sideMenu).toBeInTheDocument();
});

describe("testing routes and their respective correct rendering", () => {
	it("should render the dashboard page", () => {
		const mockSetSideMenuOpen = jest.fn();

		const { getByTestId, container } = render(
			<MemoryRouter>
				<MainContent
					isSideMenuOpen={true}
					setSideMenuOpen={mockSetSideMenuOpen}
				/>
			</MemoryRouter>
		);

		const dashboardLinkButton = getByTestId("dashboard-link");

		fireEvent.click(dashboardLinkButton);

		const dashboardComponentElement =
			container.getElementsByClassName("dashboard-content")[0];

		expect(dashboardComponentElement).toBeInTheDocument();
	});

	it("should render the movie list page", () => {
		const mockSetSideMenuOpen = jest.fn();

		const { getByTestId, container } = render(
			<MemoryRouter initialEntries={["/movies"]}>
				<MainContent
					isSideMenuOpen={true}
					setSideMenuOpen={mockSetSideMenuOpen}
				/>
			</MemoryRouter>
		);

		const moviesListLinkButton = getByTestId("movies-link");

		fireEvent.click(moviesListLinkButton);

		const moviesListComponentElement =
			container.getElementsByClassName("movielist-content")[0];

		expect(moviesListComponentElement).toBeInTheDocument();
	});
});
