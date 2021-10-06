"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./components/mainLayout.tsx + 3 modules
var mainLayout = __webpack_require__(6158);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/linkPost.tsx





const PostContent = external_styled_components_default().li.withConfig({
  displayName: "linkPost__PostContent",
  componentId: "sc-1ludrig-0"
})(["border:1px solid rgba(112,148,219,0.1);padding:1rem;margin-bottom:1rem;border-radius:1rem;width:35rem;height:20rem;overflow:hidden;&:nth-child(3n){width:100%;}"]);
const LinkContent = external_styled_components_default().a.withConfig({
  displayName: "linkPost__LinkContent",
  componentId: "sc-1ludrig-1"
})(["color:#212112;font-size:2rem;font-weight:bold;cursor:pointer;&:hover,&:focus{color:#424224;}"]);
const DescriptionContent = external_styled_components_default().p.withConfig({
  displayName: "linkPost__DescriptionContent",
  componentId: "sc-1ludrig-2"
})(["font-weight:300;color:black;"]);

const LinkPost = ({
  postId,
  postTitle,
  postBody
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PostContent, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/posts/[postId]`,
        as: `/posts/${postId}`,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(LinkContent, {
          children: postTitle
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(DescriptionContent, {
        children: postBody
      })]
    })
  });
};

/* harmony default export */ const linkPost = (LinkPost);
;// CONCATENATED MODULE: ./components/listData.tsx



const StyledList = external_styled_components_default().ul.withConfig({
  displayName: "listData__StyledList",
  componentId: "sc-tfel9i-0"
})(["display:flex;flex-direction:", ";flex-wrap:wrap;justify-content:", ";padding-left:0;"], props => props.direction || 'row', props => props.content || 'space-evenly');

const ListData = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(StyledList, {
      children: children
    })
  });
};

/* harmony default export */ const listData = (ListData);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/actions/postAction.tsx
var postAction = __webpack_require__(7900);
// EXTERNAL MODULE: ./redux/store.tsx + 2 modules
var store = __webpack_require__(939);
;// CONCATENATED MODULE: ./pages/index.tsx











const Index = ({
  posts: serverPosts
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    postReducer
  } = (0,external_react_redux_.useSelector)(state => state);
  const {
    posts
  } = postReducer;
  (0,external_react_.useEffect)(() => {
    if (!serverPosts) {
      dispatch((0,postAction/* getPosts */.J)());
    }
  }, [serverPosts, dispatch]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(mainLayout/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(listData, {
        children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(linkPost, {
          postTitle: post.title,
          postId: post.id,
          postBody: post.body
        }, post.id))
      })
    })
  });
};

/* harmony default export */ const pages = (Index);
const getServerSideProps = store/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async () => {
  const response = await external_axios_default().get('https://simple-blog-api.crew.red/posts');
  store.dispatch({
    type: 'GET_POSTS',
    payload: response.data
  });
  store.dispatch({
    type: 'TICK',
    payload: 'was set in other page1'
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,957,939], () => (__webpack_exec__(3803)));
module.exports = __webpack_exports__;

})();