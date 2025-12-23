import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "/src/layouts/Layout";
import Contact from "/src/pages/Contact";
import Home from "/src/pages/Home";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
