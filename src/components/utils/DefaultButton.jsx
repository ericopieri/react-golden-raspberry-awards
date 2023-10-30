/**
 * Componente para criação de botão padrão do sistema reutilizável.
 *
 * @param {function} handleClick Callback chamado no clique do botão.
 * @param {String} content Texto de conteúdo para o botão.
 * @returns void
 */
function DefaultButton({ handleClick, content }) {
	return (
		<button onClick={handleClick} className="default-button">
			{content}
		</button>
	);
}

export default DefaultButton;
