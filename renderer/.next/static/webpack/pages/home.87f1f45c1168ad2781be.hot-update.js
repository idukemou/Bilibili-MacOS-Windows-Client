webpackHotUpdate_N_E("pages/home",{

/***/ "./components/userPage/user.jsx":
/*!**************************************!*\
  !*** ./components/userPage/user.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ \"../node_modules/antd/lib/button/style/css.js\");\n/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message/style/css */ \"../node_modules/antd/lib/message/style/css.js\");\n/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/message */ \"../node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_LoginPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/LoginPanel */ \"./components/common/LoginPanel.jsx\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.js\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _redux_actionCreators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actionCreators */ \"./redux/actionCreators.js\");\n/* harmony import */ var _styles_user_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/user.css */ \"./styles/user.css\");\n/* harmony import */ var _styles_user_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_user_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/header */ \"./components/layout/header.jsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/utils */ \"./utils/utils.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/yuxuan/Desktop/Bilibili-MacOS-Windows-Client/renderer/components/userPage/user.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ipcRenderer = electron__WEBPACK_IMPORTED_MODULE_8___default.a.ipcRenderer || false;\nvar menuList = [{\n  icon: '',\n  name: '历史记录'\n}, {\n  icon: '',\n  name: '离线缓存'\n}, {\n  icon: '',\n  name: '我的收藏'\n}, {\n  icon: '',\n  name: '我的关注'\n}, {\n  icon: '',\n  name: '我的消息'\n}, {\n  icon: '',\n  name: '稍后再看'\n}, {\n  icon: '',\n  name: '我的钱包'\n}, {\n  icon: '',\n  name: '设置'\n}];\nfunction User(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(''),\n      refreshPage = _useState[0],\n      setRefreshPage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      display = _useState2[0],\n      setDisplay = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(_redux_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getState().userInfo),\n      profile = _useState3[0],\n      setProfile = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(menuList[0]),\n      active = _useState4[0],\n      setActive = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      viwHistoryStatus = _useState5[0],\n      setViewHistoryStatus = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    \"cursor\": {},\n    \"tab\": [],\n    \"list\": []\n  }),\n      viewHistory = _useState6[0],\n      setViewHistory = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    console.log('[user activity]');\n  }, [refreshPage]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    setProfile(_redux_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getState().userInfo);\n  }, [_redux_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getState().userInfo.isLogin]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (viwHistoryStatus && ipcRenderer) {\n      ipcRenderer.invoke('get_view_history').then(function (res) {\n        console.log(res);\n        setViewHistory(res);\n        setViewHistoryStatus(false);\n      });\n    }\n  }, []);\n\n  function handleLogin() {\n    setDisplay(!display);\n  }\n\n  function handleSignup() {\n    handleLogin();\n  }\n\n  function handleChangeMenuList(activeIndex) {\n    setActive(menuList[activeIndex]);\n  }\n\n  function handleUserLogout() {\n    if (ipcRenderer) {\n      // 请求用户登出\n      ipcRenderer.invoke('request_user_logout').then(function (res) {\n        if (res.code === 0) {\n          antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default.a.success(res.message);\n        }\n      }); // 全局初始化用户登录状态信息\n\n      ipcRenderer.invoke('request_is_user_login').then(function (data) {\n        _redux_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dispatch(Object(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_9__[\"getUserInfoAction\"])(data));\n        setRefreshPage('logout');\n      });\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"section\", {\n    style: {\n      display: props.display ? 'block' : 'none',\n      height: \"100%\",\n      width: '100%'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      id: \"user-page-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        id: \"user-navigation-bar-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          id: \"user-login-container\",\n          children: [!profile.isLogin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"user-login-options\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              type: \"primary\",\n              onClick: function onClick() {\n                return handleLogin();\n              },\n              children: \"\\u767B\\u5F55\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 33\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              type: \"primary\",\n              onClick: function onClick() {\n                return handleSignup();\n              },\n              children: \"\\u6CE8\\u518C\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 33\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 49\n          }, this), profile.isLogin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            src: profile.face,\n            alt: \"avatar\",\n            width: \"100px\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 48\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          id: \"user-navigation-container\",\n          children: menuList.map(function (menu, index) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"user-navigation-item \".concat(menu.name === active.name && \"active\"),\n              onClick: function onClick() {\n                return handleChangeMenuList(index);\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"i\", {\n                className: \"user-navigation-icon\",\n                children: menu.icon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 112,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                className: \"user-navigation-name\",\n                children: menu.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 113,\n                columnNumber: 37\n              }, _this)]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        id: \"user-content-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"user-content-header\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_header__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            center: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n              children: active.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 41\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"user-content\",\n          children: viewHistory.list.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: viewHistory.list.map(function (view) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n                className: \"view-history-item\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n                  className: \"view-history-image-wrapper\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                    src: view.cover,\n                    alt: view.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 132,\n                    columnNumber: 49\n                  }, _this), view.history.business === 'archive' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                    children: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__[\"convertDuration\"])(view.process !== -1 ? view.progress : view.duration), \"/\", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__[\"convertDuration\"])(view.duration)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 134,\n                    columnNumber: 92\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 131,\n                  columnNumber: 45\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n                  className: \"view-history-title\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n                    children: view.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 139,\n                    columnNumber: 49\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 138,\n                  columnNumber: 45\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 130,\n                columnNumber: 41\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 62\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }, this), display && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_common_LoginPanel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      display: handleLogin,\n      setRefreshPage: setRefreshPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 28\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 9\n  }, this);\n}\n\n_s(User, \"K6lidWYnhAfgbSlQuZrnVzi9hsI=\");\n\n_c = User;\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyUGFnZS91c2VyLmpzeD9mMThkIl0sIm5hbWVzIjpbImlwY1JlbmRlcmVyIiwiZWxlY3Ryb24iLCJtZW51TGlzdCIsImljb24iLCJuYW1lIiwiVXNlciIsInByb3BzIiwidXNlU3RhdGUiLCJyZWZyZXNoUGFnZSIsInNldFJlZnJlc2hQYWdlIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJzdG9yZSIsImdldFN0YXRlIiwidXNlckluZm8iLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInZpd0hpc3RvcnlTdGF0dXMiLCJzZXRWaWV3SGlzdG9yeVN0YXR1cyIsInZpZXdIaXN0b3J5Iiwic2V0Vmlld0hpc3RvcnkiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiaXNMb2dpbiIsImludm9rZSIsInRoZW4iLCJyZXMiLCJoYW5kbGVMb2dpbiIsImhhbmRsZVNpZ251cCIsImhhbmRsZUNoYW5nZU1lbnVMaXN0IiwiYWN0aXZlSW5kZXgiLCJoYW5kbGVVc2VyTG9nb3V0IiwiY29kZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZGF0YSIsImRpc3BhdGNoIiwiZ2V0VXNlckluZm9BY3Rpb24iLCJoZWlnaHQiLCJ3aWR0aCIsImZhY2UiLCJtYXAiLCJtZW51IiwiaW5kZXgiLCJsaXN0IiwibGVuZ3RoIiwidmlldyIsImNvdmVyIiwidGl0bGUiLCJoaXN0b3J5IiwiYnVzaW5lc3MiLCJjb252ZXJ0RHVyYXRpb24iLCJwcm9jZXNzIiwicHJvZ3Jlc3MiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywrQ0FBUSxDQUFDRCxXQUFULElBQXdCLEtBQTVDO0FBRUEsSUFBTUUsUUFBUSxHQUFHLENBQ2I7QUFBQ0MsTUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrRUg7O0dBbkl1QkosSTs7S0FBQUEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXNlclBhZ2UvdXNlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9naW5QYW5lbCBmcm9tIFwiLi4vY29tbW9uL0xvZ2luUGFuZWxcIjtcbmltcG9ydCB7QnV0dG9uLCBtZXNzYWdlfSBmcm9tICdhbnRkJztcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCBlbGVjdHJvbiBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge2dldFVzZXJJbmZvQWN0aW9ufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uQ3JlYXRvcnNcIjtcbmltcG9ydCAnLi4vLi4vc3R5bGVzL3VzZXIuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2xheW91dC9oZWFkZXJcIjtcbmltcG9ydCB7Y29udmVydER1cmF0aW9ufSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcblxuY29uc3QgaXBjUmVuZGVyZXIgPSBlbGVjdHJvbi5pcGNSZW5kZXJlciB8fCBmYWxzZTtcblxuY29uc3QgbWVudUxpc3QgPSBbXG4gICAge2ljb246ICcnLCBuYW1lOiAn5Y6G5Y+y6K6w5b2VJ30sXG4gICAge2ljb246ICcnLCBuYW1lOiAn56a757q/57yT5a2YJ30sXG4gICAge2ljb246ICcnLCBuYW1lOiAn5oiR55qE5pS26JePJ30sXG4gICAge2ljb246ICcnLCBuYW1lOiAn5oiR55qE5YWz5rOoJ30sXG4gICAge2ljb246ICcnLCBuYW1lOiAn5oiR55qE5raI5oGvJ30sXG4gICAge2ljb246ICcnLCBuYW1lOiAn56iN5ZCO5YaN55yLJ30sXG4gICAge2ljb246ICcnLCBuYW1lOiAn5oiR55qE6ZKx5YyFJ30sXG4gICAge2ljb246ICcnLCBuYW1lOiAn6K6+572uJ31cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlciAocHJvcHMpe1xuXG4gICAgY29uc3QgW3JlZnJlc2hQYWdlLCBzZXRSZWZyZXNoUGFnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKHN0b3JlLmdldFN0YXRlKCkudXNlckluZm8pO1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShtZW51TGlzdFswXSk7XG4gICAgY29uc3QgW3Zpd0hpc3RvcnlTdGF0dXMsIHNldFZpZXdIaXN0b3J5U3RhdHVzXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFt2aWV3SGlzdG9yeSwgc2V0Vmlld0hpc3RvcnldID0gdXNlU3RhdGUoe1xuICAgICAgICBcImN1cnNvclwiOiB7fSxcbiAgICAgICAgXCJ0YWJcIjogW10sXG4gICAgICAgIFwibGlzdFwiOiBbXVxuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1t1c2VyIGFjdGl2aXR5XScpO1xuICAgIH0sIFtyZWZyZXNoUGFnZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0UHJvZmlsZShzdG9yZS5nZXRTdGF0ZSgpLnVzZXJJbmZvKTtcbiAgICB9LCBbc3RvcmUuZ2V0U3RhdGUoKS51c2VySW5mby5pc0xvZ2luXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZih2aXdIaXN0b3J5U3RhdHVzICYmIGlwY1JlbmRlcmVyKXtcbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLmludm9rZSgnZ2V0X3ZpZXdfaGlzdG9yeScpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3SGlzdG9yeShyZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3SGlzdG9yeVN0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sW10pO1xuXG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUxvZ2luKCl7XG4gICAgICAgIHNldERpc3BsYXkoIWRpc3BsYXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNpZ251cCgpe1xuICAgICAgICBoYW5kbGVMb2dpbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZU1lbnVMaXN0KGFjdGl2ZUluZGV4KXtcbiAgICAgICAgc2V0QWN0aXZlKG1lbnVMaXN0W2FjdGl2ZUluZGV4XSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlckxvZ291dCgpe1xuICAgICAgICBpZihpcGNSZW5kZXJlcil7XG4gICAgICAgICAgICAvLyDor7fmsYLnlKjmiLfnmbvlh7pcbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLmludm9rZSgncmVxdWVzdF91c2VyX2xvZ291dCcpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmNvZGUgPT09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIOWFqOWxgOWIneWni+WMlueUqOaIt+eZu+W9leeKtuaAgeS/oeaBr1xuICAgICAgICAgICAgaXBjUmVuZGVyZXIuaW52b2tlKCdyZXF1ZXN0X2lzX3VzZXJfbG9naW4nKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGdldFVzZXJJbmZvQWN0aW9uKGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVmcmVzaFBhZ2UoJ2xvZ291dCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7ZGlzcGxheTogKHByb3BzLmRpc3BsYXk/ICdibG9jayc6ICdub25lJyksIGhlaWdodDogXCIxMDAlXCIsICB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidXNlci1wYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ1c2VyLW5hdmlnYXRpb24tYmFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInVzZXItbG9naW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb2ZpbGUuaXNMb2dpbiAmJiA8ZGl2IGNsYXNzTmFtZT1cInVzZXItbG9naW4tb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ2luKCl9PueZu+W9lTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpZ251cCgpfT7ms6jlhow8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlLmlzTG9naW4gJiYgPGltZyBzcmM9e3Byb2ZpbGUuZmFjZX0gYWx0PVwiYXZhdGFyXCIgd2lkdGg9XCIxMDBweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ1c2VyLW5hdmlnYXRpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudUxpc3QubWFwKChtZW51LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B1c2VyLW5hdmlnYXRpb24taXRlbSAke21lbnUubmFtZSA9PT0gYWN0aXZlLm5hbWUgJiYgXCJhY3RpdmVcIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlTWVudUxpc3QoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyLW5hdmlnYXRpb24taWNvblwiPnttZW51Lmljb259PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1uYXZpZ2F0aW9uLW5hbWVcIj57bWVudS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidXNlci1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGNlbnRlcj17PHNwYW4+e2FjdGl2ZS5uYW1lfTwvc3Bhbj59Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3SGlzdG9yeS5saXN0Lmxlbmd0aCAhPT0gMCAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3SGlzdG9yeS5saXN0Lm1hcCgodmlldykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1oaXN0b3J5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWhpc3RvcnktaW1hZ2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZpZXcuY292ZXJ9IGFsdD17dmlldy50aXRsZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuaGlzdG9yeS5idXNpbmVzcyA9PT0gJ2FyY2hpdmUnICYmIDxzcGFuPntjb252ZXJ0RHVyYXRpb24odmlldy5wcm9jZXNzICE9PSAtMSA/IHZpZXcucHJvZ3Jlc3MgOiB2aWV3LmR1cmF0aW9uKX0ve2NvbnZlcnREdXJhdGlvbih2aWV3LmR1cmF0aW9uKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1oaXN0b3J5LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dmlldy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSAmJiA8TG9naW5QYW5lbCBkaXNwbGF5PXtoYW5kbGVMb2dpbn0gc2V0UmVmcmVzaFBhZ2U9e3NldFJlZnJlc2hQYWdlfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/userPage/user.jsx\n");

/***/ })

})