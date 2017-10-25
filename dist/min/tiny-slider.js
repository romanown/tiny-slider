var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=k.style.overflow,e.style.background="",e.style.overflow=k.style.overflow="hidden",k.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),k.style.overflow=t,k.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function d(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function f(e,t){return e.className.indexOf(t)>=0}function v(e,t){f(e,t)||(e.className+=" "+t)}function h(e,t){f(e,t)&&(e.className=e.className.replace(t,""))}function p(e,t){return e.hasAttribute(t)}function m(e,t){return e.getAttribute(t)}function y(e){return void 0!==e.item}function g(e,t){if(e=y(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function x(e,t){e=y(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function b(e){p(e,"hidden")||g(e,{hidden:""})}function T(e){p(e,"hidden")&&x(e,"hidden")}function E(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function C(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function w(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function D(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&I;e.addEventListener(n,t[n],i)}}function O(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&I;e.removeEventListener(n,t[n],i)}}function N(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function A(e,t,n,i,a,r,o){function s(){r-=l,u+=d,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var k=document.documentElement,P=!1;try{var M=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,M)}catch(e){}var I=!!P&&{passive:!0},W=navigator.userAgent,S=!0,L=localStorage;try{L.tnsApp?L.tnsApp!==W&&(L.tnsApp=W,["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){L.removeItem(e)})):L.tnsApp=W}catch(e){S=!1}var H=document,R=window,B={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},z=t(L.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),S),j=t(L.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),S),q=t(L.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),S),G=t(L.tTf)||n("tTf",C(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),S),F=t(L.tTDu)||n("tTDu",C(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),S),U=t(L.tTDe)||n("tTDe",C(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),S),V=t(L.tADu)||n("tADu",C(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),S),X=t(L.tADe)||n("tADe",C(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),S),K=t(L.tTE)||n("tTE",w(F,"Transition"),S),Y=t(L.tAE)||n("tAE",w(V,"Animation"),S);return q||(j=!1),function(t){function n(e){var n=t[e];return!n&&ot&&rt.indexOf(e)>=0&&ot.forEach(function(t){at[t][e]&&(n=!0)}),n}function a(e,n){n=n?n:it;var i;if("items"===e&&a("fixedWidth"))i=Math.floor(n/(a("fixedWidth")+a("gutter")));else if("slideBy"!==e||Ue)if("edgePadding"!==e||Ue)if("autoHeight"!==e||Ue&&"outer"!==pt){if(i=t[e],ot&&rt.indexOf(e)>=0)for(var r=0,o=ot.length;r<o;r++){var s=ot[r];if(!(n>=s))break;e in at[s]&&(i=at[s][e])}}else i=!0;else i=!1;else i="page";return"items"===e&&(i=Math.max(1,Math.min(nt,i))),"slideBy"===e&&"page"===i&&(i=a("items")),i}function r(e){return z?z+"("+100*e+"% / "+At+")":100*e/At+"%"}function o(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(it%(n+t)+t)/2+"px":Je?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r=Je?"right":"bottom";i="margin-"+r+": -"+t+"px;"}return i}function y(e,t,n){n=Math.min(nt,n);return e?(e+t)*At+"px":z?z+"("+100*At+"% / "+n+")":100*At/n+"%"}function C(e,t,n){n=Math.min(nt,n);var i="";if(Je){if(i="width:",e)i+=e+t+"px";else{var a=Ue?At:Math.min(nt,n);i+=z?z+"(100% / "+a+")":100/a+"%"}i+=Kt+";"}return i}function w(e){var t="";if(e!==!1){t=(Je?"padding-":"margin-")+(Je?"right":"bottom")+": "+e+"px;"}return t}function k(e){e=e||R.event,clearTimeout(dt),dt=setTimeout(function(){it!==Ze.clientWidth&&(P(),"outer"===pt&&qt.emit("outerResized",ze(e)))},100)}function P(){var e=st,n=St,i=vt,r=Xt;if(it=Ze.clientWidth,Qe=$e.clientWidth,ot&&(st=M()),e!==st||gt){var s=xt,u=Ct,d=gt,f=yt,v=mt,h=Vt,p=st>0?at[ot[st-1]]:t;if(vt=a("items"),ht=a("slideBy"),Vt=a("disable"),Xt=!!Vt||nt<=vt,vt!==i&&(Bt=At-vt-Ht,Un()),Vt!==h&&W(Vt),Xt!==r&&Xt&&(St=Ue?Nt:0),e!==st&&(bt=p.speed||a("speed"),yt=p.edgePadding||a("edgePadding"),mt=p.gutter||a("gutter"),gt=p.fixedWidth||a("fixedWidth"),Vt||gt===d||ce(),(Ct=a("autoHeight"))!==u&&(Ct||($e.style.height=""))),xt=!Xt&&(p.arrowKeys||a("arrowKeys")),xt!==s&&(xt?D(H,$t):O(H,$t)),tn){var m=fn,g=vn;fn=!Xt&&(p.controls||a("controls")),vn=p.controlsText||a("controlsText"),fn!==m&&(fn?T(hn):b(hn)),vn!==g&&(ln.innerHTML=vn[0],cn.innerHTML=vn[1])}if(nn){var x=mn;mn=!Xt&&(p.nav||a("nav")),mn!==x&&(mn?(T(yn),Be()):b(yn))}if(rn){var E=zn;zn=!Xt&&(p.touch||a("touch")),zn!==E&&Ue&&(zn?D(_e,_t):O(_e,_t))}if(on){var N=Gn;Gn=!Xt&&(p.mouseDrag||a("mouseDrag")),Gn!==N&&Ue&&(Gn?D(_e,en):O(_e,en))}if(an){var A=Dn,k=kn,P=Sn,S=An;if(Xt?Dn=kn=Sn=!1:(Dn=p.autoplay||a("autoplay"),Dn?(kn=p.autoplayHoverPause||a("autoplayHoverPause"),Sn=p.autoplayResetOnVisibility||a("autoplayResetOnVisibility")):kn=Sn=!1),An=p.autoplayText||a("autoplayText"),On=p.autoplayTimeout||a("autoplayTimeout"),Dn!==A&&(Dn?(Pn&&T(Pn),Mn||xe()):(Pn&&b(Pn),Mn&&be())),kn!==k&&(kn?D(_e,Jt):O(_e,Jt)),Sn!==P&&(Sn?D(H,Zt):O(H,Zt)),Pn&&An!==S){var L=Dn?1:0,R=Pn.innerHTML,B=R.length-S[L].length;R.substring(B)===S[L]&&(Pn.innerHTML=R.substring(0,B)+An[L])}}if(!q){yt===f&&mt===v||($e.style.cssText=o(yt,mt,gt)),Ue&&Je&&(gt!==d||mt!==v||vt!==i)&&(_e.style.width=y(gt,mt,vt));var z=C(gt,mt,vt);mt!==v&&(z+=w(mt)),z.length>0&&(wt.removeRule(c(wt)-1),l(wt,"#"+Ut+" > .tns-item",z,c(wt))),gt||St!==n||de(0)}St!==n&&(qt.emit("indexChanged",ze()),de(0),Lt=St),vt!==i&&(Q(),te(),oe(),Be(),ne(),navigator.msMaxTouchPoints&&ee())}Je||Vt||(_(),He(),ce()),I(),J()}function M(){return st=0,ot.forEach(function(e,t){it>=e&&(st=t+lt)}),st}function I(){if(gt&&Nt){var e="tns-transparent";if(Xt){if(!f(tt[0],e)){yt&&($e.style.margin="0");for(var t=Nt;t--;)v(tt[t],e),v(tt[At-t-1],e)}}else if(yt&&(it<=gt+mt?"0px"!==$e.style.margin&&($e.style.margin="0"):$e.style.cssText=o(yt,mt,gt)),f(tt[0],e))for(var t=Nt;t--;)h(tt[t],e),h(tt[At-t-1],e)}}function W(e){var t=tt.length;if(e){if(wt.disabled=!0,_e.className=_e.className.replace(Ft.substring(1),""),_e.style="",Et)for(var n=Nt;n--;)Ue&&b(tt[n]),b(tt[t-n-1]);if(Je&&Ue||($e.style=""),!Ue)for(var i=St;i<St+nt;i++){var a=tt[i];a.style="",h(a,Ve),h(a,Ye)}}else{if(wt.disabled=!1,_e.className+=Ft,Je||_(),ce(),Et)for(var n=Nt;n--;)Ue&&T(tt[n]),T(tt[t-n-1]);if(!Ue)for(var i=St;i<St+nt;i++){var a=tt[i],r=i<St+vt?Ve:Ye;a.style.left=100*(i-St)/vt+"%",v(a,r)}}}function S(){Mn&&(be(),In=!0)}function L(){!Mn&&In&&(xe(),In=!1)}function Q(){if(Dt&&!Vt){var e=St,t=St+vt;for(yt&&(e-=1,t+=1);e<t;e++)[].forEach.call(tt[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[K]=function(e){e.stopPropagation()},D(e,t),f(e,"loaded")||(e.src=m(e,"data-src"),v(e,"loaded"))})}}function J(){if(Ct&&!Vt){for(var e=[],t=St;t<St+vt;t++)[].forEach.call(tt[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?$():Z(e)}}function Z(e){e.forEach(function(t,n){E(t)&&e.splice(n,1)}),0===e.length?$():setTimeout(function(){Z(e)},16)}function $(){for(var e,t=[],n=St;n<St+vt;n++)t.push(tt[n].offsetHeight);e=Math.max.apply(null,t),$e.style.height!==e&&(F&&se(bt),$e.style.height=e+"px")}function _(){ut=[0];for(var e,t=tt[0].getBoundingClientRect().top,n=1;n<At;n++)e=tt[n].getBoundingClientRect().top,ut.push(e-t)}function ee(){Ze.style.msScrollSnapPointsX="snapInterval(0%, "+100/vt+"%)"}function te(){for(var e=At;e--;){var t=tt[e];e>=St&&e<St+vt?p(t,"tabindex")&&(g(t,{"aria-hidden":"false"}),x(t,["tabindex"]),v(t,sn)):(p(t,"tabindex")||g(t,{"aria-hidden":"true",tabindex:"-1"}),f(t,sn)&&h(t,sn))}}function ne(){if(mn&&(Tn=bn!==-1?bn:(St-Ht)%nt,bn=-1,Tn!==En)){var e=pn[En],t=pn[Tn];g(e,{tabindex:"-1","aria-selected":"false"}),g(t,{tabindex:"0","aria-selected":"true"}),h(e,Cn),v(t,Cn)}}function ie(e){return"button"===e.nodeName.toLowerCase()}function ae(e){return"true"===e.getAttribute("aria-disabled")}function re(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function oe(){if(fn&&!Et){var e=un?ln.disabled:ae(ln),t=dn?cn.disabled:ae(cn),n=St===Rt,i=!Tt&&St===Bt;n&&!e&&re(un,ln,!0),!n&&e&&re(un,ln,!1),i&&!t&&re(dn,cn,!0),!i&&t&&re(dn,cn,!1)}}function se(e,t){e=e?e/1e3+"s":"",t=t||_e,t.style[F]=e,Ue||(t.style[V]=e),Je||($e.style[F]=e)}function le(){var e;if(Je)if(gt)e=-(gt+mt)*St+"px";else{var t=G?At:vt;e=100*-St/t+"%"}else e=-ut[St]+"px";return e}function ce(e){e||(e=le()),_e.style[Mt]=It+e+Wt}function ue(e,t,n,i){for(var a=e,r=e+vt;a<r;a++){var o=tt[a];i||(o.style.left=100*(a-St)/vt+"%"),F&&se(bt,o),Ke&&U&&(o.style[U]=o.style[X]=Ke*(a-e)/1e3+"s"),h(o,t),v(o,n),i&&Ot.push(o)}}function de(e,t){void 0===e&&(e=bt),F&&se(e),Vn(e,t),te(),mn&&gn.indexOf(St%nt)<0&&Be(),ne(),oe(),Q()}function fe(){Pt&&Un(),St!==Lt&&(qt.emit("indexChanged",ze()),qt.emit("transitionStart",ze()),zt=!0,de())}function ve(e){return e.toLowerCase().replace(/-/g,"")}function he(e){if(Ue||zt){if(qt.emit("transitionEnd",ze(e)),!Ue&&Ot.length>0)for(var t=0;t<vt;t++){var n=Ot[t];n.style.left="",F&&se(0,n),Ke&&U&&(n.style[U]=n.style[X]=""),h(n,Xe),v(n,Ye)}if(!e||!Ue&&e.target.parentNode===_e||e.target===_e&&ve(e.propertyName)===ve(Mt)){if(!Pt){var i=St;Un(),St!==i&&(F&&se(0),ce(),qt.emit("indexChanged",ze()))}J(),"inner"===pt&&qt.emit("innerLoaded",ze()),zt=!1,En=Tn,Lt=St}}}function pe(e){if(!Xt)if("prev"===e)me(null,-1);else if("next"===e)me(null,1);else if(!zt){var t=St%nt,i=0;if(!Et&&n("edgePadding")&&t--,t<0&&(t+=nt),"first"===e)i=-t;else if("last"===e)i=nt-vt-t;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%nt;a<0&&(a+=nt),!Et&&yt&&(a+=1),i=a-t}St+=i,St%nt!=Lt%nt&&fe()}}function me(e,t){if(!zt){if(!t){e=e||R.event;for(var n=e.target||e.srcElement;n!==hn&&[ln,cn].indexOf(n)<0;)n=n.parentNode;n===ln?t=-1:n===cn&&(t=1)}t===-1?St-=ht:1===t&&(Tt&&St===Bt?pe(0):St+=ht),fe()}}function ye(e){if(!zt){e=e||R.event;for(var t,n=e.target||e.srcElement;n!==yn&&!p(n,"data-nav");)n=n.parentNode;p(n,"data-nav")&&(t=bn=[].indexOf.call(pn,n),pe(t))}}function ge(e,t){g(Pn,{"data-action":e}),Pn.innerHTML=Wn[0]+e+Wn[1]+t}function xe(){Ee(),Pn&&ge("stop",An[1]),Mn=!0}function be(){Te(),Pn&&ge("start",An[0]),Mn=!1}function Te(){Mn="paused",clearInterval(wn)}function Ee(){Mn!==!0&&(clearInterval(wn),wn=setInterval(function(){me(null,Nn)},On))}function Ce(){Mn?be():xe()}function we(){Ln!=H.hidden&&Mn!==!1&&(H.hidden?Te():Ee()),Ln=H.hidden}function De(e){switch(e=e||R.event,e.keyCode){case B.LEFT:me(null,-1);break;case B.RIGHT:me(null,1)}}function Oe(e){switch(e=e||R.event,e.keyCode){case B.LEFT:case B.UP:case B.PAGEUP:ln.disabled||me(null,-1);break;case B.RIGHT:case B.DOWN:case B.PAGEDOWN:cn.disabled||me(null,1);break;case B.HOME:pe(0);break;case B.END:pe(nt-1)}}function Ne(e){e.focus()}function Ae(e){function n(e){return t.navContainer?e:gn[e]}var i=H.activeElement;if(p(i,"data-nav")){e=e||R.event;var a=e.keyCode,r=[].indexOf.call(pn,i),o=gn.length,s=gn.indexOf(r);switch(t.navContainer&&(o=nt,s=r),a){case B.LEFT:case B.PAGEUP:s>0&&Ne(pn[n(s-1)]);break;case B.UP:case B.HOME:s>0&&Ne(pn[n(0)]);break;case B.RIGHT:case B.PAGEDOWN:s<o-1&&Ne(pn[n(s+1)]);break;case B.DOWN:case B.END:s<o-1&&Ne(pn[n(o-1)]);break;case B.ENTER:case B.SPACE:bn=r,pe(r)}}}function ke(){de(0,_e.scrollLeft()),Lt=St}function Pe(e){return e.target||e.srcElement}function Me(e){return e.type.indexOf("touch")>=0}function Ie(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function We(e){if(!zt){e=e||R.event;var t;Me(e)?(t=e.changedTouches[0],qt.emit("touchStart",ze(e))):(t=e,Ie(e),qt.emit("dragStart",ze(e))),jn=parseInt(t.clientX),qn=parseInt(t.clientY),Hn=parseFloat(_e.style[Mt].replace(It,"").replace(Wt,""))}}function Se(e){if(!zt&&(e=e||R.event,null!==jn)){var n;if(Me(e)?n=e.changedTouches[0]:(n=e,Ie(e)),Rn=parseInt(n.clientX)-jn,Bn=parseInt(n.clientY)-qn,d(u(Bn,Rn),15)===t.axis&&Rn){Me(e)?qt.emit("touchMove",ze(e)):(Fn||(Fn=!0),qt.emit("dragMove",ze(e))),ft||(ft=!0);var i=Hn;if(Je)if(gt)i+=Rn,i+="px";else{var a=G?Rn*vt*100/(Qe*At):100*Rn/Qe;i+=a,i+="%"}else i+=Bn,i+="px";G&&se(0),_e.style[Mt]=It+i+Wt}}}function Le(e){if(!zt&&(e=e||R.event,ft)){ft=!1;var t;if(Me(e)?(t=e.changedTouches[0],qt.emit("touchEnd",ze(e))):(t=e,qt.emit("dragEnd",ze(e))),Rn=parseInt(t.clientX)-jn,Bn=parseInt(t.clientY)-qn,jn=qn=null,Je){var n=-Rn*vt/Qe;n=Rn>0?Math.floor(n):Math.ceil(n),St+=n}else{var i=-(Hn+Bn);if(i<=0)St=Rt;else if(i>=ut[ut.length-1])St=Bt;else{var a=0;do{a++,St=Bn<0?a+1:a}while(a<At&&i>=ut[a+1])}}if(fe(),Fn){Fn=!1;var r=Pe(e);D(r,{click:function e(t){Ie(t),O(r,{click:e})}})}}}function He(){$e.style.height=ut[St+vt]-ut[St]+"px"}function Re(){gn=[];for(var e=!Et&&yt?St-1:St,t=e%nt%vt;t<nt;)!Et&&t+vt>nt&&(t=nt-vt),gn.push(t),t+=vt;(Et&&gn.length*vt<nt||!Et&&gn[0]>0)&&gn.unshift(0)}function Be(){mn&&!t.navContainer&&(Re(),gn!==xn&&(xn.length>0&&xn.forEach(function(e){b(pn[e])}),gn.length>0&&gn.forEach(function(e){T(pn[e])}),xn=gn))}function ze(e){return{container:_e,slideItems:tt,navContainer:yn,navItems:pn,controlsContainer:hn,prevButton:ln,nextButton:cn,items:vt,slideBy:ht,cloneCount:Nt,slideCount:nt,slideCountNew:At,index:St,indexCached:Lt,navCurrentIndex:Tn,navCurrentIndexCached:En,visibleNavIndexes:gn,visibleNavIndexesCached:xn,event:e||{}}}if(t=e({container:H.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=H.querySelector(t[e]))}),t.container&&t.container.nodeName&&!(t.container.children.length<2)){if(t.responsive){var je={},qe=t.responsive;for(var Ge in qe){var Fe=qe[Ge];je[Ge]="number"==typeof Fe?{items:Fe}:Fe}t.responsive=je,je=null}var Ue="carousel"===t.mode;if(!Ue){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var Ve="tns-fadeIn",Xe="tns-fadeOut",Ke=!1,Ye=t.animateNormal||"tns-normal";K&&Y&&(Ve=t.animateIn||Ve,Xe=t.animateOut||Xe,Ke=t.animateDelay||Ke)}var Qe,Je="horizontal"===t.axis,Ze=H.createElement("div"),$e=H.createElement("div"),_e=t.container,et=_e.parentNode,tt=_e.children,nt=tt.length,it=et.clientWidth,at=t.responsive,rt=[],ot=!1,st=0,lt=0;if(at){ot=Object.keys(at).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),ot.indexOf(0)<0&&(lt=1),ot.forEach(function(e){rt=rt.concat(Object.keys(at[e]))});var ct=[];rt.forEach(function(e){ct.indexOf(e)<0&&ct.push(e)}),rt=ct,st=M()}var ut,dt,ft,vt=a("items"),ht="page"===a("slideBy")?vt:a("slideBy"),pt=t.nested,mt=a("gutter"),yt=a("edgePadding"),gt=a("fixedWidth"),xt=a("arrowKeys"),bt=a("speed"),Tt=t.rewind,Et=!Tt&&t.loop,Ct=a("autoHeight"),wt=s(),Dt=t.lazyload,Ot=[],Nt=Et?2*nt:n("edgePadding")?1:0,At=Ue?nt+2*Nt:nt+Nt,kt=!(!gt||Et||yt),Pt=!Ue||!Et,Mt=Je?"left":"top",It="",Wt="",St=Ue?Nt:0,Lt=St,Ht=!Et&&n("edgePadding")?1:0,Rt=Ht,Bt=At-vt-Ht,zt=!1,jt=t.onInit,qt=new N,Gt=_e.id,Ft=" tns-slider tns-"+t.mode,Ut=_e.id||i(),Vt=a("disable"),Xt=!!Vt||nt<=vt,Kt="inner"===pt?" !important":"",Yt={click:me,keydown:Oe},Qt={click:ye,keydown:Ae},Jt={mouseover:S,mouseout:L},Zt={visibilitychange:we},$t={keydown:De},_t={touchstart:We,touchmove:Se,touchend:Le,touchcancel:Le},en={mousedown:We,mousemove:Se,mouseup:Le,mouseleave:Le},tn=n("controls"),nn=n("nav"),an=n("autoplay"),rn=n("touch"),on=n("mouseDrag"),sn="tns-slide-active";if(tn)var ln,cn,un,dn,fn=a("controls"),vn=a("controlsText"),hn=t.controlsContainer;if(nn)var pn,mn=a("nav"),yn=t.navContainer,gn=[],xn=gn,bn=-1,Tn=0,En=0,Cn="tns-nav-active";if(an)var wn,Dn=a("autoplay"),On=a("autoplayTimeout"),Nn="forward"===t.autoplayDirection?1:-1,An=a("autoplayText"),kn=a("autoplayHoverPause"),Pn=t.autoplayButton,Mn=!1,In=!1,Wn=["<span class='tns-visually-hidden'>"," animation</span>"],Sn=a("autoplayResetOnVisibility"),Ln=!1;if(rn)var Hn,Rn,Bn,zn=a("touch"),jn=null,qn=null;if(on)var Gn=a("mouseDrag"),Fn=!1;Xt&&(fn=mn=zn=Gn=xt=Dn=kn=Sn=!1),G&&(Mt=G,It="translate",It+=Je?"X(":"Y(",Wt=")"),function(){Ze.appendChild($e),et.insertBefore(Ze,_e),$e.appendChild(_e),Qe=$e.clientWidth;var e="tns-outer",i="tns-inner";if(Ue?Je&&(n("edgePadding")||n("gutter")&&!t.fixedWidth)?e+=" tns-ovh":i+=" tns-ovh":n("gutter")&&(e+=" tns-ovh"),Ze.className=e,$e.className=i,$e.id=Ut+"-iw",Ct&&($e.className+=" tns-ah",$e.style[F]=bt/1e3+"s"),""===_e.id&&(_e.id=Ut),Ft+=j?" tns-subpixel":" tns-no-subpixel",Ft+=z?" tns-calc":" tns-no-calc",Ue&&(Ft+=" tns-"+t.axis),_e.className+=Ft,Ue&&K){var s={};s[K]=he,D(_e,s)}e=i=null;for(var u=0;u<nt;u++){var d=tt[u];d.id||(d.id=Ut+"-item"+u),v(d,"tns-item"),!Ue&&Ye&&v(d,Ye),g(d,{"aria-hidden":"true",tabindex:"-1"})}if(Et||yt){for(var f=H.createDocumentFragment(),p=H.createDocumentFragment(),m=Nt;m--;){var T=m%nt,E=tt[T].cloneNode(!0);if(x(E,"id"),p.insertBefore(E,p.firstChild),Ue){var O=tt[nt-1-T].cloneNode(!0);x(O,"id"),f.appendChild(O)}}_e.insertBefore(f,_e.firstChild),_e.appendChild(p),tt=_e.children}for(var N=St;N<St+vt;N++){var d=tt[N];g(d,{"aria-hidden":"false"}),x(d,["tabindex"]),v(d,sn),Ue||(d.style.left=100*(N-St)/vt+"%",v(d,Ve),h(d,Ye))}if(Ue&&Je)if(j){var A=R.getComputedStyle(tt[0]).fontSize;A.indexOf("em")>0&&(A=16*parseFloat(A)+"px"),l(wt,"#"+Ut,"font-size:0;",c(wt)),l(wt,"#"+Ut+" > .tns-item","font-size:"+A+";",c(wt))}else[].forEach.call(tt,function(e,t){e.style.marginLeft=r(t)});if(q){var M=o(t.edgePadding,t.gutter,t.fixedWidth);l(wt,"#"+Ut+"-iw",M,c(wt)),Ue&&Je&&(M="width:"+y(t.fixedWidth,t.gutter,t.items),l(wt,"#"+Ut,M,c(wt))),(Je||t.gutter)&&(M=C(t.fixedWidth,t.gutter,t.items)+w(t.gutter),l(wt,"#"+Ut+" > .tns-item",M,c(wt)))}else if($e.style.cssText=o(yt,mt,gt),Ue&&Je&&(_e.style.width=y(gt,mt,vt)),Je||mt){var M=C(gt,mt,vt)+w(mt);l(wt,"#"+Ut+" > .tns-item",M,c(wt))}if(Je||Vt||(_(),He()),at&&q&&ot.forEach(function(e){var t=at[e],i="",r="",s="",l="",c=a("items",e),u=a("fixedWidth",e),d=a("edgePadding",e),f=a("gutter",e);("edgePadding"in t||"gutter"in t)&&(r="#"+Ut+"-iw{"+o(d,f,u)+"}"),Ue&&Je&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(s="#"+Ut+"{width:"+y(u,f,c)+"}"),("fixedWidth"in t||n("fixedWidth")&&"gutter"in t||!Ue&&"items"in t)&&(l+=C(u,f,c)),"gutter"in t&&(l+=w(f)),l.length>0&&(l="#"+Ut+" > .tns-item{"+l+"}"),i=r+s+l,i.length>0&&wt.insertRule("@media (min-width: "+e/16+"em) {"+i+"}",wt.cssRules.length)}),Ue&&!Vt&&ce(),navigator.msMaxTouchPoints&&(v(Ze,"ms-touch"),D(Ze,{scroll:ke}),ee()),nn){var S=Ue?Nt:0;if(yn)g(yn,{"aria-label":"Carousel Pagination"}),pn=yn.children,[].forEach.call(pn,function(e,t){g(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":tt[S+t].id})});else{for(var L="",N=0;N<nt;N++)L+='<button data-nav="'+N+'" tabindex="-1" aria-selected="false" aria-controls="'+tt[S+N].id+'" hidden type="button"></button>';L='<div class="tns-nav" aria-label="Carousel Pagination">'+L+"</div>",Ze.insertAdjacentHTML("afterbegin",L),yn=Ze.querySelector(".tns-nav"),pn=yn.children,Be()}if(F){var B=F.substring(0,F.length-18).toLowerCase(),M="transition: all "+bt/1e3+"s";B&&(M="-"+B+"-"+M),l(wt,"[aria-controls^="+Ut+"-item]",M,c(wt))}g(pn[0],{tabindex:"0","aria-selected":"true"}),v(pn[0],Cn),D(yn,Qt),mn||b(yn)}if(an){var G=Dn?"stop":"start";Pn?g(Pn,{"data-action":G}):t.autoplayButtonOutput&&($e.insertAdjacentHTML("beforebegin",'<button data-action="'+G+'" type="button">'+Wn[0]+G+Wn[1]+An[0]+"</button>"),Pn=Ze.querySelector("[data-action]")),Pn&&D(Pn,{click:Ce}),Dn?(xe(),kn&&D(_e,Jt),Sn&&D(_e,Zt)):Pn&&b(Pn)}tn&&(hn?(ln=hn.children[0],cn=hn.children[1],g(hn,{"aria-label":"Carousel Navigation",tabindex:"0"}),g(ln,{"data-controls":"prev"}),g(cn,{"data-controls":"next"}),g(hn.children,{"aria-controls":Ut,tabindex:"-1"})):(Ze.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Ut+'" type="button">'+vn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Ut+'" type="button">'+vn[1]+"</button></div>"),hn=Ze.querySelector(".tns-controls"),ln=hn.children[0],cn=hn.children[1]),un=ie(ln),dn=ie(cn),Et||re(un,ln,!0),D(hn,Yt),fn||b(hn)),zn&&D(_e,_t),Gn&&D(_e,en),xt&&D(H,$t),"inner"===pt?qt.on("outerResized",function(){P(),qt.emit("innerLoaded",ze())}):(D(R,{resize:k}),"outer"===pt&&qt.on("innerLoaded",J)),Q(),J(),I(),"function"==typeof jt&&jt(ze()),"inner"===pt&&qt.emit("innerLoaded",ze()),Vt&&W(!0)}();var Un=function(){return Et?function(){var e=Rt+ht,t=Bt-ht,n=mt?mt:0;if(gt&&it%(gt+n)>n&&(t-=1),St>t)for(;St>=e+nt;)St-=nt;else if(St<e)for(;St<=t-nt;)St+=nt}:function(){St=Math.max(Rt,Math.min(Bt,St))}}(),Vn=function(){return Ue?function(e,t){if(t||(t=le()),kt&&St===Bt){var n=G?100*-((At-vt)/At):100*-(At/vt-1);t=Math.max(parseFloat(t),n)+"%"}F||!e?(ce(t),0===bt&&he()):A(_e,Mt,It,Wt,t,bt,he),Je||He()}:function(){Ot=[];var e={};e[K]=e[Y]=he,O(tt[Lt],e),D(tt[St],e),ue(Lt,Ve,Xe,!0),ue(St,Ye,Ve),K&&Y&&0!==bt||setTimeout(he,0)}}();return{getInfo:ze,events:qt,goTo:pe,destroy:function(){if(wt.disabled=!0,Et)for(var e=Nt;e--;)tt[0].remove(),tt[tt.length-1].remove();for(var n=nt;n--;){var i=tt[n];i.id.indexOf(Ut+"-item")>=0&&(i.id=""),i.classList.remove("tns-item")}if(x(tt,["style","aria-hidden","tabindex"]),tt=Ut=nt=At=Nt=null,fn&&(O(hn,Yt),t.controlsContainer&&(x(hn,["aria-label","tabindex"]),x(hn.children,["aria-controls","aria-disabled","tabindex"])),hn=ln=cn=null),mn&&(O(yn,Qt),t.navContainer&&(x(yn,["aria-label"]),x(pn,["aria-selected","aria-controls","tabindex"])),yn=pn=null),Dn&&(clearInterval(wn),Pn&&O(Pn,{click:Ce}),O(_e,Jt),O(_e,Zt),t.autoplayButton&&x(Pn,["data-action"])),_e.id=Gt||"",_e.className=_e.className.replace(Ft,""),_e.style="",Ue&&K){var a={};a[K]=he,O(_e,a)}O(_e,_t),O(_e,en),et.insertBefore(_e,Ze),Ze.remove(),Ze=$e=_e=null,O(H,$t),O(R,{resize:k})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
