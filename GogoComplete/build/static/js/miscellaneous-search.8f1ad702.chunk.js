(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[64],{101:function(e,a,t){"use strict";var n=t(11),c=t(15),s=t(6),r=t.n(s),l=t(41),i=t.n(l),o=t(87),m=t.n(o),u=t(88),p={tag:u.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},g=function(e){var a=e.className,t=e.cssModule,s=e.color,l=e.body,i=e.inverse,o=e.outline,p=e.tag,g=e.innerRef,b=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),d=Object(u.mapToCssModules)(m()(a,"card",!!i&&"text-white",!!l&&"card-body",!!s&&(o?"border":"bg")+"-"+s),t);return r.a.createElement(p,Object(n.a)({},b,{className:d,ref:g}))};g.propTypes=p,g.defaultProps={tag:"div"},a.a=g},102:function(e,a,t){"use strict";var n=t(11),c=t(15),s=t(6),r=t.n(s),l=t(41),i=t.n(l),o=t(87),m=t.n(o),u=t(88),p={tag:u.tagPropType,listTag:u.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},g=function(e){var a=e.className,t=e.listClassName,s=e.cssModule,l=e.children,i=e.tag,o=e.listTag,p=e["aria-label"],g=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(u.mapToCssModules)(m()(a),s),d=Object(u.mapToCssModules)(m()("breadcrumb",t),s);return r.a.createElement(i,Object(n.a)({},g,{className:b,"aria-label":p}),r.a.createElement(o,{className:d},l))};g.propTypes=p,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=g},103:function(e,a,t){"use strict";var n=t(11),c=t(15),s=t(6),r=t.n(s),l=t(41),i=t.n(l),o=t(87),m=t.n(o),u=t(88),p={tag:u.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},g=function(e){var a=e.className,t=e.cssModule,s=e.active,l=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(u.mapToCssModules)(m()(a,!!s&&"active","breadcrumb-item"),t);return r.a.createElement(l,Object(n.a)({},i,{className:o,"aria-current":s?"page":void 0}))};g.propTypes=p,g.defaultProps={tag:"li"},a.a=g},105:function(e,a,t){"use strict";var n=t(11),c=t(15),s=t(6),r=t.n(s),l=t(41),i=t.n(l),o=t(87),m=t.n(o),u=t(88),p={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},g=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.mapToCssModules)(m()(a,"card-body"),t);return r.a.createElement(l,Object(n.a)({},i,{className:o,ref:s}))};g.propTypes=p,g.defaultProps={tag:"div"},a.a=g},245:function(e,a,t){"use strict";var n=t(6),c=t.n(n),s=t(671),r=t(672),l=t(220),i=t(95);a.a=function(e){var a=e.totalPage,t=void 0===a?0:a,n=e.currentPage,o=void 0===n?1:n,m=e.numberLimit,u=void 0===m?5:m,p=e.lastIsActive,g=void 0===p||p,b=e.firstIsActive,d=void 0===b||b,f=e.onChangePage,E=1,N=u;u>t?(E=1,N=t):o<=parseInt(u/2,10)?(E=1,N=u):o+parseInt(u/2,10)<=t?(E=o-parseInt(u/2,10),N=o+parseInt(u/2,10)):(E=t-(u-1),N=t);for(var v=[],h=E=0===E?1:E;h<=N;h+=1)v.push(h);var j=o<=1?"disabled":"",O=o>=t?"disabled":"",y=o<=1?"disabled":"",k=o>=t?"disabled":"";return t>1?c.a.createElement(i.a,{xxs:"12",className:"mt-3 mb-3"},c.a.createElement(s.a,{className:"pagination justify-content-center"},d&&c.a.createElement(r.a,{className:"page-item ".concat(j)},c.a.createElement(l.a,{className:"page-link first c-pointer",onClick:function(){return f(1)}},c.a.createElement("i",{className:"simple-icon-control-start"}))),c.a.createElement(r.a,{className:"page-item ".concat(y)},c.a.createElement(l.a,{className:"page-link prev c-pointer",onClick:function(){return f(o-1)}},c.a.createElement("i",{className:"simple-icon-arrow-left"}))),v.map((function(e){return c.a.createElement(r.a,{key:e,className:"page-item ".concat(o===e&&"active")},c.a.createElement(l.a,{className:"page-link c-pointer",onClick:function(){return f(e)}},e))})),c.a.createElement(r.a,{className:"page-item ".concat(k)},c.a.createElement(l.a,{className:"page-link next c-pointer",onClick:function(){return f(o+1)}},c.a.createElement("i",{className:"simple-icon-arrow-right"}))),g&&c.a.createElement(r.a,{className:"page-item ".concat(O)},c.a.createElement(l.a,{className:"page-link last c-pointer",onClick:function(){return f(t)}},c.a.createElement("i",{className:"simple-icon-control-end"}))))):c.a.createElement(i.a,{xxs:"12",className:"mt-2"})}},858:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t.n(n),s=t(9),r=t(93),l=t(6),i=t.n(l),o=t(231),m=t(101),u=t(105),p=t(92),g=t(387),b=t.n(g),d=t(245),f=t(10),E=t(96),N=t(95),v="".concat(f.m,"/cakes/paging");a.default=function(e){var a=e.match,t=Object(l.useState)(!0),n=Object(r.a)(t,2),g=n[0],f=n[1],h=Object(l.useState)([]),j=Object(r.a)(h,2),O=j[0],y=j[1],k=Object(l.useState)(1),T=Object(r.a)(k,2),P=T[0],M=T[1],x=Object(l.useState)("Cake"),C=Object(r.a)(x,1)[0],w=Object(l.useState)(10),S=Object(r.a)(w,1)[0],I=Object(l.useState)(0),R=Object(r.a)(I,2),F=R[0],A=R[1];return Object(l.useEffect)((function(){function e(){return(e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.get("".concat(v,"?pageSize=").concat(S,"&currentPage=").concat(P,"&search=").concat(C)).then((function(e){return e.data})).then((function(e){y(e.data),A(e.totalPage),f(!1)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[S,P,C]),i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement(N.a,{xxs:"12"},i.a.createElement(E.a,{heading:"menu.search",match:a}),i.a.createElement(N.b,{className:"mb-5"}))),i.a.createElement(o.a,null,i.a.createElement(N.a,{xxs:"12",className:"mb-4"},i.a.createElement(m.a,null,i.a.createElement(u.a,null,g?i.a.createElement("div",{className:"loading"}):O.map((function(e,a){return i.a.createElement("div",{key:"item_".concat(a),className:"".concat(O.length!==a+1?"mb-3":"")},i.a.createElement(p.b,{to:"#".concat(e.id),className:"w-40 w-sm-100"},i.a.createElement("p",{className:"list-item-heading mb-1 color-theme-1"},e.title),i.a.createElement("p",{className:"mb-1 text-muted text-small"},"Products | ",e.category),i.a.createElement("p",{className:"mb-4 text-small"},e.description)),O.length!==a+1&&i.a.createElement(N.b,null))}))))),i.a.createElement(d.a,{currentPage:P,totalPage:F,onChangePage:function(e){return M(e)}})))}},96:function(e,a,t){"use strict";var n=t(6),c=t.n(n),s=t(102),r=t(103),l=t(92),i=t(90),o=function(e){return c.a.createElement(i.a,{id:"menu.".concat(e)})},m=function(e,a,t){return 0===t?"":e.split(a)[0]+a},u=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,n){return c.a.createElement(r.a,{key:n,active:t.length===n+1},t.length!==n+1?c.a.createElement(l.b,{to:"/".concat(m(a,e,n))},o(e)):o(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement("h1",null,c.a.createElement(i.a,{id:a})),c.a.createElement(u,{match:t}))}}}]);
//# sourceMappingURL=miscellaneous-search.8f1ad702.chunk.js.map