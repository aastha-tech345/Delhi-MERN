"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[598,118],{51118:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var n=t(72791),l=t(57689),s=t(20458),i=t(70828),o=t(80184);const r=()=>{const e=(0,l.TH)();console.log("location",e);const a=(0,l.s0)();let t=localStorage.getItem("tabIdd")||"createuser";"/settings/role"===e.pathname&&(t="role");const r=(e,t,n)=>{n&&"a"===n.target.tagName.toLowerCase()&&n.preventDefault(),"Mitarbeiterlnnen"===t?(localStorage.setItem("tabIdd","createuser"),a("/settings/createuser")):"Rollen"===t&&(localStorage.setItem("tabIdd","role"),a("/settings/role"))};return(0,n.useEffect)((()=>{r(),localStorage.removeItem("tabIdd")}),[t]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"whiteBoxWithPdLR",style:{borderRadius:"5px"},children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-sm-12 mx-3",children:(0,o.jsx)("nav",{children:(0,o.jsxs)("div",{className:"row nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,o.jsx)("div",{className:"col-sm-3",children:(0,o.jsxs)("button",{className:"nav-link ".concat("createuser"===t?"active":""),id:"createuser-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"createuser"===t,onClick:e=>r(0,"Mitarbeiterlnnen",e),children:[(0,o.jsx)(s.WCB,{}),"Mitarbeiterlnnen"]})}),(0,o.jsx)("div",{className:"col-sm-3",children:(0,o.jsxs)("button",{className:"nav-link ".concat("role"===t?"active":""),id:"role-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"role","aria-selected":"role"===t,onClick:e=>r(0,"Rollen",e),children:[(0,o.jsx)(i.JjM,{}),"Rollen"]})}),(0,o.jsx)("div",{className:"col-sm-6"})]})})})})})})},c=n.memo(r)},62598:(e,a,t)=>{t.r(a),t.d(a,{default:()=>C});var n=t(72791),l=t(19826),s=t(48096),i=t(16856),o=t(78820),r=t(99355),c=t(29655),d=(t(5462),t(51118)),m=t(17425),h=t(80184);const u=e=>{let{setHide:a,userCreateId:t,getEmployeeData:n}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"modal",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)",maxHeight:"100%",color:"black"},children:(0,h.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,h.jsxs)("div",{className:"modal-content",children:[(0,h.jsxs)(s.Z.Title,{children:[(0,h.jsxs)("svg",{style:{marginLeft:"200px",marginTop:"25px"},width:"44",height:"53",viewBox:"0 0 44 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9193 0C19.9914 0 24.0636 0 28.1357 0C28.1978 0.0248302 28.2599 0.0620762 28.322 0.0744913C30.5194 0.397284 32.2948 2.30921 32.3941 4.50668C32.4313 5.13985 32.4562 5.77302 32.481 6.44343C32.7169 6.44343 32.928 6.44343 33.1266 6.44343C35.1751 6.46826 37.236 6.4186 39.2845 6.51792C41.4199 6.62966 43.158 8.35535 43.4808 10.5032C43.7912 12.6634 42.5745 14.8236 40.5632 15.5561C40.1287 15.7175 40.017 15.9286 40.017 16.3631C40.0294 26.1586 40.0294 35.9541 40.0294 45.7496C40.0294 46.271 40.0046 46.78 39.9425 47.3015C39.6569 50.008 37.7202 52.2179 35.0882 52.851C34.9144 52.8883 34.7281 52.9503 34.5543 53C26.199 53 17.856 53 9.50069 53C9.40137 52.9628 9.31446 52.9131 9.21514 52.9007C8.03571 52.6896 6.99284 52.1806 6.11137 51.3488C4.59673 49.9211 4.0008 48.1333 4.0008 46.0848C4.0008 36.1651 4.00081 26.2455 4.01322 16.3258C4.01322 15.8913 3.88907 15.7051 3.47937 15.5685C2.62273 15.283 1.9399 14.7243 1.41847 13.9918C0.363183 12.4896 0.164543 10.8632 0.946693 9.19958C1.67918 7.62286 2.95794 6.61724 4.70846 6.51792C6.76937 6.40618 8.84269 6.45585 10.916 6.43102C11.1146 6.43102 11.3133 6.43102 11.574 6.43102C11.574 5.922 11.5616 5.48747 11.574 5.04053C11.5988 3.35207 12.1948 1.91192 13.6101 0.955961C14.3053 0.521433 15.1495 0.310377 15.9193 0ZM37.5464 15.9286C27.1674 15.9286 16.8504 15.9286 6.50865 15.9286C6.50865 16.1024 6.50865 16.2389 6.50865 16.3755C6.50865 26.2952 6.50865 36.2148 6.50865 46.1345C6.50865 46.4821 6.53348 46.8297 6.59556 47.1649C6.90593 49.1637 8.44541 50.517 10.4442 50.517C18.1788 50.5294 25.901 50.517 33.6356 50.517C34.604 50.517 35.4606 50.219 36.1807 49.561C37.2112 48.6175 37.5464 47.4008 37.5464 46.06C37.5464 36.19 37.5464 26.32 37.5464 16.45C37.5464 16.2886 37.5464 16.1272 37.5464 15.9286ZM21.9779 13.4083C27.4157 13.4083 32.841 13.4083 38.2789 13.4083C38.5396 13.4083 38.8003 13.3959 39.0486 13.371C40.1039 13.2593 40.886 12.4647 40.9978 11.4219C41.1095 10.3542 40.4887 9.36098 39.4707 9.06301C39.1355 8.96369 38.763 8.93886 38.403 8.93886C27.4901 8.92645 16.5649 8.93886 5.65201 8.93886C5.3913 8.93886 5.13058 8.95128 4.88228 8.98852C3.82699 9.14992 3.06967 10.0066 3.00759 11.0867C2.94552 12.0923 3.6656 13.0855 4.65881 13.3214C5.00643 13.4083 5.37888 13.4083 5.73891 13.4083C11.1395 13.4083 16.5649 13.4083 21.9779 13.4083ZM14.0446 6.40619C19.3955 6.40619 24.6595 6.40619 29.9235 6.40619C29.9235 5.7606 29.9732 5.16468 29.9111 4.56875C29.7869 3.41415 28.8558 2.50785 27.6888 2.50785C23.9146 2.48302 20.128 2.48302 16.3538 2.50785C15.2489 2.52026 14.3177 3.31483 14.1439 4.40736C14.0322 5.05294 14.0694 5.72336 14.0446 6.40619Z",fill:"#C20F0F"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9322 32.217C15.9322 35.9787 15.9322 39.7405 15.9322 43.4899C15.9322 44.5576 15.5101 45.1287 14.7156 45.1411C13.9086 45.1535 13.4492 44.5576 13.4492 43.4775C13.4492 35.9415 13.4492 28.4055 13.4492 20.8696C13.4492 20.6337 13.474 20.3854 13.5237 20.1495C13.6479 19.5784 14.1072 19.2308 14.6783 19.2308C15.237 19.2184 15.7212 19.566 15.8577 20.1123C15.9198 20.3481 15.9198 20.584 15.9198 20.8323C15.9322 24.6189 15.9322 28.418 15.9322 32.217Z",fill:"#C20F0F"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7852 32.2046C20.7852 28.3807 20.7852 24.5444 20.7852 20.7206C20.7852 20.1495 20.9217 19.6653 21.4556 19.3674C22.1012 19.0073 22.9702 19.3549 23.1813 20.0626C23.2558 20.3233 23.2806 20.6089 23.2806 20.882C23.2806 28.4179 23.2806 35.9539 23.2806 43.4899C23.2806 43.7257 23.2682 43.974 23.2061 44.2099C23.0695 44.781 22.5729 45.1659 22.0143 45.1535C21.468 45.1411 20.9838 44.7686 20.8597 44.2099C20.81 43.974 20.7976 43.7257 20.7976 43.4899C20.7852 39.7281 20.7852 35.9663 20.7852 32.2046Z",fill:"#C20F0F"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1113 32.1548C28.1113 28.393 28.1113 24.6312 28.1113 20.8819C28.1113 19.7893 28.5459 19.2183 29.3653 19.2307C30.1598 19.2431 30.5943 19.8142 30.5943 20.8695C30.5943 28.4054 30.5943 35.9414 30.5943 43.4773C30.5943 44.5574 30.135 45.1534 29.328 45.141C28.5334 45.1285 28.1113 44.5574 28.1113 43.4897C28.1113 39.7156 28.1113 35.9414 28.1113 32.1548Z",fill:"#C20F0F"})]}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("h4",{style:{marginLeft:"150px",color:"black"},children:"Sind Sie sicher?"})]}),(0,h.jsx)(s.Z.Body,{children:(0,h.jsx)("p",{style:{textAlign:"center"},children:"M\xf6chten Sie diesen Datensatz wirklich l\xf6schen? dieser Vorgang kann nicht r\xfcckg\xe4ngig gemacht werden"})}),(0,h.jsx)(s.Z.Footer,{children:(0,h.jsxs)("div",{className:"mx-auto",children:[(0,h.jsx)("button",{className:"btn btn mx-2",style:{background:"#015291",color:"white"},onClick:()=>a(!1),children:"Abbrechen"}),(0,h.jsx)("button",{className:"btn btn",style:{background:"#d04545",color:"white"},onClick:async()=>{if(t)try{200===(await(0,r.Wq)("".concat("http://95.217.77.208:4142","/user/get/employeeData"),t)).status&&(e="Daten erfolgreich gel\xf6scht",(0,c.Am)(e)),n(),a(!1)}catch(l){console.error("An error occurred while deleting the record:",l),a(!1)}var e},children:"L\xf6schen"})]})})]})})}),(0,h.jsx)(c.Ix,{})]})};var v=t(58482);function g(e){let{setEdit:a,getEmployeeData:t}=e;const{editUser:l,setEditUser:i}=(0,n.useContext)(v.x);let o=localStorage.getItem("UserEditDetails"),d=JSON.parse(o);const m=e=>(0,c.Am)(e),[u,g]=(0,n.useState)(null===d||void 0===d?void 0:d.isAdminFullRights),x="http://95.217.77.208:4142",[b,p]=(0,n.useState)("nav-home"),[j,C]=(0,n.useState)([]),[f,N]=(0,n.useState)({username:null===d||void 0===d?void 0:d.username,lname:null===d||void 0===d?void 0:d.lname,street:null===d||void 0===d?void 0:d.street,plz:null===d||void 0===d?void 0:d.plz,city:null===d||void 0===d?void 0:d.city,email:null===d||void 0===d?void 0:d.email,location:null===d||void 0===d?void 0:d.location,tel:null===d||void 0===d?void 0:d.tel,mobile:null===d||void 0===d?void 0:d.mobile,role:null===d||void 0===d?void 0:d.role,password:"123456",user_type:"employee",timezone:"5:30"}),y=e=>{p(e)},k=e=>{const{name:a,value:t}=e.target;N({...f,[a]:t})},w=()=>{a(!1)},S={...f,isAdminFullRights:u};return(0,n.useEffect)((()=>{(async()=>{try{var e;const a=await(0,r.wY)("".concat(x,"/role/get_roles"));C(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.data)}catch(a){console.log(a)}})()}),[l]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"modal modal-form edit-modal-form",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)",maxHeight:"100%",color:"black"},children:[(0,h.jsx)("div",{className:"modal-dialog  modal-dialog-centered modal-lg",children:(0,h.jsxs)("div",{className:"modal-content",children:[(0,h.jsxs)(s.Z.Body,{children:[(0,h.jsxs)("div",{className:" row pt-5 px-5",children:[(0,h.jsx)("p",{className:"fs-5",children:(0,h.jsx)("b",{children:"Super Verwalter"})}),(0,h.jsx)("div",{className:"col-sm-9",children:(0,h.jsx)("p",{children:"Wenn Sie den Super-Admin-Zugang f\xfcr den Benutzer aktivieren, erhalten Sie vollen Zugriff auf alle Funktionen ohne jegliche Einschr\xe4nkungen."})}),(0,h.jsx)("div",{className:"col-sm-3",children:(0,h.jsx)("div",{className:"form-check mx-5 form-switch",children:(0,h.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",name:"isAdminFullRights",checked:JSON.parse(u),onChange:e=>g(e.target.checked)})})})]}),(0,h.jsx)("div",{className:"whiteBoxWithPdLR",children:(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsx)("div",{className:"row",style:{background:"white"},children:(0,h.jsx)("div",{className:"col-sm-12",children:(0,h.jsx)("nav",{children:(0,h.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,h.jsx)("button",{className:"nav-link ".concat("nav-home"===b?"active":""),id:"nav-home-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"nav-home"===b,onClick:()=>y("nav-home"),style:{marginRight:"10px",marginLeft:"20px"},children:"Benutzer"}),(0,h.jsx)("button",{className:"nav-link ".concat("nav-rollen"===b?"active":""),id:"nav-rollen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-rollen","aria-selected":"nav-rollen"===b,onClick:()=>y("nav-rollen"),style:{marginRight:"10px"},children:"Passwort"}),(0,h.jsx)("button",{className:"nav-link ".concat("nav-lokalisierung"===b?"active":""),id:"nav-lokalisierung-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-lokalisierung","aria-selected":"nav-lokalisierung"===b,onClick:()=>y("nav-lokalisierung"),style:{marginRight:"10px"},children:"Lokalisierung"}),(0,h.jsx)("button",{className:"nav-link ".concat("nav-benachrichtigungen"===b?"active":""),id:"nav-benachrichtigungen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-benachrichtigungen","aria-selected":"nav-benachrichtigungen"===b,onClick:()=>y("nav-benachrichtigungen"),style:{marginRight:"10px"},children:"Benachrichtigungen"}),(0,h.jsx)("button",{className:"nav-link ".concat("nav-fortgeschrittene"===b?"active":""),id:"nav-fortgeschrittene-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-fortgeschrittene","aria-selected":"nav-fortgeschrittene"===b,onClick:()=>y("nav-fortgeschrittene"),style:{marginRight:"10px"},children:"Fortgeschrittene"})]})})})})})}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[(0,h.jsx)("div",{className:"tab-pane fade ".concat("nav-home"===b?"show active":""),id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab",children:(0,h.jsxs)("div",{className:"row mx-3",children:[(0,h.jsxs)("div",{className:"col-sm-6",children:[(0,h.jsx)("input",{className:"form-control",placeholder:"Name",type:"text",name:"username",value:f.username,onChange:k}),(0,h.jsx)("input",{className:"form-control",placeholder:"Stra\xdfe mit Hausnummer",type:"text",name:"street",value:f.street,onChange:k}),(0,h.jsx)("input",{className:"form-control",placeholder:"Stadt",type:"text",name:"city",value:f.city,onChange:k}),(0,h.jsx)("input",{className:"form-control",placeholder:"Standort",type:"text",name:"location",value:f.location,onChange:k}),(0,h.jsxs)("select",{className:"form-control",name:"role",value:f.role,onChange:k,children:[(0,h.jsx)("option",{value:"",children:"Select Role"}),null===j||void 0===j?void 0:j.map((e=>{const{role_name:a,_id:t}=e;return(0,h.jsx)("option",{value:t,children:a},t)}))]})]}),(0,h.jsxs)("div",{className:"col-sm-6",children:[(0,h.jsx)("input",{className:"form-control",placeholder:"Vorname",type:"text",name:"lname",value:f.lname,onChange:k}),(0,h.jsx)("input",{className:"form-control",type:"text",placeholder:"PLZ",name:"plz",value:f.plz,onChange:k}),(0,h.jsx)("input",{className:"form-control",placeholder:"E-Mail Adresse",type:"email",name:"email",value:f.email,onChange:k}),(0,h.jsx)("input",{className:"form-control",placeholder:"Telefon",maxLength:10,minLength:2,type:"phone",name:"tel",value:f.tel,onChange:e=>{const a=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(a)&&k({target:{name:"tel",value:a}})}}),(0,h.jsx)("input",{className:"form-control",placeholder:"Mobil",maxLength:10,minLength:2,type:"tel",name:"mobile",value:f.mobile,onChange:e=>{const a=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(a)&&k({target:{name:"mobile",value:a}})}})]})]})}),(0,h.jsx)("div",{className:"tab-pane fade ".concat("nav-rollen"===b?"show active":""),id:"nav-rollen",role:"tabpanel","aria-labelledby":"nav-rollen-tab"}),(0,h.jsx)("div",{className:"tab-pane fade ".concat("nav-mannschaften"===b?"show active":""),id:"nav-mannschaften",role:"tabpanel","aria-labelledby":"nav-mannschaften-tab"})]})]}),(0,h.jsxs)("div",{className:"text-right m-3",children:[(0,h.jsx)("button",{type:"button",className:"btn","data-bs-dismiss":"modal",onClick:w,style:{background:"#d04545",color:"white",marginRight:"15px"},children:"Abbrechen"}),(0,h.jsx)("button",{type:"button",className:"btn",onClick:async e=>{e.preventDefault();try{const e=await(0,r.yu)("".concat(x,"/user/update/employeeData/").concat(null===d||void 0===d?void 0:d._id),S);200===(null===e||void 0===e?void 0:e.status)?(i(!l),N({username:"",lname:"",street:"",plz:"",city:"",email:"",location:"",tel:"",mobile:"",role:""}),m("Mitarbeiter erfolgreich aktualisiert")):m("Etwas ist schief gelaufen"),w()}catch(a){console.error(a)}},style:{background:"#015291",color:"white",marginRight:"23px"},children:"Speichern"})]})]})}),(0,h.jsx)(c.Ix,{})]})})}var x=t(61522),b=t(44818),p=t(1582);const j=()=>{var e,a,t;const{setEditUser:j,editUser:C}=(0,n.useContext)(v.x),[f,N]=(0,n.useState)(""),y=localStorage.getItem("record");let k=JSON.parse(y);const w=e=>(0,c.Am)(e),[S,R]=(0,n.useState)(!1),_="http://95.217.77.208:4142",[A,I]=(0,n.useState)(!1),[F,Z]=(0,n.useState)(!1),[L,E]=(0,n.useState)("nav-home"),[M,z]=(0,n.useState)([]),[B,D]=(0,n.useState)([]),[P,H]=(0,n.useState)("false"),U=(0,n.useRef)(),[W,J]=(0,n.useState)(""),[O,T]=(0,n.useState)(!1),[V,$]=(0,n.useState)(1),[q,K]=(0,n.useState)(0),[Y,G]=(0,n.useState)({username:"",lname:"",street:"",plz:"",city:"",email:"",location:"",tel:"",mobile:"",role:"",password:"123456",user_type:"employee",timezone:"5:30",parent_id:null===k||void 0===k||null===(e=k.user)||void 0===e?void 0:e._id,added_by:null===k||void 0===k||null===(a=k.user)||void 0===a?void 0:a.username}),[Q,X]=(0,n.useState)(""),ee={...Y,isAdminFullRights:P,email:Q},[ae,te]=(0,n.useState)(""),ne=e=>{E(e)},le=()=>{I(!1)},se=e=>{const{name:a,value:t}=e.target;G({...Y,[a]:t})};let ie=localStorage.getItem("record"),oe=JSON.parse(ie);null===oe||void 0===oe||null===(t=oe.user)||void 0===t||t._id;const re=[{title:"ID",dataIndex:"_id",render:e=>(0,h.jsx)("a",{children:null===e||void 0===e?void 0:e.slice(-6)})},{title:"NAME",dataIndex:"username"},{title:"E-Mail Adresse",dataIndex:"email"},{title:"Super Verwalter",dataIndex:"isAdminFullRights",render:(e,a)=>(0,h.jsx)("div",{style:{color:"white",background:"true"===e?"#55BC6E":"false"===e?"#0b5995":"transparent",borderRadius:"20px",padding:"3px",width:"13px",marginLeft:"10px",height:"13px",borderRight:"50%"}})},{title:"AKTION",dataIndex:"action",render:(e,a)=>{var t,n,l,s;return(0,h.jsxs)(h.Fragment,{children:[(null===k||void 0===k||null===(t=k.user)||void 0===t?void 0:t._id)===a.parent_id&&(0,x.Gk)().includes("owned")||(0,x.Gk)().includes("yes")||"true"==(null===k||void 0===k||null===(n=k.user)||void 0===n?void 0:n.isAdminFullRights)?(0,h.jsxs)("button",{onClick:()=>(e=>{let a=JSON.stringify(e);localStorage.setItem("UserEditDetails",a),T(!0)})(a),style:{background:"none",border:"none"},children:[(0,h.jsx)(i.mM_,{className:"fs-5",style:{color:"#5C86B4"}}),"\xa0 Bearbeiten \xa0\xa0\xa0"]}):"",(null===k||void 0===k||null===(l=k.user)||void 0===l?void 0:l._id)===a.parent_id&&(0,x.rj)().includes("owned")||(0,x.rj)().includes("yes")||"true"==(null===k||void 0===k||null===(s=k.user)||void 0===s?void 0:s.isAdminFullRights)?(0,h.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>(e=>{N(e),R(!0)})(a._id),children:[(0,h.jsx)(m.qy0,{className:"text-danger text-bold fs-5"}),"L\xf6schen"]}):""]})}}],ce=async()=>{try{var e,a,t;const n=await(0,r.wY)("".concat(_,"/user/get/employeeData?page=").concat(V,"&resultPerPage=").concat(ae));K(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.pageCount);const l=null===n||void 0===n||null===(a=n.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.filter((e=>"active"===e.status));D(l)}catch(n){console.log(n)}};(0,n.useEffect)((()=>{(async()=>{try{var e;const a=await(0,r.wY)("".concat(_,"/role/get_roles"));z(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.data)}catch(a){console.log(a)}})(),ce()}),[C,V,ae]);return(0,h.jsxs)(h.Fragment,{children:[S?(0,h.jsx)(u,{setHide:R,userCreateId:f,getEmployeeData:ce}):"",O?(0,h.jsx)(g,{setEdit:T,getEmployeeData:ce}):"",(0,h.jsx)("div",{className:"search-filter-row-user",style:{border:"none"},children:(0,h.jsxs)("div",{className:"container-fluid",children:[(0,h.jsx)(d.default,{}),(0,h.jsx)("div",{className:"tab-title",children:(0,h.jsx)("h4",{children:"Benutzer"})}),(0,h.jsx)("hr",{}),(0,h.jsx)("div",{className:"topBtnBox",children:(0,h.jsxs)("div",{className:"row p-2",children:[(0,h.jsx)("div",{className:"col-md-3",children:(0,h.jsxs)("button",{className:"btn btn",onClick:()=>{I(!0)},style:{background:"#0b5995",color:"white"},children:[(0,h.jsx)(i.x06,{}),"\xa0 MitarbeiterInnen erstellen"]})}),(0,h.jsx)("div",{className:"col-md-6 mb-md-0 mb-3",children:(0,h.jsxs)("div",{className:"d-flex align-items-center",children:[(0,h.jsx)("input",{ref:U,name:"search",value:W,onChange:e=>J(e.target.value),type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control form-search-control"}),(0,h.jsx)("button",{onClick:async()=>{try{if(""===W)return ce();const e=await fetch("".concat(_,"/user/search/").concat(W)),a=await e.json(),t=a.filter((e=>"active"===e.status));t.length>0?D(t):(ce(),D(a))}catch(e){console.error("Error searching data:",e.message)}},className:"filter-setting",children:(0,h.jsx)(o.xRF,{className:"setting-icon"})})]})}),(0,h.jsxs)(s.Z,{size:"lg",show:A,onHide:le,centered:!0,className:"modal-form",children:[(0,h.jsxs)("div",{className:" row pt-5 px-5",children:[(0,h.jsx)("p",{className:"fs-5",children:(0,h.jsx)("b",{children:"Super Verwalter"})}),(0,h.jsx)("div",{className:"col-sm-9",children:(0,h.jsx)("p",{children:"Wenn Sie den Super-Admin-Zugang f\xfcr den Benutzer aktivieren, erhalten Sie vollen Zugriff auf alle Funktionen ohne jegliche Einschr\xe4nkungen."})}),(0,h.jsx)("div",{className:"col-sm-3",children:(0,h.jsx)("div",{className:"form-check mx-5 form-switch",children:(0,h.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked",name:"isAdminFullRights",onChange:e=>H(e.target.checked.toString())})})})]}),(0,h.jsxs)(s.Z.Body,{children:[(0,h.jsx)("div",{className:"whiteBoxWithPdLR",children:(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-sm-12",children:(0,h.jsx)("nav",{children:(0,h.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,h.jsx)("button",{className:"nav-link ".concat("nav-home"===L?"active":""),id:"nav-home-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"nav-home"===L,onClick:()=>ne("nav-home"),children:"Benutzer"}),(0,h.jsx)("button",{className:"nav-link ".concat("nav-rollen"===L?"active":""),id:"nav-rollen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-rollen","aria-selected":"nav-rollen"===L,onClick:()=>ne("nav-rollen"),children:"Passwort"}),(0,h.jsx)("button",{className:"nav-link ".concat("nav-lokalisierung"===L?"active":""),id:"nav-lokalisierung-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-lokalisierung","aria-selected":"nav-lokalisierung"===L,onClick:()=>ne("nav-lokalisierung"),children:"Lokalisierung"}),(0,h.jsx)("button",{className:"nav-link ".concat("nav-benachrichtigungen"===L?"active":""),id:"nav-benachrichtigungen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-benachrichtigungen","aria-selected":"nav-benachrichtigungen"===L,onClick:()=>ne("nav-benachrichtigungen"),children:"Benachrichtigungen"}),(0,h.jsx)("button",{className:"nav-link ".concat("nav-fortgeschrittene"===L?"active":""),id:"nav-fortgeschrittene-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-fortgeschrittene","aria-selected":"nav-fortgeschrittene"===L,onClick:()=>ne("nav-fortgeschrittene"),children:"Fortgeschrittene"})]})})})})})}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[(0,h.jsx)("div",{className:"tab-pane fade ".concat("nav-home"===L?"show active":""),id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab",children:(0,h.jsxs)("div",{className:"row mx-3",children:[(0,h.jsxs)("div",{className:"col-sm-6",children:[(0,h.jsx)("input",{className:"form-control",placeholder:"Name",type:"text",name:"username",value:Y.username,onChange:se}),(0,h.jsx)("input",{className:"form-control",placeholder:"Stra\xdfe mit Hausnummer",type:"text",name:"street",value:Y.street,onChange:se}),(0,h.jsx)("input",{className:"form-control",placeholder:"Stadt",type:"text",name:"city",value:Y.city,onChange:se}),(0,h.jsx)("input",{className:"form-control",placeholder:"Standort",type:"text",name:"location",value:Y.location,onChange:se}),(0,h.jsxs)("select",{className:"form-control",name:"role",value:Y.role,onChange:se,children:[(0,h.jsx)("option",{value:"",children:"Select Role"}),null===M||void 0===M?void 0:M.map((e=>{const{role_name:a,_id:t}=e;return(0,h.jsx)("option",{value:t,children:a},t)}))]})]}),(0,h.jsxs)("div",{className:"col-sm-6",children:[(0,h.jsx)("input",{className:"form-control",placeholder:"Vorname",type:"text",name:"lname",value:Y.lname,onChange:se}),(0,h.jsx)("input",{type:"tel",value:Y.plz,onChange:e=>{const a=e.target.value.replace(/[^0-9]/g,"");G({...Y,plz:a})},placeholder:"PLZ",className:"form-control",id:"inputPassword",maxLength:6,minLength:3,required:!0}),(0,h.jsx)("input",{className:"form-control",placeholder:"E-Mail Adresse",type:"email",name:"email",onChange:e=>{const a=e.target.value;/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a.toLowerCase())?X(a):X("")}}),(0,h.jsx)("input",{className:"form-control",placeholder:"Telefon",maxLength:10,minLength:2,type:"tel",name:"tel",value:Y.tel,onChange:e=>{const a=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(a)&&se({target:{name:"tel",value:a}})}}),(0,h.jsx)("input",{className:"form-control",placeholder:"Mobil",maxLength:10,minLength:2,type:"tel",name:"mobile",value:Y.mobile,onChange:e=>{const a=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(a)&&se({target:{name:"mobile",value:a}})}})]})]})}),(0,h.jsx)("div",{className:"tab-pane fade ".concat("nav-rollen"===L?"show active":""),id:"nav-rollen",role:"tabpanel","aria-labelledby":"nav-rollen-tab"}),(0,h.jsx)("div",{className:"tab-pane fade ".concat("nav-mannschaften"===L?"show active":""),id:"nav-mannschaften",role:"tabpanel","aria-labelledby":"nav-mannschaften-tab"})]})]}),(0,h.jsxs)(s.Z.Footer,{children:[(0,h.jsx)("button",{style:{border:"none",background:"none"}}),(0,h.jsxs)("div",{className:"btn-wrap",children:[(0,h.jsx)("button",{className:"btn btn-cancel",onClick:le,children:"Abbrechen"}),(0,h.jsx)("button",{className:"btn btn-save ms-3",onClick:async e=>{if(!Q)return c.Am.warning("Ung\xfcltige E-Mail");if(!Y.role)return c.Am.warning("Bitte geben Sie den Rollennamen ein");try{var a;e.preventDefault();const t=await(0,r.QA)("".concat(_,"/user/register"),ee);if(console.log("response",t),409===(null===t||void 0===t||null===(a=t.response)||void 0===a?void 0:a.status))return w("E-Mail existiert bereits");201===(null===t||void 0===t?void 0:t.status)&&(w("Mitarbeiter erfolgreich erstellt"),j(!C),I(!1),G({email:"",username:"",lname:"",street:"",plz:"",city:"",location:"",tel:"",mobile:"",role:"",password:"123456",user_type:"employee",timezone:"5:30"}))}catch(t){console.log(t)}},children:"Speichern"})]})]})]})]})}),(0,h.jsx)("div",{className:"row",children:(0,h.jsx)(l.Z,{rowKey:e=>e._id,rowSelection:{type:"checkbox",onChange:(e,a)=>{console.log("selectedRowKeys: ".concat(e),"selectedRows: ",a)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})},style:{overflowX:"auto"},columns:re,dataSource:B,pagination:!1})}),(0,h.jsx)("div",{className:"container-fluid pagination-row",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-md-10 ps-md-0 text-center text-md-start",children:(0,h.jsx)(p.Z,{spacing:2,children:(0,h.jsx)(b.Z,{count:q,variant:"outlined",shape:"rounded",page:V,onChange:(e,a)=>{$(a)}})})}),(0,h.jsx)("div",{className:"col-md-2 pe-md-0 mt-3 mt-md-0 text-md-end",children:(0,h.jsxs)("select",{className:"form-control form-select",value:ae,onChange:e=>{te(parseInt(e.target.value,10)),$(1)},children:[(0,h.jsx)("option",{value:10,children:"10 pro Seite"}),(0,h.jsx)("option",{value:20,children:"20 pro Seite"}),(0,h.jsx)("option",{value:50,children:"50 pro Seite"}),(0,h.jsx)("option",{value:100,children:"100 pro Seite"})]})})]})}),(0,h.jsx)("br",{})]})}),(0,h.jsx)(c.Ix,{})]})},C=n.memo(j)}}]);
//# sourceMappingURL=598.fc47e275.chunk.js.map