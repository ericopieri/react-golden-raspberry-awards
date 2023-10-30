import CheckBox from "./CheckBox";
import { render, fireEvent } from "@testing-library/react";

test("should render correctly", () => {
	const handleChangeChecked = jest.fn();

	const { container } = render(
		<CheckBox
			label="Label mock!"
			name="Name mock!"
			checked={false}
			handleChangeChecked={handleChangeChecked}
		/>
	);

	const checkboxContainer =
		container.getElementsByClassName("checkbox-container")[0];

	expect(checkboxContainer).toBeInTheDocument();
});

describe("testing checkbox functionalities", () => {
	it("should be checked", () => {
		const handleChangeChecked = jest.fn();

		const { getByTestId } = render(
			<CheckBox
				label="Label mock!"
				name="Name mock!"
				checked={true}
				handleChangeChecked={handleChangeChecked}
			/>
		);

		const checkbox = getByTestId("checkbox");

		expect(checkbox).toHaveAttribute("checked");
	});

	it("should not be checked", () => {
		const handleChangeChecked = jest.fn();

		const { getByTestId } = render(
			<CheckBox
				label="Label mock!"
				name="Name mock!"
				checked={false}
				handleChangeChecked={handleChangeChecked}
			/>
		);

		const checkbox = getByTestId("checkbox");

		expect(checkbox).not.toHaveAttribute("checked");
	});

	it("should call check callback", () => {
		const handleChangeChecked = jest.fn();

		const { getByTestId } = render(
			<CheckBox
				label="Label mock!"
				name="Name mock!"
				checked={false}
				handleChangeChecked={handleChangeChecked}
			/>
		);

		const checkbox = getByTestId("checkbox");

		fireEvent.click(checkbox);

		expect(handleChangeChecked).toBeCalledTimes(1);
	});
});
