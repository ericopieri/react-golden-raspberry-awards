import { useEffect, useState } from "react";

import Table from "./Table";

/**
 * Extensão do componente genérico de Tabela. Cria uma tabela com sistema de páginação.
 *
 * @param {Array} tableData Lista com os valores que serão cada linha da tabela que está sendo criada.
 * @param {Array} columns Lista com os nomes das colunas do header da tabela.
 * @param {function} handleChangePage Função callback que é executada quando o estado da página interna muda.
 * @param {Boolean} enabledPagination Indica se o sistema de páginação deve funcionar. Falso: a barra inferior de troca de página fica desabilitada.
 * @param {Boolean} last Indica se o grupo de dados exibidos no momento, na tabela, é o grupo de dados da última página possível para aquele filtro.
 * @param {Number} lastPageNumber Número da última página possível para o grupo de dados e filtro atual.
 * @returns void
 */
function PaginatedTable({
	tableData,
	columns,
	handleChangePage,
	enabledPagination,
	last,
	lastPageNumber,
}) {
	const [activatedPage, setActivatedPage] = useState(1);

	const compClassName = !enabledPagination ? " pagination-disabled" : "";

	useEffect(() => {
		setActivatedPage(1);
	}, [enabledPagination]);

	useEffect(() => {
		handleChangePage(activatedPage);
	}, []);

	useEffect(() => {
		handleChangePage(activatedPage);
	}, [activatedPage]);

	return (
		<>
			<Table tableData={tableData} columns={columns} />
			<div className={"pagination-container" + compClassName}>
				<div className="pagination-box">
					<button onClick={() => setActivatedPage(1)}>
						First Page
					</button>
					<button
						className={activatedPage === 1 ? "disabled-button" : ""}
						onClick={() =>
							activatedPage > 1 &&
							setActivatedPage(activatedPage - 1)
						}
					>
						Previous
					</button>
					<span>{activatedPage}</span>
					<button
						className={last ? "disabled-button" : ""}
						onClick={() =>
							!last && setActivatedPage(activatedPage + 1)
						}
					>
						Next
					</button>
					<button
						onClick={() => setActivatedPage(lastPageNumber - 1)}
					>
						Last Page
					</button>
				</div>
			</div>
		</>
	);
}

export default PaginatedTable;
