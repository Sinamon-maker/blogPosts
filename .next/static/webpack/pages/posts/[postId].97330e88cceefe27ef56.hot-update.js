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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/mainLayout */ \"./components/mainLayout.tsx\");\n/* harmony import */ var _components_listData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/listData */ \"./components/listData.tsx\");\n/* harmony import */ var _redux_actions_postAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/postAction */ \"./redux/actions/postAction.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/pages/posts/[postId].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var serverPost = _ref.post;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),\n      query = _useRouter.query;\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {\n    return state.postReducer;\n  }),\n      post = _useSelector.post;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    return _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!serverPost) dispatch((0,_redux_actions_postAction__WEBPACK_IMPORTED_MODULE_6__.getPost)(query.postId));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 12\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          children: post.body\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 12\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_listData__WEBPACK_IMPORTED_MODULE_5__.default, {\n          children: post.comments.map(function (comment) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"li\", {\n              children: comment.body\n            }, comment.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 16\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 10\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 8\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Post, \"oHB8l563fNrqV2LNbaOTfWL/K6g=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector];\n});\n\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBLElBQU1PLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQXJCQyxJQUFxQjs7QUFDbEMsbUJBQWtCVCxzREFBUyxFQUEzQjtBQUFBLE1BQVFVLEtBQVIsY0FBUUEsS0FBUjs7QUFDRixNQUFNQyxRQUFRLEdBQUdOLHdEQUFXLEVBQTVCOztBQUNBLHFCQUFpQkMsd0RBQVcsQ0FBQyxVQUFDTSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxXQUFqQjtBQUFBLEdBQUQsQ0FBNUI7QUFBQSxNQUFRSixJQUFSLGdCQUFRQSxJQUFSOztBQUdBUixFQUFBQSxnREFBUyx5U0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1IsZ0JBQUksQ0FBQ08sVUFBTCxFQUFpQkcsUUFBUSxDQUFDUCxrRUFBTyxDQUFDTSxLQUFLLENBQUNJLE1BQVAsQ0FBUixDQUFSOztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFFTixFQUZNLENBQVQ7QUFLRyxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDJEQUFEO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLTCxJQUFJLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQU1OLElBQUksQ0FBQ087QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UsOERBQUMseURBQUQ7QUFBQSxvQkFDR1AsSUFBSSxDQUFDUSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsT0FBRDtBQUFBLGdDQUNqQjtBQUFBLHdCQUFzQkEsT0FBTyxDQUFDSDtBQUE5QixlQUFTRyxPQUFPLENBQUNDLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGlCO0FBQUEsV0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWVGLENBMUJEOztHQUFNYjtVQUNjUCxvREFDSEssc0RBQ0FDOzs7S0FIWEM7O0FBNEJOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1twb3N0SWRdLnRzeD8wMzAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21haW5MYXlvdXRcIjtcbmltcG9ydCBMaXN0RGF0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9saXN0RGF0YVwiO1xuXG5pbXBvcnQge2dldFBvc3R9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvcG9zdEFjdGlvbidcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuXG5cbmNvbnN0IFBvc3QgPSAoe3Bvc3Q6c2VydmVyUG9zdH0pID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG5jb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbmNvbnN0IHsgcG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0UmVkdWNlcik7XG5cblxudXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgaWYgKCFzZXJ2ZXJQb3N0KSBkaXNwYXRjaChnZXRQb3N0KHF1ZXJ5LnBvc3RJZCkpO1xufSwgW10pO1xuXG5cbiAgIHJldHVybiAoXG4gICAgIDw+XG4gICAgICAgPE1haW5MYXlvdXQ+XG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgPGRpdj57cG9zdC5ib2R5fTwvZGl2PlxuICAgICAgICAgICA8TGlzdERhdGE+XG4gICAgICAgICAgICAge3Bvc3QuY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXG4gICAgICAgICAgICAgICA8bGkga2V5PXtjb21tZW50LmlkfT57Y29tbWVudC5ib2R5fTwvbGk+XG4gICAgICAgICAgICAgKSl9XG4gICAgICAgICAgIDwvTGlzdERhdGE+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICA8L01haW5MYXlvdXQ+XG4gICAgIDwvPlxuICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICAoc3RvcmUpID0+XG4gICBhc3luYyAgKHsgcmVxLCByZXMsIHBhcmFtcywgLi4uZXRjIH0pID0+IHtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cy8ke3BhcmFtcy5wb3N0SWR9P19lbWJlZD1jb21tZW50c2ApXG5cbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgdHlwZTogXCJHRVRfUE9TVFwiLFxuICBwYXlsb2FkOiByZXNwb25zZS5kYXRhLFxufSk7XG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiVElDS1wiLCBwYXlsb2FkOiBcIndhcyBzZXQgaW4gb3RoZXIgcGFnZTJcIiB9KTtcbiAgICB9XG4pO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIk1haW5MYXlvdXQiLCJMaXN0RGF0YSIsImdldFBvc3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiUG9zdCIsInNlcnZlclBvc3QiLCJwb3N0IiwicXVlcnkiLCJkaXNwYXRjaCIsInN0YXRlIiwicG9zdFJlZHVjZXIiLCJwb3N0SWQiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[postId].tsx\n");

/***/ })

});