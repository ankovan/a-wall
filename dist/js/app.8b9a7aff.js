(function(e){function t(t){for(var n,a,o=t[0],d=t[1],i=t[2],b=0,j=[];b<o.length;b++)a=o[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&j.push(c[a][0]),c[a]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);l&&l(t);while(j.length)j.shift()();return r.push.apply(r,i||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var d=s[o];0!==c[d]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},c={app:0},r=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/a-wall/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=d;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1607:function(e,t,s){"use strict";s("e137")},"1b0f":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23");function c(e,t,s,c,r,a){var o=Object(n["resolveComponent"])("Wall");return Object(n["openBlock"])(),Object(n["createBlock"])(o)}var r=function(e){return Object(n["pushScopeId"])("data-v-cdecc7be"),e=e(),Object(n["popScopeId"])(),e},a={class:"wall"},o=r((function(){return Object(n["createElementVNode"])("div",{class:"welcome"},[Object(n["createElementVNode"])("h1",null,"A wall"),Object(n["createElementVNode"])("p",null,"Here you can write anything!")],-1)})),d={id:"error",class:"notes"},i=r((function(){return Object(n["createElementVNode"])("p",null,"Server is not responding. Try later.",-1)})),l=[i],b={id:"no-posts",class:"notes"},j={key:0};function u(e,t,s,c,r,i){var u=Object(n["resolveComponent"])("PostForm"),f=Object(n["resolveComponent"])("Posts"),p=Object(n["resolveComponent"])("Loading");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[o,Object(n["createVNode"])(u,{disabled:r.isLoading&&r.isError,onCreatePost:t[0]||(t[0]=function(e){return i.createPost(e)})},null,8,["disabled"]),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",d,l,512),[[n["vShow"],!r.isLoading&&r.isError]]),Object(n["createVNode"])(f,{posts:r.posts},null,8,["posts"]),Object(n["withDirectives"])(Object(n["createVNode"])(p,null,null,512),[[n["vShow"],r.isLoading]]),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",b,[r.posts.length?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",j,"There're no posts yet!"))],512),[[n["vShow"],!r.isLoading&&!r.isError]])])}var f=s("1da1"),p=(s("96cf"),{class:"posts"});function m(e,t,s,c,r,a){var o=Object(n["resolveComponent"])("Post");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.posts,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"post",key:t},[Object(n["createVNode"])(o,{post:e},null,8,["post"])])})),128))])}var v={class:"post"},O={class:"date"},h={class:"username"},g={class:"text"};function k(e,t,s,c,r,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",v,[Object(n["createElementVNode"])("div",O,Object(n["toDisplayString"])(e.moment(e.post.created_at,"DD.MM.YYYY hh:mm")),1),Object(n["createElementVNode"])("div",h,Object(n["toDisplayString"])(e.post.username),1),Object(n["createElementVNode"])("div",g,Object(n["toDisplayString"])(e.post.message),1)])}var y=s("a6f4"),w=s("c1df"),E=s.n(w),N=Object(y["a"])({props:{post:Object},methods:{moment:function(e,t){return E()(e).format(t)}}}),V=(s("aab5"),s("6b0d")),z=s.n(V);const x=z()(N,[["render",k],["__scopeId","data-v-19162f67"]]);var I=x,P=Object(y["a"])({props:{posts:Array},components:{Post:I}});const B=z()(P,[["render",m]]);var S=B,M=function(e){return Object(n["pushScopeId"])("data-v-164d0057"),e=e(),Object(n["popScopeId"])(),e},_={class:"form-wrapper"},D={class:"nickname paragraph"},C=M((function(){return Object(n["createElementVNode"])("div",{class:"labels"},[Object(n["createElementVNode"])("span",null,"Username")],-1)})),J={class:"text paragraph"},L=M((function(){return Object(n["createElementVNode"])("div",{class:"labels"},[Object(n["createElementVNode"])("span",null,"Message")],-1)})),T={id:"button-wrapper"},R=["disabled"];function Z(e,t,s,c,r,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",_,[Object(n["createElementVNode"])("form",{onSubmit:t[2]||(t[2]=Object(n["withModifiers"])((function(t){return e.createPost()}),["prevent"]))},[Object(n["createElementVNode"])("div",D,[C,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",required:"",id:"username"},null,512),[[n["vModelText"],e.username]])]),Object(n["createElementVNode"])("div",J,[L,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.message=t}),type:"text",required:"",id:"message"},null,512),[[n["vModelText"],e.message]])]),Object(n["createElementVNode"])("div",T,[Object(n["createElementVNode"])("input",{disabled:e.disabled,type:"submit",class:"submit-button",value:"Submit"},null,8,R)])],32)])}var F=Object(y["a"])({props:{disabled:Boolean},data:function(){return{username:"",message:""}},methods:{createPost:function(){this.$emit("createPost",{username:this.username,message:this.message,date:new Date})}}});s("7f5c");const U=z()(F,[["render",Z],["__scopeId","data-v-164d0057"]]);var Y=U,q={id:"loading-wrapper"},A=Object(n["createElementVNode"])("div",{class:"lds-ellipsis"},[Object(n["createElementVNode"])("div"),Object(n["createElementVNode"])("div"),Object(n["createElementVNode"])("div"),Object(n["createElementVNode"])("div")],-1),W=[A];function X(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",q,W)}s("d0f4");const Q={},G=z()(Q,[["render",X]]);var H=G,$=s("940b"),K="https://fxjgkzqeyxzfrifdkqon.supabase.co",ee="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4amdrenFleXh6ZnJpZmRrcW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0Njg3MjIsImV4cCI6MTk4OTA0NDcyMn0.Tn-5YQsUnsivJ2g4W9n3smeoRz46BeROPsZlPZpwE1w",te=Object($["a"])(K,ee),se={components:{Posts:S,PostForm:Y,Loading:H},data:function(){return{posts:[],isLoading:!0,isError:!1}},mounted:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var s,n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te.from("posts").select("*").order("created_at",{ascending:!1});case 3:if(s=t.sent,n=s.data,c=s.error,!c){t.next=8;break}throw c;case 8:e.posts=n,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.isError=!0;case 14:e.isLoading=!1;case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},methods:{createPost:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function s(){var n,c;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.posts.unshift(e),s.prev=1,s.next=4,te.from("posts").insert({username:e.username,message:e.message});case 4:if(n=s.sent,c=n.error,!c){s.next=8;break}throw c;case 8:s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](1),t.isError=!0;case 13:case"end":return s.stop()}}),s,null,[[1,10]])})))()}}};s("1607");const ne=z()(se,[["render",u],["__scopeId","data-v-cdecc7be"]]);var ce=ne,re={components:{Wall:ce}};s("fc11");const ae=z()(re,[["render",c]]);var oe=ae,de=s("a18c"),ie=s.n(de),le=s("bc3a"),be=s.n(le),je=s("130e"),ue=Object(n["createApp"])(oe).use(ie.a);ue.use(je["a"],be.a),ue.provide("axios",ue.config.globalProperties.axios),ue.mount("#app")},"6e1f":function(e,t,s){},"7f5c":function(e,t,s){"use strict";s("1b0f")},"9bf4":function(e,t,s){},a18c:function(e,t){},a637:function(e,t,s){},aab5:function(e,t,s){"use strict";s("6e1f")},d0f4:function(e,t,s){"use strict";s("a637")},e137:function(e,t,s){},fc11:function(e,t,s){"use strict";s("9bf4")}});
//# sourceMappingURL=app.8b9a7aff.js.map