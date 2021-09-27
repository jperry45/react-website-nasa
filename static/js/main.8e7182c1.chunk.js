(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{16:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=a(11);a(81);var s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(o.b,{to:"/",className:"navbar-logo"},"React NASA Website",r.a.createElement("i",{class:"fas fa-rocket"})))))},l=(a(16),a(86),["btn--primary","btn--outline","btn--test"]),u=["btn--medium","btn--large"],m=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,i=e.buttonSize,s=l.includes(c)?c:l[0],m=u.includes(i)?i:u[0];return r.a.createElement(o.b,{to:"/astronomy",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(s," ").concat(m),onClick:n,type:a},t))},d=(a(47),["btn--primary","btn--outline","btn--test"]),p=["btn--medium","btn--large"],h=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,i=e.buttonSize,s=d.includes(c)?c:d[0],l=p.includes(i)?i:p[0];return r.a.createElement(o.b,{to:"/asteroid",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(s," ").concat(l),onClick:n,type:a},t))};a(87);var b=function(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("h1",null,"WELCOME"),r.a.createElement("p",null,"Please select one of the following features"),r.a.createElement("div",{className:"hero-btns"},r.a.createElement(m,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Astronomy Picture Of The Day"),r.a.createElement(h,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Near-Earth Asteroid Lookup")))};a(88);var f=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("small",{class:"website-rights"},"Created by Joshua Perry"))};var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(f,null))},v=a(6),g=a(13),y=(a(89),a(24)),N=a(25),O=a(29),k=a(28),S=(a(48),a(90),["btn--primary","btn--outline","btn--test"]),j=["btn--medium","btn--large"],x=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,i=e.buttonSize,o=S.includes(c)?c:S[0],s=j.includes(i)?i:j[0];return r.a.createElement("button",{className:"btn ".concat(o," ").concat(s),onClick:n,type:a},t)},C=function(e){Object(O.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={url:"",explanation:"",title:"",mediaType:""},n}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{onClick:this.fetch.bind(this)},"Fetch Picture"),r.a.createElement("p",null,this.state.title),"video"!==this.state.mediaType?r.a.createElement("img",{src:this.state.url,className:"nasa"}):r.a.createElement("span",null,"(Media Type Not Supported!)"))}},{key:"fetch",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this,t=this.props.date.substring(0,this.props.date.indexOf("/"));t.length<2&&(t="0"+t);var a=this.props.date.substring(this.props.date.indexOf("/")+1,this.props.date.indexOf("/",3));a.length<2&&(a="0"+a);var n=this.props.date.substring(this.props.date.indexOf("/",3)+1);fetch("https://api.nasa.gov/planetary/apod?api_key=kaOBcWpith5vDxTLRNsiw6VWOXEt5nVmBcupwgov&date="+n+"-"+t+"-"+a).then((function(e){return e.json()})).then((function(t){e.setState({url:t.url,explanation:t.explanation,title:t.title,mediaType:t.media_type})}))}))}]),a}(r.a.Component),_=a(27),w=a.n(_);a(91);var L=function(){var e=Object(n.useState)(new Date),t=Object(g.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"astronomy"},r.a.createElement("h3",null,"Astronomy Picture Of The Day"),r.a.createElement("p",null,"Please select a date from the calendar to see that picture of the day!"),r.a.createElement(w.a,{className:"datepicker",selected:a,onChange:function(e){return c(e)}}),r.a.createElement(C,{date:a.toLocaleDateString("en-US",{month:"numeric",year:"numeric",day:"numeric"}),className:"nasa"}))};function P(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(f,null))}a(175);var D=a(26);a(176),a(177);var F=function(e){var t=e.data,a=e.RenderComponent,c=(e.title,e.pageLimit),i=e.dataLimit,o=Object(n.useState)(Math.round(t.length/i)),s=Object(g.a)(o,1)[0],l=Object(n.useState)(1),u=Object(g.a)(l,2),m=u[0],d=u[1];function p(e){var t=Number(e.target.textContent);d(t)}return r.a.createElement(r.a.Fragment,null,function(){var e=m*i-i,a=e+i;return t.slice(e,a)}().map((function(e,t){return r.a.createElement(a,{key:t,data:e})})),r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:function(){d((function(e){return e-1}))},className:"prev ".concat(1===m?"disabled":"")},"prev"),function(){var e=Math.floor((m-1)/c)*c;return new Array(c).fill().map((function(t,a){return e+a+1}))}().map((function(e,t){return r.a.createElement("button",{key:t,onClick:p,className:"paginationItem ".concat(m===e?"active":null)},r.a.createElement("span",null,e))})),r.a.createElement("button",{onClick:function(){d((function(e){return e+1}))},className:"next ".concat(m===s?"disabled":"")},"next")))},A=function(e){Object(O.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={asteroids:[],dataLoaded:!1,objectsPerPage:5},n.sortByDistance=n.sortByDistance.bind(Object(D.a)(n)),n}return Object(N.a)(a,[{key:"asteroid",value:function(e){return r.a.createElement("a",{className:"options",href:e.data.nasa_jpl_url},'Name: "',e.data.name,'" \xa0 ',e.data.close_approach_data[0].miss_distance.astronomical.substring(0,5),"AU from Earth")}},{key:"render",value:function(){var e;return void 0!==this.state.asteroids&&0!=this.state.asteroids.length?e=r.a.createElement(F,{data:this.state.asteroids,RenderComponent:this.asteroid,title:"Posts",pageLimit:Math.floor(this.state.asteroids.length/this.state.objectsPerPage)+1,dataLimit:this.state.objectsPerPage}):0==this.state.asteroids.length&&this.state.dataLoaded&&(e=r.a.createElement("p",null,"No asteroids found for ",this.props.date," ")),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{onClick:this.fetch.bind(this)},"Find Asteroids"),e)}},{key:"fetch",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;this.state.dataLoaded=!0;var t=this,a=this.props.date.substring(0,this.props.date.indexOf("/"));a.length<2&&(a="0"+a);var n=this.props.date.substring(this.props.date.indexOf("/")+1,this.props.date.indexOf("/",2));n.length<2&&(n="0"+n);var r=this.props.date.substring(this.props.date.indexOf("/",2)+1)+"-"+a+"-"+n;fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date="+r+"&end_date="+r+"&api_key=kaOBcWpith5vDxTLRNsiw6VWOXEt5nVmBcupwgov").then((function(e){return e.json()})).then((function(a){var n=e.sortByDistance(a.near_earth_objects[r]);t.setState({asteroids:n})}))}))},{key:"sortByDistance",value:function(e){for(var t,a,n,r=[];e.length>0;){e.forEach((function(e){t?(a=parseFloat(e.close_approach_data[0].miss_distance.astronomical.substring(0,5)),n=parseFloat(t.close_approach_data[0].miss_distance.astronomical.substring(0,5)),a<n&&(t=e)):t=e})),r.push(t);var c=e.indexOf(t);e.splice(c,1),t=void 0}return r}}]),a}(r.a.Component);var B=function(){var e=Object(n.useState)(new Date),t=Object(g.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"asteroid"},r.a.createElement("h3",null,"Near-Earth Asteroid Lookup"),r.a.createElement("p",null,"Select a date to view near-earth asteroids for that date!"),r.a.createElement(w.a,{className:"datepicker",selected:a,onChange:function(e){return c(e)}}),r.a.createElement(A,{date:a.toLocaleDateString("en-US",{month:"numeric",year:"numeric",day:"numeric"})}))};function T(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(f,null))}var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(s,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/react-website-nasa",exact:!0,component:E}),r.a.createElement(v.a,{path:"/",exact:!0,component:E}),r.a.createElement(v.a,{path:"/astronomy",component:P}),r.a.createElement(v.a,{path:"/asteroid",component:T}))))};i.a.render(r.a.createElement(W,null),document.getElementById("root"))},47:function(e,t,a){},76:function(e,t,a){e.exports=a(178)},81:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.8e7182c1.chunk.js.map