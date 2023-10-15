import DefaultButton from "../utils/DefaultButton";


/**
 * Componente do Header da página.
 * 
 * @param {function} setSideMenuOpen Callback para mudar a propriedade `isSideMenuOpen`.
 * @returns 
 */
function Header({ setSideMenuOpen }) {
    const toggleSideMenuToOpen = () => setSideMenuOpen(true);

    return (
        <header className="header">
            <DefaultButton content=">" handleClick={toggleSideMenuToOpen}/>
            <span>Golden Raspberry Awards!</span>
        </header>
    );
}

export default Header;
