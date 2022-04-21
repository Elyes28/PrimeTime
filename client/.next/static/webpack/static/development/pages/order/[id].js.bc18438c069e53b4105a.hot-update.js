webpackHotUpdate("static\\development\\pages\\order\\[id].js",{

/***/ "./components/PaymentForm.js":
/*!***********************************!*\
  !*** ./components/PaymentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Karim\\Desktop\\Project\\PrimeTime\\client\\components\\PaymentForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "#87bbfd"
      }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
};
function PaymentForm(_ref) {
  var price = _ref.price;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      success = _useState[0],
      setSuccess = _useState[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["useElements"])();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var _yield$stripe$createP, error, paymentMethod, id, response;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["CardElement"])
              });

            case 3:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;

              if (error) {
                _context.next = 21;
                break;
              }

              _context.prev = 7;
              id = paymentMethod.id;
              console.log(id);
              _context.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:5000/orders/payment/price``", {
                amount: 100,
                id: id
              });

            case 12:
              response = _context.sent;

              if (response.data.success) {
                console.log("Successful payment");
                setSuccess(true);
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](7);
              console.log("Error", _context.t0);

            case 19:
              _context.next = 22;
              break;

            case 21:
              console.log(error.message);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 16]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, !success ? __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("fieldset", {
    className: "FormGroup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "FormRow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["CardElement"], {
    options: CARD_OPTIONS,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }))), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Pay")) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 12
    }
  }, "You just bought a sweet spatula congrats this is the best decision of you're life")));
}

/***/ })

})
//# sourceMappingURL=[id].js.bc18438c069e53b4105a.hot-update.js.map