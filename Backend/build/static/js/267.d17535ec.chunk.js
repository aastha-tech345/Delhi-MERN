"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[267,930],{18930:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var l=s(72791),n=s(58617),t=s(84373),r=s(70828),c=s(57689),o=s(80184);const i=()=>{var e,a,s,i,m,d;const h=(0,c.s0)();let u=localStorage.getItem("tabId");const x=(e,a,s)=>(s&&"a"===s.target.tagName.toLowerCase()&&s.preventDefault(),localStorage.setItem("tabId",e),"KlientInnen"===a?h("/customer/customer_info"):"Kontakte"===a?h("/customer/contact"):"Aktivitat"===a?h("/customer/description"):"Dokumente"===a?h("/customer/document"):"Vollmachten"===a?h("/customer/attorney"):"SPV"===a?h("/customer/services"):"Rechnung"===a?h("/customer/bills"):void 0);(0,l.useEffect)((()=>{x("nav-home")}),[]);let v=localStorage.getItem("customerDatat"),b=JSON.parse(v);const p=(null===b||void 0===b||null===(e=b.fname)||void 0===e?void 0:e.slice(0,1).toUpperCase())+(null===b||void 0===b||null===(a=b.fname)||void 0===a?void 0:a.slice(1).toLowerCase()),j=(null===b||void 0===b||null===(s=b.lname)||void 0===s?void 0:s.slice(0,1).toUpperCase())+(null===b||void 0===b||null===(i=b.lname)||void 0===i?void 0:i.slice(1).toLowerCase());let N=(null===b||void 0===b||null===(m=b.street)||void 0===m?void 0:m.slice(0,1).toUpperCase())+(null===b||void 0===b||null===(d=b.street)||void 0===d?void 0:d.slice(1).toLowerCase());return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"whiteBox",children:[(0,o.jsx)("div",{className:"blueBoxTop",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-sm-4",children:[(0,o.jsxs)("p",{style:{color:"white",marginTop:"5px"},children:["KlientInnen: ","".concat(p," ").concat(j)]}),(0,o.jsx)(r.VFp,{style:{color:"white"}}),"\xa0",(0,o.jsx)("span",{style:{color:"white"},children:N})]}),(0,o.jsxs)("div",{className:"col-sm-8 mt-4 text-right",children:[(0,o.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,o.jsx)(n.Zuw,{className:"f-2"})," ",null===b||void 0===b?void 0:b.email]}),(0,o.jsxs)("button",{className:"btn btn-outline",style:{color:"white",border:"1px solid white",marginRight:"10px"},children:[(0,o.jsx)(t.HQO,{className:"f-2"})," ",null===b||void 0===b?void 0:b.phone]})]})]})}),(0,o.jsxs)("div",{className:"whiteBoxWithPdLR",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-sm-12",children:(0,o.jsx)("nav",{children:(0,o.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,o.jsxs)("button",{className:"nav-link ".concat("nav-home"===u?"active":""),id:"nav-home-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"nav-home"===u,onClick:e=>x("nav-home","KlientInnen",e),style:{marginRight:"50px",marginLeft:"20px"},children:[(0,o.jsx)("i",{className:"fa-solid fa-info fa-fw infoIcon"}),"KlientInnen"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-kontakte"===u?"active":""),id:"nav-kontakte-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"nav-kontakte","aria-selected":"nav-kontakte"===u,onClick:e=>x("nav-kontakte","Kontakte",e),style:{marginRight:"50px"},children:[" ",(0,o.jsx)("i",{className:"fa-regular fa-address-book fa-fw"}),"Kontakte"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-aufgaben"===u?"active":""),id:"nav-aufgaben-tab","data-bs-toggle":"tab","data-bs-target":"#nav-aufgaben",role:"tab","aria-controls":"nav-aufgaben","aria-selected":"nav-aufgaben"===u,onClick:e=>x("nav-aufgaben","Aktivitat",e),style:{marginRight:"50px"},children:[(0,o.jsx)("i",{className:"fa-solid fa-heart-pulse fa-fw"}),"Aktivitat"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-rechnungen"===u?"active":""),id:"nav-rechnungen-tab","data-bs-toggle":"tab","data-bs-target":"#nav-rechnungen",role:"tab","aria-controls":"nav-rechnungen","aria-selected":"nav-rechnungen"===u,onClick:e=>x("nav-rechnungen","Dokumente",e),style:{marginRight:"50px"},children:[(0,o.jsx)("i",{className:"fa-regular fa-file fa-fw"}),"Dokumente"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-beschreibung"===u?"active":""),id:"nav-beschreibung-tab","data-bs-toggle":"tab","data-bs-target":"#nav-beschreibung",role:"tab","aria-controls":"nav-beschreibung","aria-selected":"nav-beschreibung"===u,onClick:e=>x("nav-beschreibung","Vollmachten",e),style:{marginRight:"50px"},children:[(0,o.jsx)("i",{className:"fa-solid fa-paint-roller fa-fw"}),"Vollmachten"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-dokumente"===u?"active":""),id:"nav-dokumente-tab","data-bs-toggle":"tab","data-bs-target":"#nav-dokumente",role:"tab","aria-controls":"nav-dokumente","aria-selected":"nav-dokumente"===u,onClick:e=>x("nav-dokumente","SPV",e),style:{marginRight:"50px"},children:[" ",(0,o.jsx)("i",{className:"fa-regular fa-lightbulb fa-fw"}),"SPV"]}),(0,o.jsxs)("button",{className:"nav-link ".concat("nav-leistungen"===u?"active":""),id:"nav-leistungen-tab","data-bs-toggle":"tab","data-bs-target":"#nav-leistungen",role:"tab","aria-controls":"nav-leistungen","aria-selected":"nav-leistungen"===u,onClick:e=>x("nav-leistungen","Rechnung",e),style:{marginRight:"50px"},children:[(0,o.jsx)("i",{className:"fa-regular fa-file-lines fa-fw"}),"Rechnung"]})]})})})}),(0,o.jsx)("br",{})]})]})})},m=l.memo(i)},92267:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var l=s(72791),n=s(30177),t=s(29655),r=(s(5462),s(18930)),c=s(57689),o=s(80184);const i=()=>{const e=(0,c.s0)(),a=e=>(0,t.Am)(e),[s,i]=(0,l.useState)({orderNumber:"",newsletterDate:"",extras:"",newsletterSubscription:""}),[m,d]=(0,l.useState)({clientStatus:[],dataProtection:!1,employee:"",dataCollection:""}),[h,u]=(0,l.useState)(),[x,v]=(0,l.useState)({title:"",salution:"",gender:"",fname:"",lname:"",dob:""}),[b,p]=(0,l.useState)({billAddress:"",billPlz:"",billLand:"",billOrt:""}),[j,N]=(0,l.useState)(""),[g,f]=(0,l.useState)({fname:"",lname:"",address:"",plz:"",land:"",ort:"",phone:"",mobile:"",alreadyPaid:!1}),[w,y]=(0,l.useState)({deposit:"",emergencyPass:"",updateStamp:"",nextBrand:""}),[k,P]=(0,l.useState)({termination:!1,terminationDeath:!1,notTermination:!1,financialReasons:!1});let C=localStorage.getItem("customerDatat"),S=JSON.parse(C);const D={...{orderingMaterials:s,customerInfoStatu:m,those:h,customerContact:x,customerBills:b,customerDelivery:g,customerDeposit:w,customerBurial:k,customer_id:S._id},email:j},F=e=>{const{name:a,value:l}=e.target;i({...s,[a]:l})},L=e=>{const{name:a,value:s}=e.target;d({...m,[a]:s})},A=e=>{const{name:a,value:s,type:l,checked:n}=e.target,t="radio"===l?n?s:"":s;v({...x,[a]:t})},I=e=>{const{name:a,value:s}=e.target;p({...b,[a]:s})},M=e=>{const{name:a,value:s}=e.target;f({...g,[a]:s})},V=e=>{const{name:a,value:s,type:l,checked:n}=e.target,t="checkbox"===l?n:s;y({...w,[a]:t})},R=e=>{const{name:a,checked:s}=e.target;P({...k,[a]:s})};return(0,o.jsxs)("div",{style:{background:"#fff",border:"none"},children:[(0,o.jsx)(r.default,{}),(0,o.jsx)("h5",{className:"px-3",children:"KlientInnen"}),(0,o.jsx)("hr",{className:"mx-3"}),(0,o.jsxs)("div",{className:"m-3",style:{border:"1px solid lightgray",borderRadius:"5px"},children:[(0,o.jsx)("h3",{className:"bluetext p-2",children:"Materialbestellung"}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-sm-3",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-9 col-form-label text-right",children:"Bestellte Anzahl Frageb\xf6gen"}),(0,o.jsx)("div",{className:"col-sm-3",children:(0,o.jsx)("input",{type:"number",value:s.orderNumber,name:"orderNumber",onChange:F,className:"form-control"})})]})}),(0,o.jsx)("div",{className:"col-sm-2",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label text-left",children:"Extras"}),(0,o.jsx)("div",{className:"col-sm-7",children:(0,o.jsx)("input",{type:"text",name:"extras",value:s.extras,onChange:F,className:"form-control",placeholder:"Extras"})})]})}),(0,o.jsx)("div",{className:"col-sm-3",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-6 col-form-label text-right",children:"Newsletter-Datum"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"date",name:"newsletterDate",value:s.newsletterDate,onChange:F,className:"form-control",placeholder:"01/09/2000"})})]})}),(0,o.jsx)("div",{className:"col-sm-4",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-6 col-form-label text-left",children:"Newsletter-Abonnement"}),(0,o.jsxs)("div",{className:"col-sm-5 mt-2",children:[(0,o.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"active",checked:"active"===s.newsletterSubscription,onChange:F}),"\xa0Aktiv \xa0",(0,o.jsx)("input",{type:"radio",name:"newsletterSubscription",value:"inactive",checked:"inactive"===s.newsletterSubscription,onChange:F}),"\xa0Inaktiv"]})]})})]}),(0,o.jsx)("br",{}),(0,o.jsx)("hr",{className:"mx-3"}),(0,o.jsx)("h3",{className:"bluetext mx-3",children:"status"}),(0,o.jsxs)("div",{className:"row p-3",children:[(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Status"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)(n.ZP,{className:"form-multi-select",name:"clientStatus",onChange:(e,a)=>{const s=a&&a.name;if(s){const a=e&&void 0!==e.value?e.value:e;d((e=>({...e,[s]:a})))}},value:m.clientStatus,id:"ms1",isMulti:!0,options:[{value:"0",label:"HVD-PV"},{value:"1",label:"SPV alt"},{value:"2",label:"OPV alt"},{value:"3",label:"Dauerspenderlnner"},{label:"Backend",options:[{value:"4",label:"Materialbestellung"},{value:"5",label:"Newsletter Abonnent"},{value:"6",label:"Offen"}]}]})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"MitarbeiterInnen"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsxs)("select",{onChange:L,value:m.employee,className:"form-control",name:"employee",defaultValue:"MitarbeiterInnen",children:[(0,o.jsx)("option",{value:"MitarbeiterInnen",children:"MitarbeiterInnen"}),(0,o.jsx)("option",{value:"SPV alt",children:"SPV alt"}),(0,o.jsx)("option",{value:"OPV alt",children:"OPV alt"}),(0,o.jsx)("option",{value:"Dauerspenderlnner",children:"Dauerspenderlnner"}),(0,o.jsx)("option",{value:"Hinterlegende",children:"Hinterlegende"}),(0,o.jsx)("option",{value:"Materialbestellung",children:"Materialbestellung"}),(0,o.jsx)("option",{value:"Newsletter Abonnent",children:"Newsletter Abonnent"}),(0,o.jsx)("option",{value:"offen",children:"offen"})]})})]}),(0,o.jsx)("div",{})]}),(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Zustimmung Datenschutz"}),(0,o.jsx)("div",{className:"col-sm-6 mt-2",children:(0,o.jsx)("input",{type:"checkbox",name:"dataProtection",onChange:L,value:m.dataProtection,id:"inputPassword"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputDate",className:"col-sm-4 col-form-label",children:"Datum Datenerfassung"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{placeholder:"10.10.23",id:"inputDate",type:"date",className:"form-control",name:"dataCollection",onChange:L,value:m.dataCollection})})]})]})]}),(0,o.jsx)("hr",{className:"mx-3"}),(0,o.jsxs)("div",{className:"row p-3",children:[(0,o.jsx)("h3",{className:"bluetext",children:"Quelle"}),(0,o.jsx)("div",{className:"col-sm-4",children:(0,o.jsxs)("select",{className:"form-control",value:h,onChange:e=>{u(e.target.value)},children:[(0,o.jsx)("option",{value:"alte db",children:"Alte DB"}),(0,o.jsx)("option",{value:"formula",children:"Formular"}),(0,o.jsx)("option",{value:"call",children:"Call"}),(0,o.jsx)("option",{value:"email",children:"E-mail"}),(0,o.jsx)("option",{value:"order",children:"Auftag"})]})})]}),(0,o.jsx)("br",{})]}),(0,o.jsxs)("div",{className:"p-3 mx-3",style:{border:"1px solid lightgray",borderRadius:"5px"},children:[(0,o.jsx)("h3",{className:"bluetext mx-3",children:"Kontaktdaten"}),(0,o.jsxs)("div",{className:"row p-3",children:[(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Titel"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",value:x.title,name:"title",onChange:A,className:"form-control",placeholder:"Titel"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Anrede"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsxs)("select",{className:"form-control",value:x.salution,name:"salution",onChange:A,children:[(0,o.jsx)("option",{children:"Anrede"}),(0,o.jsx)("option",{value:"herr",children:"Herr"}),(0,o.jsx)("option",{value:"fray",children:"Fray"}),(0,o.jsx)("option",{value:"divers",children:"Divers"})]})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",placeholder:"Vornamen",value:x.fname,name:"fname",onChange:A,className:"form-control",id:"inputPassword"})})]}),(0,o.jsx)("br",{})]}),(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Geburtsdatum"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"date",value:x.dob,name:"dob",onChange:A,className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Geschlecht"}),(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsx)("input",{type:"radio",id:"male",value:"M\xe4nnlich",name:"gender",onChange:A,checked:"M\xe4nnlich"===x.gender}),"\xa0M\xe4nnlich\xa0",(0,o.jsx)("input",{type:"radio",id:"female",value:"Weiblich",name:"gender",onChange:A,checked:"Weiblich"===x.gender}),"\xa0Weiblich\xa0",(0,o.jsx)("input",{type:"radio",id:"divers",value:"Divers",name:"gender",onChange:A,checked:"Divers"===x.gender}),"\xa0Divers"]})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Name"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",className:"form-control",id:"inputPassword",placeholder:"Name",name:"lname",onChange:A,value:x.lname})})]})]})]}),(0,o.jsx)("h6",{className:"mx-3",children:"Rechnungsadresse"}),(0,o.jsxs)("div",{className:"row p-3",children:[(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",onChange:I,name:"billAddress",placeholder:"Stra\xdfe mit Hausnummer",value:b.billAddress,className:"form-control",id:"inputPassword"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"PLZ"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"tel",value:b.billPlz,onChange:e=>{const a=e.target.value.replace(/[^0-9]/g,"");p({...b,billPlz:a})},placeholder:"PLZ",className:"form-control",id:"inputPassword",maxLength:6,minLength:3,required:!0})})]})]}),(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputText",className:"col-sm-4 col-form-label",children:"Ort"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",onChange:I,name:"billOrt",placeholder:"Ort",value:b.billOrt,className:"form-control",id:"inputText"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Land"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",onChange:I,name:"billLand",placeholder:"Land",value:b.billLand,className:"form-control",id:"inputPassword"})})]})]})]}),(0,o.jsx)("h6",{className:"mx-3",children:"Lieferadresse c/o"}),(0,o.jsxs)("div",{className:"row p-3",children:[(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Vornamen"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",onChange:M,name:"fname",placeholder:"Vornamen",value:g.fname,className:"form-control",id:"inputPassword"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Stra\xdfe mit Hausnummer"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",onChange:M,name:"address",placeholder:"Stra\xdfe mit Hausnummer",value:g.address,className:"form-control",id:"inputPassword"})})]}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Ort"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",onChange:M,name:"ort",placeholder:"Ort",value:g.ort,className:"form-control",id:"inputPassword"})})]}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"E-Mail Adresse"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"email",onChange:e=>{const a=e.target.value;/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a.toLowerCase())?N(a):N("")},name:"email",placeholder:"E-Mail Adresse",value:g.email,className:"form-control",id:"inputPassword"})})]}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Mobil"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{onChange:e=>{const a=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(a)&&M({target:{name:"mobile",value:a}})},name:"mobile",value:g.mobile,type:"tel",placeholder:"Mobil",className:"form-control",id:"inputTelephone",maxLength:10,minLength:3})})]})]}),(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Name"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",placeholder:"Name",onChange:M,name:"lname",value:g.lname,className:"form-control",id:"inputPassword"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"PLZ"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"tel",value:g.plz,onChange:e=>{const a=e.target.value.replace(/[^0-9]/g,"");f({...g,plz:a})},placeholder:"PLZ",className:"form-control",id:"inputPassword",maxLength:6,minLength:3,required:!0})})]}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Land"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"text",onChange:M,name:"land",placeholder:"Land",value:g.land,className:"form-control",id:"inputPassword"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Telefon"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{onChange:e=>{const a=e.target.value.replace(/[^0-9+]/g,"");/^\+?[0-9]*$/.test(a)&&M({target:{name:"phone",value:a}})},name:"phone",value:g.phone,className:"form-control",type:"tel",placeholder:"Telefon",id:"inputTelephone",maxLength:10,minLength:3})})]}),(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Bereits bezahlt"}),(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsx)("input",{onChange:M,name:"alreadyPaid",value:g.alreadyPaid,type:"checkbox"}),"\xa0 ja"]})]})]})]}),(0,o.jsx)("hr",{}),(0,o.jsx)("h3",{className:"bluetext mx-3",children:"Hinterlegung"}),(0,o.jsxs)("div",{className:"row p-3",children:[(0,o.jsxs)("div",{className:"col-sm-4",children:[(0,o.jsx)("input",{type:"checkbox",onChange:V,checked:w.deposit,name:"deposit"}),"\xa0\xa0Hinterlegung\xa0[ja]"]}),(0,o.jsx)("div",{className:"col-sm-4"}),(0,o.jsx)("div",{className:"col-sm-4"})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"row p-3",children:[(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Hinterlegungsbeginn"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"date",onChange:V,value:w.startDeposit,name:"startDeposit",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Versand der n\xe4chsten Marke"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"date",onChange:V,value:w.nextBrand,name:"nextBrand",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]})]}),(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsxs)("div",{className:"mb-5 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Aktualisierungsmarke Versand der letzten Marke - Monat + Jahr"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"date",onChange:V,value:w.updateStamp,name:"updateStamp",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]}),(0,o.jsxs)("div",{className:"mb-5 row ",children:[(0,o.jsx)("label",{className:"col-sm-4 col-form-label",children:"R\xfccksendung letzte Marke"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"date",onChange:V,value:w.lastStamp,name:"lastStamp",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]})]})]}),(0,o.jsxs)("div",{className:"row p-3",children:[(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("div",{className:"mb-6 row",children:(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsx)("input",{type:"checkbox",onChange:V,checked:w.emergencyPass,name:"emergencyPass"})," ","\xa0 \xa0 Notfallpass"]})})}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsxs)("div",{className:"mb-6 row",children:[(0,o.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-4 col-form-label",children:"Erinnerung Marke"}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("input",{type:"date",onChange:V,value:w.reminderStamp,name:"reminderStamp",className:"form-control",placeholder:"10.10.23",id:"inputDate"})})]})})]}),(0,o.jsx)("h3",{className:"bluetext mx-3",children:"Beedigung"}),(0,o.jsxs)("div",{className:"row p-3",children:[(0,o.jsxs)("div",{className:"col-sm-3",children:[(0,o.jsx)("input",{type:"checkbox",onChange:R,checked:k.termination,name:"termination"}),"\xa0 \xa0 Beendigung auf eigenen Wunsch"]}),(0,o.jsxs)("div",{className:"col-sm-2",children:[(0,o.jsx)("input",{type:"checkbox",onChange:R,checked:k.terminationDeath,name:"terminationDeath"}),"\xa0 Beendigung durch Tod"]}),(0,o.jsxs)("div",{className:"col-sm-3",children:[(0,o.jsx)("input",{type:"checkbox",onChange:R,checked:k.notTermination,name:"notTermination"}),"\xa0 \xa0 Beendigung weil nicht ermittelbar"]}),(0,o.jsxs)("div",{className:"col-sm-4",children:[(0,o.jsx)("input",{type:"checkbox",onChange:R,checked:k.financialReasons,name:"financialReasons"}),"\xa0 \xa0 Beendigung aus finanziellen Gr\xfcnden"]})]})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-sm-9"}),(0,o.jsxs)("div",{className:"col-sm-3",children:[(0,o.jsx)("button",{type:"button",className:"btn btn",onClick:()=>{e("/customerlist")},style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,o.jsx)("button",{type:"button",style:{background:"#0b5995",color:"white"},className:"btn btn",onClick:async e=>{if(e.preventDefault(),!j)return a("Invalid Email");try{let e=await fetch("".concat("http://95.217.77.208:4142","/customerInfo/create_info"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)}),s=await e.json();"CustomerInfo was created"===(null===s||void 0===s?void 0:s.message)&&(a("Data saved successfully!"),i({orderNumber:"",newsletterDate:"",extras:""}),d({clientStatus:"",employee:"",dataCollection:""}),u(""),N(""),v({title:"",salution:"",gender:"",fname:"",dob:"",name:""}),p({billAddress:"",billPlz:"",billLand:"",billOrt:""}),f({fname:"",lname:"",address:"",plz:"",land:"",ort:"",phone:"",mobile:""}),y({deposit:"",startDeposit:"",nextBrand:"",updateStamp:"",lastStamp:"",emergencyPass:"",reminderStamp:""}),P(""))}catch(s){console.log("Error saving data:",s),a("Error saving data. Please try again.")}},children:"Speichern"})]})]}),(0,o.jsx)("br",{}),(0,o.jsx)(t.Ix,{})]})},m=l.memo(i)}}]);
//# sourceMappingURL=267.d17535ec.chunk.js.map