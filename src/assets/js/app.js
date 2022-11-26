import {es, fr, ja, nl, ru, zh, en} from '../localizations/index';

//a function that determines the language of the user's page
const getUserLanguage = () => {

  let searchParamLanguageValue = "";
  const RIGHT_SEARCH_PARAM_LENGTH = 8;

  //get the value of the query string
  const searchParam = window.location.search.toLowerCase();

  //query string check
  if (searchParam.length === RIGHT_SEARCH_PARAM_LENGTH && searchParam.slice(0, 6) === "?lang=") {
    searchParamLanguageValue = searchParam.slice(6, 8);
  }

  //get the user's system language
  const userSystemLanguage = window.navigator
    ? (window.navigator.language
      || window.navigator.systemLanguage
      || window.navigator.userLanguage)
    : "en";

  switch (searchParamLanguageValue || userSystemLanguage) {
    case "es" :
      return es
    case "fr" :
      return fr
    case "ja" :
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
};

//get content according to the user's language settings
const mainContent = getUserLanguage();

//set the values displayed by the tags
const setCurrentElementValueHandler = (tegClass, value, method) => {
  const element = document.querySelector(`${tegClass}`);
  if (method === 'innerHTML') {
    element.innerHTML = mainContent[value];
    return;
  }
  if (method === 'textContent') {
    element.textContent = mainContent[value];
  }
};

//an array that stores information about classes, methods, and the contents of various tags
const contentArray = [
  {className: '.title', content: `Unlimited Access<br>to All Features`, method: 'innerHTML',},
  {className: '.offer__price1', content: `<strong>{{price}}</strong><br>per month`, method: 'innerHTML',},
  {className: '.offer__price2', content: `<strong>{{price}}</strong><br>per year`, method: 'innerHTML',},
  {className: '.content__text1', content: `Unlimited documents`, method: 'textContent',},
  {className: '.content__text2', content: `Count mode`, method: 'textContent',},
  {className: '.content__text3', content: `Text recognition (OCR)`, method: 'textContent',},
  {className: '.offer__title1', content: `Monthly`, method: 'textContent',},
  {className: '.offer__title2', content: `Annually`, method: 'textContent',},
  {className: '.offer__status1', content: `3 DAYS FREE`, method: 'textContent',},
  {className: '.offer__status2', content: `MOST POPULAR`, method: 'textContent',},
  {className: '.offer__month1', content: `{{price}}/month`, method: 'textContent',},
  {className: '.offer__month2', content: `{{price}}/month`, method: 'textContent',},
  {className: '.sending__btn', content: `Continue`, method: 'textContent',},
  {className: '.sending__text', content: `Auto-renewable. Cancel anytime.`, method: 'textContent',},
  {className: '.header__link', content: `Restore`, method: 'textContent',},
  {className: '.footer__term', content: `Terms of Use`, method: 'textContent',},
  {className: '.footer__privacy', content: `Privacy Policy`, method: 'textContent',},
  {className: '.offer__discount', content: `-83%`, method: 'textContent',},
];

//fill out our HTML content
contentArray.forEach(({className, content, method}) => {
  setCurrentElementValueHandler(className, content, method);
});

//set the font size depending on the length of the text
const title = document.querySelector('.title');
const MAXIMUM_TITLE_LENGTH_BEFORE_HYPHENATION = 35;
title.textContent.length >= MAXIMUM_TITLE_LENGTH_BEFORE_HYPHENATION
  ? title.classList.add("title__size")
  : title.classList.remove("title__size");

//get elements that change when the active element changes in the block "offers"
const offer__item1 = document.querySelector('.offer__item1');
const offer__item2 = document.querySelector('.offer__item2');
const sending__link = document.querySelector('.sending__link');
const offer__rectangle1 = document.querySelector('.offer__rectangle1');
const offer__rectangle2 = document.querySelector('.offer__rectangle2');

//switch the active sentence in the block "offers"
const switchActiveOfferItem = (event) => {
  const elementClass = event.currentTarget.className;

  if (elementClass.includes('offer__item1')) {
    offer__item1.classList.add('active');
    offer__rectangle1.classList.add('active__rectangle');
    offer__item2.classList.remove('active');
    offer__rectangle2.classList.remove('active__rectangle');
    sending__link.href = "https://apple.com/";
  }

  if (elementClass.includes('offer__item2')) {
    offer__item2.classList.add('active');
    offer__rectangle2.classList.add('active__rectangle');
    offer__item1.classList.remove('active');
    offer__rectangle1.classList.remove('active__rectangle');
    sending__link.href = "https://google.com/";
  }
};

//
offer__item1.addEventListener('click', switchActiveOfferItem);
offer__item2.addEventListener('click', switchActiveOfferItem);
