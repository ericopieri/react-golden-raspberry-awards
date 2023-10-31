import IsWinnerRadioFilter from "./IsWinnerRadioFilter";
import { render, fireEvent } from "@testing-library/react";

test("test IsWinnerRadioFilter component renders correctly", () => {
	const handleChangeIsWinnerFilter = jest.fn();

	const { container } = render(
		<IsWinnerRadioFilter
			IsWinnerRadioFilter={null}
			handleChangeIsWinnerFilter={handleChangeIsWinnerFilter}
		/>
	);

	const iswinnerradiofilter = container.getElementsByClassName(
		"iswinnerradiofilter"
	)[0];

	const radios = container.querySelectorAll(
		".iswinnerradiofilter input[type=radio]"
	);

	expect(radios.length).toBe(3);
	expect(iswinnerradiofilter).toBeInTheDocument();
});

describe("testing radio's click", () => {
	it('click on "Sim"', () => {
		const handleChangeIsWinnerFilter = jest.fn();

		const { container } = render(
			<IsWinnerRadioFilter
				IsWinnerRadioFilter={true}
				handleChangeIsWinnerFilter={handleChangeIsWinnerFilter}
			/>
		);

		const radio = container.querySelector(
			'.iswinnerradiofilter input[name="Sim"]'
		);

		fireEvent.click(radio);

		expect(handleChangeIsWinnerFilter).toBeCalledTimes(1);
		expect(handleChangeIsWinnerFilter).toBeCalledWith(true);
	});

	it('click on "Não"', () => {
		const handleChangeIsWinnerFilter = jest.fn();

		const { container } = render(
			<IsWinnerRadioFilter
				IsWinnerRadioFilter={true}
				handleChangeIsWinnerFilter={handleChangeIsWinnerFilter}
			/>
		);

		const radio = container.querySelector(
			'.iswinnerradiofilter input[name="Não"]'
		);

		fireEvent.click(radio);

		expect(handleChangeIsWinnerFilter).toBeCalledTimes(1);
		expect(handleChangeIsWinnerFilter).toBeCalledWith(false);
	});

	it('click on "Sim"', () => {
		const handleChangeIsWinnerFilter = jest.fn();

		const { container } = render(
			<IsWinnerRadioFilter
				IsWinnerRadioFilter={true}
				handleChangeIsWinnerFilter={handleChangeIsWinnerFilter}
			/>
		);

		const radio = container.querySelector(
			'.iswinnerradiofilter input[name="Sim/Não"]'
		);

		fireEvent.click(radio);

		expect(handleChangeIsWinnerFilter).toBeCalledTimes(1);
		expect(handleChangeIsWinnerFilter).toBeCalledWith(null);
	});
});
