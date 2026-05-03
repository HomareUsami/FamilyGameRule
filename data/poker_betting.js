window.DATA_poker_betting = {
  "category": "betting",
  "rules": [
    { "id": "actions", "name": "基本アクション（ベット・コール等）", "type": "select", "options": ["標準（ベット, コール, レイズ, フォルド, チェック）"], "default": "標準（ベット, コール, レイズ, フォルド, チェック）", "desc": "プレイヤーが手番で行えるアクション。", "detail": "../../details/poker_actions.html", "visible": true },
    { "id": "blinds", "name": "ブラインド（強制ベット）", "type": "boolean", "default": true, "desc": "テキサスホールデム等で、ディーラーの左隣2名が強制的にチップを出すルール。", "detail": "../../details/poker_blinds.html", "visible": true },
    { "id": "limit", "name": "ベット上限", "type": "select", "options": ["ノーリミット", "ポットリミット", "フィックスドリミット"], "default": "ノーリミット", "desc": "1回に賭けられるチップの上限。", "detail": "../../details/poker_limit.html", "visible": true },
    { "id": "ante", "name": "アンティ（参加費）", "type": "boolean", "default": false, "desc": "ゲーム開始前に全員が強制的に支払うチップ。", "detail": "../../details/poker_ante.html", "visible": true },
    { "id": "showdown", "name": "ショーダウン", "type": "select", "options": ["最後にベットした人から開く", "時計回りに開く"], "default": "最後にベットした人から開く", "desc": "最後まで残ったプレイヤーが手札を見せ合う際の順番。", "detail": "../../details/poker_showdown.html", "visible": true }
  ]
};
