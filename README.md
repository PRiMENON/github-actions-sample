# github-actions-sample

## やっていること

`test.yaml` にある`domain: www.hogehoge.com` の行の`www.hogehoge.com`の部分を `test.txt` に出力する処理を、GitHubにプッシュしたら GitHub Actions に実行させます。

もちろん、ローカル環境で `npm run test` を実行すれば、同じ処理になります。

`test.yaml` から取り出したい箇所を取り出したり文字列の修正は、`test.js` で行っています。

### 実行環境

* Windows 10
* node.js v18
* Microsoft VSCode
* Git for Windows

### 必要ファイル

* `test.yaml`
* `test.js`
* `.github/workflows/make-yaml-to-list.yaml`
    * https://github.com/ad-m/github-push-action

これ以外のファイルは必須ではありません。

### 生成されるファイル

ローカル環境なら `npm run test` 、GitHub Actionsが実行されると生成されるファイル。

* `test.txt`
