webpackHotUpdate_N_E("pages/home",{

/***/ "./components/newsPage/news.jsx":
/*!**************************************!*\
  !*** ./components/newsPage/news.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return News; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/header */ \"./components/layout/header.jsx\");\n/* harmony import */ var _layout_contentFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/contentFrame */ \"./components/layout/contentFrame.jsx\");\n\n\nvar _jsxFileName = \"/Users/yuxuan/Desktop/Bilibili-MacOS-Windows-Client/renderer/components/newsPage/news.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar menuList = [{\n  name: '热门',\n  key: 'hot',\n  offset: 0\n}, {\n  name: '关注',\n  key: 'follow',\n  offset: 1\n}];\nfunction News(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(menuList[0]),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  function handleChangeMenu(offset) {\n    setActive(menuList[offset]);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    style: {\n      display: props.display ? 'block' : 'none',\n      overflow: 'hidden',\n      height: '100%'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      center: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"header-menu\",\n        children: menuList.map(function (menu, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"#\",\n            className: \"header-menu-item \".concat(active.key === menu.key ? 'active' : ''),\n            onClick: function onClick() {\n              return handleChangeMenu(menu.offset);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              children: menu.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 37\n            }, _this)\n          }, menu.key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 33\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_contentFrame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_contentFrame__WEBPACK_IMPORTED_MODULE_3__[\"Content\"], {\n        children: \"\\u70ED\\u95E8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_contentFrame__WEBPACK_IMPORTED_MODULE_3__[\"Content\"], {\n        children: \"\\u5173\\u6CE8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, this);\n}\n\n_s(News, \"7s39b8LigOeBNf19KHSfTuooArA=\");\n\n_c = News;\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzUGFnZS9uZXdzLmpzeD83Y2YwIl0sIm5hbWVzIjpbIm1lbnVMaXN0IiwibmFtZSIsImtleSIsIm9mZnNldCIsIk5ld3MiLCJwcm9wcyIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlQ2hhbmdlTWVudSIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImhlaWdodCIsIm1hcCIsIm1lbnUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNiO0FBQUNDLE1BQUksRUFBRSxJQUFQO0FBQWFDLEtBQUcsRUFBRSxLQUFsQjtBQUF5QkMsUUFBTSxFQUFFO0FBQWpDLENBRGEsRUFFYjtBQUFDRixNQUFJLEVBQUUsSUFBUDtBQUFhQyxLQUFHLEVBQUUsUUFBbEI7QUFBNEJDLFFBQU0sRUFBRTtBQUFwQyxDQUZhLENBQWpCO0FBS2UsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUNOLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FGTDtBQUFBLE1BRXhCTyxNQUZ3QjtBQUFBLE1BRWhCQyxTQUZnQjs7QUFJL0IsV0FBU0MsZ0JBQVQsQ0FBMEJOLE1BQTFCLEVBQWlDO0FBQzdCSyxhQUFTLENBQUNSLFFBQVEsQ0FBQ0csTUFBRCxDQUFULENBQVQ7QUFDSDs7QUFFRCxzQkFDSTtBQUFTLFNBQUssRUFBRTtBQUFDTyxhQUFPLEVBQUdMLEtBQUssQ0FBQ0ssT0FBTixHQUFlLE9BQWYsR0FBd0IsTUFBbkM7QUFBNENDLGNBQVEsRUFBRSxRQUF0RDtBQUFnRUMsWUFBTSxFQUFFO0FBQXhFLEtBQWhCO0FBQUEsNEJBQ0kscUVBQUMsc0RBQUQ7QUFDSSxZQUFNLGVBQ0Y7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxrQkFFUVosUUFBUSxDQUFDYSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsOEJBQ1Q7QUFDSSxnQkFBSSxFQUFDLEdBRFQ7QUFFSSxxQkFBUyw2QkFBc0JSLE1BQU0sQ0FBQ0wsR0FBUCxLQUFlWSxJQUFJLENBQUNaLEdBQXBCLEdBQTBCLFFBQTFCLEdBQW9DLEVBQTFELENBRmI7QUFJSSxtQkFBTyxFQUFFO0FBQUEscUJBQU1PLGdCQUFnQixDQUFDSyxJQUFJLENBQUNYLE1BQU4sQ0FBdEI7QUFBQSxhQUpiO0FBQUEsbUNBTUk7QUFBQSx3QkFBT1csSUFBSSxDQUFDYjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSixhQUdTYSxJQUFJLENBQUNaLEdBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQWI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBeUJJLHFFQUFDLDREQUFEO0FBQUEsOEJBQ0kscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0NIOztHQXhDdUJFLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL25ld3NQYWdlL25ld3MuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2xheW91dC9oZWFkZXJcIjtcbmltcG9ydCBDb250ZW50RnJhbWUsIHtDb250ZW50fSBmcm9tIFwiLi4vbGF5b3V0L2NvbnRlbnRGcmFtZVwiO1xuXG5jb25zdCBtZW51TGlzdCA9IFtcbiAgICB7bmFtZTogJ+eDremXqCcsIGtleTogJ2hvdCcsIG9mZnNldDogMH0sXG4gICAge25hbWU6ICflhbPms6gnLCBrZXk6ICdmb2xsb3cnLCBvZmZzZXQ6IDF9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MocHJvcHMpe1xuXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKG1lbnVMaXN0WzBdKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZU1lbnUob2Zmc2V0KXtcbiAgICAgICAgc2V0QWN0aXZlKG1lbnVMaXN0W29mZnNldF0pO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3tkaXNwbGF5OiAocHJvcHMuZGlzcGxheT8gJ2Jsb2NrJzogJ25vbmUnKSwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBoZWlnaHQ6ICcxMDAlJ319PlxuICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgIGNlbnRlcj17XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51TGlzdC5tYXAoKG1lbnUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItbWVudS1pdGVtICR7YWN0aXZlLmtleSA9PT0gbWVudS5rZXkgPyAnYWN0aXZlJzogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVudS5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VNZW51KG1lbnUub2Zmc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21lbnUubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7Lyo8c2VjdGlvbiBpZD1cIm5ld3MtY29udGVudC1jb250YWluZXJcIiBzdHlsZT17e3dpZHRoOiAnMjAwJScsIHpJbmRleDogMTAwMCAsdHJhbnNpdGlvbjonYWxsIDAuM3MnICxoZWlnaHQ6JzUzMnB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IGAke2FjdGl2ZS5vZmZzZXQgKiAtMTAwMH1weGAsIG92ZXJmbG93OiBcImhpZGRlblwifX0+Ki99XG4gICAgICAgICAgICB7LyogICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwMHB4JywgaGVpZ2h0OiAnNTMycHgnLCBmbG9hdDogXCJsZWZ0XCJ9fT7ng63pl6g8L2Rpdj4qL31cbiAgICAgICAgICAgIHsvKiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAwcHgnLCBoZWlnaHQ6JzUzMnB4JywgZmxvYXQ6IFwibGVmdFwiLCBvdmVyZmxvdzogJ3Njcm9sbCd9fT7lhbPms6g8L2Rpdj4qL31cbiAgICAgICAgICAgIHsvKjwvc2VjdGlvbj4qL31cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFtZT5cbiAgICAgICAgICAgICAgICA8Q29udGVudD7ng63pl6g8L0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+5YWz5rOoPC9Db250ZW50PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhbWU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/newsPage/news.jsx\n");

/***/ })

})