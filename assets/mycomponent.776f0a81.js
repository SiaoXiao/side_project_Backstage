import{_ as x,u as C,d as w,c as M,e as k,f as y,g as V,h as b}from"./index.b7103649.js";import{e as u,a as B,h as t,w as s,o as N,b as o,i as _,l as e}from"./vendor.ae47dc6f.js";import{s as P}from"./useNotification.bfdd2a75.js";const j={setup(){const a=u(!1),l=u(!1);return{showModal:a,showModal2:l,success:()=>{console.log("success")},cancel:()=>{console.log("cancel")},deletePost:()=>{C("\u5168\u5C40\u547C\u53EBuseConfirmFunc").then(c=>{console.log(c),c&&console.log("\u78BA\u8A8D\u6210\u529F")})},open:()=>{P("\u6A19\u984C","\u5167\u6587")}}}},S={class:"p-4 space-y-4"},q=o("h1",null,"\u6309\u9215\u5143\u4EF6",-1),E={class:"space-x-4"},L=e(" \u4E3B\u8981\u6309\u9215"),U=e(" \u4E3B\u8981\u6309\u9215"),D=e(" \u4E3B\u8981\u6309\u9215"),F=e(" \u6B21\u8981\u6309\u9215"),Q=e(" \u522A\u9664\u5E33\u865F"),T=o("h1",null,"\u8868\u55AE\u5143\u4EF6",-1),z=o("div",null,[o("input",{type:"text",class:"form-input"})],-1),A=o("div",null,[o("textarea",{class:"form-textarea"})],-1),G=o("div",null,[o("input",{type:"radio",class:"form-checkbox"}),e("\u55AE\u9078\u6846")],-1),H=o("div",null,[o("input",{type:"checkbox",class:"form-radio"}),e("\u591A\u9078\u6846")],-1),I=o("h1",null,"\u5F48\u51FA\u8996\u7A97",-1),J={class:"p-4"},K=e(" \u958B\u555F\u8996\u7A97"),O=e(" \u6A19\u984C "),R=o("div",{class:"mt-6"}," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia laudantium inventore iste neque voluptate eum? Est nihil natus voluptatibus illo, harum vitae quam officia maiores vero delectus obcaecati totam iste. ",-1),W=o("h1",null,"\u78BA\u8A8D\u8996\u7A97",-1),X={class:"p-4"},Y=e(" \u958B\u555F\u8996\u7A97"),Z=o("h1",null,"\u5168\u5C40\u547C\u53EB\u5F48\u7A97",-1),$={class:"p-4"},oo=e("\u522A\u9664"),to=o("h1",null,"\u8A0A\u606F\u7D44\u4EF6",-1),so={class:"p-4"},eo=e("\u986F\u793A\u901A\u77E5");function no(a,l,r,n,p,m){const c=M,h=k,d=y,f=V,v=b,g=w;return N(),B("div",null,[t(g,null,{default:s(()=>[o("div",S,[q,o("div",E,[t(c,null,{default:s(()=>[L]),_:1}),t(c,{to:"/"},{default:s(()=>[U]),_:1}),t(c,null,{default:s(()=>[D]),_:1})]),o("div",null,[t(h,null,{default:s(()=>[F]),_:1})]),o("div",null,[t(d,null,{default:s(()=>[Q]),_:1})]),T,z,A,G,H]),I,o("div",J,[t(c,{onClick:l[0]||(l[0]=_(i=>n.showModal=!0,["prevent"]))},{default:s(()=>[K]),_:1}),t(f,{modelValue:n.showModal,"onUpdate:modelValue":l[1]||(l[1]=i=>n.showModal=i)},{title:s(()=>[O]),content:s(()=>[R]),_:1},8,["modelValue"])]),W,o("div",X,[t(c,{onClick:l[2]||(l[2]=_(i=>n.showModal2=!0,["prevent"]))},{default:s(()=>[Y]),_:1}),t(v,{modelValue:n.showModal2,"onUpdate:modelValue":l[3]||(l[3]=i=>n.showModal2=i),title:"Props \u66FF\u63DBtitle",onSuccess:n.success,onCancel:n.cancel},null,8,["modelValue","onSuccess","onCancel"])]),Z,o("div",$,[t(d,{onClick:_(n.deletePost,["prevent"])},{default:s(()=>[oo]),_:1},8,["onClick"])]),to,o("div",so,[t(c,{onClick:_(n.open,["prevent"])},{default:s(()=>[eo]),_:1},8,["onClick"])])]),_:1})])}var _o=x(j,[["render",no]]);export{_o as default};
