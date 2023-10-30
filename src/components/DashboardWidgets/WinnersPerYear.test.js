import WinnersPerYear from "./WinnersPerYear";
import { render, fireEvent, waitFor } from "@testing-library/react";

import axios from "axios";

jest.mock("axios");

test("should render correctly with filter", async () => {
	axios.get.mockResolvedValueOnce({
		data: [
			{ id: 1, title: "Movie1", year: 2021 },
			{ id: 2, title: "Movie2", year: 2021 },
		],
	});

	const { getByText, container } = render(<WinnersPerYear />);

	const yearFilterInputElement = container.getElementsByClassName("input")[0];
	const defaultButtonElement =
		container.getElementsByClassName("default-button")[0];
	const tableElement = container.getElementsByClassName("table")[0];

	expect(yearFilterInputElement).toBeInTheDocument();
	expect(defaultButtonElement).toBeInTheDocument();
	expect(tableElement).toBeInTheDocument();

	fireEvent.change(yearFilterInputElement, {
		target: { value: "2021" },
	});
	fireEvent.click(defaultButtonElement);

	await waitFor(() => expect(getByText("Movie1")).toBeInTheDocument());
	await waitFor(() => expect(getByText("Movie2")).toBeInTheDocument());
});
