(this.webpackJsonphourtracking=this.webpackJsonphourtracking||[]).push([[0],{131:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(18),n=a.n(s),r=(a(85),a(86),a(15)),o=a(8),i=a(7),l=(a(87),a(9)),j=a.n(l),u=a(10),b=a(27),O=a(26),d=a.p+"static/media/croppedTrans.794526d9.png",m=a(2);a(38).config();var h=function(){Object(u.c)((function(e){return e})).user[0];var e=Object(o.f)(),t=Object(c.useState)(""),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),h=l[0],p=l[1],x=Object(c.useState)(""),f=Object(i.a)(x,2),g=f[0],v=f[1],N=Object(c.useState)(),S=Object(i.a)(N,2),k=S[0],C=S[1],y=Object(c.useState)(""),w=Object(i.a)(y,2),M=w[0],D=w[1],T=Object(c.useState)(""),B=Object(i.a)(T,2),U=B[0],R=B[1],L=Object(c.useState)(!1),P=Object(i.a)(L,2),E=P[0],I=P[1],F=Object(c.useState)(!0),Y=Object(i.a)(F,2),J=Y[0],A=Y[1];Object(c.useEffect)((function(){j.a.get("http://192.168.0.49:3001/api/getroles").then((function(e){var t=e.data.result;if(t){var a=t.map((function(e){return{value:e.role,label:e.role}}));C(a),A(!1)}t.checkMessage&&alert(t.checkMessage)})).catch((function(e){alert(JSON.stringify(e.message))}))}),[]);return Object(m.jsx)("div",{className:"mainDiv",children:Object(m.jsx)("div",{className:"centerDiv",children:Object(m.jsxs)("div",{className:"createUserBox",children:[Object(m.jsx)("img",{src:d,className:"topLogoCreateUser"}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{className:"loginText",children:"Create User"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"formText",children:"Full Name"}),Object(m.jsx)("input",{className:"formBox",type:"text",name:"Firstname",onChange:function(e){n(e.target.value)},value:s}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"formText",children:"Username"}),Object(m.jsx)("input",{className:"formBox",type:"text",name:"username",onChange:function(e){p(e.target.value)},value:h}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"formText",children:"Password"}),Object(m.jsx)("input",{className:"formBox",type:"password",name:"Password",onChange:function(e){v(e.target.value)},value:g}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"formText",children:"Role"}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"roleSelectionPosition",children:Object(m.jsx)("div",{className:"roleSelectionClass",children:Object(m.jsx)(O.a,{options:k,onChange:function(e){D(e)},value:M,isLoading:J,placeholder:"Select Role!"})})}),"supervisor"===M.value&&Object(m.jsx)("input",{className:"formBox",type:"password",placeholder:"Supervisor Password:",onChange:function(e){R(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){I(!0),j.a.post("http://192.168.0.49:3001/api/newUser",{firstname:s,username:h,password:g,role:M.value,supervisorPass:U}).then((function(e){e.data.checkMessage&&"User added sucessfully"!==e.data.checkMessage?(alert(e.data.checkMessage),I(!1)):"User added sucessfully"==e.data.checkMessage?(alert(e.data.checkMessage),n(""),p(""),v(""),D(""),R(""),I(!1)):(n(""),p(""),v(""),D(""),R(""),I(!1))})).catch((function(e){alert(JSON.stringify(e.message)),I(!1)}))},className:"loginButton",disabled:E,children:Object(m.jsx)("span",{className:"loginButtText",children:"CREATE"})}),Object(m.jsx)("br",{}),Object(m.jsx)(b.a,{onClick:function(){e.push("/dashboard")},className:"backButton"})]})})})},p=a(61),x=a.n(p),f=a(75),g=(a(131),a(132).createStore),v="SET_USER",N="REMOVE_USER";function S(){return{type:N}}var k={user:null},C=g((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{user:t.payload};case N:return{user:null};default:return e}})),y=a(35),w=a.n(y);a(38).config();var M=Object(o.g)((function(){var e,t=Object(u.c)((function(e){return e.user})),a=Object(c.useState)(t[0]),s=Object(i.a)(a,2),n=s[0],r=(s[1],Object(c.useState)("")),l=Object(i.a)(r,2),b=l[0],O=l[1],h=Object(c.useState)(!1),p=Object(i.a)(h,2),g=p[0],v=p[1];null!=t[0].lastCheckIn&&(e=t[0].lastCheckIn.replace("Z","").replace("T"," "));var N=Object(c.useState)(e),k=Object(i.a)(N,2),C=k[0],y=k[1],M=Object(u.b)(),D=Object(o.f)(),T=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"mainDiv",children:Object(m.jsxs)("div",{children:["employee"!==n.role&&Object(m.jsxs)("div",{className:"sidenav",children:[Object(m.jsxs)("div",{className:"menuName",children:[n.role.toUpperCase()," MENU"]}),Object(m.jsx)("a",{onClick:function(){D.push("createUser")},children:"Create User"}),Object(m.jsx)("a",{onClick:function(){D.push("/manageUsers")},children:"Manage Users"}),Object(m.jsx)("a",{onClick:function(){D.push("/reports")},children:"Reports"})]}),Object(m.jsxs)("div",{className:"employee"!==n.role?"notCenterMain":"centerMain",children:[Object(m.jsxs)("p",{className:"welcomeTextDashboard",children:[Object(m.jsx)("img",{src:d,className:"topLogoDash"}),Object(m.jsx)("br",{}),"Welcome, ",n.firstname,Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Last CheckIn: ",C||"NULL"]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("p",{className:"currentStats",children:["Current date: ",(new Date).toISOString().slice(0,10),Object(m.jsx)("br",{}),"Current time: ",(new Date).toLocaleTimeString("el-GR",{hour12:!1})]}),Object(m.jsx)("button",{disabled:g,onClick:function(){!function(){if(v(!0),null!=C)alert("Please check out before checking in!"),T();else{var e=(new Date).toISOString().slice(0,10),a=(new Date).toLocaleTimeString("el-GR",{hour12:!1}),c="".concat(e," ").concat(a);j.a.post("http://192.168.0.49:3001/api/checkinpost",{username:t[0].username,datetime:c}).then((function(e){alert(e.data.checkMessage),O(""),y(c),T()})).catch((function(e){alert("Error! ".concat(e)),T()}))}}()},id:"in",className:"BUTTONS",children:"Check In"}),Object(m.jsx)("button",{disabled:g,onClick:function(){!function(){v(!0);var e=(new Date).toISOString().slice(0,10),t=(new Date).toLocaleTimeString("el-GR",{hour12:!1}),a="".concat(e," ").concat(t);j.a.get("".concat("http://192.168.0.49:3001/api/","getCheckIn?username=").concat(n.username)).then((function(e){var t=e.data[0];if(null===t.lastCheckIn)alert("Please check in before checking out!"),T();else{var c=t.lastCheckIn.replace("Z","").replace("T"," ");y(null);var s=w()(a,"YYYY/MM/DD HH:mm:ss").diff(w()(c,"YYYY/MM/DD HH:mm:ss")),r=w.a.duration(s),o=Math.floor(r.asHours())+w.a.utc(s).format(".mm");j.a.post("http://192.168.0.49:3001/api/checkOut",{username:n.username,checkIn:c,checkOut:a,totalHours:o,comments:b}).then((function(e){e.data.checkMessage?alert(e.data.checkMessage):(alert("Check Out Sucessfull! Worktime: ".concat(o)),O("")),T()})).catch((function(e){alert(JSON.stringify(e.message)),T()}))}})).catch((function(e){alert(JSON.stringify(e.message)),T()}))}()},id:"out",className:"BUTTONS",children:"Check Out"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{id:"commentBox",type:"text",name:"comments",value:b,onChange:function(e){!function(e){O(e.target.value)}(e)},placeholder:"Checkout Comments"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){D.push("/"),M(S())},id:"dashboardDoneButton",children:"Done!"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})]})})}));a(134);a(38).config();var D=Object(o.g)((function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),l=r[0],b=r[1],O=Object(u.b)(),h=Object(o.f)();Object(c.useEffect)((function(){O(S())}),[]);return Object(m.jsx)("div",{className:"mainDiv",children:Object(m.jsx)("div",{className:"centerDiv",children:Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsx)("img",{src:d,className:"topLogo"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"loginText",children:"Login "})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"inputs",children:[Object(m.jsx)("span",{className:"formText",children:"Username   "}),Object(m.jsx)("input",{className:"formBox",type:"text",name:"username",onChange:function(e){s(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"formText",children:"Password   "}),Object(m.jsx)("input",{className:"formBox",type:"password",name:"Password",onChange:function(e){b(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"loginButton",onClick:function(){j.a.post("http://192.168.0.49:3001/api/login",{username:a,password:l}).then((function(e){if(e.data.message)alert(e.data.message);else if(e.data[0]){var t=e.data;O(function(e){return{type:v,payload:e}}(t));h.push("/dashboard")}else alert("Whoops! Something went wrong. Please try again")})).catch((function(e){alert("Error! ".concat(e.message))}))},children:Object(m.jsx)("span",{className:"loginButtText",children:"Login"})})]})]})})})})),T=a(31),B=a(16),U=a(40);function R(){var e=Object(o.f)();return Object(m.jsxs)("div",{style:{height:"100%"},children:[Object(m.jsx)("img",{src:d,className:"topLogoNoAccess"}),Object(m.jsx)("br",{}),Object(m.jsx)(U.a,{style:{width:"100px",height:"150px"}}),Object(m.jsx)("p",{style:{fontSize:"22px"},children:"You have no access to this page"}),Object(m.jsx)("button",{onClick:function(){e.push("/")},className:"backToHomeErrorPage",children:"Back to home"})]})}var L=["isLogged","component","isRestricted","acceptedRoles"];function P(e){var t,a=e.isLogged,c=e.component,s=e.isRestricted,n=e.acceptedRoles,r=Object(B.a)(e,L);Object(o.f)();return a&&(t=a[0]),Object(m.jsx)(o.a,Object(T.a)(Object(T.a)({},r),{},{render:function(e){return!1===s?a?Object(m.jsx)(c,{}):Object(m.jsx)(R,{}):!0===s?a&&n.includes(t.role)?Object(m.jsx)(c,{}):Object(m.jsx)(R,{}):void 0}}))}a(135);function E(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(),r=Object(i.a)(n,2),l=r[0],h=r[1],p=Object(c.useState)(),x=Object(i.a)(p,2),f=x[0],g=x[1],v=Object(c.useState)(""),N=Object(i.a)(v,2),S=N[0],k=N[1],C=Object(c.useState)(""),y=Object(i.a)(C,2),w=y[0],M=y[1],D=Object(c.useState)(""),T=Object(i.a)(D,2),B=T[0],U=T[1],R=Object(c.useState)(),L=Object(i.a)(R,2),P=L[0],E=L[1],I=Object(c.useState)(""),F=Object(i.a)(I,2),Y=F[0],J=F[1],A=Object(c.useState)(),H=Object(i.a)(A,2),G=(H[0],H[1]),W=Object(c.useState)(""),_=Object(i.a)(W,2),z=_[0],Z=_[1],V=Object(c.useState)(!0),q=Object(i.a)(V,2),K=q[0],Q=q[1],X=Object(u.c)((function(e){return e.user[0]})),$=Object(o.f)();Object(u.b)();Object(c.useEffect)((function(){ee()}),[]);var ee=function(){X&&(j.a.get("http://192.168.0.49:3001/api/getAllUsers").then((function(e){if(e.data.checkMessage)alert(e.data.checkMessage);else{s(e.data[0]);var t=e.data[1].map((function(e){return{value:e.role,label:e.role}})),a=e.data[1].map((function(e){return e.password}));E(t),G(a),Q(!1)}})).catch((function(e){alert(e.message)})),j.a.post("http://192.168.0.49:3001/api/getAllSupervisors",{username:X.username}).then((function(e){e.data.checkMessage?alert(e.data.checkMessage):h(e.data.result)})).catch((function(e){alert(JSON.stringify(e.message))})))},te=function(e){g(e.username),k(e.firstname),M(e.username),U(e.password),J({value:e.role,label:e.role})};return Object(m.jsxs)("div",{className:"manageUserPage",children:[Object(m.jsxs)("div",{className:"sidenavUsers",children:[Object(m.jsx)("p",{children:"USERS"}),a&&a.map((function(e,t){return Object(m.jsx)("span",{onClick:function(){te(e)},children:e.firstname},t)})),"supervisor"===X.role&&Object(m.jsx)("p",{children:"Supervisors"}),l&&"supervisor"===X.role&&l.map((function(e,t){return Object(m.jsx)("span",{onClick:function(){te(e)},children:e.firstname},t)}))]}),Object(m.jsx)("div",{className:"beforeMain",children:Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("img",{src:d,className:"topLogoManage"}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Manage Users"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("span",{className:"manageUserFormText",children:"Firstname"}),Object(m.jsx)("input",{className:"formBox",value:S,onChange:function(e){k(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"managesSerFormText",children:"Username"}),Object(m.jsx)("input",{className:"formBox",value:w,onChange:function(e){M(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"manageUserFormText",children:"Password"}),Object(m.jsx)("input",{className:"formBox",value:B,onChange:function(e){U(e.target.value)}}),Object(m.jsx)("br",{})]}),Object(m.jsx)("span",{className:"formTextManage",children:"Role"}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"roleSelectionPosition",children:Object(m.jsx)("div",{className:"roleSelectionClass",children:Object(m.jsx)(O.a,{options:P,onChange:function(e){J(e)},value:Y,isLoading:K,placeholder:"Select Role!"})})}),"supervisor"===Y.value&&Object(m.jsx)("input",{className:"formBox",value:z,type:"text",placeholder:"Supervisor Password:",onChange:function(e){Z(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"manageUserDoneButton",children:[Object(m.jsx)("button",{className:"loginButton",onClick:function(){j.a.post("http://192.168.0.49:3001/api/updateUser",{selectedUser:f,firstname:S,username:w,password:B,role:Y.value,supervisorPass:z}).then((function(e){alert(e.data.checkMessage),k(""),M(""),U(""),g(""),Z(""),ee()})).catch((function(e){alert(JSON.stringify(e.message))}))},children:Object(m.jsx)("span",{className:"loginButtText",children:"SUBMIT"})}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"trashInnerDiv",children:Object(m.jsx)(b.a,{onClick:function(){$.push("/dashboard")},className:"backInManage"})})]})]})})]})}a(38).config();a(136);var I=a(62),F=a.n(I),Y=a(76);function J(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),r=Object(i.a)(n,2),l=r[0],u=r[1],h=Object(c.useState)(),p=Object(i.a)(h,2),x=p[0],f=p[1],g=Object(c.useState)(),v=Object(i.a)(g,2),N=v[0],S=v[1],k=Object(c.useState)(!0),C=Object(i.a)(k,2),y=C[0],w=C[1],M=Object(c.useState)(),D=Object(i.a)(M,2),T=D[0],B=D[1],U=Object(c.useState)(),R=Object(i.a)(U,2),L=R[0],P=R[1],E=Object(c.useState)(null),I=Object(i.a)(E,2),J=(I[0],I[1],Object(o.f)());Object(c.useEffect)((function(){j.a.get("".concat("http://192.168.0.49:3001/api/","getAllUsersForReports")).then((function(e){var t=e.data;if(t){var a=t.map((function(e){return{value:e.username,label:e.firstname,role:e.role}}));f(a)}e.data.checkMessage&&alert(e.data.checkMessage)})).catch((function(e){alert(JSON.stringify(e.message))})),B([{value:"Detailed",label:"Detailed"},{value:"Summary",label:"Summary"}])}),[]),Object(c.useEffect)((function(){w(!x)}),[x]);return Object(m.jsx)("div",{className:"mainDiv",children:Object(m.jsx)("div",{className:"centerDiv",children:Object(m.jsxs)("div",{className:"reportBox",children:[Object(m.jsxs)("div",{className:"regulationForReport",children:[Object(m.jsx)("img",{src:d,className:"topLogoRep"}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"loginText",children:"REPORTS"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"roleSelectionPosition",children:Object(m.jsx)("div",{className:"roleSelectionClass",children:Object(m.jsx)(O.a,{options:x,onChange:function(e){S(e)},isMulti:!0,isSearchable:!0,isLoading:y,value:N,formatGroupLabel:"Users"})})}),Object(m.jsxs)("span",{style:{display:"inline-block",overflow:"hidden",whiteSpace:"nowrap"},children:[Object(m.jsx)("button",{type:"button",onClick:function(){S(x)},className:"selectButoons",children:"Select All"}),Object(m.jsx)("button",{type:"button",onClick:function(){var e=[];x&&(x.map((function(t){"employee"===t.role&&e.push({value:t.value,label:t.label,role:t.role})})),S(e))},className:"selectButoons",children:"Select All Employees"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"formText",children:"Start Date"}),Object(m.jsx)(F.a,{popperPlacement:"auto",selected:a,onChange:function(e){s(e)},dateFormat:"yyyy/MM/dd",maxDate:new Date,showYearDropdown:!0,scrollableYearMonthDropdown:!0,className:"formBox"}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"formText",children:"End Date"}),Object(m.jsx)(F.a,{popperPlacement:"auto",selected:l,onChange:function(e){u(e)},dateFormat:"yyyy/MM/dd",maxDate:new Date,showYearDropdown:!0,scrollableYearMonthDropdown:!0,className:"formBox"}),Object(m.jsx)("div",{className:"roleSelectionPosition",children:Object(m.jsx)("div",{className:"roleSelectionClass",children:Object(m.jsx)(O.a,{onChange:function(e){P(e)},isSearchable:!0,value:L,options:T})})}),Object(m.jsx)("button",{onClick:function(){var e;if(N&&(e=N.map((function(e){return e.value}))),null===a||null===l)alert("Please Select Dates!");else{var t=a.toISOString().slice(0,10),c=l.toISOString().slice(0,10);j.a.post("".concat("http://192.168.0.49:3001/api/","giveReportParams"),{reportType:L,selectedUsers:e,startDate:t,endDate:c}).then((function(e){e.data.checkMessage&&(alert(e.data.checkMessage),"Pdf Created"===e.data.checkMessage&&j.a.get("".concat("http://192.168.0.49:3001/api/","pdf"),{responseType:"blob"}).then((function(e){console.log(e.data);var a=new Blob([e.data],{type:"application/pdf;charset=utf-8"});console.log(a),Object(Y.saveAs)(a,"".concat(L.value,"Report_StartDate:").concat(t,".pdf"))})).catch((function(e){alert(JSON.stringify(e.message))})))})).catch((function(e){alert(JSON.stringify(e.message))}))}},className:"loginButton",children:Object(m.jsx)("span",{className:"loginButtText",children:"Get Report!"})})]})]}),Object(m.jsx)(b.a,{onClick:function(){J.push("/dashboard")},className:"backButton"})]})})})}function A(){var e=Object(o.f)();return Object(m.jsxs)("div",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("img",{src:d,className:"topLogoError"}),Object(m.jsx)("br",{}),Object(m.jsx)(U.b,{style:{width:"200px",height:"100px"}}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{style:{fontSize:"30px"},children:"Error 404! Wrong Route!"}),Object(m.jsx)("button",{onClick:function(){e.push("/")},className:"backToHomeErrorPage",children:"Back to home"})]})}var H=function(){var e=Object(u.c)((function(e){return e.user}));return Object(m.jsx)(r.a,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",component:D,exact:!0}),Object(m.jsx)(P,{path:"/createUser",component:h,isLogged:e,isRestricted:!0,acceptedRoles:["manager","supervisor"]}),Object(m.jsx)(P,{path:"/dashboard",component:M,isLogged:e,isRestricted:!1,acceptedRoles:["employee","manager","supervisor"]}),Object(m.jsx)(P,{path:"/manageUsers",component:E,isLogged:e,isRestricted:!0,acceptedRoles:["manager","supervisor"]}),Object(m.jsx)(P,{path:"/reports",component:J,isLogged:e,isRestricted:!0,acceptedRoles:["manager","supervisor"]}),Object(m.jsx)(o.a,{path:"*",component:A})]})})};var G=function(){return Object(m.jsx)(u.a,{store:C,children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(H,{})})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,190)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};a(179);n.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(G,{})}),document.getElementById("root")),W()},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[181,1,2]]]);
//# sourceMappingURL=main.8da40138.chunk.js.map