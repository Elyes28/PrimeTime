webpackHotUpdate("static\\development\\pages\\profileDetails.js",{

/***/ "./pages/profileDetails.js":
/*!*********************************!*\
  !*** ./pages/profileDetails.js ***!
  \*********************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _containers_common_common_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/common/common-layout */ "./containers/common/common-layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_assets_person_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/assets/person.css */ "./public/assets/person.css");
/* harmony import */ var _public_assets_person_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_assets_person_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_StreamCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/StreamCard */ "./components/StreamCard.js");
/* harmony import */ var _components_CourseCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/CourseCard */ "./components/CourseCard.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @faker-js/faker */ "./node_modules/@faker-js/faker/dist/esm/index.mjs");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _api_userContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./api/userContext */ "./pages/api/userContext.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.js");












var _this = undefined,
    _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\profileDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }















var PortfolioDetail7 = function PortfolioDetail7() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      allStreams = _useState[0],
      setAllStreams = _useState[1];

  var currentuser = Object(react__WEBPACK_IMPORTED_MODULE_11__["useContext"])(_api_userContext__WEBPACK_IMPORTED_MODULE_21__["default"]);
  console.log(currentuser);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(""),
      expires = _useState2[0],
      setExpires = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])({
    firstName: "",
    lastName: ""
  }),
      user = _useState3[0],
      setUser = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      recordedStreams = _useState4[0],
      setRecordedStreams = _useState4[1];

  var getRecordedStreams = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("http://localhost:5000/stream/getStreamByName/" + JSON.parse(localStorage.getItem("user"))["firstName"] + " " + JSON.parse(localStorage.getItem("user"))["lastName"]).then(function (res) {
                setRecordedStreams(res.data);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getRecordedStreams() {
      return _ref.apply(this, arguments);
    };
  }();

  var getAllStreamsByName = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("http://localhost:5000/stream/getAllStreamsByName/" + JSON.parse(localStorage.getItem("user"))["firstName"] + " " + JSON.parse(localStorage.getItem("user"))["lastName"]).then(function (res) {
                setAllStreams(res.data);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getAllStreamsByName() {
      return _ref2.apply(this, arguments);
    };
  }(); //---------STATS--->


  chart_js__WEBPACK_IMPORTED_MODULE_22__["Chart"].register(chart_js__WEBPACK_IMPORTED_MODULE_22__["CategoryScale"], chart_js__WEBPACK_IMPORTED_MODULE_22__["LinearScale"], chart_js__WEBPACK_IMPORTED_MODULE_22__["BarElement"], chart_js__WEBPACK_IMPORTED_MODULE_22__["Title"], chart_js__WEBPACK_IMPORTED_MODULE_22__["Tooltip"], chart_js__WEBPACK_IMPORTED_MODULE_22__["Legend"]);
  var options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Weekly viewer count'
      }
    }
  };
  var labels = [];
  var data = {
    labels: labels,
    datasets: [{
      label: 'Views per day',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
    /*{
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },*/
    ]
  }; //---------STATS--->>>>>>>

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])([]),
      courses = _useState5[0],
      setCourses = _useState5[1];

  var getCourses = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("http://localhost:5000/user/getCoursesByUserId/" + JSON.parse(localStorage.getItem("user"))["_id"]).then(function (res) {
                setCourses(res.data);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getCourses() {
      return _ref3.apply(this, arguments);
    };
  }();

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])({
    userid: "",
    text: ""
  }),
      channeldescription = _useState6[0],
      setChannelDescription = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(""),
      imgsrc = _useState7[0],
      setImgsrc = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])({
    userid: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    facebook: "",
    instagram: "",
    youtube: "",
    spotify: ""
  }),
      userData = _useState8[0],
      setUserData = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    if (user) {
      setImgsrc("images/users/" + user["_id"] + ".jpg");
      if (JSON.parse(localStorage.getItem("user"))["role"] != "user") setExpires(JSON.parse(localStorage.getItem("user"))["expiration"].split("T")[0]);
      setUserData({
        userid: user["_id"],
        firstname: user["firstName"],
        lastname: user["lastName"],
        phonenumber: user["phone"],
        facebook: user["facebook"],
        instagram: user["instagram"],
        youtube: user["youtube"],
        spotify: user["spotify"]
      });
      setChannelDescription({
        userid: user["_id"],
        text: user["channelDescription"]
      });
      getCourses();
      getRecordedStreams();
      if (user['_id'] != undefined) getfollowersnumber();
    }

    getAllStreamsByName();
  }, [user]);
  var xData = allStreams.map(function (e) {
    var date = new Date(e.created_at);
    return date.toLocaleDateString("fr-FR");
  });
  var yData = allStreams.map(function (e) {
    return e.totalViewerCount;
  });
  data.labels = xData;
  data.datasets[0].data = yData; //console.log("X :",xData);
  //console.log("Y :",yData);

  var onInputChange = function onInputChange(e) {
    var formData = new FormData();
    formData.append("username", user["_id"]);
    formData.append("photo", e.target.files[0]);
    var config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.post("http://localhost:5000/user/uploadProfileImg", formData, config).then(window.location.reload());
  };

  var imgClicked = function imgClicked(e) {
    e.preventDefault();
    document.getElementById("file-input").click();
  };

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      editabledesc = _useState9[0],
      setEditabledesc = _useState9[1];

  var onOffEditdesc = function onOffEditdesc() {
    setEditabledesc(!editabledesc);
  };

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      editable = _useState10[0],
      setEditable = _useState10[1];

  var onOffEdit = function onOffEdit() {
    setEditable(!editable);
  };

  var sendUpdateRequest = function sendUpdateRequest() {
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.post("http://localhost:5000/user/updateProfile", userData).then(function () {
      user.firstName = userData.firstname;
      user.lastName = userData.lastname;
      user.phone = userData.phonenumber;
      user.facebook = userData.facebook;
      user.instagram = userData.instagram;
      user.youtube = userData.youtube;
      user.spotify = userData.spotify;
      setEditable(!editable); // setUser(user)

      localStorage.setItem("user", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(user));
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var sendChannelDescription = function sendChannelDescription() {
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.post("http://localhost:5000/user/updateChannelDescription", channeldescription).then(function () {
      user.channelDescription = channeldescription.text;
      setEditabledesc(!editabledesc);
      localStorage.setItem("user", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(user));
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getRecord = function getRecord(meetid) {
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.get('http://localhost:5000/stream/fetchSessions/' + meetid).then(function (res) {
      if (res.data.data[0]) window.location.href = res.data.data[0].file.fileUrl;
    });
  };

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(0),
      followers = _useState11[0],
      setfollowers = _useState11[1];

  var getfollowersnumber = function getfollowersnumber() {
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.get('http://localhost:5000/user/getfollowersnumber/' + user['_id']).then(function (res) {
      setfollowers(res.data.followers_number);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  chart_js__WEBPACK_IMPORTED_MODULE_22__["Chart"].register(chart_js__WEBPACK_IMPORTED_MODULE_22__["CategoryScale"], chart_js__WEBPACK_IMPORTED_MODULE_22__["LinearScale"], chart_js__WEBPACK_IMPORTED_MODULE_22__["BarElement"], chart_js__WEBPACK_IMPORTED_MODULE_22__["Title"], chart_js__WEBPACK_IMPORTED_MODULE_22__["Tooltip"], chart_js__WEBPACK_IMPORTED_MODULE_22__["Legend"]); //const [fullAnim,,setFullAnim]= useState();

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      finishAnim = _useState12[0],
      setFinishAnim = _useState12[1];

  if (true) {
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    if (finishAnim == false) {
      var animation = anime.timeline({
        loop: true,
        autoplay: true
      }).add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 1100,
        delay: 100
      }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        offset: '-=775',
        delay: function delay(el, i) {
          return 34 * (i + 1);
        }
      }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1400,
        easing: "easeOutExpo",
        delay: 1000
      }); //setTimeout(animation.pause(), 10000);
    }
  }

  function sleep(ms) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 5
    }
  }, __jsx(_containers_common_common_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }), __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 20
    }
  }), __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 27
    }
  })), __jsx("h1", {
    "class": "ml11 justify-content-center text-center m-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 9
    }
  }, __jsx("span", {
    "class": "text-wrapper ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 3
    }
  }, __jsx("span", {
    "class": "line line1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 5
    }
  }), __jsx("h5", {
    className: "letters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 6
    }
  }, "Welcome back " + user["firstName"]))), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 1
    }
  }), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animated-bg",
    style: {
      "right": "10%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 11
    }
  }, __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 67
    }
  }), __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 74
    }
  })), __jsx("div", {
    className: "d-flex",
    style: {
      height: "1080px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "isar w-25 pl-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 15
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
      lineNumber: 355,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "portfolio-detail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "d-flex w-100 justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "detail-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 23
    }
  }, "Profile detail"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "25",
    fill: "currentColor",
    "class": "bi bi-pencil-square",
    viewBox: "0 0 16 16",
    onClick: onOffEdit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 23
    }
  }, __jsx("path", {
    d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 25
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "file",
    id: "file-input",
    style: {
      overflow: "hidden",
      height: "0px",
      width: "0px"
    },
    accept: "image/*",
    onChange: onInputChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 23
    }
  }), __jsx("a", {
    onClick: imgClicked,
    className: "w-100 pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 23
    }
  }, __jsx("img", {
    id: "profileimg",
    alt: "add profile image",
    className: "rounded-circle w-50 mx-auto ",
    src: imgsrc,
    style: {
      display: "block"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 25
    }
  }), " "), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 23
    }
  }, "followers:", followers)), editable ? __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx("div", {
    className: "detail-container d-flex mt-3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 29
    }
  }, "First Name: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 27
    }
  }, __jsx("input", {
    value: userData.firstname,
    className: "border border-dark rounded w-75",
    onChange: function onChange(e) {
      return setUserData(_objectSpread({}, userData, {
        firstname: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 29
    }
  }, "Last Name: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 27
    }
  }, __jsx("input", {
    value: userData.lastname,
    className: "border  border-dark rounded w-75",
    onChange: function onChange(e) {
      return setUserData(_objectSpread({}, userData, {
        lastname: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 29
    }
  }, "Phone: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "number",
    value: userData.phonenumber,
    className: "border  border-dark rounded w-75",
    onChange: function onChange(e) {
      return setUserData(_objectSpread({}, userData, {
        phonenumber: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 29
    }
  }, "facebook: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "text",
    value: userData.facebook,
    className: "border  border-dark rounded w-75",
    onChange: function onChange(e) {
      return setUserData(_objectSpread({}, userData, {
        facebook: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 29
    }
  }, "instagram: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "text",
    value: userData.instagram,
    className: "border  border-dark rounded w-75",
    onChange: function onChange(e) {
      return setUserData(_objectSpread({}, userData, {
        instagram: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 29
    }
  }, "youtube: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "text",
    value: userData.youtube,
    className: "border  border-dark rounded w-75",
    onChange: function onChange(e) {
      return setUserData(_objectSpread({}, userData, {
        youtube: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 29
    }
  }, "Spotify: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 27
    }
  }, __jsx("input", {
    type: "text",
    value: userData.spotify,
    className: "border  border-dark rounded w-75",
    onChange: function onChange(e) {
      return setUserData(_objectSpread({}, userData, {
        spotify: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "text-center my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "btn btn-default primary-btn radius-0",
    onClick: sendUpdateRequest,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 27
    }
  }, "update"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx("div", {
    className: "detail-container d-flex mt-3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 29
    }
  }, "First Name: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 27
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 29
    }
  }, user["firstName"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 29
    }
  }, "Last Name: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 27
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 29
    }
  }, user["lastName"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 29
    }
  }, "Phone: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 27
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 29
    }
  }, "+216 ", user["phone"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 29
    }
  }, "Email: ")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 27
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 29
    }
  }, user["email"]))), __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 27
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 29
    }
  }, "Role:")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 27
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 29
    }
  }, user["role"]))), user["role"] != "user" ? __jsx("div", {
    className: "detail-container d-flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "portfolio-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 29
    }
  }, __jsx("h5", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 31
    }
  }, "expiration:")), __jsx("div", {
    className: "portfolio-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 29
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 31
    }
  }, expires))) : null)), user["role"] == "musician" ? __jsx("div", {
    className: "portfolio-detail m-t-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex w-100 justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 23
    }
  }, __jsx("h3", {
    className: "detail-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 25
    }
  }, "My Channel description"), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "25",
    fill: "currentColor",
    "class": "bi bi-pencil-square",
    viewBox: "0 0 16 16",
    onClick: onOffEditdesc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 27
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 27
    }
  }))), !editabledesc ? __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 25
    }
  }, user["channelDescription"]) : __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx("textarea", {
    className: "w-100",
    value: channeldescription.text,
    onChange: function onChange(e) {
      return setChannelDescription(_objectSpread({}, channeldescription, {
        text: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 27
    }
  }), __jsx("div", {
    className: "text-center m-t-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "btn btn-default primary-btn radius-0",
    onClick: sendChannelDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 29
    }
  }, "update")))) : null))), __jsx("div", {
    className: "imin",
    style: {
      width: "75%",
      "margin-left": "2%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between ",
    style: {
      "width": "87%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658,
      columnNumber: 1
    }
  }, "my courses"), __jsx("div", {
    className: "mr-",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 1
    }
  }, user["role"] == "musician" ? __jsx("a", {
    href: "/streams/launchStream",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 10
    }
  }, __jsx("span", {
    style: {
      "color": "red"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 1
    }
  }, " Go live "), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "50",
    fill: "currentColor",
    "class": "bi bi-person-video3",
    viewBox: "0 0 16 16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 17
    }
  }))) : null)), __jsx("div", {
    className: "d-flex",
    style: {
      overflow: "scroll",
      height: "50%",
      width: "100%",
      "flex-wrap": "wrap"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 15
    }
  }, courses.map(function (course) {
    return __jsx(_components_CourseCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
      course: course,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 26
      }
    });
  })), __jsx("div", {
    style: {
      overflow: "scroll",
      height: "50%",
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      width: "40%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 19
    }
  }, __jsx("h2", {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 21
    }
  }, "my recordings"), __jsx("div", {
    className: "  mr-3  border border-2 sandou9elrecordes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 21
    }
  }, recordedStreams.map(function (recordedstream) {
    var date = recordedstream.created_at.split('T');
    return __jsx("div", {
      className: "d-flex justify-content-between",
      style: {
        "cursor": "pointer"
      },
      onClick: function onClick() {
        return getRecord(recordedstream.meetingId);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "h5 m-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698,
        columnNumber: 29
      }
    }, recordedstream.streamTitle), __jsx("span", {
      className: "m-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 29
      }
    }, date[0]));
  }))), __jsx("div", {
    style: {
      width: "55%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707,
      columnNumber: 19
    }
  }, __jsx("h2", {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 21
    }
  }, "stats"), __jsx("div", {
    className: " mr-3 border border-2 sandou9elstats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 21
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_23__["Bar"], {
    options: options,
    data: data,
    style: {
      height: "500px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 21
    }
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioDetail7);

/***/ })

})
//# sourceMappingURL=profileDetails.js.5f26e88b9350bd7dd57c.hot-update.js.map