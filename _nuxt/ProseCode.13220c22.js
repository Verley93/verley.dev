import{r as _,a7 as D,a8 as R,a9 as V,M as b,I as k,aa as z,ab as W,o as F,d as P,x as j,b as h,c as x,e as T,g as M,w as q,X as B,T as X,n as $,a6 as G,p as H,j as J,l as L,t as K,f as Q,a5 as U}from"./entry.74fc06b8.js";function N(e){return R()?(V(e),!0):!1}function C(e){return typeof e=="function"?e():b(e)}const S=typeof window<"u",A=()=>{},Y=Z();function Z(){var e;return S&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function ee(e,n,s={}){const{immediate:t=!0}=s,u=_(!1);let a=null;function d(){a&&(clearTimeout(a),a=null)}function r(){u.value=!1,d()}function i(...p){d(),u.value=!0,a=setTimeout(()=>{u.value=!1,a=null,e(...p)},C(n))}return t&&(u.value=!0,S&&i()),N(r),{isPending:D(u),start:i,stop:r}}function g(e){var n;const s=C(e);return(n=s==null?void 0:s.$el)!=null?n:s}const O=S?window:void 0,te=S?window.navigator:void 0;function w(...e){let n,s,t,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,t,u]=e,n=O):[n,s,t,u]=e,!n)return A;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const a=[],d=()=>{a.forEach(l=>l()),a.length=0},r=(l,y,o,c)=>(l.addEventListener(y,o,c),()=>l.removeEventListener(y,o,c)),i=z(()=>[g(n),C(u)],([l,y])=>{d(),l&&a.push(...s.flatMap(o=>t.map(c=>r(l,o,c,y))))},{immediate:!0,flush:"post"}),p=()=>{i(),d()};return N(p),p}let I=!1;function oe(e,n,s={}){const{window:t=O,ignore:u=[],capture:a=!0,detectIframe:d=!1}=s;if(!t)return;Y&&!I&&(I=!0,Array.from(t.document.body.children).forEach(o=>o.addEventListener("click",A)),t.document.documentElement.addEventListener("click",A));let r=!0;const i=o=>u.some(c=>{if(typeof c=="string")return Array.from(t.document.querySelectorAll(c)).some(m=>m===o.target||o.composedPath().includes(m));{const m=g(c);return m&&(o.target===m||o.composedPath().includes(m))}}),l=[w(t,"click",o=>{const c=g(e);if(!(!c||c===o.target||o.composedPath().includes(c))){if(o.detail===0&&(r=!i(o)),!r){r=!0;return}n(o)}},{passive:!0,capture:a}),w(t,"pointerdown",o=>{const c=g(e);c&&(r=!o.composedPath().includes(c)&&!i(o))},{passive:!0}),d&&w(t,"blur",o=>{setTimeout(()=>{var c;const m=g(e);((c=t.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(t.document.activeElement))&&n(o)},0)})].filter(Boolean);return()=>l.forEach(o=>o())}function ne(){const e=_(!1);return W()&&F(()=>{e.value=!0}),e}function se(e){const n=ne();return k(()=>(n.value,!!e()))}function ae(e={}){const{navigator:n=te,read:s=!1,source:t,copiedDuring:u=1500,legacy:a=!1}=e,d=se(()=>n&&"clipboard"in n),r=k(()=>d.value||a),i=_(""),p=_(!1),l=ee(()=>p.value=!1,u);function y(){d.value?n.clipboard.readText().then(f=>{i.value=f}):i.value=m()}r.value&&s&&w(["copy","cut"],y);async function o(f=C(t)){r.value&&f!=null&&(d.value?await n.clipboard.writeText(f):c(f),i.value=f,p.value=!0,l.start())}function c(f){const v=document.createElement("textarea");v.value=f??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function m(){var f,v,E;return(E=(v=(f=document==null?void 0:document.getSelection)==null?void 0:f.call(document))==null?void 0:v.toString())!=null?E:""}return{isSupported:r,text:i,copied:p,copy:o}}const ce=e=>(H("data-v-75636234"),e=e(),J(),e),ue=ce(()=>T("span",{class:"sr-only"},"Copy to clipboard",-1)),re={class:"icon-wrapper"},ie=P({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=_(),{copy:t}=ae();oe(s,()=>{a.value==="copied"&&(a.value="init")});const{prose:u}=j(),a=_("init"),d=r=>{t(n.content).then(()=>{a.value="copied"}).catch(i=>{console.warn("Couldn't copy to clipboard!",i)})};return(r,i)=>{const p=G;return h(),x("button",{ref_key:"copyButtonRef",ref:s,class:$([(e.show||a.value==="copied")&&"show"]),onClick:d},[ue,T("span",re,[M(X,{name:"fade"},{default:q(()=>{var l,y;return[a.value==="copied"?(h(),B(p,{key:0,name:(l=b(u).copyButton)==null?void 0:l.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),B(p,{key:1,name:(y=b(u).copyButton)==null?void 0:y.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const le=L(ie,[["__scopeId","data-v-75636234"]]),de={key:0,class:"filename"},pe=P({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=_(!1);return(s,t)=>{const u=le;return h(),x("div",{class:$([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=a=>n.value=!0),onMouseleave:t[1]||(t[1]=a=>n.value=!1)},[e.filename?(h(),x("span",de,K(e.filename),1)):Q("",!0),U(s.$slots,"default",{},void 0,!0),M(u,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const me=L(pe,[["__scopeId","data-v-bfc7416e"]]);export{me as default};