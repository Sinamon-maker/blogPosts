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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/mainLayout */ \"./components/mainLayout.tsx\");\n/* harmony import */ var _styles_postStyled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/postStyled */ \"./styles/postStyled.tsx\");\n/* harmony import */ var _redux_actions_postAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/postAction */ \"./redux/actions/postAction.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/pages/posts/[postId].tsx\",\n    _templateObject,\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ListComment = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.ul(_templateObject || (_templateObject = (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  text-decoration: none;\\n  margin-top: 1.5rem;\\n  li {\\n    margin-top: 1.5rem;\\n    padding-left: 1rem;\\n    font-size: 1.6rem;\\n  }\\n  li::before{\\n    content:'-'\\n  }\\n\"])));\n_c = ListComment;\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var serverPost = _ref.post;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),\n      query = _useRouter.query;\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {\n    return state.postReducer;\n  }),\n      post = _useSelector.post;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!serverPost) dispatch((0,_redux_actions_postAction__WEBPACK_IMPORTED_MODULE_5__.getPost)(query.postId));\n  }, [serverPost, dispatch, query.postId]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles_postStyled__WEBPACK_IMPORTED_MODULE_4__.default, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            children: post.body\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), \"Comments:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(ListComment, {\n          children: post.comments.map(function (comment) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n              children: comment.body\n            }, comment.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Post, \"oHB8l563fNrqV2LNbaOTfWL/K6g=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];\n});\n\n_c2 = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ListComment\");\n$RefreshReg$(_c2, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBR0E7OztBQUVBLElBQU1RLFdBQVcsR0FBR0QseURBQUgsK1dBQWpCO0tBQU1DOztBQWNOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXlDO0FBQUE7O0FBQUEsTUFBaENDLFVBQWdDLFFBQXRDQyxJQUFzQzs7QUFDcEQsbUJBQWtCWixzREFBUyxFQUEzQjtBQUFBLE1BQVFhLEtBQVIsY0FBUUEsS0FBUjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdULHdEQUFXLEVBQTVCOztBQUNBLHFCQUFpQkMsd0RBQVcsQ0FBQyxVQUFDUyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxXQUFqQjtBQUFBLEdBQUQsQ0FBNUI7QUFBQSxNQUFRSixJQUFSLGdCQUFRQSxJQUFSOztBQUVBWCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNVLFVBQUwsRUFBaUJHLFFBQVEsQ0FBQ1Ysa0VBQU8sQ0FBQ1MsS0FBSyxDQUFDSSxNQUFQLENBQVIsQ0FBUjtBQUNsQixHQUZRLEVBRU4sQ0FBQ04sVUFBRCxFQUFhRyxRQUFiLEVBQXVCRCxLQUFLLENBQUNJLE1BQTdCLENBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsMkRBQUQ7QUFBQSw2QkFDRTtBQUFBLGdDQUNFLDhEQUFDLHVEQUFEO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0wsSUFBSSxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHNCQUFNTixJQUFJLENBQUNPO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsNEJBTUUsOERBQUMsV0FBRDtBQUFBLG9CQUVHUCxJQUFJLENBQUNRLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxPQUFEO0FBQUEsZ0NBQ2pCO0FBQUEsd0JBQXNCQSxPQUFPLENBQUNIO0FBQTlCLGVBQVNHLE9BQU8sQ0FBQ0MsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEaUI7QUFBQSxXQUFsQjtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0JELENBN0JEOztHQUFNYjtVQUNjVixvREFDREssc0RBQ0FDOzs7TUFIYkk7O0FBK0JOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1twb3N0SWRdLnRzeD8wMzAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWFpbkxheW91dCc7XG5pbXBvcnQgTGlzdERhdGEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saXN0RGF0YSc7XG5pbXBvcnQgUG9zdFN0eWxlZCBmcm9tICcuLi8uLi9zdHlsZXMvcG9zdFN0eWxlZCc7XG5pbXBvcnQgeyBnZXRQb3N0IH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9wb3N0QWN0aW9uJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQge0Jsb2dQb3N0fSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Bvc3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTGlzdENvbW1lbnQgPSBzdHlsZWQudWxgXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBsaSB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBsaTo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6Jy0nXG4gIH1cbmA7XG5cblxuY29uc3QgUG9zdCA9ICh7IHBvc3Q6IHNlcnZlclBvc3QgfTogQmxvZ1Bvc3QpOnZvaWQgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdFJlZHVjZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZXJ2ZXJQb3N0KSBkaXNwYXRjaChnZXRQb3N0KHF1ZXJ5LnBvc3RJZCkpO1xuICB9LCBbc2VydmVyUG9zdCwgZGlzcGF0Y2gsIHF1ZXJ5LnBvc3RJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNYWluTGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxQb3N0U3R5bGVkPlxuICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8ZGl2Pntwb3N0LmJvZHl9PC9kaXY+XG4gICAgICAgICAgPC9Qb3N0U3R5bGVkPlxuICAgICAgICAgIENvbW1lbnRzOlxuICAgICAgICAgIDxMaXN0Q29tbWVudD5cblxuICAgICAgICAgICAge3Bvc3QuY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2NvbW1lbnQuaWR9Pntjb21tZW50LmJvZHl9PC9saT5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPC9MaXN0Q29tbWVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01haW5MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcbiAgKHN0b3JlKSA9PlxuICAgIGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLyR7cGFyYW1zLnBvc3RJZH0/X2VtYmVkPWNvbW1lbnRzYFxuICAgICAgKTtcblxuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnR0VUX1BPU1QnLFxuICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhLFxuICAgICAgfSk7XG4gICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdUSUNLJywgcGF5bG9hZDogJ3dhcyBzZXQgaW4gb3RoZXIgcGFnZTInIH0pO1xuICAgIH1cbik7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiTWFpbkxheW91dCIsIlBvc3RTdHlsZWQiLCJnZXRQb3N0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0eWxlZCIsIkxpc3RDb21tZW50IiwidWwiLCJQb3N0Iiwic2VydmVyUG9zdCIsInBvc3QiLCJxdWVyeSIsImRpc3BhdGNoIiwic3RhdGUiLCJwb3N0UmVkdWNlciIsInBvc3RJZCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[postId].tsx\n");

/***/ })

});