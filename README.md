# 目次
1. 概要
2. 背景
3. 主な機能
4. 使い方
5. セットアップ手順
6. ディレクトリ構成
7. データ構造
8. 使用技術
9. 終わりに
<br><br><br>
# ① 概要
AtCoderの問題ページに表示されるすべてのサンプル入出力を、ワンクリックでコピーできる Chrome 拡張機能です。<br>
現在、ローカルでAtCoderの解答を自動テストするプログラムも開発しており、**2026年9月中の完成を予定しています。**
<br><br><br>
# ② 背景
AtCoderで問題を解く際、サンプル入出力をローカル環境でテストするために、問題ページから入力例・出力例を一つずつコピーする必要がありました。<br>
この作業を効率化し、サンプルテストをより手軽に行えるようにすることを目的として、本拡張機能を制作しました。<br>
また、現在開発中のローカル自動テストプログラムと組み合わせることで、AtCoderのサンプルテストをより効率的に実行できるようにすることを目指しています。
<br><br><br>
# ③ 主な機能
- 問題ページのサンプル入出力を自動で取得
- すべてのサンプルをワンクリックでコピー
- AtCoder の問題ページ上にコピー用ボタンを自動表示
- 日本語・英語の問題ページに対応
<br><br><br>
# ④ 使い方
現在制作中です。<br>
完成後は、AtCoder の問題ページを開くと表示される「📋 サンプルを全部コピー」ボタンをクリックすることで、ページ内のサンプル入出力をまとめてコピーできるようになります。
<br><br><br>
# ⑤ セットアップ手順
## Chrome 拡張機能
現在、Chrome ウェブストアへの申請中のため、一般公開前となっています。<br>
公開後は Chrome ウェブストアからインストールして利用できるようにする予定です。
## ローカル自動テストプログラム
現在制作中です。<br>
2026年9月中の完成を予定しています。
<br><br><br>
# ⑥ ディレクトリ構成
<pre>
atcoder-sample-copy
├── .gitignore
├── LICENSE
├── package.json
├── README.md
├── test.html
├── src
│    ├── content.js
│    └── manifest.json
└── .github
     ├── PULL_REQUEST_TEMPLATE.md
     └── ISSUE_TEMPLATE
          ├── bug.yml
          ├── documentation.yml
          └── enhancement.yml

</pre>
<br><br><br>
# ⑦ データ構造
AtCoderの問題ページに存在するサンプル入出力を HTML から取得しています。<br>
サンプルは、pre要素に格納されており、pre-sample0, pre-sample1, pre-sample2 ... のような ID が付けられています。<br>
取得したサンプルはページ上の順番を維持したまま配列に格納し、入力例と出力例をまとめて一つのテキストとしてクリップボードへコピーします。
<br><br><br>
# ⑧ 使用技術
- **フロントエンド**：JavaScript、HTML / CSS（テスト用）
- **バックエンド**：なし
- **データベース**：なし
- **インフラ**：Chrome Extension Manifest V3
- **バージョン管理**：Git / GitHub
- **動作確認環境**：Google Chrome、macOS 15.6

### 選定理由
- **JavaScript**：ページのDOMを操作し、サンプル入出力を取得・コピーする必要があるため。
- **Chrome Extension Manifest V3**：Chrome 拡張機能としてAtCoderの問題ページに処理を組み込むため。

<br><br><br>
# ⑨ 終わりに
最後までご覧いただき、ありがとうございました。<br>
バグ報告や機能要望などがございましたら、以下よりお気軽にご連絡ください。
<br>
- [お問い合わせフォーム](https://forms.gle/P4bz4iNdsrivhbu96)
- [GitHub Issues](https://github.com/hikaru373/atcoder-sample-copy/issues)
- [メール](mailto:star3.14wars.sh@gmail.com)
