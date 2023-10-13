import Input from "../utils/Input";
import DefaultButton from "../utils/DefaultButton";
import Table from "../utils/Table/Table";
import axios from "axios";
import { useState } from "react";

function WinnersPerYear() {
    const [yearFilter, setYearFilter] = useState("");
    const [winnersPerYear, setWinnersPerYear] = useState([]);

    function handleChangeFilter(event) {
        if (event.target.value.length > 4) {
            return null;
        };

        setYearFilter(event.target.value);
    }

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
                <Input
                    placeholder="Ano"
                    label="label"
                    name="ano" type="number"
                    value={yearFilter}
                    handleOnChange={handleChangeFilter}
                    handlePressEnter={fetchWinnersPerYear}
                />
                <DefaultButton content="Filtrar!" handleClick={fetchWinnersPerYear} />
            </div>
            <Table columns={["Id", "Year", "Title"]} tableData={winnersPerYear} />
        </>
    );
}

export default WinnersPerYear;