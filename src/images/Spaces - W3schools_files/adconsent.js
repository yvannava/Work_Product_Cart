"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,n,t,o,i,r){var a=e._snigelConfig;if(a)try{t=a.settings.adconsent.objName}catch(e){}var s=void 0,c="__"+t;try{r=localStorage}catch(e){}var l,u=e.performance,f=u&&u.now?function(){return Math.floor(u.now())}:function(){return 0};function p(e){if(window.argus){var n=1===e.length&&e[0]instanceof Error?{stack:e[0].stack}:{log:e,stack:(new Error).stack};window.argus.cmd.push(function(){window.argus.queueError("adconsent",n)})}}!function(){if("function"===_typeof(e.CustomEvent))return!1;function t(e,t){t=t||{bubbles:!1,cancelable:!1,detail:s};var o=n.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}t.prototype=e.Event.prototype,e.CustomEvent=t}();try{var d=function(n,t,o,i){e.console[n]&&L.level>=t&&console[n].apply(console,function(e,n,t){return e=[].slice.call(e),n&&e.unshift(n),e.unshift("display: inline-block; color: #fff; background: "+t+"; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cAdConsent"),e}(o,n.toUpperCase()+":",i))},g=function(e,n){return{region:e,loaded:!1,applies:s,version:n,status:"stub"}},v=function(n){return function(t,o,i){e[n](t,s,i,o)}},m=function(e,n,t){return!n||n===e.version||(C(t,null,!1),k("Wrong framework version detected: "+n),!1)},b=function(e,n,t){var o=q.applies?s:q.applies,i={tcString:s,tcfPolicyVersion:2,cmpId:229,cmpVersion:76,gdprApplies:o,eventStatus:!1===o?"tcloaded":s,cmpStatus:q.status,listenerId:n,isServiceSpecific:!0,useNonStandardStacks:!1,publisherCC:w.publisherCC,purposeOneTreatment:!1};k("Sending TCData structure:",i,t),C(t,i,!0)},y=function(e,n,t,o,i){e.queue.push({command:n,version:t,parameter:o,callback:i})},h=function(t,o){var i=t+"Locator";!function t(){if(!e.frames[i]){var o=n.body;if(o){var r=n.createElement("iframe");r.style.display="none",r.name=i,o.appendChild(r)}else setTimeout(t,5)}}();var r=function(n){var o=n.data,i="string"==typeof o;try{var r=(i?JSON.parse(o):o)[t+"Call"];if(r){e[t](r.command,r.version,function(e,o){try{if(n&&n.source&&n.source.postMessage){var a={};a[t+"Return"]={returnValue:e,success:o===s||o,callId:r.callId},n.source.postMessage(i?JSON.stringify(a):a,"*")}}catch(e){}},r.parameter)}}catch(e){}};if("function"!==_typeof(e[t])){e[t]=function(n,i,r,a){var s=e[t];if(s.queue){for(var c in o)if(n===c){var l=!0;(0,o[c])(s,n,i,r,a);break}l||y(s,n,i,a,r)}else s(n,i,r,a)},e[t].queue=[],e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r)}},C=function(e,n,t){e&&"function"==typeof e&&setTimeout(function(){e(n,t)},0)},E=function(n,t,o,r,a){if(o||A("setConsentRegion is deprecated and should be only used in debug mode."),N.region===s)if(x[a]){for(var c in D){var l=D[c];l.applies=l.region==a,l.applies?J=c:(l.loaded=!0,l.status="loaded")}N.region=a,I("Configured consent region "+x[a]),function(){if(1!==N.region&&S.processListeners(b),2!==N.region){var n=e[i],t=n.queue;if(t){n.queue=[];for(var o=0;o<t.length;o++){var r=t[o];n(r.command,r.version,r.callback,r.parameter)}}}}()}else T("Incorrect consent region "+a)},_=v(c);_.gdpr=v("__tcfapi");var S=_.gdpr;S.listenerId=1,S.tcfListeners=[],S.addEventListener=function(e,n,t){if(m(q,e,n)){k("Adding event listener "+S.listenerId,n);var o={id:S.listenerId++,callback:n||function(){}};S.tcfListeners.push(o),t(null,o.id,o.callback)}},S.removeEventListener=function(e,n,t,o,i){if(m(q,t,o)){k("Removing event listener "+i);for(var r=0;r<S.tcfListeners.length;r++)if(S.tcfListeners[r].id==i)return S.tcfListeners.splice(r,1),void C(o,!0);A("Couldn't find listener id "+i+"."),C(o,!1)}},S.getTCData=function(e,n,t,o){m(q,t,o)&&b(0,0,o)},S.processListeners=function(e){for(var n=S.tcfListeners.slice(),t=0;t<n.length;t++)e(null,n[t].id,n[t].callback)},_.ccpa=v(i),_.version=76,_.cmpId=229,_.cfg={apiBaseUrl:"https://cdn.snigelweb.com/adconsent/76",publisherCC:"US"};var w=_.cfg;_.log={levels:{off:0,error:1,warning:2,info:3,debug:4},level:2,error:function(){p(arguments),d("error",1,arguments,"#ff0000")},warn:function(){d("warn",2,arguments,"#ffe600")},info:function(){d("info",3,arguments,"#3b88a3")},debug:function(){d("debug",4,arguments,"#808080")}};var L=_.log,k=L.debug,I=L.info,A=L.warn,T=L.error;_.consent={regions:{0:"NONE",1:"GDPR",2:"CCPA"},region:s,api:{__tcfapi:g(1,2),__uspapi:g(2,1)}};var N=_.consent,x=N.regions,D=N.api,q=D.__tcfapi,O=D[i];_.analytics={enabled:!1,callback:s,send:function(e){P.sendEvent(x[N.region],e,f())},sendEvent:function(n,t,o){(I("Sending analytics event action"+(P.enabled?"":" disabled")+": "+n+", label: "+t+", value: "+o),P.enabled)&&(P.callback||function(n){e.gtag?gtag("event",n.action,{event_category:n.category,event_label:n.label,event_value:n.value}):e.ga?ga("send",{hitType:"event",eventCategory:n.category,eventAction:n.action,eventLabel:n.label,eventValue:n.value,nonInteraction:n.nonInteraction}):A("Unable to find Google Analytics module (gtag or ga).")})({category:"AdConsent",action:n,label:t||n,value:o||0,nonInteraction:!0})}};var P=_.analytics,V=P.send;_.event={fired:{},dispatchCustomEvent:function(e,t,o){o&&G[e]||(G[e]=!0,k("Emitting custom event "+e+" with details: ",t),n.dispatchEvent(new CustomEvent(e,t)))},dispatchCustomEventConsent:function(e,n){var t={0:"N/A",1:"NoConsent",2:"PartialConsent",3:"FullConsent"};V(t[n]),1==N.region&&0!=e&&V("Publisher"+t[e]),U.dispatchCustomEvent("cmpConsentAvailable",{detail:{consentSummary:{mapping:{0:"not available",1:"no consent",2:"partial consent",3:"full consent"},publisherConsent:e,vendorsConsent:n,gdprApplies:q.applies,uspApplies:O.applies}}})}};var U=_.event,G=U.fired,R=(l=e.location.search)?l.replace(/^\?/,"").split("&").reduce(function(e,n){var t=n.split("="),o=t[0],i=t.length>1?t[1]:s;return/\[\]$/.test(o)?(e[o=o.replace("[]","")]=e[o]||[],e[o].push(i)):e[o]=i||"",e},{}):{},j=("true"==R.sn_debug?"debug":null)||("true"==R.adconsent_debug?"debug":null)||R.adconsent_log;if(L.level=L.levels[j]||L.level,e[t])return void T("Stub is tried to load again!");if(e.__tcfapi||e[i])return void A("A cmp is already registered in the system. AdConsent is stopping.");e[t]=_;var J=s,M=!1;h("__tcfapi",{ping:function(e,n,t,o){var i={gdprApplies:q.applies,cmpLoaded:q.loaded,cmpStatus:q.status,displayStatus:"disabled",apiVersion:"2.0",cmpVersion:76,cmpId:229,gvlVersion:s,tcfPolicyVersion:2};C(o,i,!0)},getTCData:S.getTCData,addEventListener:function(e,n,t,o,i){S.addEventListener(t,o,b)},removeEventListener:S.removeEventListener}),h(i,{getUSPData:function(e,n,t,o,i){!1===O.applies?m(O,t,o)&&C(o,{version:1,uspString:"1---"},!0):y(e,n,t,i,o)}}),h(c,{start:function t(o,i,a,c,l){if(N.region!==s){if(!M)if(M=!0,0==N.region)U.dispatchCustomEventConsent(3,3);else if(J){var u=n.createElement("script");u.type="text/javascript",u.async=!0,u.charset="utf-8",u.src=_.cfg.apiBaseUrl+"/adconsent"+J+".js",n.head.appendChild(u)}}else!function(n,t){if((!n||!n.country)&&(n=null,r)){var o=r.getItem("snconsent_geo");if(o){var i=r.getItem("snconsent_geo_exp");if(i)try{parseInt(i)>=(new Date).getTime()&&(n=JSON.parse(e.atob(o)))}catch(e){}}}if(n)t(n);else{var a=new XMLHttpRequest;a.open("GET","https://pro.ip-api.com/json/?fields=57354&key=33arzTfj1gigDqW"),a.timeout=5e3,a.onload=function(){var n=a.responseText.toLowerCase(),o=JSON.parse(n);o={country:o.countrycode,region:o.regionname},r&&(r.setItem("snconsent_geo",e.btoa(JSON.stringify(o))),r.setItem("snconsent_geo_exp",(new Date).getTime()+36e5)),t(o)},a.onerror=a.ontimeout=function(){t(null)},a.send()}}(l,function(e){e&&(w.country=e.country?e.country.toLowerCase():null,w.region=(e.region||"").toLowerCase()),"us"!==w.country||"california"!==w.region&&"ca"!==w.region?-1!=="at be bg hr cy cz dk ee fi fr de gr hu is ie it lv li lt lu mt nl no pl pt ro sk si es se gb".indexOf(w.country)?E(s,s,1,s,1):(w.country||(V("ErrorGeotargeting"),T("Geotargeting failed")),E(s,s,1,s,0)):E(s,s,1,s,2),t()})},setPublisherCC:function(e,n,t,o,i){"string"!=typeof i||2!=i.length?C(o,{message:"Invalid publisher country code detected. Ignoring call."},!1):(w.publisherCC=i.toUpperCase(),C(o,null,!0))},setConsentRegion:E,enableGoogleAnalytics:function(e,n,t,o,i){P.enabled=i===s||!!i,P.callback=o}})}catch(e){if(p(e),a&&a.passThroughException)throw e;console.error(e)}}(window,document,"adconsent",0,"__uspapi");