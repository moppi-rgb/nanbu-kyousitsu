import { Link } from "react-router-dom";

export default function Contact() {
	return (
		<section className="contact">
			<div className="contact_title-wrapper">
				<h2 className="contact_title">お問い合わせ</h2>
				<p className="contact_title-text">
					ご相談・ご見学・無料体験についてはこちらからお気軽にお問い合わせください。
				</p>
			</div>
			<form action="" className="contact_form">
				<ul>
					<li>
						<label htmlFor="name">
							<span className="required">必須</span>お名前
						</label>
						<div>
							<span className="ex">例：山田</span>
							<input
								className="name"
								type="name"
								id="family_name"
								name="family_name"
								placeholder="姓"
							/>
							<span id="error-family_name"></span>
						</div>
						<div>
							<span className="ex">例：太郎</span>
							<input
								className="name"
								type="name"
								id="given_name"
								name="given_name"
								placeholder="名"
							/>
							<span id="error-given_name"></span>
						</div>
					</li>
					<li>
						<label htmlFor="email">
							<span className="required">必須</span>メールアドレス
						</label>

						<div>
							<span className="ex">例：info@gmail.com</span>
							<input type="email" id="mail" name="email" />
							<span id="error-email"></span>
						</div>
					</li>
					<li>
						<div>
							<label htmlFor="tel">
								<span className="optional">任意</span>電話番号
							</label>
						</div>
						<div>
							<span className="ex">例：09012345678</span>
							<input type="tel" id="tel" name="tel" />
							<span id="error-tel"></span>
						</div>
					</li>
					<li>
						<label htmlFor="zipcode">
							<span className="optional">任意</span>郵便番号
						</label>
						<div>
							<span className="ex">例：1234567</span>
							<input type="number" id="zipcode" />
							<span id="error-zipcode"></span>
						</div>
					</li>
					<li>
						<label htmlFor="address">
							<span className="optional">任意</span>ご住所
						</label>

						<div>
							<span className="ex">例：東京都新宿区西新宿2-8-1</span>
							<input type="text" id="address" />
							<span id="error-addres"></span>
						</div>
					</li>
					<li>
						<label htmlFor="subject">
							<span className="required">必須</span>件名
						</label>
						<div>
							<select name="subject" id="subject">
								<option value="" selected disabled>
									選択してください
								</option>
								<option value="xxxxxx">xxxxxxについて</option>
								<option value="◯◯◯">◯◯◯について</option>
								<option value="△△△">△△△について</option>
								<option value="◎◎◎">◎◎◎について</option>
								<option value="その他">その他</option>
							</select>
							<span id="error-subject"></span>
						</div>
					</li>
					<li>
						<label htmlFor="message">
							<span className="required">必須</span>お問い合わせ内容
						</label>
						<div>
							<textarea name="message" id="message" />
							<span id="error-message"></span>
						</div>
					</li>
				</ul>
				<div>
					<input type="checkbox" />
					<label htmlFor="">
						<Link to="/">個人情報の取り扱い</Link>について同意する
					</label>
				</div>
				<button type="submit">入力内容を確認</button>
			</form>
		</section>
	);
}
