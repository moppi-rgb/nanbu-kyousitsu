import { Outlet } from "react-router-dom";
import Header from "/src/common/components/Header";
import Footer from "/src/common/components/Footer";

export default function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
