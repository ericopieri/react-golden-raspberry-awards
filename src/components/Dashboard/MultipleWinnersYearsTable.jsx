import Table from "../utils/Table/Table";
import { useEffect, useState } from "react";

import axios from "axios";

function MultipleWinnersYearsTable({ }) {
    const [yearsMoreThanOneWinner, setYearsMoreThanOneWinner] = useState(Array());

    const fetchYearsMoreThanOneWinner = async () => {
        const { data } =  await axios.get("https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners");

        setYearsMoreThanOneWinner(data);
        console.log(data);
    };

    useEffect(() => {
        fetchYearsMoreThanOneWinner();
    }, []);

    return (
        <Table columns={Array("Year", "WinCount")} tableData={yearsMoreThanOneWinner} />
    );
}

export default MultipleWinnersYearsTable;