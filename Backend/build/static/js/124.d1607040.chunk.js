"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[124],{8124:(t,e,l)=>{l.r(e),l.d(e,{default:()=>c});var i=l(65043),s=l(73216),a=l(70579);const n=t=>{var e,l,n,c,o,r,d,C,h,u,v,m,x,g,p,j,b,w,f,_,H;let{getCustomerData:V,updateData:L,updateStreet:k,updateLand:N}=t;const[Z,M]=(0,i.useState)([]);let y=localStorage.getItem("customerRecord"),I=JSON.parse(y);const P=(0,s.Zp)();let S=localStorage.getItem("tabId")||"customer_info";const D=(t,e,l)=>(l&&"a"===l.target.tagName.toLowerCase()&&l.preventDefault(),"KlientInnen"===e?(localStorage.setItem("tabId","customer_info"),P("/customer/customer_info")):"Kontakte"===e?(localStorage.setItem("tabId","contact"),P("/customer/contact")):"Aktivit\xe4t"===e?(localStorage.setItem("tabId","activity"),P("/customer/activity")):"Dokumente"===e?(localStorage.setItem("tabId","document"),P("/customer/document")):"Vollmachten"===e?(localStorage.setItem("tabId","attorney"),P("/customer/attorney")):"HVD-PV"===e?(localStorage.setItem("tabId","services"),P("/customer/services")):"Rechnung"===e?(localStorage.setItem("tabId","bills"),P("/customer/bills")):void 0);(0,i.useEffect)((()=>{D()}),[S]);let B=localStorage.getItem("customerRecord");JSON.parse(B);const R=null===Z||void 0===Z||null===(e=Z.customer)||void 0===e?void 0:e.startDate,K=new Date(R).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\//g,"."),z=(null===Z||void 0===Z||null===(l=Z.customer)||void 0===l||null===(n=l.fname)||void 0===n?void 0:n.slice(0,1).toUpperCase())+(null===Z||void 0===Z||null===(c=Z.customer)||void 0===c||null===(o=c.fname)||void 0===o?void 0:o.slice(1).toLowerCase()),A=(null===Z||void 0===Z||null===(r=Z.customer)||void 0===r||null===(d=r.lname)||void 0===d?void 0:d.slice(0,1).toUpperCase())+(null===Z||void 0===Z||null===(C=Z.customer)||void 0===C||null===(h=C.lname)||void 0===h?void 0:h.slice(1).toLowerCase());console.log(Z);let E=((null===Z||void 0===Z||null===(u=Z.customer)||void 0===u||null===(v=u.street)||void 0===v?void 0:v.length)>1?(null===Z||void 0===Z||null===(m=Z.customer)||void 0===m||null===(x=m.street)||void 0===x?void 0:x.slice(0,1).toUpperCase())+(null===Z||void 0===Z||null===(g=Z.customer)||void 0===g||null===(p=g.street)||void 0===p?void 0:p.slice(1).toLowerCase())+",  ":"")+(null!==Z&&void 0!==Z&&null!==(j=Z.customer)&&void 0!==j&&j.street?(null===Z||void 0===Z||null===(b=Z.customer)||void 0===b?void 0:b.plz)+"  "+(null===Z||void 0===Z||null===(w=Z.customerDelivery)||void 0===w?void 0:w.ort):""),U=null===Z||void 0===Z||null===(f=Z.customer)||void 0===f?void 0:f.status;return(0,i.useEffect)((()=>{(async()=>{const t=await fetch("".concat("http://95.217.77.208:4142","/customer/get_record/").concat(null===I||void 0===I?void 0:I._id)),e=await t.json();M(e)})()}),[L,k,N]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"whiteBox",children:[(0,a.jsx)("div",{className:"blueBoxTop",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row d-flex align-items-center",children:[(0,a.jsxs)("div",{className:"col-md-4",children:[(0,a.jsxs)("h3",{children:["KlientIn: ","".concat(z," ").concat(A)]}),(0,a.jsxs)("address",{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8532)",children:(0,a.jsx)("path",{d:"M16.817 8.89543C16.817 5.62623 14.1646 2.97386 10.8954 2.97386C7.62623 2.97386 4.97386 5.62623 4.97386 8.89543C4.97386 9.40534 5.15891 10.1949 5.60303 11.2476C6.03481 12.2674 6.64753 13.3942 7.35071 14.5333C8.52269 16.4331 9.87972 18.2671 10.8954 19.5748C11.9153 18.2671 13.2723 16.4331 14.4402 14.5333C15.1433 13.3942 15.7561 12.2674 16.1878 11.2476C16.632 10.1949 16.817 9.40534 16.817 8.89543ZM18.7909 8.89543C18.7909 12.4895 13.9796 18.8881 11.87 21.5281C11.3642 22.1573 10.4266 22.1573 9.92084 21.5281C7.81128 18.8881 3 12.4895 3 8.89543C3 4.5365 6.5365 1 10.8954 1C15.2544 1 18.7909 4.5365 18.7909 8.89543ZM12.2113 8.89543C12.2113 8.54643 12.0727 8.21173 11.8259 7.96495C11.5791 7.71817 11.2444 7.57953 10.8954 7.57953C10.5464 7.57953 10.2117 7.71817 9.96495 7.96495C9.71817 8.21173 9.57953 8.54643 9.57953 8.89543C9.57953 9.24443 9.71817 9.57914 9.96495 9.82592C10.2117 10.0727 10.5464 10.2113 10.8954 10.2113C11.2444 10.2113 11.5791 10.0727 11.8259 9.82592C12.0727 9.57914 12.2113 9.24443 12.2113 8.89543ZM7.60567 8.89543C7.60567 8.02293 7.95227 7.18617 8.56922 6.56922C9.18617 5.95227 10.0229 5.60567 10.8954 5.60567C11.7679 5.60567 12.6047 5.95227 13.2216 6.56922C13.8386 7.18617 14.1852 8.02293 14.1852 8.89543C14.1852 9.76793 13.8386 10.6047 13.2216 11.2216C12.6047 11.8386 11.7679 12.1852 10.8954 12.1852C10.0229 12.1852 9.18617 11.8386 8.56922 11.2216C7.95227 10.6047 7.60567 9.76793 7.60567 8.89543Z",fill:"white"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8532",children:(0,a.jsx)("rect",{width:"22",height:"22",fill:"white"})})})]}),(0,a.jsx)("span",{children:E})]})]}),(0,a.jsxs)("div",{className:"col-md-8 text-md-end",children:[(0,a.jsx)("div",{children:null===U||void 0===U||null===(_=U.slice(0,6))||void 0===_?void 0:_.map(((t,e)=>(0,a.jsx)("span",{className:"dm-badge mx-1",style:{background:"#4EB772",border:"white",padding:"5px"},children:(0,a.jsx)("span",{children:t.name})},e)))}),(0,a.jsxs)("div",{className:"d-flex justify-content-md-end justify-content-between mt-1",children:[(0,a.jsx)("button",{className:"btn btn me-4 header-button",children:(0,a.jsxs)("span",{style:{fontSize:"14px",marginRight:"3px",marginLeft:"3px"},children:[" ",K]})}),(0,a.jsxs)("button",{className:"btn btn header-button",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8539)",children:(0,a.jsx)("path",{d:"M14.01 11.0623C13.5295 10.8573 12.9729 10.992 12.6418 11.3963L11.6691 12.5858C10.3214 11.8036 9.19642 10.6786 8.41418 9.33086L9.60073 8.36112C10.005 8.03005 10.1427 7.4734 9.93472 6.99292L8.52844 3.7116C8.30871 3.19596 7.75499 2.90885 7.20712 3.02604L3.9258 3.72918C3.38673 3.84344 3 4.32099 3 4.87471C3 11.6483 8.13293 17.2265 14.7219 17.9268C15.0091 17.9561 15.2962 17.9795 15.5891 17.9912H15.5921C15.7708 17.9971 15.9466 18.0029 16.1253 18.0029C16.679 18.0029 17.1566 17.6162 17.2708 17.0771L17.974 13.7958C18.0912 13.2479 17.804 12.6942 17.2884 12.4745L14.0071 11.0682L14.01 11.0623ZM15.9349 16.5937C9.61538 16.4912 4.50882 11.3846 4.40921 5.06515L7.31552 4.44111L8.57532 7.38258L7.52354 8.24393C6.99032 8.68046 6.85262 9.43927 7.19833 10.0369C8.10363 11.5985 9.40444 12.8993 10.966 13.8046C11.5637 14.1503 12.3225 14.0126 12.759 13.4794L13.6203 12.4276L16.5618 13.6874L15.9349 16.5937Z",fill:"white"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8539",children:(0,a.jsx)("rect",{width:"22",height:"22",fill:"white"})})})]}),(0,a.jsx)("span",{style:{fontSize:"14px",marginRight:"3px",marginLeft:"3px"},children:null===Z||void 0===Z||null===(H=Z.customer)||void 0===H?void 0:H.phone})]})]})]})]})})}),(0,a.jsx)("div",{className:"whiteBoxWithPdLR",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-sm-12",children:(0,a.jsx)("nav",{children:(0,a.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,a.jsxs)("button",{className:"nav-link ".concat("customer_info"===S?"active":""),id:"customer_info-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"customer_info"===S,onClick:t=>D(0,"KlientInnen",t),children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_91_3542)",children:(0,a.jsx)("path",{d:"M12 3.875C14.1549 3.875 16.2215 4.73102 17.7452 6.25476C19.269 7.77849 20.125 9.84512 20.125 12C20.125 14.1549 19.269 16.2215 17.7452 17.7452C16.2215 19.269 14.1549 20.125 12 20.125C9.84512 20.125 7.77849 19.269 6.25476 17.7452C4.73102 16.2215 3.875 14.1549 3.875 12C3.875 9.84512 4.73102 7.77849 6.25476 6.25476C7.77849 4.73102 9.84512 3.875 12 3.875ZM12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22ZM10.4375 15.125C9.91797 15.125 9.5 15.543 9.5 16.0625C9.5 16.582 9.91797 17 10.4375 17H13.5625C14.082 17 14.5 16.582 14.5 16.0625C14.5 15.543 14.082 15.125 13.5625 15.125H13.25V11.6875C13.25 11.168 12.832 10.75 12.3125 10.75H10.4375C9.91797 10.75 9.5 11.168 9.5 11.6875C9.5 12.207 9.91797 12.625 10.4375 12.625H11.375V15.125H10.4375ZM12 9.5C12.3315 9.5 12.6495 9.3683 12.8839 9.13388C13.1183 8.89946 13.25 8.58152 13.25 8.25C13.25 7.91848 13.1183 7.60054 12.8839 7.36612C12.6495 7.1317 12.3315 7 12 7C11.6685 7 11.3505 7.1317 11.1161 7.36612C10.8817 7.60054 10.75 7.91848 10.75 8.25C10.75 8.58152 10.8817 8.89946 11.1161 9.13388C11.3505 9.3683 11.6685 9.5 12 9.5Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_91_3542",children:(0,a.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),(0,a.jsx)("span",{children:" KlientInnen "})]}),(0,a.jsxs)("button",{className:"nav-link ".concat("contact"===S?"active":""),id:"contact-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"contact","aria-selected":"contact"===S,onClick:t=>D(0,"Kontakte",t),children:[" ",(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_431_39097)",children:(0,a.jsx)("path",{d:"M13.917 3C14.192 3 14.417 3.225 14.417 3.5V15.5C14.417 15.775 14.192 16 13.917 16H4.91699C4.64199 16 4.41699 15.775 4.41699 15.5V3.5C4.41699 3.225 4.64199 3 4.91699 3H13.917ZM4.91699 1.5C3.81387 1.5 2.91699 2.39688 2.91699 3.5V15.5C2.91699 16.6031 3.81387 17.5 4.91699 17.5H13.917C15.0201 17.5 15.917 16.6031 15.917 15.5V3.5C15.917 2.39688 15.0201 1.5 13.917 1.5H4.91699ZM9.41699 9.5C9.94742 9.5 10.4561 9.28929 10.8312 8.91421C11.2063 8.53914 11.417 8.03043 11.417 7.5C11.417 6.96957 11.2063 6.46086 10.8312 6.08579C10.4561 5.71071 9.94742 5.5 9.41699 5.5C8.88656 5.5 8.37785 5.71071 8.00278 6.08579C7.62771 6.46086 7.41699 6.96957 7.41699 7.5C7.41699 8.03043 7.62771 8.53914 8.00278 8.91421C8.37785 9.28929 8.88656 9.5 9.41699 9.5ZM8.41699 10.5C7.03574 10.5 5.91699 11.6188 5.91699 13C5.91699 13.275 6.14199 13.5 6.41699 13.5H12.417C12.692 13.5 12.917 13.275 12.917 13C12.917 11.6188 11.7982 10.5 10.417 10.5H8.41699ZM17.917 4C17.917 3.725 17.692 3.5 17.417 3.5C17.142 3.5 16.917 3.725 16.917 4V6C16.917 6.275 17.142 6.5 17.417 6.5C17.692 6.5 17.917 6.275 17.917 6V4ZM17.417 7.5C17.142 7.5 16.917 7.725 16.917 8V10C16.917 10.275 17.142 10.5 17.417 10.5C17.692 10.5 17.917 10.275 17.917 10V8C17.917 7.725 17.692 7.5 17.417 7.5ZM17.917 12C17.917 11.725 17.692 11.5 17.417 11.5C17.142 11.5 16.917 11.725 16.917 12V14C16.917 14.275 17.142 14.5 17.417 14.5C17.692 14.5 17.917 14.275 17.917 14V12Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_431_39097",children:(0,a.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.666992)"})})})]}),(0,a.jsx)("span",{children:" Kontakte"})]}),(0,a.jsxs)("button",{className:"nav-link ".concat("activity"===S?"active":""),id:"activity-tab","data-bs-toggle":"tab","data-bs-target":"#activity",role:"tab","aria-controls":"activity","aria-selected":"activity"===S,onClick:t=>D(0,"Aktivit\xe4t",t),children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8581)",children:(0,a.jsx)("path",{d:"M9.48594 3.00021C9.74609 2.99317 9.97813 3.16661 10.0438 3.41974L11.9023 10.5424L12.5375 9.19005C12.7531 8.73067 13.2172 8.43536 13.7258 8.43536H16.4375C16.7492 8.43536 17 8.68614 17 8.99786C17 9.30958 16.7492 9.56036 16.4375 9.56036H13.7258C13.6531 9.56036 13.5875 9.60255 13.557 9.66817L12.2586 12.4268C12.1578 12.64 11.9328 12.769 11.6984 12.7479C11.4641 12.7268 11.2648 12.558 11.2062 12.3307L9.56328 6.03302L7.80078 14.5525C7.74922 14.808 7.52891 14.9932 7.26875 15.0002C7.00859 15.0072 6.77656 14.8385 6.70859 14.5877L5.35859 9.70099C5.33516 9.61896 5.2625 9.56271 5.17813 9.56271H2.5625C2.25078 9.56271 2 9.31192 2 9.00021C2 8.68849 2.25078 8.43771 2.5625 8.43771H5.17813C5.76875 8.43771 6.28672 8.83146 6.44375 9.40099L7.17031 12.0401L8.94922 3.44786C9.00313 3.19239 9.22344 3.00724 9.48594 3.00021Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8581",children:(0,a.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.5)"})})})]}),(0,a.jsx)("span",{children:" Aktivit\xe4t"})]}),(0,a.jsxs)("button",{className:"nav-link ".concat("document"===S?"active":""),id:"document-tab","data-bs-toggle":"tab","data-bs-target":"#document",role:"tab","aria-controls":"document","aria-selected":"document"===S,onClick:t=>D(0,"Dokumente",t),children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8589)",children:(0,a.jsx)("path",{d:"M13.125 15.0938C13.3828 15.0938 13.5938 14.8828 13.5938 14.625V6.1875H11.25C10.7314 6.1875 10.3125 5.76855 10.3125 5.25V2.90625H5.625C5.36719 2.90625 5.15625 3.11719 5.15625 3.375V14.625C5.15625 14.8828 5.36719 15.0938 5.625 15.0938H13.125ZM3.75 3.375C3.75 2.34082 4.59082 1.5 5.625 1.5H10.4736C10.9717 1.5 11.4492 1.69629 11.8008 2.04785L14.4521 4.69922C14.8037 5.05078 15 5.52832 15 6.02637V14.625C15 15.6592 14.1592 16.5 13.125 16.5H5.625C4.59082 16.5 3.75 15.6592 3.75 14.625V3.375Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8589",children:(0,a.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.75)"})})})]}),(0,a.jsx)("span",{children:" Dokumente"})]}),(0,a.jsxs)("button",{className:"nav-link ".concat("attorney"===S?"active":""),id:"attorney-tab","data-bs-toggle":"tab","data-bs-target":"#attorney",role:"tab","aria-controls":"attorney","aria-selected":"attorney"===S,onClick:t=>D(0,"Vollmachten",t),children:[(0,a.jsx)("i",{className:"fa-solid fa-paint-roller fa-fw"}),"\xa0 Vollmachten"]}),(0,a.jsxs)("button",{className:"nav-link ".concat("services"===S?"active":""),id:"services-tab","data-bs-toggle":"tab","data-bs-target":"#services",role:"tab","aria-controls":"services","aria-selected":"services"===S,onClick:t=>D(0,"HVD-PV",t),children:[" ",(0,a.jsx)("i",{className:"fa-regular fa-lightbulb fa-fw"}),"\xa0 HVD-PV"]}),(0,a.jsxs)("button",{className:"nav-link ".concat("bills"===S?"active":""),id:"bills-tab","data-bs-toggle":"tab","data-bs-target":"#bills",role:"tab","aria-controls":"bills","aria-selected":"bills"===S,onClick:t=>D(0,"Rechnung",t),children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8565)",children:(0,a.jsx)("path",{d:"M5.125 15.0938H12.625C12.8828 15.0938 13.0938 14.8828 13.0938 14.625V6.1875H10.75C10.2314 6.1875 9.8125 5.76855 9.8125 5.25V2.90625H5.125C4.86719 2.90625 4.65625 3.11719 4.65625 3.375V14.625C4.65625 14.8828 4.86719 15.0938 5.125 15.0938ZM3.25 3.375C3.25 2.34082 4.09082 1.5 5.125 1.5H9.97363C10.4717 1.5 10.9492 1.69629 11.3008 2.04785L13.9521 4.69922C14.3037 5.05078 14.5 5.52832 14.5 6.02637V14.625C14.5 15.6592 13.6592 16.5 12.625 16.5H5.125C4.09082 16.5 3.25 15.6592 3.25 14.625V3.375ZM5.59375 4.78125C5.59375 4.52344 5.80469 4.3125 6.0625 4.3125H8.40625C8.66406 4.3125 8.875 4.52344 8.875 4.78125C8.875 5.03906 8.66406 5.25 8.40625 5.25H6.0625C5.80469 5.25 5.59375 5.03906 5.59375 4.78125ZM5.59375 6.65625C5.59375 6.39844 5.80469 6.1875 6.0625 6.1875H8.40625C8.66406 6.1875 8.875 6.39844 8.875 6.65625C8.875 6.91406 8.66406 7.125 8.40625 7.125H6.0625C5.80469 7.125 5.59375 6.91406 5.59375 6.65625ZM8.875 13.2188C8.875 12.9609 9.08594 12.75 9.34375 12.75H11.6875C11.9453 12.75 12.1562 12.9609 12.1562 13.2188C12.1562 13.4766 11.9453 13.6875 11.6875 13.6875H9.34375C9.08594 13.6875 8.875 13.4766 8.875 13.2188ZM6.53125 8.0625H11.2188C11.7373 8.0625 12.1562 8.48145 12.1562 9V10.875C12.1562 11.3936 11.7373 11.8125 11.2188 11.8125H6.53125C6.0127 11.8125 5.59375 11.3936 5.59375 10.875V9C5.59375 8.48145 6.0127 8.0625 6.53125 8.0625Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8565",children:(0,a.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.25)"})})})]}),(0,a.jsx)("span",{children:" Rechnung "})]})]})})})})})})]})})},c=i.memo(n)}}]);
//# sourceMappingURL=124.d1607040.chunk.js.map