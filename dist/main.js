(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>x});var t=r(645),o=r.n(t),i=r(667),a=r.n(i),s=r(520),c=r(856),d=r(449),l=r(103),p=r(987),u=o()((function(n){return n[1]})),f=a()(s),h=a()(c),m=a()(d),g=a()(l),b=a()(p);u.push([n.id,"@font-face {\r\n    font-family: 'Lora', serif, 'Pacifico', cursive;\r\n    src: url("+f+") format('woff'), url("+h+") format('woff');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n  }\r\n\r\nbody, html{\r\n    width: 100%;\r\n    height:100%;\r\n    padding: 0%;\r\n    margin: 0%;\r\n    overflow-x: hidden;\r\n}\r\n/*For Tabs*/\r\n.tabs-container{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    height: 32px;\r\n    align-items: center;\r\n}\r\n\r\n.home-tab, .menu-tab, .shop-tab, .aboutUs-tab{\r\n    font-family: 'Lora', serif;\r\n    font-size: 17px;\r\n    letter-spacing: 3px;\r\n}\r\n\r\n/*For Home Page (Usar tipografía Pacífico)*/\r\n.home-container{\r\n    height: 100vh;\r\n    min-width: 0;\r\n    display: flex;\r\n}\r\n\r\n.home-right{\r\n    background-color: rgb(255, 182, 7);\r\n    width: 50%;\r\n}\r\n\r\n.home-left{\r\n    background: url("+m+");\r\n    width: 50%;\r\n    background-size: cover;\r\n    background-position-y: 25%;\r\n    background-repeat: no-repeat;  \r\n}\r\n\r\n.home-tittle{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    height: 70%;\r\n    font-size: 135px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home-slogan{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n/*For Menu*/\r\n.menu-container{\r\n    height: 100vh;\r\n    min-width: 0;\r\n    display: flex;\r\n}\r\n\r\n.menu-left{\r\n    background: url("+g+");\r\n    width: 20%;\r\n    background-size: cover;\r\n    background-position-y: 25%;\r\n    background-repeat: no-repeat; \r\n}\r\n\r\n.menu-middle{\r\n    background-color: rgb(255, 182, 7);\r\n    width: 60%;\r\n}\r\n\r\n.menu-right{\r\n    background: url("+g+");\r\n    width: 20%;\r\n    background-size: cover;\r\n    background-position-x: 20%;\r\n    background-repeat: no-repeat; \r\n}\r\n\r\n.menu-starters, .menu-specials, .menu-drinks{\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 23px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu-specials {\r\n    align-items: flex-end;\r\n}\r\n\r\n.txt-starters, .txt-specials, .txt-drinks{\r\n    font-family: 'Lora', serif;\r\n    letter-spacing: 12px;\r\n    width: 100%;\r\n    height: 30px;\r\n    font-size: 35px;\r\n    display: flex;\r\n    font-weight: 600;\r\n    flex-direction: column;\r\n}\r\n\r\n.txt-starters, .txt-drinks{\r\n    justify-content: start;\r\n    margin-left: 15px;\r\n}\r\n\r\n.txt-specials{\r\n    align-items: flex-end;\r\n}\r\n\r\n.txt-starters-menu, .txt-specials-menu, .txt-drinks-menu{\r\n    width: 50%;\r\n}\r\n\r\n.txt-specials-menu{\r\n    align-items: flex-end;\r\n    border-left: 5px black dotted;\r\n}\r\n\r\n.option{\r\n    font-family:'Lora', serif;\r\n}\r\n\r\n.options-tittle{\r\n    width: 100%;\r\n    font-size: 22px;\r\n    letter-spacing: 5px;\r\n    padding-top: 10px;\r\n    margin-left: 15px;\r\n    font-style: italic;\r\n    }\r\n\r\n.options-description{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    font-size: 21px;\r\n    letter-spacing: 1px;\r\n    margin-left: 15px;\r\n}\r\n\r\n/*For Shop*/\r\n\r\n.shop-container{\r\nwidth: 100%;\r\nheight: 100vh;\r\n}\r\n\r\n.header-shop{\r\n    width: 100%;\r\n    height: 70%;\r\n    background: url("+b+");\r\n    background-size: cover;\r\n    background-position-y: 87%;\r\n    background-repeat: no-repeat;  \r\n    display: flex;\r\n}\r\n\r\n.icon-container{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.icon-cart-container{\r\n    width: 200px;\r\n    height: 100px;\r\n    border-radius: 0 0 100px 100px;\r\n    background-color: rgb(255, 182, 7);\r\n}\r\n\r\n.body-shop{\r\n    width: 100%;\r\n    height: 34%;\r\n    background-color: rgb(255, 182, 7);\r\n}\r\n\r\n.shop-tittle{\r\n    font-family: 'Lora', serif;\r\n    width: 29%;\r\n    height: 149%;\r\n    font-size: 135px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 500;\r\n}\r\n\r\n.items-parent{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.item-one-shop, .item-two-shop, .item-three-shop{\r\n    width: 33%;\r\n    height: 80%;\r\n    font-family: 'Lora', serif;\r\n    font-size: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.button-shop{\r\n    width: 150px;\r\n    height: 25px;\r\n    font-family: 'Lora', serif;\r\n    font-size: 15px;\r\n    background-color: transparent;\r\n    letter-spacing: 2px;\r\n    font-weight: 500;\r\n    border:transparent;\r\n    border-left: double 4px black;\r\n    border-right: double 4px black;\r\n\r\n}\r\n\r\n.options-tittle-shop{\r\n    font-size: 20px;\r\n    font-family: 'Lora', serif;\r\n    align-self:center;\r\n    letter-spacing: 4px;\r\n}",""]);const x=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function a(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function s(n,e){for(var r={},t=[],o=0;o<n.length;o++){var s=n[o],c=e.base?s[0]+e.base:s[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var p=a(l),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:m(u,e),references:1}),t.push(l)}return t}function c(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function u(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,h=0;function m(n,e){var r,t,o;if(e.singleton){var i=h++;r=f||(f=c(e)),t=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=c(e),t=u.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var c=s(n,e),d=0;d<r.length;d++){var l=a(r[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=c}}}},520:(n,e,r)=>{n.exports=r.p+"e63d7aee147482093031.woff"},449:(n,e,r)=>{n.exports=r.p+"615112097b69053fb963.jpg"},103:(n,e,r)=>{n.exports=r.p+"e4d8c4d5b9780e989e54.jpg"},987:(n,e,r)=>{n.exports=r.p+"db28a4c4acfe1373e72b.jpg"},856:(n,e,r)=>{n.exports=r.p+"31d6cfe0d16ae931b73c.woff"}},e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n=r(379),e=r.n(n),t=r(426);e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=r(449);var i=r(987);document.getElementById("parent").append(function(){const n=document.createElement("div");n.classList.add("tabs-container");const e=document.createElement("div");e.innerHTML="HOME",e.classList.add("home-tab");const r=document.createElement("div");r.innerHTML="MENU",r.classList.add("menu-tab");const t=document.createElement("div");t.innerHTML="SHOP",t.classList.add("shop-tab");const o=document.createElement("div");return o.innerHTML="ABOUT US",o.classList.add("aboutUs-tab"),n.append(e,r,t,o),n}(),function(){const n=document.createElement("div");n.classList.add("shop-container");const e=document.createElement("div");e.classList.add("header-shop");const r=document.createElement("div");r.innerHTML="Enjoy!",r.classList.add("shop-tittle");const t=document.createElement("div");t.classList.add("icon-container");const o=document.createElement("div");o.classList.add("icon-cart-container"),t.appendChild(o),e.append(r,t);const i=document.createElement("div");i.classList.add("body-shop");const a=document.createElement("div");a.classList.add("items-parent");const s=document.createElement("div");s.classList.add("item-one-shop"),s.append(l("LOOKING 4 EGGS","4 eggs (to choose), 4 breads, 4 drinks","ADD TO CART"));const c=document.createElement("div");c.classList.add("item-two-shop"),c.append(l("FOR SHARE","2 eggs (to choose), 2 breads, 2 drinks","ADD TO CART"));const d=document.createElement("div");function l(n,e,r){const t=document.createElement("div");t.classList.add("option-shop");const o=document.createElement("div");o.innerHTML=n,o.classList.add("options-tittle-shop");const i=document.createElement("div");i.innerHTML=e,i.classList.add("options-description-shop");const a=document.createElement("button");return a.innerHTML=r,a.classList.add("button-shop"),t.append(o,i,a),t}return d.classList.add("item-three-shop"),d.append(l("ÑAM","1 eggs (to choose), 1 breads, 1 drink","ADD TO CART")),a.append(s,c,d),i.appendChild(a),n.append(e,i),n}());const a=document.createElement("img");a.src=o,document.createElement("img").src=i,element.appendChild(a)})()})();