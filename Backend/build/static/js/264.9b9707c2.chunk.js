"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[264],{95264:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(72791),n=a(91020),r=a(7692),i=a(98745),l=a(1582),c=a(80184);const d=[{title:"NACHNAME",dataIndex:"fname",render:e=>(0,c.jsx)("a",{children:e})},{title:"VORNAMEN",dataIndex:"lname"},{title:"GEBURTSDATUM",dataIndex:"dob"},{title:"PLZ",dataIndex:"plz"},{title:"TELEFON",dataIndex:"telephone"},{title:"MOBIL",dataIndex:"mobile"},{title:"STATUS",dataIndex:"status",render:(e,t)=>(0,c.jsx)("div",{style:{color:"white",background:"PV-ALT"===e?"#F6011F":"HVD-PV"===e?"#55BC6E":"transparent",borderRadius:"20px",padding:"3px",width:"70px",textAlign:"center"},children:(0,c.jsx)("b",{style:{fontSize:"12px"},children:e})})},{title:"ID KLIENTINNEN",dataIndex:"client_id"},{title:"VERSAND NACHSTE MARKE",dataIndex:"next_shipping"},{title:"DAUERSPENDERINNEN",dataIndex:"permanent_donors"}],o=()=>{const[e,t]=(0,s.useState)(""),[a,o]=(0,s.useState)(!1),[h,u]=(0,s.useState)(!1),[x,m]=(0,s.useState)([]),p="http://95.217.77.208:4142",[g,N]=(0,s.useState)(1),[f,b]=(0,s.useState)(0),j=(0,s.useRef)(),v=async()=>{try{var e;const t=await fetch("".concat(p,"/filter/get_filter?page=").concat(g)),a=await t.json();b(null===a||void 0===a?void 0:a.pageCount);const s=null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e.filter((e=>"active"===e.is_deleted));m(s)}catch(h){console.error("Error fetching customer record:",h)}};(0,s.useEffect)((()=>{v()}),[g]);return(0,c.jsxs)("div",{style:{background:"white",borderRadius:"5px"},children:[(0,c.jsx)("h4",{className:"px-3 pt-3",children:"Filter"}),(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{className:"m-2",children:[(0,c.jsxs)("div",{className:"row m-3 p-3",style:{border:"1px solid lightgray",borderRadius:"5px "},children:[(0,c.jsx)("div",{className:"col-sm-3",children:(0,c.jsx)("input",{ref:j,name:"search",value:e,onChange:e=>t(e.target.value),type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control"})}),(0,c.jsx)("div",{className:"col-sm-3",children:(0,c.jsxs)("button",{className:"btn btn text-light",onClick:async()=>{try{if(""===e)return v();const t=await fetch("".concat(p,"/filter/search/").concat(e)),a=await t.json(),s=a.filter((e=>"active"===e.is_deleted));s.length>0?m(s):(v(),m(a))}catch(h){console.error("Error searching data:",h.message)}},style:{background:"#0b5995"},children:[(0,c.jsx)(r.Ol$,{}),"\xa0 Filter"]})}),(0,c.jsx)("div",{className:"col-sm-6 text-right"})]}),(0,c.jsxs)("div",{className:"m-3",children:[(0,c.jsx)(n.Z,{rowKey:e=>e._id,rowSelection:{type:"checkbox",onChange:(e,t)=>{console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})},style:{overflowX:"auto"},columns:d,dataSource:x,pagination:!1}),(0,c.jsx)(l.Z,{spacing:2,children:(0,c.jsx)(i.Z,{count:f,variant:"outlined",shape:"rounded",page:g,onChange:(e,t)=>{N(t)}})}),(0,c.jsx)("br",{})]})]})]})},h=s.memo(o)}}]);
//# sourceMappingURL=264.9b9707c2.chunk.js.map