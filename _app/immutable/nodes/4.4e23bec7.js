import{S as U,i as j,s as z,k as $,a as L,y as D,l as T,m as I,c as S,z as C,h as d,n as p,b as E,D as w,A,O as G,g as b,d as k,B,P as le,o as Y,v as N,f as R,K as Z,I as F,q as ne,r as ie,u as se,H as x,e as K}from"../chunks/index.370d19c7.js";import{L as V,g as M,G as re}from"../chunks/LocaleString.6adaf395.js";import{g as ee,s as te,a as ae}from"../chunks/Settings.0b607e81.js";import{p as oe}from"../chunks/stores.ac1e93c4.js";import{w as fe}from"../chunks/paths.33afa817.js";function ue(a){let e,i,n,l,s,t,r,o;return s=new V({props:{key:a[1]+".label"}}),{c(){e=$("div"),i=$("input"),n=L(),l=$("label"),D(s.$$.fragment),this.h()},l(f){e=T(f,"DIV",{class:!0});var u=I(e);i=T(u,"INPUT",{type:!0,id:!0}),n=S(u),l=T(u,"LABEL",{for:!0});var c=I(l);C(s.$$.fragment,c),c.forEach(d),u.forEach(d),this.h()},h(){p(i,"type","checkbox"),p(i,"id",a[0]),p(l,"for",a[0]),p(e,"class","checkbox")},m(f,u){E(f,e,u),w(e,i),i.checked=a[2],w(e,n),w(e,l),A(s,l,null),t=!0,r||(o=[G(i,"change",a[6]),G(i,"change",a[3])],r=!0)},p(f,[u]){(!t||u&1)&&p(i,"id",f[0]),u&4&&(i.checked=f[2]);const c={};u&2&&(c.key=f[1]+".label"),s.$set(c),(!t||u&1)&&p(l,"for",f[0])},i(f){t||(b(s.$$.fragment,f),t=!0)},o(f){k(s.$$.fragment,f),t=!1},d(f){f&&d(e),B(s),r=!1,le(o)}}}function ce(a,e,i){let{id:n}=e,{label:l}=e,{settingsType:s}=e,{gameType:t}=e,r;Y(()=>{i(2,r=ee(n,s,t))});function o(){te(n,s,t,r)}function f(){r=this.checked,i(2,r)}return a.$$set=u=>{"id"in u&&i(0,n=u.id),"label"in u&&i(1,l=u.label),"settingsType"in u&&i(4,s=u.settingsType),"gameType"in u&&i(5,t=u.gameType)},[n,l,r,o,s,t,f]}class ge extends U{constructor(e){super(),j(this,e,ce,ue,z,{id:0,label:1,settingsType:4,gameType:5})}}function J(a,e,i){const n=a.slice();return n[8]=e[i],n[10]=i,n}function Q(a){let e,i,n,l,s,t,r,o,f,u,c;function v(){return a[7](a[10])}return t=new V({props:{key:`${a[1]}.radioitems.${a[10]+1}`}}),{c(){e=$("input"),l=L(),s=$("label"),D(t.$$.fragment),r=L(),this.h()},l(_){e=T(_,"INPUT",{type:!0,id:!0,name:!0}),l=S(_),s=T(_,"LABEL",{for:!0});var g=I(s);C(t.$$.fragment,g),r=S(g),g.forEach(d),this.h()},h(){p(e,"type","radio"),p(e,"id",i=a[0]+"--"+a[10]),p(e,"name",a[0]),e.checked=n=a[3]===a[10],p(s,"for",o=a[0]+"--"+a[10])},m(_,g){E(_,e,g),E(_,l,g),E(_,s,g),A(t,s,null),w(s,r),f=!0,u||(c=G(e,"change",v),u=!0)},p(_,g){a=_,(!f||g&1&&i!==(i=a[0]+"--"+a[10]))&&p(e,"id",i),(!f||g&1)&&p(e,"name",a[0]),(!f||g&8&&n!==(n=a[3]===a[10]))&&(e.checked=n);const h={};g&2&&(h.key=`${a[1]}.radioitems.${a[10]+1}`),t.$set(h),(!f||g&1&&o!==(o=a[0]+"--"+a[10]))&&p(s,"for",o)},i(_){f||(b(t.$$.fragment,_),f=!0)},o(_){k(t.$$.fragment,_),f=!1},d(_){_&&d(e),_&&d(l),_&&d(s),B(t),u=!1,c()}}}function me(a){let e,i,n={length:a[2]},l=[];for(let t=0;t<n.length;t+=1)l[t]=Q(J(a,n,t));const s=t=>k(l[t],1,1,()=>{l[t]=null});return{c(){e=$("fieldset");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=T(t,"FIELDSET",{class:!0,id:!0});var r=I(e);for(let o=0;o<l.length;o+=1)l[o].l(r);r.forEach(d),this.h()},h(){p(e,"class","radio svelte-mufdbt"),p(e,"id",a[0])},m(t,r){E(t,e,r);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null);i=!0},p(t,[r]){if(r&31){n={length:t[2]};let o;for(o=0;o<n.length;o+=1){const f=J(t,n,o);l[o]?(l[o].p(f,r),b(l[o],1)):(l[o]=Q(f),l[o].c(),b(l[o],1),l[o].m(e,null))}for(N(),o=n.length;o<l.length;o+=1)s(o);R()}(!i||r&1)&&p(e,"id",t[0])},i(t){if(!i){for(let r=0;r<n.length;r+=1)b(l[r]);i=!0}},o(t){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)k(l[r]);i=!1},d(t){t&&d(e),Z(l,t)}}}function _e(a,e,i){let{id:n}=e,{label:l}=e,{settingsType:s}=e,{gameType:t}=e,{item_count:r}=e,o;Y(()=>{i(3,o=ee(n,s,t))});function f(c){i(3,o=c),te(n,s,t,c)}const u=c=>{f(c)};return a.$$set=c=>{"id"in c&&i(0,n=c.id),"label"in c&&i(1,l=c.label),"settingsType"in c&&i(5,s=c.settingsType),"gameType"in c&&i(6,t=c.gameType),"item_count"in c&&i(2,r=c.item_count)},[n,l,r,o,f,s,t,u]}class he extends U{constructor(e){super(),j(this,e,_e,me,z,{id:0,label:1,settingsType:5,gameType:6,item_count:2})}}function W(a,e,i){const n=a.slice();return n[6]=e[i],n}function de(a){let e,i,n,l,s;return i=new V({props:{key:"settings.game.page-title"}}),{c(){e=$("h1"),D(i.$$.fragment),n=L(),l=ne(a[1])},l(t){e=T(t,"H1",{});var r=I(e);C(i.$$.fragment,r),n=S(r),l=ie(r,a[1]),r.forEach(d)},m(t,r){E(t,e,r),A(i,e,null),w(e,n),w(e,l),s=!0},p(t,r){(!s||r&2)&&se(l,t[1])},i(t){s||(b(i.$$.fragment,t),s=!0)},o(t){k(i.$$.fragment,t),s=!1},d(t){t&&d(e),B(i)}}}function pe(a){let e,i,n;return i=new V({props:{key:"settings.global.page-title"}}),{c(){e=$("h1"),D(i.$$.fragment)},l(l){e=T(l,"H1",{});var s=I(e);C(i.$$.fragment,s),s.forEach(d)},m(l,s){E(l,e,s),A(i,e,null),n=!0},p:x,i(l){n||(b(i.$$.fragment,l),n=!0)},o(l){k(i.$$.fragment,l),n=!1},d(l){l&&d(e),B(i)}}}function be(a){let e,i,n,l,s;return l=new V({props:{key:"settings.error.no-settings-found"}}),{c(){e=$("br"),i=L(),n=$("h1"),D(l.$$.fragment)},l(t){e=T(t,"BR",{}),i=S(t),n=T(t,"H1",{});var r=I(n);C(l.$$.fragment,r),r.forEach(d)},m(t,r){E(t,e,r),E(t,i,r),E(t,n,r),A(l,n,null),s=!0},p:x,i(t){s||(b(l.$$.fragment,t),s=!0)},o(t){k(l.$$.fragment,t),s=!1},d(t){t&&d(e),t&&d(i),t&&d(n),B(l)}}}function ke(a){let e,i,n=a[2],l=[];for(let t=0;t<n.length;t+=1)l[t]=X(W(a,n,t));const s=t=>k(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=K()},l(t){for(let r=0;r<l.length;r+=1)l[r].l(t);e=K()},m(t,r){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(t,r);E(t,e,r),i=!0},p(t,r){if(r&7){n=t[2];let o;for(o=0;o<n.length;o+=1){const f=W(t,n,o);l[o]?(l[o].p(f,r),b(l[o],1)):(l[o]=X(f),l[o].c(),b(l[o],1),l[o].m(e.parentNode,e))}for(N(),o=n.length;o<l.length;o+=1)s(o);R()}},i(t){if(!i){for(let r=0;r<n.length;r+=1)b(l[r]);i=!0}},o(t){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)k(l[r]);i=!1},d(t){Z(l,t),t&&d(e)}}}function ye(a){let e,i;return e=new he({props:{id:a[6].id,label:`setting-items.${a[0]}.${a[6].id}`,settingsType:a[0],gameType:a[1],item_count:a[6].item_count}}),{c(){D(e.$$.fragment)},l(n){C(e.$$.fragment,n)},m(n,l){A(e,n,l),i=!0},p(n,l){const s={};l&4&&(s.id=n[6].id),l&5&&(s.label=`setting-items.${n[0]}.${n[6].id}`),l&1&&(s.settingsType=n[0]),l&2&&(s.gameType=n[1]),l&4&&(s.item_count=n[6].item_count),e.$set(s)},i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){k(e.$$.fragment,n),i=!1},d(n){B(e,n)}}}function ve(a){let e,i;return e=new ge({props:{id:a[6].id,label:`setting-items.${a[0]}.${a[6].id}`,settingsType:a[0],gameType:a[1]}}),{c(){D(e.$$.fragment)},l(n){C(e.$$.fragment,n)},m(n,l){A(e,n,l),i=!0},p(n,l){const s={};l&4&&(s.id=n[6].id),l&5&&(s.label=`setting-items.${n[0]}.${n[6].id}`),l&1&&(s.settingsType=n[0]),l&2&&(s.gameType=n[1]),e.$set(s)},i(n){i||(b(e.$$.fragment,n),i=!0)},o(n){k(e.$$.fragment,n),i=!1},d(n){B(e,n)}}}function X(a){let e,i,n,l,s,t,r,o,f,u,c,v,_;n=new V({props:{key:`setting-items.${a[0]}.${a[6].id}.title`}}),t=new V({props:{key:`setting-items.${a[0]}.${a[6].id}.subtitle`}});const g=[ve,ye],h=[];function H(m,y){return m[6].type==="single"?0:m[6].type==="multi"?1:-1}return~(u=H(a))&&(c=h[u]=g[u](a)),{c(){e=$("div"),i=$("div"),D(n.$$.fragment),l=L(),s=$("div"),D(t.$$.fragment),r=L(),o=$("div"),f=L(),c&&c.c(),v=L(),this.h()},l(m){e=T(m,"DIV",{class:!0});var y=I(e);i=T(y,"DIV",{class:!0});var O=I(i);C(n.$$.fragment,O),O.forEach(d),l=S(y),s=T(y,"DIV",{class:!0});var P=I(s);C(t.$$.fragment,P),P.forEach(d),r=S(y),o=T(y,"DIV",{class:!0}),I(o).forEach(d),f=S(y),c&&c.l(y),v=S(y),y.forEach(d),this.h()},h(){p(i,"class","title svelte-ankytm"),p(s,"class","subtitle svelte-ankytm"),p(o,"class","spacer svelte-ankytm"),p(e,"class","item-wrapper svelte-ankytm")},m(m,y){E(m,e,y),w(e,i),A(n,i,null),w(e,l),w(e,s),A(t,s,null),w(e,r),w(e,o),w(e,f),~u&&h[u].m(e,null),w(e,v),_=!0},p(m,y){const O={};y&5&&(O.key=`setting-items.${m[0]}.${m[6].id}.title`),n.$set(O);const P={};y&5&&(P.key=`setting-items.${m[0]}.${m[6].id}.subtitle`),t.$set(P);let q=u;u=H(m),u===q?~u&&h[u].p(m,y):(c&&(N(),k(h[q],1,1,()=>{h[q]=null}),R()),~u?(c=h[u],c?c.p(m,y):(c=h[u]=g[u](m),c.c()),b(c,1),c.m(e,v)):c=null)},i(m){_||(b(n.$$.fragment,m),b(t.$$.fragment,m),b(c),_=!0)},o(m){k(n.$$.fragment,m),k(t.$$.fragment,m),k(c),_=!1},d(m){m&&d(e),B(n),B(t),~u&&h[u].d()}}}function $e(a){let e,i,n,l,s,t,r;const o=[pe,de],f=[];function u(g,h){return g[0]==="global"?0:1}i=u(a),n=f[i]=o[i](a);const c=[ke,be],v=[];function _(g,h){return g[2].length>0?0:1}return s=_(a),t=v[s]=c[s](a),{c(){e=$("div"),n.c(),l=L(),t.c(),this.h()},l(g){e=T(g,"DIV",{class:!0});var h=I(e);n.l(h),l=S(h),t.l(h),h.forEach(d),this.h()},h(){p(e,"class","settings-wrapper svelte-ankytm")},m(g,h){E(g,e,h),f[i].m(e,null),w(e,l),v[s].m(e,null),r=!0},p(g,[h]){let H=i;i=u(g),i===H?f[i].p(g,h):(N(),k(f[H],1,1,()=>{f[H]=null}),R(),n=f[i],n?n.p(g,h):(n=f[i]=o[i](g),n.c()),b(n,1),n.m(e,l));let m=s;s=_(g),s===m?v[s].p(g,h):(N(),k(v[m],1,1,()=>{v[m]=null}),R(),t=v[s],t?t.p(g,h):(t=v[s]=c[s](g),t.c()),b(t,1),t.m(e,null))},i(g){r||(b(n),b(t),r=!0)},o(g){k(n),k(t),r=!1},d(g){g&&d(e),f[i].d(),v[s].d()}}}function Te(a,e,i){let n,l;F(a,oe,f=>i(4,n=f));let s="global",t=n.params.game,r,o=fe([]);if(F(a,o,f=>i(2,l=f)),typeof t<"u"&&M.indexOf(t.toLowerCase())>-1&&(s="game"),s==="global"||s==="game"){s==="game"?r=re[M.indexOf(t.toLowerCase())]:r=void 0;let f=ae(s,s==="global"?void 0:r,!0);f!==null&&o.set(f)}return[s,r,l,o]}class De extends U{constructor(e){super(),j(this,e,Te,$e,z,{})}}export{De as component};