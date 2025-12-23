// motion is not used currently; remove to satisfy lint
import Access from "../common/components/Access";
import ContactCTA from "../common/components/ContactCTA";
import CTA from "../common/components/CTA";
import Feature from "../common/components/Feature";
import Leading from "../common/components/Leading";
import Hero from "../common/components/Hero";
import Program from "../common/components/Program";

export default function Home() {
	return (
		<main className="home">
			<Hero />
			<Leading />
			<Feature />
			<Program />
			<CTA />
			<Access />
			<ContactCTA />
		</main>
	);
}
