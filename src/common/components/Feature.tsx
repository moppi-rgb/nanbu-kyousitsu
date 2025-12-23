import { motion } from "motion/react";

export default function Feature() {
	return (
		<section className="grid-center feature">
			<div className="feature_title-wrapper">
				<h2 className="feature_title">
					子どもたちが思いのままに個性を発揮できる。
					<br />
					それが南部教室の特徴です。
				</h2>
			</div>
			<div className="feature_item-deco"></div>
			<div className="feature_items">
				<motion.div
					className="feature_item feature_item01"
					initial={{ opacity: 0, x: 250 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
				>
					<div className="feature_item-media feature_item-media01">
						<img
							src="/public/image/feature/feature-01.webp"
							srcSet="/public/image/feature/feature-01.webp 1x, /public/image/feature/feature-01@2x.webp 2x"
							alt="子どもたちがのびのび過ごせる空間"
							className="feature_item-img feature_item-img01"
						/>
					</div>
					<div className="feature_textbox feature_textbox01">
						<h3 className="feature_subtitle feature_subtitle01">
							<span>快適な環境づくり</span>
						</h3>
						<p className="feature_text">
							南部教室では子どもの心を安定させ、その子がもっている個々の能力をのばしていくことを大事にしています。
							<br />
							生き生きとした療育活動ができるような環境を整え、さまざまな体験を通して子どもたちのココロを解放させ、思いのままに個性を発揮できるような指導をします。
						</p>
					</div>
				</motion.div>
				<div className="feature_item feature_item02">
					<div className="feature_item-media feature_item-media02">
						<img
							src="/public/image/feature/feature-02.webp"
							srcSet="/public/image/feature/feature-02.webp 1x, /public/image/feature/feature-02@2x.webp 2x"
							alt="ボウリングを楽しむ子どもたち"
							className="feature_item-img feature_item-img02"
						/>
					</div>
					<div className="feature_textbox feature_textbox02">
						<h3 className="feature_subtitle feature_subtitle02">
							<span>多様な発達プログラム</span>
						</h3>
						<p className="feature_text">
							子どもたちに必要なのは「主体性を身につけて自分自身をきたえる」こと。
							<br />
							ー人一人の発達を見つめそれぞれのココロを大切にして、画一的でなく一人一人の個性に合わせて指導します。
							楽しい遊びを通してスタッフとの信頼関係を築くことで、社会性の成熟をめざします。
						</p>
					</div>
				</div>
				<div className="feature_item feature_item03">
					<div className="feature_item-media feature_item-media03">
						<img
							src="/public/image/feature/feature-03.webp"
							srcSet="/public/image/feature/feature-03.webp 1x, /public/image/feature/feature-03@2x.webp 2x"
							alt="子どもたちの表現を応援します"
							className="feature_item-img feature_item-img03"
						/>
					</div>
					<div className="feature_textbox feature_textbox03">
						<h3 className="feature_subtitle feature_subtitle03">
							<span>表現する喜び</span>
						</h3>
						<p className="feature_text">
							私たちは、お子さまが安心して自己表現できる場所を提供したいと考えています。
							<br />
							子どもたちの持つ特性を早期に理解し、適切な対応をすることで、その可能性は大きく広がります。
							<br />
							子どもが発する表現·表出を重視し、友達や大人との社会的関係性を獲得し、自分のココロをうまく表現できる喜びを味わえるような指導をします。
						</p>
					</div>
				</div>
			</div>
			<motion.div className="feature_title-deco">
				<motion.img
					src="/public/image/feature/feature_title-deco01.svg"
					alt=""
					className="feature_deco feature_deco01"
					initial={{ rotate: 0 }}
					whileInView={{ rotate: 360 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1, ease: "easeOut" }}
					style={{ transformOrigin: "50% 50%" }}
				/>
				<motion.img
					src="/public/image/feature/feature_title-deco04.svg"
					alt=""
					className="feature_deco feature_deco02"
					initial={{ rotate: 0 }}
					whileInView={{ rotate: 360 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
					style={{ transformOrigin: "50% 50%" }}
				/>
				<motion.img
					src="/public/image/feature/feature_title-deco05.svg"
					alt=""
					className="feature_deco feature_deco03"
					initial={{ rotate: 0 }}
					whileInView={{ rotate: 360 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
					style={{ transformOrigin: "50% 50%" }}
				/>
				<motion.img
					src="/public/image/feature/feature_title-deco06.svg"
					alt=""
					className="feature_deco feature_deco04"
					initial={{ rotate: 0 }}
					whileInView={{ rotate: 360 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
					style={{ transformOrigin: "50% 50%" }}
				/>

				<img
					src="/public/image/feature/feature_title-deco02.svg"
					alt=""
					className="feature_title-deco02"
				/>
				<img
					src="/public/image/feature/feature_title-deco03.svg"
					alt=""
					className="feature_title-deco03"
				/>
			</motion.div>
		</section>
	);
}
