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
			const response = await fetch("/.netlify/functions/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams(data).toString(),
			});

			if (!response.ok) {
				throw new Error("フォーム送信に失敗しました");
			}

			console.log("フォーム送信成功");
			setCurrentStep("complete");
		} catch (error) {
			console.error("エラー:", error);
			alert("フォーム送信中にエラーが発生しました");
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
