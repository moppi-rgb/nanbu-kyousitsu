import { Link } from "react-router-dom";

const programImages = [
	"/image/program/program01.webp",
	"/image/program/program02.webp",
	"/image/program/program03.webp",
	"/image/program/program04.webp",
];

export default function Program() {
	return (
		<section className="grid-center program">
			<div className="program_wrapper">
				<h2 className="sec-title program_title">療育内容</h2>
				<p className="program_text">
					南部教室の特徴は、『児童の脳の発達』に着目した療育プログラム。
					<br />
					お子さまの自立とコミュニケーションカの向上を目指し、ボルダリングや体幹トレーニング・英会話などに楽しく取り組んでいきます。
				</p>
				<Link to="/" className="button program_button">
					詳細はこちら
				</Link>
			</div>
			<div className="program_images">
				{programImages.map((src) => (
					<img
						key={src}
						src={src}
						alt="療育内容のイメージ画像"
						className="program_image"
					/>
				))}
			</div>
			<div className="decorations program_deco">
				<img
					src="/image/program/program-deco01.svg"
					alt=""
					className="program_deco01"
				/>
				<img
					src="/image/program/program-deco02.svg"
					alt=""
					className="program_deco02"
				/>
				<img
					src="/image/program/program_img-bg.svg"
					alt=""
					className="program_img-bg"
				/>
				<img
					src="/image/program/program-deco03.svg"
					alt=""
					className="program_deco03"
				/>
			</div>
		</section>
	);
}
