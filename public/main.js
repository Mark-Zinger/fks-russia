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

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nError: Can't resolve 'sim-arrow-left.png' in 'D:\\\\test\\\\fks-russia\\\\src\\\\scss'\\n    at finishWithoutResolve (D:\\\\test\\\\fks-russia\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:293:18)\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:362:15\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:410:5\\n    at eval (eval at create (D:\\\\test\\\\fks-russia\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:410:5\\n    at eval (eval at create (D:\\\\test\\\\fks-russia\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:27:1)\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\DescriptionFilePlugin.js:87:43\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:410:5\\n    at eval (eval at create (D:\\\\test\\\\fks-russia\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:410:5\\n    at processResult (D:\\\\test\\\\fks-russia\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:598:19)\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:692:5\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:399:11\\n    at D:\\\\test\\\\fks-russia\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:251:18\\n    at context.callback (D:\\\\test\\\\fks-russia\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:124:13)\\n    at Object.loader (D:\\\\test\\\\fks-russia\\\\node_modules\\\\css-loader\\\\dist\\\\index.js:155:5)\\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)\");\n\n//# sourceURL=webpack://fks-russia/./src/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://fks-russia/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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