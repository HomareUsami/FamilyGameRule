window.DATA_poker_basic = {
  "category": "basic",
  "rules": [
    { 
      "id": "play_style", 
      "name": "プレイスタイル", 
      "type": "select", 
      "options": ["テキサスホールデム（主流・コミュニティカード）", "ドローポーカー（最初に5枚配って交換）"], 
      "default": "テキサスホールデム（主流・コミュニティカード）", 
      "desc": "現在世界で最も人気のある『テキサスホールデム』か、日本でお馴染みの『ドローポーカー』かを選択します。", 
      "detail": "../../details/poker_play_style.html", 
      "visible": true 
    },
    { 
      "id": "joker", 
      "name": "ジョーカー使用", 
      "type": "boolean", 
      "default": false, 
      "desc": "ジョーカーを1枚追加し、どのカードの代わりにもなる『ワイルドカード』として扱うか。公式ルールでは通常使いませんが、遊びやすくなります。", 
      "detail": "../../details/poker_joker.html", 
      "visible": true 
    },
    { 
      "id": "hand_rank", 
      "name": "役の強さ", 
      "type": "select", 
      "options": ["通常", "ローカル（ロイヤルストレートフラッシュを最強にする等）"], 
      "default": "通常", 
      "desc": "基本は世界共通の強さですが、身内ルールで特定の役を強くしたい場合に変更します。", 
      "detail": "../../details/poker_hand.html", 
      "visible": true 
    }
  ]
};
