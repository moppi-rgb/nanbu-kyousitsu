import * as z from "zod";

const family_name = z.string().nonempty("姓を入力してください");
const given_name = z.string().nonempty("名を入力してください");
const email = z
	.string()
	.email("正しいメールアドレスを入力してください")
	.nonempty("メールアドレスを入力してください");
const tel = z.string().optional();
const zipcode = z.string().optional();
const address = z.string().optional();
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
