import { Link } from "react-router-dom";

interface ContactCompleteProps {
    onReset: () => void;
}

export default function ContactComplete({ onReset }: ContactCompleteProps) {
    return (
        <section className="contact">
            <div className="contact_title-wrapper">
                <h2 className="title contact_title">お問い合わせ完了</h2>
            </div>
            <div className="form form_complete">
                <div className="form_complete-wrapper">
                    <p className="form_complete-message">この度はお問い合わせいただきありがとうございます。<br />
                        確認のため、お客様に自動送信メールをお送りしております。<br />
                        内容を確認後、担当者よりご連絡させていただきます。</p>
                </div>
                <div className="form_button-group">
                    <button type="button" className="form_button form_button-back" onClick={onReset}>
                        続けてお問い合わせ
                    </button>
                    <Link to="/" className="button form_button form_button-submit">
                        トップページへ戻る
                    </Link>
                </div>
            </div>
        </section>
    );
}
