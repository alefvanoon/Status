function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i;function l(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function c(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,p=!1;function m(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,a=(s>0&&t[n[s]].claim_order<=o?s+1:m(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[a]+1;const i=a+1;n[i]=e,s=Math.max(i,s)}const o=[],a=[];let i=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(a[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function E(){return x(" ")}function S(){return x("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:N(e,r,t[r])}function I(e){return Array.from(e.childNodes)}function R(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,r,s=!1){R(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function z(e,t,n,r){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function O(e,t,n){return z(e,t,n,_)}function k(e,t,n){return z(e,t,n,w)}function C(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>x(t)),!0)}function H(e){return C(e," ")}function U(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function j(e){const t=U(e,"HTML_TAG_START",0),n=U(e,"HTML_TAG_END",t);if(t===n)return new W;R(e);const r=e.splice(t,n+1);y(r[0]),y(r[r.length-1]);const s=r.slice(1,r.length-1);for(const t of s)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new W(s)}function M(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function D(e,t){e.value=null==t?"":t}function B(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function G(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=B();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),y(n)}}function q(e,t=document.body){return Array.from(t.querySelectorAll(e))}class W extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function K(e){h=e}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function V(e){J().$$.on_mount.push(e)}function F(e){J().$$.after_update.push(e)}function Y(e){J().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function re(e){Z.push(e)}let se=!1;const oe=new Set;function ae(){if(!se){se=!0;do{for(let e=0;e<X.length;e+=1){const t=X[e];K(t),ie(t.$$)}for(K(null),X.length=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];oe.has(t)||(oe.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,se=!1,oe.clear()}}function ie(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}const le=new Set;let ce;function ue(){ce={r:0,c:[],p:ce}}function fe(){ce.r||s(ce.c),ce=ce.p}function de(e,t){e&&e.i&&(le.delete(e),e.i(t))}function he(e,t,n,r){if(e&&e.o){if(le.has(e))return;le.add(e),ce.c.push((()=>{le.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function pe(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(r[e]=1);for(const e in i)s[e]||(n[e]=i[e],s[e]=1);e[o]=i}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function me(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ve(e,t,r,a){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=e.$$;i&&i.m(t,r),a||re((()=>{const t=l.map(n).filter(o);c?c.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(re)}function ye(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ae)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(t,n,o,a,i,l,c,u=[-1]){const f=h;K(t);const d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};c&&c(d.root);let m=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),m&&$e(t,e)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){p=!0;const e=I(n.target);d.fragment&&d.fragment.l(e),e.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&de(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),p=!1,ae()}K(f)}class we{$destroy(){ye(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xe=[];function Ee(t,n=e){let r;const s=new Set;function o(e){if(a(t,e)&&(t=e,r)){const e=!xe.length;for(const e of s)e[1](),xe.push(e,t);if(e){for(let e=0;e<xe.length;e+=2)xe[e][0](xe[e+1]);xe.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const l=[a,i];return s.add(l),1===s.size&&(r=n(o)||e),a(t),()=>{s.delete(l),0===s.size&&(r(),r=null)}}}}const Se={};var Te={owner:"alefvanoon",repo:"status",sites:[{name:"Blog",url:"https://alefvanoon.xyz"},{name:"Whoogle",url:"https://s.alefvanoon.xyz"},{name:"Metasearch",url:"https://ss.alefvanoon.xyz"},{name:"Nitter",url:"https://nitter.alefvanoon.xyz"},{name:"Nitter.ir",url:"https://nitter.ir"},{name:"Libreddit",url:"https://libreddit.alefvanoon.xyz"},{name:"Teddit",url:"https://teddit.alefvanoon.xyz"},{name:"CloudTube",url:"https://tube.alefvanoon.xyz"},{name:"Bibliogram",url:"https://biblio.alefvanoon.xyz"},{name:"Searx",url:"https://sx.alefvanoon.xyz"},{name:"Translate",url:"https://translate.alefvanoon.xyz"},{name:"WBO",url:"https://wbo.alefvanoon.xyz"},{name:"HedgeDoc",url:"https://mdpad.alefvanon.xyz"},{name:"RSS-Bridge",url:"https://rssb.alefvanon.xyz"},{name:"ytdl",url:"https://yt.alefvanon.xyz"},{name:"invidious",url:"https://inv.alefvanoon.xyz"},{name:"Piped-Front",url:"https://piped.alefvanoon.xyz"},{name:"Piped-API",url:"https://pipedapi.alefvanoon.xyz/trending"},{name:"PipedP",url:"https://pipedp.alefvanoon.xyz"},{name:"Bandwidth Hero",url:"https://bh.alefvanoon.xyz"},{name:"SpeedTest",url:"https://fast.alefvanoon.xyz"},{name:"Send",url:"https://send.alefvanoon.xyz"},{name:"FreshRSS",url:"https://rss.alefvanoon.xyz"},{name:"Etherpad",url:"https://pad.alefvanoon.xyz"},{name:"CyberChef",url:"https://cyberchef.alefvanoon.xyz"}],"status-website":{cname:"status.alefvanoon.xyz",themeUrl:"https://status.alefvanoon.xyz/themes/dark.css",logoUrl:"https://alefvanoon.xyz/assets/img/avatar.jpg",name:"alefvanoon Status",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.alefvanoon.xyz",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ae(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ne(t){let n,r,s,o=Te["status-website"]&&!Te["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=_("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),l(n.src,r=Te["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}(),a=Te["status-website"]&&!Te["status-website"].hideNavTitle&&function(t){let n,r,s=Te["status-website"].name+"";return{c(){n=_("div"),r=x(s)},l(e){n=O(e,"DIV",{});var t=I(n);r=C(t,s),t.forEach(y)},m(e,t){v(e,n,t),g(n,r)},p:e,d(e){e&&y(n)}}}();return{c(){n=_("div"),r=_("a"),o&&o.c(),s=E(),a&&a.c(),this.h()},l(e){n=O(e,"DIV",{});var t=I(n);r=O(t,"A",{href:!0,class:!0});var i=I(r);o&&o.l(i),s=H(i),a&&a.l(i),i.forEach(y),t.forEach(y),this.h()},h(){N(r,"href",Te["status-website"].logoHref||Te.path),N(r,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),o&&o.m(r,null),g(r,s),a&&a.m(r,null)},p(e,t){Te["status-website"]&&!Te["status-website"].hideNavLogo&&o.p(e,t),Te["status-website"]&&!Te["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&y(n),o&&o.d(),a&&a.d()}}}function Pe(e){let t,n,r,s,o,a,i=e[1].title+"";return{c(){t=_("li"),n=_("a"),r=x(i),a=E(),this.h()},l(e){t=O(e,"LI",{});var s=I(t);n=O(s,"A",{"aria-current":!0,href:!0,class:!0});var o=I(n);r=C(o,i),o.forEach(y),a=H(s),s.forEach(y),this.h()},h(){N(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",o=e[1].href.replace("$OWNER",Te.owner).replace("$REPO",Te.repo)),N(n,"class","svelte-a08hsz")},m(e,s){v(e,t,s),g(t,n),g(n,r),g(t,a)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(e){e&&y(t)}}}function Ie(t){let n,r,s,o,a,i=Te["status-website"]&&Te["status-website"].logoUrl&&Ne(),l=Te["status-website"]&&Te["status-website"].navbar&&function(e){let t,n=Te["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Pe(Ae(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(1&s){let o;for(n=Te["status-website"].navbar,o=0;o<n.length;o+=1){const a=Ae(e,n,o);r[o]?r[o].p(a,s):(r[o]=Pe(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&y(t)}}}(t),c=Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&function(t){let n,r,s,o=Te.i18n.navGitHub+"";return{c(){n=_("li"),r=_("a"),s=x(o),this.h()},l(e){n=O(e,"LI",{});var t=I(n);r=O(t,"A",{href:!0,class:!0});var a=I(r);s=C(a,o),a.forEach(y),t.forEach(y),this.h()},h(){N(r,"href",`https://github.com/${Te.owner}/${Te.repo}`),N(r,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),g(r,s)},p:e,d(e){e&&y(n)}}}();return{c(){n=_("nav"),r=_("div"),i&&i.c(),s=E(),o=_("ul"),l&&l.c(),a=E(),c&&c.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=I(n);r=O(t,"DIV",{class:!0});var u=I(r);i&&i.l(u),s=H(u),o=O(u,"UL",{class:!0});var f=I(o);l&&l.l(f),a=H(f),c&&c.l(f),f.forEach(y),u.forEach(y),t.forEach(y),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),i&&i.m(r,null),g(r,s),g(r,o),l&&l.m(o,null),g(o,a),c&&c.m(o,null)},p(e,[t]){Te["status-website"]&&Te["status-website"].logoUrl&&i.p(e,t),Te["status-website"]&&Te["status-website"].navbar&&l.p(e,t),Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&c.p(e,t)},i:e,o:e,d(e){e&&y(n),i&&i.d(),l&&l.d(),c&&c.d()}}}function Re(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Le extends we{constructor(e){super(),_e(this,e,Re,Ie,a,{segment:0})}}var ze={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Oe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function ke(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ce(e,t){var n,r,s,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=t||{},f=0;function d(e){var t=ze[e[1]||""],n=l[l.length-1]==e;return t?t[1]?(n?l.pop():l.push(e),t[0|n]):t[0]:e}function h(){for(var e="";l.length;)e+=d(l[l.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=i.exec(e);)r=e.substring(f,s.index),f=i.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((a=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Oe(ke(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=s[6])?(a.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ce(Oe(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):s[8]?n='<img src="'+ke(s[8])+'" alt="'+ke(s[7])+'">':s[10]?(c=c.replace("<a>",'<a href="'+ke(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(a="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ce(s[12]||s[15],u)+"</"+a+">":s[16]?n="<code>"+ke(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),c+=r,c+=n;return(c+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function He(e,t,n){const r=e.slice();return r[3]=t[n],r}function Ue(e,t,n){const r=e.slice();return r[3]=t[n],r}function je(e,t,n){const r=e.slice();return r[8]=t[n],r}function Me(t){let n;return{c(){n=_("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Te.path}/themes/${(Te["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function De(t){let n;return{c(){n=_("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Te["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function Be(t){let n,r;return{c(){n=_("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),I(n).forEach(y),this.h()},h(){l(n.src,r=t[8].src)||N(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function Ge(t){let n;return{c(){n=_("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function qe(t){let n;return{c(){n=_("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function We(t){let n,r,s,o,a,i,l,u,f,d,h,p,m,b,w,x,T,A,P=Ce(Te.i18n.footer.replace(/\$REPO/,`https://github.com/${Te.owner}/${Te.repo}`))+"",R=(Te["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(Te["status-website"]||{}).customHeadHtml+"";return{c(){n=new W,r=S(),this.h()},l(e){n=j(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}();let L=((Te["status-website"]||{}).themeUrl?De:Me)(t),z=(Te["status-website"]||{}).scripts&&function(e){let t,n=(Te["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=Be(je(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=je(e,n,o);r[o]?r[o].p(a,s):(r[o]=Be(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&y(t)}}}(t),k=(Te["status-website"]||{}).links&&function(e){let t,n=(Te["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ge(Ue(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Ue(e,n,o);r[o]?r[o].p(a,s):(r[o]=Ge(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&y(t)}}}(t),C=(Te["status-website"]||{}).metaTags&&function(e){let t,n=(Te["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(He(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=He(e,n,o);r[o]?r[o].p(a,s):(r[o]=qe(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&y(t)}}}(t),U=Te["status-website"].css&&function(t){let n,r,s=`<style>${Te["status-website"].css}</style>`;return{c(){n=new W,r=S(),this.h()},l(e){n=j(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}(),M=Te["status-website"].js&&function(t){let n,r,s=`<script>${Te["status-website"].js}<\/script>`;return{c(){n=new W,r=S(),this.h()},l(e){n=j(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}(),D=(Te["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(Te["status-website"]||{}).customBodyHtml+"";return{c(){n=new W,r=S(),this.h()},l(e){n=j(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}();p=new Le({props:{segment:t[0]}});const B=t[2].default,G=function(e,t,n,r){if(e){const s=c(e,t,n,r);return e[0](s)}}(B,t,t[1],null);return{c(){R&&R.c(),n=S(),L.c(),r=_("link"),s=_("link"),o=_("link"),z&&z.c(),a=S(),k&&k.c(),i=S(),C&&C.c(),l=S(),U&&U.c(),u=S(),M&&M.c(),f=S(),d=E(),D&&D.c(),h=E(),ge(p.$$.fragment),m=E(),b=_("main"),G&&G.c(),w=E(),x=_("footer"),T=_("p"),this.h()},l(e){const t=q('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(t),n=S(),L.l(t),r=O(t,"LINK",{rel:!0,href:!0}),s=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),z&&z.l(t),a=S(),k&&k.l(t),i=S(),C&&C.l(t),l=S(),U&&U.l(t),u=S(),M&&M.l(t),f=S(),t.forEach(y),d=H(e),D&&D.l(e),h=H(e),be(p.$$.fragment,e),m=H(e),b=O(e,"MAIN",{class:!0});var c=I(b);G&&G.l(c),c.forEach(y),w=H(e),x=O(e,"FOOTER",{class:!0});var g=I(x);T=O(g,"P",{}),I(T).forEach(y),g.forEach(y),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${Te.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(Te["status-website"]||{}).faviconSvg||(Te["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Te["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(x,"class","svelte-jbr799")},m(e,t){R&&R.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),z&&z.m(document.head,null),g(document.head,a),k&&k.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,l),U&&U.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,f),v(e,d,t),D&&D.m(e,t),v(e,h,t),ve(p,e,t),v(e,m,t),v(e,b,t),G&&G.m(b,null),v(e,w,t),v(e,x,t),g(x,T),T.innerHTML=P,A=!0},p(e,[t]){(Te["status-website"]||{}).customHeadHtml&&R.p(e,t),L.p(e,t),(Te["status-website"]||{}).scripts&&z.p(e,t),(Te["status-website"]||{}).links&&k.p(e,t),(Te["status-website"]||{}).metaTags&&C.p(e,t),Te["status-website"].css&&U.p(e,t),Te["status-website"].js&&M.p(e,t),(Te["status-website"]||{}).customBodyHtml&&D.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),G&&G.p&&(!A||2&t)&&function(e,t,n,r,s,o){if(s){const a=c(t,n,r,o);e.p(a,s)}}(G,B,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(B,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(de(p.$$.fragment,e),de(G,e),A=!0)},o(e){he(p.$$.fragment,e),he(G,e),A=!1},d(e){R&&R.d(e),y(n),L.d(e),y(r),y(s),y(o),z&&z.d(e),y(a),k&&k.d(e),y(i),C&&C.d(e),y(l),U&&U.d(e),y(u),M&&M.d(e),y(f),e&&y(d),D&&D.d(e),e&&y(h),ye(p,e),e&&y(m),e&&y(b),G&&G.d(e),e&&y(w),e&&y(x)}}}function Ke(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Je extends we{constructor(e){super(),_e(this,e,Ke,We,a,{segment:0})}}function Ve(e){let t,n,r=e[1].stack+"";return{c(){t=_("pre"),n=x(r)},l(e){t=O(e,"PRE",{});var s=I(t);n=C(s,r),s.forEach(y)},m(e,r){v(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&M(n,r)},d(e){e&&y(t)}}}function Fe(t){let n,r,s,o,a,i,l,c,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Ve(t);return{c(){r=E(),s=_("h1"),o=x(t[0]),a=E(),i=_("p"),l=x(f),c=E(),d&&d.c(),u=S(),this.h()},l(e){q('[data-svelte="svelte-1moakz"]',document.head).forEach(y),r=H(e),s=O(e,"H1",{class:!0});var n=I(s);o=C(n,t[0]),n.forEach(y),a=H(e),i=O(e,"P",{class:!0});var h=I(i);l=C(h,f),h.forEach(y),c=H(e),d&&d.l(e),u=S(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(i,"class","svelte-17w3omn")},m(e,t){v(e,r,t),v(e,s,t),g(s,o),v(e,a,t),v(e,i,t),g(i,l),v(e,c,t),d&&d.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&M(o,e[0]),2&t&&f!==(f=e[1].message+"")&&M(l,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Ve(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&y(r),e&&y(s),e&&y(a),e&&y(i),e&&y(c),d&&d.d(e),e&&y(u)}}}function Ye(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Xe extends we{constructor(e){super(),_e(this,e,Ye,Fe,a,{status:0,error:1})}}function Qe(e){let n,r,s;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ge(n.$$.fragment),r=S()},l(e){n&&be(n.$$.fragment,e),r=S()},m(e,t){n&&ve(n,e,t),v(e,r,t),s=!0},p(e,t){const s=16&t?pe(o,[me(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{ye(e,1)})),fe()}a?(n=new a(i()),ge(n.$$.fragment),de(n.$$.fragment,1),ve(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(e){s||(n&&de(n.$$.fragment,e),s=!0)},o(e){n&&he(n.$$.fragment,e),s=!1},d(e){e&&y(r),n&&ye(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,r){ve(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){ye(t,e)}}}function et(e){let t,n,r,s;const o=[Ze,Qe],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){a[t].m(e,n),v(e,r,n),s=!0},p(e,s){let l=t;t=i(e),t===l?a[t].p(e,s):(ue(),he(a[l],1,1,(()=>{a[l]=null})),fe(),n=a[t],n?n.p(e,s):(n=a[t]=o[t](e),n.c()),de(n,1),n.m(r.parentNode,r))},i(e){s||(de(n),s=!0)},o(e){he(n),s=!1},d(e){a[t].d(e),e&&y(r)}}}function tt(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Je({props:o}),{c(){ge(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){ve(n,e,t),r=!0},p(e,[t]){const r=12&t?pe(s,[4&t&&{segment:e[2][0]},8&t&&me(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(de(n.$$.fragment,e),r=!0)},o(e){he(n.$$.fragment,e),r=!1},d(e){ye(n,e)}}}function nt(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:l=null}=t,{notify:c}=t;var u,f;return F(c),u=Se,f=r,J().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,c=e.notify)},[s,o,a,i,l,r,c]}class rt extends we{constructor(e){super(),_e(this,e,nt,tt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const st=[],ot=[{js:()=>Promise.all([import("./index.e7a11d7b.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.8a519e91.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].51313f76.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].b1923ccd.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.72810cbd.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],at=(it=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:it(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:it(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var it;
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
function lt(e,t,n,r){return new(n||(n=Promise))((function(s,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function i(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))}function ct(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,ft=1;const dt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let pt,mt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pt))return null;let t=e.pathname.slice(pt.length);if(""===t&&(t="/"),!st.some((e=>e.test(t))))for(let n=0;n<at.length;n+=1){const r=at[n],s=r.pattern.exec(t);if(s){const n=gt(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:i}}}}function vt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ct(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=bt(s);if(o){_t(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),dt.pushState({id:ut},"",s.href)}}function yt(){return{x:pageXOffset,y:pageYOffset}}function $t(e){if(ht[ut]=yt(),e.state){const t=bt(new URL(location.href));t?_t(t,e.state.id):location.href=location.href}else!function(e){ft=e}(ft+1),function(e){ut=e}(ft),dt.replaceState({id:ut},"",location.href)}function _t(e,t,n,r){return lt(this,void 0,void 0,(function*(){const s=!!t;if(s)ut=t;else{const e=yt();ht[ut]=e,ut=t=++ft,ht[ut]=n?e:{x:0,y:0}}if(yield mt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function wt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let xt,Et=null;function St(e){const t=ct(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,wt(document)));if(t)Et&&e===Et.href||(Et={href:e,promise:Bt(t)}),Et.promise}(t.href)}function Tt(e){clearTimeout(xt),xt=setTimeout((()=>{St(e)}),20)}function At(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,wt(document)));if(n){const r=_t(n,null,t.noscroll);return dt[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),r}return location.href=e,new Promise((()=>{}))}const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pt,It,Rt,Lt=!1,zt=[],Ot="{}";const kt={page:function(e){const t=Ee(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Ee(null),session:Ee(Nt&&Nt.session)};let Ct,Ht,Ut;function jt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Mt(e){return lt(this,void 0,void 0,(function*(){Pt&&kt.preloading.set(!0);const t=function(e){return Et&&Et.href===e.href?Et.promise:Bt(e)}(e),n=It={},r=yield t,{redirect:s}=r;if(n===It)if(s)yield At(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Dt(n,t,jt(t,e.page))}}))}function Dt(e,t,n){return lt(this,void 0,void 0,(function*(){kt.page.set(n),kt.preloading.set(!1),Pt?Pt.$set(t):(t.stores={page:{subscribe:kt.page.subscribe},preloading:{subscribe:kt.preloading.subscribe},session:kt.session},t.level0={props:yield Rt},t.notify=kt.page.notify,Pt=new rt({target:Ut,props:t,hydrate:!0})),zt=e,Ot=JSON.stringify(n.query),Lt=!0,Ht=!1}))}function Bt(e){return lt(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Rt){const e=()=>({});Rt=Nt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ct)}let i,l=1;try{const s=JSON.stringify(n.query),c=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>lt(this,void 0,void 0,(function*(){const f=r[i];if(function(e,t,n,r){if(r!==Ot)return!0;const s=zt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,f,c,s)&&(u=!0),o.segments[l]=r[i+1],!t)return{segment:f};const d=l++;let h;if(Ht||u||!zt[i]||zt[i].part!==t.i){u=!1;const{default:r,preload:s}=yield ot[t.i].js();let o;o=Lt||!Nt.preloaded[i+1]?s?yield s.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ct):{}:Nt.preloaded[i+1],h={component:r,props:o,segment:f,match:c,part:t.i}}else h=zt[i];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}))}var Gt,qt,Wt;kt.session.subscribe((e=>lt(void 0,void 0,void 0,(function*(){if(Ct=e,!Lt)return;Ht=!0;const t=bt(new URL(location.href)),n=It={},{redirect:r,props:s,branch:o}=yield Bt(t);n===It&&(r?yield At(r.location,{replaceState:!0}):yield Dt(o,s,jt(s,t.page)))})))),Gt={target:document.querySelector("#sapper")},qt=Gt.target,Ut=qt,Wt=Nt.baseUrl,pt=Wt,mt=Mt,"scrollRestoration"in dt&&(dt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{dt.scrollRestoration="auto"})),addEventListener("load",(()=>{dt.scrollRestoration="manual"})),addEventListener("click",vt),addEventListener("popstate",$t),addEventListener("touchstart",St),addEventListener("mousemove",Tt),Nt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:a}=Nt;Rt||(Rt=s&&s[0]);const i={error:a,status:o,session:r,level0:{props:Rt},level1:{props:{status:o,error:a},component:Xe},segments:s},l=gt(n);Dt([],i,{host:e,path:t,query:l,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;dt.replaceState({id:ft},"",t);const n=bt(new URL(location.href));if(n)return _t(n,ft,!0,e)}));export{ye as A,T as B,s as C,Q as D,j as E,l as F,f as G,W as H,q as I,Ce as J,w as K,k as L,At as M,D as N,A as O,t as P,P as Q,pe as R,we as S,F as T,Y as U,u as V,me as W,re as X,G as Y,I as a,C as b,O as c,y as d,_ as e,N as f,v as g,g as h,_e as i,E as j,H as k,ue as l,he as m,e as n,fe as o,de as p,V as q,Te as r,a as s,x as t,M as u,S as v,$ as w,ge as x,be as y,ve as z};

import __inject_styles from './inject_styles.803b7e80.js';