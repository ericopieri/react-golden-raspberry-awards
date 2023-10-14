/**
 * Componente para criação de Input genérico reutilizável.
 * 
 * @param {String} placeholder Placeholder para o Input.
 * @param {String} type Tipo do Input (text, number, checkbox, et al.).
 * @param {String} value Propriedade `value` para o Input.
 * @param {String} name Propriedade `name` para o Input.
 * @param {function} handleOnChange Callback para mudanças no Input (inserção de caracteres).
 * @param {function} handlePressEnter Callback chamado ao pressionar a tecla name com foco no Input.
 * @returns void
 */
function Input({ placeholder, type, value, name, handleOnChange, handlePressEnter }) {
    return (
        <>
            <input
                className="input"
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                onKeyDown={
                    (event) => event.key === "Enter" && handlePressEnter()
                }
            />
        </>
        
    );
}

export default Input;
