"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[431,930],{50839:(e,t,l)=>{l.d(t,{Z:()=>o});l(72791);var n=l(13239),a=l(1582),s=l(80184);const o=()=>(0,s.jsx)(a.Z,{sx:{color:"grey.500"},spacing:2,direction:"row",children:(0,s.jsx)(n.Z,{color:"success",size:20})})},18930:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var n=l(72791),a=l(58617),s=l(84373),o=l(70828),i=l(57689),c=l(80184);const d=()=>{var e,t,l,d,r,u;const m=(0,i.s0)();let h=localStorage.getItem("tabId");const v=(e,t,l)=>(l&&"a"===l.target.tagName.toLowerCase()&&l.preventDefault(),localStorage.setItem("tabId",e),"KlientInnen"===t?m("/customer/customer_info"):"Kontakte"===t?m("/customer/contact"):"Aktivitat"===t?m("/customer/activity"):"Dokumente"===t?m("/customer/document"):"Vollmachten"===t?m("/customer/attorney"):"SPV"===t?m("/customer/services"):"Rechnung"===t?m("/customer/bills"):void 0);(0,n.useEffect)((()=>{v("nav-home")}),[]);let x=localStorage.getItem("customerDatat"),g=JSON.parse(x);const b=(null===g||void 0===g||null===(e=g.fname)||void 0===e?void 0:e.slice(0,1).toUpperCase())+(null===g||void 0===g||null===(t=g.fname)||void 0===t?void 0:t.slice(1).toLowerCase()),p=(null===g||void 0===g||null===(l=g.lname)||void 0===l?void 0:l.slice(0,1).toUpperCase())+(null===g||void 0===g||null===(d=g.lname)||void 0===d?void 0:d.slice(1).toLowerCase());let j=(null===g||void 0===g||null===(r=g.street)||void 0===r?void 0:r.slice(0,1).toUpperCase())+(null===g||void 0===g||null===(u=g.street)||void 0===u?void 0:u.slice(1).toLowerCase());return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"whiteBox",children:[(0,c.jsx)("div",{className:"blueBoxTop",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-sm-4",children:[(0,c.jsxs)("p",{style:{color:"white",marginTop:"5px"},children:["KlientInnen: ","".concat(b," ").concat(p)]}),(0,c.jsx)(o.VFp,{style:{color:"white"}}),"\xa0",(0,c.jsx)("span",{style:{color:"white"},children:j})]}),(0,c.jsxs)("div",{className:"col-sm-8 mt-4 text-right",children:[(0,c.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,c.jsx)(a.Zuw,{className:"f-2"})," ",null===g||void 0===g?void 0:g.email]}),(0,c.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,c.jsx)(s.HQO,{className:"f-2"})," ",null===g||void 0===g?void 0:g.phone]})]})]})}),(0,c.jsxs)("div",{className:"whiteBoxWithPdLR",children:[(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-sm-12",children:(0,c.jsx)("nav",{children:(0,c.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,c.jsxs)("button",{className:"nav-link ".concat("nav-home"===h?"active":""),id:"nav-home-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"nav-home"===h,onClick:e=>v("nav-home","KlientInnen",e),style:{marginRight:"50px",marginLeft:"20px"},children:[(0,c.jsx)("i",{className:"fa-solid fa-info fa-fw infoIcon"}),"KlientInnen"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("nav-kontakte"===h?"active":""),id:"nav-kontakte-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-kontakte","aria-selected":"nav-kontakte"===h,onClick:e=>v("nav-kontakte","Kontakte",e),style:{marginRight:"50px"},children:[" ",(0,c.jsx)("i",{className:"fa-regular fa-address-book fa-fw"}),"Kontakte"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("nav-aufgaben"===h?"active":""),id:"nav-aufgaben-tab","data-bs-toggle":"tab","data-bs-target":"#nav-aufgaben",role:"tab","aria-controls":"nav-aufgaben","aria-selected":"nav-aufgaben"===h,onClick:e=>v("nav-aufgaben","Aktivitat",e),style:{marginRight:"50px"},children:[(0,c.jsx)("i",{className:"fa-solid fa-heart-pulse fa-fw"}),"Aktivitat"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("nav-rechnungen"===h?"active":""),id:"nav-rechnungen-tab","data-bs-toggle":"tab","data-bs-target":"#nav-rechnungen",role:"tab","aria-controls":"nav-rechnungen","aria-selected":"nav-rechnungen"===h,onClick:e=>v("nav-rechnungen","Dokumente",e),style:{marginRight:"50px"},children:[(0,c.jsx)("i",{className:"fa-regular fa-file fa-fw"}),"Dokumente"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("nav-beschreibung"===h?"active":""),id:"nav-beschreibung-tab","data-bs-toggle":"tab","data-bs-target":"#nav-beschreibung",role:"tab","aria-controls":"nav-beschreibung","aria-selected":"nav-beschreibung"===h,onClick:e=>v("nav-beschreibung","Vollmachten",e),style:{marginRight:"50px"},children:[(0,c.jsx)("i",{className:"fa-solid fa-paint-roller fa-fw"}),"Vollmachten"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("nav-dokumente"===h?"active":""),id:"nav-dokumente-tab","data-bs-toggle":"tab","data-bs-target":"#nav-dokumente",role:"tab","aria-controls":"nav-dokumente","aria-selected":"nav-dokumente"===h,onClick:e=>v("nav-dokumente","SPV",e),style:{marginRight:"50px"},children:[" ",(0,c.jsx)("i",{className:"fa-regular fa-lightbulb fa-fw"}),"SPV"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("nav-leistungen"===h?"active":""),id:"nav-leistungen-tab","data-bs-toggle":"tab","data-bs-target":"#nav-leistungen",role:"tab","aria-controls":"nav-leistungen","aria-selected":"nav-leistungen"===h,onClick:e=>v("nav-leistungen","Rechnung",e),style:{marginRight:"50px"},children:[(0,c.jsx)("i",{className:"fa-regular fa-file-lines fa-fw"}),"Rechnung"]})]})})})}),(0,c.jsx)("br",{})]})]})})},r=n.memo(d)},18431:(e,t,l)=>{l.r(t),l.d(t,{default:()=>f});var n=l(72791),a=l(48096),s=l(16856),o=l(11520),i=(l(76053),l(98745)),c=l(1582),d=l(99355),r=l(29655),u=(l(5462),l(80184));const m=e=>{let{setHide:t,documentId:l,getDetails:n}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a.Z,{show:!0,centered:!0,children:[(0,u.jsxs)(a.Z.Title,{children:[(0,u.jsxs)("svg",{style:{marginLeft:"200px",marginTop:"25px"},width:"44",height:"53",viewBox:"0 0 44 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9193 0C19.9914 0 24.0636 0 28.1357 0C28.1978 0.0248302 28.2599 0.0620762 28.322 0.0744913C30.5194 0.397284 32.2948 2.30921 32.3941 4.50668C32.4313 5.13985 32.4562 5.77302 32.481 6.44343C32.7169 6.44343 32.928 6.44343 33.1266 6.44343C35.1751 6.46826 37.236 6.4186 39.2845 6.51792C41.4199 6.62966 43.158 8.35535 43.4808 10.5032C43.7912 12.6634 42.5745 14.8236 40.5632 15.5561C40.1287 15.7175 40.017 15.9286 40.017 16.3631C40.0294 26.1586 40.0294 35.9541 40.0294 45.7496C40.0294 46.271 40.0046 46.78 39.9425 47.3015C39.6569 50.008 37.7202 52.2179 35.0882 52.851C34.9144 52.8883 34.7281 52.9503 34.5543 53C26.199 53 17.856 53 9.50069 53C9.40137 52.9628 9.31446 52.9131 9.21514 52.9007C8.03571 52.6896 6.99284 52.1806 6.11137 51.3488C4.59673 49.9211 4.0008 48.1333 4.0008 46.0848C4.0008 36.1651 4.00081 26.2455 4.01322 16.3258C4.01322 15.8913 3.88907 15.7051 3.47937 15.5685C2.62273 15.283 1.9399 14.7243 1.41847 13.9918C0.363183 12.4896 0.164543 10.8632 0.946693 9.19958C1.67918 7.62286 2.95794 6.61724 4.70846 6.51792C6.76937 6.40618 8.84269 6.45585 10.916 6.43102C11.1146 6.43102 11.3133 6.43102 11.574 6.43102C11.574 5.922 11.5616 5.48747 11.574 5.04053C11.5988 3.35207 12.1948 1.91192 13.6101 0.955961C14.3053 0.521433 15.1495 0.310377 15.9193 0ZM37.5464 15.9286C27.1674 15.9286 16.8504 15.9286 6.50865 15.9286C6.50865 16.1024 6.50865 16.2389 6.50865 16.3755C6.50865 26.2952 6.50865 36.2148 6.50865 46.1345C6.50865 46.4821 6.53348 46.8297 6.59556 47.1649C6.90593 49.1637 8.44541 50.517 10.4442 50.517C18.1788 50.5294 25.901 50.517 33.6356 50.517C34.604 50.517 35.4606 50.219 36.1807 49.561C37.2112 48.6175 37.5464 47.4008 37.5464 46.06C37.5464 36.19 37.5464 26.32 37.5464 16.45C37.5464 16.2886 37.5464 16.1272 37.5464 15.9286ZM21.9779 13.4083C27.4157 13.4083 32.841 13.4083 38.2789 13.4083C38.5396 13.4083 38.8003 13.3959 39.0486 13.371C40.1039 13.2593 40.886 12.4647 40.9978 11.4219C41.1095 10.3542 40.4887 9.36098 39.4707 9.06301C39.1355 8.96369 38.763 8.93886 38.403 8.93886C27.4901 8.92645 16.5649 8.93886 5.65201 8.93886C5.3913 8.93886 5.13058 8.95128 4.88228 8.98852C3.82699 9.14992 3.06967 10.0066 3.00759 11.0867C2.94552 12.0923 3.6656 13.0855 4.65881 13.3214C5.00643 13.4083 5.37888 13.4083 5.73891 13.4083C11.1395 13.4083 16.5649 13.4083 21.9779 13.4083ZM14.0446 6.40619C19.3955 6.40619 24.6595 6.40619 29.9235 6.40619C29.9235 5.7606 29.9732 5.16468 29.9111 4.56875C29.7869 3.41415 28.8558 2.50785 27.6888 2.50785C23.9146 2.48302 20.128 2.48302 16.3538 2.50785C15.2489 2.52026 14.3177 3.31483 14.1439 4.40736C14.0322 5.05294 14.0694 5.72336 14.0446 6.40619Z",fill:"#C20F0F"}),(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9322 32.217C15.9322 35.9787 15.9322 39.7405 15.9322 43.4899C15.9322 44.5576 15.5101 45.1287 14.7156 45.1411C13.9086 45.1535 13.4492 44.5576 13.4492 43.4775C13.4492 35.9415 13.4492 28.4055 13.4492 20.8696C13.4492 20.6337 13.474 20.3854 13.5237 20.1495C13.6479 19.5784 14.1072 19.2308 14.6783 19.2308C15.237 19.2184 15.7212 19.566 15.8577 20.1123C15.9198 20.3481 15.9198 20.584 15.9198 20.8323C15.9322 24.6189 15.9322 28.418 15.9322 32.217Z",fill:"#C20F0F"}),(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7852 32.2046C20.7852 28.3807 20.7852 24.5444 20.7852 20.7206C20.7852 20.1495 20.9217 19.6653 21.4556 19.3674C22.1012 19.0073 22.9702 19.3549 23.1813 20.0626C23.2558 20.3233 23.2806 20.6089 23.2806 20.882C23.2806 28.4179 23.2806 35.9539 23.2806 43.4899C23.2806 43.7257 23.2682 43.974 23.2061 44.2099C23.0695 44.781 22.5729 45.1659 22.0143 45.1535C21.468 45.1411 20.9838 44.7686 20.8597 44.2099C20.81 43.974 20.7976 43.7257 20.7976 43.4899C20.7852 39.7281 20.7852 35.9663 20.7852 32.2046Z",fill:"#C20F0F"}),(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1113 32.1548C28.1113 28.393 28.1113 24.6312 28.1113 20.8819C28.1113 19.7893 28.5459 19.2183 29.3653 19.2307C30.1598 19.2431 30.5943 19.8142 30.5943 20.8695C30.5943 28.4054 30.5943 35.9414 30.5943 43.4773C30.5943 44.5574 30.135 45.1534 29.328 45.141C28.5334 45.1285 28.1113 44.5574 28.1113 43.4897C28.1113 39.7156 28.1113 35.9414 28.1113 32.1548Z",fill:"#C20F0F"})]}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("h4",{style:{marginLeft:"150px",color:"black"},children:"Sind Sie sicher?"})]}),(0,u.jsx)(a.Z.Body,{children:(0,u.jsx)("p",{style:{textAlign:"center"},children:"M\xf6chten Sie diesen Datensatz wirklich l\xf6schen? dieser Vorgang kann nicht r\xfcckg\xe4ngig gemacht werden"})}),(0,u.jsx)(a.Z.Footer,{children:(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{className:"btn btn w-25",style:{background:"#015291",color:"white"},onClick:()=>t(!1),children:"Abbrechen"}),"\xa0\xa0",(0,u.jsx)("button",{className:"btn btn w-25",style:{background:"#d04545",color:"white"},onClick:async()=>{if(l)try{200===(await(0,d.Wq)("".concat("http://95.217.77.208:4142","/document/get_document"),l)).status&&(e="Data Deleted Successfully",(0,r.Am)(e)),n(),t(!1)}catch(a){console.error("An error occurred while deleting the record:",a),t(!1)}var e},children:"L\xf6schen"})]})})]}),(0,u.jsx)(r.Ix,{})]})};var h=l(18930),v=l(50839),x=l(13855);const g=e=>{let{setEdit:t,getDetails:l}=e;let a=localStorage.getItem("DocumentEditDetails"),s=JSON.parse(a);const[o,i]=(0,n.useState)({document_title:null===s||void 0===s?void 0:s.document_title,document_type:null===s||void 0===s?void 0:s.document_type,document_upload:null===s||void 0===s?void 0:s.document_upload}),[c,m]=(0,n.useState)(!1),[h,g]=(0,n.useState)(!1),b=e=>{const{name:t,value:l}=e.target;i({...o,[t]:l})},p=e=>(0,r.Am)(e),j=()=>{t(!1)};return(0,u.jsxs)("div",{className:"modal",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)",maxHeight:"100%",color:"black"},children:[(0,u.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,u.jsxs)("div",{className:"modal-content",children:[(0,u.jsxs)("div",{className:"modal-header",children:[(0,u.jsx)("h5",{className:"modal-title",children:"Dokument aktualisieren"}),(0,u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:j})]}),(0,u.jsx)(x.Z,{noValidate:!0,validated:c,children:(0,u.jsxs)("div",{className:"modal-body",children:[(0,u.jsxs)("div",{className:"mb-6 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Titel"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{id:"title",required:!0,name:"document_title",value:o.document_title,onChange:b,type:"text",className:"form-control"})})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{className:"row mb-6",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Dokumenttyp"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsxs)("select",{id:"document_type",name:"document_type",value:o.document_type,onChange:b,className:"form-control form-select",children:[(0,u.jsx)("option",{children:"--select--"}),(0,u.jsx)("option",{value:"Living will",children:"Patientenverf\xfcgung"}),(0,u.jsx)("option",{value:"Health care power of attorney",children:"Gesundheitsvollmacht"}),(0,u.jsx)("option",{value:"Power of attorney",children:"Vorsorgevollmacht"}),(0,u.jsx)("option",{value:"care order",children:"Betreuungsverf\xfcgung"}),(0,u.jsx)("option",{value:"Feces pass",children:"Kotfallpass"}),(0,u.jsx)("option",{value:"Power of attorney digital test",children:"Vollmacht digitales Prbe"}),(0,u.jsx)("option",{value:"Write to",children:"Anschreiben"}),(0,u.jsx)("option",{value:"Personal document",children:"Pers\xf6nliches Dokument"}),(0,u.jsx)("option",{value:"Other",children:"Anderes"}),(0,u.jsx)("option",{value:"Living will",children:"Patientenverf\xfcgung"})]})})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{className:"row mb-6",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Datei-Upload"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{id:"fileUpload",type:"file",className:"form-control",name:"document_upload",onChange:e=>{const t=e.target.files[0];i({...o,document_upload:t})}})})]})]})}),(0,u.jsxs)("div",{className:"modal-footer",children:[(0,u.jsx)("button",{type:"button",className:"btn btn-secondary w-25","data-bs-dismiss":"modal",onClick:j,style:{background:"#015291",color:"white"},children:"Abbrechen"}),(0,u.jsx)("button",{type:"button",className:"btn w-25",onClick:async e=>{e.preventDefault();if(!1===e.currentTarget.checkValidity())return e.stopPropagation(),void m(!0);const{document_title:t,document_type:n,document_upload:a}=o;if(!t||!n)return p("Please fill in all the details.");try{g(!0);const e=new FormData;e.append("document_title",t),e.append("document_type",n),e.append("document_upload",a);const o=await(0,d.y6)("".concat("http://95.217.77.208:4142","/document/get_document/update/").concat(null===s||void 0===s?void 0:s._id),e);console.log("document page",o),200===(null===o||void 0===o?void 0:o.status)?(g(!1),i({document_title:"",document_type:"",document_upload:null}),p("Document Updated Successfully"),l()):p("Something Went Wrong"),j()}catch(c){console.error(c)}},style:{background:"#d04545",color:"white"},children:h?(0,u.jsx)(v.Z,{}):"Aktualisieren"})]})]})}),(0,u.jsx)(r.Ix,{})]})};var b=l(61522),p=l(17425);const j=()=>{var e;let t=localStorage.getItem("customerDatat"),l=JSON.parse(t),v=localStorage.getItem("record"),x=JSON.parse(v);const j=e=>(0,r.Am)(e),[f,C]=(0,n.useState)(!1),y=[{title:"TITLE",dataIndex:"document_title",render:e=>(0,u.jsx)("a",{children:e})},{title:"DOKUMENTENTYP",dataIndex:"document_type"},{title:"AKTION",dataIndex:"action",render:(e,t)=>{var l,n,a,o;return(0,u.jsxs)(u.Fragment,{children:[(null===x||void 0===x||null===(l=x.user)||void 0===l?void 0:l._id)===(null===t||void 0===t?void 0:t.added_by)&&(0,b.Mt)().includes("owned")||(0,b.Mt)().includes("yes")||"true"===(null===x||void 0===x||null===(n=x.user)||void 0===n?void 0:n.isAdminFullRights)?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>B(t),children:[(0,u.jsx)(s.mM_,{className:"fs-5",style:{color:"#5C86B4"}}),"\xa0\xa0Bearbeiten"]})}):"",(null===x||void 0===x||null===(a=x.user)||void 0===a?void 0:a._id)===(null===t||void 0===t?void 0:t.added_by)&&(0,b.fK)().includes("owned")||(0,b.fK)().includes("yes")||"true"===(null===x||void 0===x||null===(o=x.user)||void 0===o?void 0:o.isAdminFullRights)?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>q(t._id),children:[(0,u.jsx)(p.qy0,{className:"text-danger text-bold fs-5"})," L\xf6schen"]})}):""]})}}],[N,k]=(0,n.useState)(!1),[w,_]=(0,n.useState)(""),[S,D]=(0,n.useState)("checkbox"),[F,P]=(0,n.useState)(!1),I="http://95.217.77.208:4142";let R=localStorage.getItem("customerDatat"),Z=JSON.parse(R);const[A,V]=(0,n.useState)({document_title:"",document_type:"",customer_id:null===Z||void 0===Z?void 0:Z._id,added_by:null===x||void 0===x||null===(e=x.user)||void 0===e?void 0:e._id}),[K,L]=(0,n.useState)(""),[T,M]=(0,n.useState)([]),B=e=>{let t=JSON.stringify(e);localStorage.setItem("DocumentEditDetails",t),C(!0)},[O,E]=(0,n.useState)(1),[U,H]=(0,n.useState)(0),J=e=>{const{name:t,value:l}=e.target;V({...A,[t]:l})},W=()=>P(!1),q=e=>{_(e),k(!0)},z=async()=>{try{var e;const t=await fetch("".concat(I,"/document/get_document/").concat(null===l||void 0===l?void 0:l._id,"?page=").concat(O)),n=await t.json();H(null===n||void 0===n?void 0:n.pageCount);const a=null===n||void 0===n||null===(e=n.result)||void 0===e?void 0:e.filter((e=>"active"===e.is_deleted));M(a)}catch(t){console.error("Error fetching customer record:",t)}};return(0,n.useEffect)((()=>{z()}),[O]),(0,u.jsxs)("div",{style:{background:"#fff"},children:[N?(0,u.jsx)(m,{setHide:k,documentId:w,getDetails:z}):"",f?(0,u.jsx)(g,{setEdit:C,getDetails:z}):"",(0,u.jsx)(h.default,{}),(0,u.jsx)("h5",{className:"mx-3",children:"Dokumente"}),(0,u.jsx)("hr",{className:"mx-3"}),(0,u.jsxs)("div",{className:"row p-3 mx-3",style:{border:"1px solid lightgray",borderRadius:"5px"},children:[(0,u.jsxs)("div",{className:"col-sm-7",children:[(0,u.jsx)("h5",{children:"Dokumente verwalten"}),(0,u.jsx)("p",{children:"Senden Sie anpassbare Angebote, Vorschl\xe4ge und Vertr\xe4ge, um Gesch\xe4fte schneller abzuschlie\xdfen."})]}),(0,u.jsx)("div",{className:"col-sm-2"}),(0,u.jsxs)("div",{className:"col-sm-3 mt-3",children:[(0,u.jsxs)("button",{type:"button",className:"btn btn text-light",style:{background:"#0b5995"},onClick:()=>P(!0),children:[(0,u.jsx)(s.x06,{style:{color:"white"}}),"\xa0 Dokument hochladen"]}),(0,u.jsxs)(a.Z,{show:F,onHide:W,centered:!0,children:[(0,u.jsx)(a.Z.Header,{closeButton:!0,children:(0,u.jsx)(a.Z.Title,{children:"Details zum Dokument"})}),(0,u.jsxs)(a.Z.Body,{children:[(0,u.jsxs)("div",{className:"mb-6 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Titel"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{id:"title",required:!0,name:"document_title",value:A.document_title,onChange:J,type:"text",className:"form-control",placeholder:"Steuer"})})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{className:"mb-6 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Documenttype"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsxs)("select",{id:"document_type",name:"document_type",value:A.document_type,onChange:J,className:"form-control form-select",children:[(0,u.jsx)("option",{children:"--select--"}),(0,u.jsx)("option",{value:"Living will",children:"Patientenverf\xfcgung"}),(0,u.jsx)("option",{value:"Health care power of attorney",children:"Gesundheitsvollmacht"}),(0,u.jsx)("option",{value:"Power of attorney",children:"Vorsorgevollmacht"}),(0,u.jsx)("option",{value:"care order",children:"Betreuungsverf\xfcgung"}),(0,u.jsx)("option",{value:"Feces pass",children:"Kotfallpass"}),(0,u.jsx)("option",{value:"Power of attorney digital test",children:"Vollmacht digitales Prbe"}),(0,u.jsx)("option",{value:"Write to",children:"Anschreiben"}),(0,u.jsx)("option",{value:"Personal document",children:"Pers\xf6nliches Dokument"}),(0,u.jsx)("option",{value:"Other",children:"Anderes"})]})})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{className:"mb-6 row",children:[(0,u.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Datei-Upload"}),(0,u.jsx)("div",{className:"col-sm-9",children:(0,u.jsx)("input",{id:"fileUpload",type:"file",className:"form-control",name:"document_upload",onChange:e=>L(e.target.files[0])})})]})]}),(0,u.jsx)(a.Z.Footer,{children:(0,u.jsxs)("div",{className:"modal-footer",children:[(0,u.jsxs)("button",{className:"btn btn",onClick:W,style:{background:"#d04545",color:"white"},children:[" ","Abbrechen"]}),"\xa0 \xa0",(0,u.jsx)("button",{className:"btn btn",onClick:async e=>{try{var t;if(!A.document_title||!A.document_type)return j("Please fill all details");e.preventDefault();const l=new FormData;l.append("document_title",null===A||void 0===A?void 0:A.document_title),l.append("document_type",null===A||void 0===A?void 0:A.document_type),l.append("customer_id",null===Z||void 0===Z?void 0:Z._id),l.append("added_by",null===x||void 0===x||null===(t=x.user)||void 0===t?void 0:t._id),l.append("document_upload",K);const n="".concat(I,"/document/create_document");await(0,d.ZC)(n,l);j("Data Saved Successfully"),V(""),W(),z()}catch(l){return l}},style:{background:"#0b5995",color:"white"},children:"Speichern"})]})})]})]})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{className:"row mx-2",children:[(0,u.jsx)("div",{className:"col-sm-12",children:(0,u.jsx)(o.Z,{dataSource:T,columns:y,pagination:!1,rowKey:e=>e._id,rowSelection:{type:"checkbox",onChange:(e,t)=>{console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})}})}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(c.Z,{spacing:2,children:(0,u.jsx)(i.Z,{count:U,variant:"outlined",shape:"rounded",page:O,onChange:(e,t)=>{E(t)}})}),(0,u.jsx)("br",{})]})]}),(0,u.jsx)(r.Ix,{})]})},f=n.memo(j)}}]);
//# sourceMappingURL=431.a5459cdf.chunk.js.map