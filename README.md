# compare-with-biwako

琵琶湖と東京都23区の面積を比較できるアプリです。<br>
ぜひ琵琶湖の大きさを身近に感じてください✨

# インストール

npmをインストールします<br>
`npm install -g compare-with-biwako`<br>
または<br>
`npx compare-with-biwako`

# 使い方

## 区を選んで比較する

`compare-with-biwako`<br>
比較したい区を選択します

実行結果の例<br>

```
% compare-with-biwako
? 琵琶湖とどの区を比べる？ …
❯ 千代田区
  中央区
  港区
  新宿区
  文京区
  台東区
  墨田区
  など
```

## クイズモード（--quiz または -q）

`npx compare-with-biwako --quiz`<br>
または<br>
`compare-with-biwako -q`<br>
ランダムで区が選ばれ「この区は琵琶湖の何倍？」というクイズが出題されます！

実行結果の例<br>

```
% compare-with-biwako -q
?
問題: 琵琶湖は台東区の何倍？ …
❯ 88
  66
  24
  40
```

## 区を指定で比較する

`compare-with-biwako 渋谷区`<br>
のように直接指定することもできます。<br>
例えば渋谷区の場合、渋谷, 渋谷区, shibuya, shibuya-ku と入力することが可能です。
