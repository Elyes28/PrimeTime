webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-scss */ "./node_modules/bootstrap-scss/bootstrap.scss");
/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/scss/flaticon.scss */ "./public/assets/scss/flaticon.scss");
/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/scss/font-awesome.scss */ "./public/assets/scss/font-awesome.scss");
/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/scss/color-1.scss */ "./public/assets/scss/color-1.scss");
/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/scss/themify.scss */ "./public/assets/scss/themify.scss");
/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/scss/slick.scss */ "./public/assets/scss/slick.scss");
/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/assets/scss/slick-theme.scss */ "./public/assets/scss/slick-theme.scss");
/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _containers_customizer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../containers/customizer */ "./containers/customizer.js");
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/Store */ "./utils/Store.js");
/* harmony import */ var _api_userContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api/userContext */ "./pages/api/userContext.js");

var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















var _ref = next_config__WEBPACK_IMPORTED_MODULE_5___default()() || {},
    _ref$publicRuntimeCon = _ref.publicRuntimeConfig,
    publicRuntimeConfig = _ref$publicRuntimeCon === void 0 ? {} : _ref$publicRuntimeCon;

nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.configure({
  showSpinner: publicRuntimeConfig.NProgressShowSpinner
});

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

function MyFunctionComponent(_ref2) {
  var children = _ref2.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loader = _useState[0],
      setLoader = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      goingUp = _useState2[0],
      setGoingUp = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Page Loader
    setTimeout(function () {
      setLoader(false);
    }, 1500); // Tap to Top Scroll 

    var handleScroll = function handleScroll() {
      var currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);else setGoingUp(false);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, [goingUp]);

  var tapToTop = function tapToTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "Unice")), loader && __jsx("div", {
    className: "loader-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }))), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children), __jsx("div", {
    className: "tap-top",
    style: goingUp ? {
      display: 'block'
    } : {
      display: 'none'
    },
    onClick: tapToTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-angle-double-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 14
    }
  }))));
}

function MyApp(_ref3) {
  var Component = _ref3.Component,
      pageProps = _ref3.pageProps,
      graphql = _ref3.graphql;
  //  const [context, setContext] = useState("default context value");
  return __jsx(_api_userContext__WEBPACK_IMPORTED_MODULE_16__["default"].Provider, {
    value: [context, setContext],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(MyFunctionComponent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(_utils_Store__WEBPACK_IMPORTED_MODULE_15__["StoreProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }))), __jsx(_containers_customizer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  })), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./pages/api/userContext.js":
/*!**********************************!*\
  !*** ./pages/api/userContext.js ***!
  \**********************************/
/*! exports provided: userContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userContextProvider", function() { return userContextProvider; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\api\\userContext.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


var user = {};
var UserContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])({
  user: null
});
var userContextProvider = function userContextProvider(_ref) {
  var children = _ref.children;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var id = localStorage.getItem("id");
  }, []);

  var getuser = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:5000/user/" + id).then(function (res) {
                return res.data.result, Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("user");
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getuser() {
      return _ref2.apply(this, arguments);
    };
  }();

  if (localStorage.getItem('id')) {
    getuser();
  }

  return __jsx(UserContext.Provider, {
    value: user,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ })

})
//# sourceMappingURL=_app.js.dad0f7f4c192a229164b.hot-update.js.map