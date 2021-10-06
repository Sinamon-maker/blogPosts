"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 3453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _postId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./components/mainLayout.tsx + 3 modules
var mainLayout = __webpack_require__(6158);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./styles/postStyled.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const PostContainer = external_styled_components_default().div.withConfig({
  displayName: "postStyled__PostContainer",
  componentId: "sc-gmhmvo-0"
})(["background:#66a3ff;width:70%;margin-bottom:2rem;font-size:1.8rem;font-weight:400;padding:2rem 2rem;"]);

const PostStyled = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(PostContainer, _objectSpread({}, props));
};

/* harmony default export */ const postStyled = (PostStyled);
// EXTERNAL MODULE: ./redux/actions/postAction.tsx
var postAction = __webpack_require__(7900);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/store.tsx + 2 modules
var store = __webpack_require__(939);
;// CONCATENATED MODULE: ./pages/posts/[postId].tsx












const ListComment = external_styled_components_default().ul.withConfig({
  displayName: "postId__ListComment",
  componentId: "sc-i3za85-0"
})(["text-decoration:none;margin-top:1.5rem;li{margin-top:1.5rem;padding-left:1rem;font-size:1.6rem;}li::before{content:'-'}"]);

const Post = ({
  post: serverPost
}) => {
  const {
    query
  } = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    post
  } = (0,external_react_redux_.useSelector)(state => state.postReducer);
  (0,external_react_.useEffect)(() => {
    if (!serverPost) dispatch((0,postAction/* getPost */.x)(query.postId));
  }, [serverPost, dispatch, query.postId]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(mainLayout/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(postStyled, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: post.title
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: post.body
          })]
        }), "Comments:", /*#__PURE__*/jsx_runtime_.jsx(ListComment, {
          children: post.comments.map(comment => /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: comment.body
          }, comment.id))
        })]
      })
    })
  });
};

/* harmony default export */ const _postId_ = (Post);
const getServerSideProps = store/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  params
}) => {
  const response = await external_axios_default().get(`https://simple-blog-api.crew.red/posts/${params.postId}?_embed=comments`);
  store.dispatch({
    type: 'GET_POST',
    payload: response.data
  });
  store.dispatch({
    type: 'TICK',
    payload: 'was set in other page2'
  });
});

/***/ }),

/***/ 7900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getPosts),
/* harmony export */   "x": () => (/* binding */ getPost)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5410);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const getPosts = () => async dispatch => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://simple-blog-api.crew.red/posts');
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__/* .GET_POSTS */ .p$,
    payload: res.data
  });
};
const getPost = postId => async dispatch => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`);
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__/* .GET_POST */ .QI,
    payload: res.data
  });
};

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 5176:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 5694:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,957,939], () => (__webpack_exec__(3453)));
module.exports = __webpack_exports__;

})();