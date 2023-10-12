function TableRow({ rowColumnValues, columnRowIndex }) {
    return (
        rowColumnValues.map(
            (columnValue, index) => (
                <td key={"row" + columnRowIndex + "-column" + index}>
                    { columnValue }
                </td>
            )
        )
    );
}

export default TableRow;