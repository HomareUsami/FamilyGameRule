window.DATA_poker_betting = {
  "category": "betting",
  "rules": [
    { 
      "id": "betting_enabled", 
      "name": "ベット（賭け）を行う", 
      "type": "boolean", 
      "default": true, 
      "desc": "チップを使って賭けを楽しむかどうか。オフにすると、単に役を作って比べるだけの遊び方になります。", 
      "detail": "../../details/poker_actions.html", 
      "visible": true 
    },
    { 
      "id": "initial_bet", 
      "name": "ベースベット額", 
      "type": "number", 
      "default": 10, 
      "desc": "ゲーム中、最低限賭けなければならない基準の金額です。レイズ（上乗せ）もこの単位で行うのが一般的です。", 
      "detail": "../../details/poker_limit.html", 
      "visible": true 
    },
    { 
      "id": "blinds", 
      "name": "ブラインド（強制ベット）", 
      "type": "boolean", 
      "default": true, 
      "desc": "テキサスホールデム等の必須ルール。親（ディーラー）の左隣2名が、カードを見る前に強制的にチップを出す仕組みです。場にチップを溜めてゲームを活発にします。", 
      "detail": "../../details/poker_blinds.html", 
      "visible": true 
    },
    { 
      "id": "small_blind", 
      "name": "スモールブラインド額", 
      "type": "number", 
      "default": 5, 
      "desc": "ディーラーのすぐ左隣の人が支払う額。通常はビッグブラインドの半分です。", 
      "detail": "../../details/poker_blinds.html", 
      "visible": true 
    },
    { 
      "id": "big_blind", 
      "name": "ビッグブラインド額", 
      "type": "number", 
      "default": 10, 
      "desc": "スモールブラインドのさらに隣の人が支払う額。これがそのゲームの『最低ベット額』の基準になります。", 
      "detail": "../../details/poker_blinds.html", 
      "visible": true 
    },
    { 
      "id": "ante", 
      "name": "アンティ（参加費）", 
      "type": "number", 
      "default": 0, 
      "desc": "毎ゲーム、全員が平等に支払う参加料。ドローポーカーでよく使われます。0に設定するとアンティなしになります。", 
      "detail": "../../details/poker_ante.html", 
      "visible": true 
    },
    { 
      "id": "limit", 
      "name": "ベット上限", 
      "type": "select", 
      "options": ["ノーリミット", "ポットリミット", "フィックスドリミット"], 
      "default": "ノーリミット", 
      "desc": "1回に賭けられるチップの上限を決めます。『ノーリミット』は所持金すべてをいつでも賭けられる、最もスリリングなルールです。", 
      "detail": "../../details/poker_limit.html", 
      "visible": true 
    },
    { 
      "id": "actions", 
      "name": "基本アクション", 
      "type": "select", 
      "options": ["標準（ベット, コール, レイズ, フォルド, チェック）"], 
      "default": "標準（ベット, コール, レイズ, フォルド, チェック）", 
      "desc": "手番で行う『コール』や『レイズ』などの呼び名。基本は標準的な名称を使います。", 
      "detail": "../../details/poker_actions.html", 
      "visible": true 
    },
    { 
      "id": "showdown", 
      "name": "ショーダウン", 
      "type": "select", 
      "options": ["最後にベットした人から開く", "時計回りに開く"], 
      "default": "最後にベットした人から開く", 
      "desc": "最後まで残った人同士で手札を見せ合う順番。最後に強気なアクションをした人から見せるのが一般的です。", 
      "detail": "../../details/poker_showdown.html", 
      "visible": true 
    }
  ]
};
