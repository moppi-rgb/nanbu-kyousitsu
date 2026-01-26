# Netlify デプロイガイド

このプロジェクトをNetlifyにデプロイするための設定が完了しています。

## 📋 セットアップ済み項目

- ✅ `netlify.toml` - ビルド・関数・リダイレクト設定
- ✅ `public/_redirects` - SPA用リダイレクト設定
- ✅ `netlify/functions/contact.js` - フォーム処理用サーバーレス関数
- ✅ `src/pages/Contact.tsx` - フォーム送信機能

## 🚀 デプロイ手順

### 1. Netlify CLIをインストール（オプション）
```bash
npm install -g netlify-cli
```

### 2. GitHubにコードをプッシュ
```bash
git add .
git commit -m "Add Netlify form support"
git push
```

### 3. Netlifyでサイトを作成・デプロイ
- [Netlify Dashboard](https://app.netlify.com) にアクセス
- 「Add new site」 → 「Import an existing project」
- GitHubリポジトリを選択
- ビルドコマンドが自動的に設定されます（`npm run build`）
- 「Deploy」をクリック

## 📧 フォーム設定（オプション：メール通知機能）

フォーム送信時にメール通知を受け取るには、環境変数を設定してください：

### Netlify Dashboard での設定手順
1. Site settings → Environment
2. 「Add a variable」をクリック
3. 以下を追加：

| キー | 値 | 説明 |
|-----|-----|-----|
| `FORM_EMAIL` | your-email@example.com | 送信先メールアドレス |

## 🧪 ローカルでのテスト

### Netlify CLIでローカルテスト
```bash
netlify dev
```
ブラウザで `http://localhost:8888` にアクセスしてテストできます。

### フォーム送信のテスト
1. `/contact` ページへ移動
2. フォームに入力
3. 送信ボタンをクリック
4. 成功メッセージが表示されればOK

## 📝 フォーム処理の仕組み

- **フロントエンド**: React Hook Form で入力フォームを管理
- **バックエンド**: Netlify Functions で `/.netlify/functions/contact` にデータを送信
- **処理**: `netlify/functions/contact.js` でバリデーションと処理を実行

## 🔒 セキュリティに関する注意

- フォーム送信はサーバー側（Netlify Functions）で検証されています
- CORS設定がNetlifyで自動的に処理されます
- 本番環境でメール送信を有効にする場合は、SendGrid等の外部サービスを統合してください

## 📞 トラブルシューティング

### フォームが送信できない場合
1. ブラウザのコンソール（F12）でエラーを確認
2. Netlify Dashboard → Functions でログを確認
3. 送信URL (`/.netlify/functions/contact`) が正しいか確認

### メール送信が動作しない場合
- `netlify/functions/contact.js` を編集してメール送信ロジックを実装してください
- SendGrid、Postmark等のメールサービス連携が必要です

## 📚 参考リンク

- [Netlify Functions ドキュメント](https://docs.netlify.com/functions/overview/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- [React Hook Form](https://react-hook-form.com/)
