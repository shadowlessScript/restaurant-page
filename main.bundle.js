"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* body{
    width: 100%;
    height: 100vh;
} */

.nav{
    width: 100%;
    /* background-color: purple; */
    display: grid;
    grid-template-columns: repeat(4, 0.1fr);
    column-gap: 20px;
    grid-template-rows: 1fr;
    justify-content: center;
    align-self: center;
}

.content{
    /* background-color: yellow; */
    /* width: 100%;
    height: 100%; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}

.active-btn{
    background-color: rgb(79, 79, 129);
    color: white;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 0.4s ease-in-out;
}

button{
    padding: 0.6rem;
    border: none;
    margin: 10px;
    border-radius: 5px;
    transition: 0.4s ease-in-out;

}

.item-container{
    margin: 10px;
    width: 500px;
}

.menu{
    margin-top: 10px;
}

.about{
    /* width: 40%;
    min-width: 400px; */
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    text-align: justify;
    /* background-image: url("./aboutImage.jpg");
    background-position: center; */
    
}

.about-image{
    /* position: absolute;
    top:0; */
    width: 100%;
    height: 600px;
    object-fit: cover;
    /* height: 300px; */
}
.about-text{
    width: 40%;
    min-width: 500px;
    
}
.about-text>p,h3,h4{
    margin-top: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;;;GAGG;;AAEH;IACI,WAAW;IACX,8BAA8B;IAC9B,aAAa;IACb,uCAAuC;IACvC,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B;mBACe;IACf,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB,8EAA8E;IAC1E,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;;AAEhC;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;uBACmB;IACnB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB;kCAC8B;;AAElC;;AAEA;IACI;YACQ;IACR,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,gBAAgB;;AAEpB;AACA;IACI,gBAAgB;AACpB","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* body{\r\n    width: 100%;\r\n    height: 100vh;\r\n} */\r\n\r\n.nav{\r\n    width: 100%;\r\n    /* background-color: purple; */\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 0.1fr);\r\n    column-gap: 20px;\r\n    grid-template-rows: 1fr;\r\n    justify-content: center;\r\n    align-self: center;\r\n}\r\n\r\n.content{\r\n    /* background-color: yellow; */\r\n    /* width: 100%;\r\n    height: 100%; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    align-items: center;\r\n}\r\n\r\n.active-btn{\r\n    background-color: rgb(79, 79, 129);\r\n    color: white;\r\nbox-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\r\n    transition: 0.4s ease-in-out;\r\n}\r\n\r\nbutton{\r\n    padding: 0.6rem;\r\n    border: none;\r\n    margin: 10px;\r\n    border-radius: 5px;\r\n    transition: 0.4s ease-in-out;\r\n\r\n}\r\n\r\n.item-container{\r\n    margin: 10px;\r\n    width: 500px;\r\n}\r\n\r\n.menu{\r\n    margin-top: 10px;\r\n}\r\n\r\n.about{\r\n    /* width: 40%;\r\n    min-width: 400px; */\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    text-align: justify;\r\n    /* background-image: url(\"./aboutImage.jpg\");\r\n    background-position: center; */\r\n    \r\n}\r\n\r\n.about-image{\r\n    /* position: absolute;\r\n    top:0; */\r\n    width: 100%;\r\n    height: 600px;\r\n    object-fit: cover;\r\n    /* height: 300px; */\r\n}\r\n.about-text{\r\n    width: 40%;\r\n    min-width: 500px;\r\n    \r\n}\r\n.about-text>p,h3,h4{\r\n    margin-top: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/NavBar.js":
/*!***********************!*\
  !*** ./src/NavBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBar)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutPage.js */ "./src/aboutPage.js");
/* harmony import */ var _changePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changePage.js */ "./src/changePage.js");




function navBar() {
    const nav = document.createElement("div")
    nav.classList.add("nav")
    const homeLink = document.createElement("button")
    const aboutLink = document.createElement("button")
    const orderLink = document.createElement("button")
    const contactLink = document.createElement("button")
    homeLink.textContent = "Home"
    homeLink.classList.add("home-btn", "active-btn")
    aboutLink.textContent = "About"
    aboutLink.classList.add("about-btn")
    contactLink.textContent = "Contact"
    contactLink.classList.add("contact-btn")
    orderLink.textContent = "Order"
    orderLink.classList.add("order-btn")
    nav.append(homeLink, aboutLink, contactLink, orderLink)
    
    // document.querySelectorAll("button").forEach(
    //     (btn) => {
    //         btn.addEventListener("click", changePage)
    //     }
    // );
    aboutLink.addEventListener("click", _changePage_js__WEBPACK_IMPORTED_MODULE_2__["default"]
     
    )
    homeLink.addEventListener("click", _changePage_js__WEBPACK_IMPORTED_MODULE_2__["default"])
    contactLink.addEventListener("click", _changePage_js__WEBPACK_IMPORTED_MODULE_2__["default"])
    orderLink.addEventListener("click", _changePage_js__WEBPACK_IMPORTED_MODULE_2__["default"])
    return nav
}

/***/ }),

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutPage)
/* harmony export */ });
/* harmony import */ var _aboutImage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutImage.jpg */ "./src/aboutImage.jpg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




function aboutPage() {
    const image = document.createElement("img");
    image.src = _aboutImage_jpg__WEBPACK_IMPORTED_MODULE_0__;
    image.classList.add("about-image")
    // content.append(image)
    const about = document.createElement("div");
    about.classList.add("about")
    // about.textContent = "About Page"   
    

    const aboutText = document.createElement("div");
    aboutText.classList.add("about-text")
    aboutText.innerHTML = `<h3>Welcome to BrewTech Café</h3>

<p>Founded in 2022, BrewTech Café is a haven for coffee enthusiasts, tech-savvy individuals, and bookworms alike. With our unique blend of delicious beverages, cozy atmosphere, and cutting-edge amenities, we strive to create the perfect space for work, relaxation, and community.

The BrewTech Experience

At BrewTech Café, we understand that your coffee experience extends beyond the simple act of sipping a cup of joe. That's why we are dedicated to providing an environment that caters to your needs and passions.</p>

<h3>Zen Area: Unleash Your Creativity</h3>

<p>Step into our Zen Area, a specially designated space reserved for customers seeking focus and tranquility. Whether you're a coder, a writer, or an avid reader, our Zen Area offers a serene and distraction-free zone where you can immerse yourself in your work or dive into the pages of your favorite book.</p>

<h3>Secure and High-Speed Connectivity</h3>

<p>Stay connected with our robust and secure WiFi network, designed to meet the demands of digital nomads and remote workers. Our reliable internet connection ensures that you can work, stream, or connect with friends and colleagues without interruption.</p>

<h3>Expansion Plans</h3>

<p>With the success and popularity of our flagship location, we are thrilled to announce our plans for expansion. BrewTech Café is determined to bring our unique experience to coffee lovers across Nairobi. Keep an eye out for our future branches, as we aim to create a network of welcoming spaces where people can gather, connect, and be inspired.</p>

<h4>Visit BrewTech Café Today</h4>

<p>Whether you're in search of exceptional coffee, a cozy place to work, or a spot to unwind with a good book, BrewTech Café is here to serve you. We invite you to join us in our mission to provide an exceptional café experience that combines the love of coffee with the power of technology.</p>

<i>BrewTech Café: Where Coffee Meets Innovation</i>`

    about.append(image,aboutText)
    return about
}

//Photo by <a href="https://unsplash.com/@subagjav?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rizky Subagja</a> on <a href="https://unsplash.com/photos/1k7TnX5GAww?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

/***/ }),

/***/ "./src/changePage.js":
/*!***************************!*\
  !*** ./src/changePage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changePage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutPage.js */ "./src/aboutPage.js");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage.js */ "./src/contactPage.js");
/* harmony import */ var _orderPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orderPage.js */ "./src/orderPage.js");






function changePage(e) {
    let btnName = e.view.document.activeElement.innerText
    let contentChild = _index_js__WEBPACK_IMPORTED_MODULE_0__.content.childNodes[0];
    let btn = e.view.document.activeElement

    let sibling = btn.parentNode.firstChild

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== btn) {
            sibling.classList.remove("active-btn")
        } else
        {
            btn.classList.add("active-btn");

        }
        sibling = sibling.nextSibling;
    }

    if (btnName === "About")
    {        
        _index_js__WEBPACK_IMPORTED_MODULE_0__.content.replaceChild((0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),contentChild)
    } else if (btnName === "Home")
    {

        _index_js__WEBPACK_IMPORTED_MODULE_0__.content.replaceChild((0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__.homePage)(),contentChild)
    } else if (btnName === "Contact")
    {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.content.replaceChild((0,_contactPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(),contentChild)
    } else
    {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.content.replaceChild((0,_orderPage_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),contentChild)

    }
    // console.log(e.view.document.activeElement.innerText)
    }

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutPage)
/* harmony export */ });
function aboutPage() {
    const contact = document.createElement("div");
    contact.classList.add("contact")
    contact.textContent = "Contact Page"
    return contact
}

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePage: () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ "./src/menu.json");


function homePage() {
    const menu = document.createElement("div");
    menu.classList.add("menu")
    menu.innerHTML = "<h1 class='home-title'>BrewTech Café</h3>"

    _menu_json__WEBPACK_IMPORTED_MODULE_0__.menu.map(getMenuItem)

    function getMenuItem(item) {
        const itemContainer = document.createElement("div")
        itemContainer.classList.add("item-container")

        const itemName = document.createElement("h3");
        itemName.textContent = item.item;
        const itemCategory = document.createElement("h4")
        itemCategory.textContent = "Category: "+ item.category
        const description = document.createElement("p");
        description.textContent = item.description;
        const price = document.createElement("h5")
        price.textContent = "price: " + item.price
        itemContainer.append(itemName, itemCategory,description, price);
        menu.appendChild(itemContainer);
    }


    return menu
}





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   currentPage: () => (/* binding */ currentPage)
/* harmony export */ });
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _NavBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.js */ "./src/NavBar.js");
/* harmony import */ var _changePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changePage.js */ "./src/changePage.js");





let content = document.createElement("div");
content.classList.add("content");

let currentPage = {
    page: (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__.homePage)(),

    get() {
        return page
    },
    set (newPage) {
        this.page = newPage
    }
}
function component() {    
   
    content.append(currentPage.page)   
    
    
    return content
}

document.body.append((0,_NavBar_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),component())

/***/ }),

/***/ "./src/orderPage.js":
/*!**************************!*\
  !*** ./src/orderPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderPage)
/* harmony export */ });
function orderPage() {
    const order = document.createElement("div");
    order.classList.add("order")
    order.textContent = "Order Page"
    return order
}

/***/ }),

/***/ "./src/aboutImage.jpg":
/*!****************************!*\
  !*** ./src/aboutImage.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c52f8b83829ee103304.jpg";

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"menu":[{"item":"Cappuccino","category":"Coffee","price":"$3.99","description":"A rich and creamy espresso-based coffee topped with frothy milk foam."},{"item":"Espresso","category":"Coffee","price":"$2.99","description":"A bold and intense shot of pure coffee goodness, perfect for the espresso purists."},{"item":"Chocolate Cake","category":"Cakes","price":"$4.99","description":"Indulge in a decadent slice of moist chocolate cake, layered with velvety chocolate ganache."},{"item":"Iced Tea","category":"Other Beverages","price":"$2.49","description":"Cool off with a refreshing glass of iced tea, infused with your choice of flavors."},{"item":"Fruit Smoothie","category":"Other Beverages","price":"$3.49","description":"Sip on a vibrant and refreshing fruit smoothie, bursting with natural flavors and nutrients."}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhDQUFPLGNBQWMsc0RBQVE7QUFDckMsTUFBTTtBQUNOO0FBQ0EsWUFBWSw4Q0FBTyxjQUFjLDJEQUFXO0FBQzVDLE1BQU07QUFDTjtBQUNBLFFBQVEsOENBQU8sY0FBYyx5REFBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0Q0FBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUI7QUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ5QztBQUNwQjtBQUNXO0FBQ1M7QUFDekM7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLFVBQVUsc0RBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBTTs7Ozs7Ozs7Ozs7Ozs7QUMxQlo7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2hhbmdlUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvb3JkZXJQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIGJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0gKi9cclxuXHJcbi5uYXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgKi9cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAwLjFmcik7XHJcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXHJcbiAgICAvKiB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZlLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgNzksIDEyOSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbmJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggNnB4IDZweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDAuNnJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcblxyXG59XHJcblxyXG4uaXRlbS1jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmFib3V0e1xyXG4gICAgLyogd2lkdGg6IDQwJTtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vYWJvdXRJbWFnZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICBcclxufVxyXG5cclxuLmFib3V0LWltYWdle1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXHJcbn1cclxuLmFib3V0LXRleHR7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIFxyXG59XHJcbi5hYm91dC10ZXh0PnAsaDMsaDR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUI7bUJBQ2U7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQiw4RUFBOEU7SUFDMUUsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO3VCQUNtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CO2tDQUM4Qjs7QUFFbEM7O0FBRUE7SUFDSTtZQUNRO0lBQ1IsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYm9keXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufSAqL1xcclxcblxcclxcbi5uYXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7ICovXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDAuMWZyKTtcXHJcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXFxyXFxuICAgIC8qIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc5LCA3OSwgMTI5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbmJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggNnB4IDZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9ue1xcclxcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXR7XFxyXFxuICAgIC8qIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1pbi13aWR0aDogNDAwcHg7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hYm91dEltYWdlLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1hZ2V7XFxyXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjA7ICovXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cXHJcXG59XFxyXFxuLmFib3V0LXRleHR7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uYWJvdXQtdGV4dD5wLGgzLGg0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY29udGVudCwgY3VycmVudFBhZ2UgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL2Fib3V0UGFnZS5qc1wiXHJcbmltcG9ydCBjaGFuZ2VQYWdlIGZyb20gXCIuL2NoYW5nZVBhZ2UuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdkJhcigpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpXHJcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGNvbnN0IG9yZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxyXG4gICAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZChcImhvbWUtYnRuXCIsIFwiYWN0aXZlLWJ0blwiKVxyXG4gICAgYWJvdXRMaW5rLnRleHRDb250ZW50ID0gXCJBYm91dFwiXHJcbiAgICBhYm91dExpbmsuY2xhc3NMaXN0LmFkZChcImFib3V0LWJ0blwiKVxyXG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxyXG4gICAgY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYnRuXCIpXHJcbiAgICBvcmRlckxpbmsudGV4dENvbnRlbnQgPSBcIk9yZGVyXCJcclxuICAgIG9yZGVyTGluay5jbGFzc0xpc3QuYWRkKFwib3JkZXItYnRuXCIpXHJcbiAgICBuYXYuYXBwZW5kKGhvbWVMaW5rLCBhYm91dExpbmssIGNvbnRhY3RMaW5rLCBvcmRlckxpbmspXHJcbiAgICBcclxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaChcclxuICAgIC8vICAgICAoYnRuKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUGFnZSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyApO1xyXG4gICAgYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VQYWdlXHJcbiAgICAgXHJcbiAgICApXHJcbiAgICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUGFnZSlcclxuICAgIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VQYWdlKVxyXG4gICAgb3JkZXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VQYWdlKVxyXG4gICAgcmV0dXJuIG5hdlxyXG59IiwiaW1wb3J0IGFib3V0SW1hZ2UgZnJvbSBcIi4vYWJvdXRJbWFnZS5qcGdcIjtcclxuaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRQYWdlKCkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1hZ2Uuc3JjID0gYWJvdXRJbWFnZTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1pbWFnZVwiKVxyXG4gICAgLy8gY29udGVudC5hcHBlbmQoaW1hZ2UpXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIilcclxuICAgIC8vIGFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dCBQYWdlXCIgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhYm91dFRleHQuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHRcIilcclxuICAgIGFib3V0VGV4dC5pbm5lckhUTUwgPSBgPGgzPldlbGNvbWUgdG8gQnJld1RlY2ggQ2Fmw6k8L2gzPlxyXG5cclxuPHA+Rm91bmRlZCBpbiAyMDIyLCBCcmV3VGVjaCBDYWbDqSBpcyBhIGhhdmVuIGZvciBjb2ZmZWUgZW50aHVzaWFzdHMsIHRlY2gtc2F2dnkgaW5kaXZpZHVhbHMsIGFuZCBib29rd29ybXMgYWxpa2UuIFdpdGggb3VyIHVuaXF1ZSBibGVuZCBvZiBkZWxpY2lvdXMgYmV2ZXJhZ2VzLCBjb3p5IGF0bW9zcGhlcmUsIGFuZCBjdXR0aW5nLWVkZ2UgYW1lbml0aWVzLCB3ZSBzdHJpdmUgdG8gY3JlYXRlIHRoZSBwZXJmZWN0IHNwYWNlIGZvciB3b3JrLCByZWxheGF0aW9uLCBhbmQgY29tbXVuaXR5LlxyXG5cclxuVGhlIEJyZXdUZWNoIEV4cGVyaWVuY2VcclxuXHJcbkF0IEJyZXdUZWNoIENhZsOpLCB3ZSB1bmRlcnN0YW5kIHRoYXQgeW91ciBjb2ZmZWUgZXhwZXJpZW5jZSBleHRlbmRzIGJleW9uZCB0aGUgc2ltcGxlIGFjdCBvZiBzaXBwaW5nIGEgY3VwIG9mIGpvZS4gVGhhdCdzIHdoeSB3ZSBhcmUgZGVkaWNhdGVkIHRvIHByb3ZpZGluZyBhbiBlbnZpcm9ubWVudCB0aGF0IGNhdGVycyB0byB5b3VyIG5lZWRzIGFuZCBwYXNzaW9ucy48L3A+XHJcblxyXG48aDM+WmVuIEFyZWE6IFVubGVhc2ggWW91ciBDcmVhdGl2aXR5PC9oMz5cclxuXHJcbjxwPlN0ZXAgaW50byBvdXIgWmVuIEFyZWEsIGEgc3BlY2lhbGx5IGRlc2lnbmF0ZWQgc3BhY2UgcmVzZXJ2ZWQgZm9yIGN1c3RvbWVycyBzZWVraW5nIGZvY3VzIGFuZCB0cmFucXVpbGl0eS4gV2hldGhlciB5b3UncmUgYSBjb2RlciwgYSB3cml0ZXIsIG9yIGFuIGF2aWQgcmVhZGVyLCBvdXIgWmVuIEFyZWEgb2ZmZXJzIGEgc2VyZW5lIGFuZCBkaXN0cmFjdGlvbi1mcmVlIHpvbmUgd2hlcmUgeW91IGNhbiBpbW1lcnNlIHlvdXJzZWxmIGluIHlvdXIgd29yayBvciBkaXZlIGludG8gdGhlIHBhZ2VzIG9mIHlvdXIgZmF2b3JpdGUgYm9vay48L3A+XHJcblxyXG48aDM+U2VjdXJlIGFuZCBIaWdoLVNwZWVkIENvbm5lY3Rpdml0eTwvaDM+XHJcblxyXG48cD5TdGF5IGNvbm5lY3RlZCB3aXRoIG91ciByb2J1c3QgYW5kIHNlY3VyZSBXaUZpIG5ldHdvcmssIGRlc2lnbmVkIHRvIG1lZXQgdGhlIGRlbWFuZHMgb2YgZGlnaXRhbCBub21hZHMgYW5kIHJlbW90ZSB3b3JrZXJzLiBPdXIgcmVsaWFibGUgaW50ZXJuZXQgY29ubmVjdGlvbiBlbnN1cmVzIHRoYXQgeW91IGNhbiB3b3JrLCBzdHJlYW0sIG9yIGNvbm5lY3Qgd2l0aCBmcmllbmRzIGFuZCBjb2xsZWFndWVzIHdpdGhvdXQgaW50ZXJydXB0aW9uLjwvcD5cclxuXHJcbjxoMz5FeHBhbnNpb24gUGxhbnM8L2gzPlxyXG5cclxuPHA+V2l0aCB0aGUgc3VjY2VzcyBhbmQgcG9wdWxhcml0eSBvZiBvdXIgZmxhZ3NoaXAgbG9jYXRpb24sIHdlIGFyZSB0aHJpbGxlZCB0byBhbm5vdW5jZSBvdXIgcGxhbnMgZm9yIGV4cGFuc2lvbi4gQnJld1RlY2ggQ2Fmw6kgaXMgZGV0ZXJtaW5lZCB0byBicmluZyBvdXIgdW5pcXVlIGV4cGVyaWVuY2UgdG8gY29mZmVlIGxvdmVycyBhY3Jvc3MgTmFpcm9iaS4gS2VlcCBhbiBleWUgb3V0IGZvciBvdXIgZnV0dXJlIGJyYW5jaGVzLCBhcyB3ZSBhaW0gdG8gY3JlYXRlIGEgbmV0d29yayBvZiB3ZWxjb21pbmcgc3BhY2VzIHdoZXJlIHBlb3BsZSBjYW4gZ2F0aGVyLCBjb25uZWN0LCBhbmQgYmUgaW5zcGlyZWQuPC9wPlxyXG5cclxuPGg0PlZpc2l0IEJyZXdUZWNoIENhZsOpIFRvZGF5PC9oND5cclxuXHJcbjxwPldoZXRoZXIgeW91J3JlIGluIHNlYXJjaCBvZiBleGNlcHRpb25hbCBjb2ZmZWUsIGEgY296eSBwbGFjZSB0byB3b3JrLCBvciBhIHNwb3QgdG8gdW53aW5kIHdpdGggYSBnb29kIGJvb2ssIEJyZXdUZWNoIENhZsOpIGlzIGhlcmUgdG8gc2VydmUgeW91LiBXZSBpbnZpdGUgeW91IHRvIGpvaW4gdXMgaW4gb3VyIG1pc3Npb24gdG8gcHJvdmlkZSBhbiBleGNlcHRpb25hbCBjYWbDqSBleHBlcmllbmNlIHRoYXQgY29tYmluZXMgdGhlIGxvdmUgb2YgY29mZmVlIHdpdGggdGhlIHBvd2VyIG9mIHRlY2hub2xvZ3kuPC9wPlxyXG5cclxuPGk+QnJld1RlY2ggQ2Fmw6k6IFdoZXJlIENvZmZlZSBNZWV0cyBJbm5vdmF0aW9uPC9pPmBcclxuXHJcbiAgICBhYm91dC5hcHBlbmQoaW1hZ2UsYWJvdXRUZXh0KVxyXG4gICAgcmV0dXJuIGFib3V0XHJcbn1cclxuXHJcbi8vUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BzdWJhZ2phdj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5SaXpreSBTdWJhZ2phPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzFrN1RuWDVHQXd3P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxyXG4gICIsImltcG9ydCB7IGNvbnRlbnQsIGN1cnJlbnRQYWdlIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IGFib3V0UGFnZSBmcm9tIFwiLi9hYm91dFBhZ2UuanNcIlxyXG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWVQYWdlLmpzXCI7XHJcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZS5qc1wiO1xyXG5pbXBvcnQgb3JkZXJQYWdlIGZyb20gXCIuL29yZGVyUGFnZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlUGFnZShlKSB7XHJcbiAgICBsZXQgYnRuTmFtZSA9IGUudmlldy5kb2N1bWVudC5hY3RpdmVFbGVtZW50LmlubmVyVGV4dFxyXG4gICAgbGV0IGNvbnRlbnRDaGlsZCA9IGNvbnRlbnQuY2hpbGROb2Rlc1swXTtcclxuICAgIGxldCBidG4gPSBlLnZpZXcuZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxyXG5cclxuICAgIGxldCBzaWJsaW5nID0gYnRuLnBhcmVudE5vZGUuZmlyc3RDaGlsZFxyXG5cclxuICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gYnRuKSB7XHJcbiAgICAgICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1idG5cIilcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWJ0blwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChidG5OYW1lID09PSBcIkFib3V0XCIpXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZChhYm91dFBhZ2UoKSxjb250ZW50Q2hpbGQpXHJcbiAgICB9IGVsc2UgaWYgKGJ0bk5hbWUgPT09IFwiSG9tZVwiKVxyXG4gICAge1xyXG5cclxuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZChob21lUGFnZSgpLGNvbnRlbnRDaGlsZClcclxuICAgIH0gZWxzZSBpZiAoYnRuTmFtZSA9PT0gXCJDb250YWN0XCIpXHJcbiAgICB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkKGNvbnRhY3RQYWdlKCksY29udGVudENoaWxkKVxyXG4gICAgfSBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY29udGVudC5yZXBsYWNlQ2hpbGQob3JkZXJQYWdlKCksY29udGVudENoaWxkKVxyXG5cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGUudmlldy5kb2N1bWVudC5hY3RpdmVFbGVtZW50LmlubmVyVGV4dClcclxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIilcclxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgUGFnZVwiXHJcbiAgICByZXR1cm4gY29udGFjdFxyXG59IiwiaW1wb3J0IHJlc3RNZW51IGZyb20gXCIuL21lbnUuanNvblwiO1xyXG5cclxuZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIilcclxuICAgIG1lbnUuaW5uZXJIVE1MID0gXCI8aDEgY2xhc3M9J2hvbWUtdGl0bGUnPkJyZXdUZWNoIENhZsOpPC9oMz5cIlxyXG5cclxuICAgIHJlc3RNZW51Lm1lbnUubWFwKGdldE1lbnVJdGVtKVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1lbnVJdGVtKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0tY29udGFpbmVyXCIpXHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5pdGVtO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1DYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxyXG4gICAgICAgIGl0ZW1DYXRlZ29yeS50ZXh0Q29udGVudCA9IFwiQ2F0ZWdvcnk6IFwiKyBpdGVtLmNhdGVnb3J5XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIilcclxuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IFwicHJpY2U6IFwiICsgaXRlbS5wcmljZVxyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1OYW1lLCBpdGVtQ2F0ZWdvcnksZGVzY3JpcHRpb24sIHByaWNlKTtcclxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gbWVudVxyXG59XHJcblxyXG5leHBvcnQge2hvbWVQYWdlfVxyXG5cclxuIiwiaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lUGFnZS5qc1wiO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IG5hdkJhciBmcm9tIFwiLi9OYXZCYXIuanNcIlxyXG5pbXBvcnQgY2hhbmdlUGFnZSBmcm9tIFwiLi9jaGFuZ2VQYWdlLmpzXCI7XHJcblxyXG5leHBvcnQgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50UGFnZSA9IHtcclxuICAgIHBhZ2U6IGhvbWVQYWdlKCksXHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiBwYWdlXHJcbiAgICB9LFxyXG4gICAgc2V0IChuZXdQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gbmV3UGFnZVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHsgICAgXHJcbiAgIFxyXG4gICAgY29udGVudC5hcHBlbmQoY3VycmVudFBhZ2UucGFnZSkgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gY29udGVudFxyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChuYXZCYXIoKSxjb21wb25lbnQoKSkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlclBhZ2UoKSB7XHJcbiAgICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvcmRlci5jbGFzc0xpc3QuYWRkKFwib3JkZXJcIilcclxuICAgIG9yZGVyLnRleHRDb250ZW50ID0gXCJPcmRlciBQYWdlXCJcclxuICAgIHJldHVybiBvcmRlclxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9