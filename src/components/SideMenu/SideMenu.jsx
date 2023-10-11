import { Link } from "react-router-dom";
import DefaultButton from "../utils/DefaultButton";

function SideMenu({ isSideMenuOpen, setSideMenuOpen }) {
    const toggleSideMenuToClosed = () => setSideMenuOpen(false);

    const compClassMenuActivated = isSideMenuOpen ? " " + "activated" : "";

    return (
        <nav className={ "side-menu" + compClassMenuActivated }>
            <div style={{ textAlign: "right" }}>
                <DefaultButton content="Fechar" handleClick={toggleSideMenuToClosed} />
            </div>
            <ul>
                <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                    <Link to={"/itens"}>Itens</Link>
                </li>
            </ul>
        </nav>
    );
}

export default SideMenu;