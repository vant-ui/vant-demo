webpackJsonp([4],{M93x:function(n,t,e){"use strict";function r(n){e("T+nm")}var u=e("oYh5"),c=e("VU/8"),o=r,a=c(null,u.a,!1,o,null,null);t.a=a.exports},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("kf6B"),u=(e.n(r),e("/5sW")),c=e("M93x"),o=e("cHtD");new u.default({router:o.a,el:"#app",render:function(n){return n(c.a)}})},"T+nm":function(n,t){},cHtD:function(n,t,e){"use strict";e.d(t,"a",function(){return f});var r=e("/5sW"),u=e("/ocq"),c=function(n){return e.e(2).then(function(){return n(e("tuWm"))}.bind(null,e)).catch(e.oe)},o=function(n){return e.e(1).then(function(){return n(e("dsWl"))}.bind(null,e)).catch(e.oe)},a=function(n){return e.e(0).then(function(){return n(e("l/3g"))}.bind(null,e)).catch(e.oe)};r.default.use(u.a);var i=[{path:"*",redirect:"/user"},{name:"user",component:c,meta:{title:"会员中心"}},{name:"cart",component:o,meta:{title:"购物车"}},{name:"goods",component:a,meta:{title:"商品详情"}}];i.forEach(function(n){n.path=n.path||"/"+(n.name||"")});var f=new u.a({routes:i});f.beforeEach(function(n,t,e){var r=n.meta&&n.meta.title;r&&(document.title=r),e()})},kf6B:function(n,t){!function(n,t){function e(){var n=Math.min(r.getBoundingClientRect().width,768);r.style.fontSize=n/7.5+"px"}var r=n.documentElement;e(),t.addEventListener("resize",e)}(document,window)},oYh5:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},u=[],c={render:r,staticRenderFns:u};t.a=c}},["NHnr"]);