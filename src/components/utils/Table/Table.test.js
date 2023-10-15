import Table from "./Table";
import { render, fireEvent } from "@testing-library/react";

describe("testing possible tables", () => {
  it("test empty table", () => {
    const { getByText } = render(
      <Table columns={["Column1", "Column2"]} tableData={[]} />
    );

    const column1 = getByText("Column1");
    const column2 = getByText("Column2");

    expect(column1).toBeInTheDocument();
    expect(column2).toBeInTheDocument();

    const emptyTableRow = getByText("Empty table!");

    expect(emptyTableRow).toBeInTheDocument();
  });

  it("test table with data", () => {
    const { getByText } = render(
      <Table
        columns={["Column1", "Column2"]}
        tableData={[
          { column1row1: "column1row1", column2row1: "column2row1" },
          { column1row2: "column1row2", column2row2: "column2row2" },
        ]}
      />
    );

    const column1 = getByText("Column1");
    const column2 = getByText("Column2");

    expect(column1).toBeInTheDocument();
    expect(column2).toBeInTheDocument();

    const column1row1 = getByText("column1row1");
    const column2row1 = getByText("column2row1");
    const column1row2 = getByText("column1row2");
    const column2row2 = getByText("column2row2");

    expect(column1row1).toBeInTheDocument();
    expect(column2row1).toBeInTheDocument();
    expect(column1row2).toBeInTheDocument();
    expect(column2row2).toBeInTheDocument();
  });
});
