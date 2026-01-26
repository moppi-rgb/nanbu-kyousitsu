export default function Access() {
	return (
		<section className="grid-center access">
			<h2 className="title sec-title access_title">アクセス</h2>
			<div className="access_wrapper">
				<iframe
					title="Googleマップ"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6636413.553062351!2d131.00476047499998!3d35.6908795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60228f003eac80d5%3A0xb9b0e54410157a5!2z5pS-6Kqy5b6M562J44OH44Kk44K144O844OT44K5IOOBguOBhOOBruOBpiDkvZDlgInljZfpg6jmlZnlrqQ!5e0!3m2!1sja!2sjp!4v1765452478053!5m2!1sja!2sjp"
					className="access_g-map"
					style={{ border: "0" }}
					allow="fullscreen"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
				<div className="access_desc">
					<div className="access_desc-wrapper">
						<h4 className="access_subtitle">
							株式会社総合福祉サービス南部教室
						</h4>
						<p className="address">
							〒285-0815
							<br />
							千葉県佐倉市城298-1
						</p>
					</div>
					<p>営業時間 9:00～19:00(土日祝除く)</p>
				</div>
			</div>
		</section>
	);
}
