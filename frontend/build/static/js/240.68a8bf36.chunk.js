/*! For license information please see 240.68a8bf36.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgpace_main_v4=self.webpackChunkgpace_main_v4||[]).push([[240],{74453:function(t,e,n){var r=n(1413),i=n(45987),o=(n(72791),n(36151)),a=n(80184),c=["text"];e.Z=function(t){var e=t.text,n=(0,i.Z)(t,c);return(0,a.jsx)(o.Z,(0,r.Z)((0,r.Z)({fullWidth:!0,disableElevation:!0,size:"large",variant:"contained",color:"primary"},n),{},{children:e}))}},70697:function(t,e,n){var r=n(1413),i=n(45987),o=(n(72791),n(9120)),a=n(80184),c=["name","label","value","onChange","type"];e.Z=function(t){var e=t.name,n=t.label,s=t.value,l=t.onChange,u=t.type,h=(0,i.Z)(t,c);return(0,a.jsx)(o.Z,(0,r.Z)({sx:{"& .MuiInputBase-root":{height:29,Width:100}},fullWidth:!0,variant:"outlined",InputLabelProps:{shrink:!0},label:n,value:s,onChange:l,name:e,type:u},h))}},22240:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});var r=n(72791),i=n(4942),o=n(1413),a=n(29439),c=n(61044),s=n(57689),l=n(13967),u=n(64554),h=n(91614),d=n(74165),f=n(15861),p=n(61889),v=n(20890),x=n(50533),m=n(67414),g=n(70697),y=n(74453),w=n(80184),Z=function(t){var e=t.value,n=t.handleChange,r=function(){var n=(0,f.Z)((0,d.Z)().mark((function n(r){var i,o;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.post("/send-otp",{email:"".concat(e.email)});case 2:i=n.sent,o=i.data,console.log(o),t.nextStep();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(u.Z,{marginBottom:4,children:[(0,w.jsx)(v.Z,{variant:"h4",sx:{fontWeight:700},children:"Welcome back"}),(0,w.jsx)(v.Z,{color:"text.secondary",children:"Login to manage your account."})]}),(0,w.jsxs)(p.ZP,{container:!0,spacing:3,children:[(0,w.jsx)(p.ZP,{item:!0,xs:12,children:(0,w.jsx)(m.Z,{spacing:1,children:(0,w.jsx)(g.Z,{label:"Email",id:"email",type:"email",name:"email",value:e.email,onChange:n("email")})})}),(0,w.jsxs)(p.ZP,{item:!0,xs:12,children:[(0,w.jsx)(y.Z,{type:"button",text:"Login to HRI+ Portal",onClick:r}),(0,w.jsx)(u.Z,{marginBottom:{xs:1,sm:0},children:(0,w.jsxs)(v.Z,{sx:{textAlign:"center",mt:1,mb:1},variant:"subtitle2",children:["Don't have an account yet?"," ",(0,w.jsx)(x.Z,{component:"a",color:"primary",href:"/",underline:"none",children:"Sign up here."})]})})]})]})]})},j=n(36151),b=n(47258),L=function(t){var e=(0,r.useContext)(b.S),n=(0,a.Z)(e,2),i=(n[0],n[1]),o=t.value,l=t.handleChange,x=(0,s.s0)(),m=function(){var t=(0,f.Z)((0,d.Z)().mark((function t(){var e,n;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.ZP.post("/verify-email",{email:"".concat(o.email),otp:"".concat(o.otp)});case 3:e=t.sent,n=e.data,console.log(n),i(n),localStorage.setItem("auth",JSON.stringify(n)),x("/my-id-card"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return(0,w.jsx)(u.Z,{sx:{width:1,height:1,overflow:"hidden"},children:(0,w.jsx)(h.Z,{paddingx:0,paddingy:0,children:(0,w.jsx)(u.Z,{display:"flex",flexDirection:{xs:"column",md:"row"},position:"relative",children:(0,w.jsx)(u.Z,{width:1,order:{xs:2,md:1},display:"flex",alignItems:"center",children:(0,w.jsxs)(h.Z,{children:[(0,w.jsx)(p.ZP,{sx:{textAlign:"center"},container:!0,children:(0,w.jsx)(p.ZP,{item:!0,xs:12,children:(0,w.jsx)(v.Z,{variant:"h4",children:"OTP verification"})})}),(0,w.jsx)(p.ZP,{sx:{textAlign:"center"},container:!0,children:(0,w.jsx)(p.ZP,{item:!0,xs:12,children:(0,w.jsx)(v.Z,{variant:"p",children:"A verification code has been sent to your email"})})}),(0,w.jsx)(p.ZP,{sx:{mt:2},container:!0,spacing:2,children:(0,w.jsx)(p.ZP,{item:!0,xs:12,children:(0,w.jsx)(g.Z,{inputProps:{inputMode:"numeric",pattern:"[0-9]*"},label:"OPT Verification",id:"otp",name:"otp",type:"text",value:o.otp,onChange:l("otp")})})}),(0,w.jsx)(p.ZP,{sx:{textAlign:"center",mt:3},container:!0,children:(0,w.jsx)(p.ZP,{item:!0,xs:12,children:(0,w.jsx)(j.Z,{fullWidth:!0,variant:"contained",onClick:m,children:"Verify OTP"})})})]})})})})})},P=(n(65218),n(55705),function(){(0,s.s0)();var t=(0,r.useState)(0),e=(0,a.Z)(t,2),c=e[0],d=e[1],f=n(12969),p=(0,l.Z)(),v=(0,r.useState)({email:"",otp:""}),x=(0,a.Z)(v,2),m=x[0],g=x[1],y=function(t){return function(e){g((0,o.Z)((0,o.Z)({},m),{},(0,i.Z)({},t,e.target.value)))}},j=function(){d((function(t){return t+1}))},b=function(){d((function(t){return t-1}))},P={email:m.email,otp:m.otp};return(0,w.jsx)(u.Z,{sx:{width:1,height:1,overflow:"hidden"},children:(0,w.jsx)(h.Z,{paddingx:0,paddingy:0,children:(0,w.jsxs)(u.Z,{display:"flex",flexDirection:{xs:"column",md:"row"},position:"relative",children:[(0,w.jsx)(u.Z,{width:1,order:{xs:2,md:1},display:"flex",alignItems:"center",children:(0,w.jsx)(h.Z,{children:function(){switch(c){case 0:return(0,w.jsx)(Z,{nextStep:j,handleChange:y,value:P});case 1:return(0,w.jsx)(L,{nextStep:j,prevStep:b,handleChange:y,value:P});default:throw new Error("Unknown step")}}()})}),(0,w.jsx)(u.Z,{sx:{flex:{xs:"0 0 100%",md:"0 0 50%"},position:"relative",maxWidth:{xs:"100%",md:"50%"},order:{xs:1,md:2},minHeight:{xs:"auto",md:"calc(100vh - 58px)"}},children:(0,w.jsx)(u.Z,{sx:{width:{xs:1,md:"50vw"},height:"100%",position:"relative"},children:(0,w.jsx)(u.Z,{sx:{width:"100%",height:"100%",overflow:"hidden"},children:(0,w.jsx)(u.Z,{sx:{overflow:"hidden",left:"0%",width:1,height:1,position:{xs:"relative",md:"absolute"},clipPath:{xs:"none",md:"polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)"},shapeOutside:{xs:"none",md:"polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)"}},children:(0,w.jsx)(u.Z,{sx:{height:{xs:"auto",md:1},"& img":{objectFit:"cover"}},children:(0,w.jsx)(u.Z,{component:"img",src:f,height:{xs:"auto",md:1},maxHeight:{xs:300,md:1},width:1,maxWidth:1,sx:{filter:"dark"===p.palette.mode?"brightness(0.7)":"none"}})})})})})})]})})})}),E=function(){return(0,w.jsx)(h.Z,{sx:{mt:10},children:(0,w.jsx)(P,{})})}},12969:function(t,e,n){t.exports=n.p+"static/media/login-image.7007a3d608710b49766f.jpeg"},15861:function(t,e,n){function r(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return i}})},74165:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(71002);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new k(r||[]);return o(a,"_invoke",{value:b(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=h;var f={};function p(){}function v(){}function x(){}var m={};u(m,c,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(O([])));y&&y!==e&&n.call(y,c)&&(m=y);var w=x.prototype=p.prototype=Object.create(m);function Z(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function i(o,a,c,s){var l=d(t[o],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==(0,r.Z)(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,c,s)}),(function(t){i("throw",t,c,s)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return i("throw",t,c,s)}))}s(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function b(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return _()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=d(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var i=d(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,f;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=x,o(w,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:v,configurable:!0}),v.displayName=u(x,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},Z(j.prototype),u(j.prototype,s,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new j(h(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(w),u(w,l,"Generator"),u(w,c,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}}}]);
//# sourceMappingURL=240.68a8bf36.chunk.js.map