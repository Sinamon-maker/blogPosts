"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[postId]",{

/***/ "./pages/posts/[postId].tsx":
/*!**********************************!*\
  !*** ./pages/posts/[postId].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/mainLayout */ \"./components/mainLayout.tsx\");\n/* harmony import */ var _components_listData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/listData */ \"./components/listData.tsx\");\n/* harmony import */ var _styles_postStyled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/postStyled */ \"./styles/postStyled.js\");\n/* harmony import */ var _redux_actions_postAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/postAction */ \"./redux/actions/postAction.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/pages/posts/[postId].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var serverPost = _ref.post;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),\n      query = _useRouter.query;\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {\n    return state.postReducer;\n  }),\n      post = _useSelector.post;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    return _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!serverPost) dispatch((0,_redux_actions_postAction__WEBPACK_IMPORTED_MODULE_7__.getPost)(query.postId));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_styles_postStyled__WEBPACK_IMPORTED_MODULE_6__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h1\", {\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 12\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            children: post.body\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 12\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 12\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_listData__WEBPACK_IMPORTED_MODULE_5__.default, {\n          children: post.comments.map(function (comment) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"li\", {\n              children: comment.body\n            }, comment.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 16\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 10\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 8\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Post, \"oHB8l563fNrqV2LNbaOTfWL/K6g=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector];\n});\n\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLElBQU1RLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQXJCQyxJQUFxQjs7QUFDbEMsbUJBQWtCVixzREFBUyxFQUEzQjtBQUFBLE1BQVFXLEtBQVIsY0FBUUEsS0FBUjs7QUFDRixNQUFNQyxRQUFRLEdBQUdOLHdEQUFXLEVBQTVCOztBQUNBLHFCQUFpQkMsd0RBQVcsQ0FBQyxVQUFDTSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxXQUFqQjtBQUFBLEdBQUQsQ0FBNUI7QUFBQSxNQUFRSixJQUFSLGdCQUFRQSxJQUFSOztBQUdBVCxFQUFBQSxnREFBUyx5U0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1IsZ0JBQUksQ0FBQ1EsVUFBTCxFQUFpQkcsUUFBUSxDQUFDUCxrRUFBTyxDQUFDTSxLQUFLLENBQUNJLE1BQVAsQ0FBUixDQUFSOztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFFTixFQUZNLENBQVQ7QUFLRyxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDJEQUFEO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRSw4REFBQyx1REFBRDtBQUFBLGtDQUVBO0FBQUEsc0JBQUtMLElBQUksQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBLGVBR0E7QUFBQSxzQkFBTU4sSUFBSSxDQUFDTztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0UsOERBQUMseURBQUQ7QUFBQSxvQkFDR1AsSUFBSSxDQUFDUSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsT0FBRDtBQUFBLGdDQUNqQjtBQUFBLHdCQUFzQkEsT0FBTyxDQUFDSDtBQUE5QixlQUFTRyxPQUFPLENBQUNDLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGlCO0FBQUEsV0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW1CRixDQTlCRDs7R0FBTWI7VUFDY1Isb0RBQ0hNLHNEQUNBQzs7O0tBSFhDOztBQWdDTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bcG9zdElkXS50c3g/MDMwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tYWluTGF5b3V0XCI7XG5pbXBvcnQgTGlzdERhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGlzdERhdGFcIjtcbmltcG9ydCBQb3N0U3R5bGVkIGZyb20gJy4uLy4uL3N0eWxlcy9wb3N0U3R5bGVkJ1xuaW1wb3J0IHtnZXRQb3N0fSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3Bvc3RBY3Rpb24nXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc3RvcmVcIjtcblxuXG5jb25zdCBQb3N0ID0gKHtwb3N0OnNlcnZlclBvc3R9KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5jb25zdCB7IHBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdFJlZHVjZXIpO1xuXG5cbnVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gIGlmICghc2VydmVyUG9zdCkgZGlzcGF0Y2goZ2V0UG9zdChxdWVyeS5wb3N0SWQpKTtcbn0sIFtdKTtcblxuXG4gICByZXR1cm4gKFxuICAgICA8PlxuICAgICAgIDxNYWluTGF5b3V0PlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPFBvc3RTdHlsZWQ+XG5cbiAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgIDxkaXY+e3Bvc3QuYm9keX08L2Rpdj5cbiAgICAgICAgICAgPC9Qb3N0U3R5bGVkPlxuXG4gICAgICAgICAgIDxMaXN0RGF0YT5cbiAgICAgICAgICAgICB7cG9zdC5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgICAgICAgIDxsaSBrZXk9e2NvbW1lbnQuaWR9Pntjb21tZW50LmJvZHl9PC9saT5cbiAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgPC9MaXN0RGF0YT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvTWFpbkxheW91dD5cbiAgICAgPC8+XG4gICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXG4gIChzdG9yZSkgPT5cbiAgIGFzeW5jICAoeyByZXEsIHJlcywgcGFyYW1zLCAuLi5ldGMgfSkgPT4ge1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9ICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLyR7cGFyYW1zLnBvc3RJZH0/X2VtYmVkPWNvbW1lbnRzYClcblxuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICB0eXBlOiBcIkdFVF9QT1NUXCIsXG4gIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEsXG59KTtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJUSUNLXCIsIHBheWxvYWQ6IFwid2FzIHNldCBpbiBvdGhlciBwYWdlMlwiIH0pO1xuICAgIH1cbik7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiTWFpbkxheW91dCIsIkxpc3REYXRhIiwiUG9zdFN0eWxlZCIsImdldFBvc3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiUG9zdCIsInNlcnZlclBvc3QiLCJwb3N0IiwicXVlcnkiLCJkaXNwYXRjaCIsInN0YXRlIiwicG9zdFJlZHVjZXIiLCJwb3N0SWQiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[postId].tsx\n");

/***/ }),

/***/ "./styles/postStyled.js":
/*!******************************!*\
  !*** ./styles/postStyled.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/styles/postStyled.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar postContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({\n  displayName: \"postStyled__postContainer\",\n  componentId: \"sc-18cx4jc-0\"\n})([\"background:#66a3ff;width:70%;margin-bottom:2rem;font-size:1.8rem;font-weight:400;padding:2rem 2rem;\"]);\n\nvar postStyled = function postStyled(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"postContayner\", _objectSpread({}, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 10\n  }, _this);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (postStyled);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcG9zdFN0eWxlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQyxhQUFhLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJHQUFuQjs7QUFTQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsc0JBQU8saUdBQW1CQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztBQUlBLCtEQUFlRCxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9wb3N0U3R5bGVkLmpzPzdkNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgcG9zdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICM2NmEzZmY7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICAgcGFkZGluZzogMnJlbSAycmVtO1xuYDtcblxuY29uc3QgcG9zdFN0eWxlZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPHBvc3RDb250YXluZXIgey4uLnByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RTdHlsZWQ7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwicG9zdENvbnRhaW5lciIsImRpdiIsInBvc3RTdHlsZWQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/postStyled.js\n");

/***/ })

});