import{aJ as g,G as a,aV as d,l as f,k as c,bf as l,q as x,i as R,j as o}from"./index-Dm6Rkjhz.js";function v(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const e=g(),i=a();if(d){const s=new ResizeObserver(n=>{t==null||t(n,s),n.length&&(r==="content"?i.value=n[0].contentRect:i.value=n[0].target.getBoundingClientRect())});f(()=>{s.disconnect()}),c(()=>e.el,(n,m)=>{m&&(s.unobserve(m),i.value=void 0),n&&s.observe(n)},{flush:"post"})}return{resizeRef:e,contentRect:l(i)}}const S=x({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function W(t){return{dimensionStyles:R(()=>{const e={},i=o(t.height),s=o(t.maxHeight),n=o(t.maxWidth),m=o(t.minHeight),h=o(t.minWidth),u=o(t.width);return i!=null&&(e.height=i),s!=null&&(e.maxHeight=s),n!=null&&(e.maxWidth=n),m!=null&&(e.minHeight=m),h!=null&&(e.minWidth=h),u!=null&&(e.width=u),e})}}export{v as a,S as m,W as u};