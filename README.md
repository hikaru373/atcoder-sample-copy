# 目次
1. 概要
2. 背景
3. 主な機能
4. セットアップ手順
5. 使い方
6. ディレクトリ構成
7. データ構造
8. 使用技術
9. 終わりに
<br><br><br>
# ① 概要
AtCoderの問題ページに表示されるすべてのサンプル入出力を、ワンクリックでコピーできる Chrome 拡張機能です。<br>
[ローカル自動テストプログラム](https://github.com/hikaru373/atcoder-python-auto-test)と組み合わせることで、コピーしたサンプルを使ってテストを実行できます。
<br>
本サービスの利用により発生した損害や不利益について、開発者は一切の責任を負いません。あらかじめご了承ください。
<br><br><br>
# ② 背景
AtCoderで問題を解く際、サンプル入出力をローカル環境でテストするために、問題ページから入力例・出力例を一つずつコピーする必要がありました。<br>
現在開発中のローカル自動テストプログラムと組み合わせることで、AtCoderのサンプルテストをより効率的に実行できるようにすることを目指しています。
<br><br><br>
# ③ 主な機能
- AtCoder の問題ページ上にコピー用ボタンを自動表示
- 問題ページのサンプル入出力を自動で取得
- 日本語・英語の問題ページに対応
<br><br><br>
# ④ セットアップ手順
こちらの拡張機能をインストールしてください。

[Chrome 拡張機能](https://chromewebstore.google.com/detail/atcoder-sample-copy/bjankhpbegjhlkihejjacecbnhbmhhef?pli=1)
<br><br><br>
# ⑤ 使い方
![使い方画像](https://github.com/user-attachments/assets/4c1e0911-58cc-480a-8b12-b6a50723aaa5)
<br><br>
AtCoderの問題ページに表示される「サンプルを全部コピー」ボタンをクリックすると、ページ内のすべてのサンプル入出力を一括でコピーできます。<br>
コピーしたサンプルは、[ローカル自動テストプログラム](https://github.com/hikaru373/atcoder-python-auto-test)で使用できます。
<br><br><br>
# ⑥ ディレクトリ構成
<pre>
atcoder-sample-copy
├── .gitignore
├── LICENSE
├── package.json
├── README.md
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
AtCoderでは、サンプルが pre-sample0, pre-sample1, pre-sample2 ... のような ID が付けられています。<br>
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
