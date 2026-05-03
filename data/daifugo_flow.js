window.DATA_daifugo_flow = {
  "category": "flow",
  "rules": [
    { "id": "miyako_ochi", "name": "都落ち", "type": "boolean", "default": true, "desc": "大富豪が1位であがれなかった場合、即座に大貧民になる。", "detail": "../../details/daifugo_miyako_ochi.html", "visible": true },
    { "id": "shibari", "name": "縛り", "type": "select", "options": ["なし", "片縛り", "激しば", "数縛り"], "default": "片縛り", "desc": "同じマークや続きの数字が続いた時に縛りが発生するルール。", "detail": "../../details/daifugo_shibari.html", "visible": true },
    { "id": "forbidden_agari", "name": "反則あがり（禁止あがり）", "type": "select", "options": ["なし", "2あがり・ジョーカーあがり禁止", "8あがり禁止も追加"], "default": "2あがり・ジョーカーあがり禁止", "desc": "最強のカードや特殊なカードで最後にあがることを禁止するルール。", "detail": "../../details/daifugo_forbidden_agari.html", "visible": true }
  ]
};
