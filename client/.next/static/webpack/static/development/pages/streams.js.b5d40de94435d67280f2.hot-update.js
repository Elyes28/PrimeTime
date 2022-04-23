webpackHotUpdate("static\\development\\pages\\streams.js",{

/***/ "./pages/streams/index.js":
/*!********************************!*\
  !*** ./pages/streams/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_common_common_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/common/common-layout */ "./containers/common/common-layout.js");
/* harmony import */ var _streamCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./streamCard */ "./pages/streams/streamCard.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Pagination */ "./utils/Pagination.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\streams\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PortfolioTitle4Col = function PortfolioTitle4Col() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(12),
      streamsPerPage = _useState2[0],
      setStreamsPerPage = _useState2[1];

  var indexOfLastStream = currentPage * streamsPerPage;
  var indexOfFirstStream = indexOfLastStream - streamsPerPage;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      streams = _useState3[0],
      setStreams = _useState3[1];

  var currentStreams = streams.slice(indexOfFirstStream, indexOfLastStream);

  var getStreams = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("http://localhost:5000/user/getStreamers").then(function (res) {
                setStreams(res.data);
              })["catch"](function (error) {
                console.log(error.response.data);
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getStreams() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getStreams();
  }, []);

  var paginate = function paginate(pageNumber) {
    return setCurrentPage(pageNumber);
  };

  return __jsx(_containers_common_common_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pathList: ['portfolio basic', 'basic-4 grid with title'],
    pathTitle: "Streams",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_streamCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "col-lg-3 col-md-4 col-sm-6 isotopeSelector",
    title: "elyes",
    subTitle: "Lorem Ipsum",
    streams: currentStreams,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_utils_Pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
    streamsPerPage: streamsPerPage,
    totalStreams: streams.length,
    paginate: paginate,
    currentpage: currentPage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioTitle4Col);

/***/ })

})
//# sourceMappingURL=streams.js.b5d40de94435d67280f2.hot-update.js.map