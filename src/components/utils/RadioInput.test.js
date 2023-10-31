import RadioInput from "./RadioInput";
import { render, fireEvent } from "@testing-library/react";

test("should render correctly", () => {
	const handleOnChange = jest.fn();

	const { container } = render(
		<RadioInput
			label="Label mock!"
			name="Name mock!"
			checked={false}
			handleOnChange={handleOnChange}
		/>
	);

	const radioInputContainer = container.getElementsByClassName(
		"radio-input-container"
	)[0];

	expect(radioInputContainer).toBeInTheDocument();
});

describe("testing radioInput functionalities", () => {
	it("should be checked", () => {
		const handleOnChange = jest.fn();

		const { getByTestId } = render(
			<RadioInput
				label="Label mock!"
				name="Name mock!"
				checked={true}
				handleOnChange={handleOnChange}
			/>
		);

		const radioInput = getByTestId("radioInput");

		expect(radioInput).toHaveAttribute("checked");
	});

	it("should be not checked", () => {
		const handleOnChange = jest.fn();

		const { getByTestId } = render(
			<RadioInput
				label="Label mock!"
				name="Name mock!"
				checked={false}
				handleOnChange={handleOnChange}
			/>
		);

		const radioInput = getByTestId("radioInput");

		expect(radioInput).not.toHaveAttribute("checked");
	});
});
