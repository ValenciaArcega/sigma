var fw=Object.defineProperty;var pw=(t,e,n)=>e in t?fw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Kl=(t,e,n)=>(pw(t,typeof e!="symbol"?e+"":e,n),n);function mw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rs={},yw={get exports(){return rs},set exports(t){rs=t}},Ya={},T={},vw={get exports(){return T},set exports(t){T=t}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=Symbol.for("react.element"),ww=Symbol.for("react.portal"),Ew=Symbol.for("react.fragment"),Sw=Symbol.for("react.strict_mode"),_w=Symbol.for("react.profiler"),Iw=Symbol.for("react.provider"),Cw=Symbol.for("react.context"),kw=Symbol.for("react.forward_ref"),Tw=Symbol.for("react.suspense"),Nw=Symbol.for("react.memo"),Pw=Symbol.for("react.lazy"),wf=Symbol.iterator;function Rw(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tg=Object.assign,ng={};function ui(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}ui.prototype.isReactComponent={};ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rg(){}rg.prototype=ui.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}var Sh=Eh.prototype=new rg;Sh.constructor=Eh;tg(Sh,ui.prototype);Sh.isPureReactComponent=!0;var Ef=Array.isArray,ig=Object.prototype.hasOwnProperty,_h={current:null},sg={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ig.call(e,r)&&!sg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$s,type:t,key:s,ref:o,props:i,_owner:_h.current}}function Aw(t,e){return{$$typeof:$s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===$s}function Dw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sf=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dw(""+t.key):e.toString(36)}function Uo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $s:case ww:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ql(o,0):r,Ef(i)?(n="",t!=null&&(n=t.replace(Sf,"$&/")+"/"),Uo(i,e,n,"",function(u){return u})):i!=null&&(Ih(i)&&(i=Aw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ef(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ql(s,a);o+=Uo(s,e,n,l,i)}else if(l=Rw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ql(s,a++),o+=Uo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fo(t,e,n){if(t==null)return t;var r=[],i=0;return Uo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ge={current:null},Vo={transition:null},Lw={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:_h};W.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!Ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=ui;W.Fragment=Ew;W.Profiler=_w;W.PureComponent=Eh;W.StrictMode=Sw;W.Suspense=Tw;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lw;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=tg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_h.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ig.call(e,l)&&!sg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$s,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:Cw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iw,_context:t},t.Consumer=t};W.createElement=og;W.createFactory=function(t){var e=og.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:kw,render:t}};W.isValidElement=Ih;W.lazy=function(t){return{$$typeof:Pw,_payload:{_status:-1,_result:t},_init:xw}};W.memo=function(t,e){return{$$typeof:Nw,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Vo.transition;Vo.transition={};try{t()}finally{Vo.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return Ge.current.useCallback(t,e)};W.useContext=function(t){return Ge.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Ge.current.useDeferredValue(t)};W.useEffect=function(t,e){return Ge.current.useEffect(t,e)};W.useId=function(){return Ge.current.useId()};W.useImperativeHandle=function(t,e,n){return Ge.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Ge.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Ge.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Ge.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Ge.current.useReducer(t,e,n)};W.useRef=function(t){return Ge.current.useRef(t)};W.useState=function(t){return Ge.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Ge.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Ge.current.useTransition()};W.version="18.2.0";(function(t){t.exports=W})(vw);const Ow=gw(T),ju=mw({__proto__:null,default:Ow},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mw=T,$w=Symbol.for("react.element"),Fw=Symbol.for("react.fragment"),bw=Object.prototype.hasOwnProperty,Uw=Mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vw={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bw.call(e,r)&&!Vw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$w,type:t,key:s,ref:o,props:i,_owner:Uw.current}}Ya.Fragment=Fw;Ya.jsx=ag;Ya.jsxs=ag;(function(t){t.exports=Ya})(yw);const lg=rs.Fragment,g=rs.jsx,M=rs.jsxs;var Hu={},Bw={get exports(){return Hu},set exports(t){Hu=t}},lt={},Wu={},zw={get exports(){return Wu},set exports(t){Wu=t}},ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,B){var j=R.length;R.push(B);e:for(;0<j;){var he=j-1>>>1,_e=R[he];if(0<i(_e,B))R[he]=B,R[j]=_e,j=he;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],j=R.pop();if(j!==B){R[0]=j;e:for(var he=0,_e=R.length,co=_e>>>1;he<co;){var Bn=2*(he+1)-1,Wl=R[Bn],zn=Bn+1,ho=R[zn];if(0>i(Wl,j))zn<_e&&0>i(ho,Wl)?(R[he]=ho,R[zn]=j,he=zn):(R[he]=Wl,R[Bn]=j,he=Bn);else if(zn<_e&&0>i(ho,j))R[he]=ho,R[zn]=j,he=zn;else break e}}return B}function i(R,B){var j=R.sortIndex-B.sortIndex;return j!==0?j:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,y=!1,w=!1,v=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=R)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(R){if(v=!1,m(R),!w)if(n(l)!==null)w=!0,jl(C);else{var B=n(u);B!==null&&Hl(E,B.startTime-R)}}function C(R,B){w=!1,v&&(v=!1,p(x),x=-1),y=!0;var j=f;try{for(m(B),h=n(l);h!==null&&(!(h.expirationTime>B)||R&&!gt());){var he=h.callback;if(typeof he=="function"){h.callback=null,f=h.priorityLevel;var _e=he(h.expirationTime<=B);B=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(l)&&r(l),m(B)}else r(l);h=n(l)}if(h!==null)var co=!0;else{var Bn=n(u);Bn!==null&&Hl(E,Bn.startTime-B),co=!1}return co}finally{h=null,f=j,y=!1}}var P=!1,A=null,x=-1,ee=5,H=-1;function gt(){return!(t.unstable_now()-H<ee)}function _i(){if(A!==null){var R=t.unstable_now();H=R;var B=!0;try{B=A(!0,R)}finally{B?Ii():(P=!1,A=null)}}else P=!1}var Ii;if(typeof d=="function")Ii=function(){d(_i)};else if(typeof MessageChannel<"u"){var vf=new MessageChannel,dw=vf.port2;vf.port1.onmessage=_i,Ii=function(){dw.postMessage(null)}}else Ii=function(){I(_i,0)};function jl(R){A=R,P||(P=!0,Ii())}function Hl(R,B){x=I(function(){R(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,jl(C))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var j=f;f=B;try{return R()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=f;f=R;try{return B()}finally{f=j}},t.unstable_scheduleCallback=function(R,B,j){var he=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?he+j:he):j=he,R){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=j+_e,R={id:c++,callback:B,priorityLevel:R,startTime:j,expirationTime:_e,sortIndex:-1},j>he?(R.sortIndex=j,e(u,R),n(l)===null&&R===n(u)&&(v?(p(x),x=-1):v=!0,Hl(E,j-he))):(R.sortIndex=_e,e(l,R),w||y||(w=!0,jl(C))),R},t.unstable_shouldYield=gt,t.unstable_wrapCallback=function(R){var B=f;return function(){var j=f;f=B;try{return R.apply(this,arguments)}finally{f=j}}}})(ug);(function(t){t.exports=ug})(zw);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg=T,ot=Wu;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hg=new Set,is={};function gr(t,e){qr(t,e),qr(t+"Capture",e)}function qr(t,e){for(is[t]=e,t=0;t<e.length;t++)hg.add(e[t])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,jw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_f={},If={};function Hw(t){return Ku.call(If,t)?!0:Ku.call(_f,t)?!1:jw.test(t)?If[t]=!0:(_f[t]=!0,!1)}function Ww(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kw(t,e,n,r){if(e===null||typeof e>"u"||Ww(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){De[t]=new Qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];De[e]=new Qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){De[t]=new Qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){De[t]=new Qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){De[t]=new Qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){De[t]=new Qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){De[t]=new Qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){De[t]=new Qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){De[t]=new Qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,kh);De[e]=new Qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,kh);De[e]=new Qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,kh);De[e]=new Qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){De[t]=new Qe(t,1,!1,t.toLowerCase(),null,!1,!1)});De.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){De[t]=new Qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Th(t,e,n,r){var i=De.hasOwnProperty(e)?De[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kw(e,n,i,r)&&(n=null),r||i===null?Hw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),_r=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),Rh=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),pg=Symbol.for("react.offscreen"),Cf=Symbol.iterator;function Ci(t){return t===null||typeof t!="object"?null:(t=Cf&&t[Cf]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Gl;function Li(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||""}return`
`+Gl+t}var Ql=!1;function Yl(t,e){if(!t||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Li(t):""}function qw(t){switch(t.tag){case 5:return Li(t.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 2:case 15:return t=Yl(t.type,!1),t;case 11:return t=Yl(t.type.render,!1),t;case 1:return t=Yl(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ir:return"Fragment";case _r:return"Portal";case qu:return"Profiler";case Nh:return"StrictMode";case Gu:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fg:return(t.displayName||"Context")+".Consumer";case dg:return(t._context.displayName||"Context")+".Provider";case Ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rh:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function Gw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qw(t){var e=mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mo(t){t._valueTracker||(t._valueTracker=Qw(t))}function gg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xu(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=An(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yg(t,e){e=e.checked,e!=null&&Th(t,"checked",e,!1)}function Ju(t,e){yg(t,e);var n=An(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zu(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zu(t,e,n){(e!=="number"||ra(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oi=Array.isArray;function $r(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+An(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Oi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:An(n)}}function vg(t,e){var n=An(e.value),r=An(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var go,Eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ss(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yw=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(t){Yw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zi[e]=zi[t]})});function Sg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(t)&&zi[t]?(""+e).trim():e+"px"}function _g(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Xw=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(t,e){if(e){if(Xw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ic=null;function Ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sc=null,Fr=null,br=null;function Rf(t){if(t=Us(t)){if(typeof sc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=tl(e),sc(t.stateNode,t.type,e))}}function Ig(t){Fr?br?br.push(t):br=[t]:Fr=t}function Cg(){if(Fr){var t=Fr,e=br;if(br=Fr=null,Rf(t),e)for(t=0;t<e.length;t++)Rf(e[t])}}function kg(t,e){return t(e)}function Tg(){}var Xl=!1;function Ng(t,e,n){if(Xl)return t(e,n);Xl=!0;try{return kg(t,e,n)}finally{Xl=!1,(Fr!==null||br!==null)&&(Tg(),Cg())}}function os(t,e){var n=t.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var oc=!1;if(Gt)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){oc=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{oc=!1}function Jw(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ji=!1,ia=null,sa=!1,ac=null,Zw={onError:function(t){ji=!0,ia=t}};function eE(t,e,n,r,i,s,o,a,l){ji=!1,ia=null,Jw.apply(Zw,arguments)}function tE(t,e,n,r,i,s,o,a,l){if(eE.apply(this,arguments),ji){if(ji){var u=ia;ji=!1,ia=null}else throw Error(S(198));sa||(sa=!0,ac=u)}}function yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Af(t){if(yr(t)!==t)throw Error(S(188))}function nE(t){var e=t.alternate;if(!e){if(e=yr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Af(i),t;if(s===r)return Af(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Rg(t){return t=nE(t),t!==null?Ag(t):null}function Ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ag(t);if(e!==null)return e;t=t.sibling}return null}var Dg=ot.unstable_scheduleCallback,Df=ot.unstable_cancelCallback,rE=ot.unstable_shouldYield,iE=ot.unstable_requestPaint,de=ot.unstable_now,sE=ot.unstable_getCurrentPriorityLevel,Dh=ot.unstable_ImmediatePriority,xg=ot.unstable_UserBlockingPriority,oa=ot.unstable_NormalPriority,oE=ot.unstable_LowPriority,Lg=ot.unstable_IdlePriority,Xa=null,At=null;function aE(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Xa,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:cE,lE=Math.log,uE=Math.LN2;function cE(t){return t>>>=0,t===0?32:31-(lE(t)/uE|0)|0}var yo=64,vo=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function aa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mi(a):(s&=o,s!==0&&(r=Mi(s)))}else o=n&~i,o!==0?r=Mi(o):s!==0&&(r=Mi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function hE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Og(){var t=yo;return yo<<=1,!(yo&4194240)&&(yo=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function fE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $g,Lh,Fg,bg,Ug,uc=!1,wo=[],vn=null,wn=null,En=null,as=new Map,ls=new Map,un=[],pE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,e){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":as.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(e.pointerId)}}function Ti(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Us(e),e!==null&&Lh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mE(t,e,n,r,i){switch(e){case"focusin":return vn=Ti(vn,t,e,n,r,i),!0;case"dragenter":return wn=Ti(wn,t,e,n,r,i),!0;case"mouseover":return En=Ti(En,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return as.set(s,Ti(as.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ls.set(s,Ti(ls.get(s)||null,t,e,n,r,i)),!0}return!1}function Vg(t){var e=qn(t.target);if(e!==null){var n=yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Pg(n),e!==null){t.blockedOn=e,Ug(t.priority,function(){Fg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ic=r,n.target.dispatchEvent(r),ic=null}else return e=Us(n),e!==null&&Lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Lf(t,e,n){Bo(t)&&n.delete(e)}function gE(){uc=!1,vn!==null&&Bo(vn)&&(vn=null),wn!==null&&Bo(wn)&&(wn=null),En!==null&&Bo(En)&&(En=null),as.forEach(Lf),ls.forEach(Lf)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,uc||(uc=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,gE)))}function us(t){function e(i){return Ni(i,t)}if(0<wo.length){Ni(wo[0],t);for(var n=1;n<wo.length;n++){var r=wo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vn!==null&&Ni(vn,t),wn!==null&&Ni(wn,t),En!==null&&Ni(En,t),as.forEach(e),ls.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&un.shift()}var Ur=nn.ReactCurrentBatchConfig,la=!0;function yE(t,e,n,r){var i=J,s=Ur.transition;Ur.transition=null;try{J=1,Oh(t,e,n,r)}finally{J=i,Ur.transition=s}}function vE(t,e,n,r){var i=J,s=Ur.transition;Ur.transition=null;try{J=4,Oh(t,e,n,r)}finally{J=i,Ur.transition=s}}function Oh(t,e,n,r){if(la){var i=cc(t,e,n,r);if(i===null)lu(t,e,r,ua,n),xf(t,r);else if(mE(i,t,e,n,r))r.stopPropagation();else if(xf(t,r),e&4&&-1<pE.indexOf(t)){for(;i!==null;){var s=Us(i);if(s!==null&&$g(s),s=cc(t,e,n,r),s===null&&lu(t,e,r,ua,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lu(t,e,r,null,n)}}var ua=null;function cc(t,e,n,r){if(ua=null,t=Ah(r),t=qn(t),t!==null)if(e=yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ua=t,null}function Bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sE()){case Dh:return 1;case xg:return 4;case oa:case oE:return 16;case Lg:return 536870912;default:return 16}default:return 16}}var pn=null,Mh=null,zo=null;function zg(){if(zo)return zo;var t,e=Mh,n=e.length,r,i="value"in pn?pn.value:pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zo=i.slice(t,1<r?1-r:void 0)}function jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Eo(){return!0}function Of(){return!1}function ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Eo:Of,this.isPropagationStopped=Of,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),e}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$h=ut(ci),bs=ae({},ci,{view:0,detail:0}),wE=ut(bs),Zl,eu,Pi,Ja=ae({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(Zl=t.screenX-Pi.screenX,eu=t.screenY-Pi.screenY):eu=Zl=0,Pi=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Mf=ut(Ja),EE=ae({},Ja,{dataTransfer:0}),SE=ut(EE),_E=ae({},bs,{relatedTarget:0}),tu=ut(_E),IE=ae({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),CE=ut(IE),kE=ae({},ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TE=ut(kE),NE=ae({},ci,{data:0}),$f=ut(NE),PE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AE[t])?!!e[t]:!1}function Fh(){return DE}var xE=ae({},bs,{key:function(t){if(t.key){var e=PE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LE=ut(xE),OE=ae({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=ut(OE),ME=ae({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),$E=ut(ME),FE=ae({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),bE=ut(FE),UE=ae({},Ja,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VE=ut(UE),BE=[9,13,27,32],bh=Gt&&"CompositionEvent"in window,Hi=null;Gt&&"documentMode"in document&&(Hi=document.documentMode);var zE=Gt&&"TextEvent"in window&&!Hi,jg=Gt&&(!bh||Hi&&8<Hi&&11>=Hi),bf=String.fromCharCode(32),Uf=!1;function Hg(t,e){switch(t){case"keyup":return BE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function jE(t,e){switch(t){case"compositionend":return Wg(e);case"keypress":return e.which!==32?null:(Uf=!0,bf);case"textInput":return t=e.data,t===bf&&Uf?null:t;default:return null}}function HE(t,e){if(Cr)return t==="compositionend"||!bh&&Hg(t,e)?(t=zg(),zo=Mh=pn=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jg&&e.locale!=="ko"?null:e.data;default:return null}}var WE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WE[t.type]:e==="textarea"}function Kg(t,e,n,r){Ig(r),e=ca(e,"onChange"),0<e.length&&(n=new $h("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wi=null,cs=null;function KE(t){ry(t,0)}function Za(t){var e=Nr(t);if(gg(e))return t}function qE(t,e){if(t==="change")return e}var qg=!1;if(Gt){var nu;if(Gt){var ru="oninput"in document;if(!ru){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),ru=typeof Bf.oninput=="function"}nu=ru}else nu=!1;qg=nu&&(!document.documentMode||9<document.documentMode)}function zf(){Wi&&(Wi.detachEvent("onpropertychange",Gg),cs=Wi=null)}function Gg(t){if(t.propertyName==="value"&&Za(cs)){var e=[];Kg(e,cs,t,Ah(t)),Ng(KE,e)}}function GE(t,e,n){t==="focusin"?(zf(),Wi=e,cs=n,Wi.attachEvent("onpropertychange",Gg)):t==="focusout"&&zf()}function QE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Za(cs)}function YE(t,e){if(t==="click")return Za(e)}function XE(t,e){if(t==="input"||t==="change")return Za(e)}function JE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:JE;function hs(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ku.call(e,i)||!It(t[i],e[i]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,e){var n=jf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function Qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=ra();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ra(t.document)}return e}function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZE(t){var e=Yg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qg(n.ownerDocument.documentElement,n)){if(r!==null&&Uh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hf(n,s);var o=Hf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eS=Gt&&"documentMode"in document&&11>=document.documentMode,kr=null,hc=null,Ki=null,dc=!1;function Wf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||kr==null||kr!==ra(r)||(r=kr,"selectionStart"in r&&Uh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ki&&hs(Ki,r)||(Ki=r,r=ca(hc,"onSelect"),0<r.length&&(e=new $h("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=kr)))}function So(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Tr={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},iu={},Xg={};Gt&&(Xg=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function el(t){if(iu[t])return iu[t];if(!Tr[t])return t;var e=Tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xg)return iu[t]=e[n];return t}var Jg=el("animationend"),Zg=el("animationiteration"),ey=el("animationstart"),ty=el("transitionend"),ny=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,e){ny.set(t,e),gr(e,[t])}for(var su=0;su<Kf.length;su++){var ou=Kf[su],tS=ou.toLowerCase(),nS=ou[0].toUpperCase()+ou.slice(1);$n(tS,"on"+nS)}$n(Jg,"onAnimationEnd");$n(Zg,"onAnimationIteration");$n(ey,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(ty,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rS=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function qf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tE(r,e,void 0,t),t.currentTarget=null}function ry(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;qf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;qf(i,a,u),s=l}}}if(sa)throw t=ac,sa=!1,ac=null,t}function te(t,e){var n=e[yc];n===void 0&&(n=e[yc]=new Set);var r=t+"__bubble";n.has(r)||(iy(e,t,2,!1),n.add(r))}function au(t,e,n){var r=0;e&&(r|=4),iy(n,t,r,e)}var _o="_reactListening"+Math.random().toString(36).slice(2);function ds(t){if(!t[_o]){t[_o]=!0,hg.forEach(function(n){n!=="selectionchange"&&(rS.has(n)||au(n,!1,t),au(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_o]||(e[_o]=!0,au("selectionchange",!1,e))}}function iy(t,e,n,r){switch(Bg(e)){case 1:var i=yE;break;case 4:i=vE;break;default:i=Oh}n=i.bind(null,e,n,t),i=void 0,!oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ng(function(){var u=s,c=Ah(n),h=[];e:{var f=ny.get(t);if(f!==void 0){var y=$h,w=t;switch(t){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":y=LE;break;case"focusin":w="focus",y=tu;break;case"focusout":w="blur",y=tu;break;case"beforeblur":case"afterblur":y=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=SE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=$E;break;case Jg:case Zg:case ey:y=CE;break;case ty:y=bE;break;case"scroll":y=wE;break;case"wheel":y=VE;break;case"copy":case"cut":case"paste":y=TE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ff}var v=(e&4)!==0,I=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,m;d!==null;){m=d;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=os(d,p),E!=null&&v.push(fs(d,E,m)))),I)break;d=d.return}0<v.length&&(f=new y(f,w,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==ic&&(w=n.relatedTarget||n.fromElement)&&(qn(w)||w[Qt]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?qn(w):null,w!==null&&(I=yr(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(v=Mf,E="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ff,E="onPointerLeave",p="onPointerEnter",d="pointer"),I=y==null?f:Nr(y),m=w==null?f:Nr(w),f=new v(E,d+"leave",y,n,c),f.target=I,f.relatedTarget=m,E=null,qn(c)===u&&(v=new v(p,d+"enter",w,n,c),v.target=m,v.relatedTarget=I,E=v),I=E,y&&w)t:{for(v=y,p=w,d=0,m=v;m;m=wr(m))d++;for(m=0,E=p;E;E=wr(E))m++;for(;0<d-m;)v=wr(v),d--;for(;0<m-d;)p=wr(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=wr(v),p=wr(p)}v=null}else v=null;y!==null&&Gf(h,f,y,v,!1),w!==null&&I!==null&&Gf(h,I,w,v,!0)}}e:{if(f=u?Nr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=qE;else if(Vf(f))if(qg)C=XE;else{C=QE;var P=GE}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=YE);if(C&&(C=C(t,u))){Kg(h,C,n,c);break e}P&&P(t,f,u),t==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&Zu(f,"number",f.value)}switch(P=u?Nr(u):window,t){case"focusin":(Vf(P)||P.contentEditable==="true")&&(kr=P,hc=u,Ki=null);break;case"focusout":Ki=hc=kr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,Wf(h,n,c);break;case"selectionchange":if(eS)break;case"keydown":case"keyup":Wf(h,n,c)}var A;if(bh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Cr?Hg(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(jg&&n.locale!=="ko"&&(Cr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Cr&&(A=zg()):(pn=c,Mh="value"in pn?pn.value:pn.textContent,Cr=!0)),P=ca(u,x),0<P.length&&(x=new $f(x,t,null,n,c),h.push({event:x,listeners:P}),A?x.data=A:(A=Wg(n),A!==null&&(x.data=A)))),(A=zE?jE(t,n):HE(t,n))&&(u=ca(u,"onBeforeInput"),0<u.length&&(c=new $f("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}ry(h,e)})}function fs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ca(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=os(t,n),s!=null&&r.unshift(fs(t,s,i)),s=os(t,e),s!=null&&r.push(fs(t,s,i))),t=t.return}return r}function wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=os(n,s),l!=null&&o.unshift(fs(n,l,a))):i||(l=os(n,s),l!=null&&o.push(fs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function Qf(t){return(typeof t=="string"?t:""+t).replace(iS,`
`).replace(sS,"")}function Io(t,e,n){if(e=Qf(e),Qf(t)!==e&&n)throw Error(S(425))}function ha(){}var fc=null,pc=null;function mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(t){return Yf.resolve(null).then(t).catch(lS)}:gc;function lS(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),us(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);us(e)}function Sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hi=Math.random().toString(36).slice(2),Nt="__reactFiber$"+hi,ps="__reactProps$"+hi,Qt="__reactContainer$"+hi,yc="__reactEvents$"+hi,uS="__reactListeners$"+hi,cS="__reactHandles$"+hi;function qn(t){var e=t[Nt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[Nt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xf(t);t!==null;){if(n=t[Nt])return n;t=Xf(t)}return e}t=n,n=t.parentNode}return null}function Us(t){return t=t[Nt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function tl(t){return t[ps]||null}var vc=[],Pr=-1;function Fn(t){return{current:t}}function ne(t){0>Pr||(t.current=vc[Pr],vc[Pr]=null,Pr--)}function Z(t,e){Pr++,vc[Pr]=t.current,t.current=e}var Dn={},ze=Fn(Dn),Ze=Fn(!1),or=Dn;function Gr(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function et(t){return t=t.childContextTypes,t!=null}function da(){ne(Ze),ne(ze)}function Jf(t,e,n){if(ze.current!==Dn)throw Error(S(168));Z(ze,e),Z(Ze,n)}function sy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Gw(t)||"Unknown",i));return ae({},n,r)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,or=ze.current,Z(ze,t),Z(Ze,Ze.current),!0}function Zf(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=sy(t,e,or),r.__reactInternalMemoizedMergedChildContext=t,ne(Ze),ne(ze),Z(ze,t)):ne(Ze),Z(Ze,n)}var bt=null,nl=!1,cu=!1;function oy(t){bt===null?bt=[t]:bt.push(t)}function hS(t){nl=!0,oy(t)}function bn(){if(!cu&&bt!==null){cu=!0;var t=0,e=J;try{var n=bt;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bt=null,nl=!1}catch(i){throw bt!==null&&(bt=bt.slice(t+1)),Dg(Dh,bn),i}finally{J=e,cu=!1}}return null}var Rr=[],Ar=0,pa=null,ma=0,ct=[],ht=0,ar=null,Vt=1,Bt="";function jn(t,e){Rr[Ar++]=ma,Rr[Ar++]=pa,pa=t,ma=e}function ay(t,e,n){ct[ht++]=Vt,ct[ht++]=Bt,ct[ht++]=ar,ar=t;var r=Vt;t=Bt;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vt=1<<32-St(e)+i|n<<i|r,Bt=s+t}else Vt=1<<s|n<<i|r,Bt=t}function Vh(t){t.return!==null&&(jn(t,1),ay(t,1,0))}function Bh(t){for(;t===pa;)pa=Rr[--Ar],Rr[Ar]=null,ma=Rr[--Ar],Rr[Ar]=null;for(;t===ar;)ar=ct[--ht],ct[ht]=null,Bt=ct[--ht],ct[ht]=null,Vt=ct[--ht],ct[ht]=null}var st=null,it=null,re=!1,Et=null;function ly(t,e){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,st=t,it=Sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,st=t,it=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ar!==null?{id:Vt,overflow:Bt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,st=t,it=null,!0):!1;default:return!1}}function wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ec(t){if(re){var e=it;if(e){var n=e;if(!ep(t,e)){if(wc(t))throw Error(S(418));e=Sn(n.nextSibling);var r=st;e&&ep(t,e)?ly(r,n):(t.flags=t.flags&-4097|2,re=!1,st=t)}}else{if(wc(t))throw Error(S(418));t.flags=t.flags&-4097|2,re=!1,st=t}}}function tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;st=t}function Co(t){if(t!==st)return!1;if(!re)return tp(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mc(t.type,t.memoizedProps)),e&&(e=it)){if(wc(t))throw uy(),Error(S(418));for(;e;)ly(t,e),e=Sn(e.nextSibling)}if(tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){it=Sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}it=null}}else it=st?Sn(t.stateNode.nextSibling):null;return!0}function uy(){for(var t=it;t;)t=Sn(t.nextSibling)}function Qr(){it=st=null,re=!1}function zh(t){Et===null?Et=[t]:Et.push(t)}var dS=nn.ReactCurrentBatchConfig;function vt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ga=Fn(null),ya=null,Dr=null,jh=null;function Hh(){jh=Dr=ya=null}function Wh(t){var e=ga.current;ne(ga),t._currentValue=e}function Sc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vr(t,e){ya=t,jh=Dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Je=!0),t.firstContext=null)}function pt(t){var e=t._currentValue;if(jh!==t)if(t={context:t,memoizedValue:e,next:null},Dr===null){if(ya===null)throw Error(S(308));Dr=t,ya.dependencies={lanes:0,firstContext:t}}else Dr=Dr.next=t;return e}var Gn=null;function Kh(t){Gn===null?Gn=[t]:Gn.push(t)}function cy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Kh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yt(t,r)}function Yt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ln=!1;function qh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _n(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yt(t,n)}return i=r.interleaved,i===null?(e.next=e,Kh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yt(t,n)}function Ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xh(t,n)}}function np(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function va(t,e,n,r){var i=t.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,v=a;switch(f=e,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(y,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,f=typeof w=="function"?w.call(y,h,f):w,f==null)break e;h=ae({},h,f);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ur|=o,t.lanes=o,t.memoizedState=h}}function rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var dy=new cg.Component().refs;function _c(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rl={isMounted:function(t){return(t=t._reactInternals)?yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Cn(t),s=Wt(r,i);s.payload=e,n!=null&&(s.callback=n),e=_n(t,s,i),e!==null&&(_t(e,t,i,r),Ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Cn(t),s=Wt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_n(t,s,i),e!==null&&(_t(e,t,i,r),Ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=Cn(t),i=Wt(n,r);i.tag=2,e!=null&&(i.callback=e),e=_n(t,i,r),e!==null&&(_t(e,t,r,n),Ho(e,t,r))}};function ip(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hs(n,r)||!hs(i,s):!0}function fy(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=et(e)?or:ze.current,r=e.contextTypes,s=(r=r!=null)?Gr(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&rl.enqueueReplaceState(e,e.state,null)}function Ic(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=dy,qh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=et(e)?or:ze.current,i.context=Gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_c(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&rl.enqueueReplaceState(i,i.state,null),va(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ri(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===dy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function ko(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function op(t){var e=t._init;return e(t._payload)}function py(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=kn(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,E){return d===null||d.tag!==6?(d=yu(m,p.mode,E),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,E){var C=m.type;return C===Ir?c(p,d,m.props.children,E,m.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&op(C)===d.type)?(E=i(d,m.props),E.ref=Ri(p,d,m),E.return=p,E):(E=Yo(m.type,m.key,m.props,null,p.mode,E),E.ref=Ri(p,d,m),E.return=p,E)}function u(p,d,m,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=vu(m,p.mode,E),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,E,C){return d===null||d.tag!==7?(d=er(m,p.mode,E,C),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=yu(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case po:return m=Yo(d.type,d.key,d.props,null,p.mode,m),m.ref=Ri(p,null,d),m.return=p,m;case _r:return d=vu(d,p.mode,m),d.return=p,d;case an:var E=d._init;return h(p,E(d._payload),m)}if(Oi(d)||Ci(d))return d=er(d,p.mode,m,null),d.return=p,d;ko(p,d)}return null}function f(p,d,m,E){var C=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(p,d,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case po:return m.key===C?l(p,d,m,E):null;case _r:return m.key===C?u(p,d,m,E):null;case an:return C=m._init,f(p,d,C(m._payload),E)}if(Oi(m)||Ci(m))return C!==null?null:c(p,d,m,E,null);ko(p,m)}return null}function y(p,d,m,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(d,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case po:return p=p.get(E.key===null?m:E.key)||null,l(d,p,E,C);case _r:return p=p.get(E.key===null?m:E.key)||null,u(d,p,E,C);case an:var P=E._init;return y(p,d,m,P(E._payload),C)}if(Oi(E)||Ci(E))return p=p.get(m)||null,c(d,p,E,C,null);ko(d,E)}return null}function w(p,d,m,E){for(var C=null,P=null,A=d,x=d=0,ee=null;A!==null&&x<m.length;x++){A.index>x?(ee=A,A=null):ee=A.sibling;var H=f(p,A,m[x],E);if(H===null){A===null&&(A=ee);break}t&&A&&H.alternate===null&&e(p,A),d=s(H,d,x),P===null?C=H:P.sibling=H,P=H,A=ee}if(x===m.length)return n(p,A),re&&jn(p,x),C;if(A===null){for(;x<m.length;x++)A=h(p,m[x],E),A!==null&&(d=s(A,d,x),P===null?C=A:P.sibling=A,P=A);return re&&jn(p,x),C}for(A=r(p,A);x<m.length;x++)ee=y(A,p,x,m[x],E),ee!==null&&(t&&ee.alternate!==null&&A.delete(ee.key===null?x:ee.key),d=s(ee,d,x),P===null?C=ee:P.sibling=ee,P=ee);return t&&A.forEach(function(gt){return e(p,gt)}),re&&jn(p,x),C}function v(p,d,m,E){var C=Ci(m);if(typeof C!="function")throw Error(S(150));if(m=C.call(m),m==null)throw Error(S(151));for(var P=C=null,A=d,x=d=0,ee=null,H=m.next();A!==null&&!H.done;x++,H=m.next()){A.index>x?(ee=A,A=null):ee=A.sibling;var gt=f(p,A,H.value,E);if(gt===null){A===null&&(A=ee);break}t&&A&&gt.alternate===null&&e(p,A),d=s(gt,d,x),P===null?C=gt:P.sibling=gt,P=gt,A=ee}if(H.done)return n(p,A),re&&jn(p,x),C;if(A===null){for(;!H.done;x++,H=m.next())H=h(p,H.value,E),H!==null&&(d=s(H,d,x),P===null?C=H:P.sibling=H,P=H);return re&&jn(p,x),C}for(A=r(p,A);!H.done;x++,H=m.next())H=y(A,p,x,H.value,E),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?x:H.key),d=s(H,d,x),P===null?C=H:P.sibling=H,P=H);return t&&A.forEach(function(_i){return e(p,_i)}),re&&jn(p,x),C}function I(p,d,m,E){if(typeof m=="object"&&m!==null&&m.type===Ir&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case po:e:{for(var C=m.key,P=d;P!==null;){if(P.key===C){if(C=m.type,C===Ir){if(P.tag===7){n(p,P.sibling),d=i(P,m.props.children),d.return=p,p=d;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===an&&op(C)===P.type){n(p,P.sibling),d=i(P,m.props),d.ref=Ri(p,P,m),d.return=p,p=d;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===Ir?(d=er(m.props.children,p.mode,E,m.key),d.return=p,p=d):(E=Yo(m.type,m.key,m.props,null,p.mode,E),E.ref=Ri(p,d,m),E.return=p,p=E)}return o(p);case _r:e:{for(P=m.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=vu(m,p.mode,E),d.return=p,p=d}return o(p);case an:return P=m._init,I(p,d,P(m._payload),E)}if(Oi(m))return w(p,d,m,E);if(Ci(m))return v(p,d,m,E);ko(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=yu(m,p.mode,E),d.return=p,p=d),o(p)):n(p,d)}return I}var Yr=py(!0),my=py(!1),Vs={},Dt=Fn(Vs),ms=Fn(Vs),gs=Fn(Vs);function Qn(t){if(t===Vs)throw Error(S(174));return t}function Gh(t,e){switch(Z(gs,e),Z(ms,t),Z(Dt,Vs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tc(e,t)}ne(Dt),Z(Dt,e)}function Xr(){ne(Dt),ne(ms),ne(gs)}function gy(t){Qn(gs.current);var e=Qn(Dt.current),n=tc(e,t.type);e!==n&&(Z(ms,t),Z(Dt,n))}function Qh(t){ms.current===t&&(ne(Dt),ne(ms))}var se=Fn(0);function wa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function Yh(){for(var t=0;t<hu.length;t++)hu[t]._workInProgressVersionPrimary=null;hu.length=0}var Wo=nn.ReactCurrentDispatcher,du=nn.ReactCurrentBatchConfig,lr=0,oe=null,ge=null,Ce=null,Ea=!1,qi=!1,ys=0,fS=0;function Oe(){throw Error(S(321))}function Xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function Jh(t,e,n,r,i,s){if(lr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wo.current=t===null||t.memoizedState===null?yS:vS,t=n(r,i),qi){s=0;do{if(qi=!1,ys=0,25<=s)throw Error(S(301));s+=1,Ce=ge=null,e.updateQueue=null,Wo.current=wS,t=n(r,i)}while(qi)}if(Wo.current=Sa,e=ge!==null&&ge.next!==null,lr=0,Ce=ge=oe=null,Ea=!1,e)throw Error(S(300));return t}function Zh(){var t=ys!==0;return ys=0,t}function Tt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?oe.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function mt(){if(ge===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Ce===null?oe.memoizedState:Ce.next;if(e!==null)Ce=e,ge=t;else{if(t===null)throw Error(S(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ce===null?oe.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function vs(t,e){return typeof e=="function"?e(t):e}function fu(t){var e=mt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((lr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,oe.lanes|=c,ur|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,It(r,e.memoizedState)||(Je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pu(t){var e=mt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);It(s,e.memoizedState)||(Je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function yy(){}function vy(t,e){var n=oe,r=mt(),i=e(),s=!It(r.memoizedState,i);if(s&&(r.memoizedState=i,Je=!0),r=r.queue,ed(Sy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,ws(9,Ey.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(S(349));lr&30||wy(n,e,i)}return i}function wy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ey(t,e,n,r){e.value=n,e.getSnapshot=r,_y(e)&&Iy(t)}function Sy(t,e,n){return n(function(){_y(e)&&Iy(t)})}function _y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function Iy(t){var e=Yt(t,1);e!==null&&_t(e,t,1,-1)}function ap(t){var e=Tt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:t},e.queue=t,t=t.dispatch=gS.bind(null,oe,t),[e.memoizedState,t]}function ws(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cy(){return mt().memoizedState}function Ko(t,e,n,r){var i=Tt();oe.flags|=t,i.memoizedState=ws(1|e,n,void 0,r===void 0?null:r)}function il(t,e,n,r){var i=mt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Xh(r,o.deps)){i.memoizedState=ws(e,n,s,r);return}}oe.flags|=t,i.memoizedState=ws(1|e,n,s,r)}function lp(t,e){return Ko(8390656,8,t,e)}function ed(t,e){return il(2048,8,t,e)}function ky(t,e){return il(4,2,t,e)}function Ty(t,e){return il(4,4,t,e)}function Ny(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Py(t,e,n){return n=n!=null?n.concat([t]):null,il(4,4,Ny.bind(null,e,t),n)}function td(){}function Ry(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ay(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dy(t,e,n){return lr&21?(It(n,e)||(n=Og(),oe.lanes|=n,ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Je=!0),t.memoizedState=n)}function pS(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=du.transition;du.transition={};try{t(!1),e()}finally{J=n,du.transition=r}}function xy(){return mt().memoizedState}function mS(t,e,n){var r=Cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ly(t))Oy(e,n);else if(n=cy(t,e,n,r),n!==null){var i=qe();_t(n,t,r,i),My(n,e,r)}}function gS(t,e,n){var r=Cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ly(t))Oy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,It(a,o)){var l=e.interleaved;l===null?(i.next=i,Kh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=cy(t,e,i,r),n!==null&&(i=qe(),_t(n,t,r,i),My(n,e,r))}}function Ly(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Oy(t,e){qi=Ea=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function My(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xh(t,n)}}var Sa={readContext:pt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},yS={readContext:pt,useCallback:function(t,e){return Tt().memoizedState=[t,e===void 0?null:e],t},useContext:pt,useEffect:lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,Ny.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=Tt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mS.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Tt();return t={current:t},e.memoizedState=t},useState:ap,useDebugValue:td,useDeferredValue:function(t){return Tt().memoizedState=t},useTransition:function(){var t=ap(!1),e=t[0];return t=pS.bind(null,t[1]),Tt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Tt();if(re){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ke===null)throw Error(S(349));lr&30||wy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lp(Sy.bind(null,r,s,t),[t]),r.flags|=2048,ws(9,Ey.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tt(),e=ke.identifierPrefix;if(re){var n=Bt,r=Vt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vS={readContext:pt,useCallback:Ry,useContext:pt,useEffect:ed,useImperativeHandle:Py,useInsertionEffect:ky,useLayoutEffect:Ty,useMemo:Ay,useReducer:fu,useRef:Cy,useState:function(){return fu(vs)},useDebugValue:td,useDeferredValue:function(t){var e=mt();return Dy(e,ge.memoizedState,t)},useTransition:function(){var t=fu(vs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:yy,useSyncExternalStore:vy,useId:xy,unstable_isNewReconciler:!1},wS={readContext:pt,useCallback:Ry,useContext:pt,useEffect:ed,useImperativeHandle:Py,useInsertionEffect:ky,useLayoutEffect:Ty,useMemo:Ay,useReducer:pu,useRef:Cy,useState:function(){return pu(vs)},useDebugValue:td,useDeferredValue:function(t){var e=mt();return ge===null?e.memoizedState=t:Dy(e,ge.memoizedState,t)},useTransition:function(){var t=pu(vs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:yy,useSyncExternalStore:vy,useId:xy,unstable_isNewReconciler:!1};function Jr(t,e){try{var n="",r=e;do n+=qw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ES=typeof WeakMap=="function"?WeakMap:Map;function $y(t,e,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ia||(Ia=!0,Oc=r),Cc(t,e)},n}function Fy(t,e,n){n=Wt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cc(t,e),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function up(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ES;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=OS.bind(null,t,e,n),e.then(t,t))}function cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wt(-1,1),e.tag=2,_n(n,e,1))),n.lanes|=1),t)}var SS=nn.ReactCurrentOwner,Je=!1;function We(t,e,n,r){e.child=t===null?my(e,null,n,r):Yr(e,t.child,n,r)}function dp(t,e,n,r,i){n=n.render;var s=e.ref;return Vr(e,i),r=Jh(t,e,n,r,s,i),n=Zh(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xt(t,e,i)):(re&&n&&Vh(e),e.flags|=1,We(t,e,r,i),e.child)}function fp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,by(t,e,s,r,i)):(t=Yo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(o,r)&&t.ref===e.ref)return Xt(t,e,i)}return e.flags|=1,t=kn(s,r),t.ref=e.ref,t.return=e,e.child=t}function by(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hs(s,r)&&t.ref===e.ref)if(Je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Je=!0);else return e.lanes=t.lanes,Xt(t,e,i)}return kc(t,e,n,r,i)}function Uy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Lr,rt),rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Lr,rt),rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Lr,rt),rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Lr,rt),rt|=r;return We(t,e,i,n),e.child}function Vy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kc(t,e,n,r,i){var s=et(n)?or:ze.current;return s=Gr(e,s),Vr(e,i),n=Jh(t,e,n,r,s,i),r=Zh(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xt(t,e,i)):(re&&r&&Vh(e),e.flags|=1,We(t,e,n,i),e.child)}function pp(t,e,n,r,i){if(et(n)){var s=!0;fa(e)}else s=!1;if(Vr(e,i),e.stateNode===null)qo(t,e),fy(e,n,r),Ic(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=et(n)?or:ze.current,u=Gr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sp(e,o,r,u),ln=!1;var f=e.memoizedState;o.state=f,va(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ze.current||ln?(typeof c=="function"&&(_c(e,n,c,r),l=e.memoizedState),(a=ln||ip(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:vt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=et(n)?or:ze.current,l=Gr(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&sp(e,o,r,l),ln=!1,f=e.memoizedState,o.state=f,va(e,r,o,i);var w=e.memoizedState;a!==h||f!==w||Ze.current||ln?(typeof y=="function"&&(_c(e,n,y,r),w=e.memoizedState),(u=ln||ip(e,n,u,r,f,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Tc(t,e,n,r,s,i)}function Tc(t,e,n,r,i,s){Vy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zf(e,n,!1),Xt(t,e,s);r=e.stateNode,SS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yr(e,t.child,null,s),e.child=Yr(e,null,a,s)):We(t,e,a,s),e.memoizedState=r.state,i&&Zf(e,n,!0),e.child}function By(t){var e=t.stateNode;e.pendingContext?Jf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jf(t,e.context,!1),Gh(t,e.containerInfo)}function mp(t,e,n,r,i){return Qr(),zh(i),e.flags|=256,We(t,e,n,r),e.child}var Nc={dehydrated:null,treeContext:null,retryLane:0};function Pc(t){return{baseLanes:t,cachePool:null,transitions:null}}function zy(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(se,i&1),t===null)return Ec(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=al(o,r,0,null),t=er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pc(n),e.memoizedState=Nc,t):nd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _S(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kn(a,s):(s=er(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nc,r}return s=t.child,t=s.sibling,r=kn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nd(t,e){return e=al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function To(t,e,n,r){return r!==null&&zh(r),Yr(e,t.child,null,n),t=nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _S(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mu(Error(S(422))),To(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=al({mode:"visible",children:r.children},i,0,null),s=er(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yr(e,t.child,null,o),e.child.memoizedState=Pc(o),e.memoizedState=Nc,s);if(!(e.mode&1))return To(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=mu(s,r,void 0),To(t,e,o,r)}if(a=(o&t.childLanes)!==0,Je||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yt(t,i),_t(r,t,i,-1))}return ld(),r=mu(Error(S(421))),To(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=MS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,it=Sn(i.nextSibling),st=e,re=!0,Et=null,t!==null&&(ct[ht++]=Vt,ct[ht++]=Bt,ct[ht++]=ar,Vt=t.id,Bt=t.overflow,ar=e),e=nd(e,r.children),e.flags|=4096,e)}function gp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sc(t.return,e,n)}function gu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(We(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gp(t,n,e);else if(t.tag===19)gp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gu(e,!0,n,null,s);break;case"together":gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IS(t,e,n){switch(e.tag){case 3:By(e),Qr();break;case 5:gy(e);break;case 1:et(e.type)&&fa(e);break;case 4:Gh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(ga,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?zy(t,e,n):(Z(se,se.current&1),t=Xt(t,e,n),t!==null?t.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Uy(t,e,n)}return Xt(t,e,n)}var Hy,Rc,Wy,Ky;Hy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rc=function(){};Wy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qn(Dt.current);var s=null;switch(n){case"input":i=Xu(t,i),r=Xu(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=ec(t,i),r=ec(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ha)}nc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(is.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(is.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ky=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ai(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CS(t,e,n){var r=e.pendingProps;switch(Bh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return et(e.type)&&da(),Me(e),null;case 3:return r=e.stateNode,Xr(),ne(Ze),ne(ze),Yh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Et!==null&&(Fc(Et),Et=null))),Rc(t,e),Me(e),null;case 5:Qh(e);var i=Qn(gs.current);if(n=e.type,t!==null&&e.stateNode!=null)Wy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Me(e),null}if(t=Qn(Dt.current),Co(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nt]=e,r[ps]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<$i.length;i++)te($i[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":kf(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Nf(r,s),te("invalid",r)}nc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,a,t),i=["children",""+a]):is.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":mo(r),Tf(r,s,!0);break;case"textarea":mo(r),Pf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ha)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nt]=e,t[ps]=r,Hy(t,e,!1,!1),e.stateNode=t;e:{switch(o=rc(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<$i.length;i++)te($i[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":kf(t,r),i=Xu(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),te("invalid",t);break;case"textarea":Nf(t,r),i=ec(t,r),te("invalid",t);break;default:i=r}nc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_g(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ss(t,l):typeof l=="number"&&ss(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(is.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&Th(t,s,l,o))}switch(n){case"input":mo(t),Tf(t,r,!1);break;case"textarea":mo(t),Pf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+An(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$r(t,!!r.multiple,s,!1):r.defaultValue!=null&&$r(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Ky(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Qn(gs.current),Qn(Dt.current),Co(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nt]=e,(s=r.nodeValue!==n)&&(t=st,t!==null))switch(t.tag){case 3:Io(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=e,e.stateNode=r}return Me(e),null;case 13:if(ne(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&it!==null&&e.mode&1&&!(e.flags&128))uy(),Qr(),e.flags|=98560,s=!1;else if(s=Co(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Nt]=e}else Qr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else Et!==null&&(Fc(Et),Et=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ve===0&&(ve=3):ld())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Xr(),Rc(t,e),t===null&&ds(e.stateNode.containerInfo),Me(e),null;case 10:return Wh(e.type._context),Me(e),null;case 17:return et(e.type)&&da(),Me(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ai(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wa(t),o!==null){for(e.flags|=128,Ai(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>Zr&&(e.flags|=128,r=!0,Ai(s,!1),e.lanes=4194304)}else{if(!r)if(t=wa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ai(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Me(e),null}else 2*de()-s.renderingStartTime>Zr&&n!==1073741824&&(e.flags|=128,r=!0,Ai(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return ad(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rt&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function kS(t,e){switch(Bh(e),e.tag){case 1:return et(e.type)&&da(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xr(),ne(Ze),ne(ze),Yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Qr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return Xr(),null;case 10:return Wh(e.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var No=!1,be=!1,TS=typeof WeakSet=="function"?WeakSet:Set,N=null;function xr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Ac(t,e,n){try{n()}catch(r){le(t,e,r)}}var yp=!1;function NS(t,e){if(fc=la,t=Yg(),Uh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:t,selectionRange:n},la=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,I=w.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:vt(e.type,v),I);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){le(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return w=yp,yp=!1,w}function Gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ac(e,n,s)}i=i.next}while(i!==r)}}function sl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qy(t){var e=t.alternate;e!==null&&(t.alternate=null,qy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nt],delete e[ps],delete e[yc],delete e[uS],delete e[cS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gy(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ha));else if(r!==4&&(t=t.child,t!==null))for(xc(t,e,n),t=t.sibling;t!==null;)xc(t,e,n),t=t.sibling}function Lc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lc(t,e,n),t=t.sibling;t!==null;)Lc(t,e,n),t=t.sibling}var Ne=null,wt=!1;function sn(t,e,n){for(n=n.child;n!==null;)Qy(t,e,n),n=n.sibling}function Qy(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Xa,n)}catch{}switch(n.tag){case 5:be||xr(n,e);case 6:var r=Ne,i=wt;Ne=null,sn(t,e,n),Ne=r,wt=i,Ne!==null&&(wt?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(wt?(t=Ne,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),us(t)):uu(Ne,n.stateNode));break;case 4:r=Ne,i=wt,Ne=n.stateNode.containerInfo,wt=!0,sn(t,e,n),Ne=r,wt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ac(n,e,o),i=i.next}while(i!==r)}sn(t,e,n);break;case 1:if(!be&&(xr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}sn(t,e,n);break;case 21:sn(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,sn(t,e,n),be=r):sn(t,e,n);break;default:sn(t,e,n)}}function wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TS),e.forEach(function(r){var i=$S.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,wt=!1;break e;case 3:Ne=a.stateNode.containerInfo,wt=!0;break e;case 4:Ne=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(Ne===null)throw Error(S(160));Qy(s,o,i),Ne=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yy(e,t),e=e.sibling}function Yy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(e,t),kt(t),r&4){try{Gi(3,t,t.return),sl(3,t)}catch(v){le(t,t.return,v)}try{Gi(5,t,t.return)}catch(v){le(t,t.return,v)}}break;case 1:yt(e,t),kt(t),r&512&&n!==null&&xr(n,n.return);break;case 5:if(yt(e,t),kt(t),r&512&&n!==null&&xr(n,n.return),t.flags&32){var i=t.stateNode;try{ss(i,"")}catch(v){le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yg(i,s),rc(a,o);var u=rc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?_g(i,h):c==="dangerouslySetInnerHTML"?Eg(i,h):c==="children"?ss(i,h):Th(i,c,h,u)}switch(a){case"input":Ju(i,s);break;case"textarea":vg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?$r(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?$r(i,!!s.multiple,s.defaultValue,!0):$r(i,!!s.multiple,s.multiple?[]:"",!1))}i[ps]=s}catch(v){le(t,t.return,v)}}break;case 6:if(yt(e,t),kt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){le(t,t.return,v)}}break;case 3:if(yt(e,t),kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{us(e.containerInfo)}catch(v){le(t,t.return,v)}break;case 4:yt(e,t),kt(t);break;case 13:yt(e,t),kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sd=de())),r&4&&wp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(be=(u=be)||c,yt(e,t),be=u):yt(e,t),kt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(f=N,y=f.child,f.tag){case 0:case 11:case 14:case 15:Gi(4,f,f.return);break;case 1:xr(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(v){le(r,n,v)}}break;case 5:xr(f,f.return);break;case 22:if(f.memoizedState!==null){Sp(h);continue}}y!==null?(y.return=f,N=y):Sp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sg("display",o))}catch(v){le(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){le(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:yt(e,t),kt(t),r&4&&wp(t);break;case 21:break;default:yt(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gy(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ss(i,""),r.flags&=-33);var s=vp(t);Lc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vp(t);xc(t,a,o);break;default:throw Error(S(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PS(t,e,n){N=t,Xy(t)}function Xy(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||No;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=No;var u=be;if(No=o,(be=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?_p(i):l!==null?(l.return=o,N=l):_p(i);for(;s!==null;)N=s,Xy(s),s=s.sibling;N=i,No=a,be=u}Ep(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Ep(t)}}function Ep(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||sl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&us(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}be||e.flags&512&&Dc(e)}catch(f){le(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Sp(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function _p(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sl(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{Dc(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{Dc(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var RS=Math.ceil,_a=nn.ReactCurrentDispatcher,rd=nn.ReactCurrentOwner,ft=nn.ReactCurrentBatchConfig,G=0,ke=null,me=null,Re=0,rt=0,Lr=Fn(0),ve=0,Es=null,ur=0,ol=0,id=0,Qi=null,Ye=null,sd=0,Zr=1/0,Ft=null,Ia=!1,Oc=null,In=null,Po=!1,mn=null,Ca=0,Yi=0,Mc=null,Go=-1,Qo=0;function qe(){return G&6?de():Go!==-1?Go:Go=de()}function Cn(t){return t.mode&1?G&2&&Re!==0?Re&-Re:dS.transition!==null?(Qo===0&&(Qo=Og()),Qo):(t=J,t!==0||(t=window.event,t=t===void 0?16:Bg(t.type)),t):1}function _t(t,e,n,r){if(50<Yi)throw Yi=0,Mc=null,Error(S(185));Fs(t,n,r),(!(G&2)||t!==ke)&&(t===ke&&(!(G&2)&&(ol|=n),ve===4&&cn(t,Re)),tt(t,r),n===1&&G===0&&!(e.mode&1)&&(Zr=de()+500,nl&&bn()))}function tt(t,e){var n=t.callbackNode;dE(t,e);var r=aa(t,t===ke?Re:0);if(r===0)n!==null&&Df(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Df(n),e===1)t.tag===0?hS(Ip.bind(null,t)):oy(Ip.bind(null,t)),aS(function(){!(G&6)&&bn()}),n=null;else{switch(Mg(r)){case 1:n=Dh;break;case 4:n=xg;break;case 16:n=oa;break;case 536870912:n=Lg;break;default:n=oa}n=sv(n,Jy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jy(t,e){if(Go=-1,Qo=0,G&6)throw Error(S(327));var n=t.callbackNode;if(Br()&&t.callbackNode!==n)return null;var r=aa(t,t===ke?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ka(t,r);else{e=r;var i=G;G|=2;var s=ev();(ke!==t||Re!==e)&&(Ft=null,Zr=de()+500,Zn(t,e));do try{xS();break}catch(a){Zy(t,a)}while(1);Hh(),_a.current=s,G=i,me!==null?e=0:(ke=null,Re=0,e=ve)}if(e!==0){if(e===2&&(i=lc(t),i!==0&&(r=i,e=$c(t,i))),e===1)throw n=Es,Zn(t,0),cn(t,r),tt(t,de()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,!(r&30)&&!AS(i)&&(e=ka(t,r),e===2&&(s=lc(t),s!==0&&(r=s,e=$c(t,s))),e===1))throw n=Es,Zn(t,0),cn(t,r),tt(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Hn(t,Ye,Ft);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=sd+500-de(),10<e)){if(aa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gc(Hn.bind(null,t,Ye,Ft),e);break}Hn(t,Ye,Ft);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RS(r/1960))-r,10<r){t.timeoutHandle=gc(Hn.bind(null,t,Ye,Ft),r);break}Hn(t,Ye,Ft);break;case 5:Hn(t,Ye,Ft);break;default:throw Error(S(329))}}}return tt(t,de()),t.callbackNode===n?Jy.bind(null,t):null}function $c(t,e){var n=Qi;return t.current.memoizedState.isDehydrated&&(Zn(t,e).flags|=256),t=ka(t,e),t!==2&&(e=Ye,Ye=n,e!==null&&Fc(e)),t}function Fc(t){Ye===null?Ye=t:Ye.push.apply(Ye,t)}function AS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~id,e&=~ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Ip(t){if(G&6)throw Error(S(327));Br();var e=aa(t,0);if(!(e&1))return tt(t,de()),null;var n=ka(t,e);if(t.tag!==0&&n===2){var r=lc(t);r!==0&&(e=r,n=$c(t,r))}if(n===1)throw n=Es,Zn(t,0),cn(t,e),tt(t,de()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hn(t,Ye,Ft),tt(t,de()),null}function od(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Zr=de()+500,nl&&bn())}}function cr(t){mn!==null&&mn.tag===0&&!(G&6)&&Br();var e=G;G|=1;var n=ft.transition,r=J;try{if(ft.transition=null,J=1,t)return t()}finally{J=r,ft.transition=n,G=e,!(G&6)&&bn()}}function ad(){rt=Lr.current,ne(Lr)}function Zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oS(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Bh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:Xr(),ne(Ze),ne(ze),Yh();break;case 5:Qh(r);break;case 4:Xr();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Wh(r.type._context);break;case 22:case 23:ad()}n=n.return}if(ke=t,me=t=kn(t.current,null),Re=rt=e,ve=0,Es=null,id=ol=ur=0,Ye=Qi=null,Gn!==null){for(e=0;e<Gn.length;e++)if(n=Gn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gn=null}return t}function Zy(t,e){do{var n=me;try{if(Hh(),Wo.current=Sa,Ea){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ea=!1}if(lr=0,Ce=ge=oe=null,qi=!1,ys=0,rd.current=null,n===null||n.return===null){ve=1,Es=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=cp(o);if(y!==null){y.flags&=-257,hp(y,o,a,s,e),y.mode&1&&up(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var v=new Set;v.add(l),e.updateQueue=v}else w.add(l);break e}else{if(!(e&1)){up(s,u,e),ld();break e}l=Error(S(426))}}else if(re&&a.mode&1){var I=cp(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),hp(I,o,a,s,e),zh(Jr(l,a));break e}}s=l=Jr(l,a),ve!==4&&(ve=2),Qi===null?Qi=[s]:Qi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=$y(s,l,e);np(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(In===null||!In.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Fy(s,a,e);np(s,E);break e}}s=s.return}while(s!==null)}nv(n)}catch(C){e=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function ev(){var t=_a.current;return _a.current=Sa,t===null?Sa:t}function ld(){(ve===0||ve===3||ve===2)&&(ve=4),ke===null||!(ur&268435455)&&!(ol&268435455)||cn(ke,Re)}function ka(t,e){var n=G;G|=2;var r=ev();(ke!==t||Re!==e)&&(Ft=null,Zn(t,e));do try{DS();break}catch(i){Zy(t,i)}while(1);if(Hh(),G=n,_a.current=r,me!==null)throw Error(S(261));return ke=null,Re=0,ve}function DS(){for(;me!==null;)tv(me)}function xS(){for(;me!==null&&!rE();)tv(me)}function tv(t){var e=iv(t.alternate,t,rt);t.memoizedProps=t.pendingProps,e===null?nv(t):me=e,rd.current=null}function nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kS(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,me=null;return}}else if(n=CS(n,e,rt),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);ve===0&&(ve=5)}function Hn(t,e,n){var r=J,i=ft.transition;try{ft.transition=null,J=1,LS(t,e,n,r)}finally{ft.transition=i,J=r}return null}function LS(t,e,n,r){do Br();while(mn!==null);if(G&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fE(t,s),t===ke&&(me=ke=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,sv(oa,function(){return Br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var o=J;J=1;var a=G;G|=4,rd.current=null,NS(t,n),Yy(n,t),ZE(pc),la=!!fc,pc=fc=null,t.current=n,PS(n),iE(),G=a,J=o,ft.transition=s}else t.current=n;if(Po&&(Po=!1,mn=t,Ca=i),s=t.pendingLanes,s===0&&(In=null),aE(n.stateNode),tt(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ia)throw Ia=!1,t=Oc,Oc=null,t;return Ca&1&&t.tag!==0&&Br(),s=t.pendingLanes,s&1?t===Mc?Yi++:(Yi=0,Mc=t):Yi=0,bn(),null}function Br(){if(mn!==null){var t=Mg(Ca),e=ft.transition,n=J;try{if(ft.transition=null,J=16>t?16:t,mn===null)var r=!1;else{if(t=mn,mn=null,Ca=0,G&6)throw Error(S(331));var i=G;for(G|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Gi(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var f=c.sibling,y=c.return;if(qy(c),c===u){N=null;break}if(f!==null){f.return=y,N=f;break}N=y}}}var w=s.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var I=v.sibling;v.sibling=null,v=I}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var d=t.current;for(N=d;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(C){le(a,a.return,C)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if(G=i,bn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Xa,t)}catch{}r=!0}return r}finally{J=n,ft.transition=e}}return!1}function Cp(t,e,n){e=Jr(n,e),e=$y(t,e,1),t=_n(t,e,1),e=qe(),t!==null&&(Fs(t,1,e),tt(t,e))}function le(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){t=Jr(n,t),t=Fy(e,t,1),e=_n(e,t,1),t=qe(),e!==null&&(Fs(e,1,t),tt(e,t));break}}e=e.return}}function OS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Re&n)===n&&(ve===4||ve===3&&(Re&130023424)===Re&&500>de()-sd?Zn(t,0):id|=n),tt(t,e)}function rv(t,e){e===0&&(t.mode&1?(e=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):e=1);var n=qe();t=Yt(t,e),t!==null&&(Fs(t,e,n),tt(t,n))}function MS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rv(t,n)}function $S(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),rv(t,n)}var iv;iv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ze.current)Je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Je=!1,IS(t,e,n);Je=!!(t.flags&131072)}else Je=!1,re&&e.flags&1048576&&ay(e,ma,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qo(t,e),t=e.pendingProps;var i=Gr(e,ze.current);Vr(e,n),i=Jh(null,e,r,t,i,n);var s=Zh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,et(r)?(s=!0,fa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qh(e),i.updater=rl,e.stateNode=i,i._reactInternals=e,Ic(e,r,t,n),e=Tc(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Vh(e),We(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bS(r),t=vt(r,t),i){case 0:e=kc(null,e,r,t,n);break e;case 1:e=pp(null,e,r,t,n);break e;case 11:e=dp(null,e,r,t,n);break e;case 14:e=fp(null,e,r,vt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),kc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),pp(t,e,r,i,n);case 3:e:{if(By(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,hy(t,e),va(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Jr(Error(S(423)),e),e=mp(t,e,r,n,i);break e}else if(r!==i){i=Jr(Error(S(424)),e),e=mp(t,e,r,n,i);break e}else for(it=Sn(e.stateNode.containerInfo.firstChild),st=e,re=!0,Et=null,n=my(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){e=Xt(t,e,n);break e}We(t,e,r,n)}e=e.child}return e;case 5:return gy(e),t===null&&Ec(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mc(r,i)?o=null:s!==null&&mc(r,s)&&(e.flags|=32),Vy(t,e),We(t,e,o,n),e.child;case 6:return t===null&&Ec(e),null;case 13:return zy(t,e,n);case 4:return Gh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yr(e,null,r,n):We(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),dp(t,e,r,i,n);case 7:return We(t,e,e.pendingProps,n),e.child;case 8:return We(t,e,e.pendingProps.children,n),e.child;case 12:return We(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(ga,r._currentValue),r._currentValue=o,s!==null)if(It(s.value,o)){if(s.children===i.children&&!Ze.current){e=Xt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Wt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}We(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vr(e,n),i=pt(i),r=r(i),e.flags|=1,We(t,e,r,n),e.child;case 14:return r=e.type,i=vt(r,e.pendingProps),i=vt(r.type,i),fp(t,e,r,i,n);case 15:return by(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),qo(t,e),e.tag=1,et(r)?(t=!0,fa(e)):t=!1,Vr(e,n),fy(e,r,i),Ic(e,r,i,n),Tc(null,e,r,!0,t,n);case 19:return jy(t,e,n);case 22:return Uy(t,e,n)}throw Error(S(156,e.tag))};function sv(t,e){return Dg(t,e)}function FS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(t,e,n,r){return new FS(t,e,n,r)}function ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bS(t){if(typeof t=="function")return ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ph)return 11;if(t===Rh)return 14}return 2}function kn(t,e){var n=t.alternate;return n===null?(n=dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ir:return er(n.children,i,s,e);case Nh:o=8,i|=8;break;case qu:return t=dt(12,n,e,i|2),t.elementType=qu,t.lanes=s,t;case Gu:return t=dt(13,n,e,i),t.elementType=Gu,t.lanes=s,t;case Qu:return t=dt(19,n,e,i),t.elementType=Qu,t.lanes=s,t;case pg:return al(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dg:o=10;break e;case fg:o=9;break e;case Ph:o=11;break e;case Rh:o=14;break e;case an:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function er(t,e,n,r){return t=dt(7,t,r,e),t.lanes=n,t}function al(t,e,n,r){return t=dt(22,t,r,e),t.elementType=pg,t.lanes=n,t.stateNode={isHidden:!1},t}function yu(t,e,n){return t=dt(6,t,null,e),t.lanes=n,t}function vu(t,e,n){return e=dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function US(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cd(t,e,n,r,i,s,o,a,l){return t=new US(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qh(s),t}function VS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ov(t){if(!t)return Dn;t=t._reactInternals;e:{if(yr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(et(n))return sy(t,n,e)}return e}function av(t,e,n,r,i,s,o,a,l){return t=cd(n,r,!0,t,i,s,o,a,l),t.context=ov(null),n=t.current,r=qe(),i=Cn(n),s=Wt(r,i),s.callback=e??null,_n(n,s,i),t.current.lanes=i,Fs(t,i,r),tt(t,r),t}function ll(t,e,n,r){var i=e.current,s=qe(),o=Cn(i);return n=ov(n),e.context===null?e.context=n:e.pendingContext=n,e=Wt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_n(i,e,o),t!==null&&(_t(t,i,o,s),Ho(t,i,o)),o}function Ta(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hd(t,e){kp(t,e),(t=t.alternate)&&kp(t,e)}function BS(){return null}var lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function dd(t){this._internalRoot=t}ul.prototype.render=dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));ll(t,e,null,null)};ul.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cr(function(){ll(null,t,null,null)}),e[Qt]=null}};function ul(t){this._internalRoot=t}ul.prototype.unstable_scheduleHydration=function(t){if(t){var e=bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&Vg(t)}};function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function zS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ta(o);s.call(u)}}var o=av(e,r,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=o,t[Qt]=o.current,ds(t.nodeType===8?t.parentNode:t),cr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ta(l);a.call(u)}}var l=cd(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[Qt]=l.current,ds(t.nodeType===8?t.parentNode:t),cr(function(){ll(e,l,n,r)}),l}function hl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ta(o);a.call(l)}}ll(e,o,t,i)}else o=zS(n,e,t,i,r);return Ta(o)}$g=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mi(e.pendingLanes);n!==0&&(xh(e,n|1),tt(e,de()),!(G&6)&&(Zr=de()+500,bn()))}break;case 13:cr(function(){var r=Yt(t,1);if(r!==null){var i=qe();_t(r,t,1,i)}}),hd(t,1)}};Lh=function(t){if(t.tag===13){var e=Yt(t,134217728);if(e!==null){var n=qe();_t(e,t,134217728,n)}hd(t,134217728)}};Fg=function(t){if(t.tag===13){var e=Cn(t),n=Yt(t,e);if(n!==null){var r=qe();_t(n,t,e,r)}hd(t,e)}};bg=function(){return J};Ug=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};sc=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=tl(r);if(!i)throw Error(S(90));gg(r),Ju(r,i)}}}break;case"textarea":vg(t,n);break;case"select":e=n.value,e!=null&&$r(t,!!n.multiple,e,!1)}};kg=od;Tg=cr;var jS={usingClientEntryPoint:!1,Events:[Us,Nr,tl,Ig,Cg,od]},Di={findFiberByHostInstance:qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},HS={bundleType:Di.bundleType,version:Di.version,rendererPackageName:Di.rendererPackageName,rendererConfig:Di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rg(t),t===null?null:t.stateNode},findFiberByHostInstance:Di.findFiberByHostInstance||BS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{Xa=Ro.inject(HS),At=Ro}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(e))throw Error(S(200));return VS(t,e,null,n)};lt.createRoot=function(t,e){if(!fd(t))throw Error(S(299));var n=!1,r="",i=lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=cd(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,ds(t.nodeType===8?t.parentNode:t),new dd(e)};lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Rg(e),t=t===null?null:t.stateNode,t};lt.flushSync=function(t){return cr(t)};lt.hydrate=function(t,e,n){if(!cl(e))throw Error(S(200));return hl(null,t,e,!0,n)};lt.hydrateRoot=function(t,e,n){if(!fd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=lv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=av(e,null,t,1,n??null,i,!1,s,o),t[Qt]=e.current,ds(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ul(e)};lt.render=function(t,e,n){if(!cl(e))throw Error(S(200));return hl(null,t,e,!1,n)};lt.unmountComponentAtNode=function(t){if(!cl(t))throw Error(S(40));return t._reactRootContainer?(cr(function(){hl(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};lt.unstable_batchedUpdates=od;lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return hl(t,e,n,!1,r)};lt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=lt})(Bw);var uv,Np=Hu;uv=Np.createRoot,Np.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ss(){return Ss=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ss.apply(this,arguments)}var gn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gn||(gn={}));const Pp="popstate";function WS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return bc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Na(i)}return qS(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KS(){return Math.random().toString(36).substr(2,8)}function Rp(t,e){return{usr:t.state,key:t.key,idx:e}}function bc(t,e,n,r){return n===void 0&&(n=null),Ss({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?di(e):e,{state:n,key:e&&e.key||r||KS()})}function Na(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function di(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function qS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ss({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=gn.Pop;let I=c(),p=I==null?null:I-u;u=I,l&&l({action:a,location:v.location,delta:p})}function f(I,p){a=gn.Push;let d=bc(v.location,I,p);n&&n(d,I),u=c()+1;let m=Rp(d,u),E=v.createHref(d);try{o.pushState(m,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function y(I,p){a=gn.Replace;let d=bc(v.location,I,p);n&&n(d,I),u=c();let m=Rp(d,u),E=v.createHref(d);o.replaceState(m,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function w(I){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof I=="string"?I:Na(I);return we(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pp,h),l=I,()=>{i.removeEventListener(Pp,h),l=null}},createHref(I){return e(i,I)},createURL:w,encodeLocation(I){let p=w(I);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:y,go(I){return o.go(I)}};return v}var Ap;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ap||(Ap={}));function GS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?di(e):e,i=md(r.pathname||"/",n);if(i==null)return null;let s=cv(t);QS(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=i_(s[a],a_(i));return o}function cv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Tn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),cv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:n_(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of hv(s.path))i(s,o,l)}),e}function hv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=hv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function QS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:r_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YS=/^:\w+$/,XS=3,JS=2,ZS=1,e_=10,t_=-2,Dp=t=>t==="*";function n_(t,e){let n=t.split("/"),r=n.length;return n.some(Dp)&&(r+=t_),e&&(r+=JS),n.filter(i=>!Dp(i)).reduce((i,s)=>i+(YS.test(s)?XS:s===""?ZS:e_),r)}function r_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function i_(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=s_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Tn([i,c.pathname]),pathnameBase:h_(Tn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Tn([i,c.pathnameBase]))}return s}function s_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=o_(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=l_(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function o_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),pd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function a_(t){try{return decodeURI(t)}catch(e){return pd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function l_(t,e){try{return decodeURIComponent(t)}catch(n){return pd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function md(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function u_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?di(t):t;return{pathname:n?n.startsWith("/")?n:c_(n,e):e,search:d_(r),hash:f_(i)}}function c_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dv(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=di(t):(i=Ss({},t),we(!i.pathname||!i.pathname.includes("?"),wu("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),wu("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),wu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=u_(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Tn=t=>t.join("/").replace(/\/\/+/g,"/"),h_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),d_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,f_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function p_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const g_=typeof Object.is=="function"?Object.is:m_,{useState:y_,useEffect:v_,useLayoutEffect:w_,useDebugValue:E_}=ju;function S_(t,e,n){const r=e(),[{inst:i},s]=y_({inst:{value:r,getSnapshot:e}});return w_(()=>{i.value=r,i.getSnapshot=e,Eu(i)&&s({inst:i})},[t,r,e]),v_(()=>(Eu(i)&&s({inst:i}),t(()=>{Eu(i)&&s({inst:i})})),[t]),E_(r),r}function Eu(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!g_(n,r)}catch{return!0}}function __(t,e,n){return e()}const I_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",C_=!I_,k_=C_?__:S_;"useSyncExternalStore"in ju&&(t=>t.useSyncExternalStore)(ju);const pv=T.createContext(null),mv=T.createContext(null),Bs=T.createContext(null),dl=T.createContext(null),fi=T.createContext({outlet:null,matches:[]}),gv=T.createContext(null);function Uc(){return Uc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uc.apply(this,arguments)}function T_(t,e){let{relative:n}=e===void 0?{}:e;zs()||we(!1);let{basename:r,navigator:i}=T.useContext(Bs),{hash:s,pathname:o,search:a}=vv(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Tn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function zs(){return T.useContext(dl)!=null}function js(){return zs()||we(!1),T.useContext(dl).location}function yv(){zs()||we(!1);let{basename:t,navigator:e}=T.useContext(Bs),{matches:n}=T.useContext(fi),{pathname:r}=js(),i=JSON.stringify(dv(n).map(a=>a.pathnameBase)),s=T.useRef(!1);return T.useEffect(()=>{s.current=!0}),T.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=fv(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Tn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function vv(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(fi),{pathname:i}=js(),s=JSON.stringify(dv(r).map(o=>o.pathnameBase));return T.useMemo(()=>fv(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function N_(t,e){zs()||we(!1);let{navigator:n}=T.useContext(Bs),r=T.useContext(mv),{matches:i}=T.useContext(fi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=js(),u;if(e){var c;let v=typeof e=="string"?di(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||we(!1),u=v}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",y=GS(t,{pathname:f}),w=D_(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Tn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Tn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&w?T.createElement(dl.Provider,{value:{location:Uc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:gn.Pop}},w):w}function P_(){let t=M_(),e=p_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}class R_ extends T.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(fi.Provider,{value:this.props.routeContext},T.createElement(gv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function A_(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(pv);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(fi.Provider,{value:e},r)}function D_(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||we(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=T.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=T.createElement(P_,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let f=s;return l?f=u:o.route.Component?f=T.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),T.createElement(A_,{match:o,routeContext:{outlet:s,matches:c},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?T.createElement(R_,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var xp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(xp||(xp={}));var Pa;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Pa||(Pa={}));function x_(t){let e=T.useContext(mv);return e||we(!1),e}function L_(t){let e=T.useContext(fi);return e||we(!1),e}function O_(t){let e=L_(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function M_(){var t;let e=T.useContext(gv),n=x_(Pa.UseRouteError),r=O_(Pa.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Wn(t){we(!1)}function $_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gn.Pop,navigator:s,static:o=!1}=t;zs()&&we(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=di(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:y="default"}=r,w=T.useMemo(()=>{let v=md(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:f,key:y},navigationType:i}},[a,u,c,h,f,y,i]);return w==null?null:T.createElement(Bs.Provider,{value:l},T.createElement(dl.Provider,{children:n,value:w}))}function F_(t){let{children:e,location:n}=t,r=T.useContext(pv),i=r&&!e?r.router.routes:Vc(e);return N_(i,n)}var Lp;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Lp||(Lp={}));new Promise(()=>{});function Vc(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Vc(r.props.children,s));return}r.type!==Wn&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Vc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bc.apply(this,arguments)}function b_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function U_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function V_(t,e){return t.button===0&&(!e||e==="_self")&&!U_(t)}const B_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function z_(t){let{basename:e,children:n,window:r}=t,i=T.useRef();i.current==null&&(i.current=WS({window:r,v5Compat:!0}));let s=i.current,[o,a]=T.useState({action:s.action,location:s.location});return T.useLayoutEffect(()=>s.listen(a),[s]),T.createElement($_,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const j_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kt=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=b_(e,B_),{basename:f}=T.useContext(Bs),y,w=!1;if(typeof u=="string"&&H_.test(u)&&(y=u,j_)){let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),E=md(m.pathname,f);m.origin===d.origin&&E!=null?u=E+m.search+m.hash:w=!0}let v=T_(u,{relative:i}),I=W_(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||I(d)}return T.createElement("a",Bc({},h,{href:y||v,onClick:w||s?r:p,ref:n,target:l}))});var Op;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Op||(Op={}));var Mp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mp||(Mp={}));function W_(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=yv(),l=js(),u=vv(t,{relative:o});return T.useCallback(c=>{if(V_(c,n)){c.preventDefault();let h=r!==void 0?r:Na(l)===Na(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function K_(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"wrongCredentials-svg-panlocked",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})})}const q_=()=>M("div",{className:"containerMessage-wrongCredentials",children:[g(K_,{}),"Las credenciales no coinciden"]});/**
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
 *//**
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
 */const wv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},G_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ev={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[c],n[h],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):G_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Q_;const f=s<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Q_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y_=function(t){const e=wv(t);return Ev.encodeByteArray(e,!0)},Ra=function(t){return Y_(t).replace(/\./g,"")},Sv=function(t){try{return Ev.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function X_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const J_=()=>X_().__FIREBASE_DEFAULTS__,Z_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sv(t[1]);return e&&JSON.parse(e)},gd=()=>{try{return J_()||Z_()||eI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_v=t=>{var e,n;return(n=(e=gd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tI=t=>{const e=_v(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nI=()=>{var t;return(t=gd())===null||t===void 0?void 0:t.config},Iv=t=>{var e;return(e=gd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function iI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ra(JSON.stringify(n)),Ra(JSON.stringify(o)),a].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function oI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lI(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uI(){try{return typeof indexedDB=="object"}catch{return!1}}function cI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const hI="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hI,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rn(i,a,r)}}function dI(t,e){return t.replace(fI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fI=/\{\$([^}]+)}/g;function pI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Aa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($p(s)&&$p(o)){if(!Aa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $p(t){return t!==null&&typeof t=="object"}/**
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
 */function Ws(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mI(t,e){const n=new gI(t,e);return n.subscribe.bind(n)}class gI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Su),i.error===void 0&&(i.error=Su),i.complete===void 0&&(i.complete=Su);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Su(){}/**
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
 */function $t(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kn="[DEFAULT]";/**
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
 */class vI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EI(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wI(t){return t===Kn?void 0:t}function EI(t){return t.instantiationMode==="EAGER"}/**
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
 */class SI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const _I={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},II=Q.INFO,CI={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},kI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=II,this._logHandler=kI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const TI=(t,e)=>e.some(n=>t instanceof n);let Fp,bp;function NI(){return Fp||(Fp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PI(){return bp||(bp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cv=new WeakMap,zc=new WeakMap,kv=new WeakMap,_u=new WeakMap,vd=new WeakMap;function RI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cv.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function AI(t){if(zc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DI(t){jc=t(jc)}function xI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Iu(this),e,...n);return kv.set(r,e.sort?e.sort():[e]),Nn(r)}:PI().includes(t)?function(...e){return t.apply(Iu(this),e),Nn(Cv.get(this))}:function(...e){return Nn(t.apply(Iu(this),e))}}function LI(t){return typeof t=="function"?xI(t):(t instanceof IDBTransaction&&AI(t),TI(t,NI())?new Proxy(t,jc):t)}function Nn(t){if(t instanceof IDBRequest)return RI(t);if(_u.has(t))return _u.get(t);const e=LI(t);return e!==t&&(_u.set(t,e),vd.set(e,t)),e}const Iu=t=>vd.get(t);function OI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nn(o.result),l.oldVersion,l.newVersion,Nn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const MI=["get","getKey","getAll","getAllKeys","count"],$I=["put","add","delete","clear"],Cu=new Map;function Up(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cu.get(e))return Cu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cu.set(e,s),s}DI(t=>({...t,get:(e,n,r)=>Up(e,n)||t.get(e,n,r),has:(e,n)=>!!Up(e,n)||t.has(e,n)}));/**
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
 */class FI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hc="@firebase/app",Vp="0.9.8";/**
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
 */const dr=new yd("@firebase/app"),UI="@firebase/app-compat",VI="@firebase/analytics-compat",BI="@firebase/analytics",zI="@firebase/app-check-compat",jI="@firebase/app-check",HI="@firebase/auth",WI="@firebase/auth-compat",KI="@firebase/database",qI="@firebase/database-compat",GI="@firebase/functions",QI="@firebase/functions-compat",YI="@firebase/installations",XI="@firebase/installations-compat",JI="@firebase/messaging",ZI="@firebase/messaging-compat",eC="@firebase/performance",tC="@firebase/performance-compat",nC="@firebase/remote-config",rC="@firebase/remote-config-compat",iC="@firebase/storage",sC="@firebase/storage-compat",oC="@firebase/firestore",aC="@firebase/firestore-compat",lC="firebase",uC="9.20.0";/**
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
 */const Wc="[DEFAULT]",cC={[Hc]:"fire-core",[UI]:"fire-core-compat",[BI]:"fire-analytics",[VI]:"fire-analytics-compat",[jI]:"fire-app-check",[zI]:"fire-app-check-compat",[HI]:"fire-auth",[WI]:"fire-auth-compat",[KI]:"fire-rtdb",[qI]:"fire-rtdb-compat",[GI]:"fire-fn",[QI]:"fire-fn-compat",[YI]:"fire-iid",[XI]:"fire-iid-compat",[JI]:"fire-fcm",[ZI]:"fire-fcm-compat",[eC]:"fire-perf",[tC]:"fire-perf-compat",[nC]:"fire-rc",[rC]:"fire-rc-compat",[iC]:"fire-gcs",[sC]:"fire-gcs-compat",[oC]:"fire-fst",[aC]:"fire-fst-compat","fire-js":"fire-js",[lC]:"fire-js-all"};/**
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
 */const Da=new Map,Kc=new Map;function hC(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if(Kc.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;Kc.set(e,t);for(const n of Da.values())hC(n,t);return!0}function wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const dC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new Hs("app","Firebase",dC);/**
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
 */class fC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const pi=uC;function Tv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=nI()),!n)throw Pn.create("no-options");const s=Da.get(i);if(s){if(Aa(n,s.options)&&Aa(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i})}const o=new SI(i);for(const l of Kc.values())o.addComponent(l);const a=new fC(n,r,o);return Da.set(i,a),a}function Nv(t=Wc){const e=Da.get(t);if(!e&&t===Wc)return Tv();if(!e)throw Pn.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let i=(r=cC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}ei(new hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pC="firebase-heartbeat-database",mC=1,_s="firebase-heartbeat-store";let ku=null;function Pv(){return ku||(ku=OI(pC,mC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_s)}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),ku}async function gC(t){try{return(await Pv()).transaction(_s).objectStore(_s).get(Rv(t))}catch(e){if(e instanceof rn)dr.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function Bp(t,e){try{const r=(await Pv()).transaction(_s,"readwrite");return await r.objectStore(_s).put(e,Rv(t)),r.done}catch(n){if(n instanceof rn)dr.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function Rv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yC=1024,vC=30*24*60*60*1e3;class wC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zp(),{heartbeatsToSend:n,unsentEntries:r}=EC(this._heartbeatsCache.heartbeats),i=Ra(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zp(){return new Date().toISOString().substring(0,10)}function EC(t,e=yC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uI()?cI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jp(t){return Ra(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _C(t){ei(new hr("platform-logger",e=>new FI(e),"PRIVATE")),ei(new hr("heartbeat",e=>new wC(e),"PRIVATE")),Rn(Hc,Vp,t),Rn(Hc,Vp,"esm2017"),Rn("fire-js","")}_C("");var IC="firebase",CC="9.20.0";/**
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
 */Rn(IC,CC,"app");var kC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Ed=Ed||{},U=kC||self;function xa(){}function fl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ks(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TC(t){return Object.prototype.hasOwnProperty.call(t,Tu)&&t[Tu]||(t[Tu]=++NC)}var Tu="closure_uid_"+(1e9*Math.random()>>>0),NC=0;function PC(t,e,n){return t.call.apply(t.bind,arguments)}function RC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=PC:Ve=RC,Ve.apply(null,arguments)}function Ao(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Un(){this.s=this.s,this.o=this.o}var AC=0;Un.prototype.s=!1;Un.prototype.na=function(){!this.s&&(this.s=!0,this.M(),AC!=0)&&TC(this)};Un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Av=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Hp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var DC=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",xa,e),U.removeEventListener("test",xa,e)}catch{}return t}();function La(t){return/^[\s\xa0]*$/.test(t)}var Wp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Nu(t,e){return t<e?-1:t>e?1:0}function pl(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function Pt(t){return pl().indexOf(t)!=-1}function _d(t){return _d[" "](t),t}_d[" "]=xa;function xC(t){var e=MC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var LC=Pt("Opera"),ti=Pt("Trident")||Pt("MSIE"),Dv=Pt("Edge"),qc=Dv||ti,xv=Pt("Gecko")&&!(pl().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),OC=pl().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge");function Lv(){var t=U.document;return t?t.documentMode:void 0}var Oa;e:{var Pu="",Ru=function(){var t=pl();if(xv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Dv)return/Edge\/([\d\.]+)/.exec(t);if(ti)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OC)return/WebKit\/(\S+)/.exec(t);if(LC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ru&&(Pu=Ru?Ru[1]:""),ti){var Au=Lv();if(Au!=null&&Au>parseFloat(Pu)){Oa=String(Au);break e}}Oa=Pu}var MC={};function $C(){return xC(function(){let t=0;const e=Wp(String(Oa)).split("."),n=Wp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Nu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Nu(i[2].length==0,s[2].length==0)||Nu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Gc;if(U.document&&ti){var Kp=Lv();Gc=Kp||parseInt(Oa,10)||void 0}else Gc=void 0;var FC=Gc;function Is(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xv){e:{try{_d(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Is.X.h.call(this)}}Le(Is,Be);var bC={2:"touch",3:"pen",4:"mouse"};Is.prototype.h=function(){Is.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qs="closure_listenable_"+(1e6*Math.random()|0),UC=0;function VC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++UC,this.ba=this.ea=!1}function ml(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Id(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ov(t){const e={};for(const n in t)e[n]=t[n];return e}const qp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<qp.length;s++)n=qp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gl(t){this.src=t,this.g={},this.h=0}gl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Yc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new VC(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Qc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Av(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ml(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Yc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Cd="closure_lm_"+(1e6*Math.random()|0),Du={};function $v(t,e,n,r,i){if(r&&r.once)return bv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$v(t,e[s],n,r,i);return null}return n=Nd(n),t&&t[qs]?t.N(e,n,Ks(r)?!!r.capture:!!r,i):Fv(t,e,n,!1,r,i)}function Fv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ks(i)?!!i.capture:!!i,a=Td(t);if(a||(t[Cd]=a=new gl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=BC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Vv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BC(){function t(n){return e.call(t.src,t.listener,n)}const e=zC;return t}function bv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)bv(t,e[s],n,r,i);return null}return n=Nd(n),t&&t[qs]?t.O(e,n,Ks(r)?!!r.capture:!!r,i):Fv(t,e,n,!0,r,i)}function Uv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Uv(t,e[s],n,r,i);else r=Ks(r)?!!r.capture:!!r,n=Nd(n),t&&t[qs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Yc(s,n,r,i),-1<n&&(ml(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Td(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Yc(e,n,r,i)),(n=-1<t?e[t]:null)&&kd(n))}function kd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[qs])Qc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Vv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Td(e))?(Qc(n,t),n.h==0&&(n.src=null,e[Cd]=null)):ml(t)}}}function Vv(t){return t in Du?Du[t]:Du[t]="on"+t}function zC(t,e){if(t.ba)t=!0;else{e=new Is(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&kd(t),t=n.call(r,e)}return t}function Td(t){return t=t[Cd],t instanceof gl?t:null}var xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nd(t){return typeof t=="function"?t:(t[xu]||(t[xu]=function(e){return t.handleEvent(e)}),t[xu])}function Te(){Un.call(this),this.i=new gl(this),this.P=this,this.I=null}Le(Te,Un);Te.prototype[qs]=!0;Te.prototype.removeEventListener=function(t,e,n,r){Uv(this,t,e,n,r)};function Ae(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),Mv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Do(o,r,!0,e)&&i}if(o=e.g=t,i=Do(o,r,!0,e)&&i,i=Do(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Do(o,r,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ml(n[r]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Te.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Do(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Qc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Pd=U.JSON.stringify;function jC(){var t=jv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HC{constructor(){this.h=this.g=null}add(e,n){const r=Bv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Bv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new WC,t=>t.reset());class WC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KC(t){U.setTimeout(()=>{throw t},0)}function zv(t,e){Xc||qC(),Jc||(Xc(),Jc=!0),jv.add(t,e)}var Xc;function qC(){var t=U.Promise.resolve(void 0);Xc=function(){t.then(GC)}}var Jc=!1,jv=new HC;function GC(){for(var t;t=jC();){try{t.h.call(t.g)}catch(n){KC(n)}var e=Bv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Jc=!1}function yl(t,e){Te.call(this),this.h=t||1,this.g=e||U,this.j=Ve(this.lb,this),this.l=Date.now()}Le(yl,Te);D=yl.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(Rd(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){yl.X.M.call(this),Rd(this),delete this.g};function Ad(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function Hv(t){t.g=Ad(()=>{t.g=null,t.i&&(t.i=!1,Hv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class QC extends Un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hv(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(t){Un.call(this),this.h=t,this.g={}}Le(Cs,Un);var Gp=[];function Wv(t,e,n,r){Array.isArray(n)||(n&&(Gp[0]=n.toString()),n=Gp);for(var i=0;i<n.length;i++){var s=$v(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Kv(t){Id(t.g,function(e,n){this.g.hasOwnProperty(n)&&kd(e)},t),t.g={}}Cs.prototype.M=function(){Cs.X.M.call(this),Kv(this)};Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vl(){this.g=!0}vl.prototype.Aa=function(){this.g=!1};function YC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function XC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Or(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZC(t,n)+(r?" "+r:"")})}function JC(t,e){t.info(function(){return"TIMEOUT: "+e})}vl.prototype.info=function(){};function ZC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pd(n)}catch{return e}}var vr={},Qp=null;function wl(){return Qp=Qp||new Te}vr.Pa="serverreachability";function qv(t){Be.call(this,vr.Pa,t)}Le(qv,Be);function ks(t){const e=wl();Ae(e,new qv(e))}vr.STAT_EVENT="statevent";function Gv(t,e){Be.call(this,vr.STAT_EVENT,t),this.stat=e}Le(Gv,Be);function Ke(t){const e=wl();Ae(e,new Gv(e,t))}vr.Qa="timingevent";function Qv(t,e){Be.call(this,vr.Qa,t),this.size=e}Le(Qv,Be);function Gs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var El={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Yv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Dd(){}Dd.prototype.h=null;function Yp(t){return t.h||(t.h=t.i())}function Xv(){}var Qs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function xd(){Be.call(this,"d")}Le(xd,Be);function Ld(){Be.call(this,"c")}Le(Ld,Be);var Zc;function Sl(){}Le(Sl,Dd);Sl.prototype.g=function(){return new XMLHttpRequest};Sl.prototype.i=function(){return{}};Zc=new Sl;function Ys(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Cs(this),this.O=ek,t=qc?125:void 0,this.T=new yl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jv}function Jv(){this.i=null,this.g="",this.h=!1}var ek=45e3,eh={},Ma={};D=Ys.prototype;D.setTimeout=function(t){this.O=t};function th(t,e,n){t.K=1,t.v=Il(Jt(e)),t.s=n,t.P=!0,Zv(t,null)}function Zv(t,e){t.F=Date.now(),Xs(t),t.A=Jt(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),a0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Jv,t.g=P0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new QC(Ve(t.La,t,t.g),t.N)),Wv(t.S,t.g,"readystatechange",t.ib),e=t.H?Ov(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ks(),YC(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&zt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const c=zt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||qc||this.g&&(this.h.h||this.g.fa()||em(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ks(3):ks(2)),_l(this);var n=this.g.aa();this.Y=n;t:if(e0(this)){var r=em(this.g);t="";var i=r.length,s=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Xi(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,XC(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!La(a)){var u=a;break t}}u=null}if(n=u)Or(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,nh(this,n);else{this.i=!1,this.o=3,Ke(12),Yn(this),Xi(this);break e}}this.P?(t0(this,c,o),qc&&this.i&&c==3&&(Wv(this.S,this.T,"tick",this.hb),this.T.start())):(Or(this.j,this.m,o,null),nh(this,o)),c==4&&Yn(this),this.i&&!this.I&&(c==4?C0(this.l,this):(this.i=!1,Xs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),Yn(this),Xi(this)}}}catch{}finally{}};function e0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function t0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=tk(t,n),i==Ma){e==4&&(t.o=4,Ke(14),r=!1),Or(t.j,t.m,null,"[Incomplete Response]");break}else if(i==eh){t.o=4,Ke(15),Or(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Or(t.j,t.m,i,null),nh(t,i);e0(t)&&i!=Ma&&i!=eh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vd(e),e.K=!0,Ke(11))):(Or(t.j,t.m,n,"[Invalid Chunked Response]"),Yn(t),Xi(t))}D.hb=function(){if(this.g){var t=zt(this.g),e=this.g.fa();this.C<e.length&&(_l(this),t0(this,t,e),this.i&&t!=4&&Xs(this))}};function tk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ma:(n=Number(e.substring(n,r)),isNaN(n)?eh:(r+=1,r+n>e.length?Ma:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Yn(this)};function Xs(t){t.V=Date.now()+t.O,n0(t,t.O)}function n0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gs(Ve(t.gb,t),e)}function _l(t){t.B&&(U.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(JC(this.j,this.A),this.K!=2&&(ks(),Ke(17)),Yn(this),this.o=2,Xi(this)):n0(this,this.V-t)};function Xi(t){t.l.G==0||t.I||C0(t.l,t)}function Yn(t){_l(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Rd(t.T),Kv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function nh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||rh(n.h,t))){if(!t.J&&rh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ba(n),Tl(n);else break e;Ud(n),Ke(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Gs(Ve(n.cb,n),6e3));if(1>=c0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xn(n,11)}else if((t.J||n.g==t)&&ba(n),!La(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const w=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Od(s,s.h),s.h=null))}if(r.D){const v=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ie(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=N0(r,r.H?r.ka:null,r.V),o.J){h0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(_l(a),Xs(a)),r.g=o}else _0(r);0<n.i.length&&Nl(n)}else u[0]!="stop"&&u[0]!="close"||Xn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xn(n,7):bd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ks(4)}catch{}}function nk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function r0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rk(t),r=nk(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var i0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ik(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function tr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof tr){this.h=e!==void 0?e:t.h,$a(this,t.j),this.s=t.s,this.g=t.g,Fa(this,t.m),this.l=t.l,e=t.i;var n=new Ts;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xp(this,n),this.o=t.o}else t&&(n=String(t).match(i0))?(this.h=!!e,$a(this,n[1]||"",!0),this.s=Ui(n[2]||""),this.g=Ui(n[3]||"",!0),Fa(this,n[4]),this.l=Ui(n[5]||"",!0),Xp(this,n[6]||"",!0),this.o=Ui(n[7]||"")):(this.h=!!e,this.i=new Ts(null,this.h))}tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vi(e,Jp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vi(e,Jp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vi(n,n.charAt(0)=="/"?ak:ok,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vi(n,uk)),t.join("")};function Jt(t){return new tr(t)}function $a(t,e,n){t.j=n?Ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xp(t,e,n){e instanceof Ts?(t.i=e,ck(t.i,t.h)):(n||(e=Vi(e,lk)),t.i=new Ts(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function Il(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jp=/[#\/\?@]/g,ok=/[#\?:]/g,ak=/[#\?]/g,lk=/[#\?@]/g,uk=/#/g;function Ts(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new Map,t.h=0,t.i&&ik(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ts.prototype;D.add=function(t,e){Vn(this),this.i=null,t=mi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function s0(t,e){Vn(t),e=mi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function o0(t,e){return Vn(t),e=mi(t,e),t.g.has(e)}D.forEach=function(t,e){Vn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.oa=function(){Vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.W=function(t){Vn(this);let e=[];if(typeof t=="string")o0(this,t)&&(e=e.concat(this.g.get(mi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Vn(this),this.i=null,t=mi(this,t),o0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function a0(t,e,n){s0(t,e),0<n.length&&(t.i=null,t.g.set(mi(t,e),Sd(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function mi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ck(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(s0(this,r),a0(this,i,n))},t)),t.j=e}var hk=class{constructor(e,n){this.h=e,this.g=n}};function l0(t){this.l=t||dk,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dk=10;function u0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function c0(t){return t.h?1:t.g?t.g.size:0}function rh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Od(t,e){t.g?t.g.add(e):t.h=e}function h0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}l0.prototype.cancel=function(){if(this.i=d0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function d0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Sd(t.i)}function Md(){}Md.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};Md.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function fk(){this.g=new Md}function pk(t,e,n){const r=n||"";try{r0(t,function(i,s){let o=i;Ks(i)&&(o=Pd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function mk(t,e){const n=new vl;if(U.Image){const r=new Image;r.onload=Ao(xo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ao(xo,n,r,"TestLoadImage: error",!1,e),r.onabort=Ao(xo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ao(xo,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Js(t){this.l=t.ac||null,this.j=t.jb||!1}Le(Js,Dd);Js.prototype.g=function(){return new Cl(this.l,this.j)};Js.prototype.i=function(t){return function(){return t}}({});function Cl(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=$d,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Cl,Te);var $d=0;D=Cl.prototype;D.open=function(t,e){if(this.readyState!=$d)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ns(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=$d};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;f0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function f0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zs(this):Ns(this),this.readyState==3&&f0(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,Zs(this))};D.Ua=function(t){this.g&&(this.response=t,Zs(this))};D.ga=function(){this.g&&Zs(this)};function Zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ns(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ns(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gk=U.JSON.parse;function ce(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=p0,this.K=this.L=!1}Le(ce,Te);var p0="",yk=/^https?$/i,vk=["POST","PUT"];D=ce.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Zc.g(),this.C=this.u?Yp(this.u):Yp(Zc),this.g.onreadystatechange=Ve(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Zp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=Av(vk,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{y0(this),0<this.B&&((this.K=wk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.qa,this)):this.A=Ad(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Zp(this,s)}};function wk(t){return ti&&$C()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Ed<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function Zp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,m0(t),kl(t)}function m0(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),kl(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kl(this,!0)),ce.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?g0(this):this.fb())};D.fb=function(){g0(this)};function g0(t){if(t.h&&typeof Ed<"u"&&(!t.C[1]||zt(t)!=4||t.aa()!=2)){if(t.v&&zt(t)==4)Ad(t.Ha,0,t);else if(Ae(t,"readystatechange"),zt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(i0)[1]||null;if(!i&&U.self&&U.self.location){var s=U.self.location.protocol;i=s.substr(0,s.length-1)}r=!yk.test(i?i.toLowerCase():"")}n=r}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",m0(t)}}finally{kl(t)}}}}function kl(t,e){if(t.g){y0(t);const n=t.g,r=t.C[0]?xa:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=r}catch{}}}function y0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function zt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gk(e)}};function em(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case p0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function v0(t){let e="";return Id(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Fd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=v0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function xi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function w0(t){this.Ca=0,this.i=[],this.j=new vl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xi("baseRetryDelayMs",5e3,t),this.bb=xi("retryDelaySeedMs",1e4,t),this.$a=xi("forwardChannelMaxRetries",2,t),this.ta=xi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new l0(t&&t.concurrentRequestLimit),this.Fa=new fk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=w0.prototype;D.ma=8;D.G=1;function bd(t){if(E0(t),t.G==3){var e=t.U++,n=Jt(t.F);ie(n,"SID",t.I),ie(n,"RID",e),ie(n,"TYPE","terminate"),eo(t,n),e=new Ys(t,t.j,e,void 0),e.K=2,e.v=Il(Jt(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=P0(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xs(e)}T0(t)}function Tl(t){t.g&&(Vd(t),t.g.cancel(),t.g=null)}function E0(t){Tl(t),t.u&&(U.clearTimeout(t.u),t.u=null),ba(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function Nl(t){u0(t.h)||t.m||(t.m=!0,zv(t.Ja,t),t.C=0)}function Ek(t,e){return c0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Gs(Ve(t.Ja,t,e),k0(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ys(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Ov(s),Mv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=S0(this,i,e),n=Jt(this.F),ie(n,"RID",t),ie(n,"CVER",22),this.D&&ie(n,"X-HTTP-Session-Id",this.D),eo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(v0(s)))+"&"+e:this.o&&Fd(n,this.o,s)),Od(this.h,i),this.Ya&&ie(n,"TYPE","init"),this.O?(ie(n,"$req",e),ie(n,"SID","null"),i.Z=!0,th(i,n,null)):th(i,n,e),this.G=2}}else this.G==3&&(t?tm(this,t):this.i.length==0||u0(this.h)||tm(this))};function tm(t,e){var n;e?n=e.m:n=t.U++;const r=Jt(t.F);ie(r,"SID",t.I),ie(r,"RID",n),ie(r,"AID",t.T),eo(t,r),t.o&&t.s&&Fd(r,t.o,t.s),n=new Ys(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=S0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Od(t.h,n),th(n,r,e)}function eo(t,e){t.ia&&Id(t.ia,function(n,r){ie(e,r,n)}),t.l&&r0({},function(n,r){ie(e,r,n)})}function S0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ve(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{pk(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function _0(t){t.g||t.u||(t.Z=1,zv(t.Ia,t),t.A=0)}function Ud(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Gs(Ve(t.Ia,t),k0(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,I0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Gs(Ve(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ke(10),Tl(this),I0(this))};function Vd(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function I0(t){t.g=new Ys(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jt(t.sa);ie(e,"RID","rpc"),ie(e,"SID",t.I),ie(e,"CI",t.L?"0":"1"),ie(e,"AID",t.T),ie(e,"TYPE","xmlhttp"),eo(t,e),t.o&&t.s&&Fd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Il(Jt(e)),n.s=null,n.P=!0,Zv(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Tl(this),Ud(this),Ke(19))};function ba(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function C0(t,e){var n=null;if(t.g==e){ba(t),Vd(t),t.g=null;var r=2}else if(rh(t.h,e))n=e.D,h0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=wl(),Ae(r,new Qv(r,n)),Nl(t)}else _0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&Ek(t,e)||r==2&&Ud(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}}function k0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ve(t.kb,t);n||(n=new tr("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||$a(n,"https"),Il(n)),mk(n.toString(),r)}else Ke(2);t.G=0,t.l&&t.l.va(e),T0(t),E0(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function T0(t){if(t.G=0,t.la=[],t.l){const e=d0(t.h);(e.length!=0||t.i.length!=0)&&(Hp(t.la,e),Hp(t.la,t.i),t.h.i.length=0,Sd(t.i),t.i.length=0),t.l.ua()}}function N0(t,e,n){var r=n instanceof tr?Jt(n):new tr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Fa(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new tr(null,void 0);r&&$a(s,r),e&&(s.g=e),i&&Fa(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ie(r,n,e),ie(r,"VER",t.ma),eo(t,r),r}function P0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new Js({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function R0(){}D=R0.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Ua(){if(ti&&!(10<=Number(FC)))throw Error("Environmental error: no available transport.")}Ua.prototype.g=function(t,e){return new at(t,e)};function at(t,e){Te.call(this),this.g=new w0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!La(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!La(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gi(this)}Le(at,Te);at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=N0(t,null,t.V),Nl(t)};at.prototype.close=function(){bd(this.g)};at.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pd(t),t=n);e.i.push(new hk(e.ab++,t)),e.G==3&&Nl(e)};at.prototype.M=function(){this.g.l=null,delete this.j,bd(this.g),delete this.g,at.X.M.call(this)};function A0(t){xd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(A0,xd);function D0(){Ld.call(this),this.status=1}Le(D0,Ld);function gi(t){this.g=t}Le(gi,R0);gi.prototype.xa=function(){Ae(this.g,"a")};gi.prototype.wa=function(t){Ae(this.g,new A0(t))};gi.prototype.va=function(t){Ae(this.g,new D0)};gi.prototype.ua=function(){Ae(this.g,"b")};Ua.prototype.createWebChannel=Ua.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;El.NO_ERROR=0;El.TIMEOUT=8;El.HTTP_ERROR=6;Yv.COMPLETE="complete";Xv.EventType=Qs;Qs.OPEN="a";Qs.CLOSE="b";Qs.ERROR="c";Qs.MESSAGE="d";Te.prototype.listen=Te.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var Sk=function(){return new Ua},_k=function(){return wl()},Lu=El,Ik=Yv,Ck=vr,nm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kk=Js,Lo=Xv,Tk=ce;const rm="@firebase/firestore";/**
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
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
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
 */let yi="9.20.0";/**
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
 */const fr=new yd("@firebase/firestore");function im(){return fr.logLevel}function O(t,...e){if(fr.logLevel<=Q.DEBUG){const n=e.map(Bd);fr.debug(`Firestore (${yi}): ${t}`,...n)}}function Zt(t,...e){if(fr.logLevel<=Q.ERROR){const n=e.map(Bd);fr.error(`Firestore (${yi}): ${t}`,...n)}}function Va(t,...e){if(fr.logLevel<=Q.WARN){const n=e.map(Bd);fr.warn(`Firestore (${yi}): ${t}`,...n)}}function Bd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${yi}) INTERNAL ASSERTION FAILED: `+t;throw Zt(e),new Error(e)}function Ee(t,e){t||z()}function Y(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let b=class extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
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
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class x0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class Pk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rk{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new x0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Fe(e)}}class Ak{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Dk{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Ak(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lk{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.T=n.token,new xk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ok(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class L0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ok(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function ni(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new nt(0,0))}static max(){return new V(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ps{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ps.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ps?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Ps{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const Mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Ps{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return Mk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ue.fromString(e))}static fromName(e){return new $(ue.fromString(e).popFirst(5))}static empty(){return new $(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ue(e.slice()))}}function $k(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new xn(i,$.empty(),e)}function Fk(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xn(V.min(),$.empty(),-1)}static max(){return new xn(V.max(),$.empty(),-1)}}function bk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
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
 */const Uk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zd(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==Uk)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function to(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class jd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}jd.ct=-1;function Pl(t){return t==null}function ih(t){return t===0&&1/t==-1/0}/**
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
 */function sm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Pe.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Pe.RED,this.left=i??Pe.EMPTY,this.right=s??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Pe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new om(this.data.getIterator())}getIteratorFrom(e){return new om(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class om{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yn{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new yn([])}unionWith(e){let n=new Se(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class zk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zk("Invalid base64 string: "+i):i}}(e);return new He(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const jk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=jk.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
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
 */function O0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function M0(t){const e=t.mapValue.fields.__previous_value__;return O0(e)?M0(e):e}function Rs(t){const e=Ln(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class Hk{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class As{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new As("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof As&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?O0(t)?4:Wk(t)?9007199254740991:10:z()}function Ot(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rs(t).isEqual(Rs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ln(r.timestampValue),o=Ln(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ri(r.bytesValue).isEqual(ri(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return pe(r.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return pe(r.integerValue)===pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=pe(r.doubleValue),o=pe(i.doubleValue);return s===o?ih(s)===ih(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ni(t.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(sm(s)!==sm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ot(s[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Ds(t,e){return(t.values||[]).find(n=>Ot(n,e))!==void 0}function ii(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=pe(i.integerValue||i.doubleValue),a=pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return am(t.timestampValue,e.timestampValue);case 4:return am(Rs(t),Rs(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ri(i),a=ri(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=X(o[l],a[l]);if(u!==0)return u}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=X(pe(i.latitude),pe(s.latitude));return o!==0?o:X(pe(i.longitude),pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ii(o[l],a[l]);if(u)return u}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Mo.mapValue&&s===Mo.mapValue)return 0;if(i===Mo.mapValue)return 1;if(s===Mo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=X(a[c],u[c]);if(h!==0)return h;const f=ii(o[a[c]],l[u[c]]);if(f!==0)return f}return X(a.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function am(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=Ln(t),r=Ln(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function si(t){return sh(t)}function sh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ln(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ri(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=sh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${sh(r.fields[a])}`;return s+"}"}(t.mapValue):z();var e,n}function oh(t){return!!t&&"integerValue"in t}function Hd(t){return!!t&&"arrayValue"in t}function lm(t){return!!t&&"nullValue"in t}function um(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ou(t){return!!t&&"mapValue"in t}function Ji(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ji(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ji(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Wk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ou(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ji(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ou(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ou(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(Ji(this.value))}}/**
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
 */class Ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,V.min(),V.min(),V.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ue(e,1,n,V.min(),r,i,0)}static newNoDocument(e,n){return new Ue(e,2,n,V.min(),V.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,V.min(),V.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ba{constructor(e,n){this.position=e,this.inclusive=n}}function cm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=ii(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ot(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $0{}class ye extends $0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Gk(e,n,r):n==="array-contains"?new Xk(e,r):n==="in"?new Jk(e,r):n==="not-in"?new Zk(e,r):n==="array-contains-any"?new eT(e,r):new ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Qk(e,r):new Yk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ii(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mt extends $0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Mt(e,n)}matches(e){return F0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function F0(t){return t.op==="and"}function b0(t){return qk(t)&&F0(t)}function qk(t){for(const e of t.filters)if(e instanceof Mt)return!1;return!0}function ah(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+si(t.value);if(b0(t))return t.filters.map(e=>ah(e)).join(",");{const e=t.filters.map(n=>ah(n)).join(",");return`${t.op}(${e})`}}function U0(t,e){return t instanceof ye?function(n,r){return r instanceof ye&&n.op===r.op&&n.field.isEqual(r.field)&&Ot(n.value,r.value)}(t,e):t instanceof Mt?function(n,r){return r instanceof Mt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&U0(s,r.filters[o]),!0):!1}(t,e):void z()}function V0(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${si(e.value)}`}(t):t instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(V0).join(" ,")+"}"}(t):"Filter"}class Gk extends ye{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class Qk extends ye{constructor(e,n){super(e,"in",n),this.keys=B0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Yk extends ye{constructor(e,n){super(e,"not-in",n),this.keys=B0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function B0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class Xk extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hd(n)&&Ds(n.arrayValue,this.value)}}class Jk extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ds(this.value.arrayValue,n)}}class Zk extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ds(this.value.arrayValue,n)}}class eT extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ds(this.value.arrayValue,r))}}/**
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
 */class tT{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function dm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new tT(t,e,n,r,i,s,o)}function Wd(t){const e=Y(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ah(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>si(r)).join(",")),e.ft=n}return e.ft}function Kd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!U0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hm(t.startAt,e.startAt)&&hm(t.endAt,e.endAt)}function lh(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Al{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function nT(t,e,n,r,i,s,o,a){return new Al(t,e,n,r,i,s,o,a)}function qd(t){return new Al(t)}function fm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function iT(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function sT(t){return t.collectionGroup!==null}function zr(t){const e=Y(t);if(e.dt===null){e.dt=[];const n=iT(e),r=rT(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Zi(n)),e.dt.push(new Zi(Xe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Zi(Xe.keyField(),s))}}}return e.dt}function en(t){const e=Y(t);if(!e.wt)if(e.limitType==="F")e.wt=dm(e.path,e.collectionGroup,zr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of zr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Zi(s.field,o))}const r=e.endAt?new Ba(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ba(e.startAt.position,e.startAt.inclusive):null;e.wt=dm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function uh(t,e,n){return new Al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dl(t,e){return Kd(en(t),en(e))&&t.limitType===e.limitType}function z0(t){return`${Wd(en(t))}|lt:${t.limitType}`}function ch(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>V0(r)).join(", ")}]`),Pl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>si(r)).join(",")),`Target(${n})`}(en(t))}; limitType=${t.limitType})`}function xl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of zr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=cm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,zr(n),r)||n.endAt&&!function(i,s,o){const a=cm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,zr(n),r))}(t,e)}function oT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function j0(t){return(e,n)=>{let r=!1;for(const i of zr(t)){const s=aT(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aT(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ii(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Bk(this.inner)}size(){return this.innerSize}}/**
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
 */const lT=new xe($.comparator);function On(){return lT}const H0=new xe($.comparator);function Bi(...t){let e=H0;for(const n of t)e=e.insert(n.key,n);return e}function uT(t){let e=H0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jn(){return es()}function W0(){return es()}function es(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const cT=new Se($.comparator);function q(...t){let e=cT;for(const n of t)e=e.add(n);return e}const hT=new Se(X);function K0(){return hT}/**
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
 */function dT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ih(e)?"-0":e}}function fT(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ll{constructor(){this._=void 0}}function pT(t,e,n){return t instanceof hh?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof za?q0(t,e):t instanceof ja?G0(t,e):function(r,i){const s=gT(r,i),o=pm(s)+pm(r._t);return oh(s)&&oh(r._t)?fT(o):dT(r.serializer,o)}(t,e)}function mT(t,e,n){return t instanceof za?q0(t,e):t instanceof ja?G0(t,e):n}function gT(t,e){return t instanceof dh?oh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class hh extends Ll{}class za extends Ll{constructor(e){super(),this.elements=e}}function q0(t,e){const n=Q0(e);for(const r of t.elements)n.some(i=>Ot(i,r))||n.push(r);return{arrayValue:{values:n}}}class ja extends Ll{constructor(e){super(),this.elements=e}}function G0(t,e){let n=Q0(e);for(const r of t.elements)n=n.filter(i=>!Ot(i,r));return{arrayValue:{values:n}}}class dh extends Ll{constructor(e,n){super(),this.serializer=e,this._t=n}}function pm(t){return pe(t.integerValue||t.doubleValue)}function Q0(t){return Hd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof za&&r instanceof za||n instanceof ja&&r instanceof ja?ni(n.elements,r.elements,Ot):n instanceof dh&&r instanceof dh?Ot(n._t,r._t):n instanceof hh&&r instanceof hh}(t.transform,e.transform)}class rr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rr}static exists(e){return new rr(void 0,e)}static updateTime(e){return new rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gd{}function Y0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wT(t.key,rr.none()):new Qd(t.key,t.data,rr.none());{const n=t.data,r=Rt.empty();let i=new Se(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ol(t.key,r,new yn(i.toArray()),rr.none())}}function vT(t,e,n){t instanceof Qd?function(r,i,s){const o=r.value.clone(),a=gm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ol?function(r,i,s){if(!Xo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=gm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(X0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ts(t,e,n,r){return t instanceof Qd?function(i,s,o,a){if(!Xo(i.precondition,s))return o;const l=i.value.clone(),u=ym(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ol?function(i,s,o,a){if(!Xo(i.precondition,s))return o;const l=ym(i.fieldTransforms,a,s),u=s.data;return u.setAll(X0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Xo(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function mm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ni(n,r,(i,s)=>yT(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qd extends Gd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ol extends Gd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function X0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gm(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,mT(o,a,n[i]))}return r}function ym(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,pT(s,o,e))}return r}class wT extends Gd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ET{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vT(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ts(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ts(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=W0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Y0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,(n,r)=>mm(n,r))&&ni(this.baseMutations,e.baseMutations,(n,r)=>mm(n,r))}}/**
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
 */class ST{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class _T{constructor(e){this.count=e}}/**
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
 */var fe,K;function J0(t){if(t===void 0)return Zt("GRPC error has no .code"),k.UNKNOWN;switch(t){case fe.OK:return k.OK;case fe.CANCELLED:return k.CANCELLED;case fe.UNKNOWN:return k.UNKNOWN;case fe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case fe.INTERNAL:return k.INTERNAL;case fe.UNAVAILABLE:return k.UNAVAILABLE;case fe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case fe.NOT_FOUND:return k.NOT_FOUND;case fe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case fe.ABORTED:return k.ABORTED;case fe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case fe.DATA_LOSS:return k.DATA_LOSS;default:return z()}}(K=fe||(fe={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Yd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return $o}static getOrCreateInstance(){return $o===null&&($o=new Yd),$o}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let $o=null;/**
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
 */class Ml{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,no.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ml(V.min(),i,K0(),On(),q())}}class no{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new no(r,n,q(),q(),q())}}/**
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
 */class Jo{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class Z0{constructor(e,n){this.targetId=e,this.Et=n}}class e1{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class vm{constructor(){this.At=0,this.Rt=Em(),this.vt=He.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=q(),n=q(),r=q();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new no(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=Em()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class IT{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=On(),this.qt=wm(),this.Ut=new Se(X)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(lh(o))if(i===0){const a=new $(o.path);this.Qt(r,a,Ue.newNoDocument(a,V.min()))}else Ee(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=Yd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&lh(a.target)){const l=new $(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Ue.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=q();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Ml(e,n,this.Ut,this.Lt,r);return this.Lt=On(),this.qt=wm(),this.Ut=new Se(X),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new vm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Se(X),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new vm),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function wm(){return new xe($.comparator)}function Em(){return new xe($.comparator)}/**
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
 */const CT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),TT=(()=>({and:"AND",or:"OR"}))();class NT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function PT(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jr(t){return Ee(!!t),V.fromTimestamp(function(e){const n=Ln(e);return new nt(n.seconds,n.nanos)}(t))}function AT(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function t1(t){const e=ue.fromString(t);return Ee(s1(e)),e}function Mu(t,e){const n=t1(e);if(n.get(1)!==t.databaseId.projectId)throw new b(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(n1(n))}function fh(t,e){return AT(t.databaseId,e)}function DT(t){const e=t1(t);return e.length===4?ue.emptyPath():n1(e)}function Sm(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function n1(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Ee(u===void 0||typeof u=="string"),He.fromBase64String(u||"")):(Ee(u===void 0||u instanceof Uint8Array),He.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:J0(l.code);return new b(u,l.message||"")}(o);n=new e1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mu(t,r.document.name),s=jr(r.document.updateTime),o=r.document.createTime?jr(r.document.createTime):V.min(),a=new Rt({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Jo(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Mu(t,r.document),s=r.readTime?jr(r.readTime):V.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Mu(t,r.document),s=r.removedTargetIds||[];n=new Jo([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new _T(i),o=r.targetId;n=new Z0(o,s)}}return n}function LT(t,e){return{documents:[fh(t,e.path)]}}function OT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=fh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return i1(Mt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Er(c.field),direction:FT(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||Pl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function MT(t){let e=DT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=r1(c);return h instanceof Mt&&b0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Zi(Sr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Pl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new Ba(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new Ba(f,h)}(n.endAt)),nT(e,i,o,s,a,"F",l,u)}function $T(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function r1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Sr(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Sr(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Sr(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Sr(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(Sr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(n=>r1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function FT(t){return CT[t]}function bT(t){return kT[t]}function UT(t){return TT[t]}function Er(t){return{fieldPath:t.canonicalString()}}function Sr(t){return Xe.fromServerFormat(t.fieldPath)}function i1(t){return t instanceof ye?function(e){if(e.op==="=="){if(um(e.value))return{unaryFilter:{field:Er(e.field),op:"IS_NAN"}};if(lm(e.value))return{unaryFilter:{field:Er(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(um(e.value))return{unaryFilter:{field:Er(e.field),op:"IS_NOT_NAN"}};if(lm(e.value))return{unaryFilter:{field:Er(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(e.field),op:bT(e.op),value:e.value}}}(t):t instanceof Mt?function(e){const n=e.getFilters().map(r=>i1(r));return n.length===1?n[0]:{compositeFilter:{op:UT(e.op),filters:n}}}(t):z()}function s1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ir{constructor(e,n,r,i,s=V.min(),o=V.min(),a=He.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class VT{constructor(e){this.se=e}}function BT(t){const e=MT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uh(e,e.limit,"L"):e}/**
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
 */class zT{constructor(){this.He=new jT}addToCollectionParentIndex(e,n){return this.He.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(xn.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class jT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Se(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(ue.comparator)).toArray()}}/**
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
 */class oi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new oi(0)}static bn(){return new oi(-1)}}/**
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
 */class HT{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class WT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class KT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ts(r.mutation,i,yn.empty(),nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=Jn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Bi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=On();const o=es(),a=es();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ol)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ts(c.mutation,u,c.mutation.getFieldMask(),nt.now())):o.set(u.key,yn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new WT(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=es();let i=new xe((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||yn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=W0();c.forEach(f=>{if(!s.has(f)){const y=Y0(n.get(f),r.get(f));y!==null&&h.set(f,y),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(Jn());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:uT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Bi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Bi();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(u,c){return new Al(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ue.newInvalidDocument(u)))});let o=Bi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ts(u.mutation,l,yn.empty(),nt.now()),xl(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class qT{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return _.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:jr(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:BT(r.bundledQuery),readTime:jr(r.readTime)}}(n)),_.resolve()}}/**
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
 */class GT{constructor(){this.overlays=new xe($.comparator),this.ts=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=Jn(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Jn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Jn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ST(n,r));let s=this.ts.get(n);s===void 0&&(s=q(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
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
 */class Xd{constructor(){this.es=new Se(Ie.ns),this.ss=new Se(Ie.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new Ie(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new $(new ue([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new $(new ue([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=q();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return $.comparator(e.key,n.key)||X(e.ds,n.ds)}static rs(e,n){return X(e.ds,n.ds)||$.comparator(e.key,n.key)}}/**
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
 */class QT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Se(Ie.ns)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ET(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(X);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),_.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new $(s),0);let a=new Se(X);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),_.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return _.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new Ie(n,0),i=this._s.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class YT{constructor(e){this.Ts=e,this.docs=new xe($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=On();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bk(Fk(c),r)<=0||(i.has(c.key)||xl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,n,r,i){z()}Es(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XT(this)}getSize(e){return _.resolve(this.size)}}class XT extends HT{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class JT{constructor(e){this.persistence=e,this.As=new vi(n=>Wd(n),Kd),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Xd,this.targetCount=0,this.bs=oi.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),_.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new oi(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Sn(n),_.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.vs.containsKey(n))}}/**
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
 */class ZT{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new jd(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new JT(this),this.indexManager=new zT,this.remoteDocumentCache=function(r){return new YT(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new VT(n),this.xs=new qT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new QT(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new eN(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return _.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class eN extends Vk{constructor(e){super(),this.currentSequenceNumber=e}}class Jd{constructor(e){this.persistence=e,this.$s=new Xd,this.Ms=null}static Fs(e){return new Jd(e)}get Bs(){if(this.Ms)return this.Ms;throw z()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),_.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Bs,r=>{const i=$.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return _.or([()=>_.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Zd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zd(e,n.fromCache,r,i)}}/**
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
 */class tN{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(fm(n))return _.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=uh(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,uh(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return fm(n)||i.isEqual(V.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(im()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ch(n)),this.Fi(e,o,n,$k(i,-1)))})}$i(e,n){let r=new Se(j0(e));return n.forEach((i,s)=>{xl(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return im()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",ch(n)),this.xi.getDocumentsMatchingQuery(e,n,xn.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class nN{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new xe(X),this.qi=new vi(s=>Wd(s),Kd),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KT(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function rN(t,e,n,r){return new nN(t,e,n,r)}async function o1(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function a1(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function iN(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let y=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?y=y.withResumeToken(He.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(h,y),function(w,v,I){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,y,c)&&a.push(n.Ds.updateTargetData(s,y))});let l=On(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(sN(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(V.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function sN(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(V.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function oN(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new ir(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function ph(t,e,n){const r=Y(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!to(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function _m(t,e,n){const r=Y(t);let i=V.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Y(a),h=c.qi.get(u);return h!==void 0?_.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,en(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:q())).next(a=>(aN(r,oT(e),a),{documents:a,Wi:s})))}function aN(t,e,n){let r=t.Ui.get(e)||V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class Im{constructor(){this.activeTargetIds=K0()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lN{constructor(){this.Br=new Im,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Im,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uN{qr(e){}shutdown(){}}/**
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
 */class Cm{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Fo=null;function $u(){return Fo===null?Fo=268435456+Math.round(2147483648*Math.random()):Fo++,"0x"+Fo.toString(16)}/**
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
 */const cN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hN{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const $e="WebChannelConnection";class dN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=$u(),a=this.ao(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(O("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Va("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+yi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=cN[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=$u();return new Promise((o,a)=>{const l=new Tk;l.setWithCredentials(!0),l.listenOnce(Ik.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Lu.NO_ERROR:const c=l.getResponseJson();O($e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Lu.TIMEOUT:O($e,`RPC '${e}' ${s} timed out`),a(new b(k.DEADLINE_EXCEEDED,"Request time out"));break;case Lu.HTTP_ERROR:const h=l.getStatus();if(O($e,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const y=f==null?void 0:f.error;if(y&&y.status&&y.message){const w=function(v){const I=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(I)>=0?I:k.UNKNOWN}(y.status);a(new b(w,y.message))}else a(new b(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(k.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{O($e,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O($e,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=$u(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sk(),a=_k(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new kk({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");O($e,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,f=!1;const y=new hN({Wr:v=>{f?O($e,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(O($e,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),O($e,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},Hr:()=>c.close()}),w=(v,I,p)=>{v.listen(I,d=>{try{p(d)}catch(m){setTimeout(()=>{throw m},0)}})};return w(c,Lo.EventType.OPEN,()=>{f||O($e,`RPC '${e}' stream ${i} transport opened.`)}),w(c,Lo.EventType.CLOSE,()=>{f||(f=!0,O($e,`RPC '${e}' stream ${i} transport closed`),y.so())}),w(c,Lo.EventType.ERROR,v=>{f||(f=!0,Va($e,`RPC '${e}' stream ${i} transport errored:`,v),y.so(new b(k.UNAVAILABLE,"The operation could not be completed")))}),w(c,Lo.EventType.MESSAGE,v=>{var I;if(!f){const p=v.data[0];Ee(!!p);const d=p,m=d.error||((I=d[0])===null||I===void 0?void 0:I.error);if(m){O($e,`RPC '${e}' stream ${i} received error:`,m);const E=m.status;let C=function(A){const x=fe[A];if(x!==void 0)return J0(x)}(E),P=m.message;C===void 0&&(C=k.INTERNAL,P="Unknown error status: "+E+" with message "+m.message),f=!0,y.so(new b(C,P)),c.close()}else O($e,`RPC '${e}' stream ${i} received:`,p),y.io(p)}}),w(a,Ck.STAT_EVENT,v=>{v.stat===nm.PROXY?O($e,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===nm.NOPROXY&&O($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.no()},0),y}}function Fu(){return typeof document<"u"?document:null}/**
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
 */function l1(t){return new NT(t,!0)}/**
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
 */class u1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class fN{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new u1(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Zt(n.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new b(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pN extends fN{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=xT(this.serializer,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?jr(s.readTime):V.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Sm(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=lh(a)?{documents:LT(i,a)}:{query:OT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=RT(i,s.resumeToken):s.snapshotVersion.compareTo(V.min())>0&&(o.readTime=PT(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=$T(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Sm(this.serializer),n.removeTarget=e,this.Fo(n)}}/**
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
 */class mN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new b(k.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(k.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(k.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class gN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Zt(n),this.ru=!1):O("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class yN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{io(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Y(a);l.du.add(4),await ro(l),l.mu.set("Unknown"),l.du.delete(4),await $l(l)}(this))})}),this.mu=new gN(r,i)}}async function $l(t){if(io(t))for(const e of t.wu)await e(!0)}async function ro(t){for(const e of t.wu)await e(!1)}function c1(t,e){const n=Y(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),nf(n)?tf(n):wi(n).No()&&ef(n,e))}function h1(t,e){const n=Y(t),r=wi(n);n.fu.delete(e),r.No()&&d1(n,e),n.fu.size===0&&(r.No()?r.$o():io(n)&&n.mu.set("Unknown"))}function ef(t,e){t.gu.Ot(e.targetId),wi(t).jo(e)}function d1(t,e){t.gu.Ot(e),wi(t).Wo(e)}function tf(t){t.gu=new IT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),wi(t).start(),t.mu.ou()}function nf(t){return io(t)&&!wi(t).xo()&&t.fu.size>0}function io(t){return Y(t).du.size===0}function f1(t){t.gu=void 0}async function vN(t){t.fu.forEach((e,n)=>{ef(t,e)})}async function wN(t,e){f1(t),nf(t)?(t.mu.au(e),tf(t)):t.mu.set("Unknown")}async function EN(t,e,n){if(t.mu.set("Online"),e instanceof e1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await km(t,r)}else if(e instanceof Jo?t.gu.Kt(e):e instanceof Z0?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(V.min()))try{const r=await a1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(He.EMPTY_BYTE_STRING,l.snapshotVersion)),d1(i,a);const u=new ir(l.target,a,1,l.sequenceNumber);ef(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await km(t,r)}}async function km(t,e,n){if(!to(e))throw e;t.du.add(1),await ro(t),t.mu.set("Offline"),n||(n=()=>a1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await $l(t)})}async function Tm(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=io(n);n.du.add(3),await ro(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await $l(n)}async function SN(t,e){const n=Y(t);e?(n.du.delete(2),await $l(n)):e||(n.du.add(2),await ro(n),n.mu.set("Unknown"))}function wi(t){return t.yu||(t.yu=function(e,n,r){const i=Y(e);return i.nu(),new pN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:vN.bind(null,t),Zr:wN.bind(null,t),zo:EN.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),nf(t)?tf(t):t.mu.set("Unknown")):(await t.yu.stop(),f1(t))})),t.yu}/**
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
 */class rf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new rf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function p1(t,e){if(Zt("AsyncQueue",`${e}: ${t}`),to(t))return new b(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Bi(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Nm{constructor(){this.Iu=new xe($.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):z():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ai{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ai(e,n,Hr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class _N{constructor(){this.Eu=void 0,this.listeners=[]}}class IN{constructor(){this.queries=new vi(e=>z0(e),Dl),this.onlineState="Unknown",this.Au=new Set}}async function CN(t,e){const n=Y(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _N),i)try{s.Eu=await n.onListen(r)}catch(o){const a=p1(o,`Initialization of query '${ch(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&sf(n)}async function kN(t,e){const n=Y(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function TN(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&sf(n)}function NN(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function sf(t){t.Au.forEach(e=>{e.next()})}class PN{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class m1{constructor(e){this.key=e}}class g1{constructor(e){this.key=e}}class RN{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=q(),this.mutatedKeys=q(),this.Ku=j0(e),this.Gu=new Hr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new Nm,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),y=xl(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),v=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let I=!1;f&&y?f.data.isEqual(y.data)?w!==v&&(r.track({type:3,doc:y}),I=!0):this.Wu(f,y)||(r.track({type:2,doc:y}),I=!0,(l&&this.Ku(y,l)>0||u&&this.Ku(y,u)<0)&&(a=!0)):!f&&y?(r.track({type:0,doc:y}),I=!0):f&&!y&&(r.track({type:1,doc:f}),I=!0,(l||u)&&(a=!0)),I&&(y?(o=o.add(y),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,f){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return y(h)-y(f)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new ai(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Nm,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=q(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new g1(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new m1(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=q();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ai.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class AN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DN{constructor(e){this.key=e,this.ec=!1}}class xN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new vi(a=>z0(a),Dl),this.ic=new Map,this.rc=new Set,this.oc=new xe($.comparator),this.uc=new Map,this.cc=new Xd,this.ac={},this.hc=new Map,this.lc=oi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function LN(t,e){const n=VN(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await oN(n.localStore,en(e));n.isPrimaryClient&&c1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ON(n,e,r,a==="current",o.resumeToken)}return i}async function ON(t,e,n,r,i){t.dc=(h,f,y)=>async function(w,v,I,p){let d=v.view.zu(I);d.Mi&&(d=await _m(w.localStore,v.query,!1).then(({documents:C})=>v.view.zu(C,d)));const m=p&&p.targetChanges.get(v.targetId),E=v.view.applyChanges(d,w.isPrimaryClient,m);return Rm(w,v.targetId,E.Yu),E.snapshot}(t,h,f,y);const s=await _m(t.localStore,e,!0),o=new RN(e,s.Wi),a=o.zu(s.documents),l=no.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Rm(t,n,u.Yu);const c=new AN(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function MN(t,e){const n=Y(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Dl(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ph(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),h1(n.remoteStore,r.targetId),mh(n,r.targetId)}).catch(zd)):(mh(n,r.targetId),await ph(n.localStore,r.targetId,!0))}async function y1(t,e){const n=Y(t);try{const r=await iN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Ee(o.ec):i.removedDocuments.size>0&&(Ee(o.ec),o.ec=!1))}),await w1(n,r,e)}catch(r){await zd(r)}}function Pm(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Y(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&sf(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $N(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new xe($.comparator);o=o.insert(s,Ue.newNoDocument(s,V.min()));const a=q().add(s),l=new Ml(V.min(),new Map,new Se(X),o,a);await y1(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),of(r)}else await ph(r.localStore,e,!1).then(()=>mh(r,e,n)).catch(zd)}function mh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||v1(t,r)})}function v1(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(h1(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),of(t))}function Rm(t,e,n){for(const r of n)r instanceof m1?(t.cc.addReference(r.key,e),FN(t,r)):r instanceof g1?(O("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||v1(t,r.key)):z()}function FN(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.rc.add(r),of(t))}function of(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new $(ue.fromString(e)),r=t.lc.next();t.uc.set(r,new DN(n)),t.oc=t.oc.insert(n,r),c1(t.remoteStore,new ir(en(qd(n.path)),r,2,jd.ct))}}async function w1(t,e,n){const r=Y(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Zd.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(l,h=>_.forEach(h.Vi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>_.forEach(h.Si,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!to(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Li.get(h),y=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(y);u.Li=u.Li.insert(h,w)}}}(r.localStore,s))}async function bN(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await o1(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new b(k.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await w1(n,r.Qi)}}function UN(t,e){const n=Y(t),r=n.uc.get(e);if(r&&r.ec)return q().add(r.key);{let i=q();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function VN(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=y1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$N.bind(null,e),e.nc.zo=TN.bind(null,e.eventManager),e.nc.wc=NN.bind(null,e.eventManager),e}class Am{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=l1(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return rN(this.persistence,new tN,e.initialUser,this.serializer)}createPersistence(e){return new ZT(Jd.Fs,this.serializer)}createSharedClientState(e){return new lN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bN.bind(null,this.syncEngine),await SN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new IN}createDatastore(e){const n=l1(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new dN(i));var i;return function(s,o,a,l){return new mN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Pm(this.syncEngine,a,0),o=Cm.D()?new Cm:new uN,new yN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new xN(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);O("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ro(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class zN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=L0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=p1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bu(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await o1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WN(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Tm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Tm(e.remoteStore,s)),t._onlineComponents=e}function HN(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function WN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await bu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!HN(n))throw n;Va("Error using user provided cache. Falling back to memory cache: "+n),await bu(t,new Am)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await bu(t,new Am);return t._offlineComponents}async function KN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Dm(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Dm(t,new BN))),t._onlineComponents}async function qN(t){const e=await KN(t),n=e.eventManager;return n.onListen=LN.bind(null,e.syncEngine),n.onUnlisten=MN.bind(null,e.syncEngine),n}function GN(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new zN({next:h=>{s.enqueueAndForget(()=>kN(i,c));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new b(k.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new b(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new PN(qd(o.path),u,{includeMetadataChanges:!0,xu:!0});return CN(i,c)}(await qN(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const xm=new Map;/**
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
 */function QN(t,e,n){if(!n)throw new b(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YN(t,e,n,r){if(e===!0&&r===!0)throw new b(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lm(t){if(!$.isDocumentKey(t))throw new b(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function XN(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function gh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=XN(t);throw new b(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Om{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new b(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class af{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Om({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Om(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Nk;switch(n.type){case"firstParty":return new Dk(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xm.get(e);n&&(O("ComponentProvider","Removing Datastore"),xm.delete(e),n.terminate())}(this),Promise.resolve()}}function JN(t,e,n,r={}){var i;const s=(t=gh(t,af))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Va("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Fe.MOCK_USER;else{o=iI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new b(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(l)}t._authCredentials=new Pk(new x0(o,a))}}/**
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
 */class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class lf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lf(this.firestore,e,this._query)}}class xs extends lf{constructor(e,n,r){super(e,n,qd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new $(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function ZN(t,e,...n){if(t=$t(t),arguments.length===1&&(e=L0.A()),QN("doc","path",e),t instanceof af){const r=ue.fromString(e,...n);return Lm(r),new qt(t,null,new $(r))}{if(!(t instanceof qt||t instanceof xs))throw new b(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Lm(r),new qt(t.firestore,t instanceof xs?t.converter:null,new $(r))}}/**
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
 */class eP{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new u1(this,"async_queue_retry"),this.qc=()=>{const n=Fu();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Fu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Fu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new nr;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!to(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Zt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=rf.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&z()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class E1 extends af{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new eP,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||S1(this),this._firestoreClient.terminate()}}function Fl(t,e){const n=typeof t=="object"?t:Nv(),r=typeof t=="string"?t:e||"(default)",i=wd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=tI("firestore");s&&JN(i,...s)}return i}function tP(t){return t._firestoreClient||S1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function S1(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new Hk(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new jN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Ha{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ha(He.fromBase64String(e))}catch(n){throw new b(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ha(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nP{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}const rP=new RegExp("[~\\*/\\[\\]]");function iP(t,e,n){if(e.search(rP)>=0)throw Mm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _1(...e.split("."))._internalPath}catch{throw Mm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mm(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(k.INVALID_ARGUMENT,a+t+l)}/**
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
 */class I1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(C1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sP extends I1{data(){return super.data()}}function C1(t,e){return typeof e=="string"?iP(t,e):e instanceof _1?e._internalPath:e._delegate._internalPath}class oP{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const r={};return Rl(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new nP(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=M0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Rs(e));default:return null}}convertTimestamp(e){const n=Ln(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);Ee(s1(r));const i=new As(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||Zt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class aP{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class k1 extends I1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(C1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lP extends k1{data(e={}){return super.data(e)}}/**
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
 */function uP(t){t=gh(t,qt);const e=gh(t.firestore,E1);return GN(tP(e),t._key).then(n=>hP(e,t,n))}class cP extends oP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ha(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function hP(t,e,n){const r=n.docs.get(e._key),i=new cP(t);return new k1(t,i,e._key,r,new aP(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){yi=n})(pi),ei(new hr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new E1(new Rk(n.getProvider("auth-internal")),new Lk(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new b(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Rn(rm,"3.10.1",t),Rn(rm,"3.10.1","esm2017")})();const dP={apiKey:"AIzaSyA1pwNuw_k-ye8jA3cYcCwGX1plKIWt-n4",authDomain:"sigma-c1c73.firebaseapp.com",projectId:"sigma-c1c73",storageBucket:"sigma-c1c73.appspot.com",messagingSenderId:"576173332217",appId:"1:576173332217:web:13a393182c451e0ebdf428"},Mn=Tv(dP);Fl(Mn);function uf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function T1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fP=T1,N1=new Hs("auth","Firebase",T1());/**
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
 */const Wa=new yd("@firebase/auth");function pP(t,...e){Wa.logLevel<=Q.WARN&&Wa.warn(`Auth (${pi}): ${t}`,...e)}function Zo(t,...e){Wa.logLevel<=Q.ERROR&&Wa.error(`Auth (${pi}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw cf(t,...e)}function xt(t,...e){return cf(t,...e)}function mP(t,e,n){const r=Object.assign(Object.assign({},fP()),{[e]:n});return new Hs("auth","Firebase",r).create(e,{appName:t.name})}function cf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return N1.create(t,...e)}function F(t,e,...n){if(!t)throw cf(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zo(e),new Error(e)}function tn(t,e){t||jt(e)}/**
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
 */function yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gP(){return $m()==="http:"||$m()==="https:"}function $m(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gP()||oI()||"connection"in navigator)?navigator.onLine:!0}function vP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class so{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=sI()||aI()}get(){return yP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hf(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class P1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const EP=new so(3e4,6e4);function oo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,r,i={}){return R1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ws(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),P1.fetch()(A1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function R1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wP),e);try{const i=new SP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mP(t,c,u);Ct(t,c)}}catch(i){if(i instanceof rn)throw i;Ct(t,"network-request-failed",{message:String(i)})}}async function bl(t,e,n,r,i={}){const s=await Ei(t,e,n,r,i);return"mfaPendingCredential"in s&&Ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function A1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hf(t.config,i):`${t.config.apiScheme}://${i}`}class SP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),EP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function _P(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}async function IP(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CP(t,e=!1){const n=$t(t),r=await n.getIdToken(e),i=df(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ns(Uu(i.auth_time)),issuedAtTime:ns(Uu(i.iat)),expirationTime:ns(Uu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Uu(t){return Number(t)*1e3}function df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sv(n);return i?JSON.parse(i):(Zo("Failed to decode base64 JWT payload"),null)}catch(i){return Zo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kP(t){const e=df(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&TP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class NP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class D1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ka(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ls(t,IP(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?AP(s.providerUserInfo):[],a=RP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new D1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function PP(t){const e=$t(t);await Ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function AP(t){return t.map(e=>{var{providerId:n}=e,r=uf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function DP(t,e){const n=await R1(t,{},async()=>{const r=Ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=A1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Os;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
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
 */function on(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=uf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new D1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CP(this,e)}reload(){return PP(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ls(this,_P(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:C,providerData:P,stsTokenManager:A}=n;F(m&&A,e,"internal-error");const x=Os.fromJSON(this.name,A);F(typeof m=="string",e,"internal-error"),on(h,e.name),on(f,e.name),F(typeof E=="boolean",e,"internal-error"),F(typeof C=="boolean",e,"internal-error"),on(y,e.name),on(w,e.name),on(v,e.name),on(I,e.name),on(p,e.name),on(d,e.name);const ee=new sr({uid:m,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:C,photoURL:w,phoneNumber:y,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:d});return P&&Array.isArray(P)&&(ee.providerData=P.map(H=>Object.assign({},H))),I&&(ee._redirectEventId=I),ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new Os;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ka(s),s}}/**
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
 */const Fm=new Map;function Ht(t){tn(t instanceof Function,"Expected a class definition");let e=Fm.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fm.set(t,e),e)}/**
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
 */class x1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}x1.type="NONE";const bm=x1;/**
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
 */function ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ea(this.userKey,i.apiKey,s),this.fullPersistenceKey=ea("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(Ht(bm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ht(bm);const o=ea(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=sr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Wr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Wr(s,e,r))}}/**
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
 */function Um(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F1(e))return"Blackberry";if(b1(e))return"Webos";if(ff(e))return"Safari";if((e.includes("chrome/")||O1(e))&&!e.includes("edge/"))return"Chrome";if($1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L1(t=je()){return/firefox\//i.test(t)}function ff(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function O1(t=je()){return/crios\//i.test(t)}function M1(t=je()){return/iemobile/i.test(t)}function $1(t=je()){return/android/i.test(t)}function F1(t=je()){return/blackberry/i.test(t)}function b1(t=je()){return/webos/i.test(t)}function Ul(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xP(t=je()){var e;return Ul(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LP(){return lI()&&document.documentMode===10}function U1(t=je()){return Ul(t)||$1(t)||b1(t)||F1(t)||/windows phone/i.test(t)||M1(t)}function OP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function V1(t,e=[]){let n;switch(t){case"Browser":n=Um(je());break;case"Worker":n=`${Um(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}async function B1(t,e){return Ei(t,"GET","/v2/recaptchaConfig",oo(t,e))}function Vm(t){return t!==void 0&&t.enterprise!==void 0}class z1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function MP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function j1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MP().appendChild(r)})}function $P(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FP="https://www.google.com/recaptcha/enterprise.js?render=",bP="recaptcha-enterprise";class H1{constructor(e){this.type=bP,this.auth=ao(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{B1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new z1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Vm(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Vm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}j1(FP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Bm(t,e,n,r=!1){const i=new H1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class UP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class VP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new UP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$t(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}async initializeRecaptchaConfig(){const e=await B1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new z1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new H1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ao(t){return $t(t)}class zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=mI(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function BP(t,e){const n=wd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Aa(s,e??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:e})}function zP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jP(t,e,n){const r=ao(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=W1(e),{host:o,port:a}=HP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WP()}function W1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HP(t){const e=W1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jm(o)}}}function jm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class pf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function KP(t,e){return Ei(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Vu(t,e){return bl(t,"POST","/v1/accounts:signInWithPassword",oo(t,e))}/**
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
 */async function qP(t,e){return bl(t,"POST","/v1/accounts:signInWithEmailLink",oo(t,e))}async function GP(t,e){return bl(t,"POST","/v1/accounts:signInWithEmailLink",oo(t,e))}/**
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
 */class Ms extends pf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Bm(e,r,"signInWithPassword");return Vu(e,i)}else return Vu(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Bm(e,r,"signInWithPassword");return Vu(e,s)}else return Promise.reject(i)});case"emailLink":return qP(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return KP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return GP(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kr(t,e){return bl(t,"POST","/v1/accounts:signInWithIdp",oo(t,e))}/**
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
 */const QP="http://localhost";class mr extends pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=uf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:QP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ws(n)}return e}}/**
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
 */function YP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XP(t){const e=Fi(bi(t)).link,n=e?Fi(bi(e)).deep_link_id:null,r=Fi(bi(t)).deep_link_id;return(r?Fi(bi(r)).link:null)||r||n||e||t}class mf{constructor(e){var n,r,i,s,o,a;const l=Fi(bi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=YP((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XP(e);try{return new mf(n)}catch{return null}}}/**
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
 */class Si{constructor(){this.providerId=Si.PROVIDER_ID}static credential(e,n){return Ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mf.parseLink(n);return F(r,"argument-error"),Ms._fromEmailAndCode(e,r.code,r.tenantId)}}Si.PROVIDER_ID="password";Si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class K1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lo extends K1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends lo{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class dn extends lo{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class fn extends lo{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=Hm(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hm(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qa extends rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qa(e,n,r,i)}}function q1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,s,e,r):s})}async function JP(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
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
 */async function ZP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ls(t,q1(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=df(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),s}}/**
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
 */async function G1(t,e,n=!1){const r="signIn",i=await q1(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function eR(t,e){return G1(ao(t),e)}function tR(t,e,n){return eR($t(t),Si.credential(e,n))}function nR(t,e,n,r){return $t(t).onIdTokenChanged(e,n,r)}function rR(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}function iR(t,e,n,r){return $t(t).onAuthStateChanged(e,n,r)}function sR(t){return $t(t).signOut()}const Ga="__sak";/**
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
 */class Q1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ga,"1"),this.storage.removeItem(Ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function oR(){const t=je();return ff(t)||Ul(t)}const aR=1e3,lR=10;class Y1 extends Q1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oR()&&OP(),this.fallbackToPolling=U1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y1.type="LOCAL";const uR=Y1;/**
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
 */class X1 extends Q1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X1.type="SESSION";const J1=X1;/**
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
 */function cR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await cR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vl.receivers=[];/**
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
 */function gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=gf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function dR(t){Lt().location.href=t}/**
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
 */function Z1(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function fR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mR(){return Z1()?self:null}/**
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
 */const ew="firebaseLocalStorageDb",gR=1,Qa="firebaseLocalStorage",tw="fbase_key";class uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bl(t,e){return t.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function yR(){const t=indexedDB.deleteDatabase(ew);return new uo(t).toPromise()}function vh(){const t=indexedDB.open(ew,gR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qa,{keyPath:tw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qa)?e(r):(r.close(),await yR(),e(await vh()))})})}async function Wm(t,e,n){const r=Bl(t,!0).put({[tw]:e,value:n});return new uo(r).toPromise()}async function vR(t,e){const n=Bl(t,!1).get(e),r=await new uo(n).toPromise();return r===void 0?null:r.value}function Km(t,e){const n=Bl(t,!0).delete(e);return new uo(n).toPromise()}const wR=800,ER=3;class nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ER)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vl._getInstance(mR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fR(),!this.activeServiceWorker)return;this.sender=new hR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vh();return await Wm(e,Ga,"1"),await Km(e,Ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Km(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bl(i,!1).getAll();return new uo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nw.type="LOCAL";const SR=nw;new so(3e4,6e4);/**
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
 */function _R(t,e){return e?Ht(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yf extends pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IR(t){return G1(t.auth,new yf(t),t.bypassAuthState)}function CR(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),ZP(n,new yf(t),t.bypassAuthState)}async function kR(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),JP(n,new yf(t),t.bypassAuthState)}/**
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
 */class rw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IR;case"linkViaPopup":case"linkViaRedirect":return kR;case"reauthViaPopup":case"reauthViaRedirect":return CR;default:Ct(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TR=new so(2e3,1e4);class Mr extends rw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,TR.get())};e()}}Mr.currentPopupAction=null;/**
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
 */const NR="pendingRedirect",ta=new Map;class PR extends rw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ta.get(this.auth._key());if(!e){try{const r=await RR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ta.set(this.auth._key(),e)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RR(t,e){const n=xR(e),r=DR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AR(t,e){ta.set(t._key(),e)}function DR(t){return Ht(t._redirectPersistence)}function xR(t){return ea(NR,t.config.apiKey,t.name)}async function LR(t,e,n=!1){const r=ao(t),i=_R(r,e),o=await new PR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const OR=10*60*1e3;class MR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$R(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OR&&this.cachedEventUids.clear(),this.cachedEventUids.has(qm(e))}saveEventToCache(e){this.cachedEventUids.add(qm(e)),this.lastProcessedEventTime=Date.now()}}function qm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $R(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(t);default:return!1}}/**
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
 */async function FR(t,e={}){return Ei(t,"GET","/v1/projects",e)}/**
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
 */const bR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UR=/^https?/;async function VR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FR(t);for(const n of e)try{if(BR(n))return}catch{}Ct(t,"unauthorized-domain")}function BR(t){const e=yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UR.test(n))return!1;if(bR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const zR=new so(3e4,6e4);function Gm(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jR(t){return new Promise((e,n)=>{var r,i,s;function o(){Gm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gm(),n(xt(t,"network-request-failed"))},timeout:zR.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)o();else{const a=$P("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},j1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw na=null,e})}let na=null;function HR(t){return na=na||jR(t),na}/**
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
 */const WR=new so(5e3,15e3),KR="__/auth/iframe",qR="emulator/auth/iframe",GR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YR(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hf(e,qR):`https://${t.config.authDomain}/${KR}`,r={apiKey:e.apiKey,appName:t.name,v:pi},i=QR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ws(r).slice(1)}`}async function XR(t){const e=await HR(t),n=Lt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:YR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Lt().setTimeout(()=>{s(o)},WR.get());function l(){Lt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const JR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZR=500,e2=600,t2="_blank",n2="http://localhost";class Qm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r2(t,e,n,r=ZR,i=e2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},JR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=je().toLowerCase();n&&(a=O1(u)?t2:n),L1(u)&&(e=e||n2,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[y,w])=>`${f}${y}=${w},`,"");if(xP(u)&&a!=="_self")return i2(e||"",a),new Qm(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Qm(h)}function i2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const s2="__/auth/handler",o2="emulator/auth/handler",a2=encodeURIComponent("fac");async function Ym(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:i};if(e instanceof K1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof lo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${a2}=${encodeURIComponent(l)}`:"";return`${l2(t)}?${Ws(a).slice(1)}${u}`}function l2({config:t}){return t.emulator?hf(t,o2):`https://${t.authDomain}/${s2}`}/**
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
 */const Bu="webStorageSupport";class u2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J1,this._completeRedirectFn=LR,this._overrideRedirectResult=AR}async _openPopup(e,n,r,i){var s;tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ym(e,n,r,yh(),i);return r2(e,o,gf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ym(e,n,r,yh(),i);return dR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XR(e),r=new MR(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bu,{type:Bu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bu];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return U1()||ff()||Ul()}}const c2=u2;var Xm="@firebase/auth",Jm="0.23.0";/**
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
 */class h2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function d2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function f2(t){ei(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),F(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V1(t)},u=new VP(r,i,s,l);return zP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ei(new hr("auth-internal",e=>{const n=ao(e.getProvider("auth").getImmediate());return(r=>new h2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Xm,Jm,d2(t)),Rn(Xm,Jm,"esm2017")}/**
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
 */const p2=5*60,m2=Iv("authIdTokenMaxAge")||p2;let Zm=null;const g2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>m2)return;const i=n==null?void 0:n.token;Zm!==i&&(Zm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zl(t=Nv()){const e=wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BP(t,{popupRedirectResolver:c2,persistence:[SR,uR,J1]}),r=Iv("authTokenSyncURL");if(r){const s=g2(r);rR(n,s,()=>s(n.currentUser)),nR(n,o=>s(o))}const i=_v("auth");return i&&jP(n,`http://${i}`),n}f2("Browser");const y2=zl(Mn);new Ut;function v2({setIsRegistering:t}){const[e,n]=T.useState(!1);async function r(s){s.preventDefault();try{const o=s.target.inputMail.value,a=s.target.inputPassword.value;await tR(y2,o,a)}catch{n(!0),setTimeout(()=>{n(!1)},4e3)}}return M("section",{className:"container-login",children:[e?g(q_,{}):null,M("form",{className:"login",onSubmit:r,children:[g("img",{className:"login-img",src:"login.svg",alt:""}),g("h1",{className:"login-title",children:"Inicia Sesión"}),g("label",{className:"login-label",htmlFor:"inputMail",children:"Correo electrónico"}),g("input",{id:"inputMail",className:"login-inputMail",type:"text",placeholder:"Ingresa tu correo"}),g("label",{className:"login-label",htmlFor:"inputPassword",children:"Contraseña"}),g("input",{id:"inputPassword",className:"login-inputPass",type:"password",autoComplete:"new-password",placeholder:"Ingresa tu contraseña"}),g("button",{className:"login-buttonLogin",type:"submit",children:"Entrar"}),M("label",{className:"login-labelBGR",htmlFor:"lbgr",children:["¿No tienes una cuenta? ",g("button",{onClick:s=>{s.preventDefault(),t(!0)},className:"login-buttonGoRegister",id:"lbgr",children:"Registrate"})]})]})]})}function wh(){return M("svg",{xmlns:"http://www.w3.org/2000/svg",className:"signUpForm-labelSVG",viewBox:"0 0 512 512",children:[g("title",{children:"Text"}),g("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M32 415.5l120-320 120 320M230 303.5H74M326 239.5c12.19-28.69 41-48 74-48h0c46 0 80 32 80 80v144"}),g("path",{d:"M320 358.5c0 36 26.86 58 60 58 54 0 100-27 100-106v-15c-20 0-58 1-92 5-32.77 3.86-68 19-68 58z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"})]})}function sw(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"signUpForm-labelSVG",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"})})}function w2(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"signUpForm-labelSVG",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"})})}function ow(){return M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"btn-showPass-svg",children:[g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}function aw(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"btn-hidePass-svg hidden",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})})}function lw(){return M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"btn-showPassConfirm-svg",children:[g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}function uw(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"btn-hidePassConfirm-svg hidden",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})})}class cw{constructor(){Kl(this,"root",document.documentElement.style)}_inputNameFocusIn(){this.root.setProperty("--borderFieldName","#3b59d4")}_inputNameBlur(){this.root.setProperty("--borderFieldName","#c5c5c5")}_inputNameKeyUp(){const e=document.querySelector(".signUpForm-name"),n=document.querySelector(".signUpForm-name-p");for(let r=0;r<e.value.length;r++)this.root.setProperty("--borderFieldName","#3b59d4"),e.value[r].match(/^[0-9]+$/)||e.value[r].match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/)?(n.textContent="Recuerda, solo caracteres de tipo texto",this.root.setProperty("--borderFieldName","#f63737")):n.textContent="";e.value===""&&(n.textContent="",this.root.setProperty("--borderFieldName","#3b59d4"))}_reviewInputName(){const e=document.querySelector(".signUpForm-name"),n=document.querySelector(".signUpForm-name-p");if(e.value==="")this.root.setProperty("--borderFieldName","#f63737"),n.textContent="El campo es obligatorio";else if(e.value.match(/[0-9]/)||e.value.match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/))this.root.setProperty("--borderFieldName","#f63737"),n.textContent="Solo caracteres tipo texto";else return!0}_inputMailFocusIn(){this.root.setProperty("--borderFieldID","#3b59d4")}_inputMailBlur(){this.root.setProperty("--borderFieldID","#c5c5c5")}_inputMailFormat(){}_reviewInputMail(){const e=document.querySelector(".signUpForm-mail"),n=document.querySelector(".signUpForm-mail-p");if(e.value==="")this.root.setProperty("--borderFieldID","#f63737"),n.textContent="El campo es obligatorio";else return!0}_inputNumberFocusIn(){this.root.setProperty("--borderFieldNumber","#3b59d4")}_inputNumberBlur(){this.root.setProperty("--borderFieldNumber","#c5c5c5")}_inputNumberKeyUp(){const e=document.querySelector(".signUpForm-number"),n=document.querySelector(".signUpForm-number-p");for(let r=0;r<e.value.length;r++)this.root.setProperty("--borderFieldNumber","#3b59d4"),e.value[r].match(/[a-zA-Z]/)||e.value[r].match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/)?(this.root.setProperty("--borderFieldNumber","#f63737"),n.textContent="Recuerda, caracteres de tipo númerico"):n.textContent="";e.value===""&&(this.root.setProperty("--borderFieldNumber","#3b59d4"),n.textContent="")}_reviewInputNumber(){const e=document.querySelector(".signUpForm-number"),n=document.querySelector(".signUpForm-number-p");if(e.value==="")this.root.setProperty("--borderFieldNumber","#f63737"),n.textContent="El campo es obligatorio";else if(e.value.match(/[a-zA-Z]/)||e.value.match(/[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/))this.root.setProperty("--borderFieldNumber","#f63737"),n.textContent="Solo caracteres de tipo númerico";else return!0}_inputIDCarFocusIn(){this.root.setProperty("--borderFieldIDCar","#3b59d4")}_inputIDCarBlur(){this.root.setProperty("--borderFieldIDCar","#c5c5c5")}_inputModelCarFocusIn(){this.root.setProperty("--borderFieldModel","#3b59d4")}_inputModelCarBlur(){this.root.setProperty("--borderFieldModel","#c5c5c5")}_inputPassFocusIn(){this.root.setProperty("--borderFieldPass","#3b59d4")}_inputPassBlur(){this.root.setProperty("--borderFieldPass","#c5c5c5")}_reviewInputPass(){const e=document.querySelector(".signUpForm-pass"),n=document.querySelector(".signUpForm-password-p");if(e.value==="")this.root.setProperty("--borderFieldPass","#f63737"),n.textContent="El campo es obligatorio";else if(e.value.length<=5)this.root.setProperty("--borderFieldPass","#f63737"),n.textContent="Al menos 6 caracteres";else return n.textContent="",!0}_showPassRegister(){const e=document.querySelector(".signUpForm-pass"),n=document.querySelector(".btn-hidePass-svg"),r=document.querySelector(".btn-showPass-svg");e.type=="password"?(e.type="text",n.classList.remove("hidden"),r.classList.add("hidden")):(e.type="password",r.classList.remove("hidden"),n.classList.add("hidden"))}_inputConfirmPassFocusIn(){this.root.setProperty("--borderFieldPassConfirm","#3b59d4")}_inputConfirmPassBlur(){this.root.setProperty("--borderFieldPassConfirm","#c5c5c5")}_inputConfirmPassKeyUp(){const e=document.querySelector(".signUpForm-pass"),n=document.querySelector(".signUpForm-passConfirm"),r=document.querySelector(".signUpForm-passConfirm-p");n.value===e.value?(this.root.setProperty("--borderFieldPassConfirm","#3b59d4"),r.textContent="",r.style.color="#3b59d4",r.textContent="¡Coinciden!"):(this.root.setProperty("--borderFieldPassConfirm","#f63737"),r.style.color="#f63737",r.textContent="No coinciden")}_reviewInputConfirmPassword(){const e=document.querySelector(".signUpForm-pass"),n=document.querySelector(".signUpForm-passConfirm"),r=document.querySelector(".signUpForm-passConfirm-p");if(e.value!==n.value)this.root.setProperty("--borderFieldPassConfirm","#f63737"),r.style.color="#f63737",r.textContent="Las contraseñas no coinciden";else return!0}_showConfirmRegister(){const e=document.querySelector(".signUpForm-passConfirm"),n=document.querySelector(".btn-showPassConfirm-svg"),r=document.querySelector(".btn-hidePassConfirm-svg");e.type==="password"?(e.type="text",r.classList.remove("hidden"),n.classList.add("hidden")):(e.type="password",n.classList.remove("hidden"),r.classList.add("hidden"))}_print(){if(this._reviewInputName(),this._reviewInputPass(),this._reviewInputNumber(),this._reviewInputConfirmPassword(),this._reviewInputName()&&this._reviewInputNumber()&&this._reviewInputConfirmPassword()&&this._reviewInputPass())return!0}}function E2({setIsRegistering:t}){const e=new cw;zl(Mn),Fl(Mn);function n(){const i=document.querySelector(":root");i.style.setProperty("--borderFieldName","#c5c5c5"),i.style.setProperty("--borderFieldID","#c5c5c5"),i.style.setProperty("--borderFieldPassConfirm","#c5c5c5")}function r(){n(),t(!1)}return g("section",{className:"container-signUp",children:M("form",{className:"signUpForm",children:[M("h1",{className:"signUpForm-title",children:["Crea una cuenta ",g("span",{className:"gradient",children:"gratis"})]}),M("label",{className:"signUpForm-label",htmlFor:"sufn",children:["Nombre",g(wh,{})]}),g("input",{id:"sufn",className:"signUpForm-name",placeholder:"Ingresa tu nombre y apellidos",autoComplete:"new-password",onFocus:()=>e._inputNameFocusIn(),onBlur:()=>e._inputNameBlur(),onKeyUp:()=>e._inputNameKeyUp()}),g("p",{className:"signUpForm-name-p",children:" "}),M("label",{className:"signUpForm-label",htmlFor:"inputMail",children:["Correo electrónico",g(sw,{})]}),g("input",{id:"inputMail",className:"signUpForm-mail",placeholder:"usuario@dominio.com",autoComplete:"new-password",onFocus:()=>e._inputMailFocusIn(),onBlur:()=>e._inputMailBlur()}),g("p",{className:"signUpForm-mail-p"}),g("label",{className:"signUpForm-label",htmlFor:"inputPassword",children:"Contraseña"}),M("section",{className:"wrapper-password",children:[g("input",{id:"inputPassword",className:"signUpForm-pass",type:"password",autoComplete:"new-password",placeholder:"Crea una contraseña",onBlur:()=>e._inputPassBlur(),onFocus:()=>e._inputPassFocusIn()}),M("button",{onClick:()=>e._showPassRegister(),className:"btn-showPass",type:"button",title:"button show",children:[g(ow,{}),g(aw,{})]})]}),M("section",{className:"wrapper-textAdvicePass",children:[g("p",{className:"signUpForm-pass-p",children:"Una contraseña segura"}),M("ul",{className:"signUpForm-pass-ul",children:[g("li",{children:"Tiene al menos 8 caracteres"}),g("li",{children:"Combinación de letras, números, etc."})]})]}),g("label",{className:"signUpForm-label",htmlFor:"sufcp",children:"Confirmar contraseña"}),M("div",{className:"wrapper-password",children:[g("input",{id:"sufcp",className:"signUpForm-passConfirm",type:"password",autoComplete:"new-password",placeholder:"Repite la contraseña",onKeyUp:()=>e._inputConfirmPassKeyUp(),onFocus:()=>e._inputConfirmPassFocusIn(),onBlur:()=>e._inputConfirmPassBlur()}),M("button",{onClick:()=>e._showConfirmRegister(),className:"btn-showPassConfirm",type:"button",title:"button show",children:[g(lw,{}),g(uw,{})]})]}),g("p",{className:"signUpForm-passConfirm-p"}),g("button",{type:"button",onClick:()=>{e._print()&&console.log("Yes")},className:"signUpForm-btnRegister",name:"button to Register",children:"Registrarme Ahora"}),M("label",{className:"signUpForm-labelGoSignIn",htmlFor:"sufbsi",children:["¿Ya tienes una cuenta?",g("button",{id:"sufbsi",className:"signUpForm-btnGoSignIn",onClick:r,children:" Inicia Sesión"})]})]})})}function S2(){const[t,e]=T.useState(!1);return t?g(E2,{setIsRegistering:e}):g(v2,{setIsRegistering:e})}function _2(){return M("nav",{className:"navBar-desktop",children:[g("img",{src:"logo.png",alt:"",height:34,style:{marginLeft:10}}),M("section",{className:"NVD-wrapperButtons",children:[g(Kt,{className:"NVD-btn-dashboard",to:"/sigma/",children:"Inicio"}),g(Kt,{className:"NVD-btn-garages",to:"/sigma/garages",children:"Talleres"}),g(Kt,{className:"NVD-btn-account",to:"/sigma/profile",children:"Cuenta"})]})]})}const I2=()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"NVM-btnIcon",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"})}),C2=()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"NVM-btnIcon",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"})}),k2=()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"NVM-btnIcon",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})});function T2(){return M("nav",{className:"navBar-mobile",children:[M(Kt,{className:"NVM-btn",to:"/sigma/",children:[g(I2,{}),"Inicio"]}),M(Kt,{className:"NVM-btn",to:"/sigma/garages",children:[g(C2,{}),"Talleres"]}),M(Kt,{className:"NVM-btn",to:"/sigma/profile",children:[g(k2,{}),"Cuenta"]})]})}function N2(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"btn-darkIcon",children:g("path",{fillRule:"evenodd",d:"M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z",clipRule:"evenodd"})})}function P2(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"btn-lightIcon",children:g("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"})})}class hw{constructor(){Kl(this,"root",document.documentElement.style)}_makeLight(){const e=document.querySelector(".btn-Dark");document.querySelector(".btn-Light").classList.add("hidden"),e.classList.remove("hidden"),this.root.setProperty("--bg","#f2f2f7"),this.root.setProperty("--ff","#fff"),this.root.setProperty("--black18","#181818"),this.root.setProperty("--bg-garage","#fff"),this.root.setProperty("--bg-finder","#fff"),this.root.setProperty("--border-dashboardCard","#c8c8c8"),this.root.setProperty("--border-garage","#c8c8c8"),this.root.setProperty("--bg-blur-navBar","rgba(255, 255, 255, 0.4)"),this.root.setProperty("--shadow-finder","0px 20px 18px -18px rgba(0, 0, 0, 0.12)")}_makeDark(){const e=document.querySelector(".btn-Dark"),n=document.querySelector(".btn-Light");e.classList.add("hidden"),n.classList.remove("hidden"),this.root.setProperty("--bg","#181818"),this.root.setProperty("--ff","#12171a"),this.root.setProperty("--black18","#fff"),this.root.setProperty("--bg-garage","#2a2a2a"),this.root.setProperty("--bg-finder","#2c2c2c"),this.root.setProperty("--border-dashboardCard","#272727"),this.root.setProperty("--border-garage","transparent"),this.root.setProperty("--bg-blur-navBar","rgba(0, 0, 0, 0.4)"),this.root.setProperty("--shadow-finder","transparent")}}function R2(){const t=new hw;return M(lg,{children:[g("button",{type:"button",className:"btn-Dark",onClick:()=>t._makeDark(),children:g(N2,{})}),g("button",{type:"button",className:"btn-Light hidden",onClick:()=>t._makeLight(),children:g(P2,{})})]})}const A2=[{name:"Verificacion",description:"Es necesario llevar a cabo una verificación vehicular para asegurarse de que el automovil cumple con los estándares ambientales y de seguridad. Este proceso generalmente implica llevar el vehículo a un centro de verificación y someterlo a pruebas de emisiones y de calidad"},{name:"Tenencia",description:"La tenencia es un impuesto anual que se paga por tener un vehículo. El monto del impuesto varía según el modelo y la antigüedad del coche. Se debe pagar la tenencia del vehículo cada año para mantenerlo legalmente registrado y en buen estado"},{name:"Mantenimiento",description:"Debes llevar a cabo un mantenimiento regular. Esto incluye cambiar el aceite, revisar el sistema de frenos y de suspensión, verificar el nivel de líquidos y cambiar las llantas de acuerdo con las recomendaciones del fabricante"},{name:"Seguro",description:"Es importante tener un seguro de auto para protegerte en caso de accidentes o robos. Debes elegir un seguro que se adapte a tus necesidades y presupuesto, y asegurarte de renovarlo para mantener tu cobertura"},{name:"Renovación de la licencia",description:"La licencia de conducir es una identificación legal que te permite operar un vehículo. Debes renovarla periódicamente. Esto puede implicar tomar un examen de manejo y cumplir con otros requisitos, como presentar un examen médico"}];function D2({userMail:t}){const e=Fl(Mn),[n,r]=T.useState(null);function i(s){return s.trim().split(" ")[0]}return T.useEffect(()=>{(async function(){const o=ZN(e,`users/${t}`),a=await uP(o);if(a.exists()){const u=a.data().data[0].name,c=i(u);r(c)}})()},[]),M("section",{className:"container-dashboard",children:[g("header",{className:"dashboard-header",children:g("h1",{children:M("span",{className:"gradient",children:["Hola ",n]})})}),g("main",{className:"dashboard-main",children:A2.map((s,o)=>M("div",{className:"dashboard-card",children:[g("h4",{className:"dashboard-card-title",children:s.name}),g("p",{className:"dashboard-card-description",children:s.description})]},o))})]})}function x2(){return g("section",{className:"container-formPost",children:M("form",{className:"formPost",children:[g("h3",{className:"formPost-title",children:"Crear publicación"}),g("label",{className:"formPost-label",htmlFor:"",children:"Nombre del vehiculo"}),g("input",{className:"formPost-input",type:"text",placeholder:"Ingresa el nombre de tu vehiculo"})]})})}function L2(){const t=zl(Mn),e=new hw;return M("section",{className:"container-profile",children:[g(Kt,{to:"/sigma/profile/formUpdateData",className:"profile-btn",children:"Editar mis datos"}),g(Kt,{to:"/sigma/profile/formPost",className:"profile-btn",children:"Vender mi automóvil"}),g(Kt,{to:"/sigma/",className:"profile-btn profile-btnRed",onClick:()=>{e._makeLight(),sR(t)},children:"Cerrar Sesión"}),g("button",{className:"profile-btn profile-btnRed",children:"Borrar mi cuenta"})]})}const zu=[{name:"Don Ale Tultitlan",features:["Cambio de aceite","Tramites de verificación","Pago de tenencia","Cambio de amortuguadores","Ajuste de frenos"],price:"$120",latitude:19.6222333,longitude:-99.2347213},{name:"MONSA Ecatepec",features:["Cambio de aceite","Tramites de verificación","Pago de tenencia","Cambio de amortuguadores","Ajuste de frenos"],price:"$99",latitude:19.6240463,longitude:-99.0763317},{name:"ROCRAM Tultitlan",features:["Documentación","Cambio de aceite","Baja de placas","Alineacion de dirección","Afinación de motor"],price:"$60",latitude:19.61668,longitude:-99.1706242},{name:"CasaCarro Coacalco",features:["Papeleo","Ajuste de frenos","Baja de placas","Alineacion de dirección","Afinación de motor"],price:"$79",latitude:19.6351237,longitude:-99.0848751}];function O2(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"finder-svg-search",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}function M2(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",className:"finder-svg-close",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12",className:"path"})})}function $2({lookFor:t,setIsSearching:e}){return g("section",{className:"section-finder",children:M("form",{className:"container-finder",children:[g(O2,{}),g("input",{onChangeCapture:t,className:"input",placeholder:"Buscar talleres",type:"text",autoComplete:"off"}),M("button",{onClick:()=>e(!1),className:"finder-btnClose",type:"reset",children:[" ",g(M2,{})," "]})]})})}function F2(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"garage-svg",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"})})}function b2(){const t=yv(),[e,n]=T.useState(zu),[r,i]=T.useState(!1);function s(o){i(!0),n(zu.filter(a=>a.name.toLowerCase().includes(o.target.value.toLowerCase())))}return M("section",{className:"container-garages",children:[g($2,{lookFor:s,setIsSearching:i}),g("h1",{className:"garages-title",children:g("span",{className:"highlight-container",children:g("span",{className:"highlight",children:"Talleres"})})}),g("main",{className:"garages",children:(r?e:zu).map(function(o,a){return M("div",{className:"garage",children:[M("div",{className:"garage-header",children:[g(F2,{}),g("h2",{className:"garage-h2",children:o.name})]}),g("button",{className:"garage-button",onClick:()=>t("/sigma/garages/specific",{state:o}),children:"Ver detalles"})]},a)})})]})}function U2(){const e=js().state;function n(){const r=[e.latitude,e.longitude],i=L.map("map").setView(r,10);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(i),L.marker(r).addTo(i).bindPopup(`Taller: ${e.name}`).openPopup()}return T.useEffect(()=>n(),[]),M("section",{className:"container-garageInfoCard",children:[g("h1",{className:"garageInfoCard-h1",children:g("span",{className:"highlight-container",children:g("span",{className:"highlight",children:e.name})})}),g("p",{className:"garageInfoCard-p",children:"Este taller ofrece los siguientes servicios"}),M("section",{className:"wrapper-garageInfoCard",children:[g("div",{className:"garageInfoCard-features",children:e.features.map((r,i)=>M("p",{className:"garageInfoCard-feature",children:["◉ ",r]},i))}),g("main",{className:"mapy",id:"map"})]})]})}function V2(){return M("main",{className:"containerMessage-dataUpdated",children:[g(B2,{}),g("p",{children:"Datos actualizados correctamente"})]})}function B2(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"dataUpdated-svg",children:g("path",{fillRule:"evenodd",d:"M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})}function z2({userMail:t}){const[e,n]=T.useState(!1),r=new cw;return Fl(Mn),M("section",{className:"container-signUp",children:[e?g(V2,{}):null,M("form",{className:"signUpForm",children:[M("h1",{className:"signUpForm-title",children:["Actualiza tus ",g("span",{className:"gradient",children:"datos"})]}),M("label",{className:"signUpForm-label",htmlFor:"sufn",children:["Nombre",g(wh,{})]}),g("input",{id:"sufn",className:"signUpForm-name",placeholder:"Ej. Sanchez Cabrera Ignacio",autoComplete:"new-password",onFocus:()=>r._inputNameFocusIn(),onBlur:()=>r._inputNameBlur(),onKeyUp:()=>r._inputNameKeyUp()}),g("p",{className:"signUpForm-name-p",children:" "}),M("label",{className:"signUpForm-label",htmlFor:"inputMail",children:["Número celular",g(w2,{})]}),g("input",{id:"inputPhoneNumber",className:"signUpForm-number",placeholder:"5540678934",autoComplete:"new-password",onFocus:()=>r._inputNumberFocusIn(),onBlur:()=>r._inputNumberBlur(),onKeyUp:()=>r._inputNumberKeyUp()}),g("p",{className:"signUpForm-number-p",children:" "}),M("label",{className:"signUpForm-label",htmlFor:"inputIDCar",children:["Placa vehicular",g(sw,{})]}),g("input",{id:"inputIDCar",className:"signUpForm-IDCar",placeholder:"EDC-3456",autoComplete:"new-password",onFocus:()=>r._inputIDCarFocusIn(),onBlur:()=>r._inputIDCarBlur()}),g("p",{className:"signUpForm-mail-p",children:" "}),M("label",{className:"signUpForm-label",htmlFor:"inputModelCar",children:["Modelo del vehiculo",g(wh,{})]}),g("input",{id:"inputModelCar",className:"signUpForm-modelCar",placeholder:"Chevrolet Aveo 2018",autoComplete:"new-password",onFocus:()=>r._inputModelCarFocusIn(),onBlur:()=>r._inputModelCarBlur()}),g("p",{className:"signUpForm-mail-p",children:" "}),g("label",{className:"signUpForm-label",htmlFor:"inputPassword",children:"Nueva contraseña"}),M("section",{className:"wrapper-password",children:[g("input",{id:"inputPassword",className:"signUpForm-pass",type:"password",autoComplete:"new-password",placeholder:"Ingresa una contraseña",onBlur:()=>r._inputPassBlur(),onFocus:()=>r._inputPassFocusIn()}),M("button",{onClick:()=>r._showPassRegister(),className:"btn-showPass",type:"button",title:"button show",children:[g(ow,{}),g(aw,{})]})]}),g("p",{className:"signUpForm-password-p"}),M("section",{className:"wrapper-textAdvicePass",children:[g("p",{className:"signUpForm-pass-p",children:"Una contraseña segura"}),M("ul",{className:"signUpForm-pass-ul",children:[g("li",{children:"Tiene al menos 8 caracteres"}),g("li",{children:"Combinación de letras, números, etc."})]})]}),g("label",{className:"signUpForm-label",htmlFor:"sufcp",children:"Confirmar nueva contraseña"}),M("div",{className:"wrapper-password",children:[g("input",{id:"sufcp",className:"signUpForm-passConfirm",type:"password",autoComplete:"new-password",placeholder:"Repite la contraseña",onKeyUp:()=>r._inputConfirmPassKeyUp(),onFocus:()=>r._inputConfirmPassFocusIn(),onBlur:()=>r._inputConfirmPassBlur()}),M("button",{onClick:()=>r._showConfirmRegister(),className:"btn-showPassConfirm",type:"button",title:"button show",children:[g(lw,{}),g(uw,{})]})]}),g("p",{className:"signUpForm-passConfirm-p"}),g("button",{onClick:()=>{r._print()&&console.log("Yess")},type:"button",className:"signUpForm-btnRegister",name:"button to Register",children:"Actualizar Datos"})]})]})}function j2({userMail:t}){return T.useEffect(()=>{let e=window.matchMedia("(max-width: 450px)");const n=document.querySelector(".navBar-desktop"),r=document.querySelector(".navBar-mobile");function i(s){s.matches?(n.classList.add("hidden"),r.classList.remove("hidden")):(n.classList.remove("hidden"),r.classList.add("hidden"))}i(e),e.addListener(i)},[]),M("main",{className:"page-home",children:[g(_2,{}),g(T2,{}),M(F_,{children:[g(Wn,{path:"/sigma//*",element:g(D2,{userMail:t})}),g(Wn,{path:"/sigma/garages",element:g(b2,{})}),g(Wn,{path:"/sigma/garages/specific",element:g(U2,{})}),g(Wn,{path:"/sigma/profile",element:g(L2,{})}),g(Wn,{path:"/sigma/profile/formUpdateData",element:g(z2,{userMail:t})}),g(Wn,{path:"/sigma/profile/formPost",element:g(x2,{})})]}),g(R2,{})]})}const H2=zl(Mn);function W2(){const[t,e]=T.useState(null);return iR(H2,n=>{e(n||null)}),g(lg,{children:t?g(j2,{userMail:t.email}):g(S2,{})})}const K2=uv(document.getElementById("app"));K2.render(g(z_,{children:g(W2,{})}));
