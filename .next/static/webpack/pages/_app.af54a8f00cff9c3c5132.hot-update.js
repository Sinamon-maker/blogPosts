"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeStore\": function() { return /* binding */ initializeStore; },\n/* harmony export */   \"useStore\": function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar store;\n\nfunction initStore(initialState) {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(reducers, initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_4__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.default)));\n}\n\nvar initializeStore = function initializeStore(preloadedState) {\n  var _store2;\n\n  var _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (false) {} // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  _s();\n\n  var store = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    return initializeStore(initialState);\n  }, [initialState]);\n  return store;\n}\n\n_s(useStore, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSUssS0FBSjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxZQUFuQixFQUFpQztBQUMvQixTQUFPTixrREFBVyxDQUNoQk8sUUFEZ0IsRUFFaEJELFlBRmdCLEVBR2hCSiw2RUFBbUIsQ0FBQ0Qsc0RBQWUsQ0FBQ0UsZ0RBQUQsQ0FBaEIsQ0FISCxDQUFsQjtBQUtEOztBQUVNLElBQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsY0FBRCxFQUFvQjtBQUFBOztBQUNqRCxNQUFJQyxNQUFNLGNBQUdOLEtBQUgsNkNBQVlDLFNBQVMsQ0FBQ0ksY0FBRCxDQUEvQixDQURpRCxDQUdqRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUlMLEtBQXRCLEVBQTZCO0FBQzNCTSxJQUFBQSxNQUFNLEdBQUdMLFNBQVMsaUNBQ2JELEtBQUssQ0FBQ08sUUFBTixFQURhLEdBRWJGLGNBRmEsRUFBbEIsQ0FEMkIsQ0FLM0I7O0FBQ0FMLElBQUFBLEtBQUssR0FBR1EsU0FBUjtBQUNELEdBWmdELENBY2pEOzs7QUFDQSxhQUFtQyxFQWZjLENBZ0JqRDs7QUFDQSxNQUFJLENBQUNSLEtBQUwsRUFBWUEsS0FBSyxHQUFHTSxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBcEJNO0FBc0JBLFNBQVNHLFFBQVQsQ0FBa0JQLFlBQWxCLEVBQWdDO0FBQUE7O0FBQ3JDLE1BQU1GLEtBQUssR0FBR0wsOENBQU8sQ0FBQztBQUFBLFdBQU1TLGVBQWUsQ0FBQ0YsWUFBRCxDQUFyQjtBQUFBLEdBQUQsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9GLEtBQVA7QUFDRDs7R0FIZVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc3RvcmUudHM/ODg0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuXG5sZXQgc3RvcmU7XG5cbmZ1bmN0aW9uIGluaXRTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXJzLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxuICApO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpO1xuXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgIH0pO1xuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXG4gICAgc3RvcmUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIF9zdG9yZTtcbiAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmU7XG5cbiAgcmV0dXJuIF9zdG9yZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwidGh1bmtNaWRkbGV3YXJlIiwic3RvcmUiLCJpbml0U3RvcmUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImluaXRpYWxpemVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ })

});