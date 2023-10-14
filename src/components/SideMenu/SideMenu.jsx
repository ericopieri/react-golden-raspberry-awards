import { Link } from "react-router-dom";

import DefaultButton from "../utils/DefaultButton";


/**
 * Componente do Menu Lateral do Sistema. É aqui que o usuário pode mudar a page visualizada no conteúdo principal.
 * 
 * @param {Boolean} isSideMenuOpen Propriedade herdada do elemento que controla se o Menu lateral do sistema está aberta ou fechado
 * @param {function} setSideMenuOpen Callback para mudar a propriedade `isSideMenuOpen` 
 * @returns void
 */
function SideMenu({ isSideMenuOpen, setSideMenuOpen }) {
    const toggleSideMenuToClosed = () => setSideMenuOpen(false);

    const compClassMenuActivated = isSideMenuOpen ? " " + "activated" : "";

    return (
        <nav className={ "side-menu" + compClassMenuActivated }>
            <div style={{ textAlign: "right" }}>
                <DefaultButton content="Close" handleClick={toggleSideMenuToClosed} />
            </div>
            <ul>
                <li>
                    <Link to={"/"}>Dashboard</Link>
                </li>
                <li>
                    <Link to={"/movies"}>Itens</Link>
                </li>
            </ul>
        </nav>
    );
}

export default SideMenu;
