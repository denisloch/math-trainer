import{S as j,i as B,s as H,k as d,y as T,l as $,m as v,z as b,h as u,n as g,b as L,D as w,A as q,g as y,d as k,B as C,a as D,J as K,c as G,f as N,K as P,H as F,v as O}from"../chunks/index.370d19c7.js";import{L as M,G as I}from"../chunks/LocaleString.6adaf395.js";import{b as z}from"../chunks/paths.33afa817.js";function Q(f){let t,r,e,l,m;return e=new M({props:{key:`game-type.game-${f[0].toLowerCase()}`}}),{c(){t=d("a"),r=d("div"),T(e.$$.fragment),this.h()},l(o){t=$(o,"A",{class:!0,href:!0});var c=v(t);r=$(c,"DIV",{class:!0});var h=v(r);b(e.$$.fragment,h),h.forEach(u),c.forEach(u),this.h()},h(){g(r,"class","game-type svelte-zn7h9j"),g(t,"class","game-type-wrapper svelte-zn7h9j"),g(t,"href",l=`${z}/game/${f[0].toLowerCase()}`)},m(o,c){L(o,t,c),w(t,r),q(e,r,null),m=!0},p(o,[c]){const h={};c&1&&(h.key=`game-type.game-${o[0].toLowerCase()}`),e.$set(h),(!m||c&1&&l!==(l=`${z}/game/${o[0].toLowerCase()}`))&&g(t,"href",l)},i(o){m||(y(e.$$.fragment,o),m=!0)},o(o){k(e.$$.fragment,o),m=!1},d(o){o&&u(t),C(e)}}}function R(f,t,r){let{gameType:e}=t;return f.$$set=l=>{"gameType"in l&&r(0,e=l.gameType)},[e]}class U extends j{constructor(t){super(),B(this,t,R,Q,H,{gameType:0})}}function A(f,t,r){const e=f.slice();return e[0]=t[r],e}function V(f){let t,r;return t=new U({props:{gameType:f[0]}}),{c(){T(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,l){q(t,e,l),r=!0},p:F,i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}function W(f){let t,r,e,l,m,o,c,h;m=new M({props:{key:"game-selector.select-game-type"}});let _=I,s=[];for(let a=0;a<_.length;a+=1)s[a]=V(A(f,_,a));const J=a=>k(s[a],1,1,()=>{s[a]=null});return{c(){t=D(),r=d("main"),e=d("div"),l=d("h1"),T(m.$$.fragment),o=D(),c=d("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){K("svelte-1u9i1vq",document.head).forEach(u),t=G(a),r=$(a,"MAIN",{class:!0});var n=v(r);e=$(n,"DIV",{class:!0});var p=v(e);l=$(p,"H1",{class:!0});var S=v(l);b(m.$$.fragment,S),S.forEach(u),o=G(p),c=$(p,"DIV",{class:!0});var x=v(c);for(let E=0;E<s.length;E+=1)s[E].l(x);x.forEach(u),p.forEach(u),n.forEach(u),this.h()},h(){document.title="Math Trainer",g(l,"class","svelte-qy9443"),g(c,"class","game-types-list svelte-qy9443"),g(e,"class","game-type"),g(r,"class","svelte-qy9443")},m(a,i){L(a,t,i),L(a,r,i),w(r,e),w(e,l),q(m,l,null),w(e,o),w(e,c);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(c,null);h=!0},p(a,[i]){if(i&0){_=I;let n;for(n=0;n<_.length;n+=1){const p=A(a,_,n);s[n]?(s[n].p(p,i),y(s[n],1)):(s[n]=V(p),s[n].c(),y(s[n],1),s[n].m(c,null))}for(O(),n=_.length;n<s.length;n+=1)J(n);N()}},i(a){if(!h){y(m.$$.fragment,a);for(let i=0;i<_.length;i+=1)y(s[i]);h=!0}},o(a){k(m.$$.fragment,a),s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)k(s[i]);h=!1},d(a){a&&u(t),a&&u(r),C(m),P(s,a)}}}class ee extends j{constructor(t){super(),B(this,t,null,W,H,{})}}export{ee as component};
