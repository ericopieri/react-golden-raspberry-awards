import TableHeader from "./TableHeader";
import { render } from "@testing-library/react";

test("should render correctly", () => {
  const { getByText } = render(
    <table>
      <thead>
        <tr>
          <TableHeader columns={["Column1", "Column2"]} />
        </tr>
      </thead>
    </table>
  );

  const column1 = getByText("Column1");
  const column2 = getByText("Column2");

  expect(column1).toBeInTheDocument();
  expect(column2).toBeInTheDocument();
});
