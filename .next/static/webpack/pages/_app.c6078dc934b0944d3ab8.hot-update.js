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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle)([\"*{box-sizing:border-box;}body{margin:0;padding:0;box-sizing:border-box;background-color:red;}html{font-size:62.5%;}a{text-decoration:none;}*&:focus{outline:none;}\"]);\n_c = GlobalStyle;\nvar theme = {\n  colors: {\n    primary: \"#0070f3\"\n  }\n};\n\nfunction App(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var store = useStore(pageProps.initialReduxState);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n      store: store,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        theme: theme,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n} // const makeStore = () => store\n// const wrapper = createWrapper(makeStore)\n\n\n_s(App, \"lacCqcEtsbxX3PAG/fPlTuRiPg0=\", true);\n\n_c2 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c2, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7O0FBRUEsSUFBTUcsV0FBVyxHQUFHRixvRUFBSCx3S0FBakI7S0FBTUU7QUFxQk4sSUFBTUMsS0FBSyxHQUFHO0FBQ1pDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxPQUFPLEVBQUU7QUFESDtBQURJLENBQWQ7O0FBT0EsU0FBU0MsR0FBVCxPQUF1QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDcEMsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNGLFNBQVMsQ0FBQ0csaUJBQVgsQ0FBdEI7QUFDRCxzQkFDRTtBQUFBLDJCQUFFLDhEQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFJRixLQUFuQjtBQUFBLDhCQUVBLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBR0EsOERBQUMsNERBQUQ7QUFBZSxhQUFLLEVBQUVOLEtBQXRCO0FBQUEsK0JBQ0UsOERBQUMsU0FBRCxvQkFBZUssU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFGLG1CQURGO0FBVUQsRUFFRDtBQUNBOzs7R0FmU0Y7O01BQUFBO0FBaUJULCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzcyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSwgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqe1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIComOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IHRoZW1lID0ge1xuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5OiBcIiMwMDcwZjNcIixcbiAgfSxcblxufTtcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDw+PFByb3ZpZGVyIHN0b3JlID0ge3N0b3JlfT5cblxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmVcbi8vIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSlcblxuZXhwb3J0IGRlZmF1bHQgQXBwIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJUaGVtZVByb3ZpZGVyIiwiR2xvYmFsU3R5bGUiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwiaW5pdGlhbFJlZHV4U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});