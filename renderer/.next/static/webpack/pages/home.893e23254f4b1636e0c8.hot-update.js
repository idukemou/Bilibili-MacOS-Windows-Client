webpackHotUpdate_N_E("pages/home",{

/***/ "./components/homePage/rcmd.jsx":
/*!**************************************!*\
  !*** ./components/homePage/rcmd.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Recommend; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ \"../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.js\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_actionCreators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actionCreators */ \"./redux/actionCreators.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/utils */ \"./utils/utils.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/yuxuan/Desktop/Bilibili-MacOS-Windows-Client/renderer/components/homePage/rcmd.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar ipcRenderer = electron__WEBPACK_IMPORTED_MODULE_6___default.a.ipcRenderer || false;\n\nif (ipcRenderer) {\n  ipcRenderer.send('request_recommend_list');\n  ipcRenderer.on('fetch_recommend_list', /*#__PURE__*/function () {\n    var _ref = Object(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event, data) {\n      return _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.t0 = _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n              _context.next = 3;\n              return Object(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_7__[\"getRecommendListAction\"])(data);\n\n            case 3:\n              _context.t1 = _context.sent;\n\n              _context.t0.dispatch.call(_context.t0, _context.t1);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n}\n/**\n * Recommend UI Component.\n * @param props the props from its parent component\n * @returns {JSX.Element} the UI parts used for rendering\n * @constructor none\n */\n\n\nfunction RecommendUI(props) {\n  _s();\n\n  var box = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      offsetTop = _useState[0],\n      setOffsetTop = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      display = _useState2[0],\n      setDisplay = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (props.clientData.scrollTop) {\n      // if((props.clientData.scrollTop - offsetTop > 0)){\n      //     console.log('隐藏咯');\n      //     setDisplay(false);\n      // }else{\n      //     setDisplay(true);\n      // }\n      // if((offsetTop - props.clientData.scrollTop > props.clientData.clientHeight)){\n      //     console.log('隐藏咯');\n      //     setDisplay(false);\n      // }else{\n      //     setDisplay(true);\n      // }\n      if (props.videoInfo.title === '我穿越啦！！') {\n        console.log('offsetTop: ', offsetTop, ' ===> ', 'scrollTop: ', props.clientData.scrollTop);\n        console.log('clientHeight: ', props.clientData.clientHeight);\n      }\n    }\n  }, [props.clientData.scrollTop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setOffsetTop(box.current.offsetTop + 220);\n  }, [offsetTop]);\n  var data = props.videoInfo;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"rcmd-item\",\n    ref: box,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: 'rcmd-item-wrapper',\n      style: {\n        display: display ? 'block' : 'none'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"rcmd-item-info-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: data.pic,\n          alt: data.title,\n          className: \"rcmd-item-image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"rcmd-item-stat\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"rcmd-item-duration\",\n            children: [\" \", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"convertDuration\"])(data.duration), \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"rcmd-item-views\",\n            children: [\" \", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"convertViews\"])(data.stat.view), \"\\u89C2\\u770B \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"rcmd-item-title-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"rcmd-item-owner\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: data.owner.face,\n            alt: data.owner.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"rcmd-item-title\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: [\" \", data.title, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 9\n  }, this);\n}\n/**\n * Recommend Section Component\n * @param props the props from parent component\n * @returns {JSX.Element} the Recommend UI parts used for rendering\n * @constructor none\n */\n\n\n_s(RecommendUI, \"DiS1xAHiVhmhcRht669/ngHbrrA=\");\n\n_c = RecommendUI;\nfunction Recommend(props) {\n  _s2();\n\n  var _this = this;\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getState().recommendList),\n      recommendList = _useState3[0],\n      setRecommendList = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      counter = _useState4[0],\n      setCounter = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].subscribe(function () {\n      setRecommendList(_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getState().recommendList);\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getState().recommendList]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (props.loading && counter <= 20) {\n      // loadMore();\n      console.log('rcmd.js.75 =====> loadMore');\n      setCounter(counter + 1);\n    }\n  }, [props.loading]);\n\n  function loadMore() {\n    if (ipcRenderer) {\n      ipcRenderer.invoke('request_recommend_list_append').then(function (data) {\n        var temp = recommendList.concat(data.item);\n        setRecommendList(temp);\n      });\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: recommendList.map(function (list, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RecommendUI, _objectSpread({\n        videoInfo: list\n      }, props), index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 21\n      }, _this);\n    })\n  }, void 0, false);\n}\n\n_s2(Recommend, \"l0LneLN0G+byP+BMaNKTr4rPRb4=\");\n\n_c2 = Recommend;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RecommendUI\");\n$RefreshReg$(_c2, \"Recommend\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lUGFnZS9yY21kLmpzeD80YjIwIl0sIm5hbWVzIjpbImlwY1JlbmRlcmVyIiwiZWxlY3Ryb24iLCJzZW5kIiwib24iLCJldmVudCIsImRhdGEiLCJzdG9yZSIsImdldFJlY29tbWVuZExpc3RBY3Rpb24iLCJkaXNwYXRjaCIsIlJlY29tbWVuZFVJIiwicHJvcHMiLCJib3giLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm9mZnNldFRvcCIsInNldE9mZnNldFRvcCIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwidXNlRWZmZWN0IiwiY2xpZW50RGF0YSIsInNjcm9sbFRvcCIsInZpZGVvSW5mbyIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImNsaWVudEhlaWdodCIsImN1cnJlbnQiLCJwaWMiLCJjb252ZXJ0RHVyYXRpb24iLCJkdXJhdGlvbiIsImNvbnZlcnRWaWV3cyIsInN0YXQiLCJ2aWV3Iiwib3duZXIiLCJmYWNlIiwibmFtZSIsIlJlY29tbWVuZCIsImdldFN0YXRlIiwicmVjb21tZW5kTGlzdCIsInNldFJlY29tbWVuZExpc3QiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInN1YnNjcmliZSIsImxvYWRpbmciLCJsb2FkTW9yZSIsImludm9rZSIsInRoZW4iLCJ0ZW1wIiwiY29uY2F0IiwiaXRlbSIsIm1hcCIsImxpc3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywrQ0FBUSxDQUFDRCxXQUFULElBQXdCLEtBQTVDOztBQUVBLElBQUdBLFdBQUgsRUFBZTtBQUNYQSxhQUFXLENBQUNFLElBQVosQ0FBaUIsd0JBQWpCO0FBQ0FGLGFBQVcsQ0FBQ0csRUFBWixDQUFlLHNCQUFmO0FBQUEsb1dBQXVDLGlCQUFPQyxLQUFQLEVBQWNDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFB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O0FBQ0osR0FOUSxFQU1OLENBQUM5QixLQUFLLENBQUNpQyxPQUFQLENBTk0sQ0FBVDs7QUFRQSxXQUFTQyxRQUFULEdBQW1CO0FBQ2YsUUFBRzVDLFdBQUgsRUFBZTtBQUNYQSxpQkFBVyxDQUFDNkMsTUFBWixDQUFtQiwrQkFBbkIsRUFDS0MsSUFETCxDQUNVLFVBQUF6QyxJQUFJLEVBQUk7QUFDVixZQUFNMEMsSUFBSSxHQUFHVCxhQUFhLENBQUNVLE1BQWQsQ0FBcUIzQyxJQUFJLENBQUM0QyxJQUExQixDQUFiO0FBQ0FWLHdCQUFnQixDQUFDUSxJQUFELENBQWhCO0FBQ0gsT0FKTDtBQUtIO0FBQ0o7O0FBRUQsc0JBQ0k7QUFBQSxjQUVRVCxhQUFhLENBQUNZLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMEJBQ2QscUVBQUMsV0FBRDtBQUF5QixpQkFBUyxFQUFFRDtBQUFwQyxTQUE4Q3pDLEtBQTlDLEdBQWtCMEMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBbEI7QUFGUixtQkFESjtBQVNIOztJQXRDdUJoQixTOztNQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lUGFnZS9yY21kLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IGVsZWN0cm9uIGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7IGdldFJlY29tbWVuZExpc3RBY3Rpb24gfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uQ3JlYXRvcnNcIjtcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvbiwgY29udmVydFZpZXdzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XG5cbmNvbnN0IGlwY1JlbmRlcmVyID0gZWxlY3Ryb24uaXBjUmVuZGVyZXIgfHwgZmFsc2U7XG5cbmlmKGlwY1JlbmRlcmVyKXtcbiAgICBpcGNSZW5kZXJlci5zZW5kKCdyZXF1ZXN0X3JlY29tbWVuZF9saXN0Jyk7XG4gICAgaXBjUmVuZGVyZXIub24oJ2ZldGNoX3JlY29tbWVuZF9saXN0JywgYXN5bmMgKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGF3YWl0IGdldFJlY29tbWVuZExpc3RBY3Rpb24oZGF0YSkpXG4gICAgfSk7XG59XG5cblxuLyoqXG4gKiBSZWNvbW1lbmQgVUkgQ29tcG9uZW50LlxuICogQHBhcmFtIHByb3BzIHRoZSBwcm9wcyBmcm9tIGl0cyBwYXJlbnQgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9IHRoZSBVSSBwYXJ0cyB1c2VkIGZvciByZW5kZXJpbmdcbiAqIEBjb25zdHJ1Y3RvciBub25lXG4gKi9cbmZ1bmN0aW9uIFJlY29tbWVuZFVJKHByb3BzKXtcblxuICAgIGNvbnN0IGJveCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbb2Zmc2V0VG9wLCBzZXRPZmZzZXRUb3BdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUodHJ1ZSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHByb3BzLmNsaWVudERhdGEuc2Nyb2xsVG9wKXtcbiAgICAgICAgICAgIC8vIGlmKChwcm9wcy5jbGllbnREYXRhLnNjcm9sbFRvcCAtIG9mZnNldFRvcCA+IDApKXtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygn6ZqQ6JeP5ZKvJyk7XG4gICAgICAgICAgICAvLyAgICAgc2V0RGlzcGxheShmYWxzZSk7XG4gICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgIC8vICAgICBzZXREaXNwbGF5KHRydWUpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBpZigob2Zmc2V0VG9wIC0gcHJvcHMuY2xpZW50RGF0YS5zY3JvbGxUb3AgPiBwcm9wcy5jbGllbnREYXRhLmNsaWVudEhlaWdodCkpe1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCfpmpDol4/lkq8nKTtcbiAgICAgICAgICAgIC8vICAgICBzZXREaXNwbGF5KGZhbHNlKTtcbiAgICAgICAgICAgIC8vIH1lbHNle1xuICAgICAgICAgICAgLy8gICAgIHNldERpc3BsYXkodHJ1ZSk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGlmKHByb3BzLnZpZGVvSW5mby50aXRsZSA9PT0gJ+aIkeepv+i2iuWVpu+8ge+8gScpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvZmZzZXRUb3A6ICcsIG9mZnNldFRvcCwgJyA9PT0+ICcsICdzY3JvbGxUb3A6ICcsIHByb3BzLmNsaWVudERhdGEuc2Nyb2xsVG9wKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpZW50SGVpZ2h0OiAnLCBwcm9wcy5jbGllbnREYXRhLmNsaWVudEhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuY2xpZW50RGF0YS5zY3JvbGxUb3BdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldE9mZnNldFRvcChib3guY3VycmVudC5vZmZzZXRUb3AgKyAyMjApO1xuICAgIH0sIFtvZmZzZXRUb3BdKTtcblxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy52aWRlb0luZm87XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyY21kLWl0ZW0nIHJlZj17Ym94fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncmNtZC1pdGVtLXdyYXBwZXInfSBzdHlsZT17e2Rpc3BsYXk6IChkaXNwbGF5ID8gJ2Jsb2NrJzogJ25vbmUnKX19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyY21kLWl0ZW0taW5mby13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucGljfSBhbHQ9e2RhdGEudGl0bGV9IGNsYXNzTmFtZT0ncmNtZC1pdGVtLWltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmNtZC1pdGVtLXN0YXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdyY21kLWl0ZW0tZHVyYXRpb24nPiB7Y29udmVydER1cmF0aW9uKGRhdGEuZHVyYXRpb24pfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JjbWQtaXRlbS12aWV3cyc+IHtjb252ZXJ0Vmlld3MoZGF0YS5zdGF0LnZpZXcpfeingueciyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyY21kLWl0ZW0tdGl0bGUtd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyY21kLWl0ZW0tb3duZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEub3duZXIuZmFjZX0gYWx0PXtkYXRhLm93bmVyLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmNtZC1pdGVtLXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+IHtkYXRhLnRpdGxlfSA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4vKipcbiAqIFJlY29tbWVuZCBTZWN0aW9uIENvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIHRoZSBwcm9wcyBmcm9tIHBhcmVudCBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gdGhlIFJlY29tbWVuZCBVSSBwYXJ0cyB1c2VkIGZvciByZW5kZXJpbmdcbiAqIEBjb25zdHJ1Y3RvciBub25lXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29tbWVuZChwcm9wcyl7XG5cbiAgICBjb25zdCBbcmVjb21tZW5kTGlzdCwgc2V0UmVjb21tZW5kTGlzdF0gPSB1c2VTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpLnJlY29tbWVuZExpc3QpO1xuICAgIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHNldFJlY29tbWVuZExpc3Qoc3RvcmUuZ2V0U3RhdGUoKS5yZWNvbW1lbmRMaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfSwgW3N0b3JlLmdldFN0YXRlKCkucmVjb21tZW5kTGlzdF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYocHJvcHMubG9hZGluZyAmJiBjb3VudGVyIDw9IDIwKXtcbiAgICAgICAgICAgIC8vIGxvYWRNb3JlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmNtZC5qcy43NSA9PT09PT4gbG9hZE1vcmUnKTtcbiAgICAgICAgICAgIHNldENvdW50ZXIoY291bnRlcisxKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5sb2FkaW5nXSk7XG5cbiAgICBmdW5jdGlvbiBsb2FkTW9yZSgpe1xuICAgICAgICBpZihpcGNSZW5kZXJlcil7XG4gICAgICAgICAgICBpcGNSZW5kZXJlci5pbnZva2UoJ3JlcXVlc3RfcmVjb21tZW5kX2xpc3RfYXBwZW5kJylcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHJlY29tbWVuZExpc3QuY29uY2F0KGRhdGEuaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFJlY29tbWVuZExpc3QodGVtcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVjb21tZW5kTGlzdC5tYXAoKGxpc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWNvbW1lbmRVSSBrZXk9e2luZGV4fSB2aWRlb0luZm89e2xpc3R9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/homePage/rcmd.jsx\n");

/***/ })

})