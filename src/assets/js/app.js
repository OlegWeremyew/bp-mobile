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

const content__text1 = document.querySelector('.content__text1')
content__text1.textContent = mainContent[`Unlimited documents`];

const content__text2 = document.querySelector('.content__text2')
content__text2.textContent = mainContent[`Count mode`];

const content__text3 = document.querySelector('.content__text3')
content__text3.textContent = mainContent[`Text recognition (OCR)`];

const offer__title1 = document.querySelector('.offer__title1')
offer__title1.textContent = mainContent[`Monthly`];

const offer__title2 = document.querySelector('.offer__title2')
offer__title2.textContent = mainContent[`Annually`];

const offer__price1 = document.querySelector('.offer__price1')
offer__price1.innerHTML = mainContent[`<strong>{{price}}</strong><br>per month`];

const offer__price2 = document.querySelector('.offer__price2')
offer__price2.innerHTML = mainContent[`<strong>{{price}}</strong><br>per year`];

const offer__status1 = document.querySelector('.offer__status1')
offer__status1.textContent = mainContent[`3 DAYS FREE`];

const offer__status2 = document.querySelector('.offer__status2')
offer__status2.textContent = mainContent[`MOST POPULAR`];

const offer__month1 = document.querySelector('.offer__month1')
offer__month1.textContent = mainContent["{{price}}/month"];

const offer__month2 = document.querySelector('.offer__month2')
offer__month2.textContent = mainContent["{{price}}/month"];

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


//active offers block
const offer__item1 = document.querySelector('.offer__item1')
const offer__item2 = document.querySelector('.offer__item2')
const sending__link = document.querySelector('.sending__link')

const switchActiveOfferItem = (event) => {
  if (event.currentTarget.className.includes('offer__item1')) {
    offer__item1.classList.add('active');
    offer__item2.classList.remove('active');
    sending__link.href = "https://apple.com/"
    return;
  }
  offer__item2.classList.add('active');
  offer__item1.classList.remove('active');
  sending__link.href = "https://google.com/"
  return;
}

offer__item1.addEventListener('click', switchActiveOfferItem)
offer__item2.addEventListener('click', switchActiveOfferItem)