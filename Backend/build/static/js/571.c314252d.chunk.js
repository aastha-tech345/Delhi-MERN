"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[571],{95850:(e,l,a)=>{a.d(l,{A:()=>o});a(65043);var n=a(81637),t=a(27642),s=a(70579);const o=()=>(0,s.jsx)(t.A,{sx:{color:"grey.500"},spacing:2,direction:"row",children:(0,s.jsx)(n.A,{color:"success",size:20})})},40571:(e,l,a)=>{a.r(l),a.d(l,{default:()=>I});var n=a(65043),t=a(98139),s=a.n(t),o=a(35296),r=a(99310),i=a(94414),c=a(7060),d=a(78365);const m=e=>{const{componentCls:l,sizePaddingEdgeHorizontal:a,colorSplit:n,lineWidth:t,textPaddingInline:s,orientationMargin:o,verticalMarginInline:c}=e;return{[l]:Object.assign(Object.assign({},(0,i.dF)(e)),{borderBlockStart:"".concat((0,r.zA)(t)," solid ").concat(n),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:c,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat((0,r.zA)(t)," solid ").concat(n)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat((0,r.zA)(e.dividerHorizontalGutterMargin)," 0")},["&-horizontal".concat(l,"-with-text")]:{display:"flex",alignItems:"center",margin:"".concat((0,r.zA)(e.dividerHorizontalWithTextGutterMargin)," 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(n),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat((0,r.zA)(t)," solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},["&-horizontal".concat(l,"-with-text-left")]:{"&::before":{width:"calc(".concat(o," * 100%)")},"&::after":{width:"calc(100% - ".concat(o," * 100%)")}},["&-horizontal".concat(l,"-with-text-right")]:{"&::before":{width:"calc(100% - ".concat(o," * 100%)")},"&::after":{width:"calc(".concat(o," * 100%)")}},["".concat(l,"-inner-text")]:{display:"inline-block",paddingBlock:0,paddingInline:s},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:"".concat((0,r.zA)(t)," 0 0")},["&-horizontal".concat(l,"-with-text").concat(l,"-dashed")]:{"&::before, &::after":{borderStyle:"dashed none none"}},["&-vertical".concat(l,"-dashed")]:{borderInlineStartWidth:t,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},["&-plain".concat(l,"-with-text")]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},["&-horizontal".concat(l,"-with-text-left").concat(l,"-no-default-orientation-margin-left")]:{"&::before":{width:0},"&::after":{width:"100%"},["".concat(l,"-inner-text")]:{paddingInlineStart:a}},["&-horizontal".concat(l,"-with-text-right").concat(l,"-no-default-orientation-margin-right")]:{"&::before":{width:"100%"},"&::after":{width:0},["".concat(l,"-inner-text")]:{paddingInlineEnd:a}}})}},h=(0,c.OF)("Divider",(e=>{const l=(0,d.h1)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[m(l)]}),(e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS})),{unitless:{orientationMargin:!0}});var u=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};const v=e=>{const{getPrefixCls:l,direction:a,divider:t}=n.useContext(o.QO),{prefixCls:r,type:i="horizontal",orientation:c="center",orientationMargin:d,className:m,rootClassName:v,children:x,dashed:p,plain:g,style:j}=e,b=u(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),f=l("divider",r),[N,C,w]=h(f),y=c.length>0?"-".concat(c):c,k=!!x,S="left"===c&&null!=d,L="right"===c&&null!=d,z=s()(f,null===t||void 0===t?void 0:t.className,C,w,"".concat(f,"-").concat(i),{["".concat(f,"-with-text")]:k,["".concat(f,"-with-text").concat(y)]:k,["".concat(f,"-dashed")]:!!p,["".concat(f,"-plain")]:!!g,["".concat(f,"-rtl")]:"rtl"===a,["".concat(f,"-no-default-orientation-margin-left")]:S,["".concat(f,"-no-default-orientation-margin-right")]:L},m,v),A=n.useMemo((()=>"number"===typeof d?d:/^\d+$/.test(d)?Number(d):d),[d]),F=Object.assign(Object.assign({},S&&{marginLeft:A}),L&&{marginRight:A});return N(n.createElement("div",Object.assign({className:z,style:Object.assign(Object.assign({},null===t||void 0===t?void 0:t.style),j)},b,{role:"separator"}),x&&"vertical"!==i&&n.createElement("span",{className:"".concat(f,"-inner-text"),style:F},x)))};var x=a(29382),p=a(37376),g=a(27149),j=a(47503),b=(a(92342),a(11760)),f=a(70579);const N=e=>{let{setHide:l,contactId:a,getDetails:n}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"modal",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.5)",maxHeight:"100%",color:"black"},children:(0,f.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,f.jsxs)("div",{className:"modal-content",children:[(0,f.jsxs)(p.A.Title,{children:[(0,f.jsxs)("svg",{style:{marginLeft:"40%",marginTop:"25px"},width:"44",height:"53",viewBox:"0 0 44 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9193 0C19.9914 0 24.0636 0 28.1357 0C28.1978 0.0248302 28.2599 0.0620762 28.322 0.0744913C30.5194 0.397284 32.2948 2.30921 32.3941 4.50668C32.4313 5.13985 32.4562 5.77302 32.481 6.44343C32.7169 6.44343 32.928 6.44343 33.1266 6.44343C35.1751 6.46826 37.236 6.4186 39.2845 6.51792C41.4199 6.62966 43.158 8.35535 43.4808 10.5032C43.7912 12.6634 42.5745 14.8236 40.5632 15.5561C40.1287 15.7175 40.017 15.9286 40.017 16.3631C40.0294 26.1586 40.0294 35.9541 40.0294 45.7496C40.0294 46.271 40.0046 46.78 39.9425 47.3015C39.6569 50.008 37.7202 52.2179 35.0882 52.851C34.9144 52.8883 34.7281 52.9503 34.5543 53C26.199 53 17.856 53 9.50069 53C9.40137 52.9628 9.31446 52.9131 9.21514 52.9007C8.03571 52.6896 6.99284 52.1806 6.11137 51.3488C4.59673 49.9211 4.0008 48.1333 4.0008 46.0848C4.0008 36.1651 4.00081 26.2455 4.01322 16.3258C4.01322 15.8913 3.88907 15.7051 3.47937 15.5685C2.62273 15.283 1.9399 14.7243 1.41847 13.9918C0.363183 12.4896 0.164543 10.8632 0.946693 9.19958C1.67918 7.62286 2.95794 6.61724 4.70846 6.51792C6.76937 6.40618 8.84269 6.45585 10.916 6.43102C11.1146 6.43102 11.3133 6.43102 11.574 6.43102C11.574 5.922 11.5616 5.48747 11.574 5.04053C11.5988 3.35207 12.1948 1.91192 13.6101 0.955961C14.3053 0.521433 15.1495 0.310377 15.9193 0ZM37.5464 15.9286C27.1674 15.9286 16.8504 15.9286 6.50865 15.9286C6.50865 16.1024 6.50865 16.2389 6.50865 16.3755C6.50865 26.2952 6.50865 36.2148 6.50865 46.1345C6.50865 46.4821 6.53348 46.8297 6.59556 47.1649C6.90593 49.1637 8.44541 50.517 10.4442 50.517C18.1788 50.5294 25.901 50.517 33.6356 50.517C34.604 50.517 35.4606 50.219 36.1807 49.561C37.2112 48.6175 37.5464 47.4008 37.5464 46.06C37.5464 36.19 37.5464 26.32 37.5464 16.45C37.5464 16.2886 37.5464 16.1272 37.5464 15.9286ZM21.9779 13.4083C27.4157 13.4083 32.841 13.4083 38.2789 13.4083C38.5396 13.4083 38.8003 13.3959 39.0486 13.371C40.1039 13.2593 40.886 12.4647 40.9978 11.4219C41.1095 10.3542 40.4887 9.36098 39.4707 9.06301C39.1355 8.96369 38.763 8.93886 38.403 8.93886C27.4901 8.92645 16.5649 8.93886 5.65201 8.93886C5.3913 8.93886 5.13058 8.95128 4.88228 8.98852C3.82699 9.14992 3.06967 10.0066 3.00759 11.0867C2.94552 12.0923 3.6656 13.0855 4.65881 13.3214C5.00643 13.4083 5.37888 13.4083 5.73891 13.4083C11.1395 13.4083 16.5649 13.4083 21.9779 13.4083ZM14.0446 6.40619C19.3955 6.40619 24.6595 6.40619 29.9235 6.40619C29.9235 5.7606 29.9732 5.16468 29.9111 4.56875C29.7869 3.41415 28.8558 2.50785 27.6888 2.50785C23.9146 2.48302 20.128 2.48302 16.3538 2.50785C15.2489 2.52026 14.3177 3.31483 14.1439 4.40736C14.0322 5.05294 14.0694 5.72336 14.0446 6.40619Z",fill:"#C20F0F"}),(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9322 32.217C15.9322 35.9787 15.9322 39.7405 15.9322 43.4899C15.9322 44.5576 15.5101 45.1287 14.7156 45.1411C13.9086 45.1535 13.4492 44.5576 13.4492 43.4775C13.4492 35.9415 13.4492 28.4055 13.4492 20.8696C13.4492 20.6337 13.474 20.3854 13.5237 20.1495C13.6479 19.5784 14.1072 19.2308 14.6783 19.2308C15.237 19.2184 15.7212 19.566 15.8577 20.1123C15.9198 20.3481 15.9198 20.584 15.9198 20.8323C15.9322 24.6189 15.9322 28.418 15.9322 32.217Z",fill:"#C20F0F"}),(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7852 32.2046C20.7852 28.3807 20.7852 24.5444 20.7852 20.7206C20.7852 20.1495 20.9217 19.6653 21.4556 19.3674C22.1012 19.0073 22.9702 19.3549 23.1813 20.0626C23.2558 20.3233 23.2806 20.6089 23.2806 20.882C23.2806 28.4179 23.2806 35.9539 23.2806 43.4899C23.2806 43.7257 23.2682 43.974 23.2061 44.2099C23.0695 44.781 22.5729 45.1659 22.0143 45.1535C21.468 45.1411 20.9838 44.7686 20.8597 44.2099C20.81 43.974 20.7976 43.7257 20.7976 43.4899C20.7852 39.7281 20.7852 35.9663 20.7852 32.2046Z",fill:"#C20F0F"}),(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1113 32.1548C28.1113 28.393 28.1113 24.6312 28.1113 20.8819C28.1113 19.7893 28.5459 19.2183 29.3653 19.2307C30.1598 19.2431 30.5943 19.8142 30.5943 20.8695C30.5943 28.4054 30.5943 35.9414 30.5943 43.4773C30.5943 44.5574 30.135 45.1534 29.328 45.141C28.5334 45.1285 28.1113 44.5574 28.1113 43.4897C28.1113 39.7156 28.1113 35.9414 28.1113 32.1548Z",fill:"#C20F0F"})]}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)("h4",{children:"Sind Sie sicher?"})]}),(0,f.jsx)(p.A.Body,{children:(0,f.jsx)("p",{style:{textAlign:"center"},children:"Dieser Vorgang kann nicht r\xfcckg\xe4ngig gemacht werden."})}),(0,f.jsx)(p.A.Footer,{children:(0,f.jsxs)("div",{className:"mx-auto",children:[(0,f.jsx)("button",{className:"btn btn mx-2",style:{background:"#015291",color:"white"},onClick:()=>l(!1),children:"Abbrechen"}),(0,f.jsx)("button",{className:"btn btn",style:{background:"#d04545",color:"white"},onClick:async()=>{if(a)try{const e=await(0,b.WF)("".concat("http://95.217.77.208:4142","/contact/get_contact"),a);console.log(e),n(),200===(null===e||void 0===e?void 0:e.status)&&j.oR.success("Kontaktdaten erfolgreich gel\xf6scht"),l(!1)}catch(e){console.error("An error occurred while deleting the record:",e),l(!1)}},children:"L\xf6schen"})]})})]})})}),(0,f.jsx)(j.N9,{})]})};var C=a(73814),w=a(95870);const y=e=>{let{setEdit:l,getDetails:a}=e;let t=localStorage.getItem("ContactEditDetails"),s=JSON.parse(t);console.log("aastha",s.salution);const[o,r]=(0,n.useState)({fname:null===s||void 0===s?void 0:s.fname,lname:null===s||void 0===s?void 0:s.lname,telephone:null===s||void 0===s?void 0:s.telephone,gender:null===s||void 0===s?void 0:s.gender,email:null===s||void 0===s?void 0:s.email,plz:null===s||void 0===s?void 0:s.plz,ort:null===s||void 0===s?void 0:s.ort,mobile:null===s||void 0===s?void 0:s.mobile,street:null===s||void 0===s?void 0:s.street,title:null===s||void 0===s?void 0:s.title,address:null===s||void 0===s?void 0:s.address,land:null===s||void 0===s?void 0:s.land,salution:null===s||void 0===s?void 0:s.salution,remark:null===s||void 0===s?void 0:s.remark}),[i,c]=(0,n.useState)(!1),[d,m]=(0,n.useState)(!1),h=e=>{const{type:l}=e.target,a=e.target.value;r({...o,[e.target.name]:a})},u=()=>{l(!1)},v={...o};return setTimeout((()=>{m(!1)}),5e3),(0,f.jsxs)("div",{className:"modal modal-form edit-modal-form inner-page-wrap",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.5)",maxHeight:"100%",color:"black"},children:[(0,f.jsx)("div",{className:"modal-dialog modal-dialog-centered ",children:(0,f.jsxs)("div",{className:"modal-content",children:[(0,f.jsx)("div",{className:"modal-header",children:(0,f.jsx)("h5",{className:"modal-title",children:"Kontakt hinzuf\xfcgen"})}),(0,f.jsx)(C.A,{noValidate:!0,validated:i,children:(0,f.jsxs)("div",{className:"row p-3 modal-body modal-form",children:[(0,f.jsxs)("div",{className:"row mb-3",children:[(0,f.jsx)("label",{className:"col-sm-3 col-form-label",children:"Anrede"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)(w.Ay,{className:"w-100",options:[{value:"herr",label:"Herr"},{value:"frau",label:"Frau"},{value:"divers",label:"Divers"}],onChange:e=>{r({...o,salution:e})},value:o.salution,name:"salution",placeholder:"Anrede"})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Titel"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"title",value:o.title,onChange:h,placeholder:"Titel",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Vorname"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"fname",value:o.fname,onChange:h,placeholder:"Vorname",className:"form-control"})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Nachname"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"lname",value:o.lname,onChange:h,placeholder:"Nachname",className:"form-control"})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Adresszusatz"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"address",value:o.address,onChange:h,placeholder:"Adresszusatz",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Stra\xdfe + Nr"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"street",value:o.street,onChange:h,placeholder:"Stra\xdfe + Nr",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row mb-3",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Telefon"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{name:"telephone",value:o.telephone,onChange:e=>{const l=e.target.value.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(l)&&r({...o,telephone:l})},type:"tel",placeholder:"Telefon",id:"inputTelephone",className:"form-control",maxLength:20,minLength:3})})]}),(0,f.jsxs)("div",{className:"row mb-3",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Mobil"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"tel",name:"mobile",value:o.mobile,onChange:e=>{const l=e.target.value.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(l)&&r({...o,mobile:l})},className:"form-control",placeholder:"835-456-8464",required:!0,maxLength:20,minLength:3})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"PLZ"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"plz",value:o.plz,onChange:e=>{const l=e.target.value.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");r({...o,plz:l})},maxLength:10,minLength:3,placeholder:"PLZ",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Ort"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"ort",value:o.ort,onChange:h,placeholder:"Ort",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Land"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"land",name:"land",value:o.land,onChange:e=>{const l=e.target.value.replace(/[^a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");h({target:{name:"land",value:l}})},placeholder:"Land",className:"form-control"})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"E-Mail"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"email",name:"email",value:o.email,onChange:e=>{const l=e.target.value;/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)?r({...o,email:l}):r({...o,email:""})},placeholder:"E-Mail",className:"form-control"})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{className:"col-sm-3 col-form-label",children:"Bemerkungen"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("textarea",{type:"remark",name:"remark",value:o.remark,onChange:h,placeholder:"Bemerkungen",className:"form-control",maxLength:200,rows:5})})]}),(0,f.jsxs)("div",{className:"mb-6 row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Geschlecht"}),(0,f.jsx)("div",{className:"col-sm-9 mt-1",children:(0,f.jsxs)("div",{className:"radio-wrap",children:[(0,f.jsxs)("div",{className:"radio-input",children:[(0,f.jsx)("input",{type:"radio",id:"male",value:"male",name:"gender",onChange:h,checked:"male"===o.gender}),(0,f.jsx)("span",{children:"M\xe4nnlich"})]}),(0,f.jsxs)("div",{className:"radio-input",children:[(0,f.jsx)("input",{type:"radio",id:"female",value:"female",name:"gender",onChange:h,checked:"female"===o.gender}),(0,f.jsx)("span",{children:"Weiblich"})]}),(0,f.jsxs)("div",{className:"radio-input",children:[(0,f.jsx)("input",{type:"radio",id:"divers",value:"other",name:"gender",onChange:h,checked:"other"===o.gender}),(0,f.jsx)("span",{children:"Divers"})]})]})})]})]})}),(0,f.jsx)("div",{className:"modal-footer",style:{display:"flex",justifyItems:"end"},children:(0,f.jsxs)("div",{className:"btn-wrapper d-flex w-100 m-0 justify-content-end",children:[(0,f.jsxs)("button",{className:"btn btn-cancel",onClick:u,children:[" ","Abbrechen"]}),(0,f.jsx)("button",{className:"btn btn-save ms-3",onClick:async()=>{try{if(!o.fname||!o.lname)return j.oR.warning("Bitte geben Sie Fname und Lname ein");if(o.telephone&&o.telephone.startsWith("000"))return j.oR.warning("Ung\xfcltige Telefonnummer");if(o.mobile&&o.mobile.startsWith("000"))return j.oR.warning("Ung\xfcltige Telefonnummer");200===(await(0,b.E8)("".concat("http://95.217.77.208:4142","/contact/get_contact/").concat(null===s||void 0===s?void 0:s._id),v)).status?(m(!1),j.oR.success("Kontakt erfolgreich aktualisiert"),u(),a()):j.oR.error("E-Mail-ID existiert bereits")}catch(e){console.log(e)}},children:"Speichern"})]})})]})}),(0,f.jsx)(j.N9,{})]})};var k=a(9977),S=a(27642),L=a(8124),z=a(22285),A=a(74543);a(95850);const F=e=>{var l;let{setPrint:a,getDetails:t}=e;let s=localStorage.getItem("ContactEditDetails"),o=JSON.parse(s);console.log("aastha",o.email);const[r,i]=(0,n.useState)({fname:null===o||void 0===o?void 0:o.fname,lname:null===o||void 0===o?void 0:o.lname,phone:null===o||void 0===o?void 0:o.phone,statu:null===o||void 0===o?void 0:o.statu,gender:null===o||void 0===o?void 0:o.gender,email:null===o||void 0===o?void 0:o.email}),c=()=>{a(!1)},[d,m]=(0,n.useState)([]),[h,u]=(0,n.useState)(1);(0,n.useEffect)((()=>{(async()=>{try{var e;const l=await fetch("".concat("http://95.217.77.208:4142","/print/get_print?page=").concat(h)),a=await l.json(),n=null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e.filter((e=>"active"===e.is_deleted));m(n)}catch(l){console.error("Error fetching print details:",l)}})()}),[h]);const v=d.filter((e=>"customer"===(null===e||void 0===e?void 0:e.designation))),x=v.length>0&&(null===(l=v[0])||void 0===l?void 0:l.content)||"";console.log("template",v),console.log("peirnt",x);const p=x.replace("{fname}",null===o||void 0===o?void 0:o.fname).replace("{email}",null===o||void 0===o?void 0:o.email).replace("{id}",null===o||void 0===o?void 0:o.id).replace("{phone}",null===o||void 0===o?void 0:o.phone).replace("{group}",null===o||void 0===o?void 0:o.group);let g="\n  <html>\n    <head>\n    </head>\n    <body>\n      ".concat(p,"\n    </body>\n  </html>\n");return(0,f.jsxs)("div",{id:"body",className:"modal modal-form edit-modal-form",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)",color:"black"},children:[(0,f.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-centered ",children:(0,f.jsxs)("div",{className:"modal-content",children:[(0,f.jsx)("div",{className:"modal-header",children:(0,f.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:c})}),(0,f.jsx)("div",{className:"p-2",children:(0,f.jsx)("div",{id:"data",style:{overflowY:"scroll",height:"680px"},dangerouslySetInnerHTML:{__html:g}})}),(0,f.jsx)("div",{className:"modal-footer",style:{display:"flex",justifyItems:"end"},children:(0,f.jsxs)("div",{className:"mx-auto ",children:[(0,f.jsx)("button",{type:"button",className:"btn btn mx-2","data-bs-dismiss":"modal",onClick:c,style:{background:"#d04545",border:"#d04545",color:"white"},children:"Abbrechen"}),(0,f.jsx)("button",{type:"button",className:"btn",onClick:()=>{var e=document.getElementById("body").innerHTML,l=document.getElementById("data").innerHTML,a=document.createElement("iframe");a.style.display="none",document.body.appendChild(a);var n=a.contentDocument.createElement("style");n.innerHTML="\n      @page {\n        size: A4;\n        margin: 0;\n        padding: 0;\n      }\n      body {\n        margin: 0;\n        padding: 0;\n        background: none;\n      }\n    ",a.contentDocument.head.appendChild(n),a.contentDocument.body.innerHTML=l,a.contentWindow.print(),document.body.removeChild(a),document.getElementById("body").innerHTML=e,window.location.reload()},style:{background:"#015291",color:"white"},children:"Spenchern"})]})})]})}),(0,f.jsx)(j.N9,{})]})};a(17195),a(15935);const P=()=>{var e;let l=localStorage.getItem("record"),a=JSON.parse(l),t=localStorage.getItem("customerDatat"),s=(JSON.parse(t),localStorage.getItem("customerRecord")),o=JSON.parse(s);const[r,i]=(0,n.useState)([]),[c,d]=(0,n.useState)([]),[m,h]=(0,n.useState)(!1),u=(0,n.useRef)(),b="http://95.217.77.208:4142",P=[{title:"VORNAME",dataIndex:"fname",render:e=>{var l,a;return(0,f.jsx)("a",{children:(null===e||void 0===e||null===(l=e.slice(0,1))||void 0===l?void 0:l.toUpperCase())+(null===e||void 0===e||null===(a=e.slice(1))||void 0===a?void 0:a.toLowerCase())})}},{title:"NAME",dataIndex:"lname",render:e=>{var l,a;return(0,f.jsx)("a",{children:(null===e||void 0===e||null===(l=e.slice(0,1))||void 0===l?void 0:l.toUpperCase())+(null===e||void 0===e||null===(a=e.slice(1))||void 0===a?void 0:a.toLowerCase())})}},{title:"TELEFON",dataIndex:"telephone"},{title:"MOBIL",dataIndex:"mobile"},{title:"BEMERKUNGEN",dataIndex:"remark",width:"15%",render:e=>{const l=[];for(let a=0;a<e.length;a+=70)l.push(e.slice(a,a+70));return l.map(((e,l)=>(0,f.jsx)("div",{children:e},l)))}},{title:"AKTION",dataIndex:"action",render:(e,l)=>{var n,t,s,o;return(0,f.jsxs)(f.Fragment,{children:[(null===a||void 0===a||null===(n=a.user)||void 0===n?void 0:n._id)===(null===l||void 0===l?void 0:l.added_by)&&(0,A.vW)().includes("owned")||(0,A.vW)().includes("yes")||"true"===(null===a||void 0===a||null===(t=a.user)||void 0===t?void 0:t.isAdminFullRights)?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>ge(l),children:[(0,f.jsx)(g._51,{className:"fs-5",style:{color:"#5C86B4"}}),"\xa0\xa0Bearbeiten"]})}):"",(null===a||void 0===a||null===(s=a.user)||void 0===s?void 0:s._id)===(null===l||void 0===l?void 0:l.added_by)&&(0,A._w)().includes("owned")||(0,A._w)().includes("yes")||"true"==(null===a||void 0===a||null===(o=a.user)||void 0===o?void 0:o.isAdminFullRights)?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>ue(l._id),children:[(0,f.jsx)(z.WFf,{className:"text-danger text-bold fs-5"}),"\xa0 L\xf6schen"]})}):""]})}}],[I,E]=(0,n.useState)({fname:"",lname:"",telephone:"",gender:"",land:"",plz:"",ort:"",mobile:"",street:"",title:"",address:"",salution:"",remark:""});let M=null===o||void 0===o?void 0:o._id,_=null===a||void 0===a||null===(e=a.user)||void 0===e?void 0:e._id;const[O,T]=(0,n.useState)(""),[B,R]=(0,n.useState)(""),[D,H]=(0,n.useState)(!1),[W,V]=(0,n.useState)([]),[Z,q]=(0,n.useState)(""),[K,$]=(0,n.useState)(!1),[G,J]=(0,n.useState)(!1),[U,Y]=(0,n.useState)(!1),[Q,X]=(0,n.useState)(""),[ee,le]=(0,n.useState)(1),[ae,ne]=(0,n.useState)(0),[te,se]=(0,n.useState)(""),[oe,re]=(0,n.useState)(""),[ie,ce]=(0,n.useState)(""),de=()=>{H(!1),E({fname:"",lname:"",telephone:"",gender:"",land:"",plz:"",ort:"",mobile:"",street:"",title:"",address:"",salution:""})},me=e=>{const{name:l,value:a,type:n}=e.target,t="radio"===n?e.target.value:a;E({...I,[l]:t})},he=e=>{const{name:l,value:a}=e.target;let n=a.trim();/\d$/.test(a)&&(n=a.replace(/(\D)(\d)/,"$1 $2")),E({...I,[l]:n})},ue=e=>{X(e),$(!0)};let ve={...I,email:O,id:te,customer_id:M,added_by:_};const xe=async()=>{try{var e;const l=await fetch("".concat(b,"/contact/get_contact/").concat(null===o||void 0===o?void 0:o._id,"?page=").concat(ee,"&resultPerPage=").concat(oe)),a=await l.json();ne(null===a||void 0===a?void 0:a.pageCount);const n=null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e.filter((e=>"active"===e.status));V(n)}catch(l){console.error("Error fetching customer record:",l)}};(0,n.useEffect)((()=>{let e=localStorage.getItem("remarks"),l=JSON.parse(e);if(W&&W.length>0){const e=W.map((e=>({...e,remarks:l})));i(e)}else i([])}),[W]);const pe=async()=>{try{if(""===Z)return xe();const e=await fetch("".concat(b,"/contact/search/").concat(Z)),l=await e.json(),a=l.filter((e=>"active"===e.status));a.length>0?V(a):(xe(),V(l))}catch(e){console.error("Error searching data:",e.message)}};const ge=e=>{let l=JSON.stringify(e);localStorage.setItem("ContactEditDetails",l),Y(!0)};return(0,n.useEffect)((()=>{se("HVD"+Math.floor(1e3+9e3*Math.random())),(async()=>{try{const e=await fetch("".concat(b,"/customer/get_record/").concat(null===o||void 0===o?void 0:o._id)),l=await e.json();d(l)}catch(e){console.error("Error fetching employee data:",e)}})(),xe()}),[ee,oe]),(0,f.jsxs)("div",{style:{background:"#fff"},children:[K?(0,f.jsx)(N,{setHide:$,contactId:Q,getDetails:xe}):"",U?(0,f.jsx)(y,{setEdit:Y,getDetails:xe}):"",G?(0,f.jsx)(F,{setPrint:J,getDetails:xe}):"",(0,f.jsx)(L.default,{}),(0,f.jsx)("h5",{className:"mx-4",children:"Kontakte"}),(0,f.jsx)("div",{className:"container-fluid",children:(0,f.jsxs)("div",{className:"row search-filter-row",style:{borderRadius:"5px",margin:"0px",border:"1px solid lightgray",background:"#fff"},children:[(0,f.jsx)("div",{className:"col-md-9",children:(0,f.jsxs)("div",{className:"d-flex align-items-center",children:[(0,f.jsx)("input",{ref:u,onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),pe())},name:"search",value:Z,onChange:e=>q(e.target.value),type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control form-search-control"}),(0,f.jsxs)("button",{onClick:pe,className:"filter-btn",children:[(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,f.jsx)("path",{d:"M17.2837 3.19758L17.2819 3.19982L11.4249 10.3893L11.3125 10.5272V10.7051V15.7395C11.3125 16.0891 11.0266 16.375 10.677 16.375C10.538 16.375 10.4145 16.3294 10.3142 16.2343L10.2972 16.2182L10.2788 16.2037L7.02898 13.6566C6.81324 13.4832 6.6875 13.2225 6.6875 12.948V10.7051V10.5272L6.57512 10.3892L0.717141 3.19979L0.716307 3.19877C0.5768 3.02847 0.5 2.81363 0.5 2.59102C0.5 2.05751 0.932509 1.625 1.46602 1.625H16.534C17.0667 1.625 17.5 2.05774 17.5 2.59102C17.5 2.81391 17.4234 3.02809 17.2837 3.19758ZM1.93219 2.3125H0.879712L1.54459 3.12837L7.29738 10.1875C7.29744 10.1876 7.2975 10.1877 7.29756 10.1877C7.34744 10.2491 7.375 10.3272 7.375 10.4062V12.8109V13.0524L7.56415 13.2026L9.81415 14.9885L10.625 15.6321V14.5969V10.4062C10.625 10.3272 10.6526 10.2491 10.7025 10.1877C10.7025 10.1876 10.7026 10.1876 10.7026 10.1875L16.454 3.12832L17.1187 2.3125H16.0664H1.93219Z",fill:"#1C1D21",stroke:"white"})}),(0,f.jsx)("span",{children:"Filter"})]})]})}),(0,f.jsxs)("div",{className:"col-sm-3 text-end",children:[(0,f.jsxs)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},onClick:()=>H(!0),children:[(0,f.jsx)(g.jgn,{}),"\xa0Neue Kontakte anlegen"]}),(0,f.jsxs)(p.A,{show:D,centered:!0,className:"modal-form",children:[(0,f.jsx)(p.A.Header,{children:(0,f.jsx)(p.A.Title,{children:"Kontakt hinzuf\xfcgen"})}),(0,f.jsx)(p.A.Body,{children:(0,f.jsx)(C.A,{noValidate:!0,validated:m,children:(0,f.jsxs)("div",{className:"row inner-page-wrap",children:[(0,f.jsxs)("div",{className:"row mb-3",children:[(0,f.jsx)("label",{className:"col-sm-3 col-form-label",children:"Anrede"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)(w.Ay,{className:"w-100",options:[{value:"herr",label:"Herr"},{value:"frau",label:"Frau"},{value:"divers",label:"Divers"}],onChange:e=>{E({...I,salution:e})},value:I.salution,name:"salution",placeholder:"Anrede"})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Titel"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"title",value:I.title,onChange:me,placeholder:"Titel",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Vorname"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"fname",value:I.fname,onChange:me,placeholder:"Vorname",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Nachname"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"lname",value:I.lname,onChange:me,placeholder:"Nachname",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Adresszusatz"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"address",value:I.address,onChange:me,placeholder:"Adresszusatz",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Stra\xdfe + Nr"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"street",onBlur:he,value:I.street,onChange:e=>{E({...I,street:e.target.value})},placeholder:"Stra\xdfe + Nr",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Telefon"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"tel",name:"telephone",value:I.telephone,onChange:e=>{const l=e.target.value.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(l)&&E({...I,telephone:l})},placeholder:"835-456-8464",className:"form-control",id:"inputPhone",maxLength:20,minLength:3})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Mobil"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"tel",name:"mobile",value:I.mobile,onChange:e=>{const l=e.target.value.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(l)&&E({...I,mobile:l})},placeholder:"835-456-8464",className:"form-control",required:!0,maxLength:20,minLength:3})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"PLZ"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"plz",value:I.plz,onChange:e=>{const l=e.target.value.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");E({...I,plz:l})},placeholder:"PLZ",className:"form-control",required:!0,maxLength:10,minLength:3})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Ort"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"text",name:"ort",value:I.ort,onChange:me,placeholder:"Ort",className:"form-control",required:!0})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Land"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"land",name:"land",onBlur:he,value:I.land,onChange:e=>{const l=e.target.value.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");me({target:{name:"land",value:l}})},placeholder:"Land",className:"form-control"})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{className:"col-sm-3 col-form-label",children:"E-Mail"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("input",{type:"email",name:"email",onChange:e=>{const l=e.target.value;/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)?T(l):T("")},placeholder:"info@gmail.com",className:"form-control"})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("label",{className:"col-sm-3 col-form-label",children:"Bemerkungen"}),(0,f.jsx)("div",{className:"col-sm-9",children:(0,f.jsx)("textarea",{type:"remark",name:"remark",value:I.remark,onChange:me,placeholder:"Bemerkungen",className:"form-control",maxLength:200,rows:5})})]}),(0,f.jsxs)("div",{className:"mb-6 row",children:[(0,f.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-3 col-form-label",children:"Geschlecht"}),(0,f.jsx)("div",{className:"col-sm-9 mt-1",children:(0,f.jsxs)("div",{className:"radio-wrap",children:[(0,f.jsxs)("div",{className:"radio-input",children:[(0,f.jsx)("input",{type:"radio",id:"male",value:"male",name:"gender",onChange:me,checked:"male"===I.gender}),(0,f.jsx)("span",{children:"M\xe4nnlich"})]}),(0,f.jsxs)("div",{className:"radio-input",children:[(0,f.jsx)("input",{type:"radio",id:"female",value:"female",name:"gender",onChange:me,checked:"female"===I.gender}),(0,f.jsx)("span",{children:"Weiblich"})]}),(0,f.jsxs)("div",{className:"radio-input",children:[(0,f.jsx)("input",{type:"radio",id:"divers",value:"other",name:"gender",onChange:me,checked:"other"===I.gender}),(0,f.jsx)("span",{children:"Divers"})]})]})})]})]})})}),(0,f.jsx)(p.A.Footer,{children:(0,f.jsxs)("div",{className:"btn-wrapper d-flex w-100 m-0 justify-content-end",children:[(0,f.jsxs)("button",{className:"btn btn-cancel",onClick:de,children:[" ","Abbrechen"]}),(0,f.jsx)("button",{className:"btn btn-save ms-3",onClick:async()=>{if(!I.fname||!I.lname)return j.oR.warning("Bitte geben Sie Fname und Lname ein");if(I.telephone&&I.telephone.startsWith("000"))return j.oR.warning("Ung\xfcltige Telefonnummer");if(I.mobile&&I.mobile.startsWith("000"))return j.oR.warning("Ung\xfcltige Telefonnummer");try{let e=await fetch("".concat(b,"/contact/create_contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)});if(!e.ok)throw new Error("HTTP error! Status: ".concat(e.status));await e.json();j.oR.success("Kontaktdaten erfolgreich erstellt"),E(""),T(""),de(),xe()}catch(e){console.error("Error during API call:",e),j.oR.error("E-Mail-ID existiert bereits")}},children:"Speichern"})]})})]})," "]})]})}),(0,f.jsxs)("div",{style:{background:"#fff"},className:"mx-3",children:[(0,f.jsx)(v,{}),(0,f.jsx)("div",{className:"responsive-table-container",children:(0,f.jsx)(x.A,{dataSource:r,columns:P,pagination:!1,responsive:!0,rowKey:e=>e._id,rowSelection:{type:"checkbox",onChange:(e,l)=>{},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})}})}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-sm-10",children:(0,f.jsx)(S.A,{spacing:2,children:(0,f.jsx)(k.A,{count:ae,variant:"outlined",shape:"rounded",page:ee,onChange:(e,l)=>{le(l)}})})}),(0,f.jsx)("div",{className:"col-sm-2 text-end",children:(0,f.jsxs)("select",{className:"form-control form-select",value:oe,onChange:e=>{re(parseInt(e.target.value,10)),le(1)},children:[(0,f.jsx)("option",{value:10,children:"10 pro Seite"}),(0,f.jsx)("option",{value:20,children:"20 pro Seite"}),(0,f.jsx)("option",{value:50,children:"50 pro Seite"}),(0,f.jsx)("option",{value:100,children:"100 pro Seite"})]})})]}),(0,f.jsx)("br",{})]}),(0,f.jsx)(j.N9,{})]})},I=n.memo(P)}}]);
//# sourceMappingURL=571.c314252d.chunk.js.map