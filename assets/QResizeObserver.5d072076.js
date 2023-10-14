import{P as ie,r as $,F as le,I,J as T,b as B,w as E,f as z,o as H,g as q,a as ae,j as P,K as O,q as re,L as se,h as Z,M as ue,c as U,N as ee,O as ce,k as de,n as fe}from"./index.8f10eb54.js";import{v as me,g as D,d as te,e as he,f as G,c as ve}from"./QBtn.c111074d.js";function ge(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ie.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Pe={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function ke({showing:e,avoidEmit:o,configureAnchorEl:t}){const{props:n,proxy:i,emit:c}=q(),l=$(null);let u=null;function r(a){return l.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};t===void 0&&(Object.assign(s,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){le(a,13)===!0&&s.toggle(a)},contextClick(a){i.hide(a),I(a),T(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:I,mobileTouch(a){if(s.mobileCleanup(a),r(a)!==!0)return;i.hide(a),l.value.classList.add("non-selectable");const f=a.target;B(s,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){l.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&ge()}}),t=function(a=n.contextMenu){if(n.noParentEvent===!0||l.value===null)return;let f;a===!0?i.$q.platform.is.mobile===!0?f=[[l.value,"touchstart","mobileTouch","passive"]]:f=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:f=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],B(s,"anchor",f)});function d(){ae(s,"anchor")}function g(a){for(l.value=a;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;t()}function p(){if(n.target===!1||n.target===""||i.$el.parentNode===null)l.value=null;else if(n.target===!0)g(i.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(l.value=a.$el||a,t()):(l.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return E(()=>n.contextMenu,a=>{l.value!==null&&(d(),t(a))}),E(()=>n.target,()=>{l.value!==null&&d(),p()}),E(()=>n.noParentEvent,a=>{l.value!==null&&(a===!0?d():t())}),z(()=>{p(),o!==!0&&n.modelValue===!0&&l.value===null&&c("update:modelValue",!1)}),H(()=>{u!==null&&clearTimeout(u),d()}),{anchorEl:l,canShow:r,anchorEvents:s}}function qe(e,o){const t=$(null);let n;function i(u,r){const s=`${r!==void 0?"add":"remove"}EventListener`,d=r!==void 0?r:n;u!==window&&u[s]("scroll",d,P.passive),window[s]("scroll",d,P.passive),n=r}function c(){t.value!==null&&(i(t.value),t.value=null)}const l=E(()=>e.noParentEvent,()=>{t.value!==null&&(c(),o())});return H(l),{localScrollTarget:t,unconfigureScrollTarget:c,changeScrollEvent:i}}const Ve={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ae=["beforeShow","show","beforeHide","hide"];function Fe({showing:e,canShow:o,hideOnRouteChange:t,handleShow:n,handleHide:i,processOnMount:c}){const l=q(),{props:u,emit:r,proxy:s}=l;let d;function g(m){e.value===!0?f(m):p(m)}function p(m){if(u.disable===!0||m!==void 0&&m.qAnchorHandled===!0||o!==void 0&&o(m)!==!0)return;const h=u["onUpdate:modelValue"]!==void 0;h===!0&&(r("update:modelValue",!0),d=m,T(()=>{d===m&&(d=void 0)})),(u.modelValue===null||h===!1)&&a(m)}function a(m){e.value!==!0&&(e.value=!0,r("beforeShow",m),n!==void 0?n(m):r("show",m))}function f(m){if(u.disable===!0)return;const h=u["onUpdate:modelValue"]!==void 0;h===!0&&(r("update:modelValue",!1),d=m,T(()=>{d===m&&(d=void 0)})),(u.modelValue===null||h===!1)&&W(m)}function W(m){e.value!==!1&&(e.value=!1,r("beforeHide",m),i!==void 0?i(m):r("hide",m))}function y(m){u.disable===!0&&m===!0?u["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):m===!0!==e.value&&(m===!0?a:W)(d)}E(()=>u.modelValue,y),t!==void 0&&me(l)===!0&&E(()=>s.$route.fullPath,()=>{t.value===!0&&e.value===!0&&f()}),c===!0&&z(()=>{y(u.modelValue)});const V={show:p,hide:f,toggle:g};return Object.assign(s,V),V}let w=[],k=[];function ne(e){k=k.filter(o=>o!==e)}function pe(e){ne(e),k.push(e)}function _(e){ne(e),k.length===0&&w.length!==0&&(w[w.length-1](),w=[])}function Re(e){k.length===0?e():w.push(e)}function Ne(e){w=w.filter(o=>o!==e)}let be=1,we=document.body;function xe(e,o){const t=document.createElement("div");if(t.id=o!==void 0?`q-portal--${o}--${be++}`:e,O.globalNodes!==void 0){const n=O.globalNodes.class;n!==void 0&&(t.className=n)}return we.appendChild(t),t}function ye(e){e.remove()}const S=[];function De(e,o){do{if(e.$options.name==="QMenu"){if(e.hide(o),e.$props.separateClosePopup===!0)return D(e)}else if(e.__qPortal===!0){const t=D(e);return t!==void 0&&t.$options.name==="QPopupProxy"?(e.hide(o),t):e}e=D(e)}while(e!=null)}function Ee(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function je(e,o,t,n){const i=$(!1),c=$(!1);let l=null;const u={},r=n==="dialog"&&Ee(e);function s(g){if(g===!0){_(u),c.value=!0;return}c.value=!1,i.value===!1&&(r===!1&&l===null&&(l=xe(!1,n)),i.value=!0,S.push(e.proxy),pe(u))}function d(g){if(c.value=!1,g!==!0)return;_(u),i.value=!1;const p=S.indexOf(e.proxy);p!==-1&&S.splice(p,1),l!==null&&(ye(l),l=null)}return re(()=>{d(!0)}),e.proxy.__qPortal=!0,se(e.proxy,"contentEl",()=>o.value),{showPortal:s,hidePortal:d,portalIsActive:i,portalIsAccessible:c,renderPortal:()=>r===!0?t():i.value===!0?[Z(ue,{to:l},t())]:void 0}}const Qe={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ie(e,o=()=>{},t=()=>{}){return{transitionProps:U(()=>{const n=`q-transition--${e.transitionShow||o()}`,i=`q-transition--${e.transitionHide||t()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:U(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Be(){let e;const o=q();function t(){e=void 0}return ee(t),H(t),{removeTick:t,registerTick(n){e=n,T(()=>{e===n&&(te(o)===!1&&e(),e=void 0)})}}}function Oe(){let e=null;const o=q();function t(){e!==null&&(clearTimeout(e),e=null)}return ee(t),H(t),{removeTimeout:t,registerTimeout(n,i){t(),te(o)===!1&&(e=setTimeout(n,i))}}}const Te=[null,document,document.body,document.scrollingElement,document.documentElement];function Ue(e,o){let t=he(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return Te.includes(t)?window:t}function Ge(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function _e(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let F;function He(){if(F!==void 0)return F;const e=document.createElement("p"),o=document.createElement("div");G(e,{width:"100%",height:"200px"}),G(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=o.clientWidth),o.remove(),F=t-n,F}function Ke(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{notPassiveCapture:R}=P,x=[];function N(e){const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let t=S.length-1;for(;t>=0;){const n=S[t].$;if(n.type.name==="QTooltip"){t--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;t--}for(let n=x.length-1;n>=0;n--){const i=x[n];if((i.anchorEl.value===null||i.anchorEl.value.contains(o)===!1)&&(o===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(o)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Xe(e){x.push(e),x.length===1&&(document.addEventListener("mousedown",N,R),document.addEventListener("touchstart",N,R))}function Ye(e){const o=x.findIndex(t=>t===e);o>-1&&(x.splice(o,1),x.length===0&&(document.removeEventListener("mousedown",N,R),document.removeEventListener("touchstart",N,R)))}let K,X;function Je(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ze(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Q[`${e}#ltr`]=e,Q[`${e}#rtl`]=e});function et(e,o){const t=e.split(" ");return{vertical:t[0],horizontal:Q[`${t[1]}#${o===!0?"rtl":"ltr"}`]}}function We(e,o){let{top:t,left:n,right:i,bottom:c,width:l,height:u}=e.getBoundingClientRect();return o!==void 0&&(t-=o[1],n-=o[0],c+=o[1],i+=o[0],l+=o[0],u+=o[1]),{top:t,bottom:c,height:u,left:n,right:i,width:l,middle:n+(i-n)/2,center:t+(c-t)/2}}function Ce(e,o,t){let{top:n,left:i}=e.getBoundingClientRect();return n+=o.top,i+=o.left,t!==void 0&&(n+=t[1],i+=t[0]),{top:n,bottom:n+1,height:1,left:i,right:i+1,width:1,middle:i,center:n}}function Le(e,o){return{top:0,center:o/2,bottom:o,left:0,middle:e/2,right:e}}function Y(e,o,t,n){return{top:e[t.vertical]-o[n.vertical],left:e[t.horizontal]-o[n.horizontal]}}function Me(e,o=0){if(e.targetEl===null||e.anchorEl===null||o>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Me(e,o+1)},10);return}const{targetEl:t,offset:n,anchorEl:i,anchorOrigin:c,selfOrigin:l,absoluteOffset:u,fit:r,cover:s,maxHeight:d,maxWidth:g}=e;if(ce.is.ios===!0&&window.visualViewport!==void 0){const A=document.body.style,{offsetLeft:L,offsetTop:b}=window.visualViewport;L!==K&&(A.setProperty("--q-pe-left",L+"px"),K=L),b!==X&&(A.setProperty("--q-pe-top",b+"px"),X=b)}const{scrollLeft:p,scrollTop:a}=t,f=u===void 0?We(i,s===!0?[0,0]:n):Ce(i,u,n);Object.assign(t.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:W,offsetHeight:y}=t,{elWidth:V,elHeight:m}=r===!0||s===!0?{elWidth:Math.max(f.width,W),elHeight:s===!0?Math.max(f.height,y):y}:{elWidth:W,elHeight:y};let h={maxWidth:g,maxHeight:d};(r===!0||s===!0)&&(h.minWidth=f.width+"px",s===!0&&(h.minHeight=f.height+"px")),Object.assign(t.style,h);const C=Le(V,m);let v=Y(f,C,c,l);if(u===void 0||n===void 0)j(v,f,C,c,l);else{const{top:A,left:L}=v;j(v,f,C,c,l);let b=!1;if(v.top!==A){b=!0;const M=2*n[1];f.center=f.top-=M,f.bottom-=M+2}if(v.left!==L){b=!0;const M=2*n[0];f.middle=f.left-=M,f.right-=M+2}b===!0&&(v=Y(f,C,c,l),j(v,f,C,c,l))}h={top:v.top+"px",left:v.left+"px"},v.maxHeight!==void 0&&(h.maxHeight=v.maxHeight+"px",f.height>v.maxHeight&&(h.minHeight=h.maxHeight)),v.maxWidth!==void 0&&(h.maxWidth=v.maxWidth+"px",f.width>v.maxWidth&&(h.minWidth=h.maxWidth)),Object.assign(t.style,h),t.scrollTop!==a&&(t.scrollTop=a),t.scrollLeft!==p&&(t.scrollLeft=p)}function j(e,o,t,n,i){const c=t.bottom,l=t.right,u=He(),r=window.innerHeight-u,s=document.body.clientWidth;if(e.top<0||e.top+c>r)if(i.vertical==="center")e.top=o[n.vertical]>r/2?Math.max(0,r-c):0,e.maxHeight=Math.min(c,r);else if(o[n.vertical]>r/2){const d=Math.min(r,n.vertical==="center"?o.center:n.vertical===i.vertical?o.bottom:o.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,n.vertical==="center"?o.center:n.vertical===i.vertical?o.top:o.bottom),e.maxHeight=Math.min(c,r-e.top);if(e.left<0||e.left+l>s)if(e.maxWidth=Math.min(l,s),i.horizontal==="middle")e.left=o[n.horizontal]>s/2?Math.max(0,s-l):0;else if(o[n.horizontal]>s/2){const d=Math.min(s,n.horizontal==="middle"?o.middle:n.horizontal===i.horizontal?o.right:o.left);e.maxWidth=Math.min(l,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?o.middle:n.horizontal===i.horizontal?o.left:o.right),e.maxWidth=Math.min(l,s-e.left)}function Se(){const e=$(!de.value);return e.value===!1&&z(()=>{e.value=!0}),e}const oe=typeof ResizeObserver!="undefined",J=oe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var tt=ve({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let t=null,n,i={width:-1,height:-1};function c(r){r===!0||e.debounce===0||e.debounce==="0"?l():t===null&&(t=setTimeout(l,e.debounce))}function l(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:r,offsetHeight:s}=n;(r!==i.width||s!==i.height)&&(i={width:r,height:s},o("resize",i))}}const{proxy:u}=q();if(oe===!0){let r;const s=d=>{n=u.$el.parentNode,n?(r=new ResizeObserver(c),r.observe(n),l()):d!==!0&&T(()=>{s(!0)})};return z(()=>{s()}),H(()=>{t!==null&&clearTimeout(t),r!==void 0&&(r.disconnect!==void 0?r.disconnect():n&&r.unobserve(n))}),fe}else{let d=function(){t!==null&&(clearTimeout(t),t=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",c,P.passive),s=void 0)},g=function(){d(),n&&n.contentDocument&&(s=n.contentDocument.defaultView,s.addEventListener("resize",c,P.passive),l())};const r=Se();let s;return z(()=>{T(()=>{n=u.$el,n&&g()})}),H(d),u.trigger=c,()=>{if(r.value===!0)return Z("object",{style:J.style,tabindex:-1,type:"text/html",data:J.url,"aria-hidden":"true",onLoad:g})}}}});export{tt as Q,Ve as a,Qe as b,Ze as c,Ae as d,Be as e,Oe as f,Ie as g,qe as h,ke as i,Fe as j,je as k,ge as l,Ue as m,Xe as n,Ge as o,et as p,_e as q,Ye as r,Me as s,He as t,Pe as u,Je as v,Re as w,De as x,Ne as y,Ke as z};
