!function(n,r){"use strict";var t={};n.PubSub=t;var e=n.define;!function(n){var r={},t=-1;function e(n){var r;for(r in n)if(n.hasOwnProperty(r))return!0;return!1}function o(n,r,t){try{n(r,t)}catch(n){setTimeout(function(n){return function(){throw n}}(n),0)}}function i(n,r,t){n(r,t)}function u(n,t,e,u){var f,s=r[t],c=u?i:o;if(r.hasOwnProperty(t))for(f in s)s.hasOwnProperty(f)&&c(s[f],n,e)}function f(n,t,o,i){var f=function(n,r,t){return function(){var e=String(n),o=e.lastIndexOf(".");for(u(n,n,r,t);-1!==o;)e=e.substr(0,o),o=e.lastIndexOf("."),u(n,e,r,t)}}(n="symbol"==typeof n?n.toString():n,t,i),s=function(n){var t=String(n),o=Boolean(r.hasOwnProperty(t)&&e(r[t])),i=t.lastIndexOf(".");for(;!o&&-1!==i;)t=t.substr(0,i),i=t.lastIndexOf("."),o=Boolean(r.hasOwnProperty(t)&&e(r[t]));return o}(n);return!!s&&(!0===o?f():setTimeout(f,0),!0)}n.publish=function(r,t){return f(r,t,!1,n.immediateExceptions)},n.publishSync=function(r,t){return f(r,t,!0,n.immediateExceptions)},n.subscribe=function(n,e){if("function"!=typeof e)return!1;n="symbol"==typeof n?n.toString():n,r.hasOwnProperty(n)||(r[n]={});var o="uid_"+String(++t);return r[n][o]=e,o},n.subscribeOnce=function(r,t){var e=n.subscribe(r,function(){n.unsubscribe(e),t.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){r={}},n.clearSubscriptions=function(n){var t;for(t in r)r.hasOwnProperty(t)&&0===t.indexOf(n)&&delete r[t]},n.countSubscriptions=function(n){var t,e=0;for(t in r)r.hasOwnProperty(t)&&0===t.indexOf(n)&&e++;return e},n.getSubscriptions=function(n){var t,e=[];for(t in r)r.hasOwnProperty(t)&&0===t.indexOf(n)&&e.push(t);return e},n.unsubscribe=function(t){var e,o,i,u="string"==typeof t&&(r.hasOwnProperty(t)||function(n){var t;for(t in r)if(r.hasOwnProperty(t)&&0===t.indexOf(n))return!0;return!1}(t)),f=!u&&"string"==typeof t,s="function"==typeof t,c=!1;if(!u){for(e in r)if(r.hasOwnProperty(e)){if(o=r[e],f&&o[t]){delete o[t],c=t;break}if(s)for(i in o)o.hasOwnProperty(i)&&o[i]===t&&(delete o[i],c=!0)}return c}n.clearSubscriptions(t)}}(t),"function"==typeof e&&e.amd?e(function(){return t}):"object"==typeof exports&&(void 0!==module&&module.exports&&(exports=module.exports=t),exports.PubSub=t,module.exports=exports=t)}("object"==typeof window&&window||this);