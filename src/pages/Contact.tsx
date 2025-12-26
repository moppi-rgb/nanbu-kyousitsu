import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { validationSchema } from "../utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

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

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>({ mode: "onBlur", resolver: zodResolver(validationSchema) });
	const onSubmit = (data: ContactFormData) => console.log(data);

	return (
		<section className="contact">
			<div className="contact_title-wrapper">
				<h2 className="contact_title">お問い合わせ</h2>
				<p className="contact_title-text">
					ご相談・ご見学・無料体験についてはこちらからお気軽にお問い合わせください。
				</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="form">
				<ul className="form-list">
					<li className="form-item">
						<div className="form-legend">
							<span className="form-badge form-badge-required">必須</span>お名前
						</div>
						<div className="form-name-group">
							<div className="form-field form-name-field">
								<input
									className="form-name-input"
									type="text"
									id="family_name"
									{...register("family_name")}
									placeholder="姓"
									aria-label="姓"
								/>
								<span className="form-example">例：山田</span>
								<span className="form-error" id="error-family_name"></span>
								<p className="form-error-message">{errors.family_name?.message as React.ReactNode}</p>
							</div>
							<div className="form-field form-name-field">
								<input
									className="form-name-input"
									type="text"
									id="given_name"
									{...register("given_name")}
									placeholder="名"
									aria-label="名"
								/>
								<span className="form-example">例：太郎</span>
								<span className="form-error" id="error-given_name"></span>
								<p className="form-error-message">{errors.given_name?.message as React.ReactNode}</p>
							</div>
						</div>
					</li>
					<li className="form-item">
						<label htmlFor="email" className="form-legend">
							<span className="form-badge form-badge-required">必須</span>メールアドレス
						</label>
						<div className="form-field">
							<input className="form-input" type="email" id="email" {...register("email")} />
							<span className="form-example">例：info@gmail.com</span>
							<span className="form-error" id="error-email"></span>
						</div>
						<p className="form-error-message">{errors.email?.message as React.ReactNode}</p>
					</li>
					<li className="form-item">
						<label htmlFor="tel" className="form-legend">
							<span className="form-badge form-badge-optional">任意</span>電話番号
						</label>
						<div className="form-field">
							<input className="form-input" type="tel" id="tel" {...register("tel")} />
							<span className="form-example">例：09012345678</span>
							<span className="form-error" id="error-tel"></span>
						</div>
					</li>
					<li className="form-item">
						<label htmlFor="zipcode" className="form-legend">
							<span className="form-badge form-badge-optional">任意</span>郵便番号
						</label>
						<div className="form-field">
							<input className="form-input" type="number" id="zipcode" {...register("zipcode")} />
							<span className="form-example">例：1234567</span>
							<span className="form-error" id="error-zipcode"></span>
						</div>
					</li>
					<li className="form-item">
						<label htmlFor="address" className="form-legend">
							<span className="form-badge form-badge-optional">任意</span>ご住所
						</label>
						<div className="form-field">
							<input className="form-input" type="text" id="address" {...register("address")} />
							<span className="form-example">例：東京都新宿区西新宿2-8-1</span>
							<span className="form-error" id="error-address"></span>
						</div>
					</li>
					<li className="form-item">
						<label htmlFor="subject" className="form-legend">
							<span className="form-badge form-badge-required">必須</span>件名
						</label>
						<div className="form-field">
							<select className="form-select" id="subject" {...register("subject")}>
								<option value="">
									選択してください
								</option>
								<option value="xxxxxx">xxxxxxについて</option>
								<option value="◯◯◯">◯◯◯について</option>
								<option value="△△△">△△△について</option>
								<option value="◎◎◎">◎◎◎について</option>
								<option value="その他">その他</option>
							</select>
							<span className="form-error" id="error-subject"></span>
						</div>
						<p className="form-error-message">{errors.subject?.message as React.ReactNode}</p>
					</li>
					<li className="form-item">
						<label htmlFor="message" className="form-legend">
							<span className="form-badge form-badge-required">必須</span>お問い合わせ内容
						</label>
						<div className="form-field">
							<textarea className="form-textarea" id="message" {...register("message")} />
							<span className="form-error" id="error-message"></span>
						</div>
						<p className="form-error-message">{errors.message?.message as React.ReactNode}</p>
					</li>
				</ul>
				<div className="form-agreement">
					<input className="form-checkbox" type="checkbox" id="agreement" {...register("agreement")} />
					<label htmlFor="agreement" className="form-agreement-label">
						<Link to="/" className="form-link">個人情報の取り扱い</Link>について同意する
					</label>
					<p className="form-error-message">{errors.agreement?.message as React.ReactNode}</p>
				</div>
				<button className="form-submit" type="submit">入力内容を確認</button>
			</form>
		</section>
	);
}
