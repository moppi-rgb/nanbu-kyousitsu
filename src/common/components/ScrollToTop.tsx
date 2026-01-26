import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // .featureセクションの位置を取得
            const featureSection = document.querySelector(".feature");
            if (featureSection) {
                const featureTop = featureSection.getBoundingClientRect().top;
                // .featureセクションがビューポートに入ったらボタンを表示
                setIsVisible(featureTop <= window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // 初回チェック
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            className={`scroll-to-top ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
            aria-label="ページトップへ戻る"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>ページトップへ戻る</title>
                <path
                    d="M12 19V5M12 5L5 12M12 5L19 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}
