import { render } from "@testing-library/react";
import TableRowContent from "./TableRowContent";

test("should render correctly", () => {
	const { getByText } = render(
		<table>
			<thead>
				<tr>
					<th>Column1</th>
					<th>Column2</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<TableRowContent
						rowColumnValues={["Row1Colum1", "Row1Column2"]}
						columnRowIndex={0}
					/>
				</tr>
			</tbody>
		</table>
	);

	const column1 = getByText("Row1Colum1");
	const column2 = getByText("Row1Column2");

	expect(column1).toBeInTheDocument();
	expect(column2).toBeInTheDocument();
});
