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



//get all tags include data-attribute "data-content"
const dataAttributes = document.querySelectorAll(`[data-content]`);

//set the tag value depending on its data attribute value
//use loop "for" instead of ".forEach()" array method because it is faster
for (let i = 0; i < dataAttributes.length; i += 1) {
  dataAttributes[i].innerHTML = mainContent[dataAttributes[i].dataset.content];
}



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

offer__item1.addEventListener('click', switchActiveOfferItem);
offer__item2.addEventListener('click', switchActiveOfferItem);
