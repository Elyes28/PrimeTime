webpackHotUpdate("static\\development\\pages\\streams\\launchStream.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./pages/features/gallery/popup.js":
/*!*****************************************!*\
  !*** ./pages/features/gallery/popup.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);










var _this = undefined,
    _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\features\\gallery\\popup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }






var Popup = function Popup() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(),
      modal = _useState[0],
      setModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('1'),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    email: '',
    password: ''
  }),
      postData = _useState3[0],
      setPostData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({}),
      formErrors = _useState4[0],
      setFormErrors = _useState4[1];

  var toggle = function toggle() {
    setModal(!modal);
  };

  var url = 'http://localhost:5000/user/forgetpass';
  var log = postData.email;

  var forgetpass = function forgetpass() {
    return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(url, {
      email: postData.email
    }).then(function (res) {
      console.log(log);
      console.log(res);
      console.log(res.data);
    })["catch"](function (error) {
      console.log(postData.email);
      console.log('Show error notification!');
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_8___default.a.reject(error);
    });
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    email: '',
    password: '',
    token: ''
  }),
      user = _useState5[0],
      setUser = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    email: '',
    password: '',
    ConfirmPass: '',
    firstname: '',
    lastName: ''
  }),
      newUser = _useState6[0],
      setNewUser = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    status: '',
    message: ''
  }),
      signinerr = _useState7[0],
      SetSigninerr = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    message: ''
  }),
      badPass = _useState8[0],
      setError = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      sign_forget = _useState9[0],
      setSignOrForget = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      buttonValue = _useState10[0],
      setButtonValue = _useState10[1];

  var signup = function signup(e) {
    e.preventDefault();
    console.log("implement sign up here");
    if (newUser.password == newUser.ConfirmPass) axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://localhost:5000/user/signup", {
      email: newUser.email,
      password: newUser.password,
      firstName: newUser.firstName,
      lastName: newUser.lastName
    }).then(function (res) {
      setError(_objectSpread({}, badPass, {
        message: "aaa"
      }));
    })["catch"](function (error) {
      console.log(error.response.data);
    });else setError(_objectSpread({}, badPass, {
      message: "Password confirmation doesnt match !"
    }));
  };

  var signin = function signin() {
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://localhost:5000/user/signin", {
      email: log,
      password: postData.password
    }).then(function (res) {
      setUser(_objectSpread({}, user, {
        email: res.data.result.email,
        password: res.data.result.password,
        token: res.data.token
      }));
      var current_user = {
        email: res.data.result.email,
        token: res.data.token,
        firstName: res.data.result.firstname,
        _id: res.data.result._id,
        lastName: res.data.result.lastname,
        expiration: res.data.result.active_until,
        role: res.data.result.role,
        phone: res.data.result.phone,
        instagram: res.data.result.instagram,
        youtube: res.data.result.youtube,
        facebook: res.data.result.facebook,
        spotify: res.data.result.spotify,
        channelDescription: res.data.result.channel_description
      };
      setButtonValue("log out");
      toggle(); // current_user.bro=res.data.result.token;

      localStorage.setItem('user', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(current_user));
      SetSigninerr(_objectSpread({}, signinerr, {
        status: error.response.data.message,
        message: error.response.data.message
      }));
    })["catch"](function (error) {
      if (error.response) SetSigninerr(_objectSpread({}, signinerr, {
        status: error.response.status,
        message: error.response.data.message
      }));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    if (JSON.parse(localStorage.getItem("user"))) setButtonValue(true);else setButtonValue(false);
  }, []);

  var logout = function logout() {
    localStorage.removeItem("user");
    setButtonValue(!buttonValue);
  }; //


  return __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "login-popup p-0",
    style: {
      overflow: 'inherit !important'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    md: "6",
    className: "offset-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    className: "popup-with-form btn btn-default primary-btn",
    hidden: buttonValue,
    onClick: function onClick() {
      toggle();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, "Login"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    className: "popup-with-form btn btn-default primary-btn",
    hidden: !buttonValue,
    onClick: function onClick() {
      logout();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "Logout")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: toggle,
    className: "modal-no-header mt-3",
    style: {
      width: "50px",
      left: "95%",
      fontSize: "1rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "X"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "modal-body login-modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
    tabs: true,
    className: "nav nav-pills mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    className: activeTab == '1' ? 'active' : '',
    onClick: function onClick() {
      return setActiveTab('1');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, "Login")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    className: activeTab == '2' ? 'active' : '',
    onClick: function onClick() {
      return setActiveTab('2');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, "Sign Up"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabContent"], {
    className: "tab-content",
    activeTab: activeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
    tabId: "1",
    "aria-labelledby": "pills-home-tab",
    className: "",
    role: "tabpanel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "form-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    "for": "inputEmail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 45
    }
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    className: "form-control",
    id: "inputEmail",
    placeholder: "Email",
    type: "email",
    value: postData.email,
    onChange: function onChange(e) {
      return setPostData(_objectSpread({}, postData, {
        email: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 45
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    "for": "inputPassword05",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 45
    }
  }, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    className: "form-control",
    id: "inputPassword05",
    placeholder: "Password",
    type: "password",
    value: postData.password,
    onChange: function onChange(e) {
      return setPostData(_objectSpread({}, postData, {
        password: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 45
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    style: {
      color: 'red'
    },
    "for": "inputEmail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, signinerr.message)), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase",
    onClick: function onClick() {
      return signin();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 37
    }
  }, "Login"), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase",
    type: "submit",
    onClick: function onClick() {
      return forgetpass();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 37
    }
  }, "Forget password")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
    tabId: "2",
    "aria-labelledby": "pills-profile-tab",
    className: "",
    role: "tabpanel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "form-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    "for": "inputEmail05",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 45
    }
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    className: "form-control",
    id: "inputEmail05",
    placeholder: "Email",
    type: "email",
    value: newUser.email,
    onChange: function onChange(e) {
      return setNewUser(_objectSpread({}, newUser, {
        email: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 45
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    "for": "inputPassword04",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 45
    }
  }, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    className: "form-control",
    id: "inputPassword04",
    placeholder: "Password",
    value: newUser.password,
    onChange: function onChange(e) {
      return setNewUser(_objectSpread({}, newUser, {
        password: e.target.value
      }));
    },
    type: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 45
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    "for": "inputPassword4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 45
    }
  }, "Confirm Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    className: "form-control",
    id: "inputPasswordConfirmation",
    placeholder: "Password",
    value: newUser.ConfirmPass,
    onChange: function onChange(e) {
      return setNewUser(_objectSpread({}, newUser, {
        ConfirmPass: e.target.value
      }));
    },
    type: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 45
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    style: {
      color: 'red'
    },
    "for": "errorMessage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 49
    }
  }, badPass.message))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    "for": "inputAddress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 41
    }
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    className: "form-control",
    id: "inputAddress",
    placeholder: "1234 Main St",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    "for": "inputAddress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 45
    }
  }, "Name"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    className: "form-control",
    id: "inputNAme",
    placeholder: "John",
    value: newUser.firstName,
    onChange: function onChange(e) {
      return setNewUser(_objectSpread({}, newUser, {
        firstName: e.target.value
      }));
    },
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    "for": "inputAddress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 45
    }
  }, "Last name"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
    className: "form-control",
    id: "inputLastName",
    placeholder: "Doe",
    value: newUser.lastName,
    onChange: function onChange(e) {
      return setNewUser(_objectSpread({}, newUser, {
        lastName: e.target.value
      }));
    },
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 41
    }
  })), __jsx("button", {
    className: "btn btn-default primary-btn text-uppercase",
    onClick: function onClick(e) {
      return signup(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 37
    }
  }, "Sign Up"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./pages/streams/iframe.js":
/*!*********************************!*\
  !*** ./pages/streams/iframe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\streams\\iframe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var JoinScreen = function JoinScreen(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subTitle = _ref.subTitle,
      fluid = _ref.fluid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      role = _useState[0],
      setRole = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      expiration = _useState2[0],
      setExpiration = _useState2[1];

  var today = new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()).toISOString();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setRole(JSON.parse(localStorage.getItem('user')).role);
    setExpiration(JSON.parse(localStorage.getItem('user')).expiration);
    document.body.style.setProperty('--primary', '#10266b');
    document.body.style.setProperty('--secondary', '#464545');
    document.body.style.setProperty('--light', '#1F357D');
    document.body.style.setProperty('--dark', '#04185B');
    if (role == "musician" && today < expiration) document.getElementById("showskill").src = "http://localhost:3001/react-rtc-demo?streamerName=" + JSON.parse(localStorage.getItem('user')).firstName + " " + JSON.parse(localStorage.getItem('user')).lastName + "&meetId=create&streamerId=" + JSON.parse(localStorage.getItem('user'))._id;
  });
  if (role == "musician" && today < expiration) return __jsx("iframe", {
    id: "showskill",
    height: "720",
    width: "1400",
    title: "Iframe Example",
    allow: "camera; microphone;display-capture;autoplay; clipboard-write;",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  });else return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, "you can't start a stream upgrade your account.");
};

/* harmony default export */ __webpack_exports__["default"] = (JoinScreen);

/***/ })

})
//# sourceMappingURL=launchStream.js.71c836c8b2ed05a7cb29.hot-update.js.map