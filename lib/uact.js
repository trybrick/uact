(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("uact", [], factory);
	else if(typeof exports === 'object')
		exports["uact"] = factory();
	else
		root["uact"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/Wu/lib/wu.min.js":
/*!***************************************!*\
  !*** ./node_modules/Wu/lib/wu.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Wu
 * web utils

 * @version v0.4.1
 * @author Tom Noogen
 * @homepage https://github.com/niiknow/wu
 * @repository https://github.com/niiknow/wu.git
 */
!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({"+VvR":function(e,t){e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("String expected");t||(t=document);var n=/<([\w:]+)/.exec(e);if(!n)return t.createTextNode(e);e=e.replace(/^\s+|\s+$/g,"");var r=n[1];if("body"==r){return(i=t.createElement("html")).innerHTML=e,i.removeChild(i.lastChild)}var i,s=o[r]||o._default,a=s[0],c=s[1],u=s[2];(i=t.createElement("div")).innerHTML=c+e+u;for(;a--;)i=i.lastChild;if(i.firstChild==i.lastChild)return i.removeChild(i.firstChild);var l=t.createDocumentFragment();for(;i.firstChild;)l.appendChild(i.removeChild(i.firstChild));return l};var n,r=!1;"undefined"!=typeof document&&((n=document.createElement("div")).innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',r=!n.getElementsByTagName("link").length,n=void 0);var o={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:r?[1,"X<div>","</div>"]:[0,"",""]};o.td=o.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],o.option=o.optgroup=[1,'<select multiple="multiple">',"</select>"],o.thead=o.tbody=o.colgroup=o.caption=o.tfoot=[1,"<table>","</table>"],o.polyline=o.ellipse=o.polygon=o.circle=o.text=o.line=o.path=o.rect=o.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"]},0:function(e,t,n){e.exports=n("tjUo")},"3JDX":function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){let n;function s(...e){if(!s.enabled)return;const t=s,o=Number(new Date),i=o-(n||o);t.diff=i,t.prev=n,t.curr=o,n=o,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;a++;const i=r.formatters[o];if("function"==typeof i){const r=e[a];n=i.call(t,r),e.splice(a,1),a--}return n}),r.formatArgs.call(t,e),(t.log||r.log).apply(t,e)}return s.namespace=e,s.enabled=r.enabled(e),s.useColors=r.useColors(),s.color=t(e),s.destroy=o,s.extend=i,"function"==typeof r.init&&r.init(s),r.instances.push(s),s}function o(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,t){const n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function s(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},r.disable=function(){const e=[...r.names.map(s),...r.skips.map(s).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let t;r.save(e),r.names=[],r.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){const e=r.instances[t];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n("FGiv"),Object.keys(e).forEach(t=>{r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},FGiv:function(e,t){var n=1e3,r=60*n,o=60*r,i=24*o,s=7*i,a=365.25*i;function c(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*a;case"weeks":case"week":case"w":return c*s;case"days":case"day":case"d":return c*i;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&isFinite(e))return t.long?function(e){var t=Math.abs(e);if(t>=i)return c(e,t,i,"day");if(t>=o)return c(e,t,o,"hour");if(t>=r)return c(e,t,r,"minute");if(t>=n)return c(e,t,n,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=i)return Math.round(e/i)+"d";if(t>=o)return Math.round(e/o)+"h";if(t>=r)return Math.round(e/r)+"m";if(t>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},NOtv:function(e,t,n){(function(r){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n("3JDX")(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n("8oxB"))},Ogr1:function(e,t,n){var r=n("VUBM")("cookie");function o(e,t,n){n=n||{};var r=a(e)+"="+a(t);null==t&&(n.maxage=-1),n.maxage&&(n.expires=new Date(+new Date+n.maxage)),n.path&&(r+="; path="+n.path),n.domain&&(r+="; domain="+n.domain),n.expires&&(r+="; expires="+n.expires.toUTCString()),n.secure&&(r+="; secure"),document.cookie=r}function i(){var e;try{e=document.cookie}catch(e){return"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e.stack||e),{}}return function(e){var t,n={},r=e.split(/ *; */);if(""==r[0])return n;for(var o=0;o<r.length;++o)t=r[o].split("="),n[c(t[0])]=c(t[1]);return n}(e)}function s(e){return i()[e]}function a(e){try{return encodeURIComponent(e)}catch(t){r("error `encode(%o)` - %o",e,t)}}function c(e){try{return decodeURIComponent(e)}catch(t){r("error `decode(%o)` - %o",e,t)}}e.exports=function(e,t,n){switch(arguments.length){case 3:case 2:return o(e,t,n);case 1:return s(e);default:return i()}}},VUBM:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(e){}return e}(t=e.exports=n("ngqJ")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(){var e=arguments,n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return e;var r="color: "+this.color;e=[e[0],r,"color: inherit"].concat(Array.prototype.slice.call(e,1));var o=0,i=0;return e[0].replace(/%[a-z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))})),e.splice(i,0,r),e},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=r,t.useColors=function(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){return JSON.stringify(e)},t.enable(r())},cpc2:function(e,t,n){function r(e){if(e)return function(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}(e)}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var o=0;o<r.length;o++)if((n=r[o])===t||n.fn===t){r.splice(o,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){r=0;for(var o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,t)}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},ngqJ:function(e,t,n){(t=e.exports=function(e){function n(){}function i(){var e=i,n=+new Date,s=n-(r||n);e.diff=s,e.prev=r,e.curr=n,r=n,null==e.useColors&&(e.useColors=t.useColors()),null==e.color&&e.useColors&&(e.color=t.colors[o++%t.colors.length]);var a=Array.prototype.slice.call(arguments);a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&(a=["%o"].concat(a));var c=0;a[0]=a[0].replace(/%([a-z%])/g,(function(n,r){if("%%"===n)return n;c++;var o=t.formatters[r];if("function"==typeof o){var i=a[c];n=o.call(e,i),a.splice(c,1),c--}return n})),"function"==typeof t.formatArgs&&(a=t.formatArgs.apply(e,a)),(i.log||t.log||console.log.bind(console)).apply(e,a)}n.enabled=!1,i.enabled=!0;var s=t.enabled(e)?i:n;return s.namespace=e,s}).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e);for(var n=(e||"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("zCaB"),t.names=[],t.skips=[],t.formatters={};var r,o=0},"sBL/":function(e,t){function n(e,t,n){var r,o,i,s,a;function c(){var u=Date.now()-s;u<t&&u>=0?r=setTimeout(c,t-u):(r=null,n||(a=e.apply(i,o),i=o=null))}null==t&&(t=100);var u=function(){i=this,o=arguments,s=Date.now();var u=n&&!r;return r||(r=setTimeout(c,t)),u&&(a=e.apply(i,o),i=o=null),a};return u.clear=function(){r&&(clearTimeout(r),r=null)},u.flush=function(){r&&(a=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},u}n.debounce=n,e.exports=n},tjUo:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n("+VvR"),i=n("cpc2"),s=n("sBL/"),a=n("Ogr1"),c=n("NOtv"),u={navigator:{userAgent:""},location:{protocol:"file",hostname:""}},l={},f=Array.prototype,d=Object.prototype,h=f.slice,p=d.hasOwnProperty,g=f.forEach,m=f.map,y=f.some,v=f.indexOf,C=Object.keys;function b(e,t){return null==e||"null"===e?t:e}"undefined"!=typeof window&&(u=window);var w=u.navigator.userAgent||"";function k(e,t){return p.call(e,t)}function x(e){if(C)return C(e);if(e!==Object(e))throw new TypeError("Invalid object");var t,n=[];for(t in e)k(e,t)&&n.push(t);return n}function F(e,t,n){if(null!==b(e,null))if(g&&e.forEach===g)e.forEach(t,n);else if(e.length===+e.length){for(var r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e)===l)return}else for(var i=x(e),s=0,a=i.length;s<a;s++)if(t.call(n,e[i[s]],i[s],e)===l)return}var E=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t,n,r,l;this._name="Wu",this.browser={isIE:(t=w,n=t.indexOf("MSIE "),r=t.indexOf("Trident/"),l=t.indexOf("rv:"),n>0?parseInt(t.substring(n+5,t.indexOf(".",n)),10):r>0&&parseInt(t.substring(l+3,t.indexOf(".",l)),10)),isMobile:/iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/gi.test(w),isAndroid:/(android)/gi.test(w),isIOS:/iP(hone|od|ad)/gi.test(w)},this.has=k,this.keys=x,this.each=this.forEach=F,this.isNull=b,this.win=u,this.doc=this.win.document||{},this.collect=this.map,this.any=this.some,this.attr=this.getAttribute=this.getAttr,this.setAttribute=this.setAttr,this.emitter=i,this.domify=o,this.debounce=s,this.cookie=a,this.debug=c,void 0===this.win.console&&(this.win.console={log:function(){}},this.win.console.error=this.win.console.debug=this.win.console.info=this.win.console.log);var f=this.trim(this.win.location.hostname.toLowerCase());this.site={hostname:f,domain:f.replace("www.",""),config:{}}}var t,n,f;return t=e,(n=[{key:"addEvent",value:function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent(t,n):this.getAttr(e,"on"+t)?e["on"+t]=n:e[t]=n,this}},{key:"removeEvent",value:function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent(t,n):this.getAttr(e,"on"+t)?e["on"+t]=null:e[t]=null,this}},{key:"decode",value:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}}},{key:"encode",value:function(e){try{return encodeURIComponent(e)}catch(t){return e}}},{key:"geoDistance",value:function(e,t,n,r,o){function i(e){return e*Math.PI/180}var s={latitude:e,longitude:t},a={latitude:n,longitude:r},c={km:6371,mile:3960,meter:6371e3,nmi:3440},u=(o=o||{}).unit in c?c[o.unit]:c.km,l=i(a.latitude-s.latitude),f=i(a.longitude-s.longitude),d=i(s.latitude),h=i(a.latitude),p=Math.sin(l/2)*Math.sin(l/2)+Math.sin(f/2)*Math.sin(f/2)*Math.cos(d)*Math.cos(h),g=2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p));return o.threshold?o.threshold>u*g:u*g}},{key:"geoOrderByOrigin",value:function(e,t,n){var r=this,o={origin:t,results:[]};return F(e,(function(e){var n=r.geoDistance(t.Latitude,t.Longitude,e.Latitude,e.Longitude,{unit:"mile"}),i={point:e,distance:parseFloat(r.isNull(n,0))};o.results.push(i)})),this.sortOn(o.results,"distance"),n(o),this}},{key:"geoOrderByIP",value:function(e,t,n){var r=this;return r.geoByIP(t,(function(t){t.latitude&&(t.Latitude=t.latitude,t.Longitude=t.longitude,r.geoOrderByOrigin(e,t,n))})),r}},{key:"geoByIP",value:function(e,t){this.jsonp(e||"//freegeoip.net/json/",t)}},{key:"getAjaxObject",value:function(){return"XMLHttpRequest"in window?new XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP")}},{key:"getAttr",value:function(e,t,n){if(arguments.length>2)return this.setAttr(e,t,n);var r=e[0]||e;return r.getAttribute?r.getAttribute(t):r[t]}},{key:"getAttrs",value:function(e,t){var n={},r=this;return F(["","data-"],(function(o,i){F(t||[],(function(t,i){var s=r.getAttr(e,o+i);s&&(n[i]=s)}))})),n}},{key:"setAttr",value:function(e,t,n){var r=e[0]||e;return r.setAttribute?r.setAttribute(t,n):r[t]=n,n}},{key:"setAttrs",value:function(e,t){var n=e[0]||e,r=this;return F(t||[],(function(e,t){r.setAttr(n,t,e)})),n}},{key:"contains",value:function(e,t){return null!==this.isNull(e,null)&&(v&&e.indexOf===v?-1!==e.indexOf(t):this.any(e,(function(e){return e===t})))}},{key:"createiFrame",value:function(e,t){var n=this.doc.createElement("iframe");return e&&(n.id=e),t&&(n.className=t),n.frameBorder="0",n.marginWidth="0",n.marginHeight="0",n.setAttribute("border","0"),n.setAttribute("allowtransparency","true"),n.width="100%",n.height="100%",n}},{key:"del",value:function(e,t){e[t]=void 0;try{delete e[t]}catch(r){var n={};return F(e,(function(e,r){r!==t&&(n[r]=e)})),n}return e}},{key:"defaults",value:function(e){return F(h.call(arguments,1),(function(t){void 0!==t&&F(t,(function(t,n){null===b(e[n],null)&&(e[n]=t)}))})),e}},{key:"extend",value:function(e){return F(h.call(arguments,1),(function(t){void 0!==t&&F(t,(function(t,n){null!==b(t,null)&&(e[n]=t)}))})),e}},{key:"groupBy",value:function(e,t,n){if(null===this.isNull(e,null))return[];var r=[],o={};F(e,(function(e){var n=e[t],r=o[n];null===b(r,null)&&(r={key:n,items:[]},o[n]=r),r.items.push(e)}));var i=0;return F(o,(function(e){e.$idx=i++,r.push(e),n&&n(e)})),this.sortOn(r,"key")}},{key:"hasCls",value:function(e,t){var n,r,o,i,s;for(r=n=0,o=(i=t.split(" ")).length;n<o;r=++n)if(s=i[r],(" "+e.className+" ").indexOf(" "+s+" ")>=0)return!0;return!1}},{key:"injectStyle",value:function(e,t){var n,r;return(n=this.doc.getElementById(e))||((n=this.doc.createElement("style")).id=e,n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(this.doc.createTextNode(t)),(r=(r=this.doc.getElementsByTagName("link")[0])||(this.doc.head||this.doc.getElementsByTagName("head")[0]).lastChild).parentNode.insertBefore(n,r)),this}},{key:"jsonp",value:function(e,t){var n="wucb"+(new Date).getTime();this.win[n]=function(e){var n=e;"string"==typeof e&&(n="null"===e?null:JSON.parse(e)),t(n)},e=e,e+=(e.indexOf("?")>0?"&":"?")+"callback="+n,this.loadScript(e)}},{key:"loadScript",value:function(e,t){var n;function r(){void 0!==this.readyState&&"complete"!==this.readyState||"function"==typeof t&&t()}e.indexOf("//")<0&&(e="http:"+e),"file"===(u.location||{}).protocol&&(e=e.replace("https://","http://")),(n=this.doc.createElement("script")).type="text/javascript",n.src=e,t&&(n.onload=r,n.onreadystatechange=r),this.doc.body.appendChild(n)}},{key:"loadScripts",value:function(e,t){var n,r=this;this.isNull(e.length,0)<=0?"function"==typeof t&&t():("string"==typeof e&&(e=[e]),n=[].concat(e),function e(){if(n.length<=0)"function"==typeof t&&t();else{var o=n[0];n.splice(0,1),r.loadScript(o,e)}}())}},{key:"loadiFrame",value:function(e,t,n,r){var o=this.createiFrame(n,r);if(e[0].appendChild(o),o.contentWindow)o.contentWindow.contents=t,o.src='javascript:window["contents"]';else{var i=o.contentDocument||o.document;i.open(),i.write(t),i.close()}return o}},{key:"map",value:function(e,t,n){var r=[];return null===this.isNull(e,null)?r:m&&e.map===m?e.map(t,n):(F(e,(function(e,o,i){r.push(t.call(n,e,o,i))})),r)}},{key:"mapObject",value:function(e,t){var n={};return e&&(this.isNull(e.length,-1)<0?n[e[t]]=e:this.map(e,(function(e,r){var o=e[t],i=n[o];i?("[object Array]"!==Object.prototype.toString.call(i)&&(i=[i]),i.push(e)):i=e,n[o]=i}))),n}},{key:"queryParseString",value:function(e){e=(e||"").replace("?","").replace("#","");for(var t=/(\w+)\[(\d+)\]/,n=this.decode,r={},o=e.split("&"),i=0;i<o.length;i++){var s=o[i].split("="),a=n(s[0]),c=t.exec(a);c?(r[c[1]]=r[c[1]]||[],r[c[1]][c[2]]=n(s[1])):r[s[0]]=n(s[1]||"")}return r}},{key:"queryStringify",value:function(e){var t="",n=this.encode;return F(e,(function(e,r){t+="&".concat(r,"=").concat(n(e))})),t.replace("&","")}},{key:"request",value:function(e,t,n){return e.headers=e.headers||{},["HEAD","GET","DELETE"].indexOf(e.method)>-1?e.data&&(e.url+=(e.url.indexOf("?")>0?"?":"&")+this.queryStringify(e.data),e=this.del(e,"data")):"string"!=typeof e.data&&((e.headers["Content-Type"]+"").indexOf("json")>0?e.data=JSON.stringify(e):e.data=this.queryStringify(e)),this.xhr(e,t,n)}},{key:"slugify",value:function(e){return""===(e=e||"")?e:e=e.toLowerCase().replace(/[^0-9a-z\-\_]+/gi,"-").replace(/[\-]+/gi,"-")}},{key:"some",value:function(e,t,n){var r=!1;return t=t||function(e){return e},null===this.isNull(e,null)?r:y&&e.some===y?e.some(t,n):(F(e,(function(e,o,i){return r||(r=t.call(n,e,o,i))?l:null})),r)}},{key:"sortOn",value:function(e,t){return null===this.isNull(e,null)?null:e.length<=0?[]:("string"==typeof e[0][t]?e.sort((function(e,n){return(e[t]&&e[t].toLowerCase())<(n[t]&&n[t].toLowerCase())?-1:(e[t]&&e[t].toLowerCase())>(n[t]&&n[t].toLowerCase())?1:0})):e.sort((function(e,n){return e[t]<n[t]?-1:e[t]>n[t]?1:0})),e)}},{key:"trim",value:function(e){return e.trim?e.trim():e.replace(/^\s*|\s*$/g,"")}},{key:"uuid",value:function(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,this.uuid)}},{key:"xhr",value:function(e,t,n){var r=e;"string"==typeof r&&((e=e||{}).url=r);var o=this.getAjaxObject();return e.withCredentials&&(o.withCredentials=!0,"undefined"!=typeof XDomainRequest&&(o=new XDomainRequest)),e&&0!==e.length||n({xhr:o,error:new Error("xhr expects an url or an options object, none given.")}),e.method=e.method||"GET",o.open(e.method,e.url,o.withCredentials),F(e.headers||{},(function(e,t){o.setRequestHeader(t,e)})),this.addEvent(o,"readystatechange",(function(){4===o.readyState&&o.status>=200&&o.status<400?t({xhr:o,text:o.responseText,url:o.responseURL}):4===o.readyState&&n({xhr:o})})),this.addEvent(o,"error",(function(e){n({xhr:o,error:e})})),e.nosend||o.send(e.data||void 0),o}},{key:"name",get:function(){return this._name}}])&&r(t.prototype,n),f&&r(t,f),e}();e.exports=E},zCaB:function(e,t){var n=1e3,r=60*n,o=60*r,i=24*o,s=365.25*i;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){return t=t||{},"string"==typeof e?function(e){if((e=""+e).length>1e4)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*s;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*o;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a}}(e):t.long?a(c=e,i,"day")||a(c,o,"hour")||a(c,r,"minute")||a(c,n,"second")||c+" ms":function(e){return e>=i?Math.round(e/i)+"d":e>=o?Math.round(e/o)+"h":e>=r?Math.round(e/r)+"m":e>=n?Math.round(e/n)+"s":e+"ms"}(e);var c}}})}));
//# sourceMappingURL=wu.min.js.map

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _this = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Wu = __webpack_require__(/*! Wu */ "./node_modules/Wu/lib/wu.min.js");

var wu = new Wu();
var currentScript = wu.doc.querySelector('script[src*="uact.js"],script[src*="uact.min.js"]');

if (!currentScript) {
  var scripts = wu.doc.getElementsByTagName('script');
  currentScript = wu.doc.currentScript || scripts[scripts.length - 1];
}

var scriptQuery = currentScript ? currentScript.src.split('?')[1] : '';
var queryString = (wu.win.location.search + '').substring(1);
var opts = wu.getAttrs(currentScript);

if (scriptQuery) {
  opts = wu.extend(opts, wu.queryParseString(scriptQuery));
}

if (wu.win.Element && !wu.win.Element.prototype.closest) {
  wu.win.Element.prototype.closest = function (s) {
    var matches = (_this.document || wu.win.ownerDocument).querySelectorAll(s),
        i,
        el = _this;

    do {
      i = matches.length;

      while (--i >= 0 && matches.item(i) !== el) {}

      ;
    } while (i < 0 && (el = el.parentElement));

    return el;
  };
}
/**
 * UTM auto click tracker
 */


var Uact =
/*#__PURE__*/
function () {
  function Uact() {
    _classCallCheck(this, Uact);

    this.wu = wu;
    this.log = wu.debug('uact');
    this._name = 'Uact'; // this._brxua = '79697394-26';

    this.init();
  }
  /**
   * get the name of the library
   * @return {string} library name
   */


  _createClass(Uact, [{
    key: "appendQuery",
    value: function appendQuery(existing, queryStr) {
      var that = this;
      var oldHref = wu.isNull(existing, '/') || '/';
      var parts = oldHref.split('#');
      that.log("updating ".concat(oldHref));

      if (oldHref.indexOf('/') > -1) {
        // exit if javascript or bad href
        if (/\w+:\w+/gi.test(oldHref) || oldHref.toLowerCase().indexOf('javascript:') > -1 || oldHref.toLowerCase().indexOf('utm_') > -1) {
          that.log("update skip [".concat(oldHref, "]"));
          return existing;
        } // append & instead of ? if existing query string


        parts[0] = parts[0] + (parts[0].indexOf('?') < 0 ? '?' : '&') + queryStr; // finally add back hash

        if (parts[1]) {
          parts[0] = parts[0] + '#' + parts[1];
        }

        that.log("update from [".concat(oldHref, "] to [").concat(parts[0], "]"));
        return parts[0];
      } else {
        that.log("skipping [".concat(oldHref, "]"));
      }

      return existing;
    }
    /**
     * get the Query String
     * @param  {Boolean} asObject true to return as object
     * @return query string or object
     */

  }, {
    key: "getUtmQuery",
    value: function getUtmQuery() {
      var asObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var query = {};

      if (queryString) {
        var queryTemp = wu.queryParseString(queryString); // normalize query string key to lowercase

        wu.each(queryTemp, function (v, k) {
          query[k.toLowerCase()] = v;
        });
      }

      try {
        // store query string in cookie if utm_campaign exists
        if (query.utm_campaign) {
          wu.win.sessionStorage.setItem('brxutm', 'true'); // overide existing cookie

          wu.cookie('brxutmquery', JSON.stringify(query));
        } else {
          var myq = wu.cookie('brxutmquery');

          if (myq && myq.indexOf('{') > -1) {
            query = JSON.parse(myq);
          }
        }
      } catch (e) {
        wu.debug(e);
      }

      return asObject ? query : wu.queryStringify(query);
      ;
    }
    /**
     * init function
     * @param  {object} opts options
     */

  }, {
    key: "init",
    value: function init() {
      var that = this;
      var qry = wu.queryParseString(queryString);

      if (qry.debug) {
        wu.debug.enable(qry.debug);
      }

      that.setupHandlers();
      var queryStr = that.getUtmQuery(false);

      if (!opts.disableDeepTracking && wu.win.jQuery && queryStr.indexOf('utm_') > -1) {
        that.log('begin updating anchors');
        wu.win.jQuery(wu.doc).ready(function () {
          wu.win.setTimeout(function () {
            try {
              var sessionUtm = wu.win.sessionStorage.getItem('brxutm') || wu.win.sessionStorage.brxutm;

              if (sessionUtm) {
                if (queryString.indexOf('utm_') < 0) {
                  var pageUrl = that.appendQuery(queryString, queryStr);
                  wu.win.history.pushState('', '', pageUrl);
                }
              } // rewrite urls


              var found = wu.win.jQuery('a');
              that.log("anchors count ".concat(found.length));
              wu.win.jQuery.each(found, function (k, v) {
                var item = wu.win.jQuery(v);
                var oldQuery = item.attr('href');
                var query = that.appendQuery(oldQuery, queryStr);

                if (oldQuery !== query) {
                  item.attr('href', query);
                }
              });
            } catch (e) {
              wu.debug(e);
            }
          }, 1000);
        });
      }
    }
    /**
     * setup action handlers
     */

  }, {
    key: "setupHandlers",
    value: function setupHandlers() {
      var that = this;
      var query = that.getUtmQuery(true);
      /*eslint-disable */
      // tom mistake come back to bite me

      if (query.utm_name) {
        query.utm_campaign = query.utm_name;
      }

      if (wu.isNull(query.utm_campaign, '').length < 2) {
        that.log('exiting: invalid utm_campaign');
        return query;
      }
      /* eslint-enable */


      function actionHandler(e) {
        var event = e || that.win.event;
        var target = event.target || event.srcElement;
        var btn = target.closest('button');
        var evt = {
          query: query,
          category: query.utm_campaign,
          value: 1
        };
        var tagName = (target.tagName + '').toLowerCase();

        if (tagName === 'input') {
          var targetType = target.type.toLowerCase();

          if (targetType === 'submit' || targetType === 'button') {
            evt.action = target.name || target.id || e.type || 'button action';
            evt.label = target.value;
          } else {
            that.log("exiting from ".concat(e.type, " - ignoring input type ").concat(targetType));
            return;
          }
        } else if (tagName === 'select' && target.options && target.selectedIndex) {
          var opt = target.options[target.selectedIndex];

          if (opt) {
            evt.action = target.name || target.id || e.type || 'select action';
            evt.label = "".concat(opt.value, "_").concat(opt.text);
          }
        } else if (btn) {
          evt.action = btn.name || btn.id || e.type || 'button action';
          evt.label = btn.textContent || btn.innerText;
        } else if (e.type === 'change') {
          that.log('exiting from non-select change event');
          return;
        } else if (e.type === 'submit') {
          evt.action = 'submit action';
          evt.label = target.action;
        } else {
          var a = target.closest('a');

          if (!a) {
            that.log("exiting from ".concat(e.type, " event with no valid parent element"));
            return;
          }

          evt.action = wu.getAttr(a, 'href');
          evt.label = a.textContent || a.innerText;
        }

        if (!evt.action) {
          that.log("exiting from ".concat(e.type, " - no action to log"));
          return;
        }

        that.log('triggering...');
        that.log(evt); // track event in our own analytics

        if (that._brxua) {
          var image = new Image(1, 1);
          var uae = {
            ea: evt.action,
            el: evt.label,
            ev: evt.value,
            ec: evt.category + '_' + wu.win.location.hostname,
            dl: wu.win.location.href,
            cb: new Date().getTime()
          };

          if (!uae.ea) {
            uae = wu.del(uae, 'ea');
          }

          if (!uae.el) {
            uae = wu.del(uae, 'el');
          }

          image.src = "https://pi.brickinc.net/ua/".concat(that._brxua, "?") + wu.queryStringify(uae) + '&' + queryString;
        } // track google tag manager


        if (typeof wu.win.dataLayer !== 'undefined') {
          var dataLayer = wu.win.dataLayer || []; // use gtag logic allow pushing data to both gtag and GTM

          var gtag = wu.win.gtag || function () {
            dataLayer.push(arguments);
          };

          gtag('event', evt.action, {
            'event_category': evt.category,
            'event_label': evt.label,
            'value': evt.value
          });
        } // send to all classic analytic named trackers


        if (typeof wu.win.ga !== 'undefined') {
          var trackers = wu.win.ga.getAll();
          trackers.forEach(function (tracker) {
            wu.win.ga(tracker.get('name') + '.send', 'event', evt.category, evt.action, evt.label, evt.value);
          });
        }
      } // end actionHandler


      wu.addEvent(wu.doc, 'click', actionHandler);
      wu.addEvent(wu.doc, 'tap', actionHandler);
      wu.addEvent(wu.doc, 'change', actionHandler);
      wu.addEvent(wu.doc, 'submit', actionHandler); // for some reason, tel does not propagate
      // so we track it separately

      if (typeof wu.win.jQuery !== 'undefined') {
        wu.win.jQuery('a[href^="tel:"').click(actionHandler);
      }

      return query;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return Uact;
}();

;
module.exports = new Uact();

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomnoogen/Desktop/work/brick/uact/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=uact.js.map