(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[63],{101:function(e,a,t){"use strict";var l=t(11),r=t(15),c=t(6),s=t.n(c),m=t(41),n=t.n(m),i=t(87),o=t.n(i),d=t(88),p={tag:d.tagPropType,inverse:n.a.bool,color:n.a.string,body:n.a.bool,outline:n.a.bool,className:n.a.string,cssModule:n.a.object,innerRef:n.a.oneOfType([n.a.object,n.a.string,n.a.func])},x=function(e){var a=e.className,t=e.cssModule,c=e.color,m=e.body,n=e.inverse,i=e.outline,p=e.tag,x=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),E=Object(d.mapToCssModules)(o()(a,"card",!!n&&"text-white",!!m&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return s.a.createElement(p,Object(l.a)({},f,{className:E,ref:x}))};x.propTypes=p,x.defaultProps={tag:"div"},a.a=x},102:function(e,a,t){"use strict";var l=t(11),r=t(15),c=t(6),s=t.n(c),m=t(41),n=t.n(m),i=t(87),o=t.n(i),d=t(88),p={tag:d.tagPropType,listTag:d.tagPropType,className:n.a.string,listClassName:n.a.string,cssModule:n.a.object,children:n.a.node,"aria-label":n.a.string},x=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,m=e.children,n=e.tag,i=e.listTag,p=e["aria-label"],x=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(d.mapToCssModules)(o()(a),c),E=Object(d.mapToCssModules)(o()("breadcrumb",t),c);return s.a.createElement(n,Object(l.a)({},x,{className:f,"aria-label":p}),s.a.createElement(i,{className:E},m))};x.propTypes=p,x.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=x},103:function(e,a,t){"use strict";var l=t(11),r=t(15),c=t(6),s=t.n(c),m=t(41),n=t.n(m),i=t(87),o=t.n(i),d=t(88),p={tag:d.tagPropType,active:n.a.bool,className:n.a.string,cssModule:n.a.object},x=function(e){var a=e.className,t=e.cssModule,c=e.active,m=e.tag,n=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(o()(a,!!c&&"active","breadcrumb-item"),t);return s.a.createElement(m,Object(l.a)({},n,{className:i,"aria-current":c?"page":void 0}))};x.propTypes=p,x.defaultProps={tag:"li"},a.a=x},1043:function(e,a,t){"use strict";t.r(a);var l=t(6),r=t.n(l),c=t(231),s=t(112),m=t(96),n=t(95),i={en:[{icon:"iconsminds-male",title:"DEVELOPER",price:"$11",detail:"User/Month",link:"#",features:["Number of end products 1","Free updates","Forum support"]},{icon:"iconsminds-male-female",title:"TEAM",price:"$17",detail:"User/Month Up to 10 Users",link:"#",features:["24/5 support","Number of end products 1","Two factor authentication","Free updates","Forum support"]},{icon:"iconsminds-mens",title:"ENTERPRISE",price:"$19",detail:"User/Month 10+ Users",link:"#",features:["24/7 support","Number of end products 1","Two factor authentication","Free updates","Forum support"]}],es:[{icon:"iconsminds-male",title:"REVELADOR",price:"$11",detail:"Usuario/Mes",link:"#",features:["Numero de productos finales 1","Actualizaciones gratuitas","Soporte del foro"]},{icon:"iconsminds-male-female",title:"EQUIPO",price:"$17",detail:"Usuario/Mes Hasta 10 Usuarios",link:"#",features:["24/5 soporte","Numero de productos finales 1","Autenticaci\xf3n de dos factores","Actualizaciones gratuitas","Soporte del foro"]},{icon:"iconsminds-mens",title:"EMPRESA",price:"$19",detail:"Usuario/Mes 10+ Usuarios",link:"#",features:["24/7 soporte","Numero de productos finales 1","Autenticaci\xf3n de dos factores","Actualizaciones gratuitas","Soporte del foro"]}],enrtl:[{icon:"iconsminds-male",title:"DEVELOPER",price:"$11",detail:"User/Month",link:"#",features:["Number of end products 1","Free updates","Forum support"]},{icon:"iconsminds-male-female",title:"TEAM",price:"$17",detail:"User/Month Up to 10 Users",link:"#",features:["24/5 support","Number of end products 1","Two factor authentication","Free updates","Forum support"]},{icon:"iconsminds-mens",title:"ENTERPRISE",price:"$19",detail:"User/Month 10+ Users",link:"#",features:["24/7 support","Number of end products 1","Two factor authentication","Free updates","Forum support"]}]},o=t(92),d=t(101),p=t(105),x=t(90),f=r.a.memo((function(e){var a=e.data;return r.a.createElement(d.a,null,r.a.createElement(p.a,{className:"pt-5 pb-5 d-flex flex-lg-column flex-md-row flex-sm-row flex-column"},r.a.createElement("div",{className:"price-top-part"},r.a.createElement("i",{className:"large-icon ".concat(a.icon)}),r.a.createElement("h5",{className:"mb-0 font-weight-semibold color-theme-1 mb-4"},a.title),r.a.createElement("p",{className:"text-large mb-2 text-default"},a.price),r.a.createElement("p",{className:"text-muted text-small"},a.detail)),r.a.createElement("div",{className:"pl-3 pr-3 pt-3 pb-0 d-flex price-feature-list flex-column flex-grow-1"},r.a.createElement("ul",{className:"list-unstyled"},a.features.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("p",{className:"mb-0"},e))}))),r.a.createElement("div",{className:"text-center"},r.a.createElement(o.b,{to:a.link,className:"btn btn-link btn-empty btn-lg"},r.a.createElement(x.a,{id:"pages.purchase"})," ",r.a.createElement("i",{className:"simple-icon-arrow-right"}))))))})),E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(n.a,{xxs:"12",className:"d-none d-md-block"},r.a.createElement(d.a,{className:"mb-3 table-heading"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-40 w-xs-100"}),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement(x.a,{id:"pages.price.developer"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement(x.a,{id:"pages.price.team"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement(x.a,{id:"pages.price.enterprise"}))))),r.a.createElement(d.a,{className:"flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-40 w-xs-100"},r.a.createElement(x.a,{id:"pages.price.twofactorauthentication"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement("i",{className:"simple-icon-check"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement("i",{className:"simple-icon-check"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-40 w-xs-100"},r.a.createElement(x.a,{id:"pages.price.teampermissions"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"}),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement("i",{className:"simple-icon-check"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-40 w-xs-100"},r.a.createElement(x.a,{id:"pages.price.245Support"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"}),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement("i",{className:"simple-icon-check"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"})))),r.a.createElement(d.a,{className:"flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-40 w-xs-100"},r.a.createElement(x.a,{id:"pages.price.247Support"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"}),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"}),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-40 w-xs-100"},r.a.createElement(x.a,{id:"pages.price.useractionsauditlog"})),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"}),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"}),r.a.createElement("p",{className:"mb-0 text-primary w-20 w-xs-100 text-center"},r.a.createElement("i",{className:"simple-icon-check"})))))),r.a.createElement(n.a,{xxs:"12",className:"d-block d-md-none"},r.a.createElement(d.a,{className:"d-flex flex-row mb-3 table-heading"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"pl-0 pb-0"},r.a.createElement("p",{className:"list-item-heading mb-0 text-primary"},r.a.createElement(x.a,{id:"pages.price.twofactorauthentication"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.developer"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.team"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.enterprise"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3 table-heading"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"pl-0 pb-0"},r.a.createElement("p",{className:"list-item-heading mb-0 text-primary"},r.a.createElement(x.a,{id:"pages.price.teampermissions"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.developer"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"})))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.team"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.enterprise"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3 table-heading"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"pl-0 pb-0"},r.a.createElement("p",{className:"list-item-heading mb-0 text-primary"},r.a.createElement(x.a,{id:"pages.price.245Support"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.developer"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"})))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.team"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.enterprise"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"})))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3 table-heading"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"pl-0 pb-0"},r.a.createElement("p",{className:"list-item-heading mb-0 text-primary"},r.a.createElement(x.a,{id:"pages.price.247Support"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.developer"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"})))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.team"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"})))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.enterprise"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"},r.a.createElement("i",{className:"simple-icon-check"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3 table-heading"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"pl-0 pb-0"},r.a.createElement("p",{className:"list-item-heading mb-0 text-primary"},r.a.createElement(x.a,{id:"pages.price.useractionsauditlog"}))))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.developer"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"})))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.team"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"})))),r.a.createElement(d.a,{className:"d-flex flex-row mb-3"},r.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},r.a.createElement(p.a,{className:"align-self-center d-flex flex-row"},r.a.createElement("p",{className:"list-item-heading mb-0 truncate w-70"},r.a.createElement(x.a,{id:"pages.price.enterprise"})),r.a.createElement("p",{className:"text-primary text-right mb-0 w-30 text-one"},r.a.createElement("i",{className:"simple-icon-check"})))))))},u=t(10),N=localStorage.getItem("currentLanguage")||u.d;a.default=function(e){var a=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(n.a,{xxs:"12"},r.a.createElement(m.a,{heading:"menu.prices",match:a}),r.a.createElement(n.b,{className:"mb-5"}))),r.a.createElement(c.a,{className:"equal-height-container mb-5"},r.a.createElement(n.a,{xxs:"12"},r.a.createElement(s.a,null,r.a.createElement(x.a,{id:"pages.prices.pricecomparison"}))),i[N].map((function(e,a){return r.a.createElement(n.a,{md:"12",lg:"4",className:"col-item mb-4",key:"priceCard_".concat(a)},r.a.createElement(f,{data:e}))}))),r.a.createElement(c.a,null,r.a.createElement(n.a,{xxs:"12"},r.a.createElement(s.a,null,r.a.createElement(x.a,{id:"pages.prices.featurecomparison"}))),r.a.createElement(E,null)))}},105:function(e,a,t){"use strict";var l=t(11),r=t(15),c=t(6),s=t.n(c),m=t(41),n=t.n(m),i=t(87),o=t.n(i),d=t(88),p={tag:d.tagPropType,className:n.a.string,cssModule:n.a.object,innerRef:n.a.oneOfType([n.a.object,n.a.string,n.a.func])},x=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,m=e.tag,n=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(o()(a,"card-body"),t);return s.a.createElement(m,Object(l.a)({},n,{className:i,ref:c}))};x.propTypes=p,x.defaultProps={tag:"div"},a.a=x},112:function(e,a,t){"use strict";var l=t(11),r=t(15),c=t(6),s=t.n(c),m=t(41),n=t.n(m),i=t(87),o=t.n(i),d=t(88),p={tag:d.tagPropType,className:n.a.string,cssModule:n.a.object},x=function(e){var a=e.className,t=e.cssModule,c=e.tag,m=Object(r.a)(e,["className","cssModule","tag"]),n=Object(d.mapToCssModules)(o()(a,"card-title"),t);return s.a.createElement(c,Object(l.a)({},m,{className:n}))};x.propTypes=p,x.defaultProps={tag:"div"},a.a=x},96:function(e,a,t){"use strict";var l=t(6),r=t.n(l),c=t(102),s=t(103),m=t(92),n=t(90),i=function(e){return r.a.createElement(n.a,{id:"menu.".concat(e)})},o=function(e,a,t){return 0===t?"":e.split(a)[0]+a},d=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,l){return r.a.createElement(s.a,{key:l,active:t.length===l+1},t.length!==l+1?r.a.createElement(m.b,{to:"/".concat(o(a,e,l))},i(e)):i(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("h1",null,r.a.createElement(n.a,{id:a})),r.a.createElement(d,{match:t}))}}}]);
//# sourceMappingURL=miscellaneous-prices.acc31c68.chunk.js.map