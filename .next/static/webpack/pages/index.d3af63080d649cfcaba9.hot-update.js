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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainLayout */ \"./components/mainLayout.tsx\");\n/* harmony import */ var _components_linkPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/linkPost */ \"./components/linkPost.tsx\");\n/* harmony import */ var _components_listData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/listData */ \"./components/listData.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_postAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/postAction */ \"./redux/actions/postAction.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(); // const {posts} = useSelector(state => state.postReducer) ?? []\n\n  var posts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    return _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            dispatch((0,_redux_actions_postAction__WEBPACK_IMPORTED_MODULE_7__.getPosts)());\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Title, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_listData__WEBPACK_IMPORTED_MODULE_5__.default, {\n          children: posts.map(function (post) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_linkPost__WEBPACK_IMPORTED_MODULE_4__.default, {\n              postTitle: post.title,\n              postId: post.id,\n              postBody: post.body\n            }, post.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 13\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Index, \"OY104VcbqMdPekHix/Md0O/5QGU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.h1.withConfig({\n  displayName: \"pages__Title\",\n  componentId: \"sc-1j514r3-0\"\n})([\"color:white;\"]);\n_c2 = Title;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c2, \"Title\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBS0EsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVsQixNQUFNQyxRQUFRLEdBQUdILHdEQUFXLEVBQTVCLENBRmtCLENBR25COztBQUNELE1BQU1JLEtBQUssR0FDWFQsZ0RBQVMseVNBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQUSxZQUFBQSxRQUFRLENBQUNGLG1FQUFRLEVBQVQsQ0FBUjs7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBRVAsRUFGTyxDQURUO0FBS0Usc0JBQ0U7QUFBQSwyQkFDQSw4REFBQywyREFBRDtBQUFBLDZCQUlFLDhEQUFDLEtBQUQ7QUFBQSwrQkFDRSw4REFBQyx5REFBRDtBQUFBLG9CQUNHRyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsZ0NBQ1QsOERBQUMseURBQUQ7QUFFRSx1QkFBUyxFQUFFQSxJQUFJLENBQUNDLEtBRmxCO0FBR0Usb0JBQU0sRUFBRUQsSUFBSSxDQUFDRSxFQUhmO0FBSUUsc0JBQVEsRUFBRUYsSUFBSSxDQUFDRztBQUpqQixlQUNPSCxJQUFJLENBQUNFLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUztBQUFBLFdBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQXFCRCxDQTlCRDs7R0FBTU47VUFFYUY7OztLQUZiRTtBQWdDTiwrREFBZUEsS0FBZjtBQUtBLElBQU1RLEtBQUssR0FBR1gsb0VBQUg7QUFBQTtBQUFBO0FBQUEsb0JBQVg7TUFBTVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL21haW5MYXlvdXRcIjtcbmltcG9ydCBMaW5rUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2xpbmtQb3N0J1xuaW1wb3J0IExpc3REYXRhIGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdERhdGEnXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtnZXRQb3N0c30gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9wb3N0QWN0aW9uJ1xuXG5cblxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAvLyBjb25zdCB7cG9zdHN9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdFJlZHVjZXIpID8/IFtdXG5jb25zdCBwb3N0cyA9IFxudXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgIGRpc3BhdGNoKGdldFBvc3RzKCkpO1xufSxbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxNYWluTGF5b3V0PlxuXG5cblxuICAgICAgPFRpdGxlPlxuICAgICAgICA8TGlzdERhdGE+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPExpbmtQb3N0XG4gICAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgICAgcG9zdFRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuaWR9XG4gICAgICAgICAgICAgIHBvc3RCb2R5PXtwb3N0LmJvZHl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0xpc3REYXRhPlxuICAgICAgPC9UaXRsZT5cbiAgICA8L01haW5MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6IHdoaXRlO1xuYDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiTWFpbkxheW91dCIsIkxpbmtQb3N0IiwiTGlzdERhdGEiLCJzdHlsZWQiLCJ1c2VEaXNwYXRjaCIsImdldFBvc3RzIiwiSW5kZXgiLCJkaXNwYXRjaCIsInBvc3RzIiwibWFwIiwicG9zdCIsInRpdGxlIiwiaWQiLCJib2R5IiwiVGl0bGUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});