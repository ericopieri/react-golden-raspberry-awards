import axios from "axios";

import Table from "../utils/Table/Table";
import YearFilterInput from "../utils/YearFilterInput";
import DefaultButton from "../utils/DefaultButton";

import { useState } from "react";


/**
 * Painel widget que exibe os ganhadores do prêmio por ano. O ano é informado pelo usuário através de um campo de filtro.
 * 
 * @returns void
 */
function WinnersPerYear() {
    const [yearFilter, setYearFilter] = useState("");
    const [winnersPerYear, setWinnersPerYear] = useState([]);

    const fetchWinnersPerYear = async () => {
        if (yearFilter === "") {
            return null;
        }

        const { data } = await axios.get("https://tools.texoit.com/backend-java/api/movies?winner=true&year=" + yearFilter);

        const winnersPerYear = data.map(
            (movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    year: movie.year
                }
            }
        );

        setWinnersPerYear(winnersPerYear);
    };

    return (
        <>
            <div className="per-year-filter">
                <YearFilterInput
                    value={yearFilter}
                    setYearFilter={setYearFilter}
                    handlePressEnter={fetchWinnersPerYear}
                />
                <DefaultButton content="Filter!" handleClick={fetchWinnersPerYear} />
            </div>
            <Table columns={["Id", "Year", "Title"]} tableData={winnersPerYear} />
        </>
    );
}

export default WinnersPerYear;
