import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="grid-center footer">
			<div className="footer_wrapper">
				<div className="footer_logo-wrapper">
					<picture className="footer_logo">
						<Link to="/">
							<img src="/public/image/common/logo.svg" alt="" />
						</Link>
					</picture>
					<p className="copyright">
						© 2025 株式会社総合福祉サービス All Rights Reserved.
					</p>
				</div>
				<nav className="nav">
					<ul className="nav_list">
						<li className="nav_link">
							南部教室について
							<ul className="nav_sublist">
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
							</ul>
						</li>
						<li className="nav_link">
							支援内容
							<ul className="nav_sublist">
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
							</ul>
						</li>
						<li className="nav_link">
							ご利用方法
							<ul className="nav_sublist">
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
								<li className="nav_sublink">
									<Link to="/">テキスト</Link>
								</li>
							</ul>
						</li>
					</ul>
					<ul className="nav_list nav_list-second">
						<li className="nav_link">
							<Link to="/">1日の流れ</Link>
						</li>
						<li className="nav_link">
							<Link to="/">求人情報</Link>
						</li>
						<li className="nav_link">
							<Link to="/">Q&A</Link>
						</li>
						<li className="nav_link">
							<Link to="/contact">お問い合わせ</Link>
						</li>
						<li className="nav_link">
							<Link to="/">会社概要</Link>
						</li>
						<li className="nav_link">
							<Link to="/">プライバシーポリシー</Link>
						</li>
						<li className="nav_link">
							<Link to="/">アクセス</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="decorations footer_deco">
				<img
					src="/public/image/common/footer-deco01.svg"
					alt=""
					className="footer_deco01"
				/>
				<img
					src="/public/image/common/footer-deco02.svg"
					alt=""
					className="footer_deco02"
				/>
			</div>
		</footer>
	);
}
