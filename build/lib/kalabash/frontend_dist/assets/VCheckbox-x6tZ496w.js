import{f as I,a as t}from"./VSelect-BeROaDhg.js";import{m as g,u as A,a as l}from"./VTextField-C8E-zz6P.js";import{q as B,W as U,z as R,F as q,aC as z,i as D,ai as M,a as u,I as r}from"./index-Dm6Rkjhz.js";import{u as N}from"./tag-DUZZ1OKz.js";const W=B({...g(),...U(I(),["inline"])},"VCheckbox"),G=R()({name:"VCheckbox",inheritAttrs:!1,props:W(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:c,slots:a}=d;const s=q(e,"modelValue"),{isFocused:i,focus:n,blur:m}=A(e),V=z(),p=D(()=>e.id||`checkbox-${V}`);return N(()=>{const[f,b]=M(c),v=l.filterProps(e),k=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},f,v,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:p.value,focused:i.value,style:e.style}),{...a,default:o=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=o;return u(t,r(k,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},b,{error:y.value===!1,modelValue:s.value,"onUpdate:modelValue":F=>s.value=F,onFocus:n,onBlur:m}),a)}})}),{}}});export{G as V};