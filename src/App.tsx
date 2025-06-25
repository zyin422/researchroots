import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/team" element={<TeamPage />} />
			<Route path="/contact" element={<ContactPage />} />
		</Routes>
	);
}

export default App;
