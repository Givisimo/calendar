(this["webpackJsonpwerdevs.studio"]=this["webpackJsonpwerdevs.studio"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.89fca7ad.png"},31:function(e,t,a){e.exports=a(49)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=a(9),s=a(3),i=a(11),u=a(13),m=function(e,t,a){return{type:"RECORD_DATE",payload:{date:e,day:t,month:a}}},d=a(8),h=function(e,t){var a=function(e,t){return 1===t?function(e){return e%4===0?29:28}(e):function(e){return[3,5,8,10].includes(e)?30:31}(t)}(e,t);return{startDay:function(e,t){return new Date(e,t).getDay()}(e,t),monthLength:a}},p=function(e,t){var a=h(e,t),n=function(e,t){return h(0===t?e-1:e,t<11?t-1:11)}(e,t);return{thisMonth:a,nextMonth:function(e,t){return h(11===t?e+1:e,11===t?0:t+1)}(e,t),prevMonth:n}},f=function(e,t){var a=p(e,t),n=function(){return 0===a.thisMonth.startDay?[{date:1,outsideRange:!0}]:function(e){for(var t=[],n=a.prevMonth.monthLength,r=e;r>0;r--)t.push({date:n,outsideRange:!0}),n=--n;return t.reverse()}(a.thisMonth.startDay)},r=function(){for(var e=[],t=a.thisMonth.monthLength,n=1;n<=t;n++)e.push({date:n,outsideRange:!1});return e},c=[].concat(Object(d.a)(n()),Object(d.a)(r()),Object(d.a)(function(e){for(var t=[],a=1;a<=e;a++)t.push({date:a,outsideRange:!0});return t}(42-(r().length+n().length))));return[Object(d.a)(c.splice(0,7)),Object(d.a)(c.splice(0,7)),Object(d.a)(c.splice(0,7)),Object(d.a)(c.splice(0,7)),Object(d.a)(c.splice(0,7)),Object(d.a)(c.splice(0,7))]},b={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},E={0:{long:"Sunday",short:"Su"},1:{long:"Monday",short:"Mo"},2:{long:"Tuesday",short:"Tu"},3:{long:"Wednesday",short:"We"},4:{long:"Thursday",short:"Th"},5:{long:"Friday",short:"Fr"},6:{long:"Saturday",short:"Sa"}},g=function(e){return e.date.date},y=function(e){return e.date.day},v=function(e){return e.date.month},w=(a(40),document.querySelector("#modal-root"));var N=Object(u.b)((function(e){return{date:g(e),day:y(e),month:v(e)}}),null)((function(e){var t=e.date,a=e.month,o=e.day,l=e.setShowModal;Object(n.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}));var s=function(e){"Escape"===e.code&&l()},i=Object(n.useRef)();return Object(c.createPortal)(r.a.createElement("div",{ref:i,onClick:function(e){e.target===i.current&&l()},role:"presentation",className:"overlay"},r.a.createElement("form",{className:"modal-custom"},r.a.createElement("button",{type:"button",className:"button-exit",onClick:l},"\xd7"),r.a.createElement("div",{className:" row "},r.a.createElement("label",{className:"col label-style p-0 mr-2",htmlFor:"month"},"Month"),r.a.createElement("label",{className:"col label-style p-0",htmlFor:"date"},"Day")),r.a.createElement("div",{className:"row "},r.a.createElement("input",{type:"text",id:"month",className:" input-style col pr-0 mr-2",value:b[a],readOnly:!0,disabled:!0}),r.a.createElement("input",{type:"text",id:"date",className:" input-style col pr-0",value:"".concat(t,"th ").concat(E[o].long),readOnly:!0,disabled:!0})))),w)})),O=a(51),k=(a(41),function(e){var t=e.onDayClick,a=e.calcPrevRender,n=e.calcNextRender,c=e.calcMonthIndex,o=e.changeModalState,l=e.showModal,s=e.weeks,i=e.month;return r.a.createElement("div",{className:"calendar-wrapper"},r.a.createElement("div",{className:"head-wrapper d-flex  justify-content-between align-items-center"},r.a.createElement("button",{className:" btn-wrapper  ",onClick:a},"<"),r.a.createElement("div",{className:" calendar-heading "},"".concat(b[i]," ")),r.a.createElement("button",{className:" btn-wrapper  ",onClick:n},">")),r.a.createElement("div",null,r.a.createElement("div",{className:"dates-container",onClick:function(e){return t(e)}},s.map((function(e,t){return r.a.createElement("div",{className:"d-flex justify-content-between ",key:Object(O.a)()},e.map((function(e,a){var n=e.date,o=e.outsideRange;return r.a.createElement("div",{className:"text-center cell align-items-center ".concat(o?"calendar-day-outside":"calendar-day"),key:Object(O.a)(),id:a,"month-index":c(t,o)},n)})))}))),r.a.createElement("div",{className:"weekday-row d-flex justify-content-between"},s[0].map((function(e,t){return r.a.createElement("div",{className:"text-center cell d-flex align-items-center justify-content-center",key:Object(O.a)()},E[t].short)})))),l&&r.a.createElement(N,{setShowModal:o}))}),x=Object(u.b)(null,(function(e){return{recordDate:function(t,a,n){e(m(t,a,n))}}}))((function(e){var t=e.recordDate,a=Object(n.useState)(!1),c=Object(i.a)(a,2),o=c[0],l=c[1],s=function(){l((function(e){return!e}))},u=Object(n.useState)((new Date).getMonth()),m=Object(i.a)(u,2),d=m[0],h=m[1],p=Object(n.useState)((new Date).getFullYear()),b=Object(i.a)(p,2),E=b[0],g=b[1],y=f(E,d);return r.a.createElement(k,{calcPrevRender:function(){h((function(e){return 0===e?11:e-1})),0===d&&g((function(e){return e-1}))},calcNextRender:function(){h((function(e){return 11===e?0:e+1})),11===d&&g((function(e){return e+1}))},onDayClick:function(e){var a=Number(e.target.getAttribute("month-index"))===d?d:Number(e.target.getAttribute("month-index"));t(e.target.innerHTML,e.target.id,a),s()},weeks:y,calcMonthIndex:function(e,t){return t?e<2?d-1:11===d?0:d+1:d},changeModalState:s,showModal:o,month:d})})),j=(a(42),function(){return r.a.createElement("div",{className:"container-fluid m-0 p-0"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12  col-lg-7 justify-content-end row page-wrapper  m-0"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("h3",{className:"text-heading text-uppercase font-weight-bold "},"Choose the day",r.a.createElement("br",null)," for the meeting"),r.a.createElement("p",{className:"text-wrap text-right font-weight-light text-text"},"We encourage you to book your appointment online. ",r.a.createElement("br",null)," This will save you time."))),r.a.createElement("div",{className:" col-12 col-lg-5 custom"},r.a.createElement(x,null))))}),M=(a(43),function(){return r.a.createElement("main",{className:"container ",id:"main"},r.a.createElement("article",{className:"article "},r.a.createElement("h3",{className:" heading"},"Lorem ipsum dolor sit amet"),r.a.createElement("p",{className:"paragraph font-weight-light"},"So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.",r.a.createElement("br",null),r.a.createElement("br",null),"It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.",r.a.createElement("br",null),r.a.createElement("br",null),"And anyways, as Cecil Adams reasoned, \u201c[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?\u201d Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.",r.a.createElement("br",null),r.a.createElement("br",null),"McClintock wrote to Before & After to explain his discovery;",r.a.createElement("br",null),"\u201cWhat I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!\u201d (The editors published his letter in a correction headlined \u201cLorem Oopsum\u201d).")))}),D=a(30),S=a(22),C=a.n(S),A={BASENAME:"/calendar",HOME:"/",ABOUT:"/about"},T=(a(45),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],d=function(){c((function(e){return!e})),m((function(e){return!e}))};return r.a.createElement("header",null,r.a.createElement(D.a,{queries:{mobile:{maxWidth:767}},onChange:function(e){return c(!1),void m(!1)}},(function(e){return e.mobile?r.a.createElement("div",{className:"row header-wrapper justify-content-between no-gutters  "},r.a.createElement(l.b,{to:A.HOME,className:"link col-auto align-self-center"},r.a.createElement("img",{src:C.a,alt:"Logo",height:50})),r.a.createElement("div",{className:"col-auto row align-content-around no-gutters "},a&&r.a.createElement("nav",null,r.a.createElement("ul",{className:" list-unstyled no-gutters font-weight-normal text-right"},r.a.createElement("li",{className:"nav-item list-item col-12"},r.a.createElement(l.b,{to:A.HOME,className:"link text-uppercase",activeClassName:"active-link",exact:!0},"Home")),r.a.createElement("li",{className:"nav-item list-item col-12"},r.a.createElement(l.b,{to:A.ABOUT,className:"link text-uppercase",activeClassName:"active-link"},"About us")))),r.a.createElement("button",{className:"btn ",onClick:d},u?r.a.createElement("i",{className:"fas fa-times icon-size"}):r.a.createElement("i",{className:"fas fa-bars icon-size"})))):r.a.createElement("div",{className:"row header-wrapper justify-content-between no-gutters align-content-around "},r.a.createElement(l.b,{to:A.HOME,className:"link col-auto"},r.a.createElement("img",{src:C.a,alt:"Logo",height:50})),r.a.createElement("nav",{className:"col-auto row align-content-around no-gutters "},r.a.createElement("ul",{className:"row list-unstyled no-gutters font-weight-normal"},r.a.createElement("li",{className:"nav-item list-item"},r.a.createElement(l.b,{to:A.HOME,className:"link text-uppercase",activeClassName:"active-link",exact:!0},"Home")),r.a.createElement("li",{className:"nav-item list-item"},r.a.createElement(l.b,{to:A.ABOUT,className:"link text-uppercase",activeClassName:"active-link"},"About us")))))})))}),L=(a(47),function(){return r.a.createElement(l.a,{basename:A.BASENAME},r.a.createElement(T,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:A.ABOUT,component:M}),r.a.createElement(s.b,{path:A.HOME,component:j,exact:!0}),r.a.createElement(s.a,{to:A.HOME})))}),R=(a(48),a(19)),_=a(29),H={date:{date:(new Date).getDate(),month:(new Date).getMonth(),day:(new Date).getDay()}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECORD_DATE":return Object(_.a)({},e,{date:{date:t.payload.date,month:t.payload.month,day:t.payload.day}});default:return e}},I=Object(R.b)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(u.a,{store:I},r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b0ff3d84.chunk.js.map