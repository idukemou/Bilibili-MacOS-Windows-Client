webpackHotUpdate_N_E("pages/home",{

/***/ "./components/common/videoDetail.jsx":
/*!*******************************************!*\
  !*** ./components/common/videoDetail.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoDetail; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.js\");\n/* harmony import */ var _redux_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actionCreators */ \"./redux/actionCreators.js\");\n\n\nvar _jsxFileName = \"/Users/yuxuan/Desktop/Bilibili-MacOS-Windows-Client/renderer/components/common/videoDetail.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n/**\n *\n * @param props\n * @returns {JSX.Element}\n * @constructor\n */\n\nfunction Video(props) {\n  _s();\n\n  var flvPlayer = null;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().videoInfo.url),\n      url = _useState[0],\n      setUrl = _useState[1];\n\n  var videoUrl = 'https://upos-hz-mirrorakam.akamaized.net/upgcxcode/95/54/297805495/297805495-1-32.flv?e=ig8euxZM2rNcNbRj7zUVhoM17buBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1619409834&gen=playurlv2&os=akam&oi=2906822554&trid=4c49f3bfa44f482fa4088ce35f8dc88cu&platform=pc&upsig=ee4a0643df0275a65c505b28ae63a29d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&hdnts=exp=1619409834~hmac=947b3a497a1a870d01641c53b44c62689bf45889a78a680d15919365508eb0b2&mid=0&orderid=0,1&agrr=1&logo=80000000';\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subscribe(function () {\n      if (JSON.stringify(_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().videoInfo.url) !== '{}') {\n        var temp = _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().videoInfo.url.durl[0].url;\n        setUrl(temp);\n      }\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().videoInfo.url]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (flvjs.isSupported()) {\n      player_load(url);\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!status) {\n      player_destroy();\n    }\n  }, [props.status]);\n\n  function player_load(url) {\n    if (flvPlayer !== null || flvPlayer !== undefined) {\n      player_destroy();\n    }\n\n    flvPlayer = flvjs.createPlayer({\n      type: 'flv',\n      hasVideo: true,\n      hasAudio: true,\n      url: url\n    });\n    flvPlayer.attachMediaElement(document.getElementById('playerContainer'));\n    flvPlayer.load();\n  }\n\n  function player_start() {\n    if (flvPlayer !== null) {\n      flvPlayer.play();\n    }\n  }\n\n  function player_pause() {\n    if (flvPlayer !== null) {\n      flvPlayer.pause();\n    }\n  }\n\n  function player_destroy() {\n    if (flvPlayer !== null) {\n      flvPlayer.pause();\n      flvPlayer.unload();\n      flvPlayer.detachMediaElement();\n      flvPlayer.destroy();\n      flvPlayer = null;\n    }\n  }\n\n  function player_specificTime() {\n    if (flvPlayer !== null) {\n      flvPlayer.currentTime = 1000 * 10;\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      width: 640,\n      height: 480,\n      border: '1px solid #000'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"video\", {\n      id: \"playerContainer\",\n      width: \"640px\",\n      height: \"480px\",\n      controls: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        return player_start();\n      },\n      children: \"play\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        return player_pause();\n      },\n      children: \"pause\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        return player_destroy();\n      },\n      children: \"destroy\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        return player_specificTime();\n      },\n      children: \"10\\u79D2\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 9\n  }, this);\n}\n/**\n *\n * @param props\n * @returns {JSX.Element}\n * @constructor\n */\n\n\n_s(Video, \"5x4vC7jVgbEunD0Eot5ZliAmp7k=\");\n\n_c = Video;\nfunction VideoDetail(props) {\n  _s2();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().playVideoStatus),\n      status = _useState2[0],\n      setStatus = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subscribe(function () {\n      setStatus(_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().playVideoStatus);\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getState().playVideoStatus]);\n\n  function exitVideo() {\n    _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dispatch(Object(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_3__[\"platVideoStatusAction\"])(false));\n    _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dispatch(Object(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_3__[\"playVideoInfoAction\"])({\n      url: {},\n      info: {}\n    }));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    style: {\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0,\n      zIndex: '10000',\n      backgroundColor: 'lightpink',\n      display: status ? 'block' : 'none'\n    },\n    children: [status ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Video, {\n      status: status\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 26\n    }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 18\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 23\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 28\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        return exitVideo();\n      },\n      children: \"cancel\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 9\n  }, this);\n}\n\n_s2(VideoDetail, \"1IV1QrlNWNfANAKMe6lxWYK5QPg=\");\n\n_c2 = VideoDetail;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Video\");\n$RefreshReg$(_c2, \"VideoDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vdmlkZW9EZXRhaWwuanN4P2MwNjYiXSwibmFtZXMiOlsiVmlkZW8iLCJwcm9wcyIsImZsdlBsYXllciIsInVzZVN0YXRlIiwic3RvcmUiLCJnZXRTdGF0ZSIsInZpZGVvSW5mbyIsInVybCIsInNldFVybCIsInZpZGVvVXJsIiwidXNlRWZmZWN0Iiwic3Vic2NyaWJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJkdXJsIiwiZmx2anMiLCJpc1N1cHBvcnRlZCIsInBsYXllcl9sb2FkIiwic3RhdHVzIiwicGxheWVyX2Rlc3Ryb3kiLCJ1bmRlZmluZWQiLCJjcmVhdGVQbGF5ZXIiLCJ0eXBlIiwiaGFzVmlkZW8iLCJoYXNBdWRpbyIsImF0dGFjaE1lZGlhRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2FkIiwicGxheWVyX3N0YXJ0IiwicGxheSIsInBsYXllcl9wYXVzZSIsInBhdXNlIiwidW5sb2FkIiwiZGV0YWNoTWVkaWFFbGVtZW50IiwiZGVzdHJveSIsInBsYXllcl9zcGVjaWZpY1RpbWUiLCJjdXJyZW50VGltZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiVmlkZW9EZXRhaWwiLCJwbGF5VmlkZW9TdGF0dXMiLCJzZXRTdGF0dXMiLCJleGl0VmlkZW8iLCJkaXNwYXRjaCIsInBsYXRWaWRlb1N0YXR1c0FjdGlvbiIsInBsYXlWaWRlb0luZm9BY3Rpb24iLCJpbmZvIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBcUI7QUFBQTs7QUFFakIsTUFBSUMsU0FBUyxHQUFHLElB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QUUsRUFEMEI7QUFFL0IwQyxVQUFJLEVBQUU7QUFGeUIsS0FBRCxDQUFsQztBQUlIOztBQUVELHNCQUNJO0FBQVMsU0FBSyxFQUFFO0FBQ1pDLGNBQVEsRUFBRSxVQURFO0FBRVpDLFNBQUcsRUFBRSxDQUZPO0FBR1pDLFVBQUksRUFBRSxDQUhNO0FBSVpDLFdBQUssRUFBRSxDQUpLO0FBS1pDLFlBQU0sRUFBRSxDQUxJO0FBTVpDLFlBQU0sRUFBRSxPQU5JO0FBT1pDLHFCQUFlLEVBQUUsV0FQTDtBQVFaQyxhQUFPLEVBQUd0QyxNQUFNLEdBQUcsT0FBSCxHQUFZO0FBUmhCLEtBQWhCO0FBQUEsZUFXUUEsTUFBTSxnQkFBRyxxRUFBQyxLQUFEO0FBQU8sWUFBTSxFQUFFQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxHQUErQixFQVg3QyxlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSixlQWFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiVCxlQWFjO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiZCxlQWFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYm5CLGVBY0k7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNMEIsU0FBUyxFQUFmO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDs7SUFyQ3VCSCxXOztNQUFBQSxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb21tb24vdmlkZW9EZXRhaWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtwbGF0VmlkZW9TdGF0dXNBY3Rpb24sIHBsYXlWaWRlb0luZm9BY3Rpb259IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25DcmVhdG9yc1wiO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBWaWRlbyhwcm9wcyl7XG5cbiAgICBsZXQgZmx2UGxheWVyID0gbnVsbDtcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKS52aWRlb0luZm8udXJsKTtcbiAgICBjb25zdCB2aWRlb1VybCA9ICdodHRwczovL3Vwb3MtaHotbWlycm9yYWthbS5ha2FtYWl6ZWQubmV0L3VwZ2N4Y29kZS85NS81NC8yOTc4MDU0OTUvMjk3ODA1NDk1LTEtMzIuZmx2P2U9aWc4ZXV4Wk0yck5jTmJSajd6VVZob00xN2J1Qmh3ZEV0bzhnNVgxMHVnTmNYQmxxTnhIeE5FVkU1WFJFdG84S3FKWkhVYTZtNUowU3FFODV0WnZFdUVOdk5vOGcyRU52Tm84aThvODU5cjFxWGc4eE5FVkU1WFJFdG84R3VGR3YyVTdTdXhJNzJYNmZUcjg1OXIxcVhnOGdORVZFNVhSRXRvOHo1SlpDMlgyZ2tYNUw1RjFlVFgxamtYbHNUWEhldXhfZjJvODU5SUJfJnVpcGs9NSZuYnM9MSZkZWFkbGluZT0xNjE5NDA5ODM0Jmdlbj1wbGF5dXJsdjImb3M9YWthbSZvaT0yOTA2ODIyNTU0JnRyaWQ9NGM0OWYzYmZhNDRmNDgyZmE0MDg4Y2UzNWY4ZGM4OGN1JnBsYXRmb3JtPXBjJnVwc2lnPWVlNGEwNjQzZGYwMjc1YTY1YzUwNWIyOGFlNjNhMjlkJnVwYXJhbXM9ZSx1aXBrLG5icyxkZWFkbGluZSxnZW4sb3Msb2ksdHJpZCxwbGF0Zm9ybSZoZG50cz1leHA9MTYxOTQwOTgzNH5obWFjPTk0N2IzYTQ5N2ExYTg3MGQwMTY0MWM1M2I0NGM2MjY4OWJmNDU4ODlhNzhhNjgwZDE1OTE5MzY1NTA4ZWIwYjImbWlkPTAmb3JkZXJpZD0wLDEmYWdycj0xJmxvZ289ODAwMDAwMDAnXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkoc3RvcmUuZ2V0U3RhdGUoKS52aWRlb0luZm8udXJsKSAhPT0gJ3t9Jyl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHN0b3JlLmdldFN0YXRlKCkudmlkZW9JbmZvLnVybC5kdXJsWzBdLnVybDtcbiAgICAgICAgICAgICAgICBzZXRVcmwodGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwgW3N0b3JlLmdldFN0YXRlKCkudmlkZW9JbmZvLnVybF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoZmx2anMuaXNTdXBwb3J0ZWQoKSl7XG4gICAgICAgICAgICBwbGF5ZXJfbG9hZCh1cmwpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKCFzdGF0dXMpe1xuICAgICAgICAgICAgcGxheWVyX2Rlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5zdGF0dXNdKVxuXG5cbiAgICBmdW5jdGlvbiBwbGF5ZXJfbG9hZCh1cmwpe1xuICAgICAgICBpZihmbHZQbGF5ZXIgIT09IG51bGwgfHwgZmx2UGxheWVyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcGxheWVyX2Rlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZsdlBsYXllciA9IGZsdmpzLmNyZWF0ZVBsYXllcih7XG4gICAgICAgICAgICB0eXBlOiAnZmx2JyxcbiAgICAgICAgICAgIGhhc1ZpZGVvOiB0cnVlLFxuICAgICAgICAgICAgaGFzQXVkaW86IHRydWUsXG4gICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9KTtcblxuICAgICAgICBmbHZQbGF5ZXIuYXR0YWNoTWVkaWFFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJDb250YWluZXInKSk7XG4gICAgICAgIGZsdlBsYXllci5sb2FkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheWVyX3N0YXJ0KCl7XG4gICAgICAgIGlmKGZsdlBsYXllciAhPT0gbnVsbCl7XG4gICAgICAgICAgICBmbHZQbGF5ZXIucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheWVyX3BhdXNlKCl7XG4gICAgICAgIGlmKGZsdlBsYXllciAhPT0gbnVsbCl7XG4gICAgICAgICAgICBmbHZQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXllcl9kZXN0cm95KCl7XG4gICAgICAgIGlmKGZsdlBsYXllciAhPT0gbnVsbCl7XG4gICAgICAgICAgICBmbHZQbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIGZsdlBsYXllci51bmxvYWQoKTtcbiAgICAgICAgICAgIGZsdlBsYXllci5kZXRhY2hNZWRpYUVsZW1lbnQoKTtcbiAgICAgICAgICAgIGZsdlBsYXllci5kZXN0cm95KCk7XG4gICAgICAgICAgICBmbHZQbGF5ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheWVyX3NwZWNpZmljVGltZSgpe1xuICAgICAgICBpZihmbHZQbGF5ZXIgIT09IG51bGwpe1xuICAgICAgICAgICAgZmx2UGxheWVyLmN1cnJlbnRUaW1lID0gMTAwMCAqIDEwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6NjQwLCBoZWlnaHQ6NDgwLCBib3JkZXI6ICcxcHggc29saWQgIzAwMCd9fT5cbiAgICAgICAgICAgIDx2aWRlbyBpZD0ncGxheWVyQ29udGFpbmVyJyB3aWR0aD0nNjQwcHgnIGhlaWdodD0nNDgwcHgnIGNvbnRyb2xzPXt0cnVlfT48L3ZpZGVvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwbGF5ZXJfc3RhcnQoKX0+cGxheTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwbGF5ZXJfcGF1c2UoKX0+cGF1c2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcGxheWVyX2Rlc3Ryb3koKX0+ZGVzdHJveTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwbGF5ZXJfc3BlY2lmaWNUaW1lKCl9PjEw56eSPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG4vKipcbiAqXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb0RldGFpbChwcm9wcyl7XG5cbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKS5wbGF5VmlkZW9TdGF0dXMpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhzdG9yZS5nZXRTdGF0ZSgpLnBsYXlWaWRlb1N0YXR1cyk7XG4gICAgICAgIH0pXG4gICAgfSwgW3N0b3JlLmdldFN0YXRlKCkucGxheVZpZGVvU3RhdHVzXSk7XG5cblxuICAgIGZ1bmN0aW9uIGV4aXRWaWRlbygpe1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChwbGF0VmlkZW9TdGF0dXNBY3Rpb24oZmFsc2UpKTtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocGxheVZpZGVvSW5mb0FjdGlvbih7XG4gICAgICAgICAgICB1cmw6IHt9LFxuICAgICAgICAgICAgaW5mbzoge31cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgekluZGV4OiAnMTAwMDAnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRwaW5rJyxcbiAgICAgICAgICAgIGRpc3BsYXk6IChzdGF0dXMgPyAnYmxvY2snOiAnbm9uZScpXG4gICAgICAgIH19PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA/IDxWaWRlbyBzdGF0dXM9e3N0YXR1c30gLz4gOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGJyLz48YnIvPjxici8+PGJyLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZXhpdFZpZGVvKCl9PmNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/videoDetail.jsx\n");

/***/ })

})