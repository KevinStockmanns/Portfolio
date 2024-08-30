import{Eb as M,Ma as I,Oa as f,Sa as p,T as a,U as A,W as h,Y as d,Z as l,ca as S,da as b,na as v,ra as g,va as _}from"./chunk-OXBQCOPE.js";var T=null;function m(){return T}function ze(i){T??=i}var B=class{};var E=new h(""),y=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=a({token:e,factory:()=>l(N),providedIn:"platform"});let i=e;return i})(),Ve=new h(""),N=(()=>{let e=class e extends y{constructor(){super(),this._doc=l(E),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return m().getBaseHref(this._doc)}onPopState(t){let n=m().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=m().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,r){this._history.pushState(t,n,r)}replaceState(t,n,r){this._history.replaceState(t,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=a({token:e,factory:()=>new e,providedIn:"platform"});let i=e;return i})();function w(i,e){if(i.length==0)return e;if(e.length==0)return i;let s=0;return i.endsWith("/")&&s++,e.startsWith("/")&&s++,s==2?i+e.substring(1):s==1?i+e:i+"/"+e}function L(i){let e=i.match(/#|\?|$/),s=e&&e.index||i.length,t=s-(i[s-1]==="/"?1:0);return i.slice(0,t)+i.slice(s)}function c(i){return i&&i[0]!=="?"?"?"+i:i}var D=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=a({token:e,factory:()=>l($),providedIn:"root"});let i=e;return i})(),P=new h(""),$=(()=>{let e=class e extends D{constructor(t,n){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return w(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+c(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${n}${r}`:n}pushState(t,n,r,u){let o=this.prepareExternalUrl(r+c(u));this._platformLocation.pushState(t,n,o)}replaceState(t,n,r,u){let o=this.prepareExternalUrl(r+c(u));this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(n){return new(n||e)(d(y),d(P,8))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),je=(()=>{let e=class e extends D{constructor(t,n){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(t){let n=w(this._baseHref,t);return n.length>0?"#"+n:n}pushState(t,n,r,u){let o=this.prepareExternalUrl(r+c(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,n,o)}replaceState(t,n,r,u){let o=this.prepareExternalUrl(r+c(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(n){return new(n||e)(d(y),d(P,8))},e.\u0275prov=a({token:e,factory:e.\u0275fac});let i=e;return i})(),x=(()=>{let e=class e{constructor(t){this._subject=new v,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=V(L(R(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+c(n))}normalize(t){return e.stripTrailingSlash(z(this._basePath,R(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",r=null){this._locationStrategy.pushState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+c(n)),r)}replaceState(t,n="",r=null){this._locationStrategy.replaceState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+c(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(r=>r(t,n))}subscribe(t,n,r){return this._subject.subscribe({next:t,error:n,complete:r})}};e.normalizeQueryParams=c,e.joinWithSlash=w,e.stripTrailingSlash=L,e.\u0275fac=function(n){return new(n||e)(d(D))},e.\u0275prov=a({token:e,factory:()=>U(),providedIn:"root"});let i=e;return i})();function U(){return new x(d(D))}function z(i,e){if(!i||!e.startsWith(i))return e;let s=e.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:e}function R(i){return i.replace(/\/index.html$/,"")}function V(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function Ge(i,e){e=encodeURIComponent(e);for(let s of i.split(";")){let t=s.indexOf("="),[n,r]=t==-1?[s,""]:[s.slice(0,t),s.slice(t+1)];if(n.trim()===e)return decodeURIComponent(r)}return null}var He=(()=>{let e=class e{constructor(t,n,r){this._ngEl=t,this._differs=n,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,n){let[r,u]=t.split("."),o=r.indexOf("-")===-1?void 0:I.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,u?`${n}${u}`:n,o):this._renderer.removeStyle(this._ngEl.nativeElement,r,o)}_applyChanges(t){t.forEachRemovedItem(n=>this._setStyle(n.key,null)),t.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),t.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}};e.\u0275fac=function(n){return new(n||e)(f(g),f(M),f(p))},e.\u0275dir=b({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let i=e;return i})();var Ye=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=A({});let i=e;return i})(),j="browser",G="server";function H(i){return i===j}function Ze(i){return i===G}var We=(()=>{let e=class e{};e.\u0275prov=a({token:e,providedIn:"root",factory:()=>H(l(_))?new C(l(E),window):new F});let i=e;return i})(),C=class{constructor(e,s){this.document=e,this.window=s,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let s=Y(this.document,e);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let s=e.getBoundingClientRect(),t=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(t-r[0],n-r[1])}};function Y(i,e){let s=i.getElementById(e)||i.getElementsByName(e)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let t=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=t.currentNode;for(;n;){let r=n.shadowRoot;if(r){let u=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(u)return u}n=t.nextNode()}}return null}var F=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},O=class{};export{m as a,ze as b,B as c,E as d,Ve as e,D as f,$ as g,je as h,x as i,Ge as j,He as k,Ye as l,j as m,H as n,Ze as o,We as p,O as q};
