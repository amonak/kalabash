import{aS as Y,q as _,y as M,z as k,B as j,A as G,a4 as z,G as E,i as h,s as x,k as O,aA as F,a as m,g as H,al as D,X as q,v as K,j as X,K as U}from"./index-Dm6Rkjhz.js";import{m as R,a as J,u as V}from"./tag-DUZZ1OKz.js";import{B as Q,h as w,y as Z,z as N,M as p}from"./index-BLB_ybyE.js";import{m as ee,u as te}from"./forwardRefs-CBcLt76z.js";import{u as ne}from"./ssrBoot-BO4GFAAF.js";const oe=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:i}=e,u=.5,s=16;e.offsetX=t-o,e.offsetY=i-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&i<n-s&&e.up(e),e.down&&i>n+s&&e.down(e))};function se(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function ie(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),oe(o)}function ae(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function ue(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>se(t,o),touchend:t=>ie(t,o),touchmove:t=>ae(t,o)}}function le(e,o){var v;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},u=(v=o.instance)==null?void 0:v.$.uid;if(!n||!u)return;const s=ue(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=s,Y(s).forEach(r=>{n.addEventListener(r,s[r],i)})}function ce(e,o){var u,s;const t=(u=o.value)!=null&&u.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const i=t._touchHandlers[n];Y(i).forEach(v=>{t.removeEventListener(v,i[v])}),delete t._touchHandlers[n]}const W={mounted:le,unmounted:ce},P=Symbol.for("vuetify:v-window"),$=Symbol.for("vuetify:v-window-group"),re=_({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...R(),...J(),...M()},"VWindow"),ye=k()({name:"VWindow",directives:{Touch:W},props:re(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=j(e),{isRtl:i}=G(),{t:u}=z(),s=Q(e,$),v=E(),r=h(()=>i.value?!e.reverse:e.reverse),d=x(!1),y=h(()=>{const a=e.direction==="vertical"?"y":"x",f=(r.value?!d.value:d.value)?"-reverse":"";return`v-window-${a}${f}-transition`}),T=x(0),B=E(void 0),g=h(()=>s.items.value.findIndex(a=>s.selected.value.includes(a.id)));O(g,(a,c)=>{const f=s.items.value.length,S=f-1;f<=2?d.value=a<c:a===S&&c===0?d.value=!0:a===0&&c===S?d.value=!1:d.value=a<c}),F(P,{transition:y,isReversed:d,transitionCount:T,transitionHeight:B,rootRef:v});const l=h(()=>e.continuous||g.value!==0),b=h(()=>e.continuous||g.value!==s.items.value.length-1);function C(){l.value&&s.prev()}function I(){b.value&&s.next()}const L=h(()=>{const a=[],c={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,"aria-label":u("$vuetify.carousel.prev")};a.push(l.value?t.prev?t.prev({props:c}):m(w,c,null):m("div",null,null));const f={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,"aria-label":u("$vuetify.carousel.next")};return a.push(b.value?t.next?t.next({props:f}):m(w,f,null):m("div",null,null)),a}),A=h(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?C():I()},right:()=>{r.value?I():C()},start:c=>{let{originalEvent:f}=c;f.stopPropagation()}},...e.touch===!0?{}:e.touch});return V(()=>H(m(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var a,c;return[m("div",{class:"v-window__container",style:{height:B.value}},[(a=t.default)==null?void 0:a.call(t,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[L.value])]),(c=t.additional)==null?void 0:c.call(t,{group:s})]}}),[[D("touch"),A.value]])),{group:s}}}),ve=_({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...R(),...Z(),...ee()},"VWindowItem"),Be=k()({name:"VWindowItem",directives:{Touch:W},props:ve(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=q(P),i=N(e,$),{isBooted:u}=ne();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=x(!1),v=h(()=>u.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function d(){var l;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=X((l=n.rootRef.value)==null?void 0:l.clientHeight)),n.transitionCount.value+=1)}function y(){r()}function T(l){s.value&&U(()=>{!v.value||!s.value||!n||(n.transitionHeight.value=X(l.clientHeight))})}const B=h(()=>{const l=n.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof l!="string"?n.transition.value:l,onBeforeEnter:d,onAfterEnter:r,onEnterCancelled:y,onBeforeLeave:d,onAfterLeave:r,onLeaveCancelled:y,onEnter:T}:!1}),{hasContent:g}=te(e,i.isSelected);return V(()=>m(p,{transition:B.value,disabled:!u.value},{default:()=>{var l;return[H(m("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[g.value&&((l=t.default)==null?void 0:l.call(t))]),[[K,i.isSelected.value]])]}})),{groupItem:i}}});export{ye as V,ve as a,Be as b,re as m};