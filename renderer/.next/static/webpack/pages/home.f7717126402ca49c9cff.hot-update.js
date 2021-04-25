webpackHotUpdate_N_E("pages/home",{

/***/ "./components/layout/contentFrame.jsx":
/*!********************************************!*\
  !*** ./components/layout/contentFrame.jsx ***!
  \********************************************/
/*! exports provided: default, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContentFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.js\");\n\n\n\nvar _jsxFileName = \"/Users/yuxuan/Desktop/Bilibili-MacOS-Windows-Client/renderer/components/layout/contentFrame.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction ContentFrame(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize),\n      availableSize = _useState[0],\n      setAvailableSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe(function () {\n      return setAvailableSize(_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize);\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize.width, _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize.height]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    style: {\n      width: \"\".concat(props.children.length * 100, \"%\"),\n      height: \"\".concat(availableSize.height, \"px\"),\n      overflow: 'hidden',\n      position: 'absolute',\n      transition: 'left 0.3s',\n      left: \"\".concat(props.activeIndex * -availableSize.width, \"px\")\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ContentFrame, \"dkzpoQIptRVa/3XFSIMDpoou4tI=\");\n\n_c = ContentFrame;\nfunction Content(props) {\n  _s2();\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize),\n      availableSize = _useState2[0],\n      setAvailableSize = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      windowHeight = _useState3[0],\n      setWindowHeight = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentHeight = _useState4[0],\n      setCurrentHeight = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      scrollHeight = _useState5[0],\n      setScrollHeight = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      locker = _useState6[0],\n      setLocker = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      reachEnd = _useState7[0],\n      setReachEnd = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      scrollTop = _useState8[0],\n      setScrollTop = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe(function () {\n      return setAvailableSize(_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize);\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize.width, _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().availableSize.height]);\n\n  function onScroll() {\n    setScrollTop(ref.current.scrollTop);\n    console.log('请求加载');\n\n    if (ref.current.scrollHeight - availableSize.height === scrollTop) {\n      setReachEnd(true);\n    } else {\n      setReachEnd(false);\n    }\n\n    setLocker(false);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    ref.current.addEventListener('scroll', function () {\n      if (!locker) {\n        requestAnimationFrame(onScroll);\n        setLocker(true);\n      }\n    }, false);\n  }, [scrollTop, ref.current.scrollHeight]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    style: {\n      width: availableSize.width + 'px',\n      height: availableSize.height + 'px',\n      \"float\": \"left\",\n      overflow: 'hidden',\n      display: 'flex',\n      flexWrap: 'wrap',\n      justifyContent: 'center',\n      alignContent: 'flex-start'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n      ref: ref,\n      className: \"recommend-item-wrapper\",\n      style: {\n        width: availableSize.width + 'px',\n        height: availableSize.height + 'px'\n      },\n      children: react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(props.children, function (child) {\n        if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(child)) {\n          return null;\n        }\n\n        var childProps = _objectSpread(_objectSpread({}, child.props), {}, {\n          loading: reachEnd,\n          position: scrollTop\n        });\n\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, childProps);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 9\n  }, this);\n}\n\n_s2(Content, \"V935VrNh2UxBCKpex/iSJs6S0w8=\");\n\n_c2 = Content;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContentFrame\");\n$RefreshReg$(_c2, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudEZyYW1lLmpzeD8zMWMwIl0sIm5hbWVzIjpbIkNvbnRlbnRGcmFtZSIsInByb3BzIiwidXNlU3RhdGUiLCJzdG9yZSIsImdldFN0YXRlIiwiYXZhaWxhYmxlU2l6ZSIsInNldEF2YWlsYWJsZVNpemUiLCJ1c2VFZmZlY3QiLCJzdWJzY3JpYmUiLCJ3aWR0aCIsImhlaWdodCIsImNoaWxkcmVuIiwibGVuZ3RoIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJsZWZ0IiwiYWN0aXZlSW5kZXgiLCJDb250ZW50IiwicmVmIiwidXNlUmVmIiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0IiwiY3VycmVudEhlaWdodCIsInNldEN1cnJlbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzZXRTY3JvbGxIZWlnaHQiLCJsb2NrZXIiLCJzZXRMb2NrZXIiLCJyZWFjaEVuZCIsInNldFJlYWNoRW5kIiwic2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwib25TY3JvbGwiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2hpbGRQcm9wcyIsImxvYWRpbmciLCJjbG9uZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFlBQVQsQ0FBdUJDLEtBQXZCLEVBQTZCO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUNDLG9EQUFLLENBQUNDLFFBQU4sR0FBaUJDLGFBQWxCLENBRFY7QUFBQSxNQUNqQ0EsYUFEaUM7QUFBQSxNQUNsQkMsZ0JBRGtCOztB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LENBQUNPLFlBQU4sQ0FBbUJKLEtBQW5CLEVBQTBCRSxVQUExQixDQUFQO0FBQ0gsT0FWRDtBQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQ0g7O0lBNUVlOUIsTzs7TUFBQUEsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnRGcmFtZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50RnJhbWUgKHByb3BzKXtcbiAgICBjb25zdCBbYXZhaWxhYmxlU2l6ZSwgc2V0QXZhaWxhYmxlU2l6ZV0gPSB1c2VTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpLmF2YWlsYWJsZVNpemUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHNldEF2YWlsYWJsZVNpemUoc3RvcmUuZ2V0U3RhdGUoKS5hdmFpbGFibGVTaXplKSlcbiAgICB9LCBbc3RvcmUuZ2V0U3RhdGUoKS5hdmFpbGFibGVTaXplLndpZHRoLCBzdG9yZS5nZXRTdGF0ZSgpLmF2YWlsYWJsZVNpemUuaGVpZ2h0XSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOihgJHtwcm9wcy5jaGlsZHJlbi5sZW5ndGggKiAxMDB9JWApLFxuICAgICAgICAgICAgICAgIGhlaWdodDooYCR7YXZhaWxhYmxlU2l6ZS5oZWlnaHR9cHhgKSxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2xlZnQgMC4zcycsXG4gICAgICAgICAgICAgICAgbGVmdDogKGAke3Byb3BzLmFjdGl2ZUluZGV4ICogLWF2YWlsYWJsZVNpemUud2lkdGh9cHhgKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRlbnQocHJvcHMpe1xuXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgW2F2YWlsYWJsZVNpemUsIHNldEF2YWlsYWJsZVNpemVdID0gdXNlU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKS5hdmFpbGFibGVTaXplKTtcbiAgICBjb25zdCBbd2luZG93SGVpZ2h0LCBzZXRXaW5kb3dIZWlnaHRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRIZWlnaHQsIHNldEN1cnJlbnRIZWlnaHRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Njcm9sbEhlaWdodCwgc2V0U2Nyb2xsSGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtsb2NrZXIsIHNldExvY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JlYWNoRW5kLCBzZXRSZWFjaEVuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Njcm9sbFRvcCwgc2V0U2Nyb2xsVG9wXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHNldEF2YWlsYWJsZVNpemUoc3RvcmUuZ2V0U3RhdGUoKS5hdmFpbGFibGVTaXplKSlcbiAgICB9LCBbc3RvcmUuZ2V0U3RhdGUoKS5hdmFpbGFibGVTaXplLndpZHRoLCBzdG9yZS5nZXRTdGF0ZSgpLmF2YWlsYWJsZVNpemUuaGVpZ2h0XSk7XG5cblxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCl7XG4gICAgICAgIHNldFNjcm9sbFRvcChyZWYuY3VycmVudC5zY3JvbGxUb3ApO1xuICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5Yqg6L29Jyk7XG5cbiAgICAgICAgaWYgKHJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGF2YWlsYWJsZVNpemUuaGVpZ2h0ID09PSBzY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHNldFJlYWNoRW5kKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UmVhY2hFbmQoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0TG9ja2VyKGZhbHNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZighbG9ja2VyKXtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25TY3JvbGwpO1xuICAgICAgICAgICAgICAgIHNldExvY2tlcih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH0sW3Njcm9sbFRvcCwgcmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0XSlcblxuICAgIHJldHVybihcbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF2YWlsYWJsZVNpemUud2lkdGgrJ3B4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF2YWlsYWJsZVNpemUuaGVpZ2h0KydweCcsXG4gICAgICAgICAgICAgICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVjb21tZW5kLWl0ZW0td3JhcHBlcidcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXZhaWxhYmxlU2l6ZS53aWR0aCsncHgnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF2YWlsYWJsZVNpemUuaGVpZ2h0KydweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcChwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZC5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiByZWFjaEVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/contentFrame.jsx\n");

/***/ })

})