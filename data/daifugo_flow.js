window.DATA_daifugo_flow = {
  "category": "flow",
  "rules": [
    { 
      "id": "miyako_ochi", 
      "name": "都落ち", 
      "type": "boolean", 
      "default": true, 
      "desc": "『大富豪』が次の回で1位になれなかった瞬間、その場で負けが確定し『大貧民』に転落する厳しいルールです。", 
      "detail": "../../details/daifugo_miyako_ochi.html", 
      "visible": true 
    },
    { 
      "id": "shibari", 
      "name": "縛りルールを有効にする", 
      "type": "boolean", 
      "default": true, 
      "desc": "同じマークが続いた時などに、出せるカードを制限するルールです。これ自体をオフにすると、以下の縛り設定もすべて無効になります。", 
      "detail": "../../details/daifugo_shibari.html", 
      "visible": true 
    },
    { 
      "id": "shibari_suit", 
      "name": "マーク縛り（片縛り）", 
      "type": "boolean", 
      "default": true, 
      "desc": "前の人と同じマークを出すと、その回が終わるまで『そのマークしか出せなくなる』ルールです。", 
      "detail": "../../details/daifugo_shibari.html", 
      "visible": true 
    },
    { 
      "id": "shibari_num", 
      "name": "数縛り（階段縛り）", 
      "type": "boolean", 
      "default": false, 
      "desc": "同じマークかつ、数字が1つずつ繋がって出された場合（例：♠3の次に♠4）に縛りが発生するルールです。", 
      "detail": "../../details/daifugo_shibari.html", 
      "visible": true 
    },
    { 
      "id": "shibari_geki", 
      "name": "激しば（両縛り）", 
      "type": "boolean", 
      "default": false, 
      "desc": "2枚出しなどで、マークの組み合わせが完全に一致した時に発生する、より強力な縛りです。", 
      "detail": "../../details/daifugo_shibari.html", 
      "visible": true 
    },
    { 
      "id": "forbidden_agari", 
      "name": "反則あがりを有効にする", 
      "type": "boolean", 
      "default": true, 
      "desc": "最強のカードなどで最後にあがることを禁止します。うっかりあがってしまうとその場で『大貧民』になるため、最後まで油断できません。", 
      "detail": "../../details/daifugo_forbidden_agari.html", 
      "visible": true 
    },
    { 
      "id": "forbidden_joker", 
      "name": "ジョーカーあがり禁止", 
      "type": "boolean", 
      "default": true, 
      "desc": "最強のジョーカーを最後の一枚として出すことを禁じます（ジョーカーを含むペアも不可）。", 
      "detail": "../../details/daifugo_forbidden_agari.html", 
      "visible": true 
    },
    { 
      "id": "forbidden_2", 
      "name": "2あがり禁止", 
      "type": "boolean", 
      "default": true, 
      "desc": "最強の数字『2』でのあがりを禁じます。※革命中は『3』でのあがりが禁止になります。", 
      "detail": "../../details/daifugo_forbidden_agari.html", 
      "visible": true 
    },
    { 
      "id": "forbidden_8", 
      "name": "8あがり禁止", 
      "type": "boolean", 
      "default": false, 
      "desc": "強力な効果を持つ『8』でのあがりを禁じます。『8切り』を有効にしている場合によく使われます。", 
      "detail": "../../details/daifugo_forbidden_agari.html", 
      "visible": true 
    },
    { 
      "id": "forbidden_spade3", 
      "name": "スペ3あがり禁止", 
      "type": "boolean", 
      "default": false, 
      "desc": "ジョーカーを倒せる特殊な『スペードの3』でのあがりを禁じます。", 
      "detail": "../../details/daifugo_forbidden_agari.html", 
      "visible": true 
    },
    {
      "id": "tax_enabled",
      "name": "カードの引き渡し（税金）",
      "type": "boolean",
      "default": true,
      "desc": "上位のプレイヤーと下位のプレイヤーがカードを交換するルールです。オフにすると引き渡しは行われません。",
      "detail": "../../details/daifugo_tax.html",
      "visible": true
    },
    {
      "id": "tax_daifugo",
      "name": "大富豪の引き渡し枚数",
      "type": "number",
      "default": 2,
      "desc": "大富豪が大貧民から受け取る（および不要なカードを渡す）枚数です。",
      "detail": "../../details/daifugo_tax.html",
      "visible": true
    },
    {
      "id": "tax_fugo",
      "name": "富豪の引き渡し枚数",
      "type": "number",
      "default": 1,
      "desc": "富豪が貧民から受け取る（および不要なカードを渡す）枚数です。",
      "detail": "../../details/daifugo_tax.html",
      "visible": true
    }
  ]
};
