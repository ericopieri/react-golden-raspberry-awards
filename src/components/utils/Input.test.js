import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

test("should render correctly", () => {
	const handleOnChange = jest.fn();
	const handlePressEnter = jest.fn();

	const { container } = render(
		<Input
			placeholder="Placeholder mock!"
			name="Name mock!"
			type="text"
			value="Value mock!"
			handleOnChange={handleOnChange}
			handlePressEnter={handlePressEnter}
		/>
	);

	const inputElement = container.getElementsByClassName("input")[0];

	expect(inputElement).toBeInTheDocument();
});

describe("testing input element funcionalities", () => {
	it("should call onChange callback", () => {
		const handleOnChange = jest.fn();
		const handlePressEnter = jest.fn();

		const { container } = render(
			<Input
				placeholder="Placeholder mock!"
				name="Name mock!"
				type="text"
				value="Teste!"
				handleOnChange={handleOnChange}
				handlePressEnter={handlePressEnter}
			/>
		);

		const inputElement = container.getElementsByClassName("input")[0];

		fireEvent.change(inputElement, {
			target: { value: "Input fill mock!" },
		});

		expect(handleOnChange).toBeCalledTimes(1);
	});

	it("should call handlePressEnter callback", () => {
		const handleOnChange = jest.fn();
		const handlePressEnter = jest.fn();

		const { container } = render(
			<Input
				placeholder="Placeholder mock!"
				name="Name mock!"
				type="text"
				value="Teste!"
				handleOnChange={handleOnChange}
				handlePressEnter={handlePressEnter}
			/>
		);

		const inputElement = container.getElementsByClassName("input")[0];

		fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

		expect(handlePressEnter).toBeCalledTimes(1);
	});
});
