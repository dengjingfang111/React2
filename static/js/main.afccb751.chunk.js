(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(15),l=n.n(o),r=n(12),u=n(1),m=n(3),i=(n(22),function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement(m.b,{activeClassName:"active",exact:!0,to:"/"},"React"),c.a.createElement(m.b,{activeClassName:"active",to:"/doc"},"\u6587\u6863"),c.a.createElement(m.b,{activeClassName:"active",to:"/tuto"},"\u6559\u7a0b"),c.a.createElement(m.b,{activeClassName:"active",to:"/blog"},"\u535a\u5ba2"),c.a.createElement(m.b,{activeClassName:"active",to:"/comm"},"\u793e\u533a")))}),p=function(e){return console.log(e),c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h2",null,"React"),c.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),c.a.createElement("button",{onClick:function(){return e.history.push("/tuto")}},"\u5165\u95e8\u6559\u7a0b")))},s=(n(28),function(e){return c.a.createElement(u.b,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}),E=[{path:"/",exact:!0,component:p},{path:"/doc",component:function(e){return console.log(e),c.a.createElement("div",{className:"doc"},c.a.createElement("div",{className:"content"},c.a.createElement(u.d,null,e.routes.map((function(e,t){return c.a.createElement(s,Object.assign({key:t},e))}))),c.a.createElement(u.a,{from:"/doc",to:"/doc/core"})),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(m.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/doc/api"},"API")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/doc/hooks"},"Hooks"))))},pri:!0,routes:[{path:"/doc/core",component:function(){return c.a.createElement("div",null,"core")}},{path:"/doc/guide",component:function(){return c.a.createElement("div",null,"guide")}},{path:"/doc/api",component:function(){return c.a.createElement("div",null,"api")}},{path:"/doc/hooks",component:function(){return c.a.createElement("div",null,"hooks")}}]},{path:"/tuto",component:function(){return c.a.createElement("div",null,"Tuto")},pri:!0},{path:"/blog",component:function(){return c.a.createElement("div",null,"Blog")}},{path:"/comm",component:function(){return c.a.createElement("div",null,"Comm")}},{path:"/login",component:function(e){return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){localStorage.setItem("userinfo","tom"),e.history.replace(e.location.state)}},"\u767b\u5f55"))}}];function d(e){var t=e.component,n=Object(r.a)(e,["component"]);return c.a.createElement(u.b,Object.assign({},n,{render:function(e){var a=e.location;return localStorage.getItem("userinfo")?c.a.createElement(t,n):c.a.createElement(u.a,{to:{pathname:"/login",state:a}})}}))}var f=function(){return c.a.createElement(m.a,null,c.a.createElement(i,null),c.a.createElement(u.d,null,E.map((function(e){var t=e.pri,n=Object(r.a)(e,["pri"]);return t?c.a.createElement(d,n):c.a.createElement(u.b,n)})),c.a.createElement(u.b,{exact:!0,path:"/",component:p})))};l.a.render(c.a.createElement(f,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.afccb751.chunk.js.map