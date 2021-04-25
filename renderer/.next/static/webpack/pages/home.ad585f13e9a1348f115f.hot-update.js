webpackHotUpdate_N_E("pages/home",{

/***/ "./components/layout/contentFrame.jsx":
/*!********************************************!*\
  !*** ./components/layout/contentFrame.jsx ***!
  \********************************************/
/*! exports provided: default, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContentFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.js\");\n\n\n\nvar _jsxFileName = \"/Users/yuxuan/Desktop/Bilibili-MacOS-Windows-Client/renderer/components/layout/contentFrame.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction ContentFrame(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize),\n      availableSize = _useState[0],\n      setAvailableSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe(function () {\n      return setAvailableSize(_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize);\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize.width, _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize.height]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    style: {\n      width: \"\".concat(props.children.length * 100, \"%\"),\n      height: \"\".concat(availableSize.height, \"px\"),\n      overflow: 'hidden',\n      position: 'absolute',\n      transition: 'left 0.3s',\n      left: \"\".concat(props.activeIndex * -availableSize.width, \"px\")\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ContentFrame, \"dkzpoQIptRVa/3XFSIMDpoou4tI=\");\n\n_c = ContentFrame;\nfunction Content(props) {\n  _s2();\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize),\n      availableSize = _useState2[0],\n      setAvailableSize = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      scrollHeight = _useState3[0],\n      setScrollHeight = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      scrollTop = _useState4[0],\n      setScrollTop = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      clientHeight = _useState5[0],\n      setClientHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      reachEnd = _useState6[0],\n      setReachEnd = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe(function () {\n      return setAvailableSize(_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize);\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize.width, _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize.height]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setClientHeight(ref.current.clientHeight);\n  }, [clientHeight]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    ref.current.addEventListener('scroll', function () {\n      setScrollTop(ref.current.scrollTop);\n      setScrollHeight(ref.current.scrollHeight);\n\n      if (ref.current.scrollHeight - availableSize.height === ref.current.scrollTop) {\n        setReachEnd(true);\n      } else {\n        setReachEnd(false);\n      }\n    }, false);\n  }, [scrollTop, scrollHeight]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    style: {\n      width: availableSize.width + 'px',\n      height: availableSize.height + 'px',\n      \"float\": \"left\",\n      overflow: 'hidden',\n      display: 'flex',\n      flexWrap: 'wrap',\n      justifyContent: 'center',\n      alignContent: 'flex-start'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n      ref: ref,\n      className: \"recommend-item-wrapper\",\n      style: {\n        width: availableSize.width + 'px',\n        height: availableSize.height + 'px'\n      },\n      children: react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(props.children, function (child) {\n        if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(child)) {\n          return null;\n        }\n\n        var childProps = _objectSpread(_objectSpread({}, child.props), {}, {\n          loading: reachEnd,\n          client: {\n            scrollTop: scrollTop,\n            clientHeight: clientHeight\n          }\n        });\n\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, childProps);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 9\n  }, this);\n}\n\n_s2(Content, \"S1PykRsXetWTzTzdjKg+RCunqBI=\");\n\n_c2 = Content;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContentFrame\");\n$RefreshReg$(_c2, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudEZyYW1lLmpzeD8zMWMwIl0sIm5hbWVzIjpbIkNvbnRlbnRGcmFtZSIsInByb3BzIiwidXNlU3RhdGUiLCJzdG9yZSIsImdldFN0YXRlIiwiYXZhaWxhYmxlU2l6ZSIsInNldEF2YWlsYWJsZVNpemUiLCJ1c2VFZmZlY3QiLCJzdWJzY3JpYmUiLCJ3aWR0aCIsImhlaWdodCIsImNoaWxkcmVuIiwibGVuZ3RoIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJsZWZ0IiwiYWN0aXZlSW5kZXgiLCJDb250ZW50IiwicmVmIiwidXNlUmVmIiwic2Nyb2xsSGVpZ2h0Iiwic2V0U2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiY2xpZW50SGVpZ2h0Iiwic2V0Q2xpZW50SGVpZ2h0IiwicmVhY2hFbmQiLCJzZXRSZWFjaEVuZCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkNvbnRlbnQiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNoaWxkUHJvcHMiLCJsb2FkaW5nIiwiY2xpZW50IiwiY2xvbmVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULENBQXVCQyxLQUF2QixFQUE2QjtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDQyxvREFBSyxDQUFDQyxRQUFOLEdBQWlCQyxhQUFsQixDQURWO0FBQUEsTUFDakNBLGFBRGlDO0FBQUEsTUFDbEJDLGdCQURrQjs7QUFHeENDLHlEQUFTLENBQUMsWUFBTTtBQUNaSix3REFBSyxDQUFDSyxTQUFOLENBQWdCO0FBQUEsYUFBTUYsZ0JBQWdCLENBQUNILG9EQUFLLENBQUNDLFFBQU4sR0FBaUJD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S0FBZCxHQUFvQixJQUR4QjtBQUVIQyxZQUFNLEVBQUVMLGFBQWEsQ0FBQ0ssTUFBZCxHQUFxQixJQUYxQjtBQUdILGVBQU8sTUFISjtBQUlIRyxjQUFRLEVBQUUsUUFKUDtBQUtIa0IsYUFBTyxFQUFFLE1BTE47QUFNSEMsY0FBUSxFQUFFLE1BTlA7QUFPSEMsb0JBQWMsRUFBRSxRQVBiO0FBUUhDLGtCQUFZLEVBQUU7QUFSWCxLQURYO0FBQUEsMkJBWUk7QUFDSSxTQUFHLEVBQUVmLEdBRFQ7QUFFSSxlQUFTLEVBQUMsd0JBRmQ7QUFHSSxXQUFLLEVBQUU7QUFDSFYsYUFBSyxFQUFFSixhQUFhLENBQUNJLEtBQWQsR0FBb0IsSUFEeEI7QUFFSEMsY0FBTSxFQUFFTCxhQUFhLENBQUNLLE1BQWQsR0FBcUI7QUFGMUIsT0FIWDtBQUFBLGdCQVNReUIsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxHQUFmLENBQW1CcEMsS0FBSyxDQUFDVSxRQUF6QixFQUFtQyxVQUFDMkIsS0FBRCxFQUFXO0FBQzFDLFlBQUksZUFBQ0gsNENBQUssQ0FBQ0ksY0FBTixDQUFxQkQsS0FBckIsQ0FBTCxFQUFrQztBQUM5QixpQkFBTyxJQUFQO0FBQ0g7O0FBQ0QsWUFBTUUsVUFBVSxtQ0FDVEYsS0FBSyxDQUFDckMsS0FERztBQUVad0MsaUJBQU8sRUFBRWQsUUFGRztBQUdaZSxnQkFBTSxFQUFFO0FBQUNuQixxQkFBUyxFQUFUQSxTQUFEO0FBQVlFLHdCQUFZLEVBQVpBO0FBQVo7QUFISSxVQUFoQjs7QUFLQSw0QkFBT1UsNENBQUssQ0FBQ1EsWUFBTixDQUFtQkwsS0FBbkIsRUFBMEJFLFVBQTFCLENBQVA7QUFDSCxPQVZEO0FBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDs7SUFwRWV0QixPOztNQUFBQSxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudEZyYW1lLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uLy4uL3JlZHV4L3N0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRGcmFtZSAocHJvcHMpe1xuICAgIGNvbnN0IFthdmFpbGFibGVTaXplLCBzZXRBdmFpbGFibGVTaXplXSA9IHVzZVN0YXRlKHN0b3JlLmdldFN0YXRlKCkuYXZhaWxhYmxlU2l6ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gc2V0QXZhaWxhYmxlU2l6ZShzdG9yZS5nZXRTdGF0ZSgpLmF2YWlsYWJsZVNpemUpKVxuICAgIH0sIFtzdG9yZS5nZXRTdGF0ZSgpLmF2YWlsYWJsZVNpemUud2lkdGgsIHN0b3JlLmdldFN0YXRlKCkuYXZhaWxhYmxlU2l6ZS5oZWlnaHRdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6KGAke3Byb3BzLmNoaWxkcmVuLmxlbmd0aCAqIDEwMH0lYCksXG4gICAgICAgICAgICAgICAgaGVpZ2h0OihgJHthdmFpbGFibGVTaXplLmhlaWdodH1weGApLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnbGVmdCAwLjNzJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAoYCR7cHJvcHMuYWN0aXZlSW5kZXggKiAtYXZhaWxhYmxlU2l6ZS53aWR0aH1weGApXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udGVudChwcm9wcyl7XG5cbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBbYXZhaWxhYmxlU2l6ZSwgc2V0QXZhaWxhYmxlU2l6ZV0gPSB1c2VTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpLmF2YWlsYWJsZVNpemUpO1xuICAgIGNvbnN0IFtzY3JvbGxIZWlnaHQsIHNldFNjcm9sbEhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2Nyb2xsVG9wLCBzZXRTY3JvbGxUb3BdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2NsaWVudEhlaWdodCwgc2V0Q2xpZW50SGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtyZWFjaEVuZCwgc2V0UmVhY2hFbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHNldEF2YWlsYWJsZVNpemUoc3RvcmUuZ2V0U3RhdGUoKS5hdmFpbGFibGVTaXplKSlcbiAgICB9LCBbc3RvcmUuZ2V0U3RhdGUoKS5hdmFpbGFibGVTaXplLndpZHRoLCBzdG9yZS5nZXRTdGF0ZSgpLmF2YWlsYWJsZVNpemUuaGVpZ2h0XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDbGllbnRIZWlnaHQocmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcbiAgICB9LCBbY2xpZW50SGVpZ2h0XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTY3JvbGxUb3AocmVmLmN1cnJlbnQuc2Nyb2xsVG9wKTtcbiAgICAgICAgICAgIHNldFNjcm9sbEhlaWdodChyZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpO1xuXG4gICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0IC0gYXZhaWxhYmxlU2l6ZS5oZWlnaHQgPT09IHJlZi5jdXJyZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIHNldFJlYWNoRW5kKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRSZWFjaEVuZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9LFtzY3JvbGxUb3AsIHNjcm9sbEhlaWdodF0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdmFpbGFibGVTaXplLndpZHRoKydweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdmFpbGFibGVTaXplLmhlaWdodCsncHgnLFxuICAgICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JlY29tbWVuZC1pdGVtLXdyYXBwZXInXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF2YWlsYWJsZVNpemUud2lkdGgrJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdmFpbGFibGVTaXplLmhlaWdodCsncHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGQucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogcmVhY2hFbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50OiB7c2Nyb2xsVG9wLCBjbGllbnRIZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/contentFrame.jsx\n");

/***/ })

})