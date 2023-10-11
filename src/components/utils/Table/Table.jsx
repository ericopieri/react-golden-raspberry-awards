import TableHeader from "../TableHeader/TableHeader";

function Table({ data, columns }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <TableHeader columns={columns} />
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    );
}

export default Table;