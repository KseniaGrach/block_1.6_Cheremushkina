!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);document.addEventListener("DOMContentLoaded",(function(){var e=!1;function t(){window.innerWidth<=768?e||(e=!0,window.swiper=new Swiper(".swiper",{direction:"horizontal",slidesPerView:"auto",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})):e&&(swiper.forEach((function(e){return e.destroy()})),e=!1)}t(),window.addEventListener("resize",t);for(var n=document.querySelectorAll(".btn--show--hide"),r=0;r<n.length;++r)n[r].addEventListener("click",(function(e){"Показать все"==e.target.textContent?e.target.textContent="Скрыть":e.target.textContent="Показать все",e.currentTarget.classList.toggle("hide");var t=e.target.closest("section").querySelector(".swiper"),n=2*t.querySelector(".swiper-slide").offsetHeight+65;"auto"!=t.style.height?t.style.height="auto":t.style.height="".concat(n,"px")}));var o=document.querySelector(".sidebar"),i=document.querySelectorAll(".sidebar__btn--toggle");for(r=0;r<i.length;++r)i[r].addEventListener("click",(function(){o.classList.contains("is-active")?o.classList.remove("is-active"):o.classList.add("is-active")}));var s=document.querySelector(".modal--mail"),l=document.querySelectorAll(".btn--modal--mail--toggle");for(r=0;r<l.length;++r)l[r].addEventListener("click",(function(){s.classList.contains("is-open")?s.classList.remove("is-open"):s.classList.add("is-open")}));var c=document.querySelector(".modal--tel"),a=document.querySelectorAll(".btn--modal--tel--toggle");for(r=0;r<a.length;++r)a[r].addEventListener("click",(function(){c.classList.contains("is-open")?c.classList.remove("is-open"):c.classList.add("is-open")}))}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map