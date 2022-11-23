const en = require('../localizations/en.json')
const es = require('../localizations/es.json')
const fr = require('../localizations/fr.json')
const ja = require('../localizations/ja.json')
const nl = require('../localizations/nl.json')
const ru = require('../localizations/ru.json')
const zh = require('../localizations/zh.json')


const getLanguage = () => {

  let searchParamLanguageValue = ""

  if (window.location.search.slice(0, 6) === "?lang=") {
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

const mainContent = getLanguage()

const title = document.querySelector('.title')
title.innerHTML = mainContent[`Unlimited Access<br>to All Features`];

const content__text__1 = document.querySelector('.content__text--1')
content__text__1.textContent = mainContent[`Unlimited documents`];

const content__text__2 = document.querySelector('.content__text--2')
content__text__2.textContent = mainContent[`Count mode`];

const content__text__3 = document.querySelector('.content__text--3')
content__text__3.textContent = mainContent[`Text recognition (OCR)`];


const offer__title__1 = document.querySelector('.offer__title--1')
offer__title__1.textContent = mainContent[`Monthly`];

const offer__title__2 = document.querySelector('.offer__title--2')
offer__title__2.textContent = mainContent[`Annually`];

const offer__price__1 = document.querySelector('.offer__price--1')
offer__price__1.innerHTML = mainContent[`<strong>{{price}}</strong><br>per month`];

const offer__price__2 = document.querySelector('.offer__price--2')
offer__price__2.innerHTML = mainContent[`<strong>{{price}}</strong><br>per year`];

const offer__status__1 = document.querySelector('.offer__status--1')
offer__status__1.textContent = mainContent[`3 DAYS FREE`];

const offer__status__2 = document.querySelector('.offer__status--2')
offer__status__2.textContent = mainContent[`MOST POPULAR`];

const sending__btn = document.querySelector('.sending__btn')
sending__btn.textContent = mainContent[`Continue`];

const sending__text = document.querySelector('.sending__text')
sending__text.textContent = mainContent[`Auto-renewable. Cancel anytime.`];

const header__link = document.querySelector('.header__link')
header__link.textContent = mainContent[`Restore`];

const footer__link__term = document.querySelector('.footer__link--term')
footer__link__term.textContent = mainContent[`Terms of Use`];

const footer__link__privacy = document.querySelector('.footer__link--privacy')
footer__link__privacy.textContent = mainContent[`Privacy Policy`];