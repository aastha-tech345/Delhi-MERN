"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[904],{6284:(t,e,n)=>{n.d(e,{Cp:()=>d,Qo:()=>h,RR:()=>a,US:()=>l,X5:()=>s,cv:()=>m,dp:()=>w,dr:()=>y,oo:()=>r,uY:()=>g,x7:()=>c});var o=n(65207);function i(t,e,n){let{reference:i,floating:r}=t;const l=(0,o.Qq)(e),c=(0,o.Wh)(e),s=(0,o.I4)(c),a=(0,o.k3)(e),f="y"===l,u=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,p=i[s]/2-r[s]/2;let h;switch(a){case"top":h={x:u,y:i.y-r.height};break;case"bottom":h={x:u,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:d};break;case"left":h={x:i.x-r.width,y:d};break;default:h={x:i.x,y:i.y}}switch((0,o.hp)(e)){case"start":h[c]-=p*(n&&f?-1:1);break;case"end":h[c]+=p*(n&&f?-1:1)}return h}const r=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:l=[],platform:c}=n,s=l.filter(Boolean),a=await(null==c.isRTL?void 0:c.isRTL(e));let f=await c.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=i(f,o,a),p=o,h={},m=0;for(let g=0;g<s.length;g++){const{name:n,fn:l}=s[g],{x:y,y:w,data:x,reset:v}=await l({x:u,y:d,initialPlacement:o,placement:p,strategy:r,middlewareData:h,rects:f,platform:c,elements:{reference:t,floating:e}});u=null!=y?y:u,d=null!=w?w:d,h={...h,[n]:{...h[n],...x}},v&&m<=50&&(m++,"object"===typeof v&&(v.placement&&(p=v.placement),v.rects&&(f=!0===v.rects?await c.getElementRects({reference:t,floating:e,strategy:r}):v.rects),({x:u,y:d}=i(f,p,a))),g=-1)}return{x:u,y:d,placement:p,strategy:r,middlewareData:h}};async function l(t,e){var n;void 0===e&&(e={});const{x:i,y:r,platform:l,rects:c,elements:s,strategy:a}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=(0,o.ku)(e,t),m=(0,o.yd)(h),g=s[p?"floating"===d?"reference":"floating":d],y=(0,o.JB)(await l.getClippingRect({element:null==(n=await(null==l.isElement?void 0:l.isElement(g)))||n?g:g.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(s.floating)),boundary:f,rootBoundary:u,strategy:a})),w="floating"===d?{...c.floating,x:i,y:r}:c.reference,x=await(null==l.getOffsetParent?void 0:l.getOffsetParent(s.floating)),v=await(null==l.isElement?void 0:l.isElement(x))&&await(null==l.getScale?void 0:l.getScale(x))||{x:1,y:1},b=(0,o.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:w,offsetParent:x,strategy:a}):w);return{top:(y.top-b.top+m.top)/v.y,bottom:(b.bottom-y.bottom+m.bottom)/v.y,left:(y.left-b.left+m.left)/v.x,right:(b.right-y.right+m.right)/v.x}}const c=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:l,platform:c,elements:s,middlewareData:a}=e,{element:f,padding:u=0}=(0,o.ku)(t,e)||{};if(null==f)return{};const d=(0,o.yd)(u),p={x:n,y:i},h=(0,o.Wh)(r),m=(0,o.I4)(h),g=await c.getDimensions(f),y="y"===h,w=y?"top":"left",x=y?"bottom":"right",v=y?"clientHeight":"clientWidth",b=l.reference[m]+l.reference[h]-p[h]-l.floating[m],R=p[h]-l.reference[h],k=await(null==c.getOffsetParent?void 0:c.getOffsetParent(f));let F=k?k[v]:0;F&&await(null==c.isElement?void 0:c.isElement(k))||(F=s.floating[v]||l.floating[m]);const L=b/2-R/2,T=F/2-g[m]/2-1,A=(0,o.VV)(d[w],T),D=(0,o.VV)(d[x],T),E=A,V=F-g[m]-D,C=F/2-g[m]/2+L,O=(0,o.uZ)(E,C,V),P=!a.arrow&&null!=(0,o.hp)(r)&&C!==O&&l.reference[m]/2-(C<E?A:D)-g[m]/2<0,W=P?C<E?C-E:C-V:0;return{[h]:p[h]+W,data:{[h]:O,centerOffset:C-O-W,...P&&{alignmentOffset:W}},reset:P}}});const s=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,r;const{rects:c,middlewareData:s,placement:a,platform:f,elements:u}=e,{crossAxis:d=!1,alignment:p,allowedPlacements:h=o.Ct,autoAlignment:m=!0,...g}=(0,o.ku)(t,e),y=void 0!==p||h===o.Ct?function(t,e,n){return(t?[...n.filter((e=>(0,o.hp)(e)===t)),...n.filter((e=>(0,o.hp)(e)!==t))]:n.filter((t=>(0,o.k3)(t)===t))).filter((n=>!t||(0,o.hp)(n)===t||!!e&&(0,o.Go)(n)!==n))}(p||null,m,h):h,w=await l(e,g),x=(null==(n=s.autoPlacement)?void 0:n.index)||0,v=y[x];if(null==v)return{};const b=(0,o.i8)(v,c,await(null==f.isRTL?void 0:f.isRTL(u.floating)));if(a!==v)return{reset:{placement:y[0]}};const R=[w[(0,o.k3)(v)],w[b[0]],w[b[1]]],k=[...(null==(i=s.autoPlacement)?void 0:i.overflows)||[],{placement:v,overflows:R}],F=y[x+1];if(F)return{data:{index:x+1,overflows:k},reset:{placement:F}};const L=k.map((t=>{const e=(0,o.hp)(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),T=(null==(r=L.filter((t=>t[2].slice(0,(0,o.hp)(t[0])?2:3).every((t=>t<=0))))[0])?void 0:r[0])||L[0][0];return T!==a?{data:{index:x+1,overflows:k},reset:{placement:T}}:{}}}},a=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:c,rects:s,initialPlacement:a,platform:f,elements:u}=e,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...w}=(0,o.ku)(t,e);if(null!=(n=c.arrow)&&n.alignmentOffset)return{};const x=(0,o.k3)(r),v=(0,o.k3)(a)===a,b=await(null==f.isRTL?void 0:f.isRTL(u.floating)),R=h||(v||!y?[(0,o.pw)(a)]:(0,o.gy)(a));h||"none"===g||R.push(...(0,o.KX)(a,y,g,b));const k=[a,...R],F=await l(e,w),L=[];let T=(null==(i=c.flip)?void 0:i.overflows)||[];if(d&&L.push(F[x]),p){const t=(0,o.i8)(r,s,b);L.push(F[t[0]],F[t[1]])}if(T=[...T,{placement:r,overflows:L}],!L.every((t=>t<=0))){var A,D;const t=((null==(A=c.flip)?void 0:A.index)||0)+1,e=k[t];if(e)return{data:{index:t,overflows:T},reset:{placement:e}};let n=null==(D=T.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:D.placement;if(!n)switch(m){case"bestFit":{var E;const t=null==(E=T.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:E[0];t&&(n=t);break}case"initialPlacement":n=a}if(r!==n)return{reset:{placement:n}}}return{}}}};function f(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function u(t){return o.mA.some((e=>t[e]>=0))}const d=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=(0,o.ku)(t,e);switch(i){case"referenceHidden":{const t=f(await l(e,{...r,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:u(t)}}}case"escaped":{const t=f(await l(e,{...r,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:u(t)}}}default:return{}}}}};function p(t){const e=(0,o.VV)(...t.map((t=>t.left))),n=(0,o.VV)(...t.map((t=>t.top)));return{x:e,y:n,width:(0,o.Fp)(...t.map((t=>t.right)))-e,height:(0,o.Fp)(...t.map((t=>t.bottom)))-n}}const h=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:i,rects:r,platform:l,strategy:c}=e,{padding:s=2,x:a,y:f}=(0,o.ku)(t,e),u=Array.from(await(null==l.getClientRects?void 0:l.getClientRects(i.reference))||[]),d=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let i=null;for(let o=0;o<e.length;o++){const t=e[o];!i||t.y-i.y>i.height/2?n.push([t]):n[n.length-1].push(t),i=t}return n.map((t=>(0,o.JB)(p(t))))}(u),h=(0,o.JB)(p(u)),m=(0,o.yd)(s);const g=await l.getElementRects({reference:{getBoundingClientRect:function(){if(2===d.length&&d[0].left>d[1].right&&null!=a&&null!=f)return d.find((t=>a>t.left-m.left&&a<t.right+m.right&&f>t.top-m.top&&f<t.bottom+m.bottom))||h;if(d.length>=2){if("y"===(0,o.Qq)(n)){const t=d[0],e=d[d.length-1],i="top"===(0,o.k3)(n),r=t.top,l=e.bottom,c=i?t.left:e.left,s=i?t.right:e.right;return{top:r,bottom:l,left:c,right:s,width:s-c,height:l-r,x:c,y:r}}const t="left"===(0,o.k3)(n),e=(0,o.Fp)(...d.map((t=>t.right))),i=(0,o.VV)(...d.map((t=>t.left))),r=d.filter((n=>t?n.left===i:n.right===e)),l=r[0].top,c=r[r.length-1].bottom;return{top:l,bottom:c,left:i,right:e,width:e-i,height:c-l,x:i,y:l}}return h}},floating:i.floating,strategy:c});return r.reference.x!==g.reference.x||r.reference.y!==g.reference.y||r.reference.width!==g.reference.width||r.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}};const m=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:l,placement:c,middlewareData:s}=e,a=await async function(t,e){const{placement:n,platform:i,elements:r}=t,l=await(null==i.isRTL?void 0:i.isRTL(r.floating)),c=(0,o.k3)(n),s=(0,o.hp)(n),a="y"===(0,o.Qq)(n),f=["left","top"].includes(c)?-1:1,u=l&&a?-1:1,d=(0,o.ku)(e,t);let{mainAxis:p,crossAxis:h,alignmentAxis:m}="number"===typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"===typeof m&&(h="end"===s?-1*m:m),a?{x:h*u,y:p*f}:{x:p*f,y:h*u}}(e,t);return c===(null==(n=s.offset)?void 0:n.placement)&&null!=(i=s.arrow)&&i.alignmentOffset?{}:{x:r+a.x,y:l+a.y,data:{...a,placement:c}}}}},g=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:c=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...f}=(0,o.ku)(t,e),u={x:n,y:i},d=await l(e,f),p=(0,o.Qq)((0,o.k3)(r)),h=(0,o.Rn)(p);let m=u[h],g=u[p];if(c){const t="y"===h?"bottom":"right",e=m+d["y"===h?"top":"left"],n=m-d[t];m=(0,o.uZ)(e,m,n)}if(s){const t="y"===p?"bottom":"right",e=g+d["y"===p?"top":"left"],n=g-d[t];g=(0,o.uZ)(e,g,n)}const y=a.fn({...e,[h]:m,[p]:g});return{...y,data:{x:y.x-n,y:y.y-i}}}}},y=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:l,middlewareData:c}=e,{offset:s=0,mainAxis:a=!0,crossAxis:f=!0}=(0,o.ku)(t,e),u={x:n,y:i},d=(0,o.Qq)(r),p=(0,o.Rn)(d);let h=u[p],m=u[d];const g=(0,o.ku)(s,e),y="number"===typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(a){const t="y"===p?"height":"width",e=l.reference[p]-l.floating[t]+y.mainAxis,n=l.reference[p]+l.reference[t]-y.mainAxis;h<e?h=e:h>n&&(h=n)}if(f){var w,x;const t="y"===p?"width":"height",e=["top","left"].includes((0,o.k3)(r)),n=l.reference[d]-l.floating[t]+(e&&(null==(w=c.offset)?void 0:w[d])||0)+(e?0:y.crossAxis),i=l.reference[d]+l.reference[t]+(e?0:(null==(x=c.offset)?void 0:x[d])||0)-(e?y.crossAxis:0);m<n?m=n:m>i&&(m=i)}return{[p]:h,[d]:m}}}},w=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:i,platform:r,elements:c}=e,{apply:s=(()=>{}),...a}=(0,o.ku)(t,e),f=await l(e,a),u=(0,o.k3)(n),d=(0,o.hp)(n),p="y"===(0,o.Qq)(n),{width:h,height:m}=i.floating;let g,y;"top"===u||"bottom"===u?(g=u,y=d===(await(null==r.isRTL?void 0:r.isRTL(c.floating))?"start":"end")?"left":"right"):(y=u,g="end"===d?"top":"bottom");const w=m-f[g],x=h-f[y],v=!e.middlewareData.shift;let b=w,R=x;if(p){const t=h-f.left-f.right;R=d||v?(0,o.VV)(x,t):t}else{const t=m-f.top-f.bottom;b=d||v?(0,o.VV)(w,t):t}if(v&&!d){const t=(0,o.Fp)(f.left,0),e=(0,o.Fp)(f.right,0),n=(0,o.Fp)(f.top,0),i=(0,o.Fp)(f.bottom,0);p?R=h-2*(0!==t||0!==e?t+e:(0,o.Fp)(f.left,f.right)):b=m-2*(0!==n||0!==i?n+i:(0,o.Fp)(f.top,f.bottom))}await s({...e,availableWidth:R,availableHeight:b});const k=await r.getDimensions(c.floating);return h!==k.width||m!==k.height?{reset:{rects:!0}}:{}}}}},13904:(t,e,n)=>{n.d(e,{Cp:()=>T,Jv:()=>v,Me:()=>b,Qo:()=>D,RR:()=>F,X5:()=>R,dp:()=>L,dr:()=>E,oo:()=>V,uY:()=>k,x7:()=>A});var o=n(65207),i=n(6284),r=n(11495);function l(t){const e=(0,r.Dx)(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const l=(0,r.Re)(t),c=l?t.offsetWidth:n,s=l?t.offsetHeight:i,a=(0,o.NM)(n)!==c||(0,o.NM)(i)!==s;return a&&(n=c,i=s),{width:n,height:i,$:a}}function c(t){return(0,r.kK)(t)?t:t.contextElement}function s(t){const e=c(t);if(!(0,r.Re)(e))return(0,o.ze)(1);const n=e.getBoundingClientRect(),{width:i,height:s,$:a}=l(e);let f=(a?(0,o.NM)(n.width):n.width)/i,u=(a?(0,o.NM)(n.height):n.height)/s;return f&&Number.isFinite(f)||(f=1),u&&Number.isFinite(u)||(u=1),{x:f,y:u}}const a=(0,o.ze)(0);function f(t){const e=(0,r.Jj)(t);return(0,r.Pf)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:a}function u(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const l=t.getBoundingClientRect(),a=c(t);let u=(0,o.ze)(1);e&&(i?(0,r.kK)(i)&&(u=s(i)):u=s(t));const d=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==(0,r.Jj)(t))&&e}(a,n,i)?f(a):(0,o.ze)(0);let p=(l.left+d.x)/u.x,h=(l.top+d.y)/u.y,m=l.width/u.x,g=l.height/u.y;if(a){const t=(0,r.Jj)(a),e=i&&(0,r.kK)(i)?(0,r.Jj)(i):i;let n=t.frameElement;for(;n&&i&&e!==t;){const t=s(n),e=n.getBoundingClientRect(),o=(0,r.Dx)(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,l=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;p*=t.x,h*=t.y,m*=t.x,g*=t.y,p+=i,h+=l,n=(0,r.Jj)(n).frameElement}}return(0,o.JB)({width:m,height:g,x:p,y:h})}const d=[":popover-open",":modal"];function p(t){let e=!1,n=0,o=0;if(d.forEach((n=>{!function(n){try{e=e||t.matches(n)}catch(o){}}(n)})),e){const e=(0,r.gQ)(t);if(e){const t=e.getBoundingClientRect();n=t.x,o=t.y}}return[e,n,o]}function h(t){return u((0,r.tF)(t)).left+(0,r.Lw)(t).scrollLeft}function m(t,e,n){let i;if("viewport"===e)i=function(t,e){const n=(0,r.Jj)(t),o=(0,r.tF)(t),i=n.visualViewport;let l=o.clientWidth,c=o.clientHeight,s=0,a=0;if(i){l=i.width,c=i.height;const t=(0,r.Pf)();(!t||t&&"fixed"===e)&&(s=i.offsetLeft,a=i.offsetTop)}return{width:l,height:c,x:s,y:a}}(t,n);else if("document"===e)i=function(t){const e=(0,r.tF)(t),n=(0,r.Lw)(t),i=t.ownerDocument.body,l=(0,o.Fp)(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),c=(0,o.Fp)(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+h(t);const a=-n.scrollTop;return"rtl"===(0,r.Dx)(i).direction&&(s+=(0,o.Fp)(e.clientWidth,i.clientWidth)-l),{width:l,height:c,x:s,y:a}}((0,r.tF)(t));else if((0,r.kK)(e))i=function(t,e){const n=u(t,!0,"fixed"===e),i=n.top+t.clientTop,l=n.left+t.clientLeft,c=(0,r.Re)(t)?s(t):(0,o.ze)(1);return{width:t.clientWidth*c.x,height:t.clientHeight*c.y,x:l*c.x,y:i*c.y}}(e,n);else{const n=f(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return(0,o.JB)(i)}function g(t,e){const n=(0,r.Ow)(t);return!(n===e||!(0,r.kK)(n)||(0,r.Py)(n))&&("fixed"===(0,r.Dx)(n).position||g(n,e))}function y(t,e,n,i){const l=(0,r.Re)(e),c=(0,r.tF)(e),s="fixed"===n,a=u(t,!0,s,e);let f={scrollLeft:0,scrollTop:0};const d=(0,o.ze)(0);if(l||!l&&!s)if(("body"!==(0,r.wk)(e)||(0,r.ao)(c))&&(f=(0,r.Lw)(e)),l){const t=u(e,!0,s,e);d.x=t.x+e.clientLeft,d.y=t.y+e.clientTop}else c&&(d.x=h(c));let m=a.left+f.scrollLeft-d.x,g=a.top+f.scrollTop-d.y;const[y,w,x]=p(i);return y&&(m+=w,g+=x,l&&(m+=e.clientLeft,g+=e.clientTop)),{x:m,y:g,width:a.width,height:a.height}}function w(t,e){return(0,r.Re)(t)&&"fixed"!==(0,r.Dx)(t).position?e?e(t):t.offsetParent:null}function x(t,e){const n=(0,r.Jj)(t);if(!(0,r.Re)(t))return n;let o=w(t,e);for(;o&&(0,r.Ze)(o)&&"static"===(0,r.Dx)(o).position;)o=w(o,e);return o&&("html"===(0,r.wk)(o)||"body"===(0,r.wk)(o)&&"static"===(0,r.Dx)(o).position&&!(0,r.hT)(o))?n:o||(0,r.gQ)(t)||n}const v={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:i,strategy:l}=t;const c=(0,r.tF)(i),[a]=e?p(e.floating):[!1];if(i===c||a)return n;let f={scrollLeft:0,scrollTop:0},d=(0,o.ze)(1);const h=(0,o.ze)(0),m=(0,r.Re)(i);if((m||!m&&"fixed"!==l)&&(("body"!==(0,r.wk)(i)||(0,r.ao)(c))&&(f=(0,r.Lw)(i)),(0,r.Re)(i))){const t=u(i);d=s(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-f.scrollLeft*d.x+h.x,y:n.y*d.y-f.scrollTop*d.y+h.y}},getDocumentElement:r.tF,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:l}=t;const c=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=(0,r.Kx)(t,[],!1).filter((t=>(0,r.kK)(t)&&"body"!==(0,r.wk)(t))),i=null;const l="fixed"===(0,r.Dx)(t).position;let c=l?(0,r.Ow)(t):t;for(;(0,r.kK)(c)&&!(0,r.Py)(c);){const e=(0,r.Dx)(c),n=(0,r.hT)(c);n||"fixed"!==e.position||(i=null),(l?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||(0,r.ao)(c)&&!n&&g(t,c))?o=o.filter((t=>t!==c)):i=e,c=(0,r.Ow)(c)}return e.set(t,o),o}(e,this._c):[].concat(n),i],s=c[0],a=c.reduce(((t,n)=>{const i=m(e,n,l);return t.top=(0,o.Fp)(i.top,t.top),t.right=(0,o.VV)(i.right,t.right),t.bottom=(0,o.VV)(i.bottom,t.bottom),t.left=(0,o.Fp)(i.left,t.left),t}),m(e,s,l));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:x,getElementRects:async function(t){const e=this.getOffsetParent||x,n=this.getDimensions;return{reference:y(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await n(t.floating)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=l(t);return{width:e,height:n}},getScale:s,isElement:r.kK,isRTL:function(t){return"rtl"===(0,r.Dx)(t).direction}};function b(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:a="function"===typeof ResizeObserver,layoutShift:f="function"===typeof IntersectionObserver,animationFrame:d=!1}=i,p=c(t),h=l||s?[...p?(0,r.Kx)(p):[],...(0,r.Kx)(e)]:[];h.forEach((t=>{l&&t.addEventListener("scroll",n,{passive:!0}),s&&t.addEventListener("resize",n)}));const m=p&&f?function(t,e){let n,i=null;const l=(0,r.tF)(t);function c(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return function r(s,a){void 0===s&&(s=!1),void 0===a&&(a=1),c();const{left:f,top:u,width:d,height:p}=t.getBoundingClientRect();if(s||e(),!d||!p)return;const h={rootMargin:-(0,o.GW)(u)+"px "+-(0,o.GW)(l.clientWidth-(f+d))+"px "+-(0,o.GW)(l.clientHeight-(u+p))+"px "+-(0,o.GW)(f)+"px",threshold:(0,o.Fp)(0,(0,o.VV)(1,a))||1};let m=!0;function g(t){const e=t[0].intersectionRatio;if(e!==a){if(!m)return r();e?r(!1,e):n=setTimeout((()=>{r(!1,1e-7)}),100)}m=!1}try{i=new IntersectionObserver(g,{...h,root:l.ownerDocument})}catch(y){i=new IntersectionObserver(g,h)}i.observe(t)}(!0),c}(p,n):null;let g,y=-1,w=null;a&&(w=new ResizeObserver((t=>{let[o]=t;o&&o.target===p&&w&&(w.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{var t;null==(t=w)||t.observe(e)}))),n()})),p&&!d&&w.observe(p),w.observe(e));let x=d?u(t):null;return d&&function e(){const o=u(t);!x||o.x===x.x&&o.y===x.y&&o.width===x.width&&o.height===x.height||n();x=o,g=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach((t=>{l&&t.removeEventListener("scroll",n),s&&t.removeEventListener("resize",n)})),null==m||m(),null==(t=w)||t.disconnect(),w=null,d&&cancelAnimationFrame(g)}}const R=i.X5,k=i.uY,F=i.RR,L=i.dp,T=i.Cp,A=i.x7,D=i.Qo,E=i.dr,V=(t,e,n)=>{const o=new Map,r={platform:v,...n},l={...r.platform,_c:o};return(0,i.oo)(t,e,{...r,platform:l})}},11495:(t,e,n)=>{function o(t){return l(t)?(t.nodeName||"").toLowerCase():"#document"}function i(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function r(t){var e;return null==(e=(l(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function l(t){return t instanceof Node||t instanceof i(t).Node}function c(t){return t instanceof Element||t instanceof i(t).Element}function s(t){return t instanceof HTMLElement||t instanceof i(t).HTMLElement}function a(t){return"undefined"!==typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof i(t).ShadowRoot)}function f(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=g(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function u(t){return["table","td","th"].includes(o(t))}function d(t){const e=h(),n=g(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function p(t){let e=w(t);for(;s(e)&&!m(e);){if(d(e))return e;e=w(e)}return null}function h(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function m(t){return["html","body","#document"].includes(o(t))}function g(t){return i(t).getComputedStyle(t)}function y(t){return c(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function w(t){if("html"===o(t))return t;const e=t.assignedSlot||t.parentNode||a(t)&&t.host||r(t);return a(e)?e.host:e}function x(t){const e=w(t);return m(e)?t.ownerDocument?t.ownerDocument.body:t.body:s(e)&&f(e)?e:x(e)}function v(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const r=x(t),l=r===(null==(o=t.ownerDocument)?void 0:o.body),c=i(r);return l?e.concat(c,c.visualViewport||[],f(r)?r:[],c.frameElement&&n?v(c.frameElement):[]):e.concat(r,v(r,[],n))}n.d(e,{Dx:()=>g,Jj:()=>i,Kx:()=>v,Lw:()=>y,Ow:()=>w,Pf:()=>h,Py:()=>m,Re:()=>s,Ze:()=>u,Zq:()=>a,ao:()=>f,gQ:()=>p,hT:()=>d,kK:()=>c,tF:()=>r,wk:()=>o})},65207:(t,e,n)=>{n.d(e,{Ct:()=>r,Fp:()=>c,GW:()=>a,Go:()=>k,I4:()=>w,JB:()=>A,KX:()=>F,NM:()=>s,Qq:()=>x,Rn:()=>y,VV:()=>l,Wh:()=>v,gy:()=>R,hp:()=>g,i8:()=>b,k3:()=>m,ku:()=>h,mA:()=>o,pw:()=>L,uZ:()=>p,yd:()=>T,ze:()=>f});const o=["top","right","bottom","left"],i=["start","end"],r=o.reduce(((t,e)=>t.concat(e,e+"-"+i[0],e+"-"+i[1])),[]),l=Math.min,c=Math.max,s=Math.round,a=Math.floor,f=t=>({x:t,y:t}),u={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function p(t,e,n){return c(t,l(e,n))}function h(t,e){return"function"===typeof t?t(e):t}function m(t){return t.split("-")[0]}function g(t){return t.split("-")[1]}function y(t){return"x"===t?"y":"x"}function w(t){return"y"===t?"height":"width"}function x(t){return["top","bottom"].includes(m(t))?"y":"x"}function v(t){return y(x(t))}function b(t,e,n){void 0===n&&(n=!1);const o=g(t),i=v(t),r=w(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=L(l)),[l,L(l)]}function R(t){const e=L(t);return[k(t),e,k(e)]}function k(t){return t.replace(/start|end/g,(t=>d[t]))}function F(t,e,n,o){const i=g(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(m(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(k)))),r}function L(t){return t.replace(/left|right|bottom|top/g,(t=>u[t]))}function T(t){return"number"!==typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function A(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}}}]);
//# sourceMappingURL=904.9e2eccf3.chunk.js.map