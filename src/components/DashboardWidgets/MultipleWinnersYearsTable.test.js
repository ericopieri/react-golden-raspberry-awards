import MultipleWinnersYearsTable from "./MultipleWinnersYearsTable";
import { render, waitFor } from "@testing-library/react";

import axios from "axios";

jest.mock("axios");

test("should render correctly", async () => {
  axios.get.mockResolvedValueOnce({
    data: {
      years: [
        { year: 2021, winCount: 3 },
        { year: 2005, winCount: 3 },
      ],
    },
  });

  const { getByText, container } = render(<MultipleWinnersYearsTable />);

  const tableElement = container.getElementsByClassName("table")[0];

  expect(tableElement).toBeInTheDocument();

  await waitFor(() => expect(getByText("2021")).toBeInTheDocument());
  await waitFor(() => expect(getByText("2005")).toBeInTheDocument());
});
