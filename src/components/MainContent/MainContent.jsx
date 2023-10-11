import SideMenu from "../SideMenu/SideMenu";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";

function MainContent({ isSideMenuOpen, setSideMenuOpen }) {
    return (
        <div className="main-content-container">
            <SideMenu isSideMenuOpen={isSideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
            <main className="main-content flex-container">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/:name" element={<Dashboard />} />
                </Routes>
            </main>
        </div>
    );
}

export default MainContent;