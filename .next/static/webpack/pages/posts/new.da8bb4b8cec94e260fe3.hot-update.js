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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/mainLayout */ \"./components/mainLayout.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/pages/posts/new.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"new__FormWrapper\",\n  componentId: \"sc-403106-0\"\n})([\"display:flex;justify-content:center;align-items:center;\"]);\n_c = FormWrapper;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.form.withConfig({\n  displayName: \"new__Form\",\n  componentId: \"sc-403106-1\"\n})([\"background:#FFFFF;border-radius:1.5rem;padding:3rem;max-width:500px;width:100%;\"]);\n_c2 = Form;\nvar InputField = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"new__InputField\",\n  componentId: \"sc-403106-2\"\n})([\"display:flex;flex-direction:column;margin-bottom:1.5rem;\"]);\n_c3 = InputField;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.input.withConfig({\n  displayName: \"new__Input\",\n  componentId: \"sc-403106-3\"\n})([\"width:100%;display:flex;border:1px solid;#E5E5E5;border-radius:0.5rem;outline:none;padding:0.5rem 1rem;\"]);\n_c4 = Input;\nvar TextLabel = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.label.withConfig({\n  displayName: \"new__TextLabel\",\n  componentId: \"sc-403106-4\"\n})([\"font-style:normal;font-weight:300;font-size:1.8rem;line-height:2.1rem;margin-bottom:0.5rem;\"]);\n_c5 = TextLabel;\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.textarea.withConfig({\n  displayName: \"new__TextArea\",\n  componentId: \"sc-403106-5\"\n})([\"width:100%;display:block;border:1px solid;#E5E5E5;border-radius:0.5rem;outline:none;padding:0.5rem 1rem;min-height:40rem;resize:none;outline:none;margin-bottom:0.5rem;\"]);\n_c6 = TextArea;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.button.withConfig({\n  displayName: \"new__Button\",\n  componentId: \"sc-403106-6\"\n})([\"color:white;font-size:2rem;border:1px solid;#E5E5E5;border-radius:0.5rem;outline:none;padding:1rem 3rem;outline:none;margin-bottom:0.5rem;background:#66a3ff;&:disabled{opacity:0.5;}&:hover{opacity:0.5;}background:#66a3ff;\"]);\n_c7 = Button;\n\nvar New = function New() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var onChange = function onChange(e) {\n    var newValue = e.target.value;\n\n    if (e.target.name === 'title') {\n      setTitle(newValue);\n    } else {\n      setText(newValue);\n    }\n  };\n\n  var disabled = title.trim().length === 0 || text.trim().title === 0 || title.trim().length === 0 && text.trim().title === 0;\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var res;\n      return _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"https://simple-blog-api.crew.red/posts\", {\n                title: title,\n                text: text\n              });\n\n            case 3:\n              res = _context.sent;\n              console.log(res.status, disabled);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(FormWrapper, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Form, {\n          onSubmit: onSubmit,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(InputField, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TextLabel, {\n              children: \"Name of the article\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Input, {\n              type: \"text\",\n              name: \"title\",\n              value: title,\n              onChange: onChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(InputField, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TextLabel, {\n              children: \"Text of the article\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TextArea, {\n              name: \"text\",\n              value: text,\n              onChange: onChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Button, {\n            disabled: disabled,\n            type: \"submit\",\n            children: \"Send\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(New, \"g+st1zQta2xVLPBzcLqINbbs1YY=\");\n\n_c8 = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"FormWrapper\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"InputField\");\n$RefreshReg$(_c4, \"Input\");\n$RefreshReg$(_c5, \"TextLabel\");\n$RefreshReg$(_c6, \"TextArea\");\n$RefreshReg$(_c7, \"Button\");\n$RefreshReg$(_c8, \"New\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSw4REFBQyxVQUFEO0FBQUEsb0NBQ0UsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLFFBQUQ7QUFBVSxrQkFBSSxFQUFDLE1BQWY7QUFBc0IsbUJBQUssRUFBRUYsSUFBN0I7QUFBbUMsc0JBQVEsRUFBRUU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFVRSw4REFBQyxNQUFEO0FBQVEsb0JBQVEsRUFBSU0sUUFBcEI7QUFBOEIsZ0JBQUksRUFBQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0JELENBdkREOztHQUFNWDs7TUFBQUE7QUF5RE4sK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvbmV3LnRzeD8xNjBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWFpbkxheW91dFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OmZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGJhY2tncm91bmQ6ICNGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBwYWRkaW5nOiAzcmVtO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IElucHV0RmllbGQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkOyAjRTVFNUU1O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuYDtcblxuY29uc3QgVGV4dExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBsaW5lLWhlaWdodDogMi4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5gO1xuXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgd2lkdGg6IDEwMCU7XG5kaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQ7ICNFNUU1RTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1pbi1oZWlnaHQ6IDQwcmVtO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuY29sb3I6IHdoaXRlO1xuZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IDFweCBzb2xpZDsgI0U1RTVFNTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG5cbiAgb3V0bGluZTogbm9uZTtcbiAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgIGJhY2tncm91bmQ6ICM2NmEzZmY7XG4gICAmOmRpc2FibGVke1xuICAgICBvcGFjaXR5OiAwLjU7XG4gICB9XG4gICAgJjpob3ZlcntcbiAgICAgb3BhY2l0eTogMC41O1xuICAgfWJhY2tncm91bmQ6ICM2NmEzZmY7XG5gO1xuXG5cbmNvbnN0IE5ldyA9ICgpID0+IHtcblxuY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbmNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbmNvbnN0IG9uQ2hhbmdlID0gKGUpID0+e1xuICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gIGlmIChlLnRhcmdldC5uYW1lID09PSAndGl0bGUnKXtcbiAgICBzZXRUaXRsZShuZXdWYWx1ZSlcbiAgfVxuICBlbHNlIHtcbiAgICBzZXRUZXh0KG5ld1ZhbHVlKVxuICB9XG59XG5cbmNvbnN0IGRpc2FibGVkID1cbiAgdGl0bGUudHJpbSgpLmxlbmd0aCA9PT0gMCB8fFxuICB0ZXh0LnRyaW0oKS50aXRsZSA9PT0gMCB8fFxuICB0aXRsZS50cmltKCkubGVuZ3RoID09PSAwICYmXG4gIHRleHQudHJpbSgpLnRpdGxlID09PSAwO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHNcIixcblxuICAgIHtcbiAgICAgIHRpdGxlLCB0ZXh0XG4gICAgfSk7XG5cbiBjb25zb2xlLmxvZyhyZXMuc3RhdHVzLCBkaXNhYmxlZClcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1haW5MYXlvdXQ+XG4gICAgICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdCA9IHtvblN1Ym1pdH0+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZD5cbiAgICAgICAgICAgICAgPFRleHRMYWJlbD5OYW1lIG9mIHRoZSBhcnRpY2xlPC9UZXh0TGFiZWw+XG4gICAgICAgICAgICAgIDxJbnB1dCB0eXBlID0gXCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZD5cbiAgICAgICAgICAgICAgPFRleHRMYWJlbD5UZXh0IG9mIHRoZSBhcnRpY2xlPC9UZXh0TGFiZWw+XG4gICAgICAgICAgICAgIDxUZXh0QXJlYSBuYW1lPVwidGV4dFwiIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XG5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQgPSB7ZGlzYWJsZWR9IHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L0Zvcm1XcmFwcGVyPlxuICAgICAgPC9NYWluTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTWFpbkxheW91dCIsInN0eWxlZCIsImF4aW9zIiwiRm9ybVdyYXBwZXIiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIklucHV0RmllbGQiLCJJbnB1dCIsImlucHV0IiwiVGV4dExhYmVsIiwibGFiZWwiLCJUZXh0QXJlYSIsInRleHRhcmVhIiwiQnV0dG9uIiwiYnV0dG9uIiwiTmV3IiwidGl0bGUiLCJzZXRUaXRsZSIsInRleHQiLCJzZXRUZXh0Iiwib25DaGFuZ2UiLCJlIiwibmV3VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJkaXNhYmxlZCIsInRyaW0iLCJsZW5ndGgiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/new.tsx\n");

/***/ })

});