(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(645),a=t.n(r),i=t(667),o=t.n(i),s=t(520),c=t(449),d=t(103),l=a()((function(e){return e[1]})),u=o()(s),p=o()(c),m=o()(d);l.push([e.id,"@font-face {\r\n    font-family: 'Lora', serif;;\r\n    src: url("+u+") format('woff');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n  }\r\n\r\nbody, html{\r\n    width: 100%;\r\n    height:100%;\r\n    padding: 0%;\r\n    margin: 0%;\r\n}\r\n/*For Tabs*/\r\n.tabs-container{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    height: 32px;\r\n    align-items: center;\r\n}\r\n\r\n.home-tab, .menu-tab, .shop-tab, .aboutUs-tab{\r\n    font-family: 'Lora', serif;\r\n    font-size: 17px;\r\n    letter-spacing: 3px;\r\n}\r\n\r\n/*For Home Page (Usar tipografía Pacífico)*/\r\n.home-container{\r\n    height: 100vh;\r\n    min-width: 0;\r\n    display: flex;\r\n}\r\n\r\n.home-right{\r\n    background-color: rgb(255, 182, 7);\r\n    width: 50%;\r\n}\r\n\r\n.home-left{\r\n    background: url("+p+");\r\n    width: 50%;\r\n    background-size: cover;\r\n    background-position-y: 25%;\r\n    background-repeat: no-repeat;  \r\n}\r\n\r\n.home-tittle{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    height: 70%;\r\n    font-size: 135px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home-slogan{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n/*For Menu*/\r\n.menu-container{\r\n    height: 100vh;\r\n    min-width: 0;\r\n    display: flex;\r\n}\r\n\r\n.menu-left{\r\n    background: url("+m+");\r\n    width: 20%;\r\n    background-size: cover;\r\n    background-position-y: 25%;\r\n    background-repeat: no-repeat; \r\n}\r\n\r\n.menu-middle{\r\n    background-color: rgb(255, 182, 7);\r\n    width: 60%;\r\n}\r\n\r\n.menu-right{\r\n    background: url("+m+");\r\n    width: 20%;\r\n    background-size: cover;\r\n    background-position-x: 20%;\r\n    background-repeat: no-repeat; \r\n}\r\n\r\n.menu-starters, .menu-specials, .menu-drinks{\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 23px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu-specials {\r\n    align-items: flex-end;\r\n}\r\n\r\n.txt-starters, .txt-specials, .txt-drinks{\r\n    font-family: 'Lora', serif;\r\n    letter-spacing: 12px;\r\n    width: 100%;\r\n    height: 30px;\r\n    font-size: 35px;\r\n    display: flex;\r\n    font-weight: 600;\r\n    flex-direction: column;\r\n}\r\n\r\n.txt-starters, .txt-drinks{\r\n    justify-content: start;\r\n    margin-left: 15px;\r\n}\r\n\r\n.txt-specials{\r\n    align-items: flex-end;\r\n}\r\n\r\n.txt-starters-menu, .txt-specials-menu, .txt-drinks-menu{\r\n    width: 50%;\r\n}\r\n\r\n.txt-specials-menu{\r\n    align-items: flex-end;\r\n    border-left: 5px black dotted;\r\n}\r\n\r\n.option{\r\n    font-family:'Lora', serif;\r\n}\r\n\r\n.options-tittle{\r\n    width: 100%;\r\n    font-size: 22px;\r\n    letter-spacing: 5px;\r\n    padding-top: 10px;\r\n    margin-left: 15px;\r\n    font-style: italic;\r\n    }\r\n\r\n.options-description{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    font-size: 21px;\r\n    letter-spacing: 1px;\r\n    margin-left: 15px;\r\n}",""]);const f=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,t)=>{var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function o(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],a=0;a<e.length;a++){var s=e[a],c=n.base?s[0]+n.base:s[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=o(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:h(p,n),references:1}),r.push(l)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,a);else{var i=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(e,n){var t,r,a;if(n.singleton){var i=f++;t=m||(m=c(n)),r=u.bind(null,t,i,!1),a=u.bind(null,t,i,!0)}else t=c(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=o(t[r]);i[a].references--}for(var c=s(e,n),d=0;d<t.length;d++){var l=o(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}},520:(e,n,t)=>{e.exports=t.p+"e63d7aee147482093031.woff"},449:(e,n,t)=>{e.exports=t.p+"615112097b69053fb963.jpg"},103:(e,n,t)=>{e.exports=t.p+"e4d8c4d5b9780e989e54.jpg"}},n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var a=t(449);document.getElementById("parent").append(function(){const e=document.createElement("div");e.classList.add("tabs-container");const n=document.createElement("div");n.innerHTML="HOME",n.classList.add("home-tab");const t=document.createElement("div");t.innerHTML="MENU",t.classList.add("menu-tab");const r=document.createElement("div");r.innerHTML="SHOP",r.classList.add("shop-tab");const a=document.createElement("div");return a.innerHTML="ABOUT US",a.classList.add("aboutUs-tab"),e.append(n,t,r,a),e}(),function(){const e=document.createElement("div");e.classList.add("menu-container");const n=document.createElement("div");n.classList.add("menu-left");const t=document.createElement("div");t.classList.add("menu-middle");const r=document.createElement("div");r.classList.add("menu-starters");const a=document.createElement("span");a.innerHTML="[Starters]",a.classList.add("txt-starters");const i=document.createElement("div");i.classList.add("txt-starters-menu"),i.append(m("Eggs Benedict","Toasted French bread, two poached eggs and ham served withour home made Hollandaise sauce. "),m("Country Benedict","Toasted French bread, two poached eggs, sausage patties and our home made Hollandaise sauce"),m("Eggs Blackstone","Toasted French bread, two poached eggs, bacon and our home made Hollandaise sauce")),r.append(a,i);const o=document.createElement("div");o.classList.add("menu-specials");const s=document.createElement("span");s.innerHTML="[Specials]",s.classList.add("txt-specials");const c=document.createElement("div");c.classList.add("txt-specials-menu"),c.append(m("Eggs & Bravas","Two poached eggs over Spanish tapas-style roasted potatoes. Served with buttered toast."),m("Nested Eggs","Two poached eggs nestled in dressed greens with buttered seedy sourdough toast"),m("Eggcellents","House made turkey sausage, in medium egg, cheddar cheese and honey mustard aioli in a house made bailey biscuit")),o.append(s,c);const d=document.createElement("div");d.classList.add("menu-drinks");const l=document.createElement("span");l.innerHTML="[Drinks]",l.classList.add("txt-drinks");const u=document.createElement("div");u.classList.add("txt-drinks-menu"),u.append(m("Juice","Orange, cononut, strawberry or blackberries"),m("House made beer",""),m("Ice green tea","")),d.append(l,u),t.append(r,o,d);const p=document.createElement("div");function m(e,n){const t=document.createElement("div");t.classList.add("option");const r=document.createElement("div");r.innerHTML=e,r.classList.add("options-tittle");const a=document.createElement("div");return a.innerHTML=n,a.classList.add("options-description"),t.append(r,a),t}return p.classList.add("menu-right"),e.append(n,t,p),e}());const i=document.createElement("img");i.src=a,element.appendChild(i)})()})();