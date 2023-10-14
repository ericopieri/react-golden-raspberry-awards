import Card from "../../components/Card/Card";
import PaginationTable from "../../components/utils/Table/PaginatedTable";
import YearFilterInput from "../../components/utils/YearFilterInput";
import DefaultButton from "../../components/utils/DefaultButton";
import CheckBox from "../../components/utils/CheckBox";

import axios from "axios";

import { useState } from "react";

function MovieListContent() {
    const [movies, setMovies] = useState([]);

    const [yearFilter, setYearFilter] = useState("");
    const [isWinnerFilter, setWinnerFilter] = useState(false);

    function hasPagination() {
        return !!Object.keys(movies).find((key) => key === "content");
    }

    function mapMoviesToCorrectColumnsTable(movieList) {
        return movieList.map(
            (movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    year: movie.year,
                    winner: movie.winner ? "Sim" : "Não"
                }
            }
        );
    }

    function mountCompUrl(page) {
        if (yearFilter !== "") {
            return `winner=${isWinnerFilter}&year=${yearFilter}`;
        }

        return `page=${page}&size=10&winner=${isWinnerFilter}`;
    }

    const fetchMovies = async (page) => {
        const urlCompFilter = mountCompUrl(page);

        const { data } = await axios.get("https://tools.texoit.com/backend-java/api/movies?" + urlCompFilter);
        setMovies(data);
    };

    return (
        <section className="movielist-content">
            <h1 className="title-content">MovieList</h1>
            <Card>
                <div className="movies-filter">
                    <YearFilterInput
                        value={yearFilter}
                        setYearFilter={setYearFilter}
                        handlePressEnter={
                            () => fetchMovies(1)
                        }
                    />
                    <CheckBox
                        checked={isWinnerFilter}
                        name="checkWinner"
                        label="Winner?"
                        handleChangeChecked={
                            () => setWinnerFilter(!isWinnerFilter)
                        }
                    />
                    <DefaultButton
                        handleClick={
                            () => fetchMovies(1)
                        }
                        content="Filtrar!"
                    />
                </div>
                <PaginationTable
                    columns={["Id", "Title", "Year", "Winner?"]}
                    tableData={
                        mapMoviesToCorrectColumnsTable(hasPagination() ? movies.content : movies)
                    }
                    handleChangePage={fetchMovies}
                    enabledPagination={hasPagination()}
                    last={movies.last}
                    lastPageNumber={movies.totalPages}
                />
            </Card>
        </section>
    );
}

export default MovieListContent;