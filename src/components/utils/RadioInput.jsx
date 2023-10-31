/**
 * Componente para criação de input do tipo Radio genérico reutilizável.
 *
 * @param {Boolean} checked Indica se o radio está marcado ou não.
 * @param {String} name Propriedade `name` que irá no Input.
 * @param {String} label Label para o radio (ficará acima do mesmo).
 * @param {function} handleChangeChecked Callback chamada quando o Radio é marcado.
 * @returns void
 */
function RadioInput({ checked, name, label, handleOnChange }) {
	return (
		<div className="radio-input-container">
			<label htmlFor={name}>{label}</label>
			<input
				data-testid="radioInput"
				type="radio"
				checked={checked}
				onChange={handleOnChange}
				name={name}
			/>
		</div>
	);
}

export default RadioInput;
