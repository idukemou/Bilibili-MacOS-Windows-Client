webpackHotUpdate_N_E("pages/home",{

/***/ "./components/categoryPage/category.jsx":
/*!**********************************************!*\
  !*** ./components/categoryPage/category.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Category; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/header */ \"./components/layout/header.jsx\");\n/* harmony import */ var _layout_searchBarBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/searchBarBtn */ \"./components/layout/searchBarBtn.jsx\");\n/* harmony import */ var _layout_nodata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/nodata */ \"./components/layout/nodata.jsx\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.js\");\n/* harmony import */ var _styles_category_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/category.css */ \"./styles/category.css\");\n/* harmony import */ var _styles_category_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_category_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_actionCreators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actionCreators */ \"./redux/actionCreators.js\");\n\n\nvar _jsxFileName = \"/Users/yuxuan/Desktop/Bilibili-MacOS-Windows-Client/renderer/components/categoryPage/category.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ipcRenderer = electron__WEBPACK_IMPORTED_MODULE_5___default.a.ipcRenderer || false;\n\nif (ipcRenderer) {\n  ipcRenderer.send('request_category_list');\n  ipcRenderer.on('fetch_category_list', function (event, data) {\n    _redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch(Object(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_8__[\"getCategoryListAction\"])(data));\n  });\n}\n\nfunction Category(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getState().categoryList),\n      categoryList = _useState[0],\n      setCategoryList = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    _redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].subscribe(function () {\n      setCategoryList(_redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getState().categoryList);\n    });\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getState().categoryList]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    style: {\n      display: this.props.display ? 'block' : 'none'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      left: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_searchBarBtn__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        placeholder: \"\\u641C\\u7D22\\u89C6\\u9891\\u3001\\u756A\\u5267\\u3001up\\u4E3B\\u6216av\\u53F7\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 23\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      id: \"category-page-container\",\n      children: categoryList.success === 1 ? categoryList.categories.map(function (category, index) {\n        if (category.id === 0 || category.id === 100) {\n          return;\n        }\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          href: \"#\",\n          className: \"category-item-wrapper\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"category-item\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n              children: category.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 45\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              children: category['channel_count']\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 45\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 41\n          }, _this)\n        }, category.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 37\n        }, _this);\n      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_nodata__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 29\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Category, \"kRBrJtEAmSqPadIEOt8eD1l6twE=\");\n\n_c = Category;\n\nvar _c;\n\n$RefreshReg$(_c, \"Category\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXRlZ29yeVBhZ2UvY2F0ZWdvcnkuanN4P2M5ZWMiXSwibmFtZXMiOlsiaXBjUmVuZGVyZXIiLCJlbGVjdHJvbiIsInNlbmQiLCJvbiIsImV2ZW50IiwiZGF0YSIsInN0b3JlIiwiZGlzcGF0Y2giLCJnZXRDYXRlZ29yeUxpc3RBY3Rpb24iLCJDYXRlZ29yeSIsInByb3BzIiwidXNlU3RhdGUiLCJnZXRTdGF0ZSIsImNhdGVnb3J5TGlzdCIsInNldENhdGVnb3J5TGlzdCIsInVzZUVmZmVjdCIsInN1YnNjcmliZSIsImRpc3BsYXkiLCJzdWNjZXNzIiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiaW5kZXgiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsK0NBQVEsQ0FBQ0QsV0FBVCxJQUF3QixLQUE1Qzs7QUFDQSxJQUFHQSxXQUFILEVBQWU7QUFDWEEsYUFBVyxDQUFDRSxJQUFaLENBQWlCLHVCQUFqQjtBQUNBRixhQUFXLENBQUNHLEVBQVosQ0FBZSxxQkFBZixFQUFzQyxVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDbkRDLHdEQUFLLENBQUNDLFFBQU4sQ0FBZUMsbUZBQXFCLENBQUNILElBQUQsQ0FBcEM7QUFDSCxHQUZEO0FBR0g7O0FBRWMsU0FBU0ksUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFS0Msc0RBQVEsQ0FBQ0wsb0RBQUssQ0FBQ00sUUFBTixHQUFpQkMsWUFBbEIsQ0FGYjtBQUFBLE1BRTVCQSxZQUY0QjtBQUFBLE1BRWRDLGVBRmM7O0FBSW5DQyx5REFBUyxDQUFDLFlBQU07QUFDWlQsd0RBQUssQ0FBQ1UsU0FBTixDQUFnQixZQUFNO0FBQ2xCRixxQkFBZSxDQUFDUixvREFBSyxDQUFDTSxRQUFOLEdBQWlCQyxZQUFsQixDQUFmO0FBQ0gsS0FGRDtBQUdILEdBSlEsRUFJTixDQUFDUCxvREFBSyxDQUFDTSxRQUFOLEdBQWlCQyxZQUFsQixDQUpNLENBQVQ7QUFNQSxzQkFDSTtBQUFTLFNBQUssRUFBRTtBQUFDSSxhQUFPLEVBQUcsS0FBS1AsS0FBTCxDQUFXTyxPQUFYLEdBQW9CLE9BQXBCLEdBQTZCO0FBQXhDLEtBQWhCO0FBQUEsNEJBQ0kscUVBQUMsc0RBQUQ7QUFDSSxVQUFJLGVBQUUscUVBQUMsNERBQUQ7QUFBYyxtQkFBVyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFTLFFBQUUsRUFBQyx5QkFBWjtBQUFBLGdCQUVRSixZQUFZLENBQUNLLE9BQWIsS0FBeUIsQ0FBekIsR0FFUUwsWUFBWSxDQUFDTSxVQUFiLENBQXdCQyxHQUF4QixDQUE0QixVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDN0MsWUFBR0QsUUFBUSxDQUFDRSxFQUFULEtBQWdCLENBQWhCLElBQXFCRixRQUFRLENBQUNFLEVBQVQsS0FBZ0IsR0FBeEMsRUFBNEM7QUFDeEM7QUFDSDs7QUFDRCw0QkFDSTtBQUFTLGNBQUksRUFBQyxHQUFkO0FBQWtCLG1CQUFTLEVBQUMsdUJBQTVCO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxvQ0FDSTtBQUFBLHdCQUFTRixRQUFRLENBQUNHO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLHdCQUFPSCxRQUFRLENBQUMsZUFBRDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBeURBLFFBQVEsQ0FBQ0UsRUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQVFILE9BWkQsQ0FGUixnQkFpQlEscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOztHQXpDdUJkLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhdGVnb3J5UGFnZS9jYXRlZ29yeS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9sYXlvdXQvaGVhZGVyXCI7XG5pbXBvcnQgU2VhcmNoQmFyQnRuIGZyb20gXCIuLi9sYXlvdXQvc2VhcmNoQmFyQnRuXCI7XG5pbXBvcnQgTm9kYXRhIGZyb20gXCIuLi9sYXlvdXQvbm9kYXRhXCI7XG5cbmltcG9ydCBlbGVjdHJvbiBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvY2F0ZWdvcnkuY3NzJztcblxuaW1wb3J0IHtnZXRDYXRlZ29yeUxpc3RBY3Rpb259IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25DcmVhdG9yc1wiO1xuXG5jb25zdCBpcGNSZW5kZXJlciA9IGVsZWN0cm9uLmlwY1JlbmRlcmVyIHx8IGZhbHNlO1xuaWYoaXBjUmVuZGVyZXIpe1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoJ3JlcXVlc3RfY2F0ZWdvcnlfbGlzdCcpO1xuICAgIGlwY1JlbmRlcmVyLm9uKCdmZXRjaF9jYXRlZ29yeV9saXN0JywgKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGdldENhdGVnb3J5TGlzdEFjdGlvbihkYXRhKSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KHByb3BzKXtcblxuICAgIGNvbnN0IFtjYXRlZ29yeUxpc3QsIHNldENhdGVnb3J5TGlzdF0gPSB1c2VTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpLmNhdGVnb3J5TGlzdCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q2F0ZWdvcnlMaXN0KHN0b3JlLmdldFN0YXRlKCkuY2F0ZWdvcnlMaXN0KVxuICAgICAgICB9KTtcbiAgICB9LCBbc3RvcmUuZ2V0U3RhdGUoKS5jYXRlZ29yeUxpc3RdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17e2Rpc3BsYXk6ICh0aGlzLnByb3BzLmRpc3BsYXk/ICdibG9jayc6ICdub25lJyl9fT5cbiAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICBsZWZ0PXs8U2VhcmNoQmFyQnRuIHBsYWNlaG9sZGVyPVwi5pCc57Si6KeG6aKR44CB55Wq5Ymn44CBdXDkuLvmiJZhduWPt1wiLz59XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImNhdGVnb3J5LXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3Quc3VjY2VzcyA9PT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlMaXN0LmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2F0ZWdvcnkuaWQgPT09IDAgfHwgY2F0ZWdvcnkuaWQgPT09IDEwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXRlZ29yeS1pdGVtLXdyYXBwZXJcIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57Y2F0ZWdvcnkubmFtZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhdGVnb3J5WydjaGFubmVsX2NvdW50J119PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGF0YS8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/categoryPage/category.jsx\n");

/***/ })

})