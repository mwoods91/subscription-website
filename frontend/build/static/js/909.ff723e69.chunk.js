"use strict";(self.webpackChunkgpace_main_v4=self.webpackChunkgpace_main_v4||[]).push([[909],{74453:function(e,n,t){var i=t(1413),r=t(45987),a=(t(72791),t(36151)),o=t(80184),s=["text"];n.Z=function(e){var n=e.text,t=(0,r.Z)(e,s);return(0,o.jsx)(a.Z,(0,i.Z)((0,i.Z)({fullWidth:!0,disableElevation:!0,size:"large",variant:"contained",color:"primary"},t),{},{children:n}))}},70697:function(e,n,t){var i=t(1413),r=t(45987),a=(t(72791),t(9120)),o=t(80184),s=["name","label","value","onChange","type"];n.Z=function(e){var n=e.name,t=e.label,l=e.value,d=e.onChange,c=e.type,h=(0,r.Z)(e,s);return(0,o.jsx)(a.Z,(0,i.Z)({sx:{"& .MuiInputBase-root":{height:29,Width:100}},fullWidth:!0,variant:"outlined",InputLabelProps:{shrink:!0},label:t,value:l,onChange:d,name:n,type:c},h))}},45909:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var i=t(72791),r=t(13967),a=t(64554),o=t(91614),s=t(29439),l=t(55705),d=t(57689),c=t(61889),h=t(24215),p=t(98272),u=t(20890),x=t(50533),m=t(67414),v=t(63466),g=t(70697),Z=t(74453),f=t(80184),j=function(){var e=(0,i.useState)(!1),n=(0,s.Z)(e,2),t=n[0],r=n[1],o=(0,i.useState)(!1),j=(0,s.Z)(o,2),b=j[0],w=j[1],y=(0,d.s0)(),P=(0,l.TA)({validateOnBlur:!1,validateOnChange:!1,initialValues:{phone:"",password:""},validate:function(e){var n={};return""===e.phone.trim()&&(n.phone="Require Password"),""===e.password.trim()&&(n.password="Require Password"),n},onSubmit:function(e){console.log(e),y("/my-id-card")}});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(a.Z,{marginBottom:4,children:[(0,f.jsx)(u.Z,{variant:"h4",sx:{fontWeight:700},children:"Welcome back"}),(0,f.jsx)(u.Z,{color:"text.secondary",children:"Login to manage your account."})]}),(0,f.jsx)("form",{validate:P.validate,onSubmit:P.handleSubmit,children:(0,f.jsxs)(c.ZP,{container:!0,spacing:3,children:[(0,f.jsx)(c.ZP,{item:!0,xs:12,children:(0,f.jsx)(m.Z,{spacing:1,children:(0,f.jsx)(g.Z,{label:"Mobile Number",id:"phone",type:"phone",name:"phone",onChange:P.handleChange,value:P.values.phone,error:Boolean(P.errors.phone),helperText:P.errors.phone})})}),(0,f.jsx)(c.ZP,{item:!0,xs:12,children:(0,f.jsxs)(m.Z,{spacing:1,children:[(0,f.jsx)(g.Z,{name:"password",label:"Password",color:t?"warning":"primary",id:"-password-login",type:b?"text":"password",onChange:P.handleChange,value:P.values.password,onBlur:function(e){r(!1)},error:Boolean(P.errors.password),helperText:P.errors.password,onKeyDown:function(e){e.getModifierState("CapsLock")?r(!0):r(!1)},InputProps:{endAdornment:(0,f.jsx)(v.Z,{sx:{cursor:"pointer"},onClick:function(){w(!b)},position:"end",children:b?(0,f.jsx)(h.Z,{}):(0,f.jsx)(p.Z,{})})}}),t&&!P.errors.password&&(0,f.jsx)(u.Z,{variant:"caption",sx:{color:"warning.main"},id:"warning-helper-text-password-login",children:"Caps lock on!"})]})}),(0,f.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,f.jsx)(u.Z,{sx:{textAlign:"right",mt:0,mb:1},variant:"subtitle2",children:(0,f.jsx)(x.Z,{component:"a",color:"primary",href:"/password-reset",underline:"none",children:"Forgot your password?"})}),(0,f.jsx)(Z.Z,{type:"submit",text:"Login to HRI+ Portal"}),(0,f.jsx)(a.Z,{marginBottom:{xs:1,sm:0},children:(0,f.jsxs)(u.Z,{sx:{textAlign:"center",mt:1,mb:1},variant:"subtitle2",children:["Don't have an account yet?"," ",(0,f.jsx)(x.Z,{component:"a",color:"primary",href:"/register",underline:"none",children:"Sign up here."})]})})]})]})})]})},b=function(){var e=t(12969),n=(0,r.Z)();return(0,f.jsx)(a.Z,{sx:{width:1,height:1,overflow:"hidden"},children:(0,f.jsx)(o.Z,{paddingx:0,paddingy:0,children:(0,f.jsxs)(a.Z,{display:"flex",flexDirection:{xs:"column",md:"row"},position:"relative",children:[(0,f.jsx)(a.Z,{width:1,order:{xs:2,md:1},display:"flex",alignItems:"center",children:(0,f.jsx)(o.Z,{children:(0,f.jsx)(j,{})})}),(0,f.jsx)(a.Z,{sx:{flex:{xs:"0 0 100%",md:"0 0 50%"},position:"relative",maxWidth:{xs:"100%",md:"50%"},order:{xs:1,md:2},minHeight:{xs:"auto",md:"calc(100vh - 58px)"}},children:(0,f.jsx)(a.Z,{sx:{width:{xs:1,md:"50vw"},height:"100%",position:"relative"},children:(0,f.jsx)(a.Z,{sx:{width:"100%",height:"100%",overflow:"hidden"},children:(0,f.jsx)(a.Z,{sx:{overflow:"hidden",left:"0%",width:1,height:1,position:{xs:"relative",md:"absolute"},clipPath:{xs:"none",md:"polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)"},shapeOutside:{xs:"none",md:"polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)"}},children:(0,f.jsx)(a.Z,{sx:{height:{xs:"auto",md:1},"& img":{objectFit:"cover"}},children:(0,f.jsx)(a.Z,{component:"img",src:e,height:{xs:"auto",md:1},maxHeight:{xs:300,md:1},width:1,maxWidth:1,sx:{filter:"dark"===n.palette.mode?"brightness(0.7)":"none"}})})})})})})]})})})},w=function(){return(0,f.jsx)(o.Z,{sx:{mt:10},children:(0,f.jsx)(b,{})})}},98272:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),r=t(72791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},o=t(34110),s=function(e,n){return r.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};s.displayName="EyeInvisibleOutlined";var l=r.forwardRef(s)},24215:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(1413),r=t(72791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},o=t(34110),s=function(e,n){return r.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};s.displayName="EyeOutlined";var l=r.forwardRef(s)},63466:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(4942),r=t(63366),a=t(87462),o=t(72791),s=t(28182),l=t(94419),d=t(14036),c=t(20890),h=t(93840),p=t(52930),u=t(66934),x=t(75878),m=t(21217);function v(e){return(0,m.Z)("MuiInputAdornment",e)}var g,Z=(0,x.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=t(31402),j=t(80184),b=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,u.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,d.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,i.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),y=o.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiInputAdornment"}),i=t.children,u=t.className,x=t.component,m=void 0===x?"div":x,Z=t.disablePointerEvents,y=void 0!==Z&&Z,P=t.disableTypography,C=void 0!==P&&P,L=t.position,E=t.variant,z=(0,r.Z)(t,b),S=(0,p.Z)()||{},M=E;E&&S.variant,S&&!M&&(M=S.variant);var I=(0,a.Z)({},t,{hiddenLabel:S.hiddenLabel,size:S.size,disablePointerEvents:y,position:L,variant:M}),k=function(e){var n=e.classes,t=e.disablePointerEvents,i=e.hiddenLabel,r=e.position,a=e.size,o=e.variant,s={root:["root",t&&"disablePointerEvents",r&&"position".concat((0,d.Z)(r)),o,i&&"hiddenLabel",a&&"size".concat((0,d.Z)(a))]};return(0,l.Z)(s,v,n)}(I);return(0,j.jsx)(h.Z.Provider,{value:null,children:(0,j.jsx)(w,(0,a.Z)({as:m,ownerState:I,className:(0,s.Z)(k.root,u),ref:n},z,{children:"string"!==typeof i||C?(0,j.jsxs)(o.Fragment,{children:["start"===L?g||(g=(0,j.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,j.jsx)(c.Z,{color:"text.secondary",children:i})}))})}))},12969:function(e,n,t){e.exports=t.p+"static/media/login-image.7007a3d608710b49766f.jpeg"}}]);
//# sourceMappingURL=909.ff723e69.chunk.js.map