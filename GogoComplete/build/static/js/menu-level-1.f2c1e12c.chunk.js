(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[54],{102:function(e,a,t){"use strict";var n=t(11),l=t(15),c=t(6),r=t.n(c),s=t(41),i=t.n(s),m=t(87),u=t.n(m),o=t(88),d={tag:o.tagPropType,listTag:o.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},g=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,s=e.children,i=e.tag,m=e.listTag,d=e["aria-label"],g=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(o.mapToCssModules)(u()(a),c),p=Object(o.mapToCssModules)(u()("breadcrumb",t),c);return r.a.createElement(i,Object(n.a)({},g,{className:b,"aria-label":d}),r.a.createElement(m,{className:p},s))};g.propTypes=d,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=g},1028:function(e,a,t){"use strict";t.r(a);var n=t(6),l=t.n(n),c=t(231),r=t(90),s=t(95),i=t(96);a.default=function(e){var a=e.match;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement(s.a,{xxs:"12"},l.a.createElement(i.a,{heading:"menu.third-level-1",match:a}),l.a.createElement(s.b,{className:"mb-5"}))),l.a.createElement(c.a,null,l.a.createElement(s.a,{xxs:"12",className:"mb-4"},l.a.createElement("p",null,l.a.createElement(r.a,{id:"menu.third-level-1"})))))}},103:function(e,a,t){"use strict";var n=t(11),l=t(15),c=t(6),r=t.n(c),s=t(41),i=t.n(s),m=t(87),u=t.n(m),o=t(88),d={tag:o.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},g=function(e){var a=e.className,t=e.cssModule,c=e.active,s=e.tag,i=Object(l.a)(e,["className","cssModule","active","tag"]),m=Object(o.mapToCssModules)(u()(a,!!c&&"active","breadcrumb-item"),t);return r.a.createElement(s,Object(n.a)({},i,{className:m,"aria-current":c?"page":void 0}))};g.propTypes=d,g.defaultProps={tag:"li"},a.a=g},96:function(e,a,t){"use strict";var n=t(6),l=t.n(n),c=t(102),r=t(103),s=t(92),i=t(90),m=function(e){return l.a.createElement(i.a,{id:"menu.".concat(e)})},u=function(e,a,t){return 0===t?"":e.split(a)[0]+a},o=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,n){return l.a.createElement(r.a,{key:n,active:t.length===n+1},t.length!==n+1?l.a.createElement(s.b,{to:"/".concat(u(a,e,n))},m(e)):m(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement("h1",null,l.a.createElement(i.a,{id:a})),l.a.createElement(o,{match:t}))}}}]);
//# sourceMappingURL=menu-level-1.f2c1e12c.chunk.js.map