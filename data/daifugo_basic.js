window.DATA_daifugo_basic = {
  "category": "basic",
  "rules": [
    {
      "id": "joker_count",
      "name": "ジョーカーの枚数",
      "type": "select",
      "options": ["なし", "1枚", "2枚"],
      "default": "2枚",
      "desc": "ゲームに使用するジョーカーの枚数です。0（なし）に設定すると、ジョーカー関連のルールは無効になります。",
      "detail": "../../details/daifugo_joker.html",
      "visible": true
    },
    {
      "id": "joker_strength",
      "name": "ジョーカーの強さ",
      "type": "select",
      "options": ["最強", "通常（2の次）"],
      "default": "最強",
      "desc": "ジョーカーを単体で出した時の強さです。",
      "detail": "../../details/daifugo_joker.html",
      "visible": true
    },
    {
      "id": "stairs",
      "name": "階段",
      "type": "boolean",
      "default": true,
      "desc": "同じマークで連続する3枚以上のカードを出せるか。",
      "detail": "../../details/daifugo_stairs.html",
      "visible": true
    }
  ]
};
