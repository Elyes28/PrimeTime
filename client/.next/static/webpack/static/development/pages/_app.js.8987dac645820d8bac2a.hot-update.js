webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/api/userContext.js":
/*!**********************************!*\
  !*** ./pages/api/userContext.js ***!
  \**********************************/
/*! exports provided: UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var user = {};

var getuser = function getuser() {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:5000/user/" + localStorage.get('id')).then(function (res) {
    return res.data.result, Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("user");
  });
};

if (!localStorage.getItem('id')) {
  getuser();
}

var UserContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(user);

/***/ })

})
//# sourceMappingURL=_app.js.8987dac645820d8bac2a.hot-update.js.map