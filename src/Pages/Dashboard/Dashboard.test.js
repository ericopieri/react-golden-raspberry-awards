import Dashboard from "./Dashboard";
import { render } from "@testing-library/react";

test("should render correctly", () => {
  const { container } = render(<Dashboard />);

  const widgetList = container.getElementsByClassName("card");

  expect(widgetList).toHaveLength(4);
});
