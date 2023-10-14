import SideMenu from "../SideMenu/SideMenu";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MovieListContent from "../../Pages/MovieListContent/MovieListContent";

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