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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/mainLayout */ \"./components/mainLayout.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/kate/Homeworks/blog/pages/posts/new.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"new__FormWrapper\",\n  componentId: \"sc-403106-0\"\n})([\"display:flex;justify-content:center;align-items:center;\"]);\n_c = FormWrapper;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.form.withConfig({\n  displayName: \"new__Form\",\n  componentId: \"sc-403106-1\"\n})([\"background:#FFFFF;border-radius:1.5rem;padding:3rem;max-width:500px;width:100%;\"]);\n_c2 = Form;\nvar InputField = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"new__InputField\",\n  componentId: \"sc-403106-2\"\n})([\"display:flex;flex-direction:column;margin-bottom:1.5rem;\"]);\n_c3 = InputField;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.input.withConfig({\n  displayName: \"new__Input\",\n  componentId: \"sc-403106-3\"\n})([\"width:100%;display:flex;border:1px solid;#E5E5E5;border-radius:0.5rem;outline:none;padding:0.5rem 1rem;\"]);\n_c4 = Input;\nvar TextLabel = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.label.withConfig({\n  displayName: \"new__TextLabel\",\n  componentId: \"sc-403106-4\"\n})([\"font-style:normal;font-weight:300;font-size:1.8rem;line-height:2.1rem;margin-bottom:0.5rem;\"]);\n_c5 = TextLabel;\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.textarea.withConfig({\n  displayName: \"new__TextArea\",\n  componentId: \"sc-403106-5\"\n})([\"width:100%;display:block;border:1px solid;#E5E5E5;border-radius:0.5rem;outline:none;padding:0.5rem 1rem;min-height:40rem;resize:none;outline:none;margin-bottom:0.5rem;\"]);\n_c6 = TextArea;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.button.withConfig({\n  displayName: \"new__Button\",\n  componentId: \"sc-403106-6\"\n})([\"color:white;font-size:2rem;border:1px solid;#E5E5E5;border-radius:0.5rem;outline:none;padding:1rem 3rem;outline:none;margin-bottom:0.5rem;background:#66a3ff;&:disabled{opacity:0.5%;}\"]);\n_c7 = Button;\n\nvar New = function New() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var onChange = function onChange(e) {\n    var newValue = e.target.value;\n\n    if (e.target.name === 'title') {\n      setTitle(newValue);\n    } else {\n      setText(newValue);\n    }\n  };\n\n  var disabled = title.trim().length === 0 || text.trim().title === 0;\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var res;\n      return _home_kate_Homeworks_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"https://simple-blog-api.crew.red/posts\", {\n                title: title,\n                text: text\n              });\n\n            case 3:\n              res = _context.sent;\n              console.log(res.status);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(FormWrapper, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Form, {\n          onSubmit: onSubmit,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(InputField, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TextLabel, {\n              children: \"Name of the article\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Input, {\n              type: \"text\",\n              name: \"title\",\n              value: title,\n              onChange: onChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(InputField, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TextLabel, {\n              children: \"Text of the article\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TextArea, {\n              name: \"text\",\n              value: text,\n              onChange: onChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Button, {\n            disabled: disabled,\n            type: \"submit\",\n            children: \"Send\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(New, \"g+st1zQta2xVLPBzcLqINbbs1YY=\");\n\n_c8 = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"FormWrapper\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"InputField\");\n$RefreshReg$(_c4, \"Input\");\n$RefreshReg$(_c5, \"TextLabel\");\n$RefreshReg$(_c6, \"TextArea\");\n$RefreshReg$(_c7, \"Button\");\n$RefreshReg$(_c8, \"New\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLFFBQUQ7QUFBVSxrQkFBSSxFQUFDLE1BQWY7QUFBc0IsbUJBQUssRUFBRUYsSUFBN0I7QUFBbUMsc0JBQVEsRUFBRUU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFVRSw4REFBQyxNQUFEO0FBQVEsb0JBQVEsRUFBSU0sUUFBcEI7QUFBOEIsZ0JBQUksRUFBQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0JELENBbkREOztHQUFNWDs7TUFBQUE7QUFxRE4sK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvbmV3LnRzeD8xNjBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWFpbkxheW91dFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OmZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGJhY2tncm91bmQ6ICNGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBwYWRkaW5nOiAzcmVtO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IElucHV0RmllbGQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkOyAjRTVFNUU1O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuYDtcblxuY29uc3QgVGV4dExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBsaW5lLWhlaWdodDogMi4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5gO1xuXG5jb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgd2lkdGg6IDEwMCU7XG5kaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQ7ICNFNUU1RTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1pbi1oZWlnaHQ6IDQwcmVtO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuY29sb3I6IHdoaXRlO1xuZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IDFweCBzb2xpZDsgI0U1RTVFNTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG5cbiAgb3V0bGluZTogbm9uZTtcbiAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgIGJhY2tncm91bmQ6ICM2NmEzZmY7XG4gICAmOmRpc2FibGVke1xuICAgICBvcGFjaXR5OiAwLjUlO1xuICAgfVxuYDtcblxuXG5jb25zdCBOZXcgPSAoKSA9PiB7XG5cbmNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG5jb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5jb25zdCBvbkNoYW5nZSA9IChlKSA9PntcbiAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICBpZiAoZS50YXJnZXQubmFtZSA9PT0gJ3RpdGxlJyl7XG4gICAgc2V0VGl0bGUobmV3VmFsdWUpXG4gIH1cbiAgZWxzZSB7XG4gICAgc2V0VGV4dChuZXdWYWx1ZSlcbiAgfVxufVxuXG5jb25zdCBkaXNhYmxlZCA9IHRpdGxlLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgdGV4dC50cmltKCkudGl0bGUgPT09IDA7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0c1wiLFxuXG4gICAge1xuICAgICAgdGl0bGUsIHRleHRcbiAgICB9KTtcblxuIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNYWluTGF5b3V0PlxuICAgICAgICA8Rm9ybVdyYXBwZXI+XG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQgPSB7b25TdWJtaXR9PlxuICAgICAgICAgICAgPElucHV0RmllbGQ+XG4gICAgICAgICAgICAgIDxUZXh0TGFiZWw+TmFtZSBvZiB0aGUgYXJ0aWNsZTwvVGV4dExhYmVsPlxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZSA9IFwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9JbnB1dEZpZWxkPlxuICAgICAgICAgICAgPElucHV0RmllbGQ+XG4gICAgICAgICAgICAgIDxUZXh0TGFiZWw+VGV4dCBvZiB0aGUgYXJ0aWNsZTwvVGV4dExhYmVsPlxuICAgICAgICAgICAgICA8VGV4dEFyZWEgbmFtZT1cInRleHRcIiB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9JbnB1dEZpZWxkPlxuXG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkID0ge2Rpc2FibGVkfSB0eXBlPVwic3VibWl0XCI+U2VuZDwvQnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9Gb3JtV3JhcHBlcj5cbiAgICAgIDwvTWFpbkxheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ldztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1haW5MYXlvdXQiLCJzdHlsZWQiLCJheGlvcyIsIkZvcm1XcmFwcGVyIiwiZGl2IiwiRm9ybSIsImZvcm0iLCJJbnB1dEZpZWxkIiwiSW5wdXQiLCJpbnB1dCIsIlRleHRMYWJlbCIsImxhYmVsIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIkJ1dHRvbiIsImJ1dHRvbiIsIk5ldyIsInRpdGxlIiwic2V0VGl0bGUiLCJ0ZXh0Iiwic2V0VGV4dCIsIm9uQ2hhbmdlIiwiZSIsIm5ld1ZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiZGlzYWJsZWQiLCJ0cmltIiwibGVuZ3RoIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/new.tsx\n");

/***/ })

});