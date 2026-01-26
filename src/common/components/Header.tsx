import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeaderLogo = () => {
	return (
		<picture className="header_logo">
			<source media="(max-width:820px)" srcSet="/image/common/logo_sp.svg" />
			<img
				src="/image/common/logo.svg"
				alt="南部教室ロゴ"
			/>
		</picture>
	);
};


export default function Header() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleNavToggle = () => {
		setIsNavOpen((prev) => !prev);
	};

	const handleNavLinkClick = () => {
		setIsNavOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				// 下にスクロール中かつ100px以上スクロールした場合は隠す
				setIsVisible(false);
			} else {
				// 上にスクロール中は表示
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<>
			<header className={`header ${isVisible ? "header--visible" : "header--hidden"} grid-center`}>
				<div className="header_wrapper wrapper">
					<Link to="/" onClick={() => window.scrollTo(0, 0)} className="header_logo-wrapper">
						<HeaderLogo />
					</Link>
					<div className="header_nav-wrapper">
						<div className="header_actions">
							<Link to="/" className="button header_button">
								見学予約
							</Link>
						</div>
						<nav className={`nav ${isNavOpen ? "nav--open" : ""}`}>
							<ul className="nav_list">
								<li className="nav_link">
									<Link to="/" onClick={handleNavLinkClick} onKeyDown={handleNavLinkClick}>南部教室について</Link>
								</li>
								<li className="nav_link">
									<Link to="/" onClick={handleNavLinkClick} onKeyDown={handleNavLinkClick}>支援内容</Link>
								</li>
								<li className="nav_link">
									<Link to="/" onClick={handleNavLinkClick} onKeyDown={handleNavLinkClick}>ご利用方法</Link>
								</li>
								<li className="nav_link">
									<Link to="/" onClick={handleNavLinkClick} onKeyDown={handleNavLinkClick}>1日の流れ</Link>
								</li>
								<li className="nav_link">
									<Link to="/" onClick={handleNavLinkClick} onKeyDown={handleNavLinkClick}>求人情報</Link>
								</li>
								<li className="nav_link">
									<Link to="/" onClick={handleNavLinkClick} onKeyDown={handleNavLinkClick}>Q&A</Link>
								</li>
								<li className="nav_link">
									<Link to="/contact" onClick={handleNavLinkClick} onKeyDown={handleNavLinkClick}>お問い合わせ</Link>
								</li>
								<li className="nav_link">
									<Link to="/" onClick={handleNavLinkClick} onKeyDown={handleNavLinkClick}>アクセス</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<button
				type="button"
				aria-label="ヘッダーナビを開く"
				className={`toggle ${isNavOpen ? "is-active" : ""}`}
				onClick={handleNavToggle}
			>
				<span className="toggle_line"></span>
				<span className="toggle_line"></span>
				<span className="toggle_line"></span>
			</button>
		</>
	);
}
