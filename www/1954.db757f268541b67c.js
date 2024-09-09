"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1954],{1954:(R,v,c)=>{c.r(v),c.d(v,{ion_datetime_button:()=>B});var b=c(5841),d=c(1583),x=c(7458),f=c(5259),C=c(9067),P=c(7781),l=c(5111);const B=(()=>{let g=class{constructor(s){var r=this;(0,d.r)(this,s),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=e=>null==e?[]:Array.isArray(e)?e:[e],this.setDateTimeText=()=>{var e,n,a,i,o;const{datetimeEl:m,datetimePresentation:I}=this;if(!m)return;const{value:M,locale:u,formatOptions:t,hourCycle:A,preferWheel:L,multiple:N,titleSelectedDatesFormatter:_}=m,h=this.getParsedDateValues(M),y=(0,l.s)(h.length>0?h:[(0,l.x)()]);if(!y)return;const p=y[0],E=(0,l.L)(u,A);switch(this.dateText=this.timeText=void 0,I){case"date-time":case"time-date":const T=(0,l.N)(u,p,null!==(e=null==t?void 0:t.date)&&void 0!==e?e:{month:"short",day:"numeric",year:"numeric"}),D=(0,l.M)(u,p,E,null==t?void 0:t.time);L?this.dateText=`${T} ${D}`:(this.dateText=T,this.timeText=D);break;case"date":if(N&&1!==h.length){let k=`${h.length} days`;if(void 0!==_)try{k=_(h)}catch(j){(0,f.a)("Exception in provided `titleSelectedDatesFormatter`: ",j)}this.dateText=k}else this.dateText=(0,l.N)(u,p,null!==(n=null==t?void 0:t.date)&&void 0!==n?n:{month:"short",day:"numeric",year:"numeric"});break;case"time":this.timeText=(0,l.M)(u,p,E,null==t?void 0:t.time);break;case"month-year":this.dateText=(0,l.N)(u,p,null!==(a=null==t?void 0:t.date)&&void 0!==a?a:{month:"long",year:"numeric"});break;case"month":this.dateText=(0,l.N)(u,p,null!==(i=null==t?void 0:t.time)&&void 0!==i?i:{month:"long"});break;case"year":this.dateText=(0,l.N)(u,p,null!==(o=null==t?void 0:t.time)&&void 0!==o?o:{year:"numeric"})}},this.waitForDatetimeChanges=(0,b.A)(function*(){const{datetimeEl:e}=r;return e?new Promise(n=>{(0,x.a)(e,"ionRender",n,{once:!0})}):Promise.resolve()}),this.handleDateClick=function(){var e=(0,b.A)(function*(n){const{datetimeEl:a,datetimePresentation:i}=r;if(!a)return;let o=!1;switch(i){case"date-time":case"time-date":!a.preferWheel&&"date"!==a.presentation&&(a.presentation="date",o=!0)}r.selectedButton="date",r.presentOverlay(n,o,r.dateTargetEl)});return function(n){return e.apply(this,arguments)}}(),this.handleTimeClick=e=>{const{datetimeEl:n,datetimePresentation:a}=this;if(!n)return;let i=!1;switch(a){case"date-time":case"time-date":"time"!==n.presentation&&(n.presentation="time",i=!0)}this.selectedButton="time",this.presentOverlay(e,i,this.timeTargetEl)},this.presentOverlay=function(){var e=(0,b.A)(function*(n,a,i){const{overlayEl:o}=r;o&&("ION-POPOVER"===o.tagName?(a&&(yield r.waitForDatetimeChanges()),o.present(Object.assign(Object.assign({},n),{detail:{ionShadowTarget:i}}))):o.present())});return function(n,a,i){return e.apply(this,arguments)}}(),this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}componentWillLoad(){var s=this;return(0,b.A)(function*(){const{datetime:r}=s;if(!r)return void(0,f.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",s.el);const e=s.datetimeEl=document.getElementById(r);if(!e)return void(0,f.a)(`No ion-datetime instance found for ID '${r}'.`,s.el);if("ION-DATETIME"!==e.tagName)return void(0,f.a)(`Expected an ion-datetime instance for ID '${r}' but received '${e.tagName.toLowerCase()}' instead.`,e);new IntersectionObserver(i=>{s.datetimeActive=i[0].isIntersecting},{threshold:.01}).observe(e);const a=s.overlayEl=e.closest("ion-modal, ion-popover");a&&a.classList.add("ion-datetime-button-overlay"),(0,x.c)(e,()=>{const i=s.datetimePresentation=e.presentation||"date-time";switch(s.setDateTimeText(),(0,x.a)(e,"ionValueChange",s.setDateTimeText),i){case"date-time":case"date":case"month-year":case"month":case"year":s.selectedButton="date";break;case"time-date":case"time":s.selectedButton="time"}})})()}render(){const{color:s,dateText:r,timeText:e,selectedButton:n,datetimeActive:a,disabled:i}=this,o=(0,P.b)(this);return(0,d.h)(d.f,{key:"0be955404133adbb31ae16a6599014bb29765f19",class:(0,C.c)(s,{[o]:!0,[`${n}-active`]:a,"datetime-button-disabled":i})},r&&(0,d.h)("button",{key:"812dcb50b17768cc13a5cfa0bcce8b113cee0f09",class:"ion-activatable",id:"date-button","aria-expanded":a?"true":"false",onClick:this.handleDateClick,disabled:i,part:"native",ref:m=>this.dateTargetEl=m},(0,d.h)("slot",{key:"46930c740a32a78502df9e651f9bd5914d6a9fea",name:"date-target"},r),"md"===o&&(0,d.h)("ion-ripple-effect",{key:"0602999cc8435dc37aa22da7f5531bc8cb71e1b4"})),e&&(0,d.h)("button",{key:"ecdd21da5181ecbdce03209f9f6673b7dcbc1f78",class:"ion-activatable",id:"time-button","aria-expanded":a?"true":"false",onClick:this.handleTimeClick,disabled:i,part:"native",ref:m=>this.timeTargetEl=m},(0,d.h)("slot",{key:"b5b093b5166d12d11e27360788edaac916d44390",name:"time-target"},e),"md"===o&&(0,d.h)("ion-ripple-effect",{key:"70bb3a04f4748d13233eeb257503968dbd1161a9"})))}get el(){return(0,d.i)(this)}};return g.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:7px;padding-bottom:7px}:host button.ion-activated{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}"},g})()}}]);