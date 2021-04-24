module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Jxi":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("USUq");


/***/ }),

/***/ "9RFW":
/***/ (function(module, exports) {



/***/ }),

/***/ "B1SB":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IRan":
/***/ (function(module, exports) {



/***/ }),

/***/ "NLsH":
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "OFM2":
/***/ (function(module, exports) {



/***/ }),

/***/ "TLbR":
/***/ (function(module, exports) {



/***/ }),

/***/ "USUq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./redux/actionTypes.js
/* App Actions */
const AVAILABLE_SIZE = 'AVAILABLE_SIZE';
/* API Actions */

const GET_COUNTRY_LIST = 'GET_COUNTRY_LIST';
const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST';
const GET_RECOMMEND_LIST = 'GET_RECOMMEND_LIST';
// CONCATENATED MODULE: ./redux/actionCreators.js

const countAvailableClientHeightAction = size => ({
  type: AVAILABLE_SIZE,
  size
});
const getCountryListAction = countryList => ({
  type: GET_COUNTRY_LIST,
  countryList
});
const getCategoryListAction = categoryList => ({
  type: GET_CATEGORY_LIST,
  categoryList
});
const getRecommendListAction = recommendList => ({
  type: GET_RECOMMEND_LIST,
  recommendList
});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./redux/reducer.js

const defaultState = {
  availableSize: {
    width: 0,
    height: 0
  },
  countryList: {},
  categoryList: {},
  recommendList: []
};
function reducerHandler(state = defaultState, action) {
  let newState = JSON.parse(JSON.stringify(state));

  if (action.type === AVAILABLE_SIZE) {
    newState.availableSize = action.size;
    return newState;
  } else if (action.type === GET_COUNTRY_LIST) {
    newState.countryList = action.countryList;
    return newState;
  } else if (action.type === GET_CATEGORY_LIST) {
    newState.categoryList = action.categoryList;
    return newState;
  } else if (action.type === GET_RECOMMEND_LIST) {
    newState.recommendList = action.recommendList.item;
    return newState;
  }

  return state;
}
// CONCATENATED MODULE: ./redux/store.js



const store = Object(external_redux_["createStore"])(reducerHandler, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a));
/* harmony default export */ var redux_store = (store);
// EXTERNAL MODULE: external "electron"
var external_electron_ = __webpack_require__("NLsH");
var external_electron_default = /*#__PURE__*/__webpack_require__.n(external_electron_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./styles/layout.css
var layout = __webpack_require__("9RFW");

// EXTERNAL MODULE: ./styles/header.css
var header = __webpack_require__("gWZt");

// CONCATENATED MODULE: ./components/layout/header.jsx




function Header(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: "header-container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "header-left-wrapper",
      children: props.left
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "header-center-wrapper",
      children: props.center
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "header-right-wrapper",
      children: props.right
    })]
  });
}
// EXTERNAL MODULE: ../node_modules/antd/lib/button/style/css.js
var css = __webpack_require__("B1SB");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ../node_modules/antd/lib/input/style/css.js
var style_css = __webpack_require__("+Jxi");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./styles/search.css
var search = __webpack_require__("TLbR");

// CONCATENATED MODULE: ./components/searchPage/search.jsx








function Search(props) {
  const searchRef = Object(external_react_["useRef"])(null);

  function searchRequest() {
    searchRef.current.blur();
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: `search-page-container ${props.pageStatus ? '' : 'search-page-hide'}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {
      center: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input_default.a, {
        id: "search-bar",
        placeholder: "\u641C\u7D22\u89C6\u9891\u3001\u756A\u5267\u6216up\u4E3B",
        prefix: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
          className: "iconfont icon-search"
        }),
        onPressEnter: () => searchRequest(),
        allowClear: true,
        ref: searchRef
      }),
      right: /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_default.a, {
        type: "link",
        className: "search-cancel-button",
        onClick: () => props.setPageStatus(false),
        children: "\u53D6\u6D88"
      })
    })
  });
}
// CONCATENATED MODULE: ./components/layout/searchBarBtn.jsx






function SearchBarBtn(props) {
  const {
    0: pageStatus,
    1: setPageStatus
  } = Object(external_react_["useState"])(false);
  const placeholder = props.placeholder || '';
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
      className: "search-bar-btn-container",
      onClick: () => setPageStatus(!pageStatus),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
        className: "iconfont icon-search"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: placeholder
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Search, {
      setPageStatus: setPageStatus,
      pageStatus: pageStatus
    })]
  });
}
// CONCATENATED MODULE: ./components/layout/contentFrame.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class contentFrame_ContentFrame extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableSize: redux_store.getState().availableSize
    };
    redux_store.subscribe(() => this.setState({
      availableSize: redux_store.getState().availableSize
    }));
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      style: {
        width: `${this.props.children.length * 100}%`,
        height: `${this.state.availableSize.height}px`,
        overflow: 'hidden',
        position: 'absolute',
        transition: 'left 0.3s',
        left: `${this.props.activeIndex * -this.state.availableSize.width}px`
      },
      children: this.props.children
    });
  }

}
class contentFrame_Content extends external_react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      availableSize: redux_store.getState().availableSize,
      windowHeight: 0,
      currentHeight: 0,
      loading: false,
      scrollTop: 0
    };
    redux_store.subscribe(() => this.setState({
      availableSize: redux_store.getState().availableSize
    }));
  }

  componentDidMount() {
    const _this = this;

    this.ref.addEventListener('scroll', () => {
      this.setState({
        scrollTop: _this.ref.scrollTop
      });

      if (_this.ref.scrollHeight - _this.state.availableSize.height === _this.ref.scrollTop) {
        this.setState({
          loading: true
        });
      } else {
        this.setState({
          loading: false
        });
      }
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      style: {
        width: this.state.availableSize.width + 'px',
        height: this.state.availableSize.height + 'px',
        float: "left",
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'flex-start'
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
        ref: ref => this.ref = ref,
        className: "recommend-item-wrapper",
        style: {
          width: this.state.availableSize.width + 'px',
          height: this.state.availableSize.height + 'px'
        },
        children: external_react_default.a.Children.map(this.props.children, child => {
          if (! /*#__PURE__*/external_react_default.a.isValidElement(child)) {
            return null;
          }

          const childProps = _objectSpread(_objectSpread({}, child.props), {}, {
            loading: this.state.loading,
            position: this.state.scrollTop
          });

          return /*#__PURE__*/external_react_default.a.cloneElement(child, childProps);
        })
      })
    });
  }

}
// EXTERNAL MODULE: ./styles/app.css
var app = __webpack_require__("OFM2");

// CONCATENATED MODULE: ./components/homePage/rcmd.jsx




function rcmd_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function rcmd_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { rcmd_ownKeys(Object(source), true).forEach(function (key) { rcmd_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { rcmd_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function rcmd_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ipcRenderer = external_electron_default.a.ipcRenderer || false;

if (ipcRenderer) {
  ipcRenderer.send('request_recommend_list');
  ipcRenderer.on('fetch_recommend_list', async (event, data) => {
    redux_store.dispatch(await getRecommendListAction(data));
  });
}

function convertDuration(time) {
  const hour = Math.floor(time / 3600 % 24);
  const min = Math.floor(time / 60 % 60);
  const sec = Math.floor(time % 60);

  if (hour >= 1 && min === 0 && sec === 0) {
    return `${hour}:00:00`;
  } else if (hour >= 1 && min !== 0 && sec === 0) {
    return `${hour}:${min}:00`;
  } else if (hour >= 1 && min !== 0 && sec !== 0) {
    return `${hour}:${min}:${sec}`;
  } else if (min >= 1 && sec === 0) {
    return `${min}:00`;
  } else if (min >= 1 && sec !== 0) {
    return `${min}:${sec}`;
  } else {
    return `0:${sec}`;
  }

  return '0:0';
}

function convertViews(views) {
  if (views < 10000) {
    return views;
  }

  return (views / 10000).toFixed(1) + '万';
}

class rcmd_RecommendUI extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetTop: 0
    };
  }

  componentDidMount() {
    this.setState({
      offsetTop: this.box.offsetTop
    });
  }

  render() {
    const data = this.props.data;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "rcmd-item",
        onClick: () => console.log('post'),
        ref: box => this.box = box,
        style: {
          visibility: this.state.offsetTop > this.props.position + 540 || this.state.offsetTop < this.props.position - 540 ? 'hidden' : 'visible'
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "rcmd-item-info-wrapper",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: data.pic,
            alt: data.title,
            className: "rcmd-item-image",
            style: {
              display: this.state.offsetTop > this.props.position + 540 || this.state.offsetTop < this.props.position - 540 ? 'none' : 'block'
            }
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "rcmd-item-stat",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "rcmd-item-duration",
              children: convertDuration(data.duration)
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: "rcmd-item-views",
              children: [convertViews(data.stat.view), "\u89C2\u770B"]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "rcmd-item-title-wrapper",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "rcmd-item-owner",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: data.owner.face,
              alt: data.owner.name,
              style: {
                display: this.state.offsetTop > this.props.position + 540 || this.state.offsetTop < this.props.position - 540 ? 'none' : 'block'
              }
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "rcmd-item-title",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: data.title
            })
          })]
        })]
      })
    });
  }

}

class rcmd_Recommend extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    rcmd_defineProperty(this, "loadMore", () => {
      const _this = this;

      if (ipcRenderer) {
        ipcRenderer.invoke('request_recommend_list_append').then(data => {
          _this.setState({
            recommendList: _this.state.recommendList.concat(data.item)
          });
        });
      }
    });

    this.state = {
      recommendList: []
    };
  }

  componentDidMount() {
    const _this = this;

    this.unsubscribe = redux_store.subscribe(() => {
      this.setState({
        recommendList: redux_store.getState().recommendList
      }, () => {
        setTimeout(() => {
          _this.unsubscribe();
        }, 2000);
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.loading) {
      this.loadMore();
    }

    return true;
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: this.state.recommendList.map((list, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(rcmd_RecommendUI, rcmd_objectSpread({
        data: list
      }, this.props), index))
    });
  }

}
// CONCATENATED MODULE: ./components/homePage/app.jsx



function app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const menuList = [{
  name: '直播',
  key: 'live',
  offset: 0
}, {
  name: '推荐',
  key: 'recommend',
  offset: 1
}, {
  name: '热门',
  key: 'hot',
  offset: 2
}, {
  name: '电影',
  key: 'movie',
  offset: 3
}, {
  name: '电视剧',
  key: 'tv',
  offset: 4
}];
class app_App extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    app_defineProperty(this, "handleChangeMenu", offset => {
      this.setState({
        active: menuList[offset]
      });
    });

    this.state = {
      active: menuList[1]
    };
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      style: {
        display: this.props.display ? 'block' : 'none'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {
        left: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBarBtn, {
          placeholder: "\u641C\u7D22\u89C6\u9891\u3001\u756A\u5267\u3001up\u4E3B"
        }),
        center: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "header-menu",
          children: menuList.map((menu, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#",
            className: `header-menu-item ${this.state.active.key === menu.key ? 'active' : ''}`,
            onClick: () => this.handleChangeMenu(menu.offset),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: menu.name
            })
          }, menu.key))
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(contentFrame_ContentFrame, {
        activeIndex: this.state.active.offset,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(contentFrame_Content, {
          color: "red",
          children: "Box 1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contentFrame_Content, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(rcmd_Recommend, {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contentFrame_Content, {
          color: "lightblue",
          children: "Box 3"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contentFrame_Content, {
          color: "lightgreen",
          children: "Box 4"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(contentFrame_Content, {
          color: "orange",
          children: "Box 5"
        })]
      })]
    });
  }

}
// CONCATENATED MODULE: ./components/layout/nodata.jsx




function Nodata(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "jsx-1839599572" + " " + "nodata"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "1839599572",
      children: [".nodata.jsx-1839599572{width:100%;height:532px;background-image:url(\"https://s1.hdslb.com/bfs/static/history-record/img/nodata.png\");background-size:auto;background-position:center;background-repeat:no-repeat;}"]
    })]
  });
}
// EXTERNAL MODULE: ./styles/category.css
var styles_category = __webpack_require__("ZT5p");

// CONCATENATED MODULE: ./components/categoryPage/category.jsx










const category_ipcRenderer = external_electron_default.a.ipcRenderer || false;

if (category_ipcRenderer) {
  category_ipcRenderer.send('request_category_list');
  category_ipcRenderer.on('fetch_category_list', (event, data) => {
    redux_store.dispatch(getCategoryListAction(data));
  });
}

class category_Category extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = redux_store.getState();
    redux_store.subscribe(() => {
      this.setState(redux_store.getState());
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      style: {
        display: this.props.display ? 'block' : 'none'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {
        left: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBarBtn, {
          placeholder: "\u641C\u7D22\u89C6\u9891\u3001\u756A\u5267\u3001up\u4E3B\u6216av\u53F7"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
        id: "category-page-container",
        children: this.state.categoryList.success === 1 ? this.state.categoryList.categories.map((category, index) => {
          if (category.id === 0 || category.id === 100) {
            return;
          }

          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#",
            className: "category-item-wrapper",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "category-item",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: category.name
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: category.channel_count
              })]
            })
          }, category.id);
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Nodata, {})
      })]
    });
  }

}
// CONCATENATED MODULE: ./components/newsPage/news.jsx



function news_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const news_menuList = [{
  name: '热门',
  key: 'hot',
  offset: 0
}, {
  name: '关注',
  key: 'follow',
  offset: 1
}];
class news_News extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    news_defineProperty(this, "handleChangeMenu", offset => {
      this.setState({
        active: news_menuList[offset]
      });
    });

    this.state = {
      active: news_menuList[0]
    };
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      style: {
        display: this.props.display ? 'block' : 'none',
        overflow: 'hidden',
        height: '100%'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {
        center: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "header-menu",
          children: news_menuList.map((menu, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#",
            className: `header-menu-item ${this.state.active.key === menu.key ? 'active' : ''}`,
            onClick: () => this.handleChangeMenu(menu.offset),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: menu.name
            })
          }, menu.key))
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
        id: "news-content-container",
        style: {
          width: '200%',
          zIndex: 1000,
          transition: 'all 0.3s',
          height: '532px',
          position: 'absolute',
          left: `${this.state.active.offset * -1000}px`,
          overflow: "hidden"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: '1000px',
            height: '532px',
            float: "left"
          }
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: '1000px',
            height: '532px',
            float: "left",
            overflow: 'scroll'
          }
        })]
      })]
    });
  }

}
// CONCATENATED MODULE: ./components/userPage/user.jsx


class user_User extends external_react_default.a.Component {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      id: "target",
      name: "target",
      style: {
        display: this.props.display ? 'block' : 'none'
      }
    });
  }

}
// CONCATENATED MODULE: ./components/layout/layout.jsx





function layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const layout_menuList = [{
  name: '首页',
  href: '/app',
  icon: 'icon-shouye'
}, {
  name: '分区',
  href: '/category',
  icon: 'icon-category'
}, {
  name: '动态',
  href: '/news',
  icon: 'icon-dongtai'
}, {
  name: '我的',
  href: '/user',
  icon: 'icon-bilibili-line'
}];
class layout_Layout extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    layout_defineProperty(this, "init", () => {
      this.setState({
        autoHeight: window.innerHeight - 60
      }, () => {
        redux_store.dispatch(countAvailableClientHeightAction({
          width: window.innerWidth,
          height: window.innerHeight - 120
        }));
      });
    });

    layout_defineProperty(this, "handleChangePage", page => {
      this.setState({
        page
      });
    });

    this.state = {
      page: '/app',
      autoHeight: 0,
      scroll: {
        app: 0,
        category: 0,
        news: 0,
        user: 0
      }
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    switch (nextState.page) {
      case '/app':
        this.section.scrollTo(0, nextState.scroll.app);
        break;

      case '/category':
        this.section.scrollTo(0, nextState.scroll.category);
        break;

      case '/news':
        this.section.scrollTo(0, nextState.scroll.news);
        break;

      case '/user':
        this.section.scrollTo(0, nextState.scroll.user);
    }

    return true;
  }

  componentDidMount() {
    const _this = this;

    this.init();
    /* 自动设置全局导航和全局内容区块的高度和位置 */

    window.addEventListener('resize', e => {
      _this.init();
    });
    /* 设置页面的实时高度 */

    this.section.addEventListener('scroll', () => {
      let top = _this.section.scrollTop;
      const newState = JSON.parse(JSON.stringify(this.state));

      switch (_this.state.page) {
        case '/app':
          newState.scroll.app = top;
          break;

        case '/category':
          newState.scroll.category = top;
          break;

        case '/news':
          newState.scroll.news = top;
          break;

        case '/user':
          newState.scroll.user = top;
      }

      this.setState(newState);
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
        id: "layout-container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
          id: "layout-content-container",
          ref: section => this.section = section,
          className: style_default.a.dynamic([["4184239453", [this.state.autoHeight]]]),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(app_App, {
            display: this.state.page === '/app' ? true : false
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(category_Category, {
            display: this.state.page === '/category' ? true : false
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(news_News, {
            display: this.state.page === '/news' ? true : false
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(user_User, {
            display: this.state.page === '/user' ? true : false
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
            id: "4184239453",
            dynamic: [this.state.autoHeight],
            children: [`#layout-content-container.__jsx-style-dynamic-selector{width:100%;height:${this.state.autoHeight}px;}`]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
          id: "layout-navigation-container",
          children: layout_menuList.map((menu, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            className: `
                                        layout-navigation-item 
                                        ${menu.href.includes(this.state.page) ? 'active' : ''}
                                    `,
            onClick: () => this.handleChangePage(menu.href),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              className: `iconfont ${menu.icon} layout-navigation-icon`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: menu.name
            })]
          }, menu.href))
        })]
      })
    });
  }

}
// EXTERNAL MODULE: ./styles/preload.css
var preload = __webpack_require__("IRan");

// CONCATENATED MODULE: ./components/layout/preload.jsx





function Preload() {
  const {
    0: showPage,
    1: setShowPage
  } = Object(external_react_["useState"])(true);
  const {
    0: timer,
    1: setTimer
  } = Object(external_react_["useState"])(6);
  Object(external_react_["useEffect"])(() => {
    if (timer === 0 && showPage) jumpOver();
    timer > 0 && showPage && setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  }, [timer]);

  function jumpOver() {
    setShowPage(false);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: showPage ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      id: "preload",
      className: showPage ? 'preload-page-show' : 'preload-page-destroy',
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "preload-image"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "preload-logo"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
        id: "preload-btn",
        onClick: () => jumpOver(),
        children: ["\u8DF3\u8FC7 ", timer]
      })]
    }) : ''
  });
}
// CONCATENATED MODULE: ./pages/home.jsx











class home_Home extends external_react_default.a.Component {
  static async getInitialProps(ctx) {
    return {
      path: await ctx.pathname
    };
  }

  constructor(props) {
    super(props);
    this.state = redux_store.getState();
    redux_store.subscribe(() => this.setState(redux_store.getState()));
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Preload, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: "Bilibili"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_Layout, {})]
    });
  }

}

/* harmony default export */ var home = __webpack_exports__["default"] = (home_Home);

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "ZT5p":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "gWZt":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });