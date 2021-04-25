webpackHotUpdate_N_E("pages/home",{

/***/ "./redux/reducer.js":
/*!**************************!*\
  !*** ./redux/reducer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reducerHandler; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./redux/actionTypes.js\");\n\nvar defaultState = {\n  availableSize: {\n    width: 0,\n    height: 0\n  },\n  countryList: {},\n  categoryList: {},\n  recommendList: []\n};\nfunction reducerHandler() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var newState = JSON.parse(JSON.stringify(state));\n\n  if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"AVAILABLE_SIZE\"]) {\n    newState.availableSize = action.size;\n    return newState;\n  } else if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"GET_COUNTRY_LIST\"]) {\n    newState.countryList = action.countryList;\n    return newState;\n  } else if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"GET_CATEGORY_LIST\"]) {\n    newState.categoryList = action.categoryList;\n    return newState;\n  } else if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"GET_RECOMMEND_LIST\"]) {\n    newState.recommendList = action.recommendList.item;\n    return newState;\n  }\n\n  return state;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlci5qcz8xNDQ0Il0sIm5hbWVzIjpbImRlZmF1bHRTdGF0ZSIsImF2YWlsYWJsZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsImNvdW50cnlMaXN0IiwiY2F0ZWdvcnlMaXN0IiwicmVjb21tZW5kTGlzdCIsInJlZHVjZXJIYW5kbGVyIiwic3RhdGUiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInR5cGUiLCJBVkFJTEFCTEVfU0laRSIsInNpemUiLCJHRVRfQ09VTlRSWV9MSVNUIiwiR0VUX0NBVEVHT1JZX0xJU1QiLCJHRVRfUkVDT01NRU5EX0xJU1QiLCJpdGVtIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsZUFBYSxFQUFFO0FBQ1hDLFNBQUssRUFBRSxDQURJO0FBRVhDLFVBQU0sRUFBRTtBQUZHLEdBREU7QUFLakJDLGFBQVcsRUFBRSxFQUxJO0FBTWpCQyxjQUFZLEVBQUUsRUFORztBQU9qQkMsZUFBYSxFQUFFO0FBUEUsQ0FBckI7QUFVZSxTQUFTQyxjQUFULEdBQXNEO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF0QlIsWUFBc0I7QUFBQSxNQUFSUyxNQUFRO0FBRWpFLE1BQUlDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlTCxLQUFmLENBQVgsQ0FBZjs7QUFFQSxNQUFHQyxNQUFNLENBQUNLLElBQVAsS0FBZ0JDLDJEQUFuQixFQUFrQztBQUM5QkwsWUFBUSxDQUFDVCxhQUFULEdBQXlCUSxNQUFNLENBQUNPLElBQWhDO0FBQ0EsV0FBT04sUUFBUDtBQUNILEdBSEQsTUFJSyxJQUFHRCxNQUFNLENBQUNLLElBQVAsS0FBZ0JHLDZEQUFuQixFQUFvQztBQUNyQ1AsWUFBUSxDQUFDTixXQUFULEdBQXVCSyxNQUFNLENBQUNMLFdBQTlCO0FBQ0EsV0FBT00sUUFBUDtBQUNILEdBSEksTUFJQSxJQUFHRCxNQUFNLENBQUNLLElBQVAsS0FBZ0JJLDhEQUFuQixFQUFxQztBQUN0Q1IsWUFBUSxDQUFDTCxZQUFULEdBQXdCSSxNQUFNLENBQUNKLFlBQS9CO0FBQ0EsV0FBT0ssUUFBUDtBQUNILEdBSEksTUFJQSxJQUFHRCxNQUFNLENBQUNLLElBQVAsS0FBZ0JLLCtEQUFuQixFQUFzQztBQUN2Q1QsWUFBUSxDQUFDSixhQUFULEdBQXlCRyxNQUFNLENBQUNILGFBQVAsQ0FBcUJjLElBQTlDO0FBQ0EsV0FBT1YsUUFBUDtBQUNIOztBQUVELFNBQU9GLEtBQVA7QUFDSCIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFWQUlMQUJMRV9TSVpFLFxuICAgIEdFVF9DT1VOVFJZX0xJU1QsXG4gICAgR0VUX0NBVEVHT1JZX0xJU1QsXG4gICAgR0VUX1JFQ09NTUVORF9MSVNULFxuICAgIENPTlRBSU5FUl9SRUFMX0hFSUdIVF9SRUNPTU1FTkRcbn0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBhdmFpbGFibGVTaXplOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDBcbiAgICB9LFxuICAgIGNvdW50cnlMaXN0OiB7fSxcbiAgICBjYXRlZ29yeUxpc3Q6IHt9LFxuICAgIHJlY29tbWVuZExpc3Q6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlckhhbmRsZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikge1xuXG4gICAgbGV0IG5ld1N0YXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFWQUlMQUJMRV9TSVpFKXtcbiAgICAgICAgbmV3U3RhdGUuYXZhaWxhYmxlU2l6ZSA9IGFjdGlvbi5zaXplO1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuICAgIGVsc2UgaWYoYWN0aW9uLnR5cGUgPT09IEdFVF9DT1VOVFJZX0xJU1Qpe1xuICAgICAgICBuZXdTdGF0ZS5jb3VudHJ5TGlzdCA9IGFjdGlvbi5jb3VudHJ5TGlzdDtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cbiAgICBlbHNlIGlmKGFjdGlvbi50eXBlID09PSBHRVRfQ0FURUdPUllfTElTVCl7XG4gICAgICAgIG5ld1N0YXRlLmNhdGVnb3J5TGlzdCA9IGFjdGlvbi5jYXRlZ29yeUxpc3Q7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gICAgZWxzZSBpZihhY3Rpb24udHlwZSA9PT0gR0VUX1JFQ09NTUVORF9MSVNUKXtcbiAgICAgICAgbmV3U3RhdGUucmVjb21tZW5kTGlzdCA9IGFjdGlvbi5yZWNvbW1lbmRMaXN0Lml0ZW07XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducer.js\n");

/***/ })

})