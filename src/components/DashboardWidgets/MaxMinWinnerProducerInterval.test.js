import MaxMinWinnerProducerInterval from "./MaxMinWinnerProducerInterval";
import { render, waitFor } from "@testing-library/react";

import axios from "axios";

jest.mock("axios");

test("should render correctly", async () => {
	axios.get.mockResolvedValueOnce({
		data: {
			min: [
				{
					producer: "Producer1",
					interval: 12,
					previousYear: 2010,
					followingYear: 2022,
				},
			],
			max: [
				{
					producer: "Producer2",
					interval: 15,
					previousYear: 2005,
					followingYear: 2020,
				},
			],
		},
	});

	const { getByText, container } = render(<MaxMinWinnerProducerInterval />);

	const maximumTitleElement = getByText("Maximum");
	const minimumTitleElement = getByText("Minimum");
	const tableElementsArray = container.getElementsByClassName("table");

	expect(maximumTitleElement).toBeInTheDocument();
	expect(minimumTitleElement).toBeInTheDocument();

	[...tableElementsArray].forEach((element) => {
		expect(element).toBeInTheDocument();
	});

	await waitFor(() => expect(getByText("Producer1")).toBeInTheDocument());
	await waitFor(() => expect(getByText("Producer2")).toBeInTheDocument());
});
