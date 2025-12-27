import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "/src/layouts/Layout.tsx";
import Contact from "/src/pages/Contact.tsx";
import Home from "/src/pages/Home.tsx";

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
