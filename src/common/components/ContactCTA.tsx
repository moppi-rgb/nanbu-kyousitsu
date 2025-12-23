import { Link } from "react-router-dom";

export default function ContactCTA() {
	return (
		<section className="grid-center contact-cta">
			<div className="contact-cta_wrapper">
				<h2 className="sec-title contact-cta_title">お問い合わせ</h2>
				<div className="contact-cta_info ">
					<p className="contact-cta_text">
						<Link to="tel:" className="contact-cta_phone">
							0120-508-408
						</Link>
						受付時間 9:00-19:00
					</p>
					<Link to="/contact" className="button contact_button">
						お問い合わせフォーム
					</Link>
				</div>
			</div>
		</section>
	);
}
