webpackHotUpdate("static\\development\\pages\\courses\\[id].js",{

/***/ "./pages/courses/[id].js":
/*!*******************************!*\
  !*** ./pages/courses/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _containers_common_common_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/common/common-layout */ "./containers/common/common-layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "C:\\Users\\bouyo\\Desktop\\Study\\S2\\Projet\\Code\\client\\pages\\courses\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function CoursesDetails(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      courses = _useState[0],
      setCourses = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      coursesTeachers = _useState2[0],
      setCoursesTeachers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      usersss = _useState3[0],
      setUsersss = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      newName = _useState4[0],
      setNewName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      newType = _useState5[0],
      setNewType = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      newUser = _useState6[0],
      setNewUser = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      coursesList = _useState7[0],
      setCoursesList = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      modal = _useState8[0],
      setModal = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("1"),
      activeTab = _useState9[0],
      setActiveTab = _useState9[1];

  var toggle = function toggle() {
    setModal(!modal);
  };

  if (!courses) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 12
      }
    }, "course Not Found");
  }

  var id3 = courses.teachers;

  var getCourses = function getCourses() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:2895/courses/".concat(id)).then(function (response) {
      setCourses(response.data);
    });
  };

  var getCoursesTeachers = function getCoursesTeachers() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:2895/courses/retreivecourseteachers/".concat(id)).then(function (response) {
      setCoursesTeachers(response.data);
      console.log(coursesTeachers._id);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCourses();
    getCoursesTeachers();
  });

  var updateCourses = function updateCourses(id) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("http://localhost:2895/courses/".concat(id), {
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

  return __jsx(_containers_common_common_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pathList: ["blog", "blog details", "Gallery Layout"],
    pathTitle: "BLOG WITH gallery-layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "agency blog-sec blog-sidebar single_blog_item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-body login-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tabs: true,
    className: "nav nav-pills mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: activeTab == "1" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab("1");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, "Login")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: activeTab == "2" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab("2");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, "Sign Up"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    className: "tab-content",
    activeTab: activeTab,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1",
    "aria-labelledby": "pills-home-tab",
    className: "",
    role: "tabpanel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "form-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, courses.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "name",
    placeholder: "Name",
    type: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, courses.type), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "type",
    placeholder: "Type",
    type: "type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
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
      lineNumber: 151,
      columnNumber: 21
    }
  }, "Update Courses"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2",
    "aria-labelledby": "pills-profile-tab",
    className: "",
    role: "tabpanel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "form-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "inputEmail05",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputEmail05",
    placeholder: "Email",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "inputPassword04",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputPassword04",
    placeholder: "Password",
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "inputPassword4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }, "Confirm Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputPassword4",
    placeholder: "Password",
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 25
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "inputAddress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 23
    }
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputAddress",
    placeholder: "1234 Main St",
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 23
    }
  })), __jsx("button", {
    className: "btn btn-default primary-btn text-uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }, "Sign Up")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CoursesDetails);

/***/ })

})
//# sourceMappingURL=[id].js.c9f35e6692cecda1c790.hot-update.js.map