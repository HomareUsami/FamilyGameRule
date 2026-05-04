window.DATA_dependencies = {
  "poker": {
    "initial_bet": { "show_if": { "betting_enabled": true } },
    "blinds": { "show_if": { "betting_enabled": true, "play_style": "テキサスホールデム（主流・コミュニティカード）" } },
    "small_blind": { "show_if": { "betting_enabled": true, "blinds": true } },
    "big_blind": { "show_if": { "betting_enabled": true, "blinds": true } },
    "ante": { "show_if": { "betting_enabled": true } },
    "limit": { "show_if": { "betting_enabled": true } },
    "actions": { "show_if": { "betting_enabled": true } },
    "showdown": { "show_if": { "betting_enabled": true } }
  },
  "daifugo": {
    "shibari_num": { "show_if": { "shibari": true } },
    "shibari_suit": { "show_if": { "shibari": true } },
    "shibari_geki": { "show_if": { "shibari": true } },
    "stairs_kakumei": { "show_if": { "stairs": true } },
    "joker_strength": { "show_if": { "any_of": [{ "joker_count": "1枚" }, { "joker_count": "2枚" }] } },
    "forbidden_joker": { "show_if": { "forbidden_agari": true, "any_of": [{ "joker_count": "1枚" }, { "joker_count": "2枚" }] } },
    "forbidden_8": { "show_if": { "forbidden_agari": true, "eight_cut": true } },
    "forbidden_2": { "show_if": { "forbidden_agari": true } },
    "forbidden_spade3": { "show_if": { "forbidden_agari": true, "spade_three": true } },
    "tax_daifugo": { "show_if": { "tax_enabled": true } },
    "tax_fugo": { "show_if": { "tax_enabled": true } }
  }
};
