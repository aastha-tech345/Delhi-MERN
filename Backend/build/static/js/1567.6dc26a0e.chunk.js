"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1567],{25577:function(e,n,t){t.r(n);t(72791);var r=t(81608),c=t(93789),o=t(16856),i=t(72206),u=t(31773),s=t(80184),a=(i.Z.RangePicker,[{title:"ID",dataIndex:"id",key:"id",render:function(e){return(0,s.jsx)("a",{children:e})}},{title:"PROJECT",dataIndex:"project",key:"project"},{title:"DATUM DER RECHNUNG",dataIndex:"address",key:"address"},{title:"FALLIGKEITS DATUM",dataIndex:"address",key:"address"},{title:"RECHNUNG INSGESAMT",dataIndex:"address",key:"address"},{title:"FALLIG",dataIndex:"address",key:"address"},{title:"STATUS",dataIndex:"address",key:"address"}]),d=[{project:"HVD",key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{project:"HVD",key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{project:"HVD",key:"123",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"]}];n.default=function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"row m-4 p-4  shadow",children:[(0,s.jsx)("div",{className:"col-sm-2",children:(0,s.jsx)("input",{type:"search",id:"form1",placeholder:"Ihre Suche eingeben",className:"form-control"})}),(0,s.jsx)("div",{className:"col-sm-3",children:(0,s.jsxs)("div",{className:"d-flex",children:[(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(c.Z.Toggle,{style:{background:"#0b5995"},id:"dropdown-basic",children:"status"}),(0,s.jsxs)(c.Z.Menu,{children:[(0,s.jsx)(c.Z.Item,{href:"#/action-1",children:"success"}),(0,s.jsx)(c.Z.Item,{href:"#/action-2",children:"pending"})]})]}),"\xa0",(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(c.Z.Toggle,{style:{background:"#0b5995"},id:"dropdown-basic",children:"type"}),(0,s.jsxs)(c.Z.Menu,{children:[(0,s.jsx)(c.Z.Item,{href:"#/action-1",children:"success"}),(0,s.jsx)(c.Z.Item,{href:"#/action-2",children:"pending"})]})]}),"\xa0",(0,s.jsx)(u.Z,{direction:"vertical",size:12,children:(0,s.jsxs)("div",{className:"d-flex mt-1",children:[(0,s.jsx)(i.Z,{renderExtraFooter:function(){return"extra footer"},placeholder:""}),"\xa0",(0,s.jsx)("span",{children:"-"}),"\xa0",(0,s.jsx)(i.Z,{renderExtraFooter:function(){return"extra footer"},placeholder:""})]})})]})}),(0,s.jsx)("div",{className:"col-sm-2"}),(0,s.jsx)("div",{className:"col-sm-4",children:(0,s.jsxs)("div",{className:"d-flex",children:[(0,s.jsxs)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},children:[(0,s.jsx)(o.x06,{})," \xa0Rechnung hinzuf\xfcgen"]})," ","\xa0",(0,s.jsx)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},children:"Excel"}),"\xa0",(0,s.jsx)("button",{className:"btn btn",style:{background:"#0b5995",color:"white"},children:"Drucken"})]})})]}),(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{columns:a,style:{overflowX:"auto"},dataSource:d})})]})}},28633:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(72791);function c(){return(0,r.useState)(null)}},47904:function(e,n,t){var r=t(72791);n.Z=function(e){var n=(0,r.useRef)(e);return(0,r.useEffect)((function(){n.current=e}),[e]),n}},39007:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(72791),c=t(47904);function o(e){var n=(0,c.Z)(e);return(0,r.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}},49815:function(e,n,t){var r=t(72791),c="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,o="undefined"!==typeof document;n.Z=o||c?r.useLayoutEffect:r.useEffect},73201:function(e,n,t){var r=t(72791),c=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};n.Z=function(e,n){return(0,r.useMemo)((function(){return function(e,n){var t=c(e),r=c(n);return function(e){t&&t(e),r&&r(e)}}(e,n)}),[e,n])}},55746:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(72791);function c(){var e=(0,r.useRef)(!0),n=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),n.current}},52803:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(72791);function c(e){var n=(0,r.useRef)(null);return(0,r.useEffect)((function(){n.current=e})),n.current}},71306:function(e,n,t){t.d(n,{PB:function(){return c}});var r="data-rr-ui-";function c(e){return"".concat(r).concat(e)}},58865:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(72791),c=t(97357),o=(0,r.createContext)(c.Z?window:void 0);o.Provider;function i(){return(0,r.useContext)(o)}},3070:function(e,n,t){var r=t(97357),c=!1,o=!1;try{var i={get passive(){return c=!0},get once(){return o=c=!0}};r.Z&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(u){}n.ZP=function(e,n,t,r){if(r&&"boolean"!==typeof r&&!o){var i=r.once,u=r.capture,s=t;!o&&i&&(s=t.__once||function e(r){this.removeEventListener(n,e,u),t.call(this,r)},t.__once=s),e.addEventListener(n,s,c?r:u)}e.addEventListener(n,t,r)}},97357:function(e,n){n.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},53189:function(e,n,t){function r(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}t.d(n,{Z:function(){return r}})},92899:function(e,n,t){var r=t(3070),c=t(36382);n.Z=function(e,n,t,o){return(0,r.ZP)(e,n,t,o),function(){(0,c.Z)(e,n,t,o)}}},78376:function(e,n,t){function r(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return r}})},13808:function(e,n,t){t.d(n,{Z:function(){return c}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function c(e,n){return r(e.querySelectorAll(n))}},36382:function(e,n){n.Z=function(e,n,t,r){var c=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(n,t,c),t.__once&&e.removeEventListener(n,t.__once,c)}},10162:function(e,n,t){t.d(n,{SC:function(){return u},vE:function(){return i}});var r=t(72791),c=(t(80184),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:c,minBreakpoint:"xs"});o.Consumer,o.Provider;function i(e,n){var t=(0,r.useContext)(o).prefixes;return e||t[n]||n}function u(){return"rtl"===(0,r.useContext)(o).dir}}}]);
//# sourceMappingURL=1567.6dc26a0e.chunk.js.map