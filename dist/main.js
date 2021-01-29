(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>v});var t=e(645),i=e.n(t),o=e(667),a=e.n(o),c=e(520),s=e(856),d=e(449),l=e(103),p=e(987),f=e(762),u=i()((function(n){return n[1]})),h=a()(c),g=a()(s),m=a()(d),b=a()(l),x=a()(p),y=a()(f);u.push([n.id,"@font-face {\r\n    font-family: 'Lora', serif, 'Pacifico', cursive;\r\n    src: url("+h+") format('woff'), url("+g+") format('woff');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n  }\r\n\r\nbody, html{\r\n    width: 100%;\r\n    height:100%;\r\n    padding: 0%;\r\n    margin: 0%;\r\n    overflow-x: hidden;\r\n}\r\n/*For Tabs*/\r\n.tabs-container{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    height: 32px;\r\n    align-items: center;\r\n}\r\n\r\n.home-tab, .menu-tab, .shop-tab, .aboutUs-tab{\r\n    font-family: 'Lora', serif;\r\n    font-size: 17px;\r\n    letter-spacing: 3px;\r\n}\r\n\r\n/*For Home Page (Usar tipografía Pacífico)*/\r\n.home-container{\r\n    height: 100vh;\r\n    min-width: 0;\r\n    display: flex;\r\n}\r\n\r\n.home-right{\r\n    background-color: rgb(255, 182, 7);\r\n    width: 50%;\r\n}\r\n\r\n.home-left{\r\n    background: url("+m+");\r\n    width: 50%;\r\n    background-size: cover;\r\n    background-position-y: 25%;\r\n    background-repeat: no-repeat;  \r\n}\r\n\r\n.home-tittle{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    height: 70%;\r\n    font-size: 135px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home-slogan{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n/*For Menu*/\r\n.menu-container{\r\n    height: 100vh;\r\n    min-width: 0;\r\n    display: flex;\r\n}\r\n\r\n.menu-left{\r\n    background: url("+b+");\r\n    width: 20%;\r\n    background-size: cover;\r\n    background-position-y: 25%;\r\n    background-repeat: no-repeat; \r\n}\r\n\r\n.menu-middle{\r\n    background-color: rgb(255, 182, 7);\r\n    width: 60%;\r\n}\r\n\r\n.menu-right{\r\n    background: url("+b+");\r\n    width: 20%;\r\n    background-size: cover;\r\n    background-position-x: 20%;\r\n    background-repeat: no-repeat; \r\n}\r\n\r\n.menu-starters, .menu-specials, .menu-drinks{\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 23px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu-specials {\r\n    align-items: flex-end;\r\n}\r\n\r\n.txt-starters, .txt-specials, .txt-drinks{\r\n    font-family: 'Lora', serif;\r\n    letter-spacing: 12px;\r\n    width: 100%;\r\n    height: 30px;\r\n    font-size: 35px;\r\n    display: flex;\r\n    font-weight: 600;\r\n    flex-direction: column;\r\n}\r\n\r\n.txt-starters, .txt-drinks{\r\n    justify-content: start;\r\n    margin-left: 15px;\r\n}\r\n\r\n.txt-specials{\r\n    align-items: flex-end;\r\n}\r\n\r\n.txt-starters-menu, .txt-specials-menu, .txt-drinks-menu{\r\n    width: 50%;\r\n}\r\n\r\n.txt-specials-menu{\r\n    align-items: flex-end;\r\n    border-left: 5px black dotted;\r\n}\r\n\r\n.option{\r\n    font-family:'Lora', serif;\r\n}\r\n\r\n.options-tittle{\r\n    width: 100%;\r\n    font-size: 22px;\r\n    letter-spacing: 5px;\r\n    padding-top: 10px;\r\n    margin-left: 15px;\r\n    font-style: italic;\r\n    }\r\n\r\n.options-description{\r\n    font-family: 'Lora', serif;\r\n    width: 100%;\r\n    font-size: 21px;\r\n    letter-spacing: 1px;\r\n    margin-left: 15px;\r\n}\r\n\r\n/*For Shop*/\r\n\r\n.shop-container{\r\nwidth: 100%;\r\nheight: 100vh;\r\n}\r\n\r\n.header-shop{\r\n    width: 100%;\r\n    height: 70%;\r\n    background: url("+x+");\r\n    background-size: cover;\r\n    background-position-y: 87%;\r\n    background-repeat: no-repeat;  \r\n    display: flex;\r\n}\r\n\r\n.icon-container{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.icon-cart-container{\r\n    width: 180px;\r\n    height: 90px;\r\n    border-radius: 0 0 100px 100px;\r\n    background-color: rgb(255, 182, 7);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.icon-cart{\r\n    width: 80px;\r\n    height: 80px;\r\n    position: absolute;\r\n    left: 52px;\r\n    bottom: 6px;\r\n}\r\n\r\n.counter{\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: whitesmoke;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 3px;\r\n    right: 38px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.value-shop{\r\n  font-size: 30px;\r\n}\r\n\r\n.body-shop{\r\n    width: 100%;\r\n    height: 34%;\r\n    background-color: rgb(255, 182, 7);\r\n}\r\n\r\n.shop-tittle{\r\n    font-family: 'Lora', serif;\r\n    width: 29%;\r\n    height: 149%;\r\n    font-size: 135px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 500;\r\n}\r\n\r\n.items-parent{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.item-one-shop, .item-two-shop, .item-three-shop{\r\n    width: 33%;\r\n    height: 80%;\r\n    font-family: 'Lora', serif;\r\n    font-size: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.button-shop{\r\n    width: 150px;\r\n    height: 25px;\r\n    font-family: 'Lora', serif;\r\n    font-size: 15px;\r\n    background-color: transparent;\r\n    letter-spacing: 2px;\r\n    font-weight: 500;\r\n    border:transparent;\r\n    border-left: double 4px black;\r\n    border-right: double 4px black;\r\n\r\n}\r\n\r\n.options-tittle-shop{\r\n    font-size: 20px;\r\n    font-family: 'Lora', serif;\r\n    align-self:center;\r\n    letter-spacing: 4px;\r\n}\r\n\r\n/*For About Us*/\r\n\r\n.about-container{\r\n    width: 100%;\r\n    height: 100vh;\r\n    }\r\n\r\n    .header-about{\r\n        width: 100%;\r\n        height: 30%;\r\n        background-color: rgb(255, 182, 7);\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    \r\n    .body-about{\r\n        width: 100%;\r\n        height: 70%;\r\n        background: url("+y+");\r\n        background-size:cover;\r\n        background-position-y: 85%;\r\n        background-repeat: no-repeat;  \r\n        display: flex;\r\n    }\r\n\r\n    .tittle-about{\r\n        font-family: 'Lora', serif;\r\n        width: 100%;\r\n        height: 30%;\r\n        font-size: 35px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        font-weight: 500; \r\n    }\r\n\r\n    .aboutme{\r\n        font-family: 'Lora', serif;\r\n        width: 100%;\r\n        height: 30%;\r\n        font-size: 30px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        font-weight: 500; \r\n    }\r\n\r\n    .contact-container{\r\n        width: 100%;\r\n        height: 30%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        font-weight: 500; \r\n        font-family: 'Lora', serif;\r\n        font-size: 25px;\r\n        font-weight: 500; \r\n\r\n    }\r\n\r\n    .github-icon, .linkedin-icon{\r\n        width: 50px;\r\n        height: 50px;\r\n        margin: 10px;\r\n    }",""]);const v=u},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,r,e)=>{var t,i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),o=[];function a(n){for(var r=-1,e=0;e<o.length;e++)if(o[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],i=0;i<n.length;i++){var c=n[i],s=r.base?c[0]+r.base:c[0],d=e[s]||0,l="".concat(s," ").concat(d);e[s]=d+1;var p=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(o[p].references++,o[p].updater(f)):o.push({identifier:l,updater:g(f,r),references:1}),t.push(l)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var d,l=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function p(n,r,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function f(n,r,e){var t=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var u=null,h=0;function g(n,r){var e,t,i;if(r.singleton){var o=h++;e=u||(u=s(r)),t=p.bind(null,e,o,!1),i=p.bind(null,e,o,!0)}else e=s(r),t=f.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var i=a(e[t]);o[i].references--}for(var s=c(n,r),d=0;d<e.length;d++){var l=a(e[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}e=s}}}},762:(n,r,e)=>{n.exports=e.p+"532c134a0d5a559fc2bd.jpg"},718:(n,r,e)=>{n.exports=e.p+"5eea8d098341705b9ee7.svg"},520:(n,r,e)=>{n.exports=e.p+"e63d7aee147482093031.woff"},449:(n,r,e)=>{n.exports=e.p+"615112097b69053fb963.jpg"},751:(n,r,e)=>{n.exports=e.p+"f40410445e859153f982.svg"},103:(n,r,e)=>{n.exports=e.p+"e4d8c4d5b9780e989e54.jpg"},652:(n,r,e)=>{n.exports=e.p+"83968b29438774c0e244.svg"},987:(n,r,e)=>{n.exports=e.p+"db28a4c4acfe1373e72b.jpg"},856:(n,r,e)=>{n.exports=e.p+"31d6cfe0d16ae931b73c.woff"},314:(n,r,e)=>{n.exports=e.p+"763ddc74d87be7aa12a1.svg"}},r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),t=e(426);r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var i=e(449);e(652);var o=e(987),a=e(718),c=e(751);e(314);var s=e(762);document.getElementById("parent").append(function(){const n=document.createElement("div");n.classList.add("tabs-container");const r=document.createElement("div");r.innerHTML="HOME",r.classList.add("home-tab");const e=document.createElement("div");e.innerHTML="MENU",e.classList.add("menu-tab");const t=document.createElement("div");t.innerHTML="SHOP",t.classList.add("shop-tab");const i=document.createElement("div");return i.innerHTML="ABOUT US",i.classList.add("aboutUs-tab"),n.append(r,e,t,i),n}(),function(){const n=document.createElement("div");n.classList.add("about-container");const r=document.createElement("div");r.classList.add("header-about");const e=document.createElement("div");e.innerHTML="Made with lots of love (and eggs)",e.classList.add("tittle-about");const t=document.createElement("div");t.innerHTML="Hello, I'm Ana a Frontend Developer",t.classList.add("aboutme");const i=document.createElement("div");i.innerHTML="Contact me at",i.classList.add("contact-container");const o=document.createElement("img");o.src=a,o.classList.add("github-icon"),o.onclick=function(){window.location.href="https://github.com/Ana-Becerril"};const s=document.createElement("img");s.src=c,s.classList.add("linkedin-icon"),s.onclick=function(){window.location.href="https://www.linkedin.com/in/anabecbel/"},i.append(o,s),r.append(e,t,i);const d=document.createElement("div");return d.classList.add("body-about"),n.append(r,d),n}());const d=document.createElement("img");d.src=i,document.createElement("img").src=o,document.createElement("img").src=s,element.appendChild(d)})()})();