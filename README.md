<img width='450' src='https://raw.githubusercontent.com/Swift2024-Education/hon-colle/refs/heads/main/src/app/ui/logo/%E3%83%AD%E3%82%B4.png'>

# ほんコレ hon-colle

小学校向けの読書履歴作成と学校図書館の本の検索ができるWebアプリです。

[React](https://react.dev/) + [Next.js](https://nextjs.org/)で作成しています。

**現在のREADME.mdは開発チーム向けの内容です**

## 開発前に

**事前にDockerを起動させておくことを忘れずに。検索ページやお知らせ機能が動きません。**

開発用サーバーの起動:

```bash
npm run dev
```

 [http://localhost:3000](http://localhost:3000) を開くと、トップページが表示されます。

## パッケージに変更があったとき

新規パッケージのインストールや、不要なパッケージの削除が行われたコミットをマージした際は、以下のコマンドを実行してください。

```bash
npm i
```

## データベースに変更があったとき

`schema.prisma`に変更があったときは、以下のコマンドを実行する必要があります。

**Dockerが稼働していないとエラーが発生します。**

```bash
npx prisma generate

npx prisma db push
```

## 各種リンク

ほぼ英語のみです

- [開発サーバー(localhost:3000)](http://localhost:3000)
- [Adminer(DB管理ページ, localhost:8080)](http://localhost:8080)
- [GitHub リポジトリ](https://github.com/Swift2024-Education/hon-colle)
- [Next.js Documentation](https://nextjs.org/docs)
- [React リファレンス](https://ja.react.dev/reference/react)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
