"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[465],{5120:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var s=a(65043),n=a(32477),r=a(47503),o=(a(92342),a(27642)),c=a(9977),i=a(73216),l=a(27149),d=a(22285),u=a(70579);const m=()=>{const e=(0,i.Zp)(),[t,a]=(0,s.useState)([]),[m,x]=(0,s.useState)(1),[h,p]=(0,s.useState)(0),[j,g]=(0,s.useState)("");(0,s.useEffect)((()=>{(async()=>{try{var e;const t=await fetch("".concat("http://localhost:4142","/email/get_email?page=").concat(m,"&resultPerPage=").concat(j)),s=await t.json();p(null===s||void 0===s?void 0:s.pageCount);const n=null===s||void 0===s||null===(e=s.result)||void 0===e?void 0:e.filter((e=>"active"===e.is_deleted));a(n)}catch(t){console.error("Error fetching customer record:",t)}})()}),[m,j]);const v=[{title:"Name des Kunden",dataIndex:"designation",render:e=>(0,u.jsx)("a",{children:e}),width:"100%"},{title:"AKTION",dataIndex:"action",render:(t,a)=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>(t=>{let a=JSON.stringify(t);localStorage.setItem("EmailEditDetails",a),e("/settings/email_info")})(a),children:[(0,u.jsx)(l._51,{className:"fs-5",style:{color:"#5C86B4"}}),"\xa0\xa0Bearbeiten"]}),(0,u.jsxs)("button",{style:{background:"none",border:"none"},disabled:!0,children:[(0,u.jsx)(d.WFf,{className:"text-danger text-bold fs-5"})," L\xf6schen"]})]})}];return(0,u.jsx)("div",{className:"inner-page-wrap",children:(0,u.jsxs)("div",{className:"row tab-content",style:{borderRadius:"5px"},children:[(0,u.jsxs)("div",{className:"col-sm-12",style:{background:"white",Height:"640px",borderRadius:"5px "},children:[(0,u.jsx)("div",{className:"tab-title",children:(0,u.jsx)("h4",{children:"E-Mail-Vorlagen"})}),(0,u.jsxs)("div",{className:"mx-2",children:[(0,u.jsx)(n.A,{columns:v,pagination:!1,dataSource:t,rowKey:e=>e._id,rowSelection:{type:"checkbox",onChange:(e,t)=>{},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})}}),(0,u.jsx)("div",{className:"container-fluid pagination-row",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-md-10 ps-md-0 text-center text-md-start",children:(0,u.jsx)(o.A,{spacing:2,children:(0,u.jsx)(c.A,{count:h,variant:"outlined",shape:"rounded",page:m,onChange:(e,t)=>{x(t)}})})}),(0,u.jsx)("div",{className:"col-md-2 pe-md-0 mt-3 mt-md-0 text-md-end",children:(0,u.jsxs)("select",{className:"form-control form-select",value:j,onChange:e=>{g(parseInt(e.target.value,10)),x(1)},children:[(0,u.jsx)("option",{value:10,children:"10 pro Seite"}),(0,u.jsx)("option",{value:20,children:"20 pro Seite"}),(0,u.jsx)("option",{value:50,children:"50 pro Seite"}),(0,u.jsx)("option",{value:100,children:"100 pro Seite"})]})})]})}),(0,u.jsx)("br",{})]})]}),(0,u.jsx)(r.N9,{})]})})},x=s.memo(m)},88726:(e,t,a)=>{a.d(t,{A:()=>s});const s=a(65043).createContext(null)},77387:(e,t,a)=>{a.d(t,{A:()=>n});var s=a(63662);function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,s.A)(e,t)}}}]);
//# sourceMappingURL=465.5aba2c0f.chunk.js.map