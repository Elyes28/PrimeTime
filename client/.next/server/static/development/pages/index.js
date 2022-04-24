module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constant/menu.js":
/*!**************************!*\
  !*** ./constant/menu.js ***!
  \**************************/
/*! exports provided: MENUITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUITEMS", function() { return MENUITEMS; });
const MENUITEMS = [{
  title: 'Home',
  type: 'sub',
  children: [{
    path: '/layouts/agency',
    title: 'Agency',
    type: 'link'
  }, {
    path: '/layouts/app1',
    title: 'App Landing1',
    type: 'link'
  }, {
    path: '/layouts/app2',
    title: 'App Landing2',
    type: 'link'
  }, {
    path: '/layouts/event',
    title: 'Event',
    type: 'link'
  }, {
    path: '/layouts/gym',
    title: 'Gym',
    type: 'link'
  }, {
    path: '/layouts/music',
    title: 'Music',
    type: 'link'
  }, {
    path: '/layouts/resume',
    title: 'Resume',
    type: 'link'
  }, {
    path: '/layouts/modern-sass',
    title: 'Sass1',
    type: 'link'
  }, {
    path: '/layouts/enterprice-sass',
    title: 'Sass2',
    type: 'link'
  }, {
    path: '/layouts/wedding',
    title: 'Wedding',
    type: 'link'
  }, {
    path: '/layouts/yoga',
    title: 'Yoga',
    type: 'link'
  }, {
    path: '/layouts/portfolioLayouts',
    title: 'Portfolio',
    type: 'link'
  }]
}, {
  title: 'Shop',
  type: 'sub',
  children: [// { path: '/blog/blog-detail/detail-left-sidebar', title: ' ', type: 'link' },
  {
    path: '/blog/blog-masonary/masonary-left-sidebar',
    title: 'Our Products',
    type: 'link'
  }, {
    path: '/cart',
    title: 'Cart',
    type: 'link',
    icon: 'fa fa-'
  }]
}, {
  title: 'Live shows',
  type: 'sub',
  children: [// { path: '/blog/blog-detail/detail-left-sidebar', title: ' ', type: 'link' },
  {
    path: '/streams/launchStream',
    title: 'Launch Stream',
    type: 'link'
  }, {
    path: '/streams',
    title: 'Watch Stream',
    type: 'link',
    icon: 'fa fa-'
  }]
}, {
  title: 'Blog',
  type: 'sub',
  children: [{
    title: 'Blog Grid View',
    type: 'sub',
    children: [{
      path: '/blog/blog-grid/column-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/column-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/column-right-sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/classic-no-sidebar',
      title: 'Full Width No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/classic-right-sidebar',
      title: 'Full Width Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/classic-left-sidebar',
      title: 'Full Width Left Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog List',
    type: 'sub',
    children: [{
      path: '/blog/blog-list/list-no-sidebar',
      title: 'List No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list/list-left-sidebar',
      title: 'List Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list/list-right-sidebar',
      title: 'List Right Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog List Creative',
    type: 'sub',
    children: [{
      path: '/blog/blog-list-creative/split-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list-creative/split-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list-creative/split-right-sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog Mix Layout',
    type: 'sub',
    children: [{
      path: '/blog/blog-mix-layout/bigpost-list',
      title: 'List Mix With Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-split',
      title: 'List Mix With Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-split-no-sidebar',
      title: 'List Mix With No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-list-no-sidebar',
      title: 'List Full Width No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-column',
      title: 'Grid Mix With Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-column-no-sidebar',
      title: 'Grid Mix With No Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog Details',
    type: 'sub',
    children: [{
      path: '/blog/blog-detail/detail-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail-gallery',
      title: 'Detail Page With Gallery',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail-video',
      title: 'Detail Page With Video',
      type: 'link'
    }]
  }, {
    title: 'Blog Masonary',
    type: 'sub',
    children: [{
      path: '/blog/blog-masonary/fullwidth-2',
      title: 'Full Width 2',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/fullwidth-3',
      title: 'Full Width 3',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/fullwidth-4',
      title: 'Full Width 4',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/masonary-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/masonary-right-sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/masonary-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }]
  }]
}, {
  title: 'Pages',
  type: 'sub',
  children: [{
    path: '/page/404',
    title: '404',
    type: 'link'
  }, {
    path: '/page/faq',
    title: 'FAQ',
    type: 'link'
  }, {
    path: '/page/typography',
    title: 'Typography',
    type: 'link'
  }, {
    path: '/page/maintenance',
    title: 'Maintenance',
    type: 'link'
  }, {
    path: '/page/about-us',
    title: 'About us',
    type: 'link'
  }, {
    title: 'Team',
    type: 'sub',
    children: [{
      path: '/page/team',
      title: 'Team',
      type: 'link'
    }, {
      path: '/page/team-grid',
      title: 'Team Grid',
      type: 'link'
    }, {
      path: '/page/team-list',
      title: 'Team List',
      type: 'link'
    }]
  }, {
    title: 'Comming Soon',
    type: 'sub',
    children: [{
      path: '/page/commingsoon1',
      title: 'Comming Soon1',
      type: 'link'
    }, {
      path: '/page/commingsoon2',
      title: 'Comming Soon2',
      type: 'link'
    }]
  }]
}, {
  title: 'Elements',
  megaMenu: true,
  megaMenuType: 'small',
  type: 'sub',
  children: [{
    title: 'Elements1',
    type: 'sub',
    children: [{
      path: '/elements/alerts',
      title: 'Alerts',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/elements/accordion',
      title: 'Accordion',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/elements/boxshadow',
      title: 'Box Shadow',
      type: 'link',
      icon: 'layers'
    }, {
      path: '/elements/button',
      title: 'Buttons',
      type: 'link',
      icon: 'write'
    }, {
      path: '/elements/contact',
      title: 'Contact',
      type: 'link',
      icon: 'map-alt'
    }]
  }, {
    title: 'Elements2',
    type: 'sub',
    children: [{
      path: '/elements/event-schedule',
      title: 'Event-Schedule',
      type: 'link',
      icon: 'list'
    }, {
      path: '/elements/gallery',
      title: 'Gallery',
      type: 'link',
      icon: 'gallery'
    }, {
      path: '/elements/pricing',
      title: 'Pricing',
      type: 'link',
      icon: 'money'
    }, {
      path: '/elements/counter',
      title: 'Counter',
      type: 'link',
      icon: 'time'
    }, {
      path: '/elements/count-down',
      title: 'Countdown',
      type: 'link',
      icon: 'alarm-clock'
    }]
  }, {
    title: 'Elements3',
    type: 'sub',
    children: [{
      path: '/elements/progressbar',
      title: 'Progress Bar',
      type: 'link',
      icon: 'bar-chart'
    }, {
      path: '/elements/testimonial',
      title: 'Testimonial',
      type: 'link',
      icon: 'thought'
    }, {
      path: '/elements/video',
      title: 'Video',
      type: 'link',
      icon: 'video-camera'
    }, {
      path: '/elements/service',
      title: 'Service',
      type: 'link',
      icon: 'headphone'
    }, {
      path: '/elements/subscribe',
      title: 'Subscribe',
      type: 'link',
      icon: 'share-alt'
    }]
  }]
}, {
  title: 'Portfolio',
  megaMenu: true,
  megaMenuType: 'medium',
  type: 'sub',
  children: [{
    title: 'Portfolio-Basic',
    type: 'link',
    children: [{
      path: '/portfolio/basic-2-grid',
      title: 'Basic – 2 Grid',
      type: 'link'
    }, {
      path: '/portfolio/basic-3-grid',
      title: 'Basic – 3 Grid',
      type: 'link'
    }, {
      path: '/portfolio/basic-4-grid',
      title: 'Basic – 4 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-title-2-col',
      title: 'Basic W Tittle – 2 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-title-3-col',
      title: 'Basic W Tittle – 3 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-title-4-col',
      title: 'Basic W Tittle – 4 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-parallex',
      title: 'Parallex',
      type: 'link'
    }, {
      path: '/portfolio/centered-slide',
      title: 'Centered Slides',
      type: 'link'
    }, {
      path: '/portfolio/vertical-slide',
      title: 'Vertical Slides',
      type: 'link'
    }, {
      path: '/portfolio/multiple-carousel',
      title: '4 Slide With Center Slider',
      type: 'link'
    }]
  }, {
    title: 'Portfolio-Details',
    type: 'link',
    children: [{
      path: '/portfolio/portfolio-detail-1',
      title: 'Container Layout',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-2',
      title: 'Full Width',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-3',
      title: 'With Bg Bredcrumb',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-4',
      title: 'Details With Slider',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-5',
      title: 'Video Portfolio',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-6',
      title: 'Two Image Portfolio',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-7',
      title: 'Left Side Image Portfolio',
      type: 'link'
    }]
  }, {
    title: 'Trending Layout',
    type: 'link',
    children: [{
      path: '/portfolio/creative-1',
      title: 'Trending Layout 1',
      type: 'link'
    }, {
      path: '/portfolio/creative-2',
      title: 'Trending Layout 2',
      type: 'link'
    }, {
      path: '/portfolio/creative-3',
      title: 'Trending Layout 3',
      type: 'link'
    }, {
      path: '/portfolio/creative-4',
      title: 'Trending Layout 4',
      type: 'link'
    }, {
      path: '/portfolio/modern-4',
      title: 'Trending Layout 5',
      type: 'link'
    }, {
      path: '/portfolio/modern-3',
      title: 'Trending Layout 6',
      type: 'link'
    }, {
      path: '/portfolio/modern-2',
      title: 'Trending Layout 7',
      type: 'link'
    }]
  }, {
    title: 'Portfolio-Masonary',
    type: 'link',
    children: [{
      path: '/portfolio/full-width-2-grid',
      title: 'Full-Width – 2 Grid',
      type: 'link'
    }, {
      path: '/portfolio/full-width-3-grid',
      title: 'Full-Width – 3 Grid',
      type: 'link'
    }, {
      path: '/portfolio/full-width-4-grid',
      title: 'Full-Width – 4 Grid',
      type: 'link'
    }]
  }]
}, {
  title: 'Features',
  megaMenu: true,
  megaMenuType: 'medium',
  type: 'sub',
  children: [{
    title: 'Header Style',
    type: 'link',
    children: [{
      path: '/features/header-light',
      title: 'Light Header',
      type: 'link'
    }, {
      path: '/features/header-dark',
      title: 'Dark Header',
      type: 'link'
    }, {
      path: '/features/header-transparent',
      title: 'Glass Header',
      type: 'link'
    }, {
      path: '/features/header-right-navigation',
      title: 'Header Right Navigation',
      type: 'link'
    }, {
      path: '/features/header-center-logo',
      title: 'Header Center Logo',
      type: 'link'
    }]
  }, {
    title: 'Breadcrumb Style',
    type: 'link',
    children: [{
      path: '/features/breadcrumb-big-typography',
      title: 'Classic Type',
      type: 'link'
    }, {
      path: '/features/breadcrumb-left',
      title: 'Breadcrumb Left',
      type: 'link'
    }, {
      path: '/features/breadcrumb-right',
      title: 'Breadcrumb Right',
      type: 'link'
    }, {
      path: '/features/breadcrumb-center',
      title: 'Breadcrumb Center',
      type: 'link'
    }, {
      path: '/features/breadcrumb-dark',
      title: 'Breadcrumb Dark',
      type: 'link'
    }, {
      path: '/features/breadcrumb-parallex-bg',
      title: 'Breadcrumb Parallex-Bg',
      type: 'link'
    }, {
      path: '/features/breadcrumb-bg',
      title: 'Breadcrumb Bg',
      type: 'link'
    }, {
      path: '/features/breadcrumb-gallery',
      title: 'Breadcrumb Gallery',
      type: 'link'
    }, {
      path: '/features/breadcrumb-video',
      title: 'Breadcrumb Video',
      type: 'link'
    }]
  }, {
    title: 'Footer Style',
    type: 'link',
    children: [{
      path: '/features/footer-default',
      title: 'Footer-Default',
      type: 'link'
    }, {
      path: '/features/footer-light',
      title: 'Footer-Light',
      type: 'link'
    }, {
      path: '/features/footer-dark',
      title: 'Footer-Dark',
      type: 'link'
    }, {
      path: '/features/footer-light2',
      title: 'Footer Dark Light',
      type: 'link'
    }, {
      path: '/features/footer-dark2',
      title: 'Footer Dark Gradient',
      type: 'link'
    }, {
      path: '/features/footer-dark3',
      title: 'Footer Creative',
      type: 'link'
    }]
  }, {
    title: 'Gallery',
    type: 'link',
    children: [{
      path: '/features/zoom-gallery',
      title: 'Zoom Gallery',
      type: 'link'
    }, {
      path: '/features/form-popup',
      title: 'Form Popup',
      type: 'link'
    }, {
      path: '/features/modal-popup',
      title: 'Modal Popup',
      type: 'link'
    }, {
      path: '/features/youtube-popup',
      title: 'Youtube Popup',
      type: 'link'
    }, {
      path: '/features/map-popup',
      title: 'Map Popup',
      type: 'link'
    }]
  }]
}];

/***/ }),

/***/ "./containers/common/header.js":
/*!*************************************!*\
  !*** ./containers/common/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./containers/common/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\containers\\common\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = props => {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.add('openSidebar');
  };

  return __jsx("header", {
    className: `${props.className || 'app2'} loding-header nav-abs custom-scroll  `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "m-r-auto",
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, props.className == 'agency' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/9.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }) : props.className == 'dark' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 41
    }
  }) : props.className == 'dark position-relative ecommerce' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 45
    }
  }) : props.className == 'dark bg-white ecommerce' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 45
    }
  }) : props.className == 'dark agency' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 53
    }
  }) : props.className == 'saas1' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/3.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 57
    }
  }) : __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/finallogo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 59
    }
  })), __jsx("div", {
    className: "responsive-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "toggle-nav",
    onClick: clickSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-bars text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }))), __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }), props.shop && __jsx("div", {
    className: "top-header-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "#",
    onClick: () => setSearch(!search),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 49
    }
  })), __jsx("div", {
    "aria-labelledby": "dropdownMenuButton",
    className: `dropdown-menu ${search && `show`} dropdown-menu-right`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 45
    }
  }, __jsx("form", {
    className: "form-inline search-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 53
    }
  }, __jsx("label", {
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 57
    }
  }, "Email"), __jsx("input", {
    className: "form-control-plaintext",
    placeholder: "Search....",
    type: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 57
    }
  }), __jsx("span", {
    className: "d-sm-none mobile-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 57
    }
  }))))), __jsx("li", {
    className: "account ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "#",
    onClick: () => setShow(!show),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 49
    }
  })), __jsx("div", {
    className: `dropdown-menu ${show && `show`} dropdown-menu-right`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 45
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/auth/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 81
    }
  }, "Login")), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 49
    }
  }, "Account"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 79
    }
  }, "Wishlist")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 79
    }
  }, "checkout")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./containers/common/nav.js":
/*!**********************************!*\
  !*** ./containers/common/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/menu */ "./constant/menu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_features_gallery_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../pages/features/gallery/popup */ "./pages/features/gallery/popup.js");
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\containers\\common\\nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Nav = () => {
  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.remove('openSidebar');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentUrl = location.pathname;
    mainmenu.filter(items => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = item => {
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].forEach(a => {
        if (_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(c => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  };

  return __jsx("div", {
    className: `navbar`,
    id: "togglebtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "responsive-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn-back",
    onClick: closeSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "back"))), __jsx("ul", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(0, 3).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: "#javascript",
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container resize ${menuItem.active ? 'opensubmenu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 49
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 73
        }
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 37
      }
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 45
      }
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: "#javascript",
      onClick: () => toggletNavActive(childrenItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 53
      }
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 57
      }
    }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open' : 'active'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 53
      }
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 61
      }
    }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenSubItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 69
      }
    }, __jsx("a", {
      className: "sub-menu-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 73
      }
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })), __jsx("ul", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(3, 7).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: "#javascript",
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container ${menuItem.title === 'Elements' ? 'resize' : ''} ${menuItem.active ? 'opensubmenu activeSubmenu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 49
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 73
        }
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 37
      }
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 45
      }
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: "#javascript",
      onClick: () => toggletNavActive(childrenItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 53
      }
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 57
      }
    }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open activeSubmenu' : 'active'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 53
      }
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 61
      }
    }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenSubItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 69
      }
    }, __jsx("a", {
      className: "sub-menu-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 73
      }
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  }), __jsx("li", {
    key: "10",
    class: " mega-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 17
    }
  }, __jsx(_pages_features_gallery_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./database/layouts/music/database.js":
/*!********************************************!*\
  !*** ./database/layouts/music/database.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  AlbumData: [{
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }],
  SponsorData: [{
    img: "/assets/images/music/sponser/1.png"
  }, {
    img: "/assets/images/music/sponser/2.png"
  }, {
    img: "/assets/images/music/sponser/3.png"
  }, {
    img: "/assets/images/music/sponser/4.png"
  }, {
    img: "/assets/images/music/sponser/5.png"
  }, {
    img: "/assets/images/music/sponser/6.png"
  }, {
    img: "/assets/images/music/sponser/7.png"
  }, {
    img: "/assets/images/music/sponser/8.png"
  }, {
    img: "/assets/images/music/sponser/9.png"
  }, {
    img: "/assets/images/music/sponser/10.png"
  }, {
    img: "/assets/images/music/sponser/11.png"
  }, {
    img: "/assets/images/music/sponser/12.png"
  }],
  GalleryData: [{
    img: "/assets/images/music/gallery/1.jpg",
    tag: "Special Music Event",
    year: "2019"
  }, {
    img: "/assets/images/music/gallery/2.jpg",
    tag: "Special Music Event",
    year: "2019"
  }, {
    img: "/assets/images/music/gallery/3.png",
    tag: "Special Music Event",
    year: "2019"
  }, {
    img: "/assets/images/music/gallery/4.jpg",
    tag: "Special Music Event",
    year: "2019"
  }, {
    img: "/assets/images/music/gallery/5.jpg",
    tag: "Special Music Event",
    year: "2019"
  }],
  BlogData: [{
    img: "/assets/images/event/blog/1.jpg",
    role: 'admin',
    date: '5 September 2019',
    title: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .'
  }, {
    img: "/assets/images/event/blog/2.jpg",
    role: 'admin',
    date: '5 September 2019',
    title: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .'
  }, {
    img: "/assets/images/event/blog/3.jpg",
    role: 'admin',
    date: '5 September 2019',
    title: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .'
  }, {
    img: "/assets/images/event/blog/2.jpg",
    role: 'admin',
    date: '5 September 2019',
    title: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .'
  }],
  TestimonialData: [{
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    title: 'Alan Licker',
    role: 'CEO OF SC.'
  }, {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    title: 'Alan Licker',
    role: 'CEO OF SC.'
  }],
  FooterData: [{
    add1: 'SHOW ADDRESS',
    add2: 'Exllasa Mall',
    add3: 'City mall, marid'
  }, {
    add1: 'CONTACT US',
    add2: '+09 56895689',
    add3: '+09 56895690'
  }, {
    add1: 'DROP YOUR MAIL',
    add2: 'demo1@gmail.com',
    add3: 'demo123@gmail.com'
  }],
  ArtistData: [{
    img: '/assets/images/music/artist/1.png',
    name: 'decorner',
    music: 'musician',
    sr: '70% Complete'
  }, {
    img: '/assets/images/music/artist/2.png',
    name: 'decorner',
    music: 'musician',
    sr: '70% Complete'
  }, {
    img: '/assets/images/music/artist/3.png',
    name: 'decorner',
    music: 'musician',
    sr: '70% Complete'
  }, {
    img: '/assets/images/music/artist/1.png',
    name: 'decorner',
    music: 'musician',
    sr: '70% Complete'
  }]
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\features\\gallery\\popup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }






const Popup = () => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])();
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('1');
  const {
    0: postData,
    1: setPostData
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    email: '',
    password: ''
  });
  const {
    0: formErrors,
    1: setFormErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({});

  const toggle = () => {
    setModal(!modal);
  };

  const url = 'http://localhost:5000/user/forgetpass';
  const log = postData.email;

  const forgetpass = () => axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(url, {
    email: postData.email
  }).then(res => {
    console.log(log);
    console.log(res);
    console.log(res.data);
  }).catch(function (error) {
    console.log(postData.email);
    console.log('Show error notification!');
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_8___default.a.reject(error);
  });

  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    email: '',
    password: '',
    token: ''
  });
  const {
    0: newUser,
    1: setNewUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    email: '',
    password: '',
    ConfirmPass: '',
    firstname: '',
    lastName: ''
  });
  const {
    0: signinerr,
    1: SetSigninerr
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    status: '',
    message: ''
  });
  const {
    0: badPass,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    message: ''
  });
  const {
    0: sign_forget,
    1: setSignOrForget
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: buttonValue,
    1: setButtonValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");

  const signup = e => {
    e.preventDefault();
    console.log("implement sign up here");
    if (newUser.password == newUser.ConfirmPass) axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://localhost:5000/user/signup", {
      email: newUser.email,
      password: newUser.password,
      firstName: newUser.firstName,
      lastName: newUser.lastName
    }).then(res => {
      setError(_objectSpread({}, badPass, {
        message: "aaa"
      }));
    }).catch(function (error) {
      console.log(error.response.data);
    });else setError(_objectSpread({}, badPass, {
      message: "Password confirmation doesnt match !"
    }));
  };

  const signin = () => {
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://localhost:5000/user/signin", {
      email: log,
      password: postData.password
    }).then(res => {
      setUser(_objectSpread({}, user, {
        email: res.data.result.email,
        password: res.data.result.password,
        token: res.data.token
      }));
      const current_user = {
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
    }).catch(function (error) {
      if (error.response) SetSigninerr(_objectSpread({}, signinerr, {
        status: error.response.status,
        message: error.response.data.message
      }));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    if (JSON.parse(localStorage.getItem("user"))) setButtonValue(true);else setButtonValue(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setButtonValue(!buttonValue);
  }; //


  return __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    md: "6",
    className: "offset-md-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    className: "popup-with-form btn btn-default primary-btn",
    hidden: buttonValue,
    onClick: () => {
      toggle();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, "Login"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    className: "popup-with-form btn btn-default primary-btn",
    hidden: !buttonValue,
    onClick: () => {
      logout();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "Logout")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "X"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "modal-body login-modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
    tabs: true,
    className: "nav nav-pills mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    className: activeTab == '1' ? 'active' : '',
    onClick: () => setActiveTab('1'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, "Login")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
    className: activeTab == '2' ? 'active' : '',
    onClick: () => setActiveTab('2'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, "Sign Up"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabContent"], {
    className: "tab-content",
    activeTab: activeTab,
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "form-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "inputEmail",
    __self: undefined,
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
    onChange: e => setPostData(_objectSpread({}, postData, {
      email: e.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 45
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "inputPassword05",
    __self: undefined,
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
    onChange: e => setPostData(_objectSpread({}, postData, {
      password: e.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 45
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    style: {
      color: 'red'
    },
    for: "inputEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, signinerr.message)), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase",
    onClick: () => signin(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 37
    }
  }, "Login"), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase",
    type: "submit",
    onClick: () => forgetpass(),
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "form-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "inputEmail05",
    __self: undefined,
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
    onChange: e => setNewUser(_objectSpread({}, newUser, {
      email: e.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 45
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "inputPassword04",
    __self: undefined,
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
    onChange: e => setNewUser(_objectSpread({}, newUser, {
      password: e.target.value
    })),
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 45
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "inputPassword4",
    __self: undefined,
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
    onChange: e => setNewUser(_objectSpread({}, newUser, {
      ConfirmPass: e.target.value
    })),
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 45
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    style: {
      color: 'red'
    },
    for: "errorMessage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 49
    }
  }, badPass.message))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "inputAddress",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "inputAddress",
    __self: undefined,
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
    onChange: e => setNewUser(_objectSpread({}, newUser, {
      firstName: e.target.value
    })),
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
    for: "inputAddress",
    __self: undefined,
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
    onChange: e => setNewUser(_objectSpread({}, newUser, {
      lastName: e.target.value
    })),
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 41
    }
  })), __jsx("button", {
    className: "btn btn-default primary-btn text-uppercase",
    onClick: e => signup(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 37
    }
  }, "Sign Up"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/common/header */ "./containers/common/header.js");
/* harmony import */ var _layouts_sections_music_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/sections/music/banner */ "./pages/layouts/sections/music/banner.js");
/* harmony import */ var _layouts_sections_music_sideSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/sections/music/sideSection */ "./pages/layouts/sections/music/sideSection.js");
/* harmony import */ var _layouts_sections_music_ProfileSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/sections/music/ProfileSection */ "./pages/layouts/sections/music/ProfileSection.js");
/* harmony import */ var _layouts_sections_music_album__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/sections/music/album */ "./pages/layouts/sections/music/album.js");
/* harmony import */ var _layouts_sections_music_artist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/sections/music/artist */ "./pages/layouts/sections/music/artist.js");
/* harmony import */ var _layouts_sections_music_sponsor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/sections/music/sponsor */ "./pages/layouts/sections/music/sponsor.js");
/* harmony import */ var _layouts_sections_music_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/sections/music/gallery */ "./pages/layouts/sections/music/gallery.js");
/* harmony import */ var _layouts_sections_music_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/sections/music/video */ "./pages/layouts/sections/music/video.js");
/* harmony import */ var _layouts_sections_music_booking__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/sections/music/booking */ "./pages/layouts/sections/music/booking.js");
/* harmony import */ var _layouts_sections_music_blog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/sections/music/blog */ "./pages/layouts/sections/music/blog.js");
/* harmony import */ var _layouts_sections_music_subscribe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/sections/music/subscribe */ "./pages/layouts/sections/music/subscribe.js");
/* harmony import */ var _layouts_sections_music_testimonial__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/sections/music/testimonial */ "./pages/layouts/sections/music/testimonial.js");
/* harmony import */ var _layouts_sections_music_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/sections/music/footer */ "./pages/layouts/sections/music/footer.js");
/* harmony import */ var _layouts_sections_music_copyright__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/sections/music/copyright */ "./pages/layouts/sections/music/copyright.js");
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components

















const Music = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#223b7b');
    document.body.style.setProperty('--secondary', '#fff');
    document.body.style.setProperty('--light', '#2245a0');
    document.body.style.setProperty('--dark', '#213672');
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Music Layout ")), __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "music loding-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_sideSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_ProfileSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_album__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_artist__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_sponsor__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_gallery__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_video__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_booking__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_blog__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_subscribe__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_testimonial__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_music_copyright__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Music);

/***/ }),

/***/ "./pages/layouts/sections/music/ProfileSection.js":
/*!********************************************************!*\
  !*** ./pages/layouts/sections/music/ProfileSection.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\ProfileSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProfileSection = () => {
  const {
    0: sideSection,
    1: setSideSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const removeSection = () => {
    setSideSection(false);
    document.getElementById('profile-section').classList.remove('d-block');
  };

  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstName: "",
    lastName: ""
  });
  const {
    0: imgsrc,
    1: setImgsrc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(user);
    if (user) setImgsrc("images/users/" + user["firstName"] + user["lastName"] + ".jpg");
  }, [user]);
  return __jsx("div", {
    className: "music side-section",
    id: "profile-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    "aria-label": "media player",
    className: "jp-audio",
    id: "jp_container_1_1",
    role: "application",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jp-type-playlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jp-gui jp-interface",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "side-player",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "gradient-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "animation-circle-inverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  }), __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 41
    }
  }), __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 41
    }
  })), __jsx("h6", {
    className: "now-play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }, "Profile")), __jsx("img", {
    alt: "",
    className: "img-fluid girls",
    src: imgsrc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "author-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, __jsx("h5", {
    className: "song-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, user ? user["firstName"] : null, " ", user ? user["lastName"] : null), __jsx("h6", {
    className: "song-sub-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, "Zrial doj"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jp-progress",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "jp-seek-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "jp-play-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }))), __jsx("div", {
    className: "jp-time-holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx("div", {
    "aria-label": "time",
    className: "jp-current-time",
    role: "timer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, "\xA0"), __jsx("div", {
    "aria-label": "duration",
    className: "jp-duration",
    role: "timer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "\xA0")), __jsx("div", {
    className: "jp-controls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "button-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, __jsx("button", {
    className: "jp-previous",
    role: "button",
    tabIndex: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 41
    }
  }), __jsx("button", {
    className: "jp-play",
    role: "button",
    tabIndex: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }), __jsx("button", {
    className: "jp-next",
    role: "button",
    tabIndex: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  })), __jsx("button", {
    className: "btn-sidebar",
    onClick: removeSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-times",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  }))), __jsx("div", {
    className: "jp-playlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 41
    }
  }, "\xA0")))), __jsx("div", {
    className: "jp-no-solution",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, "Update Required"), "To play the media you will need to either update your browser to a recent version or update your", __jsx("a", {
    href: "http://get.adobe.com/flashplayer/",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, "Flash plugin"), "."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileSection);

/***/ }),

/***/ "./pages/layouts/sections/music/album.js":
/*!***********************************************!*\
  !*** ./pages/layouts/sections/music/album.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/layouts/music/database */ "./database/layouts/music/database.js");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\album.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Album = () => __jsx("section", {
  className: "music album bg-black pb-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title title4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 29
  }
}, "Featured streamers")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 29
  }
}, "Our Latest Album and details Song 2019")))), _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__["AlbumData"].length > 0 ? _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__["AlbumData"].map((item, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "3",
  md: "4",
  sm: "6",
  key: index,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "album-list overlay-box text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 29
  }
}, __jsx("h5", {
  className: "text-uppercase list-head",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 33
  }
}, item.name), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 33
  }
}, __jsx("h6", {
  className: "item-sublist",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 37
  }
}, item.date), __jsx("h6", {
  className: "item-sublist",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 37
  }
}, item.day), __jsx("h6", {
  className: "item-sublist",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 37
  }
}, item.time))))) : 'Album Data Not Found')));

/* harmony default export */ __webpack_exports__["default"] = (Album);

/***/ }),

/***/ "./pages/layouts/sections/music/artist.js":
/*!************************************************!*\
  !*** ./pages/layouts/sections/music/artist.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../database/layouts/music/database */ "./database/layouts/music/database.js");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\artist.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }]
};

const Artist = () => __jsx("section", {
  className: "music artist bg-artist bg-shadow-top-bottom",
  id: "artist",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title title4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 25
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 29
  }
}, "artists")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 29
  }
}, "Our artists 2019")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 17
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "owl-carousel owl-theme artist-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 21
  }
}), _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__["ArtistData"].map((data, i) => {
  return __jsx("div", {
    className: "item",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "album-artist text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid set-relative overlay-img",
    src: data.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "overlay-box2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "set-abs bottom-0 w-100 text-left set-z-index",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "singers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "m-b-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 49
    }
  }, __jsx("h5", {
    className: "name text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 53
    }
  }, data.name), __jsx("h6", {
    className: "musician text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 53
    }
  }, data.music)), __jsx("div", {
    className: "rate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 49
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "progress",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 57
    }
  }, __jsx("div", {
    "aria-valuemax": "100",
    "aria-valuemin": "0",
    "aria-valuenow": "70",
    className: "progress-bar",
    role: "progressbar",
    style: {
      width: "70%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 61
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 65
    }
  }, data.sr))))))), __jsx("div", {
    className: "set-abs cds",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 41
    }
  }, __jsx("img", {
    alt: "",
    className: "cd-animation",
    src: "/assets/images/music/artist/cd1.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 45
    }
  }), __jsx("img", {
    alt: "",
    className: "elipse",
    src: "/assets/images/music/artist/Ellipse.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 45
    }
  }))));
})), __jsx("div", {
  className: "artist-text text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 21
  }
}, __jsx("p", {
  className: "text-white text-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 25
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), __jsx("h4", {
  className: "text-uppercase dummy-text text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 25
  }
}, "\u201C dummy text of the \u201D"))))));

/* harmony default export */ __webpack_exports__["default"] = (Artist);

/***/ }),

/***/ "./pages/layouts/sections/music/banner.js":
/*!************************************************!*\
  !*** ./pages/layouts/sections/music/banner.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax-tilt */ "react-parallax-tilt");
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProfileSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileSection */ "./pages/layouts/sections/music/ProfileSection.js");
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Banner = () => {
  const {
    0: sideSection,
    1: setSideSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: profileSection,
    1: setProfileSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const sidesection = () => {
    if (!sideSection) {
      setSideSection(true);
      document.querySelector('.side-section').classList.add('d-block');
    } else {
      setSideSection(false);
      document.querySelector('.side-section').classList.remove('d-block');
    }
  };

  const profilesection = () => {
    if (!profileSection) {
      setProfileSection(true);
      document.getElementById('profile-section').classList.add('d-block');
    } else {
      setProfileSection(false);
      document.getElementById('profile-section').classList.remove('d-block');
    }
  };

  return __jsx("section", {
    className: "music header",
    id: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "music-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "music-bg bg bg-shadow-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1___default.a, {
    perspective: "20000",
    transitionSpeed: "3000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "text-center w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "img-height",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/music/microSm.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  })))))), __jsx("div", {
    className: "right-side",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/music/icons/aero.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "2019 ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 26
    }
  }, "18"))), __jsx("div", {
    className: "left-side",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("h6", {
    className: "follow-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "follow us"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/music/icons/insta.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/music/icons/twitter.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/music/icons/facebook.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "music-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "10",
    className: "offset-md-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "play-bg d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "song-text-container h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "d-flex h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "center-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/music/icons/girl.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "song-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }, __jsx("h5", {
    className: "text-white song-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 41
    }
  }, "Latest Song"), __jsx("h6", {
    className: "text-white song-sub-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 41
    }
  }, "Zrial doj")))), __jsx("div", {
    className: "play-setting m-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("div", {
    "aria-label": "media player",
    className: "jp-audio",
    id: "jp_container_1",
    role: "application",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "jp-type-playlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "jp-gui jp-interface p-0 d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "jp-controls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 45
    }
  }, __jsx("button", {
    className: "jp-play m-r-15",
    role: "button",
    tabIndex: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 49
    }
  })), __jsx("a", {
    onClick: sidesection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 45
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-ellipsis-v",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 49
    }
  })), __jsx("div", {
    onClick: profilesection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 45
    }
  }, "tra feya ??"))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./pages/layouts/sections/music/blog.js":
/*!**********************************************!*\
  !*** ./pages/layouts/sections/music/blog.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../database/layouts/music/database */ "./database/layouts/music/database.js");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: false,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }]
};

const Blog = () => __jsx("section", {
  className: "music blog bg-album bg-shadow-top-bottom pb-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title title4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 25
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 29
  }
}, "blog")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 29
  }
}, "our new activities")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 17
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "owl-carousel owl-theme",
  id: "blog-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 21
  }
}), _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__["BlogData"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: item.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "blog-info set-abs bottom-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "center-text flex m-b-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 45
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-user-o m-r-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 49
    }
  }), __jsx("h6", {
    className: "m-r-25 font-blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 49
    }
  }, item.role), __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-calendar-o m-r-5 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 49
    }
  }), __jsx("h6", {
    className: "font-blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 49
    }
  }, item.date)), __jsx("h4", {
    className: "blog-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 45
    }
  }, item.title), __jsx("p", {
    className: "borders-before",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 45
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 75
    }
  }, item.heading)), __jsx("p", {
    className: "small-font",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 45
    }
  }, item.desc), __jsx("div", {
    className: "social-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 45
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "center-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 61
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-facebook center-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 65
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "center-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 61
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-twitter center-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 65
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "center-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 61
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-google center-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 65
    }
  })))))))));
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./pages/layouts/sections/music/booking.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/music/booking.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\booking.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Booking = () => __jsx("section", {
  className: "music booking bg-black pb-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title title4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 29
  }
}, "event booking")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 29
  }
}, "we are wait for you")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title title3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 25
  }
}, __jsx("p", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 29
  }
}, "Register now and reserve your seat for this ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 99
  }
}, "year's Unice,"), "the largest", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 29
  }
}, "web development"), " and online marketing ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 79
  }
}, "conference in UK,"), "covering everything you need to know in order to develop a successful online business."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
  className: "form-inline m-b-50 row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 17
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 25
  }
}, __jsx("input", {
  placeholder: "FIRST NAME",
  type: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 29
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 25
  }
}, __jsx("input", {
  placeholder: "LAST NAME",
  type: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 29
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 25
  }
}, __jsx("input", {
  placeholder: "EMAIL",
  type: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 29
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 25
  }
}, __jsx("input", {
  placeholder: "MOBILE",
  type: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 29
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 25
  }
}, __jsx("input", {
  placeholder: "COMPANY NAME",
  type: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 29
  }
})))), __jsx("div", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 17
  }
}, __jsx("a", {
  className: "btn btn-default btn-gradient m-0-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 21
  }
}, "register")))));

/* harmony default export */ __webpack_exports__["default"] = (Booking);

/***/ }),

/***/ "./pages/layouts/sections/music/copyright.js":
/*!***************************************************!*\
  !*** ./pages/layouts/sections/music/copyright.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\copyright.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Copyright = () => __jsx("div", {
  className: "music copyright copyright-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "5",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "link-horizontal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 33
  }
}, "home")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 33
  }
}, "timeline")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 33
  }
}, "artist")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 33
  }
}, "sponsors ")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 33
  }
}, "contact"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "2",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "link-horizontal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 25
  }
}, __jsx("ul", {
  className: "justify-content-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 29
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 37
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 41
  }
}))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 37
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-twitter",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 41
  }
}))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 37
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-google",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 41
  }
}))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 37
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-instagram",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 41
  }
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "5",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "m-l-auto center-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 21
  }
}, __jsx("p", {
  className: "copyright-text text-white text-right op-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 25
  }
}, "\xA9 2020 Unice powered by Pixelstrap"))))));

/* harmony default export */ __webpack_exports__["default"] = (Copyright);

/***/ }),

/***/ "./pages/layouts/sections/music/footer.js":
/*!************************************************!*\
  !*** ./pages/layouts/sections/music/footer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/layouts/music/database */ "./database/layouts/music/database.js");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Footer = () => __jsx("footer", {
  className: "music bg-footer bg-shadow-top-bottom pt-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__["FooterData"].map((item, i) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "4",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "contact-details text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "contact-heading gradient-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 33
    }
  }, item.add1), __jsx("h6", {
    className: "contact-sub-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 33
    }
  }, item.add2, ","), __jsx("h6", {
    className: "contact-sub-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 33
    }
  }, item.add3, ".")));
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
  className: "form-footer p-t-50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 17
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6",
  sm: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 25
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  placeholder: "your name",
  type: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 29
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6",
  sm: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 25
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  placeholder: "your email",
  type: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 29
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 25
  }
}, __jsx("textarea", {
  className: "form-control",
  placeholder: "your message",
  rows: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 29
  }
}))), __jsx("div", {
  className: "booking",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 21
  }
}, __jsx("a", {
  className: "btn btn-default btn-gradient m-0-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 25
  }
}, "send"))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/layouts/sections/music/gallery.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/music/gallery.js ***!
  \*************************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../database/layouts/music/database */ "./database/layouts/music/database.js");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\gallery.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }






const LeftNavButton = props => {
  const {
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: "slick-arrow",
    style: _objectSpread({}, style, {
      display: 'block',
      position: 'absolute',
      bottom: '0',
      marginLeft: '43%',
      padding: '38px 38px 6px 38px'
    }),
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/music/gallery/gallery-icon/left.png",
    alt: "arrow_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
};

const RightNavButton = props => {
  const {
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: "slick-arrow",
    style: _objectSpread({}, style, {
      display: 'block',
      marginLeft: '48%',
      padding: '38px 38px 6px 38px'
    }),
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/music/gallery/gallery-icon/right.png",
    alt: "arrow_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }));
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  centerMode: true,
  centerPadding: '0px',
  prevArrow: __jsx(LeftNavButton, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 16
    }
  }),
  nextArrow: __jsx(RightNavButton, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 16
    }
  }),
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 575,
    settings: {
      slidesToShow: 1
    }
  }]
};

const Gallery = () => __jsx("section", {
  className: "music gallery bg-gallery bg-shadow-top-bottom",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title title4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 25
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 29
  }
}, "gallery Music")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 29
  }
}, "Latest Photo Our Music Event")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 17
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
  className: "gallery-slider",
  id: "gallery-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 21
  }
}), _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_10__["GalleryData"].map((item, index) => {
  return __jsx("div", {
    className: "item",
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx("img", {
    className: "img-fluid w-100",
    alt: "",
    src: item.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "abs-center w-100 text-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }, __jsx("h5", {
    className: "text-white overlay-text text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 41
    }
  }, item.tag, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 103
    }
  }, item.year))), __jsx("div", {
    className: "overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }));
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./pages/layouts/sections/music/sideSection.js":
/*!*****************************************************!*\
  !*** ./pages/layouts/sections/music/sideSection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\sideSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SideSection = () => {
  const {
    0: sideSection,
    1: setSideSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const removeSection = () => {
    setSideSection(false);
    document.querySelector('.side-section').classList.remove('d-block');
  };

  return __jsx("div", {
    className: "music side-section",
    id: "side-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    "aria-label": "media player",
    className: "jp-audio",
    id: "jp_container_1_1",
    role: "application",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jp-type-playlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jp-gui jp-interface",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "side-player",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "gradient-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "animation-circle-inverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 37
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 41
    }
  }), __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 41
    }
  }), __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 41
    }
  })), __jsx("h6", {
    className: "now-play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }, "now playing")), __jsx("img", {
    alt: "",
    className: "img-fluid girls",
    src: "/assets/images/music/icons/girl-side.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "author-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }, __jsx("h5", {
    className: "song-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 37
    }
  }, "Latest Song"), __jsx("h6", {
    className: "song-sub-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 37
    }
  }, "Zrial doj"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jp-progress",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "jp-seek-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "jp-play-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 41
    }
  }))), __jsx("div", {
    className: "jp-time-holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx("div", {
    "aria-label": "time",
    className: "jp-current-time",
    role: "timer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, "\xA0"), __jsx("div", {
    "aria-label": "duration",
    className: "jp-duration",
    role: "timer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, "\xA0")), __jsx("div", {
    className: "jp-controls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "button-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx("button", {
    className: "jp-previous",
    role: "button",
    tabIndex: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }), __jsx("button", {
    className: "jp-play",
    role: "button",
    tabIndex: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }), __jsx("button", {
    className: "jp-next",
    role: "button",
    tabIndex: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  })), __jsx("button", {
    className: "btn-sidebar",
    onClick: removeSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-times",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 41
    }
  }))), __jsx("div", {
    className: "jp-playlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }, "\xA0")))), __jsx("div", {
    className: "jp-no-solution",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }, "Update Required"), "To play the media you will need to either update your browser to a recent version or update your", __jsx("a", {
    href: "http://get.adobe.com/flashplayer/",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, "Flash plugin"), "."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideSection);

/***/ }),

/***/ "./pages/layouts/sections/music/sponsor.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/music/sponsor.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/layouts/music/database */ "./database/layouts/music/database.js");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\sponsor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Sponsor = () => __jsx("section", {
  className: "music bg-black p-0",
  id: "sponsor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  className: "sponsor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title title4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "text-uppercase",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 29
  }
}, "sponsors")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 29
  }
}, "Our new sponsors 2019")))), _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__["SponsorData"].map((item, index) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "3",
    md: "4",
    sm: "6",
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "sponsor-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "overlay-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 41
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: item.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 45
    }
  })))));
}))));

/* harmony default export */ __webpack_exports__["default"] = (Sponsor);

/***/ }),

/***/ "./pages/layouts/sections/music/subscribe.js":
/*!***************************************************!*\
  !*** ./pages/layouts/sections/music/subscribe.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\subscribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Subscribe = () => __jsx("section", {
  className: "music subscribe bg-black pb-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title title4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 29
  }
}, "subscribe")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 29
  }
}, "we are wait for you")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "6",
  md: "8",
  className: "offset-xl-3 offset-md-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "subscribe-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 21
  }
}, __jsx("h6", {
  className: "subscribe-main",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 25
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been")), __jsx("div", {
  className: "subscribe",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "center-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "form-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 29
  }
}, __jsx("div", {
  className: "flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 33
  }
}, __jsx("input", {
  className: "form-control text-capitalize",
  name: "email",
  placeholder: "Please Enter Your Email Address",
  type: "email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 37
  }
}), __jsx("div", {
  className: "button-primary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 37
  }
}, __jsx("button", {
  className: " btn btn-default btn-gradient text-white",
  type: "submit",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 41
  }
}, "send me"))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./pages/layouts/sections/music/testimonial.js":
/*!*****************************************************!*\
  !*** ./pages/layouts/sections/music/testimonial.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../database/layouts/music/database */ "./database/layouts/music/database.js");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\testimonial.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1
    }
  }]
};

const Testimonial = () => __jsx("section", {
  className: "music testimonial sponsor bg-shadow-top-bottom",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title title4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 25
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 29
  }
}, "testimonial")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 29
  }
}, "Our happy client")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "8",
  className: "offset-md-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "owl-carousel owl-theme music-testimonial-slider",
  id: "music-testimonial-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 21
  }
}), _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__["TestimonialData"].map((item, index) => {
  return __jsx("div", {
    className: "item",
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "text-center testimonial-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "testimonial-para",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 45
    }
  }, item.desc), __jsx("h6", {
    className: "gradient-text text-uppercase m-b-5 font-large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 45
    }
  }, item.title), __jsx("h6", {
    className: "font-small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 45
    }
  }, item.role))));
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "./pages/layouts/sections/music/video.js":
/*!***********************************************!*\
  !*** ./pages/layouts/sections/music/video.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Wissem\\Desktop\\PrimeTime\\client\\pages\\layouts\\sections\\music\\video.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Video = () => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const toggle = () => {
    setModal(!modal);
  };

  return __jsx("section", {
    className: "music bg-video format bg-shadow-top-bottom p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/music/singer.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "center-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "format-small-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, __jsx("h6", {
    className: "gradient-text hash-video",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 37
    }
  }, "#video")), __jsx("div", {
    className: "format-head-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "about-font-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }, "Anet Licker")), __jsx("div", {
    className: "format-sub-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "sub-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }, __jsx("h6", {
    className: "sub-small-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  }, "Performs in Slide Spring Tour")), __jsx("p", {
    className: "text-white sub-para",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  }, "The page builder elements that we\u2019ve created for you, make the website building process easy and fun.")), __jsx("div", {
    className: "m-b-40",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "link-horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 37
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 41
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 45
    }
  }, __jsx("a", {
    className: "button icon-btn d-flex",
    href: "#javascript",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 49
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-play video-icon center-content m-0",
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 53
    }
  }), __jsx("div", {
    className: "watch-now center-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 53
    }
  }, __jsx("h6", {
    className: "watch",
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 57
    }
  }, "Watch Now"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    centered: true,
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 49
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: toggle,
    className: "modal-no-header close-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 53
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    className: "iframe-modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 53
    }
  }, __jsx("iframe", {
    className: "mfp-iframe",
    frameborder: "0",
    allowfullscreen: "",
    src: "//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 57
    }
  }))))))), __jsx("div", {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, __jsx("h6", {
    className: "watch",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 49
    }
  }, "see all video", __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-arrow-right m-l-15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 84
    }
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wissem\Desktop\PrimeTime\client\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-parallax-tilt":
/*!**************************************!*\
  !*** external "react-parallax-tilt" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-parallax-tilt");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map