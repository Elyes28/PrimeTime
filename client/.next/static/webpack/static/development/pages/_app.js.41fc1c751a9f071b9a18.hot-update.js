webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\api\\userContext.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var user = {};
var UserContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({
  user: null
});
var userContextProvider = function userContextProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      user = _useState[0],
      setUser = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var id = localStorage.getItem("id");
  }, []);

  var getuser = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:5000/user/" + id).then(function (res) {
                return setUser(res.data.result);
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
//# sourceMappingURL=_app.js.41fc1c751a9f071b9a18.hot-update.js.map