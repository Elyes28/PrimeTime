webpackHotUpdate("static\\development\\pages\\order\\[id].js",{

/***/ "./components/StripeContainer.js":
/*!***************************************!*\
  !*** ./components/StripeContainer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StripeContainer; });
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PaymentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PaymentForm */ "./components/PaymentForm.js");
var _jsxFileName = "C:\\Users\\Karim\\Desktop\\Project\\PrimeTime\\client\\components\\StripeContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var PUBLIC_KEY = "pk_test_51KcqoWJoQcapggoAHWfJs23e0bQJXyu3rMs5OuwGqOg9e7keJgvuFLqH5EOztTS7P2FcuXCz8eBCLLuN38ZRuzY600J5tq8hep";
var stripeTestPromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__["loadStripe"])(PUBLIC_KEY);
function StripeContainer(_ref) {
  var x = _ref.x;
  return __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__["Elements"], {
    stripe: stripeTestPromise,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx(_PaymentForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    price: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }));
}

/***/ })

})
//# sourceMappingURL=[id].js.a9964364a8a7d2cf1488.hot-update.js.map