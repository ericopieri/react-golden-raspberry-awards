import { Routes, Route } from "react-router-dom";

import SideMenu from "../SideMenu/SideMenu";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MovieListContent from "../../Pages/MovieListContent/MovieListContent";


/**
 * Componente que faz o controle do conteúdo principal do sistema, fazendo o controle de Rotas para escolher a page visualizada.
 * 
 * @param {Boolean} isSideMenuOpen Propriedade herdada do elemento que controla se o Menu lateral do sistema está aberta ou fechado.
 * @param {function} setSideMenuOpen Callback para mudar a propriedade `isSideMenuOpen`.
 * @returns void
 */
function MainContent({ isSideMenuOpen, setSideMenuOpen }) {
    return (
        <div className="main-content-container">
            <SideMenu isSideMenuOpen={isSideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
            <main className="main-content flex-container">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/movies" element={<MovieListContent />} />
                </Routes>
            </main>
        </div>
    );
}

export default MainContent;
