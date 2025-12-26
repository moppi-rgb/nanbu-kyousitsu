import * as z from "zod";

const family_name = z.string().nonempty("姓を入力してください");
const given_name = z.string().nonempty("名を入力してください");
const email = z
	.string()
	.email("正しいメールアドレスを入力してください")
	.nonempty("メールアドレスを入力してください");
const tel = z
	.string()
	.optional()
	.refine((val) => !val || /^[0-9]{10,11}$/.test(val), {
		message: "電話番号は10桁または11桁の数字で入力してください",
	});
const zipcode = z
	.string()
	.optional()
	.refine((val) => !val || /^[0-9]{7}$/.test(val), {
		message: "郵便番号は7桁の数字で入力してください",
	});
const address = z
	.string()
	.optional()
	.refine((val) => !val || val.length >= 5, {
		message: "住所は5文字以上で入力してください",
	});
const subject = z.string().nonempty("件名を選択してください");
const message = z.string().nonempty("お問い合わせ内容を入力してください");
const agreement = z.boolean().refine((val) => val === true, {
	message: "個人情報の取り扱いに同意してください",
});

export const validationSchema = z.object({
	family_name,
	given_name,
	email,
	tel,
	zipcode,
	address,
	subject,
	message,
	agreement,
});
