(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),c=n(14),i=n.n(c),a=(n(22),n.p,n(23),n(3)),j=n(4),d=n(17),h=n(16),u=n(15),l=n.n(u),b=new(function(){function e(){Object(a.a)(this,e)}return Object(j.a)(e,[{key:"getUsers",value:function(){return l.a.get("http://localhost:8080/api/users")}}]),e}()),o=n(0),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={users:[]},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.getUsers().then((function(t){e.setState({users:t.data})}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container text-center",children:[Object(o.jsx)("h1",{children:" Users List"}),Object(o.jsxs)("table",{className:"table table-sm table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:" User Id"}),Object(o.jsx)("th",{children:" User UserName"}),Object(o.jsx)("th",{children:" User Email Id"}),Object(o.jsx)("th",{children:" User First Name"}),Object(o.jsx)("th",{children:" User Last Name"}),Object(o.jsx)("th",{children:" User Address"})]})}),Object(o.jsx)("tbody",{children:this.state.users.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{children:[" ",e.id]}),Object(o.jsxs)("td",{children:[" ",e.username]}),Object(o.jsxs)("td",{children:[" ",e.useremail]}),Object(o.jsxs)("td",{children:[" ",e.userfirstname]}),Object(o.jsxs)("td",{children:[" ",e.userlastname]}),Object(o.jsxs)("td",{children:[" ",e.useraddress]})]},e.id)}))})]})]})}}]),n}(r.a.Component);n(43);var x=function(){return Object(o.jsx)(O,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),f()}},[[44,1,2]]]);
//# sourceMappingURL=main.3e3940c3.chunk.js.map