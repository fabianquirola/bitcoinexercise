webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Precio.js":
/*!******************************!*\
  !*** ./components/Precio.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Applications/MAMP/htdocs/bitcoinapp/components/Precio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Precio = function Precio(props) {
  var _props$precio = props.precio,
      price = _props$precio.price,
      percent_change_1h = _props$precio.percent_change_1h,
      percent_change_7d = _props$precio.percent_change_7d,
      percent_change_24h = _props$precio.percent_change_24h;
  return __jsx("div", {
    className: "card text-white bg-success mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Precio del Bitcoin"), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "precio Actual : $ ", price), __jsx("div", {
    className: "d-md-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("span", {
    className: "font-weigth-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\xDAltima Hora : ", percent_change_1h)), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    className: "font-weigth-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\xDAltimas 24 Horas : ", percent_change_24h)), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    className: "font-weigth-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\xDAltimas 7 d\xEDas : ", percent_change_7d)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Precio);

/***/ })

})
//# sourceMappingURL=index.js.8fd1a9278dc90e757fb6.hot-update.js.map