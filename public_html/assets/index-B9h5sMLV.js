var KI=Object.freeze,JI=Object.defineProperty;var PF=(t,e,n)=>e in t?JI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var DF=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Ac=(t,e,n)=>(PF(t,typeof e!="symbol"?e+"":e,n),n);var Tt=(t,e)=>KI(JI(t,"raw",{value:KI(e||t.slice())}));var wue=DF((Cue,B0)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sk={exports:{}},am={},ak={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh=Symbol.for("react.element"),OF=Symbol.for("react.portal"),MF=Symbol.for("react.fragment"),LF=Symbol.for("react.strict_mode"),FF=Symbol.for("react.profiler"),jF=Symbol.for("react.provider"),UF=Symbol.for("react.context"),WF=Symbol.for("react.forward_ref"),HF=Symbol.for("react.suspense"),GF=Symbol.for("react.memo"),YF=Symbol.for("react.lazy"),QI=Symbol.iterator;function BF(t){return t===null||typeof t!="object"?null:(t=QI&&t[QI]||t["@@iterator"],typeof t=="function"?t:null)}var ok={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uk=Object.assign,lk={};function Kl(t,e,n){this.props=t,this.context=e,this.refs=lk,this.updater=n||ok}Kl.prototype.isReactComponent={};Kl.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Kl.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ck(){}ck.prototype=Kl.prototype;function s_(t,e,n){this.props=t,this.context=e,this.refs=lk,this.updater=n||ok}var a_=s_.prototype=new ck;a_.constructor=s_;uk(a_,Kl.prototype);a_.isPureReactComponent=!0;var XI=Array.isArray,dk=Object.prototype.hasOwnProperty,o_={current:null},hk={key:!0,ref:!0,__self:!0,__source:!0};function fk(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)dk.call(e,r)&&!hk.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wh,type:t,key:s,ref:a,props:i,_owner:o_.current}}function $F(t,e){return{$$typeof:wh,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function u_(t){return typeof t=="object"&&t!==null&&t.$$typeof===wh}function VF(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ZI=/\/+/g;function t1(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VF(""+t.key):e.toString(36)}function _0(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case wh:case OF:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+t1(a,0):r,XI(i)?(n="",t!=null&&(n=t.replace(ZI,"$&/")+"/"),_0(i,e,n,"",function(d){return d})):i!=null&&(u_(i)&&(i=$F(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ZI,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",XI(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+t1(s,l);a+=_0(s,e,n,c,i)}else if(c=BF(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+t1(s,l++),a+=_0(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Gf(t,e,n){if(t==null)return t;var r=[],i=0;return _0(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zF(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fr={current:null},w0={transition:null},qF={ReactCurrentDispatcher:fr,ReactCurrentBatchConfig:w0,ReactCurrentOwner:o_};rt.Children={map:Gf,forEach:function(t,e,n){Gf(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gf(t,function(){e++}),e},toArray:function(t){return Gf(t,function(e){return e})||[]},only:function(t){if(!u_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=Kl;rt.Fragment=MF;rt.Profiler=FF;rt.PureComponent=s_;rt.StrictMode=LF;rt.Suspense=HF;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qF;rt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uk({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=o_.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)dk.call(e,c)&&!hk.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:wh,type:t.type,key:i,ref:s,props:r,_owner:a}};rt.createContext=function(t){return t={$$typeof:UF,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jF,_context:t},t.Consumer=t};rt.createElement=fk;rt.createFactory=function(t){var e=fk.bind(null,t);return e.type=t,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:WF,render:t}};rt.isValidElement=u_;rt.lazy=function(t){return{$$typeof:YF,_payload:{_status:-1,_result:t},_init:zF}};rt.memo=function(t,e){return{$$typeof:GF,type:t,compare:e===void 0?null:e}};rt.startTransition=function(t){var e=w0.transition;w0.transition={};try{t()}finally{w0.transition=e}};rt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};rt.useCallback=function(t,e){return fr.current.useCallback(t,e)};rt.useContext=function(t){return fr.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return fr.current.useDeferredValue(t)};rt.useEffect=function(t,e){return fr.current.useEffect(t,e)};rt.useId=function(){return fr.current.useId()};rt.useImperativeHandle=function(t,e,n){return fr.current.useImperativeHandle(t,e,n)};rt.useInsertionEffect=function(t,e){return fr.current.useInsertionEffect(t,e)};rt.useLayoutEffect=function(t,e){return fr.current.useLayoutEffect(t,e)};rt.useMemo=function(t,e){return fr.current.useMemo(t,e)};rt.useReducer=function(t,e,n){return fr.current.useReducer(t,e,n)};rt.useRef=function(t){return fr.current.useRef(t)};rt.useState=function(t){return fr.current.useState(t)};rt.useSyncExternalStore=function(t,e,n){return fr.current.useSyncExternalStore(t,e,n)};rt.useTransition=function(){return fr.current.useTransition()};rt.version="18.2.0";ak.exports=rt;var Ve=ak.exports;const Le=_h(Ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KF=Ve,JF=Symbol.for("react.element"),QF=Symbol.for("react.fragment"),XF=Object.prototype.hasOwnProperty,ZF=KF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ej={key:!0,ref:!0,__self:!0,__source:!0};function pk(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)XF.call(e,r)&&!ej.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:JF,type:t,key:s,ref:a,props:i,_owner:ZF.current}}am.Fragment=QF;am.jsx=pk;am.jsxs=pk;sk.exports=am;var f=sk.exports,hy={},mk={exports:{}},Zr={},gk={exports:{}},vk={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var z=$.length;$.push(X);e:for(;0<z;){var le=z-1>>>1,G=$[le];if(0<i(G,X))$[le]=X,$[z]=G,z=le;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],z=$.pop();if(z!==X){$[0]=z;e:for(var le=0,G=$.length,Z=G>>>1;le<Z;){var se=2*(le+1)-1,pe=$[se],M=se+1,be=$[M];if(0>i(pe,z))M<G&&0>i(be,pe)?($[le]=be,$[M]=z,le=M):($[le]=pe,$[se]=z,le=se);else if(M<G&&0>i(be,z))$[le]=be,$[M]=z,le=M;else break e}}return X}function i($,X){var z=$.sortIndex-X.sortIndex;return z!==0?z:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],d=[],p=1,g=null,v=3,b=!1,I=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var X=n(d);X!==null;){if(X.callback===null)r(d);else if(X.startTime<=$)r(d),X.sortIndex=X.expirationTime,e(c,X);else break;X=n(d)}}function A($){if(k=!1,E($),!I)if(n(c)!==null)I=!0,xe(L);else{var X=n(d);X!==null&&ke(A,X.startTime-$)}}function L($,X){I=!1,k&&(k=!1,x(Y),Y=-1),b=!0;var z=v;try{for(E(X),g=n(c);g!==null&&(!(g.expirationTime>X)||$&&!O());){var le=g.callback;if(typeof le=="function"){g.callback=null,v=g.priorityLevel;var G=le(g.expirationTime<=X);X=t.unstable_now(),typeof G=="function"?g.callback=G:g===n(c)&&r(c),E(X)}else r(c);g=n(c)}if(g!==null)var Z=!0;else{var se=n(d);se!==null&&ke(A,se.startTime-X),Z=!1}return Z}finally{g=null,v=z,b=!1}}var j=!1,U=null,Y=-1,he=5,ue=-1;function O(){return!(t.unstable_now()-ue<he)}function q(){if(U!==null){var $=t.unstable_now();ue=$;var X=!0;try{X=U(!0,$)}finally{X?te():(j=!1,U=null)}}else j=!1}var te;if(typeof _=="function")te=function(){_(q)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ie=ce.port2;ce.port1.onmessage=q,te=function(){ie.postMessage(null)}}else te=function(){D(q,0)};function xe($){U=$,j||(j=!0,te())}function ke($,X){Y=D(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){I||b||(I=!0,xe(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function($){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var z=v;v=X;try{return $()}finally{v=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var z=v;v=$;try{return X()}finally{v=z}},t.unstable_scheduleCallback=function($,X,z){var le=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?le+z:le):z=le,$){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=z+G,$={id:p++,callback:X,priorityLevel:$,startTime:z,expirationTime:G,sortIndex:-1},z>le?($.sortIndex=z,e(d,$),n(c)===null&&$===n(d)&&(k?(x(Y),Y=-1):k=!0,ke(A,z-le))):($.sortIndex=G,e(c,$),I||b||(I=!0,xe(L))),$},t.unstable_shouldYield=O,t.unstable_wrapCallback=function($){var X=v;return function(){var z=v;v=X;try{return $.apply(this,arguments)}finally{v=z}}}})(vk);gk.exports=vk;var tj=gk.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yk=Ve,Jr=tj;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _k=new Set,Ad={};function wu(t,e){Rl(t,e),Rl(t+"Capture",e)}function Rl(t,e){for(Ad[t]=e,t=0;t<e.length;t++)_k.add(e[t])}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fy=Object.prototype.hasOwnProperty,nj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eE={},tE={};function rj(t){return fy.call(tE,t)?!0:fy.call(eE,t)?!1:nj.test(t)?tE[t]=!0:(eE[t]=!0,!1)}function ij(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sj(t,e,n,r){if(e===null||typeof e>"u"||ij(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pr(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vn[t]=new pr(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vn[e]=new pr(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vn[t]=new pr(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vn[t]=new pr(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vn[t]=new pr(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vn[t]=new pr(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vn[t]=new pr(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vn[t]=new pr(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vn[t]=new pr(t,5,!1,t.toLowerCase(),null,!1,!1)});var l_=/[\-:]([a-z])/g;function c_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(l_,c_);Vn[e]=new pr(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(l_,c_);Vn[e]=new pr(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(l_,c_);Vn[e]=new pr(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vn[t]=new pr(t,1,!1,t.toLowerCase(),null,!1,!1)});Vn.xlinkHref=new pr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vn[t]=new pr(t,1,!1,t.toLowerCase(),null,!0,!0)});function d_(t,e,n,r){var i=Vn.hasOwnProperty(e)?Vn[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sj(e,n,i,r)&&(n=null),r||i===null?rj(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pa=yk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yf=Symbol.for("react.element"),el=Symbol.for("react.portal"),tl=Symbol.for("react.fragment"),h_=Symbol.for("react.strict_mode"),py=Symbol.for("react.profiler"),wk=Symbol.for("react.provider"),bk=Symbol.for("react.context"),f_=Symbol.for("react.forward_ref"),my=Symbol.for("react.suspense"),gy=Symbol.for("react.suspense_list"),p_=Symbol.for("react.memo"),Oa=Symbol.for("react.lazy"),Tk=Symbol.for("react.offscreen"),nE=Symbol.iterator;function Nc(t){return t===null||typeof t!="object"?null:(t=nE&&t[nE]||t["@@iterator"],typeof t=="function"?t:null)}var tn=Object.assign,n1;function nd(t){if(n1===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);n1=e&&e[1]||""}return"\n"+n1+t}var r1=!1;function i1(t,e){if(!t||r1)return"";r1=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split("\n"),s=r.stack.split("\n"),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c="\n"+i[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{r1=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?nd(t):""}function aj(t){switch(t.tag){case 5:return nd(t.type);case 16:return nd("Lazy");case 13:return nd("Suspense");case 19:return nd("SuspenseList");case 0:case 2:case 15:return t=i1(t.type,!1),t;case 11:return t=i1(t.type.render,!1),t;case 1:return t=i1(t.type,!0),t;default:return""}}function vy(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case tl:return"Fragment";case el:return"Portal";case py:return"Profiler";case h_:return"StrictMode";case my:return"Suspense";case gy:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bk:return(t.displayName||"Context")+".Consumer";case wk:return(t._context.displayName||"Context")+".Provider";case f_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case p_:return e=t.displayName||null,e!==null?e:vy(t.type)||"Memo";case Oa:e=t._payload,t=t._init;try{return vy(t(e))}catch{}}return null}function oj(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vy(e);case 8:return e===h_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ao(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ik(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uj(t){var e=Ik(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bf(t){t._valueTracker||(t._valueTracker=uj(t))}function Ek(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ik(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $0(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yy(t,e){var n=e.checked;return tn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function rE(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ao(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xk(t,e){e=e.checked,e!=null&&d_(t,"checked",e,!1)}function _y(t,e){xk(t,e);var n=ao(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wy(t,e.type,n):e.hasOwnProperty("defaultValue")&&wy(t,e.type,ao(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function iE(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wy(t,e,n){(e!=="number"||$0(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var rd=Array.isArray;function gl(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ao(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function by(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return tn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sE(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(rd(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ao(n)}}function Sk(t,e){var n=ao(e.value),r=ao(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function aE(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ck(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ty(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ck(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $f,kk=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($f=$f||document.createElement("div"),$f.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$f.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Nd(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ud={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lj=["Webkit","ms","Moz","O"];Object.keys(ud).forEach(function(t){lj.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ud[e]=ud[t]})});function Ak(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ud.hasOwnProperty(t)&&ud[t]?(""+e).trim():e+"px"}function Nk(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ak(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cj=tn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iy(t,e){if(e){if(cj[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ey(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xy=null;function m_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sy=null,vl=null,yl=null;function oE(t){if(t=Ih(t)){if(typeof Sy!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=dm(e),Sy(t.stateNode,t.type,e))}}function Rk(t){vl?yl?yl.push(t):yl=[t]:vl=t}function Pk(){if(vl){var t=vl,e=yl;if(yl=vl=null,oE(t),e)for(t=0;t<e.length;t++)oE(e[t])}}function Dk(t,e){return t(e)}function Ok(){}var s1=!1;function Mk(t,e,n){if(s1)return t(e,n);s1=!0;try{return Dk(t,e,n)}finally{s1=!1,(vl!==null||yl!==null)&&(Ok(),Pk())}}function Rd(t,e){var n=t.stateNode;if(n===null)return null;var r=dm(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Cy=!1;if(aa)try{var Rc={};Object.defineProperty(Rc,"passive",{get:function(){Cy=!0}}),window.addEventListener("test",Rc,Rc),window.removeEventListener("test",Rc,Rc)}catch{Cy=!1}function dj(t,e,n,r,i,s,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var ld=!1,V0=null,z0=!1,ky=null,hj={onError:function(t){ld=!0,V0=t}};function fj(t,e,n,r,i,s,a,l,c){ld=!1,V0=null,dj.apply(hj,arguments)}function pj(t,e,n,r,i,s,a,l,c){if(fj.apply(this,arguments),ld){if(ld){var d=V0;ld=!1,V0=null}else throw Error(ne(198));z0||(z0=!0,ky=d)}}function bu(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lk(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uE(t){if(bu(t)!==t)throw Error(ne(188))}function mj(t){var e=t.alternate;if(!e){if(e=bu(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return uE(i),t;if(s===r)return uE(i),e;s=s.sibling}throw Error(ne(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==r)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Fk(t){return t=mj(t),t!==null?jk(t):null}function jk(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jk(t);if(e!==null)return e;t=t.sibling}return null}var Uk=Jr.unstable_scheduleCallback,lE=Jr.unstable_cancelCallback,gj=Jr.unstable_shouldYield,vj=Jr.unstable_requestPaint,cn=Jr.unstable_now,yj=Jr.unstable_getCurrentPriorityLevel,g_=Jr.unstable_ImmediatePriority,Wk=Jr.unstable_UserBlockingPriority,q0=Jr.unstable_NormalPriority,_j=Jr.unstable_LowPriority,Hk=Jr.unstable_IdlePriority,om=null,hs=null;function wj(t){if(hs&&typeof hs.onCommitFiberRoot=="function")try{hs.onCommitFiberRoot(om,t,void 0,(t.current.flags&128)===128)}catch{}}var Wi=Math.clz32?Math.clz32:Ij,bj=Math.log,Tj=Math.LN2;function Ij(t){return t>>>=0,t===0?32:31-(bj(t)/Tj|0)|0}var Vf=64,zf=4194304;function id(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function K0(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=id(l):(s&=a,s!==0&&(r=id(s)))}else a=n&~i,a!==0?r=id(a):s!==0&&(r=id(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wi(e),i=1<<n,r|=t[n],e&=~i;return r}function Ej(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xj(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Wi(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Ej(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Ay(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gk(){var t=Vf;return Vf<<=1,!(Vf&4194240)&&(Vf=64),t}function a1(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bh(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wi(e),t[e]=n}function Sj(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wi(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function v_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wi(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Et=0;function Yk(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bk,y_,$k,Vk,zk,Ny=!1,qf=[],Va=null,za=null,qa=null,Pd=new Map,Dd=new Map,La=[],Cj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cE(t,e){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Pd.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dd.delete(e.pointerId)}}function Pc(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ih(e),e!==null&&y_(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kj(t,e,n,r,i){switch(e){case"focusin":return Va=Pc(Va,t,e,n,r,i),!0;case"dragenter":return za=Pc(za,t,e,n,r,i),!0;case"mouseover":return qa=Pc(qa,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pd.set(s,Pc(Pd.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Dd.set(s,Pc(Dd.get(s)||null,t,e,n,r,i)),!0}return!1}function qk(t){var e=Bo(t.target);if(e!==null){var n=bu(e);if(n!==null){if(e=n.tag,e===13){if(e=Lk(n),e!==null){t.blockedOn=e,zk(t.priority,function(){$k(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function b0(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ry(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xy=r,n.target.dispatchEvent(r),xy=null}else return e=Ih(n),e!==null&&y_(e),t.blockedOn=n,!1;e.shift()}return!0}function dE(t,e,n){b0(t)&&n.delete(e)}function Aj(){Ny=!1,Va!==null&&b0(Va)&&(Va=null),za!==null&&b0(za)&&(za=null),qa!==null&&b0(qa)&&(qa=null),Pd.forEach(dE),Dd.forEach(dE)}function Dc(t,e){t.blockedOn===e&&(t.blockedOn=null,Ny||(Ny=!0,Jr.unstable_scheduleCallback(Jr.unstable_NormalPriority,Aj)))}function Od(t){function e(i){return Dc(i,t)}if(0<qf.length){Dc(qf[0],t);for(var n=1;n<qf.length;n++){var r=qf[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Va!==null&&Dc(Va,t),za!==null&&Dc(za,t),qa!==null&&Dc(qa,t),Pd.forEach(e),Dd.forEach(e),n=0;n<La.length;n++)r=La[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<La.length&&(n=La[0],n.blockedOn===null);)qk(n),n.blockedOn===null&&La.shift()}var _l=pa.ReactCurrentBatchConfig,J0=!0;function Nj(t,e,n,r){var i=Et,s=_l.transition;_l.transition=null;try{Et=1,__(t,e,n,r)}finally{Et=i,_l.transition=s}}function Rj(t,e,n,r){var i=Et,s=_l.transition;_l.transition=null;try{Et=4,__(t,e,n,r)}finally{Et=i,_l.transition=s}}function __(t,e,n,r){if(J0){var i=Ry(t,e,n,r);if(i===null)g1(t,e,r,Q0,n),cE(t,r);else if(kj(i,t,e,n,r))r.stopPropagation();else if(cE(t,r),e&4&&-1<Cj.indexOf(t)){for(;i!==null;){var s=Ih(i);if(s!==null&&Bk(s),s=Ry(t,e,n,r),s===null&&g1(t,e,r,Q0,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else g1(t,e,r,null,n)}}var Q0=null;function Ry(t,e,n,r){if(Q0=null,t=m_(r),t=Bo(t),t!==null)if(e=bu(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lk(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Q0=t,null}function Kk(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yj()){case g_:return 1;case Wk:return 4;case q0:case _j:return 16;case Hk:return 536870912;default:return 16}default:return 16}}var ja=null,w_=null,T0=null;function Jk(){if(T0)return T0;var t,e=w_,n=e.length,r,i="value"in ja?ja.value:ja.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return T0=i.slice(t,1<r?1-r:void 0)}function I0(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Kf(){return!0}function hE(){return!1}function ei(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Kf:hE,this.isPropagationStopped=hE,this}return tn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kf)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kf)},persist:function(){},isPersistent:Kf}),e}var Jl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},b_=ei(Jl),Th=tn({},Jl,{view:0,detail:0}),Pj=ei(Th),o1,u1,Oc,um=tn({},Th,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:T_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oc&&(Oc&&t.type==="mousemove"?(o1=t.screenX-Oc.screenX,u1=t.screenY-Oc.screenY):u1=o1=0,Oc=t),o1)},movementY:function(t){return"movementY"in t?t.movementY:u1}}),fE=ei(um),Dj=tn({},um,{dataTransfer:0}),Oj=ei(Dj),Mj=tn({},Th,{relatedTarget:0}),l1=ei(Mj),Lj=tn({},Jl,{animationName:0,elapsedTime:0,pseudoElement:0}),Fj=ei(Lj),jj=tn({},Jl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uj=ei(jj),Wj=tn({},Jl,{data:0}),pE=ei(Wj),Hj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bj(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yj[t])?!!e[t]:!1}function T_(){return Bj}var $j=tn({},Th,{key:function(t){if(t.key){var e=Hj[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=I0(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gj[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:T_,charCode:function(t){return t.type==="keypress"?I0(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?I0(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vj=ei($j),zj=tn({},um,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mE=ei(zj),qj=tn({},Th,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:T_}),Kj=ei(qj),Jj=tn({},Jl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qj=ei(Jj),Xj=tn({},um,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zj=ei(Xj),eU=[9,13,27,32],I_=aa&&"CompositionEvent"in window,cd=null;aa&&"documentMode"in document&&(cd=document.documentMode);var tU=aa&&"TextEvent"in window&&!cd,Qk=aa&&(!I_||cd&&8<cd&&11>=cd),gE=" ",vE=!1;function Xk(t,e){switch(t){case"keyup":return eU.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zk(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nl=!1;function nU(t,e){switch(t){case"compositionend":return Zk(e);case"keypress":return e.which!==32?null:(vE=!0,gE);case"textInput":return t=e.data,t===gE&&vE?null:t;default:return null}}function rU(t,e){if(nl)return t==="compositionend"||!I_&&Xk(t,e)?(t=Jk(),T0=w_=ja=null,nl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qk&&e.locale!=="ko"?null:e.data;default:return null}}var iU={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yE(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iU[t.type]:e==="textarea"}function eA(t,e,n,r){Rk(r),e=X0(e,"onChange"),0<e.length&&(n=new b_("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var dd=null,Md=null;function sU(t){dA(t,0)}function lm(t){var e=sl(t);if(Ek(e))return t}function aU(t,e){if(t==="change")return e}var tA=!1;if(aa){var c1;if(aa){var d1="oninput"in document;if(!d1){var _E=document.createElement("div");_E.setAttribute("oninput","return;"),d1=typeof _E.oninput=="function"}c1=d1}else c1=!1;tA=c1&&(!document.documentMode||9<document.documentMode)}function wE(){dd&&(dd.detachEvent("onpropertychange",nA),Md=dd=null)}function nA(t){if(t.propertyName==="value"&&lm(Md)){var e=[];eA(e,Md,t,m_(t)),Mk(sU,e)}}function oU(t,e,n){t==="focusin"?(wE(),dd=e,Md=n,dd.attachEvent("onpropertychange",nA)):t==="focusout"&&wE()}function uU(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lm(Md)}function lU(t,e){if(t==="click")return lm(e)}function cU(t,e){if(t==="input"||t==="change")return lm(e)}function dU(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yi=typeof Object.is=="function"?Object.is:dU;function Ld(t,e){if(Yi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fy.call(e,i)||!Yi(t[i],e[i]))return!1}return!0}function bE(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function TE(t,e){var n=bE(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bE(n)}}function rA(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rA(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iA(){for(var t=window,e=$0();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$0(t.document)}return e}function E_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hU(t){var e=iA(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rA(n.ownerDocument.documentElement,n)){if(r!==null&&E_(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=TE(n,s);var a=TE(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fU=aa&&"documentMode"in document&&11>=document.documentMode,rl=null,Py=null,hd=null,Dy=!1;function IE(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dy||rl==null||rl!==$0(r)||(r=rl,"selectionStart"in r&&E_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hd&&Ld(hd,r)||(hd=r,r=X0(Py,"onSelect"),0<r.length&&(e=new b_("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rl)))}function Jf(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var il={animationend:Jf("Animation","AnimationEnd"),animationiteration:Jf("Animation","AnimationIteration"),animationstart:Jf("Animation","AnimationStart"),transitionend:Jf("Transition","TransitionEnd")},h1={},sA={};aa&&(sA=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function cm(t){if(h1[t])return h1[t];if(!il[t])return t;var e=il[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sA)return h1[t]=e[n];return t}var aA=cm("animationend"),oA=cm("animationiteration"),uA=cm("animationstart"),lA=cm("transitionend"),cA=new Map,EE="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yo(t,e){cA.set(t,e),wu(e,[t])}for(var f1=0;f1<EE.length;f1++){var p1=EE[f1],pU=p1.toLowerCase(),mU=p1[0].toUpperCase()+p1.slice(1);yo(pU,"on"+mU)}yo(aA,"onAnimationEnd");yo(oA,"onAnimationIteration");yo(uA,"onAnimationStart");yo("dblclick","onDoubleClick");yo("focusin","onFocus");yo("focusout","onBlur");yo(lA,"onTransitionEnd");Rl("onMouseEnter",["mouseout","mouseover"]);Rl("onMouseLeave",["mouseout","mouseover"]);Rl("onPointerEnter",["pointerout","pointerover"]);Rl("onPointerLeave",["pointerout","pointerover"]);wu("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wu("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wu("onBeforeInput",["compositionend","keypress","textInput","paste"]);wu("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wu("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wu("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gU=new Set("cancel close invalid load scroll toggle".split(" ").concat(sd));function xE(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pj(r,e,void 0,t),t.currentTarget=null}function dA(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;xE(i,l,d),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;xE(i,l,d),s=c}}}if(z0)throw t=ky,z0=!1,ky=null,t}function jt(t,e){var n=e[jy];n===void 0&&(n=e[jy]=new Set);var r=t+"__bubble";n.has(r)||(hA(e,t,2,!1),n.add(r))}function m1(t,e,n){var r=0;e&&(r|=4),hA(n,t,r,e)}var Qf="_reactListening"+Math.random().toString(36).slice(2);function Fd(t){if(!t[Qf]){t[Qf]=!0,_k.forEach(function(n){n!=="selectionchange"&&(gU.has(n)||m1(n,!1,t),m1(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qf]||(e[Qf]=!0,m1("selectionchange",!1,e))}}function hA(t,e,n,r){switch(Kk(e)){case 1:var i=Nj;break;case 4:i=Rj;break;default:i=__}n=i.bind(null,e,n,t),i=void 0,!Cy||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function g1(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Bo(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Mk(function(){var d=s,p=m_(n),g=[];e:{var v=cA.get(t);if(v!==void 0){var b=b_,I=t;switch(t){case"keypress":if(I0(n)===0)break e;case"keydown":case"keyup":b=Vj;break;case"focusin":I="focus",b=l1;break;case"focusout":I="blur",b=l1;break;case"beforeblur":case"afterblur":b=l1;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=fE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Oj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Kj;break;case aA:case oA:case uA:b=Fj;break;case lA:b=Qj;break;case"scroll":b=Pj;break;case"wheel":b=Zj;break;case"copy":case"cut":case"paste":b=Uj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=mE}var k=(e&4)!==0,D=!k&&t==="scroll",x=k?v!==null?v+"Capture":null:v;k=[];for(var _=d,E;_!==null;){E=_;var A=E.stateNode;if(E.tag===5&&A!==null&&(E=A,x!==null&&(A=Rd(_,x),A!=null&&k.push(jd(_,A,E)))),D)break;_=_.return}0<k.length&&(v=new b(v,I,null,n,p),g.push({event:v,listeners:k}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",v&&n!==xy&&(I=n.relatedTarget||n.fromElement)&&(Bo(I)||I[oa]))break e;if((b||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,b?(I=n.relatedTarget||n.toElement,b=d,I=I?Bo(I):null,I!==null&&(D=bu(I),I!==D||I.tag!==5&&I.tag!==6)&&(I=null)):(b=null,I=d),b!==I)){if(k=fE,A="onMouseLeave",x="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=mE,A="onPointerLeave",x="onPointerEnter",_="pointer"),D=b==null?v:sl(b),E=I==null?v:sl(I),v=new k(A,_+"leave",b,n,p),v.target=D,v.relatedTarget=E,A=null,Bo(p)===d&&(k=new k(x,_+"enter",I,n,p),k.target=E,k.relatedTarget=D,A=k),D=A,b&&I)t:{for(k=b,x=I,_=0,E=k;E;E=Yu(E))_++;for(E=0,A=x;A;A=Yu(A))E++;for(;0<_-E;)k=Yu(k),_--;for(;0<E-_;)x=Yu(x),E--;for(;_--;){if(k===x||x!==null&&k===x.alternate)break t;k=Yu(k),x=Yu(x)}k=null}else k=null;b!==null&&SE(g,v,b,k,!1),I!==null&&D!==null&&SE(g,D,I,k,!0)}}e:{if(v=d?sl(d):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var L=aU;else if(yE(v))if(tA)L=cU;else{L=uU;var j=oU}else(b=v.nodeName)&&b.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(L=lU);if(L&&(L=L(t,d))){eA(g,L,n,p);break e}j&&j(t,v,d),t==="focusout"&&(j=v._wrapperState)&&j.controlled&&v.type==="number"&&wy(v,"number",v.value)}switch(j=d?sl(d):window,t){case"focusin":(yE(j)||j.contentEditable==="true")&&(rl=j,Py=d,hd=null);break;case"focusout":hd=Py=rl=null;break;case"mousedown":Dy=!0;break;case"contextmenu":case"mouseup":case"dragend":Dy=!1,IE(g,n,p);break;case"selectionchange":if(fU)break;case"keydown":case"keyup":IE(g,n,p)}var U;if(I_)e:{switch(t){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else nl?Xk(t,n)&&(Y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(Y="onCompositionStart");Y&&(Qk&&n.locale!=="ko"&&(nl||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&nl&&(U=Jk()):(ja=p,w_="value"in ja?ja.value:ja.textContent,nl=!0)),j=X0(d,Y),0<j.length&&(Y=new pE(Y,t,null,n,p),g.push({event:Y,listeners:j}),U?Y.data=U:(U=Zk(n),U!==null&&(Y.data=U)))),(U=tU?nU(t,n):rU(t,n))&&(d=X0(d,"onBeforeInput"),0<d.length&&(p=new pE("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=U))}dA(g,e)})}function jd(t,e,n){return{instance:t,listener:e,currentTarget:n}}function X0(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Rd(t,n),s!=null&&r.unshift(jd(t,s,i)),s=Rd(t,e),s!=null&&r.push(jd(t,s,i))),t=t.return}return r}function Yu(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function SE(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=Rd(n,s),c!=null&&a.unshift(jd(n,c,l))):i||(c=Rd(n,s),c!=null&&a.push(jd(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var vU=/\r\n?/g,yU=/\u0000|\uFFFD/g;function CE(t){return(typeof t=="string"?t:""+t).replace(vU,"\n").replace(yU,"")}function Xf(t,e,n){if(e=CE(e),CE(t)!==e&&n)throw Error(ne(425))}function Z0(){}var Oy=null,My=null;function Ly(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fy=typeof setTimeout=="function"?setTimeout:void 0,_U=typeof clearTimeout=="function"?clearTimeout:void 0,kE=typeof Promise=="function"?Promise:void 0,wU=typeof queueMicrotask=="function"?queueMicrotask:typeof kE<"u"?function(t){return kE.resolve(null).then(t).catch(bU)}:Fy;function bU(t){setTimeout(function(){throw t})}function v1(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Od(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Od(e)}function Ka(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function AE(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ql=Math.random().toString(36).slice(2),ns="__reactFiber$"+Ql,Ud="__reactProps$"+Ql,oa="__reactContainer$"+Ql,jy="__reactEvents$"+Ql,TU="__reactListeners$"+Ql,IU="__reactHandles$"+Ql;function Bo(t){var e=t[ns];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oa]||n[ns]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=AE(t);t!==null;){if(n=t[ns])return n;t=AE(t)}return e}t=n,n=t.parentNode}return null}function Ih(t){return t=t[ns]||t[oa],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function sl(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function dm(t){return t[Ud]||null}var Uy=[],al=-1;function _o(t){return{current:t}}function Ut(t){0>al||(t.current=Uy[al],Uy[al]=null,al--)}function Mt(t,e){al++,Uy[al]=t.current,t.current=e}var oo={},rr=_o(oo),Ar=_o(!1),ru=oo;function Pl(t,e){var n=t.type.contextTypes;if(!n)return oo;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nr(t){return t=t.childContextTypes,t!=null}function ep(){Ut(Ar),Ut(rr)}function NE(t,e,n){if(rr.current!==oo)throw Error(ne(168));Mt(rr,e),Mt(Ar,n)}function fA(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(ne(108,oj(t)||"Unknown",i));return tn({},n,r)}function tp(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||oo,ru=rr.current,Mt(rr,t),Mt(Ar,Ar.current),!0}function RE(t,e,n){var r=t.stateNode;if(!r)throw Error(ne(169));n?(t=fA(t,e,ru),r.__reactInternalMemoizedMergedChildContext=t,Ut(Ar),Ut(rr),Mt(rr,t)):Ut(Ar),Mt(Ar,n)}var Ys=null,hm=!1,y1=!1;function pA(t){Ys===null?Ys=[t]:Ys.push(t)}function EU(t){hm=!0,pA(t)}function wo(){if(!y1&&Ys!==null){y1=!0;var t=0,e=Et;try{var n=Ys;for(Et=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ys=null,hm=!1}catch(i){throw Ys!==null&&(Ys=Ys.slice(t+1)),Uk(g_,wo),i}finally{Et=e,y1=!1}}return null}var ol=[],ul=0,np=null,rp=0,hi=[],fi=0,iu=null,$s=1,Vs="";function Fo(t,e){ol[ul++]=rp,ol[ul++]=np,np=t,rp=e}function mA(t,e,n){hi[fi++]=$s,hi[fi++]=Vs,hi[fi++]=iu,iu=t;var r=$s;t=Vs;var i=32-Wi(r)-1;r&=~(1<<i),n+=1;var s=32-Wi(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,$s=1<<32-Wi(e)+i|n<<i|r,Vs=s+t}else $s=1<<s|n<<i|r,Vs=t}function x_(t){t.return!==null&&(Fo(t,1),mA(t,1,0))}function S_(t){for(;t===np;)np=ol[--ul],ol[ul]=null,rp=ol[--ul],ol[ul]=null;for(;t===iu;)iu=hi[--fi],hi[fi]=null,Vs=hi[--fi],hi[fi]=null,$s=hi[--fi],hi[fi]=null}var Kr=null,zr=null,Bt=!1,Li=null;function gA(t,e){var n=vi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function PE(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kr=t,zr=Ka(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kr=t,zr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=iu!==null?{id:$s,overflow:Vs}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kr=t,zr=null,!0):!1;default:return!1}}function Wy(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hy(t){if(Bt){var e=zr;if(e){var n=e;if(!PE(t,e)){if(Wy(t))throw Error(ne(418));e=Ka(n.nextSibling);var r=Kr;e&&PE(t,e)?gA(r,n):(t.flags=t.flags&-4097|2,Bt=!1,Kr=t)}}else{if(Wy(t))throw Error(ne(418));t.flags=t.flags&-4097|2,Bt=!1,Kr=t}}}function DE(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kr=t}function Zf(t){if(t!==Kr)return!1;if(!Bt)return DE(t),Bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ly(t.type,t.memoizedProps)),e&&(e=zr)){if(Wy(t))throw vA(),Error(ne(418));for(;e;)gA(t,e),e=Ka(e.nextSibling)}if(DE(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zr=Ka(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zr=null}}else zr=Kr?Ka(t.stateNode.nextSibling):null;return!0}function vA(){for(var t=zr;t;)t=Ka(t.nextSibling)}function Dl(){zr=Kr=null,Bt=!1}function C_(t){Li===null?Li=[t]:Li.push(t)}var xU=pa.ReactCurrentBatchConfig;function Oi(t,e){if(t&&t.defaultProps){e=tn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ip=_o(null),sp=null,ll=null,k_=null;function A_(){k_=ll=sp=null}function N_(t){var e=ip.current;Ut(ip),t._currentValue=e}function Gy(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function wl(t,e){sp=t,k_=ll=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cr=!0),t.firstContext=null)}function bi(t){var e=t._currentValue;if(k_!==t)if(t={context:t,memoizedValue:e,next:null},ll===null){if(sp===null)throw Error(ne(308));ll=t,sp.dependencies={lanes:0,firstContext:t}}else ll=ll.next=t;return e}var $o=null;function R_(t){$o===null?$o=[t]:$o.push(t)}function yA(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,R_(e)):(n.next=i.next,i.next=n),e.interleaved=n,ua(t,r)}function ua(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ma=!1;function P_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _A(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zs(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ut&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ua(t,n)}return i=r.interleaved,i===null?(e.next=e,R_(r)):(e.next=i.next,i.next=e),r.interleaved=e,ua(t,n)}function E0(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,v_(t,n)}}function OE(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ap(t,e,n,r){var i=t.updateQueue;Ma=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?s=d:a.next=d,a=c;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(s!==null){var g=i.baseState;a=0,p=d=c=null,l=s;do{var v=l.lane,b=l.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,k=l;switch(v=e,b=n,k.tag){case 1:if(I=k.payload,typeof I=="function"){g=I.call(b,g,v);break e}g=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=k.payload,v=typeof I=="function"?I.call(b,g,v):I,v==null)break e;g=tn({},g,v);break e;case 2:Ma=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else b={eventTime:b,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=b,c=g):p=p.next=b,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(p===null&&(c=g),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);au|=a,t.lanes=a,t.memoizedState=g}}function ME(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ne(191,i));i.call(r)}}}var wA=new yk.Component().refs;function Yy(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:tn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fm={isMounted:function(t){return(t=t._reactInternals)?bu(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=hr(),i=Xa(t),s=Zs(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ja(t,s,i),e!==null&&(Hi(e,t,i,r),E0(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=hr(),i=Xa(t),s=Zs(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ja(t,s,i),e!==null&&(Hi(e,t,i,r),E0(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hr(),r=Xa(t),i=Zs(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ja(t,i,r),e!==null&&(Hi(e,t,r,n),E0(e,t,r))}};function LE(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ld(n,r)||!Ld(i,s):!0}function bA(t,e,n){var r=!1,i=oo,s=e.contextType;return typeof s=="object"&&s!==null?s=bi(s):(i=Nr(e)?ru:rr.current,r=e.contextTypes,s=(r=r!=null)?Pl(t,i):oo),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fm,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function FE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fm.enqueueReplaceState(e,e.state,null)}function By(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=wA,P_(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bi(s):(s=Nr(e)?ru:rr.current,i.context=Pl(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yy(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fm.enqueueReplaceState(i,i.state,null),ap(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mc(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var r=n.stateNode}if(!r)throw Error(ne(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;l===wA&&(l=i.refs={}),a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function e0(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jE(t){var e=t._init;return e(t._payload)}function TA(t){function e(x,_){if(t){var E=x.deletions;E===null?(x.deletions=[_],x.flags|=16):E.push(_)}}function n(x,_){if(!t)return null;for(;_!==null;)e(x,_),_=_.sibling;return null}function r(x,_){for(x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function i(x,_){return x=Za(x,_),x.index=0,x.sibling=null,x}function s(x,_,E){return x.index=E,t?(E=x.alternate,E!==null?(E=E.index,E<_?(x.flags|=2,_):E):(x.flags|=2,_)):(x.flags|=1048576,_)}function a(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,_,E,A){return _===null||_.tag!==6?(_=x1(E,x.mode,A),_.return=x,_):(_=i(_,E),_.return=x,_)}function c(x,_,E,A){var L=E.type;return L===tl?p(x,_,E.props.children,A,E.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Oa&&jE(L)===_.type)?(A=i(_,E.props),A.ref=Mc(x,_,E),A.return=x,A):(A=N0(E.type,E.key,E.props,null,x.mode,A),A.ref=Mc(x,_,E),A.return=x,A)}function d(x,_,E,A){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=S1(E,x.mode,A),_.return=x,_):(_=i(_,E.children||[]),_.return=x,_)}function p(x,_,E,A,L){return _===null||_.tag!==7?(_=Qo(E,x.mode,A,L),_.return=x,_):(_=i(_,E),_.return=x,_)}function g(x,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=x1(""+_,x.mode,E),_.return=x,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yf:return E=N0(_.type,_.key,_.props,null,x.mode,E),E.ref=Mc(x,null,_),E.return=x,E;case el:return _=S1(_,x.mode,E),_.return=x,_;case Oa:var A=_._init;return g(x,A(_._payload),E)}if(rd(_)||Nc(_))return _=Qo(_,x.mode,E,null),_.return=x,_;e0(x,_)}return null}function v(x,_,E,A){var L=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return L!==null?null:l(x,_,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Yf:return E.key===L?c(x,_,E,A):null;case el:return E.key===L?d(x,_,E,A):null;case Oa:return L=E._init,v(x,_,L(E._payload),A)}if(rd(E)||Nc(E))return L!==null?null:p(x,_,E,A,null);e0(x,E)}return null}function b(x,_,E,A,L){if(typeof A=="string"&&A!==""||typeof A=="number")return x=x.get(E)||null,l(_,x,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Yf:return x=x.get(A.key===null?E:A.key)||null,c(_,x,A,L);case el:return x=x.get(A.key===null?E:A.key)||null,d(_,x,A,L);case Oa:var j=A._init;return b(x,_,E,j(A._payload),L)}if(rd(A)||Nc(A))return x=x.get(E)||null,p(_,x,A,L,null);e0(_,A)}return null}function I(x,_,E,A){for(var L=null,j=null,U=_,Y=_=0,he=null;U!==null&&Y<E.length;Y++){U.index>Y?(he=U,U=null):he=U.sibling;var ue=v(x,U,E[Y],A);if(ue===null){U===null&&(U=he);break}t&&U&&ue.alternate===null&&e(x,U),_=s(ue,_,Y),j===null?L=ue:j.sibling=ue,j=ue,U=he}if(Y===E.length)return n(x,U),Bt&&Fo(x,Y),L;if(U===null){for(;Y<E.length;Y++)U=g(x,E[Y],A),U!==null&&(_=s(U,_,Y),j===null?L=U:j.sibling=U,j=U);return Bt&&Fo(x,Y),L}for(U=r(x,U);Y<E.length;Y++)he=b(U,x,Y,E[Y],A),he!==null&&(t&&he.alternate!==null&&U.delete(he.key===null?Y:he.key),_=s(he,_,Y),j===null?L=he:j.sibling=he,j=he);return t&&U.forEach(function(O){return e(x,O)}),Bt&&Fo(x,Y),L}function k(x,_,E,A){var L=Nc(E);if(typeof L!="function")throw Error(ne(150));if(E=L.call(E),E==null)throw Error(ne(151));for(var j=L=null,U=_,Y=_=0,he=null,ue=E.next();U!==null&&!ue.done;Y++,ue=E.next()){U.index>Y?(he=U,U=null):he=U.sibling;var O=v(x,U,ue.value,A);if(O===null){U===null&&(U=he);break}t&&U&&O.alternate===null&&e(x,U),_=s(O,_,Y),j===null?L=O:j.sibling=O,j=O,U=he}if(ue.done)return n(x,U),Bt&&Fo(x,Y),L;if(U===null){for(;!ue.done;Y++,ue=E.next())ue=g(x,ue.value,A),ue!==null&&(_=s(ue,_,Y),j===null?L=ue:j.sibling=ue,j=ue);return Bt&&Fo(x,Y),L}for(U=r(x,U);!ue.done;Y++,ue=E.next())ue=b(U,x,Y,ue.value,A),ue!==null&&(t&&ue.alternate!==null&&U.delete(ue.key===null?Y:ue.key),_=s(ue,_,Y),j===null?L=ue:j.sibling=ue,j=ue);return t&&U.forEach(function(q){return e(x,q)}),Bt&&Fo(x,Y),L}function D(x,_,E,A){if(typeof E=="object"&&E!==null&&E.type===tl&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Yf:e:{for(var L=E.key,j=_;j!==null;){if(j.key===L){if(L=E.type,L===tl){if(j.tag===7){n(x,j.sibling),_=i(j,E.props.children),_.return=x,x=_;break e}}else if(j.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Oa&&jE(L)===j.type){n(x,j.sibling),_=i(j,E.props),_.ref=Mc(x,j,E),_.return=x,x=_;break e}n(x,j);break}else e(x,j);j=j.sibling}E.type===tl?(_=Qo(E.props.children,x.mode,A,E.key),_.return=x,x=_):(A=N0(E.type,E.key,E.props,null,x.mode,A),A.ref=Mc(x,_,E),A.return=x,x=A)}return a(x);case el:e:{for(j=E.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(x,_.sibling),_=i(_,E.children||[]),_.return=x,x=_;break e}else{n(x,_);break}else e(x,_);_=_.sibling}_=S1(E,x.mode,A),_.return=x,x=_}return a(x);case Oa:return j=E._init,D(x,_,j(E._payload),A)}if(rd(E))return I(x,_,E,A);if(Nc(E))return k(x,_,E,A);e0(x,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(x,_.sibling),_=i(_,E),_.return=x,x=_):(n(x,_),_=x1(E,x.mode,A),_.return=x,x=_),a(x)):n(x,_)}return D}var Ol=TA(!0),IA=TA(!1),Eh={},fs=_o(Eh),Wd=_o(Eh),Hd=_o(Eh);function Vo(t){if(t===Eh)throw Error(ne(174));return t}function D_(t,e){switch(Mt(Hd,e),Mt(Wd,t),Mt(fs,Eh),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ty(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ty(e,t)}Ut(fs),Mt(fs,e)}function Ml(){Ut(fs),Ut(Wd),Ut(Hd)}function EA(t){Vo(Hd.current);var e=Vo(fs.current),n=Ty(e,t.type);e!==n&&(Mt(Wd,t),Mt(fs,n))}function O_(t){Wd.current===t&&(Ut(fs),Ut(Wd))}var Qt=_o(0);function op(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _1=[];function M_(){for(var t=0;t<_1.length;t++)_1[t]._workInProgressVersionPrimary=null;_1.length=0}var x0=pa.ReactCurrentDispatcher,w1=pa.ReactCurrentBatchConfig,su=0,en=null,bn=null,An=null,up=!1,fd=!1,Gd=0,SU=0;function Xn(){throw Error(ne(321))}function L_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yi(t[n],e[n]))return!1;return!0}function F_(t,e,n,r,i,s){if(su=s,en=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,x0.current=t===null||t.memoizedState===null?NU:RU,t=n(r,i),fd){s=0;do{if(fd=!1,Gd=0,25<=s)throw Error(ne(301));s+=1,An=bn=null,e.updateQueue=null,x0.current=PU,t=n(r,i)}while(fd)}if(x0.current=lp,e=bn!==null&&bn.next!==null,su=0,An=bn=en=null,up=!1,e)throw Error(ne(300));return t}function j_(){var t=Gd!==0;return Gd=0,t}function ts(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?en.memoizedState=An=t:An=An.next=t,An}function Ti(){if(bn===null){var t=en.alternate;t=t!==null?t.memoizedState:null}else t=bn.next;var e=An===null?en.memoizedState:An.next;if(e!==null)An=e,bn=t;else{if(t===null)throw Error(ne(310));bn=t,t={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},An===null?en.memoizedState=An=t:An=An.next=t}return An}function Yd(t,e){return typeof e=="function"?e(t):e}function b1(t){var e=Ti(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var r=bn,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,d=s;do{var p=d.lane;if((su&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=g,a=r):c=c.next=g,en.lanes|=p,au|=p}d=d.next}while(d!==null&&d!==s);c===null?a=r:c.next=l,Yi(r,e.memoizedState)||(Cr=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,en.lanes|=s,au|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function T1(t){var e=Ti(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Yi(s,e.memoizedState)||(Cr=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xA(){}function SA(t,e){var n=en,r=Ti(),i=e(),s=!Yi(r.memoizedState,i);if(s&&(r.memoizedState=i,Cr=!0),r=r.queue,U_(AA.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||An!==null&&An.memoizedState.tag&1){if(n.flags|=2048,Bd(9,kA.bind(null,n,r,i,e),void 0,null),On===null)throw Error(ne(349));su&30||CA(n,e,i)}return i}function CA(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=en.updateQueue,e===null?(e={lastEffect:null,stores:null},en.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kA(t,e,n,r){e.value=n,e.getSnapshot=r,NA(e)&&RA(t)}function AA(t,e,n){return n(function(){NA(e)&&RA(t)})}function NA(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yi(t,n)}catch{return!0}}function RA(t){var e=ua(t,1);e!==null&&Hi(e,t,1,-1)}function UE(t){var e=ts();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yd,lastRenderedState:t},e.queue=t,t=t.dispatch=AU.bind(null,en,t),[e.memoizedState,t]}function Bd(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=en.updateQueue,e===null?(e={lastEffect:null,stores:null},en.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function PA(){return Ti().memoizedState}function S0(t,e,n,r){var i=ts();en.flags|=t,i.memoizedState=Bd(1|e,n,void 0,r===void 0?null:r)}function pm(t,e,n,r){var i=Ti();r=r===void 0?null:r;var s=void 0;if(bn!==null){var a=bn.memoizedState;if(s=a.destroy,r!==null&&L_(r,a.deps)){i.memoizedState=Bd(e,n,s,r);return}}en.flags|=t,i.memoizedState=Bd(1|e,n,s,r)}function WE(t,e){return S0(8390656,8,t,e)}function U_(t,e){return pm(2048,8,t,e)}function DA(t,e){return pm(4,2,t,e)}function OA(t,e){return pm(4,4,t,e)}function MA(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function LA(t,e,n){return n=n!=null?n.concat([t]):null,pm(4,4,MA.bind(null,e,t),n)}function W_(){}function FA(t,e){var n=Ti();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&L_(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jA(t,e){var n=Ti();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&L_(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function UA(t,e,n){return su&21?(Yi(n,e)||(n=Gk(),en.lanes|=n,au|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cr=!0),t.memoizedState=n)}function CU(t,e){var n=Et;Et=n!==0&&4>n?n:4,t(!0);var r=w1.transition;w1.transition={};try{t(!1),e()}finally{Et=n,w1.transition=r}}function WA(){return Ti().memoizedState}function kU(t,e,n){var r=Xa(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},HA(t))GA(e,n);else if(n=yA(t,e,n,r),n!==null){var i=hr();Hi(n,t,r,i),YA(n,e,r)}}function AU(t,e,n){var r=Xa(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(HA(t))GA(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Yi(l,a)){var c=e.interleaved;c===null?(i.next=i,R_(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=yA(t,e,i,r),n!==null&&(i=hr(),Hi(n,t,r,i),YA(n,e,r))}}function HA(t){var e=t.alternate;return t===en||e!==null&&e===en}function GA(t,e){fd=up=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function YA(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,v_(t,n)}}var lp={readContext:bi,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},NU={readContext:bi,useCallback:function(t,e){return ts().memoizedState=[t,e===void 0?null:e],t},useContext:bi,useEffect:WE,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,S0(4194308,4,MA.bind(null,e,t),n)},useLayoutEffect:function(t,e){return S0(4194308,4,t,e)},useInsertionEffect:function(t,e){return S0(4,2,t,e)},useMemo:function(t,e){var n=ts();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ts();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kU.bind(null,en,t),[r.memoizedState,t]},useRef:function(t){var e=ts();return t={current:t},e.memoizedState=t},useState:UE,useDebugValue:W_,useDeferredValue:function(t){return ts().memoizedState=t},useTransition:function(){var t=UE(!1),e=t[0];return t=CU.bind(null,t[1]),ts().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=en,i=ts();if(Bt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),On===null)throw Error(ne(349));su&30||CA(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,WE(AA.bind(null,r,s,t),[t]),r.flags|=2048,Bd(9,kA.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ts(),e=On.identifierPrefix;if(Bt){var n=Vs,r=$s;n=(r&~(1<<32-Wi(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gd++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SU++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RU={readContext:bi,useCallback:FA,useContext:bi,useEffect:U_,useImperativeHandle:LA,useInsertionEffect:DA,useLayoutEffect:OA,useMemo:jA,useReducer:b1,useRef:PA,useState:function(){return b1(Yd)},useDebugValue:W_,useDeferredValue:function(t){var e=Ti();return UA(e,bn.memoizedState,t)},useTransition:function(){var t=b1(Yd)[0],e=Ti().memoizedState;return[t,e]},useMutableSource:xA,useSyncExternalStore:SA,useId:WA,unstable_isNewReconciler:!1},PU={readContext:bi,useCallback:FA,useContext:bi,useEffect:U_,useImperativeHandle:LA,useInsertionEffect:DA,useLayoutEffect:OA,useMemo:jA,useReducer:T1,useRef:PA,useState:function(){return T1(Yd)},useDebugValue:W_,useDeferredValue:function(t){var e=Ti();return bn===null?e.memoizedState=t:UA(e,bn.memoizedState,t)},useTransition:function(){var t=T1(Yd)[0],e=Ti().memoizedState;return[t,e]},useMutableSource:xA,useSyncExternalStore:SA,useId:WA,unstable_isNewReconciler:!1};function Ll(t,e){try{var n="",r=e;do n+=aj(r),r=r.return;while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:t,source:e,stack:i,digest:null}}function I1(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function $y(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DU=typeof WeakMap=="function"?WeakMap:Map;function BA(t,e,n){n=Zs(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dp||(dp=!0,t2=r),$y(t,e)},n}function $A(t,e,n){n=Zs(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$y(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$y(t,e),typeof r!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function HE(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DU;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zU.bind(null,t,e,n),e.then(t,t))}function GE(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function YE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zs(-1,1),e.tag=2,Ja(n,e,1))),n.lanes|=1),t)}var OU=pa.ReactCurrentOwner,Cr=!1;function ur(t,e,n,r){e.child=t===null?IA(e,null,n,r):Ol(e,t.child,n,r)}function BE(t,e,n,r,i){n=n.render;var s=e.ref;return wl(e,i),r=F_(t,e,n,r,s,i),n=j_(),t!==null&&!Cr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,la(t,e,i)):(Bt&&n&&x_(e),e.flags|=1,ur(t,e,r,i),e.child)}function $E(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!q_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,VA(t,e,s,r,i)):(t=N0(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ld,n(a,r)&&t.ref===e.ref)return la(t,e,i)}return e.flags|=1,t=Za(s,r),t.ref=e.ref,t.return=e,e.child=t}function VA(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ld(s,r)&&t.ref===e.ref)if(Cr=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Cr=!0);else return e.lanes=t.lanes,la(t,e,i)}return Vy(t,e,n,r,i)}function zA(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(dl,Gr),Gr|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt(dl,Gr),Gr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Mt(dl,Gr),Gr|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Mt(dl,Gr),Gr|=r;return ur(t,e,i,n),e.child}function qA(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vy(t,e,n,r,i){var s=Nr(n)?ru:rr.current;return s=Pl(e,s),wl(e,i),n=F_(t,e,n,r,s,i),r=j_(),t!==null&&!Cr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,la(t,e,i)):(Bt&&r&&x_(e),e.flags|=1,ur(t,e,n,i),e.child)}function VE(t,e,n,r,i){if(Nr(n)){var s=!0;tp(e)}else s=!1;if(wl(e,i),e.stateNode===null)C0(t,e),bA(e,n,r),By(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=bi(d):(d=Nr(n)?ru:rr.current,d=Pl(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==d)&&FE(e,a,r,d),Ma=!1;var v=e.memoizedState;a.state=v,ap(e,r,a,i),c=e.memoizedState,l!==r||v!==c||Ar.current||Ma?(typeof p=="function"&&(Yy(e,n,p,r),c=e.memoizedState),(l=Ma||LE(e,n,l,r,v,c,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),a.props=r,a.state=c,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,_A(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Oi(e.type,l),a.props=d,g=e.pendingProps,v=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=bi(c):(c=Nr(n)?ru:rr.current,c=Pl(e,c));var b=n.getDerivedStateFromProps;(p=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||v!==c)&&FE(e,a,r,c),Ma=!1,v=e.memoizedState,a.state=v,ap(e,r,a,i);var I=e.memoizedState;l!==g||v!==I||Ar.current||Ma?(typeof b=="function"&&(Yy(e,n,b,r),I=e.memoizedState),(d=Ma||LE(e,n,d,r,v,I,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,I,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,I,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),a.props=r,a.state=I,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return zy(t,e,n,r,s,i)}function zy(t,e,n,r,i,s){qA(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&RE(e,n,!1),la(t,e,s);r=e.stateNode,OU.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Ol(e,t.child,null,s),e.child=Ol(e,null,l,s)):ur(t,e,l,s),e.memoizedState=r.state,i&&RE(e,n,!0),e.child}function KA(t){var e=t.stateNode;e.pendingContext?NE(t,e.pendingContext,e.pendingContext!==e.context):e.context&&NE(t,e.context,!1),D_(t,e.containerInfo)}function zE(t,e,n,r,i){return Dl(),C_(i),e.flags|=256,ur(t,e,n,r),e.child}var qy={dehydrated:null,treeContext:null,retryLane:0};function Ky(t){return{baseLanes:t,cachePool:null,transitions:null}}function JA(t,e,n){var r=e.pendingProps,i=Qt.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Mt(Qt,i&1),t===null)return Hy(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=vm(a,r,0,null),t=Qo(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ky(n),e.memoizedState=qy,t):H_(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return MU(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Za(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Za(l,s):(s=Qo(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Ky(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=qy,r}return s=t.child,t=s.sibling,r=Za(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function H_(t,e){return e=vm({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function t0(t,e,n,r){return r!==null&&C_(r),Ol(e,t.child,null,n),t=H_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MU(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=I1(Error(ne(422))),t0(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vm({mode:"visible",children:r.children},i,0,null),s=Qo(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ol(e,t.child,null,a),e.child.memoizedState=Ky(a),e.memoizedState=qy,s);if(!(e.mode&1))return t0(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ne(419)),r=I1(s,r,void 0),t0(t,e,a,r)}if(l=(a&t.childLanes)!==0,Cr||l){if(r=On,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ua(t,i),Hi(r,t,i,-1))}return z_(),r=I1(Error(ne(421))),t0(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qU.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zr=Ka(i.nextSibling),Kr=e,Bt=!0,Li=null,t!==null&&(hi[fi++]=$s,hi[fi++]=Vs,hi[fi++]=iu,$s=t.id,Vs=t.overflow,iu=e),e=H_(e,r.children),e.flags|=4096,e)}function qE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gy(t.return,e,n)}function E1(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function QA(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ur(t,e,r.children,n),r=Qt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qE(t,n,e);else if(t.tag===19)qE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Mt(Qt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&op(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),E1(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&op(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}E1(e,!0,n,null,s);break;case"together":E1(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function C0(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function la(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),au|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Za(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Za(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function LU(t,e,n){switch(e.tag){case 3:KA(e),Dl();break;case 5:EA(e);break;case 1:Nr(e.type)&&tp(e);break;case 4:D_(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Mt(ip,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Mt(Qt,Qt.current&1),e.flags|=128,null):n&e.child.childLanes?JA(t,e,n):(Mt(Qt,Qt.current&1),t=la(t,e,n),t!==null?t.sibling:null);Mt(Qt,Qt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return QA(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Mt(Qt,Qt.current),r)break;return null;case 22:case 23:return e.lanes=0,zA(t,e,n)}return la(t,e,n)}var XA,Jy,ZA,eN;XA=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jy=function(){};ZA=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vo(fs.current);var s=null;switch(n){case"input":i=yy(t,i),r=yy(t,r),s=[];break;case"select":i=tn({},i,{value:void 0}),r=tn({},r,{value:void 0}),s=[];break;case"textarea":i=by(t,i),r=by(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Z0)}Iy(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ad.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ad.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&jt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};eN=function(t,e,n,r){n!==r&&(e.flags|=4)};function Lc(t,e){if(!Bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Zn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FU(t,e,n){var r=e.pendingProps;switch(S_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(e),null;case 1:return Nr(e.type)&&ep(),Zn(e),null;case 3:return r=e.stateNode,Ml(),Ut(Ar),Ut(rr),M_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zf(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Li!==null&&(i2(Li),Li=null))),Jy(t,e),Zn(e),null;case 5:O_(e);var i=Vo(Hd.current);if(n=e.type,t!==null&&e.stateNode!=null)ZA(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(ne(166));return Zn(e),null}if(t=Vo(fs.current),Zf(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ns]=e,r[Ud]=s,t=(e.mode&1)!==0,n){case"dialog":jt("cancel",r),jt("close",r);break;case"iframe":case"object":case"embed":jt("load",r);break;case"video":case"audio":for(i=0;i<sd.length;i++)jt(sd[i],r);break;case"source":jt("error",r);break;case"img":case"image":case"link":jt("error",r),jt("load",r);break;case"details":jt("toggle",r);break;case"input":rE(r,s),jt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},jt("invalid",r);break;case"textarea":sE(r,s),jt("invalid",r)}Iy(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xf(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xf(r.textContent,l,t),i=["children",""+l]):Ad.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&jt("scroll",r)}switch(n){case"input":Bf(r),iE(r,s,!0);break;case"textarea":Bf(r),aE(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Z0)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ck(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[ns]=e,t[Ud]=r,XA(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ey(n,r),n){case"dialog":jt("cancel",t),jt("close",t),i=r;break;case"iframe":case"object":case"embed":jt("load",t),i=r;break;case"video":case"audio":for(i=0;i<sd.length;i++)jt(sd[i],t);i=r;break;case"source":jt("error",t),i=r;break;case"img":case"image":case"link":jt("error",t),jt("load",t),i=r;break;case"details":jt("toggle",t),i=r;break;case"input":rE(t,r),i=yy(t,r),jt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=tn({},r,{value:void 0}),jt("invalid",t);break;case"textarea":sE(t,r),i=by(t,r),jt("invalid",t);break;default:i=r}Iy(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Nk(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&kk(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Nd(t,c):typeof c=="number"&&Nd(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ad.hasOwnProperty(s)?c!=null&&s==="onScroll"&&jt("scroll",t):c!=null&&d_(t,s,c,a))}switch(n){case"input":Bf(t),iE(t,r,!1);break;case"textarea":Bf(t),aE(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ao(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gl(t,!!r.multiple,s,!1):r.defaultValue!=null&&gl(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Z0)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zn(e),null;case 6:if(t&&e.stateNode!=null)eN(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Vo(Hd.current),Vo(fs.current),Zf(e)){if(r=e.stateNode,n=e.memoizedProps,r[ns]=e,(s=r.nodeValue!==n)&&(t=Kr,t!==null))switch(t.tag){case 3:Xf(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xf(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ns]=e,e.stateNode=r}return Zn(e),null;case 13:if(Ut(Qt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&zr!==null&&e.mode&1&&!(e.flags&128))vA(),Dl(),e.flags|=98560,s=!1;else if(s=Zf(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ns]=e}else Dl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zn(e),s=!1}else Li!==null&&(i2(Li),Li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Qt.current&1?In===0&&(In=3):z_())),e.updateQueue!==null&&(e.flags|=4),Zn(e),null);case 4:return Ml(),Jy(t,e),t===null&&Fd(e.stateNode.containerInfo),Zn(e),null;case 10:return N_(e.type._context),Zn(e),null;case 17:return Nr(e.type)&&ep(),Zn(e),null;case 19:if(Ut(Qt),s=e.memoizedState,s===null)return Zn(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Lc(s,!1);else{if(In!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=op(t),a!==null){for(e.flags|=128,Lc(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Mt(Qt,Qt.current&1|2),e.child}t=t.sibling}s.tail!==null&&cn()>Fl&&(e.flags|=128,r=!0,Lc(s,!1),e.lanes=4194304)}else{if(!r)if(t=op(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lc(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Bt)return Zn(e),null}else 2*cn()-s.renderingStartTime>Fl&&n!==1073741824&&(e.flags|=128,r=!0,Lc(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=cn(),e.sibling=null,n=Qt.current,Mt(Qt,r?n&1|2:n&1),e):(Zn(e),null);case 22:case 23:return V_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Gr&1073741824&&(Zn(e),e.subtreeFlags&6&&(e.flags|=8192)):Zn(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function jU(t,e){switch(S_(e),e.tag){case 1:return Nr(e.type)&&ep(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ml(),Ut(Ar),Ut(rr),M_(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return O_(e),null;case 13:if(Ut(Qt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Dl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ut(Qt),null;case 4:return Ml(),null;case 10:return N_(e.type._context),null;case 22:case 23:return V_(),null;case 24:return null;default:return null}}var n0=!1,er=!1,UU=typeof WeakSet=="function"?WeakSet:Set,ye=null;function cl(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){rn(t,e,r)}else n.current=null}function Qy(t,e,n){try{n()}catch(r){rn(t,e,r)}}var KE=!1;function WU(t,e){if(Oy=J0,t=iA(),E_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,p=0,g=t,v=null;t:for(;;){for(var b;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==s||r!==0&&g.nodeType!==3||(c=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(b=g.firstChild)!==null;)v=g,g=b;for(;;){if(g===t)break t;if(v===n&&++d===i&&(l=a),v===s&&++p===r&&(c=a),(b=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=b}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(My={focusedElem:t,selectionRange:n},J0=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var k=I.memoizedProps,D=I.memoizedState,x=e.stateNode,_=x.getSnapshotBeforeUpdate(e.elementType===e.type?k:Oi(e.type,k),D);x.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(A){rn(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return I=KE,KE=!1,I}function pd(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qy(e,n,s)}i=i.next}while(i!==r)}}function mm(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xy(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tN(t){var e=t.alternate;e!==null&&(t.alternate=null,tN(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ns],delete e[Ud],delete e[jy],delete e[TU],delete e[IU])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nN(t){return t.tag===5||t.tag===3||t.tag===4}function JE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nN(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zy(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Z0));else if(r!==4&&(t=t.child,t!==null))for(Zy(t,e,n),t=t.sibling;t!==null;)Zy(t,e,n),t=t.sibling}function e2(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(e2(t,e,n),t=t.sibling;t!==null;)e2(t,e,n),t=t.sibling}var Gn=null,Mi=!1;function Ra(t,e,n){for(n=n.child;n!==null;)rN(t,e,n),n=n.sibling}function rN(t,e,n){if(hs&&typeof hs.onCommitFiberUnmount=="function")try{hs.onCommitFiberUnmount(om,n)}catch{}switch(n.tag){case 5:er||cl(n,e);case 6:var r=Gn,i=Mi;Gn=null,Ra(t,e,n),Gn=r,Mi=i,Gn!==null&&(Mi?(t=Gn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gn.removeChild(n.stateNode));break;case 18:Gn!==null&&(Mi?(t=Gn,n=n.stateNode,t.nodeType===8?v1(t.parentNode,n):t.nodeType===1&&v1(t,n),Od(t)):v1(Gn,n.stateNode));break;case 4:r=Gn,i=Mi,Gn=n.stateNode.containerInfo,Mi=!0,Ra(t,e,n),Gn=r,Mi=i;break;case 0:case 11:case 14:case 15:if(!er&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qy(n,e,a),i=i.next}while(i!==r)}Ra(t,e,n);break;case 1:if(!er&&(cl(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){rn(n,e,l)}Ra(t,e,n);break;case 21:Ra(t,e,n);break;case 22:n.mode&1?(er=(r=er)||n.memoizedState!==null,Ra(t,e,n),er=r):Ra(t,e,n);break;default:Ra(t,e,n)}}function QE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UU),e.forEach(function(r){var i=KU.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pi(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Gn=l.stateNode,Mi=!1;break e;case 3:Gn=l.stateNode.containerInfo,Mi=!0;break e;case 4:Gn=l.stateNode.containerInfo,Mi=!0;break e}l=l.return}if(Gn===null)throw Error(ne(160));rN(s,a,i),Gn=null,Mi=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){rn(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iN(e,t),e=e.sibling}function iN(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pi(e,t),Zi(t),r&4){try{pd(3,t,t.return),mm(3,t)}catch(k){rn(t,t.return,k)}try{pd(5,t,t.return)}catch(k){rn(t,t.return,k)}}break;case 1:Pi(e,t),Zi(t),r&512&&n!==null&&cl(n,n.return);break;case 5:if(Pi(e,t),Zi(t),r&512&&n!==null&&cl(n,n.return),t.flags&32){var i=t.stateNode;try{Nd(i,"")}catch(k){rn(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&xk(i,s),Ey(l,a);var d=Ey(l,s);for(a=0;a<c.length;a+=2){var p=c[a],g=c[a+1];p==="style"?Nk(i,g):p==="dangerouslySetInnerHTML"?kk(i,g):p==="children"?Nd(i,g):d_(i,p,g,d)}switch(l){case"input":_y(i,s);break;case"textarea":Sk(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?gl(i,!!s.multiple,b,!1):v!==!!s.multiple&&(s.defaultValue!=null?gl(i,!!s.multiple,s.defaultValue,!0):gl(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ud]=s}catch(k){rn(t,t.return,k)}}break;case 6:if(Pi(e,t),Zi(t),r&4){if(t.stateNode===null)throw Error(ne(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){rn(t,t.return,k)}}break;case 3:if(Pi(e,t),Zi(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Od(e.containerInfo)}catch(k){rn(t,t.return,k)}break;case 4:Pi(e,t),Zi(t);break;case 13:Pi(e,t),Zi(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(B_=cn())),r&4&&QE(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(er=(d=er)||p,Pi(e,t),er=d):Pi(e,t),Zi(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(ye=t,p=t.child;p!==null;){for(g=ye=p;ye!==null;){switch(v=ye,b=v.child,v.tag){case 0:case 11:case 14:case 15:pd(4,v,v.return);break;case 1:cl(v,v.return);var I=v.stateNode;if(typeof I.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(k){rn(r,n,k)}}break;case 5:cl(v,v.return);break;case 22:if(v.memoizedState!==null){ZE(g);continue}}b!==null?(b.return=v,ye=b):ZE(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,c=g.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ak("display",a))}catch(k){rn(t,t.return,k)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(k){rn(t,t.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Pi(e,t),Zi(t),r&4&&QE(t);break;case 21:break;default:Pi(e,t),Zi(t)}}function Zi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nN(n)){var r=n;break e}n=n.return}throw Error(ne(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nd(i,""),r.flags&=-33);var s=JE(t);e2(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=JE(t);Zy(t,l,a);break;default:throw Error(ne(161))}}catch(c){rn(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HU(t,e,n){ye=t,sN(t)}function sN(t,e,n){for(var r=(t.mode&1)!==0;ye!==null;){var i=ye,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||n0;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||er;l=n0;var d=er;if(n0=a,(er=c)&&!d)for(ye=i;ye!==null;)a=ye,c=a.child,a.tag===22&&a.memoizedState!==null?ex(i):c!==null?(c.return=a,ye=c):ex(i);for(;s!==null;)ye=s,sN(s),s=s.sibling;ye=i,n0=l,er=d}XE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ye=s):XE(t)}}function XE(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:er||mm(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!er)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Oi(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ME(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ME(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Od(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}er||e.flags&512&&Xy(e)}catch(v){rn(e,e.return,v)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function ZE(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function ex(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mm(4,e)}catch(c){rn(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){rn(e,i,c)}}var s=e.return;try{Xy(e)}catch(c){rn(e,s,c)}break;case 5:var a=e.return;try{Xy(e)}catch(c){rn(e,a,c)}}}catch(c){rn(e,e.return,c)}if(e===t){ye=null;break}var l=e.sibling;if(l!==null){l.return=e.return,ye=l;break}ye=e.return}}var GU=Math.ceil,cp=pa.ReactCurrentDispatcher,G_=pa.ReactCurrentOwner,wi=pa.ReactCurrentBatchConfig,ut=0,On=null,gn=null,Bn=0,Gr=0,dl=_o(0),In=0,$d=null,au=0,gm=0,Y_=0,md=null,Ir=null,B_=0,Fl=1/0,Hs=null,dp=!1,t2=null,Qa=null,r0=!1,Ua=null,hp=0,gd=0,n2=null,k0=-1,A0=0;function hr(){return ut&6?cn():k0!==-1?k0:k0=cn()}function Xa(t){return t.mode&1?ut&2&&Bn!==0?Bn&-Bn:xU.transition!==null?(A0===0&&(A0=Gk()),A0):(t=Et,t!==0||(t=window.event,t=t===void 0?16:Kk(t.type)),t):1}function Hi(t,e,n,r){if(50<gd)throw gd=0,n2=null,Error(ne(185));bh(t,n,r),(!(ut&2)||t!==On)&&(t===On&&(!(ut&2)&&(gm|=n),In===4&&Fa(t,Bn)),Rr(t,r),n===1&&ut===0&&!(e.mode&1)&&(Fl=cn()+500,hm&&wo()))}function Rr(t,e){var n=t.callbackNode;xj(t,e);var r=K0(t,t===On?Bn:0);if(r===0)n!==null&&lE(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lE(n),e===1)t.tag===0?EU(tx.bind(null,t)):pA(tx.bind(null,t)),wU(function(){!(ut&6)&&wo()}),n=null;else{switch(Yk(r)){case 1:n=g_;break;case 4:n=Wk;break;case 16:n=q0;break;case 536870912:n=Hk;break;default:n=q0}n=fN(n,aN.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function aN(t,e){if(k0=-1,A0=0,ut&6)throw Error(ne(327));var n=t.callbackNode;if(bl()&&t.callbackNode!==n)return null;var r=K0(t,t===On?Bn:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fp(t,r);else{e=r;var i=ut;ut|=2;var s=uN();(On!==t||Bn!==e)&&(Hs=null,Fl=cn()+500,Jo(t,e));do try{$U();break}catch(l){oN(t,l)}while(!0);A_(),cp.current=s,ut=i,gn!==null?e=0:(On=null,Bn=0,e=In)}if(e!==0){if(e===2&&(i=Ay(t),i!==0&&(r=i,e=r2(t,i))),e===1)throw n=$d,Jo(t,0),Fa(t,r),Rr(t,cn()),n;if(e===6)Fa(t,r);else{if(i=t.current.alternate,!(r&30)&&!YU(i)&&(e=fp(t,r),e===2&&(s=Ay(t),s!==0&&(r=s,e=r2(t,s))),e===1))throw n=$d,Jo(t,0),Fa(t,r),Rr(t,cn()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(ne(345));case 2:jo(t,Ir,Hs);break;case 3:if(Fa(t,r),(r&130023424)===r&&(e=B_+500-cn(),10<e)){if(K0(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){hr(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fy(jo.bind(null,t,Ir,Hs),e);break}jo(t,Ir,Hs);break;case 4:if(Fa(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Wi(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=cn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GU(r/1960))-r,10<r){t.timeoutHandle=Fy(jo.bind(null,t,Ir,Hs),r);break}jo(t,Ir,Hs);break;case 5:jo(t,Ir,Hs);break;default:throw Error(ne(329))}}}return Rr(t,cn()),t.callbackNode===n?aN.bind(null,t):null}function r2(t,e){var n=md;return t.current.memoizedState.isDehydrated&&(Jo(t,e).flags|=256),t=fp(t,e),t!==2&&(e=Ir,Ir=n,e!==null&&i2(e)),t}function i2(t){Ir===null?Ir=t:Ir.push.apply(Ir,t)}function YU(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yi(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fa(t,e){for(e&=~Y_,e&=~gm,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wi(e),r=1<<n;t[n]=-1,e&=~r}}function tx(t){if(ut&6)throw Error(ne(327));bl();var e=K0(t,0);if(!(e&1))return Rr(t,cn()),null;var n=fp(t,e);if(t.tag!==0&&n===2){var r=Ay(t);r!==0&&(e=r,n=r2(t,r))}if(n===1)throw n=$d,Jo(t,0),Fa(t,e),Rr(t,cn()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jo(t,Ir,Hs),Rr(t,cn()),null}function $_(t,e){var n=ut;ut|=1;try{return t(e)}finally{ut=n,ut===0&&(Fl=cn()+500,hm&&wo())}}function ou(t){Ua!==null&&Ua.tag===0&&!(ut&6)&&bl();var e=ut;ut|=1;var n=wi.transition,r=Et;try{if(wi.transition=null,Et=1,t)return t()}finally{Et=r,wi.transition=n,ut=e,!(ut&6)&&wo()}}function V_(){Gr=dl.current,Ut(dl)}function Jo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_U(n)),gn!==null)for(n=gn.return;n!==null;){var r=n;switch(S_(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ep();break;case 3:Ml(),Ut(Ar),Ut(rr),M_();break;case 5:O_(r);break;case 4:Ml();break;case 13:Ut(Qt);break;case 19:Ut(Qt);break;case 10:N_(r.type._context);break;case 22:case 23:V_()}n=n.return}if(On=t,gn=t=Za(t.current,null),Bn=Gr=e,In=0,$d=null,Y_=gm=au=0,Ir=md=null,$o!==null){for(e=0;e<$o.length;e++)if(n=$o[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}$o=null}return t}function oN(t,e){do{var n=gn;try{if(A_(),x0.current=lp,up){for(var r=en.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}up=!1}if(su=0,An=bn=en=null,fd=!1,Gd=0,G_.current=null,n===null||n.return===null){In=1,$d=e,gn=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Bn,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=GE(a);if(b!==null){b.flags&=-257,YE(b,a,l,s,e),b.mode&1&&HE(s,d,e),e=b,c=d;var I=e.updateQueue;if(I===null){var k=new Set;k.add(c),e.updateQueue=k}else I.add(c);break e}else{if(!(e&1)){HE(s,d,e),z_();break e}c=Error(ne(426))}}else if(Bt&&l.mode&1){var D=GE(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),YE(D,a,l,s,e),C_(Ll(c,l));break e}}s=c=Ll(c,l),In!==4&&(In=2),md===null?md=[s]:md.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=BA(s,c,e);OE(s,x);break e;case 1:l=c;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Qa===null||!Qa.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=$A(s,l,e);OE(s,A);break e}}s=s.return}while(s!==null)}cN(n)}catch(L){e=L,gn===n&&n!==null&&(gn=n=n.return);continue}break}while(!0)}function uN(){var t=cp.current;return cp.current=lp,t===null?lp:t}function z_(){(In===0||In===3||In===2)&&(In=4),On===null||!(au&268435455)&&!(gm&268435455)||Fa(On,Bn)}function fp(t,e){var n=ut;ut|=2;var r=uN();(On!==t||Bn!==e)&&(Hs=null,Jo(t,e));do try{BU();break}catch(i){oN(t,i)}while(!0);if(A_(),ut=n,cp.current=r,gn!==null)throw Error(ne(261));return On=null,Bn=0,In}function BU(){for(;gn!==null;)lN(gn)}function $U(){for(;gn!==null&&!gj();)lN(gn)}function lN(t){var e=hN(t.alternate,t,Gr);t.memoizedProps=t.pendingProps,e===null?cN(t):gn=e,G_.current=null}function cN(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jU(n,e),n!==null){n.flags&=32767,gn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{In=6,gn=null;return}}else if(n=FU(n,e,Gr),n!==null){gn=n;return}if(e=e.sibling,e!==null){gn=e;return}gn=e=t}while(e!==null);In===0&&(In=5)}function jo(t,e,n){var r=Et,i=wi.transition;try{wi.transition=null,Et=1,VU(t,e,n,r)}finally{wi.transition=i,Et=r}return null}function VU(t,e,n,r){do bl();while(Ua!==null);if(ut&6)throw Error(ne(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sj(t,s),t===On&&(gn=On=null,Bn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||r0||(r0=!0,fN(q0,function(){return bl(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wi.transition,wi.transition=null;var a=Et;Et=1;var l=ut;ut|=4,G_.current=null,WU(t,n),iN(n,t),hU(My),J0=!!Oy,My=Oy=null,t.current=n,HU(n),vj(),ut=l,Et=a,wi.transition=s}else t.current=n;if(r0&&(r0=!1,Ua=t,hp=i),s=t.pendingLanes,s===0&&(Qa=null),wj(n.stateNode),Rr(t,cn()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dp)throw dp=!1,t=t2,t2=null,t;return hp&1&&t.tag!==0&&bl(),s=t.pendingLanes,s&1?t===n2?gd++:(gd=0,n2=t):gd=0,wo(),null}function bl(){if(Ua!==null){var t=Yk(hp),e=wi.transition,n=Et;try{if(wi.transition=null,Et=16>t?16:t,Ua===null)var r=!1;else{if(t=Ua,Ua=null,hp=0,ut&6)throw Error(ne(331));var i=ut;for(ut|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(ye=d;ye!==null;){var p=ye;switch(p.tag){case 0:case 11:case 15:pd(8,p,s)}var g=p.child;if(g!==null)g.return=p,ye=g;else for(;ye!==null;){p=ye;var v=p.sibling,b=p.return;if(tN(p),p===d){ye=null;break}if(v!==null){v.return=b,ye=v;break}ye=b}}}var I=s.alternate;if(I!==null){var k=I.child;if(k!==null){I.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pd(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,ye=x;break e}ye=s.return}}var _=t.current;for(ye=_;ye!==null;){a=ye;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,ye=E;else e:for(a=_;ye!==null;){if(l=ye,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:mm(9,l)}}catch(L){rn(l,l.return,L)}if(l===a){ye=null;break e}var A=l.sibling;if(A!==null){A.return=l.return,ye=A;break e}ye=l.return}}if(ut=i,wo(),hs&&typeof hs.onPostCommitFiberRoot=="function")try{hs.onPostCommitFiberRoot(om,t)}catch{}r=!0}return r}finally{Et=n,wi.transition=e}}return!1}function nx(t,e,n){e=Ll(n,e),e=BA(t,e,1),t=Ja(t,e,1),e=hr(),t!==null&&(bh(t,1,e),Rr(t,e))}function rn(t,e,n){if(t.tag===3)nx(t,t,n);else for(;e!==null;){if(e.tag===3){nx(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qa===null||!Qa.has(r))){t=Ll(n,t),t=$A(e,t,1),e=Ja(e,t,1),t=hr(),e!==null&&(bh(e,1,t),Rr(e,t));break}}e=e.return}}function zU(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=hr(),t.pingedLanes|=t.suspendedLanes&n,On===t&&(Bn&n)===n&&(In===4||In===3&&(Bn&130023424)===Bn&&500>cn()-B_?Jo(t,0):Y_|=n),Rr(t,e)}function dN(t,e){e===0&&(t.mode&1?(e=zf,zf<<=1,!(zf&130023424)&&(zf=4194304)):e=1);var n=hr();t=ua(t,e),t!==null&&(bh(t,e,n),Rr(t,n))}function qU(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dN(t,n)}function KU(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(ne(314))}r!==null&&r.delete(e),dN(t,n)}var hN;hN=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ar.current)Cr=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cr=!1,LU(t,e,n);Cr=!!(t.flags&131072)}else Cr=!1,Bt&&e.flags&1048576&&mA(e,rp,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;C0(t,e),t=e.pendingProps;var i=Pl(e,rr.current);wl(e,n),i=F_(null,e,r,t,i,n);var s=j_();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nr(r)?(s=!0,tp(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,P_(e),i.updater=fm,e.stateNode=i,i._reactInternals=e,By(e,r,t,n),e=zy(null,e,r,!0,s,n)):(e.tag=0,Bt&&s&&x_(e),ur(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(C0(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QU(r),t=Oi(r,t),i){case 0:e=Vy(null,e,r,t,n);break e;case 1:e=VE(null,e,r,t,n);break e;case 11:e=BE(null,e,r,t,n);break e;case 14:e=$E(null,e,r,Oi(r.type,t),n);break e}throw Error(ne(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Oi(r,i),Vy(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Oi(r,i),VE(t,e,r,i,n);case 3:e:{if(KA(e),t===null)throw Error(ne(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_A(t,e),ap(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ll(Error(ne(423)),e),e=zE(t,e,r,n,i);break e}else if(r!==i){i=Ll(Error(ne(424)),e),e=zE(t,e,r,n,i);break e}else for(zr=Ka(e.stateNode.containerInfo.firstChild),Kr=e,Bt=!0,Li=null,n=IA(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dl(),r===i){e=la(t,e,n);break e}ur(t,e,r,n)}e=e.child}return e;case 5:return EA(e),t===null&&Hy(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,Ly(r,i)?a=null:s!==null&&Ly(r,s)&&(e.flags|=32),qA(t,e),ur(t,e,a,n),e.child;case 6:return t===null&&Hy(e),null;case 13:return JA(t,e,n);case 4:return D_(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ol(e,null,r,n):ur(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Oi(r,i),BE(t,e,r,i,n);case 7:return ur(t,e,e.pendingProps,n),e.child;case 8:return ur(t,e,e.pendingProps.children,n),e.child;case 12:return ur(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,Mt(ip,r._currentValue),r._currentValue=a,s!==null)if(Yi(s.value,a)){if(s.children===i.children&&!Ar.current){e=la(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Zs(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Gy(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Gy(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ur(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,wl(e,n),i=bi(i),r=r(i),e.flags|=1,ur(t,e,r,n),e.child;case 14:return r=e.type,i=Oi(r,e.pendingProps),i=Oi(r.type,i),$E(t,e,r,i,n);case 15:return VA(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Oi(r,i),C0(t,e),e.tag=1,Nr(r)?(t=!0,tp(e)):t=!1,wl(e,n),bA(e,r,i),By(e,r,i,n),zy(null,e,r,!0,t,n);case 19:return QA(t,e,n);case 22:return zA(t,e,n)}throw Error(ne(156,e.tag))};function fN(t,e){return Uk(t,e)}function JU(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(t,e,n,r){return new JU(t,e,n,r)}function q_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QU(t){if(typeof t=="function")return q_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===f_)return 11;if(t===p_)return 14}return 2}function Za(t,e){var n=t.alternate;return n===null?(n=vi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function N0(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")q_(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case tl:return Qo(n.children,i,s,e);case h_:a=8,i|=8;break;case py:return t=vi(12,n,e,i|2),t.elementType=py,t.lanes=s,t;case my:return t=vi(13,n,e,i),t.elementType=my,t.lanes=s,t;case gy:return t=vi(19,n,e,i),t.elementType=gy,t.lanes=s,t;case Tk:return vm(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wk:a=10;break e;case bk:a=9;break e;case f_:a=11;break e;case p_:a=14;break e;case Oa:a=16,r=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=vi(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qo(t,e,n,r){return t=vi(7,t,r,e),t.lanes=n,t}function vm(t,e,n,r){return t=vi(22,t,r,e),t.elementType=Tk,t.lanes=n,t.stateNode={isHidden:!1},t}function x1(t,e,n){return t=vi(6,t,null,e),t.lanes=n,t}function S1(t,e,n){return e=vi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XU(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=a1(0),this.expirationTimes=a1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=a1(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function K_(t,e,n,r,i,s,a,l,c){return t=new XU(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},P_(s),t}function ZU(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:el,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pN(t){if(!t)return oo;t=t._reactInternals;e:{if(bu(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Nr(n))return fA(t,n,e)}return e}function mN(t,e,n,r,i,s,a,l,c){return t=K_(n,r,!0,t,i,s,a,l,c),t.context=pN(null),n=t.current,r=hr(),i=Xa(n),s=Zs(r,i),s.callback=e!=null?e:null,Ja(n,s,i),t.current.lanes=i,bh(t,i,r),Rr(t,r),t}function ym(t,e,n,r){var i=e.current,s=hr(),a=Xa(i);return n=pN(n),e.context===null?e.context=n:e.pendingContext=n,e=Zs(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ja(i,e,a),t!==null&&(Hi(t,i,a,s),E0(t,i,a)),a}function pp(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rx(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function J_(t,e){rx(t,e),(t=t.alternate)&&rx(t,e)}function eW(){return null}var gN=typeof reportError=="function"?reportError:function(t){console.error(t)};function Q_(t){this._internalRoot=t}_m.prototype.render=Q_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));ym(t,e,null,null)};_m.prototype.unmount=Q_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ou(function(){ym(null,t,null,null)}),e[oa]=null}};function _m(t){this._internalRoot=t}_m.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vk();t={blockedOn:null,target:t,priority:e};for(var n=0;n<La.length&&e!==0&&e<La[n].priority;n++);La.splice(n,0,t),n===0&&qk(t)}};function X_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ix(){}function tW(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=pp(a);s.call(d)}}var a=mN(e,r,t,0,null,!1,!1,"",ix);return t._reactRootContainer=a,t[oa]=a.current,Fd(t.nodeType===8?t.parentNode:t),ou(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=pp(c);l.call(d)}}var c=K_(t,0,!1,null,null,!1,!1,"",ix);return t._reactRootContainer=c,t[oa]=c.current,Fd(t.nodeType===8?t.parentNode:t),ou(function(){ym(e,c,n,r)}),c}function bm(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=pp(a);l.call(c)}}ym(e,a,t,i)}else a=tW(n,e,t,i,r);return pp(a)}Bk=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=id(e.pendingLanes);n!==0&&(v_(e,n|1),Rr(e,cn()),!(ut&6)&&(Fl=cn()+500,wo()))}break;case 13:ou(function(){var r=ua(t,1);if(r!==null){var i=hr();Hi(r,t,1,i)}}),J_(t,1)}};y_=function(t){if(t.tag===13){var e=ua(t,134217728);if(e!==null){var n=hr();Hi(e,t,134217728,n)}J_(t,134217728)}};$k=function(t){if(t.tag===13){var e=Xa(t),n=ua(t,e);if(n!==null){var r=hr();Hi(n,t,e,r)}J_(t,e)}};Vk=function(){return Et};zk=function(t,e){var n=Et;try{return Et=t,e()}finally{Et=n}};Sy=function(t,e,n){switch(e){case"input":if(_y(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dm(r);if(!i)throw Error(ne(90));Ek(r),_y(r,i)}}}break;case"textarea":Sk(t,n);break;case"select":e=n.value,e!=null&&gl(t,!!n.multiple,e,!1)}};Dk=$_;Ok=ou;var nW={usingClientEntryPoint:!1,Events:[Ih,sl,dm,Rk,Pk,$_]},Fc={findFiberByHostInstance:Bo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rW={bundleType:Fc.bundleType,version:Fc.version,rendererPackageName:Fc.rendererPackageName,rendererConfig:Fc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pa.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fk(t),t===null?null:t.stateNode},findFiberByHostInstance:Fc.findFiberByHostInstance||eW,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var i0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!i0.isDisabled&&i0.supportsFiber)try{om=i0.inject(rW),hs=i0}catch{}}Zr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nW;Zr.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!X_(e))throw Error(ne(200));return ZU(t,e,null,n)};Zr.createRoot=function(t,e){if(!X_(t))throw Error(ne(299));var n=!1,r="",i=gN;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=K_(t,1,!1,null,null,n,!1,r,i),t[oa]=e.current,Fd(t.nodeType===8?t.parentNode:t),new Q_(e)};Zr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Fk(e),t=t===null?null:t.stateNode,t};Zr.flushSync=function(t){return ou(t)};Zr.hydrate=function(t,e,n){if(!wm(e))throw Error(ne(200));return bm(null,t,e,!0,n)};Zr.hydrateRoot=function(t,e,n){if(!X_(t))throw Error(ne(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=gN;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=mN(e,null,t,1,n!=null?n:null,i,!1,s,a),t[oa]=e.current,Fd(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _m(e)};Zr.render=function(t,e,n){if(!wm(e))throw Error(ne(200));return bm(null,t,e,!1,n)};Zr.unmountComponentAtNode=function(t){if(!wm(t))throw Error(ne(40));return t._reactRootContainer?(ou(function(){bm(null,null,t,!1,function(){t._reactRootContainer=null,t[oa]=null})}),!0):!1};Zr.unstable_batchedUpdates=$_;Zr.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wm(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return bm(t,e,n,!1,r)};Zr.version="18.2.0-next-9e3b772b8-20220608";function vN(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vN)}catch(t){console.error(t)}}vN(),mk.exports=Zr;var iW=mk.exports,sx=iW;hy.createRoot=sx.createRoot,hy.hydrateRoot=sx.hydrateRoot;//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var yN;function J(){return yN.apply(null,arguments)}function sW(t){yN=t}function Bi(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function Xo(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Z_(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var e;for(e in t)if(ft(t,e))return!1;return!0}function _r(t){return t===void 0}function ca(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function xh(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function _N(t,e){var n=[],r,i=t.length;for(r=0;r<i;++r)n.push(e(t[r],r));return n}function Wa(t,e){for(var n in e)ft(e,n)&&(t[n]=e[n]);return ft(e,"toString")&&(t.toString=e.toString),ft(e,"valueOf")&&(t.valueOf=e.valueOf),t}function Es(t,e,n,r){return GN(t,e,n,r,!0).utc()}function aW(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Ge(t){return t._pf==null&&(t._pf=aW()),t._pf}var s2;Array.prototype.some?s2=Array.prototype.some:s2=function(t){var e=Object(this),n=e.length>>>0,r;for(r=0;r<n;r++)if(r in e&&t.call(this,e[r],r,e))return!0;return!1};function ew(t){var e=null,n=!1,r=t._d&&!isNaN(t._d.getTime());if(r&&(e=Ge(t),n=s2.call(e.parsedDateParts,function(i){return i!=null}),r=e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n),t._strict&&(r=r&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=r;else return r;return t._isValid}function Tm(t){var e=Es(NaN);return t!=null?Wa(Ge(e),t):Ge(e).userInvalidated=!0,e}var ax=J.momentProperties=[],C1=!1;function tw(t,e){var n,r,i,s=ax.length;if(_r(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),_r(e._i)||(t._i=e._i),_r(e._f)||(t._f=e._f),_r(e._l)||(t._l=e._l),_r(e._strict)||(t._strict=e._strict),_r(e._tzm)||(t._tzm=e._tzm),_r(e._isUTC)||(t._isUTC=e._isUTC),_r(e._offset)||(t._offset=e._offset),_r(e._pf)||(t._pf=Ge(e)),_r(e._locale)||(t._locale=e._locale),s>0)for(n=0;n<s;n++)r=ax[n],i=e[r],_r(i)||(t[r]=i);return t}function Sh(t){tw(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),C1===!1&&(C1=!0,J.updateOffset(this),C1=!1)}function $i(t){return t instanceof Sh||t!=null&&t._isAMomentObject!=null}function wN(t){J.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function Ei(t,e){var n=!0;return Wa(function(){if(J.deprecationHandler!=null&&J.deprecationHandler(null,t),n){var r=[],i,s,a,l=arguments.length;for(s=0;s<l;s++){if(i="",typeof arguments[s]=="object"){i+="\n["+s+"] ";for(a in arguments[0])ft(arguments[0],a)&&(i+=a+": "+arguments[0][a]+", ");i=i.slice(0,-2)}else i=arguments[s];r.push(i)}wN(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+new Error().stack),n=!1}return e.apply(this,arguments)},e)}var ox={};function bN(t,e){J.deprecationHandler!=null&&J.deprecationHandler(t,e),ox[t]||(wN(e),ox[t]=!0)}J.suppressDeprecationWarnings=!1;J.deprecationHandler=null;function xs(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function oW(t){var e,n;for(n in t)ft(t,n)&&(e=t[n],xs(e)?this[n]=e:this["_"+n]=e);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function a2(t,e){var n=Wa({},t),r;for(r in e)ft(e,r)&&(Xo(t[r])&&Xo(e[r])?(n[r]={},Wa(n[r],t[r]),Wa(n[r],e[r])):e[r]!=null?n[r]=e[r]:delete n[r]);for(r in t)ft(t,r)&&!ft(e,r)&&Xo(t[r])&&(n[r]=Wa({},n[r]));return n}function nw(t){t!=null&&this.set(t)}var o2;Object.keys?o2=Object.keys:o2=function(t){var e,n=[];for(e in t)ft(t,e)&&n.push(e);return n};var uW={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function lW(t,e,n){var r=this._calendar[t]||this._calendar.sameElse;return xs(r)?r.call(e,n):r}function vs(t,e,n){var r=""+Math.abs(t),i=e-r.length,s=t>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var rw=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,s0=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,k1={},Tl={};function Ie(t,e,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),t&&(Tl[t]=i),e&&(Tl[e[0]]=function(){return vs(i.apply(this,arguments),e[1],e[2])}),n&&(Tl[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),t)})}function cW(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function dW(t){var e=t.match(rw),n,r;for(n=0,r=e.length;n<r;n++)Tl[e[n]]?e[n]=Tl[e[n]]:e[n]=cW(e[n]);return function(i){var s="",a;for(a=0;a<r;a++)s+=xs(e[a])?e[a].call(i,t):e[a];return s}}function R0(t,e){return t.isValid()?(e=TN(e,t.localeData()),k1[e]=k1[e]||dW(e),k1[e](t)):t.localeData().invalidDate()}function TN(t,e){var n=5;function r(i){return e.longDateFormat(i)||i}for(s0.lastIndex=0;n>=0&&s0.test(t);)t=t.replace(s0,r),s0.lastIndex=0,n-=1;return t}var hW={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function fW(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.match(rw).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[t])}var pW="Invalid date";function mW(){return this._invalidDate}var gW="%d",vW=/\d{1,2}/;function yW(t){return this._ordinal.replace("%d",t)}var _W={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function wW(t,e,n,r){var i=this._relativeTime[n];return xs(i)?i(t,e,n,r):i.replace(/%d/i,t)}function bW(t,e){var n=this._relativeTime[t>0?"future":"past"];return xs(n)?n(e):n.replace(/%s/i,e)}var ux={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function xi(t){return typeof t=="string"?ux[t]||ux[t.toLowerCase()]:void 0}function iw(t){var e={},n,r;for(r in t)ft(t,r)&&(n=xi(r),n&&(e[n]=t[r]));return e}var TW={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function IW(t){var e=[],n;for(n in t)ft(t,n)&&e.push({unit:n,priority:TW[n]});return e.sort(function(r,i){return r.priority-i.priority}),e}var IN=/\d/,ti=/\d\d/,EN=/\d{3}/,sw=/\d{4}/,Im=/[+-]?\d{6}/,Ht=/\d\d?/,xN=/\d\d\d\d?/,SN=/\d\d\d\d\d\d?/,Em=/\d{1,3}/,aw=/\d{1,4}/,xm=/[+-]?\d{1,6}/,Xl=/\d+/,Sm=/[+-]?\d+/,EW=/Z|[+-]\d\d:?\d\d/gi,Cm=/Z|[+-]\d\d(?::?\d\d)?/gi,xW=/[+-]?\d+(\.\d{1,3})?/,Ch=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Zl=/^[1-9]\d?/,ow=/^([1-9]\d|\d)/,mp;mp={};function ve(t,e,n){mp[t]=xs(e)?e:function(r,i){return r&&n?n:e}}function SW(t,e){return ft(mp,t)?mp[t](e._strict,e._locale):new RegExp(CW(t))}function CW(t){return ea(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,n,r,i,s){return n||r||i||s}))}function ea(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function pi(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function nt(t){var e=+t,n=0;return e!==0&&isFinite(e)&&(n=pi(e)),n}var u2={};function kt(t,e){var n,r=e,i;for(typeof t=="string"&&(t=[t]),ca(e)&&(r=function(s,a){a[e]=nt(s)}),i=t.length,n=0;n<i;n++)u2[t[n]]=r}function kh(t,e){kt(t,function(n,r,i,s){i._w=i._w||{},e(n,i._w,i,s)})}function kW(t,e,n){e!=null&&ft(u2,t)&&u2[t](e,n._a,n,t)}function km(t){return t%4===0&&t%100!==0||t%400===0}var tr=0,zs=1,rs=2,En=3,ji=4,qs=5,zo=6,AW=7,NW=8;Ie("Y",0,0,function(){var t=this.year();return t<=9999?vs(t,4):"+"+t});Ie(0,["YY",2],0,function(){return this.year()%100});Ie(0,["YYYY",4],0,"year");Ie(0,["YYYYY",5],0,"year");Ie(0,["YYYYYY",6,!0],0,"year");ve("Y",Sm);ve("YY",Ht,ti);ve("YYYY",aw,sw);ve("YYYYY",xm,Im);ve("YYYYYY",xm,Im);kt(["YYYYY","YYYYYY"],tr);kt("YYYY",function(t,e){e[tr]=t.length===2?J.parseTwoDigitYear(t):nt(t)});kt("YY",function(t,e){e[tr]=J.parseTwoDigitYear(t)});kt("Y",function(t,e){e[tr]=parseInt(t,10)});function vd(t){return km(t)?366:365}J.parseTwoDigitYear=function(t){return nt(t)+(nt(t)>68?1900:2e3)};var CN=ec("FullYear",!0);function RW(){return km(this.year())}function ec(t,e){return function(n){return n!=null?(kN(this,t,n),J.updateOffset(this,e),this):Vd(this,t)}}function Vd(t,e){if(!t.isValid())return NaN;var n=t._d,r=t._isUTC;switch(e){case"Milliseconds":return r?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return r?n.getUTCSeconds():n.getSeconds();case"Minutes":return r?n.getUTCMinutes():n.getMinutes();case"Hours":return r?n.getUTCHours():n.getHours();case"Date":return r?n.getUTCDate():n.getDate();case"Day":return r?n.getUTCDay():n.getDay();case"Month":return r?n.getUTCMonth():n.getMonth();case"FullYear":return r?n.getUTCFullYear():n.getFullYear();default:return NaN}}function kN(t,e,n){var r,i,s,a,l;if(!(!t.isValid()||isNaN(n))){switch(r=t._d,i=t._isUTC,e){case"Milliseconds":return void(i?r.setUTCMilliseconds(n):r.setMilliseconds(n));case"Seconds":return void(i?r.setUTCSeconds(n):r.setSeconds(n));case"Minutes":return void(i?r.setUTCMinutes(n):r.setMinutes(n));case"Hours":return void(i?r.setUTCHours(n):r.setHours(n));case"Date":return void(i?r.setUTCDate(n):r.setDate(n));case"FullYear":break;default:return}s=n,a=t.month(),l=t.date(),l=l===29&&a===1&&!km(s)?28:l,i?r.setUTCFullYear(s,a,l):r.setFullYear(s,a,l)}}function PW(t){return t=xi(t),xs(this[t])?this[t]():this}function DW(t,e){if(typeof t=="object"){t=iw(t);var n=IW(t),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](t[n[r].unit])}else if(t=xi(t),xs(this[t]))return this[t](e);return this}function OW(t,e){return(t%e+e)%e}var ln;Array.prototype.indexOf?ln=Array.prototype.indexOf:ln=function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};function uw(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=OW(e,12);return t+=(e-n)/12,n===1?km(t)?29:28:31-n%7%2}Ie("M",["MM",2],"Mo",function(){return this.month()+1});Ie("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});Ie("MMMM",0,0,function(t){return this.localeData().months(this,t)});ve("M",Ht,Zl);ve("MM",Ht,ti);ve("MMM",function(t,e){return e.monthsShortRegex(t)});ve("MMMM",function(t,e){return e.monthsRegex(t)});kt(["M","MM"],function(t,e){e[zs]=nt(t)-1});kt(["MMM","MMMM"],function(t,e,n,r){var i=n._locale.monthsParse(t,r,n._strict);i!=null?e[zs]=i:Ge(n).invalidMonth=t});var MW="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),AN="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),NN=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,LW=Ch,FW=Ch;function jW(t,e){return t?Bi(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||NN).test(e)?"format":"standalone"][t.month()]:Bi(this._months)?this._months:this._months.standalone}function UW(t,e){return t?Bi(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[NN.test(e)?"format":"standalone"][t.month()]:Bi(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function WW(t,e,n){var r,i,s,a=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=Es([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?e==="MMM"?(i=ln.call(this._shortMonthsParse,a),i!==-1?i:null):(i=ln.call(this._longMonthsParse,a),i!==-1?i:null):e==="MMM"?(i=ln.call(this._shortMonthsParse,a),i!==-1?i:(i=ln.call(this._longMonthsParse,a),i!==-1?i:null)):(i=ln.call(this._longMonthsParse,a),i!==-1?i:(i=ln.call(this._shortMonthsParse,a),i!==-1?i:null))}function HW(t,e,n){var r,i,s;if(this._monthsParseExact)return WW.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=Es([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&e==="MMMM"&&this._longMonthsParse[r].test(t))return r;if(n&&e==="MMM"&&this._shortMonthsParse[r].test(t))return r;if(!n&&this._monthsParse[r].test(t))return r}}function RN(t,e){if(!t.isValid())return t;if(typeof e=="string"){if(/^\d+$/.test(e))e=nt(e);else if(e=t.localeData().monthsParse(e),!ca(e))return t}var n=e,r=t.date();return r=r<29?r:Math.min(r,uw(t.year(),n)),t._isUTC?t._d.setUTCMonth(n,r):t._d.setMonth(n,r),t}function PN(t){return t!=null?(RN(this,t),J.updateOffset(this,!0),this):Vd(this,"Month")}function GW(){return uw(this.year(),this.month())}function YW(t){return this._monthsParseExact?(ft(this,"_monthsRegex")||DN.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(ft(this,"_monthsShortRegex")||(this._monthsShortRegex=LW),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function BW(t){return this._monthsParseExact?(ft(this,"_monthsRegex")||DN.call(this),t?this._monthsStrictRegex:this._monthsRegex):(ft(this,"_monthsRegex")||(this._monthsRegex=FW),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function DN(){function t(c,d){return d.length-c.length}var e=[],n=[],r=[],i,s,a,l;for(i=0;i<12;i++)s=Es([2e3,i]),a=ea(this.monthsShort(s,"")),l=ea(this.months(s,"")),e.push(a),n.push(l),r.push(l),r.push(a);e.sort(t),n.sort(t),r.sort(t),this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}function $W(t,e,n,r,i,s,a){var l;return t<100&&t>=0?(l=new Date(t+400,e,n,r,i,s,a),isFinite(l.getFullYear())&&l.setFullYear(t)):l=new Date(t,e,n,r,i,s,a),l}function zd(t){var e,n;return t<100&&t>=0?(n=Array.prototype.slice.call(arguments),n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC.apply(null,arguments)),e}function gp(t,e,n){var r=7+e-n,i=(7+zd(t,0,r).getUTCDay()-e)%7;return-i+r-1}function ON(t,e,n,r,i){var s=(7+n-r)%7,a=gp(t,r,i),l=1+7*(e-1)+s+a,c,d;return l<=0?(c=t-1,d=vd(c)+l):l>vd(t)?(c=t+1,d=l-vd(t)):(c=t,d=l),{year:c,dayOfYear:d}}function qd(t,e,n){var r=gp(t.year(),e,n),i=Math.floor((t.dayOfYear()-r-1)/7)+1,s,a;return i<1?(a=t.year()-1,s=i+ta(a,e,n)):i>ta(t.year(),e,n)?(s=i-ta(t.year(),e,n),a=t.year()+1):(a=t.year(),s=i),{week:s,year:a}}function ta(t,e,n){var r=gp(t,e,n),i=gp(t+1,e,n);return(vd(t)-r+i)/7}Ie("w",["ww",2],"wo","week");Ie("W",["WW",2],"Wo","isoWeek");ve("w",Ht,Zl);ve("ww",Ht,ti);ve("W",Ht,Zl);ve("WW",Ht,ti);kh(["w","ww","W","WW"],function(t,e,n,r){e[r.substr(0,1)]=nt(t)});function VW(t){return qd(t,this._week.dow,this._week.doy).week}var zW={dow:0,doy:6};function qW(){return this._week.dow}function KW(){return this._week.doy}function JW(t){var e=this.localeData().week(this);return t==null?e:this.add((t-e)*7,"d")}function QW(t){var e=qd(this,1,4).week;return t==null?e:this.add((t-e)*7,"d")}Ie("d",0,"do","day");Ie("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});Ie("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});Ie("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});Ie("e",0,0,"weekday");Ie("E",0,0,"isoWeekday");ve("d",Ht);ve("e",Ht);ve("E",Ht);ve("dd",function(t,e){return e.weekdaysMinRegex(t)});ve("ddd",function(t,e){return e.weekdaysShortRegex(t)});ve("dddd",function(t,e){return e.weekdaysRegex(t)});kh(["dd","ddd","dddd"],function(t,e,n,r){var i=n._locale.weekdaysParse(t,r,n._strict);i!=null?e.d=i:Ge(n).invalidWeekday=t});kh(["d","e","E"],function(t,e,n,r){e[r]=nt(t)});function XW(t,e){return typeof t!="string"?t:isNaN(t)?(t=e.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function ZW(t,e){return typeof t=="string"?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function lw(t,e){return t.slice(e,7).concat(t.slice(0,e))}var eH="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),MN="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),tH="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),nH=Ch,rH=Ch,iH=Ch;function sH(t,e){var n=Bi(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return t===!0?lw(n,this._week.dow):t?n[t.day()]:n}function aH(t){return t===!0?lw(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function oH(t){return t===!0?lw(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function uH(t,e,n){var r,i,s,a=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=Es([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?e==="dddd"?(i=ln.call(this._weekdaysParse,a),i!==-1?i:null):e==="ddd"?(i=ln.call(this._shortWeekdaysParse,a),i!==-1?i:null):(i=ln.call(this._minWeekdaysParse,a),i!==-1?i:null):e==="dddd"?(i=ln.call(this._weekdaysParse,a),i!==-1||(i=ln.call(this._shortWeekdaysParse,a),i!==-1)?i:(i=ln.call(this._minWeekdaysParse,a),i!==-1?i:null)):e==="ddd"?(i=ln.call(this._shortWeekdaysParse,a),i!==-1||(i=ln.call(this._weekdaysParse,a),i!==-1)?i:(i=ln.call(this._minWeekdaysParse,a),i!==-1?i:null)):(i=ln.call(this._minWeekdaysParse,a),i!==-1||(i=ln.call(this._weekdaysParse,a),i!==-1)?i:(i=ln.call(this._shortWeekdaysParse,a),i!==-1?i:null))}function lH(t,e,n){var r,i,s;if(this._weekdaysParseExact)return uH.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=Es([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&e==="dddd"&&this._fullWeekdaysParse[r].test(t))return r;if(n&&e==="ddd"&&this._shortWeekdaysParse[r].test(t))return r;if(n&&e==="dd"&&this._minWeekdaysParse[r].test(t))return r;if(!n&&this._weekdaysParse[r].test(t))return r}}function cH(t){if(!this.isValid())return t!=null?this:NaN;var e=Vd(this,"Day");return t!=null?(t=XW(t,this.localeData()),this.add(t-e,"d")):e}function dH(t){if(!this.isValid())return t!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return t==null?e:this.add(t-e,"d")}function hH(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var e=ZW(t,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function fH(t){return this._weekdaysParseExact?(ft(this,"_weekdaysRegex")||cw.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(ft(this,"_weekdaysRegex")||(this._weekdaysRegex=nH),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function pH(t){return this._weekdaysParseExact?(ft(this,"_weekdaysRegex")||cw.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(ft(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=rH),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function mH(t){return this._weekdaysParseExact?(ft(this,"_weekdaysRegex")||cw.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(ft(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=iH),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function cw(){function t(p,g){return g.length-p.length}var e=[],n=[],r=[],i=[],s,a,l,c,d;for(s=0;s<7;s++)a=Es([2e3,1]).day(s),l=ea(this.weekdaysMin(a,"")),c=ea(this.weekdaysShort(a,"")),d=ea(this.weekdays(a,"")),e.push(l),n.push(c),r.push(d),i.push(l),i.push(c),i.push(d);e.sort(t),n.sort(t),r.sort(t),i.sort(t),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function dw(){return this.hours()%12||12}function gH(){return this.hours()||24}Ie("H",["HH",2],0,"hour");Ie("h",["hh",2],0,dw);Ie("k",["kk",2],0,gH);Ie("hmm",0,0,function(){return""+dw.apply(this)+vs(this.minutes(),2)});Ie("hmmss",0,0,function(){return""+dw.apply(this)+vs(this.minutes(),2)+vs(this.seconds(),2)});Ie("Hmm",0,0,function(){return""+this.hours()+vs(this.minutes(),2)});Ie("Hmmss",0,0,function(){return""+this.hours()+vs(this.minutes(),2)+vs(this.seconds(),2)});function LN(t,e){Ie(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}LN("a",!0);LN("A",!1);function FN(t,e){return e._meridiemParse}ve("a",FN);ve("A",FN);ve("H",Ht,ow);ve("h",Ht,Zl);ve("k",Ht,Zl);ve("HH",Ht,ti);ve("hh",Ht,ti);ve("kk",Ht,ti);ve("hmm",xN);ve("hmmss",SN);ve("Hmm",xN);ve("Hmmss",SN);kt(["H","HH"],En);kt(["k","kk"],function(t,e,n){var r=nt(t);e[En]=r===24?0:r});kt(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t});kt(["h","hh"],function(t,e,n){e[En]=nt(t),Ge(n).bigHour=!0});kt("hmm",function(t,e,n){var r=t.length-2;e[En]=nt(t.substr(0,r)),e[ji]=nt(t.substr(r)),Ge(n).bigHour=!0});kt("hmmss",function(t,e,n){var r=t.length-4,i=t.length-2;e[En]=nt(t.substr(0,r)),e[ji]=nt(t.substr(r,2)),e[qs]=nt(t.substr(i)),Ge(n).bigHour=!0});kt("Hmm",function(t,e,n){var r=t.length-2;e[En]=nt(t.substr(0,r)),e[ji]=nt(t.substr(r))});kt("Hmmss",function(t,e,n){var r=t.length-4,i=t.length-2;e[En]=nt(t.substr(0,r)),e[ji]=nt(t.substr(r,2)),e[qs]=nt(t.substr(i))});function vH(t){return(t+"").toLowerCase().charAt(0)==="p"}var yH=/[ap]\.?m?\.?/i,_H=ec("Hours",!0);function wH(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}var jN={calendar:uW,longDateFormat:hW,invalidDate:pW,ordinal:gW,dayOfMonthOrdinalParse:vW,relativeTime:_W,months:MW,monthsShort:AN,week:zW,weekdays:eH,weekdaysMin:tH,weekdaysShort:MN,meridiemParse:yH},Yt={},jc={},Kd;function bH(t,e){var n,r=Math.min(t.length,e.length);for(n=0;n<r;n+=1)if(t[n]!==e[n])return n;return r}function lx(t){return t&&t.toLowerCase().replace("_","-")}function TH(t){for(var e=0,n,r,i,s;e<t.length;){for(s=lx(t[e]).split("-"),n=s.length,r=lx(t[e+1]),r=r?r.split("-"):null;n>0;){if(i=Am(s.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&bH(s,r)>=n-1)break;n--}e++}return Kd}function IH(t){return!!(t&&t.match("^[^/\\\\]*$"))}function Am(t){var e=null,n;if(Yt[t]===void 0&&typeof B0<"u"&&B0&&B0.exports&&IH(t))try{e=Kd._abbr,n=require,n("./locale/"+t),eo(e)}catch{Yt[t]=null}return Yt[t]}function eo(t,e){var n;return t&&(_r(e)?n=ma(t):n=hw(t,e),n?Kd=n:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),Kd._abbr}function hw(t,e){if(e!==null){var n,r=jN;if(e.abbr=t,Yt[t]!=null)bN("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=Yt[t]._config;else if(e.parentLocale!=null)if(Yt[e.parentLocale]!=null)r=Yt[e.parentLocale]._config;else if(n=Am(e.parentLocale),n!=null)r=n._config;else return jc[e.parentLocale]||(jc[e.parentLocale]=[]),jc[e.parentLocale].push({name:t,config:e}),null;return Yt[t]=new nw(a2(r,e)),jc[t]&&jc[t].forEach(function(i){hw(i.name,i.config)}),eo(t),Yt[t]}else return delete Yt[t],null}function EH(t,e){if(e!=null){var n,r,i=jN;Yt[t]!=null&&Yt[t].parentLocale!=null?Yt[t].set(a2(Yt[t]._config,e)):(r=Am(t),r!=null&&(i=r._config),e=a2(i,e),r==null&&(e.abbr=t),n=new nw(e),n.parentLocale=Yt[t],Yt[t]=n),eo(t)}else Yt[t]!=null&&(Yt[t].parentLocale!=null?(Yt[t]=Yt[t].parentLocale,t===eo()&&eo(t)):Yt[t]!=null&&delete Yt[t]);return Yt[t]}function ma(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Kd;if(!Bi(t)){if(e=Am(t),e)return e;t=[t]}return TH(t)}function xH(){return o2(Yt)}function fw(t){var e,n=t._a;return n&&Ge(t).overflow===-2&&(e=n[zs]<0||n[zs]>11?zs:n[rs]<1||n[rs]>uw(n[tr],n[zs])?rs:n[En]<0||n[En]>24||n[En]===24&&(n[ji]!==0||n[qs]!==0||n[zo]!==0)?En:n[ji]<0||n[ji]>59?ji:n[qs]<0||n[qs]>59?qs:n[zo]<0||n[zo]>999?zo:-1,Ge(t)._overflowDayOfYear&&(e<tr||e>rs)&&(e=rs),Ge(t)._overflowWeeks&&e===-1&&(e=AW),Ge(t)._overflowWeekday&&e===-1&&(e=NW),Ge(t).overflow=e),t}var SH=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,CH=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,kH=/Z|[+-]\d\d(?::?\d\d)?/,a0=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],A1=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],AH=/^\/?Date\((-?\d+)/i,NH=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,RH={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function UN(t){var e,n,r=t._i,i=SH.exec(r)||CH.exec(r),s,a,l,c,d=a0.length,p=A1.length;if(i){for(Ge(t).iso=!0,e=0,n=d;e<n;e++)if(a0[e][1].exec(i[1])){a=a0[e][0],s=a0[e][2]!==!1;break}if(a==null){t._isValid=!1;return}if(i[3]){for(e=0,n=p;e<n;e++)if(A1[e][1].exec(i[3])){l=(i[2]||" ")+A1[e][0];break}if(l==null){t._isValid=!1;return}}if(!s&&l!=null){t._isValid=!1;return}if(i[4])if(kH.exec(i[4]))c="Z";else{t._isValid=!1;return}t._f=a+(l||"")+(c||""),mw(t)}else t._isValid=!1}function PH(t,e,n,r,i,s){var a=[DH(t),AN.indexOf(e),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&a.push(parseInt(s,10)),a}function DH(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function OH(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function MH(t,e,n){if(t){var r=MN.indexOf(t),i=new Date(e[0],e[1],e[2]).getDay();if(r!==i)return Ge(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function LH(t,e,n){if(t)return RH[t];if(e)return 0;var r=parseInt(n,10),i=r%100,s=(r-i)/100;return s*60+i}function WN(t){var e=NH.exec(OH(t._i)),n;if(e){if(n=PH(e[4],e[3],e[2],e[5],e[6],e[7]),!MH(e[1],n,t))return;t._a=n,t._tzm=LH(e[8],e[9],e[10]),t._d=zd.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),Ge(t).rfc2822=!0}else t._isValid=!1}function FH(t){var e=AH.exec(t._i);if(e!==null){t._d=new Date(+e[1]);return}if(UN(t),t._isValid===!1)delete t._isValid;else return;if(WN(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:J.createFromInputFallback(t)}J.createFromInputFallback=Ei("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function Xu(t,e,n){return t!=null?t:e!=null?e:n}function jH(t){var e=new Date(J.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function pw(t){var e,n,r=[],i,s,a;if(!t._d){for(i=jH(t),t._w&&t._a[rs]==null&&t._a[zs]==null&&UH(t),t._dayOfYear!=null&&(a=Xu(t._a[tr],i[tr]),(t._dayOfYear>vd(a)||t._dayOfYear===0)&&(Ge(t)._overflowDayOfYear=!0),n=zd(a,0,t._dayOfYear),t._a[zs]=n.getUTCMonth(),t._a[rs]=n.getUTCDate()),e=0;e<3&&t._a[e]==null;++e)t._a[e]=r[e]=i[e];for(;e<7;e++)t._a[e]=r[e]=t._a[e]==null?e===2?1:0:t._a[e];t._a[En]===24&&t._a[ji]===0&&t._a[qs]===0&&t._a[zo]===0&&(t._nextDay=!0,t._a[En]=0),t._d=(t._useUTC?zd:$W).apply(null,r),s=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[En]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==s&&(Ge(t).weekdayMismatch=!0)}}function UH(t){var e,n,r,i,s,a,l,c,d;e=t._w,e.GG!=null||e.W!=null||e.E!=null?(s=1,a=4,n=Xu(e.GG,t._a[tr],qd(Wt(),1,4).year),r=Xu(e.W,1),i=Xu(e.E,1),(i<1||i>7)&&(c=!0)):(s=t._locale._week.dow,a=t._locale._week.doy,d=qd(Wt(),s,a),n=Xu(e.gg,t._a[tr],d.year),r=Xu(e.w,d.week),e.d!=null?(i=e.d,(i<0||i>6)&&(c=!0)):e.e!=null?(i=e.e+s,(e.e<0||e.e>6)&&(c=!0)):i=s),r<1||r>ta(n,s,a)?Ge(t)._overflowWeeks=!0:c!=null?Ge(t)._overflowWeekday=!0:(l=ON(n,r,i,s,a),t._a[tr]=l.year,t._dayOfYear=l.dayOfYear)}J.ISO_8601=function(){};J.RFC_2822=function(){};function mw(t){if(t._f===J.ISO_8601){UN(t);return}if(t._f===J.RFC_2822){WN(t);return}t._a=[],Ge(t).empty=!0;var e=""+t._i,n,r,i,s,a,l=e.length,c=0,d,p;for(i=TN(t._f,t._locale).match(rw)||[],p=i.length,n=0;n<p;n++)s=i[n],r=(e.match(SW(s,t))||[])[0],r&&(a=e.substr(0,e.indexOf(r)),a.length>0&&Ge(t).unusedInput.push(a),e=e.slice(e.indexOf(r)+r.length),c+=r.length),Tl[s]?(r?Ge(t).empty=!1:Ge(t).unusedTokens.push(s),kW(s,r,t)):t._strict&&!r&&Ge(t).unusedTokens.push(s);Ge(t).charsLeftOver=l-c,e.length>0&&Ge(t).unusedInput.push(e),t._a[En]<=12&&Ge(t).bigHour===!0&&t._a[En]>0&&(Ge(t).bigHour=void 0),Ge(t).parsedDateParts=t._a.slice(0),Ge(t).meridiem=t._meridiem,t._a[En]=WH(t._locale,t._a[En],t._meridiem),d=Ge(t).era,d!==null&&(t._a[tr]=t._locale.erasConvertYear(d,t._a[tr])),pw(t),fw(t)}function WH(t,e,n){var r;return n==null?e:t.meridiemHour!=null?t.meridiemHour(e,n):(t.isPM!=null&&(r=t.isPM(n),r&&e<12&&(e+=12),!r&&e===12&&(e=0)),e)}function HH(t){var e,n,r,i,s,a,l=!1,c=t._f.length;if(c===0){Ge(t).invalidFormat=!0,t._d=new Date(NaN);return}for(i=0;i<c;i++)s=0,a=!1,e=tw({},t),t._useUTC!=null&&(e._useUTC=t._useUTC),e._f=t._f[i],mw(e),ew(e)&&(a=!0),s+=Ge(e).charsLeftOver,s+=Ge(e).unusedTokens.length*10,Ge(e).score=s,l?s<r&&(r=s,n=e):(r==null||s<r||a)&&(r=s,n=e,a&&(l=!0));Wa(t,n||e)}function GH(t){if(!t._d){var e=iw(t._i),n=e.day===void 0?e.date:e.day;t._a=_N([e.year,e.month,n,e.hour,e.minute,e.second,e.millisecond],function(r){return r&&parseInt(r,10)}),pw(t)}}function YH(t){var e=new Sh(fw(HN(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function HN(t){var e=t._i,n=t._f;return t._locale=t._locale||ma(t._l),e===null||n===void 0&&e===""?Tm({nullInput:!0}):(typeof e=="string"&&(t._i=e=t._locale.preparse(e)),$i(e)?new Sh(fw(e)):(xh(e)?t._d=e:Bi(n)?HH(t):n?mw(t):BH(t),ew(t)||(t._d=null),t))}function BH(t){var e=t._i;_r(e)?t._d=new Date(J.now()):xh(e)?t._d=new Date(e.valueOf()):typeof e=="string"?FH(t):Bi(e)?(t._a=_N(e.slice(0),function(n){return parseInt(n,10)}),pw(t)):Xo(e)?GH(t):ca(e)?t._d=new Date(e):J.createFromInputFallback(t)}function GN(t,e,n,r,i){var s={};return(e===!0||e===!1)&&(r=e,e=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(Xo(t)&&Z_(t)||Bi(t)&&t.length===0)&&(t=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=i,s._l=n,s._i=t,s._f=e,s._strict=r,YH(s)}function Wt(t,e,n,r){return GN(t,e,n,r,!1)}var $H=Ei("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Wt.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:Tm()}),VH=Ei("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Wt.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:Tm()});function YN(t,e){var n,r;if(e.length===1&&Bi(e[0])&&(e=e[0]),!e.length)return Wt();for(n=e[0],r=1;r<e.length;++r)(!e[r].isValid()||e[r][t](n))&&(n=e[r]);return n}function zH(){var t=[].slice.call(arguments,0);return YN("isBefore",t)}function qH(){var t=[].slice.call(arguments,0);return YN("isAfter",t)}var KH=function(){return Date.now?Date.now():+new Date},Uc=["year","quarter","month","week","day","hour","minute","second","millisecond"];function JH(t){var e,n=!1,r,i=Uc.length;for(e in t)if(ft(t,e)&&!(ln.call(Uc,e)!==-1&&(t[e]==null||!isNaN(t[e]))))return!1;for(r=0;r<i;++r)if(t[Uc[r]]){if(n)return!1;parseFloat(t[Uc[r]])!==nt(t[Uc[r]])&&(n=!0)}return!0}function QH(){return this._isValid}function XH(){return qi(NaN)}function Nm(t){var e=iw(t),n=e.year||0,r=e.quarter||0,i=e.month||0,s=e.week||e.isoWeek||0,a=e.day||0,l=e.hour||0,c=e.minute||0,d=e.second||0,p=e.millisecond||0;this._isValid=JH(e),this._milliseconds=+p+d*1e3+c*6e4+l*1e3*60*60,this._days=+a+s*7,this._months=+i+r*3+n*12,this._data={},this._locale=ma(),this._bubble()}function P0(t){return t instanceof Nm}function l2(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function ZH(t,e,n){var r=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),s=0,a;for(a=0;a<r;a++)(n&&t[a]!==e[a]||!n&&nt(t[a])!==nt(e[a]))&&s++;return s+i}function BN(t,e){Ie(t,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+vs(~~(n/60),2)+e+vs(~~n%60,2)})}BN("Z",":");BN("ZZ","");ve("Z",Cm);ve("ZZ",Cm);kt(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=gw(Cm,t)});var eG=/([\+\-]|\d\d)/gi;function gw(t,e){var n=(e||"").match(t),r,i,s;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(eG)||["-",0,0],s=+(i[1]*60)+nt(i[2]),s===0?0:i[0]==="+"?s:-s)}function vw(t,e){var n,r;return e._isUTC?(n=e.clone(),r=($i(t)||xh(t)?t.valueOf():Wt(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),J.updateOffset(n,!1),n):Wt(t).local()}function c2(t){return-Math.round(t._d.getTimezoneOffset())}J.updateOffset=function(){};function tG(t,e,n){var r=this._offset||0,i;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=gw(Cm,t),t===null)return this}else Math.abs(t)<16&&!n&&(t=t*60);return!this._isUTC&&e&&(i=c2(this)),this._offset=t,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==t&&(!e||this._changeInProgress?zN(this,qi(t-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,J.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:c2(this)}function nG(t,e){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function rG(t){return this.utcOffset(0,t)}function iG(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(c2(this),"m")),this}function sG(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=gw(EW,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function aG(t){return this.isValid()?(t=t?Wt(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function oG(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function uG(){if(!_r(this._isDSTShifted))return this._isDSTShifted;var t={},e;return tw(t,this),t=HN(t),t._a?(e=t._isUTC?Es(t._a):Wt(t._a),this._isDSTShifted=this.isValid()&&ZH(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function lG(){return this.isValid()?!this._isUTC:!1}function cG(){return this.isValid()?this._isUTC:!1}function $N(){return this.isValid()?this._isUTC&&this._offset===0:!1}var dG=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,hG=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function qi(t,e){var n=t,r=null,i,s,a;return P0(t)?n={ms:t._milliseconds,d:t._days,M:t._months}:ca(t)||!isNaN(+t)?(n={},e?n[e]=+t:n.milliseconds=+t):(r=dG.exec(t))?(i=r[1]==="-"?-1:1,n={y:0,d:nt(r[rs])*i,h:nt(r[En])*i,m:nt(r[ji])*i,s:nt(r[qs])*i,ms:nt(l2(r[zo]*1e3))*i}):(r=hG.exec(t))?(i=r[1]==="-"?-1:1,n={y:Lo(r[2],i),M:Lo(r[3],i),w:Lo(r[4],i),d:Lo(r[5],i),h:Lo(r[6],i),m:Lo(r[7],i),s:Lo(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(a=fG(Wt(n.from),Wt(n.to)),n={},n.ms=a.milliseconds,n.M=a.months),s=new Nm(n),P0(t)&&ft(t,"_locale")&&(s._locale=t._locale),P0(t)&&ft(t,"_isValid")&&(s._isValid=t._isValid),s}qi.fn=Nm.prototype;qi.invalid=XH;function Lo(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function cx(t,e){var n={};return n.months=e.month()-t.month()+(e.year()-t.year())*12,t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function fG(t,e){var n;return t.isValid()&&e.isValid()?(e=vw(e,t),t.isBefore(e)?n=cx(t,e):(n=cx(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function VN(t,e){return function(n,r){var i,s;return r!==null&&!isNaN(+r)&&(bN(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),i=qi(n,r),zN(this,i,t),this}}function zN(t,e,n,r){var i=e._milliseconds,s=l2(e._days),a=l2(e._months);t.isValid()&&(r=r==null?!0:r,a&&RN(t,Vd(t,"Month")+a*n),s&&kN(t,"Date",Vd(t,"Date")+s*n),i&&t._d.setTime(t._d.valueOf()+i*n),r&&J.updateOffset(t,s||a))}var pG=VN(1,"add"),mG=VN(-1,"subtract");function qN(t){return typeof t=="string"||t instanceof String}function gG(t){return $i(t)||xh(t)||qN(t)||ca(t)||yG(t)||vG(t)||t===null||t===void 0}function vG(t){var e=Xo(t)&&!Z_(t),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,s,a=r.length;for(i=0;i<a;i+=1)s=r[i],n=n||ft(t,s);return e&&n}function yG(t){var e=Bi(t),n=!1;return e&&(n=t.filter(function(r){return!ca(r)&&qN(t)}).length===0),e&&n}function _G(t){var e=Xo(t)&&!Z_(t),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,s;for(i=0;i<r.length;i+=1)s=r[i],n=n||ft(t,s);return e&&n}function wG(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function bG(t,e){arguments.length===1&&(arguments[0]?gG(arguments[0])?(t=arguments[0],e=void 0):_G(arguments[0])&&(e=arguments[0],t=void 0):(t=void 0,e=void 0));var n=t||Wt(),r=vw(n,this).startOf("day"),i=J.calendarFormat(this,r)||"sameElse",s=e&&(xs(e[i])?e[i].call(this,n):e[i]);return this.format(s||this.localeData().calendar(i,this,Wt(n)))}function TG(){return new Sh(this)}function IG(t,e){var n=$i(t)?t:Wt(t);return this.isValid()&&n.isValid()?(e=xi(e)||"millisecond",e==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf()):!1}function EG(t,e){var n=$i(t)?t:Wt(t);return this.isValid()&&n.isValid()?(e=xi(e)||"millisecond",e==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf()):!1}function xG(t,e,n,r){var i=$i(t)?t:Wt(t),s=$i(e)?e:Wt(e);return this.isValid()&&i.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function SG(t,e){var n=$i(t)?t:Wt(t),r;return this.isValid()&&n.isValid()?(e=xi(e)||"millisecond",e==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(e).valueOf()<=r&&r<=this.clone().endOf(e).valueOf())):!1}function CG(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function kG(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function AG(t,e,n){var r,i,s;if(!this.isValid())return NaN;if(r=vw(t,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,e=xi(e),e){case"year":s=D0(this,r)/12;break;case"month":s=D0(this,r);break;case"quarter":s=D0(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:pi(s)}function D0(t,e){if(t.date()<e.date())return-D0(e,t);var n=(e.year()-t.year())*12+(e.month()-t.month()),r=t.clone().add(n,"months"),i,s;return e-r<0?(i=t.clone().add(n-1,"months"),s=(e-r)/(r-i)):(i=t.clone().add(n+1,"months"),s=(e-r)/(i-r)),-(n+s)||0}J.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";J.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function NG(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function RG(t){if(!this.isValid())return null;var e=t!==!0,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?R0(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):xs(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",R0(n,"Z")):R0(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function PG(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="",n,r,i,s;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),n="["+t+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",s=e+'[")]',this.format(n+r+i+s)}function DG(t){t||(t=this.isUtc()?J.defaultFormatUtc:J.defaultFormat);var e=R0(this,t);return this.localeData().postformat(e)}function OG(t,e){return this.isValid()&&($i(t)&&t.isValid()||Wt(t).isValid())?qi({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function MG(t){return this.from(Wt(),t)}function LG(t,e){return this.isValid()&&($i(t)&&t.isValid()||Wt(t).isValid())?qi({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function FG(t){return this.to(Wt(),t)}function KN(t){var e;return t===void 0?this._locale._abbr:(e=ma(t),e!=null&&(this._locale=e),this)}var JN=Ei("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function QN(){return this._locale}var vp=1e3,Il=60*vp,yp=60*Il,XN=(365*400+97)*24*yp;function El(t,e){return(t%e+e)%e}function ZN(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-XN:new Date(t,e,n).valueOf()}function eR(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-XN:Date.UTC(t,e,n)}function jG(t){var e,n;if(t=xi(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?eR:ZN,t){case"year":e=n(this.year(),0,1);break;case"quarter":e=n(this.year(),this.month()-this.month()%3,1);break;case"month":e=n(this.year(),this.month(),1);break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=n(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=El(e+(this._isUTC?0:this.utcOffset()*Il),yp);break;case"minute":e=this._d.valueOf(),e-=El(e,Il);break;case"second":e=this._d.valueOf(),e-=El(e,vp);break}return this._d.setTime(e),J.updateOffset(this,!0),this}function UG(t){var e,n;if(t=xi(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?eR:ZN,t){case"year":e=n(this.year()+1,0,1)-1;break;case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=n(this.year(),this.month()+1,1)-1;break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=yp-El(e+(this._isUTC?0:this.utcOffset()*Il),yp)-1;break;case"minute":e=this._d.valueOf(),e+=Il-El(e,Il)-1;break;case"second":e=this._d.valueOf(),e+=vp-El(e,vp)-1;break}return this._d.setTime(e),J.updateOffset(this,!0),this}function WG(){return this._d.valueOf()-(this._offset||0)*6e4}function HG(){return Math.floor(this.valueOf()/1e3)}function GG(){return new Date(this.valueOf())}function YG(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function BG(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function $G(){return this.isValid()?this.toISOString():null}function VG(){return ew(this)}function zG(){return Wa({},Ge(this))}function qG(){return Ge(this).overflow}function KG(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Ie("N",0,0,"eraAbbr");Ie("NN",0,0,"eraAbbr");Ie("NNN",0,0,"eraAbbr");Ie("NNNN",0,0,"eraName");Ie("NNNNN",0,0,"eraNarrow");Ie("y",["y",1],"yo","eraYear");Ie("y",["yy",2],0,"eraYear");Ie("y",["yyy",3],0,"eraYear");Ie("y",["yyyy",4],0,"eraYear");ve("N",yw);ve("NN",yw);ve("NNN",yw);ve("NNNN",aY);ve("NNNNN",oY);kt(["N","NN","NNN","NNNN","NNNNN"],function(t,e,n,r){var i=n._locale.erasParse(t,r,n._strict);i?Ge(n).era=i:Ge(n).invalidEra=t});ve("y",Xl);ve("yy",Xl);ve("yyy",Xl);ve("yyyy",Xl);ve("yo",uY);kt(["y","yy","yyy","yyyy"],tr);kt(["yo"],function(t,e,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=t.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?e[tr]=n._locale.eraYearOrdinalParse(t,i):e[tr]=parseInt(t,10)});function JG(t,e){var n,r,i,s=this._eras||ma("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":i=J(s[n].since).startOf("day"),s[n].since=i.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":i=J(s[n].until).startOf("day").valueOf(),s[n].until=i.valueOf();break}}return s}function QG(t,e,n){var r,i,s=this.eras(),a,l,c;for(t=t.toUpperCase(),r=0,i=s.length;r<i;++r)if(a=s[r].name.toUpperCase(),l=s[r].abbr.toUpperCase(),c=s[r].narrow.toUpperCase(),n)switch(e){case"N":case"NN":case"NNN":if(l===t)return s[r];break;case"NNNN":if(a===t)return s[r];break;case"NNNNN":if(c===t)return s[r];break}else if([a,l,c].indexOf(t)>=0)return s[r]}function XG(t,e){var n=t.since<=t.until?1:-1;return e===void 0?J(t.since).year():J(t.since).year()+(e-t.offset)*n}function ZG(){var t,e,n,r=this.localeData().eras();for(t=0,e=r.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),r[t].since<=n&&n<=r[t].until||r[t].until<=n&&n<=r[t].since)return r[t].name;return""}function eY(){var t,e,n,r=this.localeData().eras();for(t=0,e=r.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),r[t].since<=n&&n<=r[t].until||r[t].until<=n&&n<=r[t].since)return r[t].narrow;return""}function tY(){var t,e,n,r=this.localeData().eras();for(t=0,e=r.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),r[t].since<=n&&n<=r[t].until||r[t].until<=n&&n<=r[t].since)return r[t].abbr;return""}function nY(){var t,e,n,r,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(n=i[t].since<=i[t].until?1:-1,r=this.clone().startOf("day").valueOf(),i[t].since<=r&&r<=i[t].until||i[t].until<=r&&r<=i[t].since)return(this.year()-J(i[t].since).year())*n+i[t].offset;return this.year()}function rY(t){return ft(this,"_erasNameRegex")||_w.call(this),t?this._erasNameRegex:this._erasRegex}function iY(t){return ft(this,"_erasAbbrRegex")||_w.call(this),t?this._erasAbbrRegex:this._erasRegex}function sY(t){return ft(this,"_erasNarrowRegex")||_w.call(this),t?this._erasNarrowRegex:this._erasRegex}function yw(t,e){return e.erasAbbrRegex(t)}function aY(t,e){return e.erasNameRegex(t)}function oY(t,e){return e.erasNarrowRegex(t)}function uY(t,e){return e._eraYearOrdinalRegex||Xl}function _w(){var t=[],e=[],n=[],r=[],i,s,a,l,c,d=this.eras();for(i=0,s=d.length;i<s;++i)a=ea(d[i].name),l=ea(d[i].abbr),c=ea(d[i].narrow),e.push(a),t.push(l),n.push(c),r.push(a),r.push(l),r.push(c);this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}Ie(0,["gg",2],0,function(){return this.weekYear()%100});Ie(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Rm(t,e){Ie(0,[t,t.length],0,e)}Rm("gggg","weekYear");Rm("ggggg","weekYear");Rm("GGGG","isoWeekYear");Rm("GGGGG","isoWeekYear");ve("G",Sm);ve("g",Sm);ve("GG",Ht,ti);ve("gg",Ht,ti);ve("GGGG",aw,sw);ve("gggg",aw,sw);ve("GGGGG",xm,Im);ve("ggggg",xm,Im);kh(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,r){e[r.substr(0,2)]=nt(t)});kh(["gg","GG"],function(t,e,n,r){e[r]=J.parseTwoDigitYear(t)});function lY(t){return tR.call(this,t,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function cY(t){return tR.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function dY(){return ta(this.year(),1,4)}function hY(){return ta(this.isoWeekYear(),1,4)}function fY(){var t=this.localeData()._week;return ta(this.year(),t.dow,t.doy)}function pY(){var t=this.localeData()._week;return ta(this.weekYear(),t.dow,t.doy)}function tR(t,e,n,r,i){var s;return t==null?qd(this,r,i).year:(s=ta(t,r,i),e>s&&(e=s),mY.call(this,t,e,n,r,i))}function mY(t,e,n,r,i){var s=ON(t,e,n,r,i),a=zd(s.year,0,s.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}Ie("Q",0,"Qo","quarter");ve("Q",IN);kt("Q",function(t,e){e[zs]=(nt(t)-1)*3});function gY(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}Ie("D",["DD",2],"Do","date");ve("D",Ht,Zl);ve("DD",Ht,ti);ve("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});kt(["D","DD"],rs);kt("Do",function(t,e){e[rs]=nt(t.match(Ht)[0])});var nR=ec("Date",!0);Ie("DDD",["DDDD",3],"DDDo","dayOfYear");ve("DDD",Em);ve("DDDD",EN);kt(["DDD","DDDD"],function(t,e,n){n._dayOfYear=nt(t)});function vY(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?e:this.add(t-e,"d")}Ie("m",["mm",2],0,"minute");ve("m",Ht,ow);ve("mm",Ht,ti);kt(["m","mm"],ji);var yY=ec("Minutes",!1);Ie("s",["ss",2],0,"second");ve("s",Ht,ow);ve("ss",Ht,ti);kt(["s","ss"],qs);var _Y=ec("Seconds",!1);Ie("S",0,0,function(){return~~(this.millisecond()/100)});Ie(0,["SS",2],0,function(){return~~(this.millisecond()/10)});Ie(0,["SSS",3],0,"millisecond");Ie(0,["SSSS",4],0,function(){return this.millisecond()*10});Ie(0,["SSSSS",5],0,function(){return this.millisecond()*100});Ie(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});Ie(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});Ie(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});Ie(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});ve("S",Em,IN);ve("SS",Em,ti);ve("SSS",Em,EN);var Ha,rR;for(Ha="SSSS";Ha.length<=9;Ha+="S")ve(Ha,Xl);function wY(t,e){e[zo]=nt(("0."+t)*1e3)}for(Ha="S";Ha.length<=9;Ha+="S")kt(Ha,wY);rR=ec("Milliseconds",!1);Ie("z",0,0,"zoneAbbr");Ie("zz",0,0,"zoneName");function bY(){return this._isUTC?"UTC":""}function TY(){return this._isUTC?"Coordinated Universal Time":""}var re=Sh.prototype;re.add=pG;re.calendar=bG;re.clone=TG;re.diff=AG;re.endOf=UG;re.format=DG;re.from=OG;re.fromNow=MG;re.to=LG;re.toNow=FG;re.get=PW;re.invalidAt=qG;re.isAfter=IG;re.isBefore=EG;re.isBetween=xG;re.isSame=SG;re.isSameOrAfter=CG;re.isSameOrBefore=kG;re.isValid=VG;re.lang=JN;re.locale=KN;re.localeData=QN;re.max=VH;re.min=$H;re.parsingFlags=zG;re.set=DW;re.startOf=jG;re.subtract=mG;re.toArray=YG;re.toObject=BG;re.toDate=GG;re.toISOString=RG;re.inspect=PG;typeof Symbol<"u"&&Symbol.for!=null&&(re[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});re.toJSON=$G;re.toString=NG;re.unix=HG;re.valueOf=WG;re.creationData=KG;re.eraName=ZG;re.eraNarrow=eY;re.eraAbbr=tY;re.eraYear=nY;re.year=CN;re.isLeapYear=RW;re.weekYear=lY;re.isoWeekYear=cY;re.quarter=re.quarters=gY;re.month=PN;re.daysInMonth=GW;re.week=re.weeks=JW;re.isoWeek=re.isoWeeks=QW;re.weeksInYear=fY;re.weeksInWeekYear=pY;re.isoWeeksInYear=dY;re.isoWeeksInISOWeekYear=hY;re.date=nR;re.day=re.days=cH;re.weekday=dH;re.isoWeekday=hH;re.dayOfYear=vY;re.hour=re.hours=_H;re.minute=re.minutes=yY;re.second=re.seconds=_Y;re.millisecond=re.milliseconds=rR;re.utcOffset=tG;re.utc=rG;re.local=iG;re.parseZone=sG;re.hasAlignedHourOffset=aG;re.isDST=oG;re.isLocal=lG;re.isUtcOffset=cG;re.isUtc=$N;re.isUTC=$N;re.zoneAbbr=bY;re.zoneName=TY;re.dates=Ei("dates accessor is deprecated. Use date instead.",nR);re.months=Ei("months accessor is deprecated. Use month instead",PN);re.years=Ei("years accessor is deprecated. Use year instead",CN);re.zone=Ei("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",nG);re.isDSTShifted=Ei("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",uG);function IY(t){return Wt(t*1e3)}function EY(){return Wt.apply(null,arguments).parseZone()}function iR(t){return t}var pt=nw.prototype;pt.calendar=lW;pt.longDateFormat=fW;pt.invalidDate=mW;pt.ordinal=yW;pt.preparse=iR;pt.postformat=iR;pt.relativeTime=wW;pt.pastFuture=bW;pt.set=oW;pt.eras=JG;pt.erasParse=QG;pt.erasConvertYear=XG;pt.erasAbbrRegex=iY;pt.erasNameRegex=rY;pt.erasNarrowRegex=sY;pt.months=jW;pt.monthsShort=UW;pt.monthsParse=HW;pt.monthsRegex=BW;pt.monthsShortRegex=YW;pt.week=VW;pt.firstDayOfYear=KW;pt.firstDayOfWeek=qW;pt.weekdays=sH;pt.weekdaysMin=oH;pt.weekdaysShort=aH;pt.weekdaysParse=lH;pt.weekdaysRegex=fH;pt.weekdaysShortRegex=pH;pt.weekdaysMinRegex=mH;pt.isPM=vH;pt.meridiem=wH;function _p(t,e,n,r){var i=ma(),s=Es().set(r,e);return i[n](s,t)}function sR(t,e,n){if(ca(t)&&(e=t,t=void 0),t=t||"",e!=null)return _p(t,e,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=_p(t,r,n,"month");return i}function ww(t,e,n,r){typeof t=="boolean"?(ca(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,ca(e)&&(n=e,e=void 0),e=e||"");var i=ma(),s=t?i._week.dow:0,a,l=[];if(n!=null)return _p(e,(n+s)%7,r,"day");for(a=0;a<7;a++)l[a]=_p(e,(a+s)%7,r,"day");return l}function xY(t,e){return sR(t,e,"months")}function SY(t,e){return sR(t,e,"monthsShort")}function CY(t,e,n){return ww(t,e,n,"weekdays")}function kY(t,e,n){return ww(t,e,n,"weekdaysShort")}function AY(t,e,n){return ww(t,e,n,"weekdaysMin")}eo("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=nt(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return t+n}});J.lang=Ei("moment.lang is deprecated. Use moment.locale instead.",eo);J.langData=Ei("moment.langData is deprecated. Use moment.localeData instead.",ma);var Fs=Math.abs;function NY(){var t=this._data;return this._milliseconds=Fs(this._milliseconds),this._days=Fs(this._days),this._months=Fs(this._months),t.milliseconds=Fs(t.milliseconds),t.seconds=Fs(t.seconds),t.minutes=Fs(t.minutes),t.hours=Fs(t.hours),t.months=Fs(t.months),t.years=Fs(t.years),this}function aR(t,e,n,r){var i=qi(e,n);return t._milliseconds+=r*i._milliseconds,t._days+=r*i._days,t._months+=r*i._months,t._bubble()}function RY(t,e){return aR(this,t,e,1)}function PY(t,e){return aR(this,t,e,-1)}function dx(t){return t<0?Math.floor(t):Math.ceil(t)}function DY(){var t=this._milliseconds,e=this._days,n=this._months,r=this._data,i,s,a,l,c;return t>=0&&e>=0&&n>=0||t<=0&&e<=0&&n<=0||(t+=dx(d2(n)+e)*864e5,e=0,n=0),r.milliseconds=t%1e3,i=pi(t/1e3),r.seconds=i%60,s=pi(i/60),r.minutes=s%60,a=pi(s/60),r.hours=a%24,e+=pi(a/24),c=pi(oR(e)),n+=c,e-=dx(d2(c)),l=pi(n/12),n%=12,r.days=e,r.months=n,r.years=l,this}function oR(t){return t*4800/146097}function d2(t){return t*146097/4800}function OY(t){if(!this.isValid())return NaN;var e,n,r=this._milliseconds;if(t=xi(t),t==="month"||t==="quarter"||t==="year")switch(e=this._days+r/864e5,n=this._months+oR(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(d2(this._months)),t){case"week":return e/7+r/6048e5;case"day":return e+r/864e5;case"hour":return e*24+r/36e5;case"minute":return e*1440+r/6e4;case"second":return e*86400+r/1e3;case"millisecond":return Math.floor(e*864e5)+r;default:throw new Error("Unknown unit "+t)}}function ga(t){return function(){return this.as(t)}}var uR=ga("ms"),MY=ga("s"),LY=ga("m"),FY=ga("h"),jY=ga("d"),UY=ga("w"),WY=ga("M"),HY=ga("Q"),GY=ga("y"),YY=uR;function BY(){return qi(this)}function $Y(t){return t=xi(t),this.isValid()?this[t+"s"]():NaN}function Tu(t){return function(){return this.isValid()?this._data[t]:NaN}}var VY=Tu("milliseconds"),zY=Tu("seconds"),qY=Tu("minutes"),KY=Tu("hours"),JY=Tu("days"),QY=Tu("months"),XY=Tu("years");function ZY(){return pi(this.days()/7)}var Gs=Math.round,hl={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function eB(t,e,n,r,i){return i.relativeTime(e||1,!!n,t,r)}function tB(t,e,n,r){var i=qi(t).abs(),s=Gs(i.as("s")),a=Gs(i.as("m")),l=Gs(i.as("h")),c=Gs(i.as("d")),d=Gs(i.as("M")),p=Gs(i.as("w")),g=Gs(i.as("y")),v=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||a<=1&&["m"]||a<n.m&&["mm",a]||l<=1&&["h"]||l<n.h&&["hh",l]||c<=1&&["d"]||c<n.d&&["dd",c];return n.w!=null&&(v=v||p<=1&&["w"]||p<n.w&&["ww",p]),v=v||d<=1&&["M"]||d<n.M&&["MM",d]||g<=1&&["y"]||["yy",g],v[2]=e,v[3]=+t>0,v[4]=r,eB.apply(null,v)}function nB(t){return t===void 0?Gs:typeof t=="function"?(Gs=t,!0):!1}function rB(t,e){return hl[t]===void 0?!1:e===void 0?hl[t]:(hl[t]=e,t==="s"&&(hl.ss=e-1),!0)}function iB(t,e){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=hl,i,s;return typeof t=="object"&&(e=t,t=!1),typeof t=="boolean"&&(n=t),typeof e=="object"&&(r=Object.assign({},hl,e),e.s!=null&&e.ss==null&&(r.ss=e.s-1)),i=this.localeData(),s=tB(this,!n,r,i),n&&(s=i.pastFuture(+this,s)),i.postformat(s)}var N1=Math.abs;function Bu(t){return(t>0)-(t<0)||+t}function Pm(){if(!this.isValid())return this.localeData().invalidDate();var t=N1(this._milliseconds)/1e3,e=N1(this._days),n=N1(this._months),r,i,s,a,l=this.asSeconds(),c,d,p,g;return l?(r=pi(t/60),i=pi(r/60),t%=60,r%=60,s=pi(n/12),n%=12,a=t?t.toFixed(3).replace(/\.?0+$/,""):"",c=l<0?"-":"",d=Bu(this._months)!==Bu(l)?"-":"",p=Bu(this._days)!==Bu(l)?"-":"",g=Bu(this._milliseconds)!==Bu(l)?"-":"",c+"P"+(s?d+s+"Y":"")+(n?d+n+"M":"")+(e?p+e+"D":"")+(i||r||t?"T":"")+(i?g+i+"H":"")+(r?g+r+"M":"")+(t?g+a+"S":"")):"P0D"}var ot=Nm.prototype;ot.isValid=QH;ot.abs=NY;ot.add=RY;ot.subtract=PY;ot.as=OY;ot.asMilliseconds=uR;ot.asSeconds=MY;ot.asMinutes=LY;ot.asHours=FY;ot.asDays=jY;ot.asWeeks=UY;ot.asMonths=WY;ot.asQuarters=HY;ot.asYears=GY;ot.valueOf=YY;ot._bubble=DY;ot.clone=BY;ot.get=$Y;ot.milliseconds=VY;ot.seconds=zY;ot.minutes=qY;ot.hours=KY;ot.days=JY;ot.weeks=ZY;ot.months=QY;ot.years=XY;ot.humanize=iB;ot.toISOString=Pm;ot.toString=Pm;ot.toJSON=Pm;ot.locale=KN;ot.localeData=QN;ot.toIsoString=Ei("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Pm);ot.lang=JN;Ie("X",0,0,"unix");Ie("x",0,0,"valueOf");ve("x",Sm);ve("X",xW);kt("X",function(t,e,n){n._d=new Date(parseFloat(t)*1e3)});kt("x",function(t,e,n){n._d=new Date(nt(t))});//! moment.js
J.version="2.30.1";sW(Wt);J.fn=re;J.min=zH;J.max=qH;J.now=KH;J.utc=Es;J.unix=IY;J.months=xY;J.isDate=xh;J.locale=eo;J.invalid=Tm;J.duration=qi;J.isMoment=$i;J.weekdays=CY;J.parseZone=EY;J.localeData=ma;J.isDuration=P0;J.monthsShort=SY;J.weekdaysMin=AY;J.defineLocale=hw;J.updateLocale=EH;J.locales=xH;J.weekdaysShort=kY;J.normalizeUnits=xi;J.relativeTimeRounding=nB;J.relativeTimeThreshold=rB;J.calendarFormat=wG;J.prototype=re;J.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var lR={exports:{}},St={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fn=typeof Symbol=="function"&&Symbol.for,bw=Fn?Symbol.for("react.element"):60103,Tw=Fn?Symbol.for("react.portal"):60106,Dm=Fn?Symbol.for("react.fragment"):60107,Om=Fn?Symbol.for("react.strict_mode"):60108,Mm=Fn?Symbol.for("react.profiler"):60114,Lm=Fn?Symbol.for("react.provider"):60109,Fm=Fn?Symbol.for("react.context"):60110,Iw=Fn?Symbol.for("react.async_mode"):60111,jm=Fn?Symbol.for("react.concurrent_mode"):60111,Um=Fn?Symbol.for("react.forward_ref"):60112,Wm=Fn?Symbol.for("react.suspense"):60113,sB=Fn?Symbol.for("react.suspense_list"):60120,Hm=Fn?Symbol.for("react.memo"):60115,Gm=Fn?Symbol.for("react.lazy"):60116,aB=Fn?Symbol.for("react.block"):60121,oB=Fn?Symbol.for("react.fundamental"):60117,uB=Fn?Symbol.for("react.responder"):60118,lB=Fn?Symbol.for("react.scope"):60119;function ni(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case bw:switch(t=t.type,t){case Iw:case jm:case Dm:case Mm:case Om:case Wm:return t;default:switch(t=t&&t.$$typeof,t){case Fm:case Um:case Gm:case Hm:case Lm:return t;default:return e}}case Tw:return e}}}function cR(t){return ni(t)===jm}St.AsyncMode=Iw;St.ConcurrentMode=jm;St.ContextConsumer=Fm;St.ContextProvider=Lm;St.Element=bw;St.ForwardRef=Um;St.Fragment=Dm;St.Lazy=Gm;St.Memo=Hm;St.Portal=Tw;St.Profiler=Mm;St.StrictMode=Om;St.Suspense=Wm;St.isAsyncMode=function(t){return cR(t)||ni(t)===Iw};St.isConcurrentMode=cR;St.isContextConsumer=function(t){return ni(t)===Fm};St.isContextProvider=function(t){return ni(t)===Lm};St.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===bw};St.isForwardRef=function(t){return ni(t)===Um};St.isFragment=function(t){return ni(t)===Dm};St.isLazy=function(t){return ni(t)===Gm};St.isMemo=function(t){return ni(t)===Hm};St.isPortal=function(t){return ni(t)===Tw};St.isProfiler=function(t){return ni(t)===Mm};St.isStrictMode=function(t){return ni(t)===Om};St.isSuspense=function(t){return ni(t)===Wm};St.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Dm||t===jm||t===Mm||t===Om||t===Wm||t===sB||typeof t=="object"&&t!==null&&(t.$$typeof===Gm||t.$$typeof===Hm||t.$$typeof===Lm||t.$$typeof===Fm||t.$$typeof===Um||t.$$typeof===oB||t.$$typeof===uB||t.$$typeof===lB||t.$$typeof===aB)};St.typeOf=ni;lR.exports=St;var Ew=lR.exports;function cB(t){function e(G,Z,se,pe,M){for(var be=0,K=0,we=0,Me=0,ze,Pe,zt=0,vt=0,We,Sn=We=ze=0,Ye=0,pn=0,So=0,qt=0,qn=se.length,Ci=qn-1,Kn,Oe="",At="",fc="",Cs="",ir;Ye<qn;){if(Pe=se.charCodeAt(Ye),Ye===Ci&&K+Me+we+be!==0&&(K!==0&&(Pe=K===47?10:47),Me=we=be=0,qn++,Ci++),K+Me+we+be===0){if(Ye===Ci&&(0<pn&&(Oe=Oe.replace(v,"")),0<Oe.trim().length)){switch(Pe){case 32:case 9:case 59:case 13:case 10:break;default:Oe+=se.charAt(Ye)}Pe=59}switch(Pe){case 123:for(Oe=Oe.trim(),ze=Oe.charCodeAt(0),We=1,qt=++Ye;Ye<qn;){switch(Pe=se.charCodeAt(Ye)){case 123:We++;break;case 125:We--;break;case 47:switch(Pe=se.charCodeAt(Ye+1)){case 42:case 47:e:{for(Sn=Ye+1;Sn<Ci;++Sn)switch(se.charCodeAt(Sn)){case 47:if(Pe===42&&se.charCodeAt(Sn-1)===42&&Ye+2!==Sn){Ye=Sn+1;break e}break;case 10:if(Pe===47){Ye=Sn+1;break e}}Ye=Sn}}break;case 91:Pe++;case 40:Pe++;case 34:case 39:for(;Ye++<Ci&&se.charCodeAt(Ye)!==Pe;);}if(We===0)break;Ye++}switch(We=se.substring(qt,Ye),ze===0&&(ze=(Oe=Oe.replace(g,"").trim()).charCodeAt(0)),ze){case 64:switch(0<pn&&(Oe=Oe.replace(v,"")),Pe=Oe.charCodeAt(1),Pe){case 100:case 109:case 115:case 45:pn=Z;break;default:pn=xe}if(We=e(Z,pn,We,Pe,M+1),qt=We.length,0<$&&(pn=n(xe,Oe,So),ir=l(3,We,pn,Z,te,q,qt,Pe,M,pe),Oe=pn.join(""),ir!==void 0&&(qt=(We=ir.trim()).length)===0&&(Pe=0,We="")),0<qt)switch(Pe){case 115:Oe=Oe.replace(j,a);case 100:case 109:case 45:We=Oe+"{"+We+"}";break;case 107:Oe=Oe.replace(_,"$1 $2"),We=Oe+"{"+We+"}",We=ie===1||ie===2&&s("@"+We,3)?"@-webkit-"+We+"@"+We:"@"+We;break;default:We=Oe+We,pe===112&&(We=(At+=We,""))}else We="";break;default:We=e(Z,n(Z,Oe,So),We,pe,M+1)}fc+=We,We=So=pn=Sn=ze=0,Oe="",Pe=se.charCodeAt(++Ye);break;case 125:case 59:if(Oe=(0<pn?Oe.replace(v,""):Oe).trim(),1<(qt=Oe.length))switch(Sn===0&&(ze=Oe.charCodeAt(0),ze===45||96<ze&&123>ze)&&(qt=(Oe=Oe.replace(" ",":")).length),0<$&&(ir=l(1,Oe,Z,G,te,q,At.length,pe,M,pe))!==void 0&&(qt=(Oe=ir.trim()).length)===0&&(Oe="\0\0"),ze=Oe.charCodeAt(0),Pe=Oe.charCodeAt(1),ze){case 0:break;case 64:if(Pe===105||Pe===99){Cs+=Oe+se.charAt(Ye);break}default:Oe.charCodeAt(qt-1)!==58&&(At+=i(Oe,ze,Pe,Oe.charCodeAt(2)))}So=pn=Sn=ze=0,Oe="",Pe=se.charCodeAt(++Ye)}}switch(Pe){case 13:case 10:K===47?K=0:1+ze===0&&pe!==107&&0<Oe.length&&(pn=1,Oe+="\0"),0<$*z&&l(0,Oe,Z,G,te,q,At.length,pe,M,pe),q=1,te++;break;case 59:case 125:if(K+Me+we+be===0){q++;break}default:switch(q++,Kn=se.charAt(Ye),Pe){case 9:case 32:if(Me+be+K===0)switch(zt){case 44:case 58:case 9:case 32:Kn="";break;default:Pe!==32&&(Kn=" ")}break;case 0:Kn="\\0";break;case 12:Kn="\\f";break;case 11:Kn="\\v";break;case 38:Me+K+be===0&&(pn=So=1,Kn="\f"+Kn);break;case 108:if(Me+K+be+ce===0&&0<Sn)switch(Ye-Sn){case 2:zt===112&&se.charCodeAt(Ye-3)===58&&(ce=zt);case 8:vt===111&&(ce=vt)}break;case 58:Me+K+be===0&&(Sn=Ye);break;case 44:K+we+Me+be===0&&(pn=1,Kn+="\r");break;case 34:case 39:K===0&&(Me=Me===Pe?0:Me===0?Pe:Me);break;case 91:Me+K+we===0&&be++;break;case 93:Me+K+we===0&&be--;break;case 41:Me+K+be===0&&we--;break;case 40:if(Me+K+be===0){if(ze===0)switch(2*zt+3*vt){case 533:break;default:ze=1}we++}break;case 64:K+we+Me+be+Sn+We===0&&(We=1);break;case 42:case 47:if(!(0<Me+be+we))switch(K){case 0:switch(2*Pe+3*se.charCodeAt(Ye+1)){case 235:K=47;break;case 220:qt=Ye,K=42}break;case 42:Pe===47&&zt===42&&qt+2!==Ye&&(se.charCodeAt(qt+2)===33&&(At+=se.substring(qt,Ye+1)),Kn="",K=0)}}K===0&&(Oe+=Kn)}vt=zt,zt=Pe,Ye++}if(qt=At.length,0<qt){if(pn=Z,0<$&&(ir=l(2,At,pn,G,te,q,qt,pe,M,pe),ir!==void 0&&(At=ir).length===0))return Cs+At+fc;if(At=pn.join(",")+"{"+At+"}",ie*ce!==0){switch(ie!==2||s(At,2)||(ce=0),ce){case 111:At=At.replace(A,":-moz-$1")+At;break;case 112:At=At.replace(E,"::-webkit-input-$1")+At.replace(E,"::-moz-$1")+At.replace(E,":-ms-input-$1")+At}ce=0}}return Cs+At+fc}function n(G,Z,se){var pe=Z.trim().split(D);Z=pe;var M=pe.length,be=G.length;switch(be){case 0:case 1:var K=0;for(G=be===0?"":G[0]+" ";K<M;++K)Z[K]=r(G,Z[K],se).trim();break;default:var we=K=0;for(Z=[];K<M;++K)for(var Me=0;Me<be;++Me)Z[we++]=r(G[Me]+" ",pe[K],se).trim()}return Z}function r(G,Z,se){var pe=Z.charCodeAt(0);switch(33>pe&&(pe=(Z=Z.trim()).charCodeAt(0)),pe){case 38:return Z.replace(x,"$1"+G.trim());case 58:return G.trim()+Z.replace(x,"$1"+G.trim());default:if(0<1*se&&0<Z.indexOf("\f"))return Z.replace(x,(G.charCodeAt(0)===58?"":"$1")+G.trim())}return G+Z}function i(G,Z,se,pe){var M=G+";",be=2*Z+3*se+4*pe;if(be===944){G=M.indexOf(":",9)+1;var K=M.substring(G,M.length-1).trim();return K=M.substring(0,G).trim()+K+";",ie===1||ie===2&&s(K,1)?"-webkit-"+K+K:K}if(ie===0||ie===2&&!s(M,1))return M;switch(be){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(O,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return K=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+K+"-webkit-"+M+"-ms-flex-pack"+K+M;case 1005:return I.test(M)?M.replace(b,":-webkit-")+M.replace(b,":-moz-")+M:M;case 1e3:switch(K=M.substring(13).trim(),Z=K.indexOf("-")+1,K.charCodeAt(0)+K.charCodeAt(Z)){case 226:K=M.replace(L,"tb");break;case 232:K=M.replace(L,"tb-rl");break;case 220:K=M.replace(L,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+K+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(Z=(M=G).length-10,K=(M.charCodeAt(Z)===33?M.substring(0,Z):M).substring(G.indexOf(":",7)+1).trim(),be=K.charCodeAt(0)+(K.charCodeAt(7)|0)){case 203:if(111>K.charCodeAt(8))break;case 115:M=M.replace(K,"-webkit-"+K)+";"+M;break;case 207:case 102:M=M.replace(K,"-webkit-"+(102<be?"inline-":"")+"box")+";"+M.replace(K,"-webkit-"+K)+";"+M.replace(K,"-ms-"+K+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return K=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+K+"-ms-flex-"+K+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(Y,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(Y,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(ue.test(G)===!0)return(K=G.substring(G.indexOf(":")+1)).charCodeAt(0)===115?i(G.replace("stretch","fill-available"),Z,se,pe).replace(":fill-available",":stretch"):M.replace(K,"-webkit-"+K)+M.replace(K,"-moz-"+K.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,se+pe===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+M}return M}function s(G,Z){var se=G.indexOf(Z===1?":":"{"),pe=G.substring(0,Z!==3?se:10);return se=G.substring(se+1,G.length-1),X(Z!==2?pe:pe.replace(he,"$1"),se,Z)}function a(G,Z){var se=i(Z,Z.charCodeAt(0),Z.charCodeAt(1),Z.charCodeAt(2));return se!==Z+";"?se.replace(U," or ($1)").substring(4):"("+Z+")"}function l(G,Z,se,pe,M,be,K,we,Me,ze){for(var Pe=0,zt=Z,vt;Pe<$;++Pe)switch(vt=ke[Pe].call(p,G,zt,se,pe,M,be,K,we,Me,ze)){case void 0:case!1:case!0:case null:break;default:zt=vt}if(zt!==Z)return zt}function c(G){switch(G){case void 0:case null:$=ke.length=0;break;default:if(typeof G=="function")ke[$++]=G;else if(typeof G=="object")for(var Z=0,se=G.length;Z<se;++Z)c(G[Z]);else z=!!G|0}return c}function d(G){return G=G.prefix,G!==void 0&&(X=null,G?typeof G!="function"?ie=1:(ie=2,X=G):ie=0),d}function p(G,Z){var se=G;if(33>se.charCodeAt(0)&&(se=se.trim()),le=se,se=[le],0<$){var pe=l(-1,Z,se,se,te,q,0,0,0,0);pe!==void 0&&typeof pe=="string"&&(Z=pe)}var M=e(xe,se,Z,0,0);return 0<$&&(pe=l(-2,M,se,se,te,q,M.length,0,0,0),pe!==void 0&&(M=pe)),le="",ce=0,q=te=1,M}var g=/^\0+/g,v=/[\0\r\f]/g,b=/: */g,I=/zoo|gra/,k=/([,: ])(transform)/g,D=/,\r+?/g,x=/([\t\r\n ])*\f?&/g,_=/@(k\w+)\s*(\S*)\s*/,E=/::(place)/g,A=/:(read-only)/g,L=/[svh]\w+-[tblr]{2}/,j=/\(\s*(.*)\s*\)/g,U=/([\s\S]*?);/g,Y=/-self|flex-/g,he=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ue=/stretch|:\s*\w+\-(?:conte|avail)/,O=/([^-])(image-set\()/,q=1,te=1,ce=0,ie=1,xe=[],ke=[],$=0,X=null,z=0,le="";return p.use=c,p.set=d,t!==void 0&&d(t),p}var dB={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hB(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var fB=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hx=hB(function(t){return fB.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),xw=Ew,pB={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mB={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gB={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sw={};Sw[xw.ForwardRef]=gB;Sw[xw.Memo]=dR;function fx(t){return xw.isMemo(t)?dR:Sw[t.$$typeof]||pB}var vB=Object.defineProperty,yB=Object.getOwnPropertyNames,px=Object.getOwnPropertySymbols,_B=Object.getOwnPropertyDescriptor,wB=Object.getPrototypeOf,mx=Object.prototype;function hR(t,e,n){if(typeof e!="string"){if(mx){var r=wB(e);r&&r!==mx&&hR(t,r,n)}var i=yB(e);px&&(i=i.concat(px(e)));for(var s=fx(t),a=fx(e),l=0;l<i.length;++l){var c=i[l];if(!mB[c]&&!(n&&n[c])&&!(a&&a[c])&&!(s&&s[c])){var d=_B(e,c);try{vB(t,c,d)}catch{}}}}return t}var bB=hR;const fR=_h(bB);var di={};function cs(){return(cs=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var gx=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},h2=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Ew.typeOf(t)},wp=Object.freeze([]),to=Object.freeze({});function Jd(t){return typeof t=="function"}function vx(t){return t.displayName||t.name||"Component"}function Cw(t){return t&&typeof t.styledComponentId=="string"}var jl=typeof process<"u"&&di!==void 0&&(di.REACT_APP_SC_ATTR||di.SC_ATTR)||"data-styled",kw=typeof window<"u"&&"HTMLElement"in window,TB=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&di!==void 0&&(di.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&di.REACT_APP_SC_DISABLE_SPEEDY!==""?di.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&di.REACT_APP_SC_DISABLE_SPEEDY:di.SC_DISABLE_SPEEDY!==void 0&&di.SC_DISABLE_SPEEDY!==""&&di.SC_DISABLE_SPEEDY!=="false"&&di.SC_DISABLE_SPEEDY)),IB={};function Ah(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var EB=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,a=s;n>=a;)(a<<=1)<0&&Ah(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(n+1),d=0,p=r.length;d<p;d++)this.tag.insertRule(c,r[d])&&(this.groupSizes[n]++,c++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var a=i;a<s;a++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),a=s+i,l=s;l<a;l++)r+=this.tag.getRule(l)+"/*!sc*/\n";return r},t}(),O0=new Map,bp=new Map,yd=1,o0=function(t){if(O0.has(t))return O0.get(t);for(;bp.has(yd);)yd++;var e=yd++;return O0.set(t,e),bp.set(e,t),e},xB=function(t){return bp.get(t)},SB=function(t,e){e>=yd&&(yd=e+1),O0.set(t,e),bp.set(e,t)},CB="style["+jl+'][data-styled-version="5.3.11"]',kB=new RegExp("^"+jl+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),AB=function(t,e,n){for(var r,i=n.split(","),s=0,a=i.length;s<a;s++)(r=i[s])&&t.registerName(e,r)},NB=function(t,e){for(var n=(e.textContent||"").split("/*!sc*/\n"),r=[],i=0,s=n.length;i<s;i++){var a=n[i].trim();if(a){var l=a.match(kB);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(SB(d,c),AB(t,d,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},RB=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},pR=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){for(var c=l.childNodes,d=c.length;d>=0;d--){var p=c[d];if(p&&p.nodeType===1&&p.hasAttribute(jl))return p}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(jl,"active"),r.setAttribute("data-styled-version","5.3.11");var a=RB();return a&&r.setAttribute("nonce",a),n.insertBefore(r,s),r},PB=function(){function t(n){var r=this.element=pR(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var c=s[a];if(c.ownerNode===i)return c}Ah(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),DB=function(){function t(n){var r=this.element=pR(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),OB=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),yx=kw,MB={isServer:!kw,useCSSOMInjection:!TB},Tp=function(){function t(n,r,i){n===void 0&&(n=to),r===void 0&&(r={}),this.options=cs({},MB,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&kw&&yx&&(yx=!1,function(s){for(var a=document.querySelectorAll(CB),l=0,c=a.length;l<c;l++){var d=a[l];d&&d.getAttribute(jl)!=="active"&&(NB(s,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}t.registerId=function(n){return o0(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(cs({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,a=r.target,n=i?new OB(a):s?new PB(a):new DB(a),new EB(n)));var n,r,i,s,a},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(o0(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(o0(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(o0(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",a=0;a<i;a++){var l=xB(a);if(l!==void 0){var c=n.names.get(l),d=r.getGroup(a);if(c&&d&&c.size){var p=jl+".g"+a+'[id="'+l+'"]',g="";c!==void 0&&c.forEach(function(v){v.length>0&&(g+=v+",")}),s+=""+d+p+'{content:"'+g+'"}/*!sc*/\n'}}}return s}(this)},t}(),LB=/(a)(d)/gi,_x=function(t){return String.fromCharCode(t+(t>25?39:97))};function f2(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=_x(e%52)+n;return(_x(e%52)+n).replace(LB,"$1-$2")}var fl=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},mR=function(t){return fl(5381,t)};function gR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Jd(n)&&!Cw(n))return!1}return!0}var FB=mR("5.3.11"),jB=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gR(e),this.componentId=n,this.baseHash=fl(FB,n),this.baseStyle=r,Tp.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var a=uu(this.rules,e,n,r).join(""),l=f2(fl(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var c=r(a,"."+l,void 0,i);n.insertRules(i,l,c)}s.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,p=fl(this.baseHash,r.hash),g="",v=0;v<d;v++){var b=this.rules[v];if(typeof b=="string")g+=b;else if(b){var I=uu(b,e,n,r),k=Array.isArray(I)?I.join(""):I;p=fl(p,k+v),g+=k}}if(g){var D=f2(p>>>0);if(!n.hasNameForId(i,D)){var x=r(g,"."+D,void 0,i);n.insertRules(i,D,x)}s.push(D)}}return s.join(" ")},t}(),UB=/^\s*\/\/.*$/gm,WB=[":","[",".","#"];function HB(t){var e,n,r,i,s=t===void 0?to:t,a=s.options,l=a===void 0?to:a,c=s.plugins,d=c===void 0?wp:c,p=new cB(l),g=[],v=function(k){function D(x){if(x)try{k(x+"}")}catch{}}return function(x,_,E,A,L,j,U,Y,he,ue){switch(x){case 1:if(he===0&&_.charCodeAt(0)===64)return k(_+";"),"";break;case 2:if(Y===0)return _+"/*|*/";break;case 3:switch(Y){case 102:case 112:return k(E[0]+_),"";default:return _+(ue===0?"/*|*/":"")}case-2:_.split("/*|*/}").forEach(D)}}}(function(k){g.push(k)}),b=function(k,D,x){return D===0&&WB.indexOf(x[n.length])!==-1||x.match(i)?k:"."+e};function I(k,D,x,_){_===void 0&&(_="&");var E=k.replace(UB,""),A=D&&x?x+" "+D+" { "+E+" }":E;return e=_,n=D,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),p(x||!D?"":D,A)}return p.use([].concat(d,[function(k,D,x){k===2&&x.length&&x[0].lastIndexOf(n)>0&&(x[0]=x[0].replace(r,b))},v,function(k){if(k===-2){var D=g;return g=[],D}}])),I.hash=d.length?d.reduce(function(k,D){return D.name||Ah(15),fl(k,D.name)},5381).toString():"",I}var vR=Le.createContext();vR.Consumer;var yR=Le.createContext(),GB=(yR.Consumer,new Tp),p2=HB();function _R(){return Ve.useContext(vR)||GB}function wR(){return Ve.useContext(yR)||p2}var YB=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=p2);var a=r.name+s.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,s(r.rules,a,"@keyframes"))},this.toString=function(){return Ah(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=p2),this.name+e.hash},t}(),BB=/([A-Z])/,$B=/([A-Z])/g,VB=/^ms-/,zB=function(t){return"-"+t.toLowerCase()};function wx(t){return BB.test(t)?t.replace($B,zB).replace(VB,"-ms-"):t}var bx=function(t){return t==null||t===!1||t===""};function uu(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],a=0,l=t.length;a<l;a+=1)(i=uu(t[a],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(bx(t))return"";if(Cw(t))return"."+t.styledComponentId;if(Jd(t)){if(typeof(d=t)!="function"||d.prototype&&d.prototype.isReactComponent||!e)return t;var c=t(e);return uu(c,e,n,r)}var d;return t instanceof YB?n?(t.inject(n,r),t.getName(r)):t:h2(t)?function p(g,v){var b,I,k=[];for(var D in g)g.hasOwnProperty(D)&&!bx(g[D])&&(Array.isArray(g[D])&&g[D].isCss||Jd(g[D])?k.push(wx(D)+":",g[D],";"):h2(g[D])?k.push.apply(k,p(g[D],D)):k.push(wx(D)+": "+(b=D,(I=g[D])==null||typeof I=="boolean"||I===""?"":typeof I!="number"||I===0||b in dB||b.startsWith("--")?String(I).trim():I+"px")+";"));return v?[v+" {"].concat(k,["}"]):k}(t):t.toString()}var Tx=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function bR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Jd(t)||h2(t)?Tx(uu(gx(wp,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Tx(uu(gx(t,n)))}var TR=function(t,e,n){return n===void 0&&(n=to),t.theme!==n.theme&&t.theme||e||n.theme},qB=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,KB=/(^-|-$)/g;function R1(t){return t.replace(qB,"-").replace(KB,"")}var IR=function(t){return f2(mR(t)>>>0)};function u0(t){return typeof t=="string"&&!0}var m2=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},JB=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function QB(t,e,n){var r=t[n];m2(e)&&m2(r)?ER(r,e):t[n]=e}function ER(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var a=s[i];if(m2(a))for(var l in a)JB(l)&&QB(t,a[l],l)}return t}var Aw=Le.createContext();Aw.Consumer;var P1={};function xR(t,e,n){var r=Cw(t),i=!u0(t),s=e.attrs,a=s===void 0?wp:s,l=e.componentId,c=l===void 0?function(_,E){var A=typeof _!="string"?"sc":R1(_);P1[A]=(P1[A]||0)+1;var L=A+"-"+IR("5.3.11"+A+P1[A]);return E?E+"-"+L:L}(e.displayName,e.parentComponentId):l,d=e.displayName,p=d===void 0?function(_){return u0(_)?"styled."+_:"Styled("+vx(_)+")"}(t):d,g=e.displayName&&e.componentId?R1(e.displayName)+"-"+e.componentId:e.componentId||c,v=r&&t.attrs?Array.prototype.concat(t.attrs,a).filter(Boolean):a,b=e.shouldForwardProp;r&&t.shouldForwardProp&&(b=e.shouldForwardProp?function(_,E,A){return t.shouldForwardProp(_,E,A)&&e.shouldForwardProp(_,E,A)}:t.shouldForwardProp);var I,k=new jB(n,g,r?t.componentStyle:void 0),D=k.isStatic&&a.length===0,x=function(_,E){return function(A,L,j,U){var Y=A.attrs,he=A.componentStyle,ue=A.defaultProps,O=A.foldedComponentIds,q=A.shouldForwardProp,te=A.styledComponentId,ce=A.target,ie=function(pe,M,be){pe===void 0&&(pe=to);var K=cs({},M,{theme:pe}),we={};return be.forEach(function(Me){var ze,Pe,zt,vt=Me;for(ze in Jd(vt)&&(vt=vt(K)),vt)K[ze]=we[ze]=ze==="className"?(Pe=we[ze],zt=vt[ze],Pe&&zt?Pe+" "+zt:Pe||zt):vt[ze]}),[K,we]}(TR(L,Ve.useContext(Aw),ue)||to,L,Y),xe=ie[0],ke=ie[1],$=function(pe,M,be,K){var we=_R(),Me=wR(),ze=M?pe.generateAndInjectStyles(to,we,Me):pe.generateAndInjectStyles(be,we,Me);return ze}(he,U,xe),X=j,z=ke.$as||L.$as||ke.as||L.as||ce,le=u0(z),G=ke!==L?cs({},L,{},ke):L,Z={};for(var se in G)se[0]!=="$"&&se!=="as"&&(se==="forwardedAs"?Z.as=G[se]:(q?q(se,hx,z):!le||hx(se))&&(Z[se]=G[se]));return L.style&&ke.style!==L.style&&(Z.style=cs({},L.style,{},ke.style)),Z.className=Array.prototype.concat(O,te,$!==te?$:null,L.className,ke.className).filter(Boolean).join(" "),Z.ref=X,Ve.createElement(z,Z)}(I,_,E,D)};return x.displayName=p,(I=Le.forwardRef(x)).attrs=v,I.componentStyle=k,I.displayName=p,I.shouldForwardProp=b,I.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):wp,I.styledComponentId=g,I.target=r?t.target:t,I.withComponent=function(_){var E=e.componentId,A=function(j,U){if(j==null)return{};var Y,he,ue={},O=Object.keys(j);for(he=0;he<O.length;he++)Y=O[he],U.indexOf(Y)>=0||(ue[Y]=j[Y]);return ue}(e,["componentId"]),L=E&&E+"-"+(u0(_)?_:R1(vx(_)));return xR(_,cs({},A,{attrs:v,componentId:L}),n)},Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?ER({},t.defaultProps,_):_}}),Object.defineProperty(I,"toString",{value:function(){return"."+I.styledComponentId}}),i&&fR(I,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),I}var xt=function(t){return function e(n,r,i){if(i===void 0&&(i=to),!Ew.isValidElementType(r))return Ah(1,String(r));var s=function(){return n(r,i,bR.apply(void 0,arguments))};return s.withConfig=function(a){return e(n,r,cs({},i,{},a))},s.attrs=function(a){return e(n,r,cs({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},s}(xR,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){xt[t]=xt(t)});var XB=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=gR(n),Tp.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var a=s(uu(this.rules,r,i,s).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Tp.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function ZB(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=bR.apply(void 0,[t].concat(n)),s="sc-global-"+IR(JSON.stringify(i)),a=new XB(i,s);function l(d){var p=_R(),g=wR(),v=Ve.useContext(Aw),b=Ve.useRef(p.allocateGSInstance(s)).current;return p.server&&c(b,d,p,v,g),Ve.useLayoutEffect(function(){if(!p.server)return c(b,d,p,v,g),function(){return a.removeStyles(b,p)}},[b,d,p,v,g]),null}function c(d,p,g,v,b){if(a.isStatic)a.renderStyles(d,IB,g,b);else{var I=cs({},p,{theme:TR(p,v,l.defaultProps)});a.renderStyles(d,I,g,b)}}return Le.memo(l)}function Ip(t,e){return Ip=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ip(t,e)}function ys(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ip(t,e)}var SR={exports:{}},e$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",t$=e$,n$=t$;function CR(){}function kR(){}kR.resetWarningCache=CR;var r$=function(){function t(r,i,s,a,l,c){if(c!==n$){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kR,resetWarningCache:CR};return n.PropTypes=n,n};SR.exports=r$();var i$=SR.exports;const H=_h(i$);function Mn(){return Mn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mn.apply(this,arguments)}function l0(t){return t.charAt(0)==="/"}function D1(t,e){for(var n=e,r=n+1,i=t.length;r<i;n+=1,r+=1)t[n]=t[r];t.pop()}function s$(t,e){e===void 0&&(e="");var n=t&&t.split("/")||[],r=e&&e.split("/")||[],i=t&&l0(t),s=e&&l0(e),a=i||s;if(t&&l0(t)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l;if(r.length){var c=r[r.length-1];l=c==="."||c===".."||c===""}else l=!1;for(var d=0,p=r.length;p>=0;p--){var g=r[p];g==="."?D1(r,p):g===".."?(D1(r,p),d++):d&&(D1(r,p),d--)}if(!a)for(;d--;d)r.unshift("..");a&&r[0]!==""&&(!r[0]||!l0(r[0]))&&r.unshift("");var v=r.join("/");return l&&v.substr(-1)!=="/"&&(v+="/"),v}function Ix(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}function M0(t,e){if(t===e)return!0;if(t==null||e==null)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(i,s){return M0(i,e[s])});if(typeof t=="object"||typeof e=="object"){var n=Ix(t),r=Ix(e);return n!==t||r!==e?M0(n,r):Object.keys(Object.assign({},t,e)).every(function(i){return M0(t[i],e[i])})}return!1}var a$="Invariant failed";function va(t,e){if(!t)throw new Error(a$)}function _d(t){return t.charAt(0)==="/"?t:"/"+t}function Ex(t){return t.charAt(0)==="/"?t.substr(1):t}function o$(t,e){return t.toLowerCase().indexOf(e.toLowerCase())===0&&"/?#".indexOf(t.charAt(e.length))!==-1}function AR(t,e){return o$(t,e)?t.substr(e.length):t}function NR(t){return t.charAt(t.length-1)==="/"?t.slice(0,-1):t}function u$(t){var e=t||"/",n="",r="",i=e.indexOf("#");i!==-1&&(r=e.substr(i),e=e.substr(0,i));var s=e.indexOf("?");return s!==-1&&(n=e.substr(s),e=e.substr(0,s)),{pathname:e,search:n==="?"?"":n,hash:r==="#"?"":r}}function wr(t){var e=t.pathname,n=t.search,r=t.hash,i=e||"/";return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function cr(t,e,n,r){var i;typeof t=="string"?(i=u$(t),i.state=e):(i=Mn({},t),i.pathname===void 0&&(i.pathname=""),i.search?i.search.charAt(0)!=="?"&&(i.search="?"+i.search):i.search="",i.hash?i.hash.charAt(0)!=="#"&&(i.hash="#"+i.hash):i.hash="",e!==void 0&&i.state===void 0&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(s){throw s instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):s}return n&&(i.key=n),r?i.pathname?i.pathname.charAt(0)!=="/"&&(i.pathname=s$(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function l$(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&M0(t.state,e.state)}function Nw(){var t=null;function e(a){return t=a,function(){t===a&&(t=null)}}function n(a,l,c,d){if(t!=null){var p=typeof t=="function"?t(a,l):t;typeof p=="string"?typeof c=="function"?c(p,d):d(!0):d(p!==!1)}else d(!0)}var r=[];function i(a){var l=!0;function c(){l&&a.apply(void 0,arguments)}return r.push(c),function(){l=!1,r=r.filter(function(d){return d!==c})}}function s(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];r.forEach(function(d){return d.apply(void 0,l)})}return{setPrompt:e,confirmTransitionTo:n,appendListener:i,notifyListeners:s}}var RR=!!(typeof window<"u"&&window.document&&window.document.createElement);function PR(t,e){e(window.confirm(t))}function c$(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function d$(){return window.navigator.userAgent.indexOf("Trident")===-1}function h$(){return window.navigator.userAgent.indexOf("Firefox")===-1}function f$(t){return t.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var xx="popstate",Sx="hashchange";function Cx(){try{return window.history.state||{}}catch{return{}}}function p$(t){t===void 0&&(t={}),RR||va(!1);var e=window.history,n=c$(),r=!d$(),i=t,s=i.forceRefresh,a=s===void 0?!1:s,l=i.getUserConfirmation,c=l===void 0?PR:l,d=i.keyLength,p=d===void 0?6:d,g=t.basename?NR(_d(t.basename)):"";function v(X){var z=X||{},le=z.key,G=z.state,Z=window.location,se=Z.pathname,pe=Z.search,M=Z.hash,be=se+pe+M;return g&&(be=AR(be,g)),cr(be,G,le)}function b(){return Math.random().toString(36).substr(2,p)}var I=Nw();function k(X){Mn($,X),$.length=e.length,I.notifyListeners($.location,$.action)}function D(X){f$(X)||E(v(X.state))}function x(){E(v(Cx()))}var _=!1;function E(X){if(_)_=!1,k();else{var z="POP";I.confirmTransitionTo(X,z,c,function(le){le?k({action:z,location:X}):A(X)})}}function A(X){var z=$.location,le=j.indexOf(z.key);le===-1&&(le=0);var G=j.indexOf(X.key);G===-1&&(G=0);var Z=le-G;Z&&(_=!0,ue(Z))}var L=v(Cx()),j=[L.key];function U(X){return g+wr(X)}function Y(X,z){var le="PUSH",G=cr(X,z,b(),$.location);I.confirmTransitionTo(G,le,c,function(Z){if(Z){var se=U(G),pe=G.key,M=G.state;if(n)if(e.pushState({key:pe,state:M},null,se),a)window.location.href=se;else{var be=j.indexOf($.location.key),K=j.slice(0,be+1);K.push(G.key),j=K,k({action:le,location:G})}else window.location.href=se}})}function he(X,z){var le="REPLACE",G=cr(X,z,b(),$.location);I.confirmTransitionTo(G,le,c,function(Z){if(Z){var se=U(G),pe=G.key,M=G.state;if(n)if(e.replaceState({key:pe,state:M},null,se),a)window.location.replace(se);else{var be=j.indexOf($.location.key);be!==-1&&(j[be]=G.key),k({action:le,location:G})}else window.location.replace(se)}})}function ue(X){e.go(X)}function O(){ue(-1)}function q(){ue(1)}var te=0;function ce(X){te+=X,te===1&&X===1?(window.addEventListener(xx,D),r&&window.addEventListener(Sx,x)):te===0&&(window.removeEventListener(xx,D),r&&window.removeEventListener(Sx,x))}var ie=!1;function xe(X){X===void 0&&(X=!1);var z=I.setPrompt(X);return ie||(ce(1),ie=!0),function(){return ie&&(ie=!1,ce(-1)),z()}}function ke(X){var z=I.appendListener(X);return ce(1),function(){ce(-1),z()}}var $={length:e.length,action:"POP",location:L,createHref:U,push:Y,replace:he,go:ue,goBack:O,goForward:q,block:xe,listen:ke};return $}var kx="hashchange",m$={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+Ex(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:Ex,decodePath:_d},slash:{encodePath:_d,decodePath:_d}};function DR(t){var e=t.indexOf("#");return e===-1?t:t.slice(0,e)}function Wc(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.substring(e+1)}function g$(t){window.location.hash=t}function O1(t){window.location.replace(DR(window.location.href)+"#"+t)}function v$(t){t===void 0&&(t={}),RR||va(!1);var e=window.history;h$();var n=t,r=n.getUserConfirmation,i=r===void 0?PR:r,s=n.hashType,a=s===void 0?"slash":s,l=t.basename?NR(_d(t.basename)):"",c=m$[a],d=c.encodePath,p=c.decodePath;function g(){var z=p(Wc());return l&&(z=AR(z,l)),cr(z)}var v=Nw();function b(z){Mn(X,z),X.length=e.length,v.notifyListeners(X.location,X.action)}var I=!1,k=null;function D(z,le){return z.pathname===le.pathname&&z.search===le.search&&z.hash===le.hash}function x(){var z=Wc(),le=d(z);if(z!==le)O1(le);else{var G=g(),Z=X.location;if(!I&&D(Z,G)||k===wr(G))return;k=null,_(G)}}function _(z){if(I)I=!1,b();else{var le="POP";v.confirmTransitionTo(z,le,i,function(G){G?b({action:le,location:z}):E(z)})}}function E(z){var le=X.location,G=U.lastIndexOf(wr(le));G===-1&&(G=0);var Z=U.lastIndexOf(wr(z));Z===-1&&(Z=0);var se=G-Z;se&&(I=!0,O(se))}var A=Wc(),L=d(A);A!==L&&O1(L);var j=g(),U=[wr(j)];function Y(z){var le=document.querySelector("base"),G="";return le&&le.getAttribute("href")&&(G=DR(window.location.href)),G+"#"+d(l+wr(z))}function he(z,le){var G="PUSH",Z=cr(z,void 0,void 0,X.location);v.confirmTransitionTo(Z,G,i,function(se){if(se){var pe=wr(Z),M=d(l+pe),be=Wc()!==M;if(be){k=pe,g$(M);var K=U.lastIndexOf(wr(X.location)),we=U.slice(0,K+1);we.push(pe),U=we,b({action:G,location:Z})}else b()}})}function ue(z,le){var G="REPLACE",Z=cr(z,void 0,void 0,X.location);v.confirmTransitionTo(Z,G,i,function(se){if(se){var pe=wr(Z),M=d(l+pe),be=Wc()!==M;be&&(k=pe,O1(M));var K=U.indexOf(wr(X.location));K!==-1&&(U[K]=pe),b({action:G,location:Z})}})}function O(z){e.go(z)}function q(){O(-1)}function te(){O(1)}var ce=0;function ie(z){ce+=z,ce===1&&z===1?window.addEventListener(kx,x):ce===0&&window.removeEventListener(kx,x)}var xe=!1;function ke(z){z===void 0&&(z=!1);var le=v.setPrompt(z);return xe||(ie(1),xe=!0),function(){return xe&&(xe=!1,ie(-1)),le()}}function $(z){var le=v.appendListener(z);return ie(1),function(){ie(-1),le()}}var X={length:e.length,action:"POP",location:j,createHref:Y,push:he,replace:ue,go:O,goBack:q,goForward:te,block:ke,listen:$};return X}function Ax(t,e,n){return Math.min(Math.max(t,e),n)}function y$(t){t===void 0&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,i=r===void 0?["/"]:r,s=e.initialIndex,a=s===void 0?0:s,l=e.keyLength,c=l===void 0?6:l,d=Nw();function p(Y){Mn(U,Y),U.length=U.entries.length,d.notifyListeners(U.location,U.action)}function g(){return Math.random().toString(36).substr(2,c)}var v=Ax(a,0,i.length-1),b=i.map(function(Y){return typeof Y=="string"?cr(Y,void 0,g()):cr(Y,void 0,Y.key||g())}),I=wr;function k(Y,he){var ue="PUSH",O=cr(Y,he,g(),U.location);d.confirmTransitionTo(O,ue,n,function(q){if(q){var te=U.index,ce=te+1,ie=U.entries.slice(0);ie.length>ce?ie.splice(ce,ie.length-ce,O):ie.push(O),p({action:ue,location:O,index:ce,entries:ie})}})}function D(Y,he){var ue="REPLACE",O=cr(Y,he,g(),U.location);d.confirmTransitionTo(O,ue,n,function(q){q&&(U.entries[U.index]=O,p({action:ue,location:O}))})}function x(Y){var he=Ax(U.index+Y,0,U.entries.length-1),ue="POP",O=U.entries[he];d.confirmTransitionTo(O,ue,n,function(q){q?p({action:ue,location:O,index:he}):p()})}function _(){x(-1)}function E(){x(1)}function A(Y){var he=U.index+Y;return he>=0&&he<U.entries.length}function L(Y){return Y===void 0&&(Y=!1),d.setPrompt(Y)}function j(Y){return d.appendListener(Y)}var U={length:b.length,action:"POP",location:b[v],index:v,entries:b,createHref:I,push:k,replace:D,go:x,goBack:_,goForward:E,canGo:A,block:L,listen:j};return U}var tc={exports:{}},_$=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},Ep=_$;tc.exports=LR;tc.exports.parse=Rw;tc.exports.compile=b$;tc.exports.tokensToFunction=OR;tc.exports.tokensToRegExp=MR;var w$=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Rw(t,e){for(var n=[],r=0,i=0,s="",a=e&&e.delimiter||"/",l;(l=w$.exec(t))!=null;){var c=l[0],d=l[1],p=l.index;if(s+=t.slice(i,p),i=p+c.length,d){s+=d[1];continue}var g=t[i],v=l[2],b=l[3],I=l[4],k=l[5],D=l[6],x=l[7];s&&(n.push(s),s="");var _=v!=null&&g!=null&&g!==v,E=D==="+"||D==="*",A=D==="?"||D==="*",L=l[2]||a,j=I||k;n.push({name:b||r++,prefix:v||"",delimiter:L,optional:A,repeat:E,partial:_,asterisk:!!x,pattern:j?E$(j):x?".*":"[^"+L0(L)+"]+?"})}return i<t.length&&(s+=t.substr(i)),s&&n.push(s),n}function b$(t,e){return OR(Rw(t,e),e)}function T$(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function I$(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function OR(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",Dw(e)));return function(i,s){for(var a="",l=i||{},c=s||{},d=c.pretty?T$:encodeURIComponent,p=0;p<t.length;p++){var g=t[p];if(typeof g=="string"){a+=g;continue}var v=l[g.name],b;if(v==null)if(g.optional){g.partial&&(a+=g.prefix);continue}else throw new TypeError('Expected "'+g.name+'" to be defined');if(Ep(v)){if(!g.repeat)throw new TypeError('Expected "'+g.name+'" to not repeat, but received `'+JSON.stringify(v)+"`");if(v.length===0){if(g.optional)continue;throw new TypeError('Expected "'+g.name+'" to not be empty')}for(var I=0;I<v.length;I++){if(b=d(v[I]),!n[p].test(b))throw new TypeError('Expected all "'+g.name+'" to match "'+g.pattern+'", but received `'+JSON.stringify(b)+"`");a+=(I===0?g.prefix:g.delimiter)+b}continue}if(b=g.asterisk?I$(v):d(v),!n[p].test(b))throw new TypeError('Expected "'+g.name+'" to match "'+g.pattern+'", but received "'+b+'"');a+=g.prefix+b}return a}}function L0(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function E$(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Pw(t,e){return t.keys=e,t}function Dw(t){return t&&t.sensitive?"":"i"}function x$(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Pw(t,e)}function S$(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(LR(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",Dw(n));return Pw(s,e)}function C$(t,e,n){return MR(Rw(t,n),e,n)}function MR(t,e,n){Ep(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=n.end!==!1,s="",a=0;a<t.length;a++){var l=t[a];if(typeof l=="string")s+=L0(l);else{var c=L0(l.prefix),d="(?:"+l.pattern+")";e.push(l),l.repeat&&(d+="(?:"+c+d+")*"),l.optional?l.partial?d=c+"("+d+")?":d="(?:"+c+"("+d+"))?":d=c+"("+d+")",s+=d}}var p=L0(n.delimiter||"/"),g=s.slice(-p.length)===p;return r||(s=(g?s.slice(0,-p.length):s)+"(?:"+p+"(?=$))?"),i?s+="$":s+=r&&g?"":"(?="+p+"|$)",Pw(new RegExp("^"+s,Dw(n)),e)}function LR(t,e,n){return Ep(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?x$(t,e):Ep(t)?S$(t,e,n):C$(t,e,n)}var k$=tc.exports;const FR=_h(k$);function Nh(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var M1=1073741823,Nx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function A$(){var t="__global_unique_id__";return Nx[t]=(Nx[t]||0)+1}function N$(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function R$(t){var e=[];return{on:function(r){e.push(r)},off:function(r){e=e.filter(function(i){return i!==r})},get:function(){return t},set:function(r,i){t=r,e.forEach(function(s){return s(t,i)})}}}function P$(t){return Array.isArray(t)?t[0]:t}function D$(t,e){var n,r,i="__create-react-context-"+A$()+"__",s=function(l){ys(c,l);function c(){for(var p,g=arguments.length,v=new Array(g),b=0;b<g;b++)v[b]=arguments[b];return p=l.call.apply(l,[this].concat(v))||this,p.emitter=R$(p.props.value),p}var d=c.prototype;return d.getChildContext=function(){var g;return g={},g[i]=this.emitter,g},d.componentWillReceiveProps=function(g){if(this.props.value!==g.value){var v=this.props.value,b=g.value,I;N$(v,b)?I=0:(I=typeof e=="function"?e(v,b):M1,I|=0,I!==0&&this.emitter.set(g.value,I))}},d.render=function(){return this.props.children},c}(Le.Component);s.childContextTypes=(n={},n[i]=H.object.isRequired,n);var a=function(l){ys(c,l);function c(){for(var p,g=arguments.length,v=new Array(g),b=0;b<g;b++)v[b]=arguments[b];return p=l.call.apply(l,[this].concat(v))||this,p.observedBits=void 0,p.state={value:p.getValue()},p.onUpdate=function(I,k){var D=p.observedBits|0;D&k&&p.setState({value:p.getValue()})},p}var d=c.prototype;return d.componentWillReceiveProps=function(g){var v=g.observedBits;this.observedBits=v==null?M1:v},d.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var g=this.props.observedBits;this.observedBits=g==null?M1:g},d.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},d.getValue=function(){return this.context[i]?this.context[i].get():t},d.render=function(){return P$(this.props.children)(this.state.value)},c}(Le.Component);return a.contextTypes=(r={},r[i]=H.object,r),{Provider:s,Consumer:a}}var O$=Le.createContext||D$,jR=function(e){var n=O$();return n.displayName=e,n},M$=jR("Router-History"),da=jR("Router"),Ym=function(t){ys(e,t),e.computeRootMatch=function(i){return{path:"/",url:"/",params:{},isExact:i==="/"}};function e(r){var i;return i=t.call(this,r)||this,i.state={location:r.history.location},i._isMounted=!1,i._pendingLocation=null,r.staticContext||(i.unlisten=r.history.listen(function(s){i._pendingLocation=s})),i}var n=e.prototype;return n.componentDidMount=function(){var i=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(s){i._isMounted&&i.setState({location:s})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return Le.createElement(da.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},Le.createElement(M$.Provider,{children:this.props.children||null,value:this.props.history}))},e}(Le.Component);Le.Component;var L$=function(t){ys(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(i){this.props.onUpdate&&this.props.onUpdate.call(this,this,i)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(Le.Component),L1={},F$=1e4,Rx=0;function j$(t){if(L1[t])return L1[t];var e=FR.compile(t);return Rx<F$&&(L1[t]=e,Rx++),e}function Px(t,e){return t===void 0&&(t="/"),e===void 0&&(e={}),t==="/"?t:j$(t)(e,{pretty:!0})}function Ow(t){var e=t.computedMatch,n=t.to,r=t.push,i=r===void 0?!1:r;return Le.createElement(da.Consumer,null,function(s){s||va(!1);var a=s.history,l=s.staticContext,c=i?a.push:a.replace,d=cr(e?typeof n=="string"?Px(n,e.params):Mn({},n,{pathname:Px(n.pathname,e.params)}):n);return l?(c(d),null):Le.createElement(L$,{onMount:function(){c(d)},onUpdate:function(g,v){var b=cr(v.to);l$(b,Mn({},d,{key:b.key}))||c(d)},to:n})})}var Dx={},U$=1e4,Ox=0;function W$(t,e){var n=""+e.end+e.strict+e.sensitive,r=Dx[n]||(Dx[n]={});if(r[t])return r[t];var i=[],s=FR(t,i,e),a={regexp:s,keys:i};return Ox<U$&&(r[t]=a,Ox++),a}function Mw(t,e){e===void 0&&(e={}),(typeof e=="string"||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,i=n.exact,s=i===void 0?!1:i,a=n.strict,l=a===void 0?!1:a,c=n.sensitive,d=c===void 0?!1:c,p=[].concat(r);return p.reduce(function(g,v){if(!v&&v!=="")return null;if(g)return g;var b=W$(v,{end:s,strict:l,sensitive:d}),I=b.regexp,k=b.keys,D=I.exec(t);if(!D)return null;var x=D[0],_=D.slice(1),E=t===x;return s&&!E?null:{path:v,url:v==="/"&&x===""?"/":x,isExact:E,params:k.reduce(function(A,L,j){return A[L.name]=_[j],A},{})}},null)}function H$(t){return Le.Children.count(t)===0}var dt=function(t){ys(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return Le.createElement(da.Consumer,null,function(s){s||va(!1);var a=i.props.location||s.location,l=i.props.computedMatch?i.props.computedMatch:i.props.path?Mw(a.pathname,i.props):s.match,c=Mn({},s,{location:a,match:l}),d=i.props,p=d.children,g=d.component,v=d.render;return Array.isArray(p)&&H$(p)&&(p=null),Le.createElement(da.Provider,{value:c},c.match?p?typeof p=="function"?p(c):p:g?Le.createElement(g,c):v?v(c):null:typeof p=="function"?p(c):null)})},e}(Le.Component);function Lw(t){return t.charAt(0)==="/"?t:"/"+t}function G$(t,e){return t?Mn({},e,{pathname:Lw(t)+e.pathname}):e}function Y$(t,e){if(!t)return e;var n=Lw(t);return e.pathname.indexOf(n)!==0?e:Mn({},e,{pathname:e.pathname.substr(n.length)})}function Mx(t){return typeof t=="string"?t:wr(t)}function F1(t){return function(){va(!1)}}function Lx(){}Le.Component;var Bm=function(t){ys(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return Le.createElement(da.Consumer,null,function(s){s||va(!1);var a=i.props.location||s.location,l,c;return Le.Children.forEach(i.props.children,function(d){if(c==null&&Le.isValidElement(d)){l=d;var p=d.props.path||d.props.from;c=p?Mw(a.pathname,Mn({},d.props,{path:p})):s.match}}),c?Le.cloneElement(l,{location:a,computedMatch:c}):null})},e}(Le.Component);function Fw(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(i){var s=i.wrappedComponentRef,a=Nh(i,["wrappedComponentRef"]);return Le.createElement(da.Consumer,null,function(l){return l||va(!1),Le.createElement(t,Mn({},a,l,{ref:s}))})};return n.displayName=e,n.WrappedComponent=t,fR(n,t)}var B$=Le.useContext;function UR(){return B$(da).location}var $$=function(t){ys(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return r=t.call.apply(t,[this].concat(s))||this,r.history=p$(r.props),r}var n=e.prototype;return n.render=function(){return Le.createElement(Ym,{history:this.history,children:this.props.children})},e}(Le.Component);Le.Component;var g2=function(e,n){return typeof e=="function"?e(n):e},v2=function(e,n){return typeof e=="string"?cr(e,null,null,n):e},jw=function(e){return e},Ul=Le.forwardRef;typeof Ul>"u"&&(Ul=jw);function V$(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}var z$=Ul(function(t,e){var n=t.innerRef,r=t.navigate,i=t.onClick,s=Nh(t,["innerRef","navigate","onClick"]),a=s.target,l=Mn({},s,{onClick:function(d){try{i&&i(d)}catch(p){throw d.preventDefault(),p}!d.defaultPrevented&&d.button===0&&(!a||a==="_self")&&!V$(d)&&(d.preventDefault(),r())}});return jw!==Ul?l.ref=e||n:l.ref=n,Le.createElement("a",l)}),Rh=Ul(function(t,e){var n=t.component,r=n===void 0?z$:n,i=t.replace,s=t.to,a=t.innerRef,l=Nh(t,["component","replace","to","innerRef"]);return Le.createElement(da.Consumer,null,function(c){c||va(!1);var d=c.history,p=v2(g2(s,c.location),c.location),g=p?d.createHref(p):"",v=Mn({},l,{href:g,navigate:function(){var I=g2(s,c.location),k=wr(c.location)===wr(v2(I)),D=i||k?d.replace:d.push;D(I)}});return jw!==Ul?v.ref=e||a:v.innerRef=a,Le.createElement(r,v)})}),WR=function(e){return e},xp=Le.forwardRef;typeof xp>"u"&&(xp=WR);function q$(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(function(r){return r}).join(" ")}xp(function(t,e){var n=t["aria-current"],r=n===void 0?"page":n,i=t.activeClassName,s=i===void 0?"active":i,a=t.activeStyle,l=t.className,c=t.exact,d=t.isActive,p=t.location,g=t.sensitive,v=t.strict,b=t.style,I=t.to,k=t.innerRef,D=Nh(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return Le.createElement(da.Consumer,null,function(x){x||va(!1);var _=p||x.location,E=v2(g2(I,_),_),A=E.pathname,L=A&&A.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),j=L?Mw(_.pathname,{path:L,exact:c,sensitive:g,strict:v}):null,U=!!(d?d(j,_):j),Y=typeof l=="function"?l(U):l,he=typeof b=="function"?b(U):b;U&&(Y=q$(Y,s),he=Mn({},he,a));var ue=Mn({"aria-current":U&&r||null,className:Y,style:he,to:E},D);return WR!==xp?ue.ref=e||k:ue.innerRef=k,Le.createElement(Rh,ue)})});const ya="/assets/choir-CKHi57Xi.jpg";var Fx={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=function(t,e){if(!t)throw nc(e)},nc=function(t){return new Error("Firebase Database ("+HR.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},K$=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Uw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,p=s>>2,g=(s&3)<<4|l>>4;let v=(l&15)<<2|d>>6,b=d&63;c||(b=64,a||(v=64)),r.push(n[p],n[g],n[v],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(GR(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):K$(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new J$;const v=s<<2|l>>4;if(r.push(v),d!==64){const b=l<<4&240|d>>2;if(r.push(b),g!==64){const I=d<<6&192|g;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class J$ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YR=function(t){const e=GR(t);return Uw.encodeByteArray(e,!0)},Sp=function(t){return YR(t).replace(/\./g,"")},Cp=function(t){try{return Uw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q$(t){return Qd(void 0,t)}function Qd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!X$(n)||(t[n]=Qd(t[n],e[n]));return t}function X$(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z$(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV=()=>Z$().__FIREBASE_DEFAULTS__,tV=()=>{if(typeof process>"u"||typeof Fx>"u")return;const t=Fx.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cp(t[1]);return e&&JSON.parse(e)},Ww=()=>{try{return eV()||tV()||nV()}catch(t){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(t));return}},BR=()=>{var t;return(t=Ww())===null||t===void 0?void 0:t.config},rV=t=>{var e;return(e=Ww())===null||e===void 0?void 0:e["_".concat(t)]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:"https://securetoken.google.com/".concat(r),aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sp(JSON.stringify(n)),Sp(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vn())}function $R(){var t;const e=(t=Ww())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sV(){return typeof self=="object"&&self.self===self}function VR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $m(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zR(){const t=vn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qR(){return HR.NODE_ADMIN===!0}function kp(){try{return typeof indexedDB=="object"}catch{return!1}}function aV(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV="FirebaseError";class Pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oV,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Iu.prototype.create)}}class Iu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i="".concat(this.service,"/").concat(e),s=this.errors[e],a=s?uV(s,r):"Error",l="".concat(this.serviceName,": ").concat(a," (").concat(i,").");return new Pr(i,l,r)}}function uV(t,e){return t.replace(lV,(n,r)=>{const i=e[r];return i!=null?String(i):"<".concat(r,"?>")})}const lV=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){return JSON.parse(t)}function Tn(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Xd(Cp(s[0])||""),n=Xd(Cp(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},cV=function(t){const e=KR(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dV=function(t){const e=KR(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function lu(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ap(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Np(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function y2(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(jx(s)&&jx(a)){if(!y2(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jx(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ad(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let g=0;g<16;g++)r[g]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let g=0;g<16;g++)r[g]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let g=16;g<80;g++){const v=r[g-3]^r[g-8]^r[g-14]^r[g-16];r[g]=(v<<1|v>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4],d,p;for(let g=0;g<80;g++){g<40?g<20?(d=l^s&(a^l),p=1518500249):(d=s^a^l,p=1859775393):g<60?(d=s&a|l&(s|a),p=2400959708):(d=s^a^l,p=3395469782);const v=(i<<5|i>>>27)+d+c+p+r[g]&4294967295;c=l,l=a,a=(s<<30|s>>>2)&4294967295,s=i,i=v}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let a=this.inbuf_;for(;i<n;){if(a===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[a]=e.charCodeAt(i),++a,++i,a===this.blockSize){this.compress_(s),a=0;break}}else for(;i<n;)if(s[a]=e[i],++a,++i,a===this.blockSize){this.compress_(s),a=0;break}}this.inbuf_=a,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function JR(t,e){const n=new fV(t,e);return n.subscribe.bind(n)}class fV{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pV(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=j1),i.error===void 0&&(i.error=j1),i.complete===void 0&&(i.complete=j1);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pV(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function j1(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function Dr(t,e){return"".concat(t," failed: ").concat(e," argument ")}function Nn(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Dr(t,e)+"must be a valid function.")}function Ux(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(Dr(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,oe(r<t.length,"Surrogate pair missing trail surrogate.");const a=t.charCodeAt(r)-56320;i=65536+(s<<10)+a}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vm=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Vi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,!!this.shouldAutoInitialize()){if(vV(e))try{this.getOrInitializeService({instanceIdentifier:Uo})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Uo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Uo){return this.instances.has(e)}getOptions(e=Uo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gV(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Uo){return this.component?this.component.multipleInstances?e:Uo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gV(t){return t===Uo?void 0:t}function vV(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=[];var It;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(It||(It={}));const ZR={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},yV=It.INFO,_V={[It.DEBUG]:"log",[It.VERBOSE]:"log",[It.INFO]:"info",[It.WARN]:"warn",[It.ERROR]:"error"},wV=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_V[e];if(i)console[i]("[".concat(r,"]  ").concat(t.name,":"),...n);else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(e,")"))};class Ph{constructor(e){this.name=e,this._logLevel=yV,this._logHandler=wV,this._userLogHandler=null,Gw.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in It))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,It.DEBUG,...e),this._logHandler(this,It.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,It.VERBOSE,...e),this._logHandler(this,It.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,It.INFO,...e),this._logHandler(this,It.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,It.WARN,...e),this._logHandler(this,It.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,It.ERROR,...e),this._logHandler(this,It.ERROR,...e)}}function bV(t){Gw.forEach(e=>{e.setLogLevel(t)})}function TV(t,e){for(const n of Gw){let r=null;e&&e.level&&(r=ZR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...a)=>{const l=a.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:It[s].toLowerCase(),message:l,args:a,type:i.name})}}}const IV=(t,e)=>e.some(n=>t instanceof n);let Wx,Hx;function EV(){return Wx||(Wx=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xV(){return Hx||(Hx=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e6=new WeakMap,_2=new WeakMap,t6=new WeakMap,U1=new WeakMap,Yw=new WeakMap;function SV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(no(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&e6.set(n,t)}).catch(()=>{}),Yw.set(e,t),e}function CV(t){if(_2.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});_2.set(t,e)}let w2={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _2.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t6.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return no(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kV(t){w2=t(w2)}function AV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(W1(this),e,...n);return t6.set(r,e.sort?e.sort():[e]),no(r)}:xV().includes(t)?function(...e){return t.apply(W1(this),e),no(e6.get(this))}:function(...e){return no(t.apply(W1(this),e))}}function NV(t){return typeof t=="function"?AV(t):(t instanceof IDBTransaction&&CV(t),IV(t,EV())?new Proxy(t,w2):t)}function no(t){if(t instanceof IDBRequest)return SV(t);if(U1.has(t))return U1.get(t);const e=NV(t);return e!==t&&(U1.set(t,e),Yw.set(e,t)),e}const W1=t=>Yw.get(t);function RV(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=no(a);return r&&a.addEventListener("upgradeneeded",c=>{r(no(a.result),c.oldVersion,c.newVersion,no(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const PV=["get","getKey","getAll","getAllKeys","count"],DV=["put","add","delete","clear"],H1=new Map;function Gx(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(H1.get(e))return H1.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DV.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PV.includes(n)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&c.done]))[0]};return H1.set(e,s),s}kV(t=>({...t,get:(e,n,r)=>Gx(e,n)||t.get(e,n,r),has:(e,n)=>!!Gx(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MV(n)){const r=n.getImmediate();return"".concat(r.library,"/").concat(r.version)}else return null}).filter(n=>n).join(" ")}}function MV(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const b2="@firebase/app",Yx="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Ph("@firebase/app"),LV="@firebase/app-compat",FV="@firebase/analytics-compat",jV="@firebase/analytics",UV="@firebase/app-check-compat",WV="@firebase/app-check",HV="@firebase/auth",GV="@firebase/auth-compat",YV="@firebase/database",BV="@firebase/database-compat",$V="@firebase/functions",VV="@firebase/functions-compat",zV="@firebase/installations",qV="@firebase/installations-compat",KV="@firebase/messaging",JV="@firebase/messaging-compat",QV="@firebase/performance",XV="@firebase/performance-compat",ZV="@firebase/remote-config",ez="@firebase/remote-config-compat",tz="@firebase/storage",nz="@firebase/storage-compat",rz="@firebase/firestore",iz="@firebase/firestore-compat",sz="firebase",az="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="[DEFAULT]",oz={[b2]:"fire-core",[LV]:"fire-core-compat",[jV]:"fire-analytics",[FV]:"fire-analytics-compat",[WV]:"fire-app-check",[UV]:"fire-app-check-compat",[HV]:"fire-auth",[GV]:"fire-auth-compat",[YV]:"fire-rtdb",[BV]:"fire-rtdb-compat",[$V]:"fire-fn",[VV]:"fire-fn-compat",[zV]:"fire-iid",[qV]:"fire-iid-compat",[KV]:"fire-fcm",[JV]:"fire-fcm-compat",[QV]:"fire-perf",[XV]:"fire-perf-compat",[ZV]:"fire-rc",[ez]:"fire-rc-compat",[tz]:"fire-gcs",[nz]:"fire-gcs-compat",[rz]:"fire-fst",[iz]:"fire-fst-compat","fire-js":"fire-js",[sz]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map,Zd=new Map;function Rp(t,e){try{t.container.addComponent(e)}catch(n){cu.debug("Component ".concat(e.name," failed to register with FirebaseApp ").concat(t.name),n)}}function n6(t,e){t.container.addOrOverwriteComponent(e)}function co(t){const e=t.name;if(Zd.has(e))return cu.debug("There were multiple attempts to register component ".concat(e,".")),!1;Zd.set(e,t);for(const n of lo.values())Rp(n,t);return!0}function r6(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function uz(t,e,n=uo){r6(t,e).clearInstance(n)}function lz(){Zd.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cz={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},na=new Iu("app","Firebase",cz);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dz=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw na.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=az;function Bw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw na.create("bad-app-name",{appName:String(i)});if(n||(n=BR()),!n)throw na.create("no-options");const s=lo.get(i);if(s){if(y2(n,s.options)&&y2(r,s.config))return s;throw na.create("duplicate-app",{appName:i})}const a=new XR(i);for(const c of Zd.values())a.addComponent(c);const l=new dz(n,r,a);return lo.set(i,l),l}function hz(t=uo){const e=lo.get(t);if(!e&&t===uo&&BR())return Bw();if(!e)throw na.create("no-app",{appName:t});return e}function fz(){return Array.from(lo.values())}async function i6(t){const e=t.name;lo.has(e)&&(lo.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function ps(t,e,n){var r;let i=(r=oz[t])!==null&&r!==void 0?r:t;n&&(i+="-".concat(n));const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=['Unable to register library "'.concat(i,'" with version "').concat(e,'":')];s&&l.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),s&&a&&l.push("and"),a&&l.push('version name "'.concat(e,'" contains illegal characters (whitespace or "/")')),cu.warn(l.join(" "));return}co(new Vi("".concat(i,"-version"),()=>({library:i,version:e}),"VERSION"))}function s6(t,e){if(t!==null&&typeof t!="function")throw na.create("invalid-log-argument");TV(t,e)}function a6(t){bV(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pz="firebase-heartbeat-database",mz=1,eh="firebase-heartbeat-store";let G1=null;function o6(){return G1||(G1=RV(pz,mz,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(eh)}}}).catch(t=>{throw na.create("idb-open",{originalErrorMessage:t.message})})),G1}async function gz(t){try{return await(await o6()).transaction(eh).objectStore(eh).get(u6(t))}catch(e){if(e instanceof Pr)cu.warn(e.message);else{const n=na.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cu.warn(n.message)}}}async function Bx(t,e){try{const r=(await o6()).transaction(eh,"readwrite");await r.objectStore(eh).put(e,u6(t)),await r.done}catch(n){if(n instanceof Pr)cu.warn(n.message);else{const r=na.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cu.warn(r.message)}}}function u6(t){return"".concat(t.name,"!").concat(t.options.appId)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vz=1024,yz=30*24*60*60*1e3;class _z{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bz(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$x();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yz}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$x(),{heartbeatsToSend:n,unsentEntries:r}=wz(this._heartbeatsCache.heartbeats),i=Sp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $x(){return new Date().toISOString().substring(0,10)}function wz(t,e=vz){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Vx(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vx(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bz{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kp()?aV().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gz(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bx(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bx(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vx(t){return Sp(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tz(t){co(new Vi("platform-logger",e=>new OV(e),"PRIVATE")),co(new Vi("heartbeat",e=>new _z(e),"PRIVATE")),ps(b2,Yx,t),ps(b2,Yx,"esm2017"),ps("fire-js","")}Tz("");const Iz=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pr,SDK_VERSION:bo,_DEFAULT_ENTRY_NAME:uo,_addComponent:Rp,_addOrOverwriteComponent:n6,_apps:lo,_clearComponents:lz,_components:Zd,_getProvider:r6,_registerComponent:co,_removeServiceInstance:uz,deleteApp:i6,getApp:hz,getApps:fz,initializeApp:Bw,onLog:s6,registerVersion:ps,setLogLevel:a6},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ez{constructor(e,n){this._delegate=e,this.firebase=n,Rp(e,new Vi("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),i6(this._delegate)))}_getService(e,n=uo){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=uo){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Rp(this._delegate,e)}_addOrOverwriteComponent(e){n6(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xz={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},zx=new Iu("app-compat","Firebase",xz);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sz(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:ps,setLogLevel:a6,onLog:s6,apps:null,SDK_VERSION:bo,INTERNAL:{registerComponent:l,removeApp:r,useAsService:c,modularAPIs:Iz}};n.default=n,Object.defineProperty(n,"apps",{get:a});function r(d){delete e[d]}function i(d){if(d=d||uo,!Qr(e,d))throw zx.create("no-app",{appName:d});return e[d]}i.App=t;function s(d,p={}){const g=Bw(d,p);if(Qr(e,g.name))return e[g.name];const v=new t(g,n);return e[g.name]=v,v}function a(){return Object.keys(e).map(d=>e[d])}function l(d){const p=d.name,g=p.replace("-compat","");if(co(d)&&d.type==="PUBLIC"){const v=(b=i())=>{if(typeof b[g]!="function")throw zx.create("invalid-app-argument",{appName:p});return b[g]()};d.serviceProps!==void 0&&Qd(v,d.serviceProps),n[g]=v,t.prototype[g]=function(...b){return this._getService.bind(this,p).apply(this,d.multipleInstances?b:[])}}return d.type==="PUBLIC"?n[g]:null}function c(d,p){return p==="serverAuth"?null:p}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l6(){const t=Sz(Ez);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:l6,extendNamespace:e,createSubscribe:JR,ErrorFactory:Iu,deepExtend:Qd});function e(n){Qd(t,n)}return t}const Cz=l6();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=new Ph("@firebase/app-compat"),kz="@firebase/app-compat",Az="0.2.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nz(t){ps(kz,Az,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(sV()&&self.firebase!==void 0){qx.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&qx.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Yn=Cz;Nz();var Rz="firebase",Pz="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn.registerVersion(Rz,Pz,"app-compat");function $w(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Hc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},$u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dz(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function c6(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oz=Dz,Mz=c6,d6=new Iu("auth","Firebase",c6());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new Ph("@firebase/auth");function Lz(t,...e){Pp.logLevel<=It.WARN&&Pp.warn("Auth (".concat(bo,"): ").concat(t),...e)}function F0(t,...e){Pp.logLevel<=It.ERROR&&Pp.error("Auth (".concat(bo,"): ").concat(t),...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,...e){throw Vw(t,...e)}function $n(t,...e){return Vw(t,...e)}function h6(t,e,n){const r=Object.assign(Object.assign({},Mz()),{[e]:n});return new Iu("auth","Firebase",r).create(e,{appName:t.name})}function rc(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zn(t,"argument-error"),h6(t,"argument-error","Type of ".concat(e.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function Vw(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return d6.create(t,...e)}function ae(t,e,...n){if(!t)throw Vw(e,...n)}function ds(t){const e="INTERNAL ASSERTION FAILED: "+t;throw F0(e),new Error(e)}function zi(t,e){t||ds(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zw(){return Kx()==="http:"||Kx()==="https:"}function Kx(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fz(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zw()||VR()||"connection"in navigator)?navigator.onLine:!0}function jz(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.shortDelay=e,this.longDelay=n,zi(n>e,"Short delay should be less than long delay!"),this.isMobile=Hw()||$m()}get(){return Fz()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t,e){zi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ds("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ds("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ds("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uz={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wz=new Dh(3e4,6e4);function yn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xn(t,e,n,r,i={}){return p6(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Eu(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),f6.fetch()(m6(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function p6(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Uz),e);try{const i=new Hz(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw od(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw od(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw od(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw od(t,"user-disabled",a);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw h6(t,p,d);zn(t,p)}}catch(i){if(i instanceof Pr)throw i;zn(t,"network-request-failed",{message:String(i)})}}async function _a(t,e,n,r,i={}){const s=await xn(t,e,n,r,i);return"mfaPendingCredential"in s&&zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function m6(t,e,n,r){const i="".concat(e).concat(n,"?").concat(r);return t.config.emulator?qw(t.config,i):"".concat(t.config.apiScheme,"://").concat(i)}class Hz{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),Wz.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function od(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$n(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gz(t,e){return xn(t,"POST","/v1/accounts:delete",e)}async function Yz(t,e){return xn(t,"POST","/v1/accounts:update",e)}async function Bz(t,e){return xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $z(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=zm(r);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wd(Y1(i.auth_time)),issuedAtTime:wd(Y1(i.iat)),expirationTime:wd(Y1(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Y1(t){return Number(t)*1e3}function zm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return F0("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cp(n);return i?JSON.parse(i):(F0("Failed to decode base64 JWT payload"),null)}catch(i){return F0("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vz(t){const e=zm(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pr&&zz(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zz({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qz{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wd(this.lastLoginAt),this.creationTime=wd(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ha(t,Bz(n,{idToken:r}));ae(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qz(s.providerUserInfo):[],l=Jz(t.providerData,a),c=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=c?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new g6(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function Kz(t){const e=Fe(t);await nh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jz(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qz(t){return t.map(e=>{var{providerId:n}=e,r=$w(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xz(t,e){const n=await p6(t,{},async()=>{const r=Eu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=m6(t,i,"/v1/token","key=".concat(s)),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",f6.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vz(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xz(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new rh;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rh,this.toJSON())}_performRefresh(){return ds("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zo{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$w(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qz(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new g6(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ha(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $z(this,e)}reload(){return Kz(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zo(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ha(this,Gz(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,c,d,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,b=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:E,emailVerified:A,isAnonymous:L,providerData:j,stsTokenManager:U}=n;ae(E&&U,e,"internal-error");const Y=rh.fromJSON(this.name,U);ae(typeof E=="string",e,"internal-error"),Pa(g,e.name),Pa(v,e.name),ae(typeof A=="boolean",e,"internal-error"),ae(typeof L=="boolean",e,"internal-error"),Pa(b,e.name),Pa(I,e.name),Pa(k,e.name),Pa(D,e.name),Pa(x,e.name),Pa(_,e.name);const he=new Zo({uid:E,auth:e,email:v,emailVerified:A,displayName:g,isAnonymous:L,photoURL:I,phoneNumber:b,tenantId:k,stsTokenManager:Y,createdAt:x,lastLoginAt:_});return j&&Array.isArray(j)&&(he.providerData=j.map(ue=>Object.assign({},ue))),D&&(he._redirectEventId=D),he}static async _fromIdTokenResponse(e,n,r=!1){const i=new rh;i.updateFromServerResponse(n);const s=new Zo({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nh(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=new Map;function qr(t){zi(t instanceof Function,"Expected a class definition");let e=Jx.get(t);return e?(zi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jx.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v6.type="NONE";const Wl=v6;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t,e,n){return"firebase:".concat(t,":").concat(e,":").concat(n)}class xl{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=eu(this.userKey,i.apiKey,s),this.fullPersistenceKey=eu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zo._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xl(qr(Wl),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||qr(Wl);const a=eu(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(a);if(p){const g=Zo._fromJSON(e,p);d!==s&&(l=g),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new xl(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new xl(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w6(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y6(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(b6(e))return"Blackberry";if(T6(e))return"Webos";if(Kw(e))return"Safari";if((e.includes("chrome/")||_6(e))&&!e.includes("edge/"))return"Chrome";if(Oh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function y6(t=vn()){return/firefox\//i.test(t)}function Kw(t=vn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _6(t=vn()){return/crios\//i.test(t)}function w6(t=vn()){return/iemobile/i.test(t)}function Oh(t=vn()){return/android/i.test(t)}function b6(t=vn()){return/blackberry/i.test(t)}function T6(t=vn()){return/webos/i.test(t)}function ic(t=vn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zz(t=vn()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function eq(t=vn()){var e;return ic(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tq(){return zR()&&document.documentMode===10}function I6(t=vn()){return ic(t)||Oh(t)||T6(t)||b6(t)||/windows phone/i.test(t)||w6(t)}function nq(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E6(t,e=[]){let n;switch(t){case"Browser":n=Qx(vn());break;case"Worker":n="".concat(Qx(vn()),"-").concat(t);break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/JsCore/").concat(bo,"/").concat(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rq(t){return(await xn(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function x6(t,e){return xn(t,"GET","/v2/recaptchaConfig",yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){return t!==void 0&&t.getResponse!==void 0}function Zx(t){return t!==void 0&&t.enterprise!==void 0}class S6{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iq(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Jw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iq().appendChild(r)})}function C6(t){return"__".concat(t).concat(Math.floor(Math.random()*1e6))}const sq="https://www.google.com/recaptcha/enterprise.js?render=",aq="recaptcha-enterprise",oq="NO_RECAPTCHA";class k6{constructor(e){this.type=aq,this.auth=fn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{x6(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new S6(c);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;Zx(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(oq)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&Zx(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Jw(sq+l).then(()=>{i(l,s,a)}).catch(c=>{a(c)})}}).catch(l=>{a(l)})})}}async function ho(t,e,n,r=!1){const i=new k6(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uq{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lq{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eS(this),this.idTokenSubscription=new eS(this),this.beforeStateQueue=new uq(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d6,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xl.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jz()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qr(e))})}async initializeRecaptchaConfig(){const e=await x6(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new S6(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new k6(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Iu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qr(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await xl.create(this,[qr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return ae(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E6(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Lz("Error while retrieving App Check token: ".concat(n.error)),n==null?void 0:n.token}}function fn(t){return Fe(t)}class eS{constructor(e){this.auth=e,this.observer=null,this.addObserver=JR(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function cq(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dq(t,e,n){const r=fn(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=A6(e),{host:a,port:l}=hq(e),c=l===null?"":":".concat(l);r.config.emulator={url:"".concat(s,"//").concat(a).concat(c,"/")},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fq()}function A6(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hq(t){const e=A6(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tS(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:tS(a)}}}function tS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fq(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ds("not implemented")}_getIdTokenResponse(e){return ds("not implemented")}_linkToIdToken(e,n){return ds("not implemented")}_getReauthenticationResolver(e){return ds("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N6(t,e){return xn(t,"POST","/v1/accounts:resetPassword",yn(t,e))}async function R6(t,e){return xn(t,"POST","/v1/accounts:update",e)}async function pq(t,e){return xn(t,"POST","/v1/accounts:update",yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e){return _a(t,"POST","/v1/accounts:signInWithPassword",yn(t,e))}async function qm(t,e){return xn(t,"POST","/v1/accounts:sendOobCode",yn(t,e))}async function mq(t,e){return qm(t,e)}async function $1(t,e){return qm(t,e)}async function V1(t,e){return qm(t,e)}async function gq(t,e){return qm(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vq(t,e){return _a(t,"POST","/v1/accounts:signInWithEmailLink",yn(t,e))}async function yq(t,e){return _a(t,"POST","/v1/accounts:signInWithEmailLink",yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends sc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ih(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ih(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ho(e,r,"signInWithPassword");return B1(e,i)}else return B1(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ho(e,r,"signInWithPassword");return B1(e,s)}else return Promise.reject(i)});case"emailLink":return vq(e,{email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return R6(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yq(e,{idToken:n,email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t,e){return _a(t,"POST","/v1/accounts:signInWithIdp",yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _q="http://localhost";class _s extends sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$w(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new _s(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ra(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ra(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ra(e,n)}buildRequest(){const e={requestUri:_q,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wq(t,e){return xn(t,"POST","/v1/accounts:sendVerificationCode",yn(t,e))}async function bq(t,e){return _a(t,"POST","/v1/accounts:signInWithPhoneNumber",yn(t,e))}async function Tq(t,e){const n=await _a(t,"POST","/v1/accounts:signInWithPhoneNumber",yn(t,e));if(n.temporaryProof)throw od(t,"account-exists-with-different-credential",n);return n}const Iq={USER_NOT_FOUND:"user-not-found"};async function Eq(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return _a(t,"POST","/v1/accounts:signInWithPhoneNumber",yn(t,n),Iq)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends sc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new tu({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new tu({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return bq(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Tq(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Eq(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new tu({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xq(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sq(t){const e=pl(ad(t)).link,n=e?pl(ad(e)).deep_link_id:null,r=pl(ad(t)).deep_link_id;return(r?pl(ad(r)).link:null)||r||n||e||t}class Km{constructor(e){var n,r,i,s,a,l;const c=pl(ad(e)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,p=(r=c.oobCode)!==null&&r!==void 0?r:null,g=xq((i=c.mode)!==null&&i!==void 0?i:null);ae(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Sq(e);try{return new Km(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,n){return ih._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Km.parseLink(n);return ae(r,"argument-error"),ih._fromEmailAndCode(e,r.code,r.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Sl extends ac{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return ae("providerId"in n&&"signInMethod"in n,"argument-error"),_s._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ae(e.idToken||e.accessToken,"argument-error"),_s._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Sl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Sl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:a,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new Sl(l)._credential({idToken:n,accessToken:r,nonce:a,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends ac{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.FACEBOOK_SIGN_IN_METHOD="facebook.com";is.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends ac{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ss.credential(n,r)}catch{return null}}}ss.GOOGLE_SIGN_IN_METHOD="google.com";ss.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends ac{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cq="http://localhost";class Hl extends sc{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ra(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ra(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ra(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Hl(r,s)}static _create(e,n){return new Hl(e,n)}buildRequest(){return{requestUri:Cq,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kq="saml.";class Dp extends wa{constructor(e){ae(e.startsWith(kq),"argument-error"),super(e)}static credentialFromResult(e){return Dp.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Dp.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Hl.fromJSON(e);return ae(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Hl._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends ac{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return os.credential(n,r)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0(t,e){return _a(t,"POST","/v1/accounts:signUp",yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zo._fromIdTokenResponse(e,r,i),a=nS(r);return new Ii({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nS(r);return new Ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aq(t){var e;const n=fn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ii({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await j0(n,{returnSecureToken:!0}),i=await Ii._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends Pr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Op.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Op(e,n,r,i)}}function P6(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Op._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D6(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nq(t,e){const n=Fe(t);await Jm(!0,n,e);const{providerUserInfo:r}=await Yz(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=D6(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Qw(t,e,n=!1){const r=await ha(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ii._forOperation(t,"link",r)}async function Jm(t,e,n){await nh(e);const r=D6(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";ae(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O6(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ha(t,P6(r,i,e,t),n);ae(s.idToken,r,"internal-error");const a=zm(s.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(t.uid===l,r,"user-mismatch"),Ii._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M6(t,e,n=!1){const r="signIn",i=await P6(t,r,e),s=await Ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Qm(t,e){return M6(fn(t),e)}async function L6(t,e){const n=Fe(t);return await Jm(!1,n,e.providerId),Qw(n,e)}async function F6(t,e){return O6(Fe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rq(t,e){return _a(t,"POST","/v1/accounts:signInWithCustomToken",yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pq(t,e){const n=fn(t),r=await Rq(n,{token:e,returnSecureToken:!0}),i=await Ii._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Xw._fromServerResponse(e,n):"totpInfo"in n?Zw._fromServerResponse(e,n):zn(e,"internal-error")}}class Xw extends Mh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Xw(n)}}class Zw extends Mh{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Zw(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e,n){var r;ae(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ae(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ae(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ae(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dq(t,e,n){var r;const i=fn(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await ho(i,s,"getOobCode",!0);n&&Cl(i,a,n),await $1(i,a)}else n&&Cl(i,s,n),await $1(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const l=await ho(i,s,"getOobCode",!0);n&&Cl(i,l,n),await $1(i,l)}else return Promise.reject(a)})}async function Oq(t,e,n){await N6(Fe(t),{oobCode:e,newPassword:n})}async function Mq(t,e){await pq(Fe(t),{oobCode:e})}async function j6(t,e){const n=Fe(t),r=await N6(n,{oobCode:e}),i=r.requestType;switch(ae(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ae(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ae(r.mfaInfo,n,"internal-error");default:ae(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Mh._fromServerResponse(fn(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Lq(t,e){const{data:n}=await j6(Fe(t),e);return n.email}async function Fq(t,e,n){var r;const i=fn(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const d=await ho(i,s,"signUpPassword");a=j0(i,d)}else a=j0(i,s).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const p=await ho(i,s,"signUpPassword");return j0(i,p)}else return Promise.reject(d)});const l=await a.catch(d=>Promise.reject(d)),c=await Ii._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(c.user),c}function jq(t,e,n){return Qm(Fe(t),To.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uq(t,e,n){var r;const i=fn(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function a(l,c){ae(c.handleCodeInApp,i,"argument-error"),c&&Cl(i,l,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await ho(i,s,"getOobCode",!0);a(l,n),await V1(i,l)}else a(s,n),await V1(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await ho(i,s,"getOobCode",!0);a(c,n),await V1(i,c)}else return Promise.reject(l)})}function Wq(t,e){const n=Km.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Hq(t,e,n){const r=Fe(t),i=To.credentialWithLink(e,n||th());return ae(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qm(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gq(t,e){return xn(t,"POST","/v1/accounts:createAuthUri",yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yq(t,e){const n=zw()?th():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Gq(Fe(t),r);return i||[]}async function Bq(t,e){const n=Fe(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Cl(n.auth,i,e);const{email:s}=await mq(n.auth,i);s!==t.email&&await t.reload()}async function $q(t,e,n){const r=Fe(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Cl(r.auth,s,n);const{email:a}=await gq(r.auth,s);a!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vq(t,e){return xn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zq(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Fe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},a=await ha(r,Vq(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function qq(t,e){return U6(Fe(t),e,null)}function Kq(t,e){return U6(Fe(t),null,e)}async function U6(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const a=await ha(t,R6(r,s));await t._updateTokensIfNecessary(a,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jq(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const a=(n=(e=zm(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(a){const l=a!=="anonymous"&&a!=="custom"?a:null;return new kl(s,l)}}if(!r)return null;switch(r){case"facebook.com":return new Qq(s,i);case"github.com":return new Xq(s,i);case"google.com":return new Zq(s,i);case"twitter.com":return new eK(s,i,t.screenName||null);case"custom":case"anonymous":return new kl(s,null);default:return new kl(s,r,i)}}class kl{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class W6 extends kl{constructor(e,n,r,i){super(e,n,r),this.username=i}}class Qq extends kl{constructor(e,n){super(e,"facebook.com",n)}}class Xq extends W6{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class Zq extends kl{constructor(e,n){super(e,"google.com",n)}}class eK extends W6{constructor(e,n,r){super(e,"twitter.com",n,r)}}function tK(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Jq(n)}class qo{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new qo("enroll",e,n)}static _fromMfaPendingCredential(e){return new qo("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return qo._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return qo._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=fn(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(l=>Mh._fromServerResponse(r,l));ae(i.mfaPendingCredential,r,"internal-error");const a=qo._fromMfaPendingCredential(i.mfaPendingCredential);return new eb(a,s,async l=>{const c=await l._process(r,a);delete i.mfaInfo,delete i.mfaPendingCredential;const d=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const p=await Ii._fromIdTokenResponse(r,n.operationType,d);return await r._updateCurrentUser(p.user),p;case"reauthenticate":return ae(n.user,r,"internal-error"),Ii._forOperation(n.user,n.operationType,d);default:zn(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function nK(t,e){var n;const r=Fe(t),i=e;return ae(e.customData.operationType,r,"argument-error"),ae((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),eb._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rK(t,e){return xn(t,"POST","/v2/accounts/mfaEnrollment:start",yn(t,e))}function iK(t,e){return xn(t,"POST","/v2/accounts/mfaEnrollment:finalize",yn(t,e))}function sK(t,e){return xn(t,"POST","/v2/accounts/mfaEnrollment:withdraw",yn(t,e))}class tb{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Mh._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new tb(e)}async getSession(){return qo._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await ha(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ha(this.user,sK(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const z1=new WeakMap;function aK(t){const e=Fe(t);return z1.has(e)||z1.set(e,tb._fromUser(e)),z1.get(e)}const Mp="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mp,"1"),this.storage.removeItem(Mp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oK(){const t=vn();return Kw(t)||ic(t)}const uK=1e3,lK=10;class G6 extends H6{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oK()&&nq(),this.fallbackToPolling=I6(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);tq()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lK):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uK)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G6.type="LOCAL";const nb=G6;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y6 extends H6{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Y6.type="SESSION";const du=Y6;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cK(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xm(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,s)),c=await cK(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xm.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dK{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const d=Lh("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(p),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function hK(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function fK(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pK(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mK(){return rb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B6="firebaseLocalStorageDb",gK=1,Lp="firebaseLocalStorage",$6="fbase_key";class Fh{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zm(t,e){return t.transaction([Lp],e?"readwrite":"readonly").objectStore(Lp)}function vK(){const t=indexedDB.deleteDatabase(B6);return new Fh(t).toPromise()}function T2(){const t=indexedDB.open(B6,gK);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lp,{keyPath:$6})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lp)?e(r):(r.close(),await vK(),e(await T2()))})})}async function rS(t,e,n){const r=Zm(t,!0).put({[$6]:e,value:n});return new Fh(r).toPromise()}async function yK(t,e){const n=Zm(t,!1).get(e),r=await new Fh(n).toPromise();return r===void 0?null:r.value}function iS(t,e){const n=Zm(t,!0).delete(e);return new Fh(n).toPromise()}const _K=800,wK=3;class V6{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await T2(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wK)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xm._getInstance(mK()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fK(),!this.activeServiceWorker)return;this.sender=new dK(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pK()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await T2();return await rS(e,Mp,"1"),await iS(e,Mp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rS(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yK(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iS(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zm(i,!1).getAll();return new Fh(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_K)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V6.type="LOCAL";const sh=V6;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bK(t,e){return xn(t,"POST","/v2/accounts/mfaSignIn:start",yn(t,e))}function TK(t,e){return xn(t,"POST","/v2/accounts/mfaSignIn:finalize",yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IK=500,EK=6e4,c0=1e12;class xK{constructor(e){this.auth=e,this.counter=c0,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new SK(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||c0;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||c0;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||c0;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class SK{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;ae(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=CK(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},EK)},IK))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function CK(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=C6("rcb"),kK=new Dh(3e4,6e4),AK="https://www.google.com/recaptcha/api.js?";class NK{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=mn().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return ae(RK(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Xx(mn().grecaptcha)?Promise.resolve(mn().grecaptcha):new Promise((r,i)=>{const s=mn().setTimeout(()=>{i($n(e,"network-request-failed"))},kK.get());mn()[q1]=()=>{mn().clearTimeout(s),delete mn()[q1];const l=mn().grecaptcha;if(!l||!Xx(l)){i($n(e,"internal-error"));return}const c=l.render;l.render=(d,p)=>{const g=c(d,p);return this.counter++,g},this.hostLanguage=n,r(l)};const a="".concat(AK,"?").concat(Eu({onload:q1,render:"explicit",hl:n}));Jw(a).catch(()=>{clearTimeout(s),i($n(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=mn().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function RK(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class PK{async load(e){return new xK(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z6="recaptcha",DK={theme:"light",type:"image"};let OK=class{constructor(e,n=Object.assign({},DK),r){this.parameters=n,this.type=z6,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=fn(r),this.isInvisible=this.parameters.size==="invisible",ae(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;ae(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new PK:new NK,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=a=>{a&&(this.tokenChangeListeners.delete(s),i(a))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ae(!this.parameters.sitekey,this.auth,"argument-error"),ae(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ae(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=mn()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){ae(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ae(zw()&&!rb(),this.auth,"internal-error"),await MK(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await rq(this.auth);ae(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ae(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function MK(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=tu._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function LK(t,e,n){const r=fn(t),i=await eg(r,e,Fe(n));return new ib(i,s=>Qm(r,s))}async function FK(t,e,n){const r=Fe(t);await Jm(!1,r,"phone");const i=await eg(r.auth,e,Fe(n));return new ib(i,s=>L6(r,s))}async function jK(t,e,n){const r=Fe(t),i=await eg(r.auth,e,Fe(n));return new ib(i,s=>F6(r,s))}async function eg(t,e,n){var r;const i=await n.verify();try{ae(typeof i=="string",t,"argument-error"),ae(n.type===z6,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const a=s.session;if("phoneNumber"in s)return ae(a.type==="enroll",t,"internal-error"),(await rK(t,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{ae(a.type==="signin",t,"internal-error");const l=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return ae(l,t,"missing-multi-factor-info"),(await bK(t,{mfaPendingCredential:a.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:a}=await wq(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return a}}finally{n._reset()}}async function UK(t,e){await Qw(Fe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hu=class U0{constructor(e){this.providerId=U0.PROVIDER_ID,this.auth=fn(e)}verifyPhoneNumber(e,n){return eg(this.auth,e,Fe(n))}static credential(e,n){return tu._fromVerification(e,n)}static credentialFromResult(e){const n=e;return U0.credentialFromTaggedObject(n)}static credentialFromError(e){return U0.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?tu._fromTokenResponse(n,r):null}};hu.PROVIDER_ID="phone";hu.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e){return e?qr(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb extends sc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ra(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ra(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ra(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WK(t){return M6(t.auth,new sb(t),t.bypassAuthState)}function HK(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),O6(n,new sb(t),t.bypassAuthState)}async function GK(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Qw(n,new sb(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q6{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WK;case"linkViaPopup":case"linkViaRedirect":return GK;case"reauthViaPopup":case"reauthViaRedirect":return HK;default:zn(this.auth,"internal-error")}}resolve(e){zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YK=new Dh(2e3,1e4);async function BK(t,e,n){const r=fn(t);rc(t,e,wa);const i=xu(r,n);return new Ks(r,"signInViaPopup",e,i).executeNotNull()}async function $K(t,e,n){const r=Fe(t);rc(r.auth,e,wa);const i=xu(r.auth,n);return new Ks(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function VK(t,e,n){const r=Fe(t);rc(r.auth,e,wa);const i=xu(r.auth,n);return new Ks(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ks extends q6{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ks.currentPopupAction&&Ks.currentPopupAction.cancel(),Ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){zi(this.filter.length===1,"Popup operations only handle one event");const e=Lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YK.get())};e()}}Ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zK="pendingRedirect",bd=new Map;class qK extends q6{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bd.get(this.auth._key());if(!e){try{const r=await KK(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bd.set(this.auth._key(),e)}return this.bypassAuthState||bd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KK(t,e){const n=J6(e),r=K6(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ab(t,e){return K6(t)._set(J6(e),"true")}function JK(){bd.clear()}function ob(t,e){bd.set(t._key(),e)}function K6(t){return qr(t._redirectPersistence)}function J6(t){return eu(zK,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QK(t,e,n){return XK(t,e,n)}async function XK(t,e,n){const r=fn(t);rc(t,e,wa),await r._initializationPromise;const i=xu(r,n);return await ab(i,r),i._openRedirect(r,e,"signInViaRedirect")}function ZK(t,e,n){return eJ(t,e,n)}async function eJ(t,e,n){const r=Fe(t);rc(r.auth,e,wa),await r.auth._initializationPromise;const i=xu(r.auth,n);await ab(i,r.auth);const s=await Q6(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function tJ(t,e,n){return nJ(t,e,n)}async function nJ(t,e,n){const r=Fe(t);rc(r.auth,e,wa),await r.auth._initializationPromise;const i=xu(r.auth,n);await Jm(!1,r,e.providerId),await ab(i,r.auth);const s=await Q6(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function rJ(t,e){return await fn(t)._initializationPromise,tg(t,e,!1)}async function tg(t,e,n=!1){const r=fn(t),i=xu(r,e),a=await new qK(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}async function Q6(t){const e=Lh("".concat(t.uid,":::"));return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iJ=10*60*1e3;class X6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sJ(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Z6(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iJ&&this.cachedEventUids.clear(),this.cachedEventUids.has(sS(e))}saveEventToCache(e){this.cachedEventUids.add(sS(e)),this.lastProcessedEventTime=Date.now()}}function sS(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Z6({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sJ(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z6(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e4(t,e={}){return xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aJ=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oJ=/^https?/;async function uJ(t){if(t.config.emulator)return;const{authorizedDomains:e}=await e4(t);for(const n of e)try{if(lJ(n))return}catch{}zn(t,"unauthorized-domain")}function lJ(t){const e=th(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!oJ.test(n))return!1;if(aJ.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cJ=new Dh(3e4,6e4);function aS(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dJ(t){return new Promise((e,n)=>{var r,i,s;function a(){aS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{aS(),n($n(t,"network-request-failed"))},timeout:cJ.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)a();else{const l=C6("iframefcb");return mn()[l]=()=>{gapi.load?a():n($n(t,"network-request-failed"))},Jw("https://apis.google.com/js/api.js?onload=".concat(l)).catch(c=>n(c))}}).catch(e=>{throw W0=null,e})}let W0=null;function hJ(t){return W0=W0||dJ(t),W0}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fJ=new Dh(5e3,15e3),pJ="__/auth/iframe",mJ="emulator/auth/iframe",gJ={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vJ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yJ(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qw(e,mJ):"https://".concat(t.config.authDomain,"/").concat(pJ),r={apiKey:e.apiKey,appName:t.name,v:bo},i=vJ.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),"".concat(n,"?").concat(Eu(r).slice(1))}async function _J(t){const e=await hJ(t),n=mn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:yJ(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gJ,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=$n(t,"network-request-failed"),l=mn().setTimeout(()=>{s(a)},fJ.get());function c(){mn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wJ={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bJ=500,TJ=600,IJ="_blank",EJ="http://localhost";class oS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xJ(t,e,n,r=bJ,i=TJ){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},wJ),{width:r.toString(),height:i.toString(),top:s,left:a}),d=vn().toLowerCase();n&&(l=_6(d)?IJ:n),y6(d)&&(e=e||EJ,c.scrollbars="yes");const p=Object.entries(c).reduce((v,[b,I])=>"".concat(v).concat(b,"=").concat(I,","),"");if(eq(d)&&l!=="_self")return SJ(e||"",l),new oS(null);const g=window.open(e||"",l,p);ae(g,t,"popup-blocked");try{g.focus()}catch{}return new oS(g)}function SJ(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CJ="__/auth/handler",kJ="emulator/auth/handler",AJ=encodeURIComponent("fac");async function I2(t,e,n,r,i,s){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bo,eventId:i};if(e instanceof wa){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Ap(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries(s||{}))a[p]=g}if(e instanceof ac){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await t._getAppCheckToken(),d=c?"#".concat(AJ,"=").concat(encodeURIComponent(c)):"";return"".concat(NJ(t),"?").concat(Eu(l).slice(1)).concat(d)}function NJ({config:t}){return t.emulator?qw(t,kJ):"https://".concat(t.authDomain,"/").concat(CJ)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="webStorageSupport";class RJ{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=du,this._completeRedirectFn=tg,this._overrideRedirectResult=ob}async _openPopup(e,n,r,i){var s;zi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await I2(e,n,r,th(),i);return xJ(e,a,Lh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await I2(e,n,r,th(),i);return hK(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zi(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _J(e),r=new X6(e);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(K1,{type:K1},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[K1];a!==void 0&&n(!!a),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uJ(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return I6()||Kw()||ic()}}const PJ=RJ;class DJ{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ds("unexpected MultiFactorSessionType")}}}class ub extends DJ{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ub(e)}_finalizeEnroll(e,n,r){return iK(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return TK(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class t4{constructor(){}static assertion(e){return ub._fromCredential(e)}}t4.FACTOR_ID="phone";var uS="@firebase/auth",lS="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OJ{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MJ(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LJ(t){co(new Vi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E6(t)},d=new lq(r,i,s,c);return cq(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),co(new Vi("auth-internal",e=>{const n=fn(e.getProvider("auth").getImmediate());return(r=>new OJ(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ps(uS,lS,MJ(t)),ps(uS,lS,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FJ=5*60;rV("authIdTokenMaxAge");LJ("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jJ=2e3;async function UJ(t,e,n){var r;const{BuildInfo:i}=fu();zi(e.sessionId,"AuthEvent did not contain a session ID");const s=await BJ(e.sessionId),a={};return ic()?a.ibi=i.packageName:Oh()?a.apn=i.packageName:zn(t,"operation-not-supported-in-this-environment"),i.displayName&&(a.appDisplayName=i.displayName),a.sessionId=s,I2(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,a)}async function WJ(t){const{BuildInfo:e}=fu(),n={};ic()?n.iosBundleId=e.packageName:Oh()?n.androidPackageName=e.packageName:zn(t,"operation-not-supported-in-this-environment"),await e4(t,n)}function HJ(t){const{cordova:e}=fu();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,Zz()?"_blank":"_system","location=yes"),n(i)})})}async function GJ(t,e,n){const{cordova:r}=fu();let i=()=>{};try{await new Promise((s,a)=>{let l=null;function c(){var g;s();const v=(g=r.plugins.browsertab)===null||g===void 0?void 0:g.close;typeof v=="function"&&v(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function d(){l||(l=window.setTimeout(()=>{a($n(t,"redirect-cancelled-by-user"))},jJ))}function p(){(document==null?void 0:document.visibilityState)==="visible"&&d()}e.addPassiveListener(c),document.addEventListener("resume",d,!1),Oh()&&document.addEventListener("visibilitychange",p,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",d,!1),document.removeEventListener("visibilitychange",p,!1),l&&window.clearTimeout(l)}})}finally{i()}}function YJ(t){var e,n,r,i,s,a,l,c,d,p;const g=fu();ae(typeof((e=g==null?void 0:g.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ae(typeof((n=g==null?void 0:g.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ae(typeof((s=(i=(r=g==null?void 0:g.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ae(typeof((c=(l=(a=g==null?void 0:g.cordova)===null||a===void 0?void 0:a.plugins)===null||l===void 0?void 0:l.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ae(typeof((p=(d=g==null?void 0:g.cordova)===null||d===void 0?void 0:d.InAppBrowser)===null||p===void 0?void 0:p.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function BJ(t){const e=$J(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function $J(t){if(zi(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VJ=20;class zJ extends X6{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function qJ(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:QJ(),postBody:null,tenantId:t.tenantId,error:$n(t,"no-auth-event")}}function KJ(t,e){return E2()._set(x2(t),e)}async function cS(t){const e=await E2()._get(x2(t));return e&&await E2()._remove(x2(t)),e}function JJ(t,e){var n,r;const i=ZJ(e);if(i.includes("/__/auth/callback")){const s=H0(i),a=s.firebaseError?XJ(decodeURIComponent(s.firebaseError)):null,l=(r=(n=a==null?void 0:a.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=l?$n(l):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function QJ(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<VJ;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function E2(){return qr(nb)}function x2(t){return eu("authEvent",t.config.apiKey,t.name)}function XJ(t){try{return JSON.parse(t)}catch{return null}}function ZJ(t){const e=H0(t),n=e.link?decodeURIComponent(e.link):void 0,r=H0(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return H0(i).link||i||r||n||t}function H0(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return pl(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eQ=500;class tQ{constructor(){this._redirectPersistence=du,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=tg,this._overrideRedirectResult=ob}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new zJ(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){zn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){YJ(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),JK(),await this._originValidation(e);const a=qJ(e,r,i);await KJ(e,a);const l=await UJ(e,a,n),c=await HJ(l);return GJ(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WJ(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=fu(),a=setTimeout(async()=>{await cS(e),n.onEvent(dS())},eQ),l=async p=>{clearTimeout(a);const g=await cS(e);let v=null;g&&(p!=null&&p.url)&&(v=JJ(g,p.url)),n.onEvent(v||dS())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,l);const c=i,d="".concat(s.packageName.toLowerCase(),"://");fu().handleOpenURL=async p=>{if(p.toLowerCase().startsWith(d)&&l({url:p}),typeof c=="function")try{c(p)}catch(g){console.error(g)}}}}const nQ=tQ;function dS(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:$n("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rQ(t,e){fn(t)._logFramework(e)}var iQ="@firebase/auth-compat",sQ="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aQ=1e3;function Td(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function oQ(){return Td()==="http:"||Td()==="https:"}function n4(t=vn()){return!!((Td()==="file:"||Td()==="ionic:"||Td()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function uQ(){return $m()||$R()}function lQ(){return zR()&&(document==null?void 0:document.documentMode)===11}function cQ(t=vn()){return/Edge\/\d+/.test(t)}function dQ(t=vn()){return lQ()||cQ(t)}function r4(){try{const t=self.localStorage,e=Lh();if(t)return t.setItem(e,"1"),t.removeItem(e),dQ()?kp():!0}catch{return lb()&&kp()}return!1}function lb(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function J1(){return(oQ()||VR()||n4())&&!uQ()&&r4()&&!lb()}function i4(){return n4()&&typeof document<"u"}async function hQ(){return i4()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},aQ);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function fQ(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={LOCAL:"local",NONE:"none",SESSION:"session"},Gc=ae,s4="persistence";function pQ(t,e){if(Gc(Object.values(Yr).includes(e),t,"invalid-persistence-type"),$m()){Gc(e!==Yr.SESSION,t,"unsupported-persistence-type");return}if($R()){Gc(e===Yr.NONE,t,"unsupported-persistence-type");return}if(lb()){Gc(e===Yr.NONE||e===Yr.LOCAL&&kp(),t,"unsupported-persistence-type");return}Gc(e===Yr.NONE||r4(),t,"unsupported-persistence-type")}async function S2(t){await t._initializationPromise;const e=a4(),n=eu(s4,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function mQ(t,e){const n=a4();if(!n)return[];const r=eu(s4,t,e);switch(n.getItem(r)){case Yr.NONE:return[Wl];case Yr.LOCAL:return[sh,du];case Yr.SESSION:return[du];default:return[]}}function a4(){var t;try{return((t=fQ())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gQ=ae;class Ga{constructor(){this.browserResolver=qr(PJ),this.cordovaResolver=qr(nQ),this.underlyingResolver=null,this._redirectPersistence=du,this._completeRedirectFn=tg,this._overrideRedirectResult=ob}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return i4()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return gQ(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await hQ();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(t){return t.unwrap()}function vQ(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yQ(t){return u4(t)}function _Q(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new wQ(t,nK(t,e))}else if(r){const i=u4(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function u4(t){const{_tokenResponse:e}=t instanceof Pr?t.customData:t;if(!e)return null;if(!(t instanceof Pr)&&"temporaryProof"in e&&"phoneNumber"in e)return hu.credentialFromResult(t);const n=e.providerId;if(!n||n===Hc.PASSWORD)return null;let r;switch(n){case Hc.GOOGLE:r=ss;break;case Hc.FACEBOOK:r=is;break;case Hc.GITHUB:r=as;break;case Hc.TWITTER:r=os;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:l,nonce:c}=e;return!s&&!a&&!i&&!l?null:l?n.startsWith("saml.")?Hl._create(n,l):_s._fromParams({providerId:n,signInMethod:n,pendingToken:l,idToken:i,accessToken:s}):new Sl(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof Pr?r.credentialFromError(t):r.credentialFromResult(t)}function br(t,e){return e.catch(n=>{throw n instanceof Pr&&_Q(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:yQ(n),additionalUserInfo:tK(n),user:Js.getOrCreate(i)}})}async function C2(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>br(t,n.confirm(r))}}class wQ{constructor(e,n){this.resolver=n,this.auth=vQ(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return br(o4(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this._delegate=e,this.multiFactor=aK(e)}static getOrCreate(e){return Js.USER_MAP.has(e)||Js.USER_MAP.set(e,new Js(e)),Js.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return br(this.auth,L6(this._delegate,e))}async linkWithPhoneNumber(e,n){return C2(this.auth,FK(this._delegate,e,n))}async linkWithPopup(e){return br(this.auth,VK(this._delegate,e,Ga))}async linkWithRedirect(e){return await S2(fn(this.auth)),tJ(this._delegate,e,Ga)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return br(this.auth,F6(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return C2(this.auth,jK(this._delegate,e,n))}reauthenticateWithPopup(e){return br(this.auth,$K(this._delegate,e,Ga))}async reauthenticateWithRedirect(e){return await S2(fn(this.auth)),ZK(this._delegate,e,Ga)}sendEmailVerification(e){return Bq(this._delegate,e)}async unlink(e){return await Nq(this._delegate,e),this}updateEmail(e){return qq(this._delegate,e)}updatePassword(e){return Kq(this._delegate,e)}updatePhoneNumber(e){return UK(this._delegate,e)}updateProfile(e){return zq(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return $q(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Js.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=ae;class k2{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Yc(r,"invalid-api-key",{appName:e.name}),Yc(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Ga:void 0;this._delegate=n.initialize({options:{persistence:bQ(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Oz),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Js.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){dq(this._delegate,e,n)}applyActionCode(e){return Mq(this._delegate,e)}checkActionCode(e){return j6(this._delegate,e)}confirmPasswordReset(e,n){return Oq(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return br(this._delegate,Fq(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Yq(this._delegate,e)}isSignInWithEmailLink(e){return Wq(this._delegate,e)}async getRedirectResult(){Yc(J1(),this._delegate,"operation-not-supported-in-this-environment");const e=await rJ(this._delegate,Ga);return e?br(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){rQ(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:a}=hS(e,n,r);return this._delegate.onAuthStateChanged(i,s,a)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:a}=hS(e,n,r);return this._delegate.onIdTokenChanged(i,s,a)}sendSignInLinkToEmail(e,n){return Uq(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Dq(this._delegate,e,n||void 0)}async setPersistence(e){pQ(this._delegate,e);let n;switch(e){case Yr.SESSION:n=du;break;case Yr.LOCAL:n=await qr(sh)._isAvailable()?sh:nb;break;case Yr.NONE:n=Wl;break;default:return zn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return br(this._delegate,Aq(this._delegate))}signInWithCredential(e){return br(this._delegate,Qm(this._delegate,e))}signInWithCustomToken(e){return br(this._delegate,Pq(this._delegate,e))}signInWithEmailAndPassword(e,n){return br(this._delegate,jq(this._delegate,e,n))}signInWithEmailLink(e,n){return br(this._delegate,Hq(this._delegate,e,n))}signInWithPhoneNumber(e,n){return C2(this._delegate,LK(this._delegate,e,n))}async signInWithPopup(e){return Yc(J1(),this._delegate,"operation-not-supported-in-this-environment"),br(this._delegate,BK(this._delegate,e,Ga))}async signInWithRedirect(e){return Yc(J1(),this._delegate,"operation-not-supported-in-this-environment"),await S2(this._delegate),QK(this._delegate,e,Ga)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Lq(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}k2.Persistence=Yr;function hS(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:a=>i(a&&Js.getOrCreate(a)),error:e,complete:n}}function bQ(t,e){const n=mQ(t,e);if(typeof self<"u"&&!n.includes(sh)&&n.push(sh),typeof window<"u")for(const r of[nb,du])n.includes(r)||n.push(r);return n.includes(Wl)||n.push(Wl),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.providerId="phone",this._delegate=new hu(o4(Yn.auth()))}static credential(e,n){return hu.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}cb.PHONE_SIGN_IN_METHOD=hu.PHONE_SIGN_IN_METHOD;cb.PROVIDER_ID=hu.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TQ=ae;class IQ{constructor(e,n,r=Yn.app()){var i;TQ((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new OK(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EQ="auth-compat";function xQ(t){t.INTERNAL.registerComponent(new Vi(EQ,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new k2(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:$u.EMAIL_SIGNIN,PASSWORD_RESET:$u.PASSWORD_RESET,RECOVER_EMAIL:$u.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:$u.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:$u.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:$u.VERIFY_EMAIL}},EmailAuthProvider:To,FacebookAuthProvider:is,GithubAuthProvider:as,GoogleAuthProvider:ss,OAuthProvider:Sl,SAMLAuthProvider:Dp,PhoneAuthProvider:cb,PhoneMultiFactorGenerator:t4,RecaptchaVerifier:IQ,TwitterAuthProvider:os,Auth:k2,AuthCredential:sc,Error:Pr}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(iQ,sQ)}xQ(Yn);var fS={};const pS="@firebase/database",mS="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l4="";function c4(t){l4=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SQ{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Tn(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xd(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CQ{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SQ(e)}}catch{}return new CQ},Ko=d4("localStorage"),A2=d4("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Ph("@firebase/database"),h4=function(){let t=1;return function(){return t++}}(),f4=function(t){const e=mV(t),n=new hV;n.update(e);const r=n.digest();return Uw.encodeByteArray(r)},jh=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=jh.apply(null,r):typeof r=="object"?e+=Tn(r):e+=r,e+=" "}return e};let nu=null,gS=!0;const p4=function(t,e){oe(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Al.logLevel=It.VERBOSE,nu=Al.log.bind(Al),e&&A2.set("logging_enabled",!0)):typeof t=="function"?nu=t:(nu=null,A2.remove("logging_enabled"))},Dn=function(...t){if(gS===!0&&(gS=!1,nu===null&&A2.get("logging_enabled")===!0&&p4(!0)),nu){const e=jh.apply(null,t);nu(e)}},Uh=function(t){return function(...e){Dn(t,...e)}},N2=function(...t){const e="FIREBASE INTERNAL ERROR: "+jh(...t);Al.error(e)},ws=function(...t){const e="FIREBASE FATAL ERROR: ".concat(jh(...t));throw Al.error(e),new Error(e)},nr=function(...t){const e="FIREBASE WARNING: "+jh(...t);Al.warn(e)},kQ=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ng=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},AQ=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fo="[MIN_NAME]",fa="[MAX_NAME]",Su=function(t,e){if(t===e)return 0;if(t===fo||e===fa)return-1;if(e===fo||t===fa)return 1;{const n=vS(t),r=vS(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},NQ=function(t,e){return t===e?0:t<e?-1:1},Bc=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Tn(e))},db=function(t){if(typeof t!="object"||t===null)return Tn(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Tn(e[r]),n+=":",n+=db(t[e[r]]);return n+="}",n},m4=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const g4=function(t){oe(!ng(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,a,l,c;t===0?(s=0,a=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,a=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,a=Math.round(t/Math.pow(2,1-r-n))));const d=[];for(c=n;c;c-=1)d.push(a%2?1:0),a=Math.floor(a/2);for(c=e;c;c-=1)d.push(s%2?1:0),s=Math.floor(s/2);d.push(i?1:0),d.reverse();const p=d.join("");let g="";for(c=0;c<64;c+=8){let v=parseInt(p.substr(c,8),2).toString(16);v.length===1&&(v="0"+v),g=g+v}return g.toLowerCase()},RQ=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PQ=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DQ(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const OQ=new RegExp("^-?(0*)\\d{1,10}$"),MQ=-2147483648,LQ=2147483647,vS=function(t){if(OQ.test(t)){const e=Number(t);if(e>=MQ&&e<=LQ)return e}return null},oc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nr("Exception was thrown by user callback.",n),e},Math.floor(0))}},FQ=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Id=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jQ{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){nr('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" are invalid. This usually indicates your app was not initialized correctly.'))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UQ{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Dn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nr(e)}}class Nl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="5",v4="v",y4="s",_4="r",w4="f",b4=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,T4="ls",I4="p",R2="ac",E4="websocket",x4="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e,n,r,i,s=!1,a="",l=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ko.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ko.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(n)}}function WQ(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function C4(t,e,n){oe(typeof e=="string","typeof type must == string"),oe(typeof n=="object","typeof params must == object");let r;if(e===E4)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===x4)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WQ(t)&&(n.ns=t.namespace);const i=[];return Ln(n,(s,a)=>{i.push(s+"="+a)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HQ{constructor(){this.counters_={}}incrementCounter(e,n=1){Qr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Q$(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1={},X1={};function fb(t){const e=t.toString();return Q1[e]||(Q1[e]=new HQ),Q1[e]}function GQ(t,e){const n=t.toString();return X1[n]||(X1[n]=e()),X1[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YQ{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oc(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="start",BQ="close",$Q="pLPCommand",VQ="pRTLPCB",k4="id",A4="pw",N4="ser",zQ="cb",qQ="seg",KQ="ts",JQ="d",QQ="dframe",R4=1870,P4=30,XQ=R4-P4,ZQ=25e3,eX=3e4;class Ya{constructor(e,n,r,i,s,a,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Uh(e),this.stats_=fb(n),this.urlFn=c=>(this.appCheckToken&&(c[R2]=this.appCheckToken),C4(n,x4,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new YQ(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eX)),AQ(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pb((...s)=>{const[a,l,c,d,p]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===yS)this.id=l,this.password=c;else if(a===BQ)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...s)=>{const[a,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[yS]="t",r[N4]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[zQ]=this.scriptTagHolder.uniqueCallbackIdentifier),r[v4]=hb,this.transportSessionId&&(r[y4]=this.transportSessionId),this.lastSessionId&&(r[T4]=this.lastSessionId),this.applicationId&&(r[I4]=this.applicationId),this.appCheckToken&&(r[R2]=this.appCheckToken),typeof location<"u"&&location.hostname&&b4.test(location.hostname)&&(r[_4]=w4);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ya.forceAllow_=!0}static forceDisallow(){Ya.forceDisallow_=!0}static isAvailable(){return Ya.forceAllow_?!0:!Ya.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!RQ()&&!PQ()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Tn(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=YR(n),i=m4(r,XQ);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[QQ]="t",r[k4]=e,r[A4]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Tn(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pb{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=h4(),window[$Q+this.uniqueCallbackIdentifier]=e,window[VQ+this.uniqueCallbackIdentifier]=n,this.myIFrame=pb.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){Dn("frame writing exception"),l.stack&&Dn(l.stack),Dn(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Dn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[k4]=this.myID,e[A4]=this.myPW,e[N4]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+P4+r.length<=R4;){const a=this.pendingSegs.shift();r=r+"&"+qQ+i+"="+a.seg+"&"+KQ+i+"="+a.ts+"&"+JQ+i+"="+a.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ZQ)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Dn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tX=16384,nX=45e3;let Fp=null;typeof MozWebSocket<"u"?Fp=MozWebSocket:typeof WebSocket<"u"&&(Fp=WebSocket);class mi{constructor(e,n,r,i,s,a,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Uh(this.connId),this.stats_=fb(n),this.connURL=mi.connectionURL_(n,a,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const a={};return a[v4]=hb,typeof location<"u"&&location.hostname&&b4.test(location.hostname)&&(a[_4]=w4),n&&(a[y4]=n),r&&(a[T4]=r),i&&(a[R2]=i),s&&(a[I4]=s),C4(e,E4,a)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ko.set("previous_websocket_failure",!0);try{let r;qR(),this.mySock=new Fp(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fp!==null&&!mi.forceDisallow_}static previouslyFailed(){return Ko.isInMemoryStorage||Ko.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ko.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Xd(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(oe(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Tn(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=m4(n,tX);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nX))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mi.responsesRequiredToBeHealthy=2;mi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ya,mi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mi&&mi.isAvailable();let r=n&&!mi.previouslyFailed();if(e.webSocketOnly&&(n||nr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mi];else{const i=this.transports_=[];for(const s of Gl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Gl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rX=6e4,iX=5e3,sX=10*1024,aX=100*1024,Z1="t",_S="d",oX="s",wS="r",uX="e",bS="o",TS="a",IS="n",ES="p",lX="h";class cX{constructor(e,n,r,i,s,a,l,c,d,p){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=c,this.onKill_=d,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Uh("c:"+this.id+":"),this.transportManager_=new Gl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Id(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aX?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sX?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Z1 in e){const n=e[Z1];n===TS?this.upgradeIfSecondaryHealthy_():n===wS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bc("t",e),r=Bc("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ES,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:TS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:IS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bc("t",e),r=Bc("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bc(Z1,e);if(_S in e){const r=e[_S];if(n===lX){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===IS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oX?this.onConnectionShutdown_(r):n===wS?this.onReset_(r):n===uX?N2("Server Error: "+r):n===bS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):N2("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),hb!==r&&nr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Id(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rX))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Id(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iX))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ES,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ko.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e){this.allowedEvents_=e,this.listeners_={},oe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){oe(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends O4{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hw()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new jp}getInitialEvent(e){return oe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=32,SS=768;class _t{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ht(){return new _t("")}function Ke(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function po(t){return t.pieces_.length-t.pieceNum_}function Rt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _t(t.pieces_,e)}function mb(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dX(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ah(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function M4(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _t(e,0)}function $t(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _t)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new _t(n,0)}function Je(t){return t.pieceNum_>=t.pieces_.length}function dr(t,e){const n=Ke(t),r=Ke(e);if(n===null)return e;if(n===r)return dr(Rt(t),Rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hX(t,e){const n=ah(t,0),r=ah(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Su(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function gb(t,e){if(po(t)!==po(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function yi(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(po(t)>po(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class fX{constructor(e,n){this.errorPrefix_=n,this.parts_=ah(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Vm(this.parts_[r]);L4(this)}}function pX(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vm(e),L4(t)}function mX(t){const e=t.parts_.pop();t.byteLength_-=Vm(e),t.parts_.length>0&&(t.byteLength_-=1)}function L4(t){if(t.byteLength_>SS)throw new Error(t.errorPrefix_+"has a key path longer than "+SS+" bytes ("+t.byteLength_+").");if(t.parts_.length>xS)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xS+") or object contains a cycle "+Wo(t))}function Wo(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb extends O4{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new vb}getInitialEvent(e){return oe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=1e3,gX=60*5*1e3,CS=30*1e3,vX=1.3,yX=3e4,_X="server_kill",kS=3;class ia extends D4{constructor(e,n,r,i,s,a,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=ia.nextPersistentConnectionId_++,this.log_=Uh("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$c,this.maxReconnectDelay_=gX,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!qR())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vb.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&jp.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Tn(s)),oe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Sr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oe(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(a).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},a="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(a,s,l=>{const c=l.d,d=l.s;ia.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),d!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(d,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qr(e,"w")){const r=lu(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();nr("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ".concat(i," at ").concat(s," to your security rules for better performance."))}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dV(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=CS)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cV(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,a=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},a="n";i&&(s.q=r,s.t=i),this.sendRequest(a,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,a=>{i&&setTimeout(()=>{i(a.s,a.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const a={p:n,d:r};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:e,request:a,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Tn(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):N2("Unrecognized action received from server: "+Tn(e)+"\nAre you using the latest client?")}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){oe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$c,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$c,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yX&&(this.reconnectDelay_=$c),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vX)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ia.nextConnectionId_++,s=this.lastSessionId;let a=!1,l=null;const c=function(){l?l.close():(a=!0,r())},d=function(g){oe(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(g)};this.realtime_={close:c,sendRequest:d};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[g,v]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);a?Dn("getToken() completed but was canceled"):(Dn("getToken() completed. Creating connection."),this.authToken_=g&&g.accessToken,this.appCheckToken_=v&&v.token,l=new cX(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,b=>{nr(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(_X)},s))}catch(g){this.log_("Failed to get token: "+g),a||(this.repoInfo_.nodeAdmin&&nr(g),c())}}}interrupt(e){Dn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Dn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ap(this.interruptReasons_)&&(this.reconnectDelay_=$c,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>db(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new _t(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Dn("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kS&&(this.reconnectDelay_=CS,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Dn("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kS&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+l4.replace(/\./g,"-")]=1,Hw()?e["framework.cordova"]=1:$m()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=jp.getInstance().currentlyOnline();return Ap(this.interruptReasons_)&&e}}ia.nextPersistentConnectionId_=0;ia.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Qe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Qe(fo,e),i=new Qe(fo,n);return this.compare(r,i)!==0}minPost(){return Qe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d0;class F4 extends rg{static get __EMPTY_NODE(){return d0}static set __EMPTY_NODE(e){d0=e}compare(e,n){return Su(e.name,n.name)}isDefinedOn(e){throw nc("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Qe.MIN}maxPost(){return new Qe(fa,d0)}makePost(e,n){return oe(typeof e=="string","KeyIndex indexValue must always be a string."),new Qe(e,d0)}toString(){return".key"}}const ms=new F4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=n?r(e.key,n):1,i&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Rn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Rn.RED,this.left=i!=null?i:kr.EMPTY_NODE,this.right=s!=null?s:kr.EMPTY_NODE}copy(e,n,r,i,s){return new Rn(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return kr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return kr.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Rn.RED=!0;Rn.BLACK=!1;class wX{copy(e,n,r,i,s){return this}insert(e,n,r){return new Rn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kr{constructor(e,n=kr.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kr(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Rn.BLACK,null,null))}remove(e){return new kr(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rn.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new h0(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new h0(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new h0(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new h0(this.root_,null,this.comparator_,!0,e)}}kr.EMPTY_NODE=new wX;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bX(t,e){return Su(t.name,e.name)}function yb(t,e){return Su(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P2;function TX(t){P2=t}const j4=function(t){return typeof t=="number"?"number:"+g4(t):"string:"+t},U4=function(t){if(t.isLeafNode()){const e=t.val();oe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qr(e,".sv"),"Priority must be a string or number.")}else oe(t===P2||t.isEmpty(),"priority of unexpected type.");oe(t===P2||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AS;class kn{constructor(e,n=kn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,oe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),U4(this.priorityNode_)}static set __childrenNodeConstructor(e){AS=e}static get __childrenNodeConstructor(){return AS}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new kn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:kn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Je(e)?this:Ke(e)===".priority"?this.priorityNode_:kn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:kn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ke(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(oe(r!==".priority"||po(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,kn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Rt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+j4(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=g4(this.value_):e+=this.value_,this.lazyHash_=f4(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===kn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof kn.__childrenNodeConstructor?-1:(oe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=kn.VALUE_TYPE_ORDER.indexOf(n),s=kn.VALUE_TYPE_ORDER.indexOf(r);return oe(i>=0,"Unknown leaf type: "+n),oe(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}kn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W4,H4;function IX(t){W4=t}function EX(t){H4=t}class xX extends rg{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Su(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Qe.MIN}maxPost(){return new Qe(fa,new kn("[PRIORITY-POST]",H4))}makePost(e,n){const r=W4(e);return new Qe(n,new kn("[PRIORITY-POST]",r))}toString(){return".priority"}}const Lt=new xX;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SX=Math.log(2);class CX{constructor(e){const n=s=>parseInt(Math.log(s)/SX,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Up=function(t,e,n,r){t.sort(e);const i=function(c,d){const p=d-c;let g,v;if(p===0)return null;if(p===1)return g=t[c],v=n?n(g):g,new Rn(v,g.node,Rn.BLACK,null,null);{const b=parseInt(p/2,10)+c,I=i(c,b),k=i(b+1,d);return g=t[b],v=n?n(g):g,new Rn(v,g.node,Rn.BLACK,I,k)}},s=function(c){let d=null,p=null,g=t.length;const v=function(I,k){const D=g-I,x=g;g-=I;const _=i(D+1,x),E=t[D],A=n?n(E):E;b(new Rn(A,E.node,k,null,_))},b=function(I){d?(d.left=I,d=I):(p=I,d=I)};for(let I=0;I<c.count;++I){const k=c.nextBitIsOne(),D=Math.pow(2,c.count-(I+1));k?v(D,Rn.BLACK):(v(D,Rn.BLACK),v(D,Rn.RED))}return p},a=new CX(t.length),l=s(a);return new kr(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey;const Vu={};class Qs{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return oe(Vu&&Lt,"ChildrenNode.ts has not been loaded"),ey=ey||new Qs({".priority":Vu},{".priority":Lt}),ey}get(e){const n=lu(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kr?n:null}hasIndex(e){return Qr(this.indexSet_,e.toString())}addIndex(e,n){oe(e!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Qe.Wrap);let a=s.getNext();for(;a;)i=i||e.isDefinedOn(a.node),r.push(a),a=s.getNext();let l;i?l=Up(r,e.getCompare()):l=Vu;const c=e.toString(),d=Object.assign({},this.indexSet_);d[c]=e;const p=Object.assign({},this.indexes_);return p[c]=l,new Qs(p,d)}addToIndexes(e,n){const r=Np(this.indexes_,(i,s)=>{const a=lu(this.indexSet_,s);if(oe(a,"Missing index implementation for "+s),i===Vu)if(a.isDefinedOn(e.node)){const l=[],c=n.getIterator(Qe.Wrap);let d=c.getNext();for(;d;)d.name!==e.name&&l.push(d),d=c.getNext();return l.push(e),Up(l,a.getCompare())}else return Vu;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new Qe(e.name,l))),c.insert(e,e.node)}});return new Qs(r,this.indexSet_)}removeFromIndexes(e,n){const r=Np(this.indexes_,i=>{if(i===Vu)return i;{const s=n.get(e.name);return s?i.remove(new Qe(e.name,s)):i}});return new Qs(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;class Re{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&U4(this.priorityNode_),this.children_.isEmpty()&&oe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Vc||(Vc=new Re(new kr(yb),null,Qs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vc}updatePriority(e){return this.children_.isEmpty()?this:new Re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vc:n}}getChild(e){const n=Ke(e);return n===null?this:this.getImmediateChild(n).getChild(Rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(oe(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Qe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const a=i.isEmpty()?Vc:this.priorityNode_;return new Re(i,a,s)}}updateChild(e,n){const r=Ke(e);if(r===null)return n;{oe(Ke(e)!==".priority"||po(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Rt(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Lt,(a,l)=>{n[a]=l.val(e),r++,s&&Re.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):s=!1}),!e&&s&&i<2*r){const a=[];for(const l in n)a[l]=n[l];return a}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+j4(this.getPriority().val())+":"),this.forEachChild(Lt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":f4(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Qe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Qe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Qe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Qe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Qe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wh?-1:0}withIndex(e){if(e===ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Lt),i=n.getIterator(Lt);let s=r.getNext(),a=i.getNext();for(;s&&a;){if(s.name!==a.name||!s.node.equals(a.node))return!1;s=r.getNext(),a=i.getNext()}return s===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===ms?null:this.indexMap_.get(e.toString())}}Re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kX extends Re{constructor(){super(new kr(yb),Re.EMPTY_NODE,Qs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Re.EMPTY_NODE}isEmpty(){return!1}}const Wh=new kX;Object.defineProperties(Qe,{MIN:{value:new Qe(fo,Re.EMPTY_NODE)},MAX:{value:new Qe(fa,Wh)}});F4.__EMPTY_NODE=Re.EMPTY_NODE;kn.__childrenNodeConstructor=Re;TX(Wh);EX(Wh);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AX=!0;function Xt(t,e=null){if(t===null)return Re.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),oe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new kn(n,Xt(e))}if(!(t instanceof Array)&&AX){const n=[];let r=!1;if(Ln(t,(a,l)=>{if(a.substring(0,1)!=="."){const c=Xt(l);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Qe(a,c)))}}),n.length===0)return Re.EMPTY_NODE;const s=Up(n,bX,a=>a.name,yb);if(r){const a=Up(n,Lt.getCompare());return new Re(s,Xt(e),new Qs({".priority":a},{".priority":Lt}))}else return new Re(s,Xt(e),Qs.Default)}else{let n=Re.EMPTY_NODE;return Ln(t,(r,i)=>{if(Qr(t,r)&&r.substring(0,1)!=="."){const s=Xt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Xt(e))}}IX(Xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b extends rg{constructor(e){super(),this.indexPath_=e,oe(!Je(e)&&Ke(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Su(e.name,n.name):s}makePost(e,n){const r=Xt(e),i=Re.EMPTY_NODE.updateChild(this.indexPath_,r);return new Qe(n,i)}maxPost(){const e=Re.EMPTY_NODE.updateChild(this.indexPath_,Wh);return new Qe(fa,e)}toString(){return ah(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NX extends rg{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Su(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Qe.MIN}maxPost(){return Qe.MAX}makePost(e,n){const r=Xt(e);return new Qe(n,r)}toString(){return".value"}}const wb=new NX;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(t){return{type:"value",snapshotNode:t}}function Yl(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function oh(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function uh(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RX(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.index_=e}updateChild(e,n,r,i,s,a){oe(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(a!=null&&(r.isEmpty()?e.hasChild(n)?a.trackChildChange(oh(n,l)):oe(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?a.trackChildChange(Yl(n,r)):a.trackChildChange(uh(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Lt,(i,s)=>{n.hasChild(i)||r.trackChildChange(oh(i,s))}),n.isLeafNode()||n.forEachChild(Lt,(i,s)=>{if(e.hasChild(i)){const a=e.getImmediateChild(i);a.equals(s)||r.trackChildChange(uh(i,s,a))}else r.trackChildChange(Yl(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Re.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.indexedFilter_=new bb(e.getIndex()),this.index_=e.getIndex(),this.startPost_=lh.getStartPost_(e),this.endPost_=lh.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,a){return this.matches(new Qe(n,r))||(r=Re.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,a)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Re.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Re.EMPTY_NODE);const s=this;return n.forEachChild(Lt,(a,l)=>{s.matches(new Qe(a,l))||(i=i.updateImmediateChild(a,Re.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PX{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new lh(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,a){return this.rangedFilter_.matches(new Qe(n,r))||(r=Re.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,a):this.fullLimitUpdateChild_(e,n,r,s,a)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Re.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Re.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;s.hasNext()&&a<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),a++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Re.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let a=0;for(;s.hasNext();){const l=s.getNext();a<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?a++:i=i.updateImmediateChild(l.name,Re.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let a;if(this.reverse_){const g=this.index_.getCompare();a=(v,b)=>g(b,v)}else a=this.index_.getCompare();const l=e;oe(l.numChildren()===this.limit_,"");const c=new Qe(n,r),d=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),p=this.rangedFilter_.matches(c);if(l.hasChild(n)){const g=l.getImmediateChild(n);let v=i.getChildAfterChild(this.index_,d,this.reverse_);for(;v!=null&&(v.name===n||l.hasChild(v.name));)v=i.getChildAfterChild(this.index_,v,this.reverse_);const b=v==null?1:a(v,c);if(p&&!r.isEmpty()&&b>=0)return s!=null&&s.trackChildChange(uh(n,r,g)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(oh(n,g));const k=l.updateImmediateChild(n,Re.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(s!=null&&s.trackChildChange(Yl(v.name,v.node)),k.updateImmediateChild(v.name,v.node)):k}}else return r.isEmpty()?e:p&&a(d,c)>=0?(s!=null&&(s.trackChildChange(oh(d.name,d.node)),s.trackChildChange(Yl(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(d.name,Re.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return oe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fo}hasEnd(){return this.endSet_}getIndexEndValue(){return oe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return oe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Lt}copy(){const e=new ig;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function DX(t){return t.loadsAllData()?new bb(t.getIndex()):t.hasLimit()?new PX(t):new lh(t)}function OX(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function MX(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function D2(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function LX(t,e,n){let r;return t.index_===ms||n?r=D2(t,e,n):r=D2(t,e,fa),r.startAfterSet_=!0,r}function O2(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function FX(t,e,n){let r;return t.index_===ms||n?r=O2(t,e,n):r=O2(t,e,fo),r.endBeforeSet_=!0,r}function sg(t,e){const n=t.copy();return n.index_=e,n}function NS(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Lt?n="$priority":t.index_===wb?n="$value":t.index_===ms?n="$key":(oe(t.index_ instanceof _b,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Tn(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Tn(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Tn(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Tn(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Tn(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function RS(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Lt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends D4{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Uh("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(oe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const a=Wp.getListenId_(e,r),l={};this.listens_[a]=l;const c=NS(e._queryParams);this.restRequest_(s+".json",c,(d,p)=>{let g=p;if(d===404&&(g=null,d=null),d===null&&this.onDataUpdate_(s,g,!1,r),lu(this.listens_,a)===l){let v;d?d===401?v="permission_denied":v="rest_error:"+d:v="ok",i(v,null)}})}unlisten(e,n){const r=Wp.getListenId_(e,n);delete this.listens_[r]}get(e){const n=NS(e._queryParams),r=e._path.toString(),i=new Sr;return this.restRequest_(r+".json",n,(s,a)=>{let l=a;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Eu(n);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Xd(l.responseText)}catch{nr("Failed to parse JSON response for "+a+": "+l.responseText)}r(null,c)}else l.status!==401&&l.status!==404&&nr("Got unsuccessful REST response for "+a+" Status: "+l.status),r(l.status);r=null}},l.open("GET",a,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jX{constructor(){this.rootNode_=Re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){return{value:null,children:new Map}}function uc(t,e,n){if(Je(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ke(e);t.children.has(r)||t.children.set(r,Hp());const i=t.children.get(r);e=Rt(e),uc(i,e,n)}}function M2(t,e){if(Je(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Lt,(r,i)=>{uc(t,new _t(r),i)}),M2(t,e)}}else if(t.children.size>0){const n=Ke(e);return e=Rt(e),t.children.has(n)&&M2(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function L2(t,e,n){t.value!==null?n(e,t.value):UX(t,(r,i)=>{const s=new _t(e.toString()+"/"+r);L2(i,s,n)})}function UX(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WX{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ln(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=10*1e3,HX=30*1e3,GX=5*60*1e3;class YX{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WX(e);const r=PS+(HX-PS)*Math.random();Id(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ln(e,(i,s)=>{s>0&&Qr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Id(this.reportStats_.bind(this),Math.floor(Math.random()*2*GX))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ui||(Ui={}));function Tb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ib(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eb(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ui.ACK_USER_WRITE,this.source=Tb()}operationForChild(e){if(Je(this.path)){if(this.affectedTree.value!=null)return oe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _t(e));return new Gp(ht(),n,this.revert)}}else return oe(Ke(this.path)===e,"operationForChild called for unrelated child."),new Gp(Rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){this.source=e,this.path=n,this.type=Ui.LISTEN_COMPLETE}operationForChild(e){return Je(this.path)?new ch(this.source,ht()):new ch(this.source,Rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ui.OVERWRITE}operationForChild(e){return Je(this.path)?new pu(this.source,ht(),this.snap.getImmediateChild(e)):new pu(this.source,Rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ui.MERGE}operationForChild(e){if(Je(this.path)){const n=this.children.subtree(new _t(e));return n.isEmpty()?null:n.value?new pu(this.source,ht(),n.value):new Bl(this.source,ht(),n)}else return oe(Ke(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bl(this.source,Rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Je(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ke(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BX{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $X(t,e,n,r){const i=[],s=[];return e.forEach(a=>{a.type==="child_changed"&&t.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&s.push(RX(a.childName,a.snapshotNode))}),zc(t,i,"child_removed",e,r,n),zc(t,i,"child_added",e,r,n),zc(t,i,"child_moved",s,r,n),zc(t,i,"child_changed",e,r,n),zc(t,i,"value",e,r,n),i}function zc(t,e,n,r,i,s){const a=r.filter(l=>l.type===n);a.sort((l,c)=>zX(t,l,c)),a.forEach(l=>{const c=VX(t,l,s);i.forEach(d=>{d.respondsTo(l.type)&&e.push(d.createEvent(c,t.query_))})})}function VX(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zX(t,e,n){if(e.childName==null||n.childName==null)throw nc("Should only compare child_ events.");const r=new Qe(e.childName,e.snapshotNode),i=new Qe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t,e){return{eventCache:t,serverCache:e}}function Ed(t,e,n,r){return ag(new mo(e,n,r),t.serverCache)}function Y4(t,e,n,r){return ag(t.eventCache,new mo(e,n,r))}function Yp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mu(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty;const qX=()=>(ty||(ty=new kr(NQ)),ty);class Ot{constructor(e,n=qX()){this.value=e,this.children=n}static fromObject(e){let n=new Ot(null);return Ln(e,(r,i)=>{n=n.set(new _t(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ht(),value:this.value};if(Je(e))return null;{const r=Ke(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Rt(e),n);return s!=null?{path:$t(new _t(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Je(e))return this;{const n=Ke(e),r=this.children.get(n);return r!==null?r.subtree(Rt(e)):new Ot(null)}}set(e,n){if(Je(e))return new Ot(n,this.children);{const r=Ke(e),s=(this.children.get(r)||new Ot(null)).set(Rt(e),n),a=this.children.insert(r,s);return new Ot(this.value,a)}}remove(e){if(Je(e))return this.children.isEmpty()?new Ot(null):new Ot(null,this.children);{const n=Ke(e),r=this.children.get(n);if(r){const i=r.remove(Rt(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ot(null):new Ot(this.value,s)}else return this}}get(e){if(Je(e))return this.value;{const n=Ke(e),r=this.children.get(n);return r?r.get(Rt(e)):null}}setTree(e,n){if(Je(e))return n;{const r=Ke(e),s=(this.children.get(r)||new Ot(null)).setTree(Rt(e),n);let a;return s.isEmpty()?a=this.children.remove(r):a=this.children.insert(r,s),new Ot(this.value,a)}}fold(e){return this.fold_(ht(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_($t(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ht(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Je(e))return null;{const s=Ke(e),a=this.children.get(s);return a?a.findOnPath_(Rt(e),$t(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ht(),n)}foreachOnPath_(e,n,r){if(Je(e))return this;{this.value&&r(n,this.value);const i=Ke(e),s=this.children.get(i);return s?s.foreachOnPath_(Rt(e),$t(n,i),r):new Ot(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_($t(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.writeTree_=e}static empty(){return new Gi(new Ot(null))}}function xd(t,e,n){if(Je(e))return new Gi(new Ot(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const a=dr(i,e);return s=s.updateChild(a,n),new Gi(t.writeTree_.set(i,s))}else{const i=new Ot(n),s=t.writeTree_.setTree(e,i);return new Gi(s)}}}function F2(t,e,n){let r=t;return Ln(n,(i,s)=>{r=xd(r,$t(e,i),s)}),r}function DS(t,e){if(Je(e))return Gi.empty();{const n=t.writeTree_.setTree(e,new Ot(null));return new Gi(n)}}function j2(t,e){return Cu(t,e)!=null}function Cu(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(dr(n.path,e)):null}function OS(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Lt,(r,i)=>{e.push(new Qe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Qe(r,i.value))}),e}function ro(t,e){if(Je(e))return t;{const n=Cu(t,e);return n!=null?new Gi(new Ot(n)):new Gi(t.writeTree_.subtree(e))}}function U2(t){return t.writeTree_.isEmpty()}function $l(t,e){return B4(ht(),t.writeTree_,e)}function B4(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(oe(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=B4($t(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild($t(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t,e){return q4(e,t)}function KX(t,e,n,r,i){oe(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=xd(t.visibleWrites,e,n)),t.lastWriteId=r}function JX(t,e,n,r){oe(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=F2(t.visibleWrites,e,n),t.lastWriteId=r}function QX(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function XX(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);oe(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,a=t.allWrites.length-1;for(;i&&a>=0;){const l=t.allWrites[a];l.visible&&(a>=n&&ZX(l,r.path)?i=!1:yi(r.path,l.path)&&(s=!0)),a--}if(i){if(s)return eZ(t),!0;if(r.snap)t.visibleWrites=DS(t.visibleWrites,r.path);else{const l=r.children;Ln(l,c=>{t.visibleWrites=DS(t.visibleWrites,$t(r.path,c))})}return!0}else return!1}function ZX(t,e){if(t.snap)return yi(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yi($t(t.path,n),e))return!0;return!1}function eZ(t){t.visibleWrites=$4(t.allWrites,tZ,ht()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function tZ(t){return t.visible}function $4(t,e,n){let r=Gi.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const a=s.path;let l;if(s.snap)yi(n,a)?(l=dr(n,a),r=xd(r,l,s.snap)):yi(a,n)&&(l=dr(a,n),r=xd(r,ht(),s.snap.getChild(l)));else if(s.children){if(yi(n,a))l=dr(n,a),r=F2(r,l,s.children);else if(yi(a,n))if(l=dr(a,n),Je(l))r=F2(r,ht(),s.children);else{const c=lu(s.children,Ke(l));if(c){const d=c.getChild(Rt(l));r=xd(r,ht(),d)}}}else throw nc("WriteRecord should have .snap or .children")}}return r}function V4(t,e,n,r,i){if(!r&&!i){const s=Cu(t.visibleWrites,e);if(s!=null)return s;{const a=ro(t.visibleWrites,e);if(U2(a))return n;if(n==null&&!j2(a,ht()))return null;{const l=n||Re.EMPTY_NODE;return $l(a,l)}}}else{const s=ro(t.visibleWrites,e);if(!i&&U2(s))return n;if(!i&&n==null&&!j2(s,ht()))return null;{const a=function(d){return(d.visible||i)&&(!r||!~r.indexOf(d.writeId))&&(yi(d.path,e)||yi(e,d.path))},l=$4(t.allWrites,a,e),c=n||Re.EMPTY_NODE;return $l(l,c)}}}function nZ(t,e,n){let r=Re.EMPTY_NODE;const i=Cu(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Lt,(s,a)=>{r=r.updateImmediateChild(s,a)}),r;if(n){const s=ro(t.visibleWrites,e);return n.forEachChild(Lt,(a,l)=>{const c=$l(ro(s,new _t(a)),l);r=r.updateImmediateChild(a,c)}),OS(s).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}else{const s=ro(t.visibleWrites,e);return OS(s).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}}function rZ(t,e,n,r,i){oe(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=$t(e,n);if(j2(t.visibleWrites,s))return null;{const a=ro(t.visibleWrites,s);return U2(a)?i.getChild(n):$l(a,i.getChild(n))}}function iZ(t,e,n,r){const i=$t(e,n),s=Cu(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const a=ro(t.visibleWrites,i);return $l(a,r.getNode().getImmediateChild(n))}else return null}function sZ(t,e){return Cu(t.visibleWrites,e)}function aZ(t,e,n,r,i,s,a){let l;const c=ro(t.visibleWrites,e),d=Cu(c,ht());if(d!=null)l=d;else if(n!=null)l=$l(c,n);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const p=[],g=a.getCompare(),v=s?l.getReverseIteratorFrom(r,a):l.getIteratorFrom(r,a);let b=v.getNext();for(;b&&p.length<i;)g(b,r)!==0&&p.push(b),b=v.getNext();return p}else return[]}function oZ(){return{visibleWrites:Gi.empty(),allWrites:[],lastWriteId:-1}}function Bp(t,e,n,r){return V4(t.writeTree,t.treePath,e,n,r)}function xb(t,e){return nZ(t.writeTree,t.treePath,e)}function MS(t,e,n,r){return rZ(t.writeTree,t.treePath,e,n,r)}function $p(t,e){return sZ(t.writeTree,$t(t.treePath,e))}function uZ(t,e,n,r,i,s){return aZ(t.writeTree,t.treePath,e,n,r,i,s)}function Sb(t,e,n){return iZ(t.writeTree,t.treePath,e,n)}function z4(t,e){return q4($t(t.treePath,e),t.writeTree)}function q4(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lZ{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;oe(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),oe(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,uh(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,oh(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Yl(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,uh(r,e.snapshotNode,i.oldSnap));else throw nc("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cZ{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const K4=new cZ;class Cb{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sb(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mu(this.viewCache_),s=uZ(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dZ(t){return{filter:t}}function hZ(t,e){oe(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),oe(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fZ(t,e,n,r,i){const s=new lZ;let a,l;if(n.type===Ui.OVERWRITE){const d=n;d.source.fromUser?a=W2(t,e,d.path,d.snap,r,i,s):(oe(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered()&&!Je(d.path),a=Vp(t,e,d.path,d.snap,r,i,l,s))}else if(n.type===Ui.MERGE){const d=n;d.source.fromUser?a=mZ(t,e,d.path,d.children,r,i,s):(oe(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered(),a=H2(t,e,d.path,d.children,r,i,l,s))}else if(n.type===Ui.ACK_USER_WRITE){const d=n;d.revert?a=yZ(t,e,d.path,r,i,s):a=gZ(t,e,d.path,d.affectedTree,r,i,s)}else if(n.type===Ui.LISTEN_COMPLETE)a=vZ(t,e,n.path,r,s);else throw nc("Unknown operation type: "+n.type);const c=s.getChanges();return pZ(e,a,c),{viewCache:a,changes:c}}function pZ(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Yp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(G4(Yp(e)))}}function J4(t,e,n,r,i,s){const a=e.eventCache;if($p(r,n)!=null)return e;{let l,c;if(Je(n))if(oe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=mu(e),p=d instanceof Re?d:Re.EMPTY_NODE,g=xb(r,p);l=t.filter.updateFullNode(e.eventCache.getNode(),g,s)}else{const d=Bp(r,mu(e));l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const d=Ke(n);if(d===".priority"){oe(po(n)===1,"Can't have a priority with additional path components");const p=a.getNode();c=e.serverCache.getNode();const g=MS(r,n,p,c);g!=null?l=t.filter.updatePriority(p,g):l=a.getNode()}else{const p=Rt(n);let g;if(a.isCompleteForChild(d)){c=e.serverCache.getNode();const v=MS(r,n,a.getNode(),c);v!=null?g=a.getNode().getImmediateChild(d).updateChild(p,v):g=a.getNode().getImmediateChild(d)}else g=Sb(r,d,e.serverCache);g!=null?l=t.filter.updateChild(a.getNode(),d,g,p,i,s):l=a.getNode()}}return Ed(e,l,a.isFullyInitialized()||Je(n),t.filter.filtersNodes())}}function Vp(t,e,n,r,i,s,a,l){const c=e.serverCache;let d;const p=a?t.filter:t.filter.getIndexedFilter();if(Je(n))d=p.updateFullNode(c.getNode(),r,null);else if(p.filtersNodes()&&!c.isFiltered()){const b=c.getNode().updateChild(n,r);d=p.updateFullNode(c.getNode(),b,null)}else{const b=Ke(n);if(!c.isCompleteForPath(n)&&po(n)>1)return e;const I=Rt(n),D=c.getNode().getImmediateChild(b).updateChild(I,r);b===".priority"?d=p.updatePriority(c.getNode(),D):d=p.updateChild(c.getNode(),b,D,I,K4,null)}const g=Y4(e,d,c.isFullyInitialized()||Je(n),p.filtersNodes()),v=new Cb(i,g,s);return J4(t,g,n,i,v,l)}function W2(t,e,n,r,i,s,a){const l=e.eventCache;let c,d;const p=new Cb(i,e,s);if(Je(n))d=t.filter.updateFullNode(e.eventCache.getNode(),r,a),c=Ed(e,d,!0,t.filter.filtersNodes());else{const g=Ke(n);if(g===".priority")d=t.filter.updatePriority(e.eventCache.getNode(),r),c=Ed(e,d,l.isFullyInitialized(),l.isFiltered());else{const v=Rt(n),b=l.getNode().getImmediateChild(g);let I;if(Je(v))I=r;else{const k=p.getCompleteChild(g);k!=null?mb(v)===".priority"&&k.getChild(M4(v)).isEmpty()?I=k:I=k.updateChild(v,r):I=Re.EMPTY_NODE}if(b.equals(I))c=e;else{const k=t.filter.updateChild(l.getNode(),g,I,v,p,a);c=Ed(e,k,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function LS(t,e){return t.eventCache.isCompleteForChild(e)}function mZ(t,e,n,r,i,s,a){let l=e;return r.foreach((c,d)=>{const p=$t(n,c);LS(e,Ke(p))&&(l=W2(t,l,p,d,i,s,a))}),r.foreach((c,d)=>{const p=$t(n,c);LS(e,Ke(p))||(l=W2(t,l,p,d,i,s,a))}),l}function FS(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function H2(t,e,n,r,i,s,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,d;Je(n)?d=r:d=new Ot(null).setTree(n,r);const p=e.serverCache.getNode();return d.children.inorderTraversal((g,v)=>{if(p.hasChild(g)){const b=e.serverCache.getNode().getImmediateChild(g),I=FS(t,b,v);c=Vp(t,c,new _t(g),I,i,s,a,l)}}),d.children.inorderTraversal((g,v)=>{const b=!e.serverCache.isCompleteForChild(g)&&v.value===null;if(!p.hasChild(g)&&!b){const I=e.serverCache.getNode().getImmediateChild(g),k=FS(t,I,v);c=Vp(t,c,new _t(g),k,i,s,a,l)}}),c}function gZ(t,e,n,r,i,s,a){if($p(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(Je(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Vp(t,e,n,c.getNode().getChild(n),i,s,l,a);if(Je(n)){let d=new Ot(null);return c.getNode().forEachChild(ms,(p,g)=>{d=d.set(new _t(p),g)}),H2(t,e,n,d,i,s,l,a)}else return e}else{let d=new Ot(null);return r.foreach((p,g)=>{const v=$t(n,p);c.isCompleteForPath(v)&&(d=d.set(p,c.getNode().getChild(v)))}),H2(t,e,n,d,i,s,l,a)}}function vZ(t,e,n,r,i){const s=e.serverCache,a=Y4(e,s.getNode(),s.isFullyInitialized()||Je(n),s.isFiltered());return J4(t,a,n,r,K4,i)}function yZ(t,e,n,r,i,s){let a;if($p(r,n)!=null)return e;{const l=new Cb(r,e,i),c=e.eventCache.getNode();let d;if(Je(n)||Ke(n)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=Bp(r,mu(e));else{const g=e.serverCache.getNode();oe(g instanceof Re,"serverChildren would be complete if leaf node"),p=xb(r,g)}p=p,d=t.filter.updateFullNode(c,p,s)}else{const p=Ke(n);let g=Sb(r,p,e.serverCache);g==null&&e.serverCache.isCompleteForChild(p)&&(g=c.getImmediateChild(p)),g!=null?d=t.filter.updateChild(c,p,g,Rt(n),l,s):e.eventCache.getNode().hasChild(p)?d=t.filter.updateChild(c,p,Re.EMPTY_NODE,Rt(n),l,s):d=c,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Bp(r,mu(e)),a.isLeafNode()&&(d=t.filter.updateFullNode(d,a,s)))}return a=e.serverCache.isFullyInitialized()||$p(r,ht())!=null,Ed(e,d,a,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _Z{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new bb(r.getIndex()),s=DX(r);this.processor_=dZ(s);const a=n.serverCache,l=n.eventCache,c=i.updateFullNode(Re.EMPTY_NODE,a.getNode(),null),d=s.updateFullNode(Re.EMPTY_NODE,l.getNode(),null),p=new mo(c,a.isFullyInitialized(),i.filtersNodes()),g=new mo(d,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ag(g,p),this.eventGenerator_=new BX(this.query_)}get query(){return this.query_}}function wZ(t){return t.viewCache_.serverCache.getNode()}function bZ(t){return Yp(t.viewCache_)}function TZ(t,e){const n=mu(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Je(e)&&!n.getImmediateChild(Ke(e)).isEmpty())?n.getChild(e):null}function jS(t){return t.eventRegistrations_.length===0}function IZ(t,e){t.eventRegistrations_.push(e)}function US(t,e,n){const r=[];if(n){oe(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const a=s.createCancelEvent(n,i);a&&r.push(a)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const a=t.eventRegistrations_[s];if(!a.matches(e))i.push(a);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function WS(t,e,n,r){e.type===Ui.MERGE&&e.source.queryId!==null&&(oe(mu(t.viewCache_),"We should always have a full cache before handling merges"),oe(Yp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=fZ(t.processor_,i,e,n,r);return hZ(t.processor_,s.viewCache),oe(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Q4(t,s.changes,s.viewCache.eventCache.getNode(),null)}function EZ(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Lt,(s,a)=>{r.push(Yl(s,a))}),n.isFullyInitialized()&&r.push(G4(n.getNode())),Q4(t,r,n.getNode(),e)}function Q4(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $X(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp;class X4{constructor(){this.views=new Map}}function xZ(t){oe(!zp,"__referenceConstructor has already been defined"),zp=t}function SZ(){return oe(zp,"Reference.ts has not been loaded"),zp}function CZ(t){return t.views.size===0}function kb(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return oe(s!=null,"SyncTree gave us an op for an invalid query."),WS(s,e,n,r)}else{let s=[];for(const a of t.views.values())s=s.concat(WS(a,e,n,r));return s}}function Z4(t,e,n,r,i){const s=e._queryIdentifier,a=t.views.get(s);if(!a){let l=Bp(n,i?r:null),c=!1;l?c=!0:r instanceof Re?(l=xb(n,r),c=!1):(l=Re.EMPTY_NODE,c=!1);const d=ag(new mo(l,c,!1),new mo(r,i,!1));return new _Z(e,d)}return a}function kZ(t,e,n,r,i,s){const a=Z4(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,a),IZ(a,n),EZ(a,n)}function AZ(t,e,n,r){const i=e._queryIdentifier,s=[];let a=[];const l=go(t);if(i==="default")for(const[c,d]of t.views.entries())a=a.concat(US(d,n,r)),jS(d)&&(t.views.delete(c),d.query._queryParams.loadsAllData()||s.push(d.query));else{const c=t.views.get(i);c&&(a=a.concat(US(c,n,r)),jS(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return l&&!go(t)&&s.push(new(SZ())(e._repo,e._path)),{removed:s,events:a}}function eP(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function io(t,e){let n=null;for(const r of t.views.values())n=n||TZ(r,e);return n}function tP(t,e){if(e._queryParams.loadsAllData())return ug(t);{const r=e._queryIdentifier;return t.views.get(r)}}function nP(t,e){return tP(t,e)!=null}function go(t){return ug(t)!=null}function ug(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qp;function NZ(t){oe(!qp,"__referenceConstructor has already been defined"),qp=t}function RZ(){return oe(qp,"Reference.ts has not been loaded"),qp}let PZ=1;class HS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ot(null),this.pendingWriteTree_=oZ(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ab(t,e,n,r,i){return KX(t.pendingWriteTree_,e,n,r,i),i?lc(t,new pu(Tb(),e,n)):[]}function DZ(t,e,n,r){JX(t.pendingWriteTree_,e,n,r);const i=Ot.fromObject(n);return lc(t,new Bl(Tb(),e,i))}function Ba(t,e,n=!1){const r=QX(t.pendingWriteTree_,e);if(XX(t.pendingWriteTree_,e)){let s=new Ot(null);return r.snap!=null?s=s.set(ht(),!0):Ln(r.children,a=>{s=s.set(new _t(a),!0)}),lc(t,new Gp(r.path,s,n))}else return[]}function Hh(t,e,n){return lc(t,new pu(Ib(),e,n))}function OZ(t,e,n){const r=Ot.fromObject(n);return lc(t,new Bl(Ib(),e,r))}function MZ(t,e){return lc(t,new ch(Ib(),e))}function LZ(t,e,n){const r=Nb(t,n);if(r){const i=Rb(r),s=i.path,a=i.queryId,l=dr(s,e),c=new ch(Eb(a),l);return Pb(t,s,c)}else return[]}function Kp(t,e,n,r,i=!1){const s=e._path,a=t.syncPointTree_.get(s);let l=[];if(a&&(e._queryIdentifier==="default"||nP(a,e))){const c=AZ(a,e,n,r);CZ(a)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const d=c.removed;if(l=c.events,!i){const p=d.findIndex(v=>v._queryParams.loadsAllData())!==-1,g=t.syncPointTree_.findOnPath(s,(v,b)=>go(b));if(p&&!g){const v=t.syncPointTree_.subtree(s);if(!v.isEmpty()){const b=UZ(v);for(let I=0;I<b.length;++I){const k=b[I],D=k.query,x=aP(t,k);t.listenProvider_.startListening(Sd(D),dh(t,D),x.hashFn,x.onComplete)}}}!g&&d.length>0&&!r&&(p?t.listenProvider_.stopListening(Sd(e),null):d.forEach(v=>{const b=t.queryToTagMap.get(cg(v));t.listenProvider_.stopListening(Sd(v),b)}))}WZ(t,d)}return l}function rP(t,e,n,r){const i=Nb(t,r);if(i!=null){const s=Rb(i),a=s.path,l=s.queryId,c=dr(a,e),d=new pu(Eb(l),c,n);return Pb(t,a,d)}else return[]}function FZ(t,e,n,r){const i=Nb(t,r);if(i){const s=Rb(i),a=s.path,l=s.queryId,c=dr(a,e),d=Ot.fromObject(n),p=new Bl(Eb(l),c,d);return Pb(t,a,p)}else return[]}function G2(t,e,n,r=!1){const i=e._path;let s=null,a=!1;t.syncPointTree_.foreachOnPath(i,(v,b)=>{const I=dr(v,i);s=s||io(b,I),a=a||go(b)});let l=t.syncPointTree_.get(i);l?(a=a||go(l),s=s||io(l,ht())):(l=new X4,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;s!=null?c=!0:(c=!1,s=Re.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((b,I)=>{const k=io(I,ht());k&&(s=s.updateImmediateChild(b,k))}));const d=nP(l,e);if(!d&&!e._queryParams.loadsAllData()){const v=cg(e);oe(!t.queryToTagMap.has(v),"View does not exist, but we have a tag");const b=HZ();t.queryToTagMap.set(v,b),t.tagToQueryMap.set(b,v)}const p=og(t.pendingWriteTree_,i);let g=kZ(l,e,n,p,s,c);if(!d&&!a&&!r){const v=tP(l,e);g=g.concat(GZ(t,e,v))}return g}function lg(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(a,l)=>{const c=dr(a,e),d=io(l,c);if(d)return d});return V4(i,e,s,n,!0)}function jZ(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(d,p)=>{const g=dr(d,n);r=r||io(p,g)});let i=t.syncPointTree_.get(n);i?r=r||io(i,ht()):(i=new X4,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,a=s?new mo(r,!0,!1):null,l=og(t.pendingWriteTree_,e._path),c=Z4(i,e,l,s?a.getNode():Re.EMPTY_NODE,s);return bZ(c)}function lc(t,e){return iP(e,t.syncPointTree_,null,og(t.pendingWriteTree_,ht()))}function iP(t,e,n,r){if(Je(t.path))return sP(t,e,n,r);{const i=e.get(ht());n==null&&i!=null&&(n=io(i,ht()));let s=[];const a=Ke(t.path),l=t.operationForChild(a),c=e.children.get(a);if(c&&l){const d=n?n.getImmediateChild(a):null,p=z4(r,a);s=s.concat(iP(l,c,d,p))}return i&&(s=s.concat(kb(i,t,r,n))),s}}function sP(t,e,n,r){const i=e.get(ht());n==null&&i!=null&&(n=io(i,ht()));let s=[];return e.children.inorderTraversal((a,l)=>{const c=n?n.getImmediateChild(a):null,d=z4(r,a),p=t.operationForChild(a);p&&(s=s.concat(sP(p,l,c,d)))}),i&&(s=s.concat(kb(i,t,r,n))),s}function aP(t,e){const n=e.query,r=dh(t,n);return{hashFn:()=>(wZ(e)||Re.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?LZ(t,n._path,r):MZ(t,n._path);{const s=DQ(i,n);return Kp(t,n,null,s)}}}}function dh(t,e){const n=cg(e);return t.queryToTagMap.get(n)}function cg(t){return t._path.toString()+"$"+t._queryIdentifier}function Nb(t,e){return t.tagToQueryMap.get(e)}function Rb(t){const e=t.indexOf("$");return oe(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _t(t.substr(0,e))}}function Pb(t,e,n){const r=t.syncPointTree_.get(e);oe(r,"Missing sync point for query tag that we're tracking");const i=og(t.pendingWriteTree_,e);return kb(r,n,i,null)}function UZ(t){return t.fold((e,n,r)=>{if(n&&go(n))return[ug(n)];{let i=[];return n&&(i=eP(n)),Ln(r,(s,a)=>{i=i.concat(a)}),i}})}function Sd(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(RZ())(t._repo,t._path):t}function WZ(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=cg(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function HZ(){return PZ++}function GZ(t,e,n){const r=e._path,i=dh(t,e),s=aP(t,n),a=t.listenProvider_.startListening(Sd(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)oe(!go(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((d,p,g)=>{if(!Je(d)&&p&&go(p))return[ug(p).query];{let v=[];return p&&(v=v.concat(eP(p).map(b=>b.query))),Ln(g,(b,I)=>{v=v.concat(I)}),v}});for(let d=0;d<c.length;++d){const p=c[d];t.listenProvider_.stopListening(Sd(p),dh(t,p))}}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Db(n)}node(){return this.node_}}class Ob{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$t(this.path_,e);return new Ob(this.syncTree_,n)}node(){return lg(this.syncTree_,this.path_)}}const YZ=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},GS=function(t,e,n){if(!t||typeof t!="object")return t;if(oe(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BZ(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $Z(t[".sv"],e);oe(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BZ=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:oe(!1,"Unexpected server value: "+t)}},$Z=function(t,e,n){t.hasOwnProperty("increment")||oe(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&oe(!1,"Unexpected increment value: "+r);const i=e.node();if(oe(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const a=i.getValue();return typeof a!="number"?r:a+r},oP=function(t,e,n,r){return Lb(e,new Ob(n,t),r)},Mb=function(t,e,n){return Lb(t,new Db(e),n)};function Lb(t,e,n){const r=t.getPriority().val(),i=GS(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const a=t,l=GS(a.getValue(),e,n);return l!==a.getValue()||i!==a.getPriority().val()?new kn(l,Xt(i)):t}else{const a=t;return s=a,i!==a.getPriority().val()&&(s=s.updatePriority(new kn(i))),a.forEachChild(Lt,(l,c)=>{const d=Lb(c,e.getImmediateChild(l),n);d!==c&&(s=s.updateImmediateChild(l,d))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function dg(t,e){let n=e instanceof _t?e:new _t(e),r=t,i=Ke(n);for(;i!==null;){const s=lu(r.node.children,i)||{children:{},childCount:0};r=new Fb(i,r,s),n=Rt(n),i=Ke(n)}return r}function ku(t){return t.node.value}function jb(t,e){t.node.value=e,Y2(t)}function uP(t){return t.node.childCount>0}function VZ(t){return ku(t)===void 0&&!uP(t)}function hg(t,e){Ln(t.node.children,(n,r)=>{e(new Fb(n,t,r))})}function lP(t,e,n,r){n&&!r&&e(t),hg(t,i=>{lP(i,e,!0,r)}),n&&r&&e(t)}function zZ(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Gh(t){return new _t(t.parent===null?t.name:Gh(t.parent)+"/"+t.name)}function Y2(t){t.parent!==null&&qZ(t.parent,t.name,t)}function qZ(t,e,n){const r=VZ(n),i=Qr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Y2(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Y2(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KZ=/[\[\].#$\/\u0000-\u001F\u007F]/,JZ=/[\[\].#$\u0000-\u001F\u007F]/,ny=10*1024*1024,fg=function(t){return typeof t=="string"&&t.length!==0&&!KZ.test(t)},cP=function(t){return typeof t=="string"&&t.length!==0&&!JZ.test(t)},QZ=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cP(t)},hh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ng(t)||t&&typeof t=="object"&&Qr(t,".sv")},bs=function(t,e,n,r){r&&e===void 0||Yh(Dr(t,"value"),e,n)},Yh=function(t,e,n){const r=n instanceof _t?new fX(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wo(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wo(r)+" with contents = "+e.toString());if(ng(e))throw new Error(t+"contains "+e.toString()+" "+Wo(r));if(typeof e=="string"&&e.length>ny/3&&Vm(e)>ny)throw new Error(t+"contains a string greater than "+ny+" utf8 bytes "+Wo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ln(e,(a,l)=>{if(a===".value")i=!0;else if(a!==".priority"&&a!==".sv"&&(s=!0,!fg(a)))throw new Error(t+" contains an invalid key ("+a+") "+Wo(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');pX(r,a),Yh(t,l,r),mX(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wo(r)+" in addition to actual children.")}},XZ=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ah(r);for(let a=0;a<s.length;a++)if(!(s[a]===".priority"&&a===s.length-1)){if(!fg(s[a]))throw new Error(t+"contains an invalid key ("+s[a]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}}e.sort(hX);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&yi(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},dP=function(t,e,n,r){if(r&&e===void 0)return;const i=Dr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ln(e,(a,l)=>{const c=new _t(a);if(Yh(i,l,$t(n,c)),mb(c)===".priority"&&!hh(l))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),XZ(i,s)},Ub=function(t,e,n){if(!(n&&e===void 0)){if(ng(e))throw new Error(Dr(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!hh(e))throw new Error(Dr(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Bh=function(t,e,n,r){if(!(r&&n===void 0)&&!fg(n))throw new Error(Dr(t,e)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},fh=function(t,e,n,r){if(!(r&&n===void 0)&&!cP(n))throw new Error(Dr(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ZZ=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fh(t,e,n,r)},_i=function(t,e){if(Ke(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},hP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!QZ(n))throw new Error(Dr(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eee{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pg(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!gb(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function fP(t,e,n){pg(t,n),pP(t,r=>gb(r,e))}function Xr(t,e,n){pg(t,n),pP(t,r=>yi(r,e)||yi(e,r))}function pP(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(tee(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tee(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();nu&&Dn("event: "+n.toString()),oc(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="repo_interrupt",nee=25;class ree{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eee,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hp(),this.transactionQueueTree_=new Fb,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iee(t,e,n){if(t.stats_=fb(t.repoInfo_),t.forceRestClient_||FQ())t.server_=new Wp(t.repoInfo_,(r,i,s,a)=>{YS(t,r,i,s,a)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>BS(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tn(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ia(t.repoInfo_,e,(r,i,s,a)=>{YS(t,r,i,s,a)},r=>{BS(t,r)},r=>{see(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=GQ(t.repoInfo_,()=>new YX(t.stats_,t.server_)),t.infoData_=new jX,t.infoSyncTree_=new HS({startListening:(r,i,s,a)=>{let l=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(l=Hh(t.infoSyncTree_,r._path,c),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),Wb(t,"connected",!1),t.serverSyncTree_=new HS({startListening:(r,i,s,a)=>(t.server_.listen(r,s,i,(l,c)=>{const d=a(l,c);Xr(t.eventQueue_,r._path,d)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function gP(t){const n=t.infoData_.getNode(new _t(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $h(t){return YZ({timestamp:gP(t)})}function YS(t,e,n,r,i){t.dataUpdateCount++;const s=new _t(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(i)if(r){const c=Np(n,d=>Xt(d));a=FZ(t.serverSyncTree_,s,c,i)}else{const c=Xt(n);a=rP(t.serverSyncTree_,s,c,i)}else if(r){const c=Np(n,d=>Xt(d));a=OZ(t.serverSyncTree_,s,c)}else{const c=Xt(n);a=Hh(t.serverSyncTree_,s,c)}let l=s;a.length>0&&(l=Vl(t,s)),Xr(t.eventQueue_,l,a)}function BS(t,e){Wb(t,"connected",e),e===!1&&uee(t)}function see(t,e){Ln(e,(n,r)=>{Wb(t,n,r)})}function Wb(t,e,n){const r=new _t("/.info/"+e),i=Xt(n);t.infoData_.updateSnapshot(r,i);const s=Hh(t.infoSyncTree_,r,i);Xr(t.eventQueue_,r,s)}function mg(t){return t.nextWriteId_++}function aee(t,e,n){const r=jZ(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Xt(i).withIndex(e._queryParams.getIndex());G2(t.serverSyncTree_,e,n,!0);let a;if(e._queryParams.loadsAllData())a=Hh(t.serverSyncTree_,e._path,s);else{const l=dh(t.serverSyncTree_,e);a=rP(t.serverSyncTree_,e._path,s,l)}return Xr(t.eventQueue_,e._path,a),Kp(t.serverSyncTree_,e,n,null,!0),s},i=>(cc(t,"get for query "+Tn(e)+" failed: "+i),Promise.reject(new Error(i))))}function Hb(t,e,n,r,i){cc(t,"set",{path:e.toString(),value:n,priority:r});const s=$h(t),a=Xt(n,r),l=lg(t.serverSyncTree_,e),c=Mb(a,l,s),d=mg(t),p=Ab(t.serverSyncTree_,e,c,d,!0);pg(t.eventQueue_,p),t.server_.put(e.toString(),a.val(!0),(v,b)=>{const I=v==="ok";I||nr("set at "+e+" failed: "+v);const k=Ba(t.serverSyncTree_,d,!I);Xr(t.eventQueue_,e,k),vo(t,i,v,b)});const g=Yb(t,e);Vl(t,g),Xr(t.eventQueue_,g,[])}function oee(t,e,n,r){cc(t,"update",{path:e.toString(),value:n});let i=!0;const s=$h(t),a={};if(Ln(n,(l,c)=>{i=!1,a[l]=oP($t(e,l),Xt(c),t.serverSyncTree_,s)}),i)Dn("update() called with empty data.  Don't do anything."),vo(t,r,"ok",void 0);else{const l=mg(t),c=DZ(t.serverSyncTree_,e,a,l);pg(t.eventQueue_,c),t.server_.merge(e.toString(),n,(d,p)=>{const g=d==="ok";g||nr("update at "+e+" failed: "+d);const v=Ba(t.serverSyncTree_,l,!g),b=v.length>0?Vl(t,e):e;Xr(t.eventQueue_,b,v),vo(t,r,d,p)}),Ln(n,d=>{const p=Yb(t,$t(e,d));Vl(t,p)}),Xr(t.eventQueue_,e,[])}}function uee(t){cc(t,"onDisconnectEvents");const e=$h(t),n=Hp();L2(t.onDisconnect_,ht(),(i,s)=>{const a=oP(i,s,t.serverSyncTree_,e);uc(n,i,a)});let r=[];L2(n,ht(),(i,s)=>{r=r.concat(Hh(t.serverSyncTree_,i,s));const a=Yb(t,i);Vl(t,a)}),t.onDisconnect_=Hp(),Xr(t.eventQueue_,ht(),r)}function lee(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&M2(t.onDisconnect_,e),vo(t,n,r,i)})}function $S(t,e,n,r){const i=Xt(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,a)=>{s==="ok"&&uc(t.onDisconnect_,e,i),vo(t,r,s,a)})}function cee(t,e,n,r,i){const s=Xt(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(a,l)=>{a==="ok"&&uc(t.onDisconnect_,e,s),vo(t,i,a,l)})}function dee(t,e,n,r){if(Ap(n)){Dn("onDisconnect().update() called with empty data.  Don't do anything."),vo(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Ln(n,(a,l)=>{const c=Xt(l);uc(t.onDisconnect_,$t(e,a),c)}),vo(t,r,i,s)})}function hee(t,e,n){let r;Ke(e._path)===".info"?r=G2(t.infoSyncTree_,e,n):r=G2(t.serverSyncTree_,e,n),fP(t.eventQueue_,e._path,r)}function B2(t,e,n){let r;Ke(e._path)===".info"?r=Kp(t.infoSyncTree_,e,n):r=Kp(t.serverSyncTree_,e,n),fP(t.eventQueue_,e._path,r)}function vP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(mP)}function fee(t){t.persistentConnection_&&t.persistentConnection_.resume(mP)}function cc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Dn(n,...e)}function vo(t,e,n,r){e&&oc(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const a=new Error(s);a.code=i,e(a)}})}function pee(t,e,n,r,i,s){cc(t,"transaction on "+e);const a={path:e,update:n,onComplete:r,status:null,order:h4(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Gb(t,e,void 0);a.currentInputSnapshot=l;const c=a.update(l.val());if(c===void 0)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Yh("transaction failed: Data returned ",c,a.path),a.status=0;const d=dg(t.transactionQueueTree_,e),p=ku(d)||[];p.push(a),jb(d,p);let g;typeof c=="object"&&c!==null&&Qr(c,".priority")?(g=lu(c,".priority"),oe(hh(g),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):g=(lg(t.serverSyncTree_,e)||Re.EMPTY_NODE).getPriority().val();const v=$h(t),b=Xt(c,g),I=Mb(b,l,v);a.currentOutputSnapshotRaw=b,a.currentOutputSnapshotResolved=I,a.currentWriteId=mg(t);const k=Ab(t.serverSyncTree_,e,I,a.currentWriteId,a.applyLocally);Xr(t.eventQueue_,e,k),gg(t,t.transactionQueueTree_)}}function Gb(t,e,n){return lg(t.serverSyncTree_,e,n)||Re.EMPTY_NODE}function gg(t,e=t.transactionQueueTree_){if(e||vg(t,e),ku(e)){const n=_P(t,e);oe(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mee(t,Gh(e),n)}else uP(e)&&hg(e,n=>{gg(t,n)})}function mee(t,e,n){const r=n.map(d=>d.currentWriteId),i=Gb(t,e,r);let s=i;const a=i.hash();for(let d=0;d<n.length;d++){const p=n[d];oe(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const g=dr(e,p.path);s=s.updateChild(g,p.currentOutputSnapshotRaw)}const l=s.val(!0),c=e;t.server_.put(c.toString(),l,d=>{cc(t,"transaction put response",{path:c.toString(),status:d});let p=[];if(d==="ok"){const g=[];for(let v=0;v<n.length;v++)n[v].status=2,p=p.concat(Ba(t.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&g.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();vg(t,dg(t.transactionQueueTree_,e)),gg(t,t.transactionQueueTree_),Xr(t.eventQueue_,e,p);for(let v=0;v<g.length;v++)oc(g[v])}else{if(d==="datastale")for(let g=0;g<n.length;g++)n[g].status===3?n[g].status=4:n[g].status=0;else{nr("transaction at "+c.toString()+" failed: "+d);for(let g=0;g<n.length;g++)n[g].status=4,n[g].abortReason=d}Vl(t,e)}},a)}function Vl(t,e){const n=yP(t,e),r=Gh(n),i=_P(t,n);return gee(t,i,r),r}function gee(t,e,n){if(e.length===0)return;const r=[];let i=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],d=dr(n,c.path);let p=!1,g;if(oe(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)p=!0,g=c.abortReason,i=i.concat(Ba(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=nee)p=!0,g="maxretry",i=i.concat(Ba(t.serverSyncTree_,c.currentWriteId,!0));else{const v=Gb(t,c.path,a);c.currentInputSnapshot=v;const b=e[l].update(v.val());if(b!==void 0){Yh("transaction failed: Data returned ",b,c.path);let I=Xt(b);typeof b=="object"&&b!=null&&Qr(b,".priority")||(I=I.updatePriority(v.getPriority()));const D=c.currentWriteId,x=$h(t),_=Mb(I,v,x);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=_,c.currentWriteId=mg(t),a.splice(a.indexOf(D),1),i=i.concat(Ab(t.serverSyncTree_,c.path,_,c.currentWriteId,c.applyLocally)),i=i.concat(Ba(t.serverSyncTree_,D,!0))}else p=!0,g="nodata",i=i.concat(Ba(t.serverSyncTree_,c.currentWriteId,!0))}Xr(t.eventQueue_,n,i),i=[],p&&(e[l].status=2,function(v){setTimeout(v,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(g==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(g),!1,null))))}vg(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)oc(r[l]);gg(t,t.transactionQueueTree_)}function yP(t,e){let n,r=t.transactionQueueTree_;for(n=Ke(e);n!==null&&ku(r)===void 0;)r=dg(r,n),e=Rt(e),n=Ke(e);return r}function _P(t,e){const n=[];return wP(t,e,n),n.sort((r,i)=>r.order-i.order),n}function wP(t,e,n){const r=ku(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);hg(e,i=>{wP(t,i,n)})}function vg(t,e){const n=ku(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,jb(e,n.length>0?n:void 0)}hg(e,r=>{vg(t,r)})}function Yb(t,e){const n=Gh(yP(t,e)),r=dg(t.transactionQueueTree_,e);return zZ(r,i=>{ry(t,i)}),ry(t,r),lP(r,i=>{ry(t,i)}),n}function ry(t,e){const n=ku(e);if(n){const r=[];let i=[],s=-1;for(let a=0;a<n.length;a++)n[a].status===3||(n[a].status===1?(oe(s===a-1,"All SENT items should be at beginning of queue."),s=a,n[a].status=3,n[a].abortReason="set"):(oe(n[a].status===0,"Unexpected transaction status in abort"),n[a].unwatcher(),i=i.concat(Ba(t.serverSyncTree_,n[a].currentWriteId,!0)),n[a].onComplete&&r.push(n[a].onComplete.bind(null,new Error("set"),!1,null))));s===-1?jb(e,void 0):n.length=s+1,Xr(t.eventQueue_,Gh(e),i);for(let a=0;a<r.length;a++)oc(r[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vee(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yee(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):nr("Invalid query segment '".concat(n,"' in query '").concat(t,"'"))}return e}const $2=function(t,e){const n=_ee(t),r=n.namespace;n.domain==="firebase.com"&&ws(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ws("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kQ();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new S4(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new _t(n.pathString)}},_ee=function(t){let e="",n="",r="",i="",s="",a=!0,l="https",c=443;if(typeof t=="string"){let d=t.indexOf("//");d>=0&&(l=t.substring(0,d-1),t=t.substring(d+2));let p=t.indexOf("/");p===-1&&(p=t.length);let g=t.indexOf("?");g===-1&&(g=t.length),e=t.substring(0,Math.min(p,g)),p<g&&(i=vee(t.substring(p,g)));const v=yee(t.substring(Math.min(t.length,g)));d=e.indexOf(":"),d>=0?(a=l==="https"||l==="wss",c=parseInt(e.substring(d+1),10)):d=e.length;const b=e.slice(0,d);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const I=e.indexOf(".");r=e.substring(0,I).toLowerCase(),n=e.substring(I+1),s=r}"ns"in v&&(s=v.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:a,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wee=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=VS.charAt(n%64),n=Math.floor(n/64);oe(n===0,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)a+=VS.charAt(e[i]);return oe(a.length===20,"nextPushId: Length should be 20."),a}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Tn(this.snapshot.exportVal())}}class TP{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return oe(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bee=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Sr;return lee(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){_i("OnDisconnect.remove",this._path);const e=new Sr;return $S(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){_i("OnDisconnect.set",this._path),bs("OnDisconnect.set",e,this._path,!1);const n=new Sr;return $S(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){_i("OnDisconnect.setWithPriority",this._path),bs("OnDisconnect.setWithPriority",e,this._path,!1),Ub("OnDisconnect.setWithPriority",n,!1);const r=new Sr;return cee(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){_i("OnDisconnect.update",this._path),dP("OnDisconnect.update",e,this._path,!1);const n=new Sr;return dee(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Je(this._path)?null:mb(this._path)}get ref(){return new Si(this._repo,this._path)}get _queryIdentifier(){const e=RS(this._queryParams),n=db(e);return n==="{}"?"default":n}get _queryObject(){return RS(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof Mr))return!1;const n=this._repo===e._repo,r=gb(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dX(this._path)}}function yg(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Io(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===ms){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==fo)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==fa)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Lt){if(e!=null&&!hh(e)||n!=null&&!hh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(oe(t.getIndex()instanceof _b||t.getIndex()===wb,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function _g(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Si extends Mr{constructor(e,n){super(e,n,new ig,!1)}get parent(){const e=M4(this._path);return e===null?null:new Si(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let wg=class V2{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _t(e),r=gu(this.ref,e);return new V2(this._node.getChild(n),r,Lt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new V2(i,gu(this.ref,r),Lt)))}hasChild(e){const n=new _t(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function IP(t,e){return t=Fe(t),t._checkNotDeleted("ref"),e!==void 0?gu(t._root,e):t._root}function zS(t,e){t=Fe(t),t._checkNotDeleted("refFromURL");const n=$2(e,t._repo.repoInfo_.nodeAdmin);hP("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&ws("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),IP(t,n.path.toString())}function gu(t,e){return t=Fe(t),Ke(t._path)===null?ZZ("child","path",e,!1):fh("child","path",e,!1),new Si(t._repo,$t(t._path,e))}function Tee(t,e){t=Fe(t),_i("push",t._path),bs("push",e,t._path,!0);const n=gP(t._repo),r=wee(n),i=gu(t,r),s=gu(t,r);let a;return e!=null?a=$b(s,e).then(()=>s):a=Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Iee(t){return _i("remove",t._path),$b(t,null)}function $b(t,e){t=Fe(t),_i("set",t._path),bs("set",e,t._path,!1);const n=new Sr;return Hb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Eee(t,e){t=Fe(t),_i("setPriority",t._path),Ub("setPriority",e,!1);const n=new Sr;return Hb(t._repo,$t(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function xee(t,e,n){if(_i("setWithPriority",t._path),bs("setWithPriority",e,t._path,!1),Ub("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new Sr;return Hb(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function See(t,e){dP("update",e,t._path,!1);const n=new Sr;return oee(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Cee(t){t=Fe(t);const e=new Bb(()=>{}),n=new Vh(e);return aee(t._repo,t,n).then(r=>new wg(r,new Si(t._repo,t._path),t._queryParams.getIndex()))}class Vh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new bP("value",this,new wg(e.snapshotNode,new Si(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new TP(this,e,n):null}matches(e){return e instanceof Vh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class bg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new TP(this,e,n):null}createEvent(e,n){oe(e.childName!=null,"Child events should have a childName.");const r=gu(new Si(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new bP(e.type,this,new wg(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof bg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function zh(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const c=n,d=(p,g)=>{B2(t._repo,t,l),c(p,g)};d.userCallback=n.userCallback,d.context=n.context,n=d}const a=new Bb(n,s||void 0),l=e==="value"?new Vh(a):new bg(e,a);return hee(t._repo,t,l),()=>B2(t._repo,t,l)}function z2(t,e,n,r){return zh(t,"value",e,n,r)}function qS(t,e,n,r){return zh(t,"child_added",e,n,r)}function KS(t,e,n,r){return zh(t,"child_changed",e,n,r)}function JS(t,e,n,r){return zh(t,"child_moved",e,n,r)}function QS(t,e,n,r){return zh(t,"child_removed",e,n,r)}function XS(t,e,n){let r=null;const i=n?new Bb(n):null;e==="value"?r=new Vh(i):e&&(r=new bg(e,i)),B2(t._repo,t,r)}class Ki{}class EP extends Ki{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bs("endAt",this._value,e._path,!0);const n=O2(e._queryParams,this._value,this._key);if(_g(n),Io(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Mr(e._repo,e._path,n,e._orderByCalled)}}function kee(t,e){return Bh("endAt","key",e,!0),new EP(t,e)}class Aee extends Ki{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bs("endBefore",this._value,e._path,!1);const n=FX(e._queryParams,this._value,this._key);if(_g(n),Io(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Mr(e._repo,e._path,n,e._orderByCalled)}}function Nee(t,e){return Bh("endBefore","key",e,!0),new Aee(t,e)}class xP extends Ki{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bs("startAt",this._value,e._path,!0);const n=D2(e._queryParams,this._value,this._key);if(_g(n),Io(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Mr(e._repo,e._path,n,e._orderByCalled)}}function Ree(t=null,e){return Bh("startAt","key",e,!0),new xP(t,e)}class Pee extends Ki{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bs("startAfter",this._value,e._path,!1);const n=LX(e._queryParams,this._value,this._key);if(_g(n),Io(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Mr(e._repo,e._path,n,e._orderByCalled)}}function Dee(t,e){return Bh("startAfter","key",e,!0),new Pee(t,e)}class Oee extends Ki{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Mr(e._repo,e._path,OX(e._queryParams,this._limit),e._orderByCalled)}}function Mee(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Oee(t)}class Lee extends Ki{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Mr(e._repo,e._path,MX(e._queryParams,this._limit),e._orderByCalled)}}function Fee(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Lee(t)}class jee extends Ki{constructor(e){super(),this._path=e}_apply(e){yg(e,"orderByChild");const n=new _t(this._path);if(Je(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new _b(n),i=sg(e._queryParams,r);return Io(i),new Mr(e._repo,e._path,i,!0)}}function Uee(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return fh("orderByChild","path",t,!1),new jee(t)}class Wee extends Ki{_apply(e){yg(e,"orderByKey");const n=sg(e._queryParams,ms);return Io(n),new Mr(e._repo,e._path,n,!0)}}function Hee(){return new Wee}class Gee extends Ki{_apply(e){yg(e,"orderByPriority");const n=sg(e._queryParams,Lt);return Io(n),new Mr(e._repo,e._path,n,!0)}}function Yee(){return new Gee}class Bee extends Ki{_apply(e){yg(e,"orderByValue");const n=sg(e._queryParams,wb);return Io(n),new Mr(e._repo,e._path,n,!0)}}function $ee(){return new Bee}class Vee extends Ki{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(bs("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new EP(this._value,this._key)._apply(new xP(this._value,this._key)._apply(e))}}function zee(t,e){return Bh("equalTo","key",e,!0),new Vee(t,e)}function Di(t,...e){let n=Fe(t);for(const r of e)n=r._apply(n);return n}xZ(Si);NZ(Si);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qee="FIREBASE_DATABASE_EMULATOR_HOST",q2={};let Kee=!1;function Jee(t,e,n,r){t.repoInfo_=new S4("".concat(e,":").concat(n),!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function SP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ws("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Dn("Using default host for project ",t.options.projectId),s="".concat(t.options.projectId,"-default-rtdb.firebaseio.com"));let a=$2(s,i),l=a.repoInfo,c,d;typeof process<"u"&&fS&&(d=fS[qee]),d?(c=!0,s="http://".concat(d,"?ns=").concat(l.namespace),a=$2(s,i),l=a.repoInfo):c=!a.repoInfo.secure;const p=i&&c?new Nl(Nl.OWNER):new UQ(t.name,t.options,e);hP("Invalid Firebase Database URL",a),Je(a.path)||ws("Database URL must point to the root of a Firebase Database (not including a child path).");const g=Xee(l,t,p,new jQ(t.name,n));return new Zee(g,t)}function Qee(t,e){const n=q2[e];(!n||n[t.key]!==t)&&ws("Database ".concat(e,"(").concat(t.repoInfo_,") has already been deleted.")),vP(t),delete n[t.key]}function Xee(t,e,n,r){let i=q2[e.name];i||(i={},q2[e.name]=i);let s=i[t.toURLString()];return s&&ws("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ree(t,Kee,n,r),i[t.toURLString()]=s,s}let Zee=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iee(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Si(this._repo,ht())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Qee(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ws("Cannot call "+e+" on a deleted database.")}};function CP(){Gl.IS_TRANSPORT_INITIALIZED&&nr("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function ete(){CP(),Ya.forceDisallow()}function tte(){CP(),mi.forceDisallow(),Ya.forceAllow()}function nte(t,e,n,r={}){t=Fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ws("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ws('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Nl(Nl.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:iV(r.mockUserToken,t.app.options.projectId);s=new Nl(a)}Jee(i,e,n,s)}function rte(t){t=Fe(t),t._checkNotDeleted("goOffline"),vP(t._repo)}function ite(t){t=Fe(t),t._checkNotDeleted("goOnline"),fee(t._repo)}function ste(t,e){p4(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ate(t){c4(bo),co(new Vi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return SP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ps(pS,mS,t),ps(pS,mS,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ote={".sv":"timestamp"};function ute(){return ote}function lte(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cte=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function dte(t,e,n){var r;if(t=Fe(t),_i("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new Sr,a=(c,d,p)=>{let g=null;c?s.reject(c):(g=new wg(p,new Si(t._repo,t._path),Lt),s.resolve(new cte(d,g)))},l=z2(t,()=>{});return pee(t._repo,t._path,e,a,l,i),s.promise}ia.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ia.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ate();const hte="@firebase/database-compat",fte="0.3.4";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pte=new Ph("@firebase/database-compat"),kP=function(t){const e="FIREBASE WARNING: "+t;pte.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mte=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(Dr(t,e)+"must be a boolean.")},gte=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Dr(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vte{constructor(e){this._delegate=e}cancel(e){De("OnDisconnect.cancel",0,1,arguments.length),Nn("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){De("OnDisconnect.remove",0,1,arguments.length),Nn("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){De("OnDisconnect.set",1,2,arguments.length),Nn("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){De("OnDisconnect.setWithPriority",2,3,arguments.length),Nn("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(De("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,kP("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Nn("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yte{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return De("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this._database=e,this._delegate=n}val(){return De("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return De("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return De("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return De("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return De("DataSnapshot.child",0,1,arguments.length),e=String(e),fh("DataSnapshot.child","path",e,!1),new so(this._database,this._delegate.child(e))}hasChild(e){return De("DataSnapshot.hasChild",1,1,arguments.length),fh("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return De("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return De("DataSnapshot.forEach",1,1,arguments.length),Nn("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new so(this._database,n)))}hasChildren(){return De("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return De("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return De("DataSnapshot.ref",0,0,arguments.length),new Br(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Hn{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;De("Query.on",2,4,arguments.length),Nn("Query.on","callback",n,!1);const a=Hn.getCancelAndContextArgs_("Query.on",r,i),l=(d,p)=>{n.call(a.context,new so(this.database,d),p)};l.userCallback=n,l.context=a.context;const c=(s=a.cancel)===null||s===void 0?void 0:s.bind(a.context);switch(e){case"value":return z2(this._delegate,l,c),n;case"child_added":return qS(this._delegate,l,c),n;case"child_removed":return QS(this._delegate,l,c),n;case"child_changed":return KS(this._delegate,l,c),n;case"child_moved":return JS(this._delegate,l,c),n;default:throw new Error(Dr("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(De("Query.off",0,3,arguments.length),gte("Query.off",e,!0),Nn("Query.off","callback",n,!0),Ux("Query.off","context",r,!0),n){const i=()=>{};i.userCallback=n,i.context=r,XS(this._delegate,e,i)}else XS(this._delegate,e)}get(){return Cee(this._delegate).then(e=>new so(this.database,e))}once(e,n,r,i){De("Query.once",1,4,arguments.length),Nn("Query.once","callback",n,!0);const s=Hn.getCancelAndContextArgs_("Query.once",r,i),a=new Sr,l=(d,p)=>{const g=new so(this.database,d);n&&n.call(s.context,g,p),a.resolve(g)};l.userCallback=n,l.context=s.context;const c=d=>{s.cancel&&s.cancel.call(s.context,d),a.reject(d)};switch(e){case"value":z2(this._delegate,l,c,{onlyOnce:!0});break;case"child_added":qS(this._delegate,l,c,{onlyOnce:!0});break;case"child_removed":QS(this._delegate,l,c,{onlyOnce:!0});break;case"child_changed":KS(this._delegate,l,c,{onlyOnce:!0});break;case"child_moved":JS(this._delegate,l,c,{onlyOnce:!0});break;default:throw new Error(Dr("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise}limitToFirst(e){return De("Query.limitToFirst",1,1,arguments.length),new Hn(this.database,Di(this._delegate,Mee(e)))}limitToLast(e){return De("Query.limitToLast",1,1,arguments.length),new Hn(this.database,Di(this._delegate,Fee(e)))}orderByChild(e){return De("Query.orderByChild",1,1,arguments.length),new Hn(this.database,Di(this._delegate,Uee(e)))}orderByKey(){return De("Query.orderByKey",0,0,arguments.length),new Hn(this.database,Di(this._delegate,Hee()))}orderByPriority(){return De("Query.orderByPriority",0,0,arguments.length),new Hn(this.database,Di(this._delegate,Yee()))}orderByValue(){return De("Query.orderByValue",0,0,arguments.length),new Hn(this.database,Di(this._delegate,$ee()))}startAt(e=null,n){return De("Query.startAt",0,2,arguments.length),new Hn(this.database,Di(this._delegate,Ree(e,n)))}startAfter(e=null,n){return De("Query.startAfter",0,2,arguments.length),new Hn(this.database,Di(this._delegate,Dee(e,n)))}endAt(e=null,n){return De("Query.endAt",0,2,arguments.length),new Hn(this.database,Di(this._delegate,kee(e,n)))}endBefore(e=null,n){return De("Query.endBefore",0,2,arguments.length),new Hn(this.database,Di(this._delegate,Nee(e,n)))}equalTo(e,n){return De("Query.equalTo",1,2,arguments.length),new Hn(this.database,Di(this._delegate,zee(e,n)))}toString(){return De("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return De("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(De("Query.isEqual",1,1,arguments.length),!(e instanceof Hn)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Nn(e,"cancel",i.cancel,!0),i.context=r,Ux(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Dr(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new Br(this.database,new Si(this._delegate._repo,this._delegate._path))}}class Br extends Hn{constructor(e,n){super(e,new Mr(n._repo,n._path,new ig,!1)),this.database=e,this._delegate=n}getKey(){return De("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return De("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Br(this.database,gu(this._delegate,e))}getParent(){De("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Br(this.database,e):null}getRoot(){return De("Reference.root",0,0,arguments.length),new Br(this.database,this._delegate.root)}set(e,n){De("Reference.set",1,2,arguments.length),Nn("Reference.set","onComplete",n,!0);const r=$b(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(De("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,kP("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}_i("Reference.update",this._delegate._path),Nn("Reference.update","onComplete",n,!0);const r=See(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){De("Reference.setWithPriority",2,3,arguments.length),Nn("Reference.setWithPriority","onComplete",r,!0);const i=xee(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){De("Reference.remove",0,1,arguments.length),Nn("Reference.remove","onComplete",e,!0);const n=Iee(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){De("Reference.transaction",1,3,arguments.length),Nn("Reference.transaction","transactionUpdate",e,!1),Nn("Reference.transaction","onComplete",n,!0),mte("Reference.transaction","applyLocally",r,!0);const i=dte(this._delegate,e,{applyLocally:r}).then(s=>new yte(s.committed,new so(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){De("Reference.setPriority",1,2,arguments.length),Nn("Reference.setPriority","onComplete",n,!0);const r=Eee(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){De("Reference.push",0,2,arguments.length),Nn("Reference.push","onComplete",n,!0);const r=Tee(this._delegate,e),i=r.then(a=>new Br(this.database,a));n&&i.then(()=>n(null),a=>n(a));const s=new Br(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return _i("Reference.onDisconnect",this._delegate._path),new vte(new bee(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:ete,forceLongPolling:tte}}useEmulator(e,n,r={}){nte(this._delegate,e,n,r)}ref(e){if(De("database.ref",0,1,arguments.length),e instanceof Br){const n=zS(this._delegate,e.toString());return new Br(this,n)}else{const n=IP(this._delegate,e);return new Br(this,n)}}refFromURL(e){De("database.refFromURL",1,1,arguments.length);const r=zS(this._delegate,e);return new Br(this,r)}goOffline(){return De("database.goOffline",0,0,arguments.length),rte(this._delegate)}goOnline(){return De("database.goOnline",0,0,arguments.length),ite(this._delegate)}}ph.ServerValue={TIMESTAMP:ute(),increment:t=>lte(t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _te({app:t,url:e,version:n,customAuthImpl:r,namespace:i,nodeAdmin:s=!1}){c4(n);const a=new QR("auth-internal",new XR("database-standalone"));return a.setComponent(new Vi("auth-internal",()=>r,"PRIVATE")),{instance:new ph(SP(t,a,void 0,e,s),t),namespace:i}}var wte=Object.freeze({__proto__:null,initStandalone:_te});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bte=ph.ServerValue;function Tte(t){t.INTERNAL.registerComponent(new Vi("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new ph(i,r)},"PUBLIC").setServiceProps({Reference:Br,Query:Hn,Database:ph,DataSnapshot:so,enableLogging:ste,INTERNAL:wte,ServerValue:bte}).setMultipleInstances(!0)),t.registerVersion(hte,fte)}Tte(Yn);const Ite={apiKey:"AIzaSyAzTR9pqe-BTlPl_NrZLN6YqqyNxoLvtos",authDomain:"ct-data-773e4.firebaseapp.com",databaseURL:"https://ct-data-773e4.firebaseio.com",projectId:"ct-data-773e4",storageBucket:"",messagingSenderId:"127519582002"};Yn.initializeApp(Ite);const Ete=new Yn.auth.GoogleAuthProvider,iy=Yn.auth(),xte={get:(t,e)=>{if(e in t)return t[e];throw new Error("".concat(e," is not a valid path constant"))}},qc="/admin/",Ste={ADMIN:qc,ADMIN_CC:"".concat(qc,"cc/"),ADMIN_EMAIL_SUBSCRIBERS:"".concat(qc,"email-subscribers/"),ADMIN_EVENTS:"".concat(qc,"events/"),ADMIN_VBS:"".concat(qc,"vbs/")},un="/",Vb={MAIN_HOME:un,BIBLE_STUDY:"".concat(un,"bible-study/"),MAIN_ABOUT_US:"".concat(un,"about-us/"),MAIN_CALENDAR:"".concat(un,"calendar/"),MAIN_CONTACT:"".concat(un,"contact/"),MAIN_CORONAVIRUS:"".concat(un,"coronavirus/"),MAIN_CULTURE_AND_ARTS:"".concat(un,"culture-and-fine-arts/"),MAIN_GED:"".concat(un,"ged/"),MAIN_GIVING:"".concat(un,"giving/"),MAIN_JUBILEE:"".concat(un,"jubilee/"),MAIN_MEDITATIONS:"".concat(un,"meditations/"),MAIN_MEMBERS_ONLY:"".concat(un,"members-only/"),MAIN_MINISTRIES:"".concat(un,"ministries/"),MAIN_NEWS:"".concat(un,"news/"),MAIN_OUTREACH:"".concat(un,"outreach/"),MAIN_SCHOLARSHIP:"".concat(un,"scholarship"),MAIN_STREAM:"".concat(un,"stream/"),MAIN_VOTING_INFORMATION:"".concat(un,"voting/"),MAIN_WATCH:"".concat(un,"watch/"),MAIN_WELCOME:"".concat(un,"welcome/"),MAIN_ANNOUNCEMENTS:"".concat(un,"announcements/")},{MAIN_CALENDAR:Kc}=Vb,Cte={MAIN_CALENDAR_DAY:"".concat(Kc,"day/"),MAIN_CALENDAR_MONTH:"".concat(Kc,"month/"),MAIN_CALENDAR_UPCOMING:"".concat(Kc,"upcoming/"),MAIN_CALENDAR_WEEK:"".concat(Kc,"week/"),MAIN_CALENDAR_YEAR:"".concat(Kc,"year/")},{MAIN_JUBILEE:sy}=Vb,kte={MAIN_JUBILEE_STORE:"".concat(sy,"store"),MAIN_JUBILEE_50TH_ANNIVERSARY:"".concat(sy,"50th-anniversary"),MAIN_JUBILEE_EVENT_CALENDAR:"".concat(sy,"event-calendar")},qh={CE_HOME:"/ce/",CE_CALENDAR:"/ce/calendar/",CE_CC_CHECKIN:"/ce/cc-checkin/",CE_CC_CHECKOUT:"/ce/cc-checkout/",CE_CC_REG_CHILD:"/ce/cc-registration-child/",CE_CC_REG_LANDING:"/ce/cc-registration-landing/",CE_CC_REG_VOLUNTEER:"/ce/cc-registration-volunteer/",CE_IDEA_FORM:"/ce/idea-form/",CE_THANK_YOU:"/ce/thank-you/",CE_VBS_CHECKIN:"/ce/vbs-checkin/",CE_VBS_CHECKOUT:"/ce/vbs-checkout/",CE_VBS_REG_ADULT:"/ce/vbs-registration-adult/",CE_VBS_REG_CHILD:"/ce/vbs-registration-child/",CE_VBS_REG_LANDING:"/ce/vbs-registration-landing/",CE_VBS_REG_STUDENT:"/ce/vbs-registration-student/",CE_VBS_REG_VOLUNTEER:"/ce/vbs-registration-volunteer/",CE_VISION:"/ce/vision/",CE_WHAT:"/ce/what/",CE_WHO:"/ce/who/",CE_WHY:"/ce/why/",CE_YOUTH:"/ce/youth/",OLD_PATHS_CE_IDEA_FORM:["/ce/ideaform/"]},{CE_CALENDAR:Jc}=qh,Ate={CE_CALENDAR_DAY:"".concat(Jc,"day/"),CE_CALENDAR_MONTH:"".concat(Jc,"month/"),CE_CALENDAR_UPCOMING:"".concat(Jc,"upcoming/"),CE_CALENDAR_WEEK:"".concat(Jc,"week/"),CE_CALENDAR_YEAR:"".concat(Jc,"year/")},{CE_VISION:zu}=qh,Nte={CE_VISION_PARTICIPANTS_2016:"".concat(zu,"participants-2016/"),CE_VISION_POWERPOINT:"".concat(zu,"powerpoint/"),CE_VISION_THE_VISION:"".concat(zu,"the-vision/"),CE_VISION_WORKGROUPS:"".concat(zu,"workgroups/"),OLD_PATHS_CE_VISION_PARTICIPANTS_2016:["".concat(zu,"participants2016/")],OLD_PATHS_CE_VISION_THE_VISION:["".concat(zu,"thevision/")]},{CE_YOUTH:js}=qh,Rte={CE_YOUTH_BIBLE_STUDY:"".concat(js,"bible-study/"),CE_YOUTH_CHILDRENS_CHURCH:"".concat(js,"childrens-church/"),CE_YOUTH_GODS_GIFTS:"".concat(js,"gods-gifts/"),CE_YOUTH_SUNDAY_SCHOOL:"".concat(js,"sunday-school/"),CE_YOUTH_USHERS:"".concat(js,"ushers/"),CE_YOUTH_VACATION_BIBLE_SCHOOL:"".concat(js,"vbs/"),OLD_PATHS_CE_YOUTH_CHILDRENS_CHURCH:["".concat(js,"childrenschurch/")],OLD_PATHS_CE_YOUTH_GODS_GIFTS:["".concat(js,"godsgifts/")],OLD_PATHS_CE_YOUTH_SUNDAY_SCHOOL:["".concat(js,"sundayschool/")]},{CE_WHO:ay}=qh,Pte={CE_WHO_CHRISTIAN_ED_STAFF:"".concat(ay,"christian-ed-staff/"),CE_WHO_CTBC:"".concat(ay,"ctbc/"),CE_WHO_PASTOR:"".concat(ay,"pastor/")},ZS={...Ste,...Vb,...Cte,...kte,...qh,...Ate,...Nte,...Pte,...Rte},Ee=typeof Proxy<"u"?new Proxy(ZS,xte):ZS;var RC;const Dte=xt.header(RC||(RC=Tt(["\n  padding-top: 1px; // collapsing margin fix, otherwise, there's white space at the top\n  ",";\n  padding: 32px var(--gutter-space) 32px var(--gutter-space);\n\n  .main-menu-bar {\n    border-top: 1px solid var(--standard-border);\n    border-bottom: 1px solid var(--standard-border);\n    display: flex;\n    font-family: var(--serif);\n    font-size: 20px;\n    justify-content: center;\n    text-transform: uppercase;\n\n    & > div {\n      margin: 0 16px;\n      padding: 16px 8px;\n    }\n  }\n"])),t=>t.imageSource&&"background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\n    url(".concat(t.imageSource,");")),zb=({imageSource:t,menuItems:e})=>{const n=e.map(({hash:r="",text:i,path:s})=>f.jsx("div",{className:"main-menu-item",children:f.jsx(Rh,{to:s+r,children:i})},i));return f.jsx(Dte,{imageSource:t,children:f.jsx("div",{className:"main-menu-bar",children:n})})};zb.propTypes={imageSource:H.string,menuItems:H.array.isRequired};const Ote={ARIAL:"arial, helvetica, sans-serif",ARIAL_NARROW:"'arial narrow', arial, helvetica, sans-serif",BRUSH_SCRIPT:"'Brush Script MT', cursive",CALIBRI:"Calibri, 'Segoe UI', Candara, Segoe, Optima, Arial, sans-serif",CAMBRIA:"cambria, georgia, 'bookman old style', 'times new roman', serif",CENTURY_GOTHIC:"'Century Gothic', CenturyGothic, AppleGothic, sans-serif",CODE:"'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace",GARAMOND:"'Adobe Garamond Pro', Garamond, Baskerville, 'Baskerville Old Face','Hoefler Text', 'Times New Roman', serif",BEBAS:'"Bebas Neue", arial, helvetica, sans-serif',ROBOTO:"Roboto, arial, helvetica, sans-serif"},Bs={GREEN_20:"rgb(146, 208, 80)",GREEN_50:"rgb(115, 175, 85)",GREEN_80:"rgb(102, 158, 74)",ORANGE:"orange",PEACH:"rgb(255, 230, 149)",GRAY38:"rgb(38,38,38)",GRAY41:"rgb(41, 41, 41)",GRAY63:"rgb(63, 63, 63)",GRAY77:"rgb(77, 77, 77)",GRAY83:"rgb(83, 83, 83)",GRAY95:"#5f5f5f",GRAY180:"rgb(180, 180, 180)",GRAY217:"rgb(217, 217, 217)",LIGHTER_BLUE:"rgb(190,215,239)",LIGHT_BLUE:"#5b9bd5",BLUE_50:"rgb(0, 112, 192)",PAYPAL_BLUE:"rgb(0, 121, 193)",BLACK:"black",WHITE:"white",BLACKISH:"rgb(34, 34, 34)",WHITEISH:"rgb(242, 242, 247)",RED:"red",YELLOW:"yellow",MAROON:"#C00000",GREEN:"green",GRAY:"gray"},K2={GENERAL_PAGE_BORDER_COLOR:Bs.GRAY217,STANDARD_BACKGROUND:Bs.WHITE,STANDARD_TEXT:Bs.BLACKISH,CT_PRIMARY:"#8E131B",CT_TEXT_ON_PRIMARY:Bs.WHITEISH,CT_TEXT_ON_SECONDARY:Bs.WHITEISH,CT_TEXT_ON_DARK:Bs.WHITEISH,CT_ACCENT:"#FFC600",CT_LIGHTENED_ACCENT:"#bff3ff",CT_SECOND:"#07294D",CT_THIRD:"#d2b48c"},Mte={FONT_FAMILIES:Ote,COLORS:Bs,LOGICAL_COLORS:K2},Tg={OVAL:"OVAL",RECT:"RECT"},mh={BLACK:"BLACK",GRAY:"GRAY",ORANGE:"ORANGE"};var PC;const Lte=xt.button(PC||(PC=Tt(["\n  box-shadow: none;\n  min-width: 80px;\n  min-height: 30px;\n  color: ",";\n\n  margin-left: 1em;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &.orange-button {\n    background-color: orange;\n  }\n\n  &.gray-button {\n    background-color: gray;\n  }\n\n  &.black-button {\n    background-color: ",";\n    color: ",";\n  }\n\n  &.oval-button {\n    border: none;\n    border-radius: 15px;\n  }\n\n  &.rect-button {\n    border: none;\n  }\n\n  &.disabled {\n    background-color: ",";\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"])),K2.STANDARD_TEXT,Bs.BLACK,K2.CT_TEXT_ON_DARK,Bs.GRAY180);function Fte(t){switch(t){case mh.GRAY:return"gray-button";case mh.BLACK:return"black-button";default:return"orange-button"}}class Fi extends Ve.Component{render(){const{className:e,color:n,disable:r,onClick:i,children:s,buttonShape:a,name:l,value:c,type:d}=this.props,p=Fte(n),g=[a===Tg.RECT?"rect-button":"oval-button",p,e,r&&"disabled"].filter(Boolean).join(" ");return f.jsx(Lte,{className:g,name:l,onClick:i,type:d,value:c,children:s})}}Fi.defaultProps={buttonShape:Tg.OVAL,color:mh.ORANGE,disable:!1};Fi.propTypes={buttonShape:H.oneOf(Object.values(Tg)),children:H.node,className:H.string,color:H.oneOf(Object.values(mh)),disable:H.bool,name:H.string,onClick:H.func,type:H.string,value:H.string};var Jp={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors