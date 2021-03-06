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
/******/ 	__webpack_require__.p = "undefined";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/get.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/get.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/get */ "core-js/library/fn/reflect/get");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/get.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/get.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _get; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/reflect/get */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/get.js");
/* harmony import */ var _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _superPropBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime-corejs2/helpers/esm/superPropBase.js");




function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1___default.a) {
    _get = _core_js_reflect_get__WEBPACK_IMPORTED_MODULE_1___default.a;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase__WEBPACK_IMPORTED_MODULE_3__["default"])(target, property);
      if (!base) return;

      var desc = _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/superPropBase.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/superPropBase.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
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
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "next/router");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/get */ "./node_modules/@babel/runtime-corejs2/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var store_createStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! store/createStore */ "./src/store/createStore.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");















 // 修复dev模式下切换页面样式丢失的问题
// TODO 待官方修复后删除此部分
// const fixDevStyle = () => {
//   const injectCss = (prev, href) => {
//     const link = prev.cloneNode()
//     link.href = href
//     prev.stale = true
//     prev.parentNode && prev.parentNode.insertBefore(link, prev)
//     link.onload = function() {
//       prev.parentNode && prev.parentNode.removeChild(prev)
//     }
//   }
//
//   document.head.querySelectorAll('link[href][rel=stylesheet]').forEach(link => {
//     if (!/styles\.chunk\.css/.test(link.href)) return
//     injectCss(link, `${link.href.split('?')[0]}?unix=${new Date().getTime()}`)
//   })
// }
//
// isProd || Router.events.on('beforeHistoryChange', fixDevStyle)
// fix end

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // tslint:disable-next-line
      var url = typeof window !== 'undefined' ? "url: ".concat(window.location.href, " ") : '';
      utils__WEBPACK_IMPORTED_MODULE_15__["tools"].ErrorLog("".concat(url, "handle a componentDidCatch: ").concat(error, "-").concat(errorInfo.componentStack)); // This is needed to render errors correctly in development / production

      Object(_babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp.prototype), "componentDidCatch", this).call(this, error, errorInfo);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// isProd || fixDevStyle()
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router,
          store = _this$props.store;
      var asPath = router.asPath,
          pathname = router.pathname,
          query = router.query;
      var url = {
        asPath: asPath,
        pathname: pathname,
        query: query
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        url: url,
        query: query
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12___default()(store_createStore__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(MyApp)));

/***/ }),

/***/ "./server/utils/axiosServer.ts":
/*!*************************************!*\
  !*** ./server/utils/axiosServer.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools */ "./server/utils/tools.ts");



 // 创建 axios 实例

var axiosServer = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  timeout: 15000,
  transformRequest: [function (data) {
    return querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(data);
  }]
}); // request 拦截器

axiosServer.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  Object(_tools__WEBPACK_IMPORTED_MODULE_3__["ErrorLog"])("serverService interceptors request error -- ".concat(error)); // Promise.resolve(error)
}); // response 拦截器

axiosServer.interceptors.response.use(function (res) {
  if (res.status === 200) {
    return res.data;
  }

  return res;
}, function (error) {
  var request = error.request,
      response = error.response,
      code = error.code,
      message = error.message;

  if (request && response) {
    Object(_tools__WEBPACK_IMPORTED_MODULE_3__["ErrorLog"])("serverService interceptors response error -- response: ".concat(response.status, " ").concat(response.statusText, " ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(response.data), "; request -- method: ").concat(request.method, "; path: ").concat(request._headers && request._headers.host).concat(request.path, "; header: ").concat(request._header));
  } else {
    Object(_tools__WEBPACK_IMPORTED_MODULE_3__["ErrorLog"])("serverService interceptors response error -- code: ".concat(code, ", message: ").concat(message));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (axiosServer);

/***/ }),

/***/ "./server/utils/config.ts":
/*!********************************!*\
  !*** ./server/utils/config.ts ***!
  \********************************/
/*! exports provided: isProd, isDev, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProd", function() { return isProd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDev", function() { return isDev; });
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);

var homedir = os__WEBPACK_IMPORTED_MODULE_0___default.a.homedir();
var name = homedir.replace('/Users/', '');
var REACT_APP_API_ENV = "dev" || false;
var TEST = undefined || '';
var isProd = REACT_APP_API_ENV === 'prod'; // 发布环境编辑

var isDev = "development" !== 'production'; // 调试环境变量

var configLocalPath = "".concat(homedir, "/airent/").concat(name, "/config-local/");
var configs = {
  dev: {
    host: 'http://test12.mm.t.xianghuanji.com/',
    host2: 'http://test12.bfa.t.xianghuanji.com/',
    host3: 'http://test5.bfa.flow.t.xianghuanji.com/',
    rsaKey: {
      private: "".concat(configLocalPath, "/mobile_new/config/link_rsa/private.pem"),
      public: "".concat(configLocalPath, "/mobile_new/config/link_rsa/public.pem")
    },
    rsaKeyForBFA: {
      private: "".concat(configLocalPath, "/bbf/config/xhj_app/private.pem"),
      public: "".concat(configLocalPath, "/bbf/config/xhj_app/public.pem")
    },
    redis: {
      host: '47.110.141.101',
      port: 6379,
      db: 15,
      password: 'testx1An9huaMjI',
      prefix: 'Airent-Node-',
      version: '-10000',
      isDebug: true
    },
    riskControlHost: 'http://test7.riskc.t.xianghuanji.com/',
    easeuHost: 'http://test7.easeua.t.xianghuanji.com/'
  },
  test: {
    host: "http://test".concat(TEST, ".mm.t.xianghuanji.com/"),
    host2: "http://test".concat(TEST, ".bfa.t.xianghuanji.com/"),
    host3: "http://test".concat(TEST, ".bfa.flow.t.xianghuanji.com/"),
    rsaKey: {
      private: "/code/www/deploy/webroot/test".concat(TEST, "/config-local/mobile_new/config/link_rsa/private.pem"),
      public: "/code/www/deploy/webroot/test".concat(TEST, "/config-local/mobile_new/config/link_rsa/public.pem")
    },
    rsaKeyForBFA: {
      private: "/code/www/deploy/webroot/test".concat(TEST, "/config-local/bbf/config/xhj_app/private.pem"),
      public: "/code/www/deploy/webroot/test".concat(TEST, "/config-local/bbf/config/xhj_app/public.pem")
    },
    redis: {
      host: '47.110.141.101',
      port: 6379,
      db: 15,
      password: 'testx1An9huaMjI',
      prefix: 'Airent-Node-',
      version: '-10000',
      isDebug: true
    },
    riskControlHost: "http://test".concat(TEST, ".riskc.t.xianghuanji.com/"),
    easeuHost: "http://test".concat(TEST, ".easeua.t.xianghuanji.com/")
  },
  stage: {
    host: "http://stage".concat(TEST, ".m.stage.xianghuanji.com/"),
    host2: "http://stage".concat(TEST, ".bfa.stage.xianghuanji.com/"),
    host3: "http://stage".concat(TEST, ".bfa.flow.stage.xianghuanji.com/"),
    rsaKey: {
      private: "/code/www/deploy/webroot/stage".concat(TEST, "/config-stage/mobile_new/config/link_rsa/private.pem"),
      public: "/code/www/deploy/webroot/stage".concat(TEST, "/config-stage/mobile_new/config/link_rsa/public.pem")
    },
    rsaKeyForBFA: {
      private: "/code/www/deploy/webroot/stage".concat(TEST, "/config-stage/bbf/config/xhj_app/private.pem"),
      public: "/code/www/deploy/webroot/stage".concat(TEST, "/config-stage/bbf/config/xhj_app/public.pem")
    },
    redis: {
      host: '127.0.0.1',
      port: 6379,
      db: 15,
      password: 'stagex1An9huaMjI',
      prefix: 'Airent-Node-',
      version: '-10000',
      isDebug: false
    },
    riskControlHost: "http://stage".concat(TEST, ".riskc.stage.xianghuanji.com/"),
    easeuHost: "http://stage".concat(TEST, ".easeuali.stage.xianghuanji.com/")
  },
  beta: {
    host: 'http://m.beta.xianghuanji.com/',
    host2: 'http://bfa.beta.xianghuanji.com/',
    host3: 'http://bfa.flow.beta.xianghuanji.com/',
    rsaKey: {
      private: '/code/www/deploy/webroot/config_online/current/mobile_new/config/link_rsa/private.pem',
      public: '/code/www/deploy/webroot/config_online/current/mobile_new/config/link_rsa/public.pem'
    },
    rsaKeyForBFA: {
      private: '/code/www/deploy/webroot/config_online/current/bbf/config/xhj_app/private.pem',
      public: '/code/www/deploy/webroot/config_online/current/bbf/config/xhj_app/public.pem'
    },
    redis: {
      host: '114.55.8.32',
      port: 6379,
      db: 15,
      password: 'betax1An9huaMjI',
      prefix: 'Airent-Node-',
      version: '-10000',
      isDebug: false
    },
    riskControlHost: 'http://riskp.beta.xianghuanji.com/',
    easeuHost: 'http://easeuali.beta.xianghuanji.com/'
  },
  prod: {
    host: 'https://m.xianghuanji.com/',
    host2: 'https://bfa.xianghuanji.com/',
    host3: 'http://bfa.flow.xianghuanji.com/',
    rsaKey: {
      private: '/code/www/deploy/webroot/config_online/current/mobile_new/config/link_rsa/private.pem',
      public: '/code/www/deploy/webroot/config_online/current/mobile_new/config/link_rsa/public.pem'
    },
    rsaKeyForBFA: {
      private: '/code/www/deploy/webroot/config_online/current/bbf/config/xhj_app/private.pem',
      public: '/code/www/deploy/webroot/config_online/current/bbf/config/xhj_app/public.pem'
    },
    redis: {
      host: 'r-bp17cbfff8f8d674.redis.rds.aliyuncs.com',
      port: 6379,
      db: 15,
      password: 'x1An9huaMjI',
      prefix: 'Airent-Node-',
      version: '-10000',
      isDebug: false
    },
    riskControlHost: 'https://riskp.xianghuanji.com/',
    easeuHost: 'http://easeuali.xianghuanji.com/'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (configs[REACT_APP_API_ENV]);

/***/ }),

/***/ "./server/utils/crypto.ts":
/*!********************************!*\
  !*** ./server/utils/crypto.ts ***!
  \********************************/
/*! exports provided: RSAType, rasPrivateKeySign, rasPublicKeyVerify, publicEncrypt, privateDecrypt, DES3ECBDecrypt, md5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RSAType", function() { return RSAType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rasPrivateKeySign", function() { return rasPrivateKeySign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rasPublicKeyVerify", function() { return rasPublicKeyVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicEncrypt", function() { return publicEncrypt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privateDecrypt", function() { return privateDecrypt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DES3ECBDecrypt", function() { return DES3ECBDecrypt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "md5", function() { return md5; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


var RSAType; // sign with rsa private key

(function (RSAType) {
  RSAType[RSAType["SHA1"] = 0] = "SHA1";
  RSAType[RSAType["SHA256"] = 1] = "SHA256";
})(RSAType || (RSAType = {}));

function rasPrivateKeySign(_ref) {
  var origin = _ref.origin,
      privateKeyPath = _ref.privateKeyPath,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? RSAType.SHA1 : _ref$type;
  var privateKey = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(privateKeyPath, {
    encoding: 'utf8'
  });
  var algorithm = type === RSAType.SHA1 ? 'RSA-SHA1' : 'RSA-SHA256';
  var sign = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createSign(algorithm);
  sign.update(origin, 'utf8');
  return sign.sign(privateKey, 'base64');
}
// verify with rsa public key
function rasPublicKeyVerify(_ref2) {
  var origin = _ref2.origin,
      signature = _ref2.signature,
      publicKeyPath = _ref2.publicKeyPath,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? RSAType.SHA1 : _ref2$type;
  var publicKey = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(publicKeyPath, {
    encoding: 'utf8'
  });
  var algorithm = type === RSAType.SHA1 ? 'RSA-SHA1' : 'RSA-SHA256';
  var verify = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createVerify(algorithm);
  verify.update(origin, 'utf8');
  return verify.verify(publicKey, signature, 'base64');
}
// encrypt with public key
function publicEncrypt(_ref3) {
  var publicKeyPath = _ref3.publicKeyPath,
      toEncrypt = _ref3.toEncrypt;
  var publicKey = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(publicKeyPath, {
    encoding: 'utf8'
  });
  var buffer = Buffer.from(toEncrypt);
  var encrypted = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.publicEncrypt(publicKey, buffer);
  return encrypted.toString('base64');
}
// decrypt with private key
function privateDecrypt(_ref4) {
  var privateKeyPath = _ref4.privateKeyPath,
      toDecrypt = _ref4.toDecrypt;
  var privateKey = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(privateKeyPath, {
    encoding: 'utf8'
  });
  var buffer = Buffer.from(toDecrypt, 'base64');
  var decrypted = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.privateDecrypt(privateKey, buffer);
  return decrypted.toString('utf8');
}
// 3DES 解密 ECB 模式
function DES3ECBDecrypt(_ref5) {
  var key = _ref5.key,
      toDecrypt = _ref5.toDecrypt;
  key = key.padEnd(24, '0');
  var decipher = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createDecipheriv('des-ede3', key, '');
  var received = decipher.update(toDecrypt, 'base64', 'utf8');
  received += decipher.final('utf8');
  return received;
}
function md5(message) {
  var hash = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('md5');
  hash.update(message);
  return hash.digest('hex');
}

/***/ }),

/***/ "./server/utils/resource.ts":
/*!**********************************!*\
  !*** ./server/utils/resource.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resource; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.isempty */ "lodash.isempty");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _axiosServer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./axiosServer */ "./server/utils/axiosServer.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./server/utils/config.ts");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./crypto */ "./server/utils/crypto.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tools */ "./server/utils/tools.ts");







 // import omit from 'lodash.omit'







var Resource =
/*#__PURE__*/
function () {
  function Resource(specs) {
    var _this = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Resource);

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(specs).forEach(function (key) {
      var spec = specs[key];
      _this[key] = _this.actionBuilder(spec);
    });
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Resource, [{
    key: "actionBuilder",
    value: function actionBuilder(_ref) {
      var template = _ref.template,
          method = _ref.method,
          _ref$baseUrl = _ref.baseUrl,
          baseUrl = _ref$baseUrl === void 0 ? _config__WEBPACK_IMPORTED_MODULE_10__["default"].host2 : _ref$baseUrl;
      var buildUrl = this.getUrlBuilder(template);
      return function (params) {
        var url = buildUrl(params.query);
        var config = Resource.setRequestConfig(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, params, {
          url: url,
          method: method,
          baseUrl: baseUrl
        }));
        return _axiosServer__WEBPACK_IMPORTED_MODULE_9__["default"].request(config);
      };
    }
  }, {
    key: "getUrlBuilder",
    value: function getUrlBuilder(template) {
      return function (query) {
        if (!query) return template;

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(query).map(function (item) {
          if (template.includes(':' + item)) {
            template = template.replace(':' + item, query[item]);
          }
        });

        return template;
      };
    }
  }], [{
    key: "setRequestConfig",
    value: function setRequestConfig(c) {
      var config = {
        method: c.method,
        url: c.url,
        baseURL: c.baseUrl || _config__WEBPACK_IMPORTED_MODULE_10__["default"].host2
      };

      if (c.query && !lodash_isempty__WEBPACK_IMPORTED_MODULE_7___default()(c.query)) {
        // config.params = omit(c.query, 'timestamp')
        config.params = c.query;
      }

      if (c.body && !lodash_isempty__WEBPACK_IMPORTED_MODULE_7___default()(c.body)) {
        config.data = c.body;
      }

      if (c.headers && !lodash_isempty__WEBPACK_IMPORTED_MODULE_7___default()(c.headers)) {
        if (c.baseUrl === _config__WEBPACK_IMPORTED_MODULE_10__["default"].host) {
          config.headers = {
            'user-agent': c.headers['user-agent'],
            cookie: c.headers.cookie || ''
          };
        } else if ([_config__WEBPACK_IMPORTED_MODULE_10__["default"].host2, _config__WEBPACK_IMPORTED_MODULE_10__["default"].host3].includes(c.baseUrl)) {
          // Doc in http://code.aihuishou.com/airent/doc/issues/320
          // All header names are lower cased in axios
          var timestamp = Math.floor(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()() / 1000);
          config.headers = {
            timestamp: timestamp,
            sign: Object(_crypto__WEBPACK_IMPORTED_MODULE_11__["rasPrivateKeySign"])({
              origin: decodeURIComponent(querystring__WEBPACK_IMPORTED_MODULE_8___default.a.stringify(Object(_tools__WEBPACK_IMPORTED_MODULE_12__["dictSort"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, c.body, c.query, {
                timestamp: timestamp
              })))),
              type: _crypto__WEBPACK_IMPORTED_MODULE_11__["RSAType"].SHA256,
              privateKeyPath: _config__WEBPACK_IMPORTED_MODULE_10__["default"].rsaKeyForBFA.private
            }),
            userToken: c.headers.usertoken || '',
            userIdV2: c.headers.useridv2 || '',
            channelId: c.headers.channelid || '',
            platform: c.headers.platform || '',
            utmSource: c.headers.utmsource || '',
            utmMedium: c.headers.utmmedium || '',
            utmCampaign: c.headers.utmcampaign || ''
          };

          if (!c.headers.platform) {
            Object(_tools__WEBPACK_IMPORTED_MODULE_12__["ErrorLog"])("\u8B66\u544A: api ".concat(c.baseUrl).concat(c.url, " \u5728\u670D\u52A1\u7AEF\u8BF7\u6C42\u65F6\u7F3A\u5C11req\u53C2\u6570, \u8BF7\u5728getInitialProps\u4E2D\u6DFB\u52A0\uFF01: ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(c.headers)));
          } // console.log('[config.headers]', config.params, config.headers)

        } else {
          config.headers = c.headers;
        }
      }

      return config;
    }
  }, {
    key: "buildHeaders",
    value: function buildHeaders(req) {
      var lowercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var headers = {
        userToken: decodeURIComponent(req.cookies.userToken || ''),
        userIdV2: decodeURIComponent(req.cookies.user_id_v2 || ''),
        channelId: req.cookies.channelId || '0',
        platform: Object(_tools__WEBPACK_IMPORTED_MODULE_12__["getPlatform"])(req.useragent.source),
        utmSource: req.query.utm_source || req.cookies.utm_source || '',
        utmMedium: req.query.utm_medium || req.cookies.utm_medium || '',
        utmCampaign: req.query.utm_campaign || req.cookies.utm_campaign || ''
      };

      if (lowercase) {
        var result = {};

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(headers).forEach(function (key) {
          return result[key.toLocaleLowerCase()] = headers[key];
        });

        return result;
      } else {
        return headers;
      }
    }
  }]);

  return Resource;
}();

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Resource, "GET", 'get');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Resource, "POST", 'post');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Resource, "PUT", 'put');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Resource, "DELETE", 'delete');



/***/ }),

/***/ "./server/utils/tools.ts":
/*!*******************************!*\
  !*** ./server/utils/tools.ts ***!
  \*******************************/
/*! exports provided: renderProduct, renderCenterProduct, renderSteps, ErrorLog, dictSort, noop, checkLogin, isBase64, errorHandler, authHandler, BFA_Returns, getDomain, getPlatform, getUA, delayHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProduct", function() { return renderProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCenterProduct", function() { return renderCenterProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSteps", function() { return renderSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLog", function() { return ErrorLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictSort", function() { return dictSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLogin", function() { return checkLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBase64", function() { return isBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandler", function() { return errorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHandler", function() { return authHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BFA_Returns", function() { return BFA_Returns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomain", function() { return getDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlatform", function() { return getPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUA", function() { return getUA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayHandle", function() { return delayHandle; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_utils_crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../server/utils/crypto */ "./server/utils/crypto.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./server/utils/config.ts");







function renderProduct(oldProduct) {
  return {
    id: oldProduct.id || '',
    title: oldProduct.title || '',
    price: oldProduct.price || '',
    // tag: oldProduct.tag || '',
    // assurance: oldProduct.assurance || '',
    imgUrl: oldProduct.image || '',
    noBadge: true,
    baseFee: oldProduct.baseFee || ''
  };
}
function renderCenterProduct(oldProduct) {
  return {
    id: oldProduct.id_activity || '',
    title: oldProduct.title || '',
    price: oldProduct.perMonthPrice || '',
    imgUrl: oldProduct.activity_img || '',
    noBadge: true
  };
} // order/return steps

function renderSteps(old, index) {
  var tips = [old.tips.substring(0, old.tips.indexOf('\n')), old.tips.substring(old.tips.indexOf('\n') + 1)];
  return {
    remark: old.title,
    content: old.tips.indexOf('\n') === -1 ? [old.tips] : tips,
    status: index === 0 ? 1 : 5
  };
}
function ErrorLog(message) {
  var isClient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  console.error(message);
  _config__WEBPACK_IMPORTED_MODULE_6__["isProd"] && !isClient && axios__WEBPACK_IMPORTED_MODULE_4___default()({
    method: 'post',
    url: 'https://oapi.dingtalk.com/robot/send?access_token=ed88e1fa1793798f95cf7df824ca66a548399a9c772d2375fdd6f163fec78fd4',
    data: {
      msgtype: 'text',
      text: {
        content: message
      },
      at: {
        atMobiles: ['13023105710'],
        isAtAll: false
      }
    }
  });
}
function dictSort(obj) {
  var dict = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(obj).sort()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      dict[key] = obj[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return dict;
}
function noop() {} // tslint:disable-line:no-empty

function checkLogin(req) {
  var userId = req.cookies && req.cookies.user_id_v2 || req.headers && req.headers.useridv2;
  if (!userId || !isBase64(userId)) return false;

  try {
    var text = Object(_server_utils_crypto__WEBPACK_IMPORTED_MODULE_5__["DES3ECBDecrypt"])({
      key: '',
      toDecrypt: userId
    });

    var num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(text, 10);

    return num > 0;
  } catch (err) {
    return false;
  }
}
function isBase64(text) {
  return Buffer.from(text, 'base64').toString('base64') === text;
}
function errorHandler(res) {
  return {
    status: res && res.status || 500,
    code: res && res.code || 500,
    errorMsg: res && (res.msg || res.reason) || '网络请求错误'
  };
}
function authHandler() {
  return {
    status: 401,
    errorMsg: '登录认证失败'
  };
}
function BFA_Returns(res) {
  if (!res) throw new Error('node api no res');
  if ([1, 200].includes(res.code) || res.status === 101) return res.data;
  return errorHandler(res);
}
function getDomain(hostname) {
  if (hostname === 'm.xianghuanji.com') {
    return '.xianghuanji.com';
  }

  return hostname;
}
function getPlatform(userAgent) {
  if (/AlipayClient/.test(userAgent)) {
    return 'alipay';
  } else if (/MicroMessenger/.test(userAgent)) {
    return 'wechat';
  } else if (/enjoyChanging/.test(userAgent) && /platform\/iOS/.test(userAgent)) {
    return 'xhj_ios_app';
  } else if (/Android;enjoyChanging_native/.test(userAgent)) {
    return 'xhj_android_app';
  }

  return 'h5_browser';
}
function getUA(ua, channelId) {
  return {
    isAlipay: /AlipayClient/.test(ua),
    isWechat: /MicroMessenger/.test(ua),
    isApp: /enjoyChanging/.test(ua) || channelId === 19 || channelId === 22,
    isAndroidApp: /Android;enjoyChanging_native/.test(ua) || channelId === 22,
    isIOSApp: channelId === 19,
    // /enjoyChanging/.test(ua) && /platform\/iOS/.test(ua),
    isAhsApp: /aihuishou_official_/.test(ua),
    isNuomiApp: /Nuomi/.test(ua),
    isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1
  };
}
var delayHandle = function delayHandle(tick) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
    if (tick > 0) {
      setTimeout(function () {
        return resolve();
      }, tick * 1000);
    } else {
      resolve();
    }
  });
};

/***/ }),

/***/ "./src/actions/actionHelper.ts":
/*!*************************************!*\
  !*** ./src/actions/actionHelper.ts ***!
  \*************************************/
/*! exports provided: getHeaders, getHeaders2, getHeaders3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return getHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders2", function() { return getHeaders2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders3", function() { return getHeaders3; });
/* harmony import */ var store_createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/createStore */ "./src/store/createStore.ts");
/* harmony import */ var _server_utils_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/utils/resource */ "./server/utils/resource.ts");


var getHeaders = function getHeaders(req) {
  return req ? Object(store_createStore__WEBPACK_IMPORTED_MODULE_0__["getBbfHeaders"])(req.headers.cookie, req.headers['user-agent']) : {};
};
var getHeaders2 = function getHeaders2(req) {
  if (req) return _server_utils_resource__WEBPACK_IMPORTED_MODULE_1__["default"].buildHeaders(req); // tslint:disable-next-line

  return typeof window !== 'undefined' ? Object(store_createStore__WEBPACK_IMPORTED_MODULE_0__["getBfaHeaders"])() : {};
};
var getHeaders3 = function getHeaders3(req) {
  if (req) return Object(store_createStore__WEBPACK_IMPORTED_MODULE_0__["getQsyHeaders"])(req); // tslint:disable-next-line

  return typeof window !== 'undefined' ? Object(store_createStore__WEBPACK_IMPORTED_MODULE_0__["getQsyHeaders"])() : {};
};

/***/ }),

/***/ "./src/actions/app.ts":
/*!****************************!*\
  !*** ./src/actions/app.ts ***!
  \****************************/
/*! exports provided: initTabBar, toggleTabBar, hiddenTabBar, fetchRasPrivateKey, redirectLogin, checkLogin, redirectTo, fetchNavIcons, receiveCheckTradeDone, checkTradeDone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTabBar", function() { return initTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTabBar", function() { return toggleTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenTabBar", function() { return hiddenTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRasPrivateKey", function() { return fetchRasPrivateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectLogin", function() { return redirectLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLogin", function() { return checkLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNavIcons", function() { return fetchNavIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveCheckTradeDone", function() { return receiveCheckTradeDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTradeDone", function() { return checkTradeDone; });
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var actions_actionHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/actionHelper */ "./src/actions/actionHelper.ts");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/config */ "./src/utils/config.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/index */ "./src/utils/index.ts");











var initTabBar = Object(redux_actions__WEBPACK_IMPORTED_MODULE_8__["createAction"])(constant_index__WEBPACK_IMPORTED_MODULE_5__["INIT_TABBAR"]);
var toggleTabBar = Object(redux_actions__WEBPACK_IMPORTED_MODULE_8__["createAction"])(constant_index__WEBPACK_IMPORTED_MODULE_5__["TOGGLE_TABBAR"]);
var hiddenTabBar = Object(redux_actions__WEBPACK_IMPORTED_MODULE_8__["createAction"])(constant_index__WEBPACK_IMPORTED_MODULE_5__["HIDDEN_TABBAR"]);
var receiveRasPrivateKey = Object(redux_actions__WEBPACK_IMPORTED_MODULE_8__["createAction"])(constant_index__WEBPACK_IMPORTED_MODULE_5__["RAS_PRIVATE_KEY"]);
var fetchRasPrivateKey = function fetchRasPrivateKey() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(dispatch) {
        var _timespan, _ref2, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _timespan = new Date().getTime().toString();
                _context.next = 4;
                return utils_index__WEBPACK_IMPORTED_MODULE_10__["axios"].post('node-api/signature', {
                  origin: _timespan
                });

              case 4:
                _ref2 = _context.sent;
                data = _ref2.data;
                return _context.abrupt("return", data && dispatch(receiveRasPrivateKey({
                  key: 'openAlipay',
                  timespan: _timespan,
                  token: data.token
                })));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                utils_index__WEBPACK_IMPORTED_MODULE_10__["tools"].ErrorLog(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var redirectLogin =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref3) {
    var isServer, res, asPath, loginUrl;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            isServer = _ref3.isServer, res = _ref3.res, asPath = _ref3.asPath;
            // 支付宝芝麻、花呗渠道需静默登录，故跳转至php的中间件
            loginUrl = "/next-api/account/login?redirect=".concat(encodeURIComponent(asPath));

            if (!isServer) {
              _context2.next = 7;
              break;
            }

            res.redirect(loginUrl);
            res.end();
            _context2.next = 9;
            break;

          case 7:
            _context2.next = 9;
            return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(loginUrl);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function redirectLogin(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

var redirectBindPhone =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(_ref5) {
    var isServer, res, asPath, phone, url;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            isServer = _ref5.isServer, res = _ref5.res, asPath = _ref5.asPath, phone = _ref5.phone;
            url = phone ? "/myaccount/bind/bind-phone?phone=".concat(phone, "&redirect=").concat(encodeURIComponent(asPath)) : "/myaccount/bind/change-phone?redirect=".concat(encodeURIComponent(asPath));

            if (!isServer) {
              _context3.next = 7;
              break;
            }

            res.redirect(url);
            res.end();
            _context3.next = 9;
            break;

          case 7:
            _context3.next = 9;
            return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(url);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function redirectBindPhone(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

var getAlipayBindInfo =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(alipayUserId, req) {
    var url, headers, params, _ref8, data;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = 'node-api/account/bind_phone/alipay_user_bind_info';
            headers = Object(actions_actionHelper__WEBPACK_IMPORTED_MODULE_4__["getHeaders2"])(req);
            params = {
              // 这里特殊处理，h5传的参数是 alipay_user_id
              alipay_user_id: alipayUserId,
              type: 2
            };
            _context4.prev = 3;
            _context4.next = 6;
            return utils_index__WEBPACK_IMPORTED_MODULE_10__["axios"].get(url, {
              params: params,
              headers: headers
            });

          case 6:
            _ref8 = _context4.sent;
            data = _ref8.data;
            return _context4.abrupt("return", data);

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](3);
            utils_index__WEBPACK_IMPORTED_MODULE_10__["tools"].ErrorLog(_context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 11]]);
  }));

  return function getAlipayBindInfo(_x4, _x5) {
    return _ref7.apply(this, arguments);
  };
}();

var checkLogin = function checkLogin(_ref9) {
  var isServer = _ref9.isServer,
      res = _ref9.res,
      req = _ref9.req,
      asPath = _ref9.asPath;
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(_, getState) {
        var alipayUserId, isBindAlipay, data, expires;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (getState().getIn(['serverApp', 'auth', 'isLogin'])) {
                  _context5.next = 4;
                  break;
                }

                _context5.next = 3;
                return redirectLogin({
                  isServer: isServer,
                  res: res,
                  asPath: asPath
                });

              case 3:
                return _context5.abrupt("return", false);

              case 4:
                if (!(getState().getIn(['serverApp', 'utm', 'channelId']) === 41 || !getState().getIn(['serverApp', 'ua', 'isAlipay']) || _utils_config__WEBPACK_IMPORTED_MODULE_9__["ENV"] === 'dev')) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", true);

              case 6:
                if (!(isServer && !req)) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt("return", true);

              case 8:
                alipayUserId = (isServer ? req.cookies.alipay_user_id : js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('alipay_user_id')) || '';

                if (alipayUserId) {
                  _context5.next = 13;
                  break;
                }

                _context5.next = 12;
                return redirectLogin({
                  isServer: isServer,
                  res: res,
                  asPath: asPath
                });

              case 12:
                return _context5.abrupt("return", false);

              case 13:
                isBindAlipay = isServer ? req.cookies['is_alipay_bind'] === '1' : js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('is_alipay_bind') === '1';

                if (!isBindAlipay) {
                  _context5.next = 16;
                  break;
                }

                return _context5.abrupt("return", true);

              case 16:
                _context5.next = 18;
                return getAlipayBindInfo(alipayUserId, req);

              case 18:
                data = _context5.sent;

                if (!(data && data.res)) {
                  _context5.next = 22;
                  break;
                }

                // 已经绑定
                if (isServer) {
                  expires = new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()() + 24 * 60 * 60 * 1000);
                  res.cookie('is_alipay_bind', '1', {
                    expires: expires
                  });
                } else {
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('is_alipay_bind', '1', {
                    expires: 1
                  });
                }

                return _context5.abrupt("return", true);

              case 22:
                _context5.next = 24;
                return redirectBindPhone({
                  isServer: isServer,
                  res: res,
                  asPath: asPath,
                  phone: data && data.phone
                });

              case 24:
                return _context5.abrupt("return", false);

              case 25:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x6, _x7) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};
var redirectTo =
/*#__PURE__*/
function () {
  var _ref12 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(_ref11) {
    var isServer, res, path;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            isServer = _ref11.isServer, res = _ref11.res, path = _ref11.path;

            if (!isServer) {
              _context6.next = 6;
              break;
            }

            res.redirect(path);
            res.end();
            _context6.next = 8;
            break;

          case 6:
            _context6.next = 8;
            return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(path);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function redirectTo(_x8) {
    return _ref12.apply(this, arguments);
  };
}();
var receiveNavIcons = Object(redux_actions__WEBPACK_IMPORTED_MODULE_8__["createAction"])(constant_index__WEBPACK_IMPORTED_MODULE_5__["GET_NAV_ICONS"]);
var fetchNavIcons = function fetchNavIcons() {
  return (
    /*#__PURE__*/
    function () {
      var _ref13 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(dispatch) {
        var url, headers, _ref14, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                url = 'node-api/v2c/common/getNavIcons';
                headers = Object(actions_actionHelper__WEBPACK_IMPORTED_MODULE_4__["getHeaders2"])();
                _context7.next = 5;
                return utils_index__WEBPACK_IMPORTED_MODULE_10__["axios"].get(url, {
                  headers: headers
                });

              case 5:
                _ref14 = _context7.sent;
                data = _ref14.data;
                return _context7.abrupt("return", data && dispatch(receiveNavIcons(data)));

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](0);
                utils_index__WEBPACK_IMPORTED_MODULE_10__["tools"].ErrorLog(_context7.t0);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 10]]);
      }));

      return function (_x9) {
        return _ref13.apply(this, arguments);
      };
    }()
  );
};
var receiveCheckTradeDone = Object(redux_actions__WEBPACK_IMPORTED_MODULE_8__["createAction"])(constant_index__WEBPACK_IMPORTED_MODULE_5__["CHECK_TRADE_DONE"]);
var checkTradeDone = function checkTradeDone() {
  return (
    /*#__PURE__*/
    function () {
      var _ref15 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(dispatch) {
        var url, headers, _ref16, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                url = 'node-api/common/checkTradeDone';
                headers = Object(actions_actionHelper__WEBPACK_IMPORTED_MODULE_4__["getHeaders2"])();
                _context8.next = 5;
                return utils_index__WEBPACK_IMPORTED_MODULE_10__["axios"].get(url, {
                  headers: headers
                });

              case 5:
                _ref16 = _context8.sent;
                data = _ref16.data;

                if (data.errorMsg) {
                  antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default.a.info(data.errorMsg);
                } else {
                  data && dispatch(receiveCheckTradeDone(data));
                }

                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](0);
                utils_index__WEBPACK_IMPORTED_MODULE_10__["tools"].ErrorLog(_context8.t0);

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 10]]);
      }));

      return function (_x10) {
        return _ref15.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./src/actions/captcha.ts":
/*!********************************!*\
  !*** ./src/actions/captcha.ts ***!
  \********************************/
/*! exports provided: getCaptchaImage, verifySMS, verifyImageAndSendSMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaptchaImage", function() { return getCaptchaImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifySMS", function() { return verifySMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyImageAndSendSMS", function() { return verifyImageAndSendSMS; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var actions_actionHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/actionHelper */ "./src/actions/actionHelper.ts");
/* harmony import */ var constant_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constant/common */ "./src/constant/common.ts");
/* harmony import */ var utils_axiosClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/axiosClient */ "./src/utils/axiosClient.ts");
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/tools */ "./src/utils/tools.ts");






var getCaptchaImage = function getCaptchaImage(phone) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : constant_common__WEBPACK_IMPORTED_MODULE_3__["SMS_TYPES"].BindPhone;
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_) {
        var url, params, headers, _ref2, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = 'node-api/captcha/image';
                params = {
                  phone: phone,
                  type: type
                };
                headers = Object(actions_actionHelper__WEBPACK_IMPORTED_MODULE_2__["getHeaders2"])();
                _context.prev = 3;
                _context.next = 6;
                return utils_axiosClient__WEBPACK_IMPORTED_MODULE_4__["default"].get(url, {
                  params: params,
                  headers: headers
                });

              case 6:
                _ref2 = _context.sent;
                data = _ref2.data;
                return _context.abrupt("return", data.image_code);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                utils_tools__WEBPACK_IMPORTED_MODULE_5__["ErrorLog"](_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var verifySMS = function verifySMS(phone, smsCode) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : constant_common__WEBPACK_IMPORTED_MODULE_3__["SMS_TYPES"].BindPhone;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_) {
        var url, body, headers, _ref4, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = 'node-api/captcha/sms';
                body = {
                  phone: phone,
                  type: type,
                  sms_code: smsCode
                };
                headers = Object(actions_actionHelper__WEBPACK_IMPORTED_MODULE_2__["getHeaders2"])();
                _context2.prev = 3;
                _context2.next = 6;
                return utils_axiosClient__WEBPACK_IMPORTED_MODULE_4__["default"].post(url, body, {
                  headers: headers
                });

              case 6:
                _ref4 = _context2.sent;
                data = _ref4.data;
                return _context2.abrupt("return", data);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);
                utils_tools__WEBPACK_IMPORTED_MODULE_5__["ErrorLog"](_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 11]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var verifyImageAndSendSMS = function verifyImageAndSendSMS(phone, imageStr) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : constant_common__WEBPACK_IMPORTED_MODULE_3__["SMS_TYPES"].BindPhone;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_) {
        var url, params, headers, _ref6, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = 'node-api/captcha/sms';
                params = {
                  phone: phone,
                  type: type,
                  image_code: imageStr
                };
                headers = Object(actions_actionHelper__WEBPACK_IMPORTED_MODULE_2__["getHeaders2"])();
                _context3.prev = 3;
                _context3.next = 6;
                return utils_axiosClient__WEBPACK_IMPORTED_MODULE_4__["default"].get(url, {
                  params: params,
                  headers: headers
                });

              case 6:
                _ref6 = _context3.sent;
                data = _ref6.data;
                return _context3.abrupt("return", data);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](3);
                utils_tools__WEBPACK_IMPORTED_MODULE_5__["ErrorLog"](_context3.t0);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 11]]);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./src/actions/upload.ts":
/*!*******************************!*\
  !*** ./src/actions/upload.ts ***!
  \*******************************/
/*! exports provided: uploadBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadBase64", function() { return uploadBase64; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var actions_actionHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/actionHelper */ "./src/actions/actionHelper.ts");
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/index */ "./src/utils/index.ts");




var uploadBase64 = function uploadBase64(file) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_) {
        var headers, url, _ref2, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = Object(actions_actionHelper__WEBPACK_IMPORTED_MODULE_2__["getHeaders2"])();
                url = 'node-api/common/upload';
                _context.prev = 2;
                _context.next = 5;
                return utils_index__WEBPACK_IMPORTED_MODULE_3__["axios"].post(url, {
                  file: file
                }, {
                  headers: headers
                });

              case 5:
                _ref2 = _context.sent;
                data = _ref2.data;
                return _context.abrupt("return", data);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                utils_index__WEBPACK_IMPORTED_MODULE_3__["tools"].ErrorLog(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./src/components/Alert/Alert.tsx":
/*!****************************************!*\
  !*** ./src/components/Alert/Alert.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return alert; });
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/modal */ "antd-mobile/lib/modal");
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);


 // TODO 暂时基于ant官方定制 alert 方法 待有更好的方法可去除该组建

function closest(el, selector) {
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  var p = el;

  while (p) {
    if (matchesSelector.call(p, selector)) {
      return p;
    }

    p = p.parentElement;
  }

  return null;
}

function alert(title, message, actions) {
  var platform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'android';
  var maskClosable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var closed = false;

  if (!title && !message) {
    // console.log('Must specify either an alert title, or message, or both');
    return {
      close: function close() {
        return new Object();
      }
    };
  }

  var div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(div);

    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  var footer = actions.map(function (button) {
    // tslint:disable-next-line:only-arrow-functions
    var orginPress = button.onPress || function () {
      return;
    };

    button.onPress = function () {
      if (closed) {
        return;
      }

      var res = orginPress();

      if (res && res.then) {
        res.then(function () {
          closed = true;
          close();
        }).catch(function () {
          return new Object();
        });
      } else {
        closed = true;
        close();
      }
    };

    return button;
  });
  var prefixCls = 'am-modal';

  function onWrapTouchStart(e) {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }

    var pNode = closest(e.target, ".".concat(prefixCls, "-footer"));

    if (!pNode) {
      e.preventDefault();
    }
  } // TODO 修复多层弹窗在ios下 zindex失效的问题 待有更好的方法可去除


  function FixMaskZIndex(_ref) {
    var children = _ref.children;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      div.nextElementSibling.querySelector('.am-modal-mask').style.transform = 'translateZ(0.02rem)';
    }, []);
    return children;
  }

  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FixMaskZIndex, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
    visible: true,
    transparent: true,
    title: title,
    transitionName: "am-zoom",
    closable: false,
    maskClosable: maskClosable,
    footer: footer,
    maskTransitionName: "am-fade",
    platform: platform,
    wrapProps: {
      onTouchStart: onWrapTouchStart
    },
    onClose: close
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(prefixCls, "-alert-content")
  }, message))), div);
  return {
    close: close
  };
}

/***/ }),

/***/ "./src/components/Alert/index.ts":
/*!***************************************!*\
  !*** ./src/components/Alert/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./src/components/Alert/Alert.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Alert__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/AudioWidget/Audio.ts":
/*!*********************************************!*\
  !*** ./src/components/AudioWidget/Audio.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




var Audio =
/*#__PURE__*/
function () {
  function Audio(buffer, context, config) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Audio);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "source", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "startedAt", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "pausedAt", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "playing", false);

    this.buffer = buffer;
    this.context = context;
    this.config = config;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Audio, [{
    key: "play",
    value: function play() {
      var offset = this.pausedAt;
      this.source = this.context.createBufferSource();
      this.source.loop = !!this.config.loop;
      this.source.connect(this.context.destination);
      this.source.buffer = this.buffer;
      this.source.start(0, offset);
      this.startedAt = this.context.currentTime - offset;
      this.pausedAt = 0;
      this.playing = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.source) {
        this.source.disconnect();
        this.source.stop(0);
        this.source = null;
      }

      this.pausedAt = 0;
      this.startedAt = 0;
      this.playing = false;
    }
  }, {
    key: "pause",
    value: function pause() {
      var delta = this.context.currentTime - this.startedAt;
      this.stop();
      this.pausedAt = delta;
    }
  }, {
    key: "isPlaying",
    get: function get() {
      return this.playing;
    }
  }]);

  return Audio;
}();

/* harmony default export */ __webpack_exports__["default"] = (Audio);

/***/ }),

/***/ "./src/components/AudioWidget/AudioWidget.tsx":
/*!****************************************************!*\
  !*** ./src/components/AudioWidget/AudioWidget.tsx ***!
  \****************************************************/
/*! exports provided: AudioWidgetStatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioWidgetStatus", function() { return AudioWidgetStatus; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Audio */ "./src/components/AudioWidget/Audio.ts");













var AudioWidgetStatus;

(function (AudioWidgetStatus) {
  AudioWidgetStatus[AudioWidgetStatus["Loading"] = 0] = "Loading";
  AudioWidgetStatus[AudioWidgetStatus["Loaded"] = 1] = "Loaded";
  AudioWidgetStatus[AudioWidgetStatus["Failed"] = 2] = "Failed";
  AudioWidgetStatus[AudioWidgetStatus["Playing"] = 3] = "Playing";
  AudioWidgetStatus[AudioWidgetStatus["Paused"] = 4] = "Paused";
})(AudioWidgetStatus || (AudioWidgetStatus = {}));

var AudioWidget =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(AudioWidget, _React$Component);

  function AudioWidget() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AudioWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(AudioWidget)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      status: AudioWidgetStatus.Loading
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "audio", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "toggle", function () {
      if (!_this.audio) return;

      if (_this.audio.isPlaying) {
        _this.audio.pause();

        _this.setState({
          status: AudioWidgetStatus.Paused
        });
      } else {
        _this.audio.play();

        _this.setState({
          status: AudioWidgetStatus.Playing
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AudioWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      void this.loadAudio();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.audio) return;
      this.audio.stop();
    } // fix iOS decodeAudioData bug
    // https://stackoverflow.com/questions/48597747/how-to-play-a-sound-file-safari-with-web-audio-api

  }, {
    key: "loadAudio",
    value: function () {
      var _loadAudio = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this$props, src, config, context, res, buffer, decodedBuffer;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, src = _this$props.src, config = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["src"]);
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                context = new AudioContext();
                _context.prev = 3;
                _context.next = 6;
                return fetch(src);

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.arrayBuffer();

              case 9:
                buffer = _context.sent;
                _context.next = 12;
                return AudioWidget.decodeAudioData(context, buffer);

              case 12:
                decodedBuffer = _context.sent;
                this.audio = new _Audio__WEBPACK_IMPORTED_MODULE_12__["default"](decodedBuffer, context, config);

                if (config.autoplay) {
                  this.audio.play();
                  this.setState({
                    status: AudioWidgetStatus.Playing
                  });
                } else {
                  this.setState({
                    status: AudioWidgetStatus.Loaded
                  });
                }

                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](3);
                this.setState({
                  status: AudioWidgetStatus.Failed
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 17]]);
      }));

      function loadAudio() {
        return _loadAudio.apply(this, arguments);
      }

      return loadAudio;
    }()
  }, {
    key: "render",
    value: function render() {
      var status = this.state.status;
      var children = this.props.children;
      if (status === AudioWidgetStatus.Failed || !this.audio) return null;
      return children({
        toggle: this.toggle,
        status: status
      });
    }
  }], [{
    key: "decodeAudioData",
    value: function () {
      var _decodeAudioData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(context, buffer) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
                  return context.decodeAudioData(buffer, resolve);
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function decodeAudioData(_x, _x2) {
        return _decodeAudioData.apply(this, arguments);
      }

      return decodeAudioData;
    }()
  }]);

  return AudioWidget;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(AudioWidget, "defaultProps", {
  autoplay: true,
  loop: true
});

/* harmony default export */ __webpack_exports__["default"] = (AudioWidget);

/***/ }),

/***/ "./src/components/AudioWidget/index.ts":
/*!*********************************************!*\
  !*** ./src/components/AudioWidget/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioWidget */ "./src/components/AudioWidget/AudioWidget.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_AudioWidget__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/BackTop/BackTop.less":
/*!*********************************************!*\
  !*** ./src/components/BackTop/BackTop.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"backtop_box": "BackTop__backtop_box___jL7ZK",
	"show": "BackTop__show___37ng0",
	"icon_box": "BackTop__icon_box___1ylGk",
	"icon": "BackTop__icon___P59-T"
};

/***/ }),

/***/ "./src/components/BackTop/BackTop.tsx":
/*!********************************************!*\
  !*** ./src/components/BackTop/BackTop.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _withSource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../withSource */ "./src/components/withSource/index.ts");
/* harmony import */ var _BackTop_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BackTop.less */ "./src/components/BackTop/BackTop.less");
/* harmony import */ var _BackTop_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_BackTop_less__WEBPACK_IMPORTED_MODULE_14__);















var initialState = {
  show: false
};

var BackTop =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BackTop, _React$Component);

  function BackTop() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BackTop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BackTop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", initialState);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hideTabBar", function () {
      var _this$props = _this.props,
          showTabBar = _this$props.showTabBar,
          onHiddenTabBar = _this$props.onHiddenTabBar;
      var route = _this.props.router.route;
      var routesNeedHideTabBar = ['/product/detail'];

      if (routesNeedHideTabBar.includes(route) && showTabBar && onHiddenTabBar) {
        onHiddenTabBar();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScroll", function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // const scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop

      var show = _this.state.show;
      var backTop = _this.props.backTop;

      if (typeof backTop === 'boolean') {
        backTop = 220;
      }

      if (scrollTop < backTop && show) {
        _this.props.onToggle(false);

        _this.setState({
          show: false
        });

        _this.hideTabBar();
      } else if (scrollTop > backTop && !show) {
        _this.props.onToggle(true);

        _this.setState({
          show: true
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleBackTop", function () {
      Object(utils_tools__WEBPACK_IMPORTED_MODULE_12__["scrollToAnchor"])('body');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BackTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var show = this.state.show;
      var _this$props2 = this.props,
          ua = _this$props2.ua,
          utm = _this$props2.utm; // ahs特殊处理

      var query = this.props.router.query;
      var isAhsForBaidu = query.utm_source === 'm_ahs' && query.utm_medium === 'm_ahs_homepage_footer_nav' && query.utm_campaign === 'm_xhj';
      var initShow = !ua.get('isApp') && !ua.get('isAlipay') && !utm.get('isAnlaiye') && !utm.get('isWacai') && !utm.get('isCmblife') && !utm.get('isSamsungzs');
      var utmMedium = ua.get('isAhsApp') && 'ahs' || ua.get('isNuomiApp') && 'nuomi' || 'm';

      if (!initShow || isAhsForBaidu) {
        return false;
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_BackTop_less__WEBPACK_IMPORTED_MODULE_14___default.a.backtop_box, show && _BackTop_less__WEBPACK_IMPORTED_MODULE_14___default.a.show)
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        className: _BackTop_less__WEBPACK_IMPORTED_MODULE_14___default.a.icon_box,
        to: "/site/appdownload?utm_source=xhj&utm_medium=".concat(utmMedium, "-roll&utm_campaign=download")
      }, "APP"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _BackTop_less__WEBPACK_IMPORTED_MODULE_14___default.a.icon_box,
        onClick: this.handleBackTop
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        className: _BackTop_less__WEBPACK_IMPORTED_MODULE_14___default.a.icon,
        type: __webpack_require__(/*! svg/arrow-left.svg */ "./static/svg/arrow-left.svg")
      })));
    }
  }]);

  return BackTop;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_11__["compose"])(_withSource__WEBPACK_IMPORTED_MODULE_13__["default"], next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(BackTop));

/***/ }),

/***/ "./src/components/BackTop/index.ts":
/*!*****************************************!*\
  !*** ./src/components/BackTop/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackTop */ "./src/components/BackTop/BackTop.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_BackTop__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/BrandText/BrandText.tsx":
/*!************************************************!*\
  !*** ./src/components/BrandText/BrandText.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../withSource */ "./src/components/withSource/index.ts");


var BrandText = function BrandText(_ref) {
  var utm = _ref.utm;
  return utm.get('brand');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withSource__WEBPACK_IMPORTED_MODULE_0__["default"])(BrandText));

/***/ }),

/***/ "./src/components/BrandText/index.ts":
/*!*******************************************!*\
  !*** ./src/components/BrandText/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrandText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandText */ "./src/components/BrandText/BrandText.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_BrandText__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/BreadCrumb/BreadCrumb.less":
/*!***************************************************!*\
  !*** ./src/components/BreadCrumb/BreadCrumb.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"list_box": "BreadCrumb__list_box___1ZLcA",
	"item": "BreadCrumb__item___1DGT3",
	"active": "BreadCrumb__active___Injfg",
	"right": "BreadCrumb__right___1Qxoz"
};

/***/ }),

/***/ "./src/components/BreadCrumb/BreadCrumb.tsx":
/*!**************************************************!*\
  !*** ./src/components/BreadCrumb/BreadCrumb.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BreadCrumb_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BreadCrumb.less */ "./src/components/BreadCrumb/BreadCrumb.less");
/* harmony import */ var _BreadCrumb_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_BreadCrumb_less__WEBPACK_IMPORTED_MODULE_4__);






var BreadCrumb = function BreadCrumb(_ref) {
  var list = _ref.list;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: _BreadCrumb_less__WEBPACK_IMPORTED_MODULE_4___default.a.list_box
  }, list.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_BreadCrumb_less__WEBPACK_IMPORTED_MODULE_4___default.a.item, item.get('is_show') && _BreadCrumb_less__WEBPACK_IMPORTED_MODULE_4___default.a.active),
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, item.get('step_title')), key < list.size - 1 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      className: _BreadCrumb_less__WEBPACK_IMPORTED_MODULE_4___default.a.right,
      type: "right"
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BreadCrumb);

/***/ }),

/***/ "./src/components/BreadCrumb/index.ts":
/*!********************************************!*\
  !*** ./src/components/BreadCrumb/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadCrumb */ "./src/components/BreadCrumb/BreadCrumb.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/BtnSendSms/BtnSendSms.less":
/*!***************************************************!*\
  !*** ./src/components/BtnSendSms/BtnSendSms.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"btn_sms": "BtnSendSms__btn_sms___cS14F",
	"is_tick": "BtnSendSms__is_tick___FF2j-"
};

/***/ }),

/***/ "./src/components/BtnSendSms/BtnSendSms.tsx":
/*!**************************************************!*\
  !*** ./src/components/BtnSendSms/BtnSendSms.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _BtnSendSms_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BtnSendSms.less */ "./src/components/BtnSendSms/BtnSendSms.less");
/* harmony import */ var _BtnSendSms_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_BtnSendSms_less__WEBPACK_IMPORTED_MODULE_9__);










var isClick = false;

var BtnSendSms = function BtnSendSms(_ref) {
  var className = _ref.className,
      onValidAndSend = _ref.onValidAndSend;
  var tickTotal = 60;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(tickTotal),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      tick = _useState2[0],
      setTick = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
      isTick = _useState4[0],
      setIsTick = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('获取验证码'),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
      btnText = _useState6[0],
      setBtnText = _useState6[1];

  var clearTick = function clearTick() {
    setIsTick(false);
    setTick(tickTotal);
  };

  var tickTime =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(isTick && tick > 0)) {
                _context.next = 8;
                break;
              }

              _context.t0 = tick < tickTotal;

              if (!_context.t0) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return Object(utils_tools__WEBPACK_IMPORTED_MODULE_8__["delayHandle"])(1);

            case 5:
              setTick(tick - 1);
              _context.next = 9;
              break;

            case 8:
              clearTick();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function tickTime() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    return clearTick;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    // tslint:disable-next-line
    tickTime();
  }, [isTick, tick]);

  var handleSend =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var isValid;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(isTick || isClick)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              isClick = true;
              _context2.next = 5;
              return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
                return onValidAndSend(resolve);
              });

            case 5:
              isValid = _context2.sent;

              if (isValid) {
                setIsTick(true);
                setBtnText('重新获取');

                antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.info('验证码发送成功！请登录邮箱查看');
              }

              isClick = false;

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSend() {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_BtnSendSms_less__WEBPACK_IMPORTED_MODULE_9___default.a.btn_sms, className, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _BtnSendSms_less__WEBPACK_IMPORTED_MODULE_9___default.a.is_tick, isTick)),
    onClick: handleSend
  }, isTick ? "".concat(tick, "s") : btnText);
};

/* harmony default export */ __webpack_exports__["default"] = (BtnSendSms);

/***/ }),

/***/ "./src/components/BtnSendSms/index.ts":
/*!********************************************!*\
  !*** ./src/components/BtnSendSms/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BtnSendSms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnSendSms */ "./src/components/BtnSendSms/BtnSendSms.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_BtnSendSms__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Button/Button.less":
/*!*******************************************!*\
  !*** ./src/components/Button/Button.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"btn": "Button__btn___1GZB1",
	"fixed": "Button__fixed___12Yic",
	"safe_area": "Button__safe_area___gFWvK"
};

/***/ }),

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/button */ "antd-mobile/lib/button");
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button.less */ "./src/components/Button/Button.less");
/* harmony import */ var _Button_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Button_less__WEBPACK_IMPORTED_MODULE_5__);







var MyButton = function MyButton(props) {
  var className = props.className,
      children = props.children,
      _props$fixed = props.fixed,
      fixed = _props$fixed === void 0 ? false : _props$fixed,
      _props$safeArea = props.safeArea,
      safeArea = _props$safeArea === void 0 ? false : _props$safeArea,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "children", "fixed", "safeArea"]);

  var cx = classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Button_less__WEBPACK_IMPORTED_MODULE_5___default.a.btn, fixed && _Button_less__WEBPACK_IMPORTED_MODULE_5___default.a.fixed, safeArea && _Button_less__WEBPACK_IMPORTED_MODULE_5___default.a.safe_area, className);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, rest, {
    className: cx
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (MyButton);

/***/ }),

/***/ "./src/components/Button/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Button/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/Button/Button.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Button__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/CSButtons/CSButtons.less":
/*!*************************************************!*\
  !*** ./src/components/CSButtons/CSButtons.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "CSButtons__container____9B2G",
	"buttons": "CSButtons__buttons___fIlyk",
	"btn": "CSButtons__btn___2G2Kn"
};

/***/ }),

/***/ "./src/components/CSButtons/CSButtons.tsx":
/*!************************************************!*\
  !*** ./src/components/CSButtons/CSButtons.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_loadScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/loadScript */ "./src/utils/loadScript.ts");
/* harmony import */ var utils_piwik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/piwik */ "./src/utils/piwik.ts");
/* harmony import */ var _CSButtons_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSButtons.less */ "./src/components/CSButtons/CSButtons.less");
/* harmony import */ var _CSButtons_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CSButtons_less__WEBPACK_IMPORTED_MODULE_4__);






function CSButtons(_ref) {
  var trackEvents = _ref.trackEvents;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var script = new utils_loadScript__WEBPACK_IMPORTED_MODULE_2__["default"]('//dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9593', 'nTalk');
    void script.load();
  });

  function call() {
    if (trackEvents && trackEvents.length) {
      Object(utils_piwik__WEBPACK_IMPORTED_MODULE_3__["trackClickEvent"])(trackEvents[1]);
    }

    location.href = 'tel:400-670-0188';
  }

  function handleClick(e) {
    e.preventDefault();

    if (trackEvents && trackEvents.length) {
      Object(utils_piwik__WEBPACK_IMPORTED_MODULE_3__["trackClickEvent"])(trackEvents[0]);
    }

    NTKF.im_openInPageChat();
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _CSButtons_less__WEBPACK_IMPORTED_MODULE_4___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u5982\u6709\u7591\u95EE\uFF0C\u8BF7\u8054\u7CFB\u4EAB\u6362\u673A\u5BA2\u670D\uFF0C\u670D\u52A1\u65F6\u95F4 9:00-21:00")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _CSButtons_less__WEBPACK_IMPORTED_MODULE_4___default.a.buttons
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: _CSButtons_less__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
    onClick: handleClick
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
    size: "xxs",
    type: __webpack_require__(/*! svg/service-kefu-cs.svg */ "./static/svg/service-kefu-cs.svg"),
    color: "#666"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u5728\u7EBF\u5BA2\u670D")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: _CSButtons_less__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
    onClick: call
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
    size: "xxs",
    type: __webpack_require__(/*! svg/phone.svg */ "./static/svg/phone.svg"),
    color: "#666"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u7535\u8BDD\u5BA2\u670D"))));
}

/* harmony default export */ __webpack_exports__["default"] = (CSButtons);

/***/ }),

/***/ "./src/components/CSButtons/index.ts":
/*!*******************************************!*\
  !*** ./src/components/CSButtons/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSButtons */ "./src/components/CSButtons/CSButtons.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_CSButtons__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/CaptchaButton/CaptchaButton.less":
/*!*********************************************************!*\
  !*** ./src/components/CaptchaButton/CaptchaButton.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"veriCodeBtn": "CaptchaButton__veriCodeBtn___1FVCQ",
	"dialog": "CaptchaButton__dialog___SToNy",
	"panel": "CaptchaButton__panel___2mY91",
	"close": "CaptchaButton__close___1XutI",
	"tip": "CaptchaButton__tip___3Tj7I",
	"imageInput": "CaptchaButton__imageInput___2nbwB",
	"captchaImage": "CaptchaButton__captchaImage___17xNh"
};

/***/ }),

/***/ "./src/components/CaptchaButton/CaptchaButton.tsx":
/*!********************************************************!*\
  !*** ./src/components/CaptchaButton/CaptchaButton.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_input_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/input-item */ "antd-mobile/lib/input-item");
/* harmony import */ var antd_mobile_lib_input_item__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_input_item__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var actions_captcha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! actions/captcha */ "./src/actions/captcha.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Icon */ "./src/components/Icon/index.ts");
/* harmony import */ var constant_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! constant/common */ "./src/constant/common.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var utils_utilsValid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! utils/utilsValid */ "./src/utils/utilsValid.ts");
/* harmony import */ var _CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CaptchaButton.less */ "./src/components/CaptchaButton/CaptchaButton.less");
/* harmony import */ var _CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20__);






















var CaptchaButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(CaptchaButton, _React$Component);

  function CaptchaButton() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CaptchaButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(CaptchaButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "state", {
      showDialog: false,
      countdown: 60,
      isCounting: false,
      tip: '',
      imageStr: '',
      imageCaptcha: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "timer", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "startTimer", function () {
      _this.setState({
        isCounting: true
      });

      _this.timer = window.setInterval(function () {
        var countdown = _this.state.countdown - 1;

        _this.setState({
          countdown: countdown
        });

        if (countdown) return;
        clearInterval(_this.timer);

        _this.setState({
          countdown: 60,
          isCounting: false
        });
      }, 1000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleClick",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var _this$props, getCaptchaImage, phone, needImage, type, image;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, getCaptchaImage = _this$props.getCaptchaImage, phone = _this$props.phone, needImage = _this$props.needImage, type = _this$props.type;

              if (!needImage) {
                _context.next = 9;
                break;
              }

              _this.setState({
                showDialog: true,
                tip: '',
                imageStr: '',
                imageCaptcha: ''
              });

              _context.next = 5;
              return getCaptchaImage(phone, type);

            case 5:
              image = _context.sent;

              _this.setState({
                imageStr: 'data:image/png;base64,' + image
              });

              _context.next = 9;
              break;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "closePanel", function () {
      _this.setState({
        showDialog: false,
        imageStr: '',
        tip: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "onChange",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(val) {
        var _this$props2, verifyImageAndSendSMS, phone, type, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = _this.props, verifyImageAndSendSMS = _this$props2.verifyImageAndSendSMS, phone = _this$props2.phone, type = _this$props2.type;

                _this.setState({
                  imageCaptcha: val
                });

                if (!(val && val.length === 4)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 5;
                return verifyImageAndSendSMS(phone, val, type);

              case 5:
                data = _context2.sent;

                if (data.send_res) {
                  // 成功
                  _this.closePanel();

                  _this.startTimer(); // Dev


                  if (data.sms_code) {
                    antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_2___default.a.info('验证码：' + data.sms_code);
                  }
                } else {
                  _this.setState({
                    tip: data.errorMsg || '验证码验证失败，请重新输入'
                  });
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CaptchaButton, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timer) clearInterval(this.timer);
    }
  }, {
    key: "renderDialog",
    value: function renderDialog() {
      var dialogStyles = classnames__WEBPACK_IMPORTED_MODULE_13___default()(this.props.dialogClassName, _CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20___default.a.dialog);
      var _this$state = this.state,
          tip = _this$state.tip,
          imageCaptcha = _this$state.imageCaptcha,
          imageStr = _this$state.imageStr;
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: dialogStyles
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: _CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20___default.a.panel
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: _CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20___default.a.close,
        onClick: this.closePanel
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: __webpack_require__(/*! svg/close.svg */ "./static/svg/close.svg")
      })), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p", null, "\u8BF7\u5148\u8F93\u5165\u4E0B\u65B9\u6570\u5B57"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: _CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20___default.a.tip
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, tip)), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a, {
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_mobile_lib_input_item__WEBPACK_IMPORTED_MODULE_1___default.a, {
        name: "imageCaptcha",
        value: imageCaptcha,
        onChange: this.onChange,
        clear: true,
        maxLength: 4,
        className: _CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20___default.a.imageInput,
        placeholder: "\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801",
        disabled: !imageStr
      }), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a, {
        align: "center",
        justify: "center",
        className: _CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20___default.a.captchaImage,
        onClick: this.handleClick
      }, imageStr ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("img", {
        src: imageStr,
        alt: "captcha"
      }) : react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: __webpack_require__(/*! svg/placeholder.svg */ "./static/svg/placeholder.svg")
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var needImage = this.props.needImage;
      var showDialog = this.state.showDialog;
      var buttonStyles = classnames__WEBPACK_IMPORTED_MODULE_13___default()(this.props.buttonClassName, _CaptchaButton_less__WEBPACK_IMPORTED_MODULE_20___default.a.veriCodeBtn);
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_17___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        className: buttonStyles,
        disabled: this.disabled,
        onClick: this.handleClick
      }, this.state.isCounting ? this.state.countdown + 'S' : '获取验证码'), needImage && showDialog && this.renderDialog());
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.state.isCounting || !this.props.phone || !Object(utils_utilsValid__WEBPACK_IMPORTED_MODULE_19__["isValidPhone"])(this.props.phone);
    }
  }]);

  return CaptchaButton;
}(react__WEBPACK_IMPORTED_MODULE_17___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(CaptchaButton, "defaultProps", {
  needImage: true,
  type: constant_common__WEBPACK_IMPORTED_MODULE_16__["SMS_TYPES"].BindPhone,
  auto: false
});

var mapDispatch = {
  getCaptchaImage: actions_captcha__WEBPACK_IMPORTED_MODULE_12__["getCaptchaImage"],
  verifyImageAndSendSMS: actions_captcha__WEBPACK_IMPORTED_MODULE_12__["verifyImageAndSendSMS"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(null, mapDispatch)(CaptchaButton));

/***/ }),

/***/ "./src/components/CaptchaButton/index.ts":
/*!***********************************************!*\
  !*** ./src/components/CaptchaButton/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaptchaButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptchaButton */ "./src/components/CaptchaButton/CaptchaButton.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_CaptchaButton__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ChooseList/ChooseList.less":
/*!***************************************************!*\
  !*** ./src/components/ChooseList/ChooseList.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "ChooseList__container___342D1",
	"active": "ChooseList__active___1I7SY"
};

/***/ }),

/***/ "./src/components/ChooseList/ChooseList.tsx":
/*!**************************************************!*\
  !*** ./src/components/ChooseList/ChooseList.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChooseList_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChooseList.less */ "./src/components/ChooseList/ChooseList.less");
/* harmony import */ var _ChooseList_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ChooseList_less__WEBPACK_IMPORTED_MODULE_3__);





function ChooseList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.options),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var select = function select(index) {
    return function () {
      var newOptions = options.map(function (option, i) {
        if (!props.multi) option.selected = i === index;else {
          if (i === index) option.selected = !option.selected;
        }
        return option;
      });
      setOptions(newOptions);
      var selected = options.filter(function (o) {
        return o.selected;
      }).map(function (o) {
        return {
          value: o.value,
          label: o.label
        };
      });
      props.onSelect(props.multi ? selected : selected[0]);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, _ChooseList_less__WEBPACK_IMPORTED_MODULE_3___default.a.container)
  }, options.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      onClick: select(index),
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(item.selected && _ChooseList_less__WEBPACK_IMPORTED_MODULE_3___default.a.active)
    }, item.label);
  }));
}

ChooseList.defaultProps = {
  multi: false
};
/* harmony default export */ __webpack_exports__["default"] = (ChooseList);

/***/ }),

/***/ "./src/components/ChooseList/index.ts":
/*!********************************************!*\
  !*** ./src/components/ChooseList/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChooseList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChooseList */ "./src/components/ChooseList/ChooseList.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_ChooseList__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/CityList/CityList.less":
/*!***********************************************!*\
  !*** ./src/components/CityList/CityList.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"cityListWrapper": "CityList__cityListWrapper___3urOo"
};

/***/ }),

/***/ "./src/components/CityList/CityList.tsx":
/*!**********************************************!*\
  !*** ./src/components/CityList/CityList.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd-mobile/lib/list-view */ "antd-mobile/lib/list-view");
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd-mobile/lib/list */ "antd-mobile/lib/list");
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _CityList_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CityList.less */ "./src/components/CityList/CityList.less");
/* harmony import */ var _CityList_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_CityList_less__WEBPACK_IMPORTED_MODULE_11__);












var Item = antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_9___default.a.Item;
var IndexedList = antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_8___default.a.IndexedList;

function genData(ds, provinceData) {
  var dataBlob = {};
  var sectionIDs = [];
  var rowIDs = [];

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(provinceData).forEach(function (item, index) {
    sectionIDs.push(item);
    dataBlob[item] = item;
    rowIDs[index] = [];
    provinceData[item].forEach(function (city) {
      rowIDs[index].push(city.value);
      dataBlob[city.value] = city.label;
    });
  });

  return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
}

var CityList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CityList, _React$Component);

  function CityList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CityList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CityList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClickItem", function (city) {
      return function (e) {
        e.stopPropagation();
        e.preventDefault();

        _this.props.onClickItem(city);
      };
    });

    var getSectionData = function getSectionData(dataBlob, sectionID) {
      return dataBlob[sectionID];
    };

    var getRowData = function getRowData(dataBlob, _, rowID) {
      return dataBlob[rowID];
    };

    var dataSource = new antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_8___default.a.DataSource({
      getRowData: getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: function rowHasChanged(row1, row2) {
        return row1 !== row2;
      },
      sectionHeaderHasChanged: function sectionHeaderHasChanged(s1, s2) {
        return s1 !== s2;
      }
    });
    _this.state = {
      dataSource: dataSource,
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CityList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        dataSource: genData(this.state.dataSource, this.props.list),
        isLoading: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.isLoading) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _CityList_less__WEBPACK_IMPORTED_MODULE_11___default.a.cityListWrapper
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(IndexedList, {
        dataSource: this.state.dataSource,
        useBodyScroll: true,
        renderSectionHeader: function renderSectionHeader(sectionData) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, sectionData);
        },
        renderRow: function renderRow(rowData) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Item, {
            onClick: _this2.onClickItem(rowData)
          }, rowData);
        },
        renderHeader: this.props.renderHeader
      }));
    }
  }]);

  return CityList;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CityList);

/***/ }),

/***/ "./src/components/CityList/index.ts":
/*!******************************************!*\
  !*** ./src/components/CityList/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CityList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CityList */ "./src/components/CityList/CityList.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_CityList__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Container/Container.less":
/*!*************************************************!*\
  !*** ./src/components/Container/Container.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"content_box": "Container__content_box___2QJPe",
	"content": "Container__content___1tFMR",
	"hide_header": "Container__hide_header___1s5OZ",
	"with_tabbar": "Container__with_tabbar___3OuZn"
};

/***/ }),

/***/ "./src/components/Container/Container.tsx":
/*!************************************************!*\
  !*** ./src/components/Container/Container.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withSource */ "./src/components/withSource/index.ts");
/* harmony import */ var _Container_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container.less */ "./src/components/Container/Container.less");
/* harmony import */ var _Container_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Container_less__WEBPACK_IMPORTED_MODULE_3__);





var Container = function Container(props) {
  var className = props.className,
      renderHeader = props.renderHeader,
      renderTabBar = props.renderTabBar,
      _props$fixedTabBar = props.fixedTabBar,
      fixedTabBar = _props$fixedTabBar === void 0 ? false : _props$fixedTabBar,
      children = props.children,
      ua = props.ua,
      bgColor = props.bgColor;
  var hiddenHeader = ua.get('isApp') || renderHeader && renderHeader.props.hidden;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Container_less__WEBPACK_IMPORTED_MODULE_3___default.a.content_box, className),
    style: {
      backgroundColor: bgColor
    }
  }, renderHeader, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Container_less__WEBPACK_IMPORTED_MODULE_3___default.a.content, hiddenHeader && _Container_less__WEBPACK_IMPORTED_MODULE_3___default.a.hide_header, fixedTabBar && _Container_less__WEBPACK_IMPORTED_MODULE_3___default.a.with_tabbar)
  }, children), renderTabBar);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withSource__WEBPACK_IMPORTED_MODULE_2__["default"])(Container));

/***/ }),

/***/ "./src/components/Container/index.ts":
/*!*******************************************!*\
  !*** ./src/components/Container/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./src/components/Container/Container.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Copy/Copy.tsx":
/*!**************************************!*\
  !*** ./src/components/Copy/Copy.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var copy = function copy(value) {
  if (!document || !navigator) throw new Error('document is missing, can not use copy function in server side.');
  var el = document.createElement('textarea');
  el.style.opacity = '0';
  el.style.position = 'fixed';
  el.style.left = '0';
  el.style.top = '0';
  el.value = value;
  document.body.appendChild(el);

  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    var editable = el.contentEditable;
    var readOnly = el.readOnly;
    el.contentEditable = 'true';
    el.readOnly = false;
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = document.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    el.setSelectionRange(0, 999999);
    el.contentEditable = editable;
    el.readOnly = readOnly;
  } else {
    el.select();
  }

  var result = document.execCommand('copy', false, '￥');
  el.blur(); // 针对uc浏览器兼容

  if (navigator.appVersion.indexOf('UC') !== -1 && result === undefined) {
    return true;
  }

  return result;
};

var Copy = function Copy(_ref) {
  var children = _ref.children,
      text = _ref.text,
      onCopied = _ref.onCopied,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children", "text", "onCopied"]);

  var elem = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);

  var onClick = function onClick(event) {
    var success = copy(text);

    if (elem && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }

    if (success) {
      onCopied ? onCopied(text) : antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.info('复制成功', 1.5);
    } else {
      antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.info('复制失败', 1.5);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(elem, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    onClick: onClick
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Copy);

/***/ }),

/***/ "./src/components/Copy/index.ts":
/*!**************************************!*\
  !*** ./src/components/Copy/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Copy */ "./src/components/Copy/Copy.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Copy__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ErrorMsg/ErrorMsg.less":
/*!***********************************************!*\
  !*** ./src/components/ErrorMsg/ErrorMsg.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"msg": "ErrorMsg__msg___2qnt6"
};

/***/ }),

/***/ "./src/components/ErrorMsg/ErrorMsg.tsx":
/*!**********************************************!*\
  !*** ./src/components/ErrorMsg/ErrorMsg.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rmc_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rmc-notification */ "rmc-notification");
/* harmony import */ var rmc_notification__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rmc_notification__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMsg_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMsg.less */ "./src/components/ErrorMsg/ErrorMsg.less");
/* harmony import */ var _ErrorMsg_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ErrorMsg_less__WEBPACK_IMPORTED_MODULE_5__);






var notification = null;
var prefixCls = 'am-toast';

var handleClose = function handleClose(key) {
  notification.removeNotice(key);
  setTimeout(function () {
    notification.destroy();
    notification = null;
  }, 400);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  show: function show(msg) {
    var _classnames;

    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    rmc_notification__WEBPACK_IMPORTED_MODULE_4___default.a.newInstance({
      prefixCls: prefixCls,
      style: {},
      transitionName: 'am-slide-down',
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classnames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classnames, "".concat(prefixCls, "-mask"), true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classnames, "".concat(prefixCls, "-msg"), true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classnames, "".concat(prefixCls, "-").concat(className), !!className), _classnames))
    }, function (n) {
      return notification = n;
    });

    var key = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();

    notification.notice({
      key: key,
      content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: _ErrorMsg_less__WEBPACK_IMPORTED_MODULE_5___default.a.msg,
        onClick: function onClick() {
          return handleClose(key);
        }
      }, msg)),
      duration: duration,
      closable: true,
      style: {},
      onClose: function onClose() {
        handleClose(key);
      }
    });
  }
});

/***/ }),

/***/ "./src/components/ErrorMsg/index.ts":
/*!******************************************!*\
  !*** ./src/components/ErrorMsg/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorMsg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorMsg */ "./src/components/ErrorMsg/ErrorMsg.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_ErrorMsg__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Header/Header.less":
/*!*******************************************!*\
  !*** ./src/components/Header/Header.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"fixed-top": "Header__fixed-top___nuVt3",
	"show": "Header__show___3-gAe",
	"bdnone": "Header__bdnone___3fl03",
	"logo_icon": "Header__logo_icon___1giY1",
	"btn_nav": "Header__btn_nav___3pIaR",
	"active": "Header__active___29R6Q"
};

/***/ }),

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/nav-bar */ "antd-mobile/lib/nav-bar");
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var actions_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/app */ "./src/actions/app.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var utils_app__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! utils/app */ "./src/utils/app.ts");
/* harmony import */ var _themes_index_less__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../themes/index.less */ "./src/themes/index.less");
/* harmony import */ var _themes_index_less__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_themes_index_less__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _BackTop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../BackTop */ "./src/components/BackTop/index.ts");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Header.less */ "./src/components/Header/Header.less");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_Header_less__WEBPACK_IMPORTED_MODULE_21__);























var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      hidden: _this.props.isApp || _this.props.hidden || false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleToggle", function (isShow) {
      !_this.props.isApp && _this.setState({
        hidden: !isShow
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          isApp = _this$props.isApp,
          showTabBar = _this$props.showTabBar,
          rightContentType = _this$props.rightContentType,
          extendHead = _this$props.extendHead,
          renderTitle = _this$props.renderTitle,
          onToggleTabBar = _this$props.onToggleTabBar,
          onHiddenTabBar = _this$props.onHiddenTabBar,
          hidden = _this$props.hidden,
          backTop = _this$props.backTop,
          isQsy = _this$props.isQsy,
          borderBottom = _this$props.borderBottom,
          headerProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["children", "isApp", "showTabBar", "rightContentType", "extendHead", "renderTitle", "onToggleTabBar", "onHiddenTabBar", "hidden", "backTop", "isQsy", "borderBottom"]);

      var hide = this.state.hidden;

      if (!hidden) {
        hide = false;
      }

      var dicRightContentType = {
        tabBar: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(_Header_less__WEBPACK_IMPORTED_MODULE_21___default.a.btn_nav, showTabBar && _Header_less__WEBPACK_IMPORTED_MODULE_21___default.a.active),
          onClick: function onClick() {
            return onToggleTabBar && onToggleTabBar();
          }
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("i", null))
      };

      var handleBack = function handleBack() {
        next_router__WEBPACK_IMPORTED_MODULE_14___default.a.back();
      };

      var navBarProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
        leftContent: '',
        rightContent: (!isQsy || !isApp) && headerProps.rightContent || dicRightContentType[rightContentType || ''],
        icon: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
          type: __webpack_require__(/*! svg/arrow-left.svg */ "./static/svg/arrow-left.svg"),
          size: "sm"
        }),
        onLeftClick: handleBack,
        mode: 'light'
      }, headerProps);

      var getTitle = function getTitle() {
        if (isApp) {
          Object(utils_app__WEBPACK_IMPORTED_MODULE_18__["sendTitle"])(children);
          return children;
        }

        return _this2.props.isQsy ? '轻松用' : '享换机';
      };

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("meta", {
        name: "viewport",
        key: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
      }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("title", null, getTitle()), extendHead), !this.props.isApp && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        id: "fixedHeader",
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(_Header_less__WEBPACK_IMPORTED_MODULE_21___default.a['fixed-top'], !hide && _Header_less__WEBPACK_IMPORTED_MODULE_21___default.a.show, !borderBottom && _Header_less__WEBPACK_IMPORTED_MODULE_21___default.a.bdnone)
      }, renderTitle && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_0___default.a, navBarProps, renderTitle()), !renderTitle && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_0___default.a, navBarProps, children.length > 12 ? "".concat(children.substr(0, 12), "...") : children)), backTop && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_BackTop__WEBPACK_IMPORTED_MODULE_20__["default"], {
        backTop: backTop,
        onToggle: this.handleToggle,
        showTabBar: showTabBar,
        onHiddenTabBar: onHiddenTabBar
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_15___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Header, "defaultProps", {
  hidden: false,
  backTop: false,
  rightContentType: 'tabBar',
  borderBottom: true
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    showTabBar: state.getIn(['app', 'tabBar', 'show']),
    isApp: state.getIn(['serverApp', 'ua', 'isApp']),
    isQsy: state.getIn(['serverApp', 'utm', 'isQsy'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggleTabBar: Object(redux__WEBPACK_IMPORTED_MODULE_17__["bindActionCreators"])(actions_app__WEBPACK_IMPORTED_MODULE_10__["toggleTabBar"], dispatch),
    onHiddenTabBar: Object(redux__WEBPACK_IMPORTED_MODULE_17__["bindActionCreators"])(actions_app__WEBPACK_IMPORTED_MODULE_10__["hiddenTabBar"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./src/components/Header/index.ts":
/*!****************************************!*\
  !*** ./src/components/Header/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/Header/Header.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Header__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Icon/Icon.tsx":
/*!**************************************!*\
  !*** ./src/components/Icon/Icon.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/icon */ "antd-mobile/lib/icon");
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var MyIcon = function MyIcon(_ref) {
  var type = _ref.type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'xs' : _ref$size,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["type", "className", "size"]);

  if (typeof type === 'string') {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      className: className,
      type: type,
      size: size
    }, props));
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "am-icon am-icon-".concat(size, " am-icon-").concat(type.default.id, " ").concat(className)
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("use", {
    xlinkHref: "#".concat(type.default.id)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MyIcon);

/***/ }),

/***/ "./src/components/Icon/index.ts":
/*!**************************************!*\
  !*** ./src/components/Icon/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon/Icon.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Icon__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/LazyImage/LazyImage.less":
/*!*************************************************!*\
  !*** ./src/components/LazyImage/LazyImage.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "LazyImage__container___3uamQ",
	"image": "LazyImage__image___3lffU",
	"imageHidden": "LazyImage__imageHidden___MMfdj",
	"placeholder": "LazyImage__placeholder___1Hh6o"
};

/***/ }),

/***/ "./src/components/LazyImage/LazyImage.tsx":
/*!************************************************!*\
  !*** ./src/components/LazyImage/LazyImage.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LazyImage_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LazyImage.less */ "./src/components/LazyImage/LazyImage.less");
/* harmony import */ var _LazyImage_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_LazyImage_less__WEBPACK_IMPORTED_MODULE_9__);











function LazyImage(props) {
  // 这里解构出 unselectable 是因为 lib 本身有 type bug
  var src = props.src,
      className = props.className,
      unselectable = props.unselectable,
      imageProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ["src", "className", "unselectable"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);

  var fetchImage = function fetchImage(url) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
      var image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  };

  var loadImage =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(target) {
      var src;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              src = target.dataset.src;

              if (src) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return fetchImage(src);

            case 5:
              target.src = src;
              setLoaded(true);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadImage(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var intersection$ = null;

    if ('IntersectionObserver' in window) {
      var configs = {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
      };

      var handleIntersection = function handleIntersection(entries) {
        entries.forEach(
        /*#__PURE__*/
        function () {
          var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(entry) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(entry.intersectionRatio > 0)) {
                      _context2.next = 4;
                      break;
                    }

                    if (intersection$) intersection$.unobserve(entry.target);
                    _context2.next = 4;
                    return loadImage(entry.target);

                  case 4:
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

      intersection$ = new IntersectionObserver(handleIntersection, configs);
      intersection$.observe(ref.current);
    } else {
      void loadImage(ref.current);
    }
  }, [src]);
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, _LazyImage_less__WEBPACK_IMPORTED_MODULE_9___default.a.container)
  }, !loaded && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    className: _LazyImage_less__WEBPACK_IMPORTED_MODULE_9___default.a.placeholder,
    type: __webpack_require__(/*! svg/placeholder.svg */ "./static/svg/placeholder.svg"),
    size: "sm"
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageProps, {
    className: loaded ? _LazyImage_less__WEBPACK_IMPORTED_MODULE_9___default.a.image : _LazyImage_less__WEBPACK_IMPORTED_MODULE_9___default.a.imageHidden,
    ref: ref,
    "data-src": src,
    src: "",
    alt: "Xianghuanji",
    title: "Xianghuanji"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (LazyImage);

/***/ }),

/***/ "./src/components/LazyImage/index.ts":
/*!*******************************************!*\
  !*** ./src/components/LazyImage/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LazyImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LazyImage */ "./src/components/LazyImage/LazyImage.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_LazyImage__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Link/Link.tsx":
/*!**************************************!*\
  !*** ./src/components/Link/Link.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_piwik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/piwik */ "./src/utils/piwik.ts");





var AppLink = function AppLink(_ref) {
  var className = _ref.className,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '' : _ref$to,
      children = _ref.children,
      trackEvent = _ref.trackEvent,
      native = _ref.native,
      target = _ref.target,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace;
  var nativeTo = to && to.pathname ? "".concat(to.pathname).concat(Object(qs__WEBPACK_IMPORTED_MODULE_1__["stringify"])(to.query, {
    addQueryPrefix: true
  })) : to;

  if (trackEvent) {
    var handleTrackEvent = function handleTrackEvent() {
      return Object(utils_piwik__WEBPACK_IMPORTED_MODULE_3__["trackClickEvent"])(trackEvent);
    };

    if (native) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: nativeTo,
        className: className,
        onClick: handleTrackEvent
      }, children);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      href: to,
      replace: replace
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: className,
      onClick: handleTrackEvent
    }, children));
  }

  if (native) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: nativeTo,
      className: className,
      target: target
    }, children);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: to,
    replace: replace
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: className
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLink);

/***/ }),

/***/ "./src/components/ListView/ListView.less":
/*!***********************************************!*\
  !*** ./src/components/ListView/ListView.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"loading_box": "ListView__loading_box___3le7o",
	"icon": "ListView__icon___1HnCD"
};

/***/ }),

/***/ "./src/components/ListView/ListView.tsx":
/*!**********************************************!*\
  !*** ./src/components/ListView/ListView.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/list-view */ "antd-mobile/lib/list-view");
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ListView_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ListView.less */ "./src/components/ListView/ListView.less");
/* harmony import */ var _ListView_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ListView_less__WEBPACK_IMPORTED_MODULE_11__);













var MyListView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyListView, _Component);

  function MyListView() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyListView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyListView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      isLoading: true,
      dataSource: new antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default.a.DataSource({
        rowHasChanged: _this.props.rowHasChanged
      })
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onEndReached", function () {
      if (_this.state.isLoading || !_this.props.hasMore) {
        return;
      }

      if (_this.props.hasMore) {
        _this.setState({
          isLoading: true
        });

        _this.props.queryMoreList();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderFooter", function () {
      var isLoading = _this.state.isLoading;
      var _this$props = _this.props,
          hasMore = _this$props.hasMore,
          hasMoreMsg = _this$props.hasMoreMsg;

      if (!hasMoreMsg.length) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null);
      }

      var message = hasMore ? '· 上拉加载更多 ·' : "\xB7 ".concat(hasMoreMsg, " \xB7");
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: _ListView_less__WEBPACK_IMPORTED_MODULE_11___default.a.loading_box,
        justify: "center"
      }, isLoading ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a, {
        align: "center",
        justify: "center"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        className: _ListView_less__WEBPACK_IMPORTED_MODULE_11___default.a.icon,
        type: __webpack_require__(/*! svg/spinner.svg */ "./static/svg/spinner.svg")
      }), "\u6B63\u5728\u52A0\u8F7D\u4E2D...") : message);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyListView, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.dataSource),
        isLoading: false
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.dataSource !== this.props.dataSource) {
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Header = _this$props2.Header,
          Row = _this$props2.Row,
          className = _this$props2.className,
          pageSize = _this$props2.pageSize;
      var dataSource = this.state.dataSource;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default.a, {
        dataSource: dataSource,
        renderHeader: Header,
        renderFooter: this.renderFooter,
        renderRow: Row,
        className: className,
        initialListSize: pageSize,
        pageSize: pageSize,
        useBodyScroll: true,
        onEndReached: this.onEndReached,
        onEndReachedThreshold: 100
      });
    }
  }]);

  return MyListView;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(MyListView, "defaultProps", {
  pageSize: 10,
  hasMoreMsg: '没有更多了哦',
  rowHasChanged: function rowHasChanged(row1, row2) {
    return row1.id !== row2.id;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (MyListView);

/***/ }),

/***/ "./src/components/ListView/index.ts":
/*!******************************************!*\
  !*** ./src/components/ListView/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_ListView_ListView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/ListView/ListView */ "./src/components/ListView/ListView.tsx");

/* harmony default export */ __webpack_exports__["default"] = (components_ListView_ListView__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Loading/Loading.less":
/*!*********************************************!*\
  !*** ./src/components/Loading/Loading.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"loading_box": "Loading__loading_box___2v_Fz",
	"loading": "Loading__loading___3qNPc"
};

/***/ }),

/***/ "./src/components/Loading/Loading.tsx":
/*!********************************************!*\
  !*** ./src/components/Loading/Loading.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constant_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/uikit */ "./src/constant/uikit.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loading_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading.less */ "./src/components/Loading/Loading.less");
/* harmony import */ var _Loading_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Loading_less__WEBPACK_IMPORTED_MODULE_3__);





var Loading = function Loading(_ref) {
  var loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: _Loading_less__WEBPACK_IMPORTED_MODULE_3___default.a.loading_box,
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: _Loading_less__WEBPACK_IMPORTED_MODULE_3___default.a.loading,
    src: constant_uikit__WEBPACK_IMPORTED_MODULE_1__["AssetImage"].Common.Loading
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/Loading/index.ts":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading/Loading.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Loading__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Modal/Modal.less":
/*!*****************************************!*\
  !*** ./src/components/Modal/Modal.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"modal_box": "Modal__modal_box___38LCN",
	"transparent": "Modal__transparent___QWT9d",
	"title": "Modal__title___2LIQf",
	"text": "Modal__text___1dMRr",
	"footer": "Modal__footer___yBZJG",
	"btn": "Modal__btn___1R0-y"
};

/***/ }),

/***/ "./src/components/Modal/Modal.tsx":
/*!****************************************!*\
  !*** ./src/components/Modal/Modal.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/modal */ "antd-mobile/lib/modal");
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Modal_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modal.less */ "./src/components/Modal/Modal.less");
/* harmony import */ var _Modal_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Modal_less__WEBPACK_IMPORTED_MODULE_9__);











function closest(el, selector) {
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}

var MyModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyModal, _React$Component);

  function MyModal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyModal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyModal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          visible = _this$props.visible,
          title = _this$props.title,
          btnText = _this$props.btnText,
          onClose = _this$props.onClose,
          className = _this$props.className,
          maskClosable = _this$props.maskClosable,
          children = _this$props.children;
      var isPopup = type === 'popup';

      var onWrapTouchStart = function onWrapTouchStart(e) {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }

        var pNode = closest(e.target, '.am-modal-content');

        if (!pNode) {
          e.preventDefault();
        }
      };

      var modalProps = {
        title: title && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: _Modal_less__WEBPACK_IMPORTED_MODULE_9___default.a.title
        }, title),
        visible: visible,
        transparent: !isPopup,
        popup: isPopup,
        animationType: isPopup ? 'slide-up' : 'fade',
        maskClosable: maskClosable,
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Modal_less__WEBPACK_IMPORTED_MODULE_9___default.a.modal_box, !isPopup && _Modal_less__WEBPACK_IMPORTED_MODULE_9___default.a.transparent, className),
        wrapProps: {
          onTouchStart: onWrapTouchStart
        },
        onClose: function (_onClose) {
          function onClose() {
            return _onClose.apply(this, arguments);
          }

          onClose.toString = function () {
            return _onClose.toString();
          };

          return onClose;
        }(function () {
          onClose(false);
        })
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, modalProps, isPopup && children, !isPopup && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Modal_less__WEBPACK_IMPORTED_MODULE_9___default.a.text
      }, children), btnText && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Modal_less__WEBPACK_IMPORTED_MODULE_9___default.a.footer
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Modal_less__WEBPACK_IMPORTED_MODULE_9___default.a.btn, 'btn'),
        onClick: function onClick() {
          return onClose(false);
        }
      }, btnText)));
    }
  }]);

  return MyModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(MyModal, "defaultProps", {
  visible: false,
  type: 'transparent',
  maskClosable: true
});

/* harmony default export */ __webpack_exports__["default"] = (MyModal);

/***/ }),

/***/ "./src/components/Modal/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Modal/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal/Modal.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Modal__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/NoticeBar/NoticeBar.less":
/*!*************************************************!*\
  !*** ./src/components/NoticeBar/NoticeBar.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/NoticeBar/NoticeBar.tsx":
/*!************************************************!*\
  !*** ./src/components/NoticeBar/NoticeBar.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_notice_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/notice-bar */ "antd-mobile/lib/notice-bar");
/* harmony import */ var antd_mobile_lib_notice_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_notice_bar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NoticeBar_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NoticeBar.less */ "./src/components/NoticeBar/NoticeBar.less");
/* harmony import */ var _NoticeBar_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_NoticeBar_less__WEBPACK_IMPORTED_MODULE_8__);










var MyNoticeBar = function MyNoticeBar(_ref) {
  var children = _ref.children,
      mode = _ref.mode,
      to = _ref.to,
      native = _ref.native,
      reset = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["children", "mode", "to", "native"]);

  var rest = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({
    icon: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", null),
    onClick: function () {
      var _onClick = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!native) {
                  _context.next = 3;
                  break;
                }

                window.location.href = to || '';
                return _context.abrupt("return");

              case 3:
                _context.t0 = to;

                if (!_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.next = 7;
                return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(to);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onClick() {
        return _onClick.apply(this, arguments);
      }

      return onClick;
    }(),
    marqueeProps: {
      loop: true,
      text: children
    }
  }, reset);

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_mobile_lib_notice_bar__WEBPACK_IMPORTED_MODULE_0___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    mode: mode
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (MyNoticeBar);

/***/ }),

/***/ "./src/components/NoticeBar/index.ts":
/*!*******************************************!*\
  !*** ./src/components/NoticeBar/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoticeBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoticeBar */ "./src/components/NoticeBar/NoticeBar.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_NoticeBar__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/PopupModal/PopupModal.less":
/*!***************************************************!*\
  !*** ./src/components/PopupModal/PopupModal.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"popup_modal": "PopupModal__popup_modal___29T2b",
	"header": "PopupModal__header___1GoxX",
	"title": "PopupModal__title___1samk"
};

/***/ }),

/***/ "./src/components/PopupModal/PopupModal.tsx":
/*!**************************************************!*\
  !*** ./src/components/PopupModal/PopupModal.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/modal */ "antd-mobile/lib/modal");
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _PopupModal_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PopupModal.less */ "./src/components/PopupModal/PopupModal.less");
/* harmony import */ var _PopupModal_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_PopupModal_less__WEBPACK_IMPORTED_MODULE_13__);















function closest(el, selector) {
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}

var MyModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyModal, _React$Component);

  function MyModal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MyModal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(MyModal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MyModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          className = _this$props.className,
          _onClose = _this$props.onClose,
          children = _this$props.children,
          bodyClassName = _this$props.bodyClassName,
          reset = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props, ["title", "className", "onClose", "children", "bodyClassName"]);

      var onWrapTouchStart = function onWrapTouchStart(e) {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }

        var pNode = closest(e.target, '.am-modal-content');

        if (!pNode) {
          e.preventDefault();
        }
      };

      var modalProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, reset, {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_PopupModal_less__WEBPACK_IMPORTED_MODULE_13___default.a.popup_modal, className),
        wrapProps: {
          onTouchStart: onWrapTouchStart
        },
        onClose: function onClose() {
          _onClose && _onClose();
        }
      });

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, modalProps, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: _PopupModal_less__WEBPACK_IMPORTED_MODULE_13___default.a.header
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        className: _PopupModal_less__WEBPACK_IMPORTED_MODULE_13___default.a.title
      }, title), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        type: __webpack_require__(/*! svg/close.svg */ "./static/svg/close.svg"),
        onClick: _onClose
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(bodyClassName, 'popup-body')
      }, children));
    }
  }]);

  return MyModal;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(MyModal, "defaultProps", {
  visible: false,
  popup: true,
  type: 'transparent',
  animationType: 'slide-up',
  maskClosable: true
});

/* harmony default export */ __webpack_exports__["default"] = (MyModal);

/***/ }),

/***/ "./src/components/PopupModal/index.ts":
/*!********************************************!*\
  !*** ./src/components/PopupModal/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopupModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupModal */ "./src/components/PopupModal/PopupModal.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_PopupModal__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/PrimaryLabel/PrimaryLabel.less":
/*!*******************************************************!*\
  !*** ./src/components/PrimaryLabel/PrimaryLabel.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"red": "PrimaryLabel__red___2PrtG",
	"blue": "PrimaryLabel__blue___1j3rA"
};

/***/ }),

/***/ "./src/components/PrimaryLabel/PrimaryLabel.tsx":
/*!******************************************************!*\
  !*** ./src/components/PrimaryLabel/PrimaryLabel.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withSource */ "./src/components/withSource/index.ts");
/* harmony import */ var _PrimaryLabel_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PrimaryLabel.less */ "./src/components/PrimaryLabel/PrimaryLabel.less");
/* harmony import */ var _PrimaryLabel_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PrimaryLabel_less__WEBPACK_IMPORTED_MODULE_3__);





var PrimaryLabel = function PrimaryLabel(_ref) {
  var utm = _ref.utm,
      children = _ref.children;
  var isQsy = utm.get('isQsy');
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(isQsy ? _PrimaryLabel_less__WEBPACK_IMPORTED_MODULE_3___default.a.blue : _PrimaryLabel_less__WEBPACK_IMPORTED_MODULE_3___default.a.red)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withSource__WEBPACK_IMPORTED_MODULE_2__["default"])(PrimaryLabel));

/***/ }),

/***/ "./src/components/PrimaryLabel/index.ts":
/*!**********************************************!*\
  !*** ./src/components/PrimaryLabel/index.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrimaryLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimaryLabel */ "./src/components/PrimaryLabel/PrimaryLabel.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_PrimaryLabel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Product/Product.less":
/*!*********************************************!*\
  !*** ./src/components/Product/Product.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"product": "Product__product___kk3kS",
	"thumb": "Product__thumb___2LYM5",
	"badge": "Product__badge___3D1q4",
	"used": "Product__used___3T_MH",
	"icon_box": "Product__icon_box___BIVV-",
	"icon": "Product__icon___3wHDx",
	"text_box": "Product__text_box___2Z7-G",
	"title": "Product__title___2zaxH",
	"des": "Product__des___3YKF0",
	"price": "Product__price___3dr-G",
	"old_price": "Product__old_price___3ldEF",
	"unit": "Product__unit___3r9yV",
	"sm": "Product__sm___2gRGN",
	"md": "Product__md___1UxBK",
	"price_box": "Product__price_box___dqjhu",
	"xs": "Product__xs___3A_MS",
	"recommend": "Product__recommend___3p7Uj"
};

/***/ }),

/***/ "./src/components/Product/Product.tsx":
/*!********************************************!*\
  !*** ./src/components/Product/Product.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _withSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withSource */ "./src/components/withSource/index.ts");
/* harmony import */ var _Product_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Product.less */ "./src/components/Product/Product.less");
/* harmony import */ var _Product_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Product_less__WEBPACK_IMPORTED_MODULE_5__);







var Product = function Product(_ref) {
  var ua = _ref.ua,
      utm = _ref.utm,
      item = _ref.item,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      trackEvent = _ref.trackEvent,
      recommend = _ref.recommend;
  var isOld = item.get('tag') === 3;
  var showOldPrice = item.get('price') < item.get('baseFee');
  var isApp = ua.get('isApp');
  var isCmblife = utm.get('isCmblife');
  var pathname = isApp ? '/product/index' : '/product/detail';
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    native: isApp || isCmblife,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.product, _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a[size], recommend && _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.recommend),
    to: {
      pathname: pathname,
      query: {
        id_activity: item.get('id')
      }
    },
    trackEvent: trackEvent
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.thumb,
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["LazyImage"], {
    src: item.get('imgUrl')
  }), !item.get('noBadge') ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.badge, isOld && _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.used)
  }, isOld ? '9成新' : '全新') : '', showOldPrice && !item.get('noBadge') && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.icon_box
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    className: _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.icon,
    type: __webpack_require__(/*! svg/jiangjia.svg */ "./static/svg/jiangjia.svg")
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "\u76F4\u964D"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.text_box
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.title, size !== 'xs' && 'ellipsis')
  }, item.get('title')), item.get('assurance') && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.des, 'ellipsis')
  }, "\u6BD4\u8D2D\u4E70\u7701\uFFE5", item.get('assurance'), "\u8D77"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.price_box
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.price, 'special')
  }, "\xA5", item.get('price'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit
  }, "/\u6708\u8D77")), showOldPrice && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.old_price
  }, "\uFFE5", item.get('baseFee'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: _Product_less__WEBPACK_IMPORTED_MODULE_5___default.a.unit
  }, "/\u6708\u8D77")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withSource__WEBPACK_IMPORTED_MODULE_4__["default"])(Product));

/***/ }),

/***/ "./src/components/Product/index.ts":
/*!*****************************************!*\
  !*** ./src/components/Product/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./src/components/Product/Product.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Product__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ProductBox/ProductBox.less":
/*!***************************************************!*\
  !*** ./src/components/ProductBox/ProductBox.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"product_box": "ProductBox__product_box___1StoH",
	"margin": "ProductBox__margin___PNzOH",
	"product": "ProductBox__product___4cYKP",
	"thumb": "ProductBox__thumb___1iSHV",
	"text": "ProductBox__text___3yV8s"
};

/***/ }),

/***/ "./src/components/ProductBox/ProductBox.tsx":
/*!**************************************************!*\
  !*** ./src/components/ProductBox/ProductBox.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/list */ "antd-mobile/lib/list");
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProductBox_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductBox.less */ "./src/components/ProductBox/ProductBox.less");
/* harmony import */ var _ProductBox_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProductBox_less__WEBPACK_IMPORTED_MODULE_4__);





var Item = antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1___default.a.Item;

var ProductBox = function ProductBox(_ref) {
  var thumb = _ref.thumb,
      alias = _ref.alias,
      rent = _ref.rent,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? false : _ref$margin;
  var showPrice = "".concat(rent).startsWith('￥');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ProductBox_less__WEBPACK_IMPORTED_MODULE_4___default.a.product_box, margin && _ProductBox_less__WEBPACK_IMPORTED_MODULE_4___default.a.margin)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _ProductBox_less__WEBPACK_IMPORTED_MODULE_4___default.a.product
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: _ProductBox_less__WEBPACK_IMPORTED_MODULE_4___default.a.thumb,
    src: thumb
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Item, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: _ProductBox_less__WEBPACK_IMPORTED_MODULE_4___default.a.text
  }, alias), !showPrice && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "\u79DF\u671F\uFF1A", rent, "\u4E2A\u6708"), showPrice && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "\u79DF\u91D1\uFF1A", rent, "/\u6708"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductBox);

/***/ }),

/***/ "./src/components/ProductBox/index.ts":
/*!********************************************!*\
  !*** ./src/components/ProductBox/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductBox */ "./src/components/ProductBox/ProductBox.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_ProductBox__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Router/Router.ts":
/*!*****************************************!*\
  !*** ./src/components/Router/Router.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/app */ "./src/utils/app.ts");








var Router =
/*#__PURE__*/
function () {
  function Router() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Router);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Router, null, [{
    key: "push",
    value: function () {
      var _push = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, as) {
        var options,
            _args = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};

                if (!(Object(utils_app__WEBPACK_IMPORTED_MODULE_6__["isApp"])() || typeof url === 'string' && url.startsWith('http'))) {
                  _context.next = 5;
                  break;
                }

                window.location.href = typeof url === 'object' ? Object(url__WEBPACK_IMPORTED_MODULE_5__["format"])(url) : url;
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(url, as, options);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function push(_x, _x2) {
        return _push.apply(this, arguments);
      }

      return push;
    }()
  }, {
    key: "replace",
    value: function () {
      var _replace = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, as) {
        var options,
            _args2 = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};

                if (!(Object(utils_app__WEBPACK_IMPORTED_MODULE_6__["isApp"])() || typeof url === 'string' && url.startsWith('http'))) {
                  _context2.next = 5;
                  break;
                }

                window.location.replace(typeof url === 'object' ? Object(url__WEBPACK_IMPORTED_MODULE_5__["format"])(url) : url);
                _context2.next = 7;
                break;

              case 5:
                _context2.next = 7;
                return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace(url, as, options);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function replace(_x3, _x4) {
        return _replace.apply(this, arguments);
      }

      return replace;
    }()
  }, {
    key: "back",
    value: function back() {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/components/Router/index.ts":
/*!****************************************!*\
  !*** ./src/components/Router/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./src/components/Router/Router.ts");

/* harmony default export */ __webpack_exports__["default"] = (_Router__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Share/Share.tsx":
/*!****************************************!*\
  !*** ./src/components/Share/Share.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Copy */ "./src/components/Copy/index.ts");
/* harmony import */ var _withSource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../withSource */ "./src/components/withSource/index.ts");













var Share =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Share, _React$Component);

  function Share() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Share);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Share)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "shareInfoApp", {
      url: _this.props.url,
      title: _this.props.title || '享换机',
      content: _this.props.content || '666',
      img: _this.props.img
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "isWechat", _this.props.ua.get('isWechat'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "isAlipay", _this.props.ua.get('isAlipay'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "isApp", _this.props.ua.get('isApp'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "isAndroidApp", _this.props.ua.get('isAndroidApp'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "isIOSApp", _this.props.ua.get('isIOSApp'));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleAppShare", function () {
      var stringObj = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.shareInfoApp);

      if (_this.isAndroidApp) {
        // 调用安卓App分享
        window.jsObj.startShare(stringObj);
      } else {
        // 调用iosApp分享
        window.webkit.messageHandlers.startShare.postMessage(stringObj);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleWechatShare", function () {
      var _require = __webpack_require__(/*! ../../utils/wechat */ "./src/utils/wechat.js"),
          share = _require.share;

      share({
        title: _this.shareInfoApp.title,
        desc: _this.shareInfoApp.content,
        imgUrl: _this.shareInfoApp.img,
        link: _this.shareInfoApp.url
      });

      antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default.a.info('点击右上角分享给好友', 1.5);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleAlipayShare", function () {
      var _require2 = __webpack_require__(/*! ../../utils/alipayShare */ "./src/utils/alipayShare.js"),
          alipayShare = _require2.alipayShare;

      alipayShare({
        title: _this.shareInfoApp.title,
        content: _this.shareInfoApp.content,
        image: _this.shareInfoApp.img,
        url: _this.props.url
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onClickCopy", function () {
      antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_0___default.a.info('复制成功，请去粘贴分享', 1.5);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Share, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.beforehand) {
        if (this.isWechat) {
          var _require3 = __webpack_require__(/*! ../../utils/wechat */ "./src/utils/wechat.js"),
              share = _require3.share;

          share({
            title: this.shareInfoApp.title,
            desc: this.shareInfoApp.content,
            imgUrl: this.shareInfoApp.img,
            link: this.shareInfoApp.url
          });
        }

        if (this.isAlipay) {
          var _require4 = __webpack_require__(/*! ../../utils/alipayShare */ "./src/utils/alipayShare.js"),
              initShare = _require4.initShare;

          initShare({
            title: this.shareInfoApp.title,
            content: this.shareInfoApp.content,
            image: this.shareInfoApp.img,
            url: this.shareInfoApp.url
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, this.isApp && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        onClick: this.handleAppShare
      }, children), this.isWechat && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        onClick: this.handleWechatShare
      }, children), this.isAlipay && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        onClick: this.handleAlipayShare
      }, children), !this.isApp && !this.isWechat && !this.isAlipay && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Copy__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: this.shareInfoApp.url,
        onCopied: this.onClickCopy
      }, children));
    }
  }]);

  return Share;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withSource__WEBPACK_IMPORTED_MODULE_11__["default"])(Share));

/***/ }),

/***/ "./src/components/Share/index.ts":
/*!***************************************!*\
  !*** ./src/components/Share/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Share */ "./src/components/Share/Share.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Share__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Steps/Steps.less":
/*!*****************************************!*\
  !*** ./src/components/Steps/Steps.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Steps": "Steps__Steps___JU-Xc",
	"phase": "Steps__phase___Rn2J0",
	"process_detail": "Steps__process_detail___1gX0v",
	"progress": "Steps__progress___1gCZW",
	"icon": "Steps__icon___1gFH4",
	"pro_date": "Steps__pro_date___3e6Cp",
	"pro_eva": "Steps__pro_eva___2gvJJ",
	"pro_copy": "Steps__pro_copy___iuIuj",
	"copy_ok": "Steps__copy_ok___3_WGm",
	"done": "Steps__done___1saPV"
};

/***/ }),

/***/ "./src/components/Steps/Steps.tsx":
/*!****************************************!*\
  !*** ./src/components/Steps/Steps.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Steps_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Steps.less */ "./src/components/Steps/Steps.less");
/* harmony import */ var _Steps_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Steps_less__WEBPACK_IMPORTED_MODULE_12__);













// icon 状态 1初始化  2进行中  3已完成  4报错
var status = {
  1: __webpack_require__(/*! svg/jinxingzhong.svg */ "./static/svg/jinxingzhong.svg"),
  2: __webpack_require__(/*! svg/zuihou.svg */ "./static/svg/zuihou.svg"),
  3: __webpack_require__(/*! svg/yiwancheng.svg */ "./static/svg/yiwancheng.svg"),
  4: __webpack_require__(/*! svg/butongguo.svg */ "./static/svg/butongguo.svg"),
  5: __webpack_require__(/*! svg/weijinxing.svg */ "./static/svg/weijinxing.svg")
};

var Steps =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Steps, _React$Component);

  function Steps() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Steps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Steps)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onClickCopy", function () {
      antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.info('复制成功', 1.5);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Steps, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: _Steps_less__WEBPACK_IMPORTED_MODULE_12___default.a.Steps
      }, this.props.logs.map(function (items, index) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a, {
          align: "stretch",
          className: _Steps_less__WEBPACK_IMPORTED_MODULE_12___default.a.phase,
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_0___default.a, {
          className: _Steps_less__WEBPACK_IMPORTED_MODULE_12___default.a.progress,
          direction: "column"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          type: status[items.get('status')],
          className: _Steps_less__WEBPACK_IMPORTED_MODULE_12___default.a.icon
        })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Steps_less__WEBPACK_IMPORTED_MODULE_12___default.a.process_detail, index !== 0 && _Steps_less__WEBPACK_IMPORTED_MODULE_12___default.a.done)
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h4", null, items.get('remark')), items.get('content').map(function (item, ide) {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
            key: ide
          }, item);
        }), items.get('copy') && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: _Steps_less__WEBPACK_IMPORTED_MODULE_12___default.a.pro_copy
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, "\u4E0A\u6D77\u5E02\u5B9D\u5C71\u533A\u7EAA\u8570\u8DEF588\u53F7\u667A\u529B\u4EA7\u4E1A\u56ED2\u53F7\u697C1\u697C\u4EAB\u6362\u673A"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, "\u8054\u7CFB\u4EBA\uFF1A\u5F90\u5148\u751F"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, "\u624B\u673A\u53F7\uFF1A13310155193", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["Copy"], {
          onCopied: _this2.onClickCopy,
          text: "\u4E0A\u6D77\u5E02\u5B9D\u5C71\u533A\u7EAA\u8570\u8DEF588\u53F7\u667A\u529B\u4EA7\u4E1A\u56ED2\u53F7\u697C1\u697C\u4EAB\u6362\u673A \u8054\u7CFB\u4EBA\uFF1A\u5F90\u5148\u751F \u624B\u673A\u53F7\uFF1A13310155193"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: _Steps_less__WEBPACK_IMPORTED_MODULE_12___default.a.copy_ok
        }, "\u590D\u5236")))), items.get('dt_created') && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          className: _Steps_less__WEBPACK_IMPORTED_MODULE_12___default.a.pro_date
        }, items.get('dt_created'))));
      }));
    }
  }]);

  return Steps;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./src/components/Steps/index.ts":
/*!***************************************!*\
  !*** ./src/components/Steps/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Steps */ "./src/components/Steps/Steps.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Steps__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Swiper/Swiper.less":
/*!*******************************************!*\
  !*** ./src/components/Swiper/Swiper.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"swiper_wrap": "Swiper__swiper_wrap___DHFOs",
	"swiper": "Swiper__swiper___2D9OJ",
	"dot_right": "Swiper__dot_right___Ov0f5",
	"dot_bottom": "Swiper__dot_bottom___3hPc7"
};

/***/ }),

/***/ "./src/components/Swiper/Swiper.tsx":
/*!******************************************!*\
  !*** ./src/components/Swiper/Swiper.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _Swiper_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Swiper.less */ "./src/components/Swiper/Swiper.less");
/* harmony import */ var _Swiper_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Swiper_less__WEBPACK_IMPORTED_MODULE_6__);








var MySwiper = function MySwiper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      dots = _ref.dots,
      dotPosition = _ref.dotPosition,
      afterChange = _ref.afterChange,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "className", "dots", "dotPosition", "afterChange"]);

  if (!dots) {
    props.pagination = {};
  }

  if (afterChange) {
    props.on.slideChange = function () {
      var $swiper = this;
      afterChange($swiper.activeIndex);
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _Swiper_less__WEBPACK_IMPORTED_MODULE_6___default.a.swiper_wrap
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_id_swiper__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    containerClass: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Swiper_less__WEBPACK_IMPORTED_MODULE_6___default.a.swiper, className, _Swiper_less__WEBPACK_IMPORTED_MODULE_6___default.a["dot_".concat(dotPosition)])
  }), children));
};

MySwiper.defaultProps = {
  dots: true,
  dotPosition: 'center',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletActiveClass: 'active'
  },
  on: {
    slideChange: utils_tools__WEBPACK_IMPORTED_MODULE_5__["noop"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MySwiper);

/***/ }),

/***/ "./src/components/Swiper/index.ts":
/*!****************************************!*\
  !*** ./src/components/Swiper/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Swiper */ "./src/components/Swiper/Swiper.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Swiper__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Switch/Switch.less":
/*!*******************************************!*\
  !*** ./src/components/Switch/Switch.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"switch": "Switch__switch___1l-N6",
	"hiddenBox": "Switch__hiddenBox___1xknN",
	"text": "Switch__text___25Zxy",
	"box": "Switch__box___8e3Ym",
	"checked": "Switch__checked___fQUbU",
	"round": "Switch__round___2CzZ0"
};

/***/ }),

/***/ "./src/components/Switch/Switch.tsx":
/*!******************************************!*\
  !*** ./src/components/Switch/Switch.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Switch_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Switch.less */ "./src/components/Switch/Switch.less");
/* harmony import */ var _Switch_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Switch_less__WEBPACK_IMPORTED_MODULE_9__);











var Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Switch, _React$Component);

  function Switch() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Switch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Switch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      checked: _this.props.checked
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      if (!_this.props.editable) return;

      _this.setState({
        checked: !_this.state.checked
      }, function () {
        var onChange = _this.props.onChange;

        if (onChange) {
          onChange(_this.state.checked);
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Switch, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          hideCheckBox = _this$props.hideCheckBox;
      var cx = classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Switch_less__WEBPACK_IMPORTED_MODULE_9___default.a.switch, className, hideCheckBox && _Switch_less__WEBPACK_IMPORTED_MODULE_9___default.a.hiddenBox);
      var cx2 = classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Switch_less__WEBPACK_IMPORTED_MODULE_9___default.a.box, this.state.checked && _Switch_less__WEBPACK_IMPORTED_MODULE_9___default.a.checked, this.props.round && _Switch_less__WEBPACK_IMPORTED_MODULE_9___default.a.round);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: cx,
        onClick: this.handleClick
      }, !hideCheckBox && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: cx2
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Switch_less__WEBPACK_IMPORTED_MODULE_9___default.a.text
      }, children));
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Switch, "defaultProps", {
  editable: true,
  hideCheckBox: false
});

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/components/Switch/index.ts":
/*!****************************************!*\
  !*** ./src/components/Switch/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch */ "./src/components/Switch/Switch.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Switch__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/TabBar/NewTabBar.less":
/*!**********************************************!*\
  !*** ./src/components/TabBar/NewTabBar.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"tabbar_box": "NewTabBar__tabbar_box___24Qxc",
	"show": "NewTabBar__show___1RXxE",
	"fixed": "NewTabBar__fixed___3hlbU",
	"item": "NewTabBar__item___2_Ku9",
	"icon": "NewTabBar__icon___3Nf6G",
	"active": "NewTabBar__active___1sAqo"
};

/***/ }),

/***/ "./src/components/TabBar/NewTabBar.tsx":
/*!*********************************************!*\
  !*** ./src/components/TabBar/NewTabBar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd-mobile/lib/flex */ "antd-mobile/lib/flex");
/* harmony import */ var antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var actions_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/app */ "./src/actions/app.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var configs_trackEventLabels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! configs/trackEventLabels */ "./src/configs/trackEventLabels.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var utils_piwik__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! utils/piwik */ "./src/utils/piwik.ts");
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _NewTabBar_less__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NewTabBar.less */ "./src/components/TabBar/NewTabBar.less");
/* harmony import */ var _NewTabBar_less__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_NewTabBar_less__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./TabBar */ "./src/components/TabBar/TabBar.tsx");





















var Item = antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_9___default.a.Item;

var mapStateToProps = function mapStateToProps(state) {
  return {
    tabBar: state.getIn(['app', 'tabBar']),
    serverTabBar: state.getIn(['serverApp', 'tabBar']),
    navIcons: state.getIn(['app', 'navIcons', 'icons'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onInitTabBar: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(actions_app__WEBPACK_IMPORTED_MODULE_10__["initTabBar"], dispatch)
  };
};

var MyTabBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyTabBar, _React$Component);

  function MyTabBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyTabBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyTabBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      curSelected: _this.props.selectedTab
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handlePress", function (type) {
      return (
        /*#__PURE__*/
        Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var serverTabBar;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.setState({
                    curSelected: type
                  });

                  _context.next = 3;
                  return Object(utils_tools__WEBPACK_IMPORTED_MODULE_18__["delayHandle"])(0.15);

                case 3:
                  serverTabBar = _this.props.serverTabBar;
                  _context.next = 6;
                  return next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(serverTabBar.getIn([type, 'link']));

                case 6:
                  window.scrollTo(0, 0);
                  Object(utils_piwik__WEBPACK_IMPORTED_MODULE_17__["trackClickEvent"])({
                    category: configs_trackEventLabels__WEBPACK_IMPORTED_MODULE_12__["TrackEventTabBar"].Category,
                    label: "".concat(_TabBar__WEBPACK_IMPORTED_MODULE_20__["dicTractEvent"][type])
                  });

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))
      );
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyTabBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          tabBar = _this$props.tabBar,
          serverTabBar = _this$props.serverTabBar,
          hidden = _this$props.hidden,
          navIcons = _this$props.navIcons;
      var curSelected = this.state.curSelected;
      var show = tabBar.get('show');
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_mobile_lib_flex__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(_NewTabBar_less__WEBPACK_IMPORTED_MODULE_19___default.a.tabbar_box, show && _NewTabBar_less__WEBPACK_IMPORTED_MODULE_19___default.a.show, !hidden && _NewTabBar_less__WEBPACK_IMPORTED_MODULE_19___default.a.fixed)
      }, navIcons.filter(function (item) {
        return !serverTabBar.getIn([item.get('key'), 'hide']);
      }).map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Item, {
          key: key,
          className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(_NewTabBar_less__WEBPACK_IMPORTED_MODULE_19___default.a.item, curSelected === item.get('key') && _NewTabBar_less__WEBPACK_IMPORTED_MODULE_19___default.a.active),
          onClick: _this2.handlePress(item.get('key'))
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
          className: _NewTabBar_less__WEBPACK_IMPORTED_MODULE_19___default.a.icon,
          src: curSelected === item.get('key') ? item.get('select_icon') : item.get('icon')
        }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, item.get('text')));
      }));
    }
  }]);

  return MyTabBar;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(MyTabBar, "defaultProps", {
  hidden: false,
  selectedTab: ''
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, mapDispatchToProps)(MyTabBar));

/***/ }),

/***/ "./src/components/TabBar/TabBar.less":
/*!*******************************************!*\
  !*** ./src/components/TabBar/TabBar.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"tabbar_box": "TabBar__tabbar_box___3qu14",
	"show": "TabBar__show___2UYk_",
	"fixed": "TabBar__fixed___2_jXT"
};

/***/ }),

/***/ "./src/components/TabBar/TabBar.tsx":
/*!******************************************!*\
  !*** ./src/components/TabBar/TabBar.tsx ***!
  \******************************************/
/*! exports provided: dicTractEvent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dicTractEvent", function() { return dicTractEvent; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_mobile_lib_tab_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd-mobile/lib/tab-bar */ "antd-mobile/lib/tab-bar");
/* harmony import */ var antd_mobile_lib_tab_bar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_tab_bar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var actions_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/app */ "./src/actions/app.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var configs_trackEventLabels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! configs/trackEventLabels */ "./src/configs/trackEventLabels.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var utils_piwik__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! utils/piwik */ "./src/utils/piwik.ts");
/* harmony import */ var _NewTabBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./NewTabBar */ "./src/components/TabBar/NewTabBar.tsx");
/* harmony import */ var _TabBar_less__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TabBar.less */ "./src/components/TabBar/TabBar.less");
/* harmony import */ var _TabBar_less__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_TabBar_less__WEBPACK_IMPORTED_MODULE_19__);




















var Item = antd_mobile_lib_tab_bar__WEBPACK_IMPORTED_MODULE_9___default.a.Item;

var mapStateToProps = function mapStateToProps(state) {
  return {
    tabBar: state.getIn(['app', 'tabBar']),
    serverTabBar: state.getIn(['serverApp', 'tabBar']),
    navIcons: state.getIn(['app', 'navIcons', 'icons']),
    isFestival: state.getIn(['app', 'navIcons', 'is_festival'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onInitTabBar: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(actions_app__WEBPACK_IMPORTED_MODULE_10__["initTabBar"], dispatch),
    onFetchNavIcons: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(actions_app__WEBPACK_IMPORTED_MODULE_10__["fetchNavIcons"], dispatch)
  };
};

var dicTractEvent = {
  home: 'HomeIcon',
  product: 'ClassfyIcon',
  myCenter: 'MineIcon'
};

var MyTabBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyTabBar, _React$Component);

  function MyTabBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyTabBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyTabBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handlePress", function (type) {
      return (
        /*#__PURE__*/
        Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var serverTabBar;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverTabBar = _this.props.serverTabBar;
                  _context.next = 3;
                  return next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(serverTabBar.getIn([type, 'link']));

                case 3:
                  window.scrollTo(0, 0);
                  Object(utils_piwik__WEBPACK_IMPORTED_MODULE_17__["trackClickEvent"])({
                    category: configs_trackEventLabels__WEBPACK_IMPORTED_MODULE_12__["TrackEventTabBar"].Category,
                    label: "".concat(dicTractEvent[type])
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))
      );
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderIcon", function (icon) {
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        style: {
          width: '22px',
          height: '22px',
          background: "url(".concat(icon, ") center center /  21px 21px no-repeat")
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyTabBar, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this$props, hidden, selectedTab, navIcons, onInitTabBar, onFetchNavIcons;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props = this.props, hidden = _this$props.hidden, selectedTab = _this$props.selectedTab, navIcons = _this$props.navIcons, onInitTabBar = _this$props.onInitTabBar, onFetchNavIcons = _this$props.onFetchNavIcons;
                _context2.t0 = navIcons.size === 0;

                if (!_context2.t0) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return onFetchNavIcons();

              case 5:
                onInitTabBar({
                  selectedTab: selectedTab,
                  show: !hidden
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          tabBar = _this$props2.tabBar,
          serverTabBar = _this$props2.serverTabBar,
          hidden = _this$props2.hidden,
          isFestival = _this$props2.isFestival,
          navIcons = _this$props2.navIcons;
      var selectedTab = tabBar.get('selectedTab');
      var show = tabBar.get('show');

      if (isFestival === 1) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_NewTabBar__WEBPACK_IMPORTED_MODULE_18__["default"], this.props);
      }

      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(_TabBar_less__WEBPACK_IMPORTED_MODULE_19___default.a.tabbar_box, show && _TabBar_less__WEBPACK_IMPORTED_MODULE_19___default.a.show, !hidden && _TabBar_less__WEBPACK_IMPORTED_MODULE_19___default.a.fixed)
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_mobile_lib_tab_bar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        unselectedTintColor: "#929292",
        tintColor: "#FF5151",
        barTintColor: "white"
      }, navIcons.filter(function (item) {
        return !serverTabBar.getIn([item.get('key'), 'hide']);
      }).map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Item, {
          icon: _this2.renderIcon(item.get('icon')),
          selectedIcon: _this2.renderIcon(item.get('select_icon')),
          title: item.get('text'),
          key: item.get('key'),
          selected: selectedTab === item.get('key'),
          onPress: _this2.handlePress(item.get('key'))
        });
      })));
    }
  }]);

  return MyTabBar;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(MyTabBar, "defaultProps", {
  hidden: false,
  selectedTab: ''
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, mapDispatchToProps)(MyTabBar));

/***/ }),

/***/ "./src/components/TabBar/index.ts":
/*!****************************************!*\
  !*** ./src/components/TabBar/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabBar */ "./src/components/TabBar/TabBar.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_TabBar__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Upload/Upload.less":
/*!*******************************************!*\
  !*** ./src/components/Upload/Upload.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "Upload__container___12KQh",
	"disabled": "Upload__disabled___3l8Ib"
};

/***/ }),

/***/ "./src/components/Upload/Upload.tsx":
/*!******************************************!*\
  !*** ./src/components/Upload/Upload.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_image_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/image-picker */ "antd-mobile/lib/image-picker");
/* harmony import */ var antd_mobile_lib_image_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_image_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var actions_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/upload */ "./src/actions/upload.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Loading/Loading */ "./src/components/Loading/Loading.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _Upload_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Upload.less */ "./src/components/Upload/Upload.less");
/* harmony import */ var _Upload_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Upload_less__WEBPACK_IMPORTED_MODULE_17__);



















var Upload =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Upload, _React$Component);

  function Upload() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Upload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Upload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      files: _this.props.value,
      loading: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(files, operationType, index) {
        var i, base64, res, onChange;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.props.editable) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (!_this.props.value) {
                  _this.setState({
                    files: files
                  });
                }

                _this.setState({
                  loading: true
                });

                i = 0;

              case 5:
                if (!(i < files.length)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 8;
                return Object(utils_tools__WEBPACK_IMPORTED_MODULE_16__["zipBase64"])(files[i].url);

              case 8:
                base64 = _context.sent;
                _context.next = 11;
                return _this.props.uploadBase64(base64);

              case 11:
                res = _context.sent;
                files[i].url = base64;
                files[i].file_name = res.file_name;
                files[i].file_url = res.file_url;

              case 15:
                i++;
                _context.next = 5;
                break;

              case 18:
                _this.setState({
                  loading: false
                });

                onChange = _this.props.onChange;

                if (onChange) {
                  onChange(files, operationType, index);
                }

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Upload, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps && this.props.value !== nextProps.value) {
        var _files = nextProps.value;
        this.setState({
          files: _files
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var files = this.state.files;
      var _this$props = this.props,
          className = _this$props.className,
          multiple = _this$props.multiple,
          selectable = _this$props.selectable,
          accept = _this$props.accept,
          onAddImageClick = _this$props.onAddImageClick,
          onImageClick = _this$props.onImageClick,
          onFail = _this$props.onFail;
      var cx = classnames__WEBPACK_IMPORTED_MODULE_11___default()(!this.props.editable && _Upload_less__WEBPACK_IMPORTED_MODULE_17___default.a.disabled, className);
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: _Upload_less__WEBPACK_IMPORTED_MODULE_17___default.a.container
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_mobile_lib_image_picker__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: cx,
        multiple: multiple,
        selectable: selectable,
        files: files,
        accept: accept,
        onChange: this.handleChange,
        onImageClick: onImageClick,
        onAddImageClick: onAddImageClick,
        onFail: onFail
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loading: this.state.loading
      }));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Upload, "defaultProps", {
  editable: true
});

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    uploadBase64: Object(redux__WEBPACK_IMPORTED_MODULE_15__["bindActionCreators"])(actions_upload__WEBPACK_IMPORTED_MODULE_10__["uploadBase64"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps)(Upload));

/***/ }),

/***/ "./src/components/Upload/index.ts":
/*!****************************************!*\
  !*** ./src/components/Upload/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Upload */ "./src/components/Upload/Upload.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Upload__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Wrap/Wrap.less":
/*!***************************************!*\
  !*** ./src/components/Wrap/Wrap.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrap": "Wrap__wrap___h2qbP",
	"xl": "Wrap__xl___NUjmT",
	"lg": "Wrap__lg___QDHAk",
	"md": "Wrap__md___PLsUI",
	"sm": "Wrap__sm___d2nZm",
	"xs": "Wrap__xs___3Pzve",
	"xxs": "Wrap__xxs___Be4Yn"
};

/***/ }),

/***/ "./src/components/Wrap/Wrap.tsx":
/*!**************************************!*\
  !*** ./src/components/Wrap/Wrap.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Wrap_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wrap.less */ "./src/components/Wrap/Wrap.less");
/* harmony import */ var _Wrap_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Wrap_less__WEBPACK_IMPORTED_MODULE_3__);





var Wrap = function Wrap(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'lg' : _ref$size,
      bgColor = _ref.bgColor,
      WhiteSpace = _ref.WhiteSpace;
  var padding = WhiteSpace ? {
    padding: "".concat(WhiteSpace, "px 15px")
  } : null;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Wrap_less__WEBPACK_IMPORTED_MODULE_3___default.a.wrap, _Wrap_less__WEBPACK_IMPORTED_MODULE_3___default.a[size], className),
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: bgColor
    }, padding)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Wrap);

/***/ }),

/***/ "./src/components/Wrap/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Wrap/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Wrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wrap */ "./src/components/Wrap/Wrap.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Wrap__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Alert, AudioWidget, Container, Copy, Header, Link, TabBar, Icon, Product, Loading, Modal, PopupModal, ErrorMsg, withSource, withAuth, withLoading, BrandText, LazyImage, ListView, Upload, Button, Switch, Swiper, Steps, Share, ProductBox, CityList, CSButtons, CaptchaButton, Wrap, NoticeBar, ChooseList, PrimaryLabel, BtnSendSms, Router, BreadCrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./src/components/Alert/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _Alert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AudioWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioWidget */ "./src/components/AudioWidget/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioWidget", function() { return _AudioWidget__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BrandText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandText */ "./src/components/BrandText/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandText", function() { return _BrandText__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BreadCrumb */ "./src/components/BreadCrumb/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadCrumb", function() { return _BreadCrumb__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _BtnSendSms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BtnSendSms */ "./src/components/BtnSendSms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnSendSms", function() { return _BtnSendSms__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./src/components/Button/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _CSButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSButtons */ "./src/components/CSButtons/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSButtons", function() { return _CSButtons__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _CaptchaButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CaptchaButton */ "./src/components/CaptchaButton/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptchaButton", function() { return _CaptchaButton__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ChooseList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChooseList */ "./src/components/ChooseList/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChooseList", function() { return _ChooseList__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _CityList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CityList */ "./src/components/CityList/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CityList", function() { return _CityList__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Container */ "./src/components/Container/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Copy */ "./src/components/Copy/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Copy", function() { return _Copy__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _ErrorMsg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ErrorMsg */ "./src/components/ErrorMsg/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMsg", function() { return _ErrorMsg__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Header */ "./src/components/Header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _LazyImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LazyImage */ "./src/components/LazyImage/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyImage", function() { return _LazyImage__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Link_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Link/Link */ "./src/components/Link/Link.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link_Link__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _ListView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ListView */ "./src/components/ListView/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return _ListView__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _NoticeBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./NoticeBar */ "./src/components/NoticeBar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoticeBar", function() { return _NoticeBar__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _PopupModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PopupModal */ "./src/components/PopupModal/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupModal", function() { return _PopupModal__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _PrimaryLabel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PrimaryLabel */ "./src/components/PrimaryLabel/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryLabel", function() { return _PrimaryLabel__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Product */ "./src/components/Product/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _Product__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _ProductBox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ProductBox */ "./src/components/ProductBox/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductBox", function() { return _ProductBox__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Router */ "./src/components/Router/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _Share__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Share */ "./src/components/Share/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _Share__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Steps */ "./src/components/Steps/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return _Steps__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Swiper */ "./src/components/Swiper/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _Swiper__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Switch */ "./src/components/Switch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TabBar */ "./src/components/TabBar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return _TabBar__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Upload */ "./src/components/Upload/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _Upload__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _Wrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Wrap */ "./src/components/Wrap/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wrap", function() { return _Wrap__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./withAuth */ "./src/components/withAuth/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAuth", function() { return _withAuth__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _withLoading__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./withLoading */ "./src/components/withLoading/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLoading", function() { return _withLoading__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _withSource__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./withSource */ "./src/components/withSource/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSource", function() { return _withSource__WEBPACK_IMPORTED_MODULE_35__["default"]; });







































/***/ }),

/***/ "./src/components/withAuth/index.ts":
/*!******************************************!*\
  !*** ./src/components/withAuth/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withAuth */ "./src/components/withAuth/withAuth.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_withAuth__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/withAuth/withAuth.tsx":
/*!**********************************************!*\
  !*** ./src/components/withAuth/withAuth.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);





function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.getIn(['serverApp', 'auth'])
  };
};

function withAuth(WrappedComponent) {
  var WithAuth = function WithAuth(_ref) {
    var dispatch = _ref.dispatch,
        auth = _ref.auth,
        props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["dispatch", "auth"]);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      auth: auth
    }, props));
  };

  WithAuth.displayName = "HocWithAuth(".concat(getDisplayName(WrappedComponent), ")");
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(WithAuth);
}

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./src/components/withLoading/index.ts":
/*!*********************************************!*\
  !*** ./src/components/withLoading/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withLoading */ "./src/components/withLoading/withLoading.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_withLoading__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/withLoading/withLoading.tsx":
/*!****************************************************!*\
  !*** ./src/components/withLoading/withLoading.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/tools */ "./src/utils/tools.ts");














function getDisplayName(UnwrappedComponent) {
  return UnwrappedComponent.displayName || UnwrappedComponent.name || 'Component';
}

function withLoading(UnwrappedComponent) {
  var WithLoading =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(WithLoading, _React$Component);

    function WithLoading() {
      var _getPrototypeOf2;

      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithLoading);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithLoading)).call.apply(_getPrototypeOf2, [this].concat(args)));

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
        loading: true
      });

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "displayName", "HocWithLoading(".concat(getDisplayName(UnwrappedComponent), ")"));

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "isCancelled", false);

      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithLoading, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.setState({
                    loading: false
                  });

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.setState({
          loading: false
        });
        this.isCancelled = true;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var ownProps = {
          loading: this.state.loading,
          setLoading: function setLoading(loading) {
            !_this2.isCancelled && _this2.setState({
              loading: loading
            });
          },
          setAsyncLoading: function () {
            var _setAsyncLoading = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(loading) {
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Object(utils_tools__WEBPACK_IMPORTED_MODULE_12__["delayHandle"])(0);

                    case 2:
                      !_this2.isCancelled && _this2.setState({
                        loading: loading
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            function setAsyncLoading(_x) {
              return _setAsyncLoading.apply(this, arguments);
            }

            return setAsyncLoading;
          }()
        };
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(UnwrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, this.props)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["Loading"], {
          loading: this.state.loading
        }));
      }
    }]);

    return WithLoading;
  }(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

  return WithLoading;
}

/* harmony default export */ __webpack_exports__["default"] = (withLoading);

/***/ }),

/***/ "./src/components/withSource/index.ts":
/*!********************************************!*\
  !*** ./src/components/withSource/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withSource */ "./src/components/withSource/withSource.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_withSource__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/withSource/withSource.tsx":
/*!**************************************************!*\
  !*** ./src/components/withSource/withSource.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);





function getDisplayName(UnwrappedComponent) {
  return UnwrappedComponent.displayName || UnwrappedComponent.name || 'Component';
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    ua: state.getIn(['serverApp', 'ua']),
    utm: state.getIn(['serverApp', 'utm'])
  };
};

function withSource(UnwrappedComponent) {
  var WithSource = function WithSource(_ref) {
    var dispatch = _ref.dispatch,
        ua = _ref.ua,
        utm = _ref.utm,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["dispatch", "ua", "utm"]);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UnwrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ua: ua,
      utm: utm
    }, rest));
  };

  WithSource.displayName = "HocWithSource(".concat(getDisplayName(UnwrappedComponent), ")");
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(WithSource);
}

/* harmony default export */ __webpack_exports__["default"] = (withSource);

/***/ }),

/***/ "./src/configs/trackEventLabels.ts":
/*!*****************************************!*\
  !*** ./src/configs/trackEventLabels.ts ***!
  \*****************************************/
/*! exports provided: TrackEventHome, TrackEventCategory, TrackEventTabBar, TrackEventBrand, TrackEventProductDetail, TrackEventTradeDev, TrackEventFundsUnion, TrackEventMyCenter, TrackEventRiskFlowStep, TrackEventExchange, TrackEventRentWithholding, TrackEventLBF, TrackEventEnterPrise, TrackEventMyAccountReturn, TrackEventTradeAssess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventHome", function() { return TrackEventHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventCategory", function() { return TrackEventCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventTabBar", function() { return TrackEventTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventBrand", function() { return TrackEventBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventProductDetail", function() { return TrackEventProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventTradeDev", function() { return TrackEventTradeDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventFundsUnion", function() { return TrackEventFundsUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventMyCenter", function() { return TrackEventMyCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventRiskFlowStep", function() { return TrackEventRiskFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventExchange", function() { return TrackEventExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventRentWithholding", function() { return TrackEventRentWithholding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventLBF", function() { return TrackEventLBF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventEnterPrise", function() { return TrackEventEnterPrise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventMyAccountReturn", function() { return TrackEventMyAccountReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackEventTradeAssess", function() { return TrackEventTradeAssess; });
var TrackEventHome = {
  Category: 'Home',
  AdvertModal: {
    Redirect: 'Ht01',
    Close: 'Htc01'
  },
  TopDownload: {
    Close: 'Hc01',
    Download: 'Hd01'
  },
  BannerNav: {
    Carousel: 'Lb'
  },
  BannerBox: {
    ItemBox1: 'Sl01',
    ItemBox2: 'Sr01',
    ItemBox3: 'Sr02',
    BottomBanner: 'Z01'
  },
  BrandIcon: {
    BrandIcon: 'BrandIcon',
    MoreIconOpen: 'MoreIconOpen',
    MoreIconClose: 'MoreIconClose'
  },
  NewOldUser: {
    NewOldBannerLeft: 'NewOldBannerLeft',
    NewOldBannerRight: 'NewOldBannerRight'
  },
  ActivityList: {
    Topic: 'Topic'
  },
  OrderTips: {
    Link: 'ContinueToPlaceOrders'
  }
};
var TrackEventCategory = {
  Category: 'Classify',
  Tabs: {
    CategoryHengF: 'CategoryHengF',
    CategoryZongF: 'CategoryZongF'
  },
  Banner: {
    CategoryBanner: 'CategoryBanner'
  },
  Product: {
    CategoryProduct: 'CategoryProduct'
  }
};
var TrackEventTabBar = {
  Category: 'TabBar'
};
var TrackEventBrand = {
  Category: 'BrandPage',
  Tab: {
    BrandPageHengF: 'BrandPageHengF'
  },
  Product: {
    BrandPageProduct: 'BrandPageProduct'
  }
};
var TrackEventProductDetail = {
  Name: 'ProductDetail',
  PlanBox: {
    Item1: 'ViewSchemeDetails',
    ABTest: 'SchemeDetailsCate'
  },
  Content: {
    Item1: 'ViewMoreReviews'
  },
  Bottom: {
    Help: 'HelpDetail',
    Remind: 'PriceReducedRemind',
    Item1: 'SkuSelectorStart'
  },
  PopupModal: {
    SkuSelectorStart: 'SkuSelectorStart',
    SkuSelectorEnd: 'SkuSelectorEnd'
  }
};
var TrackEventTradeDev = {
  // 确认订单页面
  DetailModal: {
    Name: 'RentDetail',
    Item1: 'ViewRentDetails',
    Item2: 'RentDetailsclosed'
  },
  ExtraRentBox: {
    Name: 'FutureplanDetail',
    Item1: 'ViewFutureplans',
    Item2: 'FutureplansClosed'
  },
  //
  SubmitBottom1: {
    Name: 'CheckAgreement ',
    Item1: 'UncheckedAgreement',
    Item2: 'CheckedAgreement'
  },
  SubmitBottom2: {
    Name: 'Agreement '
  },
  Submission: {
    Name: 'Submission',
    Item: 'Placeorder'
  },
  SubmissionSuccess: {
    Name: 'Submission',
    Item: 'SubmitOrderSuccess'
  },
  // 担保方式页面
  PaymentCode: {
    Name: 'PaymentCode'
  },
  GuaranteeSubmit: {
    Name: 'GuaranteeSubmit'
  },
  Frame: {
    Name: 'Frame',
    Item: 'HuabeiFailureFrame'
  },
  // 在担保页和结果页
  GuaranteeMode: {
    Name: 'GuaranteeMode',
    Item: 'ReplaceGuaranteeMode'
  },
  // 评估结果页面
  Prepay: {
    Name: 'Prepay',
    Item: 'PrepayRent'
  },
  // 收货地址页
  address: {
    Name: 'DeliveryPage',
    Item: 'DeliveryInfoSave'
  },
  // 补充资料页
  ExtraInfo: {
    Name: 'SupplementaryInformation',
    Item: 'Save'
  },
  // 信用评估确认页
  CreditEvaluation: {
    Name: 'CreditEvaluation',
    AuthorizationZHIMA: 'AuthorizationZHIMA',
    GetLocation: 'GetLocation',
    AddEmergencyContact: 'AddEmergencyContact',
    ToEvaluate: 'ToEvaluate'
  }
};
var TrackEventFundsUnion = {
  Submission: {
    Name: 'Submission',
    Item1: 'RealName',
    Item2: 'Placeorder'
  },
  CheckCardContinue: {
    Name: 'Continue',
    Item: 'CardVerification'
  },
  Confirm: {
    Name: 'Confirm',
    Item1: 'PhoneNumberVerification',
    Item2: 'ConfirmDeparture'
  },
  CheckAgreement: {
    Name: 'CheckAgreement',
    Item1: 'CheckedAgreement',
    Item2: 'UncheckedAgreement'
  },
  ChooseCard: {
    Name: 'Choose'
  },
  AddCard: {
    Name: 'Add',
    Item: 'ChooseAnotherCard'
  },
  Frame: {
    Name: 'Frame',
    Item1: 'ChooseAnotherCardFrame',
    Item2: 'CardVerificationDeparture'
  },
  Cancel: {
    Name: 'Cancel',
    Item1: 'CancelDeparture'
  },
  RentDetailModal: {
    Name: 'Check',
    Item: 'CheckRentDetails'
  },
  RentDetailModalClose: {
    Name: 'Close',
    Item: 'CloseRentDetails'
  }
};
var TrackEventMyCenter = {
  // 个人中心页，点击【立即享受一站式用机服务】，埋点事件发送
  Order: {
    category: 'Order',
    label: 'Order'
  },
  // 个人中心页，点击【设置】，埋点事件发送
  Setting: {
    category: 'Setting',
    label: 'Setting'
  },
  // 个人中心页，点击【查看全部】，埋点事件发送
  ViewAllOrders: {
    category: 'ViewAll',
    label: 'ViewAllOrders'
  },
  // 个人中心页，点击SKU区域，埋点事件发送
  // 服务列表页，点击SKU区域，埋点事件发送
  Commodity: {
    category: 'Commodity',
    label: 'Commodity'
  },
  // 个人中心页，点击专属权益栏的【全部】，埋点事件发送
  ViewAllRights: {
    category: 'ViewAll',
    label: 'ViewAllRights'
  },
  // 个人中心页，点击专属权益栏的ICON，埋点事件发送
  Right: {
    category: 'Right'
  },
  // 个人中心页，点击【卡券】，埋点事件发送
  ViewCards: {
    category: 'Cards',
    label: 'ViewCards'
  },
  // 个人中心页，点击【余额】，埋点事件发送
  ViewBalance: {
    category: 'Balance',
    label: 'ViewBalance'
  },
  // 个人中心页，点击【信用足迹】，埋点事件发送
  ViewCredit: {
    category: 'Credit',
    label: 'ViewCredit'
  },
  // 个人中心页，点击【帮助中心】，埋点事件发送
  HelpCenter: {
    category: 'HelpCenter',
    label: 'HelpCenter'
  },
  // 个人中心页，点击热门推荐的商品，埋点事件发送
  Recommendation: {
    category: 'Recommendation'
  },
  // 服务列表页，点击【历史服务】，埋点事件发送
  HistoricalOrder: {
    category: 'HistoricalOrder',
    label: 'HistoricalOrder'
  },
  // 历史服务页列表页，点击SKU区域，埋点事件发送
  HistoricalOrderCommodity: {
    category: 'Commodity',
    label: 'HistoricalOrderCommodity'
  },
  // 下单记录页，点击【租金明细】，埋点事件发送
  RentDetail: {
    category: 'RentDetail',
    label: 'ViewRentDetails'
  },
  // 服务详情页，点击【在线客服】，埋点事件发送
  OnlineService: {
    category: 'OnlineService',
    label: 'OnlineService'
  },
  // 服务详情页，点击【电话客服】，埋点事件发送
  PhoneService: {
    category: 'PhoneService',
    label: 'PhoneService'
  },
  // 专属权益页，点击button，埋点事件发送
  RightButton: {
    category: 'RightButton'
  },
  // 还款计划页，点击【立即还款】，埋点事件发送
  RealRepayment: {
    category: 'Payment',
    label: 'RealRepayment'
  },
  // 详情页，table切换时埋点
  Table: {
    category: 'Table',
    label: 'TableSwitch'
  },
  // 服务详情页，点击【冻结押金说明图标】，埋点事件发送
  Deposit: {
    category: 'Deposit',
    label: 'DepositDescription'
  },
  // 服务详情页，关闭【押金明细】，埋点事件发送
  DepositDetails: {
    category: 'Details',
    label: 'DepositDetails'
  },
  // 服务详情页，点击【我的发票】，埋点事件发送
  Invoice: {
    category: 'Invoice',
    label: 'Invoice'
  },
  // 服务详情页，点击【我的服务协议】，埋点事件发送
  Contract: {
    category: 'Contract',
    label: 'Contract'
  },
  // 操作的按钮事件
  Termination: {
    category: 'Termination',
    label: 'Termination'
  },
  ApplyForRemand: {
    category: 'Remand',
    label: 'ApplyForRemand'
  },
  Buyout: {
    category: 'Buyout',
    label: 'ApplyForBuyout'
  },
  Cancel: {
    category: 'Cancel',
    label: 'Cancel'
  },
  ApplyAfterSale: {
    category: 'ApplyAfterSale',
    label: 'ApplyAfterSale'
  },
  Maintenance: {
    category: 'Maintenance',
    label: 'MaintenanceRecords'
  },
  Change: {
    category: 'Change',
    label: 'Change'
  },
  Repayment: {
    category: 'Payment',
    label: 'Repayment'
  },
  Continue: {
    category: 'Continue',
    label: 'Continue'
  },
  Payment: {
    category: 'Payment',
    label: 'Pay'
  },
  RemandDetails: {
    category: 'Remand',
    label: 'RemandDetails'
  },
  RemandCancel: {
    category: 'Cancel',
    label: 'RemandCancel'
  },
  ApplyForReturn: {
    category: 'Return',
    label: 'ApplyForReturn'
  },
  ApplyForBuyout: {
    category: 'Buyout',
    label: 'ApplyForBuyout'
  },
  ApplyForWithHold: {
    category: 'MemberCenter',
    label: 'Continue'
  },
  ExtraInfo: {
    category: 'MemberCenter',
    label: 'ToSupplementaryInformation'
  }
};
var TrackEventRiskFlowStep = {
  // 添加经过风控路径的完结事件发送
  RiskEvaluatedEnd: {
    category: 'FlowStep',
    label: 'RiskEvaluatedEnd'
  }
};
var TrackEventExchange = {
  Remind: {
    category: 'ReplacementRemind',
    // 点击“换机须知”文字链,
    name1: 'ReplacementInsructions',
    // 点击"还机费用"后的问号 + 订单号
    name2: 'NotesForReturnFeeReplacementRemind',
    // 点击【暂不换，继续下单】按钮
    name3: 'OrderContinue',
    // 点击【确认换机】按钮
    name4: 'ReplacementConfirmed',
    // 勾选选择订单 + 订单号
    name5: 'OrderChoose'
  },
  OrderConfirmed: {
    category: 'ReplacementOrderConfirmed',
    // 点击地址编辑
    name1: 'AddressEdited',
    // 点击“增值服务”下拉展开
    name2: 'VASDetailsReplacementOrderConfirmed',
    // 点击确定
    name3: 'ConfirmedReplacementOrderConfirmed'
  },
  ReturnWayChoose: {
    category: 'ReplacementReturnWayChoose',
    // 点击“还机费用”后的问号
    name1: 'NotesForReturnFeeReturnWayChoose',
    // 点击“最后归还日”后的问号
    name2: 'NotesForReturnDeadline',
    // 点击【门店还机】选项卡
    name3: 'ReturnInStoreReplacementReturnWayChoose',
    // 点击【邮寄还机】选项卡
    name4: 'ReturnByMailReplacementReturnWayChoose',
    // 点击【请选择门店地址】区域
    name5: 'StoreAddressChooseReplacementReturnWayChoose',
    // 点击“还机标准”区域
    name6: 'ReturnRuleReplacementReturnWayChoose',
    // 点击“还机须知”区域
    name7: 'ReturnNoteReplacementReturnWayChoose',
    // 点击【提交】按钮
    name8: 'CommitReplacementReturnWayChoose'
  }
};
var TrackEventRentWithholding = {
  // 授权确认页，点击【支付宝代扣/银行卡代扣】时，埋点事件发送
  AuthorizationConfirm: {
    category: 'AuthorizationConfirm',
    label: 'ViewRentMethodDetail'
  },
  // 评估结果页，点击【支付宝代扣/银行卡代扣】时，埋点事件发送
  EvaluationResult: {
    category: 'EvaluationResult',
    label: 'ViewRentMethodDetail'
  },
  RentMethod: {
    category: 'RentMethod'
  },
  RentMethodManagement: {
    category: 'RentMethodManagement'
  },
  AddRentMethod: {
    category: 'AddRentMethod'
  } // 信用卡预授权LBF

};
var TrackEventLBF = {
  // 担保方式页
  Guarantee: {
    category: 'Guarantee',
    // 点击查看【冻结预授权】
    name: 'AuthorizationIntroduction'
  },
  // 冻结信用卡额度页，
  CardInformation: {
    category: 'CardInformation',
    // 点击查看【持卡人】说明
    name1: 'Name',
    // 点击查看【安全码】说明
    name2: 'CVN2',
    // 勾掉“我已阅读并同意《乐百分条款》”
    name3: 'UncheckedAgreement ',
    // 勾选“我已阅读并同意《乐百分条款》”
    name4: 'CheckedAgreement' // 点击《乐百分条款》

  },
  // 验证信息页，点击【立即冻结额度】
  SMSVerification: {
    category: 'SMS-Verification',
    name: 'Freeze'
  },
  // 办理结果页
  ResultPage: {
    category: 'ResultPage',
    // 点击【查看订单】
    name1: 'CheckOrder',
    // 点击【重新冻结】
    name2: 'Refreeze'
  }
};
var TrackEventEnterPrise = {
  Category: 'AccessariesSelected',
  Search: {
    NumberSearch: 'NumberSearch',
    Switching: 'Switching',
    NumberSearchCancel: 'NumberSearchCancel'
  },
  Btns: {
    NumberConfirmed: 'NumberConfirmed',
    ReturnHomelnAccessariesSelected: 'ReturnHomelnAccessariesSelected',
    ContactCustomerService: 'ContactCustomerService'
  }
};
var TrackEventMyAccountReturn = {
  // 还机申请页
  Apply: {
    category: 'ReplacementReturnApply',
    // 还机Tab
    name1: 'ReturnTypeChange',
    // 顶部Tab下的公告栏
    name2: 'BulletinBoardInReplacementReturn',
    // “更改寄件方式”文字链
    name3: 'ReplacementReturnChange',
    // 取件时间区域
    name4: 'PickupTimeAppointment',
    // 取件地址区域
    name5: 'PickupAddress',
    // 支付金额右侧注释问号
    name6: 'ReplacementReturnFeeExplanation',
    // 还机标准区域
    name7: 'RuleOfReplacementReturn',
    // 还机须知区域
    name8: 'NoticeOfReplacementReturn',
    // 寄件方式弹层上的取件区域
    name9: 'Delivery',
    // 寄件方式弹层上的【确定】按钮
    name10: 'ConfirmedOnShipment',
    // 【提交申请】按钮
    name11: 'ReplacementReturnSubmit',
    // 申请失败弹层上的【好的】按钮
    name12: 'ReplacementReturnUnsuccessful'
  },
  // 还机详情页
  Detail: {
    category: 'ReplacementReturnDetail',
    // 申请成功弹层上的【暂不】按钮
    name1: 'UnneededInReplacementReturnDetail',
    // 申请成功弹层上的【选新机】按钮
    name2: 'ChooseNewMachineInReplacementReturnDetail',
    // 【取消还机】按钮
    name3: 'ReplacementReturnCancel',
    // 【修改取件时间】按钮
    name4: 'PickupTimeAppointmentAmend',
    // 取消申请弹层上的【暂不取消】按钮
    name5: 'CancelUnneededInReplacementReturnDetail',
    // 取消申请弹层上的【确定】按钮
    name6: 'CancelConfirmedInReplacementReturnDetail',
    // 【呼叫小哥】按钮
    name7: 'CallTheCourier',
    // 【查看物流】按钮
    name8: 'TrackingTheShipmend',
    // 【重新申请】按钮
    name9: 'ReplacementReturnReapplyment '
  }
};
var TrackEventTradeAssess = {
  result: {
    category: 'EvaluationResult',
    // 点击查看“首期费用明细”
    name1: 'FirstFeeBreakdown',
    // 勾掉“我已阅读并同意《XX条款》”
    name2: 'UncheckedAgreement',
    // 勾选“我已阅读并同意《XX条款》”
    name3: 'CheckedAgreement',
    // 点击《XX条款》
    // 点击“下一步”
    name4: 'Nextstep'
  }
};

/***/ }),

/***/ "./src/constant/common.ts":
/*!********************************!*\
  !*** ./src/constant/common.ts ***!
  \********************************/
/*! exports provided: FLOW_SUB_CODE, SMS_TYPES, BUTTON_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOW_SUB_CODE", function() { return FLOW_SUB_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMS_TYPES", function() { return SMS_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_TYPE", function() { return BUTTON_TYPE; });
var FLOW_SUB_CODE = {
  XhjRiskRealTrait: 'XhjRiskRealTrait',
  // 实名流程
  XhjRiskStepTrait: 'XhjRiskStepTrait',
  // 评估流程
  RiskResult: 'RiskResult',
  // 评估结果
  WithHoldAndPayTrait: 'WithHoldAndPayTrait',
  // 签约代扣
  XhjFreezeBalanceTrait: 'XhjFreezeBalanceTrait' // 支付冻结

};
var SMS_TYPES = {
  BindPhone: 'bindPhone',
  ChangePhone: 'changePhone',
  ChangeBind: 'changeBind',
  QsyReturnPhone: 'qsyReturnPhone'
};
var BUTTON_TYPE = {
  CANCEL_NO_SHIPPED: 1,
  // 待发货取消
  CANCEL_UNDER_REVIEW: 2,
  // 审核中取消
  TERMINATION_SERVICE: 3,
  // 终止服务
  REPAIR_APPLY: 4,
  // 申请售后
  EXCHANGE_DO: 5,
  // 立即换机
  // '': 6, // 提前还款
  // '': 7, // 取消换机
  // '': 8, // 继续申请
  // '': 9, // 去支付(服务费用)
  // '': 10, // 还机详情
  // '': 11, // 维修详情
  // '': 12, // 去授权
  // '': 14, // 换机继续申请
  // '': 15, // 去支付(赔偿费用)
  // '': 16, // 取消还机
  RETUREN_APPLY: 17,
  // 还机申请
  BUY_OUT_APPLY: 18 // 立即买断
  // '': 19, // 申请退货
  // '': 20, // 物流信息

};

/***/ }),

/***/ "./src/constant/index.ts":
/*!*******************************!*\
  !*** ./src/constant/index.ts ***!
  \*******************************/
/*! exports provided: INIT_TABBAR, TOGGLE_TABBAR, HIDDEN_TABBAR, RAS_PRIVATE_KEY, GET_NAV_ICONS, CHECK_TRADE_DONE, GET_CACHE_LIST, REMOVE_CACHE, REMOVE_ALL_CACHE, GET_HOME_INFO, GET_HOME_USER_TAG, GET_PRODUCT_CATEGORY_INFO, CHANGE_PRODUCT_CATEGROY_BRAND_ID, GET_PRODUCT_BRANDS_INFO, GET_PRODUCT_DETAIL_INFO, GET_PRODUCT_PROPERTY, CHANGE_PROPERTY_ITEM, CHANGE_PROPERTY_ITEM_DEFAULT_SELECTED, CHANGE_POPUP_MODAL_ID, CHANGE_VAS_LIST_SELECTED, GET_PRODUCT_INTRODUCE_INFO, OPEN_PRODUCT_COMMENT_MODAL, CLOSE_PRODUCT_COMMENT_MODAL, FETCH_PRODUCT_COMMENTS, LOAD_MORE_PRODUCT_COMMENTS, GET_VIDEO_DETAIL_INFO, CHECK_FLOW, GET_TRADE_INDEX, GET_TRADE_SUCCESS, SEND_SMS_CODE, GET_DETAIL_INFO, GET_ORDER_DETAIL_INFO, GET_RESULTS_INFO, FETCH_APPDOWNLOAD_LIST, FETCH_APPDOWNLOAD_PROCEED, FETCH_CHINA_UNICOM_USER_DATA, SAVE_TRADE_INFO_WHEN_UNMOUNT, CLEAR_TRADE_INFO_AFTER_SUBMITTED, GET_USER_INFO, FETCH_CENTER_INFO, FETCH_PRIVILEGE_LIST, FETCH_USER_PRIVILEGE_LIST, EXCHANGE_PRIVILEGE, GET_ACCOUNT_FOOTPRINT_INFO, GET_ACCOUNT_FOOTPRINTLIST_INFO, FETCH_UNION_PAY_LIST, FETCH_UNION_PAY_DETAIL, FETCH_UNION_PAY_INFO, FETCH_UNION_PAY_CHECK_BANK_LIST, GO_TO_NEXT, SAVE_FORM_FILEDS, SAVE_SMS_FILEDS, FETCH_INFO, OPEN_AUTO_RENT, SET_RENT_BUTTON_DISABLED, REPAIR_QUALITY_RECORD_LIST, LOAD_REPAIR_QUALITY_RECORD_LIST, REPAIR_QUALITY_DETAIL, REPAIR_STANDBY_RECORD_LIST, LOAD_REPAIR_STANDBY_RECORD_LIST, REPAIR_STANDBY_DETAIL, LOGIN_TOGGLE_CACHED, FETCH_CANTON_STORE_CITY, FETCH_CANTON_STORE_SELECT, LOAD_FETCH_CANTON_STORE_SELECT, FETCH_CANTON_STORE_DETAIL, SELECT_CANTON_STORE_ITEM, FETCH_BUY_OUT_INFO, FETCH_BUY_OUT_RESULT_INFO, FETCH_BIND_WECHAT_INFO, FETCH_BIND_RESULT_INFO, GET_CERTIFY_RESULT, FETCH_TRADE_ORDER_CONFIRM_INFO, FETCH_ORDER_REPLACE_STATUS, FETCH_ORDER_REPLACE_REMOTE, FETCH_ORDER_REPLACE_CHECK_CONDITION, FETCH_TRADE_ORDER_PAY_INFO, FETCH_TRADE_ORDER_RESULT_INFO, FETCH_TRADE_ASSESS_RESULT_INFO, FETCH_TRADE_ASSESS_LIST_INFO, FETCH_TERMS_AGREEMENT, FETCH_CITY_LIST, FETCH_ADDRESS_FORM, SAVE_ADDRESS_FORM, FETCH_SELECT_LIST, FETCH_SEARCH_LIST, CHANGE_IDENTITY_STATUS, RECEIVE_INFORMATION_DATA, SELECT_NEW_PHONE_NUMBER, FETCH_RETURN_PHONE_PRICE, FETCH_RETURN_PHONE_CITY, FETCH_RETURN_PHONE_CITY_REGION, FETCH_RETURN_PHONE_STORE, SELECT_RETURN_PHONE_STORE, CLEAR_RETURN_PHONE_CHOSEN_STORE, CLEAR_RETURN_PHONE_STORE_LIST, FETCH_RETURN_PHONE_STORE_BY_ID, FETCH_RETURN_PHONE_DETAIL, FETCH_AUTHORIZE_RESULT, FETCH_OPT_BILL_NO, FETCH_EXCHANGE_INDEX_INFO, FETCH_EXCHANGE_RETURN_INFO, SAVE_EXCHANGE_RETURN_INFO, FETCH_EXCHANGE_STORE_INFO, SAVE_EXCHANGE_TAB_SHOW, FETCH_SERVICE_LIST, FETCH_SERVICE_LIST_MORE, FETCH_SERVICE_CANCEL_INFO, FETCH_SERVICE_CANCEL_RESULT, FETCH_SERVICE_DETAIL, FETCH_SERVICE_RETURN_PLAN, FETCH_SERVICE_TERMS_LIST, FETCH_SERVICE_PRIVILEGE, FETCH_RECEIPT_INVOICE, FETCH_RECEIPT_INVOICE_CANCEL, SAVE_RECEIPT_INVOICE_APPLY, SAVE_RECEIPT_INVOICE_EMAIL, FETCH_RECEIPT_INVOICE_DETAIL, LOAD_FETCH_RECEIPT_INVOICE_DETAIL, FETCH_SERVICE_RECORD_LIST, FETCH_SERVICE_RECORD_DETAIL, FETCH_WITHHOLDING_LIST_INFO, FETCH_WITHHOLDING_SELECTABLE_LIST, FETCH_CREDIT_PAY_INFO, FETCH_CREDIT_SMS, FETCH_CREDIT_CREATE_CUP, FETCH_CREDIT_CREATE_QUERY, FETCH_CREDIT_LBF_AGREEMENT, FETCH_CREDIT_COOKIE, FETCH_EXTRAINFO_LIST, FETCH_ENTERPRISE_PICK_NUMBER, FETCH_ACTIVITYS_EXCHANGECOUPON, FETCH_ACTIVITYS_GUIDE_OLD_USER, FETCH_ACTIVITYS_COUPONINFO, FETCH_ENTERPRISE_APPLY_GUIDE, FETCH_ENTERPRISE_APPLY_RESULT, CHECK_ENTERPRISE_APPLY_EMAIL, CHANGE_EXPRESS_TIME, CHANGE_EXPRESS_TYPE, FETCH_RETURN_APPLY_DETAIL, GET_EXPRESS_NUMBER, CHANGE_EXPRESS_ADDRESS, FETCH_EXPRESS_LOGISTICS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_TABBAR", function() { return INIT_TABBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TABBAR", function() { return TOGGLE_TABBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDDEN_TABBAR", function() { return HIDDEN_TABBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAS_PRIVATE_KEY", function() { return RAS_PRIVATE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NAV_ICONS", function() { return GET_NAV_ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_TRADE_DONE", function() { return CHECK_TRADE_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CACHE_LIST", function() { return GET_CACHE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CACHE", function() { return REMOVE_CACHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_CACHE", function() { return REMOVE_ALL_CACHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_INFO", function() { return GET_HOME_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_USER_TAG", function() { return GET_HOME_USER_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_CATEGORY_INFO", function() { return GET_PRODUCT_CATEGORY_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PRODUCT_CATEGROY_BRAND_ID", function() { return CHANGE_PRODUCT_CATEGROY_BRAND_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_BRANDS_INFO", function() { return GET_PRODUCT_BRANDS_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_DETAIL_INFO", function() { return GET_PRODUCT_DETAIL_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_PROPERTY", function() { return GET_PRODUCT_PROPERTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PROPERTY_ITEM", function() { return CHANGE_PROPERTY_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PROPERTY_ITEM_DEFAULT_SELECTED", function() { return CHANGE_PROPERTY_ITEM_DEFAULT_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_POPUP_MODAL_ID", function() { return CHANGE_POPUP_MODAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_VAS_LIST_SELECTED", function() { return CHANGE_VAS_LIST_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_INTRODUCE_INFO", function() { return GET_PRODUCT_INTRODUCE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_PRODUCT_COMMENT_MODAL", function() { return OPEN_PRODUCT_COMMENT_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_PRODUCT_COMMENT_MODAL", function() { return CLOSE_PRODUCT_COMMENT_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCT_COMMENTS", function() { return FETCH_PRODUCT_COMMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MORE_PRODUCT_COMMENTS", function() { return LOAD_MORE_PRODUCT_COMMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_VIDEO_DETAIL_INFO", function() { return GET_VIDEO_DETAIL_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_FLOW", function() { return CHECK_FLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRADE_INDEX", function() { return GET_TRADE_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRADE_SUCCESS", function() { return GET_TRADE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_SMS_CODE", function() { return SEND_SMS_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_INFO", function() { return GET_DETAIL_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ORDER_DETAIL_INFO", function() { return GET_ORDER_DETAIL_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESULTS_INFO", function() { return GET_RESULTS_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_APPDOWNLOAD_LIST", function() { return FETCH_APPDOWNLOAD_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_APPDOWNLOAD_PROCEED", function() { return FETCH_APPDOWNLOAD_PROCEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHINA_UNICOM_USER_DATA", function() { return FETCH_CHINA_UNICOM_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_TRADE_INFO_WHEN_UNMOUNT", function() { return SAVE_TRADE_INFO_WHEN_UNMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_TRADE_INFO_AFTER_SUBMITTED", function() { return CLEAR_TRADE_INFO_AFTER_SUBMITTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_INFO", function() { return GET_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CENTER_INFO", function() { return FETCH_CENTER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRIVILEGE_LIST", function() { return FETCH_PRIVILEGE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_PRIVILEGE_LIST", function() { return FETCH_USER_PRIVILEGE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXCHANGE_PRIVILEGE", function() { return EXCHANGE_PRIVILEGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ACCOUNT_FOOTPRINT_INFO", function() { return GET_ACCOUNT_FOOTPRINT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ACCOUNT_FOOTPRINTLIST_INFO", function() { return GET_ACCOUNT_FOOTPRINTLIST_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_UNION_PAY_LIST", function() { return FETCH_UNION_PAY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_UNION_PAY_DETAIL", function() { return FETCH_UNION_PAY_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_UNION_PAY_INFO", function() { return FETCH_UNION_PAY_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_UNION_PAY_CHECK_BANK_LIST", function() { return FETCH_UNION_PAY_CHECK_BANK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO_TO_NEXT", function() { return GO_TO_NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_FORM_FILEDS", function() { return SAVE_FORM_FILEDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_SMS_FILEDS", function() { return SAVE_SMS_FILEDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INFO", function() { return FETCH_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_AUTO_RENT", function() { return OPEN_AUTO_RENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RENT_BUTTON_DISABLED", function() { return SET_RENT_BUTTON_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPAIR_QUALITY_RECORD_LIST", function() { return REPAIR_QUALITY_RECORD_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REPAIR_QUALITY_RECORD_LIST", function() { return LOAD_REPAIR_QUALITY_RECORD_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPAIR_QUALITY_DETAIL", function() { return REPAIR_QUALITY_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPAIR_STANDBY_RECORD_LIST", function() { return REPAIR_STANDBY_RECORD_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REPAIR_STANDBY_RECORD_LIST", function() { return LOAD_REPAIR_STANDBY_RECORD_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPAIR_STANDBY_DETAIL", function() { return REPAIR_STANDBY_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_TOGGLE_CACHED", function() { return LOGIN_TOGGLE_CACHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CANTON_STORE_CITY", function() { return FETCH_CANTON_STORE_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CANTON_STORE_SELECT", function() { return FETCH_CANTON_STORE_SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FETCH_CANTON_STORE_SELECT", function() { return LOAD_FETCH_CANTON_STORE_SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CANTON_STORE_DETAIL", function() { return FETCH_CANTON_STORE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CANTON_STORE_ITEM", function() { return SELECT_CANTON_STORE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BUY_OUT_INFO", function() { return FETCH_BUY_OUT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BUY_OUT_RESULT_INFO", function() { return FETCH_BUY_OUT_RESULT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BIND_WECHAT_INFO", function() { return FETCH_BIND_WECHAT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BIND_RESULT_INFO", function() { return FETCH_BIND_RESULT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CERTIFY_RESULT", function() { return GET_CERTIFY_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRADE_ORDER_CONFIRM_INFO", function() { return FETCH_TRADE_ORDER_CONFIRM_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDER_REPLACE_STATUS", function() { return FETCH_ORDER_REPLACE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDER_REPLACE_REMOTE", function() { return FETCH_ORDER_REPLACE_REMOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ORDER_REPLACE_CHECK_CONDITION", function() { return FETCH_ORDER_REPLACE_CHECK_CONDITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRADE_ORDER_PAY_INFO", function() { return FETCH_TRADE_ORDER_PAY_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRADE_ORDER_RESULT_INFO", function() { return FETCH_TRADE_ORDER_RESULT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRADE_ASSESS_RESULT_INFO", function() { return FETCH_TRADE_ASSESS_RESULT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRADE_ASSESS_LIST_INFO", function() { return FETCH_TRADE_ASSESS_LIST_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TERMS_AGREEMENT", function() { return FETCH_TERMS_AGREEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CITY_LIST", function() { return FETCH_CITY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADDRESS_FORM", function() { return FETCH_ADDRESS_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ADDRESS_FORM", function() { return SAVE_ADDRESS_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SELECT_LIST", function() { return FETCH_SELECT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SEARCH_LIST", function() { return FETCH_SEARCH_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_IDENTITY_STATUS", function() { return CHANGE_IDENTITY_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_INFORMATION_DATA", function() { return RECEIVE_INFORMATION_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_NEW_PHONE_NUMBER", function() { return SELECT_NEW_PHONE_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RETURN_PHONE_PRICE", function() { return FETCH_RETURN_PHONE_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RETURN_PHONE_CITY", function() { return FETCH_RETURN_PHONE_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RETURN_PHONE_CITY_REGION", function() { return FETCH_RETURN_PHONE_CITY_REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RETURN_PHONE_STORE", function() { return FETCH_RETURN_PHONE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_RETURN_PHONE_STORE", function() { return SELECT_RETURN_PHONE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_RETURN_PHONE_CHOSEN_STORE", function() { return CLEAR_RETURN_PHONE_CHOSEN_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_RETURN_PHONE_STORE_LIST", function() { return CLEAR_RETURN_PHONE_STORE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RETURN_PHONE_STORE_BY_ID", function() { return FETCH_RETURN_PHONE_STORE_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RETURN_PHONE_DETAIL", function() { return FETCH_RETURN_PHONE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_AUTHORIZE_RESULT", function() { return FETCH_AUTHORIZE_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_OPT_BILL_NO", function() { return FETCH_OPT_BILL_NO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_EXCHANGE_INDEX_INFO", function() { return FETCH_EXCHANGE_INDEX_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_EXCHANGE_RETURN_INFO", function() { return FETCH_EXCHANGE_RETURN_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_EXCHANGE_RETURN_INFO", function() { return SAVE_EXCHANGE_RETURN_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_EXCHANGE_STORE_INFO", function() { return FETCH_EXCHANGE_STORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_EXCHANGE_TAB_SHOW", function() { return SAVE_EXCHANGE_TAB_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_LIST", function() { return FETCH_SERVICE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_LIST_MORE", function() { return FETCH_SERVICE_LIST_MORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_CANCEL_INFO", function() { return FETCH_SERVICE_CANCEL_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_CANCEL_RESULT", function() { return FETCH_SERVICE_CANCEL_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_DETAIL", function() { return FETCH_SERVICE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_RETURN_PLAN", function() { return FETCH_SERVICE_RETURN_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_TERMS_LIST", function() { return FETCH_SERVICE_TERMS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_PRIVILEGE", function() { return FETCH_SERVICE_PRIVILEGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECEIPT_INVOICE", function() { return FETCH_RECEIPT_INVOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECEIPT_INVOICE_CANCEL", function() { return FETCH_RECEIPT_INVOICE_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_RECEIPT_INVOICE_APPLY", function() { return SAVE_RECEIPT_INVOICE_APPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_RECEIPT_INVOICE_EMAIL", function() { return SAVE_RECEIPT_INVOICE_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECEIPT_INVOICE_DETAIL", function() { return FETCH_RECEIPT_INVOICE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FETCH_RECEIPT_INVOICE_DETAIL", function() { return LOAD_FETCH_RECEIPT_INVOICE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_RECORD_LIST", function() { return FETCH_SERVICE_RECORD_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_RECORD_DETAIL", function() { return FETCH_SERVICE_RECORD_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WITHHOLDING_LIST_INFO", function() { return FETCH_WITHHOLDING_LIST_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WITHHOLDING_SELECTABLE_LIST", function() { return FETCH_WITHHOLDING_SELECTABLE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CREDIT_PAY_INFO", function() { return FETCH_CREDIT_PAY_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CREDIT_SMS", function() { return FETCH_CREDIT_SMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CREDIT_CREATE_CUP", function() { return FETCH_CREDIT_CREATE_CUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CREDIT_CREATE_QUERY", function() { return FETCH_CREDIT_CREATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CREDIT_LBF_AGREEMENT", function() { return FETCH_CREDIT_LBF_AGREEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CREDIT_COOKIE", function() { return FETCH_CREDIT_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_EXTRAINFO_LIST", function() { return FETCH_EXTRAINFO_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ENTERPRISE_PICK_NUMBER", function() { return FETCH_ENTERPRISE_PICK_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ACTIVITYS_EXCHANGECOUPON", function() { return FETCH_ACTIVITYS_EXCHANGECOUPON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ACTIVITYS_GUIDE_OLD_USER", function() { return FETCH_ACTIVITYS_GUIDE_OLD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ACTIVITYS_COUPONINFO", function() { return FETCH_ACTIVITYS_COUPONINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ENTERPRISE_APPLY_GUIDE", function() { return FETCH_ENTERPRISE_APPLY_GUIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ENTERPRISE_APPLY_RESULT", function() { return FETCH_ENTERPRISE_APPLY_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_ENTERPRISE_APPLY_EMAIL", function() { return CHECK_ENTERPRISE_APPLY_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_EXPRESS_TIME", function() { return CHANGE_EXPRESS_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_EXPRESS_TYPE", function() { return CHANGE_EXPRESS_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RETURN_APPLY_DETAIL", function() { return FETCH_RETURN_APPLY_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_EXPRESS_NUMBER", function() { return GET_EXPRESS_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_EXPRESS_ADDRESS", function() { return CHANGE_EXPRESS_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_EXPRESS_LOGISTICS", function() { return FETCH_EXPRESS_LOGISTICS; });
// App
var INIT_TABBAR = 'INIT_TABBAR';
var TOGGLE_TABBAR = 'TOGGLE_TABBAR';
var HIDDEN_TABBAR = 'HIDDEN_TABBAR';
var RAS_PRIVATE_KEY = 'RAS_PRIVATE_KEY';
var GET_NAV_ICONS = 'GET_NAV_ICONS';
var CHECK_TRADE_DONE = 'CHECK_TRADE_DONE'; // cache-list

var GET_CACHE_LIST = 'GET_CACHE_LIST';
var REMOVE_CACHE = 'REMOVE_CACHE';
var REMOVE_ALL_CACHE = 'REMOVE_ALL_CACHE'; // index

var GET_HOME_INFO = 'GET_HOME_INFO';
var GET_HOME_USER_TAG = 'GET_HOME_USER_TAG'; // product/category

var GET_PRODUCT_CATEGORY_INFO = 'GET_PRODUCT_CATEGORY_INFO';
var CHANGE_PRODUCT_CATEGROY_BRAND_ID = 'CHANGE_PRODUCT_CATEGROY_BRAND_ID'; // product/brands

var GET_PRODUCT_BRANDS_INFO = 'GET_PRODUCT_BRANDS_INFO'; // product/detail

var GET_PRODUCT_DETAIL_INFO = 'GET_PRODUCT_DETAIL_INFO';
var GET_PRODUCT_PROPERTY = 'GET_PRODUCT_PROPERTY';
var CHANGE_PROPERTY_ITEM = 'CHANGE_PROPERTY_ITEM';
var CHANGE_PROPERTY_ITEM_DEFAULT_SELECTED = 'CHANGE_PROPERTY_ITEM_DEFAULT_SELECTED';
var CHANGE_POPUP_MODAL_ID = 'CHANGE_POPUP_MODAL_ID';
var CHANGE_VAS_LIST_SELECTED = 'CHANGE_VAS_LIST_SELECTED'; // product/introduce

var GET_PRODUCT_INTRODUCE_INFO = 'GET_PRODUCT_INTRODUCE_INFO'; // product/comment

var OPEN_PRODUCT_COMMENT_MODAL = 'OPEN_PRODUCT_COMMENT_MODAL';
var CLOSE_PRODUCT_COMMENT_MODAL = 'CLOSE_PRODUCT_COMMENT_MODAL';
var FETCH_PRODUCT_COMMENTS = 'FETCH_PRODUCT_COMMENTS';
var LOAD_MORE_PRODUCT_COMMENTS = 'LOAD_MORE_PRODUCT_COMMENTS'; // product/video-detail

var GET_VIDEO_DETAIL_INFO = 'GET_VIDEO_DETAIL_INFO'; // easeu

var CHECK_FLOW = 'CHECK_FLOW';
var GET_TRADE_INDEX = 'GET_TRADE_INDEX';
var GET_TRADE_SUCCESS = 'GET_TRADE_SUCCESS';
var SEND_SMS_CODE = 'SEND_SMS_CODE'; // returnflow

var GET_DETAIL_INFO = 'GET_DETAIL_INFO';
var GET_ORDER_DETAIL_INFO = 'GET_ORDER_DETAIL_INFO';
var GET_RESULTS_INFO = 'GET_RESULTS_INFO'; // site/appdownload

var FETCH_APPDOWNLOAD_LIST = 'FETCH_APPDOWNLOAD_LIST';
var FETCH_APPDOWNLOAD_PROCEED = 'FETCH_APPDOWNLOAD_PROCEED'; // trade/form/info

var FETCH_CHINA_UNICOM_USER_DATA = 'FETCH_CHINA_UNICOM_USER_DATA';
var SAVE_TRADE_INFO_WHEN_UNMOUNT = 'SAVE_TRADE_INFO_WHEN_UNMOUNT';
var CLEAR_TRADE_INFO_AFTER_SUBMITTED = 'CLEAR_TRADE_INFO_AFTER_SUBMITTED'; // account/center

var GET_USER_INFO = 'GET_USER_INFO';
var FETCH_CENTER_INFO = 'FETCH_CENTER_INFO'; // account/privilege

var FETCH_PRIVILEGE_LIST = 'FETCH_PRIVILEGE_LIST';
var FETCH_USER_PRIVILEGE_LIST = 'FETCH_USER_PRIVILEGE_LIST';
var EXCHANGE_PRIVILEGE = 'EXCHANGE_PRIVILEGE'; // account/footprint

var GET_ACCOUNT_FOOTPRINT_INFO = 'GET_ACCOUNT_FOOTPRINT_INFO';
var GET_ACCOUNT_FOOTPRINTLIST_INFO = 'GET_ACCOUNT_FOOTPRINTLIST_INFO'; // account/unionPay

var FETCH_UNION_PAY_LIST = 'FETCH_UNION_PAY_LIST';
var FETCH_UNION_PAY_DETAIL = 'FETCH_UNION_PAY_DETAIL';
var FETCH_UNION_PAY_INFO = 'FETCH_UNION_PAY_INFO';
var FETCH_UNION_PAY_CHECK_BANK_LIST = 'FETCH_UNION_PAY_CHECK_BANK_LIST';
var GO_TO_NEXT = 'GO_TO_NEXT';
var SAVE_FORM_FILEDS = 'SAVE_FORM_FILEDS';
var SAVE_SMS_FILEDS = 'SAVE_SMS_FILEDS'; // account/auto-rent

var FETCH_INFO = 'FETCH_INFO';
var OPEN_AUTO_RENT = 'OPEN_AUTO_RENT';
var SET_RENT_BUTTON_DISABLED = 'SET_RENT_BUTTON_DISABLED'; // repair

var REPAIR_QUALITY_RECORD_LIST = 'REPAIR_QUALITY_RECORD_LIST';
var LOAD_REPAIR_QUALITY_RECORD_LIST = 'LOAD_REPAIR_QUALITY_RECORD_LIST';
var REPAIR_QUALITY_DETAIL = 'REPAIR_QUALITY_DETAIL';
var REPAIR_STANDBY_RECORD_LIST = 'REPAIR_STANDBY_RECORD_LIST';
var LOAD_REPAIR_STANDBY_RECORD_LIST = 'LOAD_REPAIR_STANDBY_RECORD_LIST';
var REPAIR_STANDBY_DETAIL = 'REPAIR_STANDBY_DETAIL'; // login

var LOGIN_TOGGLE_CACHED = 'LOGIN_TOGGLE_CACHED'; // guangzhou cmcc

var FETCH_CANTON_STORE_CITY = 'FETCH_CANTON_STORE_CITY';
var FETCH_CANTON_STORE_SELECT = 'FETCH_CANTON_STORE_SELECT';
var LOAD_FETCH_CANTON_STORE_SELECT = 'LOAD_FETCH_CANTON_STORE_SELECT';
var FETCH_CANTON_STORE_DETAIL = 'FETCH_CANTON_STORE_DETAIL';
var SELECT_CANTON_STORE_ITEM = 'SELECT_CANTON_STORE_ITEM'; // account/buy-out

var FETCH_BUY_OUT_INFO = 'FETCH_BUY_OUT_INFO'; // account/result

var FETCH_BUY_OUT_RESULT_INFO = 'FETCH_BUY_OUT_RESULT_INFO'; // myaccount/bind/management

var FETCH_BIND_WECHAT_INFO = 'FETCH_BIND_WECHAT_INFO';
var FETCH_BIND_RESULT_INFO = 'FETCH_BIND_RESULT_INFO'; // mytrade/Certification

var GET_CERTIFY_RESULT = 'GET_CERTIFY_RESULT'; // trade/order/confirm

var FETCH_TRADE_ORDER_CONFIRM_INFO = 'FETCH_TRADE_ORDER_CONFIRM_INFO';
var FETCH_ORDER_REPLACE_STATUS = 'FETCH_ORDER_REPLACE_STATUS';
var FETCH_ORDER_REPLACE_REMOTE = 'FETCH_ORDER_REPLACE_REMOTE';
var FETCH_ORDER_REPLACE_CHECK_CONDITION = 'FETCH_ORDER_REPLACE_CHECK_CONDITION'; // trade/order/pay

var FETCH_TRADE_ORDER_PAY_INFO = 'FETCH_TRADE_ORDER_PAY_INFO'; // trade/order/result

var FETCH_TRADE_ORDER_RESULT_INFO = 'FETCH_TRADE_ORDER_RESULT_INFO'; // trade/assess/result

var FETCH_TRADE_ASSESS_RESULT_INFO = 'FETCH_TRADE_ASSESS_RESULT_INFO'; // trade/assess/list

var FETCH_TRADE_ASSESS_LIST_INFO = 'FETCH_TRADE_ASSESS_LIST_INFO'; // terms/agreement

var FETCH_TERMS_AGREEMENT = 'FETCH_TERMS_AGREEMENT'; // myTrade address

var FETCH_CITY_LIST = 'FETCH_CITY_LIST';
var FETCH_ADDRESS_FORM = 'FETCH_ADDRESS_FORM';
var SAVE_ADDRESS_FORM = 'SAVE_ADDRESS_FORM';
var FETCH_SELECT_LIST = 'FETCH_SELECT_LIST';
var FETCH_SEARCH_LIST = 'FETCH_SEARCH_LIST'; // account/trade/assess

var CHANGE_IDENTITY_STATUS = 'CHANGE_IDENTITY_STATUS';
var RECEIVE_INFORMATION_DATA = 'RECEIVE_INFORMATION_DATA'; // mytrade/hunanMobile

var SELECT_NEW_PHONE_NUMBER = 'SELECT_NEW_PHONE_NUMBER'; // myAccount/returnPhone/price

var FETCH_RETURN_PHONE_PRICE = 'FETCH_RETURN_PHONE_PRICE';
var FETCH_RETURN_PHONE_CITY = 'FETCH_RETURN_PHONE_CITY';
var FETCH_RETURN_PHONE_CITY_REGION = 'FETCH_RETURN_PHONE_CITY_REGION';
var FETCH_RETURN_PHONE_STORE = 'FETCH_RETURN_PHONE_STORE';
var SELECT_RETURN_PHONE_STORE = 'SELECT_RETURN_PHONE_STORE';
var CLEAR_RETURN_PHONE_CHOSEN_STORE = 'CLEAR_RETURN_PHONE_CHOSEN_STORE';
var CLEAR_RETURN_PHONE_STORE_LIST = 'CLEAR_RETURN_PHONE_STORE_LIST';
var FETCH_RETURN_PHONE_STORE_BY_ID = 'FETCH_RETURN_PHONE_STORE_BY_ID';
var FETCH_RETURN_PHONE_DETAIL = 'FETCH_RETURN_PHONE_DETAIL'; // mytrade/funds-union

var FETCH_AUTHORIZE_RESULT = 'FETCH_AUTHORIZE_RESULT';
var FETCH_OPT_BILL_NO = 'FETCH_OPT_BILL_NO'; // mytrade exchange

var FETCH_EXCHANGE_INDEX_INFO = 'FETCH_EXCHANGE_INDEX_INFO';
var FETCH_EXCHANGE_RETURN_INFO = 'FETCH_EXCHANGE_RETURN_INFO';
var SAVE_EXCHANGE_RETURN_INFO = 'SAVE_EXCHANGE_RETURN_INFO';
var FETCH_EXCHANGE_STORE_INFO = 'FETCH_EXCHANGE_STORE_INFO';
var SAVE_EXCHANGE_TAB_SHOW = 'SAVE_EXCHANGE_TAB_SHOW'; // myaccount/service/list

var FETCH_SERVICE_LIST = 'FETCH_SERVICE_LIST';
var FETCH_SERVICE_LIST_MORE = 'FETCH_SERVICE_LIST_MORE'; // myaccount/service/cancel

var FETCH_SERVICE_CANCEL_INFO = 'FETCH_SERVICE_CANCEL_INFO';
var FETCH_SERVICE_CANCEL_RESULT = 'FETCH_SERVICE_CANCEL_RESULT';
var FETCH_SERVICE_DETAIL = 'FETCH_SERVICE_DETAIL';
var FETCH_SERVICE_RETURN_PLAN = 'FETCH_SERVICE_RETURN_PLAN';
var FETCH_SERVICE_TERMS_LIST = 'FETCH_SERVICE_TERMS_LIST'; // myaccount/service/privilege

var FETCH_SERVICE_PRIVILEGE = 'FETCH_SERVICE_PRIVILEGE'; // myaccount/receipt

var FETCH_RECEIPT_INVOICE = 'FETCH_RECEIPT_INVOICE';
var FETCH_RECEIPT_INVOICE_CANCEL = 'FETCH_RECEIPT_INVOICE_CANCEL';
var SAVE_RECEIPT_INVOICE_APPLY = 'SAVE_RECEIPT_INVOICE_APPLY';
var SAVE_RECEIPT_INVOICE_EMAIL = 'SAVE_RECEIPT_INVOICE_EMAIL';
var FETCH_RECEIPT_INVOICE_DETAIL = 'FETCH_RECEIPT_INVOICE_DETAIL';
var LOAD_FETCH_RECEIPT_INVOICE_DETAIL = 'LOAD_FETCH_RECEIPT_INVOICE_DETAIL'; // myaccount/service/order-record

var FETCH_SERVICE_RECORD_LIST = 'FETCH_SERVICE_RECORD_LIST';
var FETCH_SERVICE_RECORD_DETAIL = 'FETCH_SERVICE_RECORD_DETAIL'; // myaccount/withholding/list

var FETCH_WITHHOLDING_LIST_INFO = 'FETCH_WITHHOLDING_LIST_INFO'; // mytrade/withholding/select-type

var FETCH_WITHHOLDING_SELECTABLE_LIST = 'FETCH_WITHHOLDING_SELECTABLE_LIST'; // mytrade/creditcard

var FETCH_CREDIT_PAY_INFO = 'FETCH_CREDIT_PAY_INFO';
var FETCH_CREDIT_SMS = 'FETCH_CREDIT_SMS';
var FETCH_CREDIT_CREATE_CUP = 'FETCH_CREDIT_CREATE_CUP';
var FETCH_CREDIT_CREATE_QUERY = 'FETCH_CREDIT_CREATE_QUERY';
var FETCH_CREDIT_LBF_AGREEMENT = 'FETCH_CREDIT_LBF_AGREEMENT';
var FETCH_CREDIT_COOKIE = 'FETCH_CREDIT_COOKIE'; // mytrade/extraInfo/list

var FETCH_EXTRAINFO_LIST = 'FETCH_EXTRAINFO_LIST'; // enterprise/mytrade/pick-number

var FETCH_ENTERPRISE_PICK_NUMBER = 'FETCH_ENTERPRISE_PICK_NUMBER'; // activitys/exchangecoupon

var FETCH_ACTIVITYS_EXCHANGECOUPON = 'FETCH_ACTIVITYS_EXCHANGECOUPON'; // activitys/guide-old-user

var FETCH_ACTIVITYS_GUIDE_OLD_USER = 'FETCH_ACTIVITYS_GUIDE_OLD_USER';
var FETCH_ACTIVITYS_COUPONINFO = 'FETCH_ACTIVITYS_COUPONINFO'; // enterprise/apply

var FETCH_ENTERPRISE_APPLY_GUIDE = 'FETCH_ENTERPRISE_APPLY_GUIDE';
var FETCH_ENTERPRISE_APPLY_RESULT = 'FETCH_ENTERPRISE_APPLY_RESULT';
var CHECK_ENTERPRISE_APPLY_EMAIL = 'CHECK_ENTERPRISE_APPLY_EMAIL'; // myaccount/return/apply

var CHANGE_EXPRESS_TIME = 'CHANGE_EXPRESS_TIME';
var CHANGE_EXPRESS_TYPE = 'CHANGE_EXPRESS_TYPE';
var FETCH_RETURN_APPLY_DETAIL = 'FETCH_RETURN_APPLY_DETAIL';
var GET_EXPRESS_NUMBER = 'GET_EXPRESS_NUMBER';
var CHANGE_EXPRESS_ADDRESS = 'CHANGE_EXPRESS_ADDRESS';
var FETCH_EXPRESS_LOGISTICS = 'FETCH_EXPRESS_LOGISTICS';

/***/ }),

/***/ "./src/constant/uikit.ts":
/*!*******************************!*\
  !*** ./src/constant/uikit.ts ***!
  \*******************************/
/*! exports provided: AssetImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetImage", function() { return AssetImage; });
var AssetImage = {
  Common: {
    Loading: __webpack_require__(/*! images/common/loading.gif */ "./static/images/common/loading.gif"),
    ErrorBG: __webpack_require__(/*! images/common/error-bg.png */ "./static/images/common/error-bg.png"),
    Download: __webpack_require__(/*! images/common/logo-download.png */ "./static/images/common/logo-download.png")
  },
  Home: {
    SGS: __webpack_require__(/*! images/home/sign.png */ "./static/images/home/sign.png")
  },
  Help: {
    Order1: __webpack_require__(/*! images/help/order-1.png */ "./static/images/help/order-1.png"),
    Order2: __webpack_require__(/*! images/help/order-2.png */ "./static/images/help/order-2.png"),
    Order3: __webpack_require__(/*! images/help/order-3.png */ "./static/images/help/order-3.png"),
    Order4: __webpack_require__(/*! images/help/xd1.png */ "./static/images/help/xd1.png"),
    Order5: __webpack_require__(/*! images/help/xd2.png */ "./static/images/help/xd2.png"),
    Order6: __webpack_require__(/*! images/help/xd3.png */ "./static/images/help/xd3.png"),
    Maintain1: __webpack_require__(/*! images/help/maintain-1.png */ "./static/images/help/maintain-1.png"),
    Maintain2: __webpack_require__(/*! images/help/maintain-2.png */ "./static/images/help/maintain-2.png")
  },
  Activity: {
    Guidance: {
      Image1: __webpack_require__(/*! images/activity/guidance/top.png */ "./static/images/activity/guidance/top.png"),
      Image2: __webpack_require__(/*! images/activity/guidance/header.png */ "./static/images/activity/guidance/header.png"),
      Image3: __webpack_require__(/*! images/activity/guidance/security1.png */ "./static/images/activity/guidance/security1.png"),
      Image4: __webpack_require__(/*! images/activity/guidance/security2.png */ "./static/images/activity/guidance/security2.png"),
      Present1: __webpack_require__(/*! images/activity/guidance/mian.png */ "./static/images/activity/guidance/mian.png"),
      Present2: __webpack_require__(/*! images/activity/guidance/hui.png */ "./static/images/activity/guidance/hui.png"),
      Present3: __webpack_require__(/*! images/activity/guidance/bao.png */ "./static/images/activity/guidance/bao.png"),
      Present4: __webpack_require__(/*! images/activity/guidance/huan.png */ "./static/images/activity/guidance/huan.png"),
      Present5: __webpack_require__(/*! images/activity/guidance/huabei.png */ "./static/images/activity/guidance/huabei.png"),
      Present6: __webpack_require__(/*! images/activity/guidance/zhima.png */ "./static/images/activity/guidance/zhima.png"),
      Present2_1: __webpack_require__(/*! images/activity/guidance/shuju.png?v=1 */ "./static/images/activity/guidance/shuju.png?v=1"),
      Present3_1: __webpack_require__(/*! images/activity/guidance/tiao.png */ "./static/images/activity/guidance/tiao.png"),
      Present3_2: __webpack_require__(/*! images/activity/guidance/xin.png */ "./static/images/activity/guidance/xin.png"),
      Present3_3: __webpack_require__(/*! images/activity/guidance/kuai.png */ "./static/images/activity/guidance/kuai.png"),
      Present3_4: __webpack_require__(/*! images/activity/guidance/zhuji.png */ "./static/images/activity/guidance/zhuji.png"),
      Present4_1: __webpack_require__(/*! images/activity/guidance/gui.png */ "./static/images/activity/guidance/gui.png"),
      Present4_2: __webpack_require__(/*! images/activity/guidance/xu.png */ "./static/images/activity/guidance/xu.png"),
      Present4_3: __webpack_require__(/*! images/activity/guidance/mai.png */ "./static/images/activity/guidance/mai.png"),
      Present5_1: __webpack_require__(/*! images/activity/guidance/valueAdd1.png */ "./static/images/activity/guidance/valueAdd1.png"),
      Present5_2: __webpack_require__(/*! images/activity/guidance/valueAdd2.png */ "./static/images/activity/guidance/valueAdd2.png"),
      Present5_3: __webpack_require__(/*! images/activity/guidance/valueAdd3.png */ "./static/images/activity/guidance/valueAdd3.png"),
      Footer: __webpack_require__(/*! images/activity/guidance/button.png */ "./static/images/activity/guidance/button.png"),
      Footerxz: __webpack_require__(/*! images/activity/guidance/footerxz.png */ "./static/images/activity/guidance/footerxz.png")
    }
  },
  Account: {
    UserPrivilegeTop: __webpack_require__(/*! images/account/user-privilege-top.png */ "./static/images/account/user-privilege-top.png")
  },
  ReturnFlow: {
    Detail: {
      returnSuccess: __webpack_require__(/*! images/returnflow/detail/success.png */ "./static/images/returnflow/detail/success.png"),
      returnWaiting: __webpack_require__(/*! images/returnflow/detail/waiting.png */ "./static/images/returnflow/detail/waiting.png")
    }
  },
  Site: {
    AppDownload: {
      General: __webpack_require__(/*! images/site/appdownload/banner_zx.png */ "./static/images/site/appdownload/banner_zx.png"),
      Weibo: __webpack_require__(/*! images/site/appdownload/xiaowu.png */ "./static/images/site/appdownload/xiaowu.png"),
      Iphonex: __webpack_require__(/*! images/site/appdownload/banner_ix.png */ "./static/images/site/appdownload/banner_ix.png"),
      NoviceGift: __webpack_require__(/*! images/site/appdownload/banner_channel.png */ "./static/images/site/appdownload/banner_channel.png"),
      Weixin: __webpack_require__(/*! images/site/appdownload/weixin_down.png */ "./static/images/site/appdownload/weixin_down.png"),
      Samsung: __webpack_require__(/*! images/site/appdownload/banner_samsung.png */ "./static/images/site/appdownload/banner_samsung.png"),
      Footer: __webpack_require__(/*! images/site/appdownload/cooperation.png */ "./static/images/site/appdownload/cooperation.png"),
      AHSApp: __webpack_require__(/*! images/site/appdownload/aihuishou.png */ "./static/images/site/appdownload/aihuishou.png")
    },
    AppDownloadProceed: {
      AppIcon: __webpack_require__(/*! images/site/appdownloadproceed/appicon.png */ "./static/images/site/appdownloadproceed/appicon.png")
    }
  },
  Trade: {
    Results: {
      AssResult: __webpack_require__(/*! images/trade/results/pinggu.png */ "./static/images/trade/results/pinggu.png"),
      AssError: __webpack_require__(/*! images/trade/results/pinggu2.png */ "./static/images/trade/results/pinggu2.png"),
      PaySuccess: __webpack_require__(/*! images/trade/results/banli1.png */ "./static/images/trade/results/banli1.png"),
      PayWait: __webpack_require__(/*! images/trade/results/banli2.png */ "./static/images/trade/results/banli2.png"),
      ZhimaLogo: __webpack_require__(/*! images/trade/results/logo_xhj_zhima.png */ "./static/images/trade/results/logo_xhj_zhima.png")
    }
  },
  MyAccount: {
    Return: {
      standard1: __webpack_require__(/*! images/myaccount/return/standard1.png */ "./static/images/myaccount/return/standard1.png"),
      standard2: __webpack_require__(/*! images/myaccount/return/standard2.png */ "./static/images/myaccount/return/standard2.png"),
      standard3: __webpack_require__(/*! images/myaccount/return/standard3.png */ "./static/images/myaccount/return/standard3.png"),
      standard4: __webpack_require__(/*! images/myaccount/return/standard4.png */ "./static/images/myaccount/return/standard4.png"),
      standard5: __webpack_require__(/*! images/myaccount/return/standard5.png */ "./static/images/myaccount/return/standard5.png"),
      standard6: __webpack_require__(/*! images/myaccount/return/standard6.png */ "./static/images/myaccount/return/standard6.png"),
      standard7: __webpack_require__(/*! images/myaccount/return/standard7.png */ "./static/images/myaccount/return/standard7.png"),
      standard8: __webpack_require__(/*! images/myaccount/return/standard8.png */ "./static/images/myaccount/return/standard8.png"),
      standard9: __webpack_require__(/*! images/myaccount/return/standard9.png */ "./static/images/myaccount/return/standard9.png")
    },
    Receipt: {
      Apply: __webpack_require__(/*! images/myaccount/receipt/apply.png */ "./static/images/myaccount/receipt/apply.png"),
      Success: __webpack_require__(/*! images/myaccount/receipt/success.png */ "./static/images/myaccount/receipt/success.png"),
      Ziyuan: __webpack_require__(/*! images/myaccount/receipt/ziyuan.png */ "./static/images/myaccount/receipt/ziyuan.png"),
      CancelZiyuan: __webpack_require__(/*! images/myaccount/receipt/cancel_fapiao.png */ "./static/images/myaccount/receipt/cancel_fapiao.png")
    }
  },
  MyTrade: {
    Exchange: {
      One: __webpack_require__(/*! images/mytrade/exchange/one.png */ "./static/images/mytrade/exchange/one.png"),
      Two: __webpack_require__(/*! images/mytrade/exchange/two.png */ "./static/images/mytrade/exchange/two.png"),
      Three: __webpack_require__(/*! images/mytrade/exchange/three.png */ "./static/images/mytrade/exchange/three.png"),
      Four: __webpack_require__(/*! images/mytrade/exchange/four.png */ "./static/images/mytrade/exchange/four.png"),
      Five: __webpack_require__(/*! images/mytrade/exchange/five.png */ "./static/images/mytrade/exchange/five.png"),
      Fangbian: __webpack_require__(/*! images/mytrade/exchange/fangbian.png */ "./static/images/mytrade/exchange/fangbian.png"),
      Chaozhi: __webpack_require__(/*! images/mytrade/exchange/chaozhi.png */ "./static/images/mytrade/exchange/chaozhi.png"),
      Shengqian: __webpack_require__(/*! images/mytrade/exchange/shengqian.png */ "./static/images/mytrade/exchange/shengqian.png"),
      Mag: __webpack_require__(/*! images/mytrade/exchange/msg.png */ "./static/images/mytrade/exchange/msg.png")
    },
    Creditcard: {
      Anquanma: __webpack_require__(/*! images/mytrade/creditcard/anquanma.png */ "./static/images/mytrade/creditcard/anquanma.png"),
      Baizhang: __webpack_require__(/*! images/mytrade/creditcard/baizhang.png */ "./static/images/mytrade/creditcard/baizhang.png")
    }
  }
};

/***/ }),

/***/ "./src/containers/Account/Privilege/UserPrivilegeItem.less":
/*!*****************************************************************!*\
  !*** ./src/containers/Account/Privilege/UserPrivilegeItem.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"item": "UserPrivilegeItem__item___9Bxb_",
	"button": "UserPrivilegeItem__button___3ld1H",
	"disabledButton": "UserPrivilegeItem__disabledButton___105Ig",
	"topWrapper": "UserPrivilegeItem__topWrapper___12THI",
	"wrapper": "UserPrivilegeItem__wrapper___1rj8w",
	"description": "UserPrivilegeItem__description___1NmSj",
	"tape": "UserPrivilegeItem__tape___3rm5j",
	"tapeDot": "UserPrivilegeItem__tapeDot___11A1H",
	"plainWrapper": "UserPrivilegeItem__plainWrapper___uK-Ss",
	"btn": "UserPrivilegeItem__btn___1ILvE",
	"exchangeWrapper": "UserPrivilegeItem__exchangeWrapper___3ed5Z",
	"codeText": "UserPrivilegeItem__codeText___1mqQi",
	"copyText": "UserPrivilegeItem__copyText___1vaND"
};

/***/ }),

/***/ "./src/containers/Account/Privilege/UserPrivilegeItem.tsx":
/*!****************************************************************!*\
  !*** ./src/containers/Account/Privilege/UserPrivilegeItem.tsx ***!
  \****************************************************************/
/*! exports provided: PrivilegeTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegeTypes", function() { return PrivilegeTypes; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/toast */ "antd-mobile/lib/toast");
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UserPrivilegeItem.less */ "./src/containers/Account/Privilege/UserPrivilegeItem.less");
/* harmony import */ var _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14__);















var PrivilegeTypes;

(function (PrivilegeTypes) {
  PrivilegeTypes[PrivilegeTypes["Exchangeable"] = 1] = "Exchangeable";
  PrivilegeTypes[PrivilegeTypes["Exchanged"] = 2] = "Exchanged";
  PrivilegeTypes[PrivilegeTypes["Invalid"] = 3] = "Invalid";
  PrivilegeTypes[PrivilegeTypes["Unable"] = 4] = "Unable";
  PrivilegeTypes[PrivilegeTypes["Delay"] = 5] = "Delay";
})(PrivilegeTypes || (PrivilegeTypes = {}));

var convertTime = function convertTime(time) {
  return time.substring(0, 10).replace(/-/g, '.');
};

var goProductList =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/product/category');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function goProductList() {
    return _ref.apply(this, arguments);
  };
}();

var StatusButton = function StatusButton(type) {
  switch (type) {
    case PrivilegeTypes.Exchangeable:
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
        className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.button
      }, "\u83B7\u53D6\u5238\u7801");

    case PrivilegeTypes.Exchanged:
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
        className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.disabledButton
      }, "\u5DF2\u83B7\u53D6");

    case PrivilegeTypes.Invalid:
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
        className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.disabledButton
      }, "\u5DF2\u5931\u6548");

    default:
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
        className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.disabledButton
      }, "\u6682\u65E0\u6CD5\u9886\u53D6");
  }
};

var StatusBottom = function StatusBottom(item, onClickCopy) {
  if (item.get('type') === PrivilegeTypes.Delay || item.get('type') === PrivilegeTypes.Unable) {
    return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
      className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.plainWrapper
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, "\u7B7E\u6536\u5546\u54C17\u5929\u540E\u65B9\u53EF\u9886\u53D6\u4F7F\u7528"));
  }

  if (item.get('type') === PrivilegeTypes.Invalid) {
    return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
      className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.plainWrapper,
      onClick: goProductList
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, "\u60A8\u6682\u65F6\u65E0\u6CD5\u4EAB\u53D7\u6B64\u6743\u76CA\uFF0C\u518D\u6B21\u4E0B\u5355\u5373\u53EF\u6FC0\u6D3B\u54E6\uFF01"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.btn
    }, "\u53BB\u4E0B\u5355"));
  }

  if (item.get('redeem_code') && item.get('type') === PrivilegeTypes.Exchanged) {
    return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["Copy"], {
      text: item.get('redeem_code'),
      onCopied: onClickCopy
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
      className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.exchangeWrapper
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.codeText
    }, "\u5151\u6362\u7801 ", item.get('redeem_code')), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.copyText
    }, "\u590D\u5236\u5E76\u4F7F\u7528")));
  }

  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
    className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.plainWrapper
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, "\u9886\u53D6\u6709\u6548\u671F\uFF1A", convertTime(item.get('started_at')), " - ", convertTime(item.get('expired_at'))));
};

var UserPrivilegeItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(UserPrivilegeItem, _React$Component);

  function UserPrivilegeItem() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, UserPrivilegeItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(UserPrivilegeItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      clicked: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "exchange",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.mark(function _callee2() {
      var _this$props, item, onExchange, error;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this.state.clicked) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _this$props = _this.props, item = _this$props.item, onExchange = _this$props.onExchange;

              if (!(item.get('type') === PrivilegeTypes.Exchangeable)) {
                _context2.next = 8;
                break;
              }

              _context2.next = 6;
              return onExchange(item.get('user_priv_id'));

            case 6:
              error = _context2.sent;
              if (error) antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.info(error, 3);

            case 8:
              _this.setState({
                clicked: false
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(UserPrivilegeItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          onClickCopy = _this$props2.onClickCopy;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.item
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.topWrapper,
        onClick: this.exchange
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h3", null, item.get('title')), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.wrapper
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.description
      }, item.get('desc')), StatusButton(item.get('type')))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.tape
      }, _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
        length: 20
      }, function (_, i) {
        return i;
      }).map(function (v) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: _UserPrivilegeItem_less__WEBPACK_IMPORTED_MODULE_14___default.a.tapeDot,
          key: v
        });
      })), StatusBottom(item, onClickCopy));
    }
  }]);

  return UserPrivilegeItem;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserPrivilegeItem);

/***/ }),

/***/ "./src/reducers/account/auto-rent.ts":
/*!*******************************************!*\
  !*** ./src/reducers/account/auto-rent.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialAutoRent = {
  info: {},
  btnDisabled: false
};
var autoRent = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.info));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["OPEN_AUTO_RENT"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.setIn(['info', 'is_auto_rent'], payload.is_auto_rent);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SET_RENT_BUTTON_DISABLED"], function (state, _ref3) {
  var payload = _ref3.payload;
  return state.set('btnDisabled', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.disabled));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialAutoRent));
/* harmony default export */ __webpack_exports__["default"] = (autoRent);

/***/ }),

/***/ "./src/reducers/account/buy-out.ts":
/*!*****************************************!*\
  !*** ./src/reducers/account/buy-out.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_4__);


var _handleActions;





var initialBuyOut = {
  info: {},
  btnDisabled: false
};
var index = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_BUY_OUT_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.info));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SET_RENT_BUTTON_DISABLED"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('btnDisabled', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.disabled));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialBuyOut));
var result = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_BUY_OUT_RESULT_INFO"], function (state, _ref3) {
  var payload = _ref3.payload;
  return state.merge(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.info));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])({}));
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  index: index,
  result: result
}));

/***/ }),

/***/ "./src/reducers/account/center.ts":
/*!****************************************!*\
  !*** ./src/reducers/account/center.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialCenter = {
  userInfo: {
    phone: '',
    user_balance: 0,
    coupon_list_count: 0
  },
  tradeCount: {
    rent_list_count: 0,
    pending_list_count: 0,
    unpay_count: 0
  },
  mpActivityInfo: [],
  newInfo: {}
};
var center = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_USER_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var userInfo = payload.userInfo,
      tradeCount = payload.tradeCount,
      mpActivityInfo = payload.mpActivityInfo;
  return state.set('userInfo', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(userInfo)).set('tradeCount', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(tradeCount)).set('mpActivityInfo', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(mpActivityInfo));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CENTER_INFO"], function (state, _ref2) {
  var payload = _ref2.payload;
  var info = payload;
  return state.set('newInfo', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(info));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialCenter));
/* harmony default export */ __webpack_exports__["default"] = (center);

/***/ }),

/***/ "./src/reducers/account/footprint.ts":
/*!*******************************************!*\
  !*** ./src/reducers/account/footprint.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialFootprint = {
  name: '',
  user_id: '',
  source: '',
  identi_card: '',
  credit_level: '',
  honour_count: 0,
  breach_count: 0,
  honour: {
    return_pay: 0,
    return_machine: 0,
    buyout: 0
  },
  breach: {
    return_pay: 0,
    return_machine: 0,
    buyout: 0
  }
};
var footprint = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_ACCOUNT_FOOTPRINT_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var name = payload.name,
      user_id = payload.user_id,
      source = payload.source,
      identi_card = payload.identi_card,
      credit_level = payload.credit_level,
      honour_count = payload.honour_count,
      breach_count = payload.breach_count,
      honour = payload.honour,
      breach = payload.breach;
  return state.set('name', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(name)).set('user_id', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(user_id)).set('source', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(source)).set('identi_card', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(identi_card)).set('credit_level', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(credit_level)).set('honour_count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(honour_count)).set('breach_count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(breach_count)).set('honour', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(honour)).set('breach', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(breach));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialFootprint));
/* harmony default export */ __webpack_exports__["default"] = (footprint);

/***/ }),

/***/ "./src/reducers/account/footprintList.ts":
/*!***********************************************!*\
  !*** ./src/reducers/account/footprintList.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


 // import { FootPrintListReturns } from 'interfaces/footprint'


var initialFootprintList = {
  breach_info: ''
};
var footprintList = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_ACCOUNT_FOOTPRINTLIST_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var breachInfo = payload;
  return state.set('breach_info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(breachInfo));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialFootprintList));
/* harmony default export */ __webpack_exports__["default"] = (footprintList);

/***/ }),

/***/ "./src/reducers/account/index.ts":
/*!***************************************!*\
  !*** ./src/reducers/account/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auto_rent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-rent */ "./src/reducers/account/auto-rent.ts");
/* harmony import */ var _buy_out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buy-out */ "./src/reducers/account/buy-out.ts");
/* harmony import */ var _center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./center */ "./src/reducers/account/center.ts");
/* harmony import */ var _footprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footprint */ "./src/reducers/account/footprint.ts");
/* harmony import */ var _footprintList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footprintList */ "./src/reducers/account/footprintList.ts");
/* harmony import */ var _privilege__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privilege */ "./src/reducers/account/privilege.ts");
/* harmony import */ var _unionPay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unionPay */ "./src/reducers/account/unionPay/index.ts");








/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  footprint: _footprint__WEBPACK_IMPORTED_MODULE_4__["default"],
  footprintList: _footprintList__WEBPACK_IMPORTED_MODULE_5__["default"],
  center: _center__WEBPACK_IMPORTED_MODULE_3__["default"],
  privilege: _privilege__WEBPACK_IMPORTED_MODULE_6__["default"],
  unionPay: _unionPay__WEBPACK_IMPORTED_MODULE_7__["default"],
  autoRent: _auto_rent__WEBPACK_IMPORTED_MODULE_1__["default"],
  buyOut: _buy_out__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/account/privilege.ts":
/*!*******************************************!*\
  !*** ./src/reducers/account/privilege.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var containers_Account_Privilege_UserPrivilegeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers/Account/Privilege/UserPrivilegeItem */ "./src/containers/Account/Privilege/UserPrivilegeItem.tsx");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_4__);


var _handleActions;





var initialPrivilege = {
  list: [],
  userList: []
};
var privilege = Object(redux_actions__WEBPACK_IMPORTED_MODULE_4__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRIVILEGE_LIST"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_PRIVILEGE_LIST"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('userList', Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["EXCHANGE_PRIVILEGE"], function (state, _ref3) {
  var payload = _ref3.payload;
  var item = state.getIn(['userList', payload.index]);
  var newItem = item.set('redeem_code', payload.data.redeem_code).set('type', containers_Account_Privilege_UserPrivilegeItem__WEBPACK_IMPORTED_MODULE_2__["PrivilegeTypes"].Exchanged);
  return state.setIn(['userList', payload.index], newItem);
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(initialPrivilege));
/* harmony default export */ __webpack_exports__["default"] = (privilege);

/***/ }),

/***/ "./src/reducers/account/unionPay/index.ts":
/*!************************************************!*\
  !*** ./src/reducers/account/unionPay/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialUnionPayForm = {
  list: [],
  detail: {
    realName: '',
    idNo: ''
  },
  checkBankList: [],
  form: {
    realName: '',
    idNo: '',
    verifyCode: '',
    isEdit: true,
    hasSubmit: false // 是否提交成功

  }
};
var unionPayForm = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_UNION_PAY_LIST"], function (state, _ref) {
  var payload = _ref.payload;
  var list = payload.list;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(list));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_UNION_PAY_DETAIL"], function (state, _ref2) {
  var payload = _ref2.payload;
  var detail = payload.detail;
  return state.set('detail', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(detail));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_UNION_PAY_CHECK_BANK_LIST"], function (state, _ref3) {
  var payload = _ref3.payload;
  var bankList = payload.bankList;
  return state.set('checkBankList', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(bankList));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_UNION_PAY_INFO"], function (state, _ref4) {
  var payload = _ref4.payload;
  var form = payload.form;
  return state.setIn(['form', 'realName'], form.realName).setIn(['form', 'idNo'], form.idNo).setIn(['form', 'isEdit'], form.realName.length === 0);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GO_TO_NEXT"], function (state, _ref5) {
  var payload = _ref5.payload;
  var form = payload.form;
  return state.set('form', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(form));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SAVE_FORM_FILEDS"], function (state, _ref6) {
  var payload = _ref6.payload;
  var form = payload.form;
  return state.setIn(['form', 'realName'], form.realName).setIn(['form', 'idNo'], form.idNo).setIn(['form', 'bankCardNo'], form.bankCardNo).setIn(['form', 'tel'], form.tel).setIn(['form', 'hasSubmit'], !!form.hasSubmit);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SAVE_SMS_FILEDS"], function (state, _ref7) {
  var payload = _ref7.payload;
  return state.setIn(['form', 'verifyCode'], payload.verifyCode);
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialUnionPayForm));
/* harmony default export */ __webpack_exports__["default"] = (unionPayForm);

/***/ }),

/***/ "./src/reducers/activitys/exchangeCoupon.ts":
/*!**************************************************!*\
  !*** ./src/reducers/activitys/exchangeCoupon.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialExchangeCoupon = {
  brand_name: '',
  recommand_product: [],
  recommand_product_hot: [],
  discount_amount: '',
  coupon_rule_id: 0,
  coupon_type: 0
};
var exchangecoupon = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_ACTIVITYS_EXCHANGECOUPON"], function (state, _ref) {
  var payload = _ref.payload;
  var brand_name = payload.brand_name,
      recommand_product = payload.recommand_product,
      recommand_product_hot = payload.recommand_product_hot,
      discount_amount = payload.discount_amount,
      coupon_rule_id = payload.coupon_rule_id,
      coupon_type = payload.coupon_type;
  return state.set('brand_name', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(brand_name)).set('recommand_product', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(recommand_product)).set('recommand_product_hot', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(recommand_product_hot)).set('discount_amount', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(discount_amount)).set('coupon_rule_id', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(coupon_rule_id)).set('coupon_type', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(coupon_type));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialExchangeCoupon));
/* harmony default export */ __webpack_exports__["default"] = (exchangecoupon);

/***/ }),

/***/ "./src/reducers/activitys/guideOldUser.ts":
/*!************************************************!*\
  !*** ./src/reducers/activitys/guideOldUser.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_5__);






var initialGuideOldUserData = {
  showHour: true,
  day: '00',
  hour: '00',
  showExpired: false,
  product_name: ''
};
var GuideOldUserDataReturn = Object(redux_actions__WEBPACK_IMPORTED_MODULE_5__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_2__["FETCH_ACTIVITYS_GUIDE_OLD_USER"], function (state, _ref) {
  var payload = _ref.payload;
  var dt_end_date = payload.dt_end_date,
      product_name = payload.product_name;
  var now = dayjs__WEBPACK_IMPORTED_MODULE_3___default()();
  var leftDate = dayjs__WEBPACK_IMPORTED_MODULE_3___default.a.unix(dt_end_date);
  var day = leftDate.diff(now, 'day');
  var hour = leftDate.diff(now, 'hour') - day * 24;
  var dayData = day.toString().padStart(2, '0');
  var hourData = hour.toString().padStart(2, '0');
  return state.set('day', Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(dayData, 10) > 0 ? dayData : '00')).set('hour', Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(hourData, 10) > 0 ? hourData : '00')).set('showHour', Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(day < 7)).set('showExpired', Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(hour <= 0)).set('product_name', Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(product_name));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(initialGuideOldUserData));
/* harmony default export */ __webpack_exports__["default"] = (GuideOldUserDataReturn);

/***/ }),

/***/ "./src/reducers/activitys/index.ts":
/*!*****************************************!*\
  !*** ./src/reducers/activitys/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exchangeCoupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchangeCoupon */ "./src/reducers/activitys/exchangeCoupon.ts");
/* harmony import */ var _guideOldUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guideOldUser */ "./src/reducers/activitys/guideOldUser.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  exchangeCoupon: _exchangeCoupon__WEBPACK_IMPORTED_MODULE_1__["default"],
  guideOldUser: _guideOldUser__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/app.ts":
/*!*****************************!*\
  !*** ./src/reducers/app.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_4__);



var _handleActions;




var initialApp = {
  tabBar: {
    selectedTab: '',
    show: false
  },
  signature: {},
  navIcons: {
    is_festival: 0,
    icons: []
  },
  orderTips: {
    is_have_undone_trade: false,
    tips: ''
  }
};
var app = Object(redux_actions__WEBPACK_IMPORTED_MODULE_4__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["INIT_TABBAR"], function (state, _ref) {
  var payload = _ref.payload;
  var selectedTab = payload.selectedTab,
      show = payload.show;
  return state.setIn(['tabBar', 'selectedTab'], selectedTab).setIn(['tabBar', 'show'], show);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_TABBAR"], function (state) {
  var show = state.getIn(['tabBar', 'show']);
  return state.setIn(['tabBar', 'show'], !show);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["HIDDEN_TABBAR"], function (state) {
  return state.setIn(['tabBar', 'show'], false);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["RAS_PRIVATE_KEY"], function (state, _ref2) {
  var payload = _ref2.payload;
  var key = payload.key,
      timespan = payload.timespan,
      token = payload.token;
  return state.setIn(['signature', key], Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])({
    timespan: timespan,
    token: token
  }));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["GET_NAV_ICONS"], function (state, _ref3) {
  var payload = _ref3.payload;
  var dicKey = {
    0: 'home',
    1: 'product',
    2: 'myCenter'
  };
  var is_festival = payload.is_festival,
      icons = payload.icons;
  var list = (icons || []).map(function (item, index) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item, {
      key: dicKey[index]
    });
  });
  return state.set('navIcons', Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])({
    is_festival: is_festival,
    icons: list
  }));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["CHECK_TRADE_DONE"], function (state, _ref4) {
  var payload = _ref4.payload;
  var is_have_undone_trade = payload.is_have_undone_trade,
      tips = payload.tips;
  return state.setIn(['orderTips', 'is_have_undone_trade'], is_have_undone_trade).setIn(['orderTips', 'tips'], tips);
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(initialApp));
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/reducers/assess/identity.ts":
/*!*****************************************!*\
  !*** ./src/reducers/assess/identity.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialData = {
  identityStatus: 'initial'
};
var identity = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["CHANGE_IDENTITY_STATUS"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('identityStatus', payload);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialData));
/* harmony default export */ __webpack_exports__["default"] = (identity);

/***/ }),

/***/ "./src/reducers/assess/index.ts":
/*!**************************************!*\
  !*** ./src/reducers/assess/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./src/reducers/assess/identity.ts");
/* harmony import */ var _informationManage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./informationManage */ "./src/reducers/assess/informationManage.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  identity: _identity__WEBPACK_IMPORTED_MODULE_1__["default"],
  informationData: _informationManage__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/assess/informationManage.ts":
/*!**************************************************!*\
  !*** ./src/reducers/assess/informationManage.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialData = {
  needBindCard: 1,
  // 0：不需要 1：需要
  needUpload: 1 //

};
var informationData = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_INFORMATION_DATA"], function (state, _ref) {
  var payload = _ref.payload;
  var needBindCard = payload.needBindCard,
      needUpload = payload.needUpload;
  return state.set('needBindCard', needBindCard).set('needUpload', needUpload);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialData));
/* harmony default export */ __webpack_exports__["default"] = (informationData);

/***/ }),

/***/ "./src/reducers/cache-list.ts":
/*!************************************!*\
  !*** ./src/reducers/cache-list.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialCacheList = {
  list: []
};
var cacheList = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_CACHE_LIST"], function (state, _ref) {
  var list = _ref.payload.list;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(list));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["REMOVE_CACHE"], function (state, _ref2) {
  var index = _ref2.payload.index;
  return state.deleteIn(['list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(index)]);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ALL_CACHE"], function (state) {
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])([]));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialCacheList));
/* harmony default export */ __webpack_exports__["default"] = (cacheList);

/***/ }),

/***/ "./src/reducers/easeu/credit-card.ts":
/*!*******************************************!*\
  !*** ./src/reducers/easeu/credit-card.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialCreditCard = {
  smsInfo: {}
};
var creditCard = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["SEND_SMS_CODE"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('smsInfo', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialCreditCard));
/* harmony default export */ __webpack_exports__["default"] = (creditCard);

/***/ }),

/***/ "./src/reducers/easeu/index.ts":
/*!*************************************!*\
  !*** ./src/reducers/easeu/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _credit_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credit-card */ "./src/reducers/easeu/credit-card.ts");
/* harmony import */ var _trade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade */ "./src/reducers/easeu/trade.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  trade: _trade__WEBPACK_IMPORTED_MODULE_2__["default"],
  creditCard: _credit_card__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/easeu/trade.ts":
/*!*************************************!*\
  !*** ./src/reducers/easeu/trade.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialTrade = {
  flow: {},
  index: {},
  success: {}
};
var tradeIndex = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["CHECK_FLOW"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('flow', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_TRADE_INDEX"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('index', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_TRADE_SUCCESS"], function (state, _ref3) {
  var payload = _ref3.payload;
  return state.set('success', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialTrade));
/* harmony default export */ __webpack_exports__["default"] = (tradeIndex);

/***/ }),

/***/ "./src/reducers/enterprise/apply/index.ts":
/*!************************************************!*\
  !*** ./src/reducers/enterprise/apply/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialGuide = {
  guide: [],
  result: {
    authenticated: 0
  },
  form: {
    partner_enterprise: 1,
    // 1-合作企业，0-非合作企业
    form_field: {
      employee_no: 0,
      // 1-工号需填写,0-工号无需填写
      idcard: 0,
      // 身份证号，同上
      employee_card: 0 // 工牌，同上

    }
  }
};
var apply = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_ENTERPRISE_APPLY_GUIDE"], function (state, _ref) {
  var payload = _ref.payload;
  var data = payload;
  return state.set('guide', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(data));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_ENTERPRISE_APPLY_RESULT"], function (state, _ref2) {
  var payload = _ref2.payload;
  var data = payload;
  return state.set('result', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(data));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["CHECK_ENTERPRISE_APPLY_EMAIL"], function (state, _ref3) {
  var payload = _ref3.payload;
  var data = payload;
  return state.setIn(['form', 'partner_enterprise'], Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(data.partner_enterprise)).setIn(['form', 'form_field'], Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(data.form_field));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialGuide));
/* harmony default export */ __webpack_exports__["default"] = (apply);

/***/ }),

/***/ "./src/reducers/enterprise/index.ts":
/*!******************************************!*\
  !*** ./src/reducers/enterprise/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply */ "./src/reducers/enterprise/apply/index.ts");
/* harmony import */ var _mytrade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mytrade */ "./src/reducers/enterprise/mytrade/index.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  apply: _apply__WEBPACK_IMPORTED_MODULE_1__["default"],
  mytrade: _mytrade__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/enterprise/mytrade/index.ts":
/*!**************************************************!*\
  !*** ./src/reducers/enterprise/mytrade/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pickNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickNumber */ "./src/reducers/enterprise/mytrade/pickNumber.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  pickNumber: _pickNumber__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/enterprise/mytrade/pickNumber.ts":
/*!*******************************************************!*\
  !*** ./src/reducers/enterprise/mytrade/pickNumber.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialPickNumber = {
  is_empty: '',
  page_index: '',
  page_size: '',
  phone: [],
  vas_detail: {},
  title: '',
  subtitle: '',
  tips: '',
  phoneNum: ''
};
var pickNumber = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_ENTERPRISE_PICK_NUMBER"], function (state, _ref) {
  var payload = _ref.payload;
  var is_empty = payload.is_empty,
      page_index = payload.page_index,
      page_size = payload.page_size,
      phone = payload.phone,
      vas_detail = payload.vas_detail,
      title = payload.title,
      subtitle = payload.subtitle,
      tips = payload.tips;
  return state.set('is_empty', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(is_empty)).set('page_index', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(page_index)).set('page_size', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(page_size)).set('phone', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(phone)).set('vas_detail', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(vas_detail)).set('title', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(title)).set('subtitle', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(subtitle)).set('tips', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(tips));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SELECT_NEW_PHONE_NUMBER"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('phoneNum', payload);
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialPickNumber));
/* harmony default export */ __webpack_exports__["default"] = (pickNumber);

/***/ }),

/***/ "./src/reducers/home.ts":
/*!******************************!*\
  !*** ./src/reducers/home.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialHome = {
  userTag: {}
};
var home = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_HOME_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var homeData = payload;
  return state.merge(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(homeData));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_HOME_USER_TAG"], function (state, _ref2) {
  var payload = _ref2.payload;
  var userTagData = payload;
  return state.set('userTag', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(userTagData));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialHome));
/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account */ "./src/reducers/account/index.ts");
/* harmony import */ var _activitys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activitys */ "./src/reducers/activitys/index.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/reducers/app.ts");
/* harmony import */ var _assess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assess */ "./src/reducers/assess/index.ts");
/* harmony import */ var _cache_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cache-list */ "./src/reducers/cache-list.ts");
/* harmony import */ var _easeu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./easeu */ "./src/reducers/easeu/index.ts");
/* harmony import */ var _enterprise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enterprise */ "./src/reducers/enterprise/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home */ "./src/reducers/home.ts");
/* harmony import */ var _myAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myAccount */ "./src/reducers/myAccount/index.ts");
/* harmony import */ var _myTrade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myTrade */ "./src/reducers/myTrade/index.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product */ "./src/reducers/product/index.ts");
/* harmony import */ var _server_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./server-app */ "./src/reducers/server-app.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./site */ "./src/reducers/site/index.ts");
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./terms */ "./src/reducers/terms/index.ts");
/* harmony import */ var _trade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./trade */ "./src/reducers/trade/index.ts");
















/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _app__WEBPACK_IMPORTED_MODULE_3__["default"],
  serverApp: _server_app__WEBPACK_IMPORTED_MODULE_12__["default"],
  cacheList: _cache_list__WEBPACK_IMPORTED_MODULE_5__["default"],
  home: _home__WEBPACK_IMPORTED_MODULE_8__["default"],
  product: _product__WEBPACK_IMPORTED_MODULE_11__["default"],
  trade: _trade__WEBPACK_IMPORTED_MODULE_15__["default"],
  account: _account__WEBPACK_IMPORTED_MODULE_1__["default"],
  site: _site__WEBPACK_IMPORTED_MODULE_13__["default"],
  easeu: _easeu__WEBPACK_IMPORTED_MODULE_6__["default"],
  myAccount: _myAccount__WEBPACK_IMPORTED_MODULE_9__["default"],
  myTrade: _myTrade__WEBPACK_IMPORTED_MODULE_10__["default"],
  terms: _terms__WEBPACK_IMPORTED_MODULE_14__["default"],
  assess: _assess__WEBPACK_IMPORTED_MODULE_4__["default"],
  activitys: _activitys__WEBPACK_IMPORTED_MODULE_2__["default"],
  enterprise: _enterprise__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ }),

/***/ "./src/reducers/myAccount/bind/index.ts":
/*!**********************************************!*\
  !*** ./src/reducers/myAccount/bind/index.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management */ "./src/reducers/myAccount/bind/management.ts");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result */ "./src/reducers/myAccount/bind/result.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  management: _management__WEBPACK_IMPORTED_MODULE_1__["default"],
  result: _result__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/myAccount/bind/management.ts":
/*!***************************************************!*\
  !*** ./src/reducers/myAccount/bind/management.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {
  btnText: '',
  link: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_BIND_WECHAT_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('btnText', payload.content).set('link', payload.redirect_url);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial)));

/***/ }),

/***/ "./src/reducers/myAccount/bind/result.ts":
/*!***********************************************!*\
  !*** ./src/reducers/myAccount/bind/result.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {
  phone: '',
  btnText: '',
  link: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_BIND_RESULT_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('phone', payload.phone).set('btnText', payload.content).set('link', payload.redirect_url);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial)));

/***/ }),

/***/ "./src/reducers/myAccount/index.ts":
/*!*****************************************!*\
  !*** ./src/reducers/myAccount/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bind */ "./src/reducers/myAccount/bind/index.ts");
/* harmony import */ var _receipt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receipt */ "./src/reducers/myAccount/receipt/index.ts");
/* harmony import */ var _repair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repair */ "./src/reducers/myAccount/repair/index.ts");
/* harmony import */ var _return__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./return */ "./src/reducers/myAccount/return/index.ts");
/* harmony import */ var _returnPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./returnPhone */ "./src/reducers/myAccount/returnPhone/index.ts");
/* harmony import */ var _returnflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./returnflow */ "./src/reducers/myAccount/returnflow/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service */ "./src/reducers/myAccount/service/index.ts");
/* harmony import */ var _termsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./termsList */ "./src/reducers/myAccount/termsList.ts");
/* harmony import */ var _withholding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withholding */ "./src/reducers/myAccount/withholding/index.ts");










/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  repair: _repair__WEBPACK_IMPORTED_MODULE_3__["default"],
  returnflow: _returnflow__WEBPACK_IMPORTED_MODULE_6__["default"],
  bind: _bind__WEBPACK_IMPORTED_MODULE_1__["default"],
  returnPhone: _returnPhone__WEBPACK_IMPORTED_MODULE_5__["default"],
  service: _service__WEBPACK_IMPORTED_MODULE_7__["default"],
  termsList: _termsList__WEBPACK_IMPORTED_MODULE_8__["default"],
  receipt: _receipt__WEBPACK_IMPORTED_MODULE_2__["default"],
  withholding: _withholding__WEBPACK_IMPORTED_MODULE_9__["default"],
  returnApply: _return__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./src/reducers/myAccount/receipt/index.ts":
/*!*************************************************!*\
  !*** ./src/reducers/myAccount/receipt/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice */ "./src/reducers/myAccount/receipt/invoice.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  invoice: _invoice__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/myAccount/receipt/invoice.ts":
/*!***************************************************!*\
  !*** ./src/reducers/myAccount/receipt/invoice.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialReturn = {
  invoice: {},
  data: [],
  current_page: 1
};
var serviceTermsList = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECEIPT_INVOICE"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('invoice', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECEIPT_INVOICE_CANCEL"], function (state, _ref2) {
  var payload = _ref2.payload;
  var res = payload;
  return state.set('cancel', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SAVE_RECEIPT_INVOICE_APPLY"], function (state, _ref3) {
  var payload = _ref3.payload;
  var res = payload;
  return state.set('apply', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SAVE_RECEIPT_INVOICE_EMAIL"], function (state, _ref4) {
  var payload = _ref4.payload;
  var res = payload;
  return state.set('email', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECEIPT_INVOICE_DETAIL"], function (state, _ref5) {
  var payload = _ref5.payload;
  var _payload$recordList = payload.recordList,
      list = _payload$recordList.list,
      count = _payload$recordList.count,
      errorMsg = payload.errorMsg;

  if (errorMsg) {
    return state.set('data', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
  }

  return state.set('data', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(list)).set('count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(count)).set('current_page', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(1));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["LOAD_FETCH_RECEIPT_INVOICE_DETAIL"], function (state, _ref6) {
  var payload = _ref6.payload;
  var list = payload.recordList.list,
      current_page = payload.current_page;
  var datas = state.get('data').concat(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(list));
  return state.set('data', datas).set('current_page', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(current_page));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialReturn));
/* harmony default export */ __webpack_exports__["default"] = (serviceTermsList);

/***/ }),

/***/ "./src/reducers/myAccount/repair/index.ts":
/*!************************************************!*\
  !*** ./src/reducers/myAccount/repair/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _quality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quality */ "./src/reducers/myAccount/repair/quality.ts");
/* harmony import */ var _standby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standby */ "./src/reducers/myAccount/repair/standby.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  quality: _quality__WEBPACK_IMPORTED_MODULE_1__["default"],
  standby: _standby__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/myAccount/repair/quality.ts":
/*!**************************************************!*\
  !*** ./src/reducers/myAccount/repair/quality.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialReturn = {
  data: [],
  page: 1,
  page_size: 6,
  record: {}
};
var orderDetailReturn = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["REPAIR_QUALITY_DETAIL"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('detail', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["REPAIR_QUALITY_RECORD_LIST"], function (state, _ref2) {
  var payload = _ref2.payload;
  var data = payload.data,
      count = payload.count,
      errorMsg = payload.errorMsg;

  if (errorMsg) {
    return state.set('data', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
  }

  return state.set('data', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(data)).set('count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(count)).set('page', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(1));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["LOAD_REPAIR_QUALITY_RECORD_LIST"], function (state, _ref3) {
  var payload = _ref3.payload;
  var data = payload.data,
      count = payload.count,
      page = payload.page;
  var datas = state.get('data').concat(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(data));
  return state.set('data', datas).set('count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(count)).set('page', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(page));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialReturn));
/* harmony default export */ __webpack_exports__["default"] = (orderDetailReturn);

/***/ }),

/***/ "./src/reducers/myAccount/repair/standby.ts":
/*!**************************************************!*\
  !*** ./src/reducers/myAccount/repair/standby.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialReturn = {
  data: [],
  page: 1,
  page_size: 5,
  record: {}
};
var orderDetailReturn = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["REPAIR_STANDBY_DETAIL"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('detail', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["REPAIR_STANDBY_RECORD_LIST"], function (state, _ref2) {
  var payload = _ref2.payload;
  var data = payload.data,
      count = payload.count,
      errorMsg = payload.errorMsg;

  if (errorMsg) {
    return state.set('data', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
  }

  return state.set('data', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(data)).set('count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(count)).set('page', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(1));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["LOAD_REPAIR_STANDBY_RECORD_LIST"], function (state, _ref3) {
  var payload = _ref3.payload;
  var data = payload.data,
      count = payload.count,
      page = payload.page;
  var datas = state.get('data').concat(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(data));
  return state.set('data', datas).set('count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(count)).set('page', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(page));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialReturn));
/* harmony default export */ __webpack_exports__["default"] = (orderDetailReturn);

/***/ }),

/***/ "./src/reducers/myAccount/return/apply/express.ts":
/*!********************************************************!*\
  !*** ./src/reducers/myAccount/return/apply/express.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialInfo = {
  expressTime: {},
  expressType: '',
  detail: {},
  expressNo: '',
  expressAddress: {},
  logistics: {} // 物流详情

};
var expressInfoReturn = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_RETURN_APPLY_DETAIL"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('detail', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["CHANGE_EXPRESS_TIME"], function (state, _ref2) {
  var payload = _ref2.payload;
  var res = payload;
  return state.set('expressTime', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["CHANGE_EXPRESS_TYPE"], function (state, _ref3) {
  var payload = _ref3.payload;
  var res = payload;
  return state.set('expressType', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_EXPRESS_NUMBER"], function (state, _ref4) {
  var payload = _ref4.payload;
  var res = payload;
  return state.set('expressNo', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["CHANGE_EXPRESS_ADDRESS"], function (state, _ref5) {
  var payload = _ref5.payload;
  var res = payload;
  return state.set('expressAddress', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_EXPRESS_LOGISTICS"], function (state, _ref6) {
  var payload = _ref6.payload;
  var res = payload;
  return state.set('logistics', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialInfo));
/* harmony default export */ __webpack_exports__["default"] = (expressInfoReturn);

/***/ }),

/***/ "./src/reducers/myAccount/return/apply/store.ts":
/*!******************************************************!*\
  !*** ./src/reducers/myAccount/return/apply/store.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialInfo = {
  detail: {}
};
var expressInfoReturn = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_RETURN_APPLY_DETAIL"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('detail', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialInfo));
/* harmony default export */ __webpack_exports__["default"] = (expressInfoReturn);

/***/ }),

/***/ "./src/reducers/myAccount/return/index.ts":
/*!************************************************!*\
  !*** ./src/reducers/myAccount/return/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apply_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply/express */ "./src/reducers/myAccount/return/apply/express.ts");
/* harmony import */ var _apply_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply/store */ "./src/reducers/myAccount/return/apply/store.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  express: _apply_express__WEBPACK_IMPORTED_MODULE_1__["default"],
  store: _apply_store__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/myAccount/returnPhone/city.ts":
/*!****************************************************!*\
  !*** ./src/reducers/myAccount/returnPhone/city.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_4__);



var _handleActions;




var initial = {
  list: {},
  region: [],
  store: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_4__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["FETCH_RETURN_PHONE_CITY"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(payload.all)).set('hot', Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(payload.hot));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["FETCH_RETURN_PHONE_CITY_REGION"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('region', Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["FETCH_RETURN_PHONE_STORE"], function (state, _ref3) {
  var payload = _ref3.payload;
  payload = payload.data.map(function (d) {
    d.selected = d.store_id === _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(payload.selectedId, 10);
    return d;
  });
  return state.set('store', Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["SELECT_RETURN_PHONE_STORE"], function (state, _ref4) {
  var payload = _ref4.payload;
  var store = state.get('store').map(function (item) {
    return item.set('selected', false);
  });
  return state.set('store', store).updateIn(['store', payload], function (item) {
    return item.set('selected', !item.get('selected'));
  });
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_2__["CLEAR_RETURN_PHONE_STORE_LIST"], function (state) {
  return state.set('store', Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])([]));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(initial)));

/***/ }),

/***/ "./src/reducers/myAccount/returnPhone/index.ts":
/*!*****************************************************!*\
  !*** ./src/reducers/myAccount/returnPhone/index.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city */ "./src/reducers/myAccount/returnPhone/city.ts");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price */ "./src/reducers/myAccount/returnPhone/price.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  price: _price__WEBPACK_IMPORTED_MODULE_2__["default"],
  city: _city__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/myAccount/returnPhone/price.ts":
/*!*****************************************************!*\
  !*** ./src/reducers/myAccount/returnPhone/price.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initial = {
  sku_name: '',
  sku_img: '',
  total_installments_number: 0,
  dt_end_date: '',
  return_price: 0,
  left_day: 0,
  left_hour: 0,
  chosenStore: {},
  end_date: '',
  return_type: '',
  store_info: {},
  express_number: '',
  price_list: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_RETURN_PHONE_PRICE"], function (state, _ref) {
  var payload = _ref.payload;
  if (!payload || !payload.sku_info) return state;
  return state.set('sku_name', payload.sku_info.sku_name).set('sku_img', payload.sku_info.sku_img).set('total_installments_number', payload.trade_info.total_installments_number).set('dt_end_date', payload.trade_info.dt_end_date).set('return_price', payload.return_price.return_price).set('left_day', payload.return_info.left_day).set('left_hour', payload.return_info.left_hour).set('price_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.return_price.price_list)).set('unpaid_plan_amount', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.return_price.unpaid_plan_amount));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_RETURN_PHONE_STORE_BY_ID"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('chosenStore', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_RETURN_PHONE_DETAIL"], function (state, _ref3) {
  var payload = _ref3.payload;
  if (!payload || !payload.sku_info) return state;
  return state.set('sku_name', payload.sku_info.sku_name).set('sku_img', payload.sku_info.sku_img).set('total_installments_number', payload.trade_info.total_installments_number).set('dt_end_date', payload.trade_info.dt_end_date).set('return_price', payload.return_price.return_price).set('left_day', payload.left_time.left_day).set('left_hour', payload.left_time.left_hour).set('end_date', payload.end_date).set('store_info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.store_info)).set('return_type', payload.return_info.return_type).set('express_number', payload.return_info.express_number).set('price_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.return_price.price_list));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial)));

/***/ }),

/***/ "./src/reducers/myAccount/returnflow/detail.ts":
/*!*****************************************************!*\
  !*** ./src/reducers/myAccount/returnflow/detail.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialReturn = {
  return: {},
  results: {},
  cost: {}
};
var orderDetailReturn = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_DETAIL_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('cost', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_ORDER_DETAIL_INFO"], function (state, _ref2) {
  var payload = _ref2.payload;
  var res = payload;
  return state.set('return', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_RESULTS_INFO"], function (state, _ref3) {
  var payload = _ref3.payload;
  var res = payload;
  return state.set('results', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialReturn));
/* harmony default export */ __webpack_exports__["default"] = (orderDetailReturn);

/***/ }),

/***/ "./src/reducers/myAccount/returnflow/index.ts":
/*!****************************************************!*\
  !*** ./src/reducers/myAccount/returnflow/index.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail */ "./src/reducers/myAccount/returnflow/detail.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  detail: _detail__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/myAccount/service/buy-out.ts":
/*!***************************************************!*\
  !*** ./src/reducers/myAccount/service/buy-out.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialBuyOut = {
  index: {},
  result: {}
};
var buyout = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_BUY_OUT_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('index', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.info));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_BUY_OUT_RESULT_INFO"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('result', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.info));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialBuyOut));
/* harmony default export */ __webpack_exports__["default"] = (buyout);

/***/ }),

/***/ "./src/reducers/myAccount/service/cancel.ts":
/*!**************************************************!*\
  !*** ./src/reducers/myAccount/service/cancel.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initial = {
  info: {},
  result: {}
};
var category = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_CANCEL_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var info = payload.info;
  return state.set('info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(info));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_CANCEL_RESULT"], function (state, _ref2) {
  var payload = _ref2.payload;
  var result = payload.result;
  return state.set('result', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(result));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (category);

/***/ }),

/***/ "./src/reducers/myAccount/service/detail.ts":
/*!**************************************************!*\
  !*** ./src/reducers/myAccount/service/detail.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialReturn = {// detail: {},
};
var serviceDetail = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_DETAIL"], function (state, _ref) {
  var payload = _ref.payload;
  var contract_info = payload.contract_info,
      deposit_info = payload.deposit_info,
      button_list = payload.button_list,
      return_machine_list = payload.return_machine_list,
      replacement_list = payload.replacement_list,
      sku_info = payload.sku_info,
      contract_other_list = payload.contract_other_list,
      tips_info = payload.tips_info,
      contract_detail = payload.contract_detail;
  return state.set('contract_info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(contract_info)).set('deposit_info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(deposit_info)).set('button_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(button_list)).set('return_machine_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(return_machine_list)).set('replacement_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(replacement_list)).set('sku_info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(sku_info)).set('contract_other_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(contract_other_list)).set('tips_info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(tips_info)).set('contract_detail', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(contract_detail));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialReturn));
/* harmony default export */ __webpack_exports__["default"] = (serviceDetail);

/***/ }),

/***/ "./src/reducers/myAccount/service/index.ts":
/*!*************************************************!*\
  !*** ./src/reducers/myAccount/service/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buy_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-out */ "./src/reducers/myAccount/service/buy-out.ts");
/* harmony import */ var _cancel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel */ "./src/reducers/myAccount/service/cancel.ts");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail */ "./src/reducers/myAccount/service/detail.ts");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ "./src/reducers/myAccount/service/list.ts");
/* harmony import */ var _order_record__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-record */ "./src/reducers/myAccount/service/order-record.ts");
/* harmony import */ var _privilege__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privilege */ "./src/reducers/myAccount/service/privilege.ts");
/* harmony import */ var _return_plan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./return-plan */ "./src/reducers/myAccount/service/return-plan.ts");








/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  list: _list__WEBPACK_IMPORTED_MODULE_4__["default"],
  cancel: _cancel__WEBPACK_IMPORTED_MODULE_2__["default"],
  detail: _detail__WEBPACK_IMPORTED_MODULE_3__["default"],
  returnPlan: _return_plan__WEBPACK_IMPORTED_MODULE_7__["default"],
  privilege: _privilege__WEBPACK_IMPORTED_MODULE_6__["default"],
  buyOut: _buy_out__WEBPACK_IMPORTED_MODULE_1__["default"],
  orderRecord: _order_record__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/reducers/myAccount/service/list.ts":
/*!************************************************!*\
  !*** ./src/reducers/myAccount/service/list.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initial = {
  list: [],
  page: 1,
  has_more: false
};
var category = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_LIST"], function (state, _ref) {
  var payload = _ref.payload;
  var page = payload.page,
      _payload$info = payload.info,
      list = _payload$info.list,
      has_more = _payload$info.has_more;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(list)).set('has_more', has_more).set('page', page);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_LIST_MORE"], function (state, _ref2) {
  var payload = _ref2.payload;
  var page = payload.page,
      _payload$info2 = payload.info,
      list = _payload$info2.list,
      has_more = _payload$info2.has_more;
  var newList = state.get('list').concat(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(list));
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(newList)).set('has_more', has_more).set('page', page);
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (category);

/***/ }),

/***/ "./src/reducers/myAccount/service/order-record.ts":
/*!********************************************************!*\
  !*** ./src/reducers/myAccount/service/order-record.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialReturn = {
  list: {},
  detail: {
    trade_info: [],
    logistics_info: [],
    coupon_info: [],
    vas_price_info: [],
    rent_info: {},
    first_per_reduce_info: {},
    repay_info: {},
    price_schemeInfo: {},
    advance_rent_info: {}
  }
};
var orderRecord = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_RECORD_LIST"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_RECORD_DETAIL"], function (state, _ref2) {
  var payload = _ref2.payload;
  var res = payload;
  return state.set('detail', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res)).setIn(['detail', 'price_schemeInfo', 'price'], Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res.rent_info.after_rent_price));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialReturn));
/* harmony default export */ __webpack_exports__["default"] = (orderRecord);

/***/ }),

/***/ "./src/reducers/myAccount/service/privilege.ts":
/*!*****************************************************!*\
  !*** ./src/reducers/myAccount/service/privilege.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {};
var privilege = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_PRIVILEGE"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (privilege);

/***/ }),

/***/ "./src/reducers/myAccount/service/return-plan.ts":
/*!*******************************************************!*\
  !*** ./src/reducers/myAccount/service/return-plan.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {
  isPlanInfo: false,
  current: {},
  historyList: []
};
var serviceReturnPlan = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_RETURN_PLAN"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('isPlanInfo', payload.is_plan_info).set('current', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.current_plan_list)).set('historyList', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.history_plan_list));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (serviceReturnPlan);

/***/ }),

/***/ "./src/reducers/myAccount/termsList.ts":
/*!*********************************************!*\
  !*** ./src/reducers/myAccount/termsList.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialReturn = {
  list: []
};
var serviceTermsList = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SERVICE_TERMS_LIST"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CREDIT_LBF_AGREEMENT"], function (state, _ref2) {
  var payload = _ref2.payload;
  var res = payload;
  return state.set('lbfterm', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialReturn));
/* harmony default export */ __webpack_exports__["default"] = (serviceTermsList);

/***/ }),

/***/ "./src/reducers/myAccount/withholding/index.ts":
/*!*****************************************************!*\
  !*** ./src/reducers/myAccount/withholding/index.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/reducers/myAccount/withholding/list.ts");
// import { combineReducers } from 'redux-immutable'

/* harmony default export */ __webpack_exports__["default"] = (_list__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/reducers/myAccount/withholding/list.ts":
/*!****************************************************!*\
  !*** ./src/reducers/myAccount/withholding/list.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {
  list: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_WITHHOLDING_LIST_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial)));

/***/ }),

/***/ "./src/reducers/myTrade/address.ts":
/*!*****************************************!*\
  !*** ./src/reducers/myTrade/address.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var MSG;

(function (MSG) {
  MSG["Loading"] = "\u52A0\u8F7D\u4E2D...";
  MSG["Fail"] = "\u52A0\u8F7D\u5931\u8D25";
  MSG["Null"] = "";
})(MSG || (MSG = {}));

var initial = {
  form: {},
  city: {
    hot: [],
    all: {}
  },
  select: {
    pois: [],
    count: 0,
    msg: MSG.Loading
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_ADDRESS_FORM"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('form', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SAVE_ADDRESS_FORM"], function (state, _ref2) {
  var payload = _ref2.payload;
  var res = payload;
  return state.set('result', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CITY_LIST"], function (state, _ref3) {
  var payload = _ref3.payload;
  var city = state.get('city');
  var newCity = city.set('hot', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.hot_citys)).set('all', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.all_citys));
  return state.set('city', newCity);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SELECT_LIST"], function (state, _ref4) {
  var payload = _ref4.payload;
  var res = payload;
  var oldSelect = state.get('select');

  if (res.regeocode) {
    var select = oldSelect.set('pois', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res.regeocode.pois)).set('msg', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])('')).set('count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res.regeocode.pois.length));
    return state.set('select', select);
  } else {
    return state.set('geocode', payload);
  }
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_SEARCH_LIST"], function (state, _ref5) {
  var payload = _ref5.payload;
  var poiList = payload;
  var oldSelect = state.get('select');
  var pois;
  var msg;
  var count;

  if (poiList === MSG.Fail) {
    pois = [];
    msg = MSG.Fail;
    count = 0;
  } else if (poiList === 'no_data') {
    pois = [];
    msg = MSG.Null;
    count = -1;
  } else {
    pois = poiList.pois;
    msg = '';
    count = poiList.count;
  }

  var select = oldSelect.set('pois', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(pois)).set('msg', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(msg)).set('count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(count));
  return state.set('select', select);
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial)));

/***/ }),

/***/ "./src/reducers/myTrade/assess/index.ts":
/*!**********************************************!*\
  !*** ./src/reducers/myTrade/assess/index.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/reducers/myTrade/assess/list.ts");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result */ "./src/reducers/myTrade/assess/result.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  result: _result__WEBPACK_IMPORTED_MODULE_2__["default"],
  list: _list__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/myTrade/assess/list.ts":
/*!*********************************************!*\
  !*** ./src/reducers/myTrade/assess/list.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var assessListData = {
  credit_title: '',
  credit_desc: '',
  credit_icon: '',
  credit_tips: '',
  submit_text: '',
  submit_status: 0,
  agreement_info: [],
  step_list: [],
  step_bar: []
};
var assessList = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRADE_ASSESS_LIST_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var credit_title = payload.credit_title,
      credit_desc = payload.credit_desc,
      credit_icon = payload.credit_icon,
      credit_tips = payload.credit_tips,
      submit_text = payload.submit_text,
      submit_status = payload.submit_status,
      agreement_info = payload.agreement_info,
      step_list = payload.step_list,
      step_bar = payload.step_bar;
  return state.set('credit_title', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(credit_title)).set('credit_desc', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(credit_desc)).set('credit_icon', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(credit_icon)).set('credit_tips', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(credit_tips)).set('submit_text', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(submit_text)).set('submit_status', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(submit_status)).set('agreement_info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(agreement_info)).set('step_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(step_list)).set('step_bar', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(step_bar));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(assessListData));
/* harmony default export */ __webpack_exports__["default"] = (assessList);

/***/ }),

/***/ "./src/reducers/myTrade/assess/result.ts":
/*!***********************************************!*\
  !*** ./src/reducers/myTrade/assess/result.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var assessResult = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRADE_ASSESS_RESULT_INFO"], function (_, _ref) {
  var payload = _ref.payload;
  return Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])({}));
/* harmony default export */ __webpack_exports__["default"] = (assessResult);

/***/ }),

/***/ "./src/reducers/myTrade/canton/index.ts":
/*!**********************************************!*\
  !*** ./src/reducers/myTrade/canton/index.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/reducers/myTrade/canton/store.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  store: _store__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/myTrade/canton/store.ts":
/*!**********************************************!*\
  !*** ./src/reducers/myTrade/canton/store.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialReturn = {
  city: {},
  detail: {},
  store_list: []
};
var contonStoreReturn = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CANTON_STORE_CITY"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('city', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CANTON_STORE_DETAIL"], function (state, _ref2) {
  var payload = _ref2.payload;
  var res = payload;
  return state.set('detail', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CANTON_STORE_SELECT"], function (state, _ref3) {
  var payload = _ref3.payload;
  var store_list = payload.store_list,
      page_index = payload.page_index,
      total_count = payload.total_count,
      errorMsg = payload.errorMsg;

  if (errorMsg) {
    return state.set('store_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
  } else {
    return state.set('store_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(store_list)).set('page_index', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(page_index)).set('total_count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(total_count));
  }
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["LOAD_FETCH_CANTON_STORE_SELECT"], function (state, _ref4) {
  var payload = _ref4.payload;
  var store_list = payload.store_list,
      page_index = payload.page_index,
      total_count = payload.total_count;
  var storelists = state.get('store_list').concat(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(store_list));
  return state.set('store_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(storelists)).set('page_index', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(page_index)).set('total_count', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(total_count));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SELECT_CANTON_STORE_ITEM"], function (state, _ref5) {
  var payload = _ref5.payload;
  var newList = state.get('store_list').toJS();
  newList.map(function (item) {
    item.selected = item.store_code === payload && !item.selected;
    return item;
  });
  return state.set('store_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(newList));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialReturn));
/* harmony default export */ __webpack_exports__["default"] = (contonStoreReturn);

/***/ }),

/***/ "./src/reducers/myTrade/creditCard/form.ts":
/*!*************************************************!*\
  !*** ./src/reducers/myTrade/creditCard/form.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initial = {
  realName: '',
  idNo: '',
  SMS: {},
  cup: {},
  query: {},
  cookie: {// sms_code: '',
    // name:  '',
    // card_id:  '',
    // acc_no: '',
    // phone: '',
    // cvn: '',
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CREDIT_PAY_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var realName = payload.realName,
      idNo = payload.idNo;
  return state.set('realName', realName).set('idNo', idNo);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CREDIT_SMS"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('SMS', payload);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CREDIT_CREATE_CUP"], function (state, _ref3) {
  var payload = _ref3.payload;
  return state.set('cup', payload);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CREDIT_CREATE_QUERY"], function (state, _ref4) {
  var payload = _ref4.payload;
  return state.set('query', payload);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CREDIT_COOKIE"], function (state, _ref5) {
  var payload = _ref5.payload;
  return state.set('cookie', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial)));

/***/ }),

/***/ "./src/reducers/myTrade/creditCard/index.ts":
/*!**************************************************!*\
  !*** ./src/reducers/myTrade/creditCard/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/reducers/myTrade/creditCard/form.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  form: _form__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/myTrade/exchange/confirm.ts":
/*!**************************************************!*\
  !*** ./src/reducers/myTrade/exchange/confirm.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {};
var confirmReturn = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDER_REPLACE_CHECK_CONDITION"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('confirm', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (confirmReturn);

/***/ }),

/***/ "./src/reducers/myTrade/exchange/entrance.ts":
/*!***************************************************!*\
  !*** ./src/reducers/myTrade/exchange/entrance.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {
  info: [],
  data: {}
};
var entrance = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_EXCHANGE_INDEX_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var trade_info = payload.trade_info;
  return state.set('data', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload)).set('info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(trade_info));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (entrance);

/***/ }),

/***/ "./src/reducers/myTrade/exchange/index.ts":
/*!************************************************!*\
  !*** ./src/reducers/myTrade/exchange/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm */ "./src/reducers/myTrade/exchange/confirm.ts");
/* harmony import */ var _entrance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entrance */ "./src/reducers/myTrade/exchange/entrance.ts");
/* harmony import */ var _return__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./return */ "./src/reducers/myTrade/exchange/return.ts");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  entrance: _entrance__WEBPACK_IMPORTED_MODULE_2__["default"],
  exchangeReturn: _return__WEBPACK_IMPORTED_MODULE_3__["default"],
  confirmReturn: _confirm__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/myTrade/exchange/return.ts":
/*!*************************************************!*\
  !*** ./src/reducers/myTrade/exchange/return.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initial = {
  return: {},
  ceateTrade: {},
  store: {},
  tab: 0
};
var exchangeReturn = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_EXCHANGE_RETURN_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('return', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SAVE_EXCHANGE_RETURN_INFO"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('ceateTrade', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_EXCHANGE_STORE_INFO"], function (state, _ref3) {
  var payload = _ref3.payload;
  return state.set('store', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SAVE_EXCHANGE_TAB_SHOW"], function (state, _ref4) {
  var payload = _ref4.payload;
  return state.set('tab', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (exchangeReturn);

/***/ }),

/***/ "./src/reducers/myTrade/extraInfo/index.ts":
/*!*************************************************!*\
  !*** ./src/reducers/myTrade/extraInfo/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/reducers/myTrade/extraInfo/list.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  list: _list__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/myTrade/extraInfo/list.ts":
/*!************************************************!*\
  !*** ./src/reducers/myTrade/extraInfo/list.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialExtraInfo = {
  is_need: '',
  step_list: []
};
var extraInfo = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_EXTRAINFO_LIST"], function (state, _ref) {
  var payload = _ref.payload;
  var is_need = payload.is_need,
      step_list = payload.step_list;
  return state.set('is_need', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(is_need)).set('step_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(step_list));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialExtraInfo));
/* harmony default export */ __webpack_exports__["default"] = (extraInfo);

/***/ }),

/***/ "./src/reducers/myTrade/fundsUnion/cards.ts":
/*!**************************************************!*\
  !*** ./src/reducers/myTrade/fundsUnion/cards.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {
  list: [{
    name: '',
    bankName: '',
    bankCardNo: '',
    identi_card: '',
    cardNo: ''
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_UNION_PAY_LIST"], function (state, _ref) {
  var payload = _ref.payload;
  var list = payload.list;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(list));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial)));

/***/ }),

/***/ "./src/reducers/myTrade/fundsUnion/checkCard.ts":
/*!******************************************************!*\
  !*** ./src/reducers/myTrade/fundsUnion/checkCard.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initial = {
  billNo: '',
  form: {
    realName: '',
    idNo: '',
    hasSubmit: false // 是否提交成功

  }
};
var confirmInfo = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_UNION_PAY_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var form = payload.form;
  return state.setIn(['form', 'realName'], form.realName).setIn(['form', 'idNo'], form.idNo);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SAVE_FORM_FILEDS"], function (state, _ref2) {
  var payload = _ref2.payload;
  var form = payload.form;
  return state.setIn(['form', 'realName'], form.realName).setIn(['form', 'idNo'], form.idNo).setIn(['form', 'cardNo'], form.cardNo).setIn(['form', 'tel'], form.tel).setIn(['form', 'hasSubmit'], !!form.hasSubmit);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_OPT_BILL_NO"], function (state, _ref3) {
  var payload = _ref3.payload;
  return state.set('billNo', payload);
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (confirmInfo);

/***/ }),

/***/ "./src/reducers/myTrade/fundsUnion/confirm.ts":
/*!****************************************************!*\
  !*** ./src/reducers/myTrade/fundsUnion/confirm.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {};
var confirmInfo = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_AUTHORIZE_RESULT"], function (_, _ref) {
  var payload = _ref.payload;
  return Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (confirmInfo);

/***/ }),

/***/ "./src/reducers/myTrade/fundsUnion/index.ts":
/*!**************************************************!*\
  !*** ./src/reducers/myTrade/fundsUnion/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ "./src/reducers/myTrade/fundsUnion/cards.ts");
/* harmony import */ var _checkCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkCard */ "./src/reducers/myTrade/fundsUnion/checkCard.ts");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm */ "./src/reducers/myTrade/fundsUnion/confirm.ts");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  cards: _cards__WEBPACK_IMPORTED_MODULE_1__["default"],
  confirm: _confirm__WEBPACK_IMPORTED_MODULE_3__["default"],
  checkCard: _checkCard__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/myTrade/hunanMobile/index.ts":
/*!***************************************************!*\
  !*** ./src/reducers/myTrade/hunanMobile/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialData = {
  phone: ''
};
var selectNewPhoneNumber = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["SELECT_NEW_PHONE_NUMBER"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('phone', payload);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialData));
/* harmony default export */ __webpack_exports__["default"] = (selectNewPhoneNumber);

/***/ }),

/***/ "./src/reducers/myTrade/index.ts":
/*!***************************************!*\
  !*** ./src/reducers/myTrade/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address */ "./src/reducers/myTrade/address.ts");
/* harmony import */ var _assess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assess */ "./src/reducers/myTrade/assess/index.ts");
/* harmony import */ var _canton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canton */ "./src/reducers/myTrade/canton/index.ts");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creditCard */ "./src/reducers/myTrade/creditCard/index.ts");
/* harmony import */ var _exchange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exchange */ "./src/reducers/myTrade/exchange/index.ts");
/* harmony import */ var _extraInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extraInfo */ "./src/reducers/myTrade/extraInfo/index.ts");
/* harmony import */ var _fundsUnion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fundsUnion */ "./src/reducers/myTrade/fundsUnion/index.ts");
/* harmony import */ var _hunanMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hunanMobile */ "./src/reducers/myTrade/hunanMobile/index.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order */ "./src/reducers/myTrade/order/index.ts");
/* harmony import */ var _withholding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withholding */ "./src/reducers/myTrade/withholding/index.ts");











/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  canton: _canton__WEBPACK_IMPORTED_MODULE_3__["default"],
  order: _order__WEBPACK_IMPORTED_MODULE_9__["default"],
  assess: _assess__WEBPACK_IMPORTED_MODULE_2__["default"],
  address: _address__WEBPACK_IMPORTED_MODULE_1__["default"],
  hunanMobile: _hunanMobile__WEBPACK_IMPORTED_MODULE_8__["default"],
  fundsUnion: _fundsUnion__WEBPACK_IMPORTED_MODULE_7__["default"],
  exchange: _exchange__WEBPACK_IMPORTED_MODULE_5__["default"],
  withholding: _withholding__WEBPACK_IMPORTED_MODULE_10__["default"],
  creditCard: _creditCard__WEBPACK_IMPORTED_MODULE_4__["default"],
  extraInfo: _extraInfo__WEBPACK_IMPORTED_MODULE_6__["default"]
}));

/***/ }),

/***/ "./src/reducers/myTrade/order/confirm.ts":
/*!***********************************************!*\
  !*** ./src/reducers/myTrade/order/confirm.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initial = {
  info: {}
};
var orderConfirm = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRADE_ORDER_CONFIRM_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('info', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.info));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDER_REPLACE_STATUS"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('exchange', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_ORDER_REPLACE_REMOTE"], function (state, _ref3) {
  var payload = _ref3.payload;
  return state.set('remote', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (orderConfirm);

/***/ }),

/***/ "./src/reducers/myTrade/order/index.ts":
/*!*********************************************!*\
  !*** ./src/reducers/myTrade/order/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm */ "./src/reducers/myTrade/order/confirm.ts");
/* harmony import */ var _pay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pay */ "./src/reducers/myTrade/order/pay.ts");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result */ "./src/reducers/myTrade/order/result.ts");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  confirm: _confirm__WEBPACK_IMPORTED_MODULE_1__["default"],
  pay: _pay__WEBPACK_IMPORTED_MODULE_2__["default"],
  result: _result__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/reducers/myTrade/order/pay.ts":
/*!*******************************************!*\
  !*** ./src/reducers/myTrade/order/pay.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {};
var orderPay = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRADE_ORDER_PAY_INFO"], function (_, _ref) {
  var payload = _ref.payload;
  return Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.info);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial));
/* harmony default export */ __webpack_exports__["default"] = (orderPay);

/***/ }),

/***/ "./src/reducers/myTrade/order/result.ts":
/*!**********************************************!*\
  !*** ./src/reducers/myTrade/order/result.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var orderResult = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRADE_ORDER_RESULT_INFO"], function (_, _ref) {
  var payload = _ref.payload;
  return Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.info);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])({}));
/* harmony default export */ __webpack_exports__["default"] = (orderResult);

/***/ }),

/***/ "./src/reducers/myTrade/withholding/index.ts":
/*!***************************************************!*\
  !*** ./src/reducers/myTrade/withholding/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selectType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectType */ "./src/reducers/myTrade/withholding/selectType.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  selectType: _selectType__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/myTrade/withholding/selectType.ts":
/*!********************************************************!*\
  !*** ./src/reducers/myTrade/withholding/selectType.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initial = {
  list: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_WITHHOLDING_SELECTABLE_LIST"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initial)));

/***/ }),

/***/ "./src/reducers/product/brands.ts":
/*!****************************************!*\
  !*** ./src/reducers/product/brands.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialBrands = {
  headTop: {},
  products: []
};
var brands = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_BRANDS_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var headTop = payload.headTop,
      products = payload.products;
  return state.set('headTop', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(headTop)).set('products', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(products));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialBrands));
/* harmony default export */ __webpack_exports__["default"] = (brands);

/***/ }),

/***/ "./src/reducers/product/category.ts":
/*!******************************************!*\
  !*** ./src/reducers/product/category.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialCategory = {
  selectedBrandId: 0,
  brand: {},
  tag_list: [],
  brand_list: [],
  category_ad: {},
  product_list: []
};
var category = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_CATEGORY_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var brand = payload.brand,
      tag_list = payload.tag_list,
      brand_list = payload.brand_list,
      category_ad = payload.category_ad,
      product_list = payload.product_list;
  return state.set('brand', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(brand)).set('tag_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(tag_list)).set('brand_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(brand_list)).set('category_ad', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(category_ad)).set('product_list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(product_list));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PRODUCT_CATEGROY_BRAND_ID"], function (state, _ref2) {
  var payload = _ref2.payload;
  return state.set('selectedBrandId', payload.selectedBrandId);
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialCategory));
/* harmony default export */ __webpack_exports__["default"] = (category);

/***/ }),

/***/ "./src/reducers/product/comments.ts":
/*!******************************************!*\
  !*** ./src/reducers/product/comments.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialComments = {
  showModal: false,
  modalData: {},
  list: [],
  total: 0,
  imageCount: 0
};
var comments = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["OPEN_PRODUCT_COMMENT_MODAL"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('showModal', true).set('modalData', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(payload.data)).set('index', payload.index);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["CLOSE_PRODUCT_COMMENT_MODAL"], function (state) {
  return state.set('showModal', false).set('modalData', null).set('index', 0);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCT_COMMENTS"], function (state, _ref2) {
  var payload = _ref2.payload;
  var _payload$data = payload.data,
      total = _payload$data.total,
      list = _payload$data.list,
      have_img_count = _payload$data.have_img_count,
      query = payload.query;
  return state.set('list', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(list)).set('total', total).set('imageCount', have_img_count).set('query', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(query));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["LOAD_MORE_PRODUCT_COMMENTS"], function (state, _ref3) {
  var payload = _ref3.payload;
  var _payload$data2 = payload.data,
      total = _payload$data2.total,
      list = _payload$data2.list,
      have_img_count = _payload$data2.have_img_count,
      query = payload.query;
  var newList = state.get('list').concat(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(list));
  return state.set('list', newList).set('total', total).set('imageCount', have_img_count).set('query', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(query));
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialComments));
/* harmony default export */ __webpack_exports__["default"] = (comments);

/***/ }),

/***/ "./src/reducers/product/detail.ts":
/*!****************************************!*\
  !*** ./src/reducers/product/detail.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_7__);






var _handleActions;




var initialDetail = {
  idActivity: '',
  baseInfo: {
    imageList: [],
    rentPlan: {},
    discountList: [],
    promotionList: [],
    servicePromise: {},
    rentProcess: {},
    commonQuestionList: [],
    productParam: {},
    detailImageList: [],
    newOrderInfo: [],
    info: {}
  },
  property: {
    popupModalId: 0,
    // 0： sku选择；1：服务介绍；
    curRent: null,
    // 当前选中的合约
    hasStock: true,
    // 当前合约的库存状态
    propertyList: [],
    // 属性列表
    checkList: {},
    // 合法属性列表
    rentList: {},
    // 合约列表
    stockDic: {},
    // 库存 dic
    info: {},
    // 其他展示信息
    selectedList: {} // 已选中的dic： { pid: id }

  }
};
var detail = Object(redux_actions__WEBPACK_IMPORTED_MODULE_7__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_5__["GET_PRODUCT_DETAIL_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.set('baseInfo', Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(payload));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_5__["CHANGE_POPUP_MODAL_ID"], function (state, _ref2) {
  var id = _ref2.payload.id;
  return state.setIn(['property', 'popupModalId'], id);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_5__["GET_PRODUCT_PROPERTY"], function (state, _ref3) {
  var payload = _ref3.payload;
  var _payload$property = payload.property,
      propertyList = _payload$property.propertyList,
      checkList = _payload$property.checkList,
      rentList = _payload$property.rentList,
      stockList = _payload$property.stockList,
      vasList = _payload$property.vasList,
      info = _payload$property.info,
      idActivity = payload.idActivity; // 已选中的dic： { pid: id }

  var selectedList = {};
  var stockDic = {};
  stockList.forEach(function (item) {
    stockDic[item.sku_id] = item.quantity;
  }); // 默认选中0元的服务

  vasList.forEach(function (item) {
    item.selected = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(item.price, 10) === 0;
  });
  return state.set('idActivity', idActivity).setIn(['property', 'curRent'], null).setIn(['property', 'hasStock'], true).setIn(['property', 'selectedList'], Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(selectedList)).setIn(['property', 'propertyList'], Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(propertyList)).setIn(['property', 'checkList'], Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(checkList)).setIn(['property', 'vasList'], Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(vasList)).setIn(['property', 'rentList'], Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(rentList)).setIn(['property', 'stockDic'], Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(stockDic)).setIn(['property', 'info'], Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(info));
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_5__["CHANGE_PROPERTY_ITEM"], function (state, _ref4) {
  var _ref4$payload = _ref4.payload,
      pid = _ref4$payload.pid,
      id = _ref4$payload.id,
      selected = _ref4$payload.selected;
  var selectedList = state.getIn(['property', 'selectedList']); // 新的选择列表

  var newSelectedList = selected ? selectedList.delete(pid) : selectedList.set(pid, id); // 需要改变的属性字典

  var diffPatch = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pid, id);

  var newPropertyList = modifyPropertyList(state, newSelectedList, diffPatch);

  var _modifyCurRentAndHasS = modifyCurRentAndHasStock(state, newSelectedList),
      curRent = _modifyCurRentAndHasS.curRent,
      hasStock = _modifyCurRentAndHasS.hasStock,
      selectedListKey = _modifyCurRentAndHasS.selectedListKey;

  return state.setIn(['property', 'propertyList'], newPropertyList).setIn(['property', 'selectedList'], newSelectedList).setIn(['property', 'selectedListKey'], selectedListKey).setIn(['property', 'curRent'], curRent).setIn(['property', 'hasStock'], hasStock);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_5__["CHANGE_PROPERTY_ITEM_DEFAULT_SELECTED"], function (state, _ref5) {
  var selectedList = _ref5.payload.selectedList;
  // 新的选择列表
  var newSelectedList = Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])({}); // 需要改变的属性字典

  var diffPatch = {};
  var selectedListArr = selectedList.split(';');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(selectedListArr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var keyValue = _step.value;

      var _keyValue$split = keyValue.split(':'),
          _keyValue$split2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_keyValue$split, 2),
          pid = _keyValue$split2[0],
          id = _keyValue$split2[1];

      newSelectedList = newSelectedList.set(+pid, +id);
      diffPatch[+pid] = +id;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var newPropertyList = modifyPropertyList(state, newSelectedList, diffPatch);

  var _modifyCurRentAndHasS2 = modifyCurRentAndHasStock(state, newSelectedList),
      curRent = _modifyCurRentAndHasS2.curRent,
      hasStock = _modifyCurRentAndHasS2.hasStock;

  return state.setIn(['property', 'propertyList'], newPropertyList).setIn(['property', 'selectedList'], newSelectedList).setIn(['property', 'curRent'], curRent).setIn(['property', 'hasStock'], hasStock);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_5__["CHANGE_VAS_LIST_SELECTED"], function (state, _ref6) {
  var index = _ref6.payload.index;
  return state.updateIn(['property', 'vasList', index], function (item) {
    var selected = item.get('selected') || false;
    return item.set('selected', !selected);
  });
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(initialDetail));
/* modify 数据处理方法 */
// 根据新的diffPatch 生成新的propertyList 并对新的selectedList做检测

function modifyPropertyList(state, newSelectedList, diffPatch) {
  // 所有合法的合约列表
  var checkList = state.getIn(['property', 'checkList']);
  var propertyList = state.getIn(['property', 'propertyList']); // 设置默认selected选中状态及默认disabled禁选状态

  return propertyList.map(function (propertyItem) {
    var valueList = propertyItem.get('value_list'); // 生成新的valueList

    var pid = propertyItem.get('id');
    var newValueList = valueList.map(function (item) {
      // 当点击的属性在当前属性列表内，只修改selected选中状态，不影响当前行的disabled状态
      var id = item.get('id');

      if (diffPatch.hasOwnProperty(pid)) {
        var selected = id === diffPatch[pid] ? !item.get('selected') : false;
        return item.set('selected', selected);
      } // 修改/新增 newSelectedList


      var curSelectedList = newSelectedList.set(pid, id).toJS();
      var canICheck = Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(curSelectedList).map(function (key) {
        return "".concat(key, ":").concat(curSelectedList[key]);
      }));
      var disabled = true;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(checkList), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var ck = _step2.value;

          // 待验证的列表是否为所有合法的合约列表的子集
          if (canICheck.isSubset(ck)) {
            disabled = false;
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return item.set('disabled', disabled);
    });
    return propertyItem.set('value_list', newValueList);
  });
} // 根据新的 selectedList 获取相应合约明细 及 库存状态


function modifyCurRentAndHasStock(state, selectedList) {
  // 根据sku选择列表中的id计算合约列表中相应的key
  var computeSelectedListKey = function computeSelectedListKey(obj) {
    var list = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(obj).sort(function (a, b) {
        return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(a, 10) - _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(b, 10);
      })), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var key = _step3.value;
        list.push("".concat([key], ":").concat(obj[key]));
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return list.join(';');
  }; // 使用计算出的key获取当前相应的合约明细


  var selectedListKey = computeSelectedListKey(selectedList.toJS());
  var curRent = state.getIn(['property', 'rentList', selectedListKey]); // 有库存判断条件：sku没有全选时 || stockDic 里有对应库存的量

  var hasStock = !curRent || state.getIn(['property', 'stockDic', curRent.get('sku_id').toString()]) > 0;
  return {
    curRent: curRent,
    hasStock: hasStock,
    selectedListKey: selectedListKey
  };
}

/* harmony default export */ __webpack_exports__["default"] = (detail);

/***/ }),

/***/ "./src/reducers/product/index.ts":
/*!***************************************!*\
  !*** ./src/reducers/product/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brands */ "./src/reducers/product/brands.ts");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/reducers/product/category.ts");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments */ "./src/reducers/product/comments.ts");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail */ "./src/reducers/product/detail.ts");
/* harmony import */ var _introduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduce */ "./src/reducers/product/introduce.ts");
/* harmony import */ var _video_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-detail */ "./src/reducers/product/video-detail.ts");







/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  category: _category__WEBPACK_IMPORTED_MODULE_2__["default"],
  detail: _detail__WEBPACK_IMPORTED_MODULE_4__["default"],
  introduce: _introduce__WEBPACK_IMPORTED_MODULE_5__["default"],
  videoDetail: _video_detail__WEBPACK_IMPORTED_MODULE_6__["default"],
  comments: _comments__WEBPACK_IMPORTED_MODULE_3__["default"],
  brands: _brands__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/product/introduce.ts":
/*!*******************************************!*\
  !*** ./src/reducers/product/introduce.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialIntroduce = {
  id: 0,
  product_name: '',
  product_introduce_img: ''
};
var introduce = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_PRODUCT_INTRODUCE_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  return state.merge(payload);
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialIntroduce));
/* harmony default export */ __webpack_exports__["default"] = (introduce);

/***/ }),

/***/ "./src/reducers/product/video-detail.ts":
/*!**********************************************!*\
  !*** ./src/reducers/product/video-detail.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialVideoDetail = {
  video: {
    url: '',
    title: '',
    desc: '',
    views: '',
    duration: '',
    pic: ''
  },
  video_product: [],
  recommend_products: []
};
var videoDetail = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["GET_VIDEO_DETAIL_INFO"], function (state, _ref) {
  var payload = _ref.payload;
  var video = payload.video,
      video_product = payload.video_product,
      recommend_products = payload.recommend_products;
  return state.set('video', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(video)).set('video_product', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(video_product)).set('recommend_products', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(recommend_products));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialVideoDetail));
/* harmony default export */ __webpack_exports__["default"] = (videoDetail);

/***/ }),

/***/ "./src/reducers/server-app.ts":
/*!************************************!*\
  !*** ./src/reducers/server-app.ts ***!
  \************************************/
/*! exports provided: preloadedServerApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preloadedServerApp", function() { return preloadedServerApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_createStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/createStore */ "./src/store/createStore.ts");
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/cookies */ "./src/utils/cookies.ts");
/* harmony import */ var _server_utils_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../server/utils/tools */ "./server/utils/tools.ts");







var preloadedServerApp = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])({
  tabBar: {
    hideHome: false,
    linkToDic: {
      home: '/',
      product: '/product/category',
      myCenter: '/account/center'
    }
  },
  ua: {},
  utm: {},
  auth: {},
  headers: {},
  headers2: {
    userToken: '',
    userIdV2: ''
  }
});
var serverApp = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["INIT_TABBAR"], function (state) {
  // tslint:disable-next-line
  if (typeof window !== 'undefined') {
    var ua = navigator.userAgent;
    var channelId = +(utils_cookies__WEBPACK_IMPORTED_MODULE_5__["default"].get('channelId') || '0');
    var userId = utils_cookies__WEBPACK_IMPORTED_MODULE_5__["default"].get('user_id_v2');
    return state.set('ua', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(Object(_server_utils_tools__WEBPACK_IMPORTED_MODULE_6__["getUA"])(ua, channelId))).set('utm', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(Object(store_createStore__WEBPACK_IMPORTED_MODULE_4__["getUtm"])(channelId))).set('headers', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(Object(store_createStore__WEBPACK_IMPORTED_MODULE_4__["getBbfHeaders"])(document.cookie, ua))).set('headers2', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(Object(store_createStore__WEBPACK_IMPORTED_MODULE_4__["getBfaHeaders"])())).set('headers3', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(Object(store_createStore__WEBPACK_IMPORTED_MODULE_4__["getQsyHeaders"])())).set('auth', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(Object(store_createStore__WEBPACK_IMPORTED_MODULE_4__["getAuth"])(userId))).set('tabBar', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(Object(store_createStore__WEBPACK_IMPORTED_MODULE_4__["getTabBar"])(channelId)));
  }

  return state;
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(preloadedServerApp));
/* harmony default export */ __webpack_exports__["default"] = (serverApp);

/***/ }),

/***/ "./src/reducers/site/appdownload.ts":
/*!******************************************!*\
  !*** ./src/reducers/site/appdownload.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialAppdownload = {
  appDownloadUrl: {
    android: '',
    ios: ''
  },
  hot: [{
    id: 130,
    title: '三星Galaxy S9+',
    assurance: 2751,
    price: 329,
    imgUrl: 'https://img2.xianghuanji.com/image/product/4471a3b7fd9880f00f161d1d0baa1bbd9f88a1cb.png@264w_264h_1e_1c.png',
    tag: 2
  }, {
    id: 138,
    title: 'vivo X21',
    assurance: 887,
    price: 164,
    imgUrl: 'https://img2.xianghuanji.com/image/product/2fd55fffbb89dbf361cc5a42b8b2efeb7fdb0d92.png@264w_264h_1e_1c.png',
    tag: 2
  }, {
    id: 139,
    title: 'OPPO R15',
    assurance: 1025,
    price: 158,
    imgUrl: 'https://img2.xianghuanji.com/image/product/011ac4c2466f4b26a0152276fd6e0faa.png@264w_264h_1e_1c.png',
    tag: 2
  }],
  pagetitle: ''
};
var appdownload = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_APPDOWNLOAD_LIST"], function (state, _ref) {
  var payload = _ref.payload;
  var appDownloadUrl = payload.appDownloadUrl,
      hot = payload.hot,
      pagetitle = payload.pagetitle;
  return state.set('appDownloadUrl', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(appDownloadUrl)).set('hot', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(hot)).set('pagetitle', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(pagetitle));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialAppdownload));
/* harmony default export */ __webpack_exports__["default"] = (appdownload);

/***/ }),

/***/ "./src/reducers/site/appdownloadproceed.ts":
/*!*************************************************!*\
  !*** ./src/reducers/site/appdownloadproceed.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var initialAppdownload = {
  appDownloadUrl: {
    android: '',
    ios: ''
  },
  pagetitle: ''
};
var appdownloadproceed = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_APPDOWNLOAD_PROCEED"], function (state, _ref) {
  var payload = _ref.payload;
  var appDownloadUrl = payload.appDownloadUrl;
  return state.set('appDownloadUrl', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(appDownloadUrl));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialAppdownload));
/* harmony default export */ __webpack_exports__["default"] = (appdownloadproceed);

/***/ }),

/***/ "./src/reducers/site/index.ts":
/*!************************************!*\
  !*** ./src/reducers/site/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appdownload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appdownload */ "./src/reducers/site/appdownload.ts");
/* harmony import */ var _appdownloadproceed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appdownloadproceed */ "./src/reducers/site/appdownloadproceed.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  appdownload: _appdownload__WEBPACK_IMPORTED_MODULE_1__["default"],
  appdownloadproceed: _appdownloadproceed__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/terms/agreement.ts":
/*!*****************************************!*\
  !*** ./src/reducers/terms/agreement.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);




var agreementResult = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_TERMS_AGREEMENT"], function (state, _ref) {
  var payload = _ref.payload;
  var res = payload;
  return state.set('agreement', Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(res));
}), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])({}));
/* harmony default export */ __webpack_exports__["default"] = (agreementResult);

/***/ }),

/***/ "./src/reducers/terms/index.ts":
/*!*************************************!*\
  !*** ./src/reducers/terms/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _agreement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agreement */ "./src/reducers/terms/agreement.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  agreement: _agreement__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/trade/form.ts":
/*!************************************!*\
  !*** ./src/reducers/trade/form.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constant/index */ "./src/constant/index.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);


var _handleActions;




var initialForm = {
  info: {
    user_name: '',
    user_idcard: '',
    user_phone: '',
    idcard_bare_img: '',
    idcard_emblem_img: '',
    idcard_human_img: '',
    service_providers: 1,
    editable: true,
    agreed: false
  }
};
var form = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])((_handleActions = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["FETCH_CHINA_UNICOM_USER_DATA"], function (state, _ref) {
  var payload = _ref.payload;
  var user_name = payload.user_name,
      user_idcard = payload.user_idcard,
      user_phone = payload.user_phone,
      idcard_bare_img = payload.idcard_bare_img,
      idcard_emblem_img = payload.idcard_emblem_img,
      idcard_human_img = payload.idcard_human_img,
      trade_no = payload.trade_no,
      service_providers = payload.service_providers,
      editable = payload.editable;
  var info = state.get('info');
  var newInfo;

  if (editable) {
    newInfo = info.set('trade_no', trade_no).set('service_providers', service_providers).set('agreed', false);
  } else {
    newInfo = info.set('user_name', user_name).set('user_idcard', user_idcard).set('user_phone', user_phone).set('idcard_bare_img', idcard_bare_img).set('idcard_emblem_img', idcard_emblem_img).set('idcard_human_img', idcard_human_img).set('trade_no', trade_no).set('service_providers', service_providers).set('editable', editable).set('agreed', true);
  }

  return state.set('info', newInfo);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["SAVE_TRADE_INFO_WHEN_UNMOUNT"], function (state, _ref2) {
  var payload = _ref2.payload;
  var info = state.get('info');
  var user_name = payload.user_name,
      user_phone = payload.user_phone,
      user_idcard = payload.user_idcard,
      idcard_human_img = payload.idcard_human_img,
      idcard_emblem_img = payload.idcard_emblem_img,
      idcard_bare_img = payload.idcard_bare_img,
      agreed = payload.agreed;
  var newInfo = info.set('user_name', user_name).set('user_phone', user_phone).set('user_idcard', user_idcard).set('idcard_human_img', idcard_human_img).set('idcard_emblem_img', idcard_emblem_img).set('idcard_bare_img', idcard_bare_img).set('agreed', agreed);
  return state.set('info', newInfo);
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_handleActions, constant_index__WEBPACK_IMPORTED_MODULE_1__["CLEAR_TRADE_INFO_AFTER_SUBMITTED"], function (state) {
  return state.set('info', initialForm.info);
}), _handleActions), Object(immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"])(initialForm));
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/reducers/trade/index.ts":
/*!*************************************!*\
  !*** ./src/reducers/trade/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/reducers/trade/form.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  form: _form__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/store/createStore.ts":
/*!**********************************!*\
  !*** ./src/store/createStore.ts ***!
  \**********************************/
/*! exports provided: getUtm, getBbfHeaders, getBfaHeaders, getQsyHeaders, getTabBar, getAuth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUtm", function() { return getUtm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBbfHeaders", function() { return getBbfHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBfaHeaders", function() { return getBfaHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQsyHeaders", function() { return getQsyHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabBar", function() { return getTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/config */ "./src/utils/config.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/cookies */ "./src/utils/cookies.ts");
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/tools */ "./src/utils/tools.ts");
/* harmony import */ var _server_utils_crypto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../server/utils/crypto */ "./server/utils/crypto.ts");
/* harmony import */ var _server_utils_resource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../server/utils/resource */ "./server/utils/resource.ts");
/* harmony import */ var _server_utils_tools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../server/utils/tools */ "./server/utils/tools.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.ts");
/* harmony import */ var _reducers_server_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/server-app */ "./src/reducers/server-app.ts");















var EASEU_TEST_HOST = 'test8.easeua.t.xianghuanji.com';
var homes = {
  29: '/?utm_source=cmblife'
};
var products = {
  23: '/product/samsung/category',
  25: '/product/samsung/category',
  28: '/product/samsung/category',
  27: '/product/aihuishou/category'
};
var myCenters = {
  9: '/myaccount/center',
  10: '/myaccount/center',
  23: '/account/samsung/center',
  25: '/account/samsung/center',
  28: '/account/samsung/center'
};
var brandMap = {
  40: '和租机',
  47: '享换机'
};
function getUtm(channelId, req) {
  return {
    brand: brandMap[channelId] || '享换机',
    hideOwnBrand: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(brandMap).map(function (v) {
      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(v, 10);
    }).includes(channelId),
    channelId: channelId,
    isAnlaiye: channelId === 4,
    isHuabei: channelId === 9,
    isZhima: channelId === 10,
    isAhs: channelId === 16,
    isFlytea: channelId === 17,
    isSamsung: channelId === 23,
    isSamsungWx: channelId === 25,
    isSamsungzs: channelId === 28,
    isCmblife: channelId === 29,
    isChangyou: channelId === 35,
    isSichuanYiDong: channelId === 40,
    isQsy: channelId === 41,
    isWacai: channelId === 42,
    isWeixinNoCid: req ? Object(utils_tools__WEBPACK_IMPORTED_MODULE_9__["isWeixinNoCid"])(req) : false,
    // 微信渠道没有channelID，此处暂时特殊处理
    isDxsh: channelId === 44,
    // isNewTrade: [9, 10, 16, 23, 24, 27, 28, 30, 35, 38, 42, 43, 44, 45, 47].includes(channelId), // 是否跳转到新下单流程
    isNewTrade: [9, 10, 49].includes(channelId),
    // 是否跳转到新下单流程
    isHnyd: channelId === 47,
    isOpenAlipay: [16, 35, 45, 47].includes(channelId),
    // 是否允许浏览器唤醒支付宝支付，跳转到老下单流程
    isOpenAlipayNew: [49].includes(channelId) // 是否允许浏览器唤醒支付宝支付,并跳转到新下单流程

  };
}
function getBbfHeaders(cookies, userAgent) {
  return {
    cookie: cookies || '',
    'user-agent': userAgent || ''
  };
}
function getBfaHeaders() {
  return {
    userToken: decodeURIComponent(utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get('userToken') || ''),
    userIdV2: decodeURIComponent(utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get('user_id_v2') || ''),
    channelId: +(utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get('channelId') || '0'),
    platform: Object(_server_utils_tools__WEBPACK_IMPORTED_MODULE_12__["getPlatform"])(navigator.userAgent),
    utmSource: utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get('utm_source') || '',
    utmMedium: utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get('utm_medium') || '',
    utmCampaign: utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get('utm_campaign') || ''
  };
}
function getQsyHeaders(req) {
  // 轻松用用户
  if (req) {
    var _hostMd = _utils_config__WEBPACK_IMPORTED_MODULE_7__["ENV"] === 'dev' ? Object(_server_utils_crypto__WEBPACK_IMPORTED_MODULE_10__["md5"])(EASEU_TEST_HOST) : Object(_server_utils_crypto__WEBPACK_IMPORTED_MODULE_10__["md5"])(req.headers.host);

    var _easeuUserId = req.cookies["user_id_".concat(_hostMd)];
    return {
      platform: 'alipay',
      userToken: _easeuUserId || '',
      channelId: req.cookies["channel_id_".concat(_hostMd)] || ''
    };
  }

  var hostMd5 = _utils_config__WEBPACK_IMPORTED_MODULE_7__["ENV"] === 'dev' ? Object(_server_utils_crypto__WEBPACK_IMPORTED_MODULE_10__["md5"])(EASEU_TEST_HOST) : Object(_server_utils_crypto__WEBPACK_IMPORTED_MODULE_10__["md5"])(location.host);
  var easeuUserId = utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get("user_id_".concat(hostMd5)) || '';
  return {
    platform: 'alipay',
    userToken: easeuUserId || '',
    channelId: utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get("channel_id_".concat(hostMd5)) || ''
  };
}
function getTabBar(channelId) {
  return {
    home: {
      hide: [23, 25, 27, 28].includes(channelId),
      link: homes[channelId] || '/'
    },
    product: {
      hide: [47].includes(channelId),
      link: products[channelId] || '/product/category'
    },
    myCenter: {
      hide: false,
      link: myCenters[channelId] || '/account/center'
    }
  };
}
function getAuth() {
  var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    isLogin: !!userId,
    userId: userId
  };
}

function createMiddlewares() {
  // { isServer }
  var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_6___default.a]; // tslint:disable-next-line

  if ( true && typeof window !== 'undefined') {
    var _require = __webpack_require__(/*! redux-logger */ "redux-logger"),
        createLogger = _require.createLogger; // tslint:disable-line


    middlewares.push(createLogger({
      level: 'info',
      collapsed: true,
      stateTransformer: function stateTransformer(state) {
        return state.toJS();
      }
    }));
  }

  return middlewares;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    serverApp: _reducers_server_app__WEBPACK_IMPORTED_MODULE_14__["preloadedServerApp"].toJS()
  };
  var context = arguments.length > 1 ? arguments[1] : undefined;
  var isServer = context.isServer,
      req = context.req;
  var middlewares = createMiddlewares();

  if (isServer) {
    var ua = req.useragent.source;
    var channelId = +req.cookies.channelId || 0;
    initialState.serverApp = {
      ua: Object(_server_utils_tools__WEBPACK_IMPORTED_MODULE_12__["getUA"])(ua, channelId),
      utm: getUtm(channelId, req),
      headers: getBbfHeaders(req.headers.cookie, req.headers['user-agent']),
      headers2: _server_utils_resource__WEBPACK_IMPORTED_MODULE_11__["default"].buildHeaders(req),
      headers3: getQsyHeaders(req),
      auth: {
        isLogin: Object(_server_utils_tools__WEBPACK_IMPORTED_MODULE_12__["checkLogin"])(req),
        userId: req.cookies.user_id_v2 || ''
      },
      tabBar: getTabBar(channelId)
    };
  } else {
    var _channelId = +(utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get('channelId') || '0');

    initialState.serverApp = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, initialState.serverApp, {
      headers: getBbfHeaders(document.cookie, navigator.userAgent),
      headers2: getBfaHeaders(),
      headers3: getQsyHeaders(),
      auth: getAuth(utils_cookies__WEBPACK_IMPORTED_MODULE_8__["default"].get('user_id_v2')),
      tabBar: getTabBar(_channelId)
    });
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_13__["default"], Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(initialState), Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"].apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(middlewares)), _utils_config__WEBPACK_IMPORTED_MODULE_7__["ENV"] !== 'prod' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ // tslint:disable-line
  ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  }));
});

/***/ }),

/***/ "./src/themes/index.less":
/*!*******************************!*\
  !*** ./src/themes/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/alipayJSBridge.ts":
/*!*************************************!*\
  !*** ./src/utils/alipayJSBridge.ts ***!
  \*************************************/
/*! exports provided: takePhoto, getCurrentLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takePhoto", function() { return takePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLocation", function() { return getCurrentLocation; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

function takePhoto() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    AlipayJSBridge.call('chooseImage', {
      count: 1,
      // 如果只需要拍照，可以只传['camera', 'album']
      sourceType: ['camera']
    }, function (result) {
      if (result.success) {
        var apFilePath = result.apFilePathsV2 || result.apFilePaths || [];

        if (typeof apFilePath === 'string') {
          try {
            apFilePath = JSON.parse(apFilePath);
          } catch (e) {
            console.log('获取apFilePath出错');
          }
        }

        if (!apFilePath.length || !/^https?:/.test(apFilePath[0])) {
          console.log('无apFilePath');
        }

        var image = new Image();
        image.crossOrigin = 'anonymous';

        image.onload = function () {
          var canvas = document.createElement('CANVAS');
          var context = canvas.getContext('2d');
          canvas.height = image.height;
          canvas.width = image.width;
          context.drawImage(image, 0, 0);

          try {
            resolve(canvas.toDataURL('image/jpeg'));
          } catch (e) {
            alert('canvas 生成错误');
          }
        };

        image.src = apFilePath[0];
      } else {
        reject('error');
      }
    });
  });
}
function getCurrentLocation() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
    AlipayJSBridge.call('getCurrentLocation', {
      bizType: 'didi'
    }, function (result) {
      if (result.error) {
        resolve(false);
      }

      resolve(result);
    });
  });
}

/***/ }),

/***/ "./src/utils/alipayShare.js":
/*!**********************************!*\
  !*** ./src/utils/alipayShare.js ***!
  \**********************************/
/*! exports provided: initShare, alipayShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initShare", function() { return initShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alipayShare", function() { return alipayShare; });
// function importSDK() {
//   let d = document
//   let g = d.createElement('script')
//   let s = d.getElementsByTagName('script')[0]
//   g.type = 'text/javascript'
//   g.async = true
//   g.defer = true
//   g.src = 'https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js'
//   s.parentNode.insertBefore(g, s)
// }
function initShare(params) {
  // importSDK()
  var meta = [{
    name: 'Alipay:title',
    content: params.title
  }, {
    name: 'Alipay:imgUrl',
    content: params.image
  }, {
    name: 'Alipay:desc',
    content: params.content
  }, {
    name: 'Alipay:link',
    content: params.url
  }];
  var d = document;
  var h = d.getElementsByTagName('head')[0];
  meta.forEach(function (item) {
    var m = d.createElement('meta');
    m.name = item.name;
    m.content = item.content;
    h.appendChild(m);
  });
}
function alipayShare(params) {
  var title = params.title,
      content = params.content,
      image = params.image,
      url = params.url;

  if (!ap) {
    console.error('ap is not loaded in AlipayShare.js');
    return;
  }

  ap.share({
    title: title,
    content: content,
    image: image,
    url: url,
    showToolBar: true
  });
}

/***/ }),

/***/ "./src/utils/app.ts":
/*!**************************!*\
  !*** ./src/utils/app.ts ***!
  \**************************/
/*! exports provided: isIOS, isAndroid, isAliPay, isWechat, isApp, takePhoto, sendTitle, getTongDunResult, getLocation, getContacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAliPay", function() { return isAliPay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWechat", function() { return isWechat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApp", function() { return isApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takePhoto", function() { return takePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTitle", function() { return sendTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTongDunResult", function() { return getTongDunResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContacts", function() { return getContacts; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alipayJSBridge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alipayJSBridge */ "./src/utils/alipayJSBridge.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools */ "./src/utils/tools.ts");






function isIOS() {
  if (window && window.navigator && window.navigator.userAgent) {
    var ua = window.navigator.userAgent;
    return /enjoyChanging/.test(ua) && /platform\/iOS/.test(ua);
  }
}
function isAndroid() {
  if (window && window.navigator && window.navigator.userAgent) {
    var ua = window.navigator.userAgent;
    return /Android;enjoyChanging_native/i.test(ua);
  }
}
function isAliPay() {
  if (window && window.navigator && window.navigator.userAgent) {
    var ua = window.navigator.userAgent;
    return /AlipayClient/.test(ua);
  }
}
function isWechat() {
  if (window && window.navigator && window.navigator.userAgent) {
    var ua = window.navigator.userAgent;
    return /MicroMessenger/.test(ua);
  }
}
function isApp() {
  return isIOS() || isAndroid();
}
function takePhoto() {
  if (isAliPay()) {
    return Object(_alipayJSBridge__WEBPACK_IMPORTED_MODULE_4__["takePhoto"])();
  }

  if (isAndroid()) {
    window.jsObj.takePhoto();
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve) {
      window.chooseResult = function (stringkey, stringjson) {
        if (stringkey === 'takePhoto') {
          resolve('data:image/jpeg;base64,' + stringjson.path);
        }
      };
    });
  }

  if (isIOS()) {
    window.webkit.messageHandlers.takePhoto.postMessage('takePhoto');
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve) {
      window.chooseResult = function (stringkey, stringjson) {
        if (stringkey === 'takePhoto') {
          var result = Object(_tools__WEBPACK_IMPORTED_MODULE_5__["zipBase64"])('data:image/jpeg;base64,' + stringjson);
          resolve(result);
        }
      };
    });
  }

  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve) {
    return resolve('');
  });
}
function sendTitle(text) {
  // tslint:disable-next-line
  if (typeof window !== 'undefined') {
    if (isIOS()) {
      window.webkit && window.webkit.messageHandlers.sendTitle && window.webkit.messageHandlers.sendTitle.postMessage(text);
    } else {
      window.jsObj && window.jsObj.sendTitle && window.jsObj.sendTitle(text);
    }
  }
}
function getTongDunResult() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve) {
    if (isApp()) {
      if (isAndroid()) {
        if (window.jsObj && window.jsObj.getBlackbox) {
          window.jsObj.getBlackbox();
        } else {
          resolve('');
        }
      } else if (isIOS()) {
        if (window.webkit && window.webkit.messageHandlers.getBlackbox) {
          window.webkit.messageHandlers.getBlackbox.postMessage('');
        } else {
          resolve('');
        }
      }

      window.chooseResult = function (type, result) {
        if (type === 'getBlackbox') {
          if (isIOS()) {
            resolve(JSON.parse(result).blackbox);
          } else {
            resolve(result.blackbox);
          }
        }
      };
    } else {
      resolve(window._fmOpt.getinfo());
    }
  });
}
function getLocation() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(resolve) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!isAliPay()) {
                _context.next = 8;
                break;
              }

              _context.t0 = resolve;
              _context.next = 4;
              return Object(_alipayJSBridge__WEBPACK_IMPORTED_MODULE_4__["getCurrentLocation"])();

            case 4:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);
              _context.next = 9;
              break;

            case 8:
              if (isApp()) {
                if (isAndroid()) {
                  window.jsObj && window.jsObj.chooseLocation();
                } else if (isIOS()) {
                  window.webkit && window.webkit.messageHandlers.chooseLocation.postMessage('chooseLocation');
                }

                window.chooseResult = function (type, result) {
                  if (type === 'chooseLocation') {
                    if (isAndroid()) {
                      resolve(result.longitude ? result : false);
                    } else if (isIOS()) {
                      resolve(result.length ? JSON.parse(result) : false);
                    }
                  }
                };
              }

            case 9:
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
}
function getContacts() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(resolve) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (isApp()) {
                if (isAndroid()) {
                  if (window.jsObj.getContacts) {
                    window.jsObj.getContacts();
                  } else {
                    resolve(false);
                  }
                } else if (isIOS()) {
                  if (window.webkit.messageHandlers.getContacts) {
                    window.webkit.messageHandlers.getContacts.postMessage('');
                  } else {
                    resolve(false);
                  }
                }

                window.chooseResult = function (type, result) {
                  if (type === 'getContacts') {
                    if (isIOS()) {
                      resolve(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(JSON.parse(result).contacts));
                    } else {
                      resolve(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(result.contacts));
                    }
                  }
                };
              }

              resolve(false);

            case 2:
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
}

/***/ }),

/***/ "./src/utils/axiosClient.ts":
/*!**********************************!*\
  !*** ./src/utils/axiosClient.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/utils/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/index */ "./src/utils/index.ts");


 // 创建axios实例

var clientService = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _config__WEBPACK_IMPORTED_MODULE_1__["baseURL"],
  timeout: 15000 // headers: { 'Cache-Control': 'no-cache' },

}); // request 拦截器

clientService.interceptors.request.use(function (config) {
  // config.url += `?timestamp=${Math.round(new Date().getTime() / 1000)}`
  return config;
}, function (error) {
  utils_index__WEBPACK_IMPORTED_MODULE_2__["tools"].ErrorLog("clientService interceptors request error -- ".concat(error)); // return Promise.resolve(error)
}); // response 拦截器

clientService.interceptors.response.use(function (response) {
  if (response.data.status && response.data.errorMsg) {
    return response;
  }

  return response.data;
}, function (error) {
  var request = error.request,
      response = error.response,
      code = error.code,
      message = error.message;

  if (request && response) {
    utils_index__WEBPACK_IMPORTED_MODULE_2__["tools"].ErrorLog("clientService interceptors response error -- response: ".concat(response.status, " ").concat(response.statusText, "; request -- method: ").concat(request.method, "; path: ").concat(request._headers && request._headers.host).concat(request.path, "; header: ").concat(request._header));
  } else {
    utils_index__WEBPACK_IMPORTED_MODULE_2__["tools"].ErrorLog("clientService interceptors response error -- code: ".concat(code, ", message: ").concat(message));
  } // return Promise.reject(error)

});
/* harmony default export */ __webpack_exports__["default"] = (clientService);

/***/ }),

/***/ "./src/utils/config.js":
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

var REACT_APP_API_ENV = "dev" || false;
var isProd = "development" === 'production';
var TEST = undefined || '0';
var PORT = (0, _parseInt2.default)("3".concat(TEST.padStart(3, '0')), 10) || 3000;
module.exports = {
  PORT: PORT,
  isProd: isProd,
  ENV: REACT_APP_API_ENV,
  IMG_HOST: '//img2.xianghuanji.com',
  assetPrefix: {
    dev: isProd ? "http://localhost:".concat(PORT) : '',
    test: isProd ? "//test".concat(TEST, ".mmstatic.t.xianghuanji.com/react") : '',
    stage: isProd ? "//stage".concat(TEST, ".mstatic.stage.xianghuanji.com/react") : '',
    beta: isProd ? '//mstatic.beta.xianghuanji.com/react' : '',
    prod: isProd ? '//mstaticc.xianghuanji.com/react' : ''
  }[REACT_APP_API_ENV],
  baseURL: {
    dev: "http://localhost:".concat(PORT, "/"),
    test: "http://test".concat(TEST, ".mm.t.xianghuanji.com/"),
    stage: "http://stage".concat(TEST, ".m.stage.xianghuanji.com/"),
    beta: 'http://m.beta.xianghuanji.com/',
    prod: 'https://m.xianghuanji.com/'
  }[REACT_APP_API_ENV]
};

/***/ }),

/***/ "./src/utils/cookies.ts":
/*!******************************!*\
  !*** ./src/utils/cookies.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
 // 对于 user_id_v2 和 user_token 需要调用此方法，需要加上 domain，domain 是 getDomain

var cookies = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.withConverter({
  read: function read(value) {
    return value;
  },
  write: function write(value) {
    return encodeURIComponent(value);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (cookies);

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: axios, tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/axiosClient */ "./src/utils/axiosClient.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axios", function() { return utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/tools */ "./src/utils/tools.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return utils_tools__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/utils/loadScript.ts":
/*!*********************************!*\
  !*** ./src/utils/loadScript.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadScript; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");





var LoadScript =
/*#__PURE__*/
function () {
  function LoadScript(url, name) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoadScript);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isLoaded", false);

    this.url = url;
    this.name = name;
    // FIXME: constructor public members
    this.url = url;
    this.name = name;
    if (!window) throw new Error('must init in client');

    if (window[name]) {
      this.isLoaded = true;
      return;
    }

    LoadScript.script = document.createElement('script');
    LoadScript.script.type = 'text/javascript';
    LoadScript.script.src = url;
    LoadScript.script.async = true;
    var el = document.getElementsByTagName('script')[0];
    el.parentNode.insertBefore(LoadScript.script, el);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LoadScript, [{
    key: "load",
    value: function load() {
      var _this = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
        if (window[_this.name]) {
          _this.isLoaded = true;
          resolve();
        } else {
          LoadScript.script.addEventListener('load', function () {
            _this.isLoaded = true;
            resolve();
          });
        }
      });
    }
  }]);

  return LoadScript;
}();



/***/ }),

/***/ "./src/utils/piwik.ts":
/*!****************************!*\
  !*** ./src/utils/piwik.ts ***!
  \****************************/
/*! exports provided: trackClickEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackClickEvent", function() { return trackClickEvent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/app */ "./src/utils/app.ts");


function trackClickEvent(properties) {
  try {
    if (Object(utils_app__WEBPACK_IMPORTED_MODULE_1__["isApp"])()) {
      // app内嵌 H5由 app 发送 piwik
      var piwikMsg = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
        category: properties.category,
        action: 'Clicked',
        name: properties.label,
        value: properties.value || 1
      });

      if (Object(utils_app__WEBPACK_IMPORTED_MODULE_1__["isIOS"])()) {
        window.webkit.messageHandlers.sendWebPiwikEvent && window.webkit.messageHandlers.sendWebPiwikEvent.postMessage(piwikMsg);
      } else {
        window.jsObj.sendWebPiwikEvent && window.jsObj.sendWebPiwikEvent(piwikMsg);
      }
    } else {
      _paq.push(['trackEvent', properties.category, 'Clicked', properties.label, properties.value || 1]);
    }
  } catch (e) {
    if (!(e instanceof ReferenceError)) throw e;
  }
}

/***/ }),

/***/ "./src/utils/tools.ts":
/*!****************************!*\
  !*** ./src/utils/tools.ts ***!
  \****************************/
/*! exports provided: renderBgImage, scrollToAnchor, convertIndexToDigital, ErrorLog, noop, mockPending, isWeixinNoCid, renderUtmParams, scrollWithAnimation, padLeft, zipBase64, formatPhone, formatBankCard, getDomain, delayHandle, renderLink, cleanUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderBgImage", function() { return renderBgImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToAnchor", function() { return scrollToAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertIndexToDigital", function() { return convertIndexToDigital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLog", function() { return ErrorLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockPending", function() { return mockPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeixinNoCid", function() { return isWeixinNoCid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderUtmParams", function() { return renderUtmParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollWithAnimation", function() { return scrollWithAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padLeft", function() { return padLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipBase64", function() { return zipBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPhone", function() { return formatPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBankCard", function() { return formatBankCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomain", function() { return getDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayHandle", function() { return delayHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLink", function() { return renderLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUserInfo", function() { return cleanUserInfo; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/utils/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookies */ "./src/utils/cookies.ts");






function renderBgImage(url) {
  return {
    background: "url('".concat(url, "') no-repeat center center"),
    backgroundSize: 'cover'
  };
}
function scrollToAnchor(anchorName) {
  var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (anchorName) {
    var anchorElement = document.querySelector(anchorName);

    if (anchorElement) {
      animated ? anchorElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      }) : anchorElement.scrollIntoView();
    }
  }
}
function convertIndexToDigital(index) {
  var pos = (index + 1).toString();
  if (pos.length < 2) pos = '0' + pos;
  return pos;
}
function ErrorLog(message) {
  // tslint:disable-next-line
  typeof window !== 'undefined' && console.error(message); // Error | string

  axios__WEBPACK_IMPORTED_MODULE_3___default()({
    method: 'post',
    url: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["baseURL"], "node-api/common/dingtalk/send"),
    data: {
      // tslint:disable-next-line
      isClient: typeof window !== 'undefined',
      content: message.stack ? message.stack : message
    }
  });
}
function noop() {} // tslint:disable-line:no-empty

function mockPending(delay) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
    return setTimeout(resolve, delay);
  });
} // 微信渠道没有channelID，此处暂时特殊处理

function isWeixinNoCid(req) {
  if (req.query && req.query.utm_source) {
    return req.query.utm_source === 'weixin' && req.query.utm_medium === 'weixin_menu' && req.query.utm_campaign === 'firstpage';
  }

  return req.cookies.utm_source === 'weixin' && req.cookies.utm_medium === 'weixin_menu' && req.cookies.utm_campaign === 'firstpage';
}
function renderUtmParams(headers2) {
  var sourcesKeys = {};

  if (headers2.utmSource) {
    sourcesKeys.utm_source = headers2.utmSource;
  }

  if (headers2.utmMedium) {
    sourcesKeys.utm_medium = headers2.utmMedium;
  }

  if (headers2.utmCampaign) {
    sourcesKeys.utm_campaign = headers2.utmCampaign;
  }

  var sourcesKey1 = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(sourcesKeys).map(function (key) {
    return "".concat(key, "=").concat(sourcesKeys[key]);
  }).join('&');

  return sourcesKey1.length ? "&".concat(sourcesKey1) : '';
}
var easings = {
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};
function scrollWithAnimation(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeInQuad';
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) callback();
    return;
  } else {
    ;

    (function scroll() {
      var now = 'now' in window.performance ? performance.now() : new Date().getTime();
      var time = Math.min(1, (now - startTime) / duration);
      var timeFunc = easings[easing](time);
      window.scroll(0, Math.ceil(timeFunc * (destinationOffsetToScroll - start) + start));

      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) callback();
        return;
      }

      requestAnimationFrame(scroll);
    })();
  }
}
var padLeft = function padLeft(n) {
  return n < 10 ? "0".concat(n) : n;
};
function zipBase64(original) {
  var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.7;
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
    var img = new Image();
    img.src = original;

    img.onload = function () {
      var canvas = document.createElement('CANVAS');
      var context = canvas.getContext('2d');
      var width = img.width;
      var height = img.height;
      var rate = (width < height ? width / height : height / width) / 1.5;
      canvas.width = width * rate;
      canvas.height = height * rate;
      context.translate(width * rate / 2, height * rate / 2);
      context.drawImage(img, -width * rate / 2, -height * rate / 2, width * rate, height * rate);
      var result = canvas.toDataURL('image/jpeg', quality);
      resolve(result);
    };
  });
}
function formatPhone(phone) {
  return phone && phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}
function formatBankCard(phone) {
  return phone && phone.replace(/(\d{4})\d{8}(\d{4})/, '$1********$2');
}
function getDomain(hostname) {
  if (hostname === 'm.xianghuanji.com') {
    return '.xianghuanji.com';
  }

  return hostname;
}
var delayHandle = function delayHandle(tick) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
    if (tick > 0) {
      setTimeout(function () {
        return resolve();
      }, tick * 1000);
    } else {
      resolve();
    }
  });
};
var renderLink = function renderLink(_ref) {
  var item = _ref.item;
  var links = {
    product_info: {
      pathname: '/product/detail',
      query: {
        id_activity: item.get('product_id')
      }
    },
    product_category: "/product/category?tag=".concat(item.get('tag_id')),
    activity: item.get('skip_url'),
    expire_user: '/test',
    // 到期用户
    no_jump: 'javascript:void(0);'
  };
  return links[item.get('type')];
};
var cleanUserInfo = function cleanUserInfo() {
  ErrorLog("\u5408\u5E76\u8D26\u53F7\u5DF2\u88AB\u6E05\u7406\uFF1Auser_id_v2\uFF1A".concat(_cookies__WEBPACK_IMPORTED_MODULE_5__["default"].get('user_id_v2'), " userToken: ").concat(_cookies__WEBPACK_IMPORTED_MODULE_5__["default"].get('userToken')));
  var domain = getDomain(location.hostname);
  _cookies__WEBPACK_IMPORTED_MODULE_5__["default"].remove('user_id_v2');
  _cookies__WEBPACK_IMPORTED_MODULE_5__["default"].remove('userToken');
  _cookies__WEBPACK_IMPORTED_MODULE_5__["default"].remove('user_id_v2', {
    domain: domain
  });
  _cookies__WEBPACK_IMPORTED_MODULE_5__["default"].remove('userToken', {
    domain: domain
  });
  location.href = "/next-api/account/login?redirect=".concat(encodeURIComponent('/'));
};

/***/ }),

/***/ "./src/utils/utilsValid.ts":
/*!*********************************!*\
  !*** ./src/utils/utilsValid.ts ***!
  \*********************************/
/*! exports provided: isValidPhone, validPhone, validTrim, validTaxerNo, validEmail, validIDCard, validBankCard, validUnionBankCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPhone", function() { return isValidPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPhone", function() { return validPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validTrim", function() { return validTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validTaxerNo", function() { return validTaxerNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmail", function() { return validEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validIDCard", function() { return validIDCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validBankCard", function() { return validBankCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validUnionBankCard", function() { return validUnionBankCard; });
var isValidPhone = function isValidPhone(value) {
  return Boolean(/^1[3456789]\d{9}$/.test(value.replace(/\s/g, '')));
};
function validPhone(_, value, callback) {
  if (value && !/^1[3456789]\d{9}$/.test(value.replace(/\s/g, ''))) {
    callback('手机号码格式不正确');
  } else {
    callback();
  }
}
function validTrim(_, value, callback) {
  if (value && !(value.replace(/\s+/g, '').length > 0)) {
    callback('不能为空哦');
  } else {
    callback();
  }
}
function validTaxerNo(_, value, callback) {
  if (value && !(value.replace(/\s/g, '').length === 15 || value.replace(/\s/g, '').length === 18 || value.replace(/\s/g, '').length === 20)) {
    callback('纳税人识别号格式不正确，请重试');
  } else {
    callback();
  }
}
function validEmail(_, value, callback) {
  if (value && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
    callback('电子邮箱格式不正确，请重试');
  } else {
    callback();
  }
}
function validIDCard(_, value, callback) {
  if (value && !/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value.replace(/\s/g, ''))) {
    callback('身份证号码格式不正确');
  } else {
    callback();
  }
} // 信用卡

function validBankCard(_, value, callback) {
  if (value && !/^\d{14,16}$/.test(value.replace(/\s/g, ''))) {
    callback('信用卡格式不正确');
  } else {
    callback();
  }
} // 银行卡卡号校验——Luhn算法(模10算法)

function validUnionBankCard(_, value, callback) {
  var cardNumber = value && value.replace(/\s/g, '');

  if (cardNumber && !/^\d{16,19}$/.test(cardNumber)) {
    callback('银行卡格式不正确');
    return false;
  }

  var sum = 0;
  var evenArr = [];
  var oddArr = [];
  var numArr = cardNumber.split('').reverse();

  for (var i = 0; i < numArr.length; i++) {
    i % 2 !== 0 ? evenArr.push(+numArr[i] * 2) : oddArr.push(+numArr[i]);
  }

  for (var x = 0; x < evenArr.length; x++) {
    evenArr[x] > 9 ? sum += evenArr[x] - 9 : sum += evenArr[x];
  }

  for (var k = 0; k < oddArr.length; k++) {
    sum += +oddArr[k];
  }

  if (sum % 10 !== 0) {
    callback('银行卡格式不正确');
  } else {
    callback();
  }
}

/***/ }),

/***/ "./src/utils/wechat.js":
/*!*****************************!*\
  !*** ./src/utils/wechat.js ***!
  \*****************************/
/*! exports provided: share, wx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony import */ var weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weixin-js-sdk */ "weixin-js-sdk");
/* harmony import */ var weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "wx", function() { return weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/index */ "./src/utils/index.ts");



function getWechatSigniture() {
  var shareUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
  utils_index__WEBPACK_IMPORTED_MODULE_1__["axios"].post('/node-api/common/jsapi/checkToken', {
    url: shareUrl.split('#')[0]
  }).then(function (_ref) {
    var data = _ref.data;
    weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config({
      debug: false,
      // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。//debug最后要改为true
      appId: data.app_id,
      // 必填，公众号的唯一标识
      timestamp: data.timestamp,
      // 必填，生成签名的时间戳
      nonceStr: data.nonce_str,
      // 必填，生成签名的随机串
      signature: data.signature,
      // 必填，签名，见附录1
      jsApiList: ['updateTimelineShareData', 'updateAppMessageShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareWeibo', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2

    });
  });
}

function share(params) {
  console.log(params);
  var title = params.title,
      link = params.link,
      desc = params.desc,
      imgUrl = params.imgUrl;
  if (!link) link = window.location.href; // 获取签名信息

  getWechatSigniture();
  weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.ready(function () {
    // “分享到朋友圈”及“分享到QQ空间”
    weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.updateTimelineShareData({
      title: title,
      // 分享标题
      link: link,
      // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl,
      // 分享图标
      success: function success() {// 设置成功
      }
    }); // “分享给朋友”及“分享到QQ”

    weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.updateAppMessageShareData({
      title: title,
      // 分享标题
      desc: desc,
      // 分享描述
      link: link,
      // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl,
      // 分享图标
      success: function success() {// 设置成功
      }
    }); // 分享到腾讯微博

    weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.onMenuShareWeibo({
      title: title,
      // 分享标题
      desc: desc,
      // 分享描述
      link: link,
      // 分享链接
      imgUrl: imgUrl,
      // 分享图标
      success: function success() {},
      cancel: function cancel() {}
    }); // 分享到朋友圈（即将废弃）

    weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.onMenuShareTimeline({
      title: title,
      // 分享标题
      link: link,
      // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl,
      // 分享图标
      success: function success() {}
    }); // “分享给朋友”（即将废弃）

    weixin_js_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.onMenuShareAppMessage({
      title: title,
      // 分享标题
      desc: desc,
      // 分享描述
      link: link,
      // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl,
      // 分享图标
      type: '',
      // 分享类型,music、video或link，不填默认为link
      dataUrl: '',
      // 如果type是music或video，则要提供数据链接，默认为空
      success: function success() {}
    });
  });
}



/***/ }),

/***/ "./static/images/account/user-privilege-top.png":
/*!******************************************************!*\
  !*** ./static/images/account/user-privilege-top.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/user-privilege-top-899a3999b26a5139fc0a14e0c27dbd9a.png";

/***/ }),

/***/ "./static/images/activity/guidance/bao.png":
/*!*************************************************!*\
  !*** ./static/images/activity/guidance/bao.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bao-e8f4c2bd90bb6e5a117fd5a257e75282.png";

/***/ }),

/***/ "./static/images/activity/guidance/button.png":
/*!****************************************************!*\
  !*** ./static/images/activity/guidance/button.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/button-7d008ccd01a6d1dae2411899e5d55bf6.png";

/***/ }),

/***/ "./static/images/activity/guidance/footerxz.png":
/*!******************************************************!*\
  !*** ./static/images/activity/guidance/footerxz.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footerxz-06c758b27e75d2fc481815ac3f698bd1.png";

/***/ }),

/***/ "./static/images/activity/guidance/gui.png":
/*!*************************************************!*\
  !*** ./static/images/activity/guidance/gui.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACsCAYAAADixJflAAAdX0lEQVR4Xu1deXwURdp+3k4mCQkkIeESP11YFxUh0xOMnwfq6gooHqt+KoqKHMohXqgoghei4sEKKh4oICLgteIt6nquoqJGMj0hamRVdFEhEMidkMx0fb+aXNNJZ87unu5J1z/6I1Xv8dSTSnXVW+9LsFvYCLDCwv2QkjII8P0ZTBgEYCDAcgHqC8ZyQdQLQO8WgSkAMpr/n1UCJANoAlADYuVgVA7GykH+//4K4CcA2yAI28jp3Bu2Ud20I3VTv4O6zT7/vAfS0w+HIIiQZSeI8gAMB8CJaUQrA+ABMQ8gFEPwFmFYfjGRn/x2A2ATl6+HhYVZSEk6EUw4FowdDcIRADnMxRD/qv0FGPsCwKdwOD6jYcMazWWjcdZ0W+KyoiIXBGEsgFMAdgxAycbBrommGgAfgNgGyHiLXK7fNJFqESHdirjM48kDY+cDbBxAQywyR+GYyQD2OUD/BGMvdQcSJzxxmST1A3AJiE0Go8PCYYHF+8gg9gnAVqBX9noaPLjB4v6omp+QxGWMEba4R0EWpgI4EwD/wu+ObQ+AtRCEZZSX910iAZBQxGUlJSnwescDuB4APwmwWzMCzL8XhvAgOZ3vJwIoCUFcJkn8vPRygF0L0MBEmBj9fGBukLAQeXnrrXy8Zmni+s9bMzKmAZgLoL9+k52Qkj0gug15ea8TEbOah5YkLmNMgCRNAmEBQPtbDXST2VsIWb6B8vM/NpldQc2xHHFZUdEJEGgxQPlWAtr0thJ7BV75Whox4hfT22qlmzN/nIDDsRjABVYA1po2snqQsAi9et1j9mM006+4/qMtj+dSgC0CKNuahLCc1aUAppIofmpWy01NXFZcfBCYbwUYnWBWABPYLv7B9gTq6+fQUUdVmc1P0xKXedzTwPhetjU00GzQdRt7fgZjl5DLtdFMHpuOuKykJAe+Jr7Knm0moLq3LcwH0F0oLb2Txo3zmQELUxGXFRcXQJbXAzjQDODYNnRAgNjH8MrjaMSIXfHGxjTEZW73FBA9CiAt3qDY+oMisB3AuSSKX8YTp7gTlxUWOpCc/AiI+A2Y3ayBwD4QXUVO5/J4mRtX4vpfHjgcfGtwUrwAsPXGhMAiOJ1z4nFlHDfiss2b/4Qk4S2AhsUEnT043gi8hNraS+iYY+qNNCQuxG15ifAvAAOMdNbWpRcC7DPI7HTKz6/QS0NHuYYTlxUVHQFBeAdAjlFO2nqMQIAVock7hgoKdhuhzVDiMo/neEB+A4wyjXDO1mE4At+hqekkKij4Q2/NhhHXT1omvw1Qut5O2fLjiQDbiibvX/UmryHEZZJ0JMDeBSgrnpDaug1DoBg+30l6XlToTtyWDzEepGzvaQ3jjSkUfdOybajUwxpdictKSg6Et6nQn1vLbt0RgQ+RnDxWj4w7uhG35XKBx3Par227I2VbfWZsHURxgtaXFLoQt+WZ+NsA/tad58z2vQUBYveS08UftGrW9CGuJK0AcKlmVtqCrI9Ac0zvGq0c0Zy4zOOZCsae1MpAW06iIMDqILORlJ/v1sIjTYnbcivGI+W7a8ojLeYkkWX8BKICLRJXa0Zc9t13uWhs5L9N/5PIyNu+xYzA23A6T4v1Y0074nrcL9vPbWKe1O4iYBaJ4kOxOKsJce19bSxT0C3HNkAQjqS8PE+03sdMXOZ2HwyizfZr3GinoNuO24LMzCOiTTwSE3H9Obw80icAjey28NuOR49ADOe7sRFXkmYC4A8c7WYjEAUCzAuZHRHNEVnUxGWSxE8PvjWwhFIUwNhDLIDANygtPTLSfA3RE9ftfgVEZ1kAGNtE8yNwLYnig5GYGRVxmcczCoy9F4kiu6+NQNcIsAr45IMjid+NmLjso4+SkZNT1FJp0fKz4dvxBxo9Hnh3lQFEIIoYkrhgwHw+UGoqUgb/GSkFR8TFBo2VPk6iyL+ZwmoRzxJLoA+yfZ9tROWq5fD+YYlcxl1OaPpxY5B11dWgjJ5hTbo5OzEfSMgnp7M4HPsiIm5LkRBeLJnXDrN0ayz8Grtvv8HSPgQan3KIiD7/WAwISdb1idhb5HSdHo4DkRHX454DRveGI9jMfVhtDXZOuRhyjWFpAAyBI3PCNPS84EJDdOmo5GgSxU2h5IdNXLZpUyZ69Pg5Ed6O1bz4PKpWLwuFjeV+TumZGLBqHainUUXedYHofRLF0aEkh09ct/tWEC0IJdAKP9993TVoLJU6mZo2chQcgwYBTU1gzJwVlCgpCWzfPtR/8iF85Ts6+ZB7891IPcbyF5nHh0rjHxZxm+uJpf8KUB8rEDOYjayqEjsmjQfbV6folnnxVPQcf5Fl3JN3lWHX7Gvg263MvZFx6jnIuuIqy/jRhaEbSBRPC+ZEeMR1u6eDKCH+tu776kuU3zFHgQmlpmO/Z9cDaT0sNeFVT61Azfq1CpuTBw5CvydX+Y/2LNwYfL7hNGIEv5lVbSG9aymGVwqiv1gYiDbTq1atRM1LyqdPKUOGo8+Dj1jOvX2bvkD5nZ3fIPZbvAzJhxxqOX86GLycRLHLnMmhiStJfwfwmtVRaLV/z63z0LD5c4U7Pc++EJmXWTCvdEM9dkyZALlSmWcuc/JM9Dx3nNWnrBHAASSKZWqOhCaux/0mGAXdb1gFIVZTjZ2XTYRcvUdhcs7cO5F27HFWcUNhZ8W9C1H3Kc/Y2t7SXEch527Ln1pyh24kUVwUMXFZcfEBkH0/A2ThU+12t5u2bMGuOVcq97cpaej3xGok9bNmDev6Dz/A3gfuVM5tsgMDVj0PISfXkr+MAUaXwukcqvY+LeiKyyTpdgDzre59q/1q57d672/5KUbdRx+BkpORPmoUkKptbRb/KcnF54L5mhTT1Pu6W9DjpFHWnzqiv5LT+UlHR7okbnMpUukngAZZ3/tmD/YumI/6L5VFwnueeQEyp83QxUV57x7svmk2vNv5LTmQOrwAuXffAyQ7NNW357ab0fDNZwqZ6aPPQPas6zXVEydhz5AoTgyfuJJ0FIAv4mSs9mr3NWDn1EmdDu1zb1mI1KOP0V4fgNpX1qNyxVKFbD0uCGpffw2VTyxR6EnqfwD6L18FJCXr4pthQolVoUdGPxoyZF+gzq5XXEniSMwyzECdFXl/KEXZtdOV+9vUdPRf/gyEXH3uVaqefgo1/3xGoTP7qjlIP2Wspt76tv8XO2dMBJiskNv3vkfgGD5cU11xEUby2eTMfzUkcVseQfKbsv3jYqgOSus2vIWKR5UfqKmHjUDuIl4uWJ9W/czTqH7haYXw3rPmocfoMZorVLvG7jVuInpNnKy5rjgIfI5EURE9pLrisuKiYyALyk1THKzVUmXF/fei7t+8Zkp70/v8tnrNalQ/v8oQ4tY8tw5Va5X18vT+8NRyfkLIqkF6ep/A7YI6cT3uBWB0q4GG6a6qbOokeH/fptCj5/6WKzKSuN7/bEXZNVM74Thg+ToIAxPgDyfRaHI63291UJ24klQI4HDd2WSQArU9IKWkof9Tz0LorV+GfyOJC8ZQNm1yp19OPfbUBk1bRzUPkCjO7pK4TJL46wYeciTEyUDN1da//x72LrlbITd12OHIvf8BzXUFCjSUuADUgm7SjjgeOfMTIBqV2LfkdLVVIe204jJP0UVggjLkSNfp1V945ROPo/b1F5T723MuRuaUy3RVbjRxm0pKsOvGKxQ+8ci3AaueBWVl6+qrQcJ57AKv3g4V4rqXgZHy3Mggq/RSo/bFnTPvLqSNPFYvlX65RhMX3ibsnDYFvp3/NXQvryuISuHjSRSfVyeuJPFXlglw+NfsMauswI7JFyoDxw26yzecuAAqHl6CuneVwXwZZ4xD1oywX34byMMIVTH2KLlc/mATxYrLioqyIQjlibS/VYtZ9b+IXRxTetawEI8HcdX8TZDgcr4MFZHoGtGZuJJ0CgBeLSdhmhp5ehqwv43LVoEr5TG6ky7qFLqZGMHlzIdkRzYNG1ajXHHd7ptAdE/CsBbAnlvmoqFIGXKRc9MCpB13vO5uxmPF5U6pxegmSHA5f5J0DDmdXyiJK0nPAhiv+4wapIDV1WLnpAsh17ZX5aQkR/P5bR/9i13Gi7iqx3/ikchdeJ9ByOuohth0crqeVBLX4y4Bo8N0VGuo6Kbvv8Ou6y9X6HQcdBj6PvyYIXbEi7hy+W7smDIe/JShtZEjFf1XvwDB+sdij5EoXtFG3OZqkE21AFk8Dq6dk2qB47HGJ/DnP43FxXAceCCE/YMXGIqWuL6ff4K3rAypohj1y2O1GN2cG+cj7a8nGPJLq58StpFE13HtxJWkQwB8r59C4yXvvfMO1G/6SKE4lnhY3y/bUH7XfP+1Kl/BMidchoxzzuvSsWiIW7X8CdS89oI/RNHx56HInX9nVGGXarHA6SeeiuzZNxo/Edpq3EGiuF87cT2esWBsg7Y64iiNB45Pm6xImMFvkfo/uTrq/a3ah17mpMvR87zzVR2NlLiVjy5F7Yb1ClnpY89G9pXXRAyk/Ptv2DFtgiJGN6nvQPRfsVrzFxgRGxfrgNra9MAVl28Gjdn8xWp4GOO9P/2IsquU5YRjDfPbPetKNG7d0kl7V1/skRC3ctljqH3jxU6y044djZy5N4fhcecuu66cgaaflX9E+z7wOByHDo1KnmkGCcJh7cR1u+8DkeX/jrSCW/f2BlQ8cr8C61jfl6m+qG3RoEbecImrFkvRanjfex6Gw+mMijPVz65F9TpeD7y99bpgMnpN6PSEKyr5cRtEdGrgirsOgOVzVLaCWbHoPtR9rLxLyb3tXqQeyZ/SRd+qV69C9YurVQVkTpyBnuMuaPtZOMStfOwR1L71kqq87CtuQPqp0ae08G79AWWzlIlOjDxViR7lkCOnBuxx3e+CkfZvSkLaoEMH2Yey6ZcqYlP9+9uVazWJvw1K3kumo+f5zUfhav16X30TepzMLygBtT1tKxrZV96I9LGnxgaOz4uymdPaXhn7hZGAAU+usXZwOWNzA1fcrwEUxIaUOUb7fv0FOy9X/jnU+n1ZUPK2pEBSO45rfXURjLS9r5mLHmNO1gTMqpXLUfMy/2Pa3mJdyTUxLDYhDwQSlz/+HxybPHOMbvj4I+xZdIfCmJ5njUfmVG2jNdW2Aq1K+ZmpXF+PiqUBt1UkoM/8+9D06y+oXKmeZE+TlTbA80ZJwu55ylOJtMNHImeBMrDeHDMXphWMPR1AXHcFQFlhDjV1N7WPHb3elwVbeXlUluKdGwlIHvgneH/jid07t+yZs5F+WlglEMLHn28Xpk2Bd8evbWOEjCz0f2qtlTOXvx5I3EaAtE2xEj68mvbcfe1VaPyhvXiL/33ZqucgZPfWVE+rsGDkDVehLqRtUV7x0GLU/et1hSmxXMSE65OO/T4I3CqYM3d8hN7Le8qxc9IFilxaKQfnoc8SZUaZCMWG7B4LefV+0Ljv669QPl950plx2rnImqlMABjSSdN0YBv9xGWFhQ44HDwfqeXbvi83oXzBTQo/Mk4/D1mXK99i6eFoNOTVm7R+Pxvq8cfF48Dqq9vc9geXL1cmK9EDE11kEvu6lbhZcDgSonZS9dpnUP3cUwq8+ty9BCmufF0w7Cg02Adbx75af4gFc7Dy8UdR++Y/FV36PbwCyQdZMtF8cWIRlzHsmX8bGgo/bZ8gEpB95Q1I3m8g4PNGT15ZBqWmIXnwoJAfNWqplzqRNozLBV6gxLt9O+DzAUL02QIoJRX1n29EzWv+d4ZtreOFSfTgGD6yhbjN9XmVCVYNtyV2hTywpOy6q5TPVkjolAwuFk1JuQPQ+7o5IVfwYNuGcD7Eal97FVVrVir+vMdit9rYVOf/IveuhRbM6Mi+SqiPs7p33laem2o90y3yHH86GH2XPhZywkPdnHVlnlyxFzsmjlMEguvhCg/N7HPPEjiGWu3tQMvHGQeFSVIDzz2sB0BGyYzm4yga25J690O/ZStDbhm4bB7sU/vma/6M5L3GX4zUo44OqVLt5i/koCg79L72ZvQYFbKQY5TSdRrG2HuBKy6v6KHPQadO9ncUqxYNpYfq5AEHou/Sx0HpGXqIh/zbduyYOVn3FZcb3/v6W9Hjbyfp4oduQhl7NZC4/wFwkG7KDBCsRtyUQ11wDDkYcm1txBYQL3KXnISGLzZCruLpJppbPIjLdabwlAJN3ojLtXI/KDUVjd9uQdO2UgUOliQusacCo8O+AqMjIp5dEw1QI64W76x233AdGr/dHFfialHToeb5Z1G15knrExdYFLji8uDV5ng7izY14gaGEUbrVsfcY/FYcdNPGIvsG5SlXCP1R/Vj0YpbBeCGQOLy6OhLIgXDTP3ViKvFIX/H2Ie4EPf4k5E9p3P500jwV6tJYcmtAmOXBhKXx7nNiwQIs/U1jLj8unTp41E/HQ+Fm++P31E2faIi3iLdJm47bII8JvCV71QwptwAhULYZD83irj8OKz/ymc0L7bXCqevbCd28oQeAVV0bOIGkC3JO6SduMVFoyELyqKwJiNmKHOMIi63Q6/4Xi679o3XUblMWQ3IJm7b7MtITu4RQNzigyDL/EjMsk0v4u66eiaafvxWgQv16IWsiVORMlTbp94N3xSias3yTtfUaSNHIWfeLTHNTYLscbeTKB7QTtzmeIUaK9+e6UXcrvIpxMSiCAfbK24bYB+SKJ7UIVujuwggV4SYmqa7XsRVO/802mktzqMTZMV9iERxVsc0o5Y+EtOLuDzRXdmV0+Hb9bvRfPXrSzlsBPrctwgQkmLSnxDEZWwKuVyrOiZ2vg5E+tZQign64IP1Ii7Xymul7bn/nk57XR3d8YtOyz8avW+aF1ZATyhbEoK4RAXkdH7TccX9G4APQgFg1p/rSVy/zz4vGjZuROMPpf54AYohuDsYhszng5CWhpRDDg0rmizc+UgA4jYiMzOLBg9uUBK3pKQnvE17rZojV3fihssQk/ZLAOJuIlH0x4UqiMv/gVm4HKpN3OC/MZYnLrHF5HRd3xVxHwQQeUJWE6wyNnETnLiM/R+5XK90RdxzAKinDzQBOYOZYBM3oYnL4PP1pxEjdqkT11+kj3YDFNvZSxxIbhM3oYm7mUTx8FYPO+1xm/e57k8B0rfQrQ7EtombwMRl7C5yuW4NQVyJhzdaLp2faiC5hik7dfhdM1SkWrIUy8TjMnYcuVwbgxPX7c4HUftbFUPhjV6ZGnGzps1CxplnRS80gUZWrXgSNa/wGoztzSLELUdpaX8aN84XlLj+7YLbvRVElsrPU71uDaqfXamYGH/Si3uUtSASiIsRuVI24zJ4/6sMALQIcVeSKF4W6KzqHrd5nytZ7kVEV6mPtKj9EBFDTNi57q03UfHYPzpZ1nvWPPQYbfIKCvzFQ17+e+ERt7jYCVmWTDgHXZpUt+EtVDy6qNPPKT0TObPnxVy4xEpYBNrqz/DzyCLVVFR97liElAIzP+5mu7Bn70A68URF4rcuV1z/qmux2r48d9jOq2d0mW+LbxtShuchKSfXqhyMyG7+BGife7MiyXWgAJ5Kqs8/luiW2CQiY7vu7K/d2/HHwYnrdl8Pos5/XzSySA8xateaeuhJBJlavIDWHYeWaLDIiFtY2AcOx288JFR3A7VSsK+huURSQM0DrUQnkpyUofn+1dbkTXHpENYet7UTk9zPA6RerNakXvt2/IE9C+80PHbWpHB0Mssf4ztnLqhXptlNnkmi+LiakUG3Cv59blHRCRAEZQlys7vL7Wvch5qX16P23Q3wlW23gsW625h8wF+QceoZyPj7mbrr0kBBDerr96ejjqqKirh+8kruzQAZk4teA48DRfAPtsYff4T3j9/BGhtjyuytsWnGiONB6enpSB64PxxDhkRdOd4YYwO0EFtKTtfVXekNueL6iet2TwaRsrCC4Z7YCrsRAjKSvIfQ8MO7TJcQHnFLSlLgbfoJoP27EXi2q/FCgNiL5HQF/a4Ki7jN2wWJL9sPxcsXW2+3QYBBlkdQfr47mMfhE/fnn9NQVbUVwP90GwhtR+OBwEskiueFUhw2cVv2ujNApHo8EUqR/XMbgTAQkMGYk1yuklB9IyOuf6/r/T5RqqyHAsf+ucEIMLaOXK6Lw9EaEXFb9rrjASiDOsPRZPexEQiOAK/6dBiJonpp+Q5jIycuYwSPxJ/2jLRnwkZAQwQWkijeHK68iInrX3WLiwsgy18CiL5OZ7gW2v26AQLsdyQ7DqFhw3i20LBaVMRt2TKsAHBpWFrsTjYCwRBg7BJyudZEAlL0xC0pyYHXy7Md949Eod3XRkCBAGPvQRRPJiIWCTJRE9e/6rrd54NIWZI7Eu123+6OQC2InOR0/hQpEDERt3nL4H4DoNMjVWz3txEAY7PJ5YoqrW3sxC0s3A8ORzGv52FPhY1A+AiwjSj94YTAJ+fhj1XJ1hjJ4Na+TJL+DuC1aMbaY7ojAqwCPtlFI0b8Eq33Ma+4beR1u58A0bRoDbHHdSMEiC4ipzOmSyztiFtYmA5H8lcADetGU2C7GikCjK0il2tKpMM69teMuC2nDAeDwMmbFath9vhERIAVocl7LBUU1MXqnabEbT5l8O93X1XLdh6rsfZ4SyNQDlkuoPz8bVp4oTlx/eT1uBeAUVtKSC0MtWVYGQHmA8Np5HK9q5UX+hCXB+JI0hoQXaSVobYcSyPQ5TPzaL3Shbj+Vbf5ndoHVkwQHS2Y9jgVBIjdS07XXK2x0Y24fvJu3twXgvC51dKVag1yN5b3EpzOcZHGIYSDl67EbflY42/UPgNwYDgG2X0SBoEPkZw8loYNa9TDI92J6yfvlm/+Al/SvwEaqIcTtkyTIcAY/ys7hkSxVi/LDCGun7xu9zAQPgKor17O2HJNgcAmNDWdQgUFlXpaYxhx/eQtLh4K2fe+vfLqOaVxlf0J6uvP6Crfl5aWGUrcFvIe1ELeQVo6YsuKMwLE/oVG79la3IqF44nhxG0h7wGQZX4YPTQcI+0+pkdgPZKTL9TrQ0zN+7gQ109ej6c3IL8MRieYflpsA7tGgLElEMXZRCQbCVPciOsnb3OCkeUALjHSaVuXFggwH0i4hpzOR7WQFqmMuBLXT15/ngbPXIAtsGL94EgBT5D+ewFcSKL4Trz8iTtxWx1nbvfJIFpnPwGKFxXC1MuYhKSkcygv78cwR+jSzTTE9a++RUWDIAgvAWirkq2L17bQ6BAgthaN3ulGnRwEM9JUxPWTd+vWVNTV3QXgOjtTTnT80nwUsSowuppEcbXmsqMUaDritm0dJOkkAE/b+XijnFmthvHrW0GYEE3uA61MUJNjWuK2nDrwbDmLAUzUEwRbthoCrB6EO1C+94GO5UjNgJepiRvw4TYGRMvsvLwGUYbYx5AxnVyuHwzSGLEaSxDXv/pKUgaA2wFcY6lKlxFPSTwHsN0AzYXTuVKPGFotPbMMcdtWXx4iKSfdD0ZnawlEN5fFY2aXQpbvovz8CitgYTnidtg+LLSPzmKiGc+Q+DKSvDcFqykWkwadBluWuP7tQ/OjzLNAdAeAPJ0wSlCx7E2AbidR3GxFBy1N3LbVlzEBknQuiG60V+CgNOSBMG8C4GnreUZ5y7aEIG4g+sztPhECrgejU+2kJG2/2nUArYYsL6H8fF6rzvIt4YjbNlWSdAiAqQAmAOhn+ZmKzoHvwdhyeL3PUEHB7uhEmHNUwhK3jcA8dNLnOxOMTQHY6ISPQOPXszJeBrCSXK6N5qRd7FYlPHEV2whJ6gei88DkcwAcn0Ak5tVq3gDRC+jV610aPJjXDEvo1q2IqyAxL77S1DQawBkgjLHg62O+DXgbwDvIyvqkO5A1cP66LXEVJOanEh6PC4yNBNHRAOOr8f4mWrL4acC3aM5X8Dlk+d9aZT00kY8RmWITtwu4WHHxAfD5RBDlAUwEIQ+MDgKQGhHCkXbme1SgFIwkAFsAFIOoiJxO/urAbi0I2MSNgAr+C4+iov1ANBhJGAQm8Mw8fcFYHxDlAiwHoB7NIllmwB56H4DmZMbEqsGoHMAuAOUgVg5Gv4JoGxyObTR0KP+Z3UIg8P+TEB3VwckXiQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/images/activity/guidance/header.png":
/*!****************************************************!*\
  !*** ./static/images/activity/guidance/header.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/header-f166bb74b6cc753b3bfd935e284f66d3.png";

/***/ }),

/***/ "./static/images/activity/guidance/huabei.png":
/*!****************************************************!*\
  !*** ./static/images/activity/guidance/huabei.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/huabei-535f4544eba50ef9ccf4cf5126d03b25.png";

/***/ }),

/***/ "./static/images/activity/guidance/huan.png":
/*!**************************************************!*\
  !*** ./static/images/activity/guidance/huan.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/huan-216af3bd48b9fb49b5d39d1d9386b598.png";

/***/ }),

/***/ "./static/images/activity/guidance/hui.png":
/*!*************************************************!*\
  !*** ./static/images/activity/guidance/hui.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hui-da65d48326176ecbea066d058527c42e.png";

/***/ }),

/***/ "./static/images/activity/guidance/kuai.png":
/*!**************************************************!*\
  !*** ./static/images/activity/guidance/kuai.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kuai-4cf9d9219144272ebeaa819ff1875350.png";

/***/ }),

/***/ "./static/images/activity/guidance/mai.png":
/*!*************************************************!*\
  !*** ./static/images/activity/guidance/mai.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mai-6577249d3ef7ed2763b77aaad254ca53.png";

/***/ }),

/***/ "./static/images/activity/guidance/mian.png":
/*!**************************************************!*\
  !*** ./static/images/activity/guidance/mian.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mian-9447f00295876585884fa6e787e583a5.png";

/***/ }),

/***/ "./static/images/activity/guidance/security1.png":
/*!*******************************************************!*\
  !*** ./static/images/activity/guidance/security1.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/activity/guidance/security2.png":
/*!*******************************************************!*\
  !*** ./static/images/activity/guidance/security2.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/security2-5ad9f59ec375510e04b8b279967beda7.png";

/***/ }),

/***/ "./static/images/activity/guidance/shuju.png?v=1":
/*!*******************************************************!*\
  !*** ./static/images/activity/guidance/shuju.png?v=1 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shuju-79d3e9dff9d6adfd300785d9fba1b1fd.png";

/***/ }),

/***/ "./static/images/activity/guidance/tiao.png":
/*!**************************************************!*\
  !*** ./static/images/activity/guidance/tiao.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tiao-339ffeb8bd35801e329cf45748deef05.png";

/***/ }),

/***/ "./static/images/activity/guidance/top.png":
/*!*************************************************!*\
  !*** ./static/images/activity/guidance/top.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/top-de60a6c4978c2ac35eef398c78c6e023.png";

/***/ }),

/***/ "./static/images/activity/guidance/valueAdd1.png":
/*!*******************************************************!*\
  !*** ./static/images/activity/guidance/valueAdd1.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjY2JhZTFjNy1iMzBmLTRjN2UtYjVhMC1jMzY4MDY3YjQ3MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzA3NDA2NThBNzVEMTFFODk5NEI4M0I1MDdGMEYxMUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzA3NDA2NTdBNzVEMTFFODk5NEI4M0I1MDdGMEYxMUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGU3MDM1YTUtMTkzYi00M2RkLWI3MGYtMDM3MDRlZjQ2NTgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNjYmFlMWM3LWIzMGYtNGM3ZS1iNWEwLWMzNjgwNjdiNDcyMiIvPiA8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"

/***/ }),

/***/ "./static/images/activity/guidance/valueAdd2.png":
/*!*******************************************************!*\
  !*** ./static/images/activity/guidance/valueAdd2.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjY2JhZTFjNy1iMzBmLTRjN2UtYjVhMC1jMzY4MDY3YjQ3MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzA5NERBNjlBNzVEMTFFODk5NEI4M0I1MDdGMEYxMUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzA5NERBNjhBNzVEMTFFODk5NEI4M0I1MDdGMEYxMUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGU3MDM1YTUtMTkzYi00M2RkLWI3MGYtMDM3MDRlZjQ2NTgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNjYmFlMWM3LWIzMGYtNGM3ZS1iNWEwLWMzNjgwNjdiNDcyMiIvPiA8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"

/***/ }),

/***/ "./static/images/activity/guidance/valueAdd3.png":
/*!*******************************************************!*\
  !*** ./static/images/activity/guidance/valueAdd3.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjY2JhZTFjNy1iMzBmLTRjN2UtYjVhMC1jMzY4MDY3YjQ3MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzA5QTkyQkNBNzVEMTFFODk5NEI4M0I1MDdGMEYxMUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzA5QTkyQkJBNzVEMTFFODk5NEI4M0I1MDdGMEYxMUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGU3MDM1YTUtMTkzYi00M2RkLWI3MGYtMDM3MDRlZjQ2NTgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNjYmFlMWM3LWIzMGYtNGM3ZS1iNWEwLWMzNjgwNjdiNDcyMiIvPiA8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"

/***/ }),

/***/ "./static/images/activity/guidance/xin.png":
/*!*************************************************!*\
  !*** ./static/images/activity/guidance/xin.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/xin-9af24173e99ea2d6f5e12f3f84788ad2.png";

/***/ }),

/***/ "./static/images/activity/guidance/xu.png":
/*!************************************************!*\
  !*** ./static/images/activity/guidance/xu.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/xu-14f8f261904d108d2063033ebba133f4.png";

/***/ }),

/***/ "./static/images/activity/guidance/zhima.png":
/*!***************************************************!*\
  !*** ./static/images/activity/guidance/zhima.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/zhima-2e6907d5d6dc7bff27d19c7f8de39a1c.png";

/***/ }),

/***/ "./static/images/activity/guidance/zhuji.png":
/*!***************************************************!*\
  !*** ./static/images/activity/guidance/zhuji.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTAzMjUyMDRBQ0VEMTFFODkzMjI5MUM0NENERDZCMDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTAzMjUyMDVBQ0VEMTFFODkzMjI5MUM0NENERDZCMDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDMyNTIwMkFDRUQxMUU4OTMyMjkxQzQ0Q0RENkIwNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MDMyNTIwM0FDRUQxMUU4OTMyMjkxQzQ0Q0RENkIwNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg4Bl84AAA8OSURBVHja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"

/***/ }),

/***/ "./static/images/common/error-bg.png":
/*!*******************************************!*\
  !*** ./static/images/common/error-bg.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/error-bg-c8f331c82fea3d8b73a4c35646f71b4c.png";

/***/ }),

/***/ "./static/images/common/loading.gif":
/*!******************************************!*\
  !*** ./static/images/common/loading.gif ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/loading-1735fc3499d75dc14315118338b29fad.gif";

/***/ }),

/***/ "./static/images/common/logo-download.png":
/*!************************************************!*\
  !*** ./static/images/common/logo-download.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-download-0b25ffcb7a740ff6e4eeb9e08786ad34.png";

/***/ }),

/***/ "./static/images/help/maintain-1.png":
/*!*******************************************!*\
  !*** ./static/images/help/maintain-1.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/maintain-1-3df74ffaa61122f90c06a4e6ace811b2.png";

/***/ }),

/***/ "./static/images/help/maintain-2.png":
/*!*******************************************!*\
  !*** ./static/images/help/maintain-2.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/maintain-2-7926d126ced3484855367b77843a7d68.png";

/***/ }),

/***/ "./static/images/help/order-1.png":
/*!****************************************!*\
  !*** ./static/images/help/order-1.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/order-1-22050dd7738411798b2a5cd537ba8779.png";

/***/ }),

/***/ "./static/images/help/order-2.png":
/*!****************************************!*\
  !*** ./static/images/help/order-2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/order-2-61772d425e509723038fdadfa6578f71.png";

/***/ }),

/***/ "./static/images/help/order-3.png":
/*!****************************************!*\
  !*** ./static/images/help/order-3.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/order-3-def98148fc03fec9b527fb846a66b377.png";

/***/ }),

/***/ "./static/images/help/xd1.png":
/*!************************************!*\
  !*** ./static/images/help/xd1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/xd1-cc8a7c1561e594b85b65beaf510397b1.png";

/***/ }),

/***/ "./static/images/help/xd2.png":
/*!************************************!*\
  !*** ./static/images/help/xd2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/xd2-3859470ccae1360e5543515fa30dcad0.png";

/***/ }),

/***/ "./static/images/help/xd3.png":
/*!************************************!*\
  !*** ./static/images/help/xd3.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/xd3-06d02be39d3d2ebf12a5195a16f0e835.png";

/***/ }),

/***/ "./static/images/home/sign.png":
/*!*************************************!*\
  !*** ./static/images/home/sign.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/myaccount/receipt/apply.png":
/*!***************************************************!*\
  !*** ./static/images/myaccount/receipt/apply.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/myaccount/receipt/cancel_fapiao.png":
/*!***********************************************************!*\
  !*** ./static/images/myaccount/receipt/cancel_fapiao.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABHCAYAAACZKWD0AAAAAXNSR0IArs4c6QAAF3VJREFUeAHdnEuLJEUXhiuzbt3j/X5B0REVEVyI4MKNulTc6k5wpSDoX1B/gfAJgq4Ed7pUdKluXIiiILgQ8Y73u8501y3ze57TEUl2dVV31UyPzkxAdWZlREaceOONc06ciOqicxKpruvimWee6d5www3DCy64oByNRvWxY8emjzzyyJjnnaeeeqouiqI+kSasO79nHfPfU55lTrj+V199tUT28t133y2vvPLKkrq6w+GwyP0455xzJg8++GC1Th8aobPwq1xT54o333yz/88///QV4rfffpuMx+PZY489Nlm1jnmgeK8NUEGHe3S4/uCDDzqPPvrozO/nnntu8d57702efvrpSjl41v/hhx+ifQeQgSy8KsOqQOT+WP/vv//e29zcLCaTSXneeefVfK9uvvnm8T333DNbpb61Ac2dQN4BrKwBsaaT43feeaeyk3bkgFRQzk53Xnzxxe73338/u+666wa+I7O5BKtthwEbOGDUP+E6JW9AB6eAO82D8fbbb3fJG2xtbdWffPLJ6OKLL+7fdddd1eeff15ldlnXKmAog+mVV17pclGmYOyff/5ZXXrppVMGcsazffu5DqABxK233tqDkUMb+eOPP6ZPPPHE+CBhEwOCMd4DZO+iiy4abm9v1xsbG9sAJitm8ywAeBk6pBMd22JaTjNIPjNZ30svvTRkYEvqHMHW3o033ti57777JsgVA/zWW2/1vvzyyx5TWJB9vq+ayPJSvbJ2r7766n5VVd1ffvmlM51OZ5Bgexl5VgaURso8xQXi2muvHc0DED2c+2Nnfv755zoDobBMrdKOX3jhhT2BklF33HGHU2oXw3NZqtx06sHMrXkwUpk+ZQYyWRbB/mZ6mk+ebQ6powCMMaQQ0C6Mni4DhvxIrfq79LuEAAWDX3W73ZmzJvcrl+/lm/2uToHXX399yLQqFZqyU8BcqqxTJzoarG+++cb3ZLHTJes172fUW8O6wU8//TShbORbpp0QuIaBUzrRdXqT59RvkgBTz+zvv/8uAKwLmLtmjPmkDnI7WLJYvVgOBoPyqquu6kZmU1sjX/MkDaCqKFQBRlebEYxVJgZqRFYju5ZtaRIYPwgwlPKwasJUGj/00EMNA9ovp/IlRqRn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"

/***/ }),

/***/ "./static/images/myaccount/receipt/success.png":
/*!*****************************************************!*\
  !*** ./static/images/myaccount/receipt/success.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/success-6028e4a39e5b7f859e51d00235b6c24c.png";

/***/ }),

/***/ "./static/images/myaccount/receipt/ziyuan.png":
/*!****************************************************!*\
  !*** ./static/images/myaccount/receipt/ziyuan.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ziyuan-5a0818271da53f0c61c35d5609fdfbf3.png";

/***/ }),

/***/ "./static/images/myaccount/return/standard1.png":
/*!******************************************************!*\
  !*** ./static/images/myaccount/return/standard1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/standard1-423df5c821b160170d5254f7299d2204.png";

/***/ }),

/***/ "./static/images/myaccount/return/standard2.png":
/*!******************************************************!*\
  !*** ./static/images/myaccount/return/standard2.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/standard2-748fd710d650ab67032ebc38ebd82a1c.png";

/***/ }),

/***/ "./static/images/myaccount/return/standard3.png":
/*!******************************************************!*\
  !*** ./static/images/myaccount/return/standard3.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/standard3-71f5d0dc5aaedecc3b2acc5c9a719d4b.png";

/***/ }),

/***/ "./static/images/myaccount/return/standard4.png":
/*!******************************************************!*\
  !*** ./static/images/myaccount/return/standard4.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/standard4-cb299552e23812976c706bcb1782df39.png";

/***/ }),

/***/ "./static/images/myaccount/return/standard5.png":
/*!******************************************************!*\
  !*** ./static/images/myaccount/return/standard5.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/standard5-86ca69c7b8fd0bfeeb334e152c432a6a.png";

/***/ }),

/***/ "./static/images/myaccount/return/standard6.png":
/*!******************************************************!*\
  !*** ./static/images/myaccount/return/standard6.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/standard6-f369cfeba248774f546ce633ea16e151.png";

/***/ }),

/***/ "./static/images/myaccount/return/standard7.png":
/*!******************************************************!*\
  !*** ./static/images/myaccount/return/standard7.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/standard7-30174eb36099c65ca67682eff6ca11d0.png";

/***/ }),

/***/ "./static/images/myaccount/return/standard8.png":
/*!******************************************************!*\
  !*** ./static/images/myaccount/return/standard8.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/standard8-9060081086bd40253accea8864d65d91.png";

/***/ }),

/***/ "./static/images/myaccount/return/standard9.png":
/*!******************************************************!*\
  !*** ./static/images/myaccount/return/standard9.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/standard9-75feecc06adcb72956386d8b096a01ba.png";

/***/ }),

/***/ "./static/images/mytrade/creditcard/anquanma.png":
/*!*******************************************************!*\
  !*** ./static/images/mytrade/creditcard/anquanma.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/anquanma-33956c9fd99686e417cc048eec2334db.png";

/***/ }),

/***/ "./static/images/mytrade/creditcard/baizhang.png":
/*!*******************************************************!*\
  !*** ./static/images/mytrade/creditcard/baizhang.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/mytrade/exchange/chaozhi.png":
/*!****************************************************!*\
  !*** ./static/images/mytrade/exchange/chaozhi.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/mytrade/exchange/fangbian.png":
/*!*****************************************************!*\
  !*** ./static/images/mytrade/exchange/fangbian.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/mytrade/exchange/five.png":
/*!*************************************************!*\
  !*** ./static/images/mytrade/exchange/five.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/mytrade/exchange/four.png":
/*!*************************************************!*\
  !*** ./static/images/mytrade/exchange/four.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/mytrade/exchange/msg.png":
/*!************************************************!*\
  !*** ./static/images/mytrade/exchange/msg.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/msg-8a08fb35eb6af0a2053fd5700dd90183.png";

/***/ }),

/***/ "./static/images/mytrade/exchange/one.png":
/*!************************************************!*\
  !*** ./static/images/mytrade/exchange/one.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/mytrade/exchange/shengqian.png":
/*!******************************************************!*\
  !*** ./static/images/mytrade/exchange/shengqian.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/mytrade/exchange/three.png":
/*!**************************************************!*\
  !*** ./static/images/mytrade/exchange/three.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/mytrade/exchange/two.png":
/*!************************************************!*\
  !*** ./static/images/mytrade/exchange/two.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAACUdJREFUeAHtXGtsHNUVPnd2vXGy9noTG5I6iYnjRwgCHGIiBXATBG4bVKRWlCJaoUpNS4tQCmqDeFTqjyqif0pBSgNFrSqkCERFBRJqVZDq8AiEEkjshjRpHTs4ickbE3sfjuPs7u35Jrv2zs7u7MzszKzX5EqruXMf557zzbmvc89dQR4GKaVyeHzsBklKh5SpFVKKFSRkM7MQIilqSVCtyo6kKKdHOR7h9CEhZL8QSr+g1L6WeXV9QoiUV2wLtxs6Fo83TqQS35FEtwuS6/kZLqVNZnhUkniXnzuqFf+rTcHgiVLoFavrCkBDUlYn4hGA8gNmoBuaU4wRO/lpTephIbb7g6FXm4WYsEPHqI6jAJ2RsmY0Hn1AktxMUi4yatjxPCFOCRK/Cwdrn79SiJhT9B0BiDXEPxiPPpSS8pdEst4p5uzRESOKEL9pDdZuZQ1L2KMxXatkgA6fj3QlkqnnSNJ102RnQEzQfr9PebBlbuj9UrixPTaw1gQOxce2JpNy54wDB4jwBwNv4BG82gXJlgYdmhhdTgl6RUrqtNuwl/WEoL3kp3vaq8OfWm3XMkCD0ehtKUq+xjNUndXGylmeBR1TyHdXa23tW1b4sNTFBqKj302K1BuVBg4AAc/gHTK4AlB/PHK/FOIvPH3b7s9WGHOlLPMOGSCLWfqmuhhQB2G3FnxmmXWqHBaYQsp722rDfy1GsyhAGHOgmhWtOflQEGLSJ5U7io1JhgCps9VF6q3EMScfJrlpGLipilYbzW4FB2l17YCpvMJmq1wQjN5V2dTlSuFxtSBAA+ORpyplnWMEQrE8yAhZC5XL28WwfcAqlLUob34hYpWazoO29PnEunzbEp0GMSh+7K2+LODgo0LWtMz+3I+sS8CuvBx7qyTres/pz2jHmRP0yegInbkwQWwdoIY5c6i9NkzrGxrpzsYmCvp1LOfKZO+d926q7ERPZxPQdCHYc87FIke8Nln8k4H5bf8+Oho3NuPUB6rpsZWr6FuNV2XL4GBcjMyvCS3LtidpuhiMXV6CA63ZcrCXNvXuKgoOUBiZnKBH931Ifxg86CAo2aRk/SUMptOmNGiIzaST8ciQl5bAJ/Z/RK99NjTNjYXYthtuoa8tWmKhhsmibJkMBEPNGfPtlAbBhuwlOH/89H+G4Mz1+fmQo3D41YE9dCGVLFzAbg6bilUs0vWnRjxeNMHA7kkYikfp9wP/0bU1j0F5sPUa+uZXmqhxbpDiiQTtj4zQlgN9NBgb05Q/N3mB3jg5TN9evEyT7sRLGouXQEvVIBzNcLzbCeJmaDw7eIAmc75+Aw/Af/vqBrp/+UoVHNDBjLV2wUJ65aZuaq3Rm592fX7KTHN2ynSnMbkEEJ9b3c1rganuZoei2Toj/OXf5C+fHXxs8nuus4uWsNbkCwDqx8tX6LIOx3C26HwAFjjLA+UMKLc730x+iu+dPUkXZUqTeeuVjdQRNj4M6ahr0NTBS64W6gqUkMDdTMXED7QGYmPrSqBlqeqJ8+PUntNdvt/UWpRGwJf5ltNFq32+6ReHY+opMGPjv3RWXtpxsBXeMAjjZzUMRrWDNOo3By8d5VulZaY8a1AY2ChwJDBTodxl/nFKO26Bn875V7jKFrBR4GXhaisOEH+fZ6vXjx/RUKpSFNqwaKkmzekXYMMAsQvKDA6HeP3z83//S8fh95a2Ujjg7vkBsFHS/jk6BmZCwvB4jDZ+9A5FLk5q2FlYPY82tV2rSXPlhX2XMDWEXCFeItGzbO744cfvEJ7ZIaD4CPuwuqqq7GS34iFF9exyi7xNutCYH338Lg2PxzUUWN3pmVU30fXhBZp0117Y6w1tujdX2uB8Ipmkn+59j/qjo7raT163hroXLtalu5bA2OhXX661VpwwVtg/69tFvec+1xV+7OoOumtJsy7d7QTuYuwwOQMCL8zo8X27aSdvRXLDT1pW0sbmq3OT3X9nbDCLzQiAthzYS38/eUwn9D1LW2hz+/W6dE8SGBt0sYgnjRk0spVtQy8dG9SV+AYvBH997Y26dA8TIpjFhjxsUNfU9qOHCPah3HBz/UJ6qmPtlLkhN9+Td8aG/R1lvyeN5Wnk9RNH6cmDfbocTOPPsn0owNuJcgZgwwApZQHobT7/euKT3Tr5W2pC9KfO9QTza7kDsFHg3u81I3u+OEsP931AOPbJDrBDv7DmVtf3WNltGsWBDfsRqQazEdg/jAo7lfffyDm6b/fbFEtc1JBcEJhDL6/tpmXBGk16uV74RGW0raaunrsYLoaInV4wcoRPTjfyFiIXnKC/iv68Zv2MAQdYqPdBGJvMKLjDbYBOT5xXN59fsNE+O2Dz+fzqLromND87uexx1iAVE/VsTr2RIxPDbp1sYPN574c76HBMv+TqalhEt/DPStjAJ6oYr9wK6FXVwr8UN4nUqQIRNkz1cINfd6PRPby3ygcO2oK1ED8roesKa4BaoZ0u25O5ZpXpYjjm3W6DkKkqx89rzRamKhkUWlztnvag2WwspgDCfSvig3sDvmxnHc+x69gmxBVhZnXNRwiMMQYqFmkmpwCCNwPuW6XTHX0MO6hBhU5fnWIYGGQ8O0BTHaQzxN1yoMIu/fTEeKaZkp5Nc2vccXtRudI7UGkAQpmBWOQXKZlyRZNKQsaDyopQNrfVhAq74IEHnur9fMeqtxx+ih5gULgJvoDXHqxbzVO85pbi1BiUqYkCuKnHT+1GKVNgFj4ha1pmDTgQVQcQElV/YUHbEP9SBJY1n480ZNeNQRlAuKsFBuJjH/CGuzOTNhufuI3YFqy7mbVIezqZFjavBiFPrcDXGBlBvVvFLEFKlQ0yFgAHYhYECJm4BYNrjIxWXnRRpmIDywTZjG76QDZDgFAA96nYw+E+RlnrFobMCg2QBTIVuysG8YoChEK4mcc3Dh+YDSBBBshi5rYhZC84SCMzN+BqZkqIF3mx5K7fSW7DTr2jW7HmmAUHzVoCCBUuXwsHCgZB7bd8jVG9rG9QbiZlqbwyz2bGnFy+LWtQhoC6TsJNPUmbOG6bToaeG08eb9i0TNva5oUe4bitmbhkwWb7n5uUDBC+PDa4l/8ex0QfuPwHSyZAQpGhy3/RZRIpLpb+k7e7Ocp3H+S6Uk9weUxg3zz1oLOnYv/krRB8PFb52L1/VSX9TeD/AYZzkwNaKcS9AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/returnflow/detail/success.png":
/*!*****************************************************!*\
  !*** ./static/images/returnflow/detail/success.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/success-cb526341eb7f5be3a5b518c1a4b7d51e.png";

/***/ }),

/***/ "./static/images/returnflow/detail/waiting.png":
/*!*****************************************************!*\
  !*** ./static/images/returnflow/detail/waiting.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/waiting-5037d4a7e2fbd180b7ec5f42d8acd469.png";

/***/ }),

/***/ "./static/images/site/appdownload/aihuishou.png":
/*!******************************************************!*\
  !*** ./static/images/site/appdownload/aihuishou.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/aihuishou-dd6d68bd772f9cc690c375c7f185ac6a.png";

/***/ }),

/***/ "./static/images/site/appdownload/banner_channel.png":
/*!***********************************************************!*\
  !*** ./static/images/site/appdownload/banner_channel.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner_channel-289f02d882d4c785b23008569cd2f396.png";

/***/ }),

/***/ "./static/images/site/appdownload/banner_ix.png":
/*!******************************************************!*\
  !*** ./static/images/site/appdownload/banner_ix.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner_ix-921e8857b2506e52df6a4bd0581d3f71.png";

/***/ }),

/***/ "./static/images/site/appdownload/banner_samsung.png":
/*!***********************************************************!*\
  !*** ./static/images/site/appdownload/banner_samsung.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner_samsung-9c1bce2b3a71bbf91f5f16445495d8d6.png";

/***/ }),

/***/ "./static/images/site/appdownload/banner_zx.png":
/*!******************************************************!*\
  !*** ./static/images/site/appdownload/banner_zx.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner_zx-eba4e8df85d5a4f7fe29a8a7623a9bd2.png";

/***/ }),

/***/ "./static/images/site/appdownload/cooperation.png":
/*!********************************************************!*\
  !*** ./static/images/site/appdownload/cooperation.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/site/appdownload/weixin_down.png":
/*!********************************************************!*\
  !*** ./static/images/site/appdownload/weixin_down.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/weixin_down-3343067f6b88a424e342e7e5d6e4b013.png";

/***/ }),

/***/ "./static/images/site/appdownload/xiaowu.png":
/*!***************************************************!*\
  !*** ./static/images/site/appdownload/xiaowu.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/xiaowu-1e65e5c57266efabbb35feb035b1d827.png";

/***/ }),

/***/ "./static/images/site/appdownloadproceed/appicon.png":
/*!***********************************************************!*\
  !*** ./static/images/site/appdownloadproceed/appicon.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/appicon-0b25ffcb7a740ff6e4eeb9e08786ad34.png";

/***/ }),

/***/ "./static/images/trade/results/banli1.png":
/*!************************************************!*\
  !*** ./static/images/trade/results/banli1.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banli1-6028e4a39e5b7f859e51d00235b6c24c.png";

/***/ }),

/***/ "./static/images/trade/results/banli2.png":
/*!************************************************!*\
  !*** ./static/images/trade/results/banli2.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banli2-f97a2117245d79fd4ce68ae57bd4d4eb.png";

/***/ }),

/***/ "./static/images/trade/results/logo_xhj_zhima.png":
/*!********************************************************!*\
  !*** ./static/images/trade/results/logo_xhj_zhima.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/trade/results/pinggu.png":
/*!************************************************!*\
  !*** ./static/images/trade/results/pinggu.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pinggu-c5a8d9c5728eef3be226170c90aca437.png";

/***/ }),

/***/ "./static/images/trade/results/pinggu2.png":
/*!*************************************************!*\
  !*** ./static/images/trade/results/pinggu2.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pinggu2-3d96809f954ac889eb0d62ef98ffcb03.png";

/***/ }),

/***/ "./static/svg/arrow-left.svg":
/*!***********************************!*\
  !*** ./static/svg/arrow-left.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "arrow-left",
  "use": "arrow-left-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"arrow-left\"><defs><style type=\"text/css\"></style></defs><path d=\"M246.272 499.2l331.264 331.264a38.4 38.4 0 0 1-54.272 54.272l-358.4-358.4a38.4 38.4 0 0 1 0-54.272l358.4-358.4a38.4 38.4 0 0 1 54.272 54.272L246.272 499.2z\" p-id=\"7207\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/butongguo.svg":
/*!**********************************!*\
  !*** ./static/svg/butongguo.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "butongguo",
  "use": "butongguo-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"butongguo\"><defs><style type=\"text/css\"></style></defs><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#EA5645\" p-id=\"11865\" /><path d=\"M536.868571 365.714286l168.228572 153.6a36.571429 36.571429 0 0 1 0 51.931428 38.034286 38.034286 0 0 1-24.137143 13.897143H343.04a36.571429 36.571429 0 0 1-36.571429-36.571428 35.108571 35.108571 0 0 1 12.434286-27.062858L487.131429 365.714286a38.034286 38.034286 0 0 1 49.737142 0z\" fill=\"#C03A2A\" p-id=\"11866\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/close.svg":
/*!******************************!*\
  !*** ./static/svg/close.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "close",
  "use": "close-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"close\"><defs><style type=\"text/css\"></style></defs><path d=\"M512 457.728l280.064-280.064a38.4 38.4 0 0 1 54.272 54.272L566.272 512l280.064 280.064a38.4 38.4 0 0 1-54.272 54.272L512 566.272l-280.064 280.064a38.4 38.4 0 0 1-54.272-54.272L457.728 512 177.664 231.936a38.4 38.4 0 0 1 54.272-54.272L512 457.728z\" p-id=\"7331\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/jiangjia.svg":
/*!*********************************!*\
  !*** ./static/svg/jiangjia.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "jiangjia",
  "use": "jiangjia-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"jiangjia\"><defs><style type=\"text/css\"></style></defs><path d=\"M1007.64929 551.479872c-35.039876 34.840786-43.231016 71.18897-25.511988 115.415437a56.968241 56.968241 0 0 1-31.570018 73.947791c-42.008034 17.064875-61.661081 45.762306-61.83173 90.671369a57.281097 57.281097 0 0 1-57.167331 57.167331c-44.937504 0.170649-73.606494 19.795255-90.671368 61.860171a56.968241 56.968241 0 0 1-73.947791 31.570018c-44.226467-17.775911-80.574651-9.584771-115.415437 25.483547a56.114997 56.114997 0 0 1-79.067254 0c-34.869228-35.068318-71.18897-43.231016-115.415437-25.511988a56.996682 56.996682 0 0 1-73.947791-31.570019c-17.064875-42.036475-45.762306-61.661081-90.671368-61.831729a57.281097 57.281097 0 0 1-57.167331-57.167331c-0.170649-44.909062-19.823696-73.606494-61.860171-90.671369a56.968241 56.968241 0 0 1-31.570019-73.947791c17.74747-44.226467 9.55633-80.574651-25.483546-115.415437a56.114997 56.114997 0 0 1 0-79.067253c35.039876-34.840786 43.231016-71.18897 25.511988-115.415437a56.996682 56.996682 0 0 1 31.570018-73.947791c42.008034-17.064875 61.661081-45.790748 61.83173-90.671368a57.281097 57.281097 0 0 1 57.167331-57.167331c44.937504-0.170649 73.606494-19.823696 90.671368-61.860172a56.996682 56.996682 0 0 1 73.947791-31.570018c44.226467 17.74747 80.546209 9.584771 115.415437-25.483547a56.143438 56.143438 0 0 1 79.067254 0c34.840786 35.068318 71.18897 43.231016 115.415437 25.511988a56.968241 56.968241 0 0 1 73.947791 31.541577c17.064875 42.036475 45.762306 61.689523 90.671368 61.860172 31.59846 0.113766 57.053565 25.568871 57.167331 57.167331 0.170649 44.909062 19.823696 73.606494 61.860171 90.642926a56.996682 56.996682 0 0 1 31.570019 73.976233c-17.775911 44.226467-9.55633 80.574651 25.483546 115.415437a56.114997 56.114997 0 0 1 0 79.067253\" fill=\"#FE7652\" p-id=\"4331\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/jinxingzhong.svg":
/*!*************************************!*\
  !*** ./static/svg/jinxingzhong.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "jinxingzhong",
  "use": "jinxingzhong-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"jinxingzhong\"><defs><style type=\"text/css\"></style></defs><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#00A699\" p-id=\"4492\" /><path d=\"M536.868571 365.714286l168.228572 153.6a36.571429 36.571429 0 0 1 0 51.931428 38.034286 38.034286 0 0 1-24.137143 13.897143H343.04a36.571429 36.571429 0 0 1-36.571429-36.571428 35.108571 35.108571 0 0 1 12.434286-27.062858L487.131429 365.714286a38.034286 38.034286 0 0 1 49.737142 0z\" fill=\"#098D83\" p-id=\"4493\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/phone.svg":
/*!******************************!*\
  !*** ./static/svg/phone.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "phone",
  "use": "phone-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"phone\"><defs><style type=\"text/css\"></style></defs><path d=\"M147.2 198.528A159.36 159.36 0 0 1 227.136 56.896l83.2-48a64 64 0 0 1 87.04 22.912l128.64 222.72a63.552 63.552 0 0 1-23.68 86.912l-83.2 48a160.512 160.512 0 0 1-218.88-59.136l-14.976-25.984A542.464 542.464 0 0 0 249.728 672a542.464 542.464 0 0 0 286.144 239.68l-14.976-25.984a159.936 159.936 0 0 1 58.24-219.136l83.2-48a64 64 0 0 1 87.04 22.912l128.64 222.72a63.552 63.552 0 0 1-23.68 86.912l-83.2 48a160 160 0 0 1-162.112-1.472A606.656 606.656 0 0 1 194.304 704 606.656 606.656 0 0 1 147.2 198.528z m675.072 697.152l-128-221.696-83.136 48a95.936 95.936 0 0 0-34.816 131.712l31.36 54.336c26.624 46.08 85.76 62.08 131.456 35.648l83.2-48z m-480-831.36l-83.136 48a95.936 95.936 0 0 0-34.816 131.648l31.36 54.4c26.624 46.08 85.76 62.08 131.456 35.648l83.2-48-128-221.696z\" p-id=\"9313\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/placeholder.svg":
/*!************************************!*\
  !*** ./static/svg/placeholder.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "placeholder",
  "use": "placeholder-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"placeholder\"><defs><style type=\"text/css\"></style></defs><path d=\"M246.144 0h531.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64 16.768 31.296 25.664 62.336 25.664 147.84v531.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576c-31.296 16.768-62.336 25.664-147.84 25.664h-531.84c-85.504 0-116.544-8.96-147.84-25.6A174.464 174.464 0 0 1 25.6 925.696C8.896 894.464 0 863.424 0 777.92v-531.84c0-85.504 8.96-116.544 25.6-147.84A174.464 174.464 0 0 1 98.304 25.6C129.536 8.896 160.576 0 246.08 0z m45.952 128c-57.088 0-77.76 5.952-98.56 17.088-20.928 11.136-37.312 27.52-48.448 48.384-11.136 20.864-17.088 41.6-17.088 98.56v439.872c0 57.088 5.952 77.76 17.088 98.56 11.136 20.928 27.52 37.312 48.384 48.448 20.864 11.136 41.6 17.088 98.56 17.088h439.872c57.088 0 77.76-5.952 98.56-17.088 20.928-11.136 37.312-27.52 48.448-48.384 11.136-20.864 17.088-41.6 17.088-98.56V292.032c0-57.088-5.952-77.76-17.088-98.56a116.288 116.288 0 0 0-48.384-48.448c-20.864-11.136-41.6-17.088-98.56-17.088H292.032z m43.456 339.84l368 92.032c23.872 6.016 32.064 10.112 40.192 16.32a57.6 57.6 0 0 1 18.176 23.296c4.096 9.344 6.08 18.304 6.08 42.88v49.6c0 27.648-2.944 38.144-8.576 48.64a58.176 58.176 0 0 1-24.192 24.128c-10.432 5.568-20.864 8.576-48.576 8.576H338.048c-28.544 0-38.848-3.008-49.28-8.576a58.176 58.176 0 0 1-24.192-24.192c-5.632-10.432-8.576-20.8-8.576-49.28V529.92a64 64 0 0 1 79.552-62.08zM672 448a96 96 0 1 1 0-192 96 96 0 0 1 0 192z\" fill=\"#EEEEEE\" p-id=\"7725\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/service-kefu-cs.svg":
/*!****************************************!*\
  !*** ./static/svg/service-kefu-cs.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "service-kefu-cs",
  "use": "service-kefu-cs-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"service-kefu-cs\"><defs><style type=\"text/css\"></style></defs><path d=\"M924.479422 331.776433A160.3199 160.3199 0 0 1 1023.99936 480.64034v62.71996C1023.99936 631.744245 952.319405 704.0002 863.99946 704.0002h-15.039991l-40.383974 114.559928c-24.959984 70.527956-97.343939 137.343914-171.519893 160.6399a63.74396 63.74396 0 0 1-60.991962 44.799972H511.93568A63.80796 63.80796 0 0 1 447.99972 960.00004c0-35.327978 28.351982-63.99996 63.93596-63.99996h64.12796c18.559988 0 35.263978 7.871995 46.975971 20.479987 53.311967-18.751988 107.583933-69.503957 125.183921-119.231925L781.119512 704.0002H767.99952c-35.583978 0-63.99996-28.415982-63.99996-63.35996V383.3604A63.99996 63.99996 0 0 1 767.99952 320.00044h89.599944a320.831799 320.831799 0 0 0-314.111804-255.99984h-62.97596A320.1278 320.1278 0 0 0 166.399896 320.00044H255.99984a63.99996 63.99996 0 0 1 63.99996 63.35996v257.27984c0 34.943978-28.415982 63.35996-63.99996 63.35996H159.9999C71.679955 704.0002 0 631.744245 0 543.3603v-62.71996c0-67.327958 40.959974-124.991922 99.519938-148.863907A383.99976 383.99976 0 0 1 480.5117 0.00064h62.97596c193.279879 0 355.199778 143.35991 380.991762 331.775793zM255.99984 640.00024V384.0004H159.9999C106.687933 384.0004 63.99996 426.944373 63.99996 480.64034v62.71996C63.99996 596.608267 107.135933 640.00024 159.9999 640.00024H255.99984z m511.99968 0h95.99994c52.863967 0 95.99994-43.391973 95.99994-96.63994v-62.71996C959.9994 426.880373 917.311427 384.0004 863.99946 384.0004H767.99952v255.99984z\" p-id=\"9204\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/spinner.svg":
/*!********************************!*\
  !*** ./static/svg/spinner.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "spinner",
  "use": "spinner-usage",
  "viewBox": "0 0 100 100",
  "content": "<symbol class=\"lds-spinner\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" id=\"spinner\"><g transform=\"rotate(0 50 50)\">\n  <rect x=\"45\" y=\"6\" rx=\"24.75\" ry=\"3.3000000000000003\" width=\"10\" height=\"24\" fill=\"#cccccc\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"0.6s\" begin=\"-0.525s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(45 50 50)\">\n  <rect x=\"45\" y=\"6\" rx=\"24.75\" ry=\"3.3000000000000003\" width=\"10\" height=\"24\" fill=\"#cccccc\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"0.6s\" begin=\"-0.44999999999999996s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(90 50 50)\">\n  <rect x=\"45\" y=\"6\" rx=\"24.75\" ry=\"3.3000000000000003\" width=\"10\" height=\"24\" fill=\"#cccccc\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"0.6s\" begin=\"-0.375s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(135 50 50)\">\n  <rect x=\"45\" y=\"6\" rx=\"24.75\" ry=\"3.3000000000000003\" width=\"10\" height=\"24\" fill=\"#cccccc\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"0.6s\" begin=\"-0.3s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(180 50 50)\">\n  <rect x=\"45\" y=\"6\" rx=\"24.75\" ry=\"3.3000000000000003\" width=\"10\" height=\"24\" fill=\"#cccccc\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"0.6s\" begin=\"-0.22499999999999998s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(225 50 50)\">\n  <rect x=\"45\" y=\"6\" rx=\"24.75\" ry=\"3.3000000000000003\" width=\"10\" height=\"24\" fill=\"#cccccc\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"0.6s\" begin=\"-0.15s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(270 50 50)\">\n  <rect x=\"45\" y=\"6\" rx=\"24.75\" ry=\"3.3000000000000003\" width=\"10\" height=\"24\" fill=\"#cccccc\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"0.6s\" begin=\"-0.075s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(315 50 50)\">\n  <rect x=\"45\" y=\"6\" rx=\"24.75\" ry=\"3.3000000000000003\" width=\"10\" height=\"24\" fill=\"#cccccc\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"0.6s\" begin=\"0s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/weijinxing.svg":
/*!***********************************!*\
  !*** ./static/svg/weijinxing.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "weijinxing",
  "use": "weijinxing-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"weijinxing\"><defs><style type=\"text/css\"></style></defs><path d=\"M512 512m512 0a512 512 0 1 0-1024 0 512 512 0 1 0 1024 0Z\" fill=\"#DDDDDD\" p-id=\"4590\" /><path d=\"M487.131429 658.285714l-168.228572-153.6a36.571429 36.571429 0 0 1 0-51.931428 38.034286 38.034286 0 0 1 24.137143-13.897143L680.96 438.857143a36.571429 36.571429 0 0 1 36.571429 36.571428 35.108571 35.108571 0 0 1-12.434286 27.062858L536.868571 658.285714a38.034286 38.034286 0 0 1-49.737142 0z\" fill=\"#BBBBBB\" p-id=\"4591\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/yiwancheng.svg":
/*!***********************************!*\
  !*** ./static/svg/yiwancheng.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "yiwancheng",
  "use": "yiwancheng-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"yiwancheng\"><defs><style type=\"text/css\"></style></defs><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#DDDDDD\" p-id=\"4367\" /><path d=\"M536.868571 365.714286l168.228572 153.6a36.571429 36.571429 0 0 1 0 51.931428 38.034286 38.034286 0 0 1-24.137143 13.897143H343.04a36.571429 36.571429 0 0 1-36.571429-36.571428 35.108571 35.108571 0 0 1 12.434286-27.062858L487.131429 365.714286a38.034286 38.034286 0 0 1 49.737142 0z\" fill=\"#BBBBBB\" p-id=\"4368\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./static/svg/zuihou.svg":
/*!*******************************!*\
  !*** ./static/svg/zuihou.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/symbol */ "svg-baker-runtime/symbol");
/* harmony import */ var svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/sprite.build */ "svg-sprite-loader/runtime/sprite.build");
/* harmony import */ var svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "zuihou",
  "use": "zuihou-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"zuihou\"><defs><style type=\"text/css\"></style></defs><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#00A699\" p-id=\"4617\" /><path d=\"M512 512m-219.428571 0a219.428571 219.428571 0 1 0 438.857142 0 219.428571 219.428571 0 1 0-438.857142 0Z\" fill=\"#FFFFFF\" p-id=\"4618\" /></symbol>"
});
var result = svg_sprite_loader_runtime_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd-mobile/lib/button":
/*!*****************************************!*\
  !*** external "antd-mobile/lib/button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/button");

/***/ }),

/***/ "antd-mobile/lib/flex":
/*!***************************************!*\
  !*** external "antd-mobile/lib/flex" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/flex");

/***/ }),

/***/ "antd-mobile/lib/icon":
/*!***************************************!*\
  !*** external "antd-mobile/lib/icon" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/icon");

/***/ }),

/***/ "antd-mobile/lib/image-picker":
/*!***********************************************!*\
  !*** external "antd-mobile/lib/image-picker" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/image-picker");

/***/ }),

/***/ "antd-mobile/lib/input-item":
/*!*********************************************!*\
  !*** external "antd-mobile/lib/input-item" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/input-item");

/***/ }),

/***/ "antd-mobile/lib/list":
/*!***************************************!*\
  !*** external "antd-mobile/lib/list" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/list");

/***/ }),

/***/ "antd-mobile/lib/list-view":
/*!********************************************!*\
  !*** external "antd-mobile/lib/list-view" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/list-view");

/***/ }),

/***/ "antd-mobile/lib/modal":
/*!****************************************!*\
  !*** external "antd-mobile/lib/modal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/modal");

/***/ }),

/***/ "antd-mobile/lib/nav-bar":
/*!******************************************!*\
  !*** external "antd-mobile/lib/nav-bar" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/nav-bar");

/***/ }),

/***/ "antd-mobile/lib/notice-bar":
/*!*********************************************!*\
  !*** external "antd-mobile/lib/notice-bar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/notice-bar");

/***/ }),

/***/ "antd-mobile/lib/tab-bar":
/*!******************************************!*\
  !*** external "antd-mobile/lib/tab-bar" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/tab-bar");

/***/ }),

/***/ "antd-mobile/lib/toast":
/*!****************************************!*\
  !*** external "antd-mobile/lib/toast" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/toast");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/get":
/*!*************************************************!*\
  !*** external "core-js/library/fn/reflect/get" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/get");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash.isempty":
/*!*********************************!*\
  !*** external "lodash.isempty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.isempty");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

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

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "redux-immutable":
/*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "rmc-notification":
/*!***********************************!*\
  !*** external "rmc-notification" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rmc-notification");

/***/ }),

/***/ "svg-baker-runtime/symbol":
/*!*******************************************!*\
  !*** external "svg-baker-runtime/symbol" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("svg-baker-runtime/symbol");

/***/ }),

/***/ "svg-sprite-loader/runtime/sprite.build":
/*!*********************************************************!*\
  !*** external "svg-sprite-loader/runtime/sprite.build" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("svg-sprite-loader/runtime/sprite.build");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "weixin-js-sdk":
/*!********************************!*\
  !*** external "weixin-js-sdk" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("weixin-js-sdk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map