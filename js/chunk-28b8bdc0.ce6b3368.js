(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b8bdc0"],{"107c":function(e,t,r){var n=r("d039"),s=r("da84"),i=s.RegExp;e.exports=n((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1943:function(e,t,r){"use strict";r("63b8")},"25f0":function(e,t,r){"use strict";var n=r("5e77").PROPER,s=r("6eeb"),i=r("825a"),a=r("577e"),o=r("d039"),c=r("ad6d"),l="toString",u=RegExp.prototype,f=u[l],d=o((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),m=n&&f.name!=l;(d||m)&&s(RegExp.prototype,l,(function(){var e=i(this),t=a(e.source),r=e.flags,n=a(void 0===r&&e instanceof RegExp&&!("flags"in u)?c.call(e):r);return"/"+t+"/"+n}),{unsafe:!0})},"44e7":function(e,t,r){var n=r("861d"),s=r("c6b6"),i=r("b622"),a=i("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==s(e))}},"4d63":function(e,t,r){var n=r("83ab"),s=r("da84"),i=r("94ca"),a=r("7156"),o=r("9112"),c=r("9bf2").f,l=r("241c").f,u=r("44e7"),f=r("577e"),d=r("ad6d"),m=r("9f7f"),g=r("6eeb"),b=r("d039"),p=r("1a2d"),j=r("69f3").enforce,_=r("2626"),v=r("b622"),O=r("fce3"),h=r("107c"),x=v("match"),y=s.RegExp,w=y.prototype,E=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,R=/a/g,I=/a/g,A=new y(R)!==R,S=m.UNSUPPORTED_Y,k=n&&(!A||S||O||h||b((function(){return I[x]=!1,y(R)!=R||y(I)==I||"/a/i"!=y(R,"i")}))),B=function(e){for(var t,r=e.length,n=0,s="",i=!1;n<=r;n++)t=e.charAt(n),"\\"!==t?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),s+=t):s+="[\\s\\S]":s+=t+e.charAt(++n);return s},U=function(e){for(var t,r=e.length,n=0,s="",i=[],a={},o=!1,c=!1,l=0,u="";n<=r;n++){if(t=e.charAt(n),"\\"===t)t+=e.charAt(++n);else if("]"===t)o=!1;else if(!o)switch(!0){case"["===t:o=!0;break;case"("===t:E.test(e.slice(n+1))&&(n+=2,c=!0),s+=t,l++;continue;case">"===t&&c:if(""===u||p(a,u))throw new SyntaxError("Invalid capture group name");a[u]=!0,i.push([u,l]),c=!1,u="";continue}c?u+=t:s+=t}return[s,i]};if(i("RegExp",k)){for(var P=function(e,t){var r,n,s,i,c,l,m=this instanceof P,g=u(e),b=void 0===t,p=[],_=e;if(!m&&g&&b&&e.constructor===P)return e;if((g||e instanceof P)&&(e=e.source,b&&(t="flags"in _?_.flags:d.call(_))),e=void 0===e?"":f(e),t=void 0===t?"":f(t),_=e,O&&"dotAll"in R&&(n=!!t&&t.indexOf("s")>-1,n&&(t=t.replace(/s/g,""))),r=t,S&&"sticky"in R&&(s=!!t&&t.indexOf("y")>-1,s&&(t=t.replace(/y/g,""))),h&&(i=U(e),e=i[0],p=i[1]),c=a(y(e,t),m?this:w,P),(n||s||p.length)&&(l=j(c),n&&(l.dotAll=!0,l.raw=P(B(e),r)),s&&(l.sticky=!0),p.length&&(l.groups=p)),e!==_)try{o(c,"source",""===_?"(?:)":_)}catch(v){}return c},T=function(e){e in P||c(P,e,{configurable:!0,get:function(){return y[e]},set:function(t){y[e]=t}})},J=l(y),Z=0;J.length>Z;)T(J[Z++]);w.constructor=P,P.prototype=w,g(s,"RegExp",P)}_("RegExp")},"63b8":function(e,t,r){},"6d75":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),s=function(e){return Object(n["E"])("data-v-1ead93cb"),e=e(),Object(n["C"])(),e},i={class:"auth-register-container"},a=s((function(){return Object(n["j"])("h1",{class:"my-2"},"註冊",-1)})),o={id:"register-form",method:"post",class:"w-75"},c={class:"my-2 d-flex flex-column"},l={class:"my-2 d-flex flex-column"},u={style:{color:"#888"},for:"register_username"},f=Object(n["l"])(" 使用者帳號 "),d=Object(n["l"])("必填。至多150字元。可使用英數字母及 _"),m={class:"my-2 d-flex flex-column"},g={style:{color:"#888"},for:"id_email"},b=Object(n["l"])(" 電子郵件 "),p=Object(n["l"])("必填。請使用正確格式"),j={class:"my-2 d-flex"},_={class:"me-1 flex-fill"},v=s((function(){return Object(n["j"])("label",{style:{color:"#888"},for:"id_last_name",class:"me-2"}," 姓氏 ",-1)})),O={class:"ms-3 flex-fill"},h=s((function(){return Object(n["j"])("label",{style:{color:"#888"},for:"id_first_name",class:"me-2"}," 名字 ",-1)})),x={class:"my-2 d-flex flex-column"},y={style:{color:"#888"},for:"id_password"},w=Object(n["l"])(" 密碼 "),E=s((function(){return Object(n["j"])("div",null,"必須填寫至少8個英數字母並至少使用1個非數字字母",-1)})),R={class:"my-2 d-flex flex-column"},I={style:{color:"#888"},for:"id_password_confirm"},A=Object(n["l"])(" 確認密碼 "),S={class:"mt-4 d-flex flex-column align-items-center"},k=Object(n["l"])(" 註冊 "),B={class:"ms-2 mt-3 text-center"},U=Object(n["l"])(" 已經有帳號了?  "),P=Object(n["l"])(" 點此登入 ");function T(e,t,r,s,T,J){var Z=Object(n["J"])("ZBSErrorMsg"),$=Object(n["J"])("Input"),C=Object(n["J"])("ZBSTinyMsg"),Q=Object(n["J"])("InputPassword"),M=Object(n["J"])("Button"),N=Object(n["J"])("router-link");return Object(n["B"])(),Object(n["i"])("div",i,[a,Object(n["j"])("form",o,[Object(n["j"])("div",c,[(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["H"])(T.register_form.errors,(function(e){return Object(n["B"])(),Object(n["g"])(Z,{key:e},{default:Object(n["Q"])((function(){return[Object(n["m"])(Z),Object(n["l"])(Object(n["L"])(e),1)]})),_:2},1024)})),128))]),Object(n["j"])("div",l,[Object(n["j"])("label",u,[f,Object(n["m"])(Z)]),Object(n["m"])($,{value:T.register_form.username,"onUpdate:value":t[0]||(t[0]=function(e){return T.register_form.username=e}),id:"register_username"},null,8,["value"]),Object(n["m"])(C,null,{default:Object(n["Q"])((function(){return[d]})),_:1})]),Object(n["j"])("div",m,[Object(n["j"])("label",g,[b,Object(n["m"])(Z)]),Object(n["m"])($,{value:T.register_form.email,"onUpdate:value":t[1]||(t[1]=function(e){return T.register_form.email=e}),id:"register_email"},null,8,["value"]),Object(n["m"])(C,null,{default:Object(n["Q"])((function(){return[p]})),_:1})]),Object(n["j"])("div",j,[Object(n["j"])("div",_,[v,Object(n["m"])($,{value:T.register_form.last_name,"onUpdate:value":t[2]||(t[2]=function(e){return T.register_form.last_name=e}),id:"register_last_name"},null,8,["value"])]),Object(n["j"])("div",O,[h,Object(n["m"])($,{value:T.register_form.first_name,"onUpdate:value":t[3]||(t[3]=function(e){return T.register_form.first_name=e}),id:"register_first_name"},null,8,["value"])])]),Object(n["j"])("div",x,[Object(n["j"])("label",y,[w,Object(n["m"])(Z)]),Object(n["m"])(Q,{value:T.register_form.password,"onUpdate:value":t[4]||(t[4]=function(e){return T.register_form.password=e}),id:"register_password"},null,8,["value"]),Object(n["m"])(C,null,{default:Object(n["Q"])((function(){return[E]})),_:1})]),Object(n["j"])("div",R,[Object(n["j"])("label",I,[A,Object(n["m"])(Z)]),Object(n["m"])(Q,{value:T.register_form.password_confirm,"onUpdate:value":t[5]||(t[5]=function(e){return T.register_form.password_confirm=e}),id:"register_password_confirm",required:"required"},null,8,["value"])]),Object(n["j"])("div",S,[Object(n["m"])(M,{type:"primary",block:"",loading:T.register_form.isWaiting,onClick:Object(n["S"])(J.registerFormSubmit,["prevent"])},{default:Object(n["Q"])((function(){return[k]})),_:1},8,["loading","onClick"]),Object(n["j"])("div",B,[U,Object(n["m"])(N,{to:{name:"AuthLogin"}},{default:Object(n["Q"])((function(){return[P]})),_:1})])])])])}r("4d63"),r("ac1f"),r("25f0"),r("b0c0");var J=r("8ff5"),Z={class:"tiny-msg"};function $(e,t,r,s,i,a){return Object(n["B"])(),Object(n["i"])("span",Z,[Object(n["I"])(e.$slots,"default",{},void 0,!0)])}var C={name:"ZBSTinyMsg"},Q=(r("1943"),r("6b0d")),M=r.n(Q);const N=M()(C,[["render",$],["__scopeId","data-v-53c88ce5"]]);var W=N,D=r("faba"),z=r("5efb"),Y=r("b558"),q=r("0829"),F={components:{ZBSErrorMsg:J["a"],ZBSTinyMsg:W,Button:z["a"],Input:Y["a"],InputPassword:q["a"]},name:"Auth Register",data:function(){return{register_form:{isWaiting:!1,username:"",email:"",last_name:"",first_name:"",password:"",password_confirm:"",errors:[],validators:{name:new RegExp("^[_a-zA-Z0-9]+$"),email:new RegExp('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$'),password:new RegExp("^(?=.*[a-zA-Z].*)[_a-zA-Z0-9]+$")}}}},methods:{registerFormSubmit:function(){var e=this;if(this.register_form.isWaiting=!0,this.register_form.errors=[],(!this.register_form.validators.name.test(this.register_form.username)||this.register_form.username.length>150)&&this.register_form.errors.push("使用者帳號格式不符合"),this.register_form.validators.email.test(this.register_form.email)||this.register_form.errors.push("電子郵件格式不符合"),this.register_form.password!==this.register_form.password_confirm&&this.register_form.errors.push("兩次輸入的密碼不一致"),(!this.register_form.validators.password.test(this.register_form.password)||this.register_form.password.length<8)&&this.register_form.errors.push("密碼格式不符合"),this.register_form.errors.length>0)return this.register_form.isWaiting=!1,!1;this.$http.post(D["b"].APIS.AUTHS.REGISTER,{username:this.register_form.username,password:this.register_form.password,email:this.register_form.email,first_name:this.register_form.first_name,last_name:this.register_form.last_name}).then((function(t){200==t.status&&e.$router.push({name:"AuthRegisterDone"}),console.log(t)}),(function(e){console.log(e)})),this.register_form.isWaiting=!1}}};r("80ff");const H=M()(F,[["render",T],["__scopeId","data-v-1ead93cb"]]);t["default"]=H},7156:function(e,t,r){var n=r("1626"),s=r("861d"),i=r("d2bb");e.exports=function(e,t,r){var a,o;return i&&n(a=t.constructor)&&a!==r&&s(o=a.prototype)&&o!==r.prototype&&i(e,o),e}},"80ff":function(e,t,r){"use strict";r("d87f")},9263:function(e,t,r){"use strict";var n=r("577e"),s=r("ad6d"),i=r("9f7f"),a=r("5692"),o=r("7c73"),c=r("69f3").get,l=r("fce3"),u=r("107c"),f=RegExp.prototype.exec,d=a("native-string-replace",String.prototype.replace),m=f,g=function(){var e=/a/,t=/b*/g;return f.call(e,"a"),f.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),b=i.UNSUPPORTED_Y||i.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],j=g||p||b||l||u;j&&(m=function(e){var t,r,i,a,l,u,j,_=this,v=c(_),O=n(e),h=v.raw;if(h)return h.lastIndex=_.lastIndex,t=m.call(h,O),_.lastIndex=h.lastIndex,t;var x=v.groups,y=b&&_.sticky,w=s.call(_),E=_.source,R=0,I=O;if(y&&(w=w.replace("y",""),-1===w.indexOf("g")&&(w+="g"),I=O.slice(_.lastIndex),_.lastIndex>0&&(!_.multiline||_.multiline&&"\n"!==O.charAt(_.lastIndex-1))&&(E="(?: "+E+")",I=" "+I,R++),r=new RegExp("^(?:"+E+")",w)),p&&(r=new RegExp("^"+E+"$(?!\\s)",w)),g&&(i=_.lastIndex),a=f.call(y?r:_,I),y?a?(a.input=a.input.slice(R),a[0]=a[0].slice(R),a.index=_.lastIndex,_.lastIndex+=a[0].length):_.lastIndex=0:g&&a&&(_.lastIndex=_.global?a.index+a[0].length:i),p&&a&&a.length>1&&d.call(a[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&x)for(a.groups=u=o(null),l=0;l<x.length;l++)j=x[l],u[j[0]]=a[j[1]];return a}),e.exports=m},"9f7f":function(e,t,r){var n=r("d039"),s=r("da84"),i=s.RegExp;t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),s=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d87f:function(e,t,r){},fce3:function(e,t,r){var n=r("d039"),s=r("da84"),i=s.RegExp;e.exports=n((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-28b8bdc0.ce6b3368.js.map