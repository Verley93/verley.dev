import v from"./ArticlesListItem.3ebc72b4.js";import k from"./ProseA.e0a2da27.js";import w from"./ProseCodeInline.2d253965.js";import{u as g}from"./asyncData.2f3d19f9.js";import{d as A,Y as I,I as S,M as c,b as a,c as r,e as o,g as i,F as C,Z as L,D as t,w as p,p as B,i as N,q as V,$ as b,X as q,k as D}from"./entry.69710830.js";import"./date.824a539b.js";const F=e=>(B("data-v-aaee7ddf"),e=e(),N(),e),P={key:0,class:"articles-list"},T={class:"featured"},Y={class:"layout"},E={key:1,class:"tour"},M=F(()=>o("p",null,"Seems like there are no articles yet.",-1)),X=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(e){let s,_;const u=e,{data:m}=([s,_]=I(async()=>g("articles",async()=>await V(b(u.path)).sort({date:-1}).find())),s=await s,_(),s),n=S(()=>m.value||[]);return(Z,$)=>{var d;const l=v,f=k,h=w;return(d=c(n))!=null&&d.length?(a(),r("div",P,[o("div",T,[i(l,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",Y,[(a(!0),r(C,null,L(c(n).slice(1),(y,x)=>(a(),q(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",E,[M,o("p",null,[t(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:p(()=>[t("creating")]),_:1}),t(" one in the "),i(h,null,{default:p(()=>[t("articles")]),_:1}),t(" folder. ")])]))}}});const O=D(X,[["__scopeId","data-v-aaee7ddf"]]);export{O as default};
