webpackHotUpdate_N_E("pages/home",{

/***/ "./components/homePage/rcmd.jsx":
/*!**************************************!*\
  !*** ./components/homePage/rcmd.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Recommend; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ \"../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.js\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_actionCreators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actionCreators */ \"./redux/actionCreators.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/utils */ \"./utils/utils.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/yuxuan/Desktop/Bilibili-MacOS-Windows-Client/renderer/components/homePage/rcmd.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar ipcRenderer = electron__WEBPACK_IMPORTED_MODULE_6___default.a.ipcRenderer || false;\n\nif (ipcRenderer) {\n  ipcRenderer.send('request_recommend_list');\n  ipcRenderer.on('fetch_recommend_list', /*#__PURE__*/function () {\n    var _ref = Object(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event, data) {\n      return _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.t0 = _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n              _context.next = 3;\n              return Object(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_7__[\"getRecommendListAction\"])(data);\n\n            case 3:\n              _context.t1 = _context.sent;\n\n              _context.t0.dispatch.call(_context.t0, _context.t1);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n}\n/**\n * Recommend UI Component.\n * @param props the props from its parent component\n * @returns {JSX.Element} the UI parts used for rendering\n * @constructor none\n */\n\n\nfunction RecommendUI(props) {\n  _s();\n\n  var box = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      offsetTop = _useState[0],\n      setOffsetTop = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      display = _useState2[0],\n      setDisplay = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (props.clientData.scrollTop) {\n      // if((props.clientData.scrollTop - offsetTop > 0)){\n      //     console.log('隐藏咯');\n      //     setDisplay(false);\n      // }else{\n      //     setDisplay(true);\n      // }\n      // if((offsetTop - props.clientData.scrollTop > props.clientData.clientHeight)){\n      //     console.log('隐藏咯');\n      //     setDisplay(false);\n      // }else{\n      //     setDisplay(true);\n      // }\n      if (props.videoInfo.title === '我穿越啦！！') console.log(scrollTop);\n    }\n  }, [props.clientData.scrollTop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setOffsetTop(box.current.offsetTop + 220);\n  }, [offsetTop]);\n  var data = props.videoInfo;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"rcmd-item\",\n    ref: box,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: 'rcmd-item-wrapper',\n      style: {\n        display: display ? 'block' : 'none'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"rcmd-item-info-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: data.pic,\n          alt: data.title,\n          className: \"rcmd-item-image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"rcmd-item-stat\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"rcmd-item-duration\",\n            children: [\" \", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"convertDuration\"])(data.duration), \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"rcmd-item-views\",\n            children: [\" \", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"convertViews\"])(data.stat.view), \"\\u89C2\\u770B \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"rcmd-item-title-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"rcmd-item-owner\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: data.owner.face,\n            alt: data.owner.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"rcmd-item-title\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: [\" \", data.title, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, this);\n}\n/**\n * Recommend Section Component\n * @param props the props from parent component\n * @returns {JSX.Element} the Recommend UI parts used for rendering\n * @constructor none\n */\n\n\n_s(RecommendUI, \"DiS1xAHiVhmhcRht669/ngHbrrA=\");\n\n_c = RecommendUI;\nfunction Recommend(props) {\n  _s2();\n\n  var _this = this;\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getState().recommendList),\n      recommendList = _useState3[0],\n      setRecommendList = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      counter = _useState4[0],\n      setCounter = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].subscribe(function () {\n      setRecommendList(_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getState().recommendList);\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getState().recommendList]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (props.loading && counter <= 20) {\n      // loadMore();\n      console.log('rcmd.js.75 =====> loadMore');\n      setCounter(counter + 1);\n    }\n  }, [props.loading]);\n\n  function loadMore() {\n    if (ipcRenderer) {\n      ipcRenderer.invoke('request_recommend_list_append').then(function (data) {\n        var temp = recommendList.concat(data.item);\n        setRecommendList(temp);\n      });\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: recommendList.map(function (list, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RecommendUI, _objectSpread({\n        videoInfo: list\n      }, props), index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 21\n      }, _this);\n    })\n  }, void 0, false);\n}\n\n_s2(Recommend, \"l0LneLN0G+byP+BMaNKTr4rPRb4=\");\n\n_c2 = Recommend;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RecommendUI\");\n$RefreshReg$(_c2, \"Recommend\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lUGFnZS9yY21kLmpzeD80YjIwIl0sIm5hbWVzIjpbImlwY1JlbmRlcmVyIiwiZWxlY3Ryb24iLCJzZW5kIiwib24iLCJldmVudCIsImRhdGEiLCJzdG9yZSIsImdldFJlY29tbWVuZExpc3RBY3Rpb24iLCJkaXNwYXRjaCIsIlJlY29tbWVuZFVJIiwicHJvcHMiLCJib3giLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm9mZnNldFRvcCIsInNldE9mZnNldFRvcCIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwidXNlRWZmZWN0IiwiY2xpZW50RGF0YSIsInNjcm9sbFRvcCIsInZpZGVvSW5mbyIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJwaWMiLCJjb252ZXJ0RHVyYXRpb24iLCJkdXJhdGlvbiIsImNvbnZlcnRWaWV3cyIsInN0YXQiLCJ2aWV3Iiwib3duZXIiLCJmYWNlIiwibmFtZSIsIlJlY29tbWVuZCIsImdldFN0YXRlIiwicmVjb21tZW5kTGlzdCIsInNldFJlY29tbWVuZExpc3QiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInN1YnNjcmliZSIsImxvYWRpbmciLCJsb2FkTW9yZSIsImludm9rZSIsInRoZW4iLCJ0ZW1wIiwiY29uY2F0IiwiaXRlbSIsIm1hcCIsImxpc3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywrQ0FBUSxDQUFDRCxXQUFULElBQXdCLEtBQTVDOztBQUVBLElBQUdBLFdBQUgsRUFBZTtBQUNYQSxhQUFXLENBQUNFLElBQVosQ0FBaUIsd0JBQWpCO0FBQ0FGLGFBQVcsQ0FBQ0csRUFBWixDQUFlLHNCQUFmO0FBQUEsb1dBQXVDLGlCQUFPQyxLQUFQLEVBQWNDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNuQ0Ms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QUNWLFlBQU15QyxJQUFJLEdBQUdULGFBQWEsQ0FBQ1UsTUFBZCxDQUFxQjFDLElBQUksQ0FBQzJDLElBQTFCLENBQWI7QUFDQVYsd0JBQWdCLENBQUNRLElBQUQsQ0FBaEI7QUFDSCxPQUpMO0FBS0g7QUFDSjs7QUFFRCxzQkFDSTtBQUFBLGNBRVFULGFBQWEsQ0FBQ1ksR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSwwQkFDZCxxRUFBQyxXQUFEO0FBQXlCLGlCQUFTLEVBQUVEO0FBQXBDLFNBQThDeEMsS0FBOUMsR0FBa0J5QyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFsQjtBQUZSLG1CQURKO0FBU0g7O0lBdEN1QmhCLFM7O01BQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVQYWdlL3JjbWQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uLy4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgZWxlY3Ryb24gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHsgZ2V0UmVjb21tZW5kTGlzdEFjdGlvbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25DcmVhdG9yc1wiO1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uLCBjb252ZXJ0Vmlld3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcblxuY29uc3QgaXBjUmVuZGVyZXIgPSBlbGVjdHJvbi5pcGNSZW5kZXJlciB8fCBmYWxzZTtcblxuaWYoaXBjUmVuZGVyZXIpe1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoJ3JlcXVlc3RfcmVjb21tZW5kX2xpc3QnKTtcbiAgICBpcGNSZW5kZXJlci5vbignZmV0Y2hfcmVjb21tZW5kX2xpc3QnLCBhc3luYyAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYXdhaXQgZ2V0UmVjb21tZW5kTGlzdEFjdGlvbihkYXRhKSlcbiAgICB9KTtcbn1cblxuXG4vKipcbiAqIFJlY29tbWVuZCBVSSBDb21wb25lbnQuXG4gKiBAcGFyYW0gcHJvcHMgdGhlIHByb3BzIGZyb20gaXRzIHBhcmVudCBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gdGhlIFVJIHBhcnRzIHVzZWQgZm9yIHJlbmRlcmluZ1xuICogQGNvbnN0cnVjdG9yIG5vbmVcbiAqL1xuZnVuY3Rpb24gUmVjb21tZW5kVUkocHJvcHMpe1xuXG4gICAgY29uc3QgYm94ID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtvZmZzZXRUb3AsIHNldE9mZnNldFRvcF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYocHJvcHMuY2xpZW50RGF0YS5zY3JvbGxUb3Ape1xuICAgICAgICAgICAgLy8gaWYoKHByb3BzLmNsaWVudERhdGEuc2Nyb2xsVG9wIC0gb2Zmc2V0VG9wID4gMCkpe1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCfpmpDol4/lkq8nKTtcbiAgICAgICAgICAgIC8vICAgICBzZXREaXNwbGF5KGZhbHNlKTtcbiAgICAgICAgICAgIC8vIH1lbHNle1xuICAgICAgICAgICAgLy8gICAgIHNldERpc3BsYXkodHJ1ZSk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIGlmKChvZmZzZXRUb3AgLSBwcm9wcy5jbGllbnREYXRhLnNjcm9sbFRvcCA+IHByb3BzLmNsaWVudERhdGEuY2xpZW50SGVpZ2h0KSl7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ+makOiXj+WSrycpO1xuICAgICAgICAgICAgLy8gICAgIHNldERpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAvLyAgICAgc2V0RGlzcGxheSh0cnVlKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgaWYocHJvcHMudmlkZW9JbmZvLnRpdGxlID09PSAn5oiR56m/6LaK5ZWm77yB77yBJykgY29uc29sZS5sb2coc2Nyb2xsVG9wKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5jbGllbnREYXRhLnNjcm9sbFRvcF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0T2Zmc2V0VG9wKGJveC5jdXJyZW50Lm9mZnNldFRvcCArIDIyMCk7XG4gICAgfSwgW29mZnNldFRvcF0pO1xuXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLnZpZGVvSW5mbztcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JjbWQtaXRlbScgcmVmPXtib3h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyY21kLWl0ZW0td3JhcHBlcid9IHN0eWxlPXt7ZGlzcGxheTogKGRpc3BsYXkgPyAnYmxvY2snOiAnbm9uZScpfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JjbWQtaXRlbS1pbmZvLXdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5waWN9IGFsdD17ZGF0YS50aXRsZX0gY2xhc3NOYW1lPSdyY21kLWl0ZW0taW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyY21kLWl0ZW0tc3RhdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JjbWQtaXRlbS1kdXJhdGlvbic+IHtjb252ZXJ0RHVyYXRpb24oZGF0YS5kdXJhdGlvbil9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncmNtZC1pdGVtLXZpZXdzJz4ge2NvbnZlcnRWaWV3cyhkYXRhLnN0YXQudmlldyl96KeC55yLIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JjbWQtaXRlbS10aXRsZS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JjbWQtaXRlbS1vd25lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5vd25lci5mYWNlfSBhbHQ9e2RhdGEub3duZXIubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyY21kLWl0ZW0tdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ge2RhdGEudGl0bGV9IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbi8qKlxuICogUmVjb21tZW5kIFNlY3Rpb24gQ29tcG9uZW50XG4gKiBAcGFyYW0gcHJvcHMgdGhlIHByb3BzIGZyb20gcGFyZW50IGNvbXBvbmVudFxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSB0aGUgUmVjb21tZW5kIFVJIHBhcnRzIHVzZWQgZm9yIHJlbmRlcmluZ1xuICogQGNvbnN0cnVjdG9yIG5vbmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb21tZW5kKHByb3BzKXtcblxuICAgIGNvbnN0IFtyZWNvbW1lbmRMaXN0LCBzZXRSZWNvbW1lbmRMaXN0XSA9IHVzZVN0YXRlKHN0b3JlLmdldFN0YXRlKCkucmVjb21tZW5kTGlzdCk7XG4gICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgc2V0UmVjb21tZW5kTGlzdChzdG9yZS5nZXRTdGF0ZSgpLnJlY29tbWVuZExpc3QpO1xuICAgICAgICB9KTtcbiAgICB9LCBbc3RvcmUuZ2V0U3RhdGUoKS5yZWNvbW1lbmRMaXN0XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihwcm9wcy5sb2FkaW5nICYmIGNvdW50ZXIgPD0gMjApe1xuICAgICAgICAgICAgLy8gbG9hZE1vcmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyY21kLmpzLjc1ID09PT09PiBsb2FkTW9yZScpO1xuICAgICAgICAgICAgc2V0Q291bnRlcihjb3VudGVyKzEpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLmxvYWRpbmddKTtcblxuICAgIGZ1bmN0aW9uIGxvYWRNb3JlKCl7XG4gICAgICAgIGlmKGlwY1JlbmRlcmVyKXtcbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLmludm9rZSgncmVxdWVzdF9yZWNvbW1lbmRfbGlzdF9hcHBlbmQnKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gcmVjb21tZW5kTGlzdC5jb25jYXQoZGF0YS5pdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVjb21tZW5kTGlzdCh0ZW1wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWNvbW1lbmRMaXN0Lm1hcCgobGlzdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlY29tbWVuZFVJIGtleT17aW5kZXh9IHZpZGVvSW5mbz17bGlzdH0gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/homePage/rcmd.jsx\n");

/***/ })

})