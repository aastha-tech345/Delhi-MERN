"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[893,940],{26940:(e,a,l)=>{l.r(a),l.d(a,{default:()=>r});var o=l(65043),t=l(70579);function r(e){let{onChange:a,value:l,placeholder:r,className:n}=e;const[s,i]=(0,o.useState)("");(0,o.useEffect)((()=>{if("string"===typeof l){const e=new Date(l);isNaN(e.getTime())?i(""):i(d(e))}else l instanceof Date&&!isNaN(l.getTime())?i(d(l)):i("")}),[l]);const d=e=>{var a,l,o,t,r;const n=null===e||void 0===e||null===(a=e.getDate())||void 0===a||null===(l=a.toString())||void 0===l?void 0:l.padStart(2,"0"),s=null===(o=(null===e||void 0===e?void 0:e.getMonth())+1)||void 0===o||null===(t=o.toString())||void 0===t?void 0:t.padStart(2,"0"),i=null===e||void 0===e||null===(r=e.getFullYear())||void 0===r?void 0:r.toString();return"".concat(n,".").concat(s,".").concat(i)};return(0,t.jsx)("div",{children:(0,t.jsx)("input",{type:"text",onChange:e=>{var a,l,o;let t=null===(a=e.target)||void 0===a?void 0:a.value,r="";t=null===(l=t)||void 0===l?void 0:l.replace(/\D/g,""),(null===(o=t)||void 0===o?void 0:o.length)>8&&(t=t.slice(0,8));for(let s=0;s<(null===(n=t)||void 0===n?void 0:n.length);s++){var n;2!==s&&4!==s||(r+="."),r+=t[s]}i(r)},onBlur:e=>{var l;const o=null===s||void 0===s||null===(l=s.split("."))||void 0===l?void 0:l.map((e=>parseInt(e,10)));let[t,r,n]=o;if(3===(null===o||void 0===o?void 0:o.length)){n<100&&(n+=1900),r<1&&(r=1),r>12&&(r=12);const e=new Date(n,r,0).getDate();t<1&&(t=1),t>e&&(t=e);const l=new Date(n,r-1,t);a(l)}else if(1===(null===o||void 0===o?void 0:o.length)){const e=o[0];if(e<100){let l;l=e<50?e+2e3:e+1900;const o=new Date(l,0,1);a(o)}}},value:s,placeholder:r,className:n})})}},87893:(e,a,l)=>{l.r(a),l.d(a,{default:()=>h});var o=l(65043),t=l(47503),r=(l(92342),l(8124)),n=l(73216),s=l(26940),i=(l(15935),l(70579));const d=()=>{var e,a,l,d,h,c,m,v;const[u,p]=(0,o.useState)(),[x,f]=(0,o.useState)([]),j=(0,n.Zp)(),C="http://95.217.77.208:4142",[_,N]=(0,o.useState)({AttorneyMasterData:!1,adoptDataFromHealthcare:Boolean(null===x||void 0===x||null===(e=x.powerOfAttorney)||void 0===e?void 0:e.adoptDataFromHealthcare),powerOfAttorneyData:Array.from({length:4},(()=>{var e,a,l,o,t,r,n,s,i,d;return{powerOfAttorney_fname:null===x||void 0===x||null===(e=x.healthCare)||void 0===e||null===(a=e.healthCareData)||void 0===a?void 0:a.map((e=>e.healthCare_fname)),powerOfAttorney_lname:null===x||void 0===x||null===(l=x.healthCare)||void 0===l||null===(o=l.healthCareData)||void 0===o?void 0:o.map((e=>e.healthCare_lname)),powerOfAttorney_address:null===x||void 0===x||null===(t=x.healthCare)||void 0===t||null===(r=t.healthCareData)||void 0===r?void 0:r.map((e=>e.healthCare_address)),powerOfAttorney_mobile:null===x||void 0===x||null===(n=x.healthCare)||void 0===n||null===(s=n.healthCareData)||void 0===s?void 0:s.map((e=>e.healthCare_mobile)),powerOfAttorney_phone:null===x||void 0===x||null===(i=x.healthCare)||void 0===i||null===(d=i.healthCareData)||void 0===d?void 0:d.map((e=>e.healthCare_phone))}}))}),[g,y]=(0,o.useState)({care_association:(null===x||void 0===x||null===(a=x.careProvision)||void 0===a?void 0:a.care_association)||""}),[w,b]=(0,o.useState)({fname:null===x||void 0===x||null===(l=x.securingattorney)||void 0===l?void 0:l.fname,lname:null===x||void 0===x||null===(d=x.securingattorney)||void 0===d?void 0:d.lname,address:null===x||void 0===x||null===(h=x.securingattorney)||void 0===h?void 0:h.address,dob:null!==x&&void 0!==x&&null!==(c=x.securingattorney)&&void 0!==c&&c.dob?new Date(x.securingattorney.dob):null,plz:null===x||void 0===x||null===(m=x.securingattorney)||void 0===m?void 0:m.plz,ort:null===x||void 0===x||null===(v=x.securingattorney)||void 0===v?void 0:v.ort}),D=(e,a)=>{const{name:l,value:o,type:t,checked:r}=e.target||{};O((e=>{const n=[...e.healthCareData];if("checkbox"===t)n[a]={...n[a],[l]:r};else if("healthCare_phone"===l){const e=o.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(e)&&(n[a]={...n[a],healthCare_phone:e})}else if("healthCare_mobile"===l){const e=o.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(e)&&(n[a]={...n[a],healthCare_mobile:e})}else n[a]={...n[a],[l]:o};return{...e,healthCareData:n}}))},[A,O]=(0,o.useState)({healthCareData:Array.from({length:4},(()=>{var e,a,l,o,t,r,n,s,i,d;return{healthCare_fname:null===x||void 0===x||null===(e=x.healthCare)||void 0===e||null===(a=e.healthCareData)||void 0===a?void 0:a.map((e=>e.healthCare_fname)),healthCare_lname:null===x||void 0===x||null===(l=x.healthCare)||void 0===l||null===(o=l.healthCareData)||void 0===o?void 0:o.map((e=>e.healthCare_lname)),healthCare_address:null===x||void 0===x||null===(t=x.healthCare)||void 0===t||null===(r=t.healthCareData)||void 0===r?void 0:r.map((e=>e.healthCare_address)),healthCare_mobile:null===x||void 0===x||null===(n=x.healthCare)||void 0===n||null===(s=n.healthCareData)||void 0===s?void 0:s.map((e=>e.healthCare_mobile)),healthCare_phone:null===x||void 0===x||null===(i=x.healthCare)||void 0===i||null===(d=i.healthCareData)||void 0===d?void 0:d.map((e=>e.healthCare_phone))}}))}),S=(e,a)=>{const{name:l,value:o,type:t,checked:r}=e.target||{};N((e=>{const n=[...e.powerOfAttorneyData];if("checkbox"===t)n[a]={...n[a],[l]:r};else if("powerOfAttorney_phone"===l){const e=o.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(e)&&(n[a]={...n[a],powerOfAttorney_phone:e})}else if("powerOfAttorney_mobile"===l){const e=o.replace(/[^\d+ ]/g,"");/^\+?(?:[0-9] ?){0,}$/.test(e)&&(n[a]={...n[a],powerOfAttorney_mobile:e})}return{...e,powerOfAttorneyData:n}}))},k=e=>{if(e instanceof Date)b({...w,dob:e});else if(e.target){const{name:a,value:l,type:o,checked:t}=e.target;if("plz"===a&&"text"===o){const e=l.replace(/[^0-9a-zA-Z9\xe4\xf6\xfc\xc4\xd6\xdc\xdf\xc4\xd6\xdc\xdf\s'-]/g,"");b({...w,plz:e})}else b({...w,[a]:"checkbox"===o?t:l})}else void 0!==e.value?b({...w,salution:e.value}):console.error("Invalid event or data provided to securingattorneyChange.")};let L=localStorage.getItem("customerRecord"),F=JSON.parse(L);const z={healthCare:A,powerOfAttorney:_,careProvision:g,securingattorney:w,customer_id:null===F||void 0===F?void 0:F._id};return(0,o.useEffect)((()=>{var e,a,l,o,t,r,n;y({care_association:null===x||void 0===x||null===(e=x.careProvision)||void 0===e?void 0:e.care_association}),b({fname:null===x||void 0===x||null===(a=x.securingattorney)||void 0===a?void 0:a.fname,lname:null===x||void 0===x||null===(l=x.securingattorney)||void 0===l?void 0:l.lname,address:null===x||void 0===x||null===(o=x.securingattorney)||void 0===o?void 0:o.address,dob:null===x||void 0===x||null===(t=x.securingattorney)||void 0===t?void 0:t.dob,plz:null===x||void 0===x||null===(r=x.securingattorney)||void 0===r?void 0:r.plz,ort:null===x||void 0===x||null===(n=x.securingattorney)||void 0===n?void 0:n.ort}),N((e=>({...e,powerOfAttorneyData:Array.from({length:4},((a,l)=>({powerOfAttorneyData:e.powerOfAttorneyData.map(((e,a)=>{var l,o,t,r,n,s,i,d,h,c,m,v,u,p,f;return{...e,powerOfAttorney_fname:(null===x||void 0===x||null===(l=x.healthCare)||void 0===l||null===(o=l.healthCareData)||void 0===o||null===(t=o[a])||void 0===t?void 0:t.healthCare_fname)||e.powerOfAttorney_fname,powerOfAttorney_lname:(null===x||void 0===x||null===(r=x.healthCare)||void 0===r||null===(n=r.healthCareData)||void 0===n||null===(s=n[a])||void 0===s?void 0:s.healthCare_lname)||e.powerOfAttorney_lname,powerOfAttorney_address:(null===x||void 0===x||null===(i=x.healthCare)||void 0===i||null===(d=i.healthCareData)||void 0===d||null===(h=d[a])||void 0===h?void 0:h.healthCare_address)||e.powerOfAttorney_address,powerOfAttorney_mobile:(null===x||void 0===x||null===(c=x.healthCare)||void 0===c||null===(m=c.healthCareData)||void 0===m||null===(v=m[a])||void 0===v?void 0:v.healthCare_mobile)||e.powerOfAttorney_mobile,powerOfAttorney_phone:(null===x||void 0===x||null===(u=x.healthCare)||void 0===u||null===(p=u.healthCareData)||void 0===p||null===(f=p[a])||void 0===f?void 0:f.healthCare_phone)||e.powerOfAttorney_phone}}))})))}))),O((e=>({...e,healthCareData:Array.from({length:4},((a,l)=>{var o,t,r,n,s,i,d,h,c,m,v,u,p,f,j,C,_,N,g,y;return{healthCare_fname:(null===x||void 0===x||null===(o=x.healthCare)||void 0===o||null===(t=o.healthCareData)||void 0===t||null===(r=t[l])||void 0===r?void 0:r.healthCare_fname)||(null===(n=e.healthCareData[l])||void 0===n?void 0:n.healthCare_fname)||"",healthCare_lname:(null===x||void 0===x||null===(s=x.healthCare)||void 0===s||null===(i=s.healthCareData)||void 0===i||null===(d=i[l])||void 0===d?void 0:d.healthCare_lname)||(null===(h=e.healthCareData[l])||void 0===h?void 0:h.healthCare_lname)||"",healthCare_address:(null===x||void 0===x||null===(c=x.healthCare)||void 0===c||null===(m=c.healthCareData)||void 0===m||null===(v=m[l])||void 0===v?void 0:v.healthCare_address)||(null===(u=e.healthCareData[l])||void 0===u?void 0:u.healthCare_address)||"",healthCare_mobile:(null===x||void 0===x||null===(p=x.healthCare)||void 0===p||null===(f=p.healthCareData)||void 0===f||null===(j=f[l])||void 0===j?void 0:j.healthCare_mobile)||(null===(C=e.healthCareData[l])||void 0===C?void 0:C.healthCare_mobile)||"",healthCare_phone:(null===x||void 0===x||null===(_=x.healthCare)||void 0===_||null===(N=_.healthCareData)||void 0===N||null===(g=N[l])||void 0===g?void 0:g.healthCare_phone)||(null===(y=e.healthCareData[l])||void 0===y?void 0:y.healthCare_phone)||""}}))})))}),[x,4]),(0,o.useEffect)((()=>{A.healthCareData.length<10&&O((e=>({...e,healthCareData:[...e.healthCareData,{healthCare_fname:"",healthCare_lname:"",healthCare_address:"",healthCare_phone:[]}]}))),(async()=>{try{const e=await fetch("".concat(C,"/attorney/get_attorney/").concat(F._id)),a=await e.json();f(a)}catch(e){console.error("Error fetching customer record:",e)}})(),_.powerOfAttorneyData.length<10&&N((e=>({...e,powerOfAttorneyData:[...e.powerOfAttorneyData,{powerOfAttorney_fname:"",powerOfAttorney_lname:"",powerOfAttorney_address:"",powerOfAttorney_phone:[],powerOfAttorney_mobile:[]}]})))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.default,{}),(0,i.jsxs)("div",{className:"inner-page-wrap",children:[(0,i.jsxs)("div",{className:"tab-content",children:[(0,i.jsx)("div",{className:"tab-title",children:(0,i.jsx)("h4",{children:"Vollmachten"})}),(0,i.jsxs)("div",{className:"block-wrap m-3",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-sm-12",children:[(0,i.jsx)("h3",{style:{color:"#244D92"},children:"Gesundheitsvollmacht"}),(0,i.jsx)("p",{className:"",style:{color:"#244D92"},children:"Bevollm\xe4chtigte Person(en):"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"row mb-2",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Vorname"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Nachname"})}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsx)("b",{children:"Adresse"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Telefon"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Mobil"})})]}),(0,i.jsx)("div",{children:A.healthCareData&&A.healthCareData.map(((e,a)=>(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>D(e,a),value:e.healthCare_fname,name:"healthCare_fname",type:"text",placeholder:"Vorname",className:"form-control z",id:"fname_".concat(a),maxLength:20,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>D(e,a),value:e.healthCare_lname,type:"text",name:"healthCare_lname",placeholder:"Nachname",className:"form-control",id:"lname_".concat(a),maxLength:20,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsx)("div",{className:" row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>D(e,a),value:e.healthCare_address,type:"text",name:"healthCare_address",placeholder:"Adresse",className:"form-control",id:"address_".concat(a)})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:" row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>D(e,a),value:e.healthCare_phone,name:"healthCare_phone",placeholder:"853-456-8464",className:"form-control",id:"phone_".concat(a),maxLength:20,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:" row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>D(e,a),value:e.healthCare_mobile,type:"text",name:"healthCare_mobile",placeholder:"853-456-8464",className:"form-control",id:"phone_".concat(a),maxLength:20,minLength:3})})})})]},a)))})]})]})}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-sm-12",children:[(0,i.jsx)("h3",{style:{color:"#244D92"},children:"Vorsorgevollmacht"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("label",{htmlFor:"adoptDataFromHealthcare",className:"col-sm-3 col-form-label",children:"Daten aus Gesundheitsvollmacht \xfcbernehmen"}),(0,i.jsxs)("div",{className:"col-sm-1 radio-check-wrap mt-2",children:[(0,i.jsx)("input",{type:"checkbox",onChange:()=>{N((e=>({...e,adoptDataFromHealthcare:!e.adoptDataFromHealthcare,powerOfAttorneyData:e.adoptDataFromHealthcare?_.powerOfAttorneyData.map((e=>({powerOfAttorney_fname:"",powerOfAttorney_lname:"",powerOfAttorney_address:"",powerOfAttorney_phone:"",powerOfAttorney_mobile:""}))):A.healthCareData.map((e=>({powerOfAttorney_fname:e.healthCare_fname,powerOfAttorney_lname:e.healthCare_lname,powerOfAttorney_address:e.healthCare_address,powerOfAttorney_phone:e.healthCare_phone,powerOfAttorney_mobile:e.healthCare_mobile})))})))},checked:_.adoptDataFromHealthcare,name:"adoptDataFromHealthcare"}),(0,i.jsx)("span",{})]})]}),(0,i.jsx)("p",{className:"",style:{color:"#244D92"},children:"Bevollm\xe4chtigte Person(en):"}),(0,i.jsxs)("div",{className:"row mb-2 mt-3",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Vorname"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Nachname"})}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsx)("b",{children:"Adresse"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Telefon"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Mobil"})})]}),_.powerOfAttorneyData&&_.powerOfAttorneyData.map(((e,a)=>(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>S(e,a),value:e.powerOfAttorney_fname,name:"powerOfAttorney_fname",type:"text",placeholder:"Vorname",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>S(e,a),value:e.powerOfAttorney_lname,name:"powerOfAttorney_lname",type:"text",placeholder:"Nachname",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-4",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>S(e,a),value:e.powerOfAttorney_address,name:"powerOfAttorney_address",type:"text",placeholder:"Adresse",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>S(e,a),value:e.powerOfAttorney_phone,name:"powerOfAttorney_phone",type:"text",placeholder:"853-456-8464",className:"form-control",maxLength:20,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:e=>S(e,a),value:e.powerOfAttorney_mobile,name:"powerOfAttorney_mobile",type:"text",placeholder:"853-456-8464",className:"form-control",maxLength:20,minLength:3})})})})]},a)))]})})]}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-sm-12",children:[(0,i.jsx)("h3",{style:{color:"#244D92"},children:"Betreuungsverf\xfcgung"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("label",{className:"col-sm-2 col-form-label",children:"Betreuungsverein"}),(0,i.jsx)("div",{className:"col-sm-10",children:(0,i.jsx)("textarea",{value:g.care_association,name:"care_association",onChange:e=>{const{name:a,value:l}=e.target;y({...g,[a]:l})},className:"form-control",placeholder:"Betreuungsverein"})})]}),(0,i.jsx)("hr",{})]})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-sm-12",children:[(0,i.jsx)("h3",{style:{color:"#244D92"},children:"Vollmacht zur Absicherung des digitalen Erbes"}),(0,i.jsxs)("div",{className:"row mb-2 mt-3",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Vorname"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Nachname"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Geburtsdatum"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Stra\xdfe mit Hausnummer"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"PLZ"})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("b",{children:"Ort"})})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:k,name:"fname",value:w.fname,type:"text",placeholder:"Vorname",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:k,name:"lname",value:w.lname,type:"text",placeholder:"Nachname",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)(s.default,{value:w.dob,onChange:k,name:"dob",placeholder:"Geburtsdatum",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onBlur:e=>{const{name:a,value:l}=e.target;let o=l.trim();/\d$/.test(l)&&(o=l.replace(/(\D)(\d)/,"$1 $2")),b({...w,[a]:o})},onChange:k,value:w.address,name:"address",type:"text",placeholder:"Stra\xdfe mit Hausnummer",className:"form-control"})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:k,name:"plz",value:w.plz,type:"text",className:"form-control",placeholder:"PLZ",maxLength:10,minLength:3})})})}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-sm-12",children:(0,i.jsx)("input",{onChange:k,name:"ort",value:w.ort,type:"text",className:"form-control",placeholder:"Ort"})})})})]})]})}),(0,i.jsx)("hr",{}),(0,i.jsxs)("div",{className:"text-end mx-3",children:[(0,i.jsx)("button",{onClick:()=>{localStorage.removeItem("tabId"),j("/customer/customer_info")},type:"button",className:"btn btn",style:{background:"#d04545",color:"white"},children:"Abbrechen"}),"\xa0 \xa0",(0,i.jsx)("button",{onClick:async()=>{const e=z.healthCare.healthCareData;for(const s of e){if(s.healthCare_phone&&s.healthCare_phone.startsWith("000"))return t.oR.warning("Ung\xfcltige Telefonnummer");if(s.healthCare_mobile&&s.healthCare_mobile.startsWith("000"))return t.oR.warning("Ung\xfcltige Mobilnummer")}let a=new Date,l=null===w||void 0===w?void 0:w.dob;if(null!==w&&void 0!==w&&w.dob){var o;if((null===(o=new Date(null===w||void 0===w?void 0:w.dob))||void 0===o?void 0:o.getFullYear())<1900)return t.oR.warning("Das Geburtsdatum darf nicht vor 1900 liegen")}if(w&&w.dob){if(new Date(w.dob)>a)return t.oR.warning("Das Geburtsdatum darf nicht in der Zukunft liegen")}let r=new Date(l);if((a.getTime()-r.getTime())/315576e5<18)return t.oR.warning("Du musst mindestens 18 Jahre alt sein, um einen Vertrag zu unterschreiben.");try{let e,a;F?(e="".concat(C,"/attorney/get_attorney/").concat(F._id),a="PUT"):(e="".concat(C,"/attorney"),a="POST");let l=await fetch(e,{method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify(z)});201===(await l.json()).status?t.oR.success("Daten erfolgreich gespeichert"):t.oR.error("Fehler beim Speichern der Daten. Weitere Informationen finden Sie auf der Konsole.")}catch(n){t.oR.error("Error saving data. Please try again.")}},type:"button",style:{background:"#0b5995",color:"white"},className:"btn btn",children:"Speichern"})]})]})]}),(0,i.jsx)(t.N9,{})]})]})},h=o.memo(d)},15935:()=>{}}]);
//# sourceMappingURL=893.e9b0e01f.chunk.js.map