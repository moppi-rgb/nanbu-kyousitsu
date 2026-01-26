import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

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

interface ContactInputProps {
	onConfirm: () => void;
}

export default function ContactInput({ onConfirm }: ContactInputProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useFormContext<ContactFormData>();

	const onSubmit = () => {
		onConfirm();
	};

	return (
		<section className="contact">
			{/* Netlify Forms用の隠しフォーム */}
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				hidden
			>
				<input type="text" name="family_name" />
				<input type="text" name="given_name" />
				<input type="email" name="email" />
				<input type="tel" name="tel" />
				<input type="text" name="zipcode" />
				<input type="text" name="address" />
				<select name="subject">
					<option value=""></option>
				</select>
				<textarea name="message"></textarea>
				<input type="checkbox" name="agreement" />
			</form>

			<div className="contact_title-wrapper">
				<h2 className="title contact_title">お問い合わせ</h2>
				<p className="contact_title-text">
					ご相談・ご見学・無料体験についてはこちらからお気軽にお問い合わせください。
				</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="form">
				<ul className="form_list">
					<li className="form_item">
						<div className="form_legend">
							<span className="form_badge form_badge-required">必須</span>お名前
						</div>
						<div className="form_name-group">
							<div className="form_field form_name-field">
								<input
									className="form_name-input"
									type="text"
									id="family_name"
									{...register("family_name")}
									placeholder="姓"
									aria-label="姓"
								/>
								<span className="form_example">例：山田</span>
								<div className="form_error-message-wrapper">
									<p className="form_error-message">{errors.family_name?.message as React.ReactNode}</p>
								</div>
							</div>
							<div className="form_field form_name-field">
								<input
									className="form_name-input"
									type="text"
									id="given_name"
									{...register("given_name")}
									placeholder="名"
									aria-label="名"
								/>
								<span className="form_example">例：太郎</span>
								<div className="form_error-message-wrapper">

									<p className="form_error-message">{errors.given_name?.message as React.ReactNode}</p>
								</div>
							</div>
						</div>
					</li>
					<li className="form_item">
						<label htmlFor="email" className="form_legend">
							<span className="form_badge form_badge-required">必須</span>メールアドレス
						</label>
						<div className="form_field">
							<input className="form_input" type="email" id="email" {...register("email")} />
							<span className="form_example">例：info@gmail.com</span>
							<div className="form_error-message-wrapper">
								<p className="form_error-message">{errors.email?.message as React.ReactNode}</p>
							</div>
						</div>

					</li>
					<li className="form_item">
						<label htmlFor="tel" className="form_legend">
							<span className="form_badge form_badge-optional">任意</span>電話番号
						</label>
						<div className="form_field">
							<input className="form_input" type="tel" id="tel" {...register("tel")} />
							<span className="form_example">例：09012345678</span>
							<div className="form_error-message-wrapper">
								<p className="form_error-message">{errors.tel?.message as React.ReactNode}</p>
							</div>
						</div>
					</li>
					<li className="form_item">
						<label htmlFor="zipcode" className="form_legend">
							<span className="form_badge form_badge-optional">任意</span>郵便番号
						</label>
						<div className="form_field">
							<input className="form_input" type="text" id="zipcode" {...register("zipcode")} />
							<span className="form_example">例:1234567</span>
							<div className="form_error-message-wrapper">
								<p className="form_error-message">{errors.zipcode?.message as React.ReactNode}</p>
							</div>
						</div>

					</li>
					<li className="form_item">
						<label htmlFor="address" className="form_legend">
							<span className="form_badge form_badge-optional">任意</span>ご住所
						</label>
						<div className="form_field">
							<input className="form_input" type="text" id="address" {...register("address")} />
							<span className="form_example">例：東京都新宿区西新宿2-8-1</span>
							<div className="form_error-message-wrapper">
								<p className="form_error-message">{errors.address?.message as React.ReactNode}</p>
							</div>
						</div>
					</li>
					<li className="form_item">
						<label htmlFor="subject" className="form_legend">
							<span className="form_badge form_badge-required">必須</span>件名
						</label>
						<div className="form_field">
							<select className="form_select" id="subject" {...register("subject")}>
								<option value="">
									選択してください
								</option>
								<option value="xxxxxx">xxxxxxについて</option>
								<option value="◯◯◯">◯◯◯について</option>
								<option value="△△△">△△△について</option>
								<option value="◎◎◎">◎◎◎について</option>
								<option value="その他">その他</option>
							</select>
						</div>
						<div className="form_error-message-wrapper">
							<p className="form_error-message">{errors.subject?.message as React.ReactNode}</p>
						</div>
					</li>
					<li className="form_item">
						<label htmlFor="message" className="form_legend">
							<span className="form_badge form_badge-required">必須</span>お問い合わせ内容
						</label>
						<div className="form_field">
							<textarea className="form_textarea" id="message" {...register("message")} />
						</div>
						<div className="form_error-message-wrapper">
							<p className="form_error-message">{errors.message?.message as React.ReactNode}</p>
						</div>
					</li>
				</ul>
				<div className="form_agreement">
					<div className="form_agreement-item">
						<input className="form_checkbox" type="checkbox" id="agreement" {...register("agreement")} />
						<label htmlFor="agreement" className="form_agreement-label">
							<Link to="/" className="form_agreement-link">個人情報の取り扱い</Link>について同意する
						</label>
					</div>
					<div className="form_error-message-wrapper">
						<p className="form_error-message">{errors.agreement?.message as React.ReactNode}</p>
					</div>
				</div>
				<button className="button form_button form_button-submit" type="submit">入力内容を確認</button>
			</form>
		</section>
	);
}
