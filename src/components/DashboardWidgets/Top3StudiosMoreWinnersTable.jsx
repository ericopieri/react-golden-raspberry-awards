import axios from "axios";

import Table from "../utils/Table/Table";

import { useState, useEffect } from "react";

/**
 * Painel widget que exibe em tabela os anos em que houveram mais de um ganhador do prêmio.
 *
 * @returns void
 */
function Top3StudiosMoreWinners() {
	const [top3WinnerStudios, setTop3WinnerStudios] = useState([]);

	const fetchTop3WinnerStudios = async () => {
		const { data } = await axios.get(
			"https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count"
		);
		const { studios } = data;

		studios.sort((studioA, studioB) => studioB.winCount - studioA.winCount);
		const top3WinnerStudios = studios.slice(0, 3);

		setTop3WinnerStudios(top3WinnerStudios);
	};

	useEffect(() => {
		fetchTop3WinnerStudios();
	}, []);

	return (
		<Table columns={["Name", "Win Count"]} tableData={top3WinnerStudios} />
	);
}

export default Top3StudiosMoreWinners;
