webpackHotUpdate_N_E("pages/home",{

/***/ "./components/homePage/rcmd.jsx":
/*!**************************************!*\
  !*** ./components/homePage/rcmd.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Recommend; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ \"../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.js\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_actionCreators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actionCreators */ \"./redux/actionCreators.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/utils */ \"./utils/utils.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/yuxuan/Desktop/Bilibili-MacOS-Windows-Client/renderer/components/homePage/rcmd.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar ipcRenderer = electron__WEBPACK_IMPORTED_MODULE_6___default.a.ipcRenderer || false;\n\nif (ipcRenderer) {\n  ipcRenderer.send('request_recommend_list');\n  ipcRenderer.on('fetch_recommend_list', /*#__PURE__*/function () {\n    var _ref = Object(_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event, data) {\n      return _Users_yuxuan_Desktop_Bilibili_MacOS_Windows_Client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.t0 = _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n              _context.next = 3;\n              return Object(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_7__[\"getRecommendListAction\"])(data);\n\n            case 3:\n              _context.t1 = _context.sent;\n\n              _context.t0.dispatch.call(_context.t0, _context.t1);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n}\n/**\n * Recommend UI Component.\n * @param props the props from its parent component\n * @returns {JSX.Element} the UI parts used for rendering\n * @constructor none\n */\n\n\nfunction RecommendUI(props) {\n  _s();\n\n  var box = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      offsetTop = _useState[0],\n      setOffsetTop = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      display = _useState2[0],\n      setDisplay = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (props.clientData.scrollTop) {\n      // if((props.clientData.scrollTop - offsetTop > 0)){\n      //     console.log('隐藏咯');\n      //     setDisplay(false);\n      // }else{\n      //     setDisplay(true);\n      // }\n      if (offsetTop - 320 - props.clientData.scrollTop > props.clientData.clientHeight) {\n        console.log('隐藏咯');\n        setDisplay(false);\n      } else {\n        setDisplay(true);\n      }\n    }\n  }, [props.clientData.scrollTop]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setOffsetTop(box.current.offsetTop + 220);\n  }, [offsetTop]);\n  var data = props.videoInfo;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"rcmd-item\",\n    ref: box,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: 'rcmd-item-wrapper',\n      style: {\n        display: display ? 'block' : 'none'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"rcmd-item-info-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: data.pic,\n          alt: data.title,\n          className: \"rcmd-item-image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"rcmd-item-stat\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"rcmd-item-duration\",\n            children: [\" \", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"convertDuration\"])(data.duration), \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"rcmd-item-views\",\n            children: [\" \", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__[\"convertViews\"])(data.stat.view), \"\\u89C2\\u770B \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"rcmd-item-title-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"rcmd-item-owner\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: data.owner.face,\n            alt: data.owner.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"rcmd-item-title\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: [\" \", data.title, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 9\n  }, this);\n}\n/**\n * Recommend Section Component\n * @param props the props from parent component\n * @returns {JSX.Element} the Recommend UI parts used for rendering\n * @constructor none\n */\n\n\n_s(RecommendUI, \"DiS1xAHiVhmhcRht669/ngHbrrA=\");\n\n_c = RecommendUI;\nfunction Recommend(props) {\n  _s2();\n\n  var _this = this;\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getState().recommendList),\n      recommendList = _useState3[0],\n      setRecommendList = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      counter = _useState4[0],\n      setCounter = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].subscribe(function () {\n      setRecommendList(_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getState().recommendList);\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getState().recommendList]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (props.loading && counter <= 20) {\n      // loadMore();\n      console.log('rcmd.js.75 =====> loadMore');\n      setCounter(counter + 1);\n    }\n  }, [props.loading]);\n\n  function loadMore() {\n    if (ipcRenderer) {\n      ipcRenderer.invoke('request_recommend_list_append').then(function (data) {\n        var temp = recommendList.concat(data.item);\n        setRecommendList(temp);\n      });\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: recommendList.map(function (list, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RecommendUI, _objectSpread({\n        videoInfo: list\n      }, props), index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 21\n      }, _this);\n    })\n  }, void 0, false);\n}\n\n_s2(Recommend, \"l0LneLN0G+byP+BMaNKTr4rPRb4=\");\n\n_c2 = Recommend;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RecommendUI\");\n$RefreshReg$(_c2, \"Recommend\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lUGFnZS9yY21kLmpzeD80YjIwIl0sIm5hbWVzIjpbImlwY1JlbmRlcmVyIiwiZWxlY3Ryb24iLCJzZW5kIiwib24iLCJldmVudCIsImRhdGEiLCJzdG9yZSIsImdldFJlY29tbWVuZExpc3RBY3Rpb24iLCJkaXNwYXRjaCIsIlJlY29tbWVuZFVJIiwicHJvcHMiLCJib3giLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIm9mZnNldFRvcCIsInNldE9mZnNldFRvcCIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwidXNlRWZmZWN0IiwiY2xpZW50RGF0YSIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwidmlkZW9JbmZvIiwicGljIiwidGl0bGUiLCJjb252ZXJ0RHVyYXRpb24iLCJkdXJhdGlvbiIsImNvbnZlcnRWaWV3cyIsInN0YXQiLCJ2aWV3Iiwib3duZXIiLCJmYWNlIiwibmFtZSIsIlJlY29tbWVuZCIsImdldFN0YXRlIiwicmVjb21tZW5kTGlzdCIsInNldFJlY29tbWVuZExpc3QiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInN1YnNjcmliZSIsImxvYWRpbmciLCJsb2FkTW9yZSIsImludm9rZSIsInRoZW4iLCJ0ZW1wIiwiY29uY2F0IiwiaXRlbSIsIm1hcCIsImxpc3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywrQ0FBUSxDQUFDRCxXQUFULElBQXdCLEtBQTVDOztBQUVBLElBQUdBLFdBQUgsRUFBZTtBQUNYQSxhQUFXLENBQUNFLElBQVosQ0FBaUIsd0JBQWpCO0FBQ0FGLGFBQVcsQ0FBQ0csRUFBWixDQUFlLHNCQUFmO0FBQUEsb1dBQXVDLGlCQUFPQyxLQUFQLEVBQWNDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFB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V0FBU0MsUUFBVCxHQUFtQjtBQUNmLFFBQUc1QyxXQUFILEVBQWU7QUFDWEEsaUJBQVcsQ0FBQzZDLE1BQVosQ0FBbUIsK0JBQW5CLEVBQ0tDLElBREwsQ0FDVSxVQUFBekMsSUFBSSxFQUFJO0FBQ1YsWUFBTTBDLElBQUksR0FBR1QsYUFBYSxDQUFDVSxNQUFkLENBQXFCM0MsSUFBSSxDQUFDNEMsSUFBMUIsQ0FBYjtBQUNBVix3QkFBZ0IsQ0FBQ1EsSUFBRCxDQUFoQjtBQUNILE9BSkw7QUFLSDtBQUNKOztBQUVELHNCQUNJO0FBQUEsY0FFUVQsYUFBYSxDQUFDWSxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDBCQUNkLHFFQUFDLFdBQUQ7QUFBeUIsaUJBQVMsRUFBRUQ7QUFBcEMsU0FBOEN6QyxLQUE5QyxHQUFrQjBDLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWxCO0FBRlIsbUJBREo7QUFTSDs7SUF0Q3VCaEIsUzs7TUFBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvaG9tZVBhZ2UvcmNtZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCBlbGVjdHJvbiBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBnZXRSZWNvbW1lbmRMaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbkNyZWF0b3JzXCI7XG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb24sIGNvbnZlcnRWaWV3cyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xuXG5jb25zdCBpcGNSZW5kZXJlciA9IGVsZWN0cm9uLmlwY1JlbmRlcmVyIHx8IGZhbHNlO1xuXG5pZihpcGNSZW5kZXJlcil7XG4gICAgaXBjUmVuZGVyZXIuc2VuZCgncmVxdWVzdF9yZWNvbW1lbmRfbGlzdCcpO1xuICAgIGlwY1JlbmRlcmVyLm9uKCdmZXRjaF9yZWNvbW1lbmRfbGlzdCcsIGFzeW5jIChldmVudCwgZGF0YSkgPT4ge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChhd2FpdCBnZXRSZWNvbW1lbmRMaXN0QWN0aW9uKGRhdGEpKVxuICAgIH0pO1xufVxuXG5cbi8qKlxuICogUmVjb21tZW5kIFVJIENvbXBvbmVudC5cbiAqIEBwYXJhbSBwcm9wcyB0aGUgcHJvcHMgZnJvbSBpdHMgcGFyZW50IGNvbXBvbmVudFxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSB0aGUgVUkgcGFydHMgdXNlZCBmb3IgcmVuZGVyaW5nXG4gKiBAY29uc3RydWN0b3Igbm9uZVxuICovXG5mdW5jdGlvbiBSZWNvbW1lbmRVSShwcm9wcyl7XG5cbiAgICBjb25zdCBib3ggPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW29mZnNldFRvcCwgc2V0T2Zmc2V0VG9wXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihwcm9wcy5jbGllbnREYXRhLnNjcm9sbFRvcCl7XG4gICAgICAgICAgICAvLyBpZigocHJvcHMuY2xpZW50RGF0YS5zY3JvbGxUb3AgLSBvZmZzZXRUb3AgPiAwKSl7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ+makOiXj+WSrycpO1xuICAgICAgICAgICAgLy8gICAgIHNldERpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAvLyAgICAgc2V0RGlzcGxheSh0cnVlKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgaWYoKG9mZnNldFRvcCAtKDMyMCkgLSBwcm9wcy5jbGllbnREYXRhLnNjcm9sbFRvcCA+IHByb3BzLmNsaWVudERhdGEuY2xpZW50SGVpZ2h0KSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+makOiXj+WSrycpO1xuICAgICAgICAgICAgICAgIHNldERpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5jbGllbnREYXRhLnNjcm9sbFRvcF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0T2Zmc2V0VG9wKGJveC5jdXJyZW50Lm9mZnNldFRvcCArIDIyMCk7XG4gICAgfSwgW29mZnNldFRvcF0pO1xuXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLnZpZGVvSW5mbztcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JjbWQtaXRlbScgcmVmPXtib3h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyY21kLWl0ZW0td3JhcHBlcid9IHN0eWxlPXt7ZGlzcGxheTogKGRpc3BsYXkgPyAnYmxvY2snOiAnbm9uZScpfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JjbWQtaXRlbS1pbmZvLXdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5waWN9IGFsdD17ZGF0YS50aXRsZX0gY2xhc3NOYW1lPSdyY21kLWl0ZW0taW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyY21kLWl0ZW0tc3RhdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JjbWQtaXRlbS1kdXJhdGlvbic+IHtjb252ZXJ0RHVyYXRpb24oZGF0YS5kdXJhdGlvbil9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncmNtZC1pdGVtLXZpZXdzJz4ge2NvbnZlcnRWaWV3cyhkYXRhLnN0YXQudmlldyl96KeC55yLIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JjbWQtaXRlbS10aXRsZS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JjbWQtaXRlbS1vd25lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5vd25lci5mYWNlfSBhbHQ9e2RhdGEub3duZXIubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyY21kLWl0ZW0tdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ge2RhdGEudGl0bGV9IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbi8qKlxuICogUmVjb21tZW5kIFNlY3Rpb24gQ29tcG9uZW50XG4gKiBAcGFyYW0gcHJvcHMgdGhlIHByb3BzIGZyb20gcGFyZW50IGNvbXBvbmVudFxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSB0aGUgUmVjb21tZW5kIFVJIHBhcnRzIHVzZWQgZm9yIHJlbmRlcmluZ1xuICogQGNvbnN0cnVjdG9yIG5vbmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjb21tZW5kKHByb3BzKXtcblxuICAgIGNvbnN0IFtyZWNvbW1lbmRMaXN0LCBzZXRSZWNvbW1lbmRMaXN0XSA9IHVzZVN0YXRlKHN0b3JlLmdldFN0YXRlKCkucmVjb21tZW5kTGlzdCk7XG4gICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgc2V0UmVjb21tZW5kTGlzdChzdG9yZS5nZXRTdGF0ZSgpLnJlY29tbWVuZExpc3QpO1xuICAgICAgICB9KTtcbiAgICB9LCBbc3RvcmUuZ2V0U3RhdGUoKS5yZWNvbW1lbmRMaXN0XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihwcm9wcy5sb2FkaW5nICYmIGNvdW50ZXIgPD0gMjApe1xuICAgICAgICAgICAgLy8gbG9hZE1vcmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyY21kLmpzLjc1ID09PT09PiBsb2FkTW9yZScpO1xuICAgICAgICAgICAgc2V0Q291bnRlcihjb3VudGVyKzEpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLmxvYWRpbmddKTtcblxuICAgIGZ1bmN0aW9uIGxvYWRNb3JlKCl7XG4gICAgICAgIGlmKGlwY1JlbmRlcmVyKXtcbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLmludm9rZSgncmVxdWVzdF9yZWNvbW1lbmRfbGlzdF9hcHBlbmQnKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gcmVjb21tZW5kTGlzdC5jb25jYXQoZGF0YS5pdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVjb21tZW5kTGlzdCh0ZW1wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWNvbW1lbmRMaXN0Lm1hcCgobGlzdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFJlY29tbWVuZFVJIGtleT17aW5kZXh9IHZpZGVvSW5mbz17bGlzdH0gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/homePage/rcmd.jsx\n");

/***/ })

})