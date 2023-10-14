import Table from "./Table";
import { useEffect, useState } from "react";


function PaginatedTable({ tableData, columns, handleChangePage, enabledPagination, last, lastPageNumber }) {
    const [activatedPage, setActivatedPage] = useState(1);

    const compClassName = !enabledPagination ? " pagination-disabled" : "";

    useEffect(() => {
        setActivatedPage(1);
    }, [enabledPagination]);

    useEffect(() => {
        handleChangePage(activatedPage);
    }, [])

    useEffect(() => {
        handleChangePage(activatedPage)
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
                        onClick={() => activatedPage > 1 && setActivatedPage(activatedPage - 1)}
                    >
                        Previous
                    </button>
                    <span>{ activatedPage }</span>
                    <button
                        className={last ? "disabled-button" : ""}
                        onClick={() => !last && setActivatedPage(activatedPage + 1)}
                    >
                        Next
                    </button>
                    <button onClick={() => setActivatedPage(lastPageNumber - 1)}>
                        Last
                    </button>
                </div>
            </div>
        </>
    );
}

export default PaginatedTable;