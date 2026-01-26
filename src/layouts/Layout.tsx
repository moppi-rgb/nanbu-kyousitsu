import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import ScrollToTop from "../common/components/ScrollToTop";

export default function Layout() {
	useEffect(() => {
		const viewport = document.querySelector('meta[name="viewport"]');
		if (!viewport) return;

		function switchViewport() {
			const value =
				window.outerWidth > 360
					? 'width=device-width,initial-scale=1'
					: 'width=360';
			if ((viewport as HTMLMetaElement).getAttribute('content') !== value) {
				(viewport as HTMLMetaElement).setAttribute('content', value);
			}
		}

		switchViewport();
		window.addEventListener('resize', switchViewport, false);

		return () => {
			window.removeEventListener('resize', switchViewport, false);
		};
	}, []);

	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
			<ScrollToTop />
		</>
	);
}
