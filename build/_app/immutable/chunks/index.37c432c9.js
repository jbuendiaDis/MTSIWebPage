function D(){}const dt=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function V(){return Object.create(null)}function E(t){t.forEach(tt)}function K(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Gt(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function mt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return D;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t){let e;return et(t,n=>e=n)(),e}function Jt(t,e,n){t.$$.on_destroy.push(et(e,n))}function Kt(t,e,n,i){if(t){const r=nt(t,e,n,i);return t[0](r)}}function nt(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Ut(t,e,n,i,r,l){if(r){const s=nt(e,n,i,l);t.p(s,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Yt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}const it=typeof window<"u";let pt=it?()=>window.performance.now():()=>Date.now(),Q=it?t=>requestAnimationFrame(t):D;const S=new Set;function rt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&Q(rt)}function yt(t){let e;return S.size===0&&Q(rt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let F=!1;function gt(){F=!0}function $t(){F=!1}function xt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:xt(1,r,h=>e[n[h]].claim_order,u))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[c],f)}}function bt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=ct("style");return Et(st(t),e),e.sheet}function Et(t,e){return bt(t.head||t,e),e.sheet}function kt(t,e){if(F){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){F&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ct(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function ee(){return U(" ")}function ne(){return U("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function re(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Nt(t,i,e[i])}function At(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,r=!1){St(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Ct(t,e,n,i){return lt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function oe(t,e,n){return Ct(t,e,n,ct)}function Dt(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>U(e),!0)}function ce(t){return Dt(t," ")}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ae(t,e,n){t.classList[n?"add":"remove"](e)}function Mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function fe(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function _e(t,e){return new t(e)}const z=new Map;let B=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:vt(e),rules:{}};return z.set(t,n),n}function X(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${s(g,1-g)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,_=`__svelte_${jt(f)}_${o}`,h=st(t),{stylesheet:a,rules:d}=z.get(h)||Ot(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${r}ms 1 both`,B+=1,_}function Tt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),B-=r,B||Pt())}function Pt(){Q(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ot(e)}),z.clear())})}let O;function j(t){O=t}function T(){if(!O)throw new Error("Function called outside component initialization");return O}function de(t){T().$$.on_mount.push(t)}function he(t){T().$$.after_update.push(t)}function me(t){T().$$.on_destroy.push(t)}function pe(t,e){return T().$$.context.set(t,e),e}function ye(t){return T().$$.context.get(t)}const A=[],Y=[];let C=[];const Z=[],ut=Promise.resolve();let J=!1;function at(){J||(J=!0,ut.then(ft))}function ge(){return at(),ut}function H(t){C.push(t)}const G=new Set;let N=0;function ft(){if(N!==0)return;const t=O;do{try{for(;N<A.length;){const e=A[N];N++,j(e),Rt(e.$$)}}catch(e){throw A.length=0,N=0,e}for(j(null),A.length=0,N=0;Y.length;)Y.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];G.has(n)||(G.add(n),n())}C.length=0}while(A.length);for(;Z.length;)Z.pop()();J=!1,G.clear(),j(t)}function Rt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function qt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let M;function Lt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function I(t,e,n){t.dispatchEvent(Mt(`${e?"intro":"outro"}${n}`))}const L=new Set;let w;function $e(){w={r:0,c:[],p:w}}function xe(){w.r||E(w.c),w=w.p}function _t(t,e){t&&t.i&&(L.delete(t),t.i(e))}function we(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),w.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function be(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,u=null;function f(){u&&Tt(t,u)}function _(a,d){const p=a.b-s;return d*=Math.abs(p),{a:s,b:a.b,d:p,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:p=300,easing:y=dt,tick:g=D,css:b}=l||zt,k={start:pt()+d,b:a};a||(k.group=w,w.r+=1),o||c?c=k:(b&&(f(),u=X(t,s,a,p,d,y,b)),a&&g(0,1),o=_(k,p),H(()=>I(t,a,"start")),yt(v=>{if(c&&v>c.start&&(o=_(c,p),c=null,I(t,o.b,"start"),b&&(f(),u=X(t,s,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(s=o.b,1-s),I(t,o.b,"end"),c||(o.b?f():--o.group.r||E(o.group.c)),o=null;else if(v>=o.start){const P=v-o.start;s=o.a+o.d*y(P/o.duration),g(s,1-s)}}return!!(o||c)}))}return{run(a){K(l)?Lt().then(()=>{l=l(r),h(a)}):h(a)},end(){f(),o=c=null}}}function ve(t,e){t.d(1),e.delete(t.key)}function Ee(t,e,n,i,r,l,s,o,c,u,f,_){let h=t.length,a=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,b=new Map,k=[];for(d=a;d--;){const m=_(r,l,d),$=n(m);let x=s.get($);x?i&&k.push(()=>x.p(m,e)):(x=u($,m),x.c()),g.set($,y[d]=x),$ in p&&b.set($,Math.abs(d-p[$]))}const v=new Set,P=new Set;function W(m){_t(m,1),m.m(o,f),s.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],$=t[h-1],x=m.key,R=$.key;m===$?(f=m.first,h--,a--):g.has(R)?!s.has(x)||v.has(x)?W(m):P.has(R)?h--:b.get(x)>b.get(R)?(P.add(x),W(m)):(v.add(R),h--):(c($,s),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,s)}for(;a;)W(y[a-1]);return E(k),y}function ke(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ne(t){t&&t.c()}function Ae(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||H(()=>{const s=t.$$.on_mount.map(tt).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),l.forEach(H)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(qt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(A.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,i,r,l,s,o=[-1]){const c=O;j(t);const u=t.$$={fragment:null,ctx:[],props:l,update:D,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return u.ctx&&r(u.ctx[_],u.ctx[_]=d)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](d),f&&Ft(t,_)),h}):[],u.update(),f=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){gt();const _=At(e.target);u.fragment&&u.fragment.l(_),_.forEach(ot)}else u.fragment&&u.fragment.c();e.intro&&_t(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),$t(),ft()}j(c)}class Ce{$destroy(){Ht(this,1),this.$destroy=D}$on(e,n){if(!K(n))return D;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{be as $,Bt as A,Ht as B,kt as C,ie as D,D as E,Jt as F,Gt as G,te as H,E as I,ae as J,K,pe as L,It as M,dt as N,Kt as O,ht as P,se as Q,Ut as R,Ce as S,Vt as T,Qt as U,ke as V,Yt as W,ye as X,me as Y,Xt as Z,H as _,ee as a,re as a0,fe as a1,Ee as a2,ve as a3,et as a4,Zt as b,ce as c,we as d,ne as e,xe as f,_t as g,ot as h,Se as i,he as j,ct as k,oe as l,At as m,Nt as n,de as o,ue as p,U as q,Dt as r,Wt as s,ge as t,le as u,$e as v,Y as w,_e as x,Ne as y,Ae as z};