import SideMenu from "./SideMenu";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("test SideMenu component renders correctly", () => {
	const mockSetSideMenuOpen = jest.fn();

	const { getByText } = render(
		<MemoryRouter>
			<SideMenu
				isSideMenuOpen={true}
				setSideMenuOpen={mockSetSideMenuOpen}
			/>
		</MemoryRouter>
	);

	const dashboardLinkButton = getByText("Dashboard");
	const moviesListLinkButton = getByText("Itens");

	expect(dashboardLinkButton).toBeInTheDocument();
	expect(moviesListLinkButton).toBeInTheDocument();
});

test("should toggle side menu to closed", () => {
	const mockSetSideMenuOpen = jest.fn();

	const { getByText } = render(
		<MemoryRouter>
			<SideMenu
				isSideMenuOpen={true}
				setSideMenuOpen={mockSetSideMenuOpen}
			/>
		</MemoryRouter>
	);

	const closeSideMenuButton = getByText("Close");

	fireEvent.click(closeSideMenuButton);

	expect(mockSetSideMenuOpen).toHaveBeenCalledWith(false);
});
