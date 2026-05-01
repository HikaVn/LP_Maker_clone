# Atelier Sonare LP

バイオリン製作者向けの静的ランディングページです。

## ファイル構成
- `index.html`
- `style.css`
- `script.js`
- `assets/images/`（画像配置先）

## ローカルで表示確認する方法
1. ターミナルでプロジェクトディレクトリへ移動
```bash
cd /Users/hikaru/Software\ Development/LP_Maker
```
2. 簡易サーバーを起動（Python 3）
```bash
python3 -m http.server 8000
```
3. ブラウザで以下を開く
- `http://localhost:8000`

## 画像について
- 本LPは `assets/images/` 配下に画像を置く前提です。
- 未配置の場合でも、各画像領域はCSSグラデーション背景で崩れない設計です。
- 画像を使う場合は、HTML内の各 `img src` に対応するファイル名で配置してください。

### 使用画像ファイル名
- `hero.jpg`
- `concept.jpg`
- `dialogue.jpg`
- `process-01.jpg`
- `process-02.jpg`
- `process-03.jpg`
- `process-04.jpg`
- `process-05.jpg`
- `process-06.jpg`
- `visit.jpg`
- `trial.jpg`
- `online.jpg`
- `cta.jpg`

### 仮画像について
- 現在の画像は、LPレイアウト確認用の仮アセットです。
- 本番公開時は、実写写真への差し替えを推奨します。
- 特に `hero.jpg` `dialogue.jpg` `cta.jpg` はブランド印象に直結するため、優先して実写差し替えしてください。

### 推奨画像比率
- `hero.jpg`: 16:9 以上（推奨 2400x1350 以上）
- `concept.jpg`: 16:9（推奨 1920x1080）
- `dialogue.jpg`: 3:4（推奨 1200x1600）
- `process-01.jpg`〜`process-06.jpg`: 4:3（推奨 1200x900）
- `visit.jpg` `trial.jpg` `online.jpg`: 4:3（推奨 1200x900）
- `cta.jpg`: 16:9（推奨 2000x1125 以上）

### 画像差し替え手順
1. `assets/images/` に、上記ファイル名で画像を配置します。
2. 既存ファイルを差し替えるだけで反映されます（HTML修正は不要）。
3. 表示確認は `http://localhost:8000` を再読込して行います。
4. 見切れが気になる場合は、画像の被写体を中央寄せでトリミングしてください（CSSは `object-fit: cover`）。

## デザイン調整後の確認ポイント
- PC表示で、各セクション上下の余白が十分にあり詰まって見えないこと
- ファーストビュー画像が大きく表示され、コピーとのバランスが取れていること
- ボタンの主従関係が明確であること（`btn-solid` が主、`btn-line` が従）
- スマホ表示で、見出し改行と本文行間が読みやすいこと
- スマホでCTAボタンが縦並び・全幅で押しやすいこと
- FAQの開閉が正常で、1つ開くと他が閉じること
- 画像未配置時もレイアウト崩れがないこと
