/**
 * Componente Card que adiciona um estilo de card em comúm entre elementos.
 * 
 * @param {HTMLElement} children Qualquer conteúdo texto ou HTML que vai ser alocado dentro do Card.
 * @returns void
 */
function Card({ children }) {
    return (
        <div className="card">{children}</div>
    );
}

export default Card;