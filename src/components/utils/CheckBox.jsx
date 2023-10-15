/**
 * Componente para criação de checkbox genérico reutilizável.
 * 
 * @param {Boolean} checked Indica se o checkbox está marcado ou não.
 * @param {String} name Propriedade `name` que irá no Input. 
 * @param {String} label Label para o checkbox (ficará ao lado esquerdo do mesmo).
 * @param {function} handleChangeChecked Callback chamada em toda mudança do estado do checkbox.
 * @returns void
 */
function CheckBox({ checked, name, label, handleChangeChecked }) {
    return (
        <div className="checkbox-container">
            <label htmlFor={name}>{ label }</label>
            <input
                data-testid="checkbox"        
                type="checkbox"
                checked={checked}
                name={name}
                onChange={handleChangeChecked}
            />
        </div>
    );
}

export default CheckBox;
