(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1jzt":function(t,e,o){(function(n){var r,a;o("hEkN"),o("a1Th"),o("h7Nl"),o("Btvt"),o("8+KV"),a=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},o=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var o in e){if(!e.hasOwnProperty(o))return;t[o]=e[o]}})),t},n=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,o=String(t),n=o.length,r=-1,a="",i=o.charCodeAt(0);++r<n;){if(0===(e=o.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===i?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?o.charAt(r):"\\"+o.charAt(r)}return"#"+a},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e,o,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,o))},i=function(e,o,n,r){if(o.emitEvents&&"function"==typeof t.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:r}});document.dispatchEvent(a)}};return function(l,c){var s,u,f,d,m={cancelScroll:function(t){cancelAnimationFrame(d),d=null,t||i("scrollCancel",s)},animateScroll:function(n,l,c){m.cancelScroll();var u=o(s||e,c||{}),h="[object Number]"===Object.prototype.toString.call(n),p=h||!n.tagName?null:n;if(h||p){var g=t.pageYOffset;u.header&&!f&&(f=document.querySelector(u.header));var v,y,w,b,A,E,S,O,C=function(e){return e?(o=e,parseInt(t.getComputedStyle(o).height,10)+e.offsetTop):0;var o}(f),L=h?n:function(e,o,n,a){var i=0;if(e.offsetParent)for(;i+=e.offsetTop,e=e.offsetParent;);return i=Math.max(i-o-n,0),a&&(i=Math.min(i,r()-t.innerHeight)),i}(p,C,parseInt("function"==typeof u.offset?u.offset(n,l):u.offset,10),u.clip),I=L-g,k=r(),Q=0,B=(v=I,w=(y=u).speedAsDuration?y.speed:Math.abs(v/1e3*y.speed),y.durationMax&&w>y.durationMax?y.durationMax:y.durationMin&&w<y.durationMin?y.durationMin:parseInt(w,10));0===t.pageYOffset&&t.scrollTo(0,0),S=n,O=u,h||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?a(n,Math.floor(L),!1):(i("scrollStart",u,n,l),m.cancelScroll(!0),t.requestAnimationFrame((function e(o){var r,c,s;b||(b=o),Q+=o-b,E=g+I*(c=A=1<(A=0===B?0:Q/B)?1:A,"easeInQuad"===(r=u).easing&&(s=c*c),"easeOutQuad"===r.easing&&(s=c*(2-c)),"easeInOutQuad"===r.easing&&(s=c<.5?2*c*c:(4-2*c)*c-1),"easeInCubic"===r.easing&&(s=c*c*c),"easeOutCubic"===r.easing&&(s=--c*c*c+1),"easeInOutCubic"===r.easing&&(s=c<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1),"easeInQuart"===r.easing&&(s=c*c*c*c),"easeOutQuart"===r.easing&&(s=1- --c*c*c*c),"easeInOutQuart"===r.easing&&(s=c<.5?8*c*c*c*c:1-8*--c*c*c*c),"easeInQuint"===r.easing&&(s=c*c*c*c*c),"easeOutQuint"===r.easing&&(s=1+--c*c*c*c*c),"easeInOutQuint"===r.easing&&(s=c<.5?16*c*c*c*c*c:1+16*--c*c*c*c*c),r.customEasing&&(s=r.customEasing(c)),s||c),t.scrollTo(0,Math.floor(E)),function(e,o){var r=t.pageYOffset;if(e==o||r==o||(g<o&&t.innerHeight+r)>=k)return m.cancelScroll(!0),a(n,o,h),i("scrollStop",u,n,l),!(d=b=null)}(E,L)||(d=t.requestAnimationFrame(e),b=o)})))}}},h=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(u=e.target.closest(l))&&"a"===u.tagName.toLowerCase()&&!e.target.closest(s.ignore)&&u.hostname===t.location.hostname&&u.pathname===t.location.pathname&&/#/.test(u.href)){var o,r;try{o=n(decodeURIComponent(u.hash))}catch(e){o=n(u.hash)}if("#"===o){if(!s.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(o);(r=r||"#top"!==o?r:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var o=t.location.hash;o=o||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:o||t.pageYOffset},document.title,o||t.location.href)}}(s),m.animateScroll(r,u))}},p=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||m.animateScroll(e,null,{updateURL:!1})}};return m.destroy=function(){s&&(document.removeEventListener("click",h,!1),t.removeEventListener("popstate",p,!1),m.cancelScroll(),d=f=u=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),s=o(e,c||{}),f=s.header?document.querySelector(s.header):null,document.addEventListener("click",h,!1),s.updateURL&&s.popstate&&t.addEventListener("popstate",p,!1)}(),m}}(a)}.apply(e,[]))||(t.exports=r)}).call(this,o("yLpj"))},"9H8W":function(t,e,o){},EXIE:function(t,e,o){"use strict";o.d(e,"c",(function(){return c})),o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return u}));var n,r=o("1jzt"),a=o.n(r),i=o("dwco"),l=o.n(i);function c(){return l.a.polyfill(),n=new a.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function s(){if(!n)throw Error("Not founded SmoothScroll instance");return n.destroy(),n=null}function u(t){if(!n)throw Error("Not founded SmoothScroll instance");return n.animateScroll(t),n}},F1U3:function(t,e,o){t.exports=o.p+"static/heewonkim-c8337eb0aed885eaa01985202558117f.png"},"G+iy":function(t){t.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADRUlEQVQ4y2P4DwP/wADIePP+45qdh6snLEis7I0r7y7tmr1ww+5Hz19B1PwFq4EABgj19+9fIPn+05fGKUsUneOZNT0YlJwYVF0YVF2BDCZ1N3GbiKymyQ+evgQr/ofQDNF54fpdw8AsoFI2HW9uQ39+k0AB0yB+kyA+40AeowB2PR8GZWdZ++gtB07C9TNAdJ6/flfSNpJB3Y3PJJDLwA+omVXHi0HRkUHFmVXXm8fIHyjIZxLAou3JoeuzbvdRiJUgm999/KznnwHSaRwAVARUyqjhrumVUj9pcWrdBAXnOCYND6BxYKkAoKGiFiGXbz2AOru6fz7QtRA7eQz9mbU8df0yHr94DQmhj5+/xpZ2MWp6AHWC7DcOZFBx8c9uAGl++fa9jH0Um643xGyQnKJj5+xVQLnvP3/++QPy1PW7j4Ce59D35Tb0A6oBImAQHDt/jWHJpr0Mam68YFPhmjtmrQTq+f3nDyTybj98KmgWzKHng7BAyQnk3sKOmSA3GwdCNPMCJZSdJy3eANEMCdUrtx8APQW3Geh+Bg1316QKhrCCVgY1V7jNvMYBwBDObpwC1APUCtQPZCzfegAYhJAwh8eFhmcKQ3BeM7KzgRLAeFZwin326i08CQRkNwBTC5oaVfdEhvT6iQzKCGcDncSh58sgaxdf3v363ccv3763z1wB9BeLthePoT9MjT+TpodVZCHDlKWbgJ7kNYaayqThLmoVXtQxc8+xc91zVwODfcOeY+2zVqp5JDNrukPCjA8cLhkNkxjA0RDICQoMkGPqJi16+fYDJOn+/v3n1+/fEPbXbz9mrdwGDHOgSl5QgLmt330UlEgiitqBXgKmDaf4Mlg++QdEkGwG9DaQCfE8yDZVV6AXTIJzfv3+A9J8+dZ9MatwBjm79lkrgFy4bcgAklpW7zgEtINRw2PL/hOIjLEYmFSUnDfuOYZf8/0nz4FxVtk3D5JyGeD5a/qKLX0L1v4BmwWS+/8PqAGI/iHlfqDNtRMXYhQGYBWHzlzum792/4mLbz58+odkLTBvnLx0Y/KSjZv2HQfbiaoZrv/Tl6/bD52esXLr9OVbgLE4demm6cs3z1ixZd2uIy9ev4O4Fq4FAHqJtYQ/JS6YAAAAAElFTkSuQmCC","width":72,"height":72,"src":"/static/035ce7483ee8f639767376dfc414c0e6/e5b88/profile.png","srcSet":"/static/035ce7483ee8f639767376dfc414c0e6/e5b88/profile.png 1x,\\n/static/035ce7483ee8f639767376dfc414c0e6/e7bd6/profile.png 1.5x,\\n/static/035ce7483ee8f639767376dfc414c0e6/a12fc/profile.png 2x"}}},"site":{"siteMetadata":{"author":"Heewon Kim","introduction":"Hi, this is Heewon Kim. My dream is to be a product design jedi ✨","social":{"twitter":"","github":"iamheewonkim","medium":"heewonkim.work","facebook":"","linkedin":"iamheewonkim","instagram":"heewonkim_work"}}}}}')},OGtf:function(t,e,o){var n=o("XKFU"),r=o("eeVq"),a=o("vhPU"),i=/"/g,l=function(t,e,o,n){var r=String(a(t)),l="<"+e;return""!==o&&(l+=" "+o+'="'+String(n).replace(i,"&quot;")+'"'),l+">"+r+"</"+e+">"};t.exports=function(t,e){var o={};o[t]=e(l),n(n.P+n.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",o)}},dwco:function(t,e,o){o("Oyvg"),o("eM6i"),o("2Spj"),function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,n=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},a=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=d(this),n=o.getBoundingClientRect(),a=this.getBoundingClientRect();o!==e.body?(h.call(this,o,o.scrollLeft+a.left-n.left,o.scrollTop+a.top-n.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function u(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function f(t){var e=s(t,"Y")&&u(t,"Y"),o=s(t,"X")&&u(t,"X");return e||o}function d(t){for(;t!==e.body&&!1===f(t);)t=t.parentNode||t.host;return t}function m(e){var o,n,r,i,l=(a()-e.startTime)/468;i=l=l>1?1:l,o=.5*(1-Math.cos(Math.PI*i)),n=e.startX+(e.x-e.startX)*o,r=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,n,r),n===e.x&&r===e.y||t.requestAnimationFrame(m.bind(t,e))}function h(o,n,i){var c,s,u,f,d=a();o===e.body?(c=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=r.scroll):(c=o,s=o.scrollLeft,u=o.scrollTop,f=l),m({scrollable:c,method:f,startTime:d,startX:s,startY:u,x:n,y:i})}}}}()},hEkN:function(t,e,o){"use strict";o("OGtf")("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},lbRd:function(t,e,o){"use strict";var n=o("G+iy"),r=o("q1tI"),a=o.n(r),i=o("Wbzz"),l=o("F1U3"),c=o.n(l);o("9H8W");e.a=a.a.forwardRef((function(t,e){return a.a.createElement(i.StaticQuery,{query:s,render:function(t){var o=t.site.siteMetadata,n=o.author,r=o.social,l=o.introduction;return a.a.createElement("div",{ref:e,className:"bio"},a.a.createElement("div",{className:"author"},a.a.createElement("div",{className:"author-description"},a.a.createElement("img",{className:"author-image",src:c.a,alt:n,style:{width:"80px",height:"80px"}}),a.a.createElement("div",{className:"author-name"},a.a.createElement("div",{className:"author-short-description"},a.a.createElement("span",{className:"author-name-prefix"},"Written by"),a.a.createElement(i.Link,{to:"/about",className:"author-name-content"},a.a.createElement("span",null,"@",n))),a.a.createElement("div",{className:"author-introduction"},l),a.a.createElement("p",{className:"author-socials"},r.github&&a.a.createElement("a",{href:"https://github.com/"+r.github},"✤ GitHub"),r.medium&&a.a.createElement("a",{href:"https://medium.com/@"+r.medium},"✤ Medium"),r.linkedin&&a.a.createElement("a",{href:"https://www.linkedin.com/in/"+r.linkedin+"/"},"✤ LinkedIn"),r.instagram&&a.a.createElement("a",{href:"https://www.instagram.com/"+r.instagram},"✤ Instagram"),r.twitter&&a.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"Twitter"),r.facebook&&a.a.createElement("a",{href:"https://www.facebook.com/"+r.facebook},"Facebook"))))))},data:n})}));var s="2466699377"}}]);
//# sourceMappingURL=69ca9dfa785447e3d8b116b383997bcdc8df623a-97367e9b9dafa9eea3d3.js.map