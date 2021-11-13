(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function h(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:h(a)}}function l(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var m="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n; 
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=n; 
function u(a,b){a.prototype=m(b.prototype);a.prototype.constructor=a;if(t)t(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.o=b.prototype}function v(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}var w=this||self;/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function x(a){x[" "](a);return a}x[" "]=function(){};function y(a){for(var b=w,c=0;b&&40>c++;){var d=!1;try{var e;if(e=!!b&&null!=b.location.href)b:{try{x(b.foo);e=!0;break b}catch(g){}e=!1}d=e}catch(g){d=!1}if(d&&a(b))break;a:{try{var f=b.parent;if(f&&f!=b){b=f;break a}}catch(g){}b=null}}};function z(a){var b=this;this.h=!1;this.g=[];a(function(c){A(b,c)})}function A(a,b){if(!a.h)if(b instanceof z)b.then(function(c){A(a,c)});else{a.h=!0;a.i=b;for(b=0;b<a.g.length;++b)B(a,a.g[b]);a.g=[]}}function B(a,b){a.h?b(a.i):a.g.push(b)}z.prototype.then=function(a){var b=this;return new z(function(c){B(b,function(d){c(a(d))})})};function C(){return new z(function(a){return a(void 0)})};function D(a){if(!a)throw Error("functionToExecute must not be truthy.");};function E(){return/\d+\.\d+\.\d+(-.*)?/.test("1.3.3-google_20200427")}function F(){for(var a=["1","3","3"],b=["1","0","3"],c=0;3>c;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(d>e)break;else if(d<e)return!1}return!0};function G(a,b,c,d){this.h=a;this.method=b;this.version=c;this.g=d}function H(a){return!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&"string"===typeof a.omid_message_guid&&"string"===typeof a.omid_message_method&&"string"===typeof a.omid_message_version&&(void 0===a.omid_message_args||void 0!==a.omid_message_args)}function I(a){return new G(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)} 
function J(a){var b={};b=(b.omid_message_guid=a.h,b.omid_message_method=a.method,b.omid_message_version=a.version,b);void 0!==a.g&&(b.omid_message_args=a.g);return b};function K(a){this.h=a};function L(a,b){return a&&(a[b]||(a[b]={}))};function M(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return"y"===a?(b&3|8).toString(16):b.toString(16)})};function N(){var a=v.apply(0,arguments);O(function(){throw new (Function.prototype.bind.apply(Error,[null,"Could not complete the test successfully - "].concat(a instanceof Array?a:l(k(a)))));},function(){return console.error.apply(console,a instanceof Array?a:l(k(a)))})}function O(a,b){"undefined"!==typeof jasmine&&jasmine?a():"undefined"!==typeof console&&console&&console.error&&b()};var Q=eval("this"),R=function(){if("undefined"!==typeof omidGlobal&&omidGlobal)return omidGlobal;if("undefined"!==typeof global&&global)return global;if("undefined"!==typeof window&&window)return window;if("undefined"!==typeof Q&&Q)return Q;throw Error("Could not determine global object context.");}();function S(a){try{return a.frames?!!a.frames.omid_v1_present:!1}catch(b){return!1}};function T(a){this.h=a;this.handleExportedMessage=T.prototype.i.bind(this)}u(T,K);T.prototype.sendMessage=function(a,b){b=void 0===b?this.h:b;if(!b)throw Error("Message destination must be defined at construction time or when sending the message.");b.handleExportedMessage(J(a),this)};T.prototype.i=function(a,b){H(a)&&this.g&&this.g(I(a),b)};function U(a){return null!=a&&"undefined"!==typeof a.top&&null!=a.top}function aa(a){if(a===R)return!1;try{if("undefined"===typeof a.location.hostname)return!0}catch(b){return!0}return!1};function V(a,b){this.h=b=void 0===b?R:b;var c=this;a.addEventListener("message",function(d){if("object"===typeof d.data){var e=d.data;H(e)&&d.source&&c.g&&c.g(I(e),d.source)}})}u(V,K);V.prototype.sendMessage=function(a,b){b=void 0===b?this.h:b;if(!b)throw Error("Message destination must be defined at construction time or when sending the message.");b.postMessage(J(a),"*")};var ba=["omid","v1_VerificationServiceCommunication"],ca=["omidVerificationProperties","serviceWindow"];function W(a,b){return b.reduce(function(c,d){return c&&c[d]},a)};function X(a){if(!a){var b;"undefined"===typeof b&&"undefined"!==typeof window&&window&&(b=window);b=U(b)?b:R;var c=void 0===c?S:c;a=[];var d=W(b,ca);d&&a.push(d);a.push(U(b)?b.top:R);a:{a=k(a);for(var e=a.next();!e.done;e=a.next()){b:{d=b;e=e.value;var f=c;if(!aa(e))try{var g=W(e,ba);if(g){var P=new T(g);break b}}catch(ka){}P=f(e)?new V(d,e):null}if(d=P){a=d;break a}}a=null}}if(this.g=a)this.g.g=this.l.bind(this);else if(c=(c=R.omid3p)&&"function"===typeof c.registerSessionObserver&&"function"=== 
typeof c.addEventListener?c:null)this.omid3p=c;this.h={};this.i=(c=R.omidVerificationProperties)?c.injectionId:void 0}X.prototype.registerSessionObserver=function(a,b){D(a);this.omid3p?this.omid3p.registerSessionObserver(a,b,this.i):this.j("addSessionListener",a,b,this.i)}; 
X.prototype.addEventListener=function(a,b){if(!a)throw Error("Value for eventType is undefined, null or blank.");if("string"!==typeof a&&!(a instanceof String))throw Error("Value for eventType is not a string.");if(""===a.trim())throw Error("Value for eventType is empty string.");D(b);this.omid3p?this.omid3p.addEventListener(a,b):this.j("addEventListener",b,a)}; 
X.prototype.l=function(a){var b=a.method,c=a.h;a=a.g;if("response"===b&&this.h[c]){var d=E()&&F()?a?a:[]:a&&"string"===typeof a?JSON.parse(a):[];this.h[c].apply(this,d)}"error"===b&&window.console&&N(a)};X.prototype.j=function(a,b){var c=v.apply(2,arguments);if(this.g){var d=M();b&&(this.h[d]=b);c=E()&&F()?c:JSON.stringify(c);this.g.sendMessage(new G(d,"VerificationService."+a,"1.3.3-google_20200427",c))}};var Y=void 0; 
if(Y=void 0===Y?"undefined"===typeof omidExports?null:omidExports:Y){var Z=["OmidVerificationClient"];Z.slice(0,Z.length-1).reduce(L,Y)[Z[Z.length-1]]=X};function da(){var a=null;y(function(b){return(b=b.mraid)&&b.IS_GMA_SDK?(a=b,!0):!1});return a}function ea(){return new z(function(a){w.document.readyState&&"complete"===w.document.readyState?a():w.addEventListener("load",a)})}function fa(){return new z(function(a){var b=da();b&&("loading"===b.getState()?b.addEventListener("ready",function(){a(b)}):a(b))})}function ha(){var a=this.j=new X;this.l=!(!a.g&&!a.omid3p);this.h=null;this.i=this.l?4:1;this.m=this.l;this.g={}} 
function ia(){return new z(function(a){ea().then(function(){fa().then(function(b){function c(d,e){0<e.width&&0<e.height&&(a(),b.removeEventListener("exposureChange",c))}b.addEventListener("exposureChange",c)})})})} 
function ja(a){a.m?(a.h=new z(function(b){var c=new z(function(e){a.j.registerSessionObserver(function(f){"sessionStart"==f.type&&(f=f.data,e("app"==f.context.environment),f.context.omidNativeInfo&&(a.g.sdk=f.context.omidNativeInfo.partnerName))})}),d=new z(function(e){a.j.addEventListener("geometryChange",function(f){f=f.data;var g=f.adView.reasons;if(g=!g||-1==g.indexOf("hidden"))f=f.adView,f=f.onScreenContainerGeometry||f.onScreenGeometry,g=!!(f&&f.width&&f.height);g&&(a.i=3,e())})});c.then(function(e){e? 
(d.then(function(){a.g.src=1;b(a.g)}),ia().then(function(){a.g.src=2;a.i=3;b(a.g)})):(a.i=1,b())})}),a.h.then(function(){a.m=!1})):a.h=C()};window.omrhp=function(a){var b=new ha;b.h||ja(b);b.h.then(a)};}).call(this);
