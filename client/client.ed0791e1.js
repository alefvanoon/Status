function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function l(e,t,n,s,r,o,a){const l=function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(t,s,r,o);if(l){const r=i(t,n,s,a);e.p(r,l)}}function c(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}let f,d,h=!1;function p(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function m(e,t){h?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=p(1,r+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;s[e]=n[o]+1;const a=o+1;n[a]=e,r=Math.max(a,r)}const o=[],a=[];let i=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(a[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function g(e,t,n){h&&!n?m(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function $(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function _(){return w(" ")}function x(){return w("")}function E(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function S(e){return function(t){return t.preventDefault(),e.call(this,t)}}function T(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function A(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:T(e,s,t[s])}function P(e){return Array.from(e.childNodes)}function N(e,t,n,s,r=!1){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0});const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o))return n(o),e.splice(s,1),r||(e.claim_info.last_index=s),o}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o))return n(o),e.splice(s,1),r?e.claim_info.last_index--:e.claim_info.last_index=s,o}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function I(e,t,n,s){return N(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s?$(t):y(t)))}function L(e,t){return N(e,(e=>3===e.nodeType),(e=>{e.data=""+t}),(()=>w(t)),!0)}function R(e){return L(e," ")}function O(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function k(e){const t=O(e,"HTML_TAG_START",0),n=O(e,"HTML_TAG_END",t);if(t===n)return new M;const s=e.splice(t,n+1);return b(s[0]),b(s[s.length-1]),new M(s.slice(1,s.length-1))}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function H(e,t){e.value=null==t?"":t}function U(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function z(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=U();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=E(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=E(n.contentWindow,"resize",t)}),m(e,n),()=>{(s||r&&n.contentWindow)&&r(),b(n)}}function j(e,t=document.body){return Array.from(t.querySelectorAll(e))}class M{constructor(e){this.e=this.n=null,this.l=e}m(e,t,n=null){this.e||(this.e=y(t.nodeName),this.t=t,this.l?this.n=this.l:this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)g(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}function D(e){d=e}function G(){if(!d)throw new Error("Function called outside component initialization");return d}function B(e){G().$$.on_mount.push(e)}function q(e){G().$$.after_update.push(e)}function K(e){G().$$.on_destroy.push(e)}const W=[],J=[],V=[],F=[],Y=Promise.resolve();let Q=!1;function X(e){V.push(e)}let Z=!1;const ee=new Set;function te(){if(!Z){Z=!0;do{for(let e=0;e<W.length;e+=1){const t=W[e];D(t),ne(t.$$)}for(D(null),W.length=0;J.length;)J.pop()();for(let e=0;e<V.length;e+=1){const t=V[e];ee.has(t)||(ee.add(t),t())}V.length=0}while(W.length);for(;F.length;)F.pop()();Q=!1,Z=!1,ee.clear()}}function ne(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}const se=new Set;let re;function oe(){re={r:0,c:[],p:re}}function ae(){re.r||r(re.c),re=re.p}function ie(e,t){e&&e.i&&(se.delete(e),e.i(t))}function le(e,t,n,s){if(e&&e.o){if(se.has(e))return;se.add(e),re.c.push((()=>{se.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function ce(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function ue(e){return"object"==typeof e&&null!==e?e:{}}function fe(e){e&&e.c()}function de(e,t){e&&e.l(t)}function he(e,t,s,a){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=e.$$;i&&i.m(t,s),a||X((()=>{const t=l.map(n).filter(o);c?c.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(X)}function pe(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){-1===e.$$.dirty[0]&&(W.push(e),Q||(Q=!0,Y.then(te)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(t,n,o,a,i,l,c=[-1]){const u=d;D(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:c,skip_bound:!1};let p=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&me(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){h=!0;const e=P(n.target);f.fragment&&f.fragment.l(e),e.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&ie(t.$$.fragment),he(t,n.target,n.anchor,n.customElement),h=!1,te()}D(u)}class be{$destroy(){pe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ve=[];function ye(t,n=e){let s;const r=[];function o(e){if(a(t,e)&&(t=e,s)){const e=!ve.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),ve.push(n,t)}if(e){for(let e=0;e<ve.length;e+=2)ve[e][0](ve[e+1]);ve.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const l=[a,i];return r.push(l),1===r.length&&(s=n(o)||e),a(t),()=>{const e=r.indexOf(l);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const $e={};var we={owner:"alefvanoon",repo:"status",sites:[{name:"Blog",url:"https://alefvanoon.xyz"},{name:"Whoogle",url:"https://s.alefvanoon.xyz"},{name:"Metasearch",url:"https://ss.alefvanoon.xyz"},{name:"Nitter",url:"https://nitter.alefvanoon.xyz"},{name:"Libreddit",url:"https://libreddit.alefvanoon.xyz"},{name:"CloudTube",url:"https://tube.alefvanoon.xyz"},{name:"Bibliogram",url:"https://biblio.alefvanoon.xyz"},{name:"Searx",url:"https://sx.alefvanoon.xyz"},{name:"Translate",url:"https://translate.alefvanoon.xyz"},{name:"WBO",url:"https://wbo.alefvanoon.xyz"},{name:"HedgeDoc",url:"https://mdpad.alefvanon.xyz"},{name:"RSS-Bridge",url:"https://rssb.alefvanon.xyz"},{name:"ytdl",url:"https://yt.alefvanon.xyz"},{name:"invidious",url:"https://inv.alefvanoon.xyz"},{name:"Piped-API",url:"https://pipedapi.alefvanoon.xyz"},{name:"PipedP",url:"https://pipedp.alefvanoon.xyz"}],"status-website":{cname:"status.alefvanoon.xyz",themeUrl:"https://raw.githubusercontent.com/alefvanoon/Status/gh-pages/themes/dark.css",logoUrl:"https://alefvanoon.xyz/assets/img/avatar.jpg",name:"alefvanoon Status",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.alefvanoon.xyz",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function _e(e,t,n){const s=e.slice();return s[1]=t[n],s}function xe(t){let n,s,r,o=we["status-website"]&&!we["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=y("img"),this.h()},l(e){n=I(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){T(n,"alt",""),n.src!==(s=we["status-website"].logoUrl)&&T(n,"src",s),T(n,"class","svelte-a08hsz")},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}(),a=we["status-website"]&&!we["status-website"].hideNavTitle&&function(t){let n,s,r=we["status-website"].name+"";return{c(){n=y("div"),s=w(r)},l(e){n=I(e,"DIV",{});var t=P(n);s=L(t,r),t.forEach(b)},m(e,t){g(e,n,t),m(n,s)},p:e,d(e){e&&b(n)}}}();return{c(){n=y("div"),s=y("a"),o&&o.c(),r=_(),a&&a.c(),this.h()},l(e){n=I(e,"DIV",{});var t=P(n);s=I(t,"A",{href:!0,class:!0});var i=P(s);o&&o.l(i),r=R(i),a&&a.l(i),i.forEach(b),t.forEach(b),this.h()},h(){T(s,"href",we["status-website"].logoHref||we.path),T(s,"class","logo svelte-a08hsz")},m(e,t){g(e,n,t),m(n,s),o&&o.m(s,null),m(s,r),a&&a.m(s,null)},p(e,t){we["status-website"]&&!we["status-website"].hideNavLogo&&o.p(e,t),we["status-website"]&&!we["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&b(n),o&&o.d(),a&&a.d()}}}function Ee(e){let t,n,s,r,o,a=e[1].title+"";return{c(){t=y("li"),n=y("a"),s=w(a),o=_(),this.h()},l(e){t=I(e,"LI",{});var r=P(t);n=I(r,"A",{"aria-current":!0,href:!0,class:!0});var i=P(n);s=L(i,a),i.forEach(b),o=R(r),r.forEach(b),this.h()},h(){T(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),T(n,"href",e[1].href.replace("$OWNER",we.owner).replace("$REPO",we.repo)),T(n,"class","svelte-a08hsz")},m(e,r){g(e,t,r),m(t,n),m(n,s),m(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&T(n,"aria-current",r)},d(e){e&&b(t)}}}function Se(t){let n,s,r,o,a,i=we["status-website"]&&we["status-website"].logoUrl&&xe(),l=we["status-website"]&&we["status-website"].navbar&&function(e){let t,n=we["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ee(_e(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);g(e,t,n)},p(e,r){if(1&r){let o;for(n=we["status-website"].navbar,o=0;o<n.length;o+=1){const a=_e(e,n,o);s[o]?s[o].p(a,r):(s[o]=Ee(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){v(s,e),e&&b(t)}}}(t),c=we["status-website"]&&we["status-website"].navbarGitHub&&!we["status-website"].navbar&&function(t){let n,s,r,o=we.i18n.navGitHub+"";return{c(){n=y("li"),s=y("a"),r=w(o),this.h()},l(e){n=I(e,"LI",{});var t=P(n);s=I(t,"A",{href:!0,class:!0});var a=P(s);r=L(a,o),a.forEach(b),t.forEach(b),this.h()},h(){T(s,"href",`https://github.com/${we.owner}/${we.repo}`),T(s,"class","svelte-a08hsz")},m(e,t){g(e,n,t),m(n,s),m(s,r)},p:e,d(e){e&&b(n)}}}();return{c(){n=y("nav"),s=y("div"),i&&i.c(),r=_(),o=y("ul"),l&&l.c(),a=_(),c&&c.c(),this.h()},l(e){n=I(e,"NAV",{class:!0});var t=P(n);s=I(t,"DIV",{class:!0});var u=P(s);i&&i.l(u),r=R(u),o=I(u,"UL",{class:!0});var f=P(o);l&&l.l(f),a=R(f),c&&c.l(f),f.forEach(b),u.forEach(b),t.forEach(b),this.h()},h(){T(o,"class","svelte-a08hsz"),T(s,"class","container svelte-a08hsz"),T(n,"class","svelte-a08hsz")},m(e,t){g(e,n,t),m(n,s),i&&i.m(s,null),m(s,r),m(s,o),l&&l.m(o,null),m(o,a),c&&c.m(o,null)},p(e,[t]){we["status-website"]&&we["status-website"].logoUrl&&i.p(e,t),we["status-website"]&&we["status-website"].navbar&&l.p(e,t),we["status-website"]&&we["status-website"].navbarGitHub&&!we["status-website"].navbar&&c.p(e,t)},i:e,o:e,d(e){e&&b(n),i&&i.d(),l&&l.d(),c&&c.d()}}}function Te(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Ae extends be{constructor(e){super(),ge(this,e,Te,Se,a,{segment:0})}}var Pe={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ne(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ie(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Le(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=t||{},f=0;function d(e){var t=Pe[e[1]||""],n=l[l.length-1]==e;return t?t[1]?(n?l.pop():l.push(e),t[0|n]):t[0]:e}function h(){for(var e="";l.length;)e+=d(l[l.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(f,r.index),f=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ne(Ie(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Le(Ne(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Ie(r[8])+'" alt="'+Ie(r[7])+'">':r[10]?(c=c.replace("<a>",'<a href="'+Ie(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Le(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Ie(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),c+=s,c+=n;return(c+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Re(e,t,n){const s=e.slice();return s[3]=t[n],s}function Oe(e,t,n){const s=e.slice();return s[3]=t[n],s}function ke(e,t,n){const s=e.slice();return s[8]=t[n],s}function Ce(t){let n;return{c(){n=y("link"),this.h()},l(e){n=I(e,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",`${we.path}/themes/${(we["status-website"]||{}).theme||"light"}.css`)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function He(t){let n;return{c(){n=y("link"),this.h()},l(e){n=I(e,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",(we["status-website"]||{}).themeUrl)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function Ue(t){let n,s;return{c(){n=y("script"),this.h()},l(e){n=I(e,"SCRIPT",{src:!0}),P(n).forEach(b),this.h()},h(){n.src!==(s=t[8].src)&&T(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function ze(t){let n;return{c(){n=y("link"),this.h()},l(e){n=I(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){T(n,"rel",t[3].rel),T(n,"href",t[3].href),T(n,"media",t[3].media)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function je(t){let n;return{c(){n=y("meta"),this.h()},l(e){n=I(e,"META",{name:!0,content:!0}),this.h()},h(){T(n,"name",t[3].name),T(n,"content",t[3].content)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function Me(t){let n,s,r,o,a,c,u,f,d,h,p,$,w,E,S,A,N,L,O=Le(we.i18n.footer.replace(/\$REPO/,`https://github.com/${we.owner}/${we.repo}`))+"",C=(we["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(we["status-website"]||{}).customHeadHtml+"";return{c(){n=new M,s=x(),this.h()},l(e){n=k(e),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),g(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}();let H=((we["status-website"]||{}).themeUrl?He:Ce)(t),U=(we["status-website"]||{}).scripts&&function(e){let t,n=(we["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ue(ke(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);g(e,t,n)},p(e,r){if(0&r){let o;for(n=(we["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=ke(e,n,o);s[o]?s[o].p(a,r):(s[o]=Ue(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){v(s,e),e&&b(t)}}}(t),z=(we["status-website"]||{}).links&&function(e){let t,n=(we["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=ze(Oe(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);g(e,t,n)},p(e,r){if(0&r){let o;for(n=(we["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Oe(e,n,o);s[o]?s[o].p(a,r):(s[o]=ze(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){v(s,e),e&&b(t)}}}(t),D=(we["status-website"]||{}).metaTags&&function(e){let t,n=(we["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=je(Re(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);g(e,t,n)},p(e,r){if(0&r){let o;for(n=(we["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Re(e,n,o);s[o]?s[o].p(a,r):(s[o]=je(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){v(s,e),e&&b(t)}}}(t),G=we["status-website"].css&&function(t){let n,s,r=`<style>${we["status-website"].css}</style>`;return{c(){n=new M,s=x(),this.h()},l(e){n=k(e),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),g(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}(),B=we["status-website"].js&&function(t){let n,s,r=`<script>${we["status-website"].js}<\/script>`;return{c(){n=new M,s=x(),this.h()},l(e){n=k(e),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),g(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}(),q=(we["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(we["status-website"]||{}).customBodyHtml+"";return{c(){n=new M,s=x(),this.h()},l(e){n=k(e),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),g(e,s,t)},p:e,d(e){e&&b(s),e&&n.d()}}}();$=new Ae({props:{segment:t[0]}});const K=t[2].default,W=function(e,t,n,s){if(e){const r=i(e,t,n,s);return e[0](r)}}(K,t,t[1],null);return{c(){C&&C.c(),n=x(),H.c(),s=y("link"),r=y("link"),o=y("link"),U&&U.c(),a=x(),z&&z.c(),c=x(),D&&D.c(),u=x(),G&&G.c(),f=x(),B&&B.c(),d=x(),h=_(),q&&q.c(),p=_(),fe($.$$.fragment),w=_(),E=y("main"),W&&W.c(),S=_(),A=y("footer"),N=y("p"),this.h()},l(e){const t=j('[data-svelte="svelte-ri9y7q"]',document.head);C&&C.l(t),n=x(),H.l(t),s=I(t,"LINK",{rel:!0,href:!0}),r=I(t,"LINK",{rel:!0,type:!0,href:!0}),o=I(t,"LINK",{rel:!0,type:!0,href:!0}),U&&U.l(t),a=x(),z&&z.l(t),c=x(),D&&D.l(t),u=x(),G&&G.l(t),f=x(),B&&B.l(t),d=x(),t.forEach(b),h=R(e),q&&q.l(e),p=R(e),de($.$$.fragment,e),w=R(e),E=I(e,"MAIN",{class:!0});var i=P(E);W&&W.l(i),i.forEach(b),S=R(e),A=I(e,"FOOTER",{class:!0});var l=P(A);N=I(l,"P",{}),P(N).forEach(b),l.forEach(b),this.h()},h(){T(s,"rel","stylesheet"),T(s,"href",`${we.path}/global.css`),T(r,"rel","icon"),T(r,"type","image/svg"),T(r,"href",(we["status-website"]||{}).faviconSvg||(we["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),T(o,"rel","icon"),T(o,"type","image/png"),T(o,"href",(we["status-website"]||{}).favicon||"/logo-192.png"),T(E,"class","container"),T(A,"class","svelte-jbr799")},m(e,t){C&&C.m(document.head,null),m(document.head,n),H.m(document.head,null),m(document.head,s),m(document.head,r),m(document.head,o),U&&U.m(document.head,null),m(document.head,a),z&&z.m(document.head,null),m(document.head,c),D&&D.m(document.head,null),m(document.head,u),G&&G.m(document.head,null),m(document.head,f),B&&B.m(document.head,null),m(document.head,d),g(e,h,t),q&&q.m(e,t),g(e,p,t),he($,e,t),g(e,w,t),g(e,E,t),W&&W.m(E,null),g(e,S,t),g(e,A,t),m(A,N),N.innerHTML=O,L=!0},p(e,[t]){(we["status-website"]||{}).customHeadHtml&&C.p(e,t),H.p(e,t),(we["status-website"]||{}).scripts&&U.p(e,t),(we["status-website"]||{}).links&&z.p(e,t),(we["status-website"]||{}).metaTags&&D.p(e,t),we["status-website"].css&&G.p(e,t),we["status-website"].js&&B.p(e,t),(we["status-website"]||{}).customBodyHtml&&q.p(e,t);const n={};1&t&&(n.segment=e[0]),$.$set(n),W&&W.p&&(!L||2&t)&&l(W,K,e,e[1],L?t:-1,null,null)},i(e){L||(ie($.$$.fragment,e),ie(W,e),L=!0)},o(e){le($.$$.fragment,e),le(W,e),L=!1},d(e){C&&C.d(e),b(n),H.d(e),b(s),b(r),b(o),U&&U.d(e),b(a),z&&z.d(e),b(c),D&&D.d(e),b(u),G&&G.d(e),b(f),B&&B.d(e),b(d),e&&b(h),q&&q.d(e),e&&b(p),pe($,e),e&&b(w),e&&b(E),W&&W.d(e),e&&b(S),e&&b(A)}}}function De(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Ge extends be{constructor(e){super(),ge(this,e,De,Me,a,{segment:0})}}function Be(e){let t,n,s=e[1].stack+"";return{c(){t=y("pre"),n=w(s)},l(e){t=I(e,"PRE",{});var r=P(t);n=L(r,s),r.forEach(b)},m(e,s){g(e,t,s),m(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&C(n,s)},d(e){e&&b(t)}}}function qe(t){let n,s,r,o,a,i,l,c,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Be(t);return{c(){s=_(),r=y("h1"),o=w(t[0]),a=_(),i=y("p"),l=w(f),c=_(),d&&d.c(),u=x(),this.h()},l(e){j('[data-svelte="svelte-1moakz"]',document.head).forEach(b),s=R(e),r=I(e,"H1",{class:!0});var n=P(r);o=L(n,t[0]),n.forEach(b),a=R(e),i=I(e,"P",{class:!0});var h=P(i);l=L(h,f),h.forEach(b),c=R(e),d&&d.l(e),u=x(),this.h()},h(){T(r,"class","svelte-17w3omn"),T(i,"class","svelte-17w3omn")},m(e,t){g(e,s,t),g(e,r,t),m(r,o),g(e,a,t),g(e,i,t),m(i,l),g(e,c,t),d&&d.m(e,t),g(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&C(o,e[0]),2&t&&f!==(f=e[1].message+"")&&C(l,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Be(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&b(s),e&&b(r),e&&b(a),e&&b(i),e&&b(c),d&&d.d(e),e&&b(u)}}}function Ke(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class We extends be{constructor(e){super(),ge(this,e,Ke,qe,a,{status:0,error:1})}}function Je(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&fe(n.$$.fragment),s=x()},l(e){n&&de(n.$$.fragment,e),s=x()},m(e,t){n&&he(n,e,t),g(e,s,t),r=!0},p(e,t){const r=16&t?ce(o,[ue(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){oe();const e=n;le(e.$$.fragment,1,0,(()=>{pe(e,1)})),ae()}a?(n=new a(i()),fe(n.$$.fragment),ie(n.$$.fragment,1),he(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&ie(n.$$.fragment,e),r=!0)},o(e){n&&le(n.$$.fragment,e),r=!1},d(e){e&&b(s),n&&pe(n,e)}}}function Ve(e){let t,n;return t=new We({props:{error:e[0],status:e[1]}}),{c(){fe(t.$$.fragment)},l(e){de(t.$$.fragment,e)},m(e,s){he(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){le(t.$$.fragment,e),n=!1},d(e){pe(t,e)}}}function Fe(e){let t,n,s,r;const o=[Ve,Je],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=x()},l(e){n.l(e),s=x()},m(e,n){a[t].m(e,n),g(e,s,n),r=!0},p(e,r){let l=t;t=i(e),t===l?a[t].p(e,r):(oe(),le(a[l],1,1,(()=>{a[l]=null})),ae(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),ie(n,1),n.m(s.parentNode,s))},i(e){r||(ie(n),r=!0)},o(e){le(n),r=!1},d(e){a[t].d(e),e&&b(s)}}}function Ye(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Fe]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Ge({props:o}),{c(){fe(n.$$.fragment)},l(e){de(n.$$.fragment,e)},m(e,t){he(n,e,t),s=!0},p(e,[t]){const s=12&t?ce(r,[4&t&&{segment:e[2][0]},8&t&&ue(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(ie(n.$$.fragment,e),s=!0)},o(e){le(n.$$.fragment,e),s=!1},d(e){pe(n,e)}}}function Qe(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:l=null}=t,{notify:c}=t;var u,f;return q(c),u=$e,f=s,G().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,c=e.notify)},[r,o,a,i,l,s,c]}class Xe extends be{constructor(e){super(),ge(this,e,Qe,Ye,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ze=[],et=[{js:()=>Promise.all([import("./index.f4044f49.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.3ea34379.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].7c834348.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].bcc8b333.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.a2112bc3.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],tt=(nt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:nt(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:nt(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var nt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function st(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function i(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((s=s.apply(e,t||[])).next())}))}function rt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ot,at=1;const it="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},lt={};let ct,ut;function ft(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function dt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ct))return null;let t=e.pathname.slice(ct.length);if(""===t&&(t="/"),!Ze.some((e=>e.test(t))))for(let n=0;n<tt.length;n+=1){const s=tt[n],r=s.pattern.exec(t);if(r){const n=ft(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function ht(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=rt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=dt(r);if(o){gt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),it.pushState({id:ot},"",r.href)}}function pt(){return{x:pageXOffset,y:pageYOffset}}function mt(e){if(lt[ot]=pt(),e.state){const t=dt(new URL(location.href));t?gt(t,e.state.id):location.href=location.href}else!function(e){at=e}(at+1),function(e){ot=e}(at),it.replaceState({id:ot},"",location.href)}function gt(e,t,n,s){return st(this,void 0,void 0,(function*(){const r=!!t;if(r)ot=t;else{const e=pt();lt[ot]=e,ot=t=++at,lt[ot]=n?e:{x:0,y:0}}if(yield ut(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=lt[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),lt[ot]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function bt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let vt,yt=null;function $t(e){const t=rt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=dt(new URL(e,bt(document)));if(t)yt&&e===yt.href||(yt={href:e,promise:Ut(t)}),yt.promise}(t.href)}function wt(e){clearTimeout(vt),vt=setTimeout((()=>{$t(e)}),20)}function _t(e,t={noscroll:!1,replaceState:!1}){const n=dt(new URL(e,bt(document)));if(n){const s=gt(n,null,t.noscroll);return it[t.replaceState?"replaceState":"pushState"]({id:ot},"",e),s}return location.href=e,new Promise((()=>{}))}const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Et,St,Tt,At=!1,Pt=[],Nt="{}";const It={page:function(e){const t=ye(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:ye(null),session:ye(xt&&xt.session)};let Lt,Rt,Ot;function kt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Ct(e){return st(this,void 0,void 0,(function*(){Et&&It.preloading.set(!0);const t=function(e){return yt&&yt.href===e.href?yt.promise:Ut(e)}(e),n=St={},s=yield t,{redirect:r}=s;if(n===St)if(r)yield _t(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Ht(n,t,kt(t,e.page))}}))}function Ht(e,t,n){return st(this,void 0,void 0,(function*(){It.page.set(n),It.preloading.set(!1),Et?Et.$set(t):(t.stores={page:{subscribe:It.page.subscribe},preloading:{subscribe:It.preloading.subscribe},session:It.session},t.level0={props:yield Tt},t.notify=It.page.notify,Et=new Xe({target:Ot,props:t,hydrate:!0})),Pt=e,Nt=JSON.stringify(n.query),At=!0,Rt=!1}))}function Ut(e){return st(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Tt){const e=()=>({});Tt=xt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Lt)}let i,l=1;try{const r=JSON.stringify(n.query),c=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>st(this,void 0,void 0,(function*(){const f=s[i];if(function(e,t,n,s){if(s!==Nt)return!0;const r=Pt[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,f,c,r)&&(u=!0),o.segments[l]=s[i+1],!t)return{segment:f};const d=l++;let h;if(Rt||u||!Pt[i]||Pt[i].part!==t.i){u=!1;const{default:s,preload:r}=yield et[t.i].js();let o;o=At||!xt.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Lt):{}:xt.preloaded[i+1],h={component:s,props:o,segment:f,match:c,part:t.i}}else h=Pt[i];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var zt,jt,Mt;It.session.subscribe((e=>st(void 0,void 0,void 0,(function*(){if(Lt=e,!At)return;Rt=!0;const t=dt(new URL(location.href)),n=St={},{redirect:s,props:r,branch:o}=yield Ut(t);n===St&&(s?yield _t(s.location,{replaceState:!0}):yield Ht(o,r,kt(r,t.page)))})))),zt={target:document.querySelector("#sapper")},jt=zt.target,Ot=jt,Mt=xt.baseUrl,ct=Mt,ut=Ct,"scrollRestoration"in it&&(it.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{it.scrollRestoration="auto"})),addEventListener("load",(()=>{it.scrollRestoration="manual"})),addEventListener("click",ht),addEventListener("popstate",mt),addEventListener("touchstart",$t),addEventListener("mousemove",wt),xt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=xt;Tt||(Tt=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Tt},level1:{props:{status:o,error:a},component:We},segments:r},l=ft(n);Ht([],i,{host:e,path:t,query:l,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;it.replaceState({id:at},"",t);const n=dt(new URL(location.href));if(n)return gt(n,at,!0,e)}));export{pe as A,E as B,r as C,J as D,k as E,u as F,j as G,M as H,Le as I,$ as J,_t as K,H as L,S as M,t as N,A as O,ce as P,q as Q,K as R,be as S,c as T,ue as U,X as V,z as W,P as a,L as b,I as c,b as d,y as e,T as f,g,m as h,ge as i,_ as j,R as k,oe as l,le as m,e as n,ae as o,ie as p,B as q,we as r,a as s,w as t,C as u,x as v,v as w,fe as x,de as y,he as z};

import __inject_styles from './inject_styles.5607aec6.js';