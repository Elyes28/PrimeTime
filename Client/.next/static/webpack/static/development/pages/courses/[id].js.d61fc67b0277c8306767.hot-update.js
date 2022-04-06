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
/* harmony import */ var _styleParticipants_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleParticipants.css */ "./pages/courses/styleParticipants.css");
/* harmony import */ var _styleParticipants_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styleParticipants_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _containers_common_common_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/common/common-layout */ "./containers/common/common-layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


var _jsxFileName = "C:\\Users\\bouyo\\Desktop\\Study\\S2\\Projet\\Code\\client\\pages\\courses\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











function CoursesDetails(props) {
  var _this = this;

  var options = [{
    value: 'chocolate',
    label: 'Chocolate'
  }, {
    value: 'strawberry',
    label: 'Strawberry'
  }, {
    value: 'vanilla',
    label: 'Vanilla'
  }];

  var MyComponent = function MyComponent() {
    return __jsx(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: options,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }
    });
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var id = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      courses = _useState[0],
      setCourses = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      coursesTeachers = _useState2[0],
      setCoursesTeachers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      coursesStudents = _useState3[0],
      setCoursesStudents = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      usersss = _useState4[0],
      setUsersss = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      newName = _useState5[0],
      setNewName = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      newType = _useState6[0],
      setNewType = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      newUser = _useState7[0],
      setNewUser = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      coursesList = _useState8[0],
      setCoursesList = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      modal = _useState9[0],
      setModal = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("1"),
      activeTab = _useState10[0],
      setActiveTab = _useState10[1];
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
        lineNumber: 77,
        columnNumber: 16
      }
    }, "course Not Found");
  }

  var getCourse = function getCourse() {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:2895/courses/".concat(id)).then( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setCourses(res.data);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  var removeTeacher = function removeTeacher() {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("http://localhost:2895/courses/removeteacherfromcourse").then( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  var getCoursesStudents = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:2895/courses/retreivecoursestudents/".concat(id)).then(function (res) {
                if (res.data.teachers) {
                  setCoursesStudents(res.data.students);
                  console.log(res.data.students);
                }
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getCoursesStudents() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getCoursesTeachers = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:2895/courses/retreivecourseteachers/".concat(id)).then(function (res) {
                if (res.data.teachers) {
                  setCoursesTeachers(res.data.teachers);
                  console.log(res.data.teachers);
                }
              });

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getCoursesTeachers() {
      return _ref4.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    /* setCourses(coursesListe)
    getCoursesTeachers() */
    if (id) {
      getCourse();
      getCoursesTeachers();
      getCoursesStudents();
    }
  }, [id]);

  var updateCourses = function updateCourses(id) {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("http://localhost:2895/courses/".concat(id), {
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

  return __jsx(_containers_common_common_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pathList: ["blog", "blog details", "Gallery Layout"],
    pathTitle: "BLOG WITH gallery-layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "agency blog-sec blog-sidebar single_blog_item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "modal-body login-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    tabs: true,
    className: "nav nav-pills mb-5",
    style: {
      backgroundImage: "url(\n                    \"https://png.pngtree.com/background/20210709/original/pngtree-starting-school-summer-vacation-student-training-course-picture-image_921426.jpg\")"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    style: {
      marginLeft: "37%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    className: activeTab == "1" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab("1");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 37
    }
  }, "Courses Details")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    className: activeTab == "2" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab("2");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 37
    }
  }, "Participants"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabContent"], {
    className: "tab-content",
    activeTab: activeTab,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
    tabId: "1",
    "aria-labelledby": "pills-home-tab",
    className: "",
    role: "tabpanel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 37
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "form-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 45
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 49
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 53
    }
  }, courses.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
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
      lineNumber: 205,
      columnNumber: 53
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 49
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 53
    }
  }, courses.type), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
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
      lineNumber: 217,
      columnNumber: 53
    }
  }))), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase",
    onClick: function onClick() {
      updateCourses(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 45
    }
  }, "Update Courses"))), " "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
    tabId: "2",
    "aria-labelledby": "pills-profile-tab",
    className: "",
    role: "tabpanel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 33
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 37
    }
  }, __jsx("div", {
    "class": "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 39
    }
  }, __jsx("div", {
    "class": "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 39
    }
  }, __jsx("div", {
    "class": "m-portlet m-portlet--full-height ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 41
    }
  }, __jsx("div", {
    "class": "m-portlet__head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 41
    }
  }, __jsx("div", {
    "class": "m-portlet__head-caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 41
    }
  }, __jsx("div", {
    "class": "m-portlet__head-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 47
    }
  }, __jsx("h3", {
    "class": "m-portlet__head-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 49
    }
  }, "Teachers")))), __jsx("div", {
    "class": "m-portlet__body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 43
    }
  }, __jsx("div", {
    "class": "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 45
    }
  }, __jsx("div", {
    "class": "tab-pane active",
    id: "m_widget4_tab1_content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 47
    }
  }, __jsx("div", {
    "class": "m-widget4 m-widget4--progress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 49
    }
  }, coursesTeachers.map(function (item, index) {
    return __jsx("div", {
      "class": "m-widget4__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 55
      }
    }, __jsx("div", {
      "class": "m-widget4__img m-widget4__img--pic",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 59
      }
    }, __jsx("img", {
      src: "https://bootdey.com/img/Content/avatar/avatar1.png",
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 61
      }
    })), __jsx("div", {
      "class": "m-widget4__info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 59
      }
    }, __jsx("span", {
      "class": "m-widget4__title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 61
      }
    }, item.name)), __jsx("div", {
      "class": "m-widget4__ext",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 59
      }
    }, __jsx("button", {
      type: "button",
      "class": "btn btn-outline-danger",
      style: {
        marginLeft: "41px",
        marginTop: "1px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 59
      }
    }, __jsx("i", {
      "class": "fa fa-trash",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 61
      }
    }))));
  }))), __jsx("div", {
    "class": "tab-pane",
    id: "m_widget4_tab2_content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 47
    }
  }), __jsx("div", {
    "class": "tab-pane",
    id: "m_widget4_tab3_content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 47
    }
  })))))), __jsx("div", {
    "class": "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 39
    }
  }, __jsx("div", {
    "class": "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 39
    }
  }, __jsx("div", {
    "class": "m-portlet m-portlet--full-height ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 41
    }
  }, __jsx("div", {
    "class": "m-portlet__head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 41
    }
  }, __jsx("div", {
    "class": "m-portlet__head-caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 41
    }
  }, __jsx("div", {
    "class": "m-portlet__head-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 47
    }
  }, __jsx("h3", {
    "class": "m-portlet__head-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 49
    }
  }, "Students")))), __jsx("div", {
    "class": "m-portlet__body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 43
    }
  }, __jsx("div", {
    "class": "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 45
    }
  }, __jsx("div", {
    "class": "tab-pane active",
    id: "m_widget4_tab1_content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 47
    }
  }, __jsx("div", {
    "class": "m-widget4 m-widget4--progress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 49
    }
  }, coursesStudents.map(function (item, index) {
    return __jsx("div", {
      "class": "m-widget4__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 55
      }
    }, __jsx("div", {
      "class": "m-widget4__img m-widget4__img--pic",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 59
      }
    }, __jsx("img", {
      src: "https://bootdey.com/img/Content/avatar/avatar7.png",
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 61
      }
    })), __jsx("div", {
      "class": "m-widget4__info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 59
      }
    }, __jsx("span", {
      "class": "m-widget4__title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 61
      }
    }, item.name)), __jsx("div", {
      "class": "m-widget4__ext",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 59
      }
    }, __jsx("button", {
      type: "button",
      "class": "btn btn-outline-danger",
      style: {
        marginLeft: "41px",
        marginTop: "1px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 59
      }
    }, __jsx("i", {
      "class": "fa fa-trash",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 61
      }
    }))));
  }))), __jsx("div", {
    "class": "tab-pane",
    id: "m_widget4_tab2_content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 47
    }
  }), __jsx("div", {
    "class": "tab-pane",
    id: "m_widget4_tab3_content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 47
    }
  }))))))), " ")))))));
}
/* CoursesDetails.getInitialProps = async (ctx) => { const res = await Axios.get(`http://localhost:2895/courses/${
        ctx.query.id
    }`).then(async () => {
        console.log('test')
    })
    const resTeachers = await Axios.get(`http://localhost:2895/courses/retreivecourseteachers/${
        ctx.query.id
    }`).then(() => {
        console.log('test')

    })

    return {ctx: ctx}


} */


/* harmony default export */ __webpack_exports__["default"] = (CoursesDetails);

/***/ })

})
//# sourceMappingURL=[id].js.d61fc67b0277c8306767.hot-update.js.map