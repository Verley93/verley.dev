import{u as m}from"./asyncData.5e976e85.js";import{M as c,I as p,d as i,ah as u,r as d,N as n,l}from"./entry.a6f116f1.js";import f from"./Ellipsis.326e3622.js";import _ from"./ComponentPlaygroundData.65cf158d.js";import"./TabsHeader.5be3609f.js";import"./ComponentPlaygroundProps.36471f5e.js";import"./ProseH4.953ecf06.js";import"./ProseCodeInline.b4b1dc32.js";import"./Badge.c5f14412.js";import"./ContentSlot.84d1e04d.js";import"./ProseP.b4268398.js";import"./index.3b7dfb52.js";import"./ComponentPlaygroundSlots.vue.a096a4fa.js";import"./ComponentPlaygroundTokens.vue.dcb26067.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=d({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const S=l(g,[["__scopeId","data-v-bc0daede"]]);export{S as default};
