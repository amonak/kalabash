import{q as ie,ag as G,z as se,a4 as ue,F as re,i as V,ah as T,G as k,k as ce,ai as de,a as n,I as B,J as R,K as fe,aj as me,b as pe,o as ve,c as he,w as h,V as ye,e as P,t as y,R as x,f as u,ak as L,Z as A}from"./index-Dm6Rkjhz.js";import{V as Ve,r as q}from"./VForm-BhjtozL8.js";import{V as be,a as ge,b as Ce,c as Se}from"./VCard-jlmpOSO3.js";import{V as ke}from"./VAlert-AZBesPFA.js";import{m as _e,b as xe,u as Ie,a as E,f as we,c as Fe,d as Be,V as Re}from"./VTextField-C8E-zz6P.js";import{f as Pe}from"./forwardRefs-CBcLt76z.js";import{V as Ae}from"./VChip-DtVk6kuE.js";import{u as ze}from"./tag-DUZZ1OKz.js";import{V as Ne}from"./VSwitch-BFO0Hy2k.js";import{V as Ue}from"./VSpacer-CWkQPC1J.js";import{h as O}from"./index-BLB_ybyE.js";const $e=ie({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},..._e({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>G(e).every(f=>f!=null&&typeof f=="object")},...xe({clearable:!0})},"VFileInput"),je=se()({name:"VFileInput",inheritAttrs:!1,props:$e(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:r,emit:c,slots:a}=f;const{t:d}=ue(),t=re(e,"modelValue",e.modelValue,l=>G(l),l=>e.multiple||Array.isArray(e.modelValue)?l:l[0]??null),{isFocused:s,focus:I,blur:b}=Ie(e),i=V(()=>typeof e.showSize!="boolean"?e.showSize:void 0),m=V(()=>(t.value??[]).reduce((l,o)=>{let{size:g=0}=o;return l+g},0)),z=V(()=>T(m.value,i.value)),w=V(()=>(t.value??[]).map(l=>{const{name:o="",size:g=0}=l;return e.showSize?`${o} (${T(g,i.value)})`:o})),J=V(()=>{var o;const l=((o=t.value)==null?void 0:o.length)??0;return e.showSize?d(e.counterSizeString,l,z.value):d(e.counterString,l)}),N=k(),U=k(),p=k(),K=V(()=>s.value||e.active),$=V(()=>["plain","underlined"].includes(e.variant));function F(){var l;p.value!==document.activeElement&&((l=p.value)==null||l.focus()),s.value||I()}function Y(l){var o;(o=p.value)==null||o.click()}function Z(l){c("mousedown:control",l)}function H(l){var o;(o=p.value)==null||o.click(),c("click:control",l)}function Q(l){l.stopPropagation(),F(),fe(()=>{t.value=[],me(e["onClick:clear"],l)})}return ce(t,l=>{(!Array.isArray(l)||!l.length)&&p.value&&(p.value.value="")}),ze(()=>{const l=!!(a.counter||e.counter),o=!!(l||a.details),[g,W]=de(r),{modelValue:Le,...X}=E.filterProps(e),ee=we(e);return n(E,B({ref:N,modelValue:t.value,"onUpdate:modelValue":C=>t.value=C,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":$.value},e.class],style:e.style,"onClick:prepend":Y},g,X,{centerAffix:!$.value,focused:s.value}),{...a,default:C=>{let{id:_,isDisabled:S,isDirty:j,isReadonly:D,isValid:te}=C;return n(Fe,B({ref:U,"prepend-icon":e.prependIcon,onMousedown:Z,onClick:H,"onClick:clear":Q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},ee,{id:_.value,active:K.value||j.value,dirty:j.value||e.dirty,disabled:S.value,focused:s.value,error:te.value===!1}),{...a,default:ae=>{var M;let{props:{class:le,...ne}}=ae;return n(R,null,[n("input",B({ref:p,type:"file",readonly:D.value,disabled:S.value,multiple:e.multiple,name:e.name,onClick:v=>{v.stopPropagation(),D.value&&v.preventDefault(),F()},onChange:v=>{if(!v.target)return;const oe=v.target;t.value=[...oe.files??[]]},onFocus:F,onBlur:b},ne,W),null),n("div",{class:le},[!!((M=t.value)!=null&&M.length)&&!e.hideInput&&(a.selection?a.selection({fileNames:w.value,totalBytes:m.value,totalBytesReadable:z.value}):e.chips?w.value.map(v=>n(Ae,{key:v,size:"small",text:v},null)):w.value.join(", "))])])}})},details:o?C=>{var _,S;return n(R,null,[(_=a.details)==null?void 0:_.call(a,C),l&&n(R,null,[n("span",null,null),n(Be,{active:!!((S=t.value)!=null&&S.length),value:J.value,disabled:e.disabled},a.counter)])])}:void 0})}),Pe({},N,U,p)}}),De={class:"headline"},Me={class:"m-label"},Te={class:"m-label"},Xe={__name:"ImportForm",props:{helpText:{type:String,default:""},title:{type:String,default:""}},emits:["close","submit"],setup(e,{expose:f,emit:r}){const c=r,a=k({}),d=k(),{$gettext:t}=pe();function s(){a.value={},c("close")}async function I(){const{valid:b}=await d.value.validate();if(!b)return;const i=new FormData;i.append("sourcefile",a.value.sourcefile[0]),a.value.sepchar&&i.append("sepchar",a.value.sepchar),a.value.continue_if_exists&&i.append("continue_if_exists",a.value.continue_if_exists),c("submit",i,a.value)}return f({close:s}),(b,i)=>(ve(),he(Se,null,{default:h(()=>[n(Ve,{ref_key:"vform",ref:d,onSubmit:ye(I,["prevent"])},{default:h(()=>[n(be,null,{default:h(()=>[P("span",De,y(e.title),1)]),_:1}),n(ge,null,{default:h(()=>[n(ke,{variant:"tonal",type:"info",class:"mb-2"},{default:h(()=>[x(y(u(t)("Provide a CSV file where lines respect one of the following formats:"))+" ",1),L(b.$slots,"help"),x(" "+y(u(t)("The first element of each line is mandatory and must be equal to one of the previous values."))+" "+y(u(t)("You can use a different character as separator.")),1)]),_:3}),P("label",Me,y(u(t)("Select file")),1),n(je,{modelValue:a.value.sourcefile,"onUpdate:modelValue":i[0]||(i[0]=m=>a.value.sourcefile=m),accept:"text/csv","truncate-length":"15",variant:"outlined",density:"compact",rules:[u(q).required]},null,8,["modelValue","rules"]),P("label",Te,y(u(t)("Separator")),1),n(Re,{modelValue:a.value.sepchar,"onUpdate:modelValue":i[1]||(i[1]=m=>a.value.sepchar=m),rules:[u(q).required],variant:"outlined",density:"compact"},null,8,["modelValue","rules"]),n(Ne,{modelValue:a.value.continue_if_exists,"onUpdate:modelValue":i[2]||(i[2]=m=>a.value.continue_if_exists=m),label:u(t)("Continue on error"),color:"primary",density:"compact",hint:u(t)("Don't treat duplicated objects as errors"),"persistent-hint":""},null,8,["modelValue","label","hint"]),L(b.$slots,"extraFields",{form:a.value})]),_:3}),n(Ce,null,{default:h(()=>[n(Ue),n(O,{onClick:s},{default:h(()=>[x(y(u(t)("Close")),1)]),_:1}),n(O,{color:"primary",type:"submit"},{default:h(()=>[x(y(u(t)("Import")),1)]),_:1})]),_:1})]),_:3},512)]),_:3}))}},et=()=>{function e(r,c,a){if(!r&&!r.length){A().displayNotification({msg:a("No data to export"),type:"warning"});return}const d=new Blob([r],{type:"text/csv"}),t=document.createElement("a");t.href=URL.createObjectURL(d),t.download=`kalabash-${c}.csv`,t.click(),URL.revokeObjectURL(t.href)}function f(r,c,a,d){r.importFromCSV(c).then(t=>{const s=A();t.data.status?(s.displayNotification({msg:t.data.message}),a.value.close()):s.displayNotification({msg:t.data.message,type:"error"})}).catch(()=>{A().displayNotification({msg:d("CSV seems to be badly formatted"),type:"error"})})}return{exportContent:e,importContent:f}};export{Xe as _,et as i};