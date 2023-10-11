function TableHeader({ columns }) {
    const headerColumnsMap = () => columns.map(
        (thText, index) => <th key={index}>{ thText }</th>
    )

    return (
        headerColumnsMap()
    );
}

export default TableHeader;