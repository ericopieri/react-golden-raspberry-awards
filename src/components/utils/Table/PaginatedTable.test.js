import PaginatedTable from "./PaginatedTable";
import { render, fireEvent } from "@testing-library/react";

test("test PaginatedTable component renders correctly", () => {
  const handleChangePage = jest.fn();

  const { getByText, container } = render(
    <PaginatedTable
      columns={["Column1", "Column2"]}
      tableData={[]}
      enabledPagination={true}
      last={false}
      lastPageNumber={1}
      handleChangePage={handleChangePage}
    />
  );

  const column1 = getByText("Column1");
  const column2 = getByText("Column2");
  const paginationBox = container.getElementsByClassName("pagination-box")[0];

  expect(column1).toBeInTheDocument();
  expect(column2).toBeInTheDocument();
  expect(paginationBox).toBeInTheDocument();
});

describe("testing PaginatedTable funcionalities", () => {
  it("should have pagination disabled", () => {
    const handleChangePage = jest.fn();

    const { container } = render(
      <PaginatedTable
        columns={["Column1", "Column2"]}
        tableData={[]}
        enabledPagination={false}
        last={false}
        lastPageNumber={1}
        handleChangePage={handleChangePage}
      />
    );

    const paginationBox = container.getElementsByClassName(
      "pagination-disabled"
    )[0];

    expect(paginationBox).toBeInTheDocument();
  });

  it("should call the first page", () => {
    const handleChangePage = jest.fn();

    const { getByText } = render(
      <PaginatedTable
        columns={["Column1", "Column2"]}
        tableData={[]}
        enabledPagination={true}
        last={false}
        lastPageNumber={1}
        handleChangePage={handleChangePage}
      />
    );

    const firstPageButton = getByText("First Page");

    fireEvent.click(firstPageButton);

    expect(handleChangePage).toBeCalledWith(1);
  });

  it("should call the last page", () => {
    const lastPageNumber = 5;

    const handleChangePage = jest.fn();

    const { getByText } = render(
      <PaginatedTable
        columns={["Column1", "Column2"]}
        tableData={[]}
        enabledPagination={true}
        last={false}
        lastPageNumber={lastPageNumber}
        handleChangePage={handleChangePage}
      />
    );

    const lastPageButton = getByText("Last Page");

    fireEvent.click(lastPageButton);

    expect(handleChangePage).toBeCalledWith(lastPageNumber - 1);
  });

  it("should go to the next page and then to the previous page", () => {
    const lastPageNumber = 10;

    const handleChangePage = jest.fn();

    const { getByText } = render(
      <PaginatedTable
        columns={["Column1", "Column2"]}
        tableData={[]}
        enabledPagination={true}
        last={false}
        lastPageNumber={lastPageNumber}
        handleChangePage={handleChangePage}
      />
    );

    const nextPageButton = getByText("Next");
    const previousPageButton = getByText("Previous");

    fireEvent.click(nextPageButton);

    expect(handleChangePage).toBeCalledWith(2);

    fireEvent.click(previousPageButton);

    expect(handleChangePage).toBeCalledWith(1);
  });
});
