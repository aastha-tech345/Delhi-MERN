"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[24],{23024:(e,a,s)=>{s.r(a),s.d(a,{default:()=>v});var t=s(72791),r=s(2677),n=s(13855),l=s(16157),o=s(89743),i=s(57689),d=s(11947),c=s(29655),u=(s(5462),s(78983)),m=s(80184);const h=()=>{const[e,a]=(0,t.useState)(""),[s,h]=(0,t.useState)(""),v=(0,i.s0)(),[b,f]=(0,t.useState)(!1);return(0,m.jsxs)("div",{className:" min-vh-100 d-flex flex-row align-items-center",style:{background:"#015291"},children:[(0,m.jsx)(u.KB,{className:"form-container",children:(0,m.jsx)(u.rb,{className:"justify-content-center",children:(0,m.jsxs)(u.b7,{md:4,children:[(0,m.jsx)("img",{className:"logo-login",src:d,alt:"..."}),(0,m.jsx)(u.dL,{className:"mt-3",children:(0,m.jsx)(u.xH,{className:"p-4",children:(0,m.jsx)(u.sl,{className:"p-0",children:(0,m.jsxs)(n.Z,{noValidate:!0,validated:b,children:[(0,m.jsx)("h4",{className:"h4-heading",children:"Anmeldung"}),(0,m.jsx)(o.Z,{className:"mb-3",children:(0,m.jsxs)(n.Z.Group,{as:r.Z,md:"12",controlId:"validationCustom01",children:[(0,m.jsx)(n.Z.Label,{children:"E-Mail Adresse"}),(0,m.jsx)(n.Z.Control,{value:e,onChange:e=>a(e.target.value),required:!0,type:"email",placeholder:"E-Mail Adresse"})]})}),(0,m.jsx)(o.Z,{className:"mb-2",children:(0,m.jsxs)(n.Z.Group,{as:r.Z,md:"12",controlId:"validationCustom01",children:[(0,m.jsx)(n.Z.Label,{children:"Passwort"}),(0,m.jsx)(n.Z.Control,{required:!0,value:s,onChange:e=>h(e.target.value),type:"password",placeholder:"password"})]})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("br",{}),(0,m.jsx)(l.Z,{className:"form-control form-btn",style:{background:"#005291"},onClick:async a=>{!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),f(!0);try{if(!e||!s)return;const a={email:e,password:s},o=await fetch("".concat("http://95.217.77.208:4142","/user/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),i=await o.json();if(!0===i.success){var t,r,n;c.Am.success("User Login Successfully");const e=null===i||void 0===i||null===(t=i.user)||void 0===t||null===(r=t.tokens[0])||void 0===r?void 0:r.token;window.localStorage.setItem("token",e),window.localStorage.setItem("record_id",null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n._id),v("/dashboard"),window.location.reload()}else l="Invalid Credentials",(0,c.Am)(l)}catch(o){console.error("Error:",o),c.Am.error("Invalid Credentials")}var l},children:"Senden"}),(0,m.jsx)("p",{style:{textAlign:"center",color:"#005291",fontSize:"13px",margin:0,cursor:"pointer"},color:"primary",onClick:()=>{v("/password-reset")},className:"mt-3 mx-3 mb-0",tabIndex:-1,children:"Passwort vergessen ?"})]})]})})})})]})})}),(0,m.jsx)(c.Ix,{})]})},v=t.memo(h)},16157:(e,a,s)=>{s.d(a,{Z:()=>m});var t=s(41418),r=s.n(t),n=s(72791),l=s(80184);const o=["as","disabled"];function i(e){let{tagName:a,disabled:s,href:t,target:r,rel:n,role:l,onClick:o,tabIndex:i=0,type:d}=e;a||(a=null!=t||null!=r||null!=n?"a":"button");const c={tagName:a};if("button"===a)return[{type:d||"button",disabled:s},c];const u=e=>{(s||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),s?e.stopPropagation():null==o||o(e)};return"a"===a&&(t||(t="#"),s&&(t=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:s?void 0:i,href:t,target:"a"===a?r:void 0,"aria-disabled":s||void 0,rel:"a"===a?n:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const d=n.forwardRef(((e,a)=>{let{as:s,disabled:t}=e,r=function(e,a){if(null==e)return{};var s,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)s=n[t],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,o);const[n,{tagName:d}]=i(Object.assign({tagName:s,disabled:t},r));return(0,l.jsx)(d,Object.assign({},r,n,{ref:a}))}));d.displayName="Button";var c=s(10162);const u=n.forwardRef(((e,a)=>{let{as:s,bsPrefix:t,variant:n="primary",size:o,active:d=!1,disabled:u=!1,className:m,...h}=e;const v=(0,c.vE)(t,"btn"),[b,{tagName:f}]=i({tagName:s,disabled:u,...h}),p=f;return(0,l.jsx)(p,{...b,...h,ref:a,disabled:u,className:r()(m,v,d&&"active",n&&"".concat(v,"-").concat(n),o&&"".concat(v,"-").concat(o),h.href&&u&&"disabled")})}));u.displayName="Button";const m=u}}]);
//# sourceMappingURL=24.df247136.chunk.js.map