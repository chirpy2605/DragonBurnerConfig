import{c as L,a as v,h as g,r as S,w as z,o as E,b as Z,d as ee,T as Pe,g as Q,s as _e,i as de,e as D,n as fe,f as te,l as W,j as ve,k as $,m as I,p as he,q as qe,t as M,u as Ce,_ as Le,v as Oe,x as He,y as ke,z as _,A as q,B as ne,C as A}from"./index.0758088b.js";import{h as N,a as $e,b as Ee,Q as oe}from"./QBtn.1e588735.js";import{u as Qe,a as Re,b as Be,v as le,c as Ve,d as Me,e as De,f as Ne,g as je,h as Ae,i as Fe,j as We,k as Ue,r as ie,s as Ie,l as ae,m as ge,p as re,n as Ke,o as Ge,q as Je,t as F}from"./position-engine.1dfe92de.js";var Xe=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:h}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>g("div",{class:n.value},N(h.default))}}),se=L({name:"QTooltip",inheritAttrs:!1,props:{...Qe,...Re,...Be,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:le},self:{type:String,default:"top middle",validator:le},offset:{type:Array,default:()=>[14,14],validator:Ve},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Me],setup(e,{slots:h,emit:n,attrs:t}){let o,s;const u=Q(),{proxy:{$q:d}}=u,r=S(null),i=S(!1),m=v(()=>re(e.anchor,d.lang.rtl)),p=v(()=>re(e.self,d.lang.rtl)),x=v(()=>e.persistent!==!0),{registerTick:f,removeTick:w}=De(),{registerTimeout:C}=Ne(),{transitionProps:R,transitionStyle:O}=je(e),{localScrollTarget:l,changeScrollEvent:y,unconfigureScrollTarget:a}=Ae(e,X),{anchorEl:c,canShow:P,anchorEvents:T}=Fe({showing:i,configureAnchorEl:Se}),{show:B,hide:k}=We({showing:i,canShow:P,handleShow:pe,handleHide:ye,hideOnRouteChange:x,processOnMount:!0});Object.assign(T,{delayShow:we,delayHide:Te});const{showPortal:K,hidePortal:G,renderPortal:be}=Ue(u,r,ze,"tooltip");if(d.platform.is.mobile===!0){const b={anchorEl:c,innerRef:r,onClickOutside(H){return k(H),H.target.classList.contains("q-dialog__backdrop")&&_e(H),!0}},j=v(()=>e.modelValue===null&&e.persistent!==!0&&i.value===!0);z(j,H=>{(H===!0?Ke:ie)(b)}),E(()=>{ie(b)})}function pe(b){K(),f(()=>{s=new MutationObserver(()=>V()),s.observe(r.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),V(),X()}),o===void 0&&(o=z(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,V)),C(()=>{K(!0),n("show",b)},e.transitionDuration)}function ye(b){w(),G(),J(),C(()=>{G(!0),n("hide",b)},e.transitionDuration)}function J(){s!==void 0&&(s.disconnect(),s=void 0),o!==void 0&&(o(),o=void 0),a(),Z(T,"tooltipTemp")}function V(){Ie({targetEl:r.value,offset:e.offset,anchorEl:c.value,anchorOrigin:m.value,selfOrigin:p.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function we(b){if(d.platform.is.mobile===!0){ae(),document.body.classList.add("non-selectable");const j=c.value,H=["touchmove","touchcancel","touchend","click"].map(Y=>[j,Y,"delayHide","passiveCapture"]);ee(T,"tooltipTemp",H)}C(()=>{B(b)},e.delay)}function Te(b){d.platform.is.mobile===!0&&(Z(T,"tooltipTemp"),ae(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),C(()=>{k(b)},e.hideDelay)}function Se(){if(e.noParentEvent===!0||c.value===null)return;const b=d.platform.is.mobile===!0?[[c.value,"touchstart","delayShow","passive"]]:[[c.value,"mouseenter","delayShow","passive"],[c.value,"mouseleave","delayHide","passive"]];ee(T,"anchor",b)}function X(){if(c.value!==null||e.scrollTarget!==void 0){l.value=ge(c.value,e.scrollTarget);const b=e.noParentEvent===!0?V:k;y(l.value,b)}}function xe(){return i.value===!0?g("div",{...t,ref:r,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,O.value],role:"tooltip"},N(h.default)):null}function ze(){return g(Pe,R.value,xe)}return E(J),Object.assign(u.proxy,{updatePosition:V}),be}}),Ye=L({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:h}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:n.value,role:"toolbar"},N(h.default))}});function Ze(){const e=S(!de.value);return e.value===!1&&D(()=>{e.value=!0}),{isHydrated:e}}const me=typeof ResizeObserver!="undefined",ue=me===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var U=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:h}){let n=null,t,o={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:r,offsetHeight:i}=t;(r!==o.width||i!==o.height)&&(o={width:r,height:i},h("resize",o))}}const{proxy:d}=Q();if(d.trigger=s,me===!0){let r;const i=m=>{t=d.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),u()):m!==!0&&te(()=>{i(!0)})};return D(()=>{i()}),E(()=>{n!==null&&clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),fe}else{let m=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,W.passive),i=void 0)},p=function(){m(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,W.passive),u())};const{isHydrated:r}=Ze();let i;return D(()=>{te(()=>{t=d.$el,t&&p()})}),E(m),()=>{if(r.value===!0)return g("object",{class:"q--avoid-card-border",style:ue.style,tabindex:-1,type:"text/html",data:ue.url,"aria-hidden":"true",onLoad:p})}}}}),et=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:h,emit:n}){const{proxy:{$q:t}}=Q(),o=ve(I,$);if(o===$)return console.error("QHeader needs to be child of QLayout"),$;const s=S(parseInt(e.heightHint,10)),u=S(!0),d=v(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),r=v(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return u.value===!0?s.value:0;const l=s.value-o.scroll.value.position;return l>0?l:0}),i=v(()=>e.modelValue!==!0||d.value===!0&&u.value!==!0),m=v(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),p=v(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=v(()=>{const l=o.rows.value.top,y={};return l[0]==="l"&&o.left.space===!0&&(y[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),l[2]==="r"&&o.right.space===!0&&(y[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),y});function f(l,y){o.update("header",l,y)}function w(l,y){l.value!==y&&(l.value=y)}function C({height:l}){w(s,l),f("size",l)}function R(l){m.value===!0&&w(u,!0),n("focusin",l)}z(()=>e.modelValue,l=>{f("space",l),w(u,!0),o.animate()}),z(r,l=>{f("offset",l)}),z(()=>e.reveal,l=>{l===!1&&w(u,e.modelValue)}),z(u,l=>{o.animate(),n("reveal",l)}),z(o.scroll,l=>{e.reveal===!0&&w(u,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const O={};return o.instances.header=O,e.modelValue===!0&&f("size",s.value),f("space",e.modelValue),f("offset",r.value),E(()=>{o.instances.header===O&&(o.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const l=$e(h.default,[]);return e.elevated===!0&&l.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(g(U,{debounce:0,onResize:C})),g("header",{class:p.value,style:x.value,onFocusin:R},l)}}}),tt=L({name:"QPageContainer",setup(e,{slots:h}){const{proxy:{$q:n}}=Q(),t=ve(I,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;he(qe,!0);const o=v(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:o.value},N(h.default))}});const{passive:ce}=W,nt=["both","horizontal","vertical"];var ot=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>nt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:h}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,s;z(()=>e.scrollTarget,()=>{r(),d()});function u(){t!==null&&t();const p=Math.max(0,Ge(o)),x=Je(o),f={top:p-n.position.top,left:x-n.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const w=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:p,left:x},n.directionChanged=n.direction!==w,n.delta=f,n.directionChanged===!0&&(n.direction=w,n.inflectionPoint=n.position),h("scroll",{...n})}function d(){o=ge(s,e.scrollTarget),o.addEventListener("scroll",i,ce),i(!0)}function r(){o!==void 0&&(o.removeEventListener("scroll",i,ce),o=void 0)}function i(p){if(p===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[x,f]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{f(x),t=null}}}const{proxy:m}=Q();return z(()=>m.$q.lang.rtl,u),D(()=>{s=m.$el.parentNode,d()}),E(()=>{t!==null&&t(),r()}),Object.assign(m,{trigger:i,getPosition:()=>n}),fe}}),lt=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:h,emit:n}){const{proxy:{$q:t}}=Q(),o=S(null),s=S(t.screen.height),u=S(e.container===!0?0:t.screen.width),d=S({position:0,direction:"down",inflectionPoint:0}),r=S(0),i=S(de.value===!0?0:F()),m=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=v(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),x=v(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),f=v(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function w(a){if(e.container===!0||document.qScrollPrevented!==!0){const c={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};d.value=c,e.onScroll!==void 0&&n("scroll",c)}}function C(a){const{height:c,width:P}=a;let T=!1;s.value!==c&&(T=!0,s.value=c,e.onScrollHeight!==void 0&&n("scrollHeight",c),O()),u.value!==P&&(T=!0,u.value=P),T===!0&&e.onResize!==void 0&&n("resize",a)}function R({height:a}){r.value!==a&&(r.value=a,O())}function O(){if(e.container===!0){const a=s.value>r.value?F():0;i.value!==a&&(i.value=a)}}let l=null;const y={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:o,height:s,containerHeight:r,scrollbarWidth:i,totalWidth:v(()=>u.value+i.value),rows:v(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:M({size:0,offset:0,space:!1}),right:M({size:300,offset:0,space:!1}),footer:M({size:0,offset:0,space:!1}),left:M({size:300,offset:0,space:!1}),scroll:d,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,c,P){y[a][c]=P}};if(he(I,y),F()>0){let P=function(){a=null,c.classList.remove("hide-scrollbar")},T=function(){if(a===null){if(c.scrollHeight>t.screen.height)return;c.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(P,300)},B=function(k){a!==null&&k==="remove"&&(clearTimeout(a),P()),window[`${k}EventListener`]("resize",T)},a=null;const c=document.body;z(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),Ce(()=>{B("remove")})}return()=>{const a=Ee(h.default,[g(ot,{onScroll:w}),g(U,{onResize:C})]),c=g("div",{class:m.value,style:p.value,ref:e.container===!0?void 0:o,tabindex:-1},a);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:o},[g(U,{onResize:R}),g("div",{class:"absolute-full",style:x.value},[g("div",{class:"scroll",style:f.value},[c])])]):c}}});const it={},at=A("div",{class:"flex no-wrap"},[A("img",{src:"icons/favicon-32x32.png",class:"header-icon"}),A("div",{class:"q-ml-sm"},"Dragon Burner v8 Configurator")],-1);function rt(e,h){const n=Oe("router-view");return He(),ke(lt,{view:"lHh Lpr lFf"},{default:_(()=>[q(et,{elevated:""},{default:_(()=>[q(Ye,null,{default:_(()=>[q(Xe,null,{default:_(()=>[at]),_:1}),q(oe,{flat:"",round:"",icon:"mdi-leaf-maple",size:"md",href:"https://github.com/MapleLeafMakers",target:"_blank"},{default:_(()=>[q(se,null,{default:_(()=>[ne("Made by Maple Leaf Makers")]),_:1})]),_:1}),q(oe,{flat:"",round:"",icon:"mdi-github",size:"md",href:"https://github.com/chirpy2605/voron/tree/main/V0/Dragon_Burner",target:"_blank"},{default:_(()=>[q(se,null,{default:_(()=>[ne("Dragon Burner Repo")]),_:1})]),_:1})]),_:1})]),_:1}),q(tt,null,{default:_(()=>[q(n)]),_:1})]),_:1})}var dt=Le(it,[["render",rt]]);export{dt as default};
