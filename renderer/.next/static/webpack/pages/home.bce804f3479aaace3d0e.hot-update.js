webpackHotUpdate_N_E("pages/home",{

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: convertViews, convertDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertViews\", function() { return convertViews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertDuration\", function() { return convertDuration; });\n/**\n * Convert timestamp to specific format.\n * @param time the value for converting\n * @returns {string} the formatted duration\n */\nfunction convertDuration(time) {\n  var hour = Math.floor(time / 3600 % 24);\n  var min = Math.floor(time / 60 % 60);\n  var sec = Math.floor(time % 60);\n\n  if (hour > 0 && hour < 10) {\n    hour = \"0\" + hour;\n  }\n\n  if (min > 0 && min < 10) {\n    min = \"0\" + min;\n  }\n\n  if (sec > 0 && sec < 10) {\n    sec = \"0\" + sec;\n  }\n\n  if (hour >= 1 && min === 0 && sec === 0) {\n    return \"\".concat(hour, \":00:00\");\n  } else if (hour >= 1 && min !== 0 && sec === 0) {\n    return \"\".concat(hour, \":\").concat(min, \":00\");\n  } else if (hour >= 1 && min !== 0 && sec !== 0) {\n    return \"\".concat(hour, \":\").concat(min, \":\").concat(sec);\n  } else if (min >= 1 && sec === 0) {\n    return \"\".concat(min, \":00\");\n  } else if (min >= 1 && sec !== 0) {\n    return \"\".concat(min, \":\").concat(sec);\n  } else if (hour === 0 && min === 0 && sec !== 0) {\n    return \"00:\".concat(sec);\n  }\n\n  return '00:00';\n}\n/**\n * Convert views to specific format.\n * @param views the value for converting\n * @returns {string|*} the formatted view\n */\n\n\nfunction convertViews(views) {\n  if (views < 10000) return views;\n  return (views / 10000).toFixed(1) + '万';\n}\n\nfunction convertTime(timeStamp) {\n  var time = new Date(timeStamp * 1000);\n  var month = time.getMonth();\n  var day = time.getDate();\n\n  if (month > 0 && month < 10) {\n    month = \"0\" + month;\n  }\n\n  if (day > 0 && day < 10) {\n    month = \"0\" + day;\n  }\n}\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXRpbHMuanM/OTBjMCJdLCJuYW1lcyI6WyJjb252ZXJ0RHVyYXRpb24iLCJ0aW1lIiwiaG91ciIsIk1hdGgiLCJmbG9vciIsIm1pbiIsInNlYyIsImNvbnZlcnRWaWV3cyIsInZpZXdzIiwidG9GaXhlZCIsImNvbnZlcnRUaW1lIiwidGltZVN0YW1wIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0EsZUFBVCxDQUF5QkMsSUFBekIsRUFBOEI7QUFDMUIsTUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBSSxHQUFHLElBQVAsR0FBYyxFQUF6QixDQUFYO0FBQ0EsTUFBSUksR0FBRyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBSSxHQUFHLEVBQVAsR0FBWSxFQUF2QixDQUFWO0FBQ0EsTUFBSUssR0FBRyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBSSxHQUFHLEVBQWxCLENBQVY7O0FBRUEsTUFBR0MsSUFBSSxHQUFHLENBQVAsSUFBWUEsSUFBSSxHQUFHLEVBQXRCLEVBQXlCO0FBQ3JCQSxRQUFJLEdBQUcsTUFBTUEsSUFBYjtBQUNIOztBQUVELE1BQUdHLEdBQUcsR0FBRyxDQUFOLElBQVdBLEdBQUcsR0FBRyxFQUFwQixFQUF1QjtBQUNuQkEsT0FBRyxHQUFHLE1BQU1BLEdBQVo7QUFDSDs7QUFFRCxNQUFHQyxHQUFHLEdBQUcsQ0FBTixJQUFXQSxHQUFHLEdBQUcsRUFBcEIsRUFBdUI7QUFDbkJBLE9BQUcsR0FBRyxNQUFNQSxHQUFaO0FBQ0g7O0FBRUQsTUFBR0osSUFBSSxJQUFJLENBQVIsSUFBYUcsR0FBRyxLQUFLLENBQXJCLElBQTBCQyxHQUFHLEtBQUssQ0FBckMsRUFBdUM7QUFDbkMscUJBQVVKLElBQVY7QUFDSCxHQUZELE1BRU0sSUFBR0EsSUFBSSxJQUFJLENBQVIsSUFBYUcsR0FBRyxLQUFLLENBQXJCLElBQTBCQyxHQUFHLEtBQUssQ0FBckMsRUFBdUM7QUFDekMscUJBQVVKLElBQVYsY0FBa0JHLEdBQWxCO0FBQ0gsR0FGSyxNQUVBLElBQUdILElBQUksSUFBSSxDQUFSLElBQWFHLEdBQUcsS0FBSyxDQUFyQixJQUEwQkMsR0FBRyxLQUFLLENBQXJDLEVBQXVDO0FBQ3pDLHFCQUFVSixJQUFWLGNBQWtCRyxHQUFsQixjQUF5QkMsR0FBekI7QUFDSCxHQUZLLE1BRUEsSUFBR0QsR0FBRyxJQUFJLENBQVAsSUFBWUMsR0FBRyxLQUFLLENBQXZCLEVBQXlCO0FBQzNCLHFCQUFVRCxHQUFWO0FBQ0gsR0FGSyxNQUVBLElBQUdBLEdBQUcsSUFBSSxDQUFQLElBQVlDLEdBQUcsS0FBSyxDQUF2QixFQUF5QjtBQUMzQixxQkFBVUQsR0FBVixjQUFpQkMsR0FBakI7QUFDSCxHQUZLLE1BRUEsSUFBR0osSUFBSSxLQUFLLENBQVQsSUFBY0csR0FBRyxLQUFLLENBQXRCLElBQTJCQyxHQUFHLEtBQUssQ0FBdEMsRUFBd0M7QUFDMUMsd0JBQWFBLEdBQWI7QUFDSDs7QUFFRCxTQUFPLE9BQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTRCO0FBRXhCLE1BQUdBLEtBQUssR0FBRyxLQUFYLEVBQWtCLE9BQU9BLEtBQVA7QUFDbEIsU0FBTyxDQUFDQSxLQUFLLEdBQUcsS0FBVCxFQUFnQkMsT0FBaEIsQ0FBd0IsQ0FBeEIsSUFBMkIsR0FBbEM7QUFDSDs7QUFHRCxTQUFTQyxXQUFULENBQXFCQyxTQUFyQixFQUErQjtBQUMzQixNQUFNVixJQUFJLEdBQUcsSUFBSVcsSUFBSixDQUFTRCxTQUFTLEdBQUcsSUFBckIsQ0FBYjtBQUNBLE1BQUlFLEtBQUssR0FBR1osSUFBSSxDQUFDYSxRQUFMLEVBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUdkLElBQUksQ0FBQ2UsT0FBTCxFQUFWOztBQUVBLE1BQUdILEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBRyxFQUF4QixFQUEyQjtBQUN2QkEsU0FBSyxHQUFHLE1BQU1BLEtBQWQ7QUFDSDs7QUFFRCxNQUFHRSxHQUFHLEdBQUcsQ0FBTixJQUFXQSxHQUFHLEdBQUcsRUFBcEIsRUFBdUI7QUFDbkJGLFNBQUssR0FBRyxNQUFNRSxHQUFkO0FBQ0g7QUFDSjs7QUFHRCIsImZpbGUiOiIuL3V0aWxzL3V0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0IHRpbWVzdGFtcCB0byBzcGVjaWZpYyBmb3JtYXQuXG4gKiBAcGFyYW0gdGltZSB0aGUgdmFsdWUgZm9yIGNvbnZlcnRpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZHVyYXRpb25cbiAqL1xuZnVuY3Rpb24gY29udmVydER1cmF0aW9uKHRpbWUpe1xuICAgIGxldCBob3VyID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCAlIDI0KTtcbiAgICBsZXQgbWluID0gTWF0aC5mbG9vcih0aW1lIC8gNjAgJSA2MCk7XG4gICAgbGV0IHNlYyA9IE1hdGguZmxvb3IodGltZSAlIDYwKTtcblxuICAgIGlmKGhvdXIgPiAwICYmIGhvdXIgPCAxMCl7XG4gICAgICAgIGhvdXIgPSBcIjBcIiArIGhvdXI7XG4gICAgfVxuXG4gICAgaWYobWluID4gMCAmJiBtaW4gPCAxMCl7XG4gICAgICAgIG1pbiA9IFwiMFwiICsgbWluO1xuICAgIH1cblxuICAgIGlmKHNlYyA+IDAgJiYgc2VjIDwgMTApe1xuICAgICAgICBzZWMgPSBcIjBcIiArIHNlYztcbiAgICB9XG5cbiAgICBpZihob3VyID49IDEgJiYgbWluID09PSAwICYmIHNlYyA9PT0gMCl7XG4gICAgICAgIHJldHVybiBgJHtob3VyfTowMDowMGA7XG4gICAgfWVsc2UgaWYoaG91ciA+PSAxICYmIG1pbiAhPT0gMCAmJiBzZWMgPT09IDApe1xuICAgICAgICByZXR1cm4gYCR7aG91cn06JHttaW59OjAwYDtcbiAgICB9ZWxzZSBpZihob3VyID49IDEgJiYgbWluICE9PSAwICYmIHNlYyAhPT0gMCl7XG4gICAgICAgIHJldHVybiBgJHtob3VyfToke21pbn06JHtzZWN9YDtcbiAgICB9ZWxzZSBpZihtaW4gPj0gMSAmJiBzZWMgPT09IDApe1xuICAgICAgICByZXR1cm4gYCR7bWlufTowMGA7XG4gICAgfWVsc2UgaWYobWluID49IDEgJiYgc2VjICE9PSAwKXtcbiAgICAgICAgcmV0dXJuIGAke21pbn06JHtzZWN9YFxuICAgIH1lbHNlIGlmKGhvdXIgPT09IDAgJiYgbWluID09PSAwICYmIHNlYyAhPT0gMCl7XG4gICAgICAgIHJldHVybiBgMDA6JHtzZWN9YFxuICAgIH1cblxuICAgIHJldHVybiAnMDA6MDAnXG59XG5cbi8qKlxuICogQ29udmVydCB2aWV3cyB0byBzcGVjaWZpYyBmb3JtYXQuXG4gKiBAcGFyYW0gdmlld3MgdGhlIHZhbHVlIGZvciBjb252ZXJ0aW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfCp9IHRoZSBmb3JtYXR0ZWQgdmlld1xuICovXG5mdW5jdGlvbiBjb252ZXJ0Vmlld3Modmlld3Mpe1xuXG4gICAgaWYodmlld3MgPCAxMDAwMCkgcmV0dXJuIHZpZXdzO1xuICAgIHJldHVybiAodmlld3MgLyAxMDAwMCkudG9GaXhlZCgxKSsn5LiHJztcbn1cblxuXG5mdW5jdGlvbiBjb252ZXJ0VGltZSh0aW1lU3RhbXApe1xuICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSh0aW1lU3RhbXAgKiAxMDAwKTtcbiAgICBsZXQgbW9udGggPSB0aW1lLmdldE1vbnRoKCk7XG4gICAgbGV0IGRheSA9IHRpbWUuZ2V0RGF0ZSgpO1xuXG4gICAgaWYobW9udGggPiAwICYmIG1vbnRoIDwgMTApe1xuICAgICAgICBtb250aCA9IFwiMFwiICsgbW9udGg7XG4gICAgfVxuXG4gICAgaWYoZGF5ID4gMCAmJiBkYXkgPCAxMCl7XG4gICAgICAgIG1vbnRoID0gXCIwXCIgKyBkYXk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7XG4gICAgY29udmVydFZpZXdzLFxuICAgIGNvbnZlcnREdXJhdGlvblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/utils.js\n");

/***/ })

})