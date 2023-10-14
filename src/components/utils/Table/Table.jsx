import TableHeader from "../TableHeader/TableHeader";
import TableRowContent from "../TableRowContent/TableRowContent";

function Table({ tableData, columns }) {
    const tableBodyMap = () => {
        if (tableData.length === 0) {
            return <tr>
                <td colSpan={columns.length} className="empty-table">Empty table!</td>
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
                { tableBodyMap() }
            </tbody>
        </table>
    );
}

export default Table;