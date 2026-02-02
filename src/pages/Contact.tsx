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
		// テスト完了のため送信機能は無効化
		console.log("送信機能は現在無効です");
		alert("申し訳ありません。現在、お問い合わせフォームはメンテナンス中です。");
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
