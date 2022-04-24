webpackHotUpdate("static\\development\\pages\\streams\\launchStream.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./pages/streams/iframe.js":
/*!*********************************!*\
  !*** ./pages/streams/iframe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\streams\\iframe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var JoinScreen = function JoinScreen(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subTitle = _ref.subTitle,
      fluid = _ref.fluid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      role = _useState[0],
      setRole = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setRole(JSON.parse(localStorage.getItem('user')).role);
    document.body.style.setProperty('--primary', '#10266b');
    document.body.style.setProperty('--secondary', '#464545');
    document.body.style.setProperty('--light', '#1F357D');
    document.body.style.setProperty('--dark', '#04185B');
    if (role == "musician") document.getElementById("showskill").src = "http://localhost:3001/react-rtc-demo?streamerName=" + JSON.parse(localStorage.getItem('user')).firstName + " " + JSON.parse(localStorage.getItem('user')).lastName + "&meetId=create&streamerId=" + JSON.parse(localStorage.getItem('user'))._id;
  });
  console.log(role);
  if (role == "musician") return __jsx("iframe", {
    id: "showskill",
    height: "720",
    width: "1400",
    title: "Iframe Example",
    allow: "camera; microphone;display-capture;autoplay; clipboard-write;",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });else return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 8
    }
  }, "you can't start a stream upgrade your account.");
};

/* harmony default export */ __webpack_exports__["default"] = (JoinScreen);

/***/ })

})
//# sourceMappingURL=launchStream.js.6f16c3218f856b03e430.hot-update.js.map