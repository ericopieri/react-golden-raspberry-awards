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