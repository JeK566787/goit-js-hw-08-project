!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,m=function(){return s.Date.now()};function y(e,t,n){var r,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function O(e){return l=e,a=setTimeout(w,t),d?y(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function w(){var e=m();if(h(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function S(e){return a=void 0,v&&r?y(e):(r=o=void 0,f)}function T(){var e=m(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return O(c);if(s)return a=setTimeout(w,t),y(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:S(m())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),h="feedback-form-state",w={};!function(){var e=JSON.parse(localStorage.getItem(h));for(var t in e)e.hasOwnProperty(t)&&(O.elements[t].value=e[t])}();O.addEventListener("input",e(t)((function(e){var t=e.target.name,n=e.target.value;w[t]=n,localStorage.setItem(h,JSON.stringify(w))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(h),console.log(w)}))}();
//# sourceMappingURL=03-feedback.81398b9d.js.map
