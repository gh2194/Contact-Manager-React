(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){e.exports=a(389)},389:function(e,t,a){"use strict";a.r(t);a(155);var n=a(1),r=a.n(n),c=a(151),o=a.n(c),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=a(24),m=a(25),u=a(27),p=a(26),d=a(28),h=a(391),f=a(393),v=a(392),b=(a(361),a(390));function E(e){var t=e.branding;return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(b.a,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/about/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")))))))}E.defaultProps={branding:"My App"};var g=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple App to Manage Contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},y=a(29),C=a.n(y),j=a(45),N=a(46),O=a.n(N),w=a(153),k=a(34),T=r.a.createContext(),x=T.Provider,A=T.Consumer,S=function(e,t){var a=t.type,n=t.payload;switch(a){case"ADD_CONTACT":var r=n.id,c=n.name,o=n.email,i=n.phone,s=n.company;return void 0===s&&(s={name:"None"}),Object(k.a)({},e,{contacts:Object(w.a)(e.contacts).concat([{id:r,name:c,email:o,phone:i,company:s}])});case"UPDATE_CONTACT":var l=n.id;return Object.assign(e.contacts.find(function(e){return e.id===l}),n),e;case"DELETE_CONTACT":var m=n.id;return Object(k.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==m})});default:return e}},D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return S(t,e)})}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(C.a.mark(function e(){var t,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users",e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users");case 3:t=e.sent,a=t.data,this.setState({contacts:a});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=this.props.children;return r.a.createElement(x,{value:e},t)}}]),t}(n.Component),P=(a(386),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,i=function(){var e=Object(j.a)(C.a.mark(function e(t,a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:{id:a}}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:{id:a}});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),s=r.a.createElement(A,null,function(e){var t=e.dispatch;return r.a.createElement("i",{onClick:i.bind(null,t,a),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}})}),l=r.a.createElement(A,null,function(e){var t=e.contacts;return r.a.createElement(b.a,{to:{pathname:"/contact/edit/".concat(a),state:{contacts:t}}},r.a.createElement("i",{className:"fas fa-pencil-alt fa-xs",style:{cursor:"pointer",float:"right",marginTop:"0.1rem",marginRight:"1rem",color:"black"}}))}),m=r.a.createElement("span",null," ",r.a.createElement("i",{onClick:function(){e.setState(function(e){return{showContactInfo:!e.showContactInfo}})},className:"fas fa-sort-".concat(this.state.showContactInfo?"up":"down"),style:{cursor:"pointer"}})),u=this.state.showContactInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):"";return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,m,s,l),u)}}]),t}(n.Component)),M=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-3 mb-4"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),r.a.createElement(A,null,function(e){return e.contacts.map(function(e){return r.a.createElement(P,{key:e.id,contact:e})})}))}}]),t}(n.Component),_=a(61),I=function(e){var t,a=e.field,n=e.value,c=e.type,o=e.onChange,i=e.error,s=a.toLowerCase(),l="addContact-Form-".concat(a),m="Enter ".concat(a,"...");return r.a.createElement("div",{key:a,className:"form-group"},r.a.createElement("label",{htmlFor:l},a),r.a.createElement("input",{name:s,id:l,type:c,value:n,placeholder:m,className:"".concat("form-control form-control-lg"," ").concat((t=i,t?"is-invalid":"")),onChange:o}),i&&r.a.createElement("div",{className:"invalid-feedback"},i))},L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state=Object.assign({},t.stateTemplate),a.onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(function(e){return Object(k.a)({},e,Object(_.a)({},n,r))})},a.onSubmit=function(){var e=Object(j.a)(C.a.mark(function e(t,n){var r,c,o,i,s,l,m;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,i=r.phone,c=c.trim(),o=o.trim(),i=i.trim(),s={name:""===c?"Name must be provided!":"",email:""===o?"Email must be provided!":"",phone:""===i?"Phone must be provided!":""},""===Object.values(s).join("")){e.next=9;break}return a.setState(function(e){return Object(k.a)({},e,{errors:s})}),e.abrupt("return");case 9:return e.next=11,O.a.post("https://jsonplaceholder.typicode.com/users/",{name:c,email:o,phone:i});case 11:l=e.sent,m=l.data,t({type:"ADD_CONTACT",payload:Object(k.a)({},m,{id:Date.now()})}),a.props.history.push("/");case 15:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement(A,null,function(t){var i=t.dispatch;return r.a.createElement("form",{onSubmit:e.onSubmit.bind(null,i)},r.a.createElement(I,{field:"Name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(I,{field:"Email",value:n,onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(I,{field:"Phone",value:c,onChange:e.onChange,type:"number",error:o.phone}),r.a.createElement("input",{className:"btn btn-block btn-light",type:"submit",value:"Add Contact"}))})))}}]),t}(n.Component);L.stateTemplate={name:"",email:"",phone:"",errors:{name:"",email:"",phone:""}};var U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state=Object(k.a)({},a.props.location.state.contacts.find(function(e){return e.id===parseInt(a.props.match.params.id,10)}),{errors:{name:"",email:"",phone:""}}),a.onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(function(e){return Object(k.a)({},e,Object(_.a)({},n,r))})},a.onSubmit=function(){var e=Object(j.a)(C.a.mark(function e(t,n){var r,c,o,i,s,l,m,u,p,d;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,i=r.phone,s=a.state.id,c=c.trim(),o=o.trim(),i=i.trim(),l={name:""===c?"Name must be provided!":"",email:""===o?"Email must be provided!":"",phone:""===i?"Phone must be provided!":""},""===Object.values(l).join("")){e.next=10;break}return a.setState(function(e){return Object(k.a)({},e,{errors:l})}),e.abrupt("return");case 10:return m="https://jsonplaceholder.typicode.com/users/".concat(a.state.id),u={id:s,name:c,email:o,phone:i},e.prev=12,e.next=15,O.a.put(m,u);case 15:p=e.sent,d=p.data,t({type:"UPDATE_CONTACT",payload:d}),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(12),t({type:"UPDATE_CONTACT",payload:u});case 23:a.props.history.push("/");case 24:case"end":return e.stop()}},e,this,[[12,20]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Update Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement(A,null,function(t){var i=t.dispatch;return r.a.createElement("form",{onSubmit:e.onSubmit.bind(null,i)},r.a.createElement(I,{field:"Name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(I,{field:"Email",value:n,onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(I,{field:"Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{className:"btn btn-block btn-light",type:"submit",value:"Update Contact"}))})))}}]),t}(n.Component),R=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},r.a.createElement("span",{className:"text-danger"},e.location.pathname)," does not exist.."))},W=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(h.a,{basename:"".concat("/Contact-Manager-React","/")},r.a.createElement("div",{className:"App"},r.a.createElement(E,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(f.a,null,r.a.createElement(v.a,{exact:!0,path:"/",component:M}),r.a.createElement(v.a,{exact:!0,path:"/contact/add",component:L}),r.a.createElement(v.a,{exact:!0,path:"/contact/edit/:id",component:U}),r.a.createElement(v.a,{exact:!0,path:"/about/",component:g}),r.a.createElement(v.a,{component:R}))))))}}]),t}(n.Component);o.a.render(r.a.createElement(W,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Contact-Manager-React",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Contact-Manager-React","/service-worker.js");i?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):s(e)})}}()}},[[154,2,1]]]);
//# sourceMappingURL=main.8408a435.chunk.js.map