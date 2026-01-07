import { motion } from "motion/react";

export default function Hero() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
			className="grid-center hero">
			<motion.h1
				initial={{ opacity: 0, filter: "blur(20px)" }}
				animate={{ opacity: 1, filter: "blur(0px)" }}
				transition={{ delay: 0.7, duration: 1.8, ease: "easeOut" }}
				className="hero_title">
				<span className="hero_title-line">遊びは心を育てる</span>
				<span className="hero_title-line">最高の方法です。</span>
			</motion.h1>
		</motion.section>
	);
}
