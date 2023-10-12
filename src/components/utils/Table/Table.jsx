import TableHeader from "../TableHeader/TableHeader";
import TableRowContent from "../TableRowContent/TableRowContent";

function Table({ tableData, columns }) {
    console.log(tableData);

    const tableDataMap = () => {
        if (tableData.length === 0) {
            return <tr>
                <td colSpan={columns.length} className="sem-itens">Sem itens na tabela!</td>
            </tr>
        }

        return tableData.map(
            (row, index) => (
                <tr key={"row-table" + index}>
                    <TableRowContent rowColumnValues={ Object.values(row) } columnRowIndex={index} />
                </tr>
            )
        ) 
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <TableHeader columns={columns} />
                </tr>
            </thead>
            <tbody>
                { tableDataMap() }
            </tbody>
        </table>
    );
}

export default Table;