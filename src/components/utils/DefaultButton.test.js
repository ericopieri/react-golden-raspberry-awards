import DefaultButton from "./DefaultButton";
import { render, fireEvent } from "@testing-library/react";

test("should render correctly", () => {
  const handleClick = jest.fn();

  const { getByText } = render(
    <DefaultButton content="Button!" handleClick={handleClick} />
  );

  const button = getByText("Button!");

  expect(button).toBeInTheDocument();
});
