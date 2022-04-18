webpackHotUpdate("static\\development\\pages\\order\\[id].js",{

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderScreen; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MessageBox */ "./components/MessageBox.js");
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Store */ "./utils/Store.js");
var _jsxFileName = "C:\\Users\\Karim\\Desktop\\Project\\PrimeTime\\client\\pages\\order\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







function OrderScreen() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_utils_Store__WEBPACK_IMPORTED_MODULE_6__["Store"]),
      state = _useContext.state;

  var userInfo = state.userInfo;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var orderId = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      order = _useState[0],
      setOrder = _useState[1];

  var shippingAddress = order.shippingAddress,
      paymentMethod = order.paymentMethod,
      orderItems = order.orderItems,
      itemsPrice = order.itemsPrice,
      taxPrice = order.taxPrice,
      shippingPrice = order.shippingPrice,
      totalPrice = order.totalPrice,
      isPaid = order.isPaid,
      paidAt = order.paidAt,
      isDelivered = order.isDelivered,
      deliveredAt = order.deliveredAt;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchOrder = function fetchOrder() {
      try {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:5000/orders/".concat(orderId), {
          headers: {
            authorization: "Bearer ".concat(userInfo.token)
          }
        }).then(function (res) {
          setOrder(res.data);
          console.log("success");
          console.log(res.data);
        });
      } catch (err) {}
    };

    if (!userInfo) {
      return alert("Go To Sign In");
    }

    if (!order._id || order._id && order._id !== orderId) {
      fetchOrder();
    }
  }, [order, userInfo, orderId]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Order ", orderId), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    component: "h2",
    variant: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "Shipping Address")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, order.shippingAddress.fullName, ", ", shippingAddress.address, ",", ' ', shippingAddress.city, ", ", shippingAddress.postalCode, ",", ' ', shippingAddress.country), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "Status:", ' ', isDelivered ? "delivered at ".concat(deliveredAt) : 'not delivered'))));
}

/***/ })

})
//# sourceMappingURL=[id].js.ef6528f0d1db27871c34.hot-update.js.map