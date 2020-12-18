(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=t(520),s=t(449),d=t(103),l=o()((function(e){return e[1]})),u=a()(c),f=a()(s),p=a()(d);l.push([e.id,"@font-face {\r\n    font-family: 'Lora', serif;;\r\n    src: url("+u+") format('woff');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n  }\r\n\r\nbody, html{\r\n    width: 100%;\r\n    height:100%;\r\n    padding: 0%;\r\n    margin: 0%;\r\n}\r\n/*For Tabs*/\r\n.tabs-container{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    height: 32px;\r\n    align-items: center;\r\n}\r\n\r\n.home-tab, .menu-tab, .shop-tab, .aboutUs-tab{\r\n    font-family: 'Lora', serif;\r\n    font-size: 17px;\r\n    letter-spacing: 3px;\r\n}\r\n\r\n/*For Home Page (Usar tipografía Pacífico)*/\r\n.home-container{\r\n    height: 100vh;\r\n    min-width: 0;\r\n    display: flex;\r\n}\r\n\r\n.home-right{\r\n    background-color: rgb(255, 182, 7);\r\n    width: 50%;\r\n}\r\n\r\n.home-left{\r\n    background: url("+f+");\r\n    width: 50%;\r\n    background-size: cover;\r\n    background-position-y: 25%;\r\n    background-repeat: no-repeat;  \r\n}\r\n\r\n.home-tittle{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    height: 70%;\r\n    font-size: 135px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home-slogan{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n/*For Menu*/\r\n.menu-container{\r\n    height: 100vh;\r\n    min-width: 0;\r\n    display: flex;\r\n}\r\n\r\n.menu-left{\r\n    background: url("+p+");\r\n    width: 20%;\r\n    background-size: cover;\r\n    background-position-y: 25%;\r\n    background-repeat: no-repeat; \r\n}\r\n\r\n.menu-middle{\r\n    background-color: rgb(255, 182, 7);\r\n    width: 60%;\r\n}\r\n\r\n.menu-right{\r\n    background: url("+p+");\r\n    width: 20%;\r\n    background-size: cover;\r\n    background-position-x: 20%;\r\n    background-repeat: no-repeat; \r\n}",""]);const m=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:h(f,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=s(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),d=0;d<t.length;d++){var l=a(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}},520:(e,n,t)=>{e.exports=t.p+"e63d7aee147482093031.woff"},449:(e,n,t)=>{e.exports=t.p+"615112097b69053fb963.jpg"},103:(e,n,t)=>{e.exports=t.p+"e4d8c4d5b9780e989e54.jpg"}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(449);document.getElementById("parent").append(function(){const e=document.createElement("div");e.classList.add("tabs-container");const n=document.createElement("div");n.innerHTML="HOME",n.classList.add("home-tab");const t=document.createElement("div");t.innerHTML="MENU",t.classList.add("menu-tab");const r=document.createElement("div");r.innerHTML="SHOP",r.classList.add("shop-tab");const o=document.createElement("div");return o.innerHTML="ABOUT US",o.classList.add("aboutUs-tab"),e.append(n,t,r,o),e}(),function(){const e=document.createElement("div");e.classList.add("menu-container");const n=document.createElement("div");n.classList.add("menu-left");const t=document.createElement("div"),r=document.createElement("div");t.classList.add("menu-middle"),r.innerHTML="STARTERS",r.classList.add("menu-tittle");const o=document.createElement("div");o.innerHTML="SPECIALS",o.classList.add("menu-specials");const i=document.createElement("div");i.innerHTML="DRINKS",i.classList.add("menu-drinks"),t.append(r,o,i);const a=document.createElement("div");return a.classList.add("menu-right"),e.append(n,t,a),e}());const i=document.createElement("img");i.src=o,element.appendChild(i)})()})();