"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/new",{

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/mainLayout */ \"./components/mainLayout.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/pages/posts/new.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({\n  displayName: \"new__FormWrapper\",\n  componentId: \"sc-403106-0\"\n})([\"display:flex;justify-content:center;align-items:center;\"]);\n_c = FormWrapper;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.form.withConfig({\n  displayName: \"new__Form\",\n  componentId: \"sc-403106-1\"\n})([\"background:#FFFFF;border-radius:1.5rem;padding:3rem;max-width:500px;width:100%;\"]);\n_c2 = Form;\nvar InputField = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({\n  displayName: \"new__InputField\",\n  componentId: \"sc-403106-2\"\n})([\"display:flex;flex-direction:column;margin-bottom:1.5rem;\"]);\n_c3 = InputField;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.input.withConfig({\n  displayName: \"new__Input\",\n  componentId: \"sc-403106-3\"\n})([\"width:100%;display:flex;border:1px solid;#E5E5E5;border-radius:0.5rem;outline:none;padding:0.5rem 1rem;\"]);\n_c4 = Input;\nvar TextLabel = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.label.withConfig({\n  displayName: \"new__TextLabel\",\n  componentId: \"sc-403106-4\"\n})([\"font-style:normal;font-weight:300;font-size:1.8rem;line-height:2.1rem;margin-bottom:0.5rem;\"]);\n_c5 = TextLabel;\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.textarea.withConfig({\n  displayName: \"new__TextArea\",\n  componentId: \"sc-403106-5\"\n})([\"width:100%;display:block;border:1px solid;#E5E5E5;border-radius:0.5rem;outline:none;padding:0.5rem 1rem;min-height:40rem;resize:none;outline:none;margin-bottom:0.5rem;\"]);\n_c6 = TextArea;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.button.withConfig({\n  displayName: \"new__Button\",\n  componentId: \"sc-403106-6\"\n})([\"color:white;font-size:2rem;border:1px solid;#E5E5E5;border-radius:0.5rem;outline:none;padding:1rem 3rem;outline:none;margin-bottom:0.5rem;background:#66a3ff;\"]);\n_c7 = Button;\n\nvar New = function New() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var onChange = function onChange(e) {\n    var newValue = e.target.value;\n\n    if (e.target.name === 'title') {\n      setTitle(newValue);\n    } else {\n      setText(newValue);\n    }\n  };\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {\n      var _header;\n\n      var res;\n      return _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"https://simple-blog-api.crew.red/posts\", {\n                header: (_header = {\n                  Server: 'nginx/1.15.6',\n                  Date: 'Sun, 20 Jan 2019 21:54:41 GMT',\n                  'Content-Type': \"application/json; charset=utf-8\",\n                  'Transfer-Encoding': 'chunked',\n                  Connection: 'keep-alive',\n                  Vary: 'Accept-Encoding'\n                }, (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, \"Vary\", 'Origin, Accept-Encoding'), (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, 'X-Powered-By', 'Express'), (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, 'Access-Control-Allow-Credentials', true), (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, 'Cache-Control', 'no-cache'), (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, \"Pragma\", 'no-cache'), (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, \"Expires\", -1), (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, 'X-Content-Type-Options', 'nosniff'), (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, \"ETag\", \"W/13d-2xbfYUg7wEYMixZYazvNGg1d7F4\"), (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, 'Strict-Transport-Security', 'max-age=15724800; includeSubDomains'), (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_header, 'Content-Encoding', 'gzip'), _header)\n              }, {\n                title: title,\n                text: text\n              });\n\n            case 3:\n              res = _context.sent;\n\n              if (res.status === 201) {\n                setSended(true);\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(FormWrapper, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Form, {\n          onSubmit: onSubmit,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(InputField, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TextLabel, {\n              children: \"Name of the article\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Input, {\n              type: \"text\",\n              name: \"title\",\n              value: title,\n              onChange: onChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(InputField, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TextLabel, {\n              children: \"Text of the article\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TextArea, {\n              name: \"text\",\n              value: text,\n              onChange: onChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 133,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Button, {\n            type: \"submit\",\n            children: \"Send\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(New, \"g+st1zQta2xVLPBzcLqINbbs1YY=\");\n\n_c8 = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"FormWrapper\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"InputField\");\n$RefreshReg$(_c4, \"Input\");\n$RefreshReg$(_c5, \"TextLabel\");\n$RefreshReg$(_c6, \"TextArea\");\n$RefreshReg$(_c7, \"Button\");\n$RefreshReg$(_c8, \"New\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQWxCO0FBQUEsa0NBQ0UsOERBQUMsVUFBRDtBQUFBLG9DQUNFLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxLQUFEO0FBQU8sa0JBQUksRUFBRyxNQUFkO0FBQXFCLGtCQUFJLEVBQUMsT0FBMUI7QUFBa0MsbUJBQUssRUFBRVYsS0FBekM7QUFBZ0Qsc0JBQVEsRUFBRUk7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSw4REFBQyxVQUFEO0FBQUEsb0NBQ0UsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLFFBQUQ7QUFBVSxrQkFBSSxFQUFDLE1BQWY7QUFBc0IsbUJBQUssRUFBRUYsSUFBN0I7QUFBbUMsc0JBQVEsRUFBRUU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFVRSw4REFBQyxNQUFEO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFvQkQsQ0F0RUQ7O0dBQU1MOztNQUFBQTtBQXdFTiwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9uZXcudHN4PzE2MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWFpbkxheW91dFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OmZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGJhY2tncm91bmQ6ICNGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBwYWRkaW5nOiAzcmVtO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IElucHV0RmllbGQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkOyAjRTVFNUU1O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuYDtcblxuY29uc3QgVGV4dExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBsaW5lLWhlaWdodDogMi4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5gO1xuXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgd2lkdGg6IDEwMCU7XG5kaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQ7ICNFNUU1RTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1pbi1oZWlnaHQ6IDQwcmVtO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuY29sb3I6IHdoaXRlO1xuZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IDFweCBzb2xpZDsgI0U1RTVFNTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG5cbiAgb3V0bGluZTogbm9uZTtcbiAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgIGJhY2tncm91bmQ6ICM2NmEzZmY7XG5gO1xuXG5cbmNvbnN0IE5ldyA9ICgpID0+IHtcblxuY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbmNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbmNvbnN0IG9uQ2hhbmdlID0gKGUpID0+e1xuICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gIGlmIChlLnRhcmdldC5uYW1lID09PSAndGl0bGUnKXtcbiAgICBzZXRUaXRsZShuZXdWYWx1ZSlcbiAgfVxuICBlbHNlIHtcbiAgICBzZXRUZXh0KG5ld1ZhbHVlKVxuICB9XG59XG5cblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0c1wiLFxuICAgIHtoZWFkZXI6e1xuICAgICAgU2VydmVyOiAnbmdpbngvMS4xNS42JyxcbkRhdGU6ICdTdW4sIDIwIEphbiAyMDE5IDIxOjU0OjQxIEdNVCcsXG4nQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4nVHJhbnNmZXItRW5jb2RpbmcnOiAnY2h1bmtlZCcsXG5Db25uZWN0aW9uOiAna2VlcC1hbGl2ZScsXG5WYXJ5OiAnQWNjZXB0LUVuY29kaW5nJyxcblZhcnk6ICdPcmlnaW4sIEFjY2VwdC1FbmNvZGluZycsXG4nWC1Qb3dlcmVkLUJ5JzogJ0V4cHJlc3MnLFxuJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJzogdHJ1ZSxcbidDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcblByYWdtYTogJ25vLWNhY2hlJyxcbkV4cGlyZXM6IC0xLFxuJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnOiAnbm9zbmlmZicsXG5FVGFnOiBcIlcvMTNkLTJ4YmZZVWc3d0VZTWl4WllhenZOR2cxZDdGNFwiLFxuJ1N0cmljdC1UcmFuc3BvcnQtU2VjdXJpdHknOiAnbWF4LWFnZT0xNTcyNDgwMDsgaW5jbHVkZVN1YkRvbWFpbnMnLFxuJ0NvbnRlbnQtRW5jb2RpbmcnOiAnZ3ppcCdcbiAgICB9XG4gIH0sXG4gICAge1xuICAgICAgdGl0bGUsIHRleHRcbiAgICB9KTtcblxuICAgIGlmIChyZXMuc3RhdHVzID09PTIwMSl7XG4gICAgICBzZXRTZW5kZWQodHJ1ZSlcblxuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1haW5MYXlvdXQ+XG4gICAgICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdCA9IHtvblN1Ym1pdH0+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZD5cbiAgICAgICAgICAgICAgPFRleHRMYWJlbD5OYW1lIG9mIHRoZSBhcnRpY2xlPC9UZXh0TGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZD5cbiAgICAgICAgICAgICAgPFRleHRMYWJlbD5UZXh0IG9mIHRoZSBhcnRpY2xlPC9UZXh0TGFiZWw+XG4gICAgICAgICAgICAgIDxUZXh0QXJlYSBuYW1lPVwidGV4dFwiIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XG5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvRm9ybVdyYXBwZXI+XG4gICAgICA8L01haW5MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXc7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNYWluTGF5b3V0Iiwic3R5bGVkIiwiYXhpb3MiLCJGb3JtV3JhcHBlciIsImRpdiIsIkZvcm0iLCJmb3JtIiwiSW5wdXRGaWVsZCIsIklucHV0IiwiaW5wdXQiLCJUZXh0TGFiZWwiLCJsYWJlbCIsIlRleHRBcmVhIiwidGV4dGFyZWEiLCJCdXR0b24iLCJidXR0b24iLCJOZXciLCJ0aXRsZSIsInNldFRpdGxlIiwidGV4dCIsInNldFRleHQiLCJvbkNoYW5nZSIsImUiLCJuZXdWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiaGVhZGVyIiwiU2VydmVyIiwiRGF0ZSIsIkNvbm5lY3Rpb24iLCJWYXJ5IiwicmVzIiwic3RhdHVzIiwic2V0U2VuZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/new.tsx\n");

/***/ })

});