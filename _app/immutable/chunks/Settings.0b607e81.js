import{O,g as r,G as j}from"./LocaleString.6adaf395.js";function p(){let e=w("language","global"),n="en";switch(e){case 0:n="en";break;case 1:n="de";break}return n}let y=function(){O({fallbackLocale:"en",initialLocale:p()})};const g=[{type:"multi",id:"language",value:0,item_count:2,onChange:y}],L=[];function s(e,n){{let l=localStorage[e==="global"?"globalSettings":`gameSettings-${n}`];return typeof l<"u"?JSON.parse(l):null}}function f(e,n){localStorage[e]=JSON.stringify(n)}function h(...e){let n={};return e.forEach(l=>{n={...n,...l}}),n}function d(e,n,l){if(e==="global"){let o=new Array;return g.forEach(t=>{let i;i=h(l?{type:t.type}:{},{id:t.id},{value:t.value},t.type!=="single"?{item_count:t.item_count}:{}),typeof i<"u"&&o.push(i)}),o}else if(e==="game"&&typeof n<"u"){let o=L.find(t=>t.gameType.toLowerCase()===n.toLowerCase());if(typeof o<"u"){let t=new Array;return o.settings.forEach(i=>{let a;l?a={type:i.type,id:i.id,value:i.value}:a={id:i.id,value:i.value},t.push(a)}),t}}return null}function u(){return d("global")}function b(e){return typeof e<"u"&&r.indexOf(e.toLowerCase())>-1?d("game",j[r.indexOf(e.toLowerCase())]):null}function c(e,n){if(e!==null&&typeof e<"u"){let l=e.find(o=>o.id===n);if(typeof l<"u")return l}return null}function v(e,n,l){let o=s(e,l);if(o!==null){let t;if(e==="global"?t=u():e==="game"&&(t=b(l)),t!==null){let i=c(t,n);if(i!==null){o.push(i),f(e==="global"?"globalSettings":`gameSettings-${l}`,o);let a=i.value;if(typeof a<"u")return a}}}return null}function w(e,n,l){{let o=s(n,l);if(o===null){let i=null;n==="global"?i=u():n==="game"&&typeof l<"u"&&(i=b(l)),i!==null&&f(n==="global"?"globalSettings":`gameSettings-${l}`,i)}let t=c(o,e);return t!==null?t.value:v(n,e,l)}}function A(e,n,l,o){if(n==="global"){let t=u(),i=t==null?void 0:t.find(a=>a.id===e);if(i&&typeof o<"u"){i.value=o,t!==null&&f("globalSettings",t);let a=g.find(S=>S.id===e);a&&typeof a.onChange<"u"&&a.onChange()}}}export{d as a,w as g,A as s};
