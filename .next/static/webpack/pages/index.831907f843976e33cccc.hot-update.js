"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainLayout */ \"./components/mainLayout.tsx\");\n/* harmony import */ var _components_linkPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/linkPost */ \"./components/linkPost.tsx\");\n/* harmony import */ var _components_listData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/listData */ \"./components/listData.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_postAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/postAction */ \"./redux/actions/postAction.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var ttt = _ref.ttt;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {\n    return state.postReducer;\n  }),\n      posts = _useSelector.posts;\n\n  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {\n    return state.postReducer;\n  }),\n      message = _useSelector2.message;\n\n  console.log('mess', message);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    return _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            dispatch((0,_redux_actions_postAction__WEBPACK_IMPORTED_MODULE_7__.getPosts)());\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_listData__WEBPACK_IMPORTED_MODULE_5__.default, {\n        children: posts.map(function (post) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_linkPost__WEBPACK_IMPORTED_MODULE_4__.default, {\n            postTitle: post.title,\n            postId: post.id,\n            postBody: post.body\n          }, post.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Index, \"d5gFCy5GIgXXy63f8lKlpo4pZdA=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];\n});\n\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBS0EsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBVztBQUFBOztBQUFBLE1BQVRDLEdBQVMsUUFBVEEsR0FBUztBQUV2QixNQUFNQyxRQUFRLEdBQUdMLHdEQUFXLEVBQTVCOztBQUNBLHFCQUFnQkMsd0RBQVcsQ0FBQyxVQUFDSyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxXQUFqQjtBQUFBLEdBQUQsQ0FBM0I7QUFBQSxNQUFPQyxLQUFQLGdCQUFPQSxLQUFQOztBQUNDLHNCQUFvQlAsd0RBQVcsQ0FBQyxVQUFDSyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxXQUFqQjtBQUFBLEdBQUQsQ0FBL0I7QUFBQSxNQUFRRSxPQUFSLGlCQUFRQSxPQUFSOztBQUVEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CRixPQUFuQjtBQUNGYixFQUFBQSxnREFBUyx5U0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BTLFlBQUFBLFFBQVEsQ0FBQ0gsbUVBQVEsRUFBVCxDQUFSOztBQURPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFFUCxFQUZPLENBQVQ7QUFJRSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDJEQUFEO0FBQUEsNkJBRUksOERBQUMseURBQUQ7QUFBQSxrQkFDR00sS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDhCQUNULDhEQUFDLHlEQUFEO0FBRUUscUJBQVMsRUFBRUEsSUFBSSxDQUFDQyxLQUZsQjtBQUdFLGtCQUFNLEVBQUVELElBQUksQ0FBQ0UsRUFIZjtBQUlFLG9CQUFRLEVBQUVGLElBQUksQ0FBQ0c7QUFKakIsYUFDT0gsSUFBSSxDQUFDRSxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWtCRCxDQTdCRDs7R0FBTVo7VUFFYUgsc0RBQ0RDLHNEQUNLQTs7O0tBSmpCRTs7QUErQk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpbkxheW91dFwiO1xuaW1wb3J0IExpbmtQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlua1Bvc3QnXG5pbXBvcnQgTGlzdERhdGEgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0RGF0YSdcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2dldFBvc3RzfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3Bvc3RBY3Rpb24nO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuXG5cbmNvbnN0IEluZGV4ID0gKHt0dHR9KSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IHtwb3N0c30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3RSZWR1Y2VyKTtcbiAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0UmVkdWNlcik7XG5cbiAgY29uc29sZS5sb2coJ21lc3MnLG1lc3NhZ2UpO1xudXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgIGRpc3BhdGNoKGdldFBvc3RzKCkpO1xufSxbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1haW5MYXlvdXQ+XG5cbiAgICAgICAgICA8TGlzdERhdGE+XG4gICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rUG9zdFxuICAgICAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgICAgICBwb3N0VGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0LmlkfVxuICAgICAgICAgICAgICAgIHBvc3RCb2R5PXtwb3N0LmJvZHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0xpc3REYXRhPlxuXG4gICAgICA8L01haW5MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXG4gIChzdG9yZSkgPT5cbiAgICAoeyByZXEsIHJlcywgLi4uZXRjIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIjIuIFBhZ2UuZ2V0U2VydmVyU2lkZVByb3BzIHVzZXMgdGhlIHN0b3JlIHRvIGRpc3BhdGNoIHRoaW5nc1wiXG4gICAgICApO1xuICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBcIlRJQ0tcIiwgcGF5bG9hZDogXCJ3YXMgc2V0IGluIG90aGVyIHBhZ2VcIiB9KTtcbiAgICB9XG4pO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJNYWluTGF5b3V0IiwiTGlua1Bvc3QiLCJMaXN0RGF0YSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJnZXRQb3N0cyIsIkluZGV4IiwidHR0IiwiZGlzcGF0Y2giLCJzdGF0ZSIsInBvc3RSZWR1Y2VyIiwicG9zdHMiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImlkIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});