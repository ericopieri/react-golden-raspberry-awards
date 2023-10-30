import axios from "axios";

import Table from "../utils/Table/Table";

import { useEffect, useState } from "react";

/**
 * Painel widget que exibe em tabela os anos em que houveram mais de um ganhador do prêmio.
 *
 * @returns void
 */
function MultipleWinnersYearsTable() {
	const [yearsMoreThanOneWinner, setYearsMoreThanOneWinner] = useState([]);

	const fetchYearsMoreThanOneWinner = async () => {
		const { data } = await axios.get(
			"https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners"
		);
		const { years } = data;

		setYearsMoreThanOneWinner(years);
	};

	useEffect(() => {
		fetchYearsMoreThanOneWinner();
	}, []);

	return (
		<Table
			columns={["Year", "Win Count"]}
			tableData={yearsMoreThanOneWinner}
		/>
	);
}

export default MultipleWinnersYearsTable;
