/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: expected \\\"}\\\".\\n   ╷\\n78 │     width: 100%;  !important;\\r\\n   │                   ^\\n   ╵\\n  src\\\\scss\\\\main.scss 78:19  root stylesheet\\n    at processResult (D:\\\\test\\\\fks-russia\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:598:19)\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:692:5\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:399:11\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:251:18\\n    at context.callback (D:\\\\test\\\\fks-russia\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:124:13)\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:54:7\\n    at Function.call$2 (D:\\\\test\\\\fks-russia\\\\node_modules\\\\sass\\\\sass.dart.js:91729:16)\\n    at _render_closure1.call$2 (D:\\\\test\\\\fks-russia\\\\node_modules\\\\sass\\\\sass.dart.js:80373:12)\\n    at _RootZone.runBinary$3$3 (D:\\\\test\\\\fks-russia\\\\node_modules\\\\sass\\\\sass.dart.js:27269:18)\\n    at _FutureListener.handleError$1 (D:\\\\test\\\\fks-russia\\\\node_modules\\\\sass\\\\sass.dart.js:25797:19)\");\n\n//# sourceURL=webpack://fks-russia/./src/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack://fks-russia/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;