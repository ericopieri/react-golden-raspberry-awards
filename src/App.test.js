import { render } from "@testing-library/react";
import App from "./App";

test("test whether the header component is being rendered correctly", () => {
  const { container } = render(<App />);

  const header = container.getElementsByClassName("header")[0];

  expect(header).toBeInTheDocument();
});

test("test whether the MainContent component is being rendered correctly", () => {
  const { container } = render(<App />);

  const mainContentContainer = container.getElementsByClassName(
    "main-content-container"
  )[0];

  expect(mainContentContainer).toBeInTheDocument();
});
