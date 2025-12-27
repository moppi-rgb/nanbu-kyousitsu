import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

interface ContactFormData {
    family_name: string;
    given_name: string;
    email: string;
    tel?: string;
    zipcode?: string;
    address?: string;
    subject: string;
    message: string;
    agreement: boolean;
}

interface ContactConfirmProps {
    onBack: () => void;
    onSubmit: (data: ContactFormData) => void;
}

export default function ContactConfirm({ onBack, onSubmit }: ContactConfirmProps) {
    const { getValues, handleSubmit } = useFormContext<ContactFormData>();
    const formData = getValues();
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        titleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    const handleFormSubmit = () => {
        handleSubmit((data) => {
            onSubmit(data);
        })();
    };

    return (
        <section className="contact">
            <div className="contact_title-wrapper">
                <h2 ref={titleRef} className="contact_title">お問い合わせ内容の確認</h2>
                <p className="contact_title-text">
                    以下の内容でお間違いないかご確認ください。
                </p>
            </div>
            <div className="form form_confirm">
                <ul className="form_list">
                    <li className="form_item">
                        <div className="form_legend">お名前</div>
                        <div className="form_confirm-text">
                            {formData.family_name} {formData.given_name}
                        </div>
                    </li>
                    <li className="form_item">
                        <div className="form_legend">メールアドレス</div>
                        <div className="form_confirm-text">{formData.email}</div>
                    </li>
                    {formData.tel && (
                        <li className="form_item">
                            <div className="form_legend">電話番号</div>
                            <div className="form_confirm-text">{formData.tel}</div>
                        </li>
                    )}
                    {formData.zipcode && (
                        <li className="form_item">
                            <div className="form_legend">郵便番号</div>
                            <div className="form_confirm-text">{formData.zipcode}</div>
                        </li>
                    )}
                    {formData.address && (
                        <li className="form_item">
                            <div className="form_legend">ご住所</div>
                            <div className="form_confirm-text">{formData.address}</div>
                        </li>
                    )}
                    <li className="form_item">
                        <div className="form_legend">件名</div>
                        <div className="form_confirm-text">{formData.subject}</div>
                    </li>
                    <li className="form_item">
                        <div className="form_legend">お問い合わせ内容</div>
                        <div className="form_confirm-text" style={{ whiteSpace: "pre-wrap" }}>
                            {formData.message}
                        </div>
                    </li>
                </ul>
                <div className="form_button-group">
                    <button type="button" className="form_button form_button-back" onClick={onBack}>
                        入力内容を修正
                    </button>
                    <button type="button" className="form_button form_button-submit" onClick={handleFormSubmit}>
                        送信する
                    </button>
                </div>
            </div>
        </section>
    );
}
