(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{192:function(e,t,a){e.exports=a.p+"static/media/no_image.ddfab154.png"},207:function(e,t,a){e.exports=a(368)},212:function(e,t,a){},217:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(49),l=a.n(s),o=(a(212),a(128),a(215),a(216),a(43)),c=a(42),i=(a(217),a(24)),m=a(25),u=a(27),h=a(26),p=a(28),d=a(377),v=a(63),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={query:""},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("usertoken"),this.props.history.push("/")}},{key:"handleInputChange",value:function(e,t){this.setState({query:t.value})}},{key:"search",value:function(e,t){e.preventDefault(),this.state.query.length>0&&(localStorage.setItem("query",this.state.query),this.props.history.push("/search"),window.location.reload())}},{key:"render",value:function(){var e=r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/login",className:"nav-link"},r.a.createElement("i",{className:"fas fa-sign-in-alt f3 pa2"})," Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/register",className:"nav-link"},r.a.createElement("i",{className:"fas fa-user-plus f3 pa2"})," Register"))),t=r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/profile",className:"nav-link"},r.a.createElement("i",{className:"far fa-user f3 pa2"})," User")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"",onClick:this.logOut.bind(this),className:"nav-link"},r.a.createElement("i",{className:"fas fa-sign-out-alt f3 pa2"})," Logout")));return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark rounded"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png",alt:"Recsys",width:110,height:50})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".navbar-collapse"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home f3 pa2"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/browse",className:"nav-link"},r.a.createElement("i",{className:"fas fa-film f3 pa2"})," All Movies"))),r.a.createElement("ul",{className:"navbar-nav mr-auto pa2"},r.a.createElement(d.a,{onSubmit:this.search.bind(this)},r.a.createElement(d.a.Input,{icon:r.a.createElement(v.a,{name:"search",inverted:!0,circular:!0,link:!0,onClick:this.search.bind(this)}),onChange:this.handleInputChange.bind(this),placeholder:"Search...",autoFocus:!0}))),r.a.createElement("ul",{className:"nav navbar-nav navbar-right"}),localStorage.usertoken?t:e))}}]),t}(n.Component),f=Object(c.e)(b),g=a(89),E=a(40),j=a(68),N=a.n(j),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(E.a)(e)),e.onSubmit=e.onSubmit.bind(Object(E.a)(e)),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return N.a.post("users/login",{username:e.username,password:e.password}).then((function(e){return localStorage.setItem("usertoken",e.data),e.data})).catch((function(e){console.log(e)}))}({username:this.state.username,password:this.state.password}).then((function(e){e.error||t.props.history.push("/profile")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto shadow-lg p-4 mb-4 bg-white rounded-lg"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{id:"title"},"Log in"),r.a.createElement("div",{className:"form-group p-2"},r.a.createElement("input",{type:"text",className:"form-control p-4 border-dark bg-white",name:"username",placeholder:"Enter username",value:this.state.username,onChange:this.onChange})),r.a.createElement("div",{className:"form-group p-2"},r.a.createElement("input",{type:"password",className:"form-control p-4 border-dark",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-dark fas fa-sign-in-alt f3 w-20 p-3"})))))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={username:"",email:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(E.a)(e)),e.onSubmit=e.onSubmit.bind(Object(E.a)(e)),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return N.a.post("users/register",{username:e.username,email:e.email,password:e.password}).then((function(e){console.log("Registered")}))}({username:this.state.username,email:this.state.email,password:this.state.password}).then((function(e){t.props.history.push("/login")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto shadow-lg p-4 mb-4 bg-white rounded-lg"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{id:"title"},"Register"),r.a.createElement("div",{className:"form-group p-2"},r.a.createElement("input",{type:"text",className:"form-control p-4 border-dark",name:"username",placeholder:"Enter your username",value:this.state.username,onChange:this.onChange})),r.a.createElement("div",{className:"form-group p-2"},r.a.createElement("input",{type:"email",className:"form-control p-4 border-dark",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form-group p-2"},r.a.createElement("input",{type:"password",className:"form-control p-4 border-dark",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-dark fas fa-user-plus f3 w-20 p-3"})))))}}]),t}(n.Component),y=a(61),k=a.n(y),S=a(29),C=a(121),x=a.n(C),P=a(191),I=a(379),R=a(196),q=a(382),M=a(192),D=a.n(M),A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t="";return t="#N/A"===this.props.movie.poster?D.a:"http://image.tmdb.org/t/p/w300"+this.props.movie.poster,r.a.createElement("div",{className:"dib pa3 grow"},r.a.createElement(I.a,null,r.a.createElement(R.a,{src:t,wrapped:!0,ui:!1}),r.a.createElement(I.a.Content,null,r.a.createElement(I.a.Header,null,this.props.movie.title)),r.a.createElement(I.a.Content,null,r.a.createElement(q.a,{rating:this.props.movie.rating,size:"massive",icon:"star",maxRating:5,clearable:!0,onRate:function(){var t=Object(P.a)(x.a.mark((function t(a,n){var r,s,l,o,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.usertoken?(r=localStorage.usertoken,s=k()(r),l=s.identity.username,o=e.props.movie.title,c=n.rating,a={title:o,rating:c,user:l},N.a.post("/add_rating",{title:a.title,rating:a.rating,user:a.user})):window.alert("Your rating is not saved. You need to log in first."),window.location.reload();case 2:case"end":return t.stop()}var a}),t)})));return function(e,a){return t.apply(this,arguments)}}()}))))}}]),t}(n.Component);var _=function(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),a=t[0],s=t[1],l=localStorage.usertoken,o="/rated_movies/"+k()(l).identity.username;Object(n.useEffect)((function(){fetch(o).then((function(e){return e.json().then((function(e){s(e.movies)}))}))}),[]);for(var c=[],i=0;i<a.length;i++){var m={id:i,title:a[i].title,poster:a[i].poster_path,rating:a[i].rating};c.push(m)}return c.map((function(e){return r.a.createElement(A,{key:e.id,movie:e})}))},L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={username:"",email:"",errors:{}},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=k()(e);this.setState({username:t.identity.username,email:t.identity.email})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{id:"title",className:"text-center"},"Profile")),r.a.createElement("table",{className:"table col-md-6 mx-auto"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Username"),r.a.createElement("td",null,this.state.username)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,this.state.email)))))),r.a.createElement("h1",{id:"title"},"Rated Movies"),r.a.createElement(_,null))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=[],t=0,a=0,n=Object.entries(this.props.movies);a<n.length;a++){var s=n[a],l=Object(S.a)(s,2),o={id:t,title:l[0],poster:l[1]};e.push(o),t++}return e.map((function(e){return r.a.createElement(A,{key:e.id,movie:e})}))}}]),t}(n.Component);var H=function(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("/index").then((function(e){return e.json().then((function(e){s(e)}))}))}),[]),r.a.createElement("div",{className:".f2 tc pa4"},r.a.createElement("h1",{id:"title"},"Popular Movies"),r.a.createElement(B,{movies:a}))},J=a(380);var U=function(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(1),o=Object(S.a)(l,2),c=o[0],i=o[1],m=Object(n.useState)("/browse/1"),u=Object(S.a)(m,2),h=u[0],p=u[1];Object(n.useEffect)((function(){fetch(h).then((function(e){return e.json().then((function(e){s(e)}))}))}),[h]);var d=function(e,t){i(t.activePage),p("\\browse\\"+t.activePage)};return r.a.createElement("div",{className:".f2 tc pa4"},r.a.createElement("h1",{id:"title"},"All Movies"),r.a.createElement(J.a,{activePage:c,onPageChange:d,totalPages:100,ellipsisItem:null}),r.a.createElement("div",null,r.a.createElement(B,{movies:a})),r.a.createElement(J.a,{activePage:c,onPageChange:d,totalPages:100,ellipsisItem:null}))};var V=function(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("/movies?search="+localStorage.getItem("query")+"&limit=10").then((function(e){return e.json().then((function(e){console.log(e),s(e)}))}))}),[]),r.a.createElement("div",{className:".f2 tc pa4"},r.a.createElement("h1",{id:"title"},"Searched Movies"),r.a.createElement(B,{movies:a}))};var W=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{exact:!0,path:"/register",component:w}),r.a.createElement(c.a,{exact:!0,path:"/search",component:V}),r.a.createElement(c.a,{exact:!0,path:"/login",component:O}),r.a.createElement(c.a,{exact:!0,path:"/profile",component:L}))),r.a.createElement(c.a,{exact:!0,path:"/",component:H}),r.a.createElement(c.a,{exact:!0,path:"/browse",component:U}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[207,1,2]]]);
//# sourceMappingURL=main.8d021577.chunk.js.map