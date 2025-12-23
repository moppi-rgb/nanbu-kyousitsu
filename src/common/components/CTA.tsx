import { Link } from "react-router-dom";

export default function CTA() {
	return (
		<section className="grid-center cta">
			<img
				src="/public/image/cta/cta-deco01.svg"
				alt=""
				className="cta_deco cta_deco01"
			/>
			<img
				src="/public/image/cta/cta-deco02.svg"
				alt=""
				className="cta_deco cta_deco02"
			/>
			<img
				src="/public/image/cta/cta-deco03.svg"
				alt=""
				className="cta_deco cta_deco03"
			/>
			<Link to="/" className="button cta_button">
				ご利用方法
			</Link>
			<Link to="/" className="button cta_button">
				1日の流れ
			</Link>
		</section>
	);
}
