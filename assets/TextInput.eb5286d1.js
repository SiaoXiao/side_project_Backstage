import{x as d,o as s,a as o,b as l,t as n,S as c,U as m,B as u,m as _,n as f}from"./vendor.ae47dc6f.js";import{_ as p}from"./index.b7103649.js";const v={inheritAttrs:!1,emits:["update:modelValue"],props:{id:String,modelValue:String,type:{type:String,default:"text"},label:String,error:String,wrapperClass:[String,Array,Object]},setup(t){return{value:d(t)}}},g=["for"],y=["type","id"],S={key:0,class:"form-error"};function b(t,r,e,a,V,x){return s(),o("div",{class:f(e.wrapperClass)},[l("label",{for:e.id,class:"form-label"},n(e.label),9,g),c(l("input",u({type:e.type,id:e.id,class:"form-input","onUpdate:modelValue":r[0]||(r[0]=i=>a.value=i)},t.$attrs),null,16,y),[[m,a.value]]),e.error?(s(),o("div",S,n(e.error),1)):_("",!0)],2)}var C=p(v,[["render",b]]);export{C as _};