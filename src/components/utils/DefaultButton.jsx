function DefaultButton({ handleClick, content }) {
    return (
        <button onClick={handleClick} className="default-button">
            {content}
        </button>
    );
}

export default DefaultButton;