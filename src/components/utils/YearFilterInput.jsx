import Input from "./Input";

function YearFilterInput({ setYearFilter, value, handlePressEnter }) {
    function handleChangeYearFilter(event) {
        if (event.target.value.length > 4) {
            return null;
        };

        setYearFilter(event.target.value);
    }

    return (
        <Input
            placeholder="Ano"
            type="number"
            name="movieYear"
            value={value}
            handleOnChange={handleChangeYearFilter}
            handlePressEnter={handlePressEnter}
        />
    );
}

export default YearFilterInput;