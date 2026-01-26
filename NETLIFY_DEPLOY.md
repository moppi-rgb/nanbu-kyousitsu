# Netlify デプロイガイド

このプロジェクトをNetlifyにデプロイするための設定が完了しています。

## 📋 セットアップ済み項目

- ✅ `netlify.toml` - ビルド・リダイレクト・Forms設定
- ✅ `public/_redirects` - SPA用リダイレクト設定
- ✅ `src/pages/Contact.tsx` - Netlify Forms対応
- ✅ `netlify/functions/contact.js` - フォーム処理

## 🚀 デプロイ手順

### 1. 環境変数をクリア（SendGrid設定を削除）

**Netlify Dashboard** の **Environment variables** で、以下を削除してください：
- ❌ `SENDGRID_API_KEY`
- ❌ `SENDGRID_FROM_EMAIL`

**`FORM_EMAIL` は残してください！** これはNetlify Formsの通知先アドレスになります。

### 2. package.json を確認

```bash
npm install
```

`@sendgrid/mail` が削除されたことを確認できます。

### 3. ビルド＆デプロイ

```bash
npm run build
git add .
git commit -m "Switch to Netlify Forms"
git push
```

Netlifyの自動デプロイが開始されます。

---

## 📧 Netlify Forms とは？

Netlify Formsは、複雑な設定なしでフォーム送信を処理してくれるサービスです：

- ✅ **フォーム自動処理**: HTMLの `netlify` 属性があれば自動的に処理
- ✅ **自動メール通知**: `FORM_EMAIL` で指定したアドレスに通知
- ✅ **スパム対策**: 自動的にスパムをフィルタリング
- ✅ **ダッシュボード**: Netlifyで送信されたフォームを確認可能

### Netlifyダッシュボードでフォーム確認方法
1. **Site settings** → **Forms**
2. サイトに送信されたすべてのフォームが表示されます
3. 各フォーム送信の詳細が確認できます

---

## 🧪 ローカルでのテスト

### 環境変数ファイルを作成
`.env.local` ファイルをプロジェクトルートに作成：

```env
VITE_FORM_NAME=contact
```

### Netlify CLIでテスト
```bash
netlify dev
```

ブラウザで `http://localhost:8888` にアクセスしてテストできます。

フォーム送信後、Netlifyダッシュボードの **Forms** セクションで確認できます。

---

## 📝 フォーム送信の仕組み

1. **フロント**: React Hook Form で入力フォームを管理
2. **バックエンド**: Netlify Functions で受け取る
3. **処理**: Netlify Forms が自動的にメール送信・記録

---

## 🎯 次のステップ（オプション）

### メール送信のカスタマイズ
Netlify Formsの通知メールをカスタマイズしたい場合：
- Netlify Dashboard → **Forms** → 「Notifications」で設定

### リダイレクト設定
フォーム送信後のリダイレクト先を設定：
- `netlify.toml` の `[[forms]]` セクションで `redirect` を指定

---

## 🔒 セキュリティ

- CORS設定がNetlifyで自動的に処理されます
- スパムフィルタが有効です
- フォームデータはNetlifyで安全に保存されます

---

## 📞 トラブルシューティング

### フォームが送信できない場合
1. ブラウザの console（F12）でエラーを確認
2. Netlify Dashboard → **Functions** でログを確認
3. `netlify.toml` の設定を確認

### メール通知が来ない場合
1. `FORM_EMAIL` 環境変数が設定されているか確認
2. Netlify Dashboard → **Forms** で送信記録を確認
3. スパムメールフォルダを確認

---

## 📚 参考リンク

- [Netlify Forms ドキュメント](https://docs.netlify.com/forms/setup/)
- [Netlify Functions ドキュメント](https://docs.netlify.com/functions/overview/)
- [React Hook Form](https://react-hook-form.com/)
