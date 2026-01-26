// Netlify Function: Netlify Forms は自動処理
// このファイルは Netlify Forms の自動処理に対応しています。
// フォーム送信後の処理はこちらで追加できます。

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Netlify Formsは自動的にメールを送信しています
    // ここでは送信成功の確認メッセージを返すだけ
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "フォームが正常に送信されました"

}),
    };
  } catch (error) {
    console.error("エラー:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "エラーが発生しました" }),
    };
  }
};
