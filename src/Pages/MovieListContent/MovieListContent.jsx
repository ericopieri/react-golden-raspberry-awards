import axios from "axios";

import Card from "../../components/utils/Card";
import PaginationTable from "../../components/utils/Table/PaginatedTable";
import YearFilterInput from "../../components/utils/YearFilterInput";
import DefaultButton from "../../components/utils/DefaultButton";
import IsWinnerRadioFilter from "../../components/utils/IsWinnerRadioFilter";

import { useState } from "react";

/**
 * Page que será exibido no conteúdo princiapal da página na rota `/itens`. Lista de Filmes que oferece filtro por ano concorrido e filtro por Vencedor/Perdedor.
 *
 * @returns void
 */
function MovieListContent() {
	const [movies, setMovies] = useState([]);

	const [yearFilter, setYearFilter] = useState("");
	const [isWinnerFilter, setWinnerFilter] = useState(null);

	const [hasPagination, setHasPagination] = useState(false);

	function mapMoviesToCorrectColumnsTable(movieList = movies) {
		if (hasPagination) {
			movieList = movies.content;
		}

		return movieList.map((movie) => {
			return {
				id: movie.id,
				title: movie.title,
				year: movie.year,
				winner: movie.winner ? "Sim" : "Não",
			};
		});
	}

	function mountCompUrl(page) {
		let url = "";

		if (isWinnerFilter === null && yearFilter !== "") {
			return (url += `winner=true&year=${yearFilter}`);
		}

		if (isWinnerFilter !== null) {
			url += `winner=${isWinnerFilter}&`;
		}

		if (yearFilter !== "") {
			return (url += `year=${yearFilter}`);
		}

		return (url += `page=${page}&size=10`);
	}

	const fetchMovies = async (page) => {
		const urlCompFilter = mountCompUrl(page);

		const { data } = await axios.get(
			"https://tools.texoit.com/backend-java/api/movies?" + urlCompFilter
		);

		!!Object.keys(data).find((key) => key === "content")
			? setHasPagination(true)
			: setHasPagination(false);

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
						handlePressEnter={() => fetchMovies(0)}
					/>
					<IsWinnerRadioFilter
						isWinnerFilter={isWinnerFilter}
						handleChangeIsWinnerFilter={setWinnerFilter}
					/>
					<DefaultButton
						handleClick={() => fetchMovies(0)}
						content="Filter!"
					/>
				</div>
				<PaginationTable
					columns={["Id", "Title", "Year", "Winner?"]}
					tableData={mapMoviesToCorrectColumnsTable()}
					handleChangePage={fetchMovies}
					enabledPagination={hasPagination}
					last={movies.last}
					lastPageNumber={movies.totalPages}
				/>
			</Card>
		</section>
	);
}

export default MovieListContent;
