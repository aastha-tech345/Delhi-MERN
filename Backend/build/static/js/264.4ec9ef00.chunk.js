"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[264],{95264:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=a(72791),n=a(11520),r=a(7692),c=a(98745),l=a(1582),i=a(80184);const o=[{title:"NACHNAME",dataIndex:"fname",render:e=>(0,i.jsx)("a",{children:e})},{title:"VORNAMEN",dataIndex:"lname"},{title:"GEBURTSDATUM",dataIndex:"dob"},{title:"PLZ",dataIndex:"plz"},{title:"TELEFON",dataIndex:"telephone"},{title:"MOBIL",dataIndex:"mobil"},{title:"STATUS",dataIndex:"status"},{title:"ID KLIENTINNEN",dataIndex:"client_id"},{title:"VERSAND NACHSTE MARKE",dataIndex:"next_shipping"},{title:"DAUERSPENDERINNEN",dataIndex:"permanent_donors"}],d=()=>{const[e,t]=(0,s.useState)(""),[a,d]=(0,s.useState)(!1),[u,h]=(0,s.useState)(!1),[x,m]=(0,s.useState)([]),p="http://95.217.77.208:4142",[g,N]=(0,s.useState)(1),[f,b]=(0,s.useState)(0),v=(0,s.useRef)(),[j]=(0,s.useState)("checkbox"),E=async()=>{try{var e;const t=await fetch("".concat(p,"/filter/get_filter?page=").concat(g)),a=await t.json();b(null===a||void 0===a?void 0:a.pageCount);const s=null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e.filter((e=>"active"===e.status));m(s)}catch(u){console.error("Error fetching customer record:",u)}};(0,s.useEffect)((()=>{E()}),[g]);return(0,i.jsxs)("div",{style:{background:"white",borderRadius:"5px"},children:[(0,i.jsx)("h4",{className:"px-3 pt-3",children:"Filter"}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:"m-2",children:[(0,i.jsxs)("div",{className:"row m-3 p-3",style:{border:"1px solid lightgray",borderRadius:"5px "},children:[(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsx)("input",{ref:v,name:"search",value:e,onChange:e=>t(e.target.value),type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control"})}),(0,i.jsx)("div",{className:"col-sm-3",children:(0,i.jsxs)("button",{className:"btn btn text-light",onClick:async()=>{try{if(""===e)return E();const t=await fetch("".concat(p,"/filter/search/").concat(e)),a=await t.json(),s=a.filter((e=>"active"===e.status));s.length>0?m(s):(E(),m(a))}catch(u){console.error("Error searching data:",u.message)}},style:{background:"#0b5995"},children:[(0,i.jsx)(r.Ol$,{}),"\xa0 Filter"]})}),(0,i.jsx)("div",{className:"col-sm-6 text-right"})]}),(0,i.jsxs)("div",{className:"m-3",children:[(0,i.jsx)(n.Z,{rowKey:e=>e._id,rowSelection:{type:"checkbox",onChange:(e,t)=>{console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})},style:{overflowX:"auto"},columns:o,dataSource:x,pagination:!1}),(0,i.jsx)(l.Z,{spacing:2,children:(0,i.jsx)(c.Z,{count:f,variant:"outlined",shape:"rounded",page:g,onChange:(e,t)=>{N(t)}})}),(0,i.jsx)("br",{})]})]})]})},u=s.memo(d)}}]);
//# sourceMappingURL=264.4ec9ef00.chunk.js.map