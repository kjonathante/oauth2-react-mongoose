(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(2),r=t.n(c),l=t(3),i="";var u=function(){var e=Object(o.useState)(""),n=Object(l.a)(e,2),t=n[0],c=n[1];return Object(o.useEffect)(function(){fetch("/auth/whoami").then(function(e){return e.json()}).then(function(e){console.log(e),e.displayName&&c(e.displayName)}).catch(function(e){return console.log(e)})},[t]),a.a.createElement("div",null,"Hello",t&&", ".concat(t),a.a.createElement("div",null,a.a.createElement("a",{href:"".concat(i,"/auth/google")},"Login")),a.a.createElement("div",null,a.a.createElement("a",{href:"".concat(i,"/auth/logout")},"Logout")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,n,t){e.exports=t(10)}},[[4,1,2]]]);
//# sourceMappingURL=main.9275243e.chunk.js.map