import RadioInput from "./RadioInput";

/**
 * Componente para filtros relacionados ao sucesso do filme (Filme ganhador? Sim, Não ou Sim/Não)
 *
 * @param {null|String} isWinnerFilter Filtro atual. Usado para verificar qual radio input vai estar checkado.
 * @param {function} handleChangeIsWinnerFilter Callback para quando um dos inputs radios forem checkados.
 */
function IsWinnerRadioFilter({ isWinnerFilter, handleChangeIsWinnerFilter }) {
	const changeIsWinnerFilter = (newIsWinnerFilter) =>
		handleChangeIsWinnerFilter(newIsWinnerFilter);

	return (
		<div className="iswinnerradiofilter">
			<p>Winner?</p>
			<RadioInput
				handleOnChange={() => changeIsWinnerFilter(true)}
				checked={isWinnerFilter === true}
				label="Sim"
				name="Sim"
			/>
			<RadioInput
				handleOnChange={() => changeIsWinnerFilter(false)}
				checked={isWinnerFilter === false}
				label="Não"
				name="Não"
			/>
			<RadioInput
				handleOnChange={() => changeIsWinnerFilter(null)}
				checked={isWinnerFilter === null}
				label="Sim/Não"
				name="Sim/Não"
			/>
		</div>
	);
}

export default IsWinnerRadioFilter;
