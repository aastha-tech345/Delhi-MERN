"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[467,118],{51118:(e,s,n)=>{n.r(s),n.d(s,{default:()=>r});var l=n(72791),o=n(57689),a=n(20458),i=n(70828),c=n(80184);const t=()=>{const e=(0,o.s0)();let s=localStorage.getItem("tabId")||"nav-benutzer";const n=(s,n,l)=>(l&&"a"===l.target.tagName.toLowerCase()&&l.preventDefault(),localStorage.setItem("tabId",s),"user"===n?e("/settings/createuser"):"role"===n?e("/settings/role"):void 0);return(0,l.useEffect)((()=>{localStorage.setItem("tabId","nav-benutzer")}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"row mx-1",style:{background:"white"},children:[(0,c.jsx)("nav",{children:(0,c.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,c.jsxs)("button",{className:"nav-link ".concat("nav-benutzer"===s?"active":""),id:"nav-benutzer-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"nav-benutzer"===s,onClick:e=>n("nav-benutzer","user",e),style:{marginRight:"60px",marginLeft:"20px"},children:[(0,c.jsx)(a.WCB,{}),"\xa0 Mitarbeiterlnnen"]}),(0,c.jsxs)("button",{className:"nav-link ".concat("nav-rollen"===s?"active":""),id:"nav-rollen-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-rollen","aria-selected":"nav-rollen"===s,onClick:e=>n("nav-rollen","role",e),style:{marginRight:"60px"},children:[(0,c.jsx)(i.JjM,{}),"\xa0 Rollen"]})]})}),(0,c.jsx)("br",{})]})})},r=l.memo(t)},67467:(e,s,n)=>{n.r(s),n.d(s,{default:()=>p});var l=n(72791),o=n(48096),a=n(16856),i=n(19129),c=n(51118),t=n(99355),r=n(29655),d=(n(5462),n(58482)),m=n(80184);const h=e=>{let{setOpenModal:s,roleID:n}=e;const{setEditEmployee:o,editEmployee:a}=(0,l.useContext)(d.x),[i,c]=(0,l.useState)(""),[h,x]=(0,l.useState)({p_edit:"no",p_show:"no",p_delete:"no",p_export:"no",section_name:"Klientlnnen",ownership_check:"false"}),[u,v]=(0,l.useState)({p_edit:"no",p_show:"no",p_delete:"no",p_export:"no",section_name:"Dashboard",ownership_check:"false"}),[j,p]=(0,l.useState)({p_edit:"no",p_show:"no",p_delete:"no",p_export:"no",section_name:"Einstellungen",ownership_check:"false"}),[N,g]=(0,l.useState)({role_name:i,permission:[],added_by:"admin"}),b=e=>{const{name:s,value:n}=e.target;x({...h,[s]:n})},_=e=>{const{name:s,value:n}=e.target;v({...u,[s]:n})},w=e=>{const{name:s,value:n}=e.target;p({...j,[s]:n})};(0,l.useEffect)((()=>{g((e=>({...e,role_name:i,permission:[h,u,j]})))}),[i,h,u,j]);const y=()=>{s(!1)};return(0,m.jsxs)("div",{className:"modal",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)",maxHeight:"100%",color:"black"},children:[(0,m.jsx)("div",{className:"modal-dialog modal-dialog-centered  ",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h5",{className:"modal-title",children:"Rolle erstellen"}),(0,m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:y})]}),(0,m.jsxs)("div",{className:"m-auto me-4 ms-4 mt-2",children:[(0,m.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",name:"rolePermission",value:i,onChange:e=>{c(e.target.value)}}),(0,m.jsx)("h5",{className:"mt-2 fw-bold",children:"Berechtigungen"}),(0,m.jsx)("h5",{className:"mt-3 fw-bold",children:"Klientlnnen"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"row",onClick:()=>{return e="Klientlnnen",void x((s=>({...s,section_name:e})));var e},children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Anzeigen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_show",value:h.p_show,onChange:b,children:[(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Bearbeiten"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_edit",value:h.p_edit,onChange:b,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"L\xf6schen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_delete",value:h.p_delete,onChange:b,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Exportieren"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_export",value:h.p_export,onChange:b,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]})]}),(0,m.jsx)("h5",{className:"mt-3 fw-bold",children:"Dashboard"}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"row",onClick:()=>{return e="Dashboard",void v((s=>({...s,section_name:e})));var e},children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Anzeigen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_show",value:u.p_show,onChange:_,children:[(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Bearbeiten"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{name:"p_edit",value:u.p_edit,style:{border:"none",background:"none"},onChange:_,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"L\xf6schen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_delete",value:u.p_delete,onChange:_,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Exportieren"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{name:"p_export",value:u.p_export,style:{border:"none",background:"none"},onChange:_,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]})]})}),(0,m.jsx)("h5",{className:"mt-3 fw-bold",children:"Setting"}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"row",onClick:()=>{return e="Einstellungen",void p((s=>({...s,section_name:e})));var e},children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Anzeigen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_show",value:j.p_show,onChange:w,children:[(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Bearbeiten"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{name:"p_edit",value:j.p_edit,style:{border:"none",background:"none"},onChange:w,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),"s",(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"L\xf6schen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_delete",value:j.p_delete,onChange:w,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Exportieren"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{name:"p_export",value:j.p_export,style:{border:"none",background:"none"},onChange:w,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]})]})})]}),(0,m.jsxs)("div",{className:"modal-footer",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-secondary w-25","data-bs-dismiss":"modal",onClick:y,style:{background:"#015291",color:"white"},children:"Abbrechen"}),(0,m.jsx)("button",{type:"button",className:"btn w-25",onClick:async e=>{try{e.preventDefault();const i=await(0,t.yu)("".concat("http://95.217.77.208:4142","/role/get_role/").concat(n),N);console.log("updatedRole",i),200===(null===i||void 0===i?void 0:i.status)&&(o(!a),l="Role Updated Successfully",(0,r.Am)(l),setTimeout((()=>{s(!1)}),2e3))}catch(i){console.log(i)}var l},style:{background:"#d04545",color:"white"},children:"Aktualisieren"})]})]})}),(0,m.jsx)(r.Ix,{})]})},x=e=>{let{data:s}=e;const[n,o]=(0,l.useState)(""),[a,i]=(0,l.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"row m-3",children:(0,m.jsx)("div",{style:{border:"1px solid lightgray",borderRadius:"5px"},children:(0,m.jsxs)("table",{className:"table table",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"ID"}),(0,m.jsx)("th",{children:"Role"}),(0,m.jsx)("th",{children:"Edit"}),(0,m.jsx)("th",{children:"Delete"})]})}),(0,m.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((e=>{const{_id:s,role_name:n}=e;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:"323"}),(0,m.jsx)("td",{children:n}),(0,m.jsx)("td",{children:(0,m.jsx)("button",{className:"btn",style:{background:"none",border:"none"},onClick:()=>{return e=s,i(!0),void o(e);var e},children:"Edit"})}),(0,m.jsx)("td",{children:"Delete"})]})})}))})]})})}),(0,m.jsx)(r.Ix,{}),a?(0,m.jsx)(h,{setOpenModal:i,roleID:n}):""]})};var u=n(98745),v=n(1582);const j=()=>{const{editEmployee:e,setEditEmployee:s}=(0,l.useContext)(d.x),n="http://95.217.77.208:4142",[h,j]=(0,l.useState)(1),[p,N]=(0,l.useState)(0),[g,b]=(0,l.useState)([]),[_,w]=(0,l.useState)(!1),[y,k]=(0,l.useState)(""),[C,f]=(0,l.useState)({p_edit:"no",p_show:"no",p_delete:"no",p_export:"no",section_name:"Klientlnnen",ownership_check:"false"}),[z,B]=(0,l.useState)({p_edit:"no",p_show:"no",p_delete:"no",p_export:"no",section_name:"Dashboard",ownership_check:"false"}),[E,S]=(0,l.useState)({p_edit:"no",p_show:"no",p_delete:"no",p_export:"no",section_name:"Einstellungen",ownership_check:"false"}),[Y,D]=(0,l.useState)({role_name:y,permission:[C,z],added_by:"admin"}),I=e=>{const{name:s,value:n}=e.target;f({...C,[s]:n})},R=e=>{const{name:s,value:n}=e.target;B({...z,[s]:n})},A=e=>{const{name:s,value:n}=e.target;S({...E,[s]:n})};(0,l.useEffect)((()=>{D((e=>({...e,role_name:y,permission:[C,z,E]})))}),[y,C,z,E]);(0,l.useEffect)((()=>{D((e=>({...e,role_name:y,permission:[C,z,E]})))}),[y,C,z,E]);const L=()=>w(!1);return(0,l.useEffect)((()=>{(async()=>{try{var e,s;const l=await(0,t.wY)("".concat(n,"/role/get_role?page=").concat(h));N(null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.pageCount),b(null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.data)}catch(l){console.log(l)}})()}),[e,h]),(0,m.jsxs)("div",{style:{background:"white"},children:[(0,m.jsx)(c.default,{}),(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("center",{className:"mx-auto",children:[(null===g||void 0===g?void 0:g.length)>0?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{data:g,countPage:p}),(0,m.jsx)(v.Z,{spacing:2,children:(0,m.jsx)(u.Z,{count:p,variant:"outlined",shape:"rounded",page:h,onChange:(e,s)=>{j(s)}})})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.WiM,{style:{fontSize:"50px",marginTop:"100px"}}),(0,m.jsx)("p",{children:"Keine Rollen"}),(0,m.jsx)("p",{children:"Beginnen Sie mit der Erstellung einer neuen Rolle."})]}),(0,m.jsxs)("div",{className:"col-sm-3",children:[(0,m.jsxs)("button",{className:"btn btn mb-5",style:{background:"#0b5995",color:"white"},onClick:()=>w(!0),children:[(0,m.jsx)(a.x06,{}),"\xa0 Rolle erstellen"]}),(0,m.jsxs)(o.Z,{show:_,onHide:L,centered:!0,size:"large",children:[(0,m.jsx)(o.Z.Header,{closeButton:!0,children:(0,m.jsx)(o.Z.Title,{children:"Rolle erstellen"})}),(0,m.jsxs)(o.Z.Body,{children:[(0,m.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",name:"rolePermission",value:y,onChange:e=>{k(e.target.value)}}),(0,m.jsx)("h5",{className:"mt-2 fw-bold",children:"Berechtigungen"}),(0,m.jsx)("h5",{className:"mt-3 fw-bold",children:"Klientlnnen"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"row",onClick:()=>{return e="Klientlnnen",void f((s=>({...s,section_name:e})));var e},children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Anzeigen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_show",value:C.p_show,onChange:I,children:[(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Bearbeiten"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_edit",value:C.p_edit,onChange:I,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"L\xf6schen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_delete",value:C.p_delete,onChange:I,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Exportieren"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_export",value:C.p_export,onChange:I,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]})]}),(0,m.jsx)("h5",{className:"mt-3 fw-bold",children:"Dashboard"}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"row",onClick:()=>{return e="Dashboard",void B((s=>({...s,section_name:e})));var e},children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Anzeigen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_show",value:z.p_show,onChange:R,children:[(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Bearbeiten"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{name:"p_edit",value:z.p_edit,style:{border:"none",background:"none"},onChange:R,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"L\xf6schen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_delete",value:z.p_delete,onChange:R,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Exportieren"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{name:"p_export",value:z.p_export,style:{border:"none",background:"none"},onChange:R,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]})]})}),(0,m.jsx)("h5",{className:"mt-3 fw-bold",children:"Setting"}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"row",onClick:()=>{return e="Einstellungen",void S((s=>({...s,section_name:e})));var e},children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Anzeigen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_show",value:E.p_show,onChange:A,children:[(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Bearbeiten"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{name:"p_edit",value:E.p_edit,style:{border:"none",background:"none"},onChange:A,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),"s",(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"L\xf6schen"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{style:{border:"none",background:"none"},name:"p_delete",value:E.p_delete,onChange:A,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-3 mt-2",children:"Exportieren"}),(0,m.jsx)("div",{className:"col-sm-5"}),(0,m.jsx)("div",{className:"col-sm-4 mt-2",children:(0,m.jsx)("div",{className:"input-group",children:(0,m.jsxs)("select",{name:"p_export",value:E.p_export,style:{border:"none",background:"none"},onChange:A,children:[(0,m.jsx)("option",{value:"owned",children:"Nur im Besitz"}),(0,m.jsx)("option",{value:"no",children:"No"}),(0,m.jsx)("option",{value:"yes",children:"Yes"})]})})})]})]})})]}),(0,m.jsxs)(o.Z.Footer,{children:[(0,m.jsx)("button",{className:"btn btn",onClick:L,style:{background:"#d04545",color:"white"},children:"Abbrechen"}),(0,m.jsx)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},onClick:async l=>{try{l.preventDefault();const a=await(0,t.QA)("".concat(n,"/role/create_role"),Y);if(201===(null===a||void 0===a?void 0:a.status))return s(!e),o="Role Created Successfully",(0,r.Am)(o),w(!1)}catch(a){console.log(a)}var o},children:"Einreichen"})]})]})]})]})}),(0,m.jsx)(r.Ix,{})]})},p=l.memo(j)}}]);
//# sourceMappingURL=467.23401ede.chunk.js.map