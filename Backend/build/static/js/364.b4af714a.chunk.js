"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[364,912],{20008:(e,t,l)=>{l.d(t,{c:()=>n});l(69060);var s=l(63468),i=l(16916),a=l(82496);const n=()=>(0,a.jsx)(i.c,{sx:{color:"grey.500"},spacing:2,direction:"row",children:(0,a.jsx)(s.c,{color:"success",size:20})})},38292:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var s=l(69060),i=l(51560),a=l(82496);const n=e=>{var t,l,n,c,o,d;let{getCustomerData:r}=e;const h=(0,i.i6)();let m=localStorage.getItem("tabId")||"customer_info";const u=(e,t,l)=>(l&&"a"===l.target.tagName.toLowerCase()&&l.preventDefault(),"KlientInnen"===t?(localStorage.setItem("tabId","customer_info"),h("/customer/customer_info")):"Kontakte"===t?(localStorage.setItem("tabId","contact"),h("/customer/contact")):"Aktivitat"===t?(localStorage.setItem("tabId","activity"),h("/customer/activity")):"Dokumente"===t?(localStorage.setItem("tabId","document"),h("/customer/document")):"Vollmachten"===t?(localStorage.setItem("tabId","attorney"),h("/customer/attorney")):"SPV"===t?(localStorage.setItem("tabId","services"),h("/customer/services")):"Rechnung"===t?(localStorage.setItem("tabId","bills"),h("/customer/bills")):void 0);(0,s.useEffect)((()=>{u()}),[m]);let C=localStorage.getItem("customerRecord"),x=JSON.parse(C);const v=(null===x||void 0===x||null===(t=x.fname)||void 0===t?void 0:t.slice(0,1).toUpperCase())+(null===x||void 0===x||null===(l=x.fname)||void 0===l?void 0:l.slice(1).toLowerCase()),p=(null===x||void 0===x||null===(n=x.lname)||void 0===n?void 0:n.slice(0,1).toUpperCase())+(null===x||void 0===x||null===(c=x.lname)||void 0===c?void 0:c.slice(1).toLowerCase());let j=(null===x||void 0===x||null===(o=x.street)||void 0===o?void 0:o.slice(0,1).toUpperCase())+(null===x||void 0===x||null===(d=x.street)||void 0===d?void 0:d.slice(1).toLowerCase())+",    "+(null===x||void 0===x?void 0:x.plz)+"  "+(null===x||void 0===x?void 0:x.city);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"whiteBox",children:[(0,a.jsx)("div",{className:"blueBoxTop",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row d-flex align-items-center",children:[(0,a.jsxs)("div",{className:"col-md-4",children:[(0,a.jsxs)("h3",{children:["KlientInnen: ","".concat(v," ").concat(p)]}),(0,a.jsxs)("address",{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8532)",children:(0,a.jsx)("path",{d:"M16.817 8.89543C16.817 5.62623 14.1646 2.97386 10.8954 2.97386C7.62623 2.97386 4.97386 5.62623 4.97386 8.89543C4.97386 9.40534 5.15891 10.1949 5.60303 11.2476C6.03481 12.2674 6.64753 13.3942 7.35071 14.5333C8.52269 16.4331 9.87972 18.2671 10.8954 19.5748C11.9153 18.2671 13.2723 16.4331 14.4402 14.5333C15.1433 13.3942 15.7561 12.2674 16.1878 11.2476C16.632 10.1949 16.817 9.40534 16.817 8.89543ZM18.7909 8.89543C18.7909 12.4895 13.9796 18.8881 11.87 21.5281C11.3642 22.1573 10.4266 22.1573 9.92084 21.5281C7.81128 18.8881 3 12.4895 3 8.89543C3 4.5365 6.5365 1 10.8954 1C15.2544 1 18.7909 4.5365 18.7909 8.89543ZM12.2113 8.89543C12.2113 8.54643 12.0727 8.21173 11.8259 7.96495C11.5791 7.71817 11.2444 7.57953 10.8954 7.57953C10.5464 7.57953 10.2117 7.71817 9.96495 7.96495C9.71817 8.21173 9.57953 8.54643 9.57953 8.89543C9.57953 9.24443 9.71817 9.57914 9.96495 9.82592C10.2117 10.0727 10.5464 10.2113 10.8954 10.2113C11.2444 10.2113 11.5791 10.0727 11.8259 9.82592C12.0727 9.57914 12.2113 9.24443 12.2113 8.89543ZM7.60567 8.89543C7.60567 8.02293 7.95227 7.18617 8.56922 6.56922C9.18617 5.95227 10.0229 5.60567 10.8954 5.60567C11.7679 5.60567 12.6047 5.95227 13.2216 6.56922C13.8386 7.18617 14.1852 8.02293 14.1852 8.89543C14.1852 9.76793 13.8386 10.6047 13.2216 11.2216C12.6047 11.8386 11.7679 12.1852 10.8954 12.1852C10.0229 12.1852 9.18617 11.8386 8.56922 11.2216C7.95227 10.6047 7.60567 9.76793 7.60567 8.89543Z",fill:"white"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8532",children:(0,a.jsx)("rect",{width:"22",height:"22",fill:"white"})})})]}),(0,a.jsx)("span",{children:j})]})]}),(0,a.jsx)("div",{className:"col-md-8 text-md-end",children:(0,a.jsxs)("div",{className:"d-flex justify-content-md-end justify-content-between",children:[(0,a.jsxs)("button",{className:"btn btn-outline me-4",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"15",viewBox:"0 0 20 15",fill:"#fff",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_60_2870)",children:(0,a.jsx)("path",{d:"M2.5 1.875C2.15625 1.875 1.875 2.15625 1.875 2.5V3.36328L8.61328 8.89453C9.42188 9.55859 10.582 9.55859 11.3906 8.89453L18.125 3.36328V2.5C18.125 2.15625 17.8438 1.875 17.5 1.875H2.5ZM1.875 5.78906V12.5C1.875 12.8438 2.15625 13.125 2.5 13.125H17.5C17.8438 13.125 18.125 12.8438 18.125 12.5V5.78906L12.5781 10.3438C11.0781 11.5742 8.91797 11.5742 7.42188 10.3438L1.875 5.78906ZM0 2.5C0 1.12109 1.12109 0 2.5 0H17.5C18.8789 0 20 1.12109 20 2.5V12.5C20 13.8789 18.8789 15 17.5 15H2.5C1.12109 15 0 13.8789 0 12.5V2.5Z",fill:"#fff"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_60_2870",children:(0,a.jsx)("rect",{width:"20",height:"15",fill:"white"})})})]}),(0,a.jsxs)("span",{children:[" ",null===x||void 0===x?void 0:x.email]})]}),(0,a.jsxs)("button",{className:"btn btn-outline",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8539)",children:(0,a.jsx)("path",{d:"M14.01 11.0623C13.5295 10.8573 12.9729 10.992 12.6418 11.3963L11.6691 12.5858C10.3214 11.8036 9.19642 10.6786 8.41418 9.33086L9.60073 8.36112C10.005 8.03005 10.1427 7.4734 9.93472 6.99292L8.52844 3.7116C8.30871 3.19596 7.75499 2.90885 7.20712 3.02604L3.9258 3.72918C3.38673 3.84344 3 4.32099 3 4.87471C3 11.6483 8.13293 17.2265 14.7219 17.9268C15.0091 17.9561 15.2962 17.9795 15.5891 17.9912H15.5921C15.7708 17.9971 15.9466 18.0029 16.1253 18.0029C16.679 18.0029 17.1566 17.6162 17.2708 17.0771L17.974 13.7958C18.0912 13.2479 17.804 12.6942 17.2884 12.4745L14.0071 11.0682L14.01 11.0623ZM15.9349 16.5937C9.61538 16.4912 4.50882 11.3846 4.40921 5.06515L7.31552 4.44111L8.57532 7.38258L7.52354 8.24393C6.99032 8.68046 6.85262 9.43927 7.19833 10.0369C8.10363 11.5985 9.40444 12.8993 10.966 13.8046C11.5637 14.1503 12.3225 14.0126 12.759 13.4794L13.6203 12.4276L16.5618 13.6874L15.9349 16.5937Z",fill:"white"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8539",children:(0,a.jsx)("rect",{width:"22",height:"22",fill:"white"})})})]}),(0,a.jsx)("span",{children:null===x||void 0===x?void 0:x.phone})]})]})})]})})}),(0,a.jsx)("div",{className:"whiteBoxWithPdLR",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-sm-12",children:(0,a.jsx)("nav",{children:(0,a.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,a.jsxs)("button",{className:"nav-link ".concat("customer_info"===m?"active":""),id:"customer_info-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"customer_info"===m,onClick:e=>u(0,"KlientInnen",e),children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_91_3542)",children:(0,a.jsx)("path",{d:"M12 3.875C14.1549 3.875 16.2215 4.73102 17.7452 6.25476C19.269 7.77849 20.125 9.84512 20.125 12C20.125 14.1549 19.269 16.2215 17.7452 17.7452C16.2215 19.269 14.1549 20.125 12 20.125C9.84512 20.125 7.77849 19.269 6.25476 17.7452C4.73102 16.2215 3.875 14.1549 3.875 12C3.875 9.84512 4.73102 7.77849 6.25476 6.25476C7.77849 4.73102 9.84512 3.875 12 3.875ZM12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22ZM10.4375 15.125C9.91797 15.125 9.5 15.543 9.5 16.0625C9.5 16.582 9.91797 17 10.4375 17H13.5625C14.082 17 14.5 16.582 14.5 16.0625C14.5 15.543 14.082 15.125 13.5625 15.125H13.25V11.6875C13.25 11.168 12.832 10.75 12.3125 10.75H10.4375C9.91797 10.75 9.5 11.168 9.5 11.6875C9.5 12.207 9.91797 12.625 10.4375 12.625H11.375V15.125H10.4375ZM12 9.5C12.3315 9.5 12.6495 9.3683 12.8839 9.13388C13.1183 8.89946 13.25 8.58152 13.25 8.25C13.25 7.91848 13.1183 7.60054 12.8839 7.36612C12.6495 7.1317 12.3315 7 12 7C11.6685 7 11.3505 7.1317 11.1161 7.36612C10.8817 7.60054 10.75 7.91848 10.75 8.25C10.75 8.58152 10.8817 8.89946 11.1161 9.13388C11.3505 9.3683 11.6685 9.5 12 9.5Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_91_3542",children:(0,a.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),(0,a.jsx)("span",{children:" KlientInnen "})]}),(0,a.jsxs)("button",{className:"nav-link ".concat("contact"===m?"active":""),id:"contact-tab","data-bs-toggle":"tab",role:"tab","aria-controls":"contact","aria-selected":"contact"===m,onClick:e=>u(0,"Kontakte",e),children:[" ",(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_431_39097)",children:(0,a.jsx)("path",{d:"M13.917 3C14.192 3 14.417 3.225 14.417 3.5V15.5C14.417 15.775 14.192 16 13.917 16H4.91699C4.64199 16 4.41699 15.775 4.41699 15.5V3.5C4.41699 3.225 4.64199 3 4.91699 3H13.917ZM4.91699 1.5C3.81387 1.5 2.91699 2.39688 2.91699 3.5V15.5C2.91699 16.6031 3.81387 17.5 4.91699 17.5H13.917C15.0201 17.5 15.917 16.6031 15.917 15.5V3.5C15.917 2.39688 15.0201 1.5 13.917 1.5H4.91699ZM9.41699 9.5C9.94742 9.5 10.4561 9.28929 10.8312 8.91421C11.2063 8.53914 11.417 8.03043 11.417 7.5C11.417 6.96957 11.2063 6.46086 10.8312 6.08579C10.4561 5.71071 9.94742 5.5 9.41699 5.5C8.88656 5.5 8.37785 5.71071 8.00278 6.08579C7.62771 6.46086 7.41699 6.96957 7.41699 7.5C7.41699 8.03043 7.62771 8.53914 8.00278 8.91421C8.37785 9.28929 8.88656 9.5 9.41699 9.5ZM8.41699 10.5C7.03574 10.5 5.91699 11.6188 5.91699 13C5.91699 13.275 6.14199 13.5 6.41699 13.5H12.417C12.692 13.5 12.917 13.275 12.917 13C12.917 11.6188 11.7982 10.5 10.417 10.5H8.41699ZM17.917 4C17.917 3.725 17.692 3.5 17.417 3.5C17.142 3.5 16.917 3.725 16.917 4V6C16.917 6.275 17.142 6.5 17.417 6.5C17.692 6.5 17.917 6.275 17.917 6V4ZM17.417 7.5C17.142 7.5 16.917 7.725 16.917 8V10C16.917 10.275 17.142 10.5 17.417 10.5C17.692 10.5 17.917 10.275 17.917 10V8C17.917 7.725 17.692 7.5 17.417 7.5ZM17.917 12C17.917 11.725 17.692 11.5 17.417 11.5C17.142 11.5 16.917 11.725 16.917 12V14C16.917 14.275 17.142 14.5 17.417 14.5C17.692 14.5 17.917 14.275 17.917 14V12Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_431_39097",children:(0,a.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.666992)"})})})]}),(0,a.jsx)("span",{children:" Kontakte"})]}),(0,a.jsxs)("button",{className:"nav-link ".concat("activity"===m?"active":""),id:"activity-tab","data-bs-toggle":"tab","data-bs-target":"#activity",role:"tab","aria-controls":"activity","aria-selected":"activity"===m,onClick:e=>u(0,"Aktivitat",e),children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8581)",children:(0,a.jsx)("path",{d:"M9.48594 3.00021C9.74609 2.99317 9.97813 3.16661 10.0438 3.41974L11.9023 10.5424L12.5375 9.19005C12.7531 8.73067 13.2172 8.43536 13.7258 8.43536H16.4375C16.7492 8.43536 17 8.68614 17 8.99786C17 9.30958 16.7492 9.56036 16.4375 9.56036H13.7258C13.6531 9.56036 13.5875 9.60255 13.557 9.66817L12.2586 12.4268C12.1578 12.64 11.9328 12.769 11.6984 12.7479C11.4641 12.7268 11.2648 12.558 11.2062 12.3307L9.56328 6.03302L7.80078 14.5525C7.74922 14.808 7.52891 14.9932 7.26875 15.0002C7.00859 15.0072 6.77656 14.8385 6.70859 14.5877L5.35859 9.70099C5.33516 9.61896 5.2625 9.56271 5.17813 9.56271H2.5625C2.25078 9.56271 2 9.31192 2 9.00021C2 8.68849 2.25078 8.43771 2.5625 8.43771H5.17813C5.76875 8.43771 6.28672 8.83146 6.44375 9.40099L7.17031 12.0401L8.94922 3.44786C9.00313 3.19239 9.22344 3.00724 9.48594 3.00021Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8581",children:(0,a.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.5)"})})})]}),(0,a.jsx)("span",{children:" Aktivitat"})]}),(0,a.jsxs)("button",{className:"nav-link ".concat("document"===m?"active":""),id:"document-tab","data-bs-toggle":"tab","data-bs-target":"#document",role:"tab","aria-controls":"document","aria-selected":"document"===m,onClick:e=>u(0,"Dokumente",e),children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8589)",children:(0,a.jsx)("path",{d:"M13.125 15.0938C13.3828 15.0938 13.5938 14.8828 13.5938 14.625V6.1875H11.25C10.7314 6.1875 10.3125 5.76855 10.3125 5.25V2.90625H5.625C5.36719 2.90625 5.15625 3.11719 5.15625 3.375V14.625C5.15625 14.8828 5.36719 15.0938 5.625 15.0938H13.125ZM3.75 3.375C3.75 2.34082 4.59082 1.5 5.625 1.5H10.4736C10.9717 1.5 11.4492 1.69629 11.8008 2.04785L14.4521 4.69922C14.8037 5.05078 15 5.52832 15 6.02637V14.625C15 15.6592 14.1592 16.5 13.125 16.5H5.625C4.59082 16.5 3.75 15.6592 3.75 14.625V3.375Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8589",children:(0,a.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.75)"})})})]}),(0,a.jsx)("span",{children:" Dokumente"})]}),(0,a.jsxs)("button",{className:"nav-link ".concat("attorney"===m?"active":""),id:"attorney-tab","data-bs-toggle":"tab","data-bs-target":"#attorney",role:"tab","aria-controls":"attorney","aria-selected":"attorney"===m,onClick:e=>u(0,"Vollmachten",e),children:[(0,a.jsx)("i",{className:"fa-solid fa-paint-roller fa-fw"}),"Vollmachten"]}),(0,a.jsxs)("button",{className:"nav-link ".concat("services"===m?"active":""),id:"services-tab","data-bs-toggle":"tab","data-bs-target":"#services",role:"tab","aria-controls":"services","aria-selected":"services"===m,onClick:e=>u(0,"SPV",e),children:[" ",(0,a.jsx)("i",{className:"fa-regular fa-lightbulb fa-fw"}),"SPV"]}),(0,a.jsxs)("button",{className:"nav-link ".concat("bills"===m?"active":""),id:"bills-tab","data-bs-toggle":"tab","data-bs-target":"#bills",role:"tab","aria-controls":"bills","aria-selected":"bills"===m,onClick:e=>u(0,"Rechnung",e),children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(#clip0_207_8565)",children:(0,a.jsx)("path",{d:"M5.125 15.0938H12.625C12.8828 15.0938 13.0938 14.8828 13.0938 14.625V6.1875H10.75C10.2314 6.1875 9.8125 5.76855 9.8125 5.25V2.90625H5.125C4.86719 2.90625 4.65625 3.11719 4.65625 3.375V14.625C4.65625 14.8828 4.86719 15.0938 5.125 15.0938ZM3.25 3.375C3.25 2.34082 4.09082 1.5 5.125 1.5H9.97363C10.4717 1.5 10.9492 1.69629 11.3008 2.04785L13.9521 4.69922C14.3037 5.05078 14.5 5.52832 14.5 6.02637V14.625C14.5 15.6592 13.6592 16.5 12.625 16.5H5.125C4.09082 16.5 3.25 15.6592 3.25 14.625V3.375ZM5.59375 4.78125C5.59375 4.52344 5.80469 4.3125 6.0625 4.3125H8.40625C8.66406 4.3125 8.875 4.52344 8.875 4.78125C8.875 5.03906 8.66406 5.25 8.40625 5.25H6.0625C5.80469 5.25 5.59375 5.03906 5.59375 4.78125ZM5.59375 6.65625C5.59375 6.39844 5.80469 6.1875 6.0625 6.1875H8.40625C8.66406 6.1875 8.875 6.39844 8.875 6.65625C8.875 6.91406 8.66406 7.125 8.40625 7.125H6.0625C5.80469 7.125 5.59375 6.91406 5.59375 6.65625ZM8.875 13.2188C8.875 12.9609 9.08594 12.75 9.34375 12.75H11.6875C11.9453 12.75 12.1562 12.9609 12.1562 13.2188C12.1562 13.4766 11.9453 13.6875 11.6875 13.6875H9.34375C9.08594 13.6875 8.875 13.4766 8.875 13.2188ZM6.53125 8.0625H11.2188C11.7373 8.0625 12.1562 8.48145 12.1562 9V10.875C12.1562 11.3936 11.7373 11.8125 11.2188 11.8125H6.53125C6.0127 11.8125 5.59375 11.3936 5.59375 10.875V9C5.59375 8.48145 6.0127 8.0625 6.53125 8.0625Z"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_207_8565",children:(0,a.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0.25)"})})})]}),(0,a.jsx)("span",{children:" Rechnung "})]})]})})})})})})]})})},c=s.memo(n)},85364:(e,t,l)=>{l.r(t),l.d(t,{default:()=>f});var s=l(69060),i=l(56448),a=l(29816),n=l(36440),c=l(48701),o=l(16916),d=l(57295),r=l(45248),h=l(32980),m=(l(21680),l(82496));const u=e=>{let{setHide:t,documentId:l,getDetails:s}=e;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.c,{show:!0,centered:!0,children:[(0,m.jsxs)(i.c.Title,{children:[(0,m.jsxs)("svg",{style:{marginLeft:"200px",marginTop:"25px"},width:"44",height:"53",viewBox:"0 0 44 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9193 0C19.9914 0 24.0636 0 28.1357 0C28.1978 0.0248302 28.2599 0.0620762 28.322 0.0744913C30.5194 0.397284 32.2948 2.30921 32.3941 4.50668C32.4313 5.13985 32.4562 5.77302 32.481 6.44343C32.7169 6.44343 32.928 6.44343 33.1266 6.44343C35.1751 6.46826 37.236 6.4186 39.2845 6.51792C41.4199 6.62966 43.158 8.35535 43.4808 10.5032C43.7912 12.6634 42.5745 14.8236 40.5632 15.5561C40.1287 15.7175 40.017 15.9286 40.017 16.3631C40.0294 26.1586 40.0294 35.9541 40.0294 45.7496C40.0294 46.271 40.0046 46.78 39.9425 47.3015C39.6569 50.008 37.7202 52.2179 35.0882 52.851C34.9144 52.8883 34.7281 52.9503 34.5543 53C26.199 53 17.856 53 9.50069 53C9.40137 52.9628 9.31446 52.9131 9.21514 52.9007C8.03571 52.6896 6.99284 52.1806 6.11137 51.3488C4.59673 49.9211 4.0008 48.1333 4.0008 46.0848C4.0008 36.1651 4.00081 26.2455 4.01322 16.3258C4.01322 15.8913 3.88907 15.7051 3.47937 15.5685C2.62273 15.283 1.9399 14.7243 1.41847 13.9918C0.363183 12.4896 0.164543 10.8632 0.946693 9.19958C1.67918 7.62286 2.95794 6.61724 4.70846 6.51792C6.76937 6.40618 8.84269 6.45585 10.916 6.43102C11.1146 6.43102 11.3133 6.43102 11.574 6.43102C11.574 5.922 11.5616 5.48747 11.574 5.04053C11.5988 3.35207 12.1948 1.91192 13.6101 0.955961C14.3053 0.521433 15.1495 0.310377 15.9193 0ZM37.5464 15.9286C27.1674 15.9286 16.8504 15.9286 6.50865 15.9286C6.50865 16.1024 6.50865 16.2389 6.50865 16.3755C6.50865 26.2952 6.50865 36.2148 6.50865 46.1345C6.50865 46.4821 6.53348 46.8297 6.59556 47.1649C6.90593 49.1637 8.44541 50.517 10.4442 50.517C18.1788 50.5294 25.901 50.517 33.6356 50.517C34.604 50.517 35.4606 50.219 36.1807 49.561C37.2112 48.6175 37.5464 47.4008 37.5464 46.06C37.5464 36.19 37.5464 26.32 37.5464 16.45C37.5464 16.2886 37.5464 16.1272 37.5464 15.9286ZM21.9779 13.4083C27.4157 13.4083 32.841 13.4083 38.2789 13.4083C38.5396 13.4083 38.8003 13.3959 39.0486 13.371C40.1039 13.2593 40.886 12.4647 40.9978 11.4219C41.1095 10.3542 40.4887 9.36098 39.4707 9.06301C39.1355 8.96369 38.763 8.93886 38.403 8.93886C27.4901 8.92645 16.5649 8.93886 5.65201 8.93886C5.3913 8.93886 5.13058 8.95128 4.88228 8.98852C3.82699 9.14992 3.06967 10.0066 3.00759 11.0867C2.94552 12.0923 3.6656 13.0855 4.65881 13.3214C5.00643 13.4083 5.37888 13.4083 5.73891 13.4083C11.1395 13.4083 16.5649 13.4083 21.9779 13.4083ZM14.0446 6.40619C19.3955 6.40619 24.6595 6.40619 29.9235 6.40619C29.9235 5.7606 29.9732 5.16468 29.9111 4.56875C29.7869 3.41415 28.8558 2.50785 27.6888 2.50785C23.9146 2.48302 20.128 2.48302 16.3538 2.50785C15.2489 2.52026 14.3177 3.31483 14.1439 4.40736C14.0322 5.05294 14.0694 5.72336 14.0446 6.40619Z",fill:"#C20F0F"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9322 32.217C15.9322 35.9787 15.9322 39.7405 15.9322 43.4899C15.9322 44.5576 15.5101 45.1287 14.7156 45.1411C13.9086 45.1535 13.4492 44.5576 13.4492 43.4775C13.4492 35.9415 13.4492 28.4055 13.4492 20.8696C13.4492 20.6337 13.474 20.3854 13.5237 20.1495C13.6479 19.5784 14.1072 19.2308 14.6783 19.2308C15.237 19.2184 15.7212 19.566 15.8577 20.1123C15.9198 20.3481 15.9198 20.584 15.9198 20.8323C15.9322 24.6189 15.9322 28.418 15.9322 32.217Z",fill:"#C20F0F"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7852 32.2046C20.7852 28.3807 20.7852 24.5444 20.7852 20.7206C20.7852 20.1495 20.9217 19.6653 21.4556 19.3674C22.1012 19.0073 22.9702 19.3549 23.1813 20.0626C23.2558 20.3233 23.2806 20.6089 23.2806 20.882C23.2806 28.4179 23.2806 35.9539 23.2806 43.4899C23.2806 43.7257 23.2682 43.974 23.2061 44.2099C23.0695 44.781 22.5729 45.1659 22.0143 45.1535C21.468 45.1411 20.9838 44.7686 20.8597 44.2099C20.81 43.974 20.7976 43.7257 20.7976 43.4899C20.7852 39.7281 20.7852 35.9663 20.7852 32.2046Z",fill:"#C20F0F"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1113 32.1548C28.1113 28.393 28.1113 24.6312 28.1113 20.8819C28.1113 19.7893 28.5459 19.2183 29.3653 19.2307C30.1598 19.2431 30.5943 19.8142 30.5943 20.8695C30.5943 28.4054 30.5943 35.9414 30.5943 43.4773C30.5943 44.5574 30.135 45.1534 29.328 45.141C28.5334 45.1285 28.1113 44.5574 28.1113 43.4897C28.1113 39.7156 28.1113 35.9414 28.1113 32.1548Z",fill:"#C20F0F"})]}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("h4",{style:{marginLeft:"150px",color:"black"},children:"Sind Sie sicher?"})]}),(0,m.jsx)(i.c.Body,{children:(0,m.jsx)("p",{style:{textAlign:"center"},children:"M\xf6chten Sie diesen Datensatz wirklich l\xf6schen? dieser Vorgang kann nicht r\xfcckg\xe4ngig gemacht werden"})}),(0,m.jsx)(i.c.Footer,{children:(0,m.jsxs)("div",{className:"mx-auto",children:[(0,m.jsx)("button",{className:"btn",style:{background:"#015291",border:"#015291",color:"white"},onClick:()=>t(!1),children:"Abbrechen"}),"\xa0\xa0",(0,m.jsx)("button",{className:"btn",style:{background:"#d04545",color:"white"},onClick:async()=>{if(l)try{200===(await(0,r.OO)("".concat("http://95.217.77.208:4142","/document/get_document"),l)).status&&h.m4.success("Daten erfolgreich gel\xf6scht"),s(),t(!1)}catch(e){h.m4.error("Beim L\xf6schen des Datensatzes ist ein Fehler aufgetreten"),t(!1)}},children:"L\xf6schen"})]})})]}),(0,m.jsx)(h.jd,{})]})};var C=l(38292),x=l(20008),v=l(86732);const p=e=>{let{setEdit:t,getDetails:l}=e;let i=localStorage.getItem("DocumentEditDetails"),a=JSON.parse(i);const[n,c]=(0,s.useState)({document_title:null===a||void 0===a?void 0:a.document_title,document_type:null===a||void 0===a?void 0:a.document_type,document_upload:null===a||void 0===a?void 0:a.document_upload}),[o,d]=(0,s.useState)(!1),[u,C]=(0,s.useState)(!1),p=e=>{const{name:t,value:l}=e.target;c({...n,[t]:l})},j=()=>{t(!1)};return(0,m.jsxs)("div",{className:"modal",tabIndex:-1,style:{display:"block",backgroundColor:"rgba(0,0,0,0.8)",maxHeight:"100%",color:"black"},children:[(0,m.jsx)("div",{className:"modal-dialog modal-form modal-dialog-centered edit-modal-form ",children:(0,m.jsxs)("div",{className:"modal-content modal-form",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h5",{className:"modal-title",children:"Dokument aktualisieren"}),(0,m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:j})]}),(0,m.jsx)(v.c,{noValidate:!0,validated:o,children:(0,m.jsxs)("div",{className:"modal-body modal-form-wrap",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("label",{htmlFor:"inputPassword",className:"col-md-3 col-form-label",children:"Titel"}),(0,m.jsx)("div",{className:"col-md-9",children:(0,m.jsx)("input",{id:"title",required:!0,name:"document_title",value:n.document_title,onChange:p,type:"text",className:"form-control"})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("label",{htmlFor:"inputPassword",className:"col-md-3 col-form-label",children:"Dokumenttyp"}),(0,m.jsx)("div",{className:"col-md-9",children:(0,m.jsxs)("select",{id:"document_type",name:"document_type",value:n.document_type,onChange:p,className:"form-control form-select",children:[(0,m.jsx)("option",{children:"--select--"}),(0,m.jsx)("option",{value:"Living will",children:"Patientenverf\xfcgung"}),(0,m.jsx)("option",{value:"Health care power of attorney",children:"Gesundheitsvollmacht"}),(0,m.jsx)("option",{value:"Power of attorney",children:"Vorsorgevollmacht"}),(0,m.jsx)("option",{value:"care order",children:"Betreuungsverf\xfcgung"}),(0,m.jsx)("option",{value:"Feces pass",children:"Kotfallpass"}),(0,m.jsx)("option",{value:"Power of attorney digital test",children:"Vollmacht digitales Prbe"}),(0,m.jsx)("option",{value:"Write to",children:"Anschreiben"}),(0,m.jsx)("option",{value:"Personal document",children:"Pers\xf6nliches Dokument"}),(0,m.jsx)("option",{value:"Other",children:"Anderes"}),(0,m.jsx)("option",{value:"Living will",children:"Patientenverf\xfcgung"})]})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("label",{htmlFor:"inputPassword",className:"col-md-3 col-form-label",children:"Datei-Upload"}),(0,m.jsx)("div",{className:"col-md-9",children:(0,m.jsxs)("div",{className:"file-upload-wrap",children:[(0,m.jsx)("input",{id:"fileUpload",type:"file",className:"form-control",name:"document_upload",onChange:e=>{const t=e.target.files[0];c({...n,document_upload:t})}}),(0,m.jsxs)("div",{className:"file-input-wrap",children:[(0,m.jsxs)("div",{className:"filename-field",children:[(0,m.jsx)("span",{children:n.document_upload?n.document_upload:"sample.Fragebogen"}),(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",onClick:()=>{c("")},children:[(0,m.jsx)("g",{clipPath:"url(#clip0_493_7693)",children:(0,m.jsx)("path",{d:"M5.89128 5.89128C6.13607 5.64909 6.5319 5.64909 6.75326 5.89128L7.97721 7.11784L9.22461 5.89128C9.4694 5.64909 9.86524 5.64909 10.0866 5.89128C10.3522 6.13607 10.3522 6.5319 10.0866 6.75326L8.88346 7.97721L10.0866 9.22461C10.3522 9.4694 10.3522 9.86524 10.0866 10.0866C9.86524 10.3522 9.4694 10.3522 9.22461 10.0866L7.97721 8.88346L6.75326 10.0866C6.5319 10.3522 6.13607 10.3522 5.89128 10.0866C5.64909 9.86524 5.64909 9.4694 5.89128 9.22461L7.11784 7.97721L5.89128 6.75326C5.64909 6.5319 5.64909 6.13607 5.89128 5.89128ZM14.6673 8.00065C14.6673 11.6829 11.6829 14.6673 8.00065 14.6673C4.31836 14.6673 1.33398 11.6829 1.33398 8.00065C1.33398 4.31836 4.31836 1.33398 8.00065 1.33398C11.6829 1.33398 14.6673 4.31836 14.6673 8.00065ZM8.00065 2.58398C5.00846 2.58398 2.58398 5.00846 2.58398 8.00065C2.58398 10.9928 5.00846 13.4173 8.00065 13.4173C10.9928 13.4173 13.4173 10.9928 13.4173 8.00065C13.4173 5.00846 10.9928 2.58398 8.00065 2.58398Z",fill:"#005291"})}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_493_7693",children:(0,m.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]})]}),(0,m.jsx)("div",{className:"file-btn",children:"Durchsuche"})]})]})})]})]})}),(0,m.jsx)("div",{className:"modal-footer",children:(0,m.jsxs)("div",{className:"btn-wrapper d-flex w-100 m-0 justify-content-end",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-cancel","data-bs-dismiss":"modal",onClick:j,children:"Abbrechen"}),(0,m.jsx)("button",{type:"button",className:"btn btn-save ms-3",onClick:async e=>{e.preventDefault();if(!1===e.currentTarget.checkValidity())return e.stopPropagation(),void d(!0);const{document_title:t,document_type:s,document_upload:i}=n;if(!t||!s)return h.m4.error("Bitte f\xfcllen Sie alle Angaben aus.");try{C(!0);const e=new FormData;e.append("document_title",t),e.append("document_type",s),e.append("document_upload",i);const n=await(0,r.sJ)("".concat("http://95.217.77.208:4142","/document/get_document/update/").concat(null===a||void 0===a?void 0:a._id),e);200===(null===n||void 0===n?void 0:n.status)?(C(!1),c({document_title:"",document_type:"",document_upload:null}),h.m4.success("Dokument erfolgreich aktualisiert"),l()):h.m4.error("Etwas ist schief gelaufen"),j()}catch(o){console.error(o)}},children:u?(0,m.jsx)(x.c,{}):"Aktualisieren"})]})})]})}),(0,m.jsx)(h.jd,{})]})};var j=l(86264),g=l(48432);const b=()=>{var e;let t=localStorage.getItem("customerDatat"),l=(JSON.parse(t),localStorage.getItem("record")),x=JSON.parse(l);const v=e=>(0,h.m4)(e),[b,f]=(0,s.useState)(!1),w=[{title:"TITLE",dataIndex:"document_title",render:e=>(0,m.jsx)("a",{children:e}),width:"20%"},{title:"DOKUMENTENTYP",dataIndex:"document_type",width:"80%"},{title:"AKTION",dataIndex:"action",render:(e,t)=>{var l,s,i,n;return(0,m.jsxs)(m.Fragment,{children:[(null===x||void 0===x||null===(l=x.user)||void 0===l?void 0:l._id)===(null===t||void 0===t?void 0:t.added_by)&&(0,j.Az)().includes("owned")||(0,j.Az)().includes("yes")||"true"===(null===x||void 0===x||null===(s=x.user)||void 0===s?void 0:s.isAdminFullRights)?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>T(t),children:[(0,m.jsx)(a.e0w,{className:"fs-5",style:{color:"#5C86B4"}}),"\xa0\xa0Bearbeiten"]})}):"",(null===x||void 0===x||null===(i=x.user)||void 0===i?void 0:i._id)===(null===t||void 0===t?void 0:t.added_by)&&(0,j.Wk)().includes("owned")||(0,j.Wk)().includes("yes")||"true"===(null===x||void 0===x||null===(n=x.user)||void 0===n?void 0:n.isAdminFullRights)?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("button",{style:{background:"none",border:"none"},onClick:()=>q(t._id),children:[(0,m.jsx)(g.WSw,{className:"text-danger text-bold fs-5"})," L\xf6schen"]})}):""]})}}],[_,N]=(0,s.useState)(!1),[y,k]=(0,s.useState)(""),[L,S]=(0,s.useState)("checkbox"),[P,H]=(0,s.useState)(!1),V="http://95.217.77.208:4142";let M=localStorage.getItem("customerDatat"),Z=JSON.parse(M);const[D,I]=(0,s.useState)({document_title:"",document_type:"",customer_id:null===Z||void 0===Z?void 0:Z._id,added_by:null===x||void 0===x||null===(e=x.user)||void 0===e?void 0:e._id}),[F,B]=(0,s.useState)(""),[A,R]=(0,s.useState)([]),T=e=>{let t=JSON.stringify(e);localStorage.setItem("DocumentEditDetails",t),f(!0)};console.log("asjhjdgas",F.name);const[E,K]=(0,s.useState)(1),[O,U]=(0,s.useState)(0),[z,J]=(0,s.useState)(""),W=e=>{if(e.target){const{name:t,value:l}=e.target;I({...D,[t]:l})}else I({...D,document_type:e.label})},G=()=>H(!1),q=e=>{k(e),N(!0)},Y=async()=>{try{var e;const t=await fetch("".concat(V,"/document/get_document?page=").concat(E,"&resultPerPage=").concat(z)),l=await t.json();U(null===l||void 0===l?void 0:l.pageCount);const s=null===l||void 0===l||null===(e=l.result)||void 0===e?void 0:e.filter((e=>"active"===e.is_deleted));R(s)}catch(t){console.error("Error fetching customer record:",t)}};return(0,s.useEffect)((()=>{Y()}),[E,z]),(0,m.jsxs)("div",{style:{background:"#fff"},children:[_?(0,m.jsx)(u,{setHide:N,documentId:y,getDetails:Y}):"",b?(0,m.jsx)(p,{setEdit:f,getDetails:Y}):"",(0,m.jsx)(C.default,{}),(0,m.jsx)("h5",{className:"mx-3",children:"Dokumente"}),(0,m.jsx)("hr",{className:"mx-3"}),(0,m.jsxs)("div",{className:"row p-3 mx-3",style:{border:"1px solid lightgray",borderRadius:"5px"},children:[(0,m.jsxs)("div",{className:"col-sm-9",children:[(0,m.jsx)("h5",{children:"Dokumente verwalten"}),(0,m.jsx)("p",{children:"Senden Sie anpassbare Angebote, Vorschl\xe4ge und Vertr\xe4ge, um Gesch\xe4fte schneller abzuschlie\xdfen."})]}),(0,m.jsxs)("div",{className:"col-sm-3 mt-3 text-end",children:[(0,m.jsxs)("button",{type:"button",className:"btn btn text-light",style:{background:"#0b5995"},onClick:()=>H(!0),children:[(0,m.jsx)(a.wRB,{style:{color:"white"}}),"\xa0 Dokument hochladen"]}),(0,m.jsxs)(i.c,{show:P,onHide:G,centered:!0,className:"modal-form modal-form-wrap",children:[(0,m.jsx)(i.c.Header,{closeButton:!0,className:"border-0 p-3 pb-0",children:(0,m.jsx)(i.c.Title,{className:"modal-title",children:"Details zum Dokument"})}),(0,m.jsx)(i.c.Body,{className:"p-3 pb-0",children:(0,m.jsxs)("div",{className:"container-fluid",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-3",children:(0,m.jsx)("label",{htmlFor:"title",children:"Titel"})}),(0,m.jsx)("div",{className:"col-md-9",children:(0,m.jsx)("input",{id:"title",required:!0,name:"document_title",value:D.document_title,onChange:W,placeholder:"Steuer",type:"text",className:"form-control"})})]}),(0,m.jsxs)("div",{className:"row mb-3",children:[(0,m.jsx)("div",{className:"col-md-3",children:(0,m.jsx)("label",{htmlFor:"documentType",children:"Documenttype"})}),(0,m.jsx)("div",{className:"col-md-9",children:(0,m.jsx)(d.cp,{className:"w-100",options:[{value:"Living will",label:"Patientenverf\xfcgung"},{value:"Health care power of attorney",label:"Gesundheitsvollmacht"},{value:"Power of attorney",label:"Vorsorgevollmacht"},{value:"care order",label:"Betreuungsverf\xfcgung"},{value:"Feces pass",label:"Notfallpass"},{value:"Power of attorney digital test",label:"Vollmacht digitales Erbe"},{value:"Write to",label:"Anschreiben"},{value:"Personal document",label:"Pers\xf6nliches Dokument"},{value:"Other",label:"Anderes"}],onChange:W,value:{label:D.document_type||"Patientenverf\xfcgung",value:D.document_type||"Patientenverf\xfcgung"},name:"document_type"})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-3",children:(0,m.jsx)("label",{htmlFor:"fileUpload",children:"Datei-Upload"})}),(0,m.jsx)("div",{className:"col-md-9",children:(0,m.jsxs)("div",{className:"file-upload-wrap",children:[(0,m.jsx)("input",{id:"fileUpload",type:"file",className:"form-control",name:"document_upload",onChange:e=>B(e.target.files[0])}),(0,m.jsxs)("div",{className:"file-input-wrap",children:[(0,m.jsxs)("div",{className:"filename-field",children:[(0,m.jsx)("span",{children:F?F.name:"sample.Fragebogen"}),(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",onClick:()=>{B("")},children:[(0,m.jsx)("g",{clipPath:"url(#clip0_493_7693)",children:(0,m.jsx)("path",{d:"M5.89128 5.89128C6.13607 5.64909 6.5319 5.64909 6.75326 5.89128L7.97721 7.11784L9.22461 5.89128C9.4694 5.64909 9.86524 5.64909 10.0866 5.89128C10.3522 6.13607 10.3522 6.5319 10.0866 6.75326L8.88346 7.97721L10.0866 9.22461C10.3522 9.4694 10.3522 9.86524 10.0866 10.0866C9.86524 10.3522 9.4694 10.3522 9.22461 10.0866L7.97721 8.88346L6.75326 10.0866C6.5319 10.3522 6.13607 10.3522 5.89128 10.0866C5.64909 9.86524 5.64909 9.4694 5.89128 9.22461L7.11784 7.97721L5.89128 6.75326C5.64909 6.5319 5.64909 6.13607 5.89128 5.89128ZM14.6673 8.00065C14.6673 11.6829 11.6829 14.6673 8.00065 14.6673C4.31836 14.6673 1.33398 11.6829 1.33398 8.00065C1.33398 4.31836 4.31836 1.33398 8.00065 1.33398C11.6829 1.33398 14.6673 4.31836 14.6673 8.00065ZM8.00065 2.58398C5.00846 2.58398 2.58398 5.00846 2.58398 8.00065C2.58398 10.9928 5.00846 13.4173 8.00065 13.4173C10.9928 13.4173 13.4173 10.9928 13.4173 8.00065C13.4173 5.00846 10.9928 2.58398 8.00065 2.58398Z",fill:"#005291"})}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_493_7693",children:(0,m.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]})]}),(0,m.jsx)("div",{className:"file-btn",children:"Durchsuche"})]})]})})]})]})}),(0,m.jsx)(i.c.Footer,{className:"border-top-0 p-3 pt-0 mt-3",children:(0,m.jsxs)("div",{className:"btn-wrapper d-flex w-100 m-0 justify-content-end",children:[(0,m.jsxs)("button",{className:"btn btn-cancel",onClick:G,children:[" ","Abbrechen"]}),(0,m.jsx)("button",{className:"btn btn-save ms-3",onClick:async e=>{try{var t;if(!D.document_title||!D.document_type)return v("Bitte f\xfcllen Sie alle Angaben aus");e.preventDefault();const l=new FormData;l.append("document_title",null===D||void 0===D?void 0:D.document_title),l.append("document_type",null===D||void 0===D?void 0:D.document_type),l.append("customer_id",null===Z||void 0===Z?void 0:Z._id),l.append("added_by",null===x||void 0===x||null===(t=x.user)||void 0===t?void 0:t._id),l.append("document_upload",F);const s="".concat(V,"/document/create_document");await(0,r.U1)(s,l);v("Dokumentdaten erfolgreich gespeichert"),I(""),G(),Y()}catch(l){return l}},children:"Speichern"})]})})]})]})]}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"row mx-2",children:[(0,m.jsx)("div",{className:"col-sm-12",children:(0,m.jsx)(n.c,{dataSource:A,columns:w,pagination:!1,responsive:"stack",rowKey:e=>e._id,rowSelection:{type:"checkbox",onChange:(e,t)=>{console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})}})}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-10",children:(0,m.jsx)(o.c,{spacing:2,children:(0,m.jsx)(c.c,{count:O,variant:"outlined",shape:"rounded",page:E,onChange:(e,t)=>{K(t)}})})}),(0,m.jsx)("div",{className:"col-sm-2 text-end",children:(0,m.jsxs)("select",{className:"form-control form-select",value:z,onChange:e=>{J(parseInt(e.target.value,10)),K(1)},children:[(0,m.jsx)("option",{value:10,children:"10 pro Seite"}),(0,m.jsx)("option",{value:20,children:"20 pro Seite"}),(0,m.jsx)("option",{value:50,children:"50 pro Seite"}),(0,m.jsx)("option",{value:100,children:"100 pro Seite"})]})})]}),(0,m.jsx)("br",{})]}),(0,m.jsx)("br",{}),(0,m.jsx)(h.jd,{})]})},f=s.memo(b)}}]);
//# sourceMappingURL=364.b4af714a.chunk.js.map