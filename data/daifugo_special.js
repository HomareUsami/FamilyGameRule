window.DATA_daifugo_special = {
  "category": "special",
  "rules": [
    { "id": "kakumei", "name": "革命", "type": "boolean", "default": true, "desc": "同じ数字のカードを4枚以上出すと強さが逆転する。", "detail": "../../details/daifugo_kakumei.html", "visible": true },
    { "id": "stairs_kakumei", "name": "階段革命", "type": "boolean", "default": false, "desc": "4枚以上の階段を出した場合も革命になる。", "detail": "../../details/daifugo_stairs_kakumei.html", "visible": true },
    { "id": "eight_cut", "name": "8切り", "type": "boolean", "default": true, "desc": "8を出した時点でその場が流れ、自分の番になる。", "detail": "../../details/daifugo_eight_cut.html", "visible": true },
    { "id": "eleven_back", "name": "11バック（Jバック）", "type": "boolean", "default": true, "desc": "J(11)を出すと、その場が流れるまで一時的に革命状態になる。", "detail": "../../details/daifugo_eleven_back.html", "visible": true },
    { "id": "spade_three", "name": "スペ3返し", "type": "boolean", "default": true, "desc": "単独のジョーカーに対して、スペードの3を出して勝てる。", "detail": "../../details/daifugo_spade_three.html", "visible": true },
    { "id": "five_skip", "name": "5飛び", "type": "boolean", "default": false, "desc": "5を出した枚数分、次の人の順番をスキップする。", "detail": "../../details/daifugo_five_skip.html", "visible": true },
    { "id": "seven_pass", "name": "7渡し", "type": "boolean", "default": false, "desc": "7を出した枚数分、次の人に不要な手札を渡せる。", "detail": "../../details/daifugo_seven_pass.html", "visible": true },
    { "id": "ten_discard", "name": "10捨て", "type": "boolean", "default": false, "desc": "10を出した枚数分、手札を選んで捨てられる。", "detail": "../../details/daifugo_ten_discard.html", "visible": true },
    { "id": "reverse", "name": "リバース（9・Qなど）", "type": "select", "options": ["なし", "9リバース", "Qリバース"], "default": "なし", "desc": "特定のカードを出すと順番が逆回りになる。", "detail": "../../details/daifugo_reverse.html", "visible": true },
    { "id": "ambulance", "name": "救急車", "type": "boolean", "default": false, "desc": "9を2枚出すと、8切りと同じ効果になる。", "detail": "../../details/daifugo_ambulance.html", "visible": true },
    { "id": "rokurokubi", "name": "ろくろ首", "type": "boolean", "default": false, "desc": "6を2枚出すと、8切りと同じ効果になる。", "detail": "../../details/daifugo_rokurokubi.html", "visible": true },
    { "id": "coupdetat", "name": "クーデター / オーメン", "type": "select", "options": ["なし", "9を3枚で革命", "6を3枚で革命"], "default": "なし", "desc": "特定の数字を3枚出すと革命が起きる。", "detail": "../../details/daifugo_coupdetat.html", "visible": true },
    { "id": "sandstorm", "name": "砂嵐", "type": "boolean", "default": false, "desc": "3を3枚出すと、8切りと同じ効果になる。", "detail": "../../details/daifugo_sandstorm.html", "visible": true },
    { "id": "cataclysm", "name": "天変地異", "type": "boolean", "default": false, "desc": "3を4枚出すと、最強の効果を持つ革命が起きる。", "detail": "../../details/daifugo_cataclysm.html", "visible": true },
    { "id": "q_bomber", "name": "12（Q）ボンバー", "type": "boolean", "default": false, "desc": "Qを出した枚数分、数字を指定して全員にそのカードを捨てさせる。", "detail": "../../details/daifugo_q_bomber.html", "visible": true },
    { "id": "k_cancel", "name": "13（K）キャンセル", "type": "boolean", "default": false, "desc": "Kを出すと、直前に出された特殊カードの効果を無効化する。", "detail": "../../details/daifugo_k_cancel.html", "visible": true }
  ]
};
