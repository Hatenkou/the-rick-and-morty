(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){e.exports={header__item:"PersonEpisodes_header__item__3YuGe",list__item:"PersonEpisodes_list__item__3jwQW",item__episode:"PersonEpisodes_item__episode__7zJdS",item__colon:"PersonEpisodes_item__colon__H_vsb"}},25:function(e,t,n){e.exports={link:"NavBar_link__qBxAe",logo:"NavBar_logo__OZ3Rp"}},26:function(e,t,n){e.exports={wrapper:"PersonInfo_wrapper__jV6Q4",list__container:"PersonInfo_list__container__2MiNh",list__item:"PersonInfo_list__item__zZF5B",item__title:"PersonInfo_item__title__32eSP",item:"PersonInfo_item__1A67S"}},31:function(e,t,n){e.exports={button__container:"NavigationPage_button__container__3hYfm",links:"NavigationPage_links__1A2Mj"}},38:function(e,t,n){e.exports={list__container:"CharactersList_list__container__1XnNi",card:"CharactersList_card__3j423"}},39:function(e,t,n){e.exports={list__container:"EpisodesList_list__container__vXuMB",card:"EpisodesList_card__3FZyP"}},40:function(e,t,n){e.exports={list__container:"LocationsList_list__container__OHt7n",card:"LocationsList_card__N_yhV"}},41:function(e,t,n){e.exports={wrapper:"NotFoundPage_wrapper__1tlH5",text:"NotFoundPage_text__2ohk9"}},42:function(e,t,n){e.exports={container:"PersonPhoto_container__3_kRp",photo:"PersonPhoto_photo__1I0pM"}},43:function(e,t,n){e.exports={wrapper:"PersonPage_wrapper__3ApEc",container:"PersonPage_container__3aYEb"}},46:function(e,t,n){e.exports={wrapper:"App_wrapper__3g5Si"}},51:function(e,t,n){e.exports={text:"ErrorMessage_text__2KUIl"}},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),s=n.n(c),i=n(11),o=n(46),j=n.n(o),l=n(78),u=n(74),p=n(76),d="/characters/",b="/episodes/",x="/locations/",m="/my_watch_list/",_="/characters/?page=1",O="?page=",h=n.p+"static/media/logo.5a3ff6f1.png",f=n(25),g=n.n(f),v=n(1),N=function(){return Object(v.jsx)(l.a,{bg:"dark",variant:"dark",fixed:"top",children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(i.b,{to:_,children:Object(v.jsx)("img",{className:g.a.logo,src:h,alt:"logo"})}),Object(v.jsxs)(p.a,{className:"ml-auto",children:[Object(v.jsx)(i.c,{className:g.a.link,to:_,children:"Characters"}),Object(v.jsx)(i.c,{className:g.a.link,to:"/locations/?page=1",children:"Locations"}),Object(v.jsx)(i.c,{className:g.a.link,to:"/episodes/?page=1",children:"Episodes"}),Object(v.jsx)(i.c,{className:g.a.link,to:m,children:"Watch-later"})]})]})})},P=n(9),w=n(10),k=n.n(w),y=n(14),E=n(7),S=n(79),C=n(38),F=n.n(C),I=function(e){var t=e.characters;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("ul",{className:F.a.list__container,children:t.map((function(e){var t=e.id,n=e.image,a=e.name,r=e.status,c=e.gender,s=e.species;return Object(v.jsx)(S.a,{className:F.a.card,style:{width:"12rem"},children:Object(v.jsxs)(i.b,{to:"/person/".concat(t),children:[Object(v.jsx)(S.a.Img,{variant:"top",src:n}),Object(v.jsxs)(S.a.Body,{children:[Object(v.jsx)(S.a.Title,{children:a}),Object(v.jsx)(S.a.Text,{children:r}),Object(v.jsx)(S.a.Text,{children:c}),Object(v.jsx)(S.a.Text,{children:s})]})]})},t)}))})})},L=n(75),A=function(e){var t=e.text,n=e.onClick,a=e.disabled;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L.a,{variant:"success",disabled:a,onClick:n,children:t})," "]})},B=n(31),T=n.n(B),R=function(e){var t=e.getResource,n=e.prevPage,a=e.nextPage,r=e.counterPage;return Object(v.jsxs)("div",{className:T.a.button__container,children:[Object(v.jsx)(i.b,{to:"?page=".concat(r-1),className:T.a.links,children:Object(v.jsx)(A,{text:"Prev",onClick:function(){return t(n)},disabled:!n})}),Object(v.jsx)(i.b,{to:"?page=".concat(r+1),className:T.a.links,children:Object(v.jsx)(A,{text:"Next",disabled:!a,onClick:function(){return t(a)}})})]})},M=n(2),H=n(51),W=n.n(H),J=n.p+"static/media/error.8c71f6b5.webp",K=function(){var e=Object(P.g)();return Object(v.jsx)(A,{text:"Go back",onClick:function(){e.goBack()}})},Y=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("p",{className:W.a.text,children:[Object(v.jsx)(K,{}),Object(v.jsx)("img",{src:J,alt:"Error"}),'Sorry "dog" We cannot display data. Come back when we fix everything']})})},Z=function(e){return function(t){var n=Object(a.useState)(!1),r=Object(E.a)(n,2),c=r[0],s=r[1];return Object(v.jsx)(v.Fragment,{children:c?Object(v.jsx)(Y,{}):Object(v.jsx)(e,Object(M.a)({setErrorApi:s},t))})}},z=function(){return new URLSearchParams(Object(P.h)().search)},G=function(e){var t=e.lastIndexOf(O),n=e.slice(t+O.length);return Number(n)},Q=function(){var e=Object(y.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Could not fetsh",n.status),e.abrupt("return",!1);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),console.error("not fetsh",e.t0.message),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(y.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=Z((function(e){var t=e.setErrorApi,n=Object(a.useState)(null),r=Object(E.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(null),o=Object(E.a)(i,2),j=o[0],l=o[1],u=Object(a.useState)(null),p=Object(E.a)(u,2),d=p[0],b=p[1],x=Object(a.useState)(1),m=Object(E.a)(x,2),_=m[0],O=m[1],h=z().get("page"),f=function(){var e=Object(y.a)(k.a.mark((function e(n){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(n);case 2:(a=e.sent)?(r=a.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,type:e.type,gender:e.gender,origin:{name:e.origin.name,url:e.origin.url},image:e.image}})),s(r),l(a.info.prev),b(a.info.next),O(G(n)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f("https://rickandmortyapi.com/api/character/?page="+h)}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(R,{getResource:f,prevPage:j,nextPage:d,counterPage:_}),c&&Object(v.jsx)(I,{characters:c}),Object(v.jsx)(R,{getResource:f,prevPage:j,nextPage:d,counterPage:_})]})})),X=n(39),q=n.n(X),D=function(e){var t=e.episodes;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("ul",{className:q.a.list__container,children:t.map((function(e){var t=e.name,n=e.air_date,a=e.episode,r=(e.characters,e.created),c=e.url;return Object(v.jsx)(S.a,{className:q.a.card,style:{width:"12rem"},children:Object(v.jsxs)(S.a.Body,{children:[Object(v.jsxs)(S.a.Title,{children:["Name: ",t]}),Object(v.jsxs)(S.a.Subtitle,{className:"mb-2 text-muted",children:["Data: ",n]}),Object(v.jsxs)(S.a.Text,{children:["Episode: ",a]}),Object(v.jsxs)(S.a.Text,{children:["created: ",r]}),Object(v.jsxs)(S.a.Text,{children:["url: ",c]})]})},t)}))})})},$=Z((function(e){var t=e.setErrorApi,n=Object(a.useState)(null),r=Object(E.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(null),o=Object(E.a)(i,2),j=o[0],l=o[1],u=Object(a.useState)(null),p=Object(E.a)(u,2),d=p[0],b=p[1],x=Object(a.useState)(1),m=Object(E.a)(x,2),_=m[0],O=m[1],h=z().get("page"),f=function(){var e=Object(y.a)(k.a.mark((function e(n){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(n);case 2:(a=e.sent)?(r=a.results.map((function(e){return{id:e.id,name:e.name,air_date:e.air_date,episode:e.episode,characters:e.characters,url:e.url,created:e.created}})),s(r),l(a.info.prev),b(a.info.next),O(G(n)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f("https://rickandmortyapi.com/api/episode/?page="+h)}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(R,{getResource:f,prevPage:j,nextPage:d,counterPage:_}),c&&Object(v.jsx)(D,{episodes:c})]})})),ee=n(40),te=n.n(ee),ne=function(e){var t=e.locations;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("ul",{className:te.a.list__container,children:t.map((function(e){var t=e.name,n=e.type,a=e.dimension;return Object(v.jsxs)(S.a,{className:te.a.card,style:{width:"12rem"},children:[Object(v.jsx)(S.a.Img,{variant:"top",src:h}),Object(v.jsxs)(S.a.Body,{children:[Object(v.jsx)(S.a.Title,{children:t}),Object(v.jsx)(S.a.Subtitle,{className:"mb-2 text-muted",children:n}),Object(v.jsx)(S.a.Text,{children:a})]})]},t)}))})})},ae=Z((function(e){var t=e.setErrorApi,n=Object(a.useState)(null),r=Object(E.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(null),o=Object(E.a)(i,2),j=o[0],l=o[1],u=Object(a.useState)(null),p=Object(E.a)(u,2),d=p[0],b=p[1],x=Object(a.useState)(1),m=Object(E.a)(x,2),_=m[0],O=m[1],h=z().get("page"),f=function(){var e=Object(y.a)(k.a.mark((function e(n){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(n);case 2:(a=e.sent)?(r=a.results.map((function(e){return{id:e.id,name:e.name,type:e.type,dimension:e.dimension,residents:e.residents[e],url:e.url,created:e.created}})),s(r),t(!1),l(a.info.prev),b(a.info.next),O(G(n))):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f("https://rickandmortyapi.com/api/location/?page="+h)}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(R,{getResource:f,prevPage:j,nextPage:d,counterPage:_}),c&&Object(v.jsx)(ne,{locations:c})]})})),re=n(53),ce=(n(70),function(){var e=Object(re.a)((function(e){return e.watchListReduser}));return console.log(e),Object(v.jsx)("div",{children:"MyWatchListPage"})}),se=n(41),ie=n.n(se),oe=n.p+"static/media/not-found.1062f5e4.png",je=function(){var e=Object(P.h)();return Object(v.jsxs)("div",{className:ie.a.wrapper,children:[Object(v.jsx)("img",{src:oe,alt:"Not Found"}),Object(v.jsxs)("h3",{className:ie.a.text,children:["No math for",e.pathname]}),Object(v.jsx)(K,{})]})},le=n(77),ue=n(21),pe=n.n(ue),de=function(e){var t=e.personEpisodes,n=Object(a.useState)([]),r=Object(E.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){Object(y.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t);case 2:n=e.sent,s(n),console.log(c);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(v.jsx)("div",{children:Object(v.jsx)(le.a,{defaultActiveKey:"0",children:Object(v.jsxs)(le.a.Item,{eventKey:"1",children:[Object(v.jsx)(le.a.Header,{children:Object(v.jsx)("h2",{className:pe.a.header__item,children:"Episodes"})}),Object(v.jsx)(le.a.Body,{children:c.map((function(e){var t=e.name,n=e.id,a=e.episode,r=e.air_date;return Object(v.jsxs)("li",{className:pe.a.list__item,children:[Object(v.jsxs)("span",{className:pe.a.item__episode,children:["Episode ",t]}),Object(v.jsx)("span",{className:pe.a.item__colon,children:" : "}),Object(v.jsxs)("span",{className:pe.a.item__name,children:['"',a,'"']}),Object(v.jsx)("span",{className:pe.a.item__colon,children:" : "}),Object(v.jsxs)("span",{className:pe.a.item__data,children:[" ",r]})]},n)}))})]})})})},be=n(26),xe=n.n(be),me=function(e){var t=e.personName,n=e.personInfo;return Object(v.jsxs)("div",{className:xe.a.wrapper,children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("ul",{className:xe.a.list__container,children:n.map((function(e){var t=e.title,n=e.data;return n&&Object(v.jsxs)("li",{className:xe.a.list__item,children:[Object(v.jsxs)("span",{className:xe.a.item__title,children:[t,":"]}),Object(v.jsx)("span",{className:xe.a.item,children:n})]},t)}))})]})},_e=n(42),Oe=n.n(_e),he=function(e){var t=e.personName,n=e.personPhoto;return Object(v.jsx)("div",{className:Oe.a.container,children:Object(v.jsx)("img",{className:Oe.a.photo,src:n,alt:t})})},fe=n(43),ge=n.n(fe),ve=Z((function(e){var t=e.setErrorApi,n=e.match,r=Object(a.useState)(null),c=Object(E.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(null),j=Object(E.a)(o,2),l=j[0],u=j[1],p=Object(a.useState)(null),d=Object(E.a)(p,2),b=d[0],x=d[1],m=Object(a.useState)(null),_=Object(E.a)(m,2),O=_[0],h=_[1];return Object(a.useEffect)((function(){Object(y.a)(k.a.mark((function e(){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.params.id,e.next=3,Q("".concat("https://rickandmortyapi.com/api/character/").concat(a,"/"));case 3:(r=e.sent)?(i([{title:"status",data:r.status},{title:"species",data:r.species},{title:"type",data:r.type},{title:"gender",data:r.gender},{title:"origin",data:r.origin.name},{title:"location",data:r.location.name},{title:"created",data:r.created},{title:"\u200burl",data:r.url}]),u(r.name),x(r.image),t(!1),r.episode.length&&h(r.episode)):t(!0);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:ge.a.wrapper,children:[Object(v.jsx)(K,{}),Object(v.jsxs)("div",{className:ge.a.container,children:[Object(v.jsx)(he,{personPhoto:b,personName:l}),s&&Object(v.jsx)(me,{personName:l,personInfo:s})]}),O&&Object(v.jsx)(de,{personEpisodes:O})]})})})),Ne=[{path:d,exact:!0,Component:V},{path:b,exact:!0,Component:$},{path:x,exact:!0,Component:ae},{path:m,exact:!0,Component:ce},{path:"/person/:id",exact:!0,Component:ve},{path:"*",exact:!1,Component:je}],Pe=function(){return Object(v.jsxs)(P.d,{children:[Ne.map((function(e){var t=e.path,n=e.Component,a=e.exact;return Object(v.jsx)(P.b,{path:t,component:n,exact:a},t)})),Object(v.jsx)(P.a,{to:d})]})};var we=function(){return Object(v.jsx)(i.a,{children:Object(v.jsxs)("div",{className:j.a.wrapper,children:[Object(v.jsx)(N,{}),Object(v.jsx)(Pe,{})]})})};n(71);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(we,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.e287250a.chunk.js.map