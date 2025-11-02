import{U as d,_ as p}from"./B-bnZoLM.js";import{d as m,r as s,y as u,z as f,A as e,C as _,F as n,B as o,G as k}from"#entry";const g={style:{"white-space":"break-spaces"}},w={style:{"white-space":"break-spaces"}},y={style:{"white-space":"break-spaces"}},C=m({__name:"index",setup(x){const a=s(`
vue: {
  compilerOptions: {
    isCustomElement: tag => tag.startsWith('kwc-'),
  },
}`),r=s(`
<client-only>
    <kwc-calendar></kwc-calendar>
</client-only>
`),i=s(`
import { defineNuxtPlugin } from '#app';
import { defineCustomElements } from '@kwc-elements/calendar/loader';

export default defineNuxtPlugin(() => {
  if (process.client) {
    defineCustomElements();
  }
});
`);return(l,t)=>{const c=p;return f(),u(k,null,[e("div",null,[_(c,{level:("UI"in l?l.UI:n(d)).KIT.H.LEVEL[3],text:"Getting started"},null,8,["level"])]),e("code",g,o(n(a)),1),t[0]||(t[0]=e("br",null,null,-1)),e("code",w,o(n(r)),1),t[1]||(t[1]=e("br",null,null,-1)),e("code",y,o(n(i)),1)],64)}}});export{C as default};
