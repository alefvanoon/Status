function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i;function l(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function c(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,p=!1;function m(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,a=(r>0&&t[n[r]].claim_order<=o?r+1:m(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[a]+1;const i=a+1;n[i]=e,r=Math.max(i,r)}const o=[],a=[];let i=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(a[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function E(){return x(" ")}function S(){return x("")}function T(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:N(e,s,t[s])}function I(e){return Array.from(e.childNodes)}function R(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,s,r=!1){R(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,s){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function z(e,t,n){return k(e,t,n,_)}function O(e,t,n){return k(e,t,n,w)}function C(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>x(t)),!0)}function H(e){return C(e," ")}function U(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function j(e){const t=U(e,"HTML_TAG_START",0),n=U(e,"HTML_TAG_END",t);if(t===n)return new W;R(e);const s=e.splice(t,n+1);y(s[0]),y(s[s.length-1]);const r=s.slice(1,s.length-1);for(const t of r)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new W(r)}function M(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function D(e,t){e.value=null==t?"":t}function B(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function G(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=B();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),y(n)}}function q(e,t=document.body){return Array.from(t.querySelectorAll(e))}class W extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=_(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function K(e){h=e}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function V(e){J().$$.on_mount.push(e)}function F(e){J().$$.after_update.push(e)}function Y(e){J().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function se(e){Z.push(e)}let re=!1;const oe=new Set;function ae(){if(!re){re=!0;do{for(let e=0;e<X.length;e+=1){const t=X[e];K(t),ie(t.$$)}for(K(null),X.length=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];oe.has(t)||(oe.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,re=!1,oe.clear()}}function ie(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}const le=new Set;let ce;function ue(){ce={r:0,c:[],p:ce}}function fe(){ce.r||r(ce.c),ce=ce.p}function de(e,t){e&&e.i&&(le.delete(e),e.i(t))}function he(e,t,n,s){if(e&&e.o){if(le.has(e))return;le.add(e),ce.c.push((()=>{le.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function pe(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function me(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ve(e,t,s,a){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=e.$$;i&&i.m(t,s),a||se((()=>{const t=l.map(n).filter(o);c?c.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(se)}function ye(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ae)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(t,n,o,a,i,l,c,u=[-1]){const f=h;K(t);const d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};c&&c(d.root);let m=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),m&&$e(t,e)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){p=!0;const e=I(n.target);d.fragment&&d.fragment.l(e),e.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&de(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),p=!1,ae()}K(f)}class we{$destroy(){ye(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xe=[];function Ee(t,n=e){let s;const r=new Set;function o(e){if(a(t,e)&&(t=e,s)){const e=!xe.length;for(const e of r)e[1](),xe.push(e,t);if(e){for(let e=0;e<xe.length;e+=2)xe[e][0](xe[e+1]);xe.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const l=[a,i];return r.add(l),1===r.size&&(s=n(o)||e),a(t),()=>{r.delete(l),0===r.size&&(s(),s=null)}}}}const Se={};var Te={owner:"alefvanoon",repo:"status",sites:[{name:"Blog",url:"https://alefvanoon.xyz"},{name:"Whoogle",url:"https://s.alefvanoon.xyz"},{name:"Metasearch",url:"https://ss.alefvanoon.xyz"},{name:"Nitter",url:"https://nitter.alefvanoon.xyz"},{name:"Nitter.ir",url:"https://nitter.ir"},{name:"Libreddit",url:"https://libreddit.alefvanoon.xyz"},{name:"Teddit",url:"https://teddit.alefvanoon.xyz"},{name:"CloudTube",url:"https://tube.alefvanoon.xyz"},{name:"Bibliogram",url:"https://biblio.alefvanoon.xyz"},{name:"Searx",url:"https://sx.alefvanoon.xyz"},{name:"Translate",url:"https://translate.alefvanoon.xyz"},{name:"WBO",url:"https://wbo.alefvanoon.xyz"},{name:"HedgeDoc",url:"https://mdpad.alefvanon.xyz"},{name:"RSS-Bridge",url:"https://rssb.alefvanon.xyz"},{name:"ytdl",url:"https://yt.alefvanon.xyz"},{name:"invidious",url:"https://inv.alefvanoon.xyz"},{name:"Piped-Front",url:"https://piped.alefvanoon.xyz"},{name:"Piped-API",url:"https://pipedapi.alefvanoon.xyz/trending"},{name:"PipedP",url:"https://pipedp.alefvanoon.xyz"},{name:"Bandwidth Hero",url:"https://bh.alefvanoon.xyz"},{name:"SpeedTest",url:"https://fast.alefvanoon.xyz"},{name:"Send",url:"https://send.alefvanoon.xyz"},{name:"FreshRSS",url:"https://rss.alefvanoon.xyz"},{name:"Etherpad",url:"https://pad.alefvanoon.xyz"},{name:"CyberChef",url:"https://cyberchef.alefvanoon.xyz"},{name:"Wikiless",url:"https://wikiless.alefvanoon.xyz"}],"status-website":{cname:"status.alefvanoon.xyz",themeUrl:"https://status.alefvanoon.xyz/themes/dark.css",logoUrl:"https://alefvanoon.xyz/assets/img/avatar.jpg",name:"alefvanoon Status",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.alefvanoon.xyz",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ae(e,t,n){const s=e.slice();return s[1]=t[n],s}function Ne(t){let n,s,r,o=Te["status-website"]&&!Te["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=_("img"),this.h()},l(e){n=z(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),l(n.src,s=Te["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}(),a=Te["status-website"]&&!Te["status-website"].hideNavTitle&&function(t){let n,s,r=Te["status-website"].name+"";return{c(){n=_("div"),s=x(r)},l(e){n=z(e,"DIV",{});var t=I(n);s=C(t,r),t.forEach(y)},m(e,t){v(e,n,t),g(n,s)},p:e,d(e){e&&y(n)}}}();return{c(){n=_("div"),s=_("a"),o&&o.c(),r=E(),a&&a.c(),this.h()},l(e){n=z(e,"DIV",{});var t=I(n);s=z(t,"A",{href:!0,class:!0});var i=I(s);o&&o.l(i),r=H(i),a&&a.l(i),i.forEach(y),t.forEach(y),this.h()},h(){N(s,"href",Te["status-website"].logoHref||Te.path),N(s,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(e,t){Te["status-website"]&&!Te["status-website"].hideNavLogo&&o.p(e,t),Te["status-website"]&&!Te["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&y(n),o&&o.d(),a&&a.d()}}}function Pe(e){let t,n,s,r,o,a,i=e[1].title+"";return{c(){t=_("li"),n=_("a"),s=x(i),a=E(),this.h()},l(e){t=z(e,"LI",{});var r=I(t);n=z(r,"A",{"aria-current":!0,href:!0,class:!0});var o=I(n);s=C(o,i),o.forEach(y),a=H(r),r.forEach(y),this.h()},h(){N(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",o=e[1].href.replace("$OWNER",Te.owner).replace("$REPO",Te.repo)),N(n,"class","svelte-a08hsz")},m(e,r){v(e,t,r),g(t,n),g(n,s),g(t,a)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(e){e&&y(t)}}}function Ie(t){let n,s,r,o,a,i=Te["status-website"]&&Te["status-website"].logoUrl&&Ne(),l=Te["status-website"]&&Te["status-website"].navbar&&function(e){let t,n=Te["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Pe(Ae(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(1&r){let o;for(n=Te["status-website"].navbar,o=0;o<n.length;o+=1){const a=Ae(e,n,o);s[o]?s[o].p(a,r):(s[o]=Pe(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&y(t)}}}(t),c=Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&function(t){let n,s,r,o=Te.i18n.navGitHub+"";return{c(){n=_("li"),s=_("a"),r=x(o),this.h()},l(e){n=z(e,"LI",{});var t=I(n);s=z(t,"A",{href:!0,class:!0});var a=I(s);r=C(a,o),a.forEach(y),t.forEach(y),this.h()},h(){N(s,"href",`https://github.com/${Te.owner}/${Te.repo}`),N(s,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&y(n)}}}();return{c(){n=_("nav"),s=_("div"),i&&i.c(),r=E(),o=_("ul"),l&&l.c(),a=E(),c&&c.c(),this.h()},l(e){n=z(e,"NAV",{class:!0});var t=I(n);s=z(t,"DIV",{class:!0});var u=I(s);i&&i.l(u),r=H(u),o=z(u,"UL",{class:!0});var f=I(o);l&&l.l(f),a=H(f),c&&c.l(f),f.forEach(y),u.forEach(y),t.forEach(y),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),l&&l.m(o,null),g(o,a),c&&c.m(o,null)},p(e,[t]){Te["status-website"]&&Te["status-website"].logoUrl&&i.p(e,t),Te["status-website"]&&Te["status-website"].navbar&&l.p(e,t),Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&c.p(e,t)},i:e,o:e,d(e){e&&y(n),i&&i.d(),l&&l.d(),c&&c.d()}}}function Re(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Le extends we{constructor(e){super(),_e(this,e,Re,Ie,a,{segment:0})}}var ke={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function ze(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Oe(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ce(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=t||{},f=0;function d(e){var t=ke[e[1]||""],n=l[l.length-1]==e;return t?t[1]?(n?l.pop():l.push(e),t[0|n]):t[0]:e}function h(){for(var e="";l.length;)e+=d(l[l.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(f,r.index),f=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+ze(Oe(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ce(ze(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Oe(r[8])+'" alt="'+Oe(r[7])+'">':r[10]?(c=c.replace("<a>",'<a href="'+Oe(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ce(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Oe(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),c+=s,c+=n;return(c+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function He(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ue(e,t,n){const s=e.slice();return s[3]=t[n],s}function je(e,t,n){const s=e.slice();return s[8]=t[n],s}function Me(t){let n;return{c(){n=_("link"),this.h()},l(e){n=z(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Te.path}/themes/${(Te["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function De(t){let n;return{c(){n=_("link"),this.h()},l(e){n=z(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Te["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function Be(t){let n,s;return{c(){n=_("script"),this.h()},l(e){n=z(e,"SCRIPT",{src:!0}),I(n).forEach(y),this.h()},h(){l(n.src,s=t[8].src)||N(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function Ge(t){let n;return{c(){n=_("link"),this.h()},l(e){n=z(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function qe(t){let n;return{c(){n=_("meta"),this.h()},l(e){n=z(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&y(n)}}}function We(t){let n,s,r,o,a,i,l,u,f,d,h,p,m,b,w,x,T,A,P=Ce(Te.i18n.footer.replace(/\$REPO/,`https://github.com/${Te.owner}/${Te.repo}`))+"",R=(Te["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(Te["status-website"]||{}).customHeadHtml+"";return{c(){n=new W,s=S(),this.h()},l(e){n=j(e),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&y(s),e&&n.d()}}}();let L=((Te["status-website"]||{}).themeUrl?De:Me)(t),k=(Te["status-website"]||{}).scripts&&function(e){let t,n=(Te["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=Be(je(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Te["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=je(e,n,o);s[o]?s[o].p(a,r):(s[o]=Be(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&y(t)}}}(t),O=(Te["status-website"]||{}).links&&function(e){let t,n=(Te["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ge(Ue(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Te["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Ue(e,n,o);s[o]?s[o].p(a,r):(s[o]=Ge(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&y(t)}}}(t),C=(Te["status-website"]||{}).metaTags&&function(e){let t,n=(Te["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=qe(He(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Te["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=He(e,n,o);s[o]?s[o].p(a,r):(s[o]=qe(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&y(t)}}}(t),U=Te["status-website"].css&&function(t){let n,s,r=`<style>${Te["status-website"].css}</style>`;return{c(){n=new W,s=S(),this.h()},l(e){n=j(e),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&y(s),e&&n.d()}}}(),M=Te["status-website"].js&&function(t){let n,s,r=`<script>${Te["status-website"].js}<\/script>`;return{c(){n=new W,s=S(),this.h()},l(e){n=j(e),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&y(s),e&&n.d()}}}(),D=(Te["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(Te["status-website"]||{}).customBodyHtml+"";return{c(){n=new W,s=S(),this.h()},l(e){n=j(e),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&y(s),e&&n.d()}}}();p=new Le({props:{segment:t[0]}});const B=t[2].default,G=function(e,t,n,s){if(e){const r=c(e,t,n,s);return e[0](r)}}(B,t,t[1],null);return{c(){R&&R.c(),n=S(),L.c(),s=_("link"),r=_("link"),o=_("link"),k&&k.c(),a=S(),O&&O.c(),i=S(),C&&C.c(),l=S(),U&&U.c(),u=S(),M&&M.c(),f=S(),d=E(),D&&D.c(),h=E(),ge(p.$$.fragment),m=E(),b=_("main"),G&&G.c(),w=E(),x=_("footer"),T=_("p"),this.h()},l(e){const t=q('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(t),n=S(),L.l(t),s=z(t,"LINK",{rel:!0,href:!0}),r=z(t,"LINK",{rel:!0,type:!0,href:!0}),o=z(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),a=S(),O&&O.l(t),i=S(),C&&C.l(t),l=S(),U&&U.l(t),u=S(),M&&M.l(t),f=S(),t.forEach(y),d=H(e),D&&D.l(e),h=H(e),be(p.$$.fragment,e),m=H(e),b=z(e,"MAIN",{class:!0});var c=I(b);G&&G.l(c),c.forEach(y),w=H(e),x=z(e,"FOOTER",{class:!0});var g=I(x);T=z(g,"P",{}),I(T).forEach(y),g.forEach(y),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${Te.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(Te["status-website"]||{}).faviconSvg||(Te["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Te["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(x,"class","svelte-jbr799")},m(e,t){R&&R.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),k&&k.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,l),U&&U.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,f),v(e,d,t),D&&D.m(e,t),v(e,h,t),ve(p,e,t),v(e,m,t),v(e,b,t),G&&G.m(b,null),v(e,w,t),v(e,x,t),g(x,T),T.innerHTML=P,A=!0},p(e,[t]){(Te["status-website"]||{}).customHeadHtml&&R.p(e,t),L.p(e,t),(Te["status-website"]||{}).scripts&&k.p(e,t),(Te["status-website"]||{}).links&&O.p(e,t),(Te["status-website"]||{}).metaTags&&C.p(e,t),Te["status-website"].css&&U.p(e,t),Te["status-website"].js&&M.p(e,t),(Te["status-website"]||{}).customBodyHtml&&D.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),G&&G.p&&(!A||2&t)&&function(e,t,n,s,r,o){if(r){const a=c(t,n,s,o);e.p(a,r)}}(G,B,e,e[1],A?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(B,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(de(p.$$.fragment,e),de(G,e),A=!0)},o(e){he(p.$$.fragment,e),he(G,e),A=!1},d(e){R&&R.d(e),y(n),L.d(e),y(s),y(r),y(o),k&&k.d(e),y(a),O&&O.d(e),y(i),C&&C.d(e),y(l),U&&U.d(e),y(u),M&&M.d(e),y(f),e&&y(d),D&&D.d(e),e&&y(h),ye(p,e),e&&y(m),e&&y(b),G&&G.d(e),e&&y(w),e&&y(x)}}}function Ke(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Je extends we{constructor(e){super(),_e(this,e,Ke,We,a,{segment:0})}}function Ve(e){let t,n,s=e[1].stack+"";return{c(){t=_("pre"),n=x(s)},l(e){t=z(e,"PRE",{});var r=I(t);n=C(r,s),r.forEach(y)},m(e,s){v(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&M(n,s)},d(e){e&&y(t)}}}function Fe(t){let n,s,r,o,a,i,l,c,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Ve(t);return{c(){s=E(),r=_("h1"),o=x(t[0]),a=E(),i=_("p"),l=x(f),c=E(),d&&d.c(),u=S(),this.h()},l(e){q('[data-svelte="svelte-1moakz"]',document.head).forEach(y),s=H(e),r=z(e,"H1",{class:!0});var n=I(r);o=C(n,t[0]),n.forEach(y),a=H(e),i=z(e,"P",{class:!0});var h=I(i);l=C(h,f),h.forEach(y),c=H(e),d&&d.l(e),u=S(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(i,"class","svelte-17w3omn")},m(e,t){v(e,s,t),v(e,r,t),g(r,o),v(e,a,t),v(e,i,t),g(i,l),v(e,c,t),d&&d.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&M(o,e[0]),2&t&&f!==(f=e[1].message+"")&&M(l,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Ve(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&y(s),e&&y(r),e&&y(a),e&&y(i),e&&y(c),d&&d.d(e),e&&y(u)}}}function Ye(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Xe extends we{constructor(e){super(),_e(this,e,Ye,Fe,a,{status:0,error:1})}}function Qe(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ge(n.$$.fragment),s=S()},l(e){n&&be(n.$$.fragment,e),s=S()},m(e,t){n&&ve(n,e,t),v(e,s,t),r=!0},p(e,t){const r=16&t?pe(o,[me(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{ye(e,1)})),fe()}a?(n=new a(i()),ge(n.$$.fragment),de(n.$$.fragment,1),ve(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&de(n.$$.fragment,e),r=!0)},o(e){n&&he(n.$$.fragment,e),r=!1},d(e){e&&y(s),n&&ye(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,s){ve(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){ye(t,e)}}}function et(e){let t,n,s,r;const o=[Ze,Qe],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=S()},l(e){n.l(e),s=S()},m(e,n){a[t].m(e,n),v(e,s,n),r=!0},p(e,r){let l=t;t=i(e),t===l?a[t].p(e,r):(ue(),he(a[l],1,1,(()=>{a[l]=null})),fe(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),de(n,1),n.m(s.parentNode,s))},i(e){r||(de(n),r=!0)},o(e){he(n),r=!1},d(e){a[t].d(e),e&&y(s)}}}function tt(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Je({props:o}),{c(){ge(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){ve(n,e,t),s=!0},p(e,[t]){const s=12&t?pe(r,[4&t&&{segment:e[2][0]},8&t&&me(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(de(n.$$.fragment,e),s=!0)},o(e){he(n.$$.fragment,e),s=!1},d(e){ye(n,e)}}}function nt(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:l=null}=t,{notify:c}=t;var u,f;return F(c),u=Se,f=s,J().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,c=e.notify)},[r,o,a,i,l,s,c]}class st extends we{constructor(e){super(),_e(this,e,nt,tt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const rt=[],ot=[{js:()=>Promise.all([import("./index.c761493e.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.47548b5a.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].7344ee3d.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].e2772bbb.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.767232ea.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],at=(it=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:it(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:it(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var it;
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
function lt(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function i(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((s=s.apply(e,t||[])).next())}))}function ct(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,ft=1;const dt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let pt,mt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pt))return null;let t=e.pathname.slice(pt.length);if(""===t&&(t="/"),!rt.some((e=>e.test(t))))for(let n=0;n<at.length;n+=1){const s=at[n],r=s.pattern.exec(t);if(r){const n=gt(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function vt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ct(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=bt(r);if(o){_t(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),dt.pushState({id:ut},"",r.href)}}function yt(){return{x:pageXOffset,y:pageYOffset}}function $t(e){if(ht[ut]=yt(),e.state){const t=bt(new URL(location.href));t?_t(t,e.state.id):location.href=location.href}else!function(e){ft=e}(ft+1),function(e){ut=e}(ft),dt.replaceState({id:ut},"",location.href)}function _t(e,t,n,s){return lt(this,void 0,void 0,(function*(){const r=!!t;if(r)ut=t;else{const e=yt();ht[ut]=e,ut=t=++ft,ht[ut]=n?e:{x:0,y:0}}if(yield mt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function wt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let xt,Et=null;function St(e){const t=ct(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,wt(document)));if(t)Et&&e===Et.href||(Et={href:e,promise:Bt(t)}),Et.promise}(t.href)}function Tt(e){clearTimeout(xt),xt=setTimeout((()=>{St(e)}),20)}function At(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,wt(document)));if(n){const s=_t(n,null,t.noscroll);return dt[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),s}return location.href=e,new Promise((()=>{}))}const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pt,It,Rt,Lt=!1,kt=[],zt="{}";const Ot={page:function(e){const t=Ee(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:Ee(null),session:Ee(Nt&&Nt.session)};let Ct,Ht,Ut;function jt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Mt(e){return lt(this,void 0,void 0,(function*(){Pt&&Ot.preloading.set(!0);const t=function(e){return Et&&Et.href===e.href?Et.promise:Bt(e)}(e),n=It={},s=yield t,{redirect:r}=s;if(n===It)if(r)yield At(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Dt(n,t,jt(t,e.page))}}))}function Dt(e,t,n){return lt(this,void 0,void 0,(function*(){Ot.page.set(n),Ot.preloading.set(!1),Pt?Pt.$set(t):(t.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},t.level0={props:yield Rt},t.notify=Ot.page.notify,Pt=new st({target:Ut,props:t,hydrate:!0})),kt=e,zt=JSON.stringify(n.query),Lt=!0,Ht=!1}))}function Bt(e){return lt(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Rt){const e=()=>({});Rt=Nt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ct)}let i,l=1;try{const r=JSON.stringify(n.query),c=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>lt(this,void 0,void 0,(function*(){const f=s[i];if(function(e,t,n,s){if(s!==zt)return!0;const r=kt[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,f,c,r)&&(u=!0),o.segments[l]=s[i+1],!t)return{segment:f};const d=l++;let h;if(Ht||u||!kt[i]||kt[i].part!==t.i){u=!1;const{default:s,preload:r}=yield ot[t.i].js();let o;o=Lt||!Nt.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ct):{}:Nt.preloaded[i+1],h={component:s,props:o,segment:f,match:c,part:t.i}}else h=kt[i];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Gt,qt,Wt;Ot.session.subscribe((e=>lt(void 0,void 0,void 0,(function*(){if(Ct=e,!Lt)return;Ht=!0;const t=bt(new URL(location.href)),n=It={},{redirect:s,props:r,branch:o}=yield Bt(t);n===It&&(s?yield At(s.location,{replaceState:!0}):yield Dt(o,r,jt(r,t.page)))})))),Gt={target:document.querySelector("#sapper")},qt=Gt.target,Ut=qt,Wt=Nt.baseUrl,pt=Wt,mt=Mt,"scrollRestoration"in dt&&(dt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{dt.scrollRestoration="auto"})),addEventListener("load",(()=>{dt.scrollRestoration="manual"})),addEventListener("click",vt),addEventListener("popstate",$t),addEventListener("touchstart",St),addEventListener("mousemove",Tt),Nt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Nt;Rt||(Rt=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Rt},level1:{props:{status:o,error:a},component:Xe},segments:r},l=gt(n);Dt([],i,{host:e,path:t,query:l,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;dt.replaceState({id:ft},"",t);const n=bt(new URL(location.href));if(n)return _t(n,ft,!0,e)}));export{ye as A,T as B,r as C,Q as D,j as E,l as F,f as G,W as H,q as I,Ce as J,w as K,O as L,At as M,D as N,A as O,t as P,P as Q,pe as R,we as S,F as T,Y as U,u as V,me as W,se as X,G as Y,I as a,C as b,z as c,y as d,_ as e,N as f,v as g,g as h,_e as i,E as j,H as k,ue as l,he as m,e as n,fe as o,de as p,V as q,Te as r,a as s,x as t,M as u,S as v,$ as w,ge as x,be as y,ve as z};

import __inject_styles from './inject_styles.803b7e80.js';