(function(e){if(typeof define=="function"){define(e)}else{e()}})(function(){function h(e){try{Object.defineProperty(e,"sentinel",{});return"sentinel"in e}catch(t){}}if(!Function.prototype.bind){Function.prototype.bind=function(t){var n=this;if(typeof n!="function"){throw new TypeError}var i=r.call(arguments,1);var s=function(){if(this instanceof s){var e=function(){};e.prototype=n.prototype;var o=new e;var u=n.apply(o,i.concat(r.call(arguments)));if(Object(u)===u){return u}return o}else{return n.apply(t,i.concat(r.call(arguments)))}};return s}}var e=Function.prototype.call;var t=Array.prototype;var n=Object.prototype;var r=t.slice;var i=e.bind(n.toString);var s=e.bind(n.hasOwnProperty);var o;var u;var a;var f;var l;if(l=s(n,"__defineGetter__")){o=e.bind(n.__defineGetter__);u=e.bind(n.__defineSetter__);a=e.bind(n.__lookupGetter__);f=e.bind(n.__lookupSetter__)}if(!Array.isArray){Array.isArray=function(t){return i(t)=="[object Array]"}}if(!Array.prototype.forEach){Array.prototype.forEach=function(t){var n=A(this),r=arguments[1],s=-1,o=n.length>>>0;if(i(t)!="[object Function]"){throw new TypeError}while(++s<o){if(s in n){t.call(r,n[s],s,n)}}}}if(!Array.prototype.map){Array.prototype.map=function(t){var n=A(this),r=n.length>>>0,s=Array(r),o=arguments[1];if(i(t)!="[object Function]"){throw new TypeError}for(var u=0;u<r;u++){if(u in n)s[u]=t.call(o,n[u],u,n)}return s}}if(!Array.prototype.filter){Array.prototype.filter=function(t){var n=A(this),r=n.length>>>0,s=[],o,u=arguments[1];if(i(t)!="[object Function]"){throw new TypeError}for(var a=0;a<r;a++){if(a in n){o=n[a];if(t.call(u,o,a,n)){s.push(o)}}}return s}}if(!Array.prototype.every){Array.prototype.every=function(t){var n=A(this),r=n.length>>>0,s=arguments[1];if(i(t)!="[object Function]"){throw new TypeError}for(var o=0;o<r;o++){if(o in n&&!t.call(s,n[o],o,n)){return false}}return true}}if(!Array.prototype.some){Array.prototype.some=function(t){var n=A(this),r=n.length>>>0,s=arguments[1];if(i(t)!="[object Function]"){throw new TypeError}for(var o=0;o<r;o++){if(o in n&&t.call(s,n[o],o,n)){return true}}return false}}if(!Array.prototype.reduce){Array.prototype.reduce=function(t){var n=A(this),r=n.length>>>0;if(i(t)!="[object Function]"){throw new TypeError}if(!r&&arguments.length==1){throw new TypeError}var s=0;var o;if(arguments.length>=2){o=arguments[1]}else{do{if(s in n){o=n[s++];break}if(++s>=r){throw new TypeError}}while(true)}for(;s<r;s++){if(s in n){o=t.call(void 0,o,n[s],s,n)}}return o}}if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function(t){var n=A(this),r=n.length>>>0;if(i(t)!="[object Function]"){throw new TypeError}if(!r&&arguments.length==1){throw new TypeError}var s,o=r-1;if(arguments.length>=2){s=arguments[1]}else{do{if(o in n){s=n[o--];break}if(--o<0){throw new TypeError}}while(true)}do{if(o in this){s=t.call(void 0,s,n[o],o,n)}}while(o--);return s}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(t){var n=A(this),r=n.length>>>0;if(!r){return-1}var i=0;if(arguments.length>1){i=k(arguments[1])}i=i>=0?i:Math.max(0,r+i);for(;i<r;i++){if(i in n&&n[i]===t){return i}}return-1}}if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(t){var n=A(this),r=n.length>>>0;if(!r){return-1}var i=r-1;if(arguments.length>1){i=Math.min(i,k(arguments[1]))}i=i>=0?i:r-Math.abs(i);for(;i>=0;i--){if(i in n&&t===n[i]){return i}}return-1}}if(!Object.getPrototypeOf){Object.getPrototypeOf=function(t){return t.__proto__||(t.constructor?t.constructor.prototype:n)}}if(!Object.getOwnPropertyDescriptor){var c="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(t,r){if(typeof t!="object"&&typeof t!="function"||t===null){throw new TypeError(c+t)}if(!s(t,r)){return}var i={enumerable:true,configurable:true};if(l){var o=t.__proto__;t.__proto__=n;var u=a(t,r);var h=f(t,r);t.__proto__=o;if(u||h){if(u){i.get=u}if(h){i.set=h}return i}}i.value=t[r];return i}}if(!Object.getOwnPropertyNames){Object.getOwnPropertyNames=function(t){return Object.keys(t)}}if(!Object.create){Object.create=function(t,n){var r;if(t===null){r={__proto__:null}}else{if(typeof t!="object"){throw new TypeError("typeof prototype["+typeof t+"] != 'object'")}var i=function(){};i.prototype=t;r=new i;r.__proto__=t}if(n!==void 0){Object.defineProperties(r,n)}return r}}if(Object.defineProperty){var p=h({});var d=typeof document=="undefined"||h(document.createElement("div"));if(!p||!d){var v=Object.defineProperty}}if(!Object.defineProperty||v){var m="Property description must be an object: ";var g="Object.defineProperty called on non-object: ";var y="getters & setters can not be defined "+"on this javascript engine";Object.defineProperty=function(t,r,i){if(typeof t!="object"&&typeof t!="function"||t===null){throw new TypeError(g+t)}if(typeof i!="object"&&typeof i!="function"||i===null){throw new TypeError(m+i)}if(v){try{return v.call(Object,t,r,i)}catch(c){}}if(s(i,"value")){if(l&&(a(t,r)||f(t,r))){var h=t.__proto__;t.__proto__=n;delete t[r];t[r]=i.value;t.__proto__=h}else{t[r]=i.value}}else{if(!l){throw new TypeError(y)}if(s(i,"get")){o(t,r,i.get)}if(s(i,"set")){u(t,r,i.set)}}return t}}if(!Object.defineProperties){Object.defineProperties=function(t,n){for(var r in n){if(s(n,r)&&r!="__proto__"){Object.defineProperty(t,r,n[r])}}return t}}if(!Object.seal){Object.seal=function(t){return t}}if(!Object.freeze){Object.freeze=function(t){return t}}try{Object.freeze(function(){})}catch(b){Object.freeze=function(t){return function(n){if(typeof n=="function"){return n}else{return t(n)}}}(Object.freeze)}if(!Object.preventExtensions){Object.preventExtensions=function(t){return t}}if(!Object.isSealed){Object.isSealed=function(t){return false}}if(!Object.isFrozen){Object.isFrozen=function(t){return false}}if(!Object.isExtensible){Object.isExtensible=function(t){if(Object(t)===t){throw new TypeError}var n="";while(s(t,n)){n+="?"}t[n]=true;var r=s(t,n);delete t[n];return r}}if(!Object.keys){var w=true,E=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],S=E.length;for(var x in{toString:null}){w=false}Object.keys=function O(e){if(typeof e!="object"&&typeof e!="function"||e===null){throw new TypeError("Object.keys called on a non-object")}var O=[];for(var t in e){if(s(e,t)){O.push(t)}}if(w){for(var n=0,r=S;n<r;n++){var i=E[n];if(s(e,i)){O.push(i)}}}return O}}if(!Date.prototype.toISOString||(new Date(-621987552e5)).toISOString().indexOf("-000001")===-1){Date.prototype.toISOString=function(){var t,n,r,i;if(!isFinite(this)){throw new RangeError}t=[this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];i=this.getUTCFullYear();i=(i<0?"-":i>9999?"+":"")+("00000"+Math.abs(i)).slice(0<=i&&i<=9999?-4:-6);n=t.length;while(n--){r=t[n];if(r<10){t[n]="0"+r}}return i+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}}if(!Date.now){Date.now=function(){return(new Date).getTime()}}if(!Date.prototype.toJSON){Date.prototype.toJSON=function(t){if(typeof this.toISOString!="function"){throw new TypeError}return this.toISOString()}}if(!Date.parse||Date.parse("+275760-09-13T00:00:00.000Z")!==864e13){Date=function(e){var t=function i(t,n,r,s,o,u,a){var f=arguments.length;if(this instanceof e){var l=f==1&&String(t)===t?new e(i.parse(t)):f>=7?new e(t,n,r,s,o,u,a):f>=6?new e(t,n,r,s,o,u):f>=5?new e(t,n,r,s,o):f>=4?new e(t,n,r,s):f>=3?new e(t,n,r):f>=2?new e(t,n):f>=1?new e(t):new e;l.constructor=i;return l}return e.apply(this,arguments)};var n=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:\\.(\\d{3}))?"+")?"+"(?:"+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");for(var r in e){t[r]=e[r]}t.now=e.now;t.UTC=e.UTC;t.prototype=e.prototype;t.prototype.constructor=t;t.parse=function(r){var i=n.exec(r);if(i){i.shift();for(var s=1;s<7;s++){i[s]=+(i[s]||(s<3?1:0));if(s==1){i[s]--}}var o=+i.pop(),u=+i.pop(),a=i.pop();var f=0;if(a){if(u>23||o>59){return NaN}f=(u*60+o)*6e4*(a=="+"?-1:1)}var l=+i[0];if(0<=l&&l<=99){i[0]=l+400;return e.UTC.apply(this,i)+f-126227808e5}return e.UTC.apply(this,i)+f}return e.parse.apply(this,arguments)};return t}(Date)}var T="	\n\f\r   ᠎    "+"         　\u2028"+"\u2029﻿";if(!String.prototype.trim||T.trim()){T="["+T+"]";var N=new RegExp("^"+T+T+"*"),C=new RegExp(T+T+"*$");String.prototype.trim=function(){return String(this).replace(N,"").replace(C,"")}}var k=function(e){e=+e;if(e!==e){e=0}else if(e!==0&&e!==1/0&&e!==-(1/0)){e=(e>0||-1)*Math.floor(Math.abs(e))}return e};var L="a"[0]!="a";var A=function(e){if(e==null){throw new TypeError}if(L&&typeof e=="string"&&e){return e.split("")}return Object(e)}})