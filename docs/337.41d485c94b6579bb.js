"use strict";(self.webpackChunkProjectSchool=self.webpackChunkProjectSchool||[]).push([[337],{5838:(Rt,z,M)=>{M.d(z,{_:()=>T});var i=M(4650),_=M(6895),C=M(3683),r=M(7392),w=M(1576),P=M(5829);const j=["*"];let T=(()=>{class H{set icon(B){B.includes("fa-")?this.iconFa=`icon-space-mat ${B}`:this.iconMat=B}constructor(){this.title="",this.iconFa="",this.iconMat=""}ngOnInit(){}static#t=this.\u0275fac=function(E){return new(E||H)};static#e=this.\u0275cmp=i.Xpm({type:H,selectors:[["app-toolbar-title"]],inputs:{title:"title",icon:"icon"},ngContentSelectors:j,decls:7,vars:3,consts:[[1,"icon-space",3,"ngClass"],["fxFlex",""]],template:function(E,I){1&E&&(i.F$t(),i.TgZ(0,"mat-toolbar")(1,"mat-icon",0),i._uU(2),i.qZA(),i.TgZ(3,"span"),i._uU(4),i.qZA(),i._UZ(5,"span",1),i.Hsn(6),i.qZA()),2&E&&(i.xp6(1),i.s9C("ngClass",I.iconFa),i.xp6(1),i.Oqu(I.iconMat),i.xp6(2),i.Oqu(I.title))},dependencies:[_.mk,C.Ye,r.Hw,w.yH,P.oO],styles:[".icon-space[_ngcontent-%COMP%]{margin-right:10px;color:#22ff86d2}.icon-space-mat[_ngcontent-%COMP%]{font-size:20px;margin:5px 5px 0 0}mat-toolbar[_ngcontent-%COMP%]{margin:-10px -4px 5px -20px;width:calc(100% + 40px);background-color:#323232;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:1px solid rgba(120,120,120,.125);height:45px;padding:10px 10px 18px 25px}"]})}return H})()},3927:(Rt,z,M)=>{M.d(z,{m:()=>ne});var i=M(6895),_=M(3683),C=M(7392),r=M(4650),w=M(2233),P=M(5829),j=M(1576);M(1281);let Xt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[w.IR]}),e})(),te=(()=>{class e{constructor(o,y){(0,i.PM)(y)&&!o&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(o,y=[]){return{ngModule:e,providers:o.serverLoaded?[{provide:w.WU,useValue:{...w.g5,...o}},{provide:w.Bs,useValue:y,multi:!0},{provide:w.wY,useValue:!0}]:[{provide:w.WU,useValue:{...w.g5,...o}},{provide:w.Bs,useValue:y,multi:!0}]}}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(w.wY),r.LFG(r.Lbi))},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[j.ae,P.aT,Xt,j.ae,P.aT,Xt]}),e})();var Kt=M(4006);let ne=(()=>{class e{static#t=this.\u0275fac=function(y){return new(y||e)};static#e=this.\u0275mod=r.oAB({type:e});static#i=this.\u0275inj=r.cJS({imports:[i.ez,_.g0,C.Ps,te,Kt.u5,Kt.UX,te,Kt.u5,Kt.UX]})}return e})()},5863:(Rt,z,M)=>{function i(L){for(let B in L){let E=L[B]??"";switch(B){case"display":L.display="flex"===E?["-webkit-flex","flex"]:"inline-flex"===E?["-webkit-inline-flex","inline-flex"]:E;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":L["-webkit-"+B]=E;break;case"flex-direction":L["-webkit-flex-direction"]=E,L["flex-direction"]=E;break;case"order":L.order=L["-webkit-"+B]=isNaN(+E)?"0":E}}return L}M.d(z,{Ar:()=>r,GK:()=>i,iQ:()=>C,kt:()=>H,tj:()=>P});const _="inline",C=["row","column","row-reverse","column-reverse"];function r(L){let[B,E,I]=w(L);return function T(L,B=null,E=!1){return{display:E?"inline-flex":"flex","box-sizing":"border-box","flex-direction":L,"flex-wrap":B||null}}(B,E,I)}function w(L){L=L?.toLowerCase()??"";let[B,E,I]=L.split(" ");return C.find($=>$===B)||(B=C[0]),E===_&&(E=I!==_?I:"",I=_),[B,j(E),!!I]}function P(L){let[B]=w(L);return B.indexOf("row")>-1}function j(L){if(L)switch(L.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":L="wrap-reverse";break;case"no":case"none":case"nowrap":L="nowrap";break;default:L="wrap"}return L}function H(L,...B){if(null==L)throw TypeError("Cannot convert undefined or null to object");for(let E of B)if(null!=E)for(let I in E)E.hasOwnProperty(I)&&(L[I]=E[I]);return L}},2233:(Rt,z,M)=>{M.d(z,{Bs:()=>W,FL:()=>Tt,IR:()=>I,Ot:()=>It,QI:()=>ct,RK:()=>ot,WU:()=>Z,g5:()=>nt,iR:()=>Ot,wY:()=>et,yB:()=>Dt});var i=M(4650),_=M(6895),C=M(1135),r=M(9751),w=M(6451),P=M(7579),j=M(5863),T=M(9300),H=M(8505);const B={provide:i.tb,useFactory:function L(d,f){return()=>{if((0,_.NF)(f)){const t=Array.from(d.querySelectorAll(`[class*=${E}]`)),s=/\bflex-layout-.+?\b/g;t.forEach(n=>{n.classList.contains(`${E}ssr`)&&n.parentNode?n.parentNode.removeChild(n):n.className.replace(s,"")})}}},deps:[_.K0,i.Lbi],multi:!0},E="flex-layout-";let I=(()=>{class d{}return d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({providers:[B]}),d})();class ${constructor(f=!1,t="all",s="",n="",u=0){this.matches=f,this.mediaQuery=t,this.mqAlias=s,this.suffix=n,this.priority=u,this.property=""}clone(){return new $(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}let Lt=(()=>{class d{constructor(){this.stylesheet=new Map}addStyleToElement(t,s,n){const u=this.stylesheet.get(t);u?u.set(s,n):this.stylesheet.set(t,new Map([[s,n]]))}clearStyles(){this.stylesheet.clear()}getStyleForElement(t,s){const n=this.stylesheet.get(t);let u="";if(n){const v=n.get(s);("number"==typeof v||"string"==typeof v)&&(u=v+"")}return u}}return d.\u0275fac=function(t){return new(t||d)},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();const nt={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[],multiplier:void 0,defaultUnit:"px",detectLayoutDisplay:!1},Z=new i.OlP("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>nt}),et=new i.OlP("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),W=new i.OlP("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});function rt(d,f){return d=d?.clone()??new $,f&&(d.mqAlias=f.alias,d.mediaQuery=f.mediaQuery,d.suffix=f.suffix,d.priority=f.priority),d}class ct{constructor(){this.shouldCache=!0}sideEffect(f,t,s){}}let ot=(()=>{class d{constructor(t,s,n,u){this._serverStylesheet=t,this._serverModuleLoaded=s,this._platformId=n,this.layoutConfig=u}applyStyleToElement(t,s,n=null){let u={};"string"==typeof s&&(u[s]=n,s=u),u=this.layoutConfig.disableVendorPrefixes?s:(0,j.GK)(s),this._applyMultiValueStyleToElement(u,t)}applyStyleToElements(t,s=[]){const n=this.layoutConfig.disableVendorPrefixes?t:(0,j.GK)(t);s.forEach(u=>{this._applyMultiValueStyleToElement(n,u)})}getFlowDirection(t){const s="flex-direction";let n=this.lookupStyle(t,s);return[n||"row",this.lookupInlineStyle(t,s)||(0,_.PM)(this._platformId)&&this._serverModuleLoaded?n:""]}hasWrap(t){return"wrap"===this.lookupStyle(t,"flex-wrap")}lookupAttributeValue(t,s){return t.getAttribute(s)??""}lookupInlineStyle(t,s){return(0,_.NF)(this._platformId)?t.style.getPropertyValue(s):function J(d,f){return it(d)[f]??""}(t,s)}lookupStyle(t,s,n=!1){let u="";return t&&((u=this.lookupInlineStyle(t,s))||((0,_.NF)(this._platformId)?n||(u=getComputedStyle(t).getPropertyValue(s)):this._serverModuleLoaded&&(u=this._serverStylesheet.getStyleForElement(t,s)))),u?u.trim():""}_applyMultiValueStyleToElement(t,s){Object.keys(t).sort().forEach(n=>{const u=t[n],v=Array.isArray(u)?u:[u];v.sort();for(let l of v)l=l?l+"":"",(0,_.NF)(this._platformId)||!this._serverModuleLoaded?(0,_.NF)(this._platformId)?s.style.setProperty(n,l):at(s,n,l):this._serverStylesheet.addStyleToElement(s,n,l)})}}return d.\u0275fac=function(t){return new(t||d)(i.LFG(Lt),i.LFG(et),i.LFG(i.Lbi),i.LFG(Z))},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();function at(d,f,t){f=f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();const s=it(d);s[f]=t??"",function Ct(d,f){let t="";for(const s in f)f[s]&&(t+=`${s}:${f[s]};`);d.setAttribute("style",t)}(d,s)}function it(d){const f={},t=d.getAttribute("style");if(t){const s=t.split(/;+/g);for(let n=0;n<s.length;n++){const u=s[n].trim();if(u.length>0){const v=u.indexOf(":");if(-1===v)throw new Error(`Invalid CSS style: ${u}`);f[u.substr(0,v).trim()]=u.substr(v+1).trim()}}}return f}function K(d,f){return(f&&f.priority||0)-(d&&d.priority||0)}function st(d,f){return(d.priority||0)-(f.priority||0)}let q=(()=>{class d{constructor(t,s,n){this._zone=t,this._platformId=s,this._document=n,this.source=new C.X(new $(!0)),this.registry=new Map,this.pendingRemoveListenerFns=[],this._observable$=this.source.asObservable()}get activations(){const t=[];return this.registry.forEach((s,n)=>{s.matches&&t.push(n)}),t}isActive(t){return this.registry.get(t)?.matches??this.registerQuery(t).some(n=>n.matches)}observe(t,s=!1){if(t&&t.length){const n=this._observable$.pipe((0,T.h)(v=>!s||t.indexOf(v.mediaQuery)>-1)),u=new r.y(v=>{const l=this.registerQuery(t);if(l.length){const h=l.pop();l.forEach(a=>{v.next(a)}),this.source.next(h)}v.complete()});return(0,w.T)(u,n)}return this._observable$}registerQuery(t){const s=Array.isArray(t)?t:[t],n=[];return function xt(d,f){const t=d.filter(s=>!ft[s]);if(t.length>0){const s=t.join(", ");try{const n=f.createElement("style");n.setAttribute("type","text/css"),n.styleSheet||n.appendChild(f.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${s} {.fx-query-test{ }}\n`)),f.head.appendChild(n),t.forEach(u=>ft[u]=n)}catch(n){console.error(n)}}}(s,this._document),s.forEach(u=>{const v=h=>{this._zone.run(()=>this.source.next(new $(h.matches,u)))};let l=this.registry.get(u);l||(l=this.buildMQL(u),l.addListener(v),this.pendingRemoveListenerFns.push(()=>l.removeListener(v)),this.registry.set(u,l)),l.matches&&n.push(new $(!0,u))}),n}ngOnDestroy(){let t;for(;t=this.pendingRemoveListenerFns.pop();)t()}buildMQL(t){return function ht(d,f){return f&&window.matchMedia("all").addListener?window.matchMedia(d):function mt(d){const f=new EventTarget;return f.matches="all"===d||""===d,f.media=d,f.addListener=()=>{},f.removeListener=()=>{},f.addEventListener=()=>{},f.dispatchEvent=()=>!1,f.onchange=null,f}(d)}(t,(0,_.NF)(this._platformId))}}return d.\u0275fac=function(t){return new(t||d)(i.LFG(i.R0b),i.LFG(i.Lbi),i.LFG(_.K0))},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();const ft={},dt=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.98px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.98px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.98px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.98px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.98px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.98px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.98px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.98px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.98px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],Ft="(orientation: portrait) and (max-width: 599.98px)",gt="(orientation: landscape) and (max-width: 959.98px)",m="(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)",F="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)",p="(orientation: portrait) and (min-width: 840px)",A="(orientation: landscape) and (min-width: 1280px)",b={HANDSET:`${Ft}, ${gt}`,TABLET:`${m} , ${F}`,WEB:`${p}, ${A} `,HANDSET_PORTRAIT:`${Ft}`,TABLET_PORTRAIT:`${m} `,WEB_PORTRAIT:`${p}`,HANDSET_LANDSCAPE:`${gt}`,TABLET_LANDSCAPE:`${F}`,WEB_LANDSCAPE:`${A}`},Q=[{alias:"handset",priority:2e3,mediaQuery:b.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:b.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:b.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:b.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:b.TABLET_LANDSCAPE},{alias:"tablet.portrait",priority:2100,mediaQuery:b.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:b.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:b.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:b.WEB_PORTRAIT,overlapping:!0}],V=/(\.|-|_)/g;function Y(d){let f=d.length>0?d.charAt(0):"",t=d.length>1?d.slice(1):"";return f.toUpperCase()+t}const At=new i.OlP("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const d=(0,i.f3M)(W),f=(0,i.f3M)(Z),t=[].concat.apply([],(d||[]).map(n=>Array.isArray(n)?n:[n]));return function pt(d,f=[]){const t={};return d.forEach(s=>{t[s.alias]=s}),f.forEach(s=>{t[s.alias]?(0,j.kt)(t[s.alias],s):t[s.alias]=s}),function yt(d){return d.forEach(f=>{f.suffix||(f.suffix=function X(d){return d.replace(V,"|").split("|").map(Y).join("")}(f.alias),f.overlapping=!!f.overlapping)}),d}(Object.keys(t).map(s=>t[s]))}((f.disableDefaultBps?[]:dt).concat(f.addOrientationBps?Q:[]),t)}});let vt=(()=>{class d{constructor(t){this.findByMap=new Map,this.items=[...t].sort(st)}findByAlias(t){return t?this.findWithPredicate(t,s=>s.alias===t):null}findByQuery(t){return this.findWithPredicate(t,s=>s.mediaQuery===t)}get overlappings(){return this.items.filter(t=>t.overlapping)}get aliases(){return this.items.map(t=>t.alias)}get suffixes(){return this.items.map(t=>t?.suffix??"")}findWithPredicate(t,s){let n=this.findByMap.get(t);return n||(n=this.items.find(s)??null,this.findByMap.set(t,n)),n??null}}return d.\u0275fac=function(t){return new(t||d)(i.LFG(At))},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();const tt="print",Gt={alias:tt,mediaQuery:tt,priority:1e3};let Pt=(()=>{class d{constructor(t,s,n){this.breakpoints=t,this.layoutConfig=s,this._document=n,this.registeredBeforeAfterPrintHooks=!1,this.isPrintingBeforeAfterEvent=!1,this.beforePrintEventListeners=[],this.afterPrintEventListeners=[],this.formerActivations=null,this.isPrinting=!1,this.queue=new Et,this.deactivations=[]}withPrintQuery(t){return[...t,tt]}isPrintEvent(t){return t.mediaQuery.startsWith(tt)}get printAlias(){return[...this.layoutConfig.printWithBreakpoints??[]]}get printBreakPoints(){return this.printAlias.map(t=>this.breakpoints.findByAlias(t)).filter(t=>null!==t)}getEventBreakpoints({mediaQuery:t}){const s=this.breakpoints.findByQuery(t);return(s?[...this.printBreakPoints,s]:this.printBreakPoints).sort(K)}updateEvent(t){let s=this.breakpoints.findByQuery(t.mediaQuery);return this.isPrintEvent(t)&&(s=this.getEventBreakpoints(t)[0],t.mediaQuery=s?.mediaQuery??""),rt(t,s)}registerBeforeAfterPrintHooks(t){if(!this._document.defaultView||this.registeredBeforeAfterPrintHooks)return;this.registeredBeforeAfterPrintHooks=!0;const s=()=>{this.isPrinting||(this.isPrintingBeforeAfterEvent=!0,this.startPrinting(t,this.getEventBreakpoints(new $(!0,tt))),t.updateStyles())},n=()=>{this.isPrintingBeforeAfterEvent=!1,this.isPrinting&&(this.stopPrinting(t),t.updateStyles())};this._document.defaultView.addEventListener("beforeprint",s),this._document.defaultView.addEventListener("afterprint",n),this.beforePrintEventListeners.push(s),this.afterPrintEventListeners.push(n)}interceptEvents(t){return s=>{this.isPrintEvent(s)?s.matches&&!this.isPrinting?(this.startPrinting(t,this.getEventBreakpoints(s)),t.updateStyles()):!s.matches&&this.isPrinting&&!this.isPrintingBeforeAfterEvent&&(this.stopPrinting(t),t.updateStyles()):this.collectActivations(t,s)}}blockPropagation(){return t=>!(this.isPrinting||this.isPrintEvent(t))}startPrinting(t,s){this.isPrinting=!0,this.formerActivations=t.activatedBreakpoints,t.activatedBreakpoints=this.queue.addPrintBreakpoints(s)}stopPrinting(t){t.activatedBreakpoints=this.deactivations,this.deactivations=[],this.formerActivations=null,this.queue.clear(),this.isPrinting=!1}collectActivations(t,s){if(!this.isPrinting||this.isPrintingBeforeAfterEvent){if(!this.isPrintingBeforeAfterEvent)return void(this.deactivations=[]);if(!s.matches){const n=this.breakpoints.findByQuery(s.mediaQuery);if(n){const u=this.formerActivations&&this.formerActivations.includes(n),v=!this.formerActivations&&t.activatedBreakpoints.includes(n);(u||v)&&(this.deactivations.push(n),this.deactivations.sort(K))}}}}ngOnDestroy(){this._document.defaultView&&(this.beforePrintEventListeners.forEach(t=>this._document.defaultView.removeEventListener("beforeprint",t)),this.afterPrintEventListeners.forEach(t=>this._document.defaultView.removeEventListener("afterprint",t)))}}return d.\u0275fac=function(t){return new(t||d)(i.LFG(vt),i.LFG(Z),i.LFG(_.K0))},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();class Et{constructor(){this.printBreakpoints=[]}addPrintBreakpoints(f){return f.push(Gt),f.sort(K),f.forEach(t=>this.addBreakpoint(t)),this.printBreakpoints}addBreakpoint(f){f&&void 0===this.printBreakpoints.find(s=>s.mediaQuery===f.mediaQuery)&&(this.printBreakpoints=function Yt(d){return d?.mediaQuery.startsWith(tt)??!1}(f)?[f,...this.printBreakpoints]:[...this.printBreakpoints,f])}clear(){this.printBreakpoints=[]}}let Dt=(()=>{class d{constructor(t,s,n){this.matchMedia=t,this.breakpoints=s,this.hook=n,this._useFallbacks=!0,this._activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new P.x,this.observeActivations()}get activatedAlias(){return this.activatedBreakpoints[0]?.alias??""}set activatedBreakpoints(t){this._activatedBreakpoints=[...t]}get activatedBreakpoints(){return[...this._activatedBreakpoints]}set useFallbacks(t){this._useFallbacks=t}onMediaChange(t){const s=this.findByQuery(t.mediaQuery);if(s){t=rt(t,s);const n=this.activatedBreakpoints.indexOf(s);t.matches&&-1===n?(this._activatedBreakpoints.push(s),this._activatedBreakpoints.sort(K),this.updateStyles()):!t.matches&&-1!==n&&(this._activatedBreakpoints.splice(n,1),this._activatedBreakpoints.sort(K),this.updateStyles())}}init(t,s,n,u,v=[]){St(this.updateMap,t,s,n),St(this.clearMap,t,s,u),this.buildElementKeyMap(t,s),this.watchExtraTriggers(t,s,v)}getValue(t,s,n){const u=this.elementMap.get(t);if(u){const v=void 0!==n?u.get(n):this.getActivatedValues(u,s);if(v)return v.get(s)}}hasValue(t,s){const n=this.elementMap.get(t);if(n){const u=this.getActivatedValues(n,s);if(u)return void 0!==u.get(s)||!1}return!1}setValue(t,s,n,u){let v=this.elementMap.get(t);if(v){const h=(v.get(u)??new Map).set(s,n);v.set(u,h),this.elementMap.set(t,v)}else v=(new Map).set(u,(new Map).set(s,n)),this.elementMap.set(t,v);const l=this.getValue(t,s);void 0!==l&&this.updateElement(t,s,l)}trackValue(t,s){return this.subject.asObservable().pipe((0,T.h)(n=>n.element===t&&n.key===s))}updateStyles(){this.elementMap.forEach((t,s)=>{const n=new Set(this.elementKeyMap.get(s));let u=this.getActivatedValues(t);u&&u.forEach((v,l)=>{this.updateElement(s,l,v),n.delete(l)}),n.forEach(v=>{if(u=this.getActivatedValues(t,v),u){const l=u.get(v);this.updateElement(s,v,l)}else this.clearElement(s,v)})})}clearElement(t,s){const n=this.clearMap.get(t);if(n){const u=n.get(s);u&&(u(),this.subject.next({element:t,key:s,value:""}))}}updateElement(t,s,n){const u=this.updateMap.get(t);if(u){const v=u.get(s);v&&(v(n),this.subject.next({element:t,key:s,value:n}))}}releaseElement(t){const s=this.watcherMap.get(t);s&&(s.forEach(u=>u.unsubscribe()),this.watcherMap.delete(t));const n=this.elementMap.get(t);n&&(n.forEach((u,v)=>n.delete(v)),this.elementMap.delete(t))}triggerUpdate(t,s){const n=this.elementMap.get(t);if(n){const u=this.getActivatedValues(n,s);u&&(s?this.updateElement(t,s,u.get(s)):u.forEach((v,l)=>this.updateElement(t,l,v)))}}buildElementKeyMap(t,s){let n=this.elementKeyMap.get(t);n||(n=new Set,this.elementKeyMap.set(t,n)),n.add(s)}watchExtraTriggers(t,s,n){if(n&&n.length){let u=this.watcherMap.get(t);if(u||(u=new Map,this.watcherMap.set(t,u)),!u.get(s)){const l=(0,w.T)(...n).subscribe(()=>{const h=this.getValue(t,s);this.updateElement(t,s,h)});u.set(s,l)}}}findByQuery(t){return this.breakpoints.findByQuery(t)}getActivatedValues(t,s){for(let u=0;u<this.activatedBreakpoints.length;u++){const l=t.get(this.activatedBreakpoints[u].alias);if(l&&(void 0===s||l.has(s)&&null!=l.get(s)))return l}if(!this._useFallbacks)return;const n=t.get("");return void 0===s||n&&n.has(s)?n:void 0}observeActivations(){const t=this.breakpoints.items.map(s=>s.mediaQuery);this.hook.registerBeforeAfterPrintHooks(this),this.matchMedia.observe(this.hook.withPrintQuery(t)).pipe((0,H.b)(this.hook.interceptEvents(this)),(0,T.h)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return d.\u0275fac=function(t){return new(t||d)(i.LFG(q),i.LFG(vt),i.LFG(Pt))},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();function St(d,f,t,s){if(void 0!==s){const n=d.get(f)??new Map;n.set(t,s),d.set(f,n)}}let Ot=(()=>{class d{constructor(t,s,n,u){this.elementRef=t,this.styleBuilder=s,this.styler=n,this.marshal=u,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new P.x,this.styleCache=new Map}get parentElement(){return this.elementRef.nativeElement.parentElement}get nativeElement(){return this.elementRef.nativeElement}get activatedValue(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)}set activatedValue(t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,this.marshal.activatedAlias)}ngOnChanges(t){Object.keys(t).forEach(s=>{if(-1!==this.inputs.indexOf(s)){const n=s.split(".").slice(1).join(".");this.setValue(t[s].currentValue,n)}})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}init(t=[]){this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),t)}addStyles(t,s){const n=this.styleBuilder,u=n.shouldCache;let v=this.styleCache.get(t);(!v||!u)&&(v=n.buildStyles(t,s),u&&this.styleCache.set(t,v)),this.mru={...v},this.applyStyleToElement(v),n.sideEffect(t,v,s)}clearStyles(){Object.keys(this.mru).forEach(t=>{this.mru[t]=""}),this.applyStyleToElement(this.mru),this.mru={},this.currentValue=void 0}triggerUpdate(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}getFlexFlowDirection(t,s=!1){if(t){const[n,u]=this.styler.getFlowDirection(t);if(!u&&s){const v=(0,j.Ar)(n);this.styler.applyStyleToElements(v,[t])}return n.trim()}return"row"}hasWrap(t){return this.styler.hasWrap(t)}applyStyleToElement(t,s,n=this.nativeElement){this.styler.applyStyleToElement(n,t,s)}setValue(t,s){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,s)}updateWithValue(t){this.currentValue!==t&&(this.addStyles(t),this.currentValue=t)}}return d.\u0275fac=function(t){return new(t||d)(i.Y36(i.SBq),i.Y36(ct),i.Y36(ot),i.Y36(Dt))},d.\u0275dir=i.lG2({type:d,features:[i.TTD]}),d})();class Bt extends EventTarget{constructor(f){super(),this._mediaQuery=f,this._isActive=!1,this._listeners=[],this.onchange=null}get matches(){return this._isActive}get media(){return this._mediaQuery}destroy(){this.deactivate(),this._listeners=[]}activate(){return this._isActive||(this._isActive=!0,this._listeners.forEach(f=>{f.call(this,{matches:this.matches,media:this.media})})),this}deactivate(){return this._isActive&&(this._isActive=!1,this._listeners.forEach(f=>{f.call(this,{matches:this.matches,media:this.media})})),this}addListener(f){-1===this._listeners.indexOf(f)&&this._listeners.push(f),this._isActive&&f.call(this,{matches:this.matches,media:this.media})}removeListener(f){}dispatchEvent(f){return!1}}function It(d,f="1",t="1"){let s=[f,t,d],n=d.indexOf("calc");if(n>0){s[2]=kt(d.substring(n).trim());let u=d.substr(0,n).trim().split(" ");2==u.length&&(s[0]=u[0],s[1]=u[1])}else if(0==n)s[2]=kt(d.trim());else{let u=d.split(" ");s=3===u.length?u:[f,t,d]}return s}function kt(d){return d.replace(/[\s]/g,"").replace(/[\/\*\+\-]/g," $& ")}const Mt="x";function Tt(d,f){if(void 0===f)return d;const t=s=>{const n=+s.slice(0,-Mt.length);return d.endsWith(Mt)&&!isNaN(n)?`${n*f.value}${f.unit}`:d};return d.includes(" ")?d.split(" ").map(t).join(" "):t(d)}},5829:(Rt,z,M)=>{M.d(z,{aT:()=>gt,oO:()=>nt});var i=M(4650),_=M(2233),C=M(6895);M(1281),M(2722),M(1481);let I=(()=>{class m extends _.iR{constructor(p,A,b,Q,V,Y,X){super(p,null,A,b),this.ngClassInstance=X,this.DIRECTIVE_KEY="ngClass",this.ngClassInstance||(this.ngClassInstance=new C.mk(Q,V,p,Y)),this.init(),this.setValue("","")}set klass(p){this.ngClassInstance.klass=p,this.setValue(p,"")}updateWithValue(p){this.ngClassInstance.ngClass=p,this.ngClassInstance.ngDoCheck()}ngDoCheck(){this.ngClassInstance.ngDoCheck()}}return m.\u0275fac=function(p){return new(p||m)(i.Y36(i.SBq),i.Y36(_.RK),i.Y36(_.yB),i.Y36(i.ZZ4),i.Y36(i.aQg),i.Y36(i.Qsj),i.Y36(C.mk,10))},m.\u0275dir=i.lG2({type:m,inputs:{klass:["class","klass"]},features:[i.qOj]}),m})();const $=["ngClass","ngClass.xs","ngClass.sm","ngClass.md","ngClass.lg","ngClass.xl","ngClass.lt-sm","ngClass.lt-md","ngClass.lt-lg","ngClass.lt-xl","ngClass.gt-xs","ngClass.gt-sm","ngClass.gt-md","ngClass.gt-lg"];let nt=(()=>{class m extends I{constructor(){super(...arguments),this.inputs=$}}return m.\u0275fac=function(){let F;return function(A){return(F||(F=i.n5z(m)))(A||m)}}(),m.\u0275dir=i.lG2({type:m,selectors:[["","ngClass",""],["","ngClass.xs",""],["","ngClass.sm",""],["","ngClass.md",""],["","ngClass.lg",""],["","ngClass.xl",""],["","ngClass.lt-sm",""],["","ngClass.lt-md",""],["","ngClass.lt-lg",""],["","ngClass.lt-xl",""],["","ngClass.gt-xs",""],["","ngClass.gt-sm",""],["","ngClass.gt-md",""],["","ngClass.gt-lg",""]],inputs:{ngClass:"ngClass","ngClass.xs":"ngClass.xs","ngClass.sm":"ngClass.sm","ngClass.md":"ngClass.md","ngClass.lg":"ngClass.lg","ngClass.xl":"ngClass.xl","ngClass.lt-sm":"ngClass.lt-sm","ngClass.lt-md":"ngClass.lt-md","ngClass.lt-lg":"ngClass.lt-lg","ngClass.lt-xl":"ngClass.lt-xl","ngClass.gt-xs":"ngClass.gt-xs","ngClass.gt-sm":"ngClass.gt-sm","ngClass.gt-md":"ngClass.gt-md","ngClass.gt-lg":"ngClass.gt-lg"},features:[i.qOj]}),m})(),gt=(()=>{class m{}return m.\u0275fac=function(p){return new(p||m)},m.\u0275mod=i.oAB({type:m}),m.\u0275inj=i.cJS({imports:[_.IR]}),m})()},1576:(Rt,z,M)=>{M.d(z,{ae:()=>v,yH:()=>mt});var i=M(4650),_=M(445),C=M(2233),r=M(5863),P=(M(7579),M(2722));let st=(()=>{class l extends C.QI{constructor(a){super(),this.layoutConfig=a}buildStyles(a,x){let[c,D,...G]=a.split(" "),S=G.join(" ");const U=x.direction.indexOf("column")>-1?"column":"row",lt=(0,r.tj)(U)?"max-width":"max-height",_t=(0,r.tj)(U)?"min-width":"min-height",N=String(S).indexOf("calc")>-1,Wt=N||"auto"===S,qt=String(S).indexOf("%")>-1&&!N,Jt=String(S).indexOf("px")>-1||String(S).indexOf("rem")>-1||String(S).indexOf("em")>-1||String(S).indexOf("vw")>-1||String(S).indexOf("vh")>-1;let wt=N||Jt;c="0"==c?0:c,D="0"==D?0:D;const Ht=!c&&!D;let k={};const ut={"max-width":null,"max-height":null,"min-width":null,"min-height":null};switch(S||""){case"":S="row"===U?"0%":!1!==this.layoutConfig.useColumnBasisZero?"0.000000001px":"auto";break;case"initial":case"nogrow":c=0,S="auto";break;case"grow":S="100%";break;case"noshrink":D=0,S="auto";break;case"auto":break;case"none":c=0,D=0,S="auto";break;default:!wt&&!qt&&!isNaN(S)&&(S+="%"),"0%"===S&&(wt=!0),"0px"===S&&(S="0%"),k=(0,r.kt)(ut,N?{"flex-grow":c,"flex-shrink":D,"flex-basis":wt?S:"100%"}:{flex:`${c} ${D} ${wt?S:"100%"}`})}return k.flex||k["flex-grow"]||(k=(0,r.kt)(ut,N?{"flex-grow":c,"flex-shrink":D,"flex-basis":S}:{flex:`${c} ${D} ${S}`})),"0%"!==S&&"0px"!==S&&"0.000000001px"!==S&&"auto"!==S&&(k[_t]=Ht||wt&&c?S:null,k[lt]=Ht||!Wt&&D?S:null),k[_t]||k[lt]?x.hasWrap&&(k[N?"flex-basis":"flex"]=k[lt]?N?k[lt]:`${c} ${D} ${k[lt]}`:N?k[_t]:`${c} ${D} ${k[_t]}`):k=(0,r.kt)(ut,N?{"flex-grow":c,"flex-shrink":D,"flex-basis":S}:{flex:`${c} ${D} ${S}`}),(0,r.kt)(k,{"box-sizing":"border-box"})}}return l.\u0275fac=function(a){return new(a||l)(i.LFG(C.WU))},l.\u0275prov=i.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();const q=["fxFlex","fxFlex.xs","fxFlex.sm","fxFlex.md","fxFlex.lg","fxFlex.xl","fxFlex.lt-sm","fxFlex.lt-md","fxFlex.lt-lg","fxFlex.lt-xl","fxFlex.gt-xs","fxFlex.gt-sm","fxFlex.gt-md","fxFlex.gt-lg"];let xt=(()=>{class l extends C.iR{constructor(a,x,c,D,G){super(a,D,x,G),this.layoutConfig=c,this.marshal=G,this.DIRECTIVE_KEY="flex",this.direction=void 0,this.wrap=void 0,this.flexGrow="1",this.flexShrink="1",this.init()}get shrink(){return this.flexShrink}set shrink(a){this.flexShrink=a||"1",this.triggerReflow()}get grow(){return this.flexGrow}set grow(a){this.flexGrow=a||"1",this.triggerReflow()}ngOnInit(){this.parentElement&&(this.marshal.trackValue(this.parentElement,"layout").pipe((0,P.R)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)),this.marshal.trackValue(this.nativeElement,"layout-align").pipe((0,P.R)(this.destroySubject)).subscribe(this.triggerReflow.bind(this)))}onLayoutChange(a){const c=a.value.split(" ");this.direction=c[0],this.wrap=void 0!==c[1]&&"wrap"===c[1],this.triggerUpdate()}updateWithValue(a){void 0===this.direction&&(this.direction=this.getFlexFlowDirection(this.parentElement,!1!==this.layoutConfig.addFlexToParent)),void 0===this.wrap&&(this.wrap=this.hasWrap(this.parentElement));const c=this.direction,D=c.startsWith("row"),G=this.wrap;D&&G?this.styleCache=Ft:D&&!G?this.styleCache=ht:!D&&G?this.styleCache=gt:!D&&!G&&(this.styleCache=dt);const S=String(a).replace(";",""),U=(0,C.Ot)(S,this.flexGrow,this.flexShrink);this.addStyles(U.join(" "),{direction:c,hasWrap:G})}triggerReflow(){const a=this.activatedValue;if(void 0!==a){const x=(0,C.Ot)(a+"",this.flexGrow,this.flexShrink);this.marshal.updateElement(this.nativeElement,this.DIRECTIVE_KEY,x.join(" "))}}}return l.\u0275fac=function(a){return new(a||l)(i.Y36(i.SBq),i.Y36(C.RK),i.Y36(C.WU),i.Y36(st),i.Y36(C.yB))},l.\u0275dir=i.lG2({type:l,inputs:{shrink:["fxShrink","shrink"],grow:["fxGrow","grow"]},features:[i.qOj]}),l})(),mt=(()=>{class l extends xt{constructor(){super(...arguments),this.inputs=q}}return l.\u0275fac=function(){let h;return function(x){return(h||(h=i.n5z(l)))(x||l)}}(),l.\u0275dir=i.lG2({type:l,selectors:[["","fxFlex",""],["","fxFlex.xs",""],["","fxFlex.sm",""],["","fxFlex.md",""],["","fxFlex.lg",""],["","fxFlex.xl",""],["","fxFlex.lt-sm",""],["","fxFlex.lt-md",""],["","fxFlex.lt-lg",""],["","fxFlex.lt-xl",""],["","fxFlex.gt-xs",""],["","fxFlex.gt-sm",""],["","fxFlex.gt-md",""],["","fxFlex.gt-lg",""]],inputs:{fxFlex:"fxFlex","fxFlex.xs":"fxFlex.xs","fxFlex.sm":"fxFlex.sm","fxFlex.md":"fxFlex.md","fxFlex.lg":"fxFlex.lg","fxFlex.xl":"fxFlex.xl","fxFlex.lt-sm":"fxFlex.lt-sm","fxFlex.lt-md":"fxFlex.lt-md","fxFlex.lt-lg":"fxFlex.lt-lg","fxFlex.lt-xl":"fxFlex.lt-xl","fxFlex.gt-xs":"fxFlex.gt-xs","fxFlex.gt-sm":"fxFlex.gt-sm","fxFlex.gt-md":"fxFlex.gt-md","fxFlex.gt-lg":"fxFlex.gt-lg"},features:[i.qOj]}),l})();const ht=new Map,dt=new Map,Ft=new Map,gt=new Map;let v=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=i.oAB({type:l}),l.\u0275inj=i.cJS({imports:[C.IR,_.vT]}),l})()}}]);