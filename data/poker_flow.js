window.DATA_poker_flow = {
  "TexasHoldem": {
    "title": "テキサスホールデムの遊び方",
    "steps": [
      { "text": "参加費（{ante}）を払います。", "condition": "ante" },
      { "text": "ブラインド（SB:{small_blind} / BB:{big_blind}）を払います。", "condition": "blinds" },
      { "text": "各プレイヤーに手札が2枚ずつ配られます。" },
      { "text": "第1ラウンドのベット（プリフロップ）を行います。最低ベット額は {initial_bet} です。", "condition": "betting_enabled" },
      { "text": "場に共通カードが3枚開かれます（フロップ）。" },
      { "text": "第2ラウンドのベットを行います。", "condition": "betting_enabled" },
      { "text": "場に4枚目のカードが開かれます（ターン）。" },
      { "text": "第3ラウンドのベットを行います。", "condition": "betting_enabled" },
      { "text": "場に5枚目のカードが開かれます（リバー）。" },
      { "text": "最後のベットを行い、ショーダウン（手札公開）で勝負を決めます。", "condition": "betting_enabled" },
      { "text": "ショーダウン（手札公開）で、一番強い5枚の組み合わせを作った人が勝ちです。", "condition": { "id": "betting_enabled", "value": false } }
    ]
  },
  "DrawPoker": {
    "title": "ドローポーカーの遊び方",
    "steps": [
      { "text": "参加費（{ante}）を払います。", "condition": "ante" },
      { "text": "各プレイヤーに手札が5枚ずつ配られます。" },
      { "text": "第1ラウンドのベットを行います。最低ベット額は {initial_bet} です。", "condition": "betting_enabled" },
      { "text": "不要なカードを捨てて、新しいカードを引き直します（1回のみ）。" },
      { "text": "第2ラウンドのベットを行います。", "condition": "betting_enabled" },
      { "text": "ショーダウン（手札公開）を行い、一番強い役を作った人が勝ちます。" }
    ]
  }
};
