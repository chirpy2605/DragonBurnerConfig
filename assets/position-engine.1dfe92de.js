import{P as le,r as q,G as oe,J as R,f as k,d as B,w as T,e as O,o as z,g as F,b as ne,l as Q,K as I,c as ie,u as ae,L as re,h as G,M as se,a as U,N as Z,O as ue}from"./index.0758088b.js";import{v as ce,g as N,c as ee,d as de,e as _}from"./QBtn.1e588735.js";function fe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),le.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Pe={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Se({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:o,proxy:n,emit:d}=F(),i=q(null);let r=null;function u(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};l===void 0&&(Object.assign(c,{hide(a){n.hide(a)},toggle(a){n.toggle(a),a.qAnchorHandled=!0},toggleKey(a){oe(a,13)===!0&&c.toggle(a)},contextClick(a){n.hide(a),R(a),k(()=>{n.show(a),a.qAnchorHandled=!0})},prevent:R,mobileTouch(a){if(c.mobileCleanup(a),u(a)!==!0)return;n.hide(a),i.value.classList.add("non-selectable");const s=a.target;B(c,"anchor",[[s,"touchmove","mobileCleanup","passive"],[s,"touchend","mobileCleanup","passive"],[s,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,n.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&fe()}}),l=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let s;a===!0?n.$q.platform.is.mobile===!0?s=[[i.value,"touchstart","mobileTouch","passive"]]:s=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:s=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],B(c,"anchor",s)});function f(){ne(c,"anchor")}function p(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function g(){if(o.target===!1||o.target===""||n.$el.parentNode===null)i.value=null;else if(o.target===!0)p(n.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return T(()=>o.contextMenu,a=>{i.value!==null&&(f(),l(a))}),T(()=>o.target,()=>{i.value!==null&&f(),g()}),T(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?f():l())}),O(()=>{g(),t!==!0&&o.modelValue===!0&&i.value===null&&d("update:modelValue",!1)}),z(()=>{r!==null&&clearTimeout(r),f()}),{anchorEl:i,canShow:u,anchorEvents:c}}function $e(e,t){const l=q(null);let o;function n(r,u){const c=`${u!==void 0?"add":"remove"}EventListener`,f=u!==void 0?u:o;r!==window&&r[c]("scroll",f,Q.passive),window[c]("scroll",f,Q.passive),o=u}function d(){l.value!==null&&(n(l.value),l.value=null)}const i=T(()=>e.noParentEvent,()=>{l.value!==null&&(d(),t())});return z(i),{localScrollTarget:l,unconfigureScrollTarget:d,changeScrollEvent:n}}const Le={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},qe=["beforeShow","show","beforeHide","hide"];function ke({showing:e,canShow:t,hideOnRouteChange:l,handleShow:o,handleHide:n,processOnMount:d}){const i=F(),{props:r,emit:u,proxy:c}=i;let f;function p(m){e.value===!0?s(m):g(m)}function g(m){if(r.disable===!0||m!==void 0&&m.qAnchorHandled===!0||t!==void 0&&t(m)!==!0)return;const h=r["onUpdate:modelValue"]!==void 0;h===!0&&(u("update:modelValue",!0),f=m,k(()=>{f===m&&(f=void 0)})),(r.modelValue===null||h===!1)&&a(m)}function a(m){e.value!==!0&&(e.value=!0,u("beforeShow",m),o!==void 0?o(m):u("show",m))}function s(m){if(r.disable===!0)return;const h=r["onUpdate:modelValue"]!==void 0;h===!0&&(u("update:modelValue",!1),f=m,k(()=>{f===m&&(f=void 0)})),(r.modelValue===null||h===!1)&&E(m)}function E(m){e.value!==!1&&(e.value=!1,u("beforeHide",m),n!==void 0?n(m):u("hide",m))}function y(m){r.disable===!0&&m===!0?r["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):m===!0!==e.value&&(m===!0?a:E)(f)}T(()=>r.modelValue,y),l!==void 0&&ce(i)===!0&&T(()=>c.$route.fullPath,()=>{l.value===!0&&e.value===!0&&s()}),d===!0&&O(()=>{y(r.modelValue)});const S={show:g,hide:s,toggle:p};return Object.assign(c,S),S}let b=[],P=[];function te(e){P=P.filter(t=>t!==e)}function me(e){te(e),P.push(e)}function K(e){te(e),P.length===0&&b.length!==0&&(b[b.length-1](),b=[])}function Ae(e){P.length===0?e():b.push(e)}function Ve(e){b=b.filter(t=>t!==e)}let he=1,ve=document.body;function ge(e,t){const l=document.createElement("div");if(l.id=t!==void 0?`q-portal--${t}--${he++}`:e,I.globalNodes!==void 0){const o=I.globalNodes.class;o!==void 0&&(l.className=o)}return ve.appendChild(l),l}function pe(e){e.remove()}const M=[];function ze(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return N(e)}else if(e.__qPortal===!0){const l=N(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(t),l):e}e=N(e)}while(e!=null)}const we=ie({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function be(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Fe(e,t,l,o){const n=q(!1),d=q(!1);let i=null;const r={},u=o==="dialog"&&be(e);function c(p){if(p===!0){K(r),d.value=!0;return}d.value=!1,n.value===!1&&(u===!1&&i===null&&(i=ge(!1,o)),n.value=!0,M.push(e.proxy),me(r))}function f(p){if(d.value=!1,p!==!0)return;K(r),n.value=!1;const g=M.indexOf(e.proxy);g!==-1&&M.splice(g,1),i!==null&&(pe(i),i=null)}return ae(()=>{f(!0)}),e.proxy.__qPortal=!0,re(e.proxy,"contentEl",()=>t.value),{showPortal:c,hidePortal:f,portalIsActive:n,portalIsAccessible:d,renderPortal:()=>u===!0?l():n.value===!0?[G(se,{to:i},G(we,l))]:void 0}}const Ne={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function De(e,t=()=>{},l=()=>{}){return{transitionProps:U(()=>{const o=`q-transition--${e.transitionShow||t()}`,n=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${n}-leave-from`,leaveActiveClass:`${n}-leave-active`,leaveToClass:`${n}-leave-to`}}),transitionStyle:U(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Qe(){let e;const t=F();function l(){e=void 0}return Z(l),z(l),{removeTick:l,registerTick(o){e=o,k(()=>{e===o&&(ee(t)===!1&&e(),e=void 0)})}}}function je(){let e=null;const t=F();function l(){e!==null&&(clearTimeout(e),e=null)}return Z(l),z(l),{removeTimeout:l,registerTimeout(o,n){l(),ee(t)===!1&&(e=setTimeout(()=>{e=null,o()},n))}}}const xe=[null,document,document.body,document.scrollingElement,document.documentElement];function Re(e,t){let l=de(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return xe.includes(l)?window:l}function Be(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ie(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let L;function ye(){if(L!==void 0)return L;const e=document.createElement("p"),t=document.createElement("div");_(e,{width:"100%",height:"200px"}),_(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return l===o&&(o=t.clientWidth),t.remove(),L=l-o,L}function Ge(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{notPassiveCapture:A}=Q,x=[];function V(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=M.length-1;for(;l>=0;){const o=M[l].$;if(o.type.name==="QTooltip"){l--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;l--}for(let o=x.length-1;o>=0;o--){const n=x[o];if((n.anchorEl.value===null||n.anchorEl.value.contains(t)===!1)&&(t===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(t)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function Ue(e){x.push(e),x.length===1&&(document.addEventListener("mousedown",V,A),document.addEventListener("touchstart",V,A))}function _e(e){const t=x.findIndex(l=>l===e);t!==-1&&(x.splice(t,1),x.length===0&&(document.removeEventListener("mousedown",V,A),document.removeEventListener("touchstart",V,A)))}let X,Y;function Ke(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Xe(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const j={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{j[`${e}#ltr`]=e,j[`${e}#rtl`]=e});function Ye(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:j[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function Te(e,t){let{top:l,left:o,right:n,bottom:d,width:i,height:r}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],o-=t[0],d+=t[1],n+=t[0],i+=t[0],r+=t[1]),{top:l,bottom:d,height:r,left:o,right:n,width:i,middle:o+(n-o)/2,center:l+(d-l)/2}}function Ee(e,t,l){let{top:o,left:n}=e.getBoundingClientRect();return o+=t.top,n+=t.left,l!==void 0&&(o+=l[1],n+=l[0]),{top:o,bottom:o+1,height:1,left:n,right:n+1,width:1,middle:n,center:o}}function He(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function J(e,t,l,o){return{top:e[l.vertical]-t[o.vertical],left:e[l.horizontal]-t[o.horizontal]}}function We(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{We(e,t+1)},10);return}const{targetEl:l,offset:o,anchorEl:n,anchorOrigin:d,selfOrigin:i,absoluteOffset:r,fit:u,cover:c,maxHeight:f,maxWidth:p}=e;if(ue.is.ios===!0&&window.visualViewport!==void 0){const $=document.body.style,{offsetLeft:W,offsetTop:w}=window.visualViewport;W!==X&&($.setProperty("--q-pe-left",W+"px"),X=W),w!==Y&&($.setProperty("--q-pe-top",w+"px"),Y=w)}const{scrollLeft:g,scrollTop:a}=l,s=r===void 0?Te(n,c===!0?[0,0]:o):Ee(n,r,o);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:E,offsetHeight:y}=l,{elWidth:S,elHeight:m}=u===!0||c===!0?{elWidth:Math.max(s.width,E),elHeight:c===!0?Math.max(s.height,y):y}:{elWidth:E,elHeight:y};let h={maxWidth:p,maxHeight:f};(u===!0||c===!0)&&(h.minWidth=s.width+"px",c===!0&&(h.minHeight=s.height+"px")),Object.assign(l.style,h);const H=He(S,m);let v=J(s,H,d,i);if(r===void 0||o===void 0)D(v,s,H,d,i);else{const{top:$,left:W}=v;D(v,s,H,d,i);let w=!1;if(v.top!==$){w=!0;const C=2*o[1];s.center=s.top-=C,s.bottom-=C+2}if(v.left!==W){w=!0;const C=2*o[0];s.middle=s.left-=C,s.right-=C+2}w===!0&&(v=J(s,H,d,i),D(v,s,H,d,i))}h={top:v.top+"px",left:v.left+"px"},v.maxHeight!==void 0&&(h.maxHeight=v.maxHeight+"px",s.height>v.maxHeight&&(h.minHeight=h.maxHeight)),v.maxWidth!==void 0&&(h.maxWidth=v.maxWidth+"px",s.width>v.maxWidth&&(h.minWidth=h.maxWidth)),Object.assign(l.style,h),l.scrollTop!==a&&(l.scrollTop=a),l.scrollLeft!==g&&(l.scrollLeft=g)}function D(e,t,l,o,n){const d=l.bottom,i=l.right,r=ye(),u=window.innerHeight-r,c=document.body.clientWidth;if(e.top<0||e.top+d>u)if(n.vertical==="center")e.top=t[o.vertical]>u/2?Math.max(0,u-d):0,e.maxHeight=Math.min(d,u);else if(t[o.vertical]>u/2){const f=Math.min(u,o.vertical==="center"?t.center:o.vertical===n.vertical?t.bottom:t.top);e.maxHeight=Math.min(d,f),e.top=Math.max(0,f-d)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===n.vertical?t.top:t.bottom),e.maxHeight=Math.min(d,u-e.top);if(e.left<0||e.left+i>c)if(e.maxWidth=Math.min(i,c),n.horizontal==="middle")e.left=t[o.horizontal]>c/2?Math.max(0,c-i):0;else if(t[o.horizontal]>c/2){const f=Math.min(c,o.horizontal==="middle"?t.middle:o.horizontal===n.horizontal?t.right:t.left);e.maxWidth=Math.min(i,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===n.horizontal?t.left:t.right),e.maxWidth=Math.min(i,c-e.left)}export{Le as a,Ne as b,Xe as c,qe as d,Qe as e,je as f,De as g,$e as h,Se as i,ke as j,Fe as k,fe as l,Re as m,Ue as n,Be as o,Ye as p,Ie as q,_e as r,We as s,ye as t,Pe as u,Ke as v,Ae as w,Ve as x,ze as y,Ge as z};