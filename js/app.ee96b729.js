(function(e){function t(t){for(var a,r,u=t[0],l=t[1],i=t[2],d=0,s=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(s.length)s.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-291d77e7":"e7ff7615","chunk-2d0b2add":"2edac6a9","chunk-2d0c9abc":"cd676474","chunk-2d0e95df":"33518e02","chunk-2d22d746":"2074e03e","chunk-38562b58":"3a7cab15","chunk-6a145753":"f8786916","chunk-498fc276":"1fdae89f","chunk-0f20c5e0":"d6c749df","chunk-28b8bdc0":"ce6b3368","chunk-600cec9c":"56527ca2","chunk-e118ed48":"be4d296b","chunk-f0f0feda":"39de7278"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-291d77e7":1,"chunk-38562b58":1,"chunk-498fc276":1,"chunk-0f20c5e0":1,"chunk-28b8bdc0":1,"chunk-600cec9c":1,"chunk-e118ed48":1,"chunk-f0f0feda":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-291d77e7":"583f9db8","chunk-2d0b2add":"31d6cfe0","chunk-2d0c9abc":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-38562b58":"6b86d352","chunk-6a145753":"31d6cfe0","chunk-498fc276":"9a1ca094","chunk-0f20c5e0":"9a9651ce","chunk-28b8bdc0":"93d2f8ca","chunk-600cec9c":"b33ca845","chunk-e118ed48":"3921d586","chunk-f0f0feda":"0deeecbd"}[e]+".css",o=l.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){i=s[u],d=i.getAttribute("data-href");if(d===a||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=u(e);var s=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/ZBServiceFrontend/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f16":function(e,t,n){},"1c1f":function(e,t,n){},"29eb":function(e,t,n){"use strict";n("381d")},"341e":function(e,t,n){"use strict";n("1c1f")},"381d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"app-container"};function o(e,t,n,o,c,u){var l=Object(a["J"])("ZBSHeader"),i=Object(a["J"])("router-view"),d=Object(a["J"])("ZBSFooter");return Object(a["B"])(),Object(a["i"])(a["b"],null,[Object(a["m"])(l),Object(a["j"])("div",r,[Object(a["m"])(i)]),Object(a["m"])(d)],64)}var c=function(e){return Object(a["E"])("data-v-6d8d25e7"),e=e(),Object(a["C"])(),e},u={class:"navbar navbar-expand-lg navbar-light"},l={class:"container-fluid"},i=["src"],d=Object(a["l"])(" ZBService "),s=c((function(){return Object(a["j"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["j"])("span",{class:"navbar-toggler-icon"})],-1)})),f={class:"collapse navbar-collapse",id:"navbarNav"},h={class:"navbar-nav"},b={class:"nav-item"},p=Object(a["l"])(" 主頁 "),v={class:"nav-item dropdown"},m=c((function(){return Object(a["j"])("a",{class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false"}," ACGL ",-1)})),g={class:"dropdown-menu"},j=Object(a["l"])(" 個人主頁 "),k=c((function(){return Object(a["j"])("li",null,[Object(a["j"])("hr",{class:"dropdown-divider"})],-1)})),O=Object(a["l"])(" 動漫列表 "),A={key:0},_=c((function(){return Object(a["j"])("li",null,[Object(a["j"])("hr",{class:"dropdown-divider"})],-1)})),S=Object(a["l"])(" 新增動漫 "),w={key:0,class:"ms-auto d-flex gap-2"},y=Object(a["l"])(" 登入 "),I=Object(a["l"])(" 註冊 "),P={key:1,class:"ms-auto d-flex gap-2"},E=Object(a["l"])(" 登出 ");function B(e,t,n,r,o,c){var B=Object(a["J"])("router-link");return Object(a["B"])(),Object(a["i"])("header",null,[Object(a["j"])("nav",u,[Object(a["j"])("div",l,[Object(a["m"])(B,{to:{name:"Home"},class:"navbar-brand"},{default:Object(a["Q"])((function(){return[Object(a["j"])("img",{src:"/img/icons/favicon-96x96.png",alt:"",width:"30",height:"24",class:"d-inline-block align-text-top"},null,8,i),d]})),_:1}),s,Object(a["j"])("div",f,[Object(a["j"])("ul",h,[Object(a["j"])("li",b,[Object(a["m"])(B,{to:{name:"Home"},class:"nav-link"},{default:Object(a["Q"])((function(){return[p]})),_:1})]),Object(a["j"])("li",v,[m,Object(a["j"])("ul",g,[Object(a["j"])("li",null,[Object(a["m"])(B,{to:{name:"ACGL"},class:"dropdown-item"},{default:Object(a["Q"])((function(){return[j]})),_:1})]),k,Object(a["j"])("li",null,[Object(a["m"])(B,{to:{name:"ACGLAnime"},class:"dropdown-item"},{default:Object(a["Q"])((function(){return[O]})),_:1})]),(Object(a["B"])(),Object(a["i"])("div",A,[_,Object(a["j"])("li",null,[Object(a["m"])(B,{to:{name:"ACGLAnime"},class:"dropdown-item"},{default:Object(a["Q"])((function(){return[S]})),_:1})])]))])])])]),this.$store.state.isAuth?(Object(a["B"])(),Object(a["i"])("div",P,[Object(a["m"])(B,{to:{name:"AuthLogout"},class:"btn btn-primary"},{default:Object(a["Q"])((function(){return[E]})),_:1})])):(Object(a["B"])(),Object(a["i"])("div",w,[Object(a["m"])(B,{to:{name:"AuthLogin"},class:"btn btn-primary"},{default:Object(a["Q"])((function(){return[y]})),_:1}),Object(a["m"])(B,{to:{name:"AuthRegister"},class:"btn btn-primary"},{default:Object(a["Q"])((function(){return[I]})),_:1})]))])])])}var H={name:"ZBSHeader"},C=(n("341e"),n("6b0d")),L=n.n(C);const T=L()(H,[["render",B],["__scopeId","data-v-6d8d25e7"]]);var x=T,N=function(e){return Object(a["E"])("data-v-0dd86a1e"),e=e(),Object(a["C"])(),e},G=N((function(){return Object(a["j"])("div",{class:"d-flex flex-column justify-content-center align-items-center"},[Object(a["j"])("p",null,"這個網頁由 Z.B. Weng 所製作並提供，目前作為技術練習及展示用。"),Object(a["j"])("p",null,"有任何問題歡迎聯絡："),Object(a["j"])("p",null,[Object(a["l"])(" Email: "),Object(a["j"])("a",{href:"mailto:chaosxlive@gmail.com"},"chaosxlive@gmail.com")])],-1)})),F=[G];function U(e,t,n,r,o,c){return Object(a["B"])(),Object(a["i"])("footer",null,F)}var Z={name:"ZBSFooter"};n("29eb");const R=L()(Z,[["render",U],["__scopeId","data-v-0dd86a1e"]]);var Q=R,J={name:"Home",components:{ZBSHeader:x,ZBSFooter:Q}};n("b140");const M=L()(J,[["render",o]]);var D=M,K=n("9483");Object(K["a"])("".concat("/ZBServiceFrontend/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0"),n("a15b"),n("4de4"),n("d81d");var W=n("6c02"),$=n("cf05"),q=n.n($),z={class:"home"},V=Object(a["j"])("img",{alt:"Vue logo",src:q.a},null,-1);function Y(e,t,n,r,o,c){var u=Object(a["J"])("HelloWorld");return Object(a["B"])(),Object(a["i"])("div",z,[V,Object(a["m"])(u,{msg:"Welcome to Your Vue.js App"})])}var X={class:"hello"},ee=Object(a["k"])('<p data-v-5d670a26> For a guide and recipes on how to configure / customize this project,<br data-v-5d670a26> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>vue-cli documentation</a>. </p><h3 data-v-5d670a26>Installed CLI Plugins</h3><ul data-v-5d670a26><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5d670a26>babel</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-5d670a26>pwa</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5d670a26>router</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-5d670a26>vuex</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5d670a26>eslint</a></li></ul><h3 data-v-5d670a26>Essential Links</h3><ul data-v-5d670a26><li data-v-5d670a26><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>Core Docs</a></li><li data-v-5d670a26><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>Forum</a></li><li data-v-5d670a26><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>Community Chat</a></li><li data-v-5d670a26><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5d670a26>Twitter</a></li><li data-v-5d670a26><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>News</a></li></ul><h3 data-v-5d670a26>Ecosystem</h3><ul data-v-5d670a26><li data-v-5d670a26><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>vue-router</a></li><li data-v-5d670a26><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>vuex</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5d670a26>vue-devtools</a></li><li data-v-5d670a26><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>vue-loader</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5d670a26>awesome-vue</a></li></ul>',7);function te(e,t,n,r,o,c){return Object(a["B"])(),Object(a["i"])("div",X,[Object(a["j"])("h1",null,Object(a["L"])(n.msg),1),ee])}var ne={name:"HelloWorld",props:{msg:String}};n("808b");const ae=L()(ne,[["render",te],["__scopeId","data-v-5d670a26"]]);var re=ae,oe={name:"Home",components:{HelloWorld:re}};const ce=L()(oe,[["render",Y]]);var ue=ce,le=[{path:"/",name:"Home",component:ue},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/auth",name:"Auth",redirect:{name:"Home"},meta:{title:"ZBService"},component:function(){return n.e("chunk-e118ed48").then(n.bind(null,"3bfd"))},children:[{path:"register",name:"AuthRegister",meta:{title:"會員註冊"},component:function(){return Promise.all([n.e("chunk-6a145753"),n.e("chunk-498fc276"),n.e("chunk-28b8bdc0")]).then(n.bind(null,"6d75"))}},{path:"register_done",name:"AuthRegisterDone",meta:{title:"註冊完成"},component:function(){return n.e("chunk-291d77e7").then(n.bind(null,"c4d0"))}},{path:"login",name:"AuthLogin",meta:{title:"會員登入"},component:function(){return Promise.all([n.e("chunk-6a145753"),n.e("chunk-498fc276"),n.e("chunk-0f20c5e0")]).then(n.bind(null,"bd01"))}},{path:"logout",name:"AuthLogout",meta:{title:"會員登出"},component:function(){return n.e("chunk-2d0c9abc").then(n.bind(null,"59ac"))}}]},{path:"/acgl",name:"ACGL",redirect:{name:"Home"},component:function(){return n.e("chunk-2d0b2add").then(n.bind(null,"24af"))},meta:{title:"ZBService"},children:[{path:"anime",name:"ACGLAnime",meta:{title:"動漫"},redirect:{name:"ACGLAnimeIndex"},component:function(){return n.e("chunk-f0f0feda").then(n.bind(null,"6add"))},children:[{path:"index",name:"ACGLAnimeIndex",meta:{title:"列表"},component:function(){return n.e("chunk-38562b58").then(n.bind(null,"31e0"))}},{path:"detail/:uuid",name:"ACGLAnimeDetail",component:function(){return Promise.all([n.e("chunk-6a145753"),n.e("chunk-600cec9c")]).then(n.bind(null,"5520"))},meta:{title:"{NAMELOADING}"}}]}]},{path:"/404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}},{path:"/:pathMatch(.*)*",name:"NotFound",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],ie=Object(W["a"])({history:Object(W["b"])("/ZBServiceFrontend/"),routes:le});ie.beforeEach((function(e,t,n){document.title=e.matched.map((function(e){return e.meta&&e.meta.title})).filter((function(e){return!!e})).reverse().join(" - "),n()}));var de=ie,se=n("5502"),fe=Object(se["a"])({state:{name:null,refresh_token:null,access_token:null,isAuth:!1},mutations:{auth_login:function(e,t){var n=t.refresh_token,a=t.access_token;e.refresh_token=n,e.access_token=a,e.isAuth=!0,localStorage.setItem("refresh_token",n),localStorage.setItem("access_token",a)},auth_logout:function(e){e.refresh_token=null,e.access_token=null,e.isAuth=null,localStorage.removeItem("refresh_token"),localStorage.removeItem("access_token")}},actions:{auth_login:function(e,t){var n=e.commit,a=t.app,r=t.url,o=t.username,c=t.password,u=a.$http.post(r,{username:o,password:c}).then((function(e){return 200==e.status?(n("auth_login",{access_token:e.data.access,refresh_token:e.data.refresh}),!0):(console.log(e),!1)}),(function(e){return console.log(e),!1}));return u},auth_logout:function(e){var t=e.commit;t("auth_logout")}},modules:{}}),he=n("bc3a"),be=n.n(he),pe=n("130e"),ve=(n("202f"),n("faba")),me=Object(a["f"])(D).use(fe).use(de).use(pe["a"],be.a).mount("#app");me.$http.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;if(401===e.response.status&&!t._retry){t._retry=!0;var n=window.localStorage.getItem("refresh_token");return be.a.post(ve["b"].APIS.AUTHS.TOKENS.REFRESH,{refresh_token:n}).then((function(e){var n=e.data;return localStorage.setItem("access_token",n.access_token),localStorage.setItem("refresh_token",n.refresh_token),me.$http.defaults.headers.common["Authorization"]="Bearer "+n.access_token,t.headers["Authorization"]="Bearer "+n.access_token,be()(t)}))}}))},"808b":function(e,t,n){"use strict";n("b62b")},b140:function(e,t,n){"use strict";n("0f16")},b62b:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},faba:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a="http://219.70.195.108:8000/",r=a+"api/",o={BASE:"http://127.0.0.1:8000/"};o.API=o.BASE+"api/",o.APIS={},o.APIS.ACGL=o.API+"acgl/",o.APIS.ACGLS={},o.APIS.ACGLS.ANIME=o.APIS.ACGL+"anime/",o.APIS.AUTH=o.API+"auth/",o.APIS.AUTHS={},o.APIS.AUTHS.REGISTER=o.APIS.AUTH+"register/",o.APIS.AUTHS.LOGIN=o.APIS.AUTH+"login/",o.APIS.AUTHS.TOKEN=o.APIS.AUTH+"token/",o.APIS.AUTHS.TOKENS={},o.APIS.AUTHS.TOKENS.REFRESH=o.APIS.AUTHS.TOKEN+"refresh/"}});
//# sourceMappingURL=app.ee96b729.js.map