webpackHotUpdate("static\\development\\pages\\profileDetails.js",{

/***/ "./pages/profileDetails.js":
/*!*********************************!*\
  !*** ./pages/profileDetails.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_common_common_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/common/common-layout */ "./containers/common/common-layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\profileDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PortfolioDetail7 = function PortfolioDetail7() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstName: "",
    lastName: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      imgsrc = _useState2[0],
      setImgsrc = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(user);
    if (user) setImgsrc("images/users/" + user["firstName"] + user["lastName"] + ".jpg");
  }, [user]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      imgupdatevis = _useState3[0],
      setImgupdatevis = _useState3[1];

  var test = function test() {
    console.log(img);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_containers_common_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pathList: ['portfolio details', 'left side image portfolio'],
    pathTitle: "left side image portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "isar w-25 pl-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "product-right pro_sticky_info w-100",
    style: {
      "margin-right": "50%"
    },
    "data-sticky_column": true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-detail m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 49
    }
  }, __jsx("h3", {
    className: "detail-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 53
    }
  }, "Profile detail"), __jsx("a", {
    onClick: test,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 52
    }
  }, " ", __jsx("img", {
    alt: "",
    className: "img-fluid rounded-circle w-50 ",
    src: imgsrc,
    style: {
      "margin-left": "5rem",
      "margin-bottom": "15%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 71
    }
  }), " "), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 61
    }
  }, "First Name: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 61
    }
  }, user["firstName"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 61
    }
  }, "Last Name: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 61
    }
  }, user["firstName"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 61
    }
  }, "Birthday: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 61
    }
  }, "00/00/0000"))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 61
    }
  }, "Phone: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 61
    }
  }, "+216 00000000"))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 61
    }
  }, "Email: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 61
    }
  }, user["email"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 61
    }
  }, "Role:")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 61
    }
  }, "Teacher"))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 57
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 61
    }
  }, "expiration:")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 57
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 61
    }
  }, "00/00/0000")))), __jsx("div", {
    className: "portfolio-detail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 49
    }
  }, __jsx("h3", {
    className: "detail-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 53
    }
  }, "about project"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 53
    }
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), __jsx("div", {
    className: "text-right m-t-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 53
    }
  }, __jsx("a", {
    className: "btn btn-default primary-btn radius-0",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 88
    }
  }, "visit project")))))), __jsx("div", {
    className: "imin",
    style: {
      "width": "75%",
      "margin-left": "2%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      "overflow": "scroll",
      "height": "50%",
      "width": "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, "test", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 90
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 99
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 108
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 117
    }
  }), "tessst"), __jsx("div", {
    style: {
      "overflow": "scroll",
      "height": "50%",
      "width": "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, "test", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 94
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 103
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 112
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 121
    }
  }), "tessst"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioDetail7);

/***/ })

})
//# sourceMappingURL=profileDetails.js.e634e8f00b0c69100a40.hot-update.js.map