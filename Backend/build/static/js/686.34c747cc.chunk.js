"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[686],{70260:(t,e,n)=>{n.d(e,{BN:()=>g,ER:()=>y,Ej:()=>w,RK:()=>s,UE:()=>c,UU:()=>a,__:()=>l,cY:()=>h,jD:()=>d,mG:()=>p,rD:()=>r});var o=n(55e3);function i(t,e,n){let{reference:i,floating:r}=t;const l=(0,o.TV)(e),c=(0,o.Dz)(e),s=(0,o.sq)(c),a=(0,o.C0)(e),f="y"===l,u=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,m=i[s]/2-r[s]/2;let p;switch(a){case"top":p={x:u,y:i.y-r.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-r.width,y:d};break;default:p={x:i.x,y:i.y}}switch((0,o.Sg)(e)){case"start":p[c]-=m*(n&&f?-1:1);break;case"end":p[c]+=m*(n&&f?-1:1)}return p}const r=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:l=[],platform:c}=n,s=l.filter(Boolean),a=await(null==c.isRTL?void 0:c.isRTL(e));let f=await c.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=i(f,o,a),m=o,p={},h=0;for(let g=0;g<s.length;g++){const{name:n,fn:l}=s[g],{x:y,y:w,data:x,reset:v}=await l({x:u,y:d,initialPlacement:o,placement:m,strategy:r,middlewareData:p,rects:f,platform:c,elements:{reference:t,floating:e}});u=null!=y?y:u,d=null!=w?w:d,p={...p,[n]:{...p[n],...x}},v&&h<=50&&(h++,"object"===typeof v&&(v.placement&&(m=v.placement),v.rects&&(f=!0===v.rects?await c.getElementRects({reference:t,floating:e,strategy:r}):v.rects),({x:u,y:d}=i(f,m,a))),g=-1)}return{x:u,y:d,placement:m,strategy:r,middlewareData:p}};async function l(t,e){var n;void 0===e&&(e={});const{x:i,y:r,platform:l,rects:c,elements:s,strategy:a}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:m=!1,padding:p=0}=(0,o._3)(e,t),h=(0,o.nI)(p),g=s[m?"floating"===d?"reference":"floating":d],y=(0,o.B1)(await l.getClippingRect({element:null==(n=await(null==l.isElement?void 0:l.isElement(g)))||n?g:g.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(s.floating)),boundary:f,rootBoundary:u,strategy:a})),w="floating"===d?{...c.floating,x:i,y:r}:c.reference,x=await(null==l.getOffsetParent?void 0:l.getOffsetParent(s.floating)),v=await(null==l.isElement?void 0:l.isElement(x))&&await(null==l.getScale?void 0:l.getScale(x))||{x:1,y:1},b=(0,o.B1)(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:w,offsetParent:x,strategy:a}):w);return{top:(y.top-b.top+h.top)/v.y,bottom:(b.bottom-y.bottom+h.bottom)/v.y,left:(y.left-b.left+h.left)/v.x,right:(b.right-y.right+h.right)/v.x}}const c=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:l,platform:c,elements:s,middlewareData:a}=e,{element:f,padding:u=0}=(0,o._3)(t,e)||{};if(null==f)return{};const d=(0,o.nI)(u),m={x:n,y:i},p=(0,o.Dz)(r),h=(0,o.sq)(p),g=await c.getDimensions(f),y="y"===p,w=y?"top":"left",x=y?"bottom":"right",v=y?"clientHeight":"clientWidth",b=l.reference[h]+l.reference[p]-m[p]-l.floating[h],T=m[p]-l.reference[p],R=await(null==c.getOffsetParent?void 0:c.getOffsetParent(f));let L=R?R[v]:0;L&&await(null==c.isElement?void 0:c.isElement(R))||(L=s.floating[v]||l.floating[h]);const E=b/2-T/2,D=L/2-g[h]/2-1,C=(0,o.jk)(d[w],D),k=(0,o.jk)(d[x],D),A=C,P=L-g[h]-k,_=L/2-g[h]/2+E,S=(0,o.qE)(A,_,P),q=!a.arrow&&null!=(0,o.Sg)(r)&&_!==S&&l.reference[h]/2-(_<A?C:k)-g[h]/2<0,O=q?_<A?_-A:_-P:0;return{[p]:m[p]+O,data:{[p]:S,centerOffset:_-S-O,...q&&{alignmentOffset:O}},reset:q}}});const s=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,r;const{rects:c,middlewareData:s,placement:a,platform:f,elements:u}=e,{crossAxis:d=!1,alignment:m,allowedPlacements:p=o.DD,autoAlignment:h=!0,...g}=(0,o._3)(t,e),y=void 0!==m||p===o.DD?function(t,e,n){return(t?[...n.filter((e=>(0,o.Sg)(e)===t)),...n.filter((e=>(0,o.Sg)(e)!==t))]:n.filter((t=>(0,o.C0)(t)===t))).filter((n=>!t||(0,o.Sg)(n)===t||!!e&&(0,o.aD)(n)!==n))}(m||null,h,p):p,w=await l(e,g),x=(null==(n=s.autoPlacement)?void 0:n.index)||0,v=y[x];if(null==v)return{};const b=(0,o.w7)(v,c,await(null==f.isRTL?void 0:f.isRTL(u.floating)));if(a!==v)return{reset:{placement:y[0]}};const T=[w[(0,o.C0)(v)],w[b[0]],w[b[1]]],R=[...(null==(i=s.autoPlacement)?void 0:i.overflows)||[],{placement:v,overflows:T}],L=y[x+1];if(L)return{data:{index:x+1,overflows:R},reset:{placement:L}};const E=R.map((t=>{const e=(0,o.Sg)(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),D=(null==(r=E.filter((t=>t[2].slice(0,(0,o.Sg)(t[0])?2:3).every((t=>t<=0))))[0])?void 0:r[0])||E[0][0];return D!==a?{data:{index:x+1,overflows:R},reset:{placement:D}}:{}}}},a=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:c,rects:s,initialPlacement:a,platform:f,elements:u}=e,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...w}=(0,o._3)(t,e);if(null!=(n=c.arrow)&&n.alignmentOffset)return{};const x=(0,o.C0)(r),v=(0,o.C0)(a)===a,b=await(null==f.isRTL?void 0:f.isRTL(u.floating)),T=p||(v||!y?[(0,o.bV)(a)]:(0,o.WJ)(a));p||"none"===g||T.push(...(0,o.lP)(a,y,g,b));const R=[a,...T],L=await l(e,w),E=[];let D=(null==(i=c.flip)?void 0:i.overflows)||[];if(d&&E.push(L[x]),m){const t=(0,o.w7)(r,s,b);E.push(L[t[0]],L[t[1]])}if(D=[...D,{placement:r,overflows:E}],!E.every((t=>t<=0))){var C,k;const t=((null==(C=c.flip)?void 0:C.index)||0)+1,e=R[t];if(e)return{data:{index:t,overflows:D},reset:{placement:e}};let n=null==(k=D.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:k.placement;if(!n)switch(h){case"bestFit":{var A;const t=null==(A=D.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:A[0];t&&(n=t);break}case"initialPlacement":n=a}if(r!==n)return{reset:{placement:n}}}return{}}}};function f(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function u(t){return o.r_.some((e=>t[e]>=0))}const d=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=(0,o._3)(t,e);switch(i){case"referenceHidden":{const t=f(await l(e,{...r,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:u(t)}}}case"escaped":{const t=f(await l(e,{...r,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:u(t)}}}default:return{}}}}};function m(t){const e=(0,o.jk)(...t.map((t=>t.left))),n=(0,o.jk)(...t.map((t=>t.top)));return{x:e,y:n,width:(0,o.T9)(...t.map((t=>t.right)))-e,height:(0,o.T9)(...t.map((t=>t.bottom)))-n}}const p=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:i,rects:r,platform:l,strategy:c}=e,{padding:s=2,x:a,y:f}=(0,o._3)(t,e),u=Array.from(await(null==l.getClientRects?void 0:l.getClientRects(i.reference))||[]),d=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let i=null;for(let o=0;o<e.length;o++){const t=e[o];!i||t.y-i.y>i.height/2?n.push([t]):n[n.length-1].push(t),i=t}return n.map((t=>(0,o.B1)(m(t))))}(u),p=(0,o.B1)(m(u)),h=(0,o.nI)(s);const g=await l.getElementRects({reference:{getBoundingClientRect:function(){if(2===d.length&&d[0].left>d[1].right&&null!=a&&null!=f)return d.find((t=>a>t.left-h.left&&a<t.right+h.right&&f>t.top-h.top&&f<t.bottom+h.bottom))||p;if(d.length>=2){if("y"===(0,o.TV)(n)){const t=d[0],e=d[d.length-1],i="top"===(0,o.C0)(n),r=t.top,l=e.bottom,c=i?t.left:e.left,s=i?t.right:e.right;return{top:r,bottom:l,left:c,right:s,width:s-c,height:l-r,x:c,y:r}}const t="left"===(0,o.C0)(n),e=(0,o.T9)(...d.map((t=>t.right))),i=(0,o.jk)(...d.map((t=>t.left))),r=d.filter((n=>t?n.left===i:n.right===e)),l=r[0].top,c=r[r.length-1].bottom;return{top:l,bottom:c,left:i,right:e,width:e-i,height:c-l,x:i,y:l}}return p}},floating:i.floating,strategy:c});return r.reference.x!==g.reference.x||r.reference.y!==g.reference.y||r.reference.width!==g.reference.width||r.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}};const h=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:l,placement:c,middlewareData:s}=e,a=await async function(t,e){const{placement:n,platform:i,elements:r}=t,l=await(null==i.isRTL?void 0:i.isRTL(r.floating)),c=(0,o.C0)(n),s=(0,o.Sg)(n),a="y"===(0,o.TV)(n),f=["left","top"].includes(c)?-1:1,u=l&&a?-1:1,d=(0,o._3)(e,t);let{mainAxis:m,crossAxis:p,alignmentAxis:h}="number"===typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"===typeof h&&(p="end"===s?-1*h:h),a?{x:p*u,y:m*f}:{x:m*f,y:p*u}}(e,t);return c===(null==(n=s.offset)?void 0:n.placement)&&null!=(i=s.arrow)&&i.alignmentOffset?{}:{x:r+a.x,y:l+a.y,data:{...a,placement:c}}}}},g=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:c=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...f}=(0,o._3)(t,e),u={x:n,y:i},d=await l(e,f),m=(0,o.TV)((0,o.C0)(r)),p=(0,o.PG)(m);let h=u[p],g=u[m];if(c){const t="y"===p?"bottom":"right",e=h+d["y"===p?"top":"left"],n=h-d[t];h=(0,o.qE)(e,h,n)}if(s){const t="y"===m?"bottom":"right",e=g+d["y"===m?"top":"left"],n=g-d[t];g=(0,o.qE)(e,g,n)}const y=a.fn({...e,[p]:h,[m]:g});return{...y,data:{x:y.x-n,y:y.y-i}}}}},y=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:l,middlewareData:c}=e,{offset:s=0,mainAxis:a=!0,crossAxis:f=!0}=(0,o._3)(t,e),u={x:n,y:i},d=(0,o.TV)(r),m=(0,o.PG)(d);let p=u[m],h=u[d];const g=(0,o._3)(s,e),y="number"===typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(a){const t="y"===m?"height":"width",e=l.reference[m]-l.floating[t]+y.mainAxis,n=l.reference[m]+l.reference[t]-y.mainAxis;p<e?p=e:p>n&&(p=n)}if(f){var w,x;const t="y"===m?"width":"height",e=["top","left"].includes((0,o.C0)(r)),n=l.reference[d]-l.floating[t]+(e&&(null==(w=c.offset)?void 0:w[d])||0)+(e?0:y.crossAxis),i=l.reference[d]+l.reference[t]+(e?0:(null==(x=c.offset)?void 0:x[d])||0)-(e?y.crossAxis:0);h<n?h=n:h>i&&(h=i)}return{[m]:p,[d]:h}}}},w=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:i,platform:r,elements:c}=e,{apply:s=(()=>{}),...a}=(0,o._3)(t,e),f=await l(e,a),u=(0,o.C0)(n),d=(0,o.Sg)(n),m="y"===(0,o.TV)(n),{width:p,height:h}=i.floating;let g,y;"top"===u||"bottom"===u?(g=u,y=d===(await(null==r.isRTL?void 0:r.isRTL(c.floating))?"start":"end")?"left":"right"):(y=u,g="end"===d?"top":"bottom");const w=h-f[g],x=p-f[y],v=!e.middlewareData.shift;let b=w,T=x;if(m){const t=p-f.left-f.right;T=d||v?(0,o.jk)(x,t):t}else{const t=h-f.top-f.bottom;b=d||v?(0,o.jk)(w,t):t}if(v&&!d){const t=(0,o.T9)(f.left,0),e=(0,o.T9)(f.right,0),n=(0,o.T9)(f.top,0),i=(0,o.T9)(f.bottom,0);m?T=p-2*(0!==t||0!==e?t+e:(0,o.T9)(f.left,f.right)):b=h-2*(0!==n||0!==i?n+i:(0,o.T9)(f.top,f.bottom))}await s({...e,availableWidth:T,availableHeight:b});const R=await r.getDimensions(c.floating);return p!==R.width||h!==R.height?{reset:{rects:!0}}:{}}}}},3686:(t,e,n)=>{n.d(e,{BN:()=>R,ER:()=>A,Ej:()=>E,RK:()=>T,UE:()=>C,UU:()=>L,iD:()=>v,jD:()=>D,ll:()=>b,mG:()=>k,rD:()=>P});var o=n(55e3),i=n(70260),r=n(35702);function l(t){const e=(0,r.L9)(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const l=(0,r.sb)(t),c=l?t.offsetWidth:n,s=l?t.offsetHeight:i,a=(0,o.LI)(n)!==c||(0,o.LI)(i)!==s;return a&&(n=c,i=s),{width:n,height:i,$:a}}function c(t){return(0,r.vq)(t)?t:t.contextElement}function s(t){const e=c(t);if(!(0,r.sb)(e))return(0,o.Jx)(1);const n=e.getBoundingClientRect(),{width:i,height:s,$:a}=l(e);let f=(a?(0,o.LI)(n.width):n.width)/i,u=(a?(0,o.LI)(n.height):n.height)/s;return f&&Number.isFinite(f)||(f=1),u&&Number.isFinite(u)||(u=1),{x:f,y:u}}const a=(0,o.Jx)(0);function f(t){const e=(0,r.zk)(t);return(0,r.Tc)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:a}function u(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const l=t.getBoundingClientRect(),a=c(t);let u=(0,o.Jx)(1);e&&(i?(0,r.vq)(i)&&(u=s(i)):u=s(t));const d=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==(0,r.zk)(t))&&e}(a,n,i)?f(a):(0,o.Jx)(0);let m=(l.left+d.x)/u.x,p=(l.top+d.y)/u.y,h=l.width/u.x,g=l.height/u.y;if(a){const t=(0,r.zk)(a),e=i&&(0,r.vq)(i)?(0,r.zk)(i):i;let n=t,o=n.frameElement;for(;o&&i&&e!==n;){const t=s(o),e=o.getBoundingClientRect(),i=(0,r.L9)(o),l=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,c=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;m*=t.x,p*=t.y,h*=t.x,g*=t.y,m+=l,p+=c,n=(0,r.zk)(o),o=n.frameElement}}return(0,o.B1)({width:h,height:g,x:m,y:p})}const d=[":popover-open",":modal"];function m(t){return d.some((e=>{try{return t.matches(e)}catch(n){return!1}}))}function p(t){return u((0,r.ep)(t)).left+(0,r.CP)(t).scrollLeft}function h(t,e,n){let i;if("viewport"===e)i=function(t,e){const n=(0,r.zk)(t),o=(0,r.ep)(t),i=n.visualViewport;let l=o.clientWidth,c=o.clientHeight,s=0,a=0;if(i){l=i.width,c=i.height;const t=(0,r.Tc)();(!t||t&&"fixed"===e)&&(s=i.offsetLeft,a=i.offsetTop)}return{width:l,height:c,x:s,y:a}}(t,n);else if("document"===e)i=function(t){const e=(0,r.ep)(t),n=(0,r.CP)(t),i=t.ownerDocument.body,l=(0,o.T9)(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),c=(0,o.T9)(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+p(t);const a=-n.scrollTop;return"rtl"===(0,r.L9)(i).direction&&(s+=(0,o.T9)(e.clientWidth,i.clientWidth)-l),{width:l,height:c,x:s,y:a}}((0,r.ep)(t));else if((0,r.vq)(e))i=function(t,e){const n=u(t,!0,"fixed"===e),i=n.top+t.clientTop,l=n.left+t.clientLeft,c=(0,r.sb)(t)?s(t):(0,o.Jx)(1);return{width:t.clientWidth*c.x,height:t.clientHeight*c.y,x:l*c.x,y:i*c.y}}(e,n);else{const n=f(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return(0,o.B1)(i)}function g(t,e){const n=(0,r.$4)(t);return!(n===e||!(0,r.vq)(n)||(0,r.eu)(n))&&("fixed"===(0,r.L9)(n).position||g(n,e))}function y(t,e,n){const i=(0,r.sb)(e),l=(0,r.ep)(e),c="fixed"===n,s=u(t,!0,c,e);let a={scrollLeft:0,scrollTop:0};const f=(0,o.Jx)(0);if(i||!i&&!c)if(("body"!==(0,r.mq)(e)||(0,r.ZU)(l))&&(a=(0,r.CP)(e)),i){const t=u(e,!0,c,e);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else l&&(f.x=p(l));return{x:s.left+a.scrollLeft-f.x,y:s.top+a.scrollTop-f.y,width:s.width,height:s.height}}function w(t,e){return(0,r.sb)(t)&&"fixed"!==(0,r.L9)(t).position?e?e(t):t.offsetParent:null}function x(t,e){const n=(0,r.zk)(t);if(!(0,r.sb)(t)||m(t))return n;let o=w(t,e);for(;o&&(0,r.Lv)(o)&&"static"===(0,r.L9)(o).position;)o=w(o,e);return o&&("html"===(0,r.mq)(o)||"body"===(0,r.mq)(o)&&"static"===(0,r.L9)(o).position&&!(0,r.sQ)(o))?n:o||(0,r.gJ)(t)||n}const v={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:i,strategy:l}=t;const c="fixed"===l,a=(0,r.ep)(i),f=!!e&&m(e.floating);if(i===a||f&&c)return n;let d={scrollLeft:0,scrollTop:0},p=(0,o.Jx)(1);const h=(0,o.Jx)(0),g=(0,r.sb)(i);if((g||!g&&!c)&&(("body"!==(0,r.mq)(i)||(0,r.ZU)(a))&&(d=(0,r.CP)(i)),(0,r.sb)(i))){const t=u(i);p=s(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}return{width:n.width*p.x,height:n.height*p.y,x:n.x*p.x-d.scrollLeft*p.x+h.x,y:n.y*p.y-d.scrollTop*p.y+h.y}},getDocumentElement:r.ep,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:l}=t;const c=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=(0,r.v9)(t,[],!1).filter((t=>(0,r.vq)(t)&&"body"!==(0,r.mq)(t))),i=null;const l="fixed"===(0,r.L9)(t).position;let c=l?(0,r.$4)(t):t;for(;(0,r.vq)(c)&&!(0,r.eu)(c);){const e=(0,r.L9)(c),n=(0,r.sQ)(c);n||"fixed"!==e.position||(i=null),(l?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||(0,r.ZU)(c)&&!n&&g(t,c))?o=o.filter((t=>t!==c)):i=e,c=(0,r.$4)(c)}return e.set(t,o),o}(e,this._c):[].concat(n),i],s=c[0],a=c.reduce(((t,n)=>{const i=h(e,n,l);return t.top=(0,o.T9)(i.top,t.top),t.right=(0,o.jk)(i.right,t.right),t.bottom=(0,o.jk)(i.bottom,t.bottom),t.left=(0,o.T9)(i.left,t.left),t}),h(e,s,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:x,getElementRects:async function(t){const e=this.getOffsetParent||x,n=this.getDimensions;return{reference:y(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=l(t);return{width:e,height:n}},getScale:s,isElement:r.vq,isRTL:function(t){return"rtl"===(0,r.L9)(t).direction}};function b(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:a="function"===typeof ResizeObserver,layoutShift:f="function"===typeof IntersectionObserver,animationFrame:d=!1}=i,m=c(t),p=l||s?[...m?(0,r.v9)(m):[],...(0,r.v9)(e)]:[];p.forEach((t=>{l&&t.addEventListener("scroll",n,{passive:!0}),s&&t.addEventListener("resize",n)}));const h=m&&f?function(t,e){let n,i=null;const l=(0,r.ep)(t);function c(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return function r(s,a){void 0===s&&(s=!1),void 0===a&&(a=1),c();const{left:f,top:u,width:d,height:m}=t.getBoundingClientRect();if(s||e(),!d||!m)return;const p={rootMargin:-(0,o.RI)(u)+"px "+-(0,o.RI)(l.clientWidth-(f+d))+"px "+-(0,o.RI)(l.clientHeight-(u+m))+"px "+-(0,o.RI)(f)+"px",threshold:(0,o.T9)(0,(0,o.jk)(1,a))||1};let h=!0;function g(t){const e=t[0].intersectionRatio;if(e!==a){if(!h)return r();e?r(!1,e):n=setTimeout((()=>{r(!1,1e-7)}),100)}h=!1}try{i=new IntersectionObserver(g,{...p,root:l.ownerDocument})}catch(y){i=new IntersectionObserver(g,p)}i.observe(t)}(!0),c}(m,n):null;let g,y=-1,w=null;a&&(w=new ResizeObserver((t=>{let[o]=t;o&&o.target===m&&w&&(w.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{var t;null==(t=w)||t.observe(e)}))),n()})),m&&!d&&w.observe(m),w.observe(e));let x=d?u(t):null;return d&&function e(){const o=u(t);!x||o.x===x.x&&o.y===x.y&&o.width===x.width&&o.height===x.height||n();x=o,g=requestAnimationFrame(e)}(),n(),()=>{var t;p.forEach((t=>{l&&t.removeEventListener("scroll",n),s&&t.removeEventListener("resize",n)})),null==h||h(),null==(t=w)||t.disconnect(),w=null,d&&cancelAnimationFrame(g)}}const T=i.RK,R=i.BN,L=i.UU,E=i.Ej,D=i.jD,C=i.UE,k=i.mG,A=i.ER,P=(t,e,n)=>{const o=new Map,r={platform:v,...n},l={...r.platform,_c:o};return(0,i.rD)(t,e,{...r,platform:l})}},35702:(t,e,n)=>{function o(t){return l(t)?(t.nodeName||"").toLowerCase():"#document"}function i(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function r(t){var e;return null==(e=(l(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function l(t){return t instanceof Node||t instanceof i(t).Node}function c(t){return t instanceof Element||t instanceof i(t).Element}function s(t){return t instanceof HTMLElement||t instanceof i(t).HTMLElement}function a(t){return"undefined"!==typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof i(t).ShadowRoot)}function f(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=g(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function u(t){return["table","td","th"].includes(o(t))}function d(t){const e=p(),n=g(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function m(t){let e=w(t);for(;s(e)&&!h(e);){if(d(e))return e;e=w(e)}return null}function p(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function h(t){return["html","body","#document"].includes(o(t))}function g(t){return i(t).getComputedStyle(t)}function y(t){return c(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function w(t){if("html"===o(t))return t;const e=t.assignedSlot||t.parentNode||a(t)&&t.host||r(t);return a(e)?e.host:e}function x(t){const e=w(t);return h(e)?t.ownerDocument?t.ownerDocument.body:t.body:s(e)&&f(e)?e:x(e)}function v(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const r=x(t),l=r===(null==(o=t.ownerDocument)?void 0:o.body),c=i(r);return l?e.concat(c,c.visualViewport||[],f(r)?r:[],c.frameElement&&n?v(c.frameElement):[]):e.concat(r,v(r,[],n))}n.d(e,{$4:()=>w,CP:()=>y,L9:()=>g,Lv:()=>u,Ng:()=>a,Tc:()=>p,ZU:()=>f,ep:()=>r,eu:()=>h,gJ:()=>m,mq:()=>o,sQ:()=>d,sb:()=>s,v9:()=>v,vq:()=>c,zk:()=>i})},55e3:(t,e,n)=>{n.d(e,{B1:()=>C,C0:()=>h,DD:()=>r,Dz:()=>v,Jx:()=>f,LI:()=>s,PG:()=>y,RI:()=>a,Sg:()=>g,T9:()=>c,TV:()=>x,WJ:()=>T,_3:()=>p,aD:()=>R,bV:()=>E,jk:()=>l,lP:()=>L,nI:()=>D,qE:()=>m,r_:()=>o,sq:()=>w,w7:()=>b});const o=["top","right","bottom","left"],i=["start","end"],r=o.reduce(((t,e)=>t.concat(e,e+"-"+i[0],e+"-"+i[1])),[]),l=Math.min,c=Math.max,s=Math.round,a=Math.floor,f=t=>({x:t,y:t}),u={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function m(t,e,n){return c(t,l(e,n))}function p(t,e){return"function"===typeof t?t(e):t}function h(t){return t.split("-")[0]}function g(t){return t.split("-")[1]}function y(t){return"x"===t?"y":"x"}function w(t){return"y"===t?"height":"width"}function x(t){return["top","bottom"].includes(h(t))?"y":"x"}function v(t){return y(x(t))}function b(t,e,n){void 0===n&&(n=!1);const o=g(t),i=v(t),r=w(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=E(l)),[l,E(l)]}function T(t){const e=E(t);return[R(t),e,R(e)]}function R(t){return t.replace(/start|end/g,(t=>d[t]))}function L(t,e,n,o){const i=g(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(h(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(R)))),r}function E(t){return t.replace(/left|right|bottom|top/g,(t=>u[t]))}function D(t){return"number"!==typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function C(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}}}]);
//# sourceMappingURL=686.34c747cc.chunk.js.map