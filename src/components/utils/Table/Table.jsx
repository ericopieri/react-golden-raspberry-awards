import TableHeader from "../TableHeader/TableHeader";
import TableRowContent from "../TableRowContent/TableRowContent";

/**
 * Componente genérico para criação de tabelas HTML reutilizáveis.
 *
 * @param {Array} columns Lista com os nomes das colunas do header da tabela.
 * @param {Array} tableData Lista com os valores que serão cada linha da tabela que está sendo criada.
 * @returns void
 */
function Table({ tableData, columns }) {
	const tableBodyMap = () => {
		if (tableData.length === 0) {
			return (
				<tr>
					<td colSpan={columns.length} className="empty-table">
						Empty table!
					</td>
				</tr>
			);
		}

		return tableData.map((row, index) => (
			<tr key={"row-table" + index}>
				<TableRowContent
					rowColumnValues={Object.values(row)}
					columnRowIndex={index}
				/>
			</tr>
		));
	};

	return (
		<table className="table">
			<thead>
				<tr>
					<TableHeader columns={columns} />
				</tr>
			</thead>
			<tbody>{tableBodyMap()}</tbody>
		</table>
	);
}

export default Table;
