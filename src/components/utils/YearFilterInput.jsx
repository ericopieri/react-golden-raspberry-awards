import Input from "./Input";

/**
 * Extensão do Componente de Input. Input feito para reutilização do caso de filtro por ano para filmes.
 *
 * @param {function} setYearFilter Callback setter para mudança da propriedade que guarda o texto-filtro no componente pai.
 * @param {String} setYearFilter Propridade `value` do Input.
 * @param {function} handlePressEnter chamado ao pressionar a tecla name com foco no Input.
 * @returns void
 */
function YearFilterInput({ setYearFilter, value, handlePressEnter }) {
	function handleChangeYearFilter(event) {
		if (event.target.value.length > 4) {
			return null;
		}

		setYearFilter(event.target.value);
	}

	return (
		<Input
			placeholder="Year"
			type="number"
			name="movieYear"
			value={value}
			handleOnChange={handleChangeYearFilter}
			handlePressEnter={handlePressEnter}
		/>
	);
}

export default YearFilterInput;
