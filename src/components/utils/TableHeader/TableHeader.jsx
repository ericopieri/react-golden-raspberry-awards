/**
 * Header da tabela genérica criada no componente Table.
 * 
 * @param {Array} columns Lista com os nomes das colunas do header da tabela.
 * @returns void
 */
function TableHeader({ columns }) {
    const headerColumnsMap = () => columns.map(
        (thText, index) => <th key={index}>{ thText }</th>
    )

    return (
        headerColumnsMap()
    );
}

export default TableHeader;
