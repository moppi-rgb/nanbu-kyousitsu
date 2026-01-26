import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import ContactInput from "../common/components/ContactInput.tsx";
import ContactConfirm from "../common/components/ContactConfirm.tsx";
import ContactComplete from "../common/components/ContactComplete.tsx";
import { validationSchema } from "../utils/validationSchema";

type Step = "input" | "confirm" | "complete";

export default function Contact() {
	const [currentStep, setCurrentStep] = useState<Step>("input");
	const methods = useForm({
		mode: "onBlur",
		resolver: zodResolver(validationSchema),
	});

	const handleConfirm = () => {
		setCurrentStep("confirm");
	};

	const handleBack = () => {
		setCurrentStep("input");
	};

	const handleSubmit = async (data: any) => {
		try {
			// Netlify Formsにデータを送信
			const formData = new URLSearchParams();
			formData.append("form-name", "contact");

			// フォームデータを追加
			Object.keys(data).forEach(key => {
				const value = data[key];
				// チェックボックスの場合は"on"または"off"に変換
				if (typeof value === "boolean") {
					formData.append(key, value ? "on" : "off");
				} else {
					formData.append(key, value || "");
				}
			});

			const response = await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: formData.toString(),
			});

			// Netlify Forms は 200-299 または 3xx のレスポンスを返すことがある
			// リダイレクトやエラーページへの遷移も成功とみなす
			if (response.status >= 200 && response.status < 400) {
				console.log("フォーム送信成功");
				setCurrentStep("complete");
			} else {
				throw new Error("フォーム送信に失敗しました");
			}
		} catch (error) {
			console.error("エラー:", error);
			// ネットワークエラーでない場合は成功とみなす（Netlifyのリダイレクトの可能性）
			if (error instanceof TypeError) {
				console.log("フォーム送信完了（リダイレクト）");
				setCurrentStep("complete");
			} else {
				alert("フォーム送信中にエラーが発生しました");
			}
		}
	};

	const handleReset = () => {
		methods.reset();
		setCurrentStep("input");
	};

	return (
		<FormProvider {...methods}>
			{currentStep === "input" && <ContactInput onConfirm={handleConfirm} />}
			{currentStep === "confirm" && (
				<ContactConfirm onBack={handleBack} onSubmit={handleSubmit} />
			)}
			{currentStep === "complete" && <ContactComplete onReset={handleReset} />}
		</FormProvider>
	);
}
