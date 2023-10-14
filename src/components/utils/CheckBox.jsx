function CheckBox({ checked, name, label, handleChangeChecked }) {
    return (
        <div className="checkbox-container">
            <label htmlFor={name}>{ label }</label>
            <input
                type="checkbox"
                checked={checked}
                name={name}
                onChange={handleChangeChecked}
            />
        </div>
    );
}

export default CheckBox;