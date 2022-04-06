webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/layouts/sections/music/album.js":
/*!***********************************************!*\
  !*** ./pages/layouts/sections/music/album.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/layouts/music/database */ "./database/layouts/music/database.js");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\bachq\\Downloads\\backup all integrated\\backup all integrated\\client\\pages\\layouts\\sections\\music\\album.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Album = function Album() {
  return __jsx("section", {
    className: "music album bg-black pb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "10",
    className: "offset-md-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "title title4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "main-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }, "Featured streamers")), __jsx("div", {
    className: "sub-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }, "Our Latest Album and details Song 2019")))), _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__["AlbumData"].length > 0 ? _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__["AlbumData"].map(function (item, index) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: "3",
      md: "4",
      sm: "6",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "album-list overlay-box text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "text-uppercase list-head",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 33
      }
    }, item.name), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 33
      }
    }, __jsx("h6", {
      className: "item-sublist",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 37
      }
    }, item.date), __jsx("h6", {
      className: "item-sublist",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 37
      }
    }, item.day), __jsx("h6", {
      className: "item-sublist",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }
    }, item.time))));
  }) : 'Album Data Not Found')));
};

/* harmony default export */ __webpack_exports__["default"] = (Album);

/***/ })

})
//# sourceMappingURL=index.js.cd301cc82741bca5b65a.hot-update.js.map