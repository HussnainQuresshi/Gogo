(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[60],{101:function(t,e,a){"use strict";var n=a(11),o=a(15),l=a(6),i=a.n(l),r=a(41),p=a.n(r),s=a(87),d=a.n(s),c=a(88),m={tag:c.tagPropType,inverse:p.a.bool,color:p.a.string,body:p.a.bool,outline:p.a.bool,className:p.a.string,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.object,p.a.string,p.a.func])},g=function(t){var e=t.className,a=t.cssModule,l=t.color,r=t.body,p=t.inverse,s=t.outline,m=t.tag,g=t.innerRef,x=Object(o.a)(t,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(c.mapToCssModules)(d()(e,"card",!!p&&"text-white",!!r&&"card-body",!!l&&(s?"border":"bg")+"-"+l),a);return i.a.createElement(m,Object(n.a)({},x,{className:b,ref:g}))};g.propTypes=m,g.defaultProps={tag:"div"},e.a=g},102:function(t,e,a){"use strict";var n=a(11),o=a(15),l=a(6),i=a.n(l),r=a(41),p=a.n(r),s=a(87),d=a.n(s),c=a(88),m={tag:c.tagPropType,listTag:c.tagPropType,className:p.a.string,listClassName:p.a.string,cssModule:p.a.object,children:p.a.node,"aria-label":p.a.string},g=function(t){var e=t.className,a=t.listClassName,l=t.cssModule,r=t.children,p=t.tag,s=t.listTag,m=t["aria-label"],g=Object(o.a)(t,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),x=Object(c.mapToCssModules)(d()(e),l),b=Object(c.mapToCssModules)(d()("breadcrumb",a),l);return i.a.createElement(p,Object(n.a)({},g,{className:x,"aria-label":m}),i.a.createElement(s,{className:b},r))};g.propTypes=m,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},e.a=g},103:function(t,e,a){"use strict";var n=a(11),o=a(15),l=a(6),i=a.n(l),r=a(41),p=a.n(r),s=a(87),d=a.n(s),c=a(88),m={tag:c.tagPropType,active:p.a.bool,className:p.a.string,cssModule:p.a.object},g=function(t){var e=t.className,a=t.cssModule,l=t.active,r=t.tag,p=Object(o.a)(t,["className","cssModule","active","tag"]),s=Object(c.mapToCssModules)(d()(e,!!l&&"active","breadcrumb-item"),a);return i.a.createElement(r,Object(n.a)({},p,{className:s,"aria-current":l?"page":void 0}))};g.propTypes=m,g.defaultProps={tag:"li"},e.a=g},105:function(t,e,a){"use strict";var n=a(11),o=a(15),l=a(6),i=a.n(l),r=a(41),p=a.n(r),s=a(87),d=a.n(s),c=a(88),m={tag:c.tagPropType,className:p.a.string,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.object,p.a.string,p.a.func])},g=function(t){var e=t.className,a=t.cssModule,l=t.innerRef,r=t.tag,p=Object(o.a)(t,["className","cssModule","innerRef","tag"]),s=Object(c.mapToCssModules)(d()(e,"card-body"),a);return i.a.createElement(r,Object(n.a)({},p,{className:s,ref:l}))};g.propTypes=m,g.defaultProps={tag:"div"},e.a=g},331:function(t,e,a){"use strict";var n=a(11),o=a(15),l=a(6),i=a.n(l),r=a(41),p=a.n(r),s=a(87),d=a.n(s),c=a(88),m={className:p.a.string,cssModule:p.a.object,size:p.a.string,bordered:p.a.bool,borderless:p.a.bool,striped:p.a.bool,dark:p.a.bool,hover:p.a.bool,responsive:p.a.oneOfType([p.a.bool,p.a.string]),tag:c.tagPropType,responsiveTag:c.tagPropType,innerRef:p.a.oneOfType([p.a.func,p.a.string,p.a.object])},g=function(t){var e=t.className,a=t.cssModule,l=t.size,r=t.bordered,p=t.borderless,s=t.striped,m=t.dark,g=t.hover,x=t.responsive,b=t.tag,h=t.responsiveTag,f=t.innerRef,u=Object(o.a)(t,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=Object(c.mapToCssModules)(d()(e,"table",!!l&&"table-"+l,!!r&&"table-bordered",!!p&&"table-borderless",!!s&&"table-striped",!!m&&"table-dark",!!g&&"table-hover"),a),E=i.a.createElement(b,Object(n.a)({},u,{ref:f,className:y}));if(x){var v=Object(c.mapToCssModules)(!0===x?"table-responsive":"table-responsive-"+x,a);return i.a.createElement(h,{className:v},E)}return E};g.propTypes=m,g.defaultProps={tag:"table",responsiveTag:"div"},e.a=g},856:function(t,e,a){"use strict";a.r(e);var n=a(6),o=a.n(n),l=a(231),i=a(101),r=a(105),p=a(331),s=a(96),d=a(95),c=a(90);e.default=function(t){var e=t.match;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement(d.a,{xxs:"12"},o.a.createElement(s.a,{heading:"menu.invoice",match:e}),o.a.createElement(d.b,{className:"mb-5"}))),o.a.createElement(l.a,null,o.a.createElement(d.a,{xxs:"12"},o.a.createElement(i.a,{className:"mb-5"},o.a.createElement(r.a,null,o.a.createElement(c.a,{id:"pages.invoice-info"}))))),o.a.createElement(l.a,null,o.a.createElement(d.a,{xxs:"12"},o.a.createElement("h3",{className:"mb-4"},o.a.createElement(c.a,{id:"pages.react-version"})))),o.a.createElement(l.a,{className:"invoice-react"},o.a.createElement(d.a,{xxs:"12",className:"mb-4"},o.a.createElement(i.a,{className:"mb-5 invoice-contents"},o.a.createElement(r.a,{className:"d-flex flex-column justify-content-between"},o.a.createElement("div",{className:"d-flex flex-column"},o.a.createElement("div",{className:"d-flex flex-row justify-content-between pt-2 pb-2"},o.a.createElement("div",{className:"d-flex align-self-center"},o.a.createElement("img",{src:"https://coloredstrategies.com/mailing/gogo.png",alt:"Logo"})),o.a.createElement("div",{className:"d-flex w-30 text-right align-self-center"},o.a.createElement("p",{className:"text-small text-semi-muted mb-0"},"ColoredStrategies Inc 35 Little Russell St. Bloomsburg London,UK",o.a.createElement("br",null),"784 451 12 47"))),o.a.createElement("div",{className:"border-bottom pt-4 mb-5"}),o.a.createElement("div",{className:"d-flex flex-row justify-content-between mb-5"},o.a.createElement("div",{className:"d-flex flex-column w-70 mr-2 p-4 text-semi-muted bg-semi-muted"},o.a.createElement("p",{className:"mb-0"},"Latashia Nagy"),o.a.createElement("p",{className:"mb-0"},"100-148 Warwick Trfy, Kansas City, USA")),o.a.createElement("div",{className:"d-flex w-30 flex-column text-right p-4 text-semi-muted bg-semi-muted"},o.a.createElement("p",{className:"mb-0"},"Invoice #: 741"),o.a.createElement("p",{className:"mb-0"},"02.02.2019"))),o.a.createElement(p.a,{borderless:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"text-muted text-extra-small mb-2"},"ITEM NAME"),o.a.createElement("th",{className:"text-muted text-extra-small mb-2"},"COUNT"),o.a.createElement("th",{className:"text-right text-muted text-extra-small mb-2"},"PRICE"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Marble Cake"),o.a.createElement("td",null,"3 pcs"),o.a.createElement("td",{className:"text-right"},"$ 14.82")),o.a.createElement("tr",null,o.a.createElement("td",null,"Chocolate Cake"),o.a.createElement("td",null,"2 pcs"),o.a.createElement("td",{className:"text-right"},"$ 8.97")),o.a.createElement("tr",null,o.a.createElement("td",null,"Fat Rascal"),o.a.createElement("td",null,"2 pcs"),o.a.createElement("td",{className:"text-right"},"$ 18.24")),o.a.createElement("tr",null,o.a.createElement("td",null,"Cremeschnitte"),o.a.createElement("td",null,"2 pcs"),o.a.createElement("td",{className:"text-right"},"$ 4.24")),o.a.createElement("tr",null,o.a.createElement("td",null,"Cheesecake"),o.a.createElement("td",null,"3 pcs"),o.a.createElement("td",{className:"text-right"},"$ 6.27")),o.a.createElement("tr",null,o.a.createElement("td",null,"Magdalena"),o.a.createElement("td",null,"2 pcs"),o.a.createElement("td",{className:"text-right"},"$ 10.97")),o.a.createElement("tr",null,o.a.createElement("td",null,"Genoise"),o.a.createElement("td",null,"2 pcs"),o.a.createElement("td",{className:"text-right"},"$ 21.24"))))),o.a.createElement("div",{className:"d-flex flex-column"},o.a.createElement("div",{className:"border-bottom pt-3 mb-5"}),o.a.createElement(p.a,{borderless:!0,className:"d-flex justify-content-end"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"text-semi-muted"},"Subtotal :"),o.a.createElement("td",{className:"text-right"},"$ 61.82")),o.a.createElement("tr",null,o.a.createElement("td",{className:"text-semi-muted"},"Tax :"),o.a.createElement("td",{className:"text-right"},"$ 61.82")),o.a.createElement("tr",null,o.a.createElement("td",{className:"text-semi-muted"},"Shipping :"),o.a.createElement("td",{className:"text-right"},"$ 3.21")),o.a.createElement("tr",{className:"font-weight-bold"},o.a.createElement("td",{className:"text-semi-muted"},"Total :"),o.a.createElement("td",{className:"text-right"},"$ 68.14")))),o.a.createElement("div",{className:"border-bottom pt-3 mb-5"}),o.a.createElement("p",{className:"text-muted text-small text-center"},"Invoice was created on a computer and is valid without the signature and seal."," ")))))),o.a.createElement(l.a,null,o.a.createElement(d.a,{xxs:"12"},o.a.createElement("h3",{className:"mb-4"},o.a.createElement(c.a,{id:"pages.inline-version"})))),o.a.createElement(l.a,{className:"invoice"},o.a.createElement(d.a,{xxs:"12",className:"mb-4"},o.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:'<div className="invoice-contents" style="background-color:#ffffff; height:1200px; max-width:830px; font-family: Helvetica,Arial,sans-serif !important; position: relative;">\n                                <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px; padding-top: 20px;"\n                                    heigth="auto">\n        \n                                    <tbody>\n                                        <tr>\n                                            <td align="left" valign="center" style="padding-bottom:35px; padding-top:15px; border-top:0;width:100% !important;">\n                                                <img src="https://coloredstrategies.com/mailing/gogo.png" />\n                                            </td>\n                                            <td align="right" valign="center" style="padding-bottom:20px;border-top:0;width:100% !important;">\n                                                <p style="color: #8f8f8f; font-weight: normal; line-height: 1.2; font-size: 12px; white-space: nowrap; ">\n                                                    ColoredStrategies Inc<br> 35 Little Russell St. Bloomsburg London,UK<br>784 451 12 47\n                                                </p>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td colspan="2" style="padding-top:30px; border-top:1px solid #f1f0f0">\n                                                <table style="width: 100%;">\n                                                    <tbody>\n                                                        <tr>\n                                                            <td style="vertical-align:middle; border-radius: 3px; padding:30px; background-color: #f9f9f9; border-right: 5px solid white;">\n                                                                <p style="color:#303030; font-size: 14px;  line-height: 1.6; margin:0; padding:0;">\n                                                                    Latashia Nagy<br>100-148 Warwick Trfy, Kansas City, USA\n                                                                </p>\n                                                            </td>\n        \n                                                            <td style="text-align: right; padding-top:0px; padding-bottom:0; vertical-align:middle; padding:30px; background-color: #f9f9f9; border-radius: 3px; border-left: 5px solid white;">\n                                                                <p style="color:#8f8f8f; font-size: 14px; padding: 0; line-height: 1.6; margin:0; ">\n                                                                    Invoice #: 741<br>\n                                                                    02.02.2019\n                                                                </p>\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                                <table style="width: 100%; margin-top:40px;">\n                                                    <thead>\n                                                        <tr>\n                                                            <th style="text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;">\n                                                                ITEM NAME\n                                                            </th>\n                                                            <th style="text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;">\n                                                                COUNT\n                                                            </th>\n                                                            <th style="text-align:right; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;">\n                                                                PRICE\n                                                            </th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Marble\n                                                                    Cake</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    14.82</p>\n                                                            </td>\n                                                        </tr>\n\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Chocolate\n                                                                    Cake</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    8.97</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Fat\n                                                                    Rascal</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    18.24</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Cremeschnitte</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    4.24</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Cheesecake</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    6.27</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Magdalena</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    10.97</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Genoise</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    21.24</p>\n                                                            </td>\n                                                        </tr>\n                                                        \n                                                    </tbody>\n                                                </table>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n        \n                                <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="position:absolute; bottom:0; width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px; padding-top: 20px;"\n                                    heigth="auto">\n                                    <tr>\n                                        <td colspan="3" style="border-top:1px solid #f1f0f0">&nbsp;</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" style="width: 100%;padding-top:10px; padding-bottom:10px;">\n                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">\n                                                Subtotal : </p>\n                                        </td>\n                                        <td style="padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;">\n                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$\n                                                61.82</p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" style="width: 100%;padding-top:10px; padding-bottom:10px;">\n                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">\n                                                Tax : </p>\n                                        </td>\n                                        <td style="padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;">\n                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$\n                                                2.18</p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" style="width: 100%;padding-top:10px; padding-bottom:10px;">\n                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">\n                                                Shipping : </p>\n                                        </td>\n                                        <td style="padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;">\n                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$\n                                                3.21</p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" style=" width: 100%; padding-bottom:15px; padding-top:10px;">\n                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">\n                                                <strong>Total : </strong></p>\n                                        </td>\n                                        <td style="padding-top:0px; text-align: right; padding-bottom:15px; padding-top:10px;">\n                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px"><strong>$\n                                                    68.14</strong></p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="3" style="border-top:1px solid #f1f0f0">&nbsp;</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="3" style="text-align:center;">\n                                            <p style="color: #909090; font-size:11px; text-align:center;">Invoice was created\n                                                on a computer and\n                                                is valid without the signature and seal. </p>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </div>\n                    \n                    '}}))))}},96:function(t,e,a){"use strict";var n=a(6),o=a.n(n),l=a(102),i=a(103),r=a(92),p=a(90),s=function(t){return o.a.createElement(p.a,{id:"menu.".concat(t)})},d=function(t,e,a){return 0===a?"":t.split(e)[0]+e},c=function(t){var e=t.match.path.substr(1),a=e.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(t){return-1===t.indexOf(":")}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(t,n){return o.a.createElement(i.a,{key:n,active:a.length===n+1},a.length!==n+1?o.a.createElement(r.b,{to:"/".concat(d(e,t,n))},s(t)):s(t))}))))};e.a=function(t){var e=t.heading,a=t.match;return o.a.createElement(o.a.Fragment,null,e&&o.a.createElement("h1",null,o.a.createElement(p.a,{id:e})),o.a.createElement(c,{match:a}))}}}]);
//# sourceMappingURL=miscellaneous-invoice.b3d0bfcd.chunk.js.map