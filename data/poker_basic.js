window.DATA_poker_basic = {
  "category": "basic",
  "rules": [
    { "id": "play_style", "name": "プレイスタイル", "type": "select", "options": ["テキサスホールデム（主流・コミュニティカード）", "ドローポーカー（最初に5枚配って交換）"], "default": "テキサスホールデム（主流・コミュニティカード）", "desc": "プレイするポーカーの種類。", "detail": "../../details/poker_play_style.html", "visible": true },
    { "id": "joker", "name": "ジョーカー使用", "type": "boolean", "default": false, "desc": "ジョーカーをワイルドカードとして使用するかどうか。", "detail": "../../details/poker_joker.html", "visible": true },
    { "id": "hand_rank", "name": "役の強さ", "type": "select", "options": ["通常", "ローカル（ロイヤルストレートフラッシュを最強にする等）"], "default": "通常", "desc": "役の強さの基本ルール。", "detail": "../../details/poker_hand.html", "visible": true }
  ]
};
