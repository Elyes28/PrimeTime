webpackHotUpdate("static\\development\\pages\\courses\\[id].js",{

/***/ "./pages/courses/[id].js":
/*!*******************************!*\
  !*** ./pages/courses/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _containers_common_common_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/common/common-layout */ "./containers/common/common-layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


var _jsxFileName = "C:\\Users\\bouyo\\Desktop\\Study\\S2\\Projet\\Code\\client\\pages\\courses\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









function CoursesDetails(_ref) {
  var coursesListe = _ref.coursesListe,
      teachers = _ref.teachers;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      courses = _useState[0],
      setCourses = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      coursesTeachers = _useState2[0],
      setCoursesTeachers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      usersss = _useState3[0],
      setUsersss = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      newName = _useState4[0],
      setNewName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      newType = _useState5[0],
      setNewType = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      newUser = _useState6[0],
      setNewUser = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      coursesList = _useState7[0],
      setCoursesList = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      modal = _useState8[0],
      setModal = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("1"),
      activeTab = _useState9[0],
      setActiveTab = _useState9[1];
  /*const listItems = coursesTeachers.map((number) =>
  <li>{number}</li>
  );*/


  var toggle = function toggle() {
    setModal(!modal);
  };

  if (!courses) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 12
      }
    }, "course Not Found");
  }

  var getCoursesTeachers = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, loopData, i;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (teachers.data.teachers) {
                setCoursesTeachers(teachers.data.teachers);
                data = [];
                data = response.data.teachers;
                loopData = '';

                for (i = 0; i < data.length; i++) {
                  loopData += "<li>".concat(data[i].name, "</li>");
                }
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCoursesTeachers() {
      return _ref2.apply(this, arguments);
    };
  }();

  var componentDidMount = function componentDidMount() {
    getCoursesTeachers();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (courses) setCourses(courses.data);
    getCoursesTeachers();
  }, [axios__WEBPACK_IMPORTED_MODULE_6___default.a]);

  var updateCourses = function updateCourses(id) {
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.put("http://localhost:2895/courses/".concat(id), {
      name: newName,
      type: newType,
      user: newUser,
      _id: id
    }).then(function (response) {
      setCoursesList(coursesList.map(function (val) {
        return val._id === id ? {
          _id: val._id,
          name: newName,
          user: newUser,
          type: newType
        } : val;
      }));
    });
  };

  return __jsx(_containers_common_common_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pathList: ["blog", "blog details", "Gallery Layout"],
    pathTitle: "BLOG WITH gallery-layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "agency blog-sec blog-sidebar single_blog_item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-body login-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    tabs: true,
    className: "nav nav-pills mb-5",
    style: {
      backgroundImage: "url(\n                    \"https://png.pngtree.com/background/20210709/original/pngtree-starting-school-summer-vacation-student-training-course-picture-image_921426.jpg\")"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    style: {
      marginLeft: "37%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    className: activeTab == "1" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab("1");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, "Courses Details")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    className: activeTab == "2" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab("2");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, "Participants"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["TabContent"], {
    className: "tab-content",
    activeTab: activeTab,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tabId: "1",
    "aria-labelledby": "pills-home-tab",
    className: "",
    role: "tabpanel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }, courses.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: "30%"
    },
    className: "form-control",
    id: "name",
    placeholder: "Name",
    type: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 25
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 25
    }
  }, courses.type), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: "30%"
    },
    className: "form-control",
    id: "type",
    placeholder: "Type",
    type: "type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 25
    }
  }))), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase",
    onClick: function onClick() {
      updateCourses(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, "Update Courses")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tabId: "2",
    "aria-labelledby": "pills-profile-tab",
    className: "",
    role: "tabpanel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "form-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 25
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    "for": "inputAddress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 23
    }
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    className: "form-control",
    id: "inputAddress",
    placeholder: "1234 Main St",
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 23
    }
  })), __jsx("button", {
    className: "btn btn-default primary-btn text-uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, "Sign Up")))))))));
}

CoursesDetails.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    var res, resTeachers;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://localhost:2895/courses/".concat(ctx.query.id)).then(function (response) {
              console.log(response);
            });

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://localhost:2895/courses/retreivecourseteachers/".concat(ctx.query.id)).then(function (response) {
              console.log(response);
            });

          case 5:
            resTeachers = _context2.sent;
            return _context2.abrupt("return", {
              coursesListe: res,
              teachers: resTeachers
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (CoursesDetails);

/***/ })

})
//# sourceMappingURL=[id].js.fbda7000937c02745219.hot-update.js.map