import DefaultButton from "../utils/DefaultButton";

function Header({ setSideMenuOpen }) {
    const toggleSideMenuToOpen = () => setSideMenuOpen(true);

    return (
        <header className="header">
            <DefaultButton content=">"  handleClick={toggleSideMenuToOpen}/>
            <span>Golden Raspberry Awards!</span>
        </header>
    );
}

export default Header;