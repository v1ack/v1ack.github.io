import{S as e,i as t,s,N as n,e as r,k as i,c as l,a,d as o,n as h,b as c,f as d,V as g,E as p,F as m,G as u,x as f,u as v,W as $,X as w,U as b,L as E,r as y,w as x,Y as P,A as k,Z as D,y as S,C as F,H as I,_ as T,t as H,g as A,h as G,D as V,$ as L,j as C,T as _,m as X,J as N,R as W,o as M,v as O,Q as Y,l as z}from"../../chunks/vendor-7fd04ffb.js";class U{constructor(e){if(this.config=U.mergeSettings(e),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=U.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach((e=>{this[e]=this[e].bind(this)})),this.init()}static mergeSettings(e){const t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:()=>{},onChange:()=>{}},s=e;for(const n in s)t[n]=s[n];return t}static webkitOrNot(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}attachEvents(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}detachEvents(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}init(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}buildSliderFrame(){const e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");const s=document.createDocumentFragment();if(this.config.loop)for(let n=this.innerElements.length-this.perPage;n<this.innerElements.length;n++){const e=this.buildSliderFrameItem(this.innerElements[n].cloneNode(!0));s.appendChild(e)}for(let n=0;n<this.innerElements.length;n++){const e=this.buildSliderFrameItem(this.innerElements[n]);s.appendChild(e)}if(this.config.loop)for(let n=0;n<this.perPage;n++){const e=this.buildSliderFrameItem(this.innerElements[n].cloneNode(!0));s.appendChild(e)}this.sliderFrame.appendChild(s),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}buildSliderFrameItem(e){const t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}resolveSlidesNumber(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"==typeof this.config.perPage){this.perPage=1;for(const e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}prev(e=1,t){if(this.innerElements.length<=this.perPage)return;const s=this.currentSlide;if(this.config.loop){if(this.currentSlide-e<0){this.disableTransition();const t=this.currentSlide+this.innerElements.length,s=t+this.perPage,n=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),r=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]=`translate3d(${n+r}px, 0, 0)`,this.currentSlide=t-e}else this.currentSlide=this.currentSlide-e}else this.currentSlide=Math.max(this.currentSlide-e,0);s!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}next(e=1,t){if(this.innerElements.length<=this.perPage)return;const s=this.currentSlide;if(this.config.loop){if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();const t=this.currentSlide-this.innerElements.length,s=t+this.perPage,n=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),r=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]=`translate3d(${n+r}px, 0, 0)`,this.currentSlide=t+e}else this.currentSlide=this.currentSlide+e}else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);s!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}disableTransition(){this.sliderFrame.style.webkitTransition=`all 0ms ${this.config.easing}`,this.sliderFrame.style.transition=`all 0ms ${this.config.easing}`}enableTransition(){this.sliderFrame.style.webkitTransition=`all ${this.config.duration}ms ${this.config.easing}`,this.sliderFrame.style.transition=`all ${this.config.duration}ms ${this.config.easing}`}goTo(e,t){if(this.innerElements.length<=this.perPage)return;const s=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),s!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}slideToCurrent(e){const t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,s=(this.config.rtl?1:-1)*t*(this.selectorWidth/this.perPage);e?requestAnimationFrame((()=>{requestAnimationFrame((()=>{this.enableTransition(),this.sliderFrame.style[this.transformProperty]=`translate3d(${s}px, 0, 0)`}))})):this.sliderFrame.style[this.transformProperty]=`translate3d(${s}px, 0, 0)`}updateAfterDrag(){const e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),s=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,n=e>0&&this.currentSlide-s<0,r=e<0&&this.currentSlide+s>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(s):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(s),this.slideToCurrent(n||r)}resizeHandler(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}clearDrag(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}touchstartHandler(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}touchendHandler(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}touchmoveHandler(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition=`all 0ms ${this.config.easing}`,this.sliderFrame.style.transition=`all 0ms ${this.config.easing}`;const t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),s=this.drag.endX-this.drag.startX,n=this.config.rtl?t+s:t-s;this.sliderFrame.style[this.transformProperty]=`translate3d(${(this.config.rtl?1:-1)*n}px, 0, 0)`}}mousedownHandler(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}mouseupHandler(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}mousemoveHandler(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition=`all 0ms ${this.config.easing}`,this.sliderFrame.style.transition=`all 0ms ${this.config.easing}`;const t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),s=this.drag.endX-this.drag.startX,n=this.config.rtl?t+s:t-s;this.sliderFrame.style[this.transformProperty]=`translate3d(${(this.config.rtl?1:-1)*n}px, 0, 0)`}}mouseleaveHandler(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}clickHandler(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}remove(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");const s=e<this.currentSlide,n=this.currentSlide+this.perPage-1===e;(s||n)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}insert(e,t,s){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");const n=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=n?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),s&&s.call(this)}prepend(e,t){this.insert(e,0),t&&t.call(this)}append(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}destroy(e=!1,t){if(this.detachEvents(),this.selector.style.cursor="auto",e){const e=document.createDocumentFragment();for(let t=0;t<this.innerElements.length;t++)e.appendChild(this.innerElements[t]);this.selector.innerHTML="",this.selector.appendChild(e),this.selector.removeAttribute("style")}t&&t.call(this)}}function j(e,t,s){const n=e.slice();return n[31]=t[s],n[33]=s,n}const R=e=>({}),q=e=>({}),Q=e=>({}),B=e=>({});function J(e){let t,s,w,b,E,y;const x=e[24]["left-control"],P=n(x,e,e[23],B),k=e[24]["right-control"],D=n(k,e,e[23],q);return{c(){t=r("button"),P&&P.c(),s=i(),w=r("button"),D&&D.c(),this.h()},l(e){t=l(e,"BUTTON",{class:!0,"aria-label":!0});var n=a(t);P&&P.l(n),n.forEach(o),s=h(e),w=l(e,"BUTTON",{class:!0,"aria-label":!0});var r=a(w);D&&D.l(r),r.forEach(o),this.h()},h(){c(t,"class","left svelte-rx7te7"),c(t,"aria-label","left"),c(w,"class","right svelte-rx7te7"),c(w,"aria-label","right")},m(n,r){d(n,t,r),P&&P.m(t,null),d(n,s,r),d(n,w,r),D&&D.m(w,null),b=!0,E||(y=[g(t,"click",e[3]),g(w,"click",e[4])],E=!0)},p(e,t){P&&P.p&&(!b||8388608&t[0])&&p(P,x,e,e[23],b?u(x,e[23],t,Q):m(e[23]),B),D&&D.p&&(!b||8388608&t[0])&&p(D,k,e,e[23],b?u(k,e[23],t,R):m(e[23]),q)},i(e){b||(f(P,e),f(D,e),b=!0)},o(e){v(P,e),v(D,e),b=!1},d(e){e&&o(t),P&&P.d(e),e&&o(s),e&&o(w),D&&D.d(e),E=!1,$(y)}}}function Z(e){let t,s={length:e[9]},n=[];for(let r=0;r<s.length;r+=1)n[r]=K(j(e,s,r));return{c(){t=r("ul");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=l(e,"UL",{class:!0});var s=a(t);for(let t=0;t<n.length;t+=1)n[t].l(s);s.forEach(o),this.h()},h(){c(t,"class","svelte-rx7te7")},m(e,s){d(e,t,s);for(let r=0;r<n.length;r+=1)n[r].m(t,null)},p(e,r){if(740&r[0]){let i;for(s={length:e[9]},i=0;i<s.length;i+=1){const l=j(e,s,i);n[i]?n[i].p(l,r):(n[i]=K(l),n[i].c(),n[i].m(t,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},d(e){e&&o(t),b(n,e)}}}function K(e){let t,s,n,i;function h(){return e[26](e[33])}return{c(){t=r("li"),this.h()},l(e){t=l(e,"LI",{class:!0}),a(t).forEach(o),this.h()},h(){c(t,"class",s=w(e[2](e[7],e[33])?"active":"")+" svelte-rx7te7")},m(e,s){d(e,t,s),n||(i=g(t,"click",h),n=!0)},p(n,r){e=n,128&r[0]&&s!==(s=w(e[2](e[7],e[33])?"active":"")+" svelte-rx7te7")&&c(t,"class",s)},d(e){e&&o(t),n=!1,i()}}}function ee(e){let t,s,g,$,w;const b=e[24].default,P=n(b,e,e[23],null);let k=e[1]&&J(e),D=e[0]&&Z(e);return{c(){t=r("div"),s=r("div"),P&&P.c(),g=i(),k&&k.c(),$=i(),D&&D.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var n=a(t);s=l(n,"DIV",{class:!0});var r=a(s);P&&P.l(r),r.forEach(o),g=h(n),k&&k.l(n),$=h(n),D&&D.l(n),n.forEach(o),this.h()},h(){c(s,"class","slides svelte-rx7te7"),c(t,"class","carousel svelte-rx7te7")},m(n,r){d(n,t,r),E(t,s),P&&P.m(s,null),e[25](s),E(t,g),k&&k.m(t,null),E(t,$),D&&D.m(t,null),w=!0},p(e,s){P&&P.p&&(!w||8388608&s[0])&&p(P,b,e,e[23],w?u(b,e[23],s,null):m(e[23]),null),e[1]?k?(k.p(e,s),2&s[0]&&f(k,1)):(k=J(e),k.c(),f(k,1),k.m(t,$)):k&&(y(),v(k,1,1,(()=>{k=null})),x()),e[0]?D?D.p(e,s):(D=Z(e),D.c(),D.m(t,null)):D&&(D.d(1),D=null)},i(e){w||(f(P,e),f(k),w=!0)},o(e){v(P,e),v(k),w=!1},d(s){s&&o(t),P&&P.d(s),e[25](null),k&&k.d(),D&&D.d()}}}function te(e,t,s){let n,r,i,l,a,o,{$$slots:h={},$$scope:c}=t,{perPage:d=3}=t,{loop:g=!0}=t,{autoplay:p=0}=t,{duration:m=200}=t,{easing:u="ease-out"}=t,{startIndex:f=0}=t,{draggable:v=!0}=t,{multipleDrag:$=!0}=t,{dots:w=!0}=t,{controls:b=!0}=t,{threshold:E=20}=t,{rtl:y=!1}=t,x=f;const S=P();function F(){a.next()}function I(e){a.goTo(e)}function T(e){s(7,x=a.currentSlide),S("change",{currentSlide:a.currentSlide,slideCount:a.innerElements.length})}k((()=>(s(22,a=new U({selector:l,perPage:"object"==typeof d?d:Number(d),loop:g,duration:m,easing:u,startIndex:f,draggable:v,multipleDrag:$,threshold:E,rtl:y,onChange:T})),p&&(o=setInterval(F,p)),()=>{p&&clearInterval(o),a.destroy()})));return e.$$set=e=>{"perPage"in e&&s(10,d=e.perPage),"loop"in e&&s(11,g=e.loop),"autoplay"in e&&s(12,p=e.autoplay),"duration"in e&&s(13,m=e.duration),"easing"in e&&s(14,u=e.easing),"startIndex"in e&&s(15,f=e.startIndex),"draggable"in e&&s(16,v=e.draggable),"multipleDrag"in e&&s(17,$=e.multipleDrag),"dots"in e&&s(0,w=e.dots),"controls"in e&&s(1,b=e.controls),"threshold"in e&&s(18,E=e.threshold),"rtl"in e&&s(19,y=e.rtl),"$$scope"in e&&s(23,c=e.$$scope)},e.$$.update=()=>{4194304&e.$$.dirty[0]&&(n=a?a.innerElements:[]),4195328&e.$$.dirty[0]&&s(6,r=a?a.perPage:d),4194368&e.$$.dirty[0]&&s(9,i=a?Math.ceil(a.innerElements.length/r):[])},[w,b,function(e,t){return e<0&&(e=n.length+e),e>=t*r&&e<t*r+r},function(){a.prev()},F,I,r,x,l,i,d,g,p,m,u,f,v,$,E,y,function(){clearInterval(o)},function(){p&&(o=setInterval(F,p))},a,c,h,function(e){D[e?"unshift":"push"]((()=>{l=e,s(8,l)}))},e=>I(e*r)]}class se extends e{constructor(e){super(),t(this,e,te,ee,s,{perPage:10,loop:11,autoplay:12,duration:13,easing:14,startIndex:15,draggable:16,multipleDrag:17,dots:0,controls:1,threshold:18,rtl:19,isDotActive:2,left:3,right:4,go:5,pause:20,resume:21},null,[-1,-1])}get isDotActive(){return this.$$.ctx[2]}get left(){return this.$$.ctx[3]}get right(){return this.$$.ctx[4]}get go(){return this.$$.ctx[5]}get pause(){return this.$$.ctx[20]}get resume(){return this.$$.ctx[21]}}function ne(e){let t,s;const i=e[1].default,h=n(i,e,e[0],null);return{c(){t=r("ul"),h&&h.c()},l(e){t=l(e,"UL",{});var s=a(t);h&&h.l(s),s.forEach(o)},m(e,n){d(e,t,n),h&&h.m(t,null),s=!0},p(e,[t]){h&&h.p&&(!s||1&t)&&p(h,i,e,e[0],s?u(i,e[0],t,null):m(e[0]),null)},i(e){s||(f(h,e),s=!0)},o(e){v(h,e),s=!1},d(e){e&&o(t),h&&h.d(e)}}}function re(e,t,s){let{$$slots:n={},$$scope:r}=t;const i=function*(){for(let e=0;;e++)yield e}(),l={store:F(-1),getId:()=>i.next()};return S("accordion",l),e.$$set=e=>{"$$scope"in e&&s(0,r=e.$$scope)},[r,n]}class ie extends e{constructor(e){super(),t(this,e,re,ne,s,{})}}function le(e){let t,s,i;const h=e[4].default,g=n(h,e,e[3],null);return{c(){t=r("div"),g&&g.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=a(t);g&&g.l(s),s.forEach(o),this.h()},h(){c(t,"class","pb-2 pt-1")},m(e,s){d(e,t,s),g&&g.m(t,null),i=!0},p(e,t){g&&g.p&&(!i||8&t)&&p(g,h,e,e[3],i?u(h,e[3],t,null):m(e[3]),null)},i(e){i||(f(g,e),I((()=>{s||(s=T(t,L,{},!0)),s.run(1)})),i=!0)},o(e){v(g,e),s||(s=T(t,L,{},!1)),s.run(0),i=!1},d(e){e&&o(t),g&&g.d(e),e&&s&&s.end()}}}function ae(e){let t,s,n,p,m,u,$,w=e[0]&&le(e);return{c(){t=r("li"),s=r("button"),n=H(e[1]),p=i(),w&&w.c(),this.h()},l(r){t=l(r,"LI",{});var i=a(t);s=l(i,"BUTTON",{class:!0});var c=a(s);n=A(c,e[1]),c.forEach(o),p=h(i),w&&w.l(i),i.forEach(o),this.h()},h(){c(s,"class","text-lg hover:text-gray-500 font-medium leading-relaxed focus:outline-none text-left")},m(r,i){d(r,t,i),E(t,s),E(s,n),E(t,p),w&&w.m(t,null),m=!0,u||($=g(s,"click",e[2]),u=!0)},p(e,[s]){(!m||2&s)&&G(n,e[1]),e[0]?w?(w.p(e,s),1&s&&f(w,1)):(w=le(e),w.c(),f(w,1),w.m(t,null)):w&&(y(),v(w,1,1,(()=>{w=null})),x())},i(e){m||(f(w),m=!0)},o(e){v(w),m=!1},d(e){e&&o(t),w&&w.d(),u=!1,$()}}}function oe(e,t,s){let{$$slots:n={},$$scope:r}=t,{title:i}=t,{visible:l=!1}=t;const a=V("accordion");let o;return k((()=>(o=a.getId(),a.store.subscribe((e=>s(0,l=e===o)))))),e.$$set=e=>{"title"in e&&s(1,i=e.title),"visible"in e&&s(0,l=e.visible),"$$scope"in e&&s(3,r=e.$$scope)},[l,i,function(){a.store.update((e=>e===o?-1:o))},r,n]}class he extends e{constructor(e){super(),t(this,e,oe,ae,s,{title:1,visible:0})}}function ce(e,t,s){const n=e.slice();return n[1]=t[s],n}function de(e){let t,s,n,g;return{c(){t=r("div"),s=r("img"),g=i(),this.h()},l(e){t=l(e,"DIV",{class:!0});var n=a(t);s=l(n,"IMG",{src:!0,alt:!0,class:!0}),g=h(n),n.forEach(o),this.h()},h(){N(s.src,n=e[1])||c(s,"src",n),c(s,"alt",""),c(s,"class"," svelte-1ln52ko"),c(t,"class","m-2 ring-4 ring-blue-300 rounded-3xl overflow-hidden svelte-1ln52ko")},m(e,n){d(e,t,n),E(t,s),E(t,g)},p:Y,d(e){e&&o(t)}}}function ge(e){let t,s=e[0],n=[];for(let r=0;r<s.length;r+=1)n[r]=de(ce(e,s,r));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=z()},l(e){for(let t=0;t<n.length;t+=1)n[t].l(e);t=z()},m(e,s){for(let t=0;t<n.length;t+=1)n[t].m(e,s);d(e,t,s)},p(e,r){if(1&r){let i;for(s=e[0],i=0;i<s.length;i+=1){const l=ce(e,s,i);n[i]?n[i].p(l,r):(n[i]=de(l),n[i].c(),n[i].m(t.parentNode,t))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},d(e){b(n,e),e&&o(t)}}}function pe(e){let t,s;return{c(){t=r("span"),s=H("<"),this.h()},l(e){t=l(e,"SPAN",{class:!0,slot:!0});var n=a(t);s=A(n,"<"),n.forEach(o),this.h()},h(){c(t,"class","carousel-arrow svelte-1ln52ko"),c(t,"slot","left-control")},m(e,n){d(e,t,n),E(t,s)},d(e){e&&o(t)}}}function me(e){let t,s;return{c(){t=r("span"),s=H(">"),this.h()},l(e){t=l(e,"SPAN",{class:!0,slot:!0});var n=a(t);s=A(n,">"),n.forEach(o),this.h()},h(){c(t,"class","carousel-arrow svelte-1ln52ko"),c(t,"slot","right-control")},m(e,n){d(e,t,n),E(t,s)},d(e){e&&o(t)}}}function ue(e){let t,s,n,g,p,m,u,f;return{c(){t=r("p"),s=H("It's because of images in files. The best way to solve the problem is compressing PDF"),n=i(),g=r("p"),p=H("There are many tools online, I recommend "),m=r("a"),u=H("iLovePDF"),f=H(' with "Recommend compression" setting'),this.h()},l(e){t=l(e,"P",{class:!0});var r=a(t);s=A(r,"It's because of images in files. The best way to solve the problem is compressing PDF"),r.forEach(o),n=h(e),g=l(e,"P",{class:!0});var i=a(g);p=A(i,"There are many tools online, I recommend "),m=l(i,"A",{class:!0,href:!0,target:!0});var c=a(m);u=A(c,"iLovePDF"),c.forEach(o),f=A(i,' with "Recommend compression" setting'),i.forEach(o),this.h()},h(){c(t,"class","svelte-1ln52ko"),c(m,"class","text-link svelte-1ln52ko"),c(m,"href","https://www.ilovepdf.com/compress_pdf"),c(m,"target","_blank"),c(g,"class","svelte-1ln52ko")},m(e,r){d(e,t,r),E(t,s),d(e,n,r),d(e,g,r),E(g,p),E(g,m),E(m,u),E(g,f)},d(e){e&&o(t),e&&o(n),e&&o(g)}}}function fe(e){let t,s,n,g,p,m,u,f,v,$;return{c(){t=r("p"),s=H("This app opens only PDF, but you are able to convert other formats to PDF"),n=i(),g=r("p"),p=H("There are many tools online, I recommend "),m=r("a"),u=H("iLovePDF word to pdf"),f=H("\n      and\n      "),v=r("a"),$=H("iLovePDF powerpoint to pdf"),this.h()},l(e){t=l(e,"P",{class:!0});var r=a(t);s=A(r,"This app opens only PDF, but you are able to convert other formats to PDF"),r.forEach(o),n=h(e),g=l(e,"P",{class:!0});var i=a(g);p=A(i,"There are many tools online, I recommend "),m=l(i,"A",{class:!0,href:!0,target:!0});var c=a(m);u=A(c,"iLovePDF word to pdf"),c.forEach(o),f=A(i,"\n      and\n      "),v=l(i,"A",{class:!0,href:!0,target:!0});var d=a(v);$=A(d,"iLovePDF powerpoint to pdf"),d.forEach(o),i.forEach(o),this.h()},h(){c(t,"class","svelte-1ln52ko"),c(m,"class","text-link svelte-1ln52ko"),c(m,"href","https://www.ilovepdf.com/word_to_pdf"),c(m,"target","_blank"),c(v,"class","text-link svelte-1ln52ko"),c(v,"href","https://www.ilovepdf.com/powerpoint_to_pdf"),c(v,"target","_blank"),c(g,"class","svelte-1ln52ko")},m(e,r){d(e,t,r),E(t,s),d(e,n,r),d(e,g,r),E(g,p),E(g,m),E(m,u),E(g,f),E(g,v),E(v,$)},d(e){e&&o(t),e&&o(n),e&&o(g)}}}function ve(e){let t,s,n,g,p,m,u,f,v,$,w;return{c(){t=r("p"),s=H("Docs View is a newer version of PDFview"),n=i(),g=r("p"),p=H("PDFview have problems on latest Tizen version with sending files, in some cases phone can't\n      connect to watch"),m=i(),u=r("p"),f=H("Docs View supports not only PDF, but also markdown and txt files (in UTF-8 encoding)"),v=i(),$=r("p"),w=H("You can try both demos apps and decide what is better for you"),this.h()},l(e){t=l(e,"P",{class:!0});var r=a(t);s=A(r,"Docs View is a newer version of PDFview"),r.forEach(o),n=h(e),g=l(e,"P",{class:!0});var i=a(g);p=A(i,"PDFview have problems on latest Tizen version with sending files, in some cases phone can't\n      connect to watch"),i.forEach(o),m=h(e),u=l(e,"P",{class:!0});var c=a(u);f=A(c,"Docs View supports not only PDF, but also markdown and txt files (in UTF-8 encoding)"),c.forEach(o),v=h(e),$=l(e,"P",{class:!0});var d=a($);w=A(d,"You can try both demos apps and decide what is better for you"),d.forEach(o),this.h()},h(){c(t,"class","svelte-1ln52ko"),c(g,"class","svelte-1ln52ko"),c(u,"class","svelte-1ln52ko"),c($,"class","svelte-1ln52ko")},m(e,r){d(e,t,r),E(t,s),d(e,n,r),d(e,g,r),E(g,p),d(e,m,r),d(e,u,r),E(u,f),d(e,v,r),d(e,$,r),E($,w)},d(e){e&&o(t),e&&o(n),e&&o(g),e&&o(m),e&&o(u),e&&o(v),e&&o($)}}}function $e(e){let t,s;return{c(){t=r("p"),s=H("I'm not able to update the app in Galaxy Store because of changes for latest Tizen version"),this.h()},l(e){t=l(e,"P",{class:!0});var n=a(t);s=A(n,"I'm not able to update the app in Galaxy Store because of changes for latest Tizen version"),n.forEach(o),this.h()},h(){c(t,"class","svelte-1ln52ko")},m(e,n){d(e,t,n),E(t,s)},d(e){e&&o(t)}}}function we(e){let t,s,n,g,p;return{c(){t=r("p"),s=H("If you don't have problems with sending files - use PDFview"),n=i(),g=r("p"),p=H("In other cases you can install Docs View demo for sending files and open them from old paid\n      app"),this.h()},l(e){t=l(e,"P",{class:!0});var r=a(t);s=A(r,"If you don't have problems with sending files - use PDFview"),r.forEach(o),n=h(e),g=l(e,"P",{class:!0});var i=a(g);p=A(i,"In other cases you can install Docs View demo for sending files and open them from old paid\n      app"),i.forEach(o),this.h()},h(){c(t,"class","svelte-1ln52ko"),c(g,"class","svelte-1ln52ko")},m(e,r){d(e,t,r),E(t,s),d(e,n,r),d(e,g,r),E(g,p)},d(e){e&&o(t),e&&o(n),e&&o(g)}}}function be(e){let t,s,n,g,p;return{c(){t=r("p"),s=H("It's an app with limited use"),n=i(),g=r("p"),p=H("You can open only 3 different files. It's very cool to try app before paying and to find out\n      how it works"),this.h()},l(e){t=l(e,"P",{class:!0});var r=a(t);s=A(r,"It's an app with limited use"),r.forEach(o),n=h(e),g=l(e,"P",{class:!0});var i=a(g);p=A(i,"You can open only 3 different files. It's very cool to try app before paying and to find out\n      how it works"),i.forEach(o),this.h()},h(){c(t,"class","svelte-1ln52ko"),c(g,"class","svelte-1ln52ko")},m(e,r){d(e,t,r),E(t,s),d(e,n,r),d(e,g,r),E(g,p)},d(e){e&&o(t),e&&o(n),e&&o(g)}}}function Ee(e){let t,s,n,g,p,m,u,f,v,$,w,b,y,x,P,k;return{c(){t=r("div"),s=r("div"),n=r("p"),g=H("PDFview"),p=i(),m=r("a"),u=r("img"),v=i(),$=r("div"),w=r("p"),b=H("PDFview demo"),y=i(),x=r("a"),P=r("img"),this.h()},l(e){t=l(e,"DIV",{class:!0});var r=a(t);s=l(r,"DIV",{class:!0});var i=a(s);n=l(i,"P",{class:!0});var c=a(n);g=A(c,"PDFview"),c.forEach(o),p=h(i),m=l(i,"A",{href:!0,class:!0});var d=a(m);u=l(d,"IMG",{alt:!0,src:!0,style:!0,class:!0}),d.forEach(o),i.forEach(o),v=h(r),$=l(r,"DIV",{class:!0});var f=a($);w=l(f,"P",{class:!0});var E=a(w);b=A(E,"PDFview demo"),E.forEach(o),y=h(f),x=l(f,"A",{href:!0,class:!0});var k=a(x);P=l(k,"IMG",{alt:!0,src:!0,style:!0,class:!0}),k.forEach(o),f.forEach(o),r.forEach(o),this.h()},h(){c(n,"class","svelte-1ln52ko"),c(u,"alt","Available on Samsung Galaxy Store"),N(u.src,f="https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png")||c(u,"src","https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png"),W(u,"width","180px"),c(u,"class","svelte-1ln52ko"),c(m,"href","https://galaxy.store/pdfview"),c(m,"class","svelte-1ln52ko"),c(s,"class","svelte-1ln52ko"),c(w,"class","svelte-1ln52ko"),c(P,"alt","Available on Samsung Galaxy Store"),N(P.src,k="https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png")||c(P,"src","https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png"),W(P,"width","180px"),c(P,"class","svelte-1ln52ko"),c(x,"href","https://galaxy.store/pdfviewd"),c(x,"class","svelte-1ln52ko"),c($,"class","ml-2 svelte-1ln52ko"),c(t,"class","flex svelte-1ln52ko")},m(e,r){d(e,t,r),E(t,s),E(s,n),E(n,g),E(s,p),E(s,m),E(m,u),E(t,v),E(t,$),E($,w),E(w,b),E($,y),E($,x),E(x,P)},d(e){e&&o(t)}}}function ye(e){let t,s,n,r,l,a,c,g,p,m,u,$,w,b;return t=new he({props:{title:"The file loads too slowly",$$slots:{default:[ue]},$$scope:{ctx:e}}}),n=new he({props:{title:"How to open word DOC or powerpoint PPT files",$$slots:{default:[fe]},$$scope:{ctx:e}}}),l=new he({props:{title:"Difference between Docs View and PDFview",$$slots:{default:[ve]},$$scope:{ctx:e}}}),c=new he({props:{title:"Why Docs View is another app",$$slots:{default:[$e]},$$scope:{ctx:e}}}),p=new he({props:{title:"I'm already bought PDFview. What can i do?",$$slots:{default:[we]},$$scope:{ctx:e}}}),u=new he({props:{title:"What is demo",$$slots:{default:[be]},$$scope:{ctx:e}}}),w=new he({props:{title:"Links to PDFview",$$slots:{default:[Ee]},$$scope:{ctx:e}}}),{c(){C(t.$$.fragment),s=i(),C(n.$$.fragment),r=i(),C(l.$$.fragment),a=i(),C(c.$$.fragment),g=i(),C(p.$$.fragment),m=i(),C(u.$$.fragment),$=i(),C(w.$$.fragment)},l(e){X(t.$$.fragment,e),s=h(e),X(n.$$.fragment,e),r=h(e),X(l.$$.fragment,e),a=h(e),X(c.$$.fragment,e),g=h(e),X(p.$$.fragment,e),m=h(e),X(u.$$.fragment,e),$=h(e),X(w.$$.fragment,e)},m(e,i){M(t,e,i),d(e,s,i),M(n,e,i),d(e,r,i),M(l,e,i),d(e,a,i),M(c,e,i),d(e,g,i),M(p,e,i),d(e,m,i),M(u,e,i),d(e,$,i),M(w,e,i),b=!0},p(e,s){const r={};16&s&&(r.$$scope={dirty:s,ctx:e}),t.$set(r);const i={};16&s&&(i.$$scope={dirty:s,ctx:e}),n.$set(i);const a={};16&s&&(a.$$scope={dirty:s,ctx:e}),l.$set(a);const o={};16&s&&(o.$$scope={dirty:s,ctx:e}),c.$set(o);const h={};16&s&&(h.$$scope={dirty:s,ctx:e}),p.$set(h);const d={};16&s&&(d.$$scope={dirty:s,ctx:e}),u.$set(d);const g={};16&s&&(g.$$scope={dirty:s,ctx:e}),w.$set(g)},i(e){b||(f(t.$$.fragment,e),f(n.$$.fragment,e),f(l.$$.fragment,e),f(c.$$.fragment,e),f(p.$$.fragment,e),f(u.$$.fragment,e),f(w.$$.fragment,e),b=!0)},o(e){v(t.$$.fragment,e),v(n.$$.fragment,e),v(l.$$.fragment,e),v(c.$$.fragment,e),v(p.$$.fragment,e),v(u.$$.fragment,e),v(w.$$.fragment,e),b=!1},d(e){O(t,e),e&&o(s),O(n,e),e&&o(r),O(l,e),e&&o(a),O(c,e),e&&o(g),O(p,e),e&&o(m),O(u,e),e&&o($),O(w,e)}}}function xe(e){let t,s,n,g,p,m,u,$,w,b,y,x,P,k,D,S,F,I,T,G,V,L,Y,z,U,j,R,q,Q,B,J,Z,K,ee,te,ne,re,le,ae,oe,he,ce,de,ue,fe,ve,$e,we,be;return de=new se({props:{dots:!1,loop:!1,perPage:{1e3:4,700:3,500:2},$$slots:{"right-control":[me],"left-control":[pe],default:[ge]},$$scope:{ctx:e}}}),we=new ie({props:{$$slots:{default:[ye]},$$scope:{ctx:e}}}),{c(){t=i(),s=r("h1"),n=H("Docs View"),g=i(),p=r("p"),m=H("Open your docs (PDF, markdown and txt) on your watch"),u=i(),$=r("p"),w=H("Available for latest Tizen watch: Galaxy Watch3, Galaxy Active 2, Galaxy Active, Galaxy Watch and\n  Gear S3"),b=i(),y=r("p"),x=H("Companion app to send files from phone to watch: "),P=r("a"),k=H("Download apk"),D=i(),S=r("div"),F=r("p"),I=H("Docs View is a newer version of PDFview. You can find more info "),T=r("a"),G=H("in FAQ"),V=i(),L=r("div"),Y=r("div"),z=r("p"),U=H("Docs View"),j=i(),R=r("a"),q=r("img"),B=i(),J=r("div"),Z=r("p"),K=H("Docs View demo"),ee=i(),te=r("a"),ne=r("img"),le=i(),ae=r("h2"),oe=H("Screenshots"),he=i(),ce=r("div"),C(de.$$.fragment),ue=i(),fe=r("h2"),ve=H("FAQ"),$e=i(),C(we.$$.fragment),this.h()},l(e){_('[data-svelte="svelte-ogwdr5"]',document.head).forEach(o),t=h(e),s=l(e,"H1",{class:!0});var r=a(s);n=A(r,"Docs View"),r.forEach(o),g=h(e),p=l(e,"P",{class:!0});var i=a(p);m=A(i,"Open your docs (PDF, markdown and txt) on your watch"),i.forEach(o),u=h(e),$=l(e,"P",{class:!0});var c=a($);w=A(c,"Available for latest Tizen watch: Galaxy Watch3, Galaxy Active 2, Galaxy Active, Galaxy Watch and\n  Gear S3"),c.forEach(o),b=h(e),y=l(e,"P",{class:!0});var d=a(y);x=A(d,"Companion app to send files from phone to watch: "),P=l(d,"A",{class:!0,href:!0});var f=a(P);k=A(f,"Download apk"),f.forEach(o),d.forEach(o),D=h(e),S=l(e,"DIV",{class:!0});var v=a(S);F=l(v,"P",{class:!0});var E=a(F);I=A(E,"Docs View is a newer version of PDFview. You can find more info "),T=l(E,"A",{class:!0,href:!0});var H=a(T);G=A(H,"in FAQ"),H.forEach(o),E.forEach(o),v.forEach(o),V=h(e),L=l(e,"DIV",{class:!0});var C=a(L);Y=l(C,"DIV",{class:!0});var N=a(Y);z=l(N,"P",{class:!0});var W=a(z);U=A(W,"Docs View"),W.forEach(o),j=h(N),R=l(N,"A",{href:!0,class:!0});var M=a(R);q=l(M,"IMG",{alt:!0,class:!0,src:!0,style:!0}),M.forEach(o),N.forEach(o),B=h(C),J=l(C,"DIV",{class:!0});var O=a(J);Z=l(O,"P",{class:!0});var Q=a(Z);K=A(Q,"Docs View demo"),Q.forEach(o),ee=h(O),te=l(O,"A",{href:!0,class:!0});var se=a(te);ne=l(se,"IMG",{alt:!0,src:!0,style:!0,class:!0}),se.forEach(o),O.forEach(o),C.forEach(o),le=h(e),ae=l(e,"H2",{class:!0});var re=a(ae);oe=A(re,"Screenshots"),re.forEach(o),he=h(e),ce=l(e,"DIV",{class:!0});var ie=a(ce);X(de.$$.fragment,ie),ie.forEach(o),ue=h(e),fe=l(e,"H2",{class:!0,id:!0});var ge=a(fe);ve=A(ge,"FAQ"),ge.forEach(o),$e=h(e),X(we.$$.fragment,e),this.h()},h(){document.title="Docs View",c(s,"class","text-7xl font-light leading-relaxed svelte-1ln52ko"),c(p,"class","text-2xl leading-loose svelte-1ln52ko"),c($,"class","leading-loose svelte-1ln52ko"),c(P,"class","rounded-md bg-blue-600 text-blue-50 py-2 px-6 inline-block hover:bg-blue-500 hover:text-blue-100 svelte-1ln52ko"),c(P,"href","https://github.com/v1ack/v1ack.github.io/releases"),c(y,"class","svelte-1ln52ko"),c(T,"class","underline svelte-1ln52ko"),c(T,"href","#faq"),c(F,"class","svelte-1ln52ko"),c(S,"class","bg-blue-100 p-4 text-blue-800 rounded-md mt-4 mb-4 svelte-1ln52ko"),c(z,"class","svelte-1ln52ko"),c(q,"alt","Available on Samsung Galaxy Store"),c(q,"class"," svelte-1ln52ko"),N(q.src,Q="https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png")||c(q,"src","https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png"),W(q,"width","180px"),c(R,"href","https://galaxy.store/docview"),c(R,"class","svelte-1ln52ko"),c(Y,"class","svelte-1ln52ko"),c(Z,"class","svelte-1ln52ko"),c(ne,"alt","Available on Samsung Galaxy Store"),N(ne.src,re="https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png")||c(ne,"src","https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png"),W(ne,"width","180px"),c(ne,"class","svelte-1ln52ko"),c(te,"href","https://galaxy.store/docviewd"),c(te,"class","svelte-1ln52ko"),c(J,"class","ml-2 svelte-1ln52ko"),c(L,"class","flex svelte-1ln52ko"),c(ae,"class","text-3xl mt-5 mb-3 svelte-1ln52ko"),c(ce,"class","svelte-1ln52ko"),c(fe,"class","text-3xl mt-5 mb-3 svelte-1ln52ko"),c(fe,"id","faq")},m(e,r){d(e,t,r),d(e,s,r),E(s,n),d(e,g,r),d(e,p,r),E(p,m),d(e,u,r),d(e,$,r),E($,w),d(e,b,r),d(e,y,r),E(y,x),E(y,P),E(P,k),d(e,D,r),d(e,S,r),E(S,F),E(F,I),E(F,T),E(T,G),d(e,V,r),d(e,L,r),E(L,Y),E(Y,z),E(z,U),E(Y,j),E(Y,R),E(R,q),E(L,B),E(L,J),E(J,Z),E(Z,K),E(J,ee),E(J,te),E(te,ne),d(e,le,r),d(e,ae,r),E(ae,oe),d(e,he,r),d(e,ce,r),M(de,ce,null),d(e,ue,r),d(e,fe,r),E(fe,ve),d(e,$e,r),M(we,e,r),be=!0},p(e,[t]){const s={};16&t&&(s.$$scope={dirty:t,ctx:e}),de.$set(s);const n={};16&t&&(n.$$scope={dirty:t,ctx:e}),we.$set(n)},i(e){be||(f(de.$$.fragment,e),f(we.$$.fragment,e),be=!0)},o(e){v(de.$$.fragment,e),v(we.$$.fragment,e),be=!1},d(e){e&&o(t),e&&o(s),e&&o(g),e&&o(p),e&&o(u),e&&o($),e&&o(b),e&&o(y),e&&o(D),e&&o(S),e&&o(V),e&&o(L),e&&o(le),e&&o(ae),e&&o(he),e&&o(ce),O(de),e&&o(ue),e&&o(fe),e&&o($e),O(we,e)}}}function Pe(e){return[["/docsView/promo_open_pdf@2x.jpg","/docsView/promo_different_formats@2x.jpg","/docsView/promo_md_third@2x.jpg","/docsView/promo_send@2x.jpg","/docsView/promo_demo@2x.jpg"]]}class ke extends e{constructor(e){super(),t(this,e,Pe,xe,s,{})}}export{ke as default};