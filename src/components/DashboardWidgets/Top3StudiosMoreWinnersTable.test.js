import Top3StudiosMoreWinners from "./Top3StudiosMoreWinnersTable";
import { render, waitFor } from "@testing-library/react";

import axios from "axios";

jest.mock("axios");

test("should render correctly", async () => {
	axios.get.mockResolvedValueOnce({
		data: {
			studios: [
				{ name: "Warner", winCount: 3 },
				{ year: "Disney", winCount: 2 },
			],
		},
	});

	const { container, getByText } = render(<Top3StudiosMoreWinners />);

	const tableElement = container.getElementsByClassName("table")[0];

	expect(tableElement).toBeInTheDocument();

	await waitFor(() => expect(getByText("Warner")).toBeInTheDocument());
	await waitFor(() => expect(getByText("Disney")).toBeInTheDocument());
});
