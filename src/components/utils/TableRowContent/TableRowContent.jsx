/**
 * Componente que é utilizado para cada linha da tabela genérica criada no componente Table.
 *
 * @param {Array} rowColumnValues List com os efetivos valores da linha.
 * @param {Number} columnRowIndex Index da linha para concatenação na key da iteração.
 * @returns void
 */
function TableRowContent({ rowColumnValues, columnRowIndex }) {
	return rowColumnValues.map((columnValue, index) => (
		<td key={"row" + columnRowIndex + "-column" + index}>{columnValue}</td>
	));
}

export default TableRowContent;
