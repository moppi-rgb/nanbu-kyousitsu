// Netlify Function: お問い合わせフォーム処理
exports.handler = async (event) => {
  // POSTリクエストのみ受け付ける
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    // バリデーション
    if (!data.family_name || !data.given_name || !data.email || !data.subject || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "必須項目が不足しています" }),
      };
    }

    // メールアドレスのバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "有効なメールアドレスではありません" }),
      };
    }

    // ここでメール送信を実装（例：SendGridやNetlify メール送信サービスを使用）
    // 現在は、フォームデータをログに記録
    console.log("お問い合わせフォーム送信:", data);

    // Netlify Environment Variables で FORM_EMAIL を設定して送信可能
    if (process.env.FORM_EMAIL) {
      // 実際のメール送信処理（例）
      // await sendEmail(process.env.FORM_EMAIL, data);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "フォームが正常に送信されました",
        data: data,
      }),
    };
  } catch (error) {
    console.error("エラー:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "サーバーエラーが発生しました" }),
    };
  }
};
