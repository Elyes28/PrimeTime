webpackHotUpdate("static\\development\\pages\\streams.js",{

/***/ "./pages/streams/streamCard.js":
/*!*************************************!*\
  !*** ./pages/streams/streamCard.js ***!
  \*************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./database */ "./pages/streams/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-image-lightbox-next */ "./node_modules/react-image-lightbox-next/dist/main.js");
/* harmony import */ var react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);








var _this = undefined,
    _jsxFileName = "C:\\Users\\bachq\\Downloads\\backup all integrated\\backup all integrated\\client\\pages\\streams\\streamCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }







var feshion = [__webpack_require__(/*! ../../public/assets/images/portfolio/1.jpg */ "./public/assets/images/portfolio/1.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/2.jpg */ "./public/assets/images/portfolio/2.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/3.jpg */ "./public/assets/images/portfolio/3.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/4.jpg */ "./public/assets/images/portfolio/4.jpg")];
var bags = [__webpack_require__(/*! ../../public/assets/images/portfolio/5.jpg */ "./public/assets/images/portfolio/5.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/6.jpg */ "./public/assets/images/portfolio/6.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/7.jpg */ "./public/assets/images/portfolio/7.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/8.png */ "./public/assets/images/portfolio/8.png")];
var watches = [__webpack_require__(/*! ../../public/assets/images/portfolio/11.jpg */ "./public/assets/images/portfolio/11.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/10.jpg */ "./public/assets/images/portfolio/10.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/12.png */ "./public/assets/images/portfolio/12.png")];
var shoes = [__webpack_require__(/*! ../../public/assets/images/portfolio/9.jpg */ "./public/assets/images/portfolio/9.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/10.jpg */ "./public/assets/images/portfolio/10.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/12.png */ "./public/assets/images/portfolio/12.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/8.png */ "./public/assets/images/portfolio/8.png")];
var AllImg = [__webpack_require__(/*! ../../public/assets/images/portfolio/1.jpg */ "./public/assets/images/portfolio/1.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/2.jpg */ "./public/assets/images/portfolio/2.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/3.jpg */ "./public/assets/images/portfolio/3.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/4.jpg */ "./public/assets/images/portfolio/4.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/5.jpg */ "./public/assets/images/portfolio/5.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/6.jpg */ "./public/assets/images/portfolio/6.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/7.jpg */ "./public/assets/images/portfolio/7.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/8.png */ "./public/assets/images/portfolio/8.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/9.jpg */ "./public/assets/images/portfolio/9.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/10.jpg */ "./public/assets/images/portfolio/10.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/11.jpg */ "./public/assets/images/portfolio/11.jpg"), __webpack_require__(/*! ../../public/assets/images/portfolio/12.png */ "./public/assets/images/portfolio/12.png")];

var StreamCard = function StreamCard(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subTitle = _ref.subTitle,
      fluid = _ref.fluid,
      streams = _ref.streams;
  var initilindex = {
    index: 0
  }; // const currentStreams=streams.slice(indexOfFirstStream,indexOfLastStream);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initilindex),
      photoIndex = _useState[0],
      setPhotoIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('1'),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var getUrl = function getUrl(id) {
    return "/streams/channel?id=" + id;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "filter-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
    tabs: true,
    className: "filter-container isotopeFilters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    className: "list-inline filter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    className: activeTab == '1' ? 'active' : '',
    onClick: function onClick() {
      return setActiveTab('1');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, "All")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    className: activeTab == '2' ? 'active' : '',
    onClick: function onClick() {
      return setActiveTab('2');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }, "Rock n'Roll")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    className: activeTab == '3' ? 'active' : '',
    onClick: function onClick() {
      return setActiveTab('3');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 37
    }
  }, "Classical")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    className: activeTab == '4' ? 'active' : '',
    onClick: function onClick() {
      return setActiveTab('4');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, "Techno")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    className: activeTab == '5' ? 'active' : '',
    onClick: function onClick() {
      return setActiveTab('5');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, "Karaoke"))))))), __jsx("div", {
    className: fluid || 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabContent"], {
    className: "isotopeContainer row",
    activeTab: activeTab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
    tabId: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, streams.map(function (stream, i) {
    return __jsx("a", {
      href: getUrl(stream["_id"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: className,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "overlay",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "border-portfolio",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "zoom_gallery",
      "data-source": AllImg[photoIndex.index],
      title: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "overlay-background",
      onClick: function onClick() {
        return setPhotoIndex(_objectSpread({}, photoIndex, {
          index: i,
          isOpen: true
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 49
      }
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "fa fa-play",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 53
      }
    })), __jsx("img", {
      alt: "",
      className: " blur-up lazyload",
      src: stream.streamImg,
      style: {
        width: "100%",
        height: "170px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 49
      }
    }), photoIndex.isOpen && __jsx(react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_10___default.a, {
      mainSrc: AllImg[photoIndex.index],
      nextSrc: AllImg[(photoIndex.index + 1) % AllImg.length],
      prevSrc: AllImg[(photoIndex.index + AllImg.length - 1) % AllImg.length],
      imageTitle: photoIndex.index + 1 + "/" + AllImg.length,
      onCloseRequest: function onCloseRequest() {
        return setPhotoIndex(_objectSpread({}, photoIndex, {
          isOpen: false
        }));
      },
      onMovePrevRequest: function onMovePrevRequest() {
        return setPhotoIndex(_objectSpread({}, photoIndex, {
          index: (photoIndex.index + AllImg.length - 1) % AllImg.length
        }));
      },
      onMoveNextRequest: function onMoveNextRequest() {
        return setPhotoIndex(_objectSpread({}, photoIndex, {
          index: (photoIndex.index + 1) % AllImg.length
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 53
      }
    })))), title && __jsx("div", {
      className: "portfolio-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 41
      }
    }, __jsx("h3", {
      className: "head-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 45
      }
    }, stream["streamerName"]), __jsx("h6", {
      className: "head-sub-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 45
      }
    }, subTitle))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (StreamCard);

/***/ })

})
//# sourceMappingURL=streams.js.bfe181b702d69acaf450.hot-update.js.map