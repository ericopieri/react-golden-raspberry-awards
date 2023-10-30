import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
	const [isSideMenuOpen, setSideMenuOpen] = useState(true);

	return (
		<Router>
			<div className="app">
				<Header setSideMenuOpen={setSideMenuOpen} />
				<MainContent
					setSideMenuOpen={setSideMenuOpen}
					isSideMenuOpen={isSideMenuOpen}
				/>
			</div>
		</Router>
	);
}

export default App;
