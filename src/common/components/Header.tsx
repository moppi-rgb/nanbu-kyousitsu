import { Link } from "react-router-dom";

const HeaderLogo = () => {
	return (
		<img
			src="/public/image/common/logo.svg"
			alt="南部教室ロゴ"
			className="header_logo-img"
		/>
	);
};

export default function Header() {
	return (
		<header className="header">
			<div className="header_wrapper wrapper">
				<Link to="/" className="header_logo-wrapper">
					<HeaderLogo />
				</Link>
				<div className="header_nav-wrapper">
					<Link to="/" className="button header_button">
						見学予約
					</Link>
					<nav className="nav">
						<ul className="nav_list">
							<li className="nav_link">
								<Link to="/">南部教室について</Link>
							</li>
							<li className="nav_link">
								<Link to="/">支援内容</Link>
							</li>
							<li className="nav_link">
								<Link to="/">ご利用方法</Link>
							</li>
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
								<Link to="/">アクセス</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
