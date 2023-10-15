import { render, fireEvent } from "@testing-library/react";

import Header from "./Header";

test("test if Header component is rendering correctly", () => {
  const { getByText } = render(<Header />);

  const button = getByText(">");
  const spanHeaderTitle = getByText("Golden Raspberry Awards!");

  expect(button).toBeInTheDocument();
  expect(spanHeaderTitle).toBeInTheDocument();
});

describe("test toggle menu open to on", () => {
  it("click on the open menu button and check if it is passing true", () => {
    const mockSetSideMenuOpen = jest.fn();

    const { getByText } = render(
      <Header setSideMenuOpen={mockSetSideMenuOpen} />
    );

    const openSideMenuButton = getByText(">");

    fireEvent.click(openSideMenuButton);

    expect(mockSetSideMenuOpen).toHaveBeenCalledWith(true);
  });
});
