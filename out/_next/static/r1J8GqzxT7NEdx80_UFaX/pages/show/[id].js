(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],d=!1,l=-1;function h(){d&&u&&(d=!1,u.length?c=u.concat(c):l=-1,c.length&&m())}function m(){if(!d){var e=s(h);d=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||d||s(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=a},BEtg:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("MLWZ"),i=n("9rSQ"),o=n("UnBK"),s=n("SntB");function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[o,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,n,a){return this.request(r.merge(a||{},{method:e,url:t,data:n}))}}),e.exports=u},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),a=n("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s={adapter:function(){var e;return"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=n("tQ2B"):"undefined"!==typeof XMLHttpRequest&&(e=n("tQ2B")),e}(),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){s.headers[e]={}}),r.forEach(["post","put","patch"],function(e){s.headers[e]=r.merge(i)}),e.exports=s}).call(this,n("8oxB"))},L9dH:function(e,t,n){"use strict";var r=n("KI45");n("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("ln6h")),i=r(n("+oT+")),o=r(n("/HRN")),s=r(n("WaGi")),u=r(n("ZDA2")),c=r(n("/+P4")),d=r(n("N9n2")),l=r(n("q1tI")),h=r(n("h09O")),m=l.default.createElement,p=(n("vDqi"),n("gCKM").json),f=function(e){function t(){return(0,o.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props.show;return m(h.default,null,m("h1",null,e.name),m("p",null,e.summary.replace(/<[/]?[pb]>/g,"")),m("img",{alt:"",src:e.image.medium}))}}],[{key:"getInitialProps",value:function(){var e=(0,i.default)(a.default.mark(function e(t){var n,r,i,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.id,r=p.map(function(e){return e.show}),i=r.find(function(e,t){return e.id==n}),(o={}).name=i.name,o.summary=i.summary,o.image=i.image,e.abrupt("return",{show:o});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(l.default.Component);t.default=f},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,a,i){var o=new Error(e);return r(o,t,n,a,i)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var o=[];r.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(a(t)+"="+a(e))}))}),i=o.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var a=n.config.validateStatus;!a||a(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(a){r.isObject(t[a])?n[a]=r.deepMerge(e[a],t[a]):"undefined"!==typeof t[a]?n[a]=t[a]:r.isObject(e[a])?n[a]=r.deepMerge(e[a]):"undefined"!==typeof e[a]&&(n[a]=e[a])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}),n}},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("xAGQ"),i=n("Lmem"),o=n("JEQr"),s=n("2SVd"),u=n("5oMp");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!s(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||o.adapter)(e).then(function(t){return c(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,i,o){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},gCKM:function(e,t,n){var r=n("uw4m");e.exports={json:r}},"jfS+":function(e,t,n){"use strict";var r=n("endd");function a(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a(function(t){e=t}),cancel:e}},e.exports=a},lmRi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show/[id]",function(){return n("L9dH")}])},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("Rn+g"),i=n("MLWZ"),o=n("w0Vi"),s=n("OTTw"),u=n("LYNF");e.exports=function(e){return new Promise(function(t,c){var d=e.data,l=e.headers;r.isFormData(d)&&delete l["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",p=e.auth.password||"";l.Authorization="Basic "+btoa(m+":"+p)}if(h.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?o(h.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:e,request:h};a(t,c,r),h=null}},h.onabort=function(){h&&(c(u("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){c(u("Network Error",e,null,h)),h=null},h.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var f=n("eqyj"),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?f.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in h&&r.forEach(l,function(e,t){"undefined"===typeof d&&"content-type"===t.toLowerCase()?delete l[t]:h.setRequestHeader(t,e)}),e.withCredentials&&(h.withCredentials=!0),e.responseType)try{h.responseType=e.responseType}catch(w){if("json"!==e.responseType)throw w}"function"===typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),c(e),h=null)}),void 0===d&&(d=null),h.send(d)})}},uw4m:function(e){e.exports=JSON.parse('[{"score":24.237284,"show":{"id":975,"url":"http://www.tvmaze.com/shows/975/batman","name":"Batman","type":"Scripted","language":"English","genres":["Comedy","Action","Adventure"],"status":"Ended","runtime":30,"premiered":"1966-01-12","officialSite":null,"schedule":{"time":"19:30","days":["Thursday"]},"rating":{"average":8},"weight":82,"network":{"id":3,"name":"ABC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":2719,"thetvdb":77871,"imdb":"tt0059968"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/6/16463.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/6/16463.jpg"},"summary":"<p>Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually crime fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon often calls with the latest emergency threatening Gotham City. Racing to the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including Catwoman, Egghead, The Joker, King Tut, The Penguin, and The Riddler.</p>","updated":1567796826,"_links":{"self":{"href":"http://api.tvmaze.com/shows/975"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/95649"}}}},{"score":22.602562,"show":{"id":481,"url":"http://www.tvmaze.com/shows/481/the-batman","name":"The Batman","type":"Animation","language":"English","genres":["Action","Adventure","Science-Fiction"],"status":"Ended","runtime":30,"premiered":"2004-09-11","officialSite":null,"schedule":{"time":"10:30","days":["Saturday"]},"rating":{"average":8.5},"weight":39,"network":{"id":5,"name":"The CW","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":5602,"thetvdb":73180,"imdb":"tt0398417"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/3/9370.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/3/9370.jpg"},"summary":"<p>Hidden in the shadows, The Batman casts a protective eye while tracking the thugs, thieves and criminal masterminds that claim Gotham City\'s dark alleys each night. In one magnificent swoop, he descends up on opponents and battles with a fierceness that seems almost inhuman. This is the young Bruce Wayne who assumes the role of Gotham\'s greatest defender in a fresh retelling of the Dark Knight\'s beginnings.</p><p>With incredible gadgets, awesome animation and a cool new vibe, these 13 exciting episodes from the hit series showcase The Batman taking on your favourite villains \u2013 The Joker, The Penguin, Mr. Freeze, Catwoman, Bane \u2013 and new crazies you\'ll love to hate!</p>","updated":1563712987,"_links":{"self":{"href":"http://api.tvmaze.com/shows/481"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/43721"}}}},{"score":18.00433,"show":{"id":504,"url":"http://www.tvmaze.com/shows/504/batman-beyond","name":"Batman Beyond","type":"Animation","language":"English","genres":["Action","Adventure","Science-Fiction"],"status":"Ended","runtime":30,"premiered":"1999-01-10","officialSite":null,"schedule":{"time":"","days":["Saturday"]},"rating":{"average":9},"weight":0,"network":{"id":71,"name":"The WB","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":2722,"thetvdb":75417,"imdb":"tt0147746"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/4/10842.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/4/10842.jpg"},"summary":"<p><b>Batman Beyond</b> tells the story of Terry McGinnis was just an ordinary teenager...until his father was mysteriously murdered. Suspecting foul play at his father\'s company Wayne/Powers Corporation, Terry meets Bruce Wayne and learns a secret identity hidden for decades. Now too old to battle injustice, Wayne is a bitter shell of his former self and refuses to help. So Terry does what any brash young kid would do: steal the Batsuit and take matters into his own hands! Vowing to avenge his father\'s death, Terry dons the high-tech suit - tricked out with jetpacks for flying, a supersensitive microphone for eavesdropping and even camouflage capabilities - in search of his father\'s assassin.</p>","updated":1551302373,"_links":{"self":{"href":"http://api.tvmaze.com/shows/504"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/45957"}}}},{"score":14.9904995,"show":{"id":757,"url":"http://www.tvmaze.com/shows/757/batman-the-animated-series","name":"Batman: The Animated Series","type":"Animation","language":"English","genres":["Action","Adventure","Science-Fiction"],"status":"Ended","runtime":30,"premiered":"1992-09-05","officialSite":null,"schedule":{"time":"10:00","days":["Saturday"]},"rating":{"average":9.1},"weight":84,"network":{"id":4,"name":"FOX","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":2721,"thetvdb":76168,"imdb":"tt0103359"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/80/202273.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/80/202273.jpg"},"summary":"<p>Experience the thrills of vigilante justice as millionaire playboy Bruce Wayne and alter-ego Batman protect the streets of Gotham City from a host of villains including archnemesis The Joker, deadly-beautiful Poison Ivy and primitive Killer Croc in a fresh take on super hero storytelling. Intelligent, dramatic stories, unique characters and sharp dialog shaped this edgy TV series into an Emmy\xae-winning powerhouse that brought the Caped Crusader out of the dark alleys of TV history and into the present for fans of all ages.</p>","updated":1565480739,"_links":{"self":{"href":"http://api.tvmaze.com/shows/757"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/66866"}}}},{"score":13.404272,"show":{"id":3557,"url":"http://www.tvmaze.com/shows/3557/beware-the-batman","name":"Beware the Batman","type":"Animation","language":"English","genres":["Action","Adventure","Science-Fiction"],"status":"Ended","runtime":30,"premiered":"2013-07-14","officialSite":null,"schedule":{"time":"02:30","days":["Sunday"]},"rating":{"average":9.5},"weight":0,"network":{"id":11,"name":"Cartoon Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":30092,"thetvdb":258331,"imdb":"tt2329077"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/18/46698.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/18/46698.jpg"},"summary":"<p>In this new interpretation of the Batman legend, Bruce Wayne has recently returned to Gotham. With the aide of his butler and former SAS operative Alfred Pennyworth, Bruce takes on the guise of Batman and fights the villains of Gotham City. Helping him is Katana, a young martial artist who Alfred hires to assist Bruce when he realizes that he\'s too old to serve in the field.</p>","updated":1520574080,"_links":{"self":{"href":"http://api.tvmaze.com/shows/3557"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/232900"}}}},{"score":12.385471,"show":{"id":11464,"url":"http://www.tvmaze.com/shows/11464/batman-unlimited","name":"Batman Unlimited","type":"Animation","language":"English","genres":["Action","Children","Science-Fiction"],"status":"Ended","runtime":4,"premiered":"2015-05-04","officialSite":"https://www.youtube.com/channel/UCyu8StPfZWapR6rfW_JgqcA","schedule":{"time":"","days":[]},"rating":{"average":null},"weight":2,"network":null,"webChannel":{"id":21,"name":"YouTube","country":null},"externals":{"tvrage":null,"thetvdb":301558,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/38/96515.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/38/96515.jpg"},"summary":"<p>A webseries began airing on DC Kids\' YouTube channel on May 4, 2015.</p>","updated":1529747391,"_links":{"self":{"href":"http://api.tvmaze.com/shows/11464"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/896355"}}}},{"score":12.255429,"show":{"id":900,"url":"http://www.tvmaze.com/shows/900/batman-the-brave-and-the-bold","name":"Batman: The Brave and the Bold","type":"Animation","language":"English","genres":["Action","Crime","Science-Fiction"],"status":"Ended","runtime":30,"premiered":"2008-11-13","officialSite":null,"schedule":{"time":"19:00","days":["Friday"]},"rating":{"average":9},"weight":46,"network":{"id":11,"name":"Cartoon Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":20349,"thetvdb":82824,"imdb":"tt1213218"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/6/16001.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/6/16001.jpg"},"summary":"<p>Batman isn\'t going at it alone this time! From Warner Bros. Animation comes the latest interpretation of the classic Batman franchise. Our caped crusader is teamed up with heroes from across the DC Universe, delivering nonstop action and adventure with a touch of comic relief. Blue Beetle, Green Arrow, Aquaman and countless others will get a chance to uphold justice alongside Batman. Though still based in Gotham, Batman will frequently find himself outside city limits, facing situations that are both unfamiliar and exhilarating. With formidable foes around every corner, Batman will still rely on his stealth, resourcefulness and limitless supply of cool gadgets to bring justice home.</p>","updated":1551301349,"_links":{"self":{"href":"http://api.tvmaze.com/shows/900"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/83060"}}}},{"score":11.313427,"show":{"id":22309,"url":"http://www.tvmaze.com/shows/22309/batman-black-and-white","name":"Batman: Black and White","type":"Animation","language":"English","genres":["Action","Adventure","Science-Fiction"],"status":"Ended","runtime":null,"premiered":"2008-12-08","officialSite":null,"schedule":{"time":"","days":["Thursday"]},"rating":{"average":null},"weight":0,"network":null,"webChannel":{"id":3,"name":"Amazon Prime","country":null},"externals":{"tvrage":null,"thetvdb":103851,"imdb":"tt1458796"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/204143.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/81/204143.jpg"},"summary":"<p>This collection includes animated adaptations of ten short stories, bundled into five episodes, that take place in and around Gotham City, featuring Batman and his nefarious villains. Each story comes from the unique perspective of different writers and artists, applying their spin on the Batman universe.</p>","updated":1526271793,"_links":{"self":{"href":"http://api.tvmaze.com/shows/22309"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/970807"}}}},{"score":10.147417,"show":{"id":5951,"url":"http://www.tvmaze.com/shows/5951/the-new-batman-adventures","name":"The New Batman Adventures","type":"Animation","language":"English","genres":["Action","Adventure","Science-Fiction"],"status":"Ended","runtime":30,"premiered":"1997-09-13","officialSite":null,"schedule":{"time":"","days":["Saturday"]},"rating":{"average":8.6},"weight":72,"network":{"id":71,"name":"The WB","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":2720,"thetvdb":77084,"imdb":"tt0118266"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/23/58624.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/23/58624.jpg"},"summary":"<p><b>The New Batman Adventures</b> comes from the creators of Batman and Superman. This series was created because Fox had not lived up to the contract that they had given Batman, so the WB decided to give the show another chance. Bruce Timm then went back and decided to re-design all of the characters from Batman and ended up revamping the series all-together.</p>","updated":1570695137,"_links":{"self":{"href":"http://api.tvmaze.com/shows/5951"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/355338"}}}},{"score":10.147417,"show":{"id":33618,"url":"http://www.tvmaze.com/shows/33618/the-adventures-of-batman","name":"The Adventures of Batman","type":"Animation","language":"English","genres":["Action","Adventure"],"status":"Ended","runtime":15,"premiered":"1968-09-14","officialSite":null,"schedule":{"time":"10:30","days":["Saturday"]},"rating":{"average":null},"weight":0,"network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":248509,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/136/342479.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/136/342479.jpg"},"summary":"<p><b>The Adventures of Batman</b>, with Robin, the Boy Wonder! Batman and Robin, the Dynamic Duo against crime and corruption, whose real identities as millionaire philanthropist Bruce Wayne and his young ward Dick Grayson and known only to Alfred, the faithful butler. Ever alert, they respond swiftly to a signal from the police, and moments later, from the secret Batcave deep beneath Wayne Manor, they roar out to protect life, limb and property as Batman and Robin, caped crimefighters! Batman and Robin, scourge of Gotham City\'s kooky criminals: The Joker, Clown Prince of Crime - The Penguin, pudgy purveyor of perfidy - and the cool, cruel, Mr. Freeze! Watch out, villains, here come... Batman and Robin!</p>","updated":1540405455,"_links":{"self":{"href":"http://api.tvmaze.com/shows/33618"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1364486"}}}}]')},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,o={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(o[t]&&a.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o):o}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),a=n("BEtg"),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"===typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:s,isUndefined:function(e){return"undefined"===typeof e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!==typeof window&&"undefined"!==typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)c(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]="object"===typeof n?e({},n):n}for(var r=0,a=arguments.length;r<a;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,a){e[a]=n&&"function"===typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("HSsa"),i=n("CgaS"),o=n("SntB");function s(e){var t=new i(e),n=a(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=s(n("JEQr"));u.Axios=i,u.create=function(e){return s(o(u.defaults,e))},u.Cancel=n("endd"),u.CancelToken=n("jfS+"),u.isCancel=n("Lmem"),u.all=function(e){return Promise.all(e)},u.spread=n("DfZB"),e.exports=u,e.exports.default=u}},[["lmRi",1,0]]]);