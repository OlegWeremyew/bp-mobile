/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localizations_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizations/index */ \"./src/assets/localizations/index.js\");\n\r\n\r\n//a function that determines the language of the user's page\r\nconst getUserLanguage = () => {\r\n\r\n  let searchParamLanguageValue = \"\";\r\n  const RIGHT_SEARCH_PARAM_LENGTH = 8;\r\n\r\n  //get the value of the query string\r\n  const searchParam = window.location.search.toLowerCase();\r\n\r\n  //query string check\r\n  if (searchParam.length === RIGHT_SEARCH_PARAM_LENGTH && searchParam.slice(0, 6) === \"?lang=\") {\r\n    searchParamLanguageValue = searchParam.slice(6, 8);\r\n  }\r\n\r\n  //get the user's system language\r\n  const userSystemLanguage = window.navigator\r\n    ? (window.navigator.language\r\n      || window.navigator.systemLanguage\r\n      || window.navigator.userLanguage)\r\n    : \"en\";\r\n\r\n  switch (searchParamLanguageValue || userSystemLanguage) {\r\n    case \"es\" :\r\n      return _localizations_index__WEBPACK_IMPORTED_MODULE_0__.es\r\n    case \"fr\" :\r\n      return _localizations_index__WEBPACK_IMPORTED_MODULE_0__.fr\r\n    case \"ja\" :\r\n      return _localizations_index__WEBPACK_IMPORTED_MODULE_0__.ja\r\n    case \"nl\" :\r\n      return _localizations_index__WEBPACK_IMPORTED_MODULE_0__.nl\r\n    case \"ru\" :\r\n      return _localizations_index__WEBPACK_IMPORTED_MODULE_0__.ru\r\n    case \"zh\" :\r\n      return _localizations_index__WEBPACK_IMPORTED_MODULE_0__.zh\r\n    default:\r\n      return _localizations_index__WEBPACK_IMPORTED_MODULE_0__.en\r\n  }\r\n};\r\n\r\n//get content according to the user's language settings\r\nconst mainContent = getUserLanguage();\r\n\r\n\r\n\r\n//get all tags include data-attribute \"data-content\"\r\nconst dataAttributes = document.querySelectorAll(`[data-content]`);\r\n\r\n//set the tag value depending on its data attribute value\r\n//use loop \"for\" instead of \".forEach()\" array method because it is faster\r\nfor (let i = 0; i < dataAttributes.length; i += 1) {\r\n  dataAttributes[i].innerHTML = mainContent[dataAttributes[i].dataset.content];\r\n}\r\n\r\n\r\n\r\n//set the font size depending on the length of the text\r\nconst title = document.querySelector('.title');\r\nconst MAXIMUM_TITLE_LENGTH_BEFORE_HYPHENATION = 35;\r\ntitle.textContent.length >= MAXIMUM_TITLE_LENGTH_BEFORE_HYPHENATION\r\n  ? title.classList.add(\"title__size\")\r\n  : title.classList.remove(\"title__size\");\r\n\r\n//get elements that change when the active element changes in the block \"offers\"\r\nconst offer__item1 = document.querySelector('.offer__item1');\r\nconst offer__item2 = document.querySelector('.offer__item2');\r\nconst sending__link = document.querySelector('.sending__link');\r\nconst offer__rectangle1 = document.querySelector('.offer__rectangle1');\r\nconst offer__rectangle2 = document.querySelector('.offer__rectangle2');\r\n\r\n//switch the active sentence in the block \"offers\"\r\nconst switchActiveOfferItem = (event) => {\r\n  const elementClass = event.currentTarget.className;\r\n\r\n  if (elementClass.includes('offer__item1')) {\r\n    offer__item1.classList.add('active');\r\n    offer__rectangle1.classList.add('active__rectangle');\r\n    offer__item2.classList.remove('active');\r\n    offer__rectangle2.classList.remove('active__rectangle');\r\n    sending__link.href = \"https://apple.com/\";\r\n  }\r\n\r\n  if (elementClass.includes('offer__item2')) {\r\n    offer__item2.classList.add('active');\r\n    offer__rectangle2.classList.add('active__rectangle');\r\n    offer__item1.classList.remove('active');\r\n    offer__rectangle1.classList.remove('active__rectangle');\r\n    sending__link.href = \"https://google.com/\";\r\n  }\r\n};\r\n\r\noffer__item1.addEventListener('click', switchActiveOfferItem);\r\noffer__item2.addEventListener('click', switchActiveOfferItem);\r\n\n\n//# sourceURL=webpack://bd-mobile/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/localizations/index.js":
/*!*******************************************!*\
  !*** ./src/assets/localizations/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("var _localizations_en_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;\nvar _localizations_es_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;\nvar _localizations_fr_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;\nvar _localizations_ja_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;\nvar _localizations_nl_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;\nvar _localizations_ru_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;\nvar _localizations_zh_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"en\": function() { return /* reexport fake namespace object from non-harmony */ _localizations_en_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_localizations_en_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_localizations_en_json__WEBPACK_IMPORTED_MODULE_0__, 2)); },\n/* harmony export */   \"es\": function() { return /* reexport fake namespace object from non-harmony */ _localizations_es_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_localizations_es_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_localizations_es_json__WEBPACK_IMPORTED_MODULE_1__, 2)); },\n/* harmony export */   \"fr\": function() { return /* reexport fake namespace object from non-harmony */ _localizations_fr_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_localizations_fr_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_localizations_fr_json__WEBPACK_IMPORTED_MODULE_2__, 2)); },\n/* harmony export */   \"ja\": function() { return /* reexport fake namespace object from non-harmony */ _localizations_ja_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_localizations_ja_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_localizations_ja_json__WEBPACK_IMPORTED_MODULE_3__, 2)); },\n/* harmony export */   \"nl\": function() { return /* reexport fake namespace object from non-harmony */ _localizations_nl_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_localizations_nl_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_localizations_nl_json__WEBPACK_IMPORTED_MODULE_4__, 2)); },\n/* harmony export */   \"ru\": function() { return /* reexport fake namespace object from non-harmony */ _localizations_ru_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_localizations_ru_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_localizations_ru_json__WEBPACK_IMPORTED_MODULE_5__, 2)); },\n/* harmony export */   \"zh\": function() { return /* reexport fake namespace object from non-harmony */ _localizations_zh_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (_localizations_zh_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(_localizations_zh_json__WEBPACK_IMPORTED_MODULE_6__, 2)); }\n/* harmony export */ });\n/* harmony import */ var _localizations_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizations/en.json */ \"./src/assets/localizations/en.json\");\n/* harmony import */ var _localizations_es_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localizations/es.json */ \"./src/assets/localizations/es.json\");\n/* harmony import */ var _localizations_fr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localizations/fr.json */ \"./src/assets/localizations/fr.json\");\n/* harmony import */ var _localizations_ja_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localizations/ja.json */ \"./src/assets/localizations/ja.json\");\n/* harmony import */ var _localizations_nl_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localizations/nl.json */ \"./src/assets/localizations/nl.json\");\n/* harmony import */ var _localizations_ru_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localizations/ru.json */ \"./src/assets/localizations/ru.json\");\n/* harmony import */ var _localizations_zh_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../localizations/zh.json */ \"./src/assets/localizations/zh.json\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bd-mobile/./src/assets/localizations/index.js?");

/***/ }),

/***/ "./src/assets/localizations/en.json":
/*!******************************************!*\
  !*** ./src/assets/localizations/en.json ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"Unlimited Access<br>to All Features\":\"Unlimited Access<br>to All Features\",\"Unlimited documents\":\"Unlimited documents\",\"Count mode\":\"Count mode\",\"Text recognition (OCR)\":\"Text recognition (OCR)\",\"Monthly\":\"Monthly\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>per month\",\"3 DAYS FREE\":\"3 DAYS FREE\",\"{{price}}/month\":\"{{price}}/month\",\"Annually\":\"Annually\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>per year\",\"MOST POPULAR\":\"MOST POPULAR\",\"Continue\":\"Continue\",\"Auto-renewable. Cancel anytime.\":\"Auto-renewable. Cancel anytime.\",\"Terms of Use\":\"Terms of Use\",\"Restore\":\"Restore\",\"Privacy Policy\":\"Privacy Policy\"}');\n\n//# sourceURL=webpack://bd-mobile/./src/assets/localizations/en.json?");

/***/ }),

/***/ "./src/assets/localizations/es.json":
/*!******************************************!*\
  !*** ./src/assets/localizations/es.json ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"Unlimited Access<br>to All Features\":\"Acceso ilimitado<br>a todas las funciones\",\"Unlimited documents\":\"Documentos ilimitados\",\"Count mode\":\"Modo de recuento\",\"Text recognition (OCR)\":\"Reconocimiento de texto (OCR)\",\"Monthly\":\"Mensual\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>por mes\",\"3 DAYS FREE\":\"3 DÍAS GRATIS\",\"{{price}}/month\":\"{{price}}/mes\",\"Annually\":\"Anual\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>por año\",\"MOST POPULAR\":\"LO MÁS PEDIDO\",\"Continue\":\"Continuar\",\"Auto-renewable. Cancel anytime.\":\"Renovable automáticamente. Cancela cuando quieras.\",\"Terms of Use\":\"Términos de uso\",\"Restore\":\"Restablecer\",\"Privacy Policy\":\"Política de privacidad\"}');\n\n//# sourceURL=webpack://bd-mobile/./src/assets/localizations/es.json?");

/***/ }),

/***/ "./src/assets/localizations/fr.json":
/*!******************************************!*\
  !*** ./src/assets/localizations/fr.json ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"Unlimited Access<br>to All Features\":\"Accès illimité<br>à toutes les fonctionnalités\",\"Unlimited documents\":\"Documents illimités\",\"Count mode\":\"Mode décompte\",\"Text recognition (OCR)\":\"Reconnaissance de texte (OCR)\",\"Monthly\":\"Tous les mois\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>par mois\",\"3 DAYS FREE\":\"3 JOURS GRATUITS\",\"{{price}}/month\":\"{{price}}/mois\",\"Annually\":\"Tous les ans\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>par an\",\"MOST POPULAR\":\"LE PLUS POPULAIRE\",\"Continue\":\"Continuer\",\"Auto-renewable. Cancel anytime.\":\"Renouvelable automatiquement. Annulez à tout moment.\",\"Terms of Use\":\"Conditions d\\'utilisation\",\"Restore\":\"Restaurer\",\"Privacy Policy\":\"Politique de confidentialité\"}');\n\n//# sourceURL=webpack://bd-mobile/./src/assets/localizations/fr.json?");

/***/ }),

/***/ "./src/assets/localizations/ja.json":
/*!******************************************!*\
  !*** ./src/assets/localizations/ja.json ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"Unlimited Access<br>to All Features\":\"全ての機能へ<br>無制限アクセス\",\"Unlimited documents\":\"無制限のドキュメント\",\"Count mode\":\"カウントモード\",\"Text recognition (OCR)\":\"テキスト認識 (OCR)\",\"Monthly\":\"月次\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>/月\",\"3 DAYS FREE\":\"3日間無料\",\"{{price}}/month\":\"{{price}}/か月\",\"Annually\":\"年次\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>/年\",\"MOST POPULAR\":\"一番人気\",\"Continue\":\"続行する\",\"Auto-renewable. Cancel anytime.\":\"自動更新可能。いつでもキャンセル可能。\",\"Terms of Use\":\"利用規約\",\"Restore\":\"復元する\",\"Privacy Policy\":\"プライバシーポリシー\"}');\n\n//# sourceURL=webpack://bd-mobile/./src/assets/localizations/ja.json?");

/***/ }),

/***/ "./src/assets/localizations/nl.json":
/*!******************************************!*\
  !*** ./src/assets/localizations/nl.json ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"Unlimited Access<br>to All Features\":\"Onbeperkte toegang<br>tot alle functies\",\"Unlimited documents\":\"Onbeperkt aantal documenten\",\"Count mode\":\"Aantal modus\",\"Text recognition (OCR)\":\"Gratis tekstherkenning (OCR)\",\"Monthly\":\"Maandelijks\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>per maand\",\"3 DAYS FREE\":\"3 DAGEN GRATIS\",\"{{price}}/month\":\"{{price}}/maand\",\"Annually\":\"Jaarlijks\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>per jaar\",\"MOST POPULAR\":\"MEEST POPULAIR\",\"Continue\":\"Doorgaan\",\"Auto-renewable. Cancel anytime.\":\"Automatisch verlengbaar. Altijd annuleren.\",\"Terms of Use\":\"Gebruiksvoorwaarden\",\"Restore\":\"Herstellen\",\"Privacy Policy\":\"Privacybeleid\"}');\n\n//# sourceURL=webpack://bd-mobile/./src/assets/localizations/nl.json?");

/***/ }),

/***/ "./src/assets/localizations/ru.json":
/*!******************************************!*\
  !*** ./src/assets/localizations/ru.json ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"Unlimited Access<br>to All Features\":\"Неограниченный доступ<br>ко всем функциям\",\"Unlimited documents\":\"Любое количество документов\",\"Count mode\":\"Режим «Подсчет»\",\"Text recognition (OCR)\":\"Распознавание текста (OCR)\",\"Monthly\":\"1 месяц\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong><br>в месяц\",\"3 DAYS FREE\":\"3 ДНЯ БЕСПЛАТНО\",\"{{price}}/month\":\"{{price}}/месяц\",\"Annually\":\"1 ГОД\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"<strong>{{price}}</strong><br>в год\",\"MOST POPULAR\":\"ПОПУЛЯРНОЕ\",\"Continue\":\"Продолжить\",\"Auto-renewable. Cancel anytime.\":\"Автопродление. Отмена в любое время.\",\"Terms of Use\":\"Условия использования\",\"Restore\":\"Восстановить\",\"Privacy Policy\":\"Конфиденциальность\"}');\n\n//# sourceURL=webpack://bd-mobile/./src/assets/localizations/ru.json?");

/***/ }),

/***/ "./src/assets/localizations/zh.json":
/*!******************************************!*\
  !*** ./src/assets/localizations/zh.json ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"Unlimited Access<br>to All Features\":\"无限制使用<br>所有功能\",\"Unlimited documents\":\"文档无限制\",\"Count mode\":\"计数模式\",\"Text recognition (OCR)\":\"文本识别（OCR）\",\"Monthly\":\"每月\",\"<strong>{{price}}</strong><br>per month\":\"<strong>{{price}}</strong>每月<br>\",\"3 DAYS FREE\":\"3日免费\",\"{{price}}/month\":\"{{price}}/月\",\"Annually\":\"包年\",\"-83%\":\"-83%\",\"<strong>{{price}}</strong><br>per year\":\"每年<strong>{{price}}</strong><br>\",\"MOST POPULAR\":\"最热门\",\"Continue\":\"继续\",\"Auto-renewable. Cancel anytime.\":\"自动续订。可随时取消。\",\"Terms of Use\":\"使用条款\",\"Restore\":\"恢复\",\"Privacy Policy\":\"隐私政策\"}');\n\n//# sourceURL=webpack://bd-mobile/./src/assets/localizations/zh.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/app.js");
/******/ 	
/******/ })()
;