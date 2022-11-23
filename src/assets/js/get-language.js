const es = require('../localizations/es.json')
const fr = require('../localizations/fr.json')
const ja = require('../localizations/ja.json')
const nl = require('../localizations/nl.json')
const ru = require('../localizations/ru.json')
const zh = require('../localizations/zh.json')
const en = require("../localizations/en.json");


function getLanguage() {

  let searchParamLanguageValue = ""

  if (window.location.search.slice(1) === "lang=ru") {
    searchParamLanguageValue = window.location.search.slice(6)
  }

  const language = window.navigator ? (window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage) : "ru"

  switch (searchParamLanguageValue || language) {
    case "es" :
      return es
    case "fr" :
      return fr
    case ja :
      return ja
    case "nl" :
      return nl
    case "ru" :
      return ru
    case "zh" :
      return zh
    default:
      return en
  }
}

exports.module = getLanguage